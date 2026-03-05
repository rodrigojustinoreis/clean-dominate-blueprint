import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";

const reviews = [
  { name: "Sarah M.", location: "Bethesda, MD", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products I feel safe having around my kids and pets.", rating: 5 },
  { name: "James T.", location: "Arlington, VA", text: "We've used their bi-weekly service for six months and every visit exceeds expectations. Our dedicated team knows our home perfectly.", rating: 5 },
  { name: "Lauren K.", location: "Capitol Hill, DC", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I didn't even know existed.", rating: 5 },
  { name: "David R.", location: "Rockville, MD", text: "Switching to Capital Clean Care was the best decision. Their eco-friendly approach and consistent quality make them stand out.", rating: 5 },
  { name: "Michelle P.", location: "Silver Spring, MD", text: "As a busy working mom, having a reliable cleaning team is essential. Capital Clean Care never disappoints — our home always looks amazing.", rating: 5 },
  { name: "Robert L.", location: "Georgetown, DC", text: "They handle our historic Georgetown home with such care. The attention to detail with our antique woodwork and marble is exceptional.", rating: 5 },
  { name: "Amanda S.", location: "McLean, VA", text: "We've tried several cleaning services in McLean. Capital Clean Care is by far the most professional and thorough we've experienced.", rating: 5 },
  { name: "Carlos G.", location: "Frederick, MD", text: "Great service at a fair price. The team is always on time, friendly, and leaves our Frederick home sparkling. Highly recommended.", rating: 5 },
  { name: "Jennifer W.", location: "Columbia, MD", text: "The move-in cleaning they did for our new Columbia home was outstanding. Every cabinet, appliance, and surface was spotless.", rating: 5 },
  { name: "Michael B.", location: "Dupont Circle, DC", text: "Living in a busy DC neighborhood, I appreciate how reliable and consistent they are. Same great results every single visit.", rating: 5 },
];

const Reviews = () => {
  useSEO({
    title: "Client Reviews | Capital Clean Care",
    description: "Read reviews from Capital Clean Care clients across MD, DC & VA. See why families trust us for eco-friendly, premium house cleaning services.",
  });

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Hear from homeowners across Maryland, DC, and Virginia who trust Capital Clean Care with their homes.</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-accent text-accent" />)}</div>
              <span className="font-semibold">4.9/5</span>
              <span className="text-muted-foreground">based on 200+ reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((r, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
                  </div>
                  <p className="text-foreground mb-4 italic">"{r.text}"</p>
                  <p className="text-sm font-semibold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <h3 className="font-heading text-xl font-semibold mb-3">Had a Great Experience?</h3>
            <p className="text-muted-foreground mb-4">We'd love to hear from you! Leave us a review.</p>
            <Button variant="cta">Leave a Review</Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-6">Get Your Free Quote</h2>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
