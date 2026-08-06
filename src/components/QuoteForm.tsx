import { useState } from "react";
import { GOOGLE_LISTING_URL } from "@/data/realReviews";
import { BUSINESS_INFO } from "@/data/business-info";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { CheckCircle, MessageCircle, Clock, Phone, Star, BedDouble, Bath, Lock, Home } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { trackQuoteFormSubmit } from "@/lib/analytics";
import quotePhoto from "@/assets/luana-cleaning.webp";

interface QuoteFormProps {
  submitLabel?: string;
  defaultService?: string;
  showPhoto?: boolean;
  /** Mobile conversion: hide the photo, heading, and trust-badge row on mobile so the
   *  fields land in view when a CTA scrolls to the form. Desktop is unchanged. Opt-in —
   *  NOT passed on the /services/house-cleaning ads landing, which stays as-is. */
  compact?: boolean;
}

/* Brand CTA gradient (blue → teal) + accent-tinted glow */
const CTA_GRADIENT = "linear-gradient(135deg,hsl(214 70% 30%),hsl(195 85% 45%))";

/* Layered 3D card treatment copied from the ads landing (only the glow tint varies per card). */
const card3dStyle = (glow: string): React.CSSProperties => ({
  background: "linear-gradient(145deg,#ffffff,#f1f4f9)",
  boxShadow: `0 1px 1px rgba(255,255,255,0.9) inset, 0 -1px 2px rgba(0,0,0,0.04) inset, 0 6px 14px ${glow}, 0 2px 4px rgba(15,30,54,0.06)`,
  border: "1px solid rgba(255,255,255,0.7)",
});

const card3dClass = "group relative flex items-center gap-2.5 rounded-2xl px-2 py-2 sm:pl-2.5 sm:pr-4 sm:py-2.5 transition-all duration-300 hover:-translate-y-1";
const glossOverlay = (
  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.55),transparent)" }} />
);

