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
  teamTrustLabel?: string;
  ctaNote?: string;
  heroAspectRatio?: string;
  heroImageWidth?: number;
  heroImageHeight?: number;
  heroImageSrcSet?: string;
  heroImageSizes?: string;
  heroImageContainerClassName?: string;
  preserveFullImage?: boolean;
  updatedLabel?: string;
  updatedDateTime?: string;
}

const defaultPills = [
  { Icon: Home, label: "Latino-Owned & Operated" },
  { Icon: Shield, label: "Bonded & Insured" },
  { Icon: Users, label: "Same Team Every Visit" },
  { Icon: Leaf, label: "Eco-Friendly Products" },
  { Icon: Star, label: "5.0 ★ · 45 reviews" },
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
  teamTrustLabel,
  ctaNote = "No commitment · Same-day slots available · 100% satisfaction guaranteed",
  heroAspectRatio = "4/3",
  heroImageWidth = 600,
  heroImageHeight = 450,
  heroImageSrcSet,
  heroImageSizes,
  heroImageContainerClassName = "",
  preserveFullImage = false,
  updatedLabel,
  updatedDateTime,
}: HeroLocationProps) => {
  const pills = [
    ...defaultPills,
    { Icon: MapPin, label: `Serving ${cityName}, ${state} ${zipRange}` },
  ].map((pill) => pill.label === "Same Team Every Visit" && teamTrustLabel ? { ...pill, label: teamTrustLabel } : pill);

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 pb-12 md:pb-16 pt-6">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] gap-8 lg:gap-10 items-center">
          {/* Text */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-1 leading-tight">
              {h1}
            </h1>
            <LastUpdated date={updatedLabel} dateTime={updatedDateTime} />
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
              {ctaNote}
            </p>
          </div>

          {/* Hero image — LCP element, eager + high priority */}
          <div
            className={`relative w-full rounded-2xl overflow-hidden shadow-xl border border-border/50 bg-primary/10 ${heroImageContainerClassName}`}
            style={{ aspectRatio: heroAspectRatio }}
          >
            {preserveFullImage && (
              <img
                src={heroImage}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-45"
                loading="eager"
                width={heroImageWidth}
                height={heroImageHeight}
              />
            )}
            <img
              src={heroImage}
              srcSet={heroImageSrcSet}
              sizes={heroImageSizes}
              alt={heroImageAlt}
              className={`relative h-full w-full ${preserveFullImage ? "scale-[1.16] object-contain" : "object-cover"}`}
              loading="eager"
              fetchPriority="high"
              width={heroImageWidth}
              height={heroImageHeight}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLocation;
