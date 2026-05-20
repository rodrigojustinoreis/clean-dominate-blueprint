import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick } from "@/lib/analytics";
import QuoteForm from "@/components/QuoteForm";
import MeetTheTeamSection from "@/components/sections/MeetTheTeamSection";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const EMAIL = "capitalcleancare@gmail.com";
const CANONICAL = "https://www.capitalcleancare.com/es/contacto";

export default function ContactoPage() {
  const { seoHelmet } = useSEO({
    title: "Contacto | Capital Clean Care — Limpieza en Montgomery County",
    description: "Contáctanos en español. Llamadas, texto o email — respondemos el mismo día. Oficinas en Silver Spring, MD. (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD", "Gaithersburg, MD", "Wheaton, MD", "Bethesda, MD"]} />

      <div lang="es">
        <div className="w-full overflow-hidden" style={{maxHeight:"320px"}}>
          <img
            src="/images/team/real-team-wiping-door.jpg"
            alt="Equipo Capital Clean Care trabajando"
            loading="eager"
            decoding="async"
            className="w-full object-cover"
            style={{height:"320px",objectPosition:"center 30%"}}
          />
        </div>
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3">📞 Contáctanos</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Contacto — Capital Clean Care
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Atendemos en español. Llama, manda texto o escribe email — respondemos el mismo día hábil.
            </p>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-8">Cómo contactarnos</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-3 flex-shrink-0">
                      <Phone className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Teléfono y texto</p>
                      <a href={PHONE_TEL} className="text-accent font-semibold text-lg hover:underline" onClick={() => trackPhoneClick("contacto_info")}>{PHONE}</a>
                      <p className="text-sm text-muted-foreground mt-1">Llamadas y mensajes de texto. Respondemos en minutos durante horario de atención.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-3 flex-shrink-0">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Email</p>
                      <a href={`mailto:${EMAIL}`} className="text-accent font-semibold hover:underline">{EMAIL}</a>
                      <p className="text-sm text-muted-foreground mt-1">Para preguntas, presupuestos por escrito, o comunicación no urgente. Respuesta el mismo día hábil.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-3 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Área de servicio</p>
                      <p className="text-foreground">Montgomery County, MD</p>
                      <p className="text-sm text-muted-foreground mt-1">Silver Spring, Rockville, Bethesda, Wheaton, Gaithersburg, Germantown, Aspen Hill, Takoma Park y más.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-accent/10 rounded-lg p-3 flex-shrink-0">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Horario de atención</p>
                      <p className="text-foreground">Lunes – Sábado: 8:00 AM – 6:00 PM</p>
                      <p className="text-sm text-muted-foreground mt-1">Domingos: descansamos. Para emergencias de domingo, manda texto y vemos cómo ayudarte.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="cotizacion">
                <QuoteForm />
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Ciudades donde servimos</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {["Silver Spring", "Rockville", "Bethesda", "Wheaton", "Gaithersburg", "Germantown", "Aspen Hill", "Takoma Park", "Montgomery Village", "Olney", "Potomac", "Chevy Chase"].map((city) => (
                <div key={city} className="bg-background border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground text-center">
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>

        <MeetTheTeamSection />
      </div>
    </Layout>
  );
}
