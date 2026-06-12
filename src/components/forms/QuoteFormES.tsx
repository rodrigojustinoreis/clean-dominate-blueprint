// QuoteFormES — Spanish quote form for all /es/ pages.
// Infrastructure: same as QuoteForm.tsx (Supabase + Netlify Forms + Resend via /api/send-quote-email).
// GA4: fires generate_lead with language: 'es' on submit.
// Phone mask: formats input to (XXX) XXX-XXXX on blur/input.
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { CheckCircle, Phone, Clock, MessageCircle } from "lucide-react";

declare const gtag: (...args: unknown[]) => void;

interface QuoteFormESProps {
  id?: string;
  defaultService?: string;
  submitLabel?: string;
}

const PHONE_DISPLAY = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";

const SERVICES = [
  { value: "standard", label: "Limpieza regular" },
  { value: "deep", label: "Limpieza profunda" },
  { value: "move", label: "Limpieza de mudanza (move-out/in)" },
  { value: "airbnb", label: "Limpieza Airbnb" },
  { value: "post-construction", label: "Limpieza post-construcción" },
  { value: "other", label: "Otro / No estoy seguro" },
];

const SIZES = [
  { value: "apt-1-2", label: "Apartamento 1–2 hab" },
  { value: "house-3", label: "Casa 3 habitaciones" },
  { value: "house-4", label: "Casa 4 habitaciones" },
  { value: "house-5plus", label: "Casa 5+ habitaciones" },
  { value: "other", label: "Otro" },
];

const TIMING = [
  { value: "asap", label: "Lo antes posible" },
  { value: "this-week", label: "Esta semana" },
  { value: "two-weeks", label: "Próximas 2 semanas" },
  { value: "exploring", label: "Solo estoy explorando" },
];

function maskPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits.length ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

