interface MeetTheTeamSectionProps {
  city?: string;
}

const MeetTheTeamSection = ({ city }: MeetTheTeamSectionProps) => {
  const cityText = city ? ` de ${city}` : " de Montgomery County";

  return (
    <section className="py-14 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Conoce a Quien Limpia Tu Casa
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Capital Clean Care no es una corporación. Somos un equipo pequeño y dedicado{cityText}, MD.
            Cuando llamas, hablas con Rodrigo, el dueño — no con un call center.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-background border border-border rounded-xl p-5 text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-accent">R</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">Rodrigo Reis — Dueño</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empezó Capital Clean Care en 2015 con una sola clienta en Silver Spring.
              Hoy atendemos a 200+ familias en Montgomery County. Habla español, portugués e inglés.
            </p>
          </div>

          <div className="bg-background border border-border rounded-xl p-5 text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-accent">M</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">María — Supervisora</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lidera el equipo de limpieza profunda. Originaria de El Salvador,
              vive en Wheaton desde 2018. Conoce cada casa como si fuera la suya.
            </p>
          </div>

          <div className="bg-background border border-border rounded-xl p-5 text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl font-bold text-accent">8</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground mb-1">El Equipo Completo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              8 profesionales con verificación de antecedentes y entrenamiento interno.
              Mismas caras conocidas en cada visita — nunca extraños.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-accent/10 border border-accent/30 rounded-xl p-6 text-center max-w-2xl mx-auto">
          <p className="text-foreground font-medium mb-1">
            "Cuando llamas, hablas con Rodrigo directamente."
          </p>
          <p className="text-sm text-muted-foreground">
            No un call center, no una app. Una persona real que conoce tu casa y tu historia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeamSection;
