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
  lang?: "en" | "es";
}

// ── Translations ────────────────────────────────────────────────────────────

const T = {
  en: {
    serviceLabel: "Service Type *",
    servicePlaceholder: "What type of cleaning do you need?",
    serviceOptions: [
      { value: "standard", label: "Standard Cleaning" },
      { value: "deep", label: "Deep Cleaning" },
      { value: "recurring", label: "Recurring Cleaning (Weekly / Bi-Weekly)" },
      { value: "move", label: "Move In / Move Out Cleaning" },
      { value: "post-construction", label: "Post-Construction Cleaning" },
      { value: "airbnb", label: "Airbnb & Short-Term Rental Cleaning" },
      { value: "office", label: "Office & Commercial Cleaning" },
    ],
    nameLabel: "Full Name *",
    namePlaceholder: "Jane Smith",
    phoneLabel: "Phone *",
    phonePlaceholder: "(301) 555-0123",
    emailLabel: "Email *",
    emailRequired: true,
    emailPlaceholder: "jane@email.com",
    zipLabel: "Zip Code *",
    zipPlaceholder: "20850",
    addDetails: "Add home details (optional — helps us give a more accurate quote)",
    hideDetails: "Hide",
    bedsLabel: "Bedrooms",
    bathsLabel: "Bathrooms",
    freqLabel: "Frequency",
    freqPlaceholder: "How often?",
    freqOptions: [
      { value: "once", label: "One-Time" },
      { value: "weekly", label: "Weekly" },
      { value: "biweekly", label: "Bi-Weekly" },
      { value: "monthly", label: "Monthly" },
    ],
    dateLabel: "Preferred Date",
    messageLabel: "Special Requests",
    messagePlaceholder: "Access instructions, areas to focus on, pets, allergies…",
    commTitle: "Communication Preferences",
    smsLabel: "I agree to receive SMS updates about my cleaning service. Message & data rates may apply. Reply STOP to opt out.",
    emailConsentLabel: "I'd like to receive email promotions and cleaning tips. Unsubscribe anytime.",
    socialProof: "5.0 stars · Trusted by homeowners across MD, DC & VA",
    submitting: "Sending…",
    microcopy: "No commitment · 15% OFF first clean · Response within hours",
    toastError: "Something went wrong. Please try again or call us directly.",
    successGreeting: (name: string) => `Hi ${name}! 🏠 Thank you for trusting Capital Clean Care.`,
    successBody: "We received your quote request and our team will contact you within a few hours with a personalized estimate. ✨",
    successFarewell: "We look forward to making your home spotless! 💚",
    successSignature: "— Capital Clean Care Team",
    callBtn: "Call Us Now",
    anotherBtn: "Submit Another Request",
    responseNote: "We typically respond within 2–4 hours during business hours",
  },
  es: {
    serviceLabel: "Tipo de servicio *",
    servicePlaceholder: "¿Qué tipo de limpieza necesitas?",
    serviceOptions: [
      { value: "standard", label: "Limpieza Estándar" },
      { value: "deep", label: "Limpieza Profunda" },
      { value: "recurring", label: "Limpieza Recurrente (Semanal / Quincenal)" },
      { value: "move", label: "Limpieza de Mudanza (Move In / Move Out)" },
      { value: "post-construction", label: "Limpieza Post-Construcción" },
      { value: "airbnb", label: "Limpieza para Airbnb" },
      { value: "office", label: "Limpieza de Oficinas y Comercial" },
    ],
    nameLabel: "Nombre completo *",
    namePlaceholder: "María García",
    phoneLabel: "Teléfono *",
    phonePlaceholder: "(301) 555-0123",
    emailLabel: "Email (opcional)",
    emailRequired: false,
    emailPlaceholder: "maria@email.com",
    zipLabel: "Código postal *",
    zipPlaceholder: "20902",
    sizeLabel: "Tamaño de casa *",
    sizePlaceholder: "Elige una opción",
    sizeOptions: [
      { value: "apt-1-2", label: "Apartamento 1–2 hab" },
      { value: "house-3", label: "Casa 3 habitaciones" },
      { value: "house-4", label: "Casa 4 habitaciones" },
      { value: "house-5plus", label: "Casa 5+ habitaciones" },
      { value: "other", label: "Otro / No estoy seguro" },
    ],
    timingLabel: "¿Cuándo lo necesitas? (opcional)",
    timingPlaceholder: "Elige una opción",
    timingOptions: [
      { value: "asap", label: "Lo antes posible" },
      { value: "this-week", label: "Esta semana" },
      { value: "two-weeks", label: "En 2 semanas" },
      { value: "exploring", label: "Solo estoy explorando" },
    ],
    messageLabel: "Notas adicionales (opcional)",
    messagePlaceholder: "Cómo entrar, áreas importantes, mascotas, alergias…",
    commTitle: "Consentimiento de comunicación",
    smsLabel: "Acepto recibir mensajes de texto sobre mi servicio de limpieza. Pueden aplicar tarifas. Responde STOP para cancelar.",
    socialProof: "5.0 estrellas · Familias de MD, DC & VA confían en nosotros",
    submitting: "Enviando...",
    microcopy: "Sin compromiso · Respuesta el mismo día · Atendemos en español",
    toastError: "Algo salió mal. Por favor intenta de nuevo o llámanos directamente.",
    successGreeting: (name: string) => `¡Hola ${name}! 🏠 Gracias por confiar en Capital Clean Care.`,
    successBody: "Recibimos tu solicitud y nuestro equipo te contactará en las próximas horas con una cotización personalizada. ✨",
    successFarewell: "¡Nos encantará dejar tu casa impecable! 💚",
    successSignature: "— Equipo Capital Clean Care",
    callBtn: "Llamar Ahora",
    anotherBtn: "Enviar Otra Solicitud",
    responseNote: "Generalmente respondemos en 2–4 horas durante el horario de atención",
    errors: {
      name: "Ingresa tu nombre completo",
      phone: "Ingresa tu número de teléfono",
      zip: "Ingresa tu código postal (5 dígitos)",
      service: "Selecciona el tipo de servicio",
      size: "Selecciona el tamaño de tu casa",
      smsConsent: "Acepta el checkbox para continuar",
    },
  },
} as const;

