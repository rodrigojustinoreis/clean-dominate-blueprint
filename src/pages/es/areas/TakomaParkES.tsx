import { Phone, ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import MeetTheTeamSection from "@/components/sections/MeetTheTeamSection";
import TransparencySection from "@/components/sections/TransparencySection";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/areas/takoma-park-md";

const services = [
  { slug: "/es/limpieza-de-casas", title: "Limpieza Regular", desc: "Mantenimiento semanal, quincenal o mensual en Takoma Park." },
  { slug: "/es/limpieza-profunda", title: "Limpieza Profunda", desc: "Limpieza completa con productos seguros y eco-friendly." },
  { slug: "/es/limpieza-de-mudanza", title: "Limpieza de Mudanza", desc: "Move-out con garantía de depósito. Ideal para renters de TP." },
  { slug: "/es/limpieza-airbnb", title: "Limpieza Airbnb", desc: "Recambio rápido con fotos para propiedades en Takoma Park." },
  { slug: "/es/limpieza-post-construccion", title: "Post-Construcción", desc: "Después de renovación en tu casa o apartamento." },
  { slug: "/es/limpieza-recurrente", title: "Limpieza Recurrente", desc: "Plan flexible sin contratos. Mismo equipo siempre." },
];

export default function TakomaParkES() {
  const { seoHelmet } = useSEO({
    title: "Limpieza de Casas Takoma Park MD en Español | Capital Clean Care",
    description: "Servicio de limpieza en Takoma Park, MD. Productos eco-friendly, equipo bilingüe, asegurado. Hablamos español. Llama (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Takoma Park, MD", "Montgomery County, MD"]} />

      <div lang="es">
        <div className="w-full overflow-hidden" style={{maxHeight:"320px"}}>
          <img
            src="/images/team/real-team-luxury-home.jpg"
            alt="Equipo Capital Clean Care trabajando"
            loading="eager"
            decoding="async"
            className="w-full object-cover"
            style={{height:"320px",objectPosition:"center 30%"}}
          />
        </div>
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3 flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Takoma Park, MD</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza de Casas en Takoma Park, MD
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Takoma Park es conocida por sus valores eco-conscientes — y nosotros también. Capital Clean Care usa productos certificados EPA Safer Choice, seguros para tu familia, tus mascotas y el medio ambiente.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["⭐ 5.0 (47+ reseñas)", "🌿 EPA Safer Choice", "🗣️ Español", "📍 Takoma Park"].map((p) => (
                <span key={p} className="bg-background border border-border rounded-full px-3 py-1.5 text-sm font-medium shadow-sm">{p}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("takoma_park_es_hero")}><Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("takoma_park_es_hero")}>Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Servicios en Takoma Park</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map(({ slug, title, desc }) => (
                <Link key={slug} to={slug} className="bg-background border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-md transition-all group">
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  <span className="text-accent text-sm font-medium mt-3 inline-block">Ver más →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Barrios de Takoma Park que cubrimos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {["Old Takoma", "Maple Avenue", "Sligo Creek", "West Takoma", "East Takoma", "Carroll Avenue", "Piney Branch", "Long Branch", "Langley Park", "University Park", "Adelphi", "Chillum"].map((n) => (
                <div key={n} className="bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground text-center">{n}</div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "Beatriz N.", text: "Me encanta que usan productos eco-friendly. Mis hijos tienen alergias y no ha habido ninguna reacción." },
                { name: "Diego F.", text: "Vivimos en Sligo Creek y son nuestro equipo fijo. Confiables, atentos y hablan español." },
                { name: "Valentina C.", text: "Precio justo para Takoma Park y calidad de primer nivel. Muy recomendados." },
              ].map(({ name, text }) => (
                <div key={name} className="bg-background border border-border rounded-xl p-5 shadow-sm">
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">"{text}"</p>
                  <p className="font-semibold text-foreground text-sm">— {name}, Takoma Park</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { stat: "~18,000", label: "Residentes" },
                { stat: "25%", label: "Comunidad Latina" },
                { stat: "Victorians / Mix", label: "Tipo de vivienda" },
                { stat: "~3 mi", label: "Desde Silver Spring" },
              ].map(({ stat, label }) => (
                <div key={label} className="bg-background border border-border rounded-xl p-5 text-center shadow-sm">
                  <p className="font-heading text-2xl font-bold text-accent">{stat}</p>
                  <p className="text-xs text-muted-foreground mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <MeetTheTeamSection city="Takoma Park" />

        <TransparencySection />
        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Vives en Takoma Park? Llámanos hoy</h2>
            <p className="text-accent-foreground/90 mb-6">Cotización en 5 minutos. Productos eco-friendly. Atendemos en español.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("takoma_park_es_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("takoma_park_es_cta")}>Cotización Gratis</a>
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-accent-foreground/70 text-sm">
              <Clock className="h-4 w-4" /><span>Lun–Sáb 8:00 AM – 6:00 PM</span>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
