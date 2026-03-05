import { Link } from "react-router-dom";
import { ArrowRight, Phone, Shield, Leaf, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ConversionCTAProps {
  cityName?: string;
  variant?: "full" | "compact";
}

const ConversionCTA = ({ cityName, variant = "full" }: ConversionCTAProps) => {
  const location = cityName ? ` in ${cityName}` : "";

  if (variant === "compact") {
    return (
      <div className="bg-primary rounded-2xl p-6 md:p-8 text-center">
        <h3 className="font-heading text-xl md:text-2xl font-bold text-primary-foreground mb-3">
          Ready for a Cleaner Home{location}?
        </h3>
        <p className="text-primary-foreground/80 text-sm mb-5 max-w-md mx-auto">
          Get a personalized quote in minutes. No obligation, no hidden fees.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="cta" size="lg" asChild>
            <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-primary rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-accent/20 opacity-50" />
          <div className="relative">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Get Your Free Cleaning Quote{location}
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-lg mx-auto">
              Join hundreds of happy homeowners{location}. Eco-friendly products, background-checked teams, satisfaction guaranteed.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-accent" /> Licensed & Insured</span>
              <span className="flex items-center gap-1.5"><Leaf className="h-4 w-4 text-accent" /> Eco-Friendly</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-accent" /> Background-Checked</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" className="text-base" asChild>
                <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button variant="secondary" size="lg" className="text-base" asChild>
                <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConversionCTA;
