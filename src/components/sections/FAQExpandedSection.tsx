import { useState, createElement } from "react";
import { Helmet } from "react-helmet-async";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQExpandedSectionProps {
  faqs: FAQItem[];
  title?: string;
  schemaId?: string;
}

const DEFAULT_FAQS: FAQItem[] = [
  {
    q: "¿Cuánto cuesta limpiar mi casa?",
    a: "Depende del tamaño (habitaciones y baños) y si es primera limpieza o mantenimiento. Rango típico: $130–$250 para limpieza regular, $200–$500 para limpieza profunda. Llámanos al (240) 704-2551 — cotización exacta en menos de 5 minutos, sin compromiso.",
  },
  {
    q: "¿Qué pasa si rompen algo durante la limpieza?",
    a: "Capital Clean Care LLC tiene seguro de responsabilidad civil activo y fianza individual por empleada. Si algo se daña durante el servicio, cubrimos el 100% del costo de reposición o reparación. En más de 10 años, los incidentes han sido mínimos — pero si ocurren, estás protegido.",
  },
  {
    q: "¿Puedo conocer al equipo antes de la primera limpieza?",
    a: "Sí. Puedes hablar directamente con Rodrigo (el dueño) antes de agendar. Él te presenta al equipo asignado y te da sus nombres. No enviamos desconocidos — siempre el mismo equipo en cada visita.",
  },
  {
    q: "¿Tienen referencias de clientes de mi vecindario?",
    a: "Sí. Tenemos 47+ reseñas verificadas en Google, muchas de clientes en Silver Spring, Wheaton, Rockville y Gaithersburg. Puedes verlas en Google Maps buscando 'Capital Clean Care'. También podemos conectarte con clientes actuales si lo prefieres.",
  },
  {
    q: "¿Cómo verifican antecedentes de los empleados?",
    a: "Todos los empleados pasan verificación de antecedentes criminales estatal y federal antes de comenzar. Además, el entrenamiento es interno — no contratamos sin supervisar el trabajo directamente primero.",
  },
  {
    q: "¿Qué productos usan exactamente?",
    a: "Usamos productos certificados EPA Safer Choice: Mrs. Meyer's, Method, y productos profesionales de concentración controlada. Son seguros para niños, mascotas y personas con alergias. Si quieres que usemos tus propios productos, solo dinos al reservar.",
  },
  {
    q: "¿Atienden si tengo mascotas o bebé recién nacido?",
    a: "Absolutamente sí. Nuestros productos están específicamente seleccionados por ser seguros para bebés y mascotas. Avísanos al reservar si tienes mascotas que pueden estar sueltas — coordinamos para que no haya inconvenientes durante la limpieza.",
  },
  {
    q: "¿Pueden venir el mismo día que llamo?",
    a: "Dependiendo de disponibilidad, sí. Los lunes y martes son los días con más disponibilidad de último momento. Llama antes de las 10am y haremos lo posible. Para garantizar una fecha específica, reservar con 48-72h de anticipación es lo ideal.",
  },
  {
    q: "¿Tengo que estar en casa durante la limpieza?",
    a: "No es necesario. Muchos clientes nos dejan código de puerta o llave de repuesto. Somos asegurados y el mismo equipo llega siempre — no verás caras desconocidas. Si prefieres estar presente la primera vez, lo entendemos perfectamente.",
  },
  {
    q: "¿Cómo se compara su precio con otros servicios?",
    a: "Somos precio justo, no el más barato. Algunos competidores ofrecen $89 la primera limpieza y luego suben el precio. Nuestro precio es transparente desde el inicio — sin sorpresas, sin contratos, sin cargos extra de gasolina o desplazamiento.",
  },
];

const FAQExpandedSection = ({ faqs = DEFAULT_FAQS, title = "Preguntas Frecuentes", schemaId = "faq-expanded" }: FAQExpandedSectionProps) => {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `#${schemaId}`,
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section className="py-14 md:py-20">
      <Helmet>
        {createElement("script", { key: `faq-schema-${schemaId}`, type: "application/ld+json" }, JSON.stringify(faqSchema))}
      </Helmet>

      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
          {title}
        </h2>

        <div className="space-y-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-background hover:bg-secondary/30 transition-colors"
                aria-expanded={open === i}
              >
                <span className="font-medium text-foreground text-sm leading-snug">{q}</span>
                {open === i ? (
                  <ChevronUp className="h-4 w-4 text-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              {open === i && (
                <div className="px-6 py-4 bg-secondary/20 border-t border-border">
                  <p className="text-muted-foreground text-sm leading-relaxed">{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQExpandedSection;
