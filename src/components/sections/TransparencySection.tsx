import { X, CheckCircle, Shield } from "lucide-react";

const CARDS = [
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

const TransparencySection = () => (
  <section className="py-14 bg-secondary/20">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          Transparencia Total — Lo Que Otros No Te Dicen
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Antes de contratar cualquier servicio de limpieza, haz estas preguntas. Nosotros respondemos sin dudar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {CARDS.map(({ icon: Icon, iconColor, bgColor, heading, body }) => (
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

export default TransparencySection;
