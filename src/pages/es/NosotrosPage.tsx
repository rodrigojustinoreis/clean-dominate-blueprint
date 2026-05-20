import { Phone, ArrowRight, Shield, Star, Leaf, Users, Heart, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/nosotros";

export default function NosotrosPage() {
  const { seoHelmet } = useSEO({
    title: "Nosotros | Capital Clean Care — Limpieza Familiar en Montgomery County",
    description: "Negocio familiar de limpieza en Montgomery County desde 2015. Latino-owned, asegurados, equipo bilingüe. Conoce a Rodrigo y al equipo.",
    canonical: CANONICAL,
  });

  return (
    <>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Montgomery County, MD", "Silver Spring, MD", "Rockville, MD", "Bethesda, MD", "Wheaton, MD", "Gaithersburg, MD"]} />

      <main lang="es">
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-sm font-medium text-accent mb-3">🏡 Negocio Familiar · Desde 2015</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Nosotros — Capital Clean Care
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Empezamos como un negocio familiar en Silver Spring en 2015. Diez años después, seguimos siendo eso: familia limpiando casas de familias en toda Montgomery County.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("nosotros_hero")}><Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#quote" onClick={() => trackBookNowClick("nosotros_hero")}>Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-5">La historia de Rodrigo</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Rodrigo Reis fundó Capital Clean Care en 2015 con una idea simple: darle a las familias de Montgomery County un servicio de limpieza que se sintiera personal, confiable y en su idioma.
                  </p>
                  <p>
                    Como negocio de inmigrante, entendemos lo que significa trabajar duro para tener un hogar limpio y ordenado. Y entendemos lo que significa confiar en alguien para entrar a tu casa.
                  </p>
                  <p>
                    Hoy, Capital Clean Care LLC está registrada en Maryland, asegurada, con fianza, y con un equipo estable que nuestros clientes ya conocen de visita en visita.
                  </p>
                </div>
              </div>
              <div className="bg-secondary/30 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "10+", label: "Años de experiencia" },
                    { number: "47+", label: "Reseñas 5★ en Google" },
                    { number: "500+", label: "Casas limpiadas" },
                    { number: "100%", label: "Bilingüe: EN/ES" },
                  ].map(({ number, label }) => (
                    <div key={label} className="text-center">
                      <p className="font-heading text-3xl font-bold text-accent">{number}</p>
                      <p className="text-sm text-muted-foreground mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-10 text-center">Nuestros valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Heart, title: "Familia Primero", text: "Tratamos cada casa como si fuera la nuestra. No enviamos desconocidos — siempre el mismo equipo." },
                { icon: Shield, title: "Confianza Total", text: "Asegurados, con fianza, verificados en antecedentes. Si algo se daña, estás 100% cubierto." },
                { icon: Leaf, title: "Productos Seguros", text: "EPA Safer Choice — seguros para niños, mascotas y personas con alergias." },
                { icon: Users, title: "Tu Idioma", text: "Atendemos en español e inglés. No tendrás que explicar lo que quieres dos veces." },
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

        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Lo que dicen nuestros vecinos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "María G., Silver Spring", text: "El equipo de Rodrigo limpia mi casa hace 2 años. Siempre puntuales, siempre amables, y mi casa queda como nueva." },
                { name: "Carolina M., Rockville", text: "Capital Clean Care me salvó antes de la visita de los suegros. Llegaron a tiempo, trabajaron con cuidado, y todo quedó impecable." },
                { name: "José R., Wheaton", text: "Lo que más me gustó es que hablan español y entienden lo que uno quiere. No es solo limpiar, es saber por qué uno limpia así." },
              ].map(({ name, text }) => (
                <div key={name} className="bg-background border border-border rounded-xl p-6 shadow-sm">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">"{text}"</p>
                  <p className="font-semibold text-foreground text-sm">— {name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-14 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-8 text-center">Credenciales y certificaciones</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Capital Clean Care LLC — registrada en Maryland",
                "Seguro de responsabilidad civil activo",
                "Fianza para cada empleada del equipo",
                "Verificación de antecedentes — todo el equipo",
                "Productos EPA Safer Choice certificados",
                "Bilingüe: inglés y español",
                "5★ en Google Maps (47+ reseñas verificadas)",
                "Negocio familiar operando desde 2015",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-background border border-border rounded-lg px-4 py-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent text-accent-foreground py-14">
          <div className="container mx-auto px-4 max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-bold mb-4">¿Listo para conocernos?</h2>
            <p className="text-accent-foreground/90 mb-6">Llama a Rodrigo directamente. Cotización en 5 minutos, en español.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("nosotros_cta")}><Phone className="h-4 w-4 mr-2" /> {PHONE}</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/#quote" onClick={() => trackBookNowClick("nosotros_cta")}>Cotización Gratis</a>
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
