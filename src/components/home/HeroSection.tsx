import { ArrowRight, Phone, Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.png";

const HeroSection = () => (
  <section className="relative min-h-[560px] md:min-h-[650px] lg:min-h-[720px] flex items-center overflow-hidden">
    {/* Background image */}
    <img
      src={teamPhoto}
      alt="Capital Clean Care team of professional cleaners"
      className="absolute inset-0 w-full h-full object-cover object-top scale-105"
      loading="eager"
    />
    {/* Gradient overlays for depth */}
    <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-md border border-card/15 rounded-full px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="text-xs font-medium text-card/90 uppercase tracking-wider">Same-day availability</span>
        </div>

        <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-card leading-[1.15] mb-5">
          Premium Cleaning
          <br />
          <span className="text-accent">for DMV Homes</span>
        </h1>

        <p className="text-card/70 text-sm md:text-base mb-8 leading-relaxed max-w-md">
          Eco-friendly, detail-oriented cleaning by background-checked professionals. Your home deserves more than just a clean.
        </p>

        {/* Trust points - minimal pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          {["5-Star Rated", "Satisfaction Guarantee", "Eco-Friendly"].map((item) => (
            <span key={item} className="inline-flex items-center gap-1.5 bg-card/8 backdrop-blur-sm border border-card/10 rounded-full px-3 py-1.5 text-xs text-card/80">
              <Check className="h-3 w-3 text-accent" />
              {item}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="cta" size="lg" className="text-sm px-8 h-12 rounded-full" asChild>
            <a href="#quote">Get Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button
            size="lg"
            className="text-sm px-6 h-12 rounded-full bg-transparent text-card border border-card/25 hover:bg-card/10 backdrop-blur-sm"
            asChild
          >
            <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> (240) 704-2551</a>
          </Button>
        </div>

        {/* Social proof */}
        <div className="flex items-center gap-3 mt-10 pt-8 border-t border-card/10">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-accent/30 border-2 border-card/20 backdrop-blur-sm" />
            ))}
          </div>
          <div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-3 w-3 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xs text-card/60 mt-0.5">Trusted by 150+ homeowners</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
