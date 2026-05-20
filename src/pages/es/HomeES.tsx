import { Phone, ArrowRight, Shield, Star, Home, Leaf, Users, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";

const PHONE = "(240) 704-2551";
const PHONE_TEL = "tel:+12407042551";
const CANONICAL = "https://www.capitalcleancare.com/es/";

const reviews = [
  { name: "María G., Silver Spring", text: "El equipo de Rodrigo limpia mi casa hace 2 años. Siempre puntuales, siempre amables, y mi casa queda como nueva cada vez. Recomendado 100%." },
  { name: "Carolina M., Rockville", text: "Necesitaba una limpieza profunda antes de que llegaran los suegros y Capital Clean Care me salvó. Llegaron a tiempo, trabajaron con cuidado, y todo quedó impecable. Volveré a llamar." },
  { name: "José R., Wheaton", text: "Lo que más me gustó es que hablan español y entienden lo que uno quiere. No es solo limpiar, es saber por qué uno limpia así. Excelente servicio." },
];

const faqs = [
  { q: "¿Cuánto cuesta limpiar mi casa?", a: "Depende del tamaño, cuántas habitaciones y baños, y si es la primera vez o una limpieza regular. La mayoría de nuestras casas cuestan entre $130 y $250 por visita. Llámanos al (240) 704-2551 y te damos una cotización exacta en menos de 5 minutos, sin compromiso." },
  { q: "¿Tengo que estar en casa durante la limpieza?", a: "No, muchos de nuestros clientes nos dejan la llave o el código de la puerta. Somos asegurados y con fianza, y siempre llegan las mismas personas — no te vamos a sorprender con caras nuevas." },
  { q: "¿Traen sus propios productos y equipo?", a: "Sí, traemos todo. Si prefieres que usemos productos específicos (eco-friendly, sin perfumes, marca particular), solo díganos al momento de reservar." },
  { q: "¿Hablan español?", a: "Sí. Rodrigo (el dueño) habla español y la mayoría del equipo también. Puedes llamar, mandar texto o escribir email en español sin problema." },
  { q: "¿Trabajan los fines de semana?", a: "Atendemos de lunes a sábado, 8:00 AM a 6:00 PM. Los domingos descansamos. Si necesitas algo urgente para domingo, escríbenos por texto y vemos cómo ayudar." },
  { q: "¿Tienen seguro y fianza?", a: "Sí, Capital Clean Care LLC tiene seguro de responsabilidad civil y fianza para cada empleada. Si algo se daña durante la limpieza (lo cual casi nunca pasa), estás 100% cubierto." },
];

export default function HomeES() {
  const { seoHelmet } = useSEO({
    title: "Servicio de Limpieza de Casas en Montgomery County, MD | Capital Clean Care",
    description: "Servicio profesional de limpieza de casas en Montgomery County, MD. Negocio familiar, 5★ en Google, asegurados y con fianza. ¡Hablamos español! Llama (240) 704-2551",
    canonical: CANONICAL,
  });

  return (
    <>
      {seoHelmet}
      <LocalBusinessSchema inLanguage="es-US" areaServed={["Silver Spring, MD", "Rockville, MD", "Bethesda, MD", "Wheaton, MD", "Gaithersburg, MD", "Germantown, MD", "Aspen Hill, MD", "Takoma Park, MD", "Montgomery Village, MD"]} />

      <main lang="es">
        {/* Hero */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-12 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <p className="text-sm font-medium text-accent mb-3">🏡 Negocio Familiar · Montgomery County, MD · Desde 2015</p>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-5 leading-tight">
              Limpieza de Casas en Montgomery County, MD —<br className="hidden md:block" /> Hecha con Cariño
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
              Atendemos a familias en Silver Spring, Rockville, Bethesda, Wheaton, Gaithersburg y toda Montgomery County. Equipo bilingüe, asegurados y con fianza. Reseñas 5★ de tus vecinos.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["⭐ 5.0 en Google (47+ reseñas)", "🛡️ Asegurados y con Fianza", "🏡 Negocio Familiar", "🗣️ Hablamos Español"].map((pill) => (
                <span key={pill} className="inline-flex items-center bg-background border border-border rounded-full px-3 py-1.5 text-sm font-medium text-foreground shadow-sm">{pill}</span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("hero_es")}>
                  <Phone className="h-4 w-4 mr-2" /> Llamar Ahora: {PHONE}
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/#quote" onClick={() => trackBookNowClick("hero_es")}>
                  Solicitar Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Por qué elegirnos */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              ¿Por qué las familias de Montgomery County nos eligen?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Home, title: "Negocio Familiar de Verdad", text: "Capital Clean Care empezó en 2015 como un negocio familiar, y así sigue. Cuando llamas, hablas con Rodrigo, el dueño. Mismo equipo cada visita — no extraños nuevos cada semana." },
                { icon: Users, title: "Hablamos Tu Idioma", text: "Atendemos por teléfono, mensaje de texto y en persona en español. No tienes que explicar tu casa dos veces ni preocuparte por malentendidos." },
                { icon: Shield, title: "Asegurados y con Fianza", text: "Capital Clean Care LLC está registrada en Maryland, con seguro de responsabilidad civil y fianza para cada empleada. Si algo se rompe, estás cubierto al 100%." },
                { icon: Leaf, title: "Productos Seguros para Familia", text: "Usamos productos amigables con niños, mascotas y personas con alergias. Si prefieres productos específicos o quieres que usemos los tuyos, no hay problema." },
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

        {/* Servicios */}
        <section className="py-14 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Nuestros Servicios de Limpieza
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { slug: "/es/limpieza-recurrente", icon: "🔁", title: "Limpieza Regular", desc: "Mantén tu casa fresca cada semana, cada dos semanas, o cada mes. Plan flexible, mismo equipo, precio fijo." },
                { slug: "/es/limpieza-profunda", icon: "✨", title: "Limpieza Profunda", desc: "Para cuando tu casa necesita más que mantenimiento. Atacamos rincones, electrodomésticos y áreas olvidadas." },
                { slug: "/es/limpieza-de-mudanza", icon: "📦", title: "Limpieza de Mudanza", desc: "Mudándote? Dejamos tu casa lista para el inspector (move-out) o lista para vivir (move-in)." },
                { slug: "/es/limpieza-airbnb", icon: "🏨", title: "Limpieza Airbnb", desc: "Recambio entre huéspedes en 4 horas o menos. Reportes con fotos. Trabajamos con anfitriones de toda MoCo." },
                { slug: "/es/limpieza-post-construccion", icon: "🔨", title: "Post-Construcción", desc: "Después de remodelación, dejamos tu casa libre de polvo de drywall, residuos de pintura y escombros." },
                { slug: "/es/limpieza-de-casas", icon: "🏠", title: "Limpieza Estándar", desc: "¿Solo necesitas una limpieza esta semana? También lo hacemos, sin compromiso." },
              ].map(({ slug, icon, title, desc }) => (
                <Link key={slug} to={slug} className="bg-background border border-border rounded-xl p-6 hover:border-accent/50 hover:shadow-md transition-all group">
                  <span className="text-2xl mb-3 block">{icon}</span>
                  <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
                  <span className="text-accent text-sm font-medium mt-3 inline-block">Ver más →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Áreas de servicio */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              Áreas de Servicio — Montgomery County, MD
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { slug: "/es/areas/silver-spring-md", name: "Silver Spring" },
                { slug: "/es/areas/rockville-md", name: "Rockville" },
                { slug: "/es/areas/wheaton-md", name: "Wheaton" },
                { slug: "/es/areas/gaithersburg-md", name: "Gaithersburg" },
                { slug: "/es/areas/germantown-md", name: "Germantown" },
                { slug: "/es/areas/aspen-hill-md", name: "Aspen Hill" },
                { slug: "/es/areas/takoma-park-md", name: "Takoma Park" },
                { slug: "/es/areas/montgomery-village-md", name: "Montgomery Village" },
                { slug: "/locations/bethesda-md", name: "Bethesda" },
                { slug: "/locations/chevy-chase-md", name: "Chevy Chase" },
                { slug: "/locations/olney-md", name: "Olney" },
                { slug: "/locations/potomac-md", name: "Potomac" },
              ].map(({ slug, name }) => (
                <Link key={slug} to={slug} className="bg-secondary/50 hover:bg-accent/10 border border-border rounded-lg px-4 py-3 text-sm font-medium text-foreground hover:text-accent transition-colors text-center">
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Reseñas */}
        <section className="py-14 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Lo que dicen nuestros vecinos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {reviews.map(({ name, text }) => (
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

        {/* FAQ */}
        <section className="py-14 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-border pb-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">{q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-accent text-accent-foreground py-16">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">¿Listos para una casa más limpia?</h2>
            <p className="text-accent-foreground/90 mb-8 text-lg">
              Llámanos al {PHONE} y te damos cotización en 5 minutos. Atendemos en español.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-white text-accent hover:bg-gray-100 font-semibold" asChild>
                <a href={PHONE_TEL} onClick={() => trackPhoneClick("cta_final_es")}>
                  <Phone className="h-4 w-4 mr-2" /> Llamar: {PHONE}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/50 text-white hover:bg-white/10" asChild>
                <a href="/#quote" onClick={() => trackBookNowClick("cta_final_es")}>
                  Cotización Gratis <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-accent-foreground/70 text-sm">
              <Clock className="h-4 w-4" />
              <span>Lunes–Sábado 8:00 AM – 6:00 PM</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
