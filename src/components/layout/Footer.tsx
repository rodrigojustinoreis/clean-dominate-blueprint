import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, MapPin, Shield, Search, Leaf, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dirServiceCards as services } from "@/data/home-directory";
import { dirCities as slCities } from "@/data/sl-directory";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import { BUSINESS_INFO } from "@/data/business-info";
import { GOOGLE_LISTING_URL } from "@/data/realReviews";
import PartnerLinks from "@/components/PartnerLinks";
import logo from "@/assets/logo.webp";

// A short, curated set of top cities for the footer's "Areas We Serve" column — the deep
// city×service link grid was removed (boilerplate; contextual links + sitemap carry that).
const TOP_CITIES = ["rockville-md", "bethesda-md", "silver-spring-md", "gaithersburg-md", "arlington-va", "alexandria-va", "fairfax-va", "washington-dc"];

const TRUST = [
  { icon: Shield, en: "Licensed & Insured", es: "Con Licencia y Seguro" },
  { icon: Search, en: "Background-Checked", es: "Personal Verificado" },
  { icon: Leaf, en: "100% Eco-Friendly", es: "100% Ecológico" },
  { icon: CheckCircle, en: "Satisfaction Guarantee", es: "Garantía de Satisfacción" },
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
        { to: "/es/limpieza-post-construccion", label: "Post-Construcción" },
      ]
    : services.map((s) => ({ to: `/services/${s.slug}`, label: s.name }));

  const companyLinks = isSpanish
    ? [
        { to: "/es/nosotros", label: "Nosotros" },
        { to: "/reviews", label: "Reseñas" },
        { to: "/resources", label: "Recursos" },
        { to: "/pricing", label: "Precios" },
        { to: "/gift-cards", label: "Tarjetas de Regalo" },
        { to: "/es/contacto", label: "Contacto" },
        { to: "/faq", label: "Preguntas Frecuentes" },
      ]
    : [
        { to: "/about", label: "About Us" },
        { to: "/reviews", label: "Reviews" },
        { to: "/resources", label: "Resources" },
        { to: "/pricing", label: "Pricing" },
        { to: "/gift-cards", label: "Gift Cards" },
        { to: "/contact", label: "Contact" },
        { to: "/faq", label: "FAQ" },
      ];

  const topCities = slCities.filter((c) => TOP_CITIES.includes(c.slug));

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Band */}
      <div className="bg-accent">
        <div className="container mx-auto px-4 py-5 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-accent-foreground text-center md:text-left">
          <div>
            <h3 className="font-heading text-xl md:text-2xl font-bold">{t("Ready for a Spotless Home?", "¿Listo para una casa impecable?")}</h3>
            <p className="opacity-90 text-sm">{t("Get your free, no-obligation quote in minutes.", "Obtén tu cotización gratis y sin compromiso en minutos.")}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto shrink-0">
            <Button variant="default" size="lg" asChild>
              <a href={isSpanish ? "/es/contacto" : "/#quote"} onClick={() => trackBookNowClick("footer_cta_band")}>{t("Get a Free Quote", "Cotización Gratis")}</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-2 border-accent-foreground/70 text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground" asChild>
              <a href="tel:+12407042551" onClick={() => trackPhoneClick("footer_cta_band")}><Phone className="h-4 w-4 mr-2" /> {t("Call Now", "Llamar Ahora")}</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-b border-primary-foreground/10 bg-primary-foreground/[0.04]">
        <div className="container mx-auto px-4 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-primary-foreground/80">
          {TRUST.map((it) => (
            <span key={it.en} className="flex items-center gap-1.5">
              <it.icon className="h-4 w-4 text-accent" /> {t(it.en, it.es)}
            </span>
          ))}
          <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Star className="h-4 w-4 text-accent fill-accent/30" /> {BUSINESS_INFO.rating.value}★ · {BUSINESS_INFO.rating.count} {t("Google Reviews", "Reseñas en Google")}
          </a>
        </div>
      </div>

      {/* Main grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand + contact */}
          <div className="col-span-2 lg:col-span-1 space-y-3">
            <Link to={isSpanish ? "/es" : "/"} className="flex items-center gap-2">
              <img src={logo} alt="Capital Clean Care logo" className="h-7 w-7 object-contain" />
              <span className="font-heading font-bold text-lg">Capital Clean Care</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              {t(
                "Premium eco-friendly residential cleaning. Licensed, insured & background-checked teams across MD, DC & Northern Virginia.",
                "Limpieza residencial premium y ecológica. Equipos con licencia, seguro y verificados en MD, DC y el Norte de Virginia."
              )}
            </p>
            <div className="space-y-1.5 text-sm text-primary-foreground/70">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0" /> Silver Spring, MD 20906</p>
              <a href="tel:+12407042551" className="flex items-center gap-2 hover:text-primary-foreground transition-colors"><Phone className="h-4 w-4 shrink-0" /> (240) 704-2551</a>
              <a href="mailto:info@capitalcleancare.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors"><Mail className="h-4 w-4 shrink-0" /> info@capitalcleancare.com</a>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 shrink-0" /> {t("Mon–Sat: 8 AM – 6 PM", "Lun–Sáb: 8 AM – 6 PM")}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">{t("Services", "Servicios")}</h4>
            <ul className="space-y-1.5 text-sm text-primary-foreground/70">
              {serviceLinks.map((s) => (
                <li key={s.to}><Link to={s.to} className="hover:text-accent transition-colors">{s.label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Areas We Serve */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">{t("Areas We Serve", "Áreas de Servicio")}</h4>
            <ul className="space-y-1.5 text-sm text-primary-foreground/70">
              <li><Link to="/maryland" className="hover:text-accent transition-colors font-medium">{t("Maryland", "Maryland")}</Link></li>
              <li><Link to="/washington-dc" className="hover:text-accent transition-colors font-medium">{t("Washington, DC", "Washington, DC")}</Link></li>
              <li><Link to="/virginia" className="hover:text-accent transition-colors font-medium">{t("Northern Virginia", "Norte de Virginia")}</Link></li>
              <li className="pt-1.5 grid grid-cols-2 gap-x-3 gap-y-1 text-[13px] text-primary-foreground/55">
                {topCities.map((c) => (
                  <Link key={c.slug} to={`/locations/${c.slug}`} className="hover:text-accent transition-colors truncate">{c.name}</Link>
                ))}
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-heading font-semibold text-sm mb-3">{t("Company", "Empresa")}</h4>
            <ul className="space-y-1.5 text-sm text-primary-foreground/70">
              {companyLinks.map((l) => (
                <li key={l.to}><Link to={l.to} className="hover:text-accent transition-colors">{l.label}</Link></li>
              ))}
              <li><Link to="/careers" className="hover:text-accent transition-colors">{t("Join Our Team", "Únete al Equipo")}</Link></li>
            </ul>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10">
          <PartnerLinks />
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-6 border-t border-primary-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/55">
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <p>© {new Date().getFullYear()} Capital Clean Care</p>
            <Link to="/privacy-policy" className="hover:text-accent transition-colors">{t("Privacy Policy", "Privacidad")}</Link>
            <Link to="/terms-of-service" className="hover:text-accent transition-colors">{t("Terms of Service", "Términos")}</Link>
            <span className="hidden sm:inline text-primary-foreground/30">·</span>
            <span>{t("Serving MD • DC • Northern Virginia", "Sirviendo MD • DC • Norte de Virginia")}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/capital_cleancare" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
            <a href="https://www.facebook.com/capital.clean.care" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="https://www.tiktok.com/@capitalcleancare1" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3c-.94 0-2.43-.39-3.24-1.48z" />
              </svg>
            </a>
          </div>
        </div>

        <p className="text-center text-[11px] text-primary-foreground/30 mt-5">
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
