import { Phone, ArrowRight, CheckCircle, Clock } from "lucide-react";
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
const CANONICAL = "https://capitalcleancare.com/es/limpieza-de-casas";

const includedItems = [
  { area: "Cocina", items: ["Desinfección de mesones y backsplash", "Limpieza exterior de electrodomésticos", "Lavado del fregadero hasta brillar", "Trapeado del piso, rincones incluidos", "Vaciado y limpieza del bote de basura"] },
  { area: "Baños", items: ["Desinfección de inodoro (base y detrás)", "Limpieza de tina y ducha completa", "Lavabos y espejos sin manchas de agua", "Trapeado del piso con desinfectante"] },
  { area: "Dormitorios", items: ["Polvo de superficies, marcos, lámparas", "Tender la cama (cambiar sábanas si están listas)", "Aspirado o trapeado del piso", "Vaciado de cestos de basura"] },
  { area: "Áreas Comunes", items: ["Polvo de muebles y objetos decorativos", "Aspirado de sofás (cojines incluidos)", "Trapeado de pisos", "Limpieza de superficies de mesas"] },
];

const pricing = [
  { size: "Apartamento 1-2 hab", regular: "$130 - $160", profunda: "$200 - $250" },
  { size: "Casa 3 hab / 2 baños", regular: "$160 - $200", profunda: "$250 - $320" },
  { size: "Casa 4 hab / 2.5 baños", regular: "$200 - $240", profunda: "$320 - $400" },
  { size: "Casa 5+ hab / 3+ baños", regular: "$240 - $300+", profunda: "$400 - $500+" },
];

export default function LimpiezaDeCasasPage() {
  const { seoHelmet } = useSEO({
    title: "Limpieza de Casas en Montgomery County MD | Capital Clean Care",
    description: "Servicio profesional de limpieza de casas en MoCo. Negocio familiar, asegurados, 5★ en Google. ¡Hablamos español! (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD", "Wheaton, MD"]} />

      <div lang="es">
        <div className="w-full overflow-hidden" style={{maxHeight:"320px"}}>
          <img
            src="/images/team/real-team-mopping.jpg"
            alt="Equipo Capital Clean Care trabajando"
            loading="eager"
            decoding="async"
            className="w-full object-cover"
            style={{height:"320px",objectPosition:"center 30%"}}
          />
        </div>
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3">🏡 Servicio de Limpieza de Casas</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza de Casas en Montgomery County, MD
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              El equipo que tus vecinos confían. Limpieza profesional, asegurada y con fianza, hecha por gente que entiende cómo te gusta tu casa.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["⭐ 5.0 (47+)", "🛡️ Asegurados", "🗣️ Español", "🏡 Familiar"].map((p) => (
                <span key={p} className="bg-background border border-border rounded-full px-3 py-1.5 text-sm font-medium shadow-sm">{p}</span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("limpieza_casas_hero")}>
                  <Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("limpieza_casas_hero")}>
                  Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Qué incluye */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              ¿Qué incluye una limpieza de casa?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {includedItems.map(({ area, items }) => (
                <div key={area} className="bg-background border border-border rounded-xl p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-4">{area}</h3>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 p-4 bg-secondary/50 rounded-lg">
              <strong>No incluido en limpieza regular:</strong> lavado de ventanas exteriores, limpieza de paredes, dentro del horno o refrigerador (requiere limpieza profunda), tapicería con vapor.
            </p>
          </div>
        </section>

        {/* Precios */}
        <section className="py-14 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">¿Cuánto cuesta?</h2>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-sm">
                <thead className="bg-secondary">
                  <tr>
                    <th className="text-left px-5 py-3 font-semibold text-foreground">Tamaño de Casa</th>
                    <th className="text-center px-5 py-3 font-semibold text-foreground">Limpieza Regular</th>
                    <th className="text-center px-5 py-3 font-semibold text-foreground">Limpieza Profunda</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border bg-background">
                  {pricing.map(({ size, regular, profunda }) => (
                    <tr key={size}>
                      <td className="px-5 py-3 text-foreground">{size}</td>
                      <td className="px-5 py-3 text-center text-accent font-semibold">{regular}</td>
                      <td className="px-5 py-3 text-center">{profunda}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Descuento automático para clientes recurrentes (semanal, quincenal, mensual).{" "}
              <a href={PHONE_TEL} className="text-accent font-semibold hover:underline" onClick={() => trackPhoneClick("pricing_es")}>
                Llama para cotización exacta
              </a>
            </p>
          </div>
        </section>

        <ProcessSection />

        <MeetTheTeamSection />

        <TransparencySection />
        <FAQExpandedSection schemaId="faq-limpieza-casas" />

        {/* CTA */}
        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Listo para agendar tu limpieza?</h2>
            <p className="text-accent-foreground/90 mb-6">Cotización en 5 minutos. Sin compromiso. Atendemos en español.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("limpieza_casas_cta")}>
                  <Phone className="h-4 w-4 mr-2" /> {PHONE}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("limpieza_casas_cta")}>Cotización Gratis</a>
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