const QuoteFormES = ({ id = "cotizacion", defaultService = "", submitLabel = "Solicitar Cotización Gratis" }: QuoteFormESProps) => {
  const { pathname } = useLocation();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: "", phone: "", email: "", zip: "",
    service: defaultService, size: "", timing: "", message: "", smsConsent: false,
  });
  const [errors, setErrors] = useState<Partial<typeof formData & { form: string }>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");

  const set = (field: string, value: string | boolean) =>
    setFormData((p) => ({ ...p, [field]: value }));

  const validate = () => {
    const e: typeof errors = {};
    if (!formData.name.trim()) e.name = "Nombre requerido";
    if (!formData.phone || formData.phone.replace(/\D/g, "").length < 10) e.phone = "Teléfono inválido — ingresa 10 dígitos";
    if (!formData.zip || !/^\d{5}$/.test(formData.zip)) e.zip = "Código postal: 5 dígitos";
    if (!formData.service) e.service = "Selecciona un servicio";
    if (!formData.size) e.size = "Selecciona el tamaño";
    if (!formData.smsConsent) e.smsConsent = "Acepta el checkbox para continuar" as unknown as boolean;
    return e;
  };

  const isValid = () => {
    const e = validate();
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);

    try {
      // 1. Supabase (primary record; loaded on demand to keep it off the initial bundle)
      import("@/integrations/supabase/client").then(({ supabase }) =>
        supabase.from("quote_requests").insert({
          name: formData.name, phone: formData.phone, email: formData.email || null,
          zip: formData.zip, service: formData.service,
          message: [formData.size && `Tamaño: ${formData.size}`, formData.timing && `Cuándo: ${formData.timing}`, formData.message].filter(Boolean).join(" | ") || null,
          sms_consent: formData.smsConsent, email_consent: false,
          source: "es_form",
        }).then(({ error }) => { if (error) console.error("DB error:", error); })
      ).catch((err) => console.error("Supabase load error:", err));

      // 2. Netlify Forms (backup)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": "quote-es", ...Object.fromEntries(Object.entries(formData).map(([k, v]) => [k, String(v)])) }).toString(),
      }).catch(console.error);

      // 3. Email notification via Resend (non-blocking)
      // Setup: set RESEND_API_KEY env var in Netlify UI → Site configuration → Environment variables
      fetch("/api/send-quote-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name, phone: formData.phone, email: formData.email || null,
          zip: formData.zip, service: formData.service,
          message: `[ES FORM] Tamaño: ${formData.size} | Cuándo: ${formData.timing || "N/A"} | ${formData.message}`,
        }),
      }).catch(console.error);

      // 4. GA4 generate_lead
      if (typeof gtag !== "undefined") {
        gtag("event", "generate_lead", {
          form_location: pathname,
          service_type: formData.service,
          language: "es",
          zip_code: formData.zip,
        });
        // Google Ads conversion
        gtag("event", "conversion", { send_to: "AW-16450100951/quote_form_submit", value: 50.0, currency: "USD" });
      }

      setSubmittedName(formData.name.split(" ")[0]);
      setFormData({ name: "", phone: "", email: "", zip: "", service: "", size: "", timing: "", message: "", smsConsent: false });
      setSubmitted(true);
    } catch (err) {
      console.error("Submit error:", err);
      setErrors({ form: "Algo salió mal. Por favor llámanos al " + PHONE_DISPLAY } as typeof errors);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    const now = new Date();
    const timeStr = now.toLocaleTimeString("es-US", { hour: "numeric", minute: "2-digit", hour12: true });
    return (
      <div className="flex flex-col items-center gap-6 py-6 px-2 animate-fade-up" role="alert" aria-live="polite">
        <div className="w-full max-w-sm bg-[#F2F2F7] rounded-3xl shadow-2xl overflow-hidden border border-white/60">
          <div className="bg-[#1B3A2D] px-5 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">CC</span>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Capital Clean Care</p>
                <p className="text-white/60 text-xs mt-0.5">Rodrigo</p>
              </div>
            </div>
            <span className="text-white/70 text-xs">{timeStr}</span>
          </div>
          <div className="bg-[#F2F2F7] px-4 py-5 space-y-3 min-h-[200px]">
            <p className="text-center text-xs text-gray-400 mb-4">Hoy {timeStr}</p>
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center shrink-0 mb-0.5">
                <span className="text-white text-[10px] font-bold">CC</span>
              </div>
              <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  ¡Hola, <strong>{submittedName}</strong>! 🏠 Gracias por contactar Capital Clean Care.
                </p>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 shrink-0" />
              <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p className="text-[13px] text-gray-800 leading-relaxed">
                  Recibimos tu solicitud. Rodrigo o alguien del equipo te va a contactar en <strong>menos de 2 horas</strong> ✨
                </p>
              </div>
            </div>
            <div className="flex items-end gap-2">
              <div className="w-7 h-7 shrink-0" />
              <div className="max-w-[85%] bg-white rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                <p className="text-[13px] text-gray-800 leading-relaxed">¡Nos vemos pronto! 💚</p>
                <p className="text-[11px] text-gray-400 mt-1 font-medium">— Capital Clean Care</p>
              </div>
            </div>
            <div className="flex justify-end pr-1">
              <div className="flex items-center gap-1 text-[11px] text-gray-400">
                <CheckCircle className="h-3 w-3 text-accent" />
                <span>Enviado</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
          <Button asChild size="sm" variant="outline" className="flex-1 rounded-full gap-2">
            <a href={PHONE_TEL}><Phone className="h-3.5 w-3.5" /> Llamar ahora</a>
          </Button>
          <Button size="sm" variant="ghost" className="flex-1 rounded-full text-muted-foreground gap-2" onClick={() => setSubmitted(false)}>
            <MessageCircle className="h-3.5 w-3.5" /> Otra solicitud
          </Button>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground bg-accent/5 border border-accent/15 rounded-full px-4 py-2">
          <Clock className="h-3.5 w-3.5 text-accent shrink-0" />
          <span>Lun–Sáb 8am–6pm · Respuesta en <strong className="text-foreground">menos de 2 horas</strong></span>
        </div>
      </div>
    );
  }

  const err = (field: keyof typeof errors) => errors[field] ? (
    <span className="text-xs text-red-600 mt-1 block" role="alert" aria-live="polite">{String(errors[field])}</span>
  ) : null;

  return (
    <form
      id={id}
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      data-netlify="true"
      name="quote-es"
    >
      <input type="hidden" name="form-name" value="quote-es" />

      {/* Row 1 — Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="es-name">Nombre completo <span aria-hidden>*</span></Label>
          <Input
            id="es-name" name="name" required autoComplete="name"
            value={formData.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="María García"
            aria-required="true"
            aria-describedby={errors.name ? "name-err" : undefined}
          />
          <span id="name-err">{err("name")}</span>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="es-phone">Teléfono <span aria-hidden>*</span></Label>
          <Input
            id="es-phone" name="phone" type="tel" required autoComplete="tel"
            value={formData.phone}
            onChange={(e) => set("phone", maskPhone(e.target.value))}
            placeholder="(301) 555-0123"
            inputMode="tel"
            aria-required="true"
            aria-describedby={errors.phone ? "phone-err" : undefined}
          />
          <span id="phone-err">{err("phone")}</span>
        </div>
      </div>

      {/* Row 2 — Email + ZIP */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="es-email">Email <span className="text-muted-foreground text-xs">(opcional)</span></Label>
          <Input
            id="es-email" name="email" type="email" autoComplete="email"
            value={formData.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="maria@email.com"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="es-zip">Código postal <span aria-hidden>*</span></Label>
          <Input
            id="es-zip" name="zip" required inputMode="numeric" maxLength={5}
            value={formData.zip}
            onChange={(e) => set("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="20902"
            aria-required="true"
            aria-describedby={errors.zip ? "zip-err" : undefined}
          />
          <span id="zip-err">{err("zip")}</span>
        </div>
      </div>

      {/* Service */}
      <div className="space-y-1.5">
        <Label htmlFor="es-service">Tipo de servicio <span aria-hidden>*</span></Label>
        <Select required value={formData.service} onValueChange={(v) => set("service", v)}>
          <SelectTrigger id="es-service" aria-required="true">
            <SelectValue placeholder="¿Qué tipo de limpieza necesitas?" />
          </SelectTrigger>
          <SelectContent>
            {SERVICES.map(({ value, label }) => (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {err("service")}
      </div>

      {/* Size */}
      <div className="space-y-1.5">
        <Label htmlFor="es-size">Tamaño de casa <span aria-hidden>*</span></Label>
        <Select required value={formData.size} onValueChange={(v) => set("size", v)}>
          <SelectTrigger id="es-size" aria-required="true">
            <SelectValue placeholder="Selecciona el tamaño" />
          </SelectTrigger>
          <SelectContent>
            {SIZES.map(({ value, label }) => (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {err("size")}
      </div>

      {/* Timing */}
      <div className="space-y-1.5">
        <Label htmlFor="es-timing">¿Cuándo lo necesitas? <span className="text-muted-foreground text-xs">(opcional)</span></Label>
        <Select value={formData.timing} onValueChange={(v) => set("timing", v)}>
          <SelectTrigger id="es-timing"><SelectValue placeholder="Elige una opción" /></SelectTrigger>
          <SelectContent>
            {TIMING.map(({ value, label }) => (
              <SelectItem key={value} value={value}>{label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <Label htmlFor="es-message">Mensaje <span className="text-muted-foreground text-xs">(opcional)</span></Label>
        <Textarea
          id="es-message" name="message"
          value={formData.message}
          onChange={(e) => set("message", e.target.value.slice(0, 500))}
          placeholder="Mascotas, acceso a la casa, áreas especiales, alergias..."
          rows={3}
          aria-describedby="msg-count"
        />
        <span id="msg-count" className="text-xs text-muted-foreground">{formData.message.length}/500</span>
      </div>

      {/* SMS Consent */}
      <div className="rounded-lg border border-border bg-secondary/30 p-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.smsConsent}
            onChange={(e) => set("smsConsent", e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded border-border accent-accent"
            aria-required="true"
            aria-describedby={errors.smsConsent ? "consent-err" : undefined}
          />
          <span className="text-sm text-muted-foreground leading-relaxed">
            Acepto recibir SMS y correo electrónico de Capital Clean Care sobre mi solicitud.
            Puedo cancelar respondiendo <strong>STOP</strong> en cualquier momento.
          </span>
        </label>
        <span id="consent-err">{err("smsConsent")}</span>
      </div>

      {/* Social proof */}
      <div className="flex items-center gap-2 py-2 px-3 bg-accent/5 rounded-lg border border-accent/10">
        <div className="flex gap-0.5 shrink-0">
          {[1,2,3,4,5].map((i) => (
            <svg key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          ))}
        </div>
        <p className="text-xs text-muted-foreground">
          <span className="font-semibold text-foreground">5.0 estrellas</span> · 47+ familias en Montgomery County
        </p>
      </div>

      {errors.form && (
        <p className="text-sm text-red-600 text-center" role="alert">{errors.form}</p>
      )}

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full text-base"
        disabled={submitting}
        aria-disabled={submitting}
      >
        {submitting ? "Enviando..." : submitLabel}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Sin compromiso · Cotización gratis · Respondemos en menos de 2 horas
      </p>
    </form>
  );
};

export default QuoteFormES;
