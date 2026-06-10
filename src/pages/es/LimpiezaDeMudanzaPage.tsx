import { Phone, ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";
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
const CANONICAL = "https://capitalcleancare.com/es/limpieza-de-mudanza";

export default function LimpiezaDeMudanzaPage() {
  const { seoHelmet } = useSEO({
    title: "Limpieza de Mudanza Montgomery County MD | Move-Out Cleaning | Capital Clean Care",
    description: "Limpieza de mudanza profesional MoCo. Garantizamos depósito de fianza. Asegurados, bilingües, 5★ Google. (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD", "Gaithersburg, MD"]} />

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
            <p className="text-sm font-medium text-accent mb-3">📦 Limpieza de Mudanza</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza de Mudanza (Move-Out / Move-In) en Montgomery County
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              ¿Te mudas? Dejamos tu casa lista para el inspector. <strong>Garantía:</strong> si tu arrendador te descuenta del depósito por limpieza, volvemos GRATIS.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("mudanza_hero")}><Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("mudanza_hero")}>Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">¿Por qué la limpieza de mudanza es diferente?</h2>
            <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              El inspector busca cosas específicas. Usamos el mismo checklist que usan las administradoras de propiedades en Montgomery County.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Interior de electrodomésticos (refri, horno, microondas, lavavajillas)", "Detrás de electrodomésticos", "Closets vacíos (estantes, varas)", "Gabinetes vacíos (dentro y detrás)", "Marcos de ventanas y puertas", "Pisos a fondo (rodapiés y rincones)", "Sellos de baño y azulejos"].map((item) => (
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
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center mb-10">
              <Shield className="h-10 w-10 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">Garantía de Depósito</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Si tu arrendador te descuenta dinero del depósito por problemas de limpieza después de que limpiamos, <strong>volvemos GRATIS y arreglamos.</strong>
              </p>
              <ul className="mt-4 text-sm text-muted-foreground space-y-1">
                <li>• Reportar dentro de 14 días</li>
                <li>• Requiere copia escrita del reporte del arrendador</li>
                <li>• Válido solo dentro de Montgomery County</li>
              </ul>
            </div>

            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Move-Out vs Move-In</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Move-Out (Casa vacía)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Casa completamente vacía</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Objetivo: pasar inspección del arrendador</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Dentro de todos los electrodomésticos</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Garantía de depósito incluida</li>
                </ul>
              </div>
              <div className="bg-background border border-border rounded-xl p-6">
                <h3 className="font-heading font-semibold text-foreground mb-3">Move-In (Casa nueva)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Antes de que llegue el camión de mudanza</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Superficies listas para usar ese mismo día</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Productos seguros — puedes llegar directo</li>
                  <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />Sin garantía de depósito (no aplica)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <ProcessSection />

        <MeetTheTeamSection />

        <TransparencySection />
        <FAQExpandedSection schemaId="faq-limpieza-mudanza" />

        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Cuándo te mudas? Agenda ahora</h2>
            <p className="text-accent-foreground/90 mb-6">Los slots de mudanza se llenan rápido. Llama hoy para asegurar tu fecha.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("mudanza_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/contact" onClick={() => trackBookNowClick("mudanza_cta")}>Cotización Gratis</a>
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
