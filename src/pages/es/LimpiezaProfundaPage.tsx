import { Phone, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import ProcessSection from "@/components/sections/ProcessSection";
import TransparencySection from "@/components/sections/TransparencySection";
import FAQExpandedSection from "@/components/sections/FAQExpandedSection";
import QuoteFormES from "@/components/forms/QuoteFormES";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/limpieza-profunda";

export default function LimpiezaProfundaPage() {
  const { seoHelmet } = useSEO({
    title: "Limpieza Profunda de Casas Montgomery County MD | Capital Clean Care",
    description: "Limpieza profunda profesional en MoCo. Atacamos rincones, electrodomésticos, baños a fondo. Asegurados, bilingües, 5★ Google.",
    canonical: CANONICAL,
  });

  return (
    <>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD"]} />

      <main lang="es">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3">✨ Limpieza Profunda</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza Profunda de Casas en Montgomery County, MD
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Cuando tu casa necesita más que mantenimiento — entramos a fondo: dentro del horno, debajo de los muebles, rodapiés, ventanas interiores y todo lo que la limpieza regular no toca.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("limpieza_profunda_hero")}>
                  <Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#cotizacion" onClick={() => trackBookNowClick("limpieza_profunda_hero")}>
                  Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-10 text-center">
              Áreas extra — solo en limpieza profunda
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: "Cocina a Fondo", items: ["Dentro del horno (parrillas, cristal)", "Dentro del refrigerador (estantes, gavetas)", "Dentro del microondas completo", "Detrás de electrodomésticos", "Campana extractora y filtro"] },
                { title: "Baños Profundos", items: ["Descalcificación de regadera y grifería", "Azulejos con cepillo (mortero incluido)", "Detrás del inodoro y la tina", "Ventilador del techo"] },
                { title: "Sala y Dormitorios", items: ["Rodapiés con paño", "Detrás/debajo de muebles pesados", "Ventanas por dentro (marcos y sellos)", "Persianas lámina por lámina", "Ventiladores de techo y lámparas"] },
              ].map(({ title, items }) => (
                <div key={title} className="bg-background border border-border rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">{title}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />{item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">¿Cuándo necesitas limpieza profunda?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {["Antes de mudanza (requerida por arrendador)", "Después de remodelación", "Visitas importantes (suegros, familia)", "Cambio de estación", "Si pasaron 6+ meses sin limpieza profunda", "Como primera limpieza con servicio nuevo"].map((r) => (
                <div key={r} className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{r}</span>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Precios de limpieza profunda</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Tamaño</th>
                    <th className="text-center px-5 py-3 font-semibold">Precio</th>
                    <th className="text-center px-5 py-3 font-semibold">Duración</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {[["Apto 1-2 hab", "$200–$250", "3–4h"], ["Casa 3 hab", "$250–$320", "4–5h"], ["Casa 4 hab", "$320–$400", "5–6h"], ["Casa 5+ hab", "$400–$500+", "6–8h"]].map(([size, price, dur]) => (
                    <tr key={size}>
                      <td className="px-5 py-3 text-foreground">{size}</td>
                      <td className="px-5 py-3 text-center text-accent font-semibold">{price}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{dur}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <ProcessSection />

        <TransparencySection />

        <div id="cotizacion">
          <QuoteFormES id="cotizacion" defaultService="deep" submitLabel="Solicitar Cotización de Limpieza Profunda" />
        </div>

        <FAQExpandedSection schemaId="faq-limpieza-profunda" />

        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Lista tu limpieza profunda?</h2>
            <p className="text-accent-foreground/90 mb-6">Cotización personalizada en 5 minutos. Atendemos en español.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("limpieza_profunda_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="#cotizacion" onClick={() => trackBookNowClick("limpieza_profunda_cta")}>Cotización Gratis</a>
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
