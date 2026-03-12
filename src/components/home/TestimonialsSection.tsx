import { Link } from "react-router-dom";
import { Star, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_REVIEWS_URL = "https://share.google/4lygNFQSUZrkfaVh7";

const testimonials = [
  { name: "Sarah M.", location: "Bethesda, MD", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products that I feel safe having around my kids and pets.", rating: 5 },
  { name: "James T.", location: "Arlington, VA", text: "We've used their bi-weekly service for six months and every visit exceeds expectations. Our dedicated team knows our home perfectly.", rating: 5 },
  { name: "Lauren K.", location: "Capitol Hill, DC", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I didn't even know existed.", rating: 5 },
  { name: "David R.", location: "Rockville, MD", text: "Their eco-friendly approach and consistent quality make them stand out. Switching to Capital Clean Care was the best decision we've made.", rating: 5 },
];

const TestimonialsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <div className="text-center mb-14">
        <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">What Our Clients Say</h2>
        <p className="text-muted-foreground text-base md:text-lg">Real reviews from real homeowners across MD, DC & VA.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="group relative bg-card rounded-2xl p-8 border border-border hover:border-accent/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {/* Decorative accent line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-foreground leading-relaxed mb-6 text-sm md:text-base">
              "{t.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="font-heading font-bold text-accent text-sm">{t.name.charAt(0)}</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button variant="outline" className="rounded-full" asChild>
          <Link to="/reviews">Read All Reviews <ArrowRight className="ml-1 h-3 w-3" /></Link>
        </Button>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border hover:border-accent/40 hover:bg-accent/5 transition-all text-sm font-medium"
        >
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span>5.0 on Google</span>
          <ExternalLink className="h-3 w-3 text-muted-foreground" />
        </a>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
