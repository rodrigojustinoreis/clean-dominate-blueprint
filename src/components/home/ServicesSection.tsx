import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { dirServiceCards as services } from "@/data/home-directory";

// Real team photos / service imagery keyed by slug — an image-led card reads faster
// and more trustworthy than a generic icon. Prefer authentic team photos where we have them.
const SERVICE_CARD_IMAGES: Record<string, string> = {
  "house-cleaning": "/images/services/card-house-cleaning.webp",
  "deep-cleaning": "/images/services/card-deep-cleaning.webp",
  "kitchen-cleaning": "/images/services/kitchen-hero.webp",
  "bathroom-cleaning": "/images/services/bathroom-hero.webp",
  "living-area-cleaning": "/images/team/real-team-luxury-home.webp",
  "move-out-cleaning": "/images/services/move-out-cleaning.webp",
  "post-construction-cleaning": "/images/team/team-post-construction.webp",
  "recurring-cleaning": "/images/services/recurring-cleaning.webp",
  "eco-friendly-cleaning": "/images/services/eco-friendly-cleaning.webp",
  "condo-cleaning": "/images/blog/condo-interior.webp",
  "maid-service": "/images/blog/maid-service-hero.webp",
  "airbnb-cleaning": "/images/services/airbnb-cleaning.webp",
  "office-cleaning": "/images/services/office-cleaning.webp",
};

const ServicesSection = () => (
  <section className="py-20 md:py-28 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Our Cleaning Services</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">From routine maintenance to intensive deep cleans, comprehensive solutions for every need.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((s) => (
          <Card key={s.slug} className="group overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Link to={`/services/${s.slug}`} className="block relative aspect-[16/10] overflow-hidden" aria-label={`Learn more about ${s.name}`}>
              <img
                src={SERVICE_CARD_IMAGES[s.slug] || "/images/team/real-team-two-members.webp"}
                alt={`${s.name} by Capital Clean Care in Maryland, DC & Northern Virginia`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/45 via-primary/5 to-transparent" aria-hidden="true" />
              <h3 className="absolute bottom-3 left-4 right-4 font-heading text-xl font-bold text-white drop-shadow-sm">{s.name}</h3>
            </Link>
            <div className="p-6 flex flex-col flex-1">
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">{s.shortDescription}</p>
              <div className="flex items-center justify-between gap-3">
                <Link to={`/services/${s.slug}`} className="text-accent font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn more <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </Link>
                <a href="/#quote" className="text-xs font-semibold bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-3 py-1.5 shrink-0">
                  Get Quote →
                </a>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="cta" size="lg" asChild>
          <a href="/#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></a>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
