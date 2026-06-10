import { useState, useEffect, useRef, ReactNode } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Star, Phone, ArrowRight, Shield, Leaf, Users, Award, Clock, Home, ChevronDown, ChevronUp, Lock, BedDouble, Bath } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { trackPhoneClick, trackBookNowClick, trackQuoteFormSubmit } from "@/lib/analytics";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import teamPhoto from "@/assets/luana-cleaning.webp";
import kitchenGraniteBefore from "@/assets/real-work/kitchen-granite-before.webp";
import kitchenGraniteAfter  from "@/assets/real-work/kitchen-granite-after.webp";
import kitchenIslandBefore  from "@/assets/real-work/kitchen-island-before.webp";
import kitchenIslandAfter   from "@/assets/real-work/kitchen-island-after.webp";
import stoveBefore          from "@/assets/real-work/stove-before.webp";
import stoveAfter           from "@/assets/real-work/stove-after.webp";

declare function gtag(...args: unknown[]): void;

const service = getServiceBySlug("house-cleaning")!;

/* ── Scroll reveal wrapper ─────────────────────────────────────── */
const Reveal = ({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${visible ? "is-visible" : ""} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

/* ── Lazy YouTube facade — loads iframe only on click (saves ~600KB) ── */
const LazyYouTube = ({ id, title }: { id: string; title: string }) => {
  const [play, setPlay] = useState(false);
  if (play) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen className="w-full h-full" loading="lazy"
      />
    );
  }
  return (
    <button onClick={() => setPlay(true)} className="group relative w-full h-full block" aria-label={`Play video: ${title}`}>
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt={title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
        <span className="flex items-center justify-center w-16 h-11 rounded-xl shadow-lg transition-transform group-hover:scale-110" style={{ background: "#FF0000" }}>
          <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </span>
      </span>
    </button>
  );
};

/* ── Quote Form ────────────────────────────────────────────────── */
const QuoteFormInline = ({ variant = "hero" }: { variant?: "hero" | "footer" }) => {
  const isFooter = variant === "footer";
  const [form, setForm] = useState({ name: "", phone: "", email: "", zip: "", address: "", bedrooms: "2", bathrooms: "1" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const set = (k: string, v: string) => setForm(p => ({ ...p, [k]: v }));

  // Slider positions derived from the stored display strings ("5+" → 5, "4+" → 4)
  const bedNum = Math.min(5, Math.max(1, parseInt(form.bedrooms, 10) || 1));
  const bathNum = Math.min(4, Math.max(1, parseFloat(form.bathrooms) || 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.zip || (!isFooter && !form.address)) { toast.error("Please fill in all required fields, including your full address."); return; }
    setSubmitting(true);
    try {
      supabase.from("quote_requests").insert({ name: form.name, phone: form.phone, email: form.email, zip: form.zip, service: "House Cleaning", bedrooms: form.bedrooms, bathrooms: form.bathrooms, message: form.address ? `Address: ${form.address}` : null, sms_consent: false, email_consent: false })
        .then(({ error }) => { if (error) console.error("DB:", error); });
      const encode = (d: Record<string,string>) => Object.keys(d).map(k => `${encodeURIComponent(k)}=${encodeURIComponent(d[k])}`).join("&");
      fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: encode({ "form-name": "quote", ...form, service: "House Cleaning" }) }).catch(console.error);
      fetch("https://jzxhejqokcjyxxklnnza.supabase.co/functions/v1/receive-lead", { method: "POST", headers: { "Content-Type": "application/json", "x-webhook-secret": "ccc-lead-webhook-2026" }, body: JSON.stringify({ ...form, service: "House Cleaning" }) }).catch(() => {});
      fetch("/api/send-quote-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, service: "House Cleaning" }) }).catch(() => {});
      trackQuoteFormSubmit("house-cleaning");
      if (typeof gtag !== "undefined") gtag("event", "conversion", { send_to: "AW-16450100951/9MghCM3k2bIcENe9gqQ9", value: 50.0, currency: "USD" });
      setSubmittedName(form.name.split(" ")[0]);
      setSubmitted(true);
    } catch { toast.error("Something went wrong. Please call us directly."); }
    finally { setSubmitting(false); }
  };

  if (submitted) return (
    <div className="flex flex-col items-center gap-4 py-6 text-center">
      <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "#10B98120" }}>
        <CheckCircle className="h-7 w-7" style={{ color: "#10B981" }} />
      </div>
      <div>
        <h3 className="font-manrope font-extrabold text-xl mb-1 text-gray-900">Thanks, {submittedName}! 🎉</h3>
        <p className="text-gray-500 text-sm">We'll call you within 2 hours with your free quote.</p>
      </div>
      <a href="tel:+12407042551" onClick={() => trackPhoneClick("hc_confirmation")}
        className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-lg text-sm"
        style={{ background: "#10B981" }}>
        <Phone className="h-4 w-4" /> (240) 704-2551
      </a>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className={isFooter ? "flex flex-col sm:flex-row gap-3 flex-wrap" : "space-y-4"}>
      {[
        { k: "name",  label: "Full Name",     placeholder: "Jane Smith",     type: "text"  },
        { k: "phone", label: "Phone Number",  placeholder: "(240) 000-0000", type: "tel"   },
        { k: "email", label: "Email Address", placeholder: "jane@email.com", type: "email" },
        { k: "zip",   label: "ZIP Code",      placeholder: "20850",          type: "text"  },
      ].map(f => (
        <div key={f.k} className={isFooter ? "flex-1 min-w-[140px]" : ""}>
          {!isFooter && <Label htmlFor={`hc-${f.k}`} className="text-xs font-semibold text-gray-700 mb-1 block">{f.label}</Label>}
          <Input id={`hc-${f.k}`} type={f.type} placeholder={isFooter ? f.label : f.placeholder}
            value={(form as Record<string,string>)[f.k]} onChange={e => set(f.k, e.target.value)}
            required={f.k !== "email"}
            className={`h-11 ${isFooter ? "bg-white border-0 text-gray-900" : ""}`} />
        </div>
      ))}
      {!isFooter && (
        <div>
          <Label htmlFor="hc-address" className="text-xs font-semibold text-gray-700 mb-1 block">
            Full Address <span style={{ color: "#10B981" }}>*</span>
          </Label>
          <Input id="hc-address" type="text" required placeholder="123 Main St, Rockville, MD 20850"
            value={form.address} onChange={e => set("address", e.target.value)}
            className="h-11" autoComplete="street-address" />
        </div>
      )}
      {!isFooter && (
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 space-y-5" style={{ "--primary": "160 84% 39%" } as React.CSSProperties}>
          <p className="text-sm font-bold text-gray-900 flex items-center gap-2"><Home className="h-4 w-4" style={{ color: "#10B981" }} /> Tell us about your home</p>

          {/* Bedrooms — drag slider */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700"><BedDouble className="h-4 w-4" style={{ color: "#10B981" }} /> Bedrooms</span>
              <span className="text-sm font-extrabold text-white rounded-full px-3 py-1 min-w-[3.25rem] text-center tabular-nums" style={{ background: "#10B981" }}>{form.bedrooms}</span>
            </div>
            <Slider value={[bedNum]} min={1} max={5} step={1} onValueChange={([v]) => set("bedrooms", v >= 5 ? "5+" : String(v))} aria-label="Number of bedrooms" />
            <div className="flex justify-between text-[11px] text-gray-400 px-0.5">
              <span>1</span><span>2</span><span>3</span><span>4</span><span>5+</span>
            </div>
          </div>

          {/* Bathrooms — drag slider */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-sm font-semibold text-gray-700"><Bath className="h-4 w-4" style={{ color: "#10B981" }} /> Bathrooms</span>
              <span className="text-sm font-extrabold text-white rounded-full px-3 py-1 min-w-[3.25rem] text-center tabular-nums" style={{ background: "#10B981" }}>{form.bathrooms}</span>
            </div>
            <Slider value={[bathNum]} min={1} max={4} step={0.5} onValueChange={([v]) => set("bathrooms", v >= 4 ? "4+" : String(v))} aria-label="Number of bathrooms" />
            <div className="flex justify-between text-[11px] text-gray-400 px-0.5">
              <span>1</span><span>2</span><span>3</span><span>4+</span>
            </div>
          </div>

          <p className="text-[11px] text-gray-400">Drag each slider to set your number of bedrooms and bathrooms — it helps us price your quote accurately.</p>
        </div>
      )}
      <Button type="submit" disabled={submitting}
        className={`font-bold text-white ${isFooter ? "h-11 px-8 rounded-lg shrink-0" : "w-full h-12 rounded-lg relative overflow-hidden animate-pulse-subtle"}`}
        style={{ background: "linear-gradient(135deg,#059669,#10B981)", boxShadow: "0 4px 20px rgba(16,185,129,0.35)" }}
        onClick={() => trackBookNowClick("hc_form")}>
        {submitting ? "Sending…" : "GET MY FREE QUOTE →"}
      </Button>
      {!isFooter && (
        <p className="flex items-center justify-center gap-1.5 text-[11px] text-gray-400">
          <Lock className="h-3 w-3" /> Your information is 100% secure and will never be shared.
        </p>
      )}
    </form>
  );
};

/* ── Before/After slider ───────────────────────────────────────── */
const BASlider = ({ label, before, after }: { label: string; before: string; after: string }) => {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    setPos(Math.round(x * 100));
  };

  return (
    <div className="rounded-2xl overflow-hidden shadow-md border border-gray-100">
      <p className="text-xs font-bold text-center uppercase tracking-wider text-gray-500 py-2.5 bg-gray-50 border-b border-gray-100">{label}</p>
      <div className="relative aspect-[4/3] select-none cursor-col-resize overflow-hidden"
        onMouseDown={e => { setDragging(true); handleMove(e.clientX, e.currentTarget.getBoundingClientRect()); }}
        onMouseMove={e => { if (dragging) handleMove(e.clientX, e.currentTarget.getBoundingClientRect()); }}
        onMouseUp={() => setDragging(false)} onMouseLeave={() => setDragging(false)}
        onTouchStart={e => { setDragging(true); handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect()); }}
        onTouchMove={e => { if (dragging) handleMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect()); }}
        onTouchEnd={() => setDragging(false)}>
        {/* After (bottom layer, full) */}
        <img src={after} alt={`${label} after cleaning`} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        {/* Before (top layer, clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
          <img src={before} alt={`${label} before cleaning`} className="absolute inset-0 w-full h-full object-cover" style={{ width: `${10000/pos}%`, maxWidth: "none" }} loading="lazy" />
        </div>
        {/* Divider line + handle */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" style={{ left: `${pos}%`, transform: "translateX(-50%)" }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3M16 9l3 3-3 3" />
            </svg>
          </div>
        </div>
        {/* Labels */}
        <span className="absolute top-2 left-2 bg-gray-900/70 text-white text-[10px] font-bold px-2 py-0.5 rounded">BEFORE</span>
        <span className="absolute top-2 right-2 text-white text-[10px] font-bold px-2 py-0.5 rounded" style={{ background: "#10B981CC" }}>AFTER</span>
      </div>
    </div>
  );
};

