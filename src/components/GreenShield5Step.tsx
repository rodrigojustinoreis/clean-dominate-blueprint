import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface GreenShield5StepProps {
  /** Show the CTA button at the bottom */
  showCTA?: boolean;
  /** Compact layout (no background, less padding) — for embedding in service pages */
  compact?: boolean;
}

const steps = [
  {
    number: "01",
    emoji: "🔍",
    title: "Assess & Protect",
    description:
      "Before touching a single surface, our technician walks through your home to identify priorities, protect delicate items, and customize the clean to your space.",
    badge: "Pre-Clean Walkthrough",
  },
  {
    number: "02",
    emoji: "🌬️",
    title: "Dust-Free Air Start",
    description:
      "Top-to-bottom dry dusting of ceiling fans, vents, blinds, baseboards, and high surfaces — always before any wet cleaning so dust doesn't resettle.",
    badge: "Zero Recontamination",
  },
  {
    number: "03",
    emoji: "🌿",
    title: "GreenShield Sanitize",
    description:
      "We apply our EPA Safer Choice™ plant-based disinfectants to every high-touch surface, bathroom, and kitchen area. Safe for children, pets, and allergy sufferers.",
    badge: "Eco-Certified Products",
  },
  {
    number: "04",
    emoji: "✨",
    title: "Deep Scrub & Polish",
    description:
      "Detailed scrubbing of all surfaces, floors, appliances, sinks, and fixtures — including inside microwaves, stovetops, and shower grout — to a streak-free shine.",
    badge: "50-Point Checklist",
  },
  {
    number: "05",
    emoji: "✅",
    title: "White-Glove Inspection",
    description:
      "Before we leave, we run a white-glove quality inspection against our 50-point checklist. If anything isn't perfect, we re-clean it immediately — no questions asked.",
    badge: "100% Satisfaction Guaranteed",
  },
];

const GreenShield5Step = ({ showCTA = true, compact = false }: GreenShield5StepProps) => {
  return (
    <section
      className={
        compact
          ? "py-12"
          : "py-20 md:py-28 bg-gradient-to-b from-[#F1F8F1] to-white"
      }
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <span>🛡️</span> Our Proprietary Method
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4 leading-tight">
            The GreenShield 5-Step Clean™
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Every Capital Clean Care visit follows our proven, 5-step proprietary process — designed to
            deliver a deeper, safer, and longer-lasting clean than standard cleaning services.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 hidden sm:block md:transform md:-translate-x-px" />

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center mb-8 md:mb-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Step circle */}
                <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-2xl bg-accent text-white font-heading font-bold text-xl shadow-lg shadow-accent/30 z-10 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  {step.number}
                </div>

                {/* Content card */}
                <div
                  className={`flex-1 bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow duration-300 md:w-[calc(50%-4rem)] ${
                    i % 2 === 0 ? "md:mr-[calc(50%+1rem)]" : "md:ml-[calc(50%+1rem)]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl shrink-0">{step.emoji}</span>
                    <div>
                      <div className="flex items-center flex-wrap gap-2 mb-2">
                        <h3 className="font-heading text-lg font-bold text-foreground">
                          {step.title}
                        </h3>
                        <span className="text-xs bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                          {step.badge}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-10 text-center bg-accent/5 border border-accent/20 rounded-2xl py-5 px-6">
          <p className="text-sm text-foreground font-medium">
            🛡️ The GreenShield 5-Step Clean™ is exclusive to Capital Clean Care — developed over{" "}
            <strong>9+ years</strong> and used in every single visit across Maryland, DC & Virginia.
          </p>
        </div>

        {/* CTA */}
        {showCTA && (
          <div className="text-center mt-10">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Experience the GreenShield Clean <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground mt-3">
              15% OFF your first GreenShield Clean — new clients only
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GreenShield5Step;
