import { useState } from "react";
import { CheckCircle2, Phone } from "lucide-react";
import { toast } from "sonner";
import { trackQuoteFormSubmit } from "@/lib/analytics";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

declare const gtag: (...args: unknown[]) => void;

/**
 * Short 3-field lead form (name · phone · city) for the Senior Home Cleaning page.
 * Deliberately minimal for low-friction, senior-friendly conversion — but it feeds the
 * SAME proven lead pipeline as the main QuoteForm (Supabase insert + Netlify Forms
 * form-name="quote" + receive-lead edge function + Resend email), tagged service
 * "Senior Home Cleaning" and the city passed through as the address.
 */
const SeniorQuoteForm = () => {
  const [data, setData] = useState({ name: "", phone: "", city: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState("");

  const set = (k: keyof typeof data, v: string) => setData((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const service = "Senior Home Cleaning";
    const message = `Senior home cleaning lead · City: ${data.city}`;
    try {
      // 1) Database (loaded on demand)
      import("@/integrations/supabase/client").then(({ supabase }) =>
        supabase.from("quote_requests").insert({
          name: data.name,
          phone: data.phone,
          address: data.city,
          service,
          message,
        }).then(({ error }) => { if (error) console.error("DB error:", error); })
      ).catch((err) => console.error("Supabase load error:", err));

      // 2) Netlify Forms (reuses the detected "quote" form)
      const encode = (d: Record<string, string>) =>
        Object.keys(d).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(d[k])}`).join("&");
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "quote", name: data.name, phone: data.phone, address: data.city, service, message }),
      }).catch(console.error);

      // 3) Forward to the scheduling app (server-side function holds the secret)
      fetch("/api/forward-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, phone: data.phone, address: data.city, service, message }),
      }).catch(() => { /* non-blocking */ });

      // 4) Notification email
      fetch("/api/send-quote-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.name, phone: data.phone, address: data.city, service, message }),
      }).catch((err) => console.error("Email notification failed (non-critical):", err));

      trackQuoteFormSubmit(service);
      if (typeof gtag !== "undefined") {
        gtag("event", "conversion", { send_to: "AW-16450100951/quote_form_submit", value: 50.0, currency: "USD" });
      }
      setFirstName(data.name.split(" ")[0]);
      setData({ name: "", phone: "", city: "" });
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-accent mx-auto mb-4" aria-hidden="true" />
        <p className="font-heading text-2xl font-bold text-foreground mb-2">Thank you{firstName ? `, ${firstName}` : ""}!</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-5">
          We've received your request and will call you shortly with a free, no-obligation quote.
          Prefer to talk now? We're here.
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-xl px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors">
          <Phone className="h-6 w-6" /> {PHONE}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border-2 border-border bg-card p-6 md:p-8 space-y-5" aria-label="Request a free senior cleaning quote">
      <div>
        <label htmlFor="senior-name" className="block text-lg font-semibold text-foreground mb-2">Your name</label>
        <input
          id="senior-name" name="name" type="text" required autoComplete="name"
          value={data.name} onChange={(e) => set("name", e.target.value)}
          placeholder="Jane Smith"
          className="w-full h-14 rounded-xl border-2 border-border bg-background px-4 text-lg text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="senior-phone" className="block text-lg font-semibold text-foreground mb-2">Phone number</label>
        <input
          id="senior-phone" name="phone" type="tel" required autoComplete="tel"
          value={data.phone} onChange={(e) => set("phone", e.target.value)}
          placeholder="(240) 000-0000"
          className="w-full h-14 rounded-xl border-2 border-border bg-background px-4 text-lg text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <div>
        <label htmlFor="senior-city" className="block text-lg font-semibold text-foreground mb-2">City</label>
        <input
          id="senior-city" name="city" type="text" required autoComplete="address-level2"
          value={data.city} onChange={(e) => set("city", e.target.value)}
          placeholder="Silver Spring, Rockville, Bethesda…"
          className="w-full h-14 rounded-xl border-2 border-border bg-background px-4 text-lg text-foreground placeholder:text-gray-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
        />
      </div>
      <button
        type="submit" disabled={submitting}
        className="w-full inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-bold text-xl px-8 py-5 rounded-xl shadow-lg shadow-accent/25 transition-colors disabled:opacity-60"
      >
        {submitting ? "Sending…" : "Get My Free Quote"}
      </button>
      <p className="text-base text-gray-600 text-center leading-relaxed">
        No obligation. We'll call you back with a clear, flat-rate price — usually within a few hours.
      </p>
    </form>
  );
};

export default SeniorQuoteForm;
