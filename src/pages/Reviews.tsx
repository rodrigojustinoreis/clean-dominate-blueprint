import { Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";

const GOOGLE_REVIEW_URL = "https://g.page/r/capitalcleancare/review";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Capital+Clean+Care";

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
  const { seoHelmet } = useSEO({
    title: "Client Reviews — 5-Star House Cleaning in MD, DC & VA | Capital Clean Care",
    description: "Read 30+ five-star reviews from Maryland, DC & Virginia homeowners. See why families trust Capital Clean Care for eco-friendly, professional house cleaning.",
    canonical: "https://capitalcleancare.com/reviews",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} className="mb-6" />
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Hear from homeowners across Maryland, DC, and Virginia who trust Capital Clean Care with their homes.</p>

            {/* Google Reviews Badge */}
            <Card className="inline-block mt-6">
              <CardContent className="px-6 py-4 flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-foreground">5.0</span>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
                <div className="text-left border-l border-border pl-4">
                  <p className="font-semibold text-foreground">Google Reviews</p>
                  <p className="text-sm text-muted-foreground">Based on 30+ reviews</p>
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-accent hover:underline inline-flex items-center gap-1 mt-1"
                  >
                    View on Google <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {reviews.map((r, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-accent text-accent" />)}
                    </div>
                    <span className="text-xs text-muted-foreground">via Google</span>
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
            <p className="text-muted-foreground mb-4">We'd love to hear from you! Leave us a review on Google.</p>
            <Button variant="cta" asChild>
              <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                Leave a Google Review <ExternalLink className="ml-1 h-4 w-4" />
              </a>
            </Button>
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