/* ── Checklist ─────────────────────────────────────────────────── */
const CHECKLIST = [
  { cat: "Kitchen",      items: service.whatsIncluded.slice(0, 15) },
  { cat: "Bathrooms",    items: service.whatsIncluded.slice(15, 30) },
  { cat: "Bedrooms",     items: service.whatsIncluded.slice(30, 41) },
  { cat: "Living Areas", items: service.whatsIncluded.slice(41, 50) },
  { cat: "Floors",       items: service.whatsIncluded.slice(50) },
];

/* ── Reviews for the carousel (10 entries) ─────────────────────── */
const REVIEWS = [
  { name: "Sarah M.",    location: "Bethesda, MD",      text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets. Highly recommend!" },
  { name: "David R.",    location: "Rockville, MD",     text: "Reliable and professional every single visit. They follow their checklist meticulously — home feels amazing every time." },
  { name: "Jennifer P.", location: "Potomac, MD",       text: "Absolutely flawless. The team was on time, polite, and my kitchen has never looked this good. Booking every two weeks now." },
  { name: "Angela T.",   location: "Silver Spring, MD", text: "With two kids and a dog, knowing the products are safe gives me real peace of mind. Same team every visit!" },
  { name: "Carlos M.",   location: "Gaithersburg, MD",  text: "Moved out and got my full deposit back thanks to them. Spotless from top to bottom — worth every penny." },
  { name: "Mark S.",     location: "Arlington, VA",     text: "Best cleaning service in the DMV. On time, efficient, and the quality is consistently excellent. Worth every penny." },
  { name: "Rachel B.",   location: "Chevy Chase, MD",   text: "Same crew every visit and they remember exactly how we like things. Reliable, friendly, and incredibly thorough." },
  { name: "Amanda F.",   location: "Bethesda, MD",      text: "My Airbnb went from 4.6 to 5.0 stars after switching to Capital Clean Care. The detail is absolutely incredible." },
  { name: "Tom D.",      location: "Germantown, MD",    text: "Eco-friendly products with zero chemical smell. Safe for the baby and the dog. Couldn't be happier with the service." },
  { name: "Linda P.",    location: "Kensington, MD",    text: "Booked a deep clean before the holidays and every surface gleamed. Professional, punctual, and genuinely kind people." },
];

/* ── Team photos ───────────────────────────────────────────────── */
const TEAM_PHOTOS = [
  { src: "/images/team/real-team-luxury-home.jpg",  alt: "Capital Clean Care team in luxury home" },
  { src: "/images/team/real-team-two-members.webp",  alt: "Capital Clean Care team members" },
  { src: "/images/team/real-team-maria-fridge.jpg", alt: "Capital Clean Care professional cleaning fridge" },
  { src: "/images/team/real-team-mopping.jpg",      alt: "Capital Clean Care professional mopping" },
];

const CITIES = [
  { slug: "rockville-md", name: "Rockville" }, { slug: "bethesda-md", name: "Bethesda" },
  { slug: "north-bethesda-md", name: "North Bethesda" }, { slug: "potomac-md", name: "Potomac" },
  { slug: "chevy-chase-md", name: "Chevy Chase" }, { slug: "gaithersburg-md", name: "Gaithersburg" },
  { slug: "germantown-md", name: "Germantown" }, { slug: "kensington-md", name: "Kensington" },
  { slug: "olney-md", name: "Olney" }, { slug: "silver-spring-md", name: "Silver Spring" },
  { slug: "wheaton-md", name: "Wheaton" },
];

/* ══════════════════════════════════════════════════════════════
   MAIN PAGE
══════════════════════════════════════════════════════════════ */
const HouseCleaningPage = () => {
  const [checklistOpen, setChecklistOpen] = useState<string | null>(null);

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/house-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        {/* Preload the LCP hero image so the browser fetches it at HTML parse */}
        <link rel="preload" as="image" href={teamPhoto} fetchpriority="high" />
        <link rel="preconnect" href="https://i.ytimg.com" crossOrigin="" />
      </Helmet>
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "House Cleaning" }]} />
      <ServiceSchema serviceName={service.name} description={service.shortDescription}
        url="https://capitalcleancare.com/services/house-cleaning"
        reviews={service.testimonials?.map(t => ({ name: t.name, text: t.text, location: t.location }))} />
      <FAQSchema faqs={service.faqs} />

      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 max-w-6xl pt-6 pb-12 md:pt-8 md:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">

            {/* LEFT — text (top-aligned with the quote card on the right) */}
            <div className="order-1 lg:pt-2">
              {/* Eyebrow pill with green dot */}
              <div className="hero-anim inline-flex items-center gap-2 rounded-full px-4 py-2 mb-5" style={{ background: "#10B98112", animationDelay: "0ms" }}>
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#10B981" }} />
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: "#0F766E" }}>
                  Serving Maryland · Washington DC · Virginia
                </span>
              </div>
              <h1 className="font-manrope font-extrabold leading-[1.03] tracking-tight mb-5" style={{ fontSize: "clamp(2.6rem,5.5vw,4.1rem)", color: "#0F1E36" }}>
                <span className="hero-anim block" style={{ animationDelay: "120ms" }}>A Spotless Home,</span>
                <span className="hero-anim block" style={{ animationDelay: "230ms" }}>
                  Without the{" "}
                  <span className="relative inline-block" style={{ color: "#10B981" }}>
                    Hassle
                    <span className="hero-underline absolute left-0 -bottom-1 w-full h-1.5 rounded-full" style={{ background: "#10B981" }} />
                  </span>
                </span>
              </h1>
              <p className="hero-anim text-gray-500 mb-7 leading-relaxed text-base md:text-lg max-w-xl" style={{ animationDelay: "340ms" }}>
                Professional, eco-friendly house cleaning by licensed, insured, and background-checked teams. Trusted by 500+ homeowners across the DMV.
              </p>

              {/* 4 checkmarks — 2x2 grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {["Background-Checked Professionals", "Licensed & Fully Insured", "EPA-Certified Eco Products", "24-Hour Satisfaction Guarantee"].map((item, i) => (
                  <div key={item} className="hero-anim-sm flex items-center gap-2.5" style={{ animationDelay: `${440 + i * 80}ms` }}>
                    <CheckCircle className="h-5 w-5 shrink-0" style={{ color: "#10B981" }} />
                    <span className="text-sm font-semibold text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              {/* Stars + platforms */}
              <div className="hero-anim-sm flex flex-wrap items-center gap-x-5 gap-y-3" style={{ animationDelay: "780ms" }}>
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                  <span className="font-bold text-sm" style={{ color: "#0F1E36" }}>5.0</span>
                </div>
                <span className="text-xs text-gray-400">Rated by homeowners across MD, DC &amp; VA</span>
              </div>
              <div className="hero-anim-sm flex items-center gap-2 sm:gap-3 flex-nowrap mt-4" style={{ perspective: "800px", animationDelay: "880ms" }}>
                {/* ── Google Reviews — 3D card ── */}
                <div className="group relative flex items-center gap-2.5 rounded-2xl px-2 py-2 sm:pl-2.5 sm:pr-4 sm:py-2.5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg,#ffffff,#f1f4f9)",
                    boxShadow: "0 1px 1px rgba(255,255,255,0.9) inset, 0 -1px 2px rgba(0,0,0,0.04) inset, 0 6px 14px rgba(15,30,54,0.10), 0 2px 4px rgba(15,30,54,0.06)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}>
                  {/* glossy top highlight */}
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.55),transparent)" }} />
                  {/* logo tile with 3D depth */}
                  <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: "linear-gradient(145deg,#ffffff,#eef1f6)", boxShadow: "0 2px 6px rgba(0,0,0,0.10), 0 1px 1px rgba(255,255,255,0.9) inset" }}>
                    <svg className="h-5 w-5 drop-shadow-sm" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </span>
                  <span className="relative leading-tight">
                    <span className="block text-[12px] font-extrabold text-gray-800">Google</span>
                    <span className="flex items-center gap-0.5">
                      {[...Array(5)].map((_,i) => <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />)}
                    </span>
                  </span>
                </div>

                {/* ── Facebook — 3D card ── */}
                <div className="group relative flex items-center gap-2.5 rounded-2xl px-2 py-2 sm:pl-2.5 sm:pr-4 sm:py-2.5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg,#ffffff,#f1f4f9)",
                    boxShadow: "0 1px 1px rgba(255,255,255,0.9) inset, 0 -1px 2px rgba(0,0,0,0.04) inset, 0 6px 14px rgba(24,119,242,0.14), 0 2px 4px rgba(15,30,54,0.06)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.55),transparent)" }} />
                  <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: "linear-gradient(145deg,#1877F2,#0E5FD8)", boxShadow: "0 3px 8px rgba(24,119,242,0.40), 0 1px 1px rgba(255,255,255,0.4) inset" }}>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#ffffff">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </span>
                  <span className="relative leading-tight">
                    <span className="block text-[12px] font-extrabold text-gray-800">Facebook</span>
                    <span className="hidden sm:block text-[10px] text-gray-500">Recommended</span>
                  </span>
                </div>

                {/* ── Nextdoor — 3D card ── */}
                <div className="group relative flex items-center gap-2.5 rounded-2xl px-2 py-2 sm:pl-2.5 sm:pr-4 sm:py-2.5 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "linear-gradient(145deg,#ffffff,#f1f4f9)",
                    boxShadow: "0 1px 1px rgba(255,255,255,0.9) inset, 0 -1px 2px rgba(0,0,0,0.04) inset, 0 6px 14px rgba(0,179,108,0.16), 0 2px 4px rgba(15,30,54,0.06)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}>
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl" style={{ background: "linear-gradient(to bottom,rgba(255,255,255,0.55),transparent)" }} />
                  <span className="relative flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105"
                    style={{ background: "linear-gradient(145deg,#00C77A,#00A862)", boxShadow: "0 3px 8px rgba(0,179,108,0.40), 0 1px 1px rgba(255,255,255,0.4) inset" }}>
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#ffffff">
                      <path d="M12 3.2c-1.1 2.6-3.4 4.5-6.2 4.9v3c0 4.2 2.6 7.9 6.2 9.7 3.6-1.8 6.2-5.5 6.2-9.7v-3c-2.8-.4-5.1-2.3-6.2-4.9z" opacity="0.0"/>
                      <path d="M16.5 15.5v-3.2c0-1.6-1-2.6-2.5-2.6-.9 0-1.6.4-2 1v-.8H9.5v5.6H11v-3c0-.8.5-1.3 1.2-1.3.7 0 1.1.5 1.1 1.3v3h2.2zM8.2 9.9c.6 0 1.1-.5 1.1-1.1S8.8 7.7 8.2 7.7s-1.1.5-1.1 1.1.5 1.1 1.1 1.1zm.8 5.6V9.9H7.4v5.6H9z"/>
                    </svg>
                  </span>
                  <span className="relative leading-tight">
                    <span className="block text-[12px] font-extrabold text-gray-800">Nextdoor</span>
                    <span className="hidden sm:block text-[10px] text-gray-500">Neighbor Fave</span>
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT — clean photo + form card */}
            <div id="quote" className="order-2 lg:sticky lg:top-24">
              {/* Photo of team, clean, no overlay */}
              <div className="hero-zoom relative rounded-2xl overflow-hidden shadow-lg mb-[-2.5rem]" style={{ animationDelay: "200ms" }}>
                <img src={teamPhoto} alt="Capital Clean Care professional cleaning a window"
                  className="w-full h-56 md:h-64 object-cover object-[center_35%]"
                  width={900} height={600}
                  loading="eager" fetchPriority="high" decoding="async" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-sm">
                  <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#10B981" }} />
                  <span className="text-[10px] font-bold uppercase tracking-wide text-gray-700">Real Team · Real Results</span>
                </div>
                <div className="absolute top-3 right-3 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-lg animate-pulse-subtle" style={{ background: "linear-gradient(135deg,#059669,#10B981)", boxShadow: "0 4px 14px rgba(16,185,129,0.5)" }}>
                  15% OFF
                </div>
              </div>

              {/* Form card */}
              <div className="hero-anim relative bg-white rounded-2xl overflow-hidden shadow-2xl border border-gray-100" style={{ animationDelay: "420ms" }}>
                <div className="px-6 pt-6 pb-3 border-b border-gray-100">
                  <h2 className="font-manrope font-extrabold text-gray-900 text-xl">Get Your Free Quote</h2>
                  <p className="text-gray-400 text-xs mt-0.5">Fast. Easy. No Obligation.</p>
                </div>
                <div className="px-6 py-5">
                  <QuoteFormInline variant="hero" />
                  <div className="mt-5 pt-4 border-t border-gray-100 grid grid-cols-2 gap-1.5">
                    {["Licensed & Insured", "Background Checked", "5-Star Rated", "Eco-Friendly", "500+ Homes", "9+ Years"].map(b => (
                      <div key={b} className="flex items-center gap-1.5">
                        <CheckCircle className="h-3 w-3 shrink-0" style={{ color: "#10B981" }} />
                        <span className="text-[11px] text-gray-500 font-medium">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ 2. WHY CHOOSE US ═════════════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem] bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "#10B981" }}>Why Capital Clean Care</p>
            <h2 className="font-manrope text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-10">
              Why Homeowners Choose Us
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf,   title: "Safe For Families & Pets",  desc: "EPA Safer Choice certified products — plant-based, non-toxic, safe for kids and pets." },
              { icon: Users,  title: "Trusted Professionals",     desc: "Every cleaner is background-checked, trained, and insured before entering any home." },
              { icon: Award,  title: "Consistent Quality",        desc: "Our 55-point checklist ensures nothing is missed. Same team, same standards every visit." },
              { icon: Shield, title: "Satisfaction Guaranteed",   desc: "Not satisfied? We return within 24 hours to re-clean at no charge, no questions asked." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 100} className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 block">
                <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg,#0F1E36,#1E3A5F)", boxShadow: "0 6px 16px rgba(15,30,54,0.25)" }}>
                  <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "linear-gradient(135deg,#059669,#10B981)" }} />
                  <Icon className="relative h-6 w-6 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="font-manrope font-extrabold text-gray-900 text-sm mb-2">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. BEFORE & AFTER ════════════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem]" style={{ background: "#F9FAFB" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "#10B981" }}>Real Work · Real Results</p>
            <h2 className="font-manrope text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2">See The Difference</h2>
            <p className="text-center text-gray-400 text-sm mb-10">Drag the slider to compare before &amp; after</p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: "Kitchen",          before: kitchenGraniteBefore, after: kitchenGraniteAfter },
              { label: "Kitchen — Island", before: kitchenIslandBefore,  after: kitchenIslandAfter },
              { label: "Stovetop",         before: stoveBefore,          after: stoveAfter },
            ].map((b, i) => (
              <Reveal key={b.label} delay={i * 120}>
                <BASlider label={b.label} before={b.before} after={b.after} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="text-center mt-10">
              <Button asChild size="lg" className="rounded-full px-10 font-bold text-white hover:-translate-y-0.5 transition-transform"
                style={{ background: "linear-gradient(135deg,#059669,#10B981)" }}>
                <a href="#quote" onClick={() => trackBookNowClick("hc_ba")}>Get This Result in Your Home <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 5. REVIEWS ═══════════════════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem] bg-white overflow-hidden">
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "#10B981" }}>Verified Reviews</p>
            <h2 className="font-manrope text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2">What Our Clients Are Saying</h2>
            <div className="flex items-center justify-center gap-1.5 mb-10">
              {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
              <span className="text-sm font-bold ml-1 text-gray-900">5.0</span>
              <span className="text-sm text-gray-400">· Google Verified · 500+ Reviews</span>
            </div>
          </Reveal>
        </div>

        {/* Infinite marquee carousel */}
        <div className="relative">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
          <div className="flex gap-5 animate-marquee w-max hover:[animation-play-state:paused]">
            {[...REVIEWS, ...REVIEWS].map((r, i) => (
              <div key={i} className="w-80 shrink-0 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_,j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                  </div>
                  {/* Google "G" logo */}
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-sm"
                    style={{ background: "#0F1E36" }}>{r.name[0]}</div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video review */}
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal delay={150} className="mt-12 max-w-2xl mx-auto rounded-2xl overflow-hidden border border-gray-100 shadow-md block">
            <div className="bg-gray-50 px-4 py-2.5 border-b border-gray-100 flex items-center gap-2">
              {[...Array(5)].map((_,i) => <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />)}
              <span className="text-xs font-semibold text-gray-700 ml-1">Real Client Video Review</span>
            </div>
            <div className="aspect-video">
              <LazyYouTube id="xI602FI_iOU" title="Capital Clean Care client video testimonial" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══ 6. TEAM PHOTOS ═══════════════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem]" style={{ background: "#F9FAFB" }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "#10B981" }}>Our Team</p>
            <h2 className="font-manrope text-2xl font-extrabold text-center text-gray-900 mb-10">Professionals You Can Trust</h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TEAM_PHOTOS.map((p, i) => (
              <Reveal key={i} delay={i * 100} className="group aspect-[3/4] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-shadow duration-300 block">
                <img src={p.src} alt={p.alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. PROCESS + GREENSHIELD ═════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem] bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — 3 steps with cleaner photo */}
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "#10B981" }}>How It Works</p>
              <h2 className="font-manrope text-2xl font-extrabold text-gray-900 mb-8">A Simple Process For A Cleaner Home</h2>
              <div className="space-y-6">
                {[
                  { n: "1", title: "Request Your Quote",   desc: "Fill out the quick form — no commitment. We respond within 2 hours with your exact price." },
                  { n: "2", title: "We Clean Your Home",   desc: "Our background-checked team follows our 55-point checklist with eco-friendly supplies." },
                  { n: "3", title: "Enjoy Your Free Time", desc: "Walk in to a spotless home. If anything's off, we fix it free within 24 hours." },
                ].map((s, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-white text-base shadow-md"
                      style={{ background: "linear-gradient(135deg,#059669,#10B981)" }}>{s.n}</div>
                    <div className="pt-1">
                      <h3 className="font-manrope font-extrabold text-gray-900 mb-1">{s.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full font-bold text-white hover:-translate-y-0.5 transition-transform"
                  style={{ background: "linear-gradient(135deg,#059669,#10B981)" }}>
                  <a href="#quote" onClick={() => trackBookNowClick("hc_process")}>Start With A Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </Reveal>

            {/* RIGHT — GreenShield 3-step */}
            <Reveal delay={150} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 block">
              <div className="px-6 py-5 border-b border-gray-100" style={{ background: "#F0FDF9" }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xl">🛡️</span>
                  <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#059669" }}>Our Proprietary Method</p>
                </div>
                <h3 className="font-manrope font-extrabold text-gray-900 text-lg">The GreenShield Cleaning Method™</h3>
                <p className="text-xs text-gray-400 mt-0.5">Developed over 9+ years serving MD, DC & VA</p>
              </div>
              <div className="p-6 grid grid-cols-3 gap-4">
                {[
                  { label: "GREEN",  icon: "🌿", color: "#059669", desc: "EPA Safer Choice eco-friendly products, safe for kids & pets." },
                  { label: "SHIELD", icon: "🛡️", color: "#1E3A5F", desc: "Proven 55-point process that protects every surface." },
                  { label: "CARE",   icon: "💚", color: "#10B981", desc: "White-glove attention to detail on every single visit." },
                ].map(s => (
                  <div key={s.label} className="text-center">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl shadow-sm"
                      style={{ background: s.color + "15", border: `1.5px solid ${s.color}30` }}>
                      {s.icon}
                    </div>
                    <p className="font-manrope font-black text-sm mb-1" style={{ color: s.color }}>{s.label}</p>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="px-6 pb-5 space-y-3">
                {[
                  { n:"01", title:"Assess & Protect",      desc:"Walk-through to customize the clean to your space." },
                  { n:"02", title:"Dust-Free Air Start",   desc:"Top-to-bottom dry dusting before any wet cleaning." },
                  { n:"03", title:"GreenShield Sanitize",  desc:"EPA Safer Choice™ disinfectants on all surfaces." },
                  { n:"04", title:"Deep Scrub & Polish",   desc:"Streak-free shine on every surface and fixture." },
                  { n:"05", title:"White-Glove Inspection",desc:"55-point quality check before we leave." },
                ].map((s, i, arr) => (
                  <div key={s.n} className="flex gap-3 items-start">
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
                        style={{ background: "#0F1E36" }}>{s.n}</div>
                      {i < arr.length - 1 && <div className="w-px h-3 bg-gray-200 mt-0.5" />}
                    </div>
                    <div className="pb-1">
                      <p className="text-xs font-bold text-gray-800">{s.title}</p>
                      <p className="text-[11px] text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ══ 8. CHECKLIST ═════════════════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem]" style={{ background: "#F9FAFB" }}>
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "#10B981" }}>Full Transparency</p>
          <h2 className="font-manrope text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-2">Our 55-Point Cleaning Checklist</h2>
          <p className="text-center text-gray-400 text-sm mb-10">Every visit. Every room. Nothing skipped.</p>
          </Reveal>
          <div className="space-y-2">
            {CHECKLIST.map(cat => (
              <div key={cat.cat} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left"
                  onClick={() => setChecklistOpen(checklistOpen === cat.cat ? null : cat.cat)}>
                  <span className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 shrink-0" style={{ color: "#10B981" }} />
                    <span className="font-manrope font-extrabold text-sm text-gray-900">{cat.cat}</span>
                    <span className="text-xs text-gray-400">— {cat.items.length} items</span>
                  </span>
                  {checklistOpen === cat.cat
                    ? <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
                    : <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />}
                </button>
                {checklistOpen === cat.cat && (
                  <div className="px-5 pb-4 border-t border-gray-50">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-3">
                      {cat.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <CheckCircle className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: "#10B981" }} />
                          <span className="text-xs text-gray-500 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 9. GUARANTEE ═════════════════════════════════════════ */}
      <section className="py-12 md:py-14" style={{ background: "linear-gradient(135deg,#064E3B 0%,#065F46 100%)" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-14">
            {/* Golden animated seal */}
            <div className="shrink-0 animate-gold-pulse">
              <div className="relative w-44 h-44">
                <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 176 176" style={{ transformOrigin: "88px 88px" }}>
                  {Array.from({ length: 24 }).map((_, i) => {
                    const ang = (i * 15 * Math.PI) / 180;
                    const isLong = i % 2 === 0;
                    const r1 = 76, r2 = isLong ? 86 : 81;
                    return <line key={i} x1={88 + r1*Math.sin(ang)} y1={88 - r1*Math.cos(ang)} x2={88 + r2*Math.sin(ang)} y2={88 - r2*Math.cos(ang)}
                      stroke={isLong ? "#F59E0B" : "#FCD34D"} strokeWidth={isLong ? "2.5" : "1.5"} strokeLinecap="round" />;
                  })}
                  <circle cx="88" cy="88" r="74" fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.5" />
                </svg>
                <svg className="absolute inset-0 w-full h-full animate-gold-shimmer" viewBox="0 0 176 176">
                  <defs>
                    <radialGradient id="g1" cx="38%" cy="32%">
                      <stop offset="0%" stopColor="#FDE68A"/>
                      <stop offset="45%" stopColor="#F59E0B"/>
                      <stop offset="100%" stopColor="#92400E"/>
                    </radialGradient>
                  </defs>
                  <circle cx="88" cy="88" r="70" fill="url(#g1)" />
                  <circle cx="88" cy="88" r="70" fill="none" stroke="#FEF3C7" strokeWidth="2" opacity="0.5" />
                  <circle cx="88" cy="88" r="62" fill="none" stroke="#FEF3C7" strokeWidth="1" opacity="0.3" />
                  {Array.from({ length: 8 }).map((_, i) => {
                    const a = (i * 45 * Math.PI) / 180;
                    return <polygon key={i} transform={`translate(${88+65*Math.sin(a)},${88-65*Math.cos(a)})`}
                      points="0,-4 1,0 4,0 1.5,2.5 2.5,5.5 0,3.5 -2.5,5.5 -1.5,2.5 -4,0 -1,0" fill="#92400E" opacity="0.6" />;
                  })}
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-manrope font-black leading-none" style={{ fontSize: "3.2rem", color: "#1C1917" }}>24</span>
                  <span className="font-bold text-xs uppercase tracking-widest" style={{ color: "#1C1917" }}>Hour</span>
                  <span className="font-semibold text-[9px] uppercase tracking-widest mt-0.5" style={{ color: "#44403C" }}>Guarantee</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">24-Hour Satisfaction Guarantee</h2>
              <p className="text-white/75 text-sm leading-relaxed mb-5 max-w-xl">
                If you're not completely happy with your cleaning, we'll return within 24 hours and re-clean the area at no extra cost. No hassle. No questions asked.
              </p>
              <div className="flex flex-wrap gap-2">
                {["No extra charge", "Same team returns", "No questions asked", "24-hour window"].map(item => (
                  <span key={item} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    <CheckCircle className="h-3 w-3 text-amber-400 shrink-0" />{item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 10. FAQ ══════════════════════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem] bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-center mb-2" style={{ color: "#10B981" }}>Got Questions?</p>
            <h2 className="font-manrope text-2xl md:text-3xl font-extrabold text-center text-gray-900 mb-10">Frequently Asked Questions</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {[service.faqs.slice(0, 7), service.faqs.slice(7, 14)].map((col, ci) => (
              <Accordion key={ci} type="single" collapsible className="w-full">
                {col.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${ci}-${i}`}>
                    <AccordionTrigger className="text-left font-manrope font-semibold text-sm text-gray-900">{faq.q}</AccordionTrigger>
                    <AccordionContent className="text-sm text-gray-500 leading-relaxed">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 11. BOTTOM CTA ═══════════════════════════════════════ */}
      <section className="py-14 md:py-[4.5rem]" style={{ background: "#0B1527" }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <div className="flex justify-center gap-0.5 mb-3">
              {[...Array(5)].map((_,i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">Ready For A Cleaner Home?</h2>
            <p className="text-white/50 text-sm">Trusted Across Maryland, DC & Virginia · 15% OFF First Clean</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
            <QuoteFormInline variant="footer" />
          </div>
          <div className="text-center mt-6 space-y-1">
            <a href="tel:+12407042551" onClick={() => trackPhoneClick("hc_footer")}
              className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors">
              <Phone className="h-4 w-4" /> (240) 704-2551
            </a>
            <p className="text-white/30 text-xs">Serving Maryland · Washington DC · Northern Virginia</p>
          </div>
        </div>
      </section>

      {/* ══ 12. SERVICE AREAS ════════════════════════════════════ */}
      <section className="py-8 border-t border-gray-100 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-center text-xs font-semibold text-gray-500 mb-3">House Cleaning Near You</p>
          <div className="flex flex-wrap justify-center gap-2">
            {CITIES.map(c => (
              <Link key={c.slug} to={`/locations/${c.slug}/house-cleaning`}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-xs font-medium text-gray-600 hover:border-green-500 hover:text-green-600 transition-all">
                <Home className="h-3 w-3" />{c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ STICKY BOTTOM CTA (mobile only) — same as homepage ═══ */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/97 backdrop-blur border-t border-gray-100 shadow-[0_-4px_24px_rgba(0,0,0,0.12)] px-3 py-3 flex items-center gap-2">
        <a href="tel:+12407042551" onClick={() => trackPhoneClick("hc_sticky_mobile")}
          aria-label="Call us"
          className="flex items-center justify-center gap-1.5 h-12 px-4 rounded-full border-2 font-bold text-sm shrink-0 transition-colors"
          style={{ borderColor: "#E5E7EB", color: "#0F1E36" }}>
          <Phone className="h-4 w-4" style={{ color: "#10B981" }} /> Call
        </a>
        <a href="#quote" onClick={() => trackBookNowClick("hc_sticky_mobile")}
          className="flex-1 h-12 rounded-full flex items-center justify-center gap-1.5 font-bold text-sm text-white shadow-lg transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg,#059669,#10B981)", boxShadow: "0 4px 16px rgba(16,185,129,0.35)" }}>
          Free Quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>

    </Layout>
  );
};

export default HouseCleaningPage;
