import { Link } from "react-router-dom";
import { Star, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  { name: "Sarah M.", location: "Bethesda, MD", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products that I feel safe having around my kids and pets. Highly recommend!", rating: 5 },
  { name: "James T.", location: "Arlington, VA", text: "We've used their bi-weekly service for six months and every visit exceeds expectations. Our dedicated team knows our home and preferences perfectly.", rating: 5 },
  { name: "Lauren K.", location: "Capitol Hill, DC", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I didn't even know existed.", rating: 5 },
  { name: "David R.", location: "Rockville, MD", text: "Switching to Capital Clean Care was the best decision. Their eco-friendly approach and consistent quality make them stand out. Our home has never looked better.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground text-base md:text-lg">Real reviews from real homeowners across MD, DC & VA.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-7">
              <Quote className="h-8 w-8 text-accent/20 mb-3" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground mb-5 leading-relaxed">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-10">
        <Button variant="outline" asChild>
          <Link to="/reviews">Read All Reviews <ArrowRight className="ml-1 h-3 w-3" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