// ── Phone masking (ES only) ──────────────────────────────────────────────────

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

// ── Component ────────────────────────────────────────────────────────────────

const QuoteForm = ({
  submitLabel,
  defaultService = "",
  lang = "en",
}: QuoteFormProps) => {
  const t = T[lang];
  const isES = lang === "es";
  const defaultSubmitLabel = isES ? "Solicitar Cotización Gratis" : "Get My Free Quote →";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zip: "",
    service: defaultService,
    // EN fields
    bedrooms: "",
    bathrooms: "",
    frequency: "",
    date: "",
    // Shared
    message: "",
    smsConsent: false,
    emailConsent: false,
    // ES fields
    size: "",
    timing: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, value: string) => {
    const v = isES && field === "phone" ? maskPhone(value) : value;
    setFormData((p) => ({ ...p, [field]: v }));
    if (errors[field]) setErrors((e) => { const next = { ...e }; delete next[field]; return next; });
  };

  const errMsg = (field: string) => {
    if (!isES || !errors[field]) return null;
    return (
      <p id={`${field}-err`} className="text-sm text-red-500 mt-1" role="alert">
        {errors[field]}
      </p>
    );
  };

  // ── ES client-side validation ──────────────────────────────────────────────

  const validateES = () => {
    const esT = T.es;
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = esT.errors.name;
    if (!formData.phone.trim()) e.phone = esT.errors.phone;
    if (!formData.zip.trim() || !/^\d{5}$/.test(formData.zip.trim())) e.zip = esT.errors.zip;
    if (!formData.service) e.service = esT.errors.service;
    if (!formData.size) e.size = esT.errors.size;
    if (!formData.smsConsent) e.smsConsent = esT.errors.smsConsent;
    return e;
  };

  // ── Submit ─────────────────────────────────────────────────────────────────

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isES) {
      const errs = validateES();
      if (Object.keys(errs).length > 0) {
        setErrors(errs);
        const firstKey = Object.keys(errs)[0];
        document.getElementById(`${firstKey}-err`)?.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      setErrors({});
    }

    setSubmitting(true);

    try {
      // Pack ES-specific fields into the message for storage
      const messageForDB = isES
        ? [
            formData.size && `Tamaño: ${formData.size}`,
            formData.timing && `Cuándo: ${formData.timing}`,
            formData.message,
          ].filter(Boolean).join(" | ") || null
        : formData.message || null;

      // ① Supabase
      supabase.from("quote_requests").insert({
        name: formData.name,
        phone: formData.phone,
        email: formData.email || null,
        zip: formData.zip,
        service: formData.service,
        bedrooms: isES ? null : formData.bedrooms || null,
        bathrooms: isES ? null : formData.bathrooms || null,
        frequency: isES ? null : formData.frequency || null,
        preferred_date: isES ? null : formData.date || null,
        message: messageForDB,
        sms_consent: formData.smsConsent,
        email_consent: isES ? false : formData.emailConsent,
      }).then(({ error }) => { if (error) console.error("DB error:", error); });

      // ② Netlify Forms backup
      const encode = (data: Record<string, string>) =>
        Object.keys(data).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`).join("&");

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": isES ? "quote-es" : "quote",
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zip: formData.zip,
          service: formData.service,
          ...(isES
            ? { size: formData.size, timing: formData.timing }
            : {
                bedrooms: formData.bedrooms || "",
                bathrooms: formData.bathrooms || "",
                frequency: formData.frequency || "",
                preferred_date: formData.date || "",
              }),
          message: formData.message || "",
        }),
      }).catch(console.error);

      // ③ Forward to scheduling app
      fetch("https://jzxhejqokcjyxxklnnza.supabase.co/functions/v1/receive-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-webhook-secret": "ccc-lead-webhook-2026",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          zip: formData.zip,
          service: formData.service,
          bedrooms: isES ? formData.size : formData.bedrooms,
          bathrooms: isES ? null : formData.bathrooms,
          frequency: isES ? formData.timing : formData.frequency,
          date: isES ? null : formData.date,
          message: formData.message,
          smsConsent: formData.smsConsent,
          emailConsent: isES ? false : formData.emailConsent,
          ...(isES ? { language: "es" } : {}),
        }),
      }).catch(() => { /* non-blocking */ });

      // ④ Resend email notification
      fetch("/api/send-quote-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email || null,
          zip: formData.zip,
          service: formData.service,
          bedrooms: isES ? null : formData.bedrooms || null,
          bathrooms: isES ? null : formData.bathrooms || null,
          frequency: isES ? null : formData.frequency || null,
          preferred_date: isES ? null : formData.date || null,
          message: messageForDB,
        }),
      }).catch((err) => console.error("Email notification failed (non-critical):", err));

      // ⑤ GA4 + Google Ads conversion
      trackQuoteFormSubmit(formData.service, isES ? { language: "es" } : undefined);
      if (typeof gtag !== "undefined") {
        gtag("event", "conversion", {
          send_to: "AW-16450100951/quote_form_submit",
          value: 50.0,
          currency: "USD",
        });
      }

      setSubmittedName(formData.name.split(" ")[0]);
      setFormData({
        name: "", phone: "", email: "", zip: "", service: "",
        bedrooms: "", bathrooms: "", frequency: "", date: "",
        message: "", smsConsent: false, emailConsent: false,
        size: "", timing: "",
      });
      setShowDetails(false);
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      toast.error(t.toastError);
    } finally {
      setSubmitting(false);
    }
  };

  // ── Success state ──────────────────────────────────────────────────────────

  if (submitted) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString(isES ? "es-US" : "en-US", {
      hour: "numeric", minute: "2-digit", hour12: true,
    });

    return (
      <div className="flex flex-col items-center gap-6 py-6 px-2 animate-fade-up">
        <div className="w-full max-w-sm bg-[#F2F2F7] rounded-3xl shadow-2xl overflow-hidden border border-white/60">
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

          <div className="bg-[#F2F2F7] px-4 py-5 space-y-3 min-h-[220px]">
            <p className="text-center text-xs text-gray-400 mb-4">Today {timeStr}</p>

            {[
              t.successGreeting(submittedName),
              t.successBody,
              t.successFarewell,
            ].map((msg, i) => (
              <div key={i} className="flex items-end gap-2">
                {i === 0 ? (
                  <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mb-0.5">
                    <span className="text-white text-[10px] font-bold">CC</span>
                  </div>
                ) : (
                  <div className="w-7 h-7 shrink-0" />
                )}
                <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <p className="text-[13px] text-gray-800 leading-relaxed">{msg}</p>
                  {i === 2 && (
                    <p className="text-[11px] text-gray-400 mt-1.5 font-medium">{t.successSignature}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="flex justify-end pr-1">
              <div className="flex items-center gap-1 text-[11px] text-gray-400">
                <CheckCircle className="h-3 w-3 text-accent" />
                <span>Delivered</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Button asChild size="sm" variant="outline" className="flex-1 rounded-full gap-2">
            <a href="tel:+12407042551">
              <Phone className="h-3.5 w-3.5" /> {t.callBtn}
            </a>
          </Button>
          <Button
            size="sm"
            variant="ghost"
            className="flex-1 rounded-full text-muted-foreground gap-2"
            onClick={() => setSubmitted(false)}
          >
            <MessageCircle className="h-3.5 w-3.5" /> {t.anotherBtn}
          </Button>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-accent/5 border border-accent/15 rounded-full px-4 py-2">
          <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
          <span>{t.responseNote}</span>
        </div>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Service type */}
      <div className="space-y-2">
        <Label>{t.serviceLabel}</Label>
        <Select required value={formData.service} onValueChange={(v) => update("service", v)}>
          <SelectTrigger
            id="service"
            aria-required={isES ? "true" : undefined}
            aria-describedby={errors.service ? "service-err" : undefined}
          >
            <SelectValue placeholder={t.servicePlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {t.serviceOptions.map(({ value, label }) => (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errMsg("service")}
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">{t.nameLabel}</Label>
          <Input
            id="name"
            required={!isES}
            aria-required={isES ? "true" : undefined}
            aria-describedby={errors.name ? "name-err" : undefined}
            value={formData.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder={t.namePlaceholder}
          />
          {errMsg("name")}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">{t.phoneLabel}</Label>
          <Input
            id="phone"
            type="tel"
            inputMode="numeric"
            required={!isES}
            aria-required={isES ? "true" : undefined}
            aria-describedby={errors.phone ? "phone-err" : undefined}
            value={formData.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder={t.phonePlaceholder}
          />
          {errMsg("phone")}
        </div>
      </div>

      {/* Email + Zip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">{t.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            required={t.emailRequired}
            value={formData.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder={t.emailPlaceholder}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="zip">{t.zipLabel}</Label>
          <Input
            id="zip"
            required={!isES}
            inputMode="numeric"
            maxLength={5}
            aria-required={isES ? "true" : undefined}
            aria-describedby={errors.zip ? "zip-err" : undefined}
            value={formData.zip}
            onChange={(e) => update("zip", e.target.value)}
            placeholder={t.zipPlaceholder}
          />
          {errMsg("zip")}
        </div>
      </div>

      {/* ── ES-specific fields ── */}
      {isES && (
        <>
          <div className="space-y-2">
            <Label htmlFor="size">{T.es.sizeLabel}</Label>
            <Select value={formData.size} onValueChange={(v) => update("size", v)}>
              <SelectTrigger
                id="size"
                aria-required="true"
                aria-describedby={errors.size ? "size-err" : undefined}
              >
                <SelectValue placeholder={T.es.sizePlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {T.es.sizeOptions.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errMsg("size")}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timing">{T.es.timingLabel}</Label>
            <Select value={formData.timing} onValueChange={(v) => update("timing", v)}>
              <SelectTrigger id="timing">
                <SelectValue placeholder={T.es.timingPlaceholder} />
              </SelectTrigger>
              <SelectContent>
                {T.es.timingOptions.map(({ value, label }) => (
                  <SelectItem key={value} value={value}>{label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message-es">{T.es.messageLabel}</Label>
            <Textarea
              id="message-es"
              value={formData.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder={T.es.messagePlaceholder}
              rows={3}
              maxLength={500}
            />
          </div>

          <div className="rounded-lg border border-border bg-background p-4">
            <p className="text-sm font-medium mb-3">{T.es.commTitle}</p>
            <label className="flex items-start gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.smsConsent}
                onChange={(e) => {
                  setFormData((p) => ({ ...p, smsConsent: e.target.checked }));
                  if (errors.smsConsent) setErrors((err) => { const n = { ...err }; delete n.smsConsent; return n; });
                }}
                aria-describedby={errors.smsConsent ? "smsConsent-err" : undefined}
                className="mt-0.5 h-4 w-4 rounded border-border accent-accent"
              />
              <span className="text-sm text-muted-foreground">{T.es.smsLabel}</span>
            </label>
            {errMsg("smsConsent")}
          </div>
        </>
      )}

      {/* ── EN-specific: collapsible details ── */}
      {!isES && (
        <>
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
                      {T.en.freqOptions.map(({ value, label }) => (
                        <SelectItem key={value} value={value}>{label}</SelectItem>
                      ))}
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
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Access instructions, areas to focus on, pets, allergies…"
                  rows={3}
                />
              </div>

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
        </>
      )}

      {/* Social proof */}
      <div className="flex items-center gap-2 py-2 px-3 bg-accent/5 rounded-lg border border-accent/10">
        <div className="flex gap-0.5 shrink-0">
          {[1, 2, 3, 4, 5].map((i) => (
            <svg key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">
            {isES ? "5.0 estrellas" : "5.0 stars"}
          </span>{" "}
          · {isES ? "Familias de MD, DC & VA confían en nosotros" : "Trusted by homeowners across MD, DC & VA"}
        </p>
      </div>

      <Button type="submit" variant="cta" size="lg" className="w-full text-base" disabled={submitting}>
        {submitting ? t.submitting : (submitLabel ?? defaultSubmitLabel)}
      </Button>

      <p className="text-center text-xs text-muted-foreground">{t.microcopy}</p>
    </form>
  );
};

export default QuoteForm;
