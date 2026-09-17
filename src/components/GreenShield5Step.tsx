import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { imgDims } from "@/lib/image-dims";

interface GreenShield5StepProps {
  /** Show the CTA button at the bottom */
  showCTA?: boolean;
  /** Compact layout (no background, less padding) — for embedding in service pages */
  compact?: boolean;
  /**
   * Copy variant. `"default"` keeps the historical wording for every existing consumer.
   * `"label-based"` (content gate 2, 2026-09-17) describes the same 5 steps without product
   * certification, universal-safety or superiority claims: products are "chosen by their labels",
   * disinfection is tied to the registered product's contact time, and the re-clean follows the
   * published guarantee. Opt-in per page; no consumer changes unless it passes the prop.
   */
  claims?: "default" | "label-based";
}

const steps = [
  {
    number: "01",
    emoji: "🔍",
    photo: "/images/team/team-scrubbing-door-detail.jpg",
    photoAlt: "Capital Clean Care technician assessing and cleaning door frame detail",
    title: "Assess & Protect",
    description:
      "Before touching a single surface, our technician walks through your home to identify priorities, protect delicate items, and customize the clean to your space.",
    badge: "Pre-Clean Walkthrough",
  },
  {
    number: "02",
    emoji: "🌬️",
    photo: "/images/team/team-window-blinds-pro.webp",
    photoAlt: "Cleaner dusting window blinds from top to bottom",
    title: "Dust-Free Air Start",
    description:
      "Top-to-bottom dry dusting of ceiling fans, vents, blinds, baseboards, and high surfaces — always before any wet cleaning so dust doesn't resettle.",
    badge: "Zero Recontamination",
  },
  {
    number: "03",
    emoji: "🌿",
    photo: "/images/team/team-supplies-basket.webp",
    photoAlt: "Capital Clean Care team with eco-friendly cleaning supplies basket",
    title: "GreenShield Sanitize",
    description:
      "We apply our EPA Safer Choice™ plant-based disinfectants to every high-touch surface, bathroom, and kitchen area. Safe for children, pets, and allergy sufferers.",
    badge: "Eco-Certified Products",
  },
  {
    number: "04",
    emoji: "✨",
    photo: "/images/team/team-tile-scrubber.jpg",
    photoAlt: "Professional cleaner using electric scrubber for deep clean on bathroom tiles",
    title: "Deep Scrub & Polish",
    description:
      "Detailed scrubbing of all surfaces, floors, appliances, sinks, and fixtures — including inside microwaves, stovetops, and shower grout — to a streak-free shine.",
    badge: "50-Point Checklist",
  },
  {
    number: "05",
    emoji: "✅",
    photo: "/images/team/team-polishing-fridge.jpg",
    photoAlt: "Cleaner performing white-glove inspection polishing stainless steel appliance",
    title: "White-Glove Inspection",
    description:
      "Before we leave, we run a white-glove quality inspection against our 50-point checklist. If anything isn't perfect, we re-clean it immediately — no questions asked.",
    badge: "100% Satisfaction Guaranteed",
  },
];

/** Per-step overrides for the label-based variant; untouched fields fall back to `steps`. */
const LABEL_BASED_STEPS: Record<string, Partial<Pick<(typeof steps)[number], "description" | "badge">>> = {
  "02": { badge: "Dry Dusting First" },
  "03": {
    description:
      "We clean every high-touch surface, bathroom and kitchen area with products chosen by their labels. Sanitizing and disinfecting are label claims: only an EPA-registered product disinfects, for the contact time on its label. Tell us about pets, allergies or fragrance sensitivities before the visit.",
    badge: "Label-Guided Products",
  },
  "04": { badge: "Checklist-Based" },
  "05": {
    description:
      "Before we leave, we run a quality inspection against our checklist. If something was missed, contact us and we come back to re-clean it under our satisfaction guarantee.",
  },
};

const GreenShield5Step = ({ showCTA = true, compact = false, claims = "default" }: GreenShield5StepProps) => {
  const labelBased = claims === "label-based";
  const shownSteps = labelBased ? steps.map((s) => ({ ...s, ...LABEL_BASED_STEPS[s.number] })) : steps;
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
            {labelBased
              ? "Every Capital Clean Care visit follows the same 5-step order of work, so dust is removed before surfaces are wet-cleaned and nothing on the checklist is skipped."
              : "Every Capital Clean Care visit follows our proven, 5-step proprietary process — designed to deliver a deeper, safer, and longer-lasting clean than standard cleaning services."}
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20 hidden sm:block md:transform md:-translate-x-px" />

          <div className="space-y-8 md:space-y-0">
            {shownSteps.map((step, i) => (
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
                  className={`flex-1 bg-white rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300 md:w-[calc(50%-4rem)] ${
                    i % 2 === 0 ? "md:mr-[calc(50%+1rem)]" : "md:ml-[calc(50%+1rem)]"
                  }`}
                >
                  <div className="h-36 overflow-hidden">
                    <img
                      src={step.photo}
                      {...imgDims(step.photo)}
                      alt={step.photoAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8">
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
              </div>
            ))}
          </div>
        </div>

        {/* Trust note */}
        <div className="mt-10 text-center bg-accent/5 border border-accent/20 rounded-2xl py-5 px-6">
          <p className="text-sm text-foreground font-medium">
            {labelBased ? (
              <>🛡️ The GreenShield 5-Step Clean™ is the order of work our own teams follow on every visit across Maryland, DC & Virginia.</>
            ) : (
              <>
                🛡️ The GreenShield 5-Step Clean™ is exclusive to Capital Clean Care — developed over{" "}
                <strong>10+ years</strong> and used in every single visit across Maryland, DC & Virginia.
              </>
            )}
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
