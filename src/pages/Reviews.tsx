import { Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleReviewsLive from "@/components/GoogleReviewsLive";
import TrustBadges from "@/components/TrustBadges";

const HAS_GOOGLE_API = !!(import.meta.env.VITE_GOOGLE_MAPS_API_KEY && import.meta.env.VITE_GOOGLE_PLACE_ID);

const GOOGLE_REVIEW_URL = "https://share.google/4lygNFQSUZrkfaVh7";
const GOOGLE_MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Capital+Clean+Care";

// Real Google reviews for Capital Clean Care (5.0 average across 45 reviews).
// Pulled from the Google Business Profile — keep verbatim; do not embellish.
const reviews = [
  { name: "Lisa Phillips", text: "Fantastic move out clean. I have a 4002 sq ft home that we've lived in for 15 years and I needed to get it in pristine shape for sale. My house was vacant but it was a HUGE job and Rodrigo and his team did a superb job of cleaning my entire house — floors, windows, walls, appliances, baseboards, carpets, counters, drawers, cabinets, banisters, doors, tubs, sinks, mirrors. Ceiling fans, light switches — every crook and cranny spotlessly clean. The house is totally immaculate and I know I will get top dollar thanks to capital clean! I highly recommend", rating: 5 },
  { name: "Christina Damiani", text: "Excellent cleaning service! The home looked spotless and fresh when the job was completed. Very thorough, professional, and reliable.", rating: 5 },
  { name: "Steph M", text: "Capital Clean Care were outstanding. The thoroughness and attention to detail was exceptional, home was spotless and looked beautiful. Couldn't be happier. Highly recommend.", rating: 5 },
  { name: "Lisa Famulare", text: "Excellent job with tough stains!", rating: 5 },
  { name: "David Reed", text: "Rodrigo and his team were incredible - worth every penny. They left it spotless!", rating: 5 },
  { name: "Erika Wilson Wells", text: "Always helpful, kind and thorough cleaning by Capital Clean Care. I highly recommended this business.", rating: 5 },
  { name: "Grace J", text: "I cannot recommend Capital Clean Care enough! From the very first contact, they responded promptly and offered a fair, competitive price for a large apartment. No surprises, just great service. The crew, Maria, Maria, and Marciane arrived right on time and jumped straight into action. They took the time to understand exactly what I needed and delivered outstanding results. The apartment was spotless. This team brought professionalism, efficiency, and genuine care to their work, and it showed in every detail. I will absolutely be using Capital Clean Care again and wholeheartedly recommend them to anyone looking for a trustworthy, top-quality cleaning service. Five stars, without hesitation!", rating: 5 },
  { name: "Ranj Saadallah", text: "I have nothing but great things to say about CCC. They show up on time, and the house looks wonderful when they're done, every time. The pictures speak for itself. I recently had both our Air BnB's deep cleaned and the deep clean service is exceptional — the team spent hours thoroughly checking, cleaning, and disinfecting every single square foot of my homes. They cleaned the windows inside and out, appliances, and even got behind the appliances. My homes look and feel brighter. I highly recommend!", rating: 5 },
];

const Reviews = () => {
  const { seoHelmet } = useSEO({
    title: "5-Star Cleaning Reviews — MD, DC & VA | Capital Clean Care",
    description: "Read 45 five-star reviews from Maryland, DC & Virginia homeowners. See why families trust Capital Clean Care for eco-friendly, professional house cleaning.",
    canonical: "https://capitalcleancare.com/reviews",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema reviews={reviews.map((r) => ({ name: r.name, text: r.text }))} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }]} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} className="mb-6" />
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Client Reviews</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">Hear from homeowners across Maryland, DC, and Virginia who trust Capital Clean Care with their homes.</p>

            {/* Google Reviews Badge */}
            <a
              href={GOOGLE_MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 hover:opacity-90 transition-opacity"
            >
              <Card className="border-accent/20 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="px-6 py-4 flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                      alt="Google"
                      className="h-5 mb-1"
                    />
                    <span className="text-3xl font-bold text-foreground">5.0</span>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <div className="text-left border-l border-border pl-4">
                    <p className="font-semibold text-foreground">Google Reviews</p>
                    <p className="text-sm text-muted-foreground">Based on 45 reviews</p>
                    <span className="text-xs text-accent inline-flex items-center gap-1 mt-1">
                      View on Google <ExternalLink className="h-3 w-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          {HAS_GOOGLE_API ? (
            <GoogleReviewsLive />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {reviews.map((r, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex gap-0.5">
                        {Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                      </div>
                      <span className="text-xs text-muted-foreground">via Google</span>
                    </div>
                    <p className="text-foreground mb-4 italic">"{r.text}"</p>
                    <p className="text-sm font-semibold">{r.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {/* Google Reviews Embed */}
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="font-heading text-2xl font-bold text-center mb-6">Google Reviews</h2>
            <div className="w-full rounded-lg overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Capital+Clean+Care&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Capital Clean Care on Google Maps"
              />
            </div>
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

      <TrustBadges withBackground={false} />

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
