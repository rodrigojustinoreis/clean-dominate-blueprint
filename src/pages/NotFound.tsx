import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Home, MapPin, Phone, Search, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

// Fase 3 / Lote 2 (2026-09-07): prerendered at /404 and served by netlify.toml as /404.html with a
// real 404 status (the body used to be the home page's HTML). Same anatomy as every other page —
// brand hero (bg-mesh, glass pill, gradient accent word, rounded-full CTAs) and cards with icon
// tiles — in English, or Spanish under /es. Title + noindex stay in Helmet; no canonical, no hreflang.
const NotFound = () => {
  const { pathname } = useLocation();
  const es = pathname.startsWith("/es");
  const t = (en: string, esText: string) => (es ? esText : en);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  const links = es
    ? [
        { to: "/es", label: "Inicio", desc: "Limpieza de casas en Montgomery County, en español", icon: Home },
        { to: "/es/limpieza-de-casas", label: "Limpieza de casas", desc: "Qué incluye, precios y cómo agendar", icon: Sparkles },
        { to: "/es/areas/silver-spring-md", label: "Áreas que atendemos", desc: "Silver Spring, Rockville, Wheaton, Gaithersburg y más", icon: MapPin },
        { to: "/es/contacto", label: "Contacto", desc: "Cotización gratis, respuesta el mismo día", icon: Phone },
      ]
    : [
        { to: "/services", label: "Our services", desc: "House, deep, move-out, recurring, Airbnb and office cleaning", icon: Sparkles },
        { to: "/maryland", label: "Service areas", desc: "Maryland, Washington DC and Northern Virginia", icon: MapPin },
        { to: "/resources", label: "Resource Center", desc: "Guides, checklists and real pricing", icon: Search },
        { to: "/contact", label: "Contact us", desc: "Free quote, same-day reply", icon: Phone },
      ];

  return (
    <Layout>
      <Helmet>
        <title>{t("Page Not Found (404) | Capital Clean Care", "Página no encontrada (404) | Capital Clean Care")}</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      {/* ===== HERO — same anatomy as FAQPage / LegalDoc ===== */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="hidden md:block absolute top-10 -right-24 w-96 h-96 bg-primary/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 text-sm font-medium text-foreground animate-fade-up">
              <Search className="h-4 w-4 text-accent" aria-hidden="true" />
              {t("Error 404 — page not found", "Error 404 — página no encontrada")}
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-5">
              {t("This page has been ", "Esta página ya ")}
              <span className="text-gradient">{t("cleaned away.", "no existe.")}</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t(
                "The address may be old or mistyped. Everything we offer is still one click away.",
                "La dirección puede ser antigua o estar mal escrita. Todo lo que ofrecemos sigue a un clic.",
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
                <Link to={es ? "/es" : "/"}>
                  <Home className="h-4 w-4" aria-hidden="true" /> {t("Back to the home page", "Volver al inicio")}
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-sm px-8 h-14 rounded-full glass hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300" asChild>
                <a href="tel:+12407042551">
                  <Phone className="h-4 w-4" aria-hidden="true" /> (240) 704-2551
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Helpful destinations — icon-tile cards ===== */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            {t("Where would you like to go?", "¿A dónde quieres ir?")}
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {links.map(({ to, label, desc, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-accent transition-colors">{label}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0 mt-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
