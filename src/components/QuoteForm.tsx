import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp } from "lucide-react";
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Save to database
      const { error: dbError } = await supabase.from("quote_requests").insert({
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
      });

      if (dbError) {
        console.error("DB error:", dbError);
        throw new Error("Failed to save request");
      }

      // Send email via FormSubmit (free, no API key needed)
      const formPayload = {
        _subject: `New Quote Request from ${formData.name}`,
        _template: "table",
        _captcha: "false",
        Name: formData.name,
        Phone: formData.phone,
        Email: formData.email,
        "Zip Code": formData.zip,
        Service: formData.service,
        Bedrooms: formData.bedrooms || "N/A",
        Bathrooms: formData.bathrooms || "N/A",
        Frequency: formData.frequency || "N/A",
        "Preferred Date": formData.date || "N/A",
        Message: formData.message || "N/A",
        "SMS Consent": formData.smsConsent ? "Yes" : "No",
        "Email Consent": formData.emailConsent ? "Yes" : "No",
      };

      await fetch("https://formsubmit.co/ajax/capitalcleancare@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formPayload),
      });

      trackQuoteFormSubmit(formData.service);
      if (typeof gtag !== "undefined") {
        gtag('event', 'conversion', {
          'send_to': 'AW-16450100951/quote_form_submit',
          'value': 50.0,
          'currency': 'USD'
        });
      }
      toast.success("Thank you! We'll get back to you within 24 hours.");
      setFormData({ name: "", phone: "", email: "", zip: "", service: "", bedrooms: "", bathrooms: "", frequency: "", date: "", message: "", smsConsent: false, emailConsent: false });
      setShowDetails(false);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const update = (field: string, value: string) =>
    setFormData((p) => ({ ...p, [field]: value }));

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

      <Button type="submit" variant="cta" size="lg" className="w-full text-base" disabled={submitting}>
        {submitting ? "Sending…" : submitLabel}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        No commitment required. We typically respond within a few hours.
      </p>
    </form>
  );
};

export default QuoteForm;
