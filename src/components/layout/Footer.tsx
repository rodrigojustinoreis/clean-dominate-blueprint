import { Link, useLocation } from "react-router-dom";
import { Phone, Mail, Clock, Instagram, Facebook, MapPin, Shield, Search, Leaf, Users, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { dirServiceCards as services } from "@/data/home-directory";
import { mdCities, dcCities, vaCities } from "@/data/locations";
import { dirCities as slCities, dirServices as slServices } from "@/data/sl-directory";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import { BUSINESS_INFO } from "@/data/business-info";
import { GOOGLE_LISTING_URL } from "@/data/realReviews";
import PartnerLinks from "@/components/PartnerLinks";
import GoogleBusinessLinks from "@/components/GoogleBusinessLinks";
import logo from "@/assets/logo.webp";

const TOP_SERVICE_CITIES = ["rockville-md", "bethesda-md", "silver-spring-md", "arlington-va", "alexandria-va", "washington-dc", "fairfax-va", "gaithersburg-md"];
const TOP_SERVICES = ["house-cleaning", "deep-cleaning", "move-out-cleaning", "recurring-cleaning"];

// Popular Guides — real, prerendered /resources posts (static links in the footer).
const POPULAR_GUIDES: { to: string; label: string }[] = [
  { to: "/resources/house-cleaning-prices-maryland-2026", label: "House Cleaning Prices in Maryland (2026)" },
  { to: "/resources/how-much-does-deep-cleaning-cost", label: "How Much Does a Deep Cleaning Cost?" },
  { to: "/resources/deep-cleaning-vs-regular-cleaning", label: "Deep Cleaning vs Regular Cleaning" },
  { to: "/resources/what-is-included-in-a-deep-cleaning", label: "What's Included in a Deep Cleaning" },
  { to: "/resources/move-in-cleaning-checklist", label: "Move-In / Move-Out Cleaning Checklist" },
  { to: "/resources/how-often-should-you-hire-a-cleaning-service", label: "How Often Should You Hire a Cleaner?" },
];

// Spanish labels for the data-driven "Popular Services by Area" links (links stay on EN pages).
const ES_SERVICE_LABELS: Record<string, string> = {
  "house cleaning": "limpieza de casas",
  "deep cleaning": "limpieza profunda",
  "move-out cleaning": "limpieza de mudanza",
  "recurring cleaning": "limpieza recurrente",
};

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
  <footer className="bg-primary text-primary-foreground">
    {/* CTA Band */}
    <div className="bg-accent">
      <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-accent-foreground text-center md:text-left">
        <div>
          <h3 className="font-heading text-xl md:text-2xl font-bold">{t("Ready for a Spotless Home?", "¿Listo para una casa impecable?")}</h3>
          <p className="opacity-90 text-sm md:text-base">{t("Get your free, no-obligation quote in minutes.", "Obtén tu cotización gratis y sin compromiso en minutos.")}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <Button variant="default" size="lg" asChild>
            <a href={isSpanish ? "/es/contacto" : "/#quote"} onClick={() => trackBookNowClick("footer_cta_band")}>{t("Get a Free Quote", "Cotización Gratis")}</a>
          </Button>
          <Button variant="outline" size="lg" className="bg-transparent border-2 border-accent-foreground/70 text-accent-foreground hover:bg-accent-foreground/10 hover:text-accent-foreground" asChild>
            <a href="tel:+12407042551" onClick={() => trackPhoneClick("footer_cta_band")}><Phone className="h-4 w-4 mr-2" /> {t("Call Now", "Llamar Ahora")}</a>
          </Button>
        </div>
      </div>
    </div>

    {/* ====== TRUST BAR ====== */}
    <div className="border-y border-border bg-muted/30 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
          <div className="flex flex-col items-center gap-1">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">{t("Licensed & Insured", "Con Licencia y Seguro")}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Search className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">{t("Background-Checked", "Personal Verificado")}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Leaf className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">{t("100% Eco-Friendly", "100% Ecológico")}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">{t("Family & Latino-Owned", "Negocio Familiar Latino")}</span>
          </div>
          {/* Real Google counter (single source: BUSINESS_INFO.rating) linked to the live listing */}
          <a
            href={GOOGLE_LISTING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            aria-label={t("Read our Google reviews", "Lee nuestras reseñas en Google")}
          >
            <Star className="w-6 h-6 text-primary fill-primary/20" />
            <span className="text-xs font-medium">
              {t(
                `${BUSINESS_INFO.rating.value}★ · ${BUSINESS_INFO.rating.count} Google Reviews`,
                `${BUSINESS_INFO.rating.value}★ · ${BUSINESS_INFO.rating.count} Reseñas en Google`,
              )}
            </span>
          </a>
          <div className="flex flex-col items-center gap-1">
            <CheckCircle className="w-6 h-6 text-primary" />
            <span className="text-xs font-medium">{t("Satisfaction Guarantee", "Garantía de Satisfacción")}</span>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-12">
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

      {/* Service + City Links */}
      <div className="mt-10 pt-8 border-t border-primary-foreground/10">
        <h4 className="font-heading font-semibold mb-4 text-sm">{t("Popular Services by Area", "Servicios Populares por Área")}</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1">
          {slCities.filter(c => TOP_SERVICE_CITIES.includes(c.slug)).flatMap(city =>
            slServices.filter(s => TOP_SERVICES.includes(s.slug)).map(svc => (
              <Link
                key={`${city.slug}-${svc.slug}`}
                to={`/locations/${city.slug}/${svc.slug}`}
                className="text-xs text-primary-foreground/50 hover:text-accent transition-colors truncate"
              >
                {isSpanish ? (ES_SERVICE_LABELS[svc.shortName] ?? svc.shortName) : svc.shortName} – {city.name}
              </Link>
            ))
          )}
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

      <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
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
      <p className="text-center text-xs text-primary-foreground/30 pb-4">
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
