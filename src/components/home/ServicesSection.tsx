import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/data/services";

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
          <Card key={s.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-7">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3">{s.name}</h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.shortDescription}</p>
              <div className="flex items-center justify-between">
                <Link to={`/services/${s.slug}`} className="text-accent font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Learn More <ArrowRight className="h-3 w-3" />
                </Link>
                <a href="/#quote" className="text-xs font-semibold bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors rounded-full px-3 py-1.5">
                  Get Quote →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button variant="cta" size="lg" asChild>
          <a href="/#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
        </Button>
      </div>
    </div>
  </section>
);

export default ServicesSection;
