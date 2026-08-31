import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, MapPin, Shield, Search, Leaf, Users, Star, CheckCircle, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dirServiceCards as services } from "@/data/home-directory";
import { mdCities, dcCities, vaCities } from "@/data/locations";
import { dirCities as slCities } from "@/data/sl-directory";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import { BUSINESS_INFO } from "@/data/business-info";
import { GOOGLE_LISTING_URL } from "@/data/realReviews";
import PartnerLinks from "@/components/PartnerLinks";
import GoogleBusinessLinks from "@/components/GoogleBusinessLinks";
import logo from "@/assets/logo.webp";

const TOP_SERVICE_CITIES = ["rockville-md", "bethesda-md", "silver-spring-md", "arlington-va", "alexandria-va", "washington-dc", "fairfax-va", "gaithersburg-md"];

// Popular Guides — real, prerendered /resources posts (static links in the footer).
const POPULAR_GUIDES: { to: string; label: string }[] = [
  { to: "/resources/house-cleaning-prices-maryland-2026", label: "House Cleaning Prices in Maryland (2026)" },
  { to: "/resources/how-much-does-deep-cleaning-cost", label: "How Much Does a Deep Cleaning Cost?" },
  { to: "/resources/deep-cleaning-vs-regular-cleaning", label: "Deep Cleaning vs Regular Cleaning" },
  { to: "/resources/what-is-included-in-a-deep-cleaning", label: "What's Included in a Deep Cleaning" },
  { to: "/resources/move-in-cleaning-checklist", label: "Move-In / Move-Out Cleaning Checklist" },
  { to: "/resources/how-often-should-you-hire-a-cleaning-service", label: "How Often Should You Hire a Cleaner?" },
];

