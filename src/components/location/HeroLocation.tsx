import { ArrowRight, Phone, Home, Shield, Users, Leaf, Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackPhoneClick, trackBookNowClick } from "@/lib/analytics";
import LastUpdated from "@/components/LastUpdated";

interface HeroLocationProps {
  h1: string;
  lead: string;
  cityName: string;
  state: string;
  zipRange: string;
  heroImage: string;
  heroImageAlt: string;
  ctaPrimary?: string;
}

const defaultPills = [
  { Icon: Home, label: "Latino-Owned & Operated" },
  { Icon: Shield, label: "Bonded & Insured" },
  { Icon: Users, label: "Same Team Every Visit" },
  { Icon: Leaf, label: "Eco-Friendly Products" },
  { Icon: Star, label: "5.0 Rated" },
];

const HeroLocation = ({
  h1,
  lead,
  cityName,
  state,
  zipRange,
  heroImage,
  heroImageAlt,
  ctaPrimary = "Get a Free Quote in 60 Seconds",
}: HeroLocationProps) => {
  const pills = [
    ...defaultPills,
    { Icon: MapPin, label: `Serving ${cityName}, ${state} ${zipRange}` },
  ];

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pb-12 md:pb-16 pt-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 leading-tight">
              {h1}
            </h1>
            <LastUpdated />
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-prose mt-4">
              {lead}
            </p>

            {/* Trust pills */}
            <div className="flex flex-wrap gap-2 mb-8" aria-label="Trust signals">
              {pills.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 bg-background border border-border rounded-full px-3 py-1.5 text-sm font-medium text-foreground shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 text-accent flex-shrink-0" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="#quote" onClick={() => trackBookNowClick("hero_location")}>
                  {ctaPrimary} <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+12407042551" onClick={() => trackPhoneClick("hero_location")}>
                  <Phone className="h-4 w-4 mr-2" /> (240) 704-2551
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              No commitment · Same-day slots available · 100% satisfaction guaranteed
            </p>
          </div>

          {/* Hero image — LCP element, eager + high priority */}
          <div
            className="rounded-2xl overflow-hidden shadow-xl border border-border/50"
            style={{ aspectRatio: "4/3" }}
          >
            <img
              src={heroImage}
              alt={heroImageAlt}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
              width={600}
              height={450}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLocation;
