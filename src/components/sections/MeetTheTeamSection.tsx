import TeamImage from "@/components/team/TeamImage";

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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Rodrigo */}
          <div className="flex flex-col items-center text-center">
            <TeamImage
              src="/team/rodrigo-portrait.svg"
              alt="Rodrigo Reis — Fundador de Capital Clean Care"
              caption="Rodrigo · Dueño · 10 años en MoCo"
              aspectRatio="square"
              priority
            />
            <h3 className="font-heading font-semibold text-foreground mt-4 mb-2">Rodrigo Reis</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empezó Capital Clean Care en 2015 con una sola clienta en Silver Spring.
              Hoy atendemos a 200+ familias en Montgomery County. Habla español, portugués e inglés.
            </p>
          </div>

          {/* María */}
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-[400px] mx-auto aspect-square rounded-2xl bg-secondary flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl font-bold text-accent">M</span>
                </div>
                <p className="text-sm text-muted-foreground italic">Foto próximamente</p>
              </div>
            </div>
            <figcaption className="mt-2 text-center text-sm italic text-muted-foreground">
              María · Supervisora · 5 años con CCC
            </figcaption>
            <h3 className="font-heading font-semibold text-foreground mt-4 mb-2">María — Supervisora</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Lidera el equipo de limpieza profunda. Originaria de El Salvador,
              vive en Wheaton desde 2018. Conoce cada casa como si fuera la suya.
            </p>
          </div>

          {/* Equipo */}
          <div className="flex flex-col items-center text-center">
            <TeamImage
              src="/team/equipo-grupo.svg"
              alt="Equipo completo de Capital Clean Care"
              caption="Nuestro equipo · Bilingüe · Background-checked · Asegurado"
              aspectRatio="square"
            />
            <h3 className="font-heading font-semibold text-foreground mt-4 mb-2">El Equipo Completo</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              8 profesionales en total. Cada uno con verificación de antecedentes y entrenamiento interno.
              Mismas caras conocidas en cada visita — nunca extraños.
            </p>
          </div>
        </div>

        <div className="mt-10 bg-accent/10 border border-accent/30 rounded-xl p-6 text-center max-w-2xl mx-auto">
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
