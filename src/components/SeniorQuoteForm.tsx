import { useRef, useState } from "react";

// Mirrors QuoteForm: success only when at least one critical destination (Supabase insert or receive-lead)
// confirms; the Netlify Forms post and the notification e-mail are best-effort backups.
const CRITICAL_TIMEOUT_MS = 12000;
const withTimeout = <T,>(p: Promise<T>, ms: number): Promise<T> =>
  new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error("timeout")), ms);
    p.then((v) => { clearTimeout(t); resolve(v); }, (e) => { clearTimeout(t); reject(e); });
  });
import { CheckCircle2, Phone } from "lucide-react";
import { toast } from "sonner";
import { trackQuoteFormStart, trackQuoteFormSubmit } from "@/lib/analytics";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

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
  const formStarted = useRef(false);
  const submittingRef = useRef(false);

  const handleFormStart = () => {
    if (formStarted.current) return;
    formStarted.current = true;
    trackQuoteFormStart("Senior Home Cleaning", window.location.pathname);
  };

  const set = (k: keyof typeof data, v: string) => setData((p) => ({ ...p, [k]: v }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittingRef.current) return;
    submittingRef.current = true;
    setSubmitting(true);
    const service = "Senior Home Cleaning";
    const message = `Senior home cleaning lead · City: ${data.city}`;
    const snapshot = { ...data };
    const encode = (d: Record<string, string>) =>
      Object.keys(d).map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(d[k])}`).join("&");

    // Best-effort backups (never decide success): Netlify Forms + notification e-mail.
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "quote", name: snapshot.name, phone: snapshot.phone, address: snapshot.city, service, message }),
    }).catch(() => { /* non-blocking */ });
    fetch("/api/send-quote-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: snapshot.name, phone: snapshot.phone, address: snapshot.city, service, message }),
    }).catch(() => { /* non-blocking */ });

    // Critical destinations: (1) Supabase insert (quote_requests has no address column → city goes to zip/message).
    const supabaseCritical = withTimeout(
      (async () => {
        const { supabase } = await import("@/integrations/supabase/client");
        const { error } = await supabase.from("quote_requests").insert({
          name: snapshot.name,
          phone: snapshot.phone,
          email: "",
          zip: snapshot.city,
          service,
          message,
        });
        if (error) throw error;
        return true;
      })(),
      CRITICAL_TIMEOUT_MS,
    );
    // (2) receive-lead scheduling app — confirmed only when response.ok.
    const receiveLeadCritical = withTimeout(
      (async () => {
        const controller = new AbortController();
        const abortTimer = setTimeout(() => controller.abort(), CRITICAL_TIMEOUT_MS);
        try {
          const res = await fetch("https://jzxhejqokcjyxxklnnza.supabase.co/functions/v1/receive-lead", {
            method: "POST",
            headers: { "Content-Type": "application/json", "x-webhook-secret": "ccc-lead-webhook-2026" },
            signal: controller.signal,
            body: JSON.stringify({ name: snapshot.name, phone: snapshot.phone, address: snapshot.city, service, message }),
          });
          if (!res.ok) throw new Error(`receive-lead ${res.status}`);
          return true;
        } finally {
          clearTimeout(abortTimer);
        }
      })(),
      CRITICAL_TIMEOUT_MS,
    );

    try {
      const settled = await Promise.allSettled([supabaseCritical, receiveLeadCritical]);
      const confirmed = settled.some((r) => r.status === "fulfilled" && r.value === true);
      if (confirmed) {
        try {
          trackQuoteFormSubmit(service, window.location.pathname);
        } catch {
          // Analytics must never invalidate a confirmed submission.
        }
        setFirstName(snapshot.name.split(" ")[0]);
        setData({ name: "", phone: "", city: "" });
        setSubmitted(true);
      } else {
        // Both critical destinations failed or timed out — keep the data, no false success.
        toast.error("We couldn't confirm your request. Please try again or call (240) 704-2551.");
      }
    } finally {
      submittingRef.current = false;
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-8 text-center">
        <CheckCircle2 className="h-14 w-14 text-accent mx-auto mb-4" aria-hidden="true" />
        <p className="font-heading text-2xl font-bold text-foreground mb-2">Thank you{firstName ? `, ${firstName}` : ""}!</p>
        <p className="text-lg text-gray-700 leading-relaxed mb-5">
          Your request has been submitted. For immediate assistance, call us now.
        </p>
        <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 bg-primary text-white font-bold text-xl px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors">
          <Phone className="h-6 w-6" /> {PHONE}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onFocusCapture={handleFormStart} className="rounded-2xl border-2 border-border bg-card p-6 md:p-8 space-y-5" aria-label="Request a free senior cleaning quote">
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
