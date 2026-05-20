const STEPS = [
  {
    number: "01",
    emoji: "📞",
    title: "Llamas o escribes",
    body: "Recibes cotización clara en menos de 5 minutos. Hablamos español, te explicamos qué incluye y qué no, sin presión.",
  },
  {
    number: "02",
    emoji: "📅",
    title: "Reservas fecha",
    body: "Escogemos día y horario que te conviene. Confirmación por SMS el día anterior. Sin pagos adelantados.",
  },
  {
    number: "03",
    emoji: "🚐",
    title: "Llegamos puntuales",
    body: "El equipo llega en ventana de 30 minutos. Uniforme identificado, van con logo, productos profesionales incluidos.",
  },
  {
    number: "04",
    emoji: "✓",
    title: "Inspeccionas y pagas",
    body: "Recorrido final contigo (o foto si no estás). Pagas solo cuando estás satisfecho. Efectivo, Zelle, tarjeta o cheque.",
  },
];

const ProcessSection = () => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto px-4 max-w-5xl">
      <div className="text-center mb-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
          Cómo Trabajamos — Paso a Paso
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Sin sorpresas, sin extras escondidos. Así funciona desde el primer mensaje hasta la limpieza.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, i) => (
          <div key={step.number} className="relative">
            {i < STEPS.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border z-0 -translate-y-1/2" style={{ width: "calc(100% - 3rem)", left: "calc(50% + 1.5rem)" }} />
            )}
            <div className="bg-background border border-border rounded-xl p-6 text-center relative z-10 shadow-sm">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{step.emoji}</span>
              </div>
              <span className="text-xs font-bold text-accent tracking-widest uppercase">Paso {step.number}</span>
              <h3 className="font-heading font-semibold text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
