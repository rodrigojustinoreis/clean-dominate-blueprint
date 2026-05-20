import { Phone, ArrowRight, CheckCircle, Clock, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import ProcessSection from "@/components/sections/ProcessSection";
import TransparencySection from "@/components/sections/TransparencySection";
import FAQExpandedSection from "@/components/sections/FAQExpandedSection";
import QuoteForm from "@/components/QuoteForm";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/limpieza-recurrente";

export default function LimpiezaRecurrentePage() {
  const { seoHelmet } = useSEO({
    title: "Limpieza Recurrente de Casas Montgomery County MD | Capital Clean Care",
    description: "Servicio de limpieza semanal, quincenal o mensual en MoCo. Mismo equipo, precio fijo, sin contratos. Asegurados, bilingües, 5★ Google. (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD", "Gaithersburg, MD", "Wheaton, MD"]} />

      <main lang="es">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3">🔁 Limpieza Recurrente</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza Recurrente en Montgomery County, MD
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Plan flexible: cada semana, cada dos semanas, o cada mes. Mismo equipo cada visita. Precio fijo sin contratos ni sorpresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("recurrente_hero")}><Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#cotizacion" onClick={() => trackBookNowClick("recurrente_hero")}>Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Elige tu frecuencia</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                { freq: "Semanal", icon: "📅", badge: "Más popular", desc: "Ideal para familias con niños o mascotas. Tu casa siempre lista, sin esfuerzo. Mayor descuento.", savings: "Ahorra 20%" },
                { freq: "Quincenal", icon: "🗓️", badge: "Recomendado", desc: "El equilibrio perfecto entre costo y frescura. Ideal para parejas o casas pequeñas.", savings: "Ahorra 10%" },
                { freq: "Mensual", icon: "📆", badge: "Flex", desc: "Para casas que no necesitan mantenimiento frecuente. Sin compromiso de frecuencia.", savings: "Precio base" },
              ].map(({ freq, icon, badge, desc, savings }) => (
                <div key={freq} className="bg-background border border-border rounded-xl p-6 shadow-sm relative">
                  <span className="absolute top-4 right-4 text-xs font-semibold bg-accent/10 text-accent px-2 py-1 rounded-full">{badge}</span>
                  <span className="text-3xl mb-3 block">{icon}</span>
                  <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{freq}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">{desc}</p>
                  <p className="text-accent font-semibold text-sm">{savings}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">¿Qué incluye cada visita?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Cocina: mesones, electrodomésticos exterior, fregadero",
                "Baños: inodoro, tina/ducha, lavabo, espejo, piso",
                "Dormitorios: polvo, tender cama, aspirado",
                "Sala: polvo de muebles, aspirado sofá, trapeado",
                "Pisos de toda la casa: aspirado y trapeado",
                "Vaciado de basura en todos los cuartos",
                "Limpieza de superficies de vidrio y espejos",
                "Reporte si se nota algo fuera de lo normal",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background border border-border rounded-lg px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Precios de limpieza recurrente</h2>
            <div className="overflow-x-auto rounded-xl border border-border mb-6">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold">Tamaño</th>
                    <th className="text-center px-5 py-3 font-semibold">Semanal</th>
                    <th className="text-center px-5 py-3 font-semibold">Quincenal</th>
                    <th className="text-center px-5 py-3 font-semibold">Mensual</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {[
                    ["Apto 1-2 hab", "$105–$130", "$117–$144", "$130–$160"],
                    ["Casa 3 hab", "$130–$162", "$144–$180", "$160–$200"],
                    ["Casa 4 hab", "$162–$194", "$180–$216", "$200–$240"],
                    ["Casa 5+ hab", "$194–$240+", "$216–$270+", "$240–$300+"],
                  ].map(([size, weekly, biweekly, monthly]) => (
                    <tr key={size}>
                      <td className="px-5 py-3 text-foreground">{size}</td>
                      <td className="px-5 py-3 text-center text-accent font-semibold">{weekly}</td>
                      <td className="px-5 py-3 text-center text-accent font-semibold">{biweekly}</td>
                      <td className="px-5 py-3 text-center text-muted-foreground">{monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                <RefreshCw className="h-5 w-5 text-accent" /> Sin contratos — total flexibilidad
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Cancela o pausa cuando quieras — sin penalidades</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Mismo equipo cada visita — no caras nuevas cada semana</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Precio fijo — no sube sin aviso previo</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Primera visita: limpieza profunda (después se mantiene con limpieza regular)</li>
              </ul>
            </div>
          </div>
        </section>

        <ProcessSection />

        <TransparencySection />

        <div id="cotizacion">
          <QuoteForm defaultService="standard" />
        </div>

        <FAQExpandedSection schemaId="faq-limpieza-recurrente" />

        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Listo para olvidarte de limpiar?</h2>
            <p className="text-accent-foreground/90 mb-6">Cotización en 5 minutos. Sin compromiso. El primer servicio es siempre limpieza profunda.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("recurrente_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="#cotizacion" onClick={() => trackBookNowClick("recurrente_cta")}>Cotización Gratis</a>
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
