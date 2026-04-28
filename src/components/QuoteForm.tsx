import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp, CheckCircle, MessageCircle, Clock, Phone } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { trackQuoteFormSubmit } from "@/lib/analytics";

interface QuoteFormProps {
  submitLabel?: string;
  defaultService?: string;
}

const QuoteForm = ({ submitLabel = "Get My Free Quote →", defaultService = "" }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    service: defaultService,
    bedrooms: "",
    bathrooms: "",
    frequency: "",
    date: "",
    message: "",
    smsConsent: false,
    emailConsent: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Save to database (non-blocking)
      supabase.from("quote_requests").insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        zip: formData.zip,
        service: formData.service,
        bedrooms: formData.bedrooms || null,
        bathrooms: formData.bathrooms || null,
        frequency: formData.frequency || null,
        preferred_date: formData.date || null,
        message: formData.message || null,
        sms_consent: formData.smsConsent,
        email_consent: formData.emailConsent,
      }).then(({ error }) => { if (error) console.error("DB error:", error); });

      // Submit via Netlify Forms
      const encode = (data: Record<string, string>) =>
        Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join("&");

      const netlifyRes = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "quote",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zip: formData.zip,
          service: formData.service,
          bedrooms: formData.bedrooms || "",
          bathrooms: formData.bathrooms || "",
          frequency: formData.frequency || "",
          preferred_date: formData.date || "",
          message: formData.message || "",
        }),
      });

      if (!netlifyRes.ok) throw new Error("Failed to submit form");

      trackQuoteFormSubmit(formData.service);
      if (typeof gtag !== "undefined") {
        gtag('event', 'conversion', {
          'send_to': 'AW-16450100951/quote_form_submit',
          'value': 50.0,
          'currency': 'USD'
        });
      }
      setSubmittedName(formData.name.split(" ")[0]);
      setFormData({ name: "", phone: "", email: "", zip: "", service: "", bedrooms: "", bathrooms: "", frequency: "", date: "", message: "", smsConsent: false, emailConsent: false });
      setShowDetails(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field: string, value: string) =>
    setFormData((p) => ({ ...p, [field]: value }));

  if (submitted) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true });
    return (
      <div className="flex flex-col items-center gap-6 py-6 px-2 animate-fade-up">
        {/* Phone mockup */}
        <div className="w-full max-w-sm bg-[#F2F2F7] rounded-3xl shadow-2xl overflow-hidden border border-white/60">
          {/* Status bar */}
          <div className="bg-[#1B3A2D] px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">CC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Capital Clean Care</p>
                <p className="text-white/60 text-xs mt-0.5">Business</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/70 text-xs">Now</span>
            </div>
          </div>

          {/* Messages area */}
          <div className="bg-[#F2F2F7] px-4 py-5 space-y-3 min-h-[220px]">
            <p className="text-center text-xs text-gray-400 mb-4">Today {timeStr}</p>

            {/* Incoming SMS bubble */}
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mb-0.5">
                <span className="text-white text-[10px] font-bold">CC</span>
              </div>
              <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  Hi <strong>{submittedName}</strong>! 🏠 Thank you for trusting Capital Clean Care.
                </p>
              </div>
            </div>

            <div className="flex items-end gap-2">
              <div className="w-7 h-7 shrink-0" />
              <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  We received your quote request and our team will contact you <strong>within a few hours</strong> with a personalized estimate. ✨
                </p>
              </div>
            </div>

            <div className="flex items-end gap-2">
              <div className="w-7 h-7 shrink-0" />
              <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  We look forward to making your home spotless! 💚
                </p>
                <p className="text-[11px] text-gray-400 mt-1.5 font-medium">— Capital Clean Care Team</p>
              </div>
            </div>

            {/* Read receipt */}
            <div className="flex justify-end pr-1">
              <div className="flex items-center gap-1 text-[11px] text-gray-400">
                <CheckCircle className="h-3 w-3 text-accent" />
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Button asChild size="sm" variant="outline" className="flex-1 rounded-full gap-2">
            <a href="tel:+12407042551">
              <Phone className="h-3.5 w-3.5" /> Call Us Now
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="flex-1 rounded-full text-muted-foreground gap-2"
            onClick={() => setSubmitted(false)}
          >
            <MessageCircle className="h-3.5 w-3.5" /> Submit Another Request
          </Button>
        </div>

        {/* Expectation note */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-accent/5 border border-accent/15 rounded-full px-4 py-2">
          <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
          <span>We typically respond within <strong className="text-foreground">2–4 hours</strong> during business hours</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* ── Essential fields (always visible) ── */}
      <div className="space-y-2">
        <Label>Service Type *</Label>
        <Select required value={formData.service} onValueChange={(v) => update("service", v)}>
          <SelectTrigger><SelectValue placeholder="What type of cleaning do you need?" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard Cleaning</SelectItem>
            <SelectItem value="deep">Deep Cleaning</SelectItem>
            <SelectItem value="recurring">Recurring Cleaning (Weekly / Bi-Weekly)</SelectItem>
            <SelectItem value="move">Move In / Move Out Cleaning</SelectItem>
            <SelectItem value="post-construction">Post-Construction Cleaning</SelectItem>
            <SelectItem value="airbnb">Airbnb &amp; Short-Term Rental Cleaning</SelectItem>
            <SelectItem value="office">Office &amp; Commercial Cleaning</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" required value={formData.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" type="tel" required value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(301) 555-0123" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip">Zip Code *</Label>
          <Input id="zip" required value={formData.zip} onChange={(e) => update("zip", e.target.value)} placeholder="20850" />
        </div>
      </div>

      {/* ── Optional details (collapsible) ── */}
      <button
        type="button"
        onClick={() => setShowDetails((v) => !v)}
        className="flex items-center gap-2 text-sm text-accent font-medium hover:underline"
      >
        {showDetails ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        {showDetails ? "Hide" : "Add"} home details (optional — helps us give a more accurate quote)
      </button>

      {showDetails && (
        <div className="space-y-4 rounded-lg border border-border bg-secondary/40 p-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Bedrooms</Label>
              <Select value={formData.bedrooms} onValueChange={(v) => update("bedrooms", v)}>
                <SelectTrigger><SelectValue placeholder="Beds" /></SelectTrigger>
                <SelectContent>
                  {["1", "2", "3", "4", "5+"].map((n) => (
                    <SelectItem key={n} value={n}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Bathrooms</Label>
              <Select value={formData.bathrooms} onValueChange={(v) => update("bathrooms", v)}>
                <SelectTrigger><SelectValue placeholder="Baths" /></SelectTrigger>
                <SelectContent>
                  {["1", "1.5", "2", "2.5", "3", "4+"].map((n) => (
                    <SelectItem key={n} value={n}>{n}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Frequency</Label>
              <Select value={formData.frequency} onValueChange={(v) => update("frequency", v)}>
                <SelectTrigger><SelectValue placeholder="How often?" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="once">One-Time</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="date">Preferred Date</Label>
            <Input id="date" type="date" value={formData.date} onChange={(e) => update("date", e.target.value)} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Special Requests</Label>
            <Textarea id="message" value={formData.message} onChange={(e) => update("message", e.target.value)} placeholder="Access instructions, areas to focus on, pets, allergies…" rows={3} />
          </div>

          {/* Consent checkboxes */}
          <div className="space-y-3 rounded-lg border border-border bg-background p-4">
            <p className="text-sm font-medium">Communication Preferences</p>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.smsConsent}
                onChange={(e) => setFormData((p) => ({ ...p, smsConsent: e.target.checked }))}
                className="mt-0.5 h-4 w-4 rounded border-border accent-accent"
              />
              <span className="text-sm text-muted-foreground">
                I agree to receive SMS updates about my cleaning service. Message & data rates may apply. Reply STOP to opt out.
              </span>
            </label>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.emailConsent}
                onChange={(e) => setFormData((p) => ({ ...p, emailConsent: e.target.checked }))}
                className="mt-0.5 h-4 w-4 rounded border-border accent-accent"
              />
              <span className="text-sm text-muted-foreground">
                I'd like to receive email promotions and cleaning tips. Unsubscribe anytime.
              </span>
            </label>
          </div>
        </div>
      )}

      {/* Social proof above submit */}
      <div className="flex items-center gap-2 py-2 px-3 bg-accent/5 rounded-lg border border-accent/10">
        <div className="flex gap-0.5 shrink-0">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">5.0 stars</span> · Trusted by homeowners across MD, DC & VA
        </p>
      </div>

      <Button type="submit" variant="cta" size="lg" className="w-full text-base" disabled={submitting}>
        {submitting ? "Sending…" : submitLabel}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        No commitment · 15% OFF first clean · Response within hours
      </p>
    </form>
  );
};

export default QuoteForm;
