import { ArrowRight, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamPhoto from "@/assets/team-photo.png";

const HeroSection = () => (
  <section className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
    {/* Background image */}
    <img
      src={teamPhoto}
      alt="Capital Clean Care team of professional cleaners"
      className="absolute inset-0 w-full h-full object-cover object-top"
      loading="eager"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-foreground/65" />

    {/* Content */}
    <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
      <div className="max-w-2xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 mb-6">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm font-medium text-card">Same-day availability</span>
        </div>

        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-card leading-tight mb-6">
          Professional Cleaning
          <br />
          <span className="text-accent">Services in MD, DC & VA</span>
        </h1>

        <p className="text-card/80 text-base md:text-lg mb-6 leading-relaxed max-w-lg">
          Experience spotless perfection with our trusted local team.
          Your home deserves more than just a clean — it deserves care.
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-8">
          {["5-Star rated service", "Money back guarantee", "Eco-friendly products"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-accent" />
              <span className="text-card/90 text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="cta" size="lg" className="text-base px-8 h-12" asChild>
            <a href="#quote">Book Now <ArrowRight className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button
            size="lg"
            className="text-base px-8 h-12 bg-card/10 text-card border border-card/20 hover:bg-card/20 backdrop-blur-sm"
            asChild
          >
            <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> (240) 704-2551</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
