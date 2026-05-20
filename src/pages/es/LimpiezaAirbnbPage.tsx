import { Phone, ArrowRight, CheckCircle, Clock, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import ProcessSection from "@/components/sections/ProcessSection";
import TransparencySection from "@/components/sections/TransparencySection";
import FAQExpandedSection from "@/components/sections/FAQExpandedSection";
import MeetTheTeamSection from "@/components/sections/MeetTheTeamSection";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/limpieza-airbnb";

export default function LimpiezaAirbnbPage() {
  const { seoHelmet } = useSEO({
    title: "Limpieza para Airbnb Montgomery County MD | Capital Clean Care",
    description: "Limpieza de Airbnb entre huéspedes en Montgomery County. Recambio en 4h, reportes con fotos. Asegurados, bilingües, 5★ Google. (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD", "Gaithersburg, MD", "Bethesda, MD"]} />

      <div lang="es">
        <div className="w-full overflow-hidden" style={{maxHeight:"320px"}}>
          <img
            src="/images/team/real-team-two-members.png"
            alt="Equipo Capital Clean Care trabajando"
            loading="eager"
            decoding="async"
            className="w-full object-cover"
            style={{height:"320px",objectPosition:"center 30%"}}
          />
        </div>
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3">🏨 Limpieza para Airbnb</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza para Airbnb en Montgomery County, MD
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Recambio entre huéspedes en 4 horas o menos. Reportes con fotos después de cada limpieza. Trabajamos con anfitriones de toda Montgomery County.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("airbnb_hero")}><Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("airbnb_hero")}>Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">¿Por qué los anfitriones de MoCo nos eligen?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Clock, title: "Recambio Rápido", text: "Hacemos el recambio en 4 horas o menos. Coordinamos según el horario de Airbnb — check-out y check-in el mismo día no es problema." },
                { icon: Camera, title: "Reporte con Fotos", text: "Después de cada limpieza enviamos fotos por texto o email. Ves el estado real de tu propiedad sin tener que ir en persona." },
                { icon: CheckCircle, title: "Checklist de Airbnb", text: "Seguimos el checklist estándar de Airbnb: ropa de cama fresca, reposición de amenidades, revisión de inventario, y registro de daños si los hay." },
              ].map(({ icon: Icon, title, text }) => (
                <div key={title} className="bg-background border border-border rounded-xl p-6 shadow-sm">
                  <Icon className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-heading font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">¿Qué incluye cada recambio?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Cambio de sábanas y fundas de almohada",
                "Limpieza de baños completa con desinfectante",
                "Cocina: mesones, electrodomésticos exterior, fregadero",
                "Aspirado y trapeado de todos los pisos",
                "Limpieza de sala y áreas comunes",
                "Vaciado de basura en todos los cuartos",
                "Reposición de papel higiénico y artículos de tocador",
                "Reporte fotográfico al terminar",
                "Reporte de objetos olvidados por huéspedes",
                "Registro de daños o artículos faltantes",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background border border-border rounded-lg px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Precios de limpieza Airbnb</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Tamaño</th>
                    <th className="text-center px-5 py-3 font-semibold">Precio</th>
                    <th className="text-center px-5 py-3 font-semibold">Tiempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {[["Studio / 1 hab", "$80–$110", "1.5–2h"], ["2 habitaciones", "$110–$150", "2–3h"], ["3 habitaciones", "$150–$200", "3–4h"], ["4+ habitaciones", "$200–$260+", "4h+"]].map(([size, price, time]) => (
                    <tr key={size}>
                      <td className="px-5 py-3 text-foreground">{size}</td>
                      <td className="px-5 py-3 text-center text-accent font-semibold">{price}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Precio incluye mano de obra. Amenidades (jabón, papel higiénico, etc.) se cobran aparte si el anfitrión los provee. Descuentos para +5 recambios/mes.</p>
          </div>
        </section>

        <ProcessSection />

        <MeetTheTeamSection />

        <TransparencySection />
        <FAQExpandedSection schemaId="faq-limpieza-airbnb" />

        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Tienes una propiedad en Airbnb en MoCo?</h2>
            <p className="text-accent-foreground/90 mb-6">Llama hoy y cuéntanos sobre tu propiedad. Te damos un precio fijo para cada recambio.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("airbnb_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("airbnb_cta")}>Cotización Gratis</a>
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
