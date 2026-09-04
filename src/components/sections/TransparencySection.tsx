import { X, CheckCircle, Shield } from "lucide-react";

const CARDS_ES = [
  {
    icon: X,
    iconColor: "text-red-500",
    bgColor: "bg-red-50 border-red-200",
    heading: "SIN cargo de gasolina escondido",
    body: 'Algunos servicios cobran $20–40 extra por "trip fee" después de cotizar. Nosotros cotizamos precio FINAL — el que ves es el que pagas. Punto.',
  },
  {
    icon: CheckCircle,
    iconColor: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
    heading: "SIN contrato obligatorio",
    body: "Nada te obliga a quedarte. Si la primera limpieza no fue lo que esperabas, no pagas por las siguientes. Cancela cuando quieras, sin penalidad.",
  },
  {
    icon: Shield,
    iconColor: "text-accent",
    bgColor: "bg-accent/5 border-accent/20",
    heading: "SÍ somos LLC registrada en Maryland",
    body: "Capital Clean Care LLC · Seguro de responsabilidad civil de $1M + fianza individual por empleada. Maryland State ID disponible al solicitar.",
  },
];

// English variant for the EN About/home — same three promises. The liability dollar figure is
// intentionally omitted until the insurer confirms it for the English pages.
const CARDS_EN = [
  {
    icon: X,
    iconColor: "text-red-500",
    bgColor: "bg-red-50 border-red-200",
    heading: "NO hidden trip fee",
    body: 'Some services add a $20–40 "trip fee" after quoting. We quote the FINAL price — what you see is what you pay. Period.',
  },
  {
    icon: CheckCircle,
    iconColor: "text-green-600",
    bgColor: "bg-green-50 border-green-200",
    heading: "NO mandatory contract",
    body: "Nothing locks you in. If the first cleaning isn't what you expected, you don't pay for the next ones. Cancel anytime, no penalty.",
  },
  {
    icon: Shield,
    iconColor: "text-accent",
    bgColor: "bg-accent/5 border-accent/20",
    heading: "YES, we're a licensed Maryland LLC",
    body: "Capital Clean Care LLC · bonded and insured, with background-checked teams. Maryland business registration available on request.",
  },
];

const COPY = {
  es: {
    title: "Transparencia Total — Lo Que Otros No Te Dicen",
    sub: "Antes de contratar cualquier servicio de limpieza, haz estas preguntas. Nosotros respondemos sin dudar.",
  },
  en: {
    title: "Total Transparency — What Others Won't Tell You",
    sub: "Before hiring any cleaning service, ask these questions. We answer without hesitation.",
  },
} as const;

const TransparencySection = ({ lang = "es" }: { lang?: "en" | "es" } = {}) => {
  const cards = lang === "en" ? CARDS_EN : CARDS_ES;
  const copy = COPY[lang];
  return (
  <section className="py-14 bg-secondary/20">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          {copy.title}
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          {copy.sub}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {cards.map(({ icon: Icon, iconColor, bgColor, heading, body }) => (
          <div key={heading} className={`rounded-xl border p-6 ${bgColor}`}>
            <Icon className={`h-7 w-7 mb-4 ${iconColor}`} />
            <h3 className="font-heading font-semibold text-foreground mb-3 leading-snug">{heading}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TransparencySection;