const QuoteForm = ({ submitLabel = "GET MY FREE QUOTE →", defaultService = "", showPhoto = true, compact = false }: QuoteFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    zip: "",
    sqft: "",
    service: defaultService,
    bedrooms: "3",
    bathrooms: "2",
    frequency: "",
    date: "",
    message: "",
    smsConsent: false,
    emailConsent: false,
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Save to database (non-blocking; Supabase is loaded on demand so its 169KB
      // bundle stays out of the initial page load and only loads on form submit).
      import("@/integrations/supabase/client").then(({ supabase }) =>
        supabase.from("quote_requests").insert({
          // NOTE: the quote_requests table has no `address`/`sqft` columns — both are folded
          // into `message` below. Adding them here fails the whole insert with PGRST204.
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zip: formData.zip,
          service: formData.service,
          bedrooms: formData.bedrooms || null,
          bathrooms: formData.bathrooms || null,
          frequency: formData.frequency || null,
          preferred_date: formData.date || null,
          message: [`Address: ${formData.address}`, formData.sqft ? `Home size: ${formData.sqft} sq ft` : "", formData.message || ""].filter(Boolean).join(" · ") || null,
          sms_consent: formData.smsConsent,
          email_consent: formData.emailConsent,
        }).then(({ error }) => { if (error) console.error("DB error:", error); })
      ).catch((err) => console.error("Supabase load error:", err));

      // Submit via Netlify Forms (backup record)
      const encode = (data: Record<string, string>) =>
        Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join("&");

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "quote",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zip: formData.zip,
          address: formData.address,
          sqft: formData.sqft,
          service: formData.service,
          bedrooms: formData.bedrooms || "",
          bathrooms: formData.bathrooms || "",
          frequency: formData.frequency || "",
          preferred_date: formData.date || "",
          message: formData.message || "",
        }),
      }).catch(console.error);

      // Forward lead to Capital Clean Care scheduling app
      fetch('https://jzxhejqokcjyxxklnnza.supabase.co/functions/v1/receive-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-secret': 'ccc-lead-webhook-2026',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          zip: formData.zip,
          sqft: formData.sqft,
          service: formData.service,
          bedrooms: formData.bedrooms,
          bathrooms: formData.bathrooms,
          frequency: formData.frequency,
          date: formData.date,
          message: formData.message,
          smsConsent: formData.smsConsent,
          emailConsent: formData.emailConsent,
        }),
      }).catch(() => { /* non-blocking */ });

      // Send formatted HTML email via Netlify Function (non-blocking — form succeeds regardless)
      fetch("/api/send-quote-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          address: formData.address,
          zip: formData.zip,
          sqft: formData.sqft || null,
          service: formData.service,
          bedrooms: formData.bedrooms || null,
          bathrooms: formData.bathrooms || null,
          frequency: formData.frequency || null,
          preferred_date: formData.date || null,
          message: formData.message || null,
        }),
      }).catch((err) => console.error("Email notification failed (non-critical):", err));

      trackQuoteFormSubmit(formData.service);
      if (typeof gtag !== "undefined") {
        gtag('event', 'conversion', {
          'send_to': 'AW-16450100951/quote_form_submit',
          'value': 50.0,
          'currency': 'USD'
        });
      }
      setSubmittedName(formData.name.split(" ")[0]);
      setFormData({ name: "", phone: "", email: "", address: "", zip: "", sqft: "", service: "", bedrooms: "3", bathrooms: "2", frequency: "", date: "", message: "", smsConsent: false, emailConsent: false });
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

  // Slider positions derived from the stored display strings ("5+" → 5, "4+" → 4)
  const bedNum = Math.min(5, Math.max(1, parseInt(formData.bedrooms, 10) || 1));
  const bathNum = Math.min(4, Math.max(1, parseFloat(formData.bathrooms) || 1));

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
    <div className="space-y-4">
      {/* ── Photo header: real team + offer chips (landing-card structure) ── */}
      {showPhoto && (
        <div className={`relative overflow-hidden rounded-t-2xl rounded-b-lg${compact ? " hidden lg:block" : ""}`}>
          <img
            src={quotePhoto}
            alt="Capital Clean Care professional cleaning a window"
            className="w-full h-36 object-cover object-[center_35%]"
            width={900} height={600}
            loading="lazy" decoding="async"
          />
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-wide text-gray-700">Real Team · Real Results</span>
          </div>
          <div
            className="absolute top-3 right-3 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-lg animate-pulse-soft"
            style={{ background: CTA_GRADIENT, boxShadow: "0 4px 14px hsl(195 85% 45% / 0.5)" }}
          >
            15% OFF
          </div>
        </div>
      )}

      {/* ── Heading ── */}
      <div className={compact ? "hidden lg:block" : undefined}>
        <h3 className="font-heading font-bold text-2xl text-foreground">Get Your Free Quote</h3>
        <p className="text-sm text-muted-foreground mt-0.5">Fast. Easy. No Obligation.</p>
      </div>

      {/* ── 3D trust badge cards (landing style) ── */}
      <div className={`flex flex-wrap items-center justify-center gap-2 sm:gap-3${compact ? " hidden lg:flex" : ""}`} style={{ perspective: "800px" }}>
        {/* Crest — Licensed & Insured */}
        <div className={card3dClass} style={card3dStyle("hsl(195 85% 45% / 0.16)")}>
          {glossOverlay}
          <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(145deg,#ffffff,#eef1f6)", boxShadow: "0 2px 6px rgba(0,0,0,0.10), 0 1px 1px rgba(255,255,255,0.9) inset" }}>
            <svg viewBox="0 0 24 24" className="h-5 w-5 drop-shadow-sm" aria-hidden="true">
              <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" fill="hsl(195 85% 45%)" opacity="0.15" />
              <path d="M12 2l8 3v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V5l8-3z" fill="none" stroke="hsl(195 85% 45%)" strokeWidth="1.6" />
              <path d="M8.5 12l2.4 2.4L15.6 9.6" fill="none" stroke="hsl(195 85% 45%)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="relative leading-tight">
            <span className="block text-[12px] font-extrabold text-gray-800">Licensed &amp; Insured</span>
            <span className="block text-[10px] text-gray-500">Guaranteed</span>
          </span>
        </div>

        {/* Google — 3D card (links to the verified 5.0/45 listing) */}
        <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" aria-label="Read our 5.0-star Google reviews"
          className={card3dClass} style={card3dStyle("rgba(15,30,54,0.10)")}>
          {glossOverlay}
          <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(145deg,#ffffff,#eef1f6)", boxShadow: "0 2px 6px rgba(0,0,0,0.10), 0 1px 1px rgba(255,255,255,0.9) inset" }}>
            <svg className="h-5 w-5 drop-shadow-sm" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </span>
          <span className="relative leading-tight">
            <span className="block text-[12px] font-extrabold text-gray-800">Google</span>
            <span className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />)}
            </span>
            <span className="block text-[10px] text-gray-500">{BUSINESS_INFO.rating.value} · {BUSINESS_INFO.rating.count} reviews</span>
          </span>
        </a>

        {/* Facebook — 3D card */}
        <a href="https://www.facebook.com/capital.clean.care" target="_blank" rel="noopener noreferrer" aria-label="Capital Clean Care on Facebook"
          className={card3dClass} style={card3dStyle("rgba(24,119,242,0.14)")}>
          {glossOverlay}
          <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(145deg,#1877F2,#0E5FD8)", boxShadow: "0 3px 8px rgba(24,119,242,0.40), 0 1px 1px rgba(255,255,255,0.4) inset" }}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </span>
          <span className="relative leading-tight">
            <span className="block text-[12px] font-extrabold text-gray-800">Facebook</span>
            <span className="hidden sm:block text-[10px] text-gray-500">Recommended</span>
          </span>
        </a>

        {/* Nextdoor — 3D card */}
        <div className={card3dClass} style={card3dStyle("rgba(0,179,108,0.16)")} aria-label="Capital Clean Care on Nextdoor">
          {glossOverlay}
          <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
            style={{ background: "linear-gradient(145deg,#00C77A,#00A862)", boxShadow: "0 3px 8px rgba(0,179,108,0.40), 0 1px 1px rgba(255,255,255,0.4) inset" }}>
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
              <path d="M16.5 15.5v-3.2c0-1.6-1-2.6-2.5-2.6-.9 0-1.6.4-2 1v-.8H9.5v5.6H11v-3c0-.8.5-1.3 1.2-1.3.7 0 1.1.5 1.1 1.3v3h2.2zM8.2 9.9c.6 0 1.1-.5 1.1-1.1S8.8 7.7 8.2 7.7s-1.1.5-1.1 1.1.5 1.1 1.1 1.1zm.8 5.6V9.9H7.4v5.6H9z"/>
            </svg>
          </span>
          <span className="relative leading-tight">
            <span className="block text-[12px] font-extrabold text-gray-800">Nextdoor</span>
            <span className="hidden sm:block text-[10px] text-gray-500">Neighbor Fave</span>
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ── Service Type ── */}
        <div>
          <Label className="text-xs font-semibold mb-1 block">Service Type *</Label>
          <Select required value={formData.service} onValueChange={(v) => update("service", v)}>
            <SelectTrigger className="h-11" aria-label="Service Type"><SelectValue placeholder="What type of cleaning do you need?" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="standard">Standard Cleaning</SelectItem>
              <SelectItem value="deep">Deep Cleaning</SelectItem>
              <SelectItem value="kitchen">Kitchen Cleaning</SelectItem>
              <SelectItem value="bathroom">Bathroom Cleaning</SelectItem>
              <SelectItem value="recurring">Recurring Cleaning (Weekly / Bi-Weekly)</SelectItem>
              <SelectItem value="move">Move In / Move Out Cleaning</SelectItem>
              <SelectItem value="post-construction">Post-Construction Cleaning</SelectItem>
              <SelectItem value="airbnb">Airbnb &amp; Short-Term Rental Cleaning</SelectItem>
              <SelectItem value="condo">Condo Cleaning</SelectItem>
              <SelectItem value="maid">Maid Service</SelectItem>
              <SelectItem value="office">Office &amp; Commercial Cleaning</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ── Contact fields (landing order) ── */}
        <div>
          <Label htmlFor="name" className="text-xs font-semibold mb-1 block">Full Name *</Label>
          <Input id="name" required className="h-11" value={formData.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Smith" />
        </div>
        <div>
          <Label htmlFor="phone" className="text-xs font-semibold mb-1 block">Phone Number *</Label>
          <Input id="phone" type="tel" required className="h-11" value={formData.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(240) 000-0000" />
        </div>
        <div>
          <Label htmlFor="email" className="text-xs font-semibold mb-1 block">Email Address *</Label>
          <Input id="email" type="email" required className="h-11" value={formData.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@email.com" />
        </div>
        <div>
          <Label htmlFor="zip" className="text-xs font-semibold mb-1 block">ZIP Code *</Label>
          <Input id="zip" required className="h-11" value={formData.zip} onChange={(e) => update("zip", e.target.value)} placeholder="20850" />
        </div>
        <div>
          <Label htmlFor="address" className="text-xs font-semibold mb-1 block">
            Full Address <span className="text-accent">*</span>
          </Label>
          <Input id="address" required className="h-11" autoComplete="street-address" value={formData.address} onChange={(e) => update("address", e.target.value)} placeholder="123 Main St, Rockville, MD 20850" />
        </div>

        {/* ── "Tell us about your home" box with drag sliders ── */}
        <div className="rounded-xl border border-border bg-secondary/40 p-4 space-y-5">
          <p className="text-sm font-bold text-foreground flex items-center gap-2"><Home className="h-4 w-4 text-accent" /> Tell us about your home</p>

          {/* Bedrooms — drag slider */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground/80"><BedDouble className="h-4 w-4 text-accent" /> Bedrooms</span>
              <span className="text-sm font-extrabold text-white bg-accent rounded-full px-3 py-1 min-w-[3.25rem] text-center tabular-nums">{formData.bedrooms}</span>
            </div>
            <Slider value={[bedNum]} min={1} max={5} step={1} onValueChange={([v]) => update("bedrooms", v >= 5 ? "5+" : String(v))} aria-label="Number of bedrooms" />
            <div className="flex justify-between text-[11px] text-muted-foreground px-0.5">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5+</span>
            </div>
          </div>

          {/* Bathrooms — drag slider */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-foreground/80"><Bath className="h-4 w-4 text-accent" /> Bathrooms</span>
              <span className="text-sm font-extrabold text-white bg-accent rounded-full px-3 py-1 min-w-[3.25rem] text-center tabular-nums">{formData.bathrooms}</span>
            </div>
            <Slider value={[bathNum]} min={1} max={4} step={0.5} onValueChange={([v]) => update("bathrooms", v >= 4 ? "4+" : String(v))} aria-label="Number of bathrooms" />
            <div className="flex justify-between text-[11px] text-muted-foreground px-0.5">
              <span>1</span><span>2</span><span>3</span><span>4+</span>
            </div>
          </div>

          {/* Home size + frequency */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label className="text-xs font-semibold mb-1 block">Home size</Label>
              <Select value={formData.sqft} onValueChange={(v) => update("sqft", v)}>
                <SelectTrigger className="h-11" aria-label="Home size"><SelectValue placeholder="Sq ft" /></SelectTrigger>
                <SelectContent>
                  {["Under 1,000", "1,000–1,500", "1,500–2,000", "2,000–2,500", "2,500–3,000", "3,000+"].map((n) => (
                    <SelectItem key={n} value={n}>{n} sq ft</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="text-xs font-semibold mb-1 block">Frequency</Label>
              <Select value={formData.frequency} onValueChange={(v) => update("frequency", v)}>
                <SelectTrigger className="h-11" aria-label="Frequency"><SelectValue placeholder="How often?" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="once">One-Time</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Preferred date + special requests (compact) */}
          <div>
            <Label htmlFor="date" className="text-xs font-semibold mb-1 block">Preferred Date</Label>
            <Input id="date" type="date" className="h-11" value={formData.date} onChange={(e) => update("date", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="message" className="text-xs font-semibold mb-1 block">Special Requests</Label>
            <Textarea id="message" value={formData.message} onChange={(e) => update("message", e.target.value)} placeholder="Access instructions, areas to focus on, pets, allergies…" rows={2} />
          </div>

          <p className="text-[11px] text-muted-foreground">Drag each slider to set your number of bedrooms and bathrooms — it helps us price your quote accurately.</p>
        </div>

        {/* ── Consent checkboxes (compact) ── */}
        <div className="space-y-2">
          <label className="flex items-start gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.smsConsent}
              onChange={(e) => setFormData((p) => ({ ...p, smsConsent: e.target.checked }))}
              className="mt-0.5 h-4 w-4 rounded border-border accent-accent"
            />
            <span className="text-xs text-muted-foreground">
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
            <span className="text-xs text-muted-foreground">
              I'd like to receive email promotions and cleaning tips. Unsubscribe anytime.
            </span>
          </label>
        </div>

        {/* ── CTA (brand gradient + gentle pulse) ── */}
        <Button
          type="submit"
          disabled={submitting}
          className="w-full h-12 rounded-lg font-bold text-white text-base animate-pulse-soft"
          style={{ background: CTA_GRADIENT, boxShadow: "0 4px 20px hsl(195 85% 45% / 0.35)" }}
        >
          {submitting ? "Sending…" : submitLabel}
        </Button>

        <p className="flex items-center justify-center gap-1.5 text-[11px] text-muted-foreground">
          <Lock className="h-3 w-3" /> Your information is 100% secure and will never be shared.
        </p>
      </form>
    </div>
  );
};

export default QuoteForm;
