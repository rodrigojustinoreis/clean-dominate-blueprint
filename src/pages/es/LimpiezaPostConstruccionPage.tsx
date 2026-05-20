import { Phone, ArrowRight, CheckCircle, Clock, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import ProcessSection from "@/components/sections/ProcessSection";
import TransparencySection from "@/components/sections/TransparencySection";
import FAQExpandedSection from "@/components/sections/FAQExpandedSection";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/limpieza-post-construccion";

export default function LimpiezaPostConstruccionPage() {
  const { seoHelmet } = useSEO({
    title: "Limpieza Post-Construcción Montgomery County MD | Capital Clean Care",
    description: "Limpieza post-remodelación en MoCo. Eliminamos polvo de drywall, residuos de pintura y escombros. Asegurados, bilingües. Llama (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD", "Bethesda, MD", "Gaithersburg, MD"]} />

      <main lang="es">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3">🔨 Limpieza Post-Construcción</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza Post-Construcción en Montgomery County, MD
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Después de remodelación, dejamos tu casa libre de polvo de drywall, residuos de pintura y escombros. Lista para vivir en ella ese mismo día.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("post_construccion_hero")}><Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("post_construccion_hero")}>Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">¿Qué hace diferente la limpieza post-construcción?</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              El polvo de construcción penetra en todos los rincones — marcos, ventanas, sistemas de ventilación. Requiere equipamiento y técnicas distintas a la limpieza regular.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Eliminación de Polvo", items: ["Polvo de drywall en todas las superficies", "Ventiladores y rejillas de ventilación", "Marcos de ventanas y puertas", "Molduras y zócalos", "Encima y detrás de gabinetes"] },
                { title: "Residuos de Construcción", items: ["Manchas de pintura en pisos y ventanas", "Adhesivos y etiquetas en vidrios", "Residuos de calafateo y selladores", "Marcas de herramientas en superficies", "Polvo fino incrustado en grietas"] },
                { title: "Limpieza Detallada", items: ["Interior de gabinetes nuevos", "Electrodomésticos nuevos (interior y exterior)", "Baños a fondo (residuos de instalación)", "Pisos con limpieza profunda", "Vidrios y espejos sin rayaduras"] },
                { title: "Acabado Final", items: ["Brillado de pisos (si aplica)", "Limpieza de accesorios y herrajes nuevos", "Verificación de cada cuarto", "Reporte de daños preexistentes", "Casa lista para mudarse"] },
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
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">¿Para qué tipo de proyectos?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {["Remodelación de cocina o baños", "Cambio de pisos (madera, vinilo, azulejo)", "Pintura interior completa", "Expansión o adición de cuartos", "Reemplazo de ventanas y puertas", "Trabajo de drywall y techos", "Proyectos de techado con acceso interior", "Casa recién construida (primera limpieza)"].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-background border border-border rounded-lg px-4 py-3">
                  <HardHat className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Precios orientativos</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Proyecto</th>
                    <th className="text-center px-5 py-3 font-semibold">Precio base</th>
                    <th className="text-center px-5 py-3 font-semibold">Tiempo</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {[["Cuarto individual", "$150–$200", "2–3h"], ["Cocina o baños (1-2)", "$200–$300", "3–4h"], ["Casa completa (3 hab)", "$350–$500", "5–7h"], ["Casa completa (4+ hab)", "$500–$700+", "7–10h"]].map(([proj, price, time]) => (
                    <tr key={proj}>
                      <td className="px-5 py-3 text-foreground">{proj}</td>
                      <td className="px-5 py-3 text-center text-accent font-semibold">{price}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">Precios varían según nivel de polvo y cantidad de residuos. Cotización exacta después de evaluar el proyecto.</p>
          </div>
        </section>

        <ProcessSection />

        <TransparencySection />
        <FAQExpandedSection schemaId="faq-limpieza-post-construccion" />

        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Terminó la remodelación? Llamanos hoy</h2>
            <p className="text-accent-foreground/90 mb-6">Te damos cotización exacta basada en el tamaño del proyecto. Atendemos en español.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("post_construccion_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("post_construccion_cta")}>Cotización Gratis</a>
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