const Footer = () => {
  const isSpanish = useLocation().pathname.startsWith("/es");
  const t = (en: string, es: string) => (isSpanish ? es : en);

  const serviceLinks = isSpanish
    ? [
        { to: "/es/limpieza-de-casas", label: "Limpieza de Casas" },
        { to: "/es/limpieza-profunda", label: "Limpieza Profunda" },
        { to: "/es/limpieza-recurrente", label: "Limpieza Recurrente" },
        { to: "/es/limpieza-de-mudanza", label: "Limpieza de Mudanza" },
        { to: "/es/limpieza-airbnb", label: "Limpieza Airbnb" },
        { to: "/es/limpieza-post-construccion", label: "Limpieza Post-Construcción" },
      ]
    : services.map((s) => ({ to: `/services/${s.slug}`, label: s.name }));

  const companyLinks = isSpanish
    ? [
        { to: "/es", label: "Inicio" },
        { to: "/es/nosotros", label: "Nosotros" },
        { to: "/reviews", label: "Reseñas" },
        { to: "/resources", label: "Recursos" },
        { to: "/gift-cards", label: "Tarjetas de Regalo" },
        { to: "/es/contacto", label: "Contacto" },
        { to: "/faq", label: "Preguntas Frecuentes" },
      ]
    : [
        { to: "/about", label: "About Us" },
        { to: "/reviews", label: "Reviews" },
        { to: "/resources", label: "Resources" },
        { to: "/gift-cards", label: "Gift Cards" },
        { to: "/contact", label: "Contact" },
        { to: "/faq", label: "FAQ" },
      ];

  return (
  <footer className="w-full overflow-x-clip bg-primary text-primary-foreground">
    {/* Conversion CTA */}
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary via-primary to-[#1268a0]">
      <div aria-hidden="true" className="absolute -left-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-16 -top-32 h-80 w-80 rounded-full border-[64px] border-white/5" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-8 px-5 py-12 sm:px-6 md:grid-cols-[1fr_auto] md:py-14 lg:px-8">
        <div className="max-w-2xl text-center md:text-left">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            {t("A cleaner home starts here", "Un hogar más limpio comienza aquí")}
          </p>
          <h3 className="font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
            {t("Ready to come home to spotless?", "¿Listo para volver a un hogar impecable?")}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-white/75 md:text-lg">
            {t("Tell us what you need. Your personalized, no-obligation quote takes only minutes.", "Cuéntanos qué necesitas. Tu cotización personalizada y sin compromiso toma solo minutos.")}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:mx-auto sm:w-auto sm:flex-row md:mx-0 md:flex-col lg:flex-row">
          <Button size="lg" className="h-14 rounded-xl bg-white px-7 font-bold text-primary shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-2xl" asChild>
            <a href={isSpanish ? "/es/contacto" : "/#quote"} onClick={() => trackBookNowClick("footer_cta_band")}>
              {t("Get My Free Quote", "Obtener Mi Cotización")} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" className="h-14 rounded-xl border-white/35 bg-white/5 px-6 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/15 hover:text-white" asChild>
            <a href="tel:+12407042551" onClick={() => trackPhoneClick("footer_cta_band")}><Phone className="mr-2 h-4 w-4" /> {t("Call (240) 704-2551", "Llama al (240) 704-2551")}</a>
          </Button>
        </div>
      </div>
    </section>

    {/* ====== TRUST BAR ====== */}
    <div className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-100 py-9 md:py-12">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-white bg-white/75 p-4 shadow-[0_24px_70px_-28px_rgba(15,50,85,0.28)] ring-1 ring-slate-200/70 backdrop-blur-xl sm:p-6">
          <div className="mb-6 flex flex-col items-center justify-between gap-2 px-2 text-center md:flex-row md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{t("The Capital Clean Care standard", "El estándar Capital Clean Care")}</p>
              <h4 className="mt-1 font-heading text-xl font-bold text-slate-900 md:text-2xl">{t("Confidence built into every clean.", "Confianza incluida en cada limpieza.")}</h4>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-slate-500">{t("Tap any promise to see how we protect your home.", "Selecciona una promesa para ver cómo protegemos tu hogar.")}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          <Link to={isSpanish ? "/es/nosotros" : "/about"} className="group relative flex min-h-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-3 py-4 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_35px_-18px_rgba(2,132,199,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-accent/20"><Shield className="h-5 w-5 text-primary" /></span>
            <span className="text-xs font-semibold leading-snug text-slate-700">{t("Licensed & Insured", "Con Licencia y Seguro")}</span>
            <ArrowRight className="absolute bottom-3 right-3 h-3.5 w-3.5 translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
          <Link to={isSpanish ? "/es/nosotros" : "/about"} className="group relative flex min-h-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-3 py-4 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_35px_-18px_rgba(2,132,199,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-accent/20"><Search className="h-5 w-5 text-primary" /></span>
            <span className="text-xs font-semibold leading-snug text-slate-700">{t("Background-Checked", "Personal Verificado")}</span>
            <ArrowRight className="absolute bottom-3 right-3 h-3.5 w-3.5 translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
          <Link to="/services/eco-friendly-cleaning" className="group relative flex min-h-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-3 py-4 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-emerald-300 hover:shadow-[0_18px_35px_-18px_rgba(5,150,105,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-emerald-100"><Leaf className="h-5 w-5 text-emerald-600" /></span>
            <span className="text-xs font-semibold leading-snug text-slate-700">{t("100% Eco-Friendly", "100% Ecológico")}</span>
            <ArrowRight className="absolute bottom-3 right-3 h-3.5 w-3.5 translate-x-1 text-emerald-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
          <Link to={isSpanish ? "/es/nosotros" : "/about"} className="group relative flex min-h-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-3 py-4 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_35px_-18px_rgba(2,132,199,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3 group-hover:bg-accent/20"><Users className="h-5 w-5 text-primary" /></span>
            <span className="text-xs font-semibold leading-snug text-slate-700">{t("Family & Latino-Owned", "Negocio Familiar Latino")}</span>
            <ArrowRight className="absolute bottom-3 right-3 h-3.5 w-3.5 translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
          {/* Real Google counter (single source: BUSINESS_INFO.rating) linked to the live listing */}
          <a
            href={GOOGLE_LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex min-h-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-b from-amber-50 to-white px-3 py-4 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-[0_18px_35px_-18px_rgba(245,158,11,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-100 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"><Star className="h-5 w-5 fill-amber-400 text-amber-500" /></span>
            <span className="text-xs font-bold leading-snug text-slate-800">
              {t(
                `${BUSINESS_INFO.rating.value}★ · ${BUSINESS_INFO.rating.count} Google Reviews`,
                `${BUSINESS_INFO.rating.value}★ · ${BUSINESS_INFO.rating.count} Reseñas en Google`,
              )}
            </span>
            <ArrowRight className="absolute bottom-3 right-3 h-3.5 w-3.5 translate-x-1 text-amber-600 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </a>
          <Link to={isSpanish ? "/es/contacto" : "/contact"} className="group relative flex min-h-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-3 py-4 text-center transition-all duration-500 hover:-translate-y-1.5 hover:border-sky-300 hover:shadow-[0_18px_35px_-18px_rgba(2,132,199,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
            <span className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-accent/20"><CheckCircle className="h-5 w-5 text-primary" /></span>
            <span className="text-xs font-semibold leading-snug text-slate-700">{t("Satisfaction Guarantee", "Garantía de Satisfacción")}</span>
            <ArrowRight className="absolute bottom-3 right-3 h-3.5 w-3.5 translate-x-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
          </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-6 md:py-12 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Capital Clean Care logo" width="940" height="788" className="h-7 w-7 object-contain" />
            <span className="font-heading font-bold text-lg">Capital Clean Care</span>
          </div>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            {t(
              "Premium residential cleaning with eco-friendly, non-toxic products. Licensed & insured with background-checked teams across Maryland, Washington DC, and Northern Virginia.",
              "Limpieza residencial premium con productos ecológicos y no tóxicos. Con licencia, seguro y equipos verificados en Maryland, Washington DC y el Norte de Virginia."
            )}
          </p>
          <div className="space-y-2 text-sm text-primary-foreground/70">
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 4111 Postgate Terrace, Silver Spring, MD 20906</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> (240) 704-2551</p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href="mailto:info@capitalcleancare.com" className="hover:text-primary-foreground transition-colors">info@capitalcleancare.com</a></p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {t("Mon–Sat: 8 AM – 6 PM", "Lun–Sáb: 8 AM – 6 PM")}</p>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4">{t("Our Services", "Nuestros Servicios")}</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {serviceLinks.map((s) => (
              <li key={s.to}>
                <Link to={s.to} className="hover:text-accent transition-colors">{s.label}</Link>
              </li>
            ))}
            <li>
              <Link to="/senior-home-cleaning-montgomery-county-md" className="hover:text-accent transition-colors">{t("Senior Home Cleaning", "Limpieza para Personas Mayores")}</Link>
            </li>
          </ul>
        </div>

        {/* MD Locations */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Maryland</h4>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-1 text-sm text-primary-foreground/70">
            <Link to="/maryland" className="hover:text-accent transition-colors font-medium col-span-2 md:col-span-1 mb-1">{t("All Maryland →", "Todo Maryland →")}</Link>
            {mdCities.filter(c => !c.slug.includes("county")).slice(0, 8).map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
            ))}
          </div>
          <h4 className="font-heading font-semibold mt-6 mb-4">DC</h4>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-1 text-sm text-primary-foreground/70">
            <Link to="/washington-dc" className="hover:text-accent transition-colors font-medium col-span-2 md:col-span-1 mb-1">{t("All DC →", "Todo DC →")}</Link>
            {dcCities.slice(0, 4).map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
            ))}
          </div>
        </div>

        {/* VA Locations */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Virginia</h4>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-x-2 gap-y-1 text-sm text-primary-foreground/70">
            <Link to="/virginia" className="hover:text-accent transition-colors font-medium col-span-2 md:col-span-1 mb-1">{t("All Virginia →", "Toda Virginia →")}</Link>
            {vaCities.map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Popular Guides + Service Areas (core cities) — real static links */}
      <div className="mt-10 pt-8 border-t border-primary-foreground/10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">{t("Popular Guides", "Guías Populares")}</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-primary-foreground/70">
            {POPULAR_GUIDES.map((g) => (
              <li key={g.to}>
                <Link to={g.to} className="hover:text-accent transition-colors">{g.label}</Link>
              </li>
            ))}
            <li className="sm:col-span-2">
              <Link to="/resources" className="hover:text-accent transition-colors font-medium">{t("All guides & resources →", "Todas las guías y recursos →")}</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm">{t("Service Areas", "Áreas de Servicio")}</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1.5 text-sm text-primary-foreground/70">
            {slCities.filter((c) => TOP_SERVICE_CITIES.includes(c.slug)).map((c) => (
              <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
            ))}
          </div>
        </div>
      </div>

      {/* Company / utility links */}
      <div className="mt-8 pt-6 border-t border-primary-foreground/10">
        <h4 className="font-heading font-semibold mb-3 text-sm">{t("Company", "Empresa")}</h4>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-primary-foreground/60">
          {companyLinks.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-accent transition-colors">{l.label}</Link>
          ))}
        </div>
      </div>

      {/* Partners & GBP */}
      <div className="mt-6 pt-6 border-t border-primary-foreground/10">
        <PartnerLinks />
      </div>

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
        <div className="flex flex-col sm:flex-row items-center gap-2">
          <p>© {new Date().getFullYear()} Capital Clean Care. {t("All rights reserved.", "Todos los derechos reservados.")}</p>
          <span className="hidden sm:inline">·</span>
          <Link to="/faq" className="hover:text-accent transition-colors">{t("FAQ", "Preguntas Frecuentes")}</Link>
          <span className="hidden sm:inline">·</span>
          <Link to="/privacy-policy" className="hover:text-accent transition-colors">{t("Privacy Policy", "Política de Privacidad")}</Link>
          <span className="hidden sm:inline">·</span>
          <Link to="/terms-of-service" className="hover:text-accent transition-colors">{t("Terms of Service", "Términos de Servicio")}</Link>
          <span className="hidden sm:inline">·</span>
          <Link to="/careers" className="hover:text-accent transition-colors">{t("Join Our Team", "Únete al Equipo")}</Link>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.instagram.com/capital_cleancare" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="https://www.facebook.com/capital.clean.care" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on Facebook">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="https://www.tiktok.com/@capitalcleancare1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Follow Capital Clean Care on TikTok">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
              <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3c-.94 0-2.43-.39-3.24-1.48z" />
            </svg>
          </a>
        </div>
        <p>{t("Serving Maryland • Washington DC • Northern Virginia", "Sirviendo Maryland • Washington DC • Norte de Virginia")}</p>
      </div>
      <p className="text-center text-xs text-primary-foreground/70 pb-4">
        {t(
          "Capital Clean Care LLC is not affiliated with any other cleaning company with a similar name operating in the Maryland area.",
          "Capital Clean Care LLC no está afiliada a ninguna otra empresa de limpieza con nombre similar que opere en el área de Maryland."
        )}
      </p>
    </div>

  </footer>
  );
};

export default Footer;
