import { Phone, ArrowRight, Star, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/areas/wheaton-md";

const services = [
  { slug: "/es/limpieza-de-casas", title: "Limpieza Regular", desc: "Mantenimiento semanal, quincenal o mensual para tu hogar en Wheaton." },
  { slug: "/es/limpieza-profunda", title: "Limpieza Profunda", desc: "Limpieza completa hasta el último rincón — ideal para primera visita." },
  { slug: "/es/limpieza-de-mudanza", title: "Limpieza de Mudanza", desc: "Move-out con garantía de depósito. Rápido y eficiente." },
  { slug: "/es/limpieza-airbnb", title: "Limpieza Airbnb", desc: "Recambio entre huéspedes con reporte fotográfico." },
  { slug: "/es/limpieza-post-construccion", title: "Post-Construcción", desc: "Después de remodelación, eliminamos polvo y residuos." },
  { slug: "/es/limpieza-recurrente", title: "Limpieza Recurrente", desc: "Plan fijo sin contratos. Mismo equipo cada visita." },
];

export default function WheatonES() {
  const { seoHelmet } = useSEO({
    title: "Limpieza de Casas Wheaton MD en Español | Capital Clean Care",
    description: "Servicio de limpieza de casas en Wheaton, MD. Equipo latino, bilingüe, asegurado. Hablamos español. Llama (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Wheaton, MD", "Montgomery County, MD"]} />

      <main lang="es">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3 flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Wheaton, MD</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza de Casas en Wheaton, MD
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Wheaton es uno de los vecindarios más latinos de Maryland — y somos parte de esa comunidad. Capital Clean Care atiende Wheaton con orgullo: equipo bilingüe, mismo personal cada visita, precios justos.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["⭐ 5.0 (47+ reseñas)", "🛡️ Asegurados", "🗣️ Español", "📍 Wheaton"].map((p) => (
                <span key={p} className="bg-background border border-border rounded-full px-3 py-1.5 text-sm font-medium shadow-sm">{p}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("wheaton_es_hero")}><Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#quote" onClick={() => trackBookNowClick("wheaton_es_hero")}>Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Servicios disponibles en Wheaton</h2>
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
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Áreas de Wheaton que cubrimos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {["Wheaton Center", "Glenmont", "Kensington Estates", "Randolph Hills", "Layhill", "Aspen Hill", "Veirs Mill", "Georgia Ave Corridor", "Wheaton Hills", "Long Branch", "University Hills", "Forest Glen"].map((n) => (
                <div key={n} className="bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground text-center">{n}</div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "José R.", text: "Lo que más me gustó es que hablan español y entienden lo que uno quiere. Excelente servicio." },
                { name: "Esperanza V.", text: "Llevo 3 años con Capital Clean Care. Siempre puntuales, siempre el mismo equipo. No los cambio." },
                { name: "Miguel A.", text: "Usé el servicio de mudanza y recuperé todo mi depósito. La garantía es real." },
              ].map(({ name, text }) => (
                <div key={name} className="bg-background border border-border rounded-xl p-5 shadow-sm">
                  <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">"{text}"</p>
                  <p className="font-semibold text-foreground text-sm">— {name}, Wheaton</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Vives en Wheaton? Llámanos hoy</h2>
            <p className="text-accent-foreground/90 mb-6">Cotización en 5 minutos. Atendemos en español. Sin compromiso.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("wheaton_es_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/#quote" onClick={() => trackBookNowClick("wheaton_es_cta")}>Cotización Gratis</a>
              </Button>
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-accent-foreground/70 text-sm">
              <Clock className="h-4 w-4" /><span>Lun–Sáb 8:00 AM – 6:00 PM</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
