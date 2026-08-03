import { Star, ExternalLink, Quote, BadgeCheck, ShieldCheck, Leaf, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleReviewsLive from "@/components/GoogleReviewsLive";
import TrustBadges from "@/components/TrustBadges";
import FadeInSection from "@/components/blog/FadeInSection";
import TransformationsGallery from "@/components/TransformationsGallery";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const HAS_GOOGLE_API = !!(import.meta.env.VITE_GOOGLE_MAPS_API_KEY && import.meta.env.VITE_GOOGLE_PLACE_ID);

// Direct link to the Capital Clean Care Google Business listing (live rating & reviews).
const GOOGLE_LISTING_URL = "https://www.google.com/maps?cid=1774420840079969097";
const GOOGLE_REVIEW_URL = "https://share.google/4lygNFQSUZrkfaVh7";

// Real Google reviews for Capital Clean Care (5.0 average across 45 reviews, all 5★).
// Verbatim from the Google Business Profile — do not embellish. Dates are approximate.
const reviews = [
  { name: "Lisa Phillips", date: "2026-06-18", text: "Fantastic move out clean. I have a 4002 sq ft home that we've lived in for 15 years and I needed to get it in pristine shape for sale. My house was vacant but it was a HUGE job and Rodrigo and his team did a superb job of cleaning my entire house — floors, windows, walls, appliances, baseboards, carpets, counters, drawers, cabinets, banisters, doors, tubs, sinks, mirrors. Ceiling fans, light switches — every crook and cranny spotlessly clean. The house is totally immaculate and I know I will get top dollar thanks to capital clean! I highly recommend" },
  { name: "Christina Damiani", date: "2026-06-13", text: "Excellent cleaning service! The home looked spotless and fresh when the job was completed. Very thorough, professional, and reliable." },
  { name: "Steph M", date: "2026-05-29", text: "Capital Clean Care were outstanding. The thoroughness and attention to detail was exceptional, home was spotless and looked beautiful. Couldn't be happier. Highly recommend." },
  { name: "Lisa Famulare", date: "2026-05-29", text: "Excellent job with tough stains!" },
  { name: "David Reed", date: "2026-05-29", text: "Rodrigo and his team were incredible - worth every penny. They left it spotless!" },
  { name: "Erika Wilson Wells", date: "2026-05-29", text: "Always helpful, kind and thorough cleaning by Capital Clean Care. I highly recommended this business." },
  { name: "Grace J", date: "2026-05-22", text: "I cannot recommend Capital Clean Care enough! From the very first contact, they responded promptly and offered a fair, competitive price for a large apartment. No surprises, just great service. The crew, Maria, Maria, and Marciane arrived right on time and jumped straight into action. They took the time to understand exactly what I needed and delivered outstanding results. The apartment was spotless. This team brought professionalism, efficiency, and genuine care to their work, and it showed in every detail. I will absolutely be using Capital Clean Care again and wholeheartedly recommend them to anyone looking for a trustworthy, top-quality cleaning service. Five stars, without hesitation!" },
  { name: "Ranj Saadallah", date: "2026-05-19", text: "I have nothing but great things to say about CCC. They show up on time, and the house looks wonderful when they're done, every time. The pictures speak for itself. I recently had both our Air BnB's deep cleaned and the deep clean service is exceptional — the team spent hours thoroughly checking, cleaning, and disinfecting every single square foot of my homes. They cleaned the windows inside and out, appliances, and even got behind the appliances. My homes look and feel brighter. I highly recommend!" },
];

const fmtDate = (iso: string) => new Date(iso).toLocaleDateString("en-US", { month: "long", year: "numeric" });

const initials = (name: string) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

const Stars = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: n }).map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
  </div>
);

const Reviews = () => {
  const { seoHelmet } = useSEO({
    title: "Customer Reviews — 5.0★ on Google (45 Reviews) | Capital Clean Care",
    description:
      "Read 45 five-star Google reviews for Capital Clean Care, the DMV's eco-friendly, Latino-owned house cleaning company. See why families in MD, DC & VA have trusted us since 2015.",
    canonical: "https://capitalcleancare.com/reviews",
  });

  // Reviews carousel (embla) — track active slide for dots + gentle autoplay.
  const [api, setApi] = useState<CarouselApi>();
  const [snaps, setSnaps] = useState<number[]>([]);
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setSnaps(api.scrollSnapList());
      setSelected(api.selectedScrollSnap());
    };
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => { api.off("select", sync); api.off("reInit", sync); };
  }, [api]);

  useEffect(() => {
    if (!api || paused) return;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [api, paused]);

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema
        reviews={reviews.map((r) => ({ name: r.name, text: r.text, datePublished: r.date }))}
        emitReviewItems
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Reviews", href: "/reviews" }]} />

      {/* ── Header / social proof ─────────────────────────── */}
      <section className="bg-gradient-to-b from-[#F1F8F1] to-white py-14 md:py-20 border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Reviews" }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              What Our Customers Say About Capital Clean Care
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Don't take our word for it. Here's what homeowners across Maryland, DC, and Northern Virginia say after
              we've cleaned their homes — straight from Google.
            </p>

            <div className="inline-flex flex-col sm:flex-row items-center gap-5 bg-white border border-border rounded-2xl shadow-sm px-7 py-5">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-heading font-extrabold text-foreground leading-none">5.0</span>
                <div className="text-left">
                  <Stars />
                  <p className="text-sm text-muted-foreground mt-1">from <strong>45</strong> Google reviews</p>
                </div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-5" />
                Read them on Google <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <p className="mt-6 text-sm text-muted-foreground flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
              <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-accent" /> Serving the DMV since 2015</span>
              <span className="text-border">·</span>
              <span>Latino-owned &amp; family-operated</span>
              <span className="text-border">·</span>
              <span>Licensed, bonded &amp; insured</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── Social-proof video ────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#0a1726] py-16 md:py-24">
        {/* brand glows */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="container relative mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <div className="text-center mb-8">
              <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">45 Five-Star Reviews</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mt-3">
                See Why the DMV Trusts Capital Clean Care
              </h2>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl ring-1 ring-accent/20 bg-black">
              <video
                className="w-full h-auto block"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster="/videos/reviews-poster.jpg"
                aria-label="Capital Clean Care — rated 5.0 stars across 45 Google reviews from homeowners in Maryland, DC and Northern Virginia"
              >
                <source src="/videos/reviews.webm" type="video/webm" />
                <source src="/videos/reviews.mp4" type="video/mp4" />
              </video>
            </div>

            {/* stats band */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-8">
              {[
                { v: "5.0", l: "Average rating" },
                { v: "45", l: "Google reviews" },
                { v: "100%", l: "Five-star" },
                { v: "2015", l: "Serving the DMV" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-5 text-center backdrop-blur-sm">
                  <p className="font-heading text-3xl md:text-4xl font-extrabold text-white leading-none">{s.v}</p>
                  <p className="text-xs md:text-sm text-white/60 mt-2">{s.l}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Reviews grid ──────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-3">45 Five-Star Reviews on Google</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Every one of our 45 Google reviews is a 5-star rating. Here are some of the most recent.</p>
          </FadeInSection>

          {HAS_GOOGLE_API ? (
            <GoogleReviewsLive />
          ) : (
            <div
              className="relative md:px-12"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocusCapture={() => setPaused(true)}
              onBlurCapture={() => setPaused(false)}
            >
              <Carousel opts={{ loop: true, align: "start" }} setApi={setApi}>
                <CarouselContent>
                  {reviews.map((r, i) => (
                    <CarouselItem key={i} className="md:basis-1/2">
                      <Card className="group relative h-full overflow-hidden border-border/70 shadow-sm transition-shadow hover:shadow-lg">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-primary" />
                        <CardContent className="p-7 flex flex-col h-full">
                          <div className="flex items-center justify-between mb-4">
                            <Stars />
                            <span className="text-xs text-accent inline-flex items-center gap-1 font-medium">
                              <BadgeCheck className="h-3.5 w-3.5" /> Verified on Google
                            </span>
                          </div>
                          <Quote className="h-6 w-6 text-accent/25 mb-2" />
                          <p className="text-foreground mb-6 leading-relaxed flex-1">{r.text}</p>
                          <div className="flex items-center gap-3 border-t border-border pt-4">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-primary text-sm font-bold text-white">
                              {initials(r.name)}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-foreground truncate">{r.name}</p>
                              <p className="text-xs text-muted-foreground">{fmtDate(r.date)} · Google</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {snaps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Go to review ${i + 1}`}
                    aria-current={selected === i}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      selected === i ? "w-6 bg-accent" : "w-2 bg-border hover:bg-muted-foreground/40",
                    )}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer">
                See all 45 reviews on Google <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Real video transformations ────────────────────── */}
      <TransformationsGallery />

      {/* ── A note from the founder ───────────────────────── */}
      <section className="py-16 md:py-20 bg-secondary/50 border-y border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold mb-6">A Note From Our Founder</h2>
            <Quote className="h-8 w-8 text-accent/40 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground leading-relaxed italic mb-5">
              "When I started Capital Clean Care in 2015, I had one rule: treat every home like it's my own. We're a
              family-owned, Latino-owned team, and we built this business on trust — background-checked cleaners,
              eco-friendly products that are safe for your kids and pets, and a simple promise that if you're not happy,
              we make it right. Reviews like these mean everything to me and my team."
            </p>
            <p className="font-semibold text-foreground">— Rodrigo, Founder, Capital Clean Care</p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Why DMV families choose us (synthesis + links) ── */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold mb-5">Why DMV Families Choose Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Read through our reviews and the same themes come up again and again. Customers mention our team by name —
              proof that the same trusted, background-checked cleaners come back to their homes. They notice our{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent hover:underline">eco-friendly, non-toxic products</Link>.
              And they single out our thoroughness on the jobs that matter most: a{" "}
              <Link to="/services/move-out-cleaning" className="text-accent hover:underline">move-out clean</Link> before a sale,
              a <Link to="/services/deep-cleaning" className="text-accent hover:underline">deep clean</Link> for an Airbnb turnover,
              and the detail work — baseboards, inside appliances, window tracks — that a quick clean always skips.
            </p>
            <h3 className="font-heading text-xl font-bold mb-3 mt-8">Serving Maryland, DC &amp; Northern Virginia</h3>
            <p className="text-muted-foreground leading-relaxed">
              We're based in Silver Spring and serve homeowners across the DMV — from{" "}
              <Link to="/locations/silver-spring-md/house-cleaning" className="text-accent hover:underline">Silver Spring</Link>,{" "}
              <Link to="/locations/bethesda-md/house-cleaning" className="text-accent hover:underline">Bethesda</Link>, and{" "}
              <Link to="/locations/rockville-md/house-cleaning" className="text-accent hover:underline">Rockville</Link>{" "}
              to DC and Northern Virginia. Whether it's a one-time deep clean or a{" "}
              <Link to="/services/recurring-cleaning" className="text-accent hover:underline">recurring plan</Link>, the
              same standard shows up at your door.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-secondary/40 border border-border rounded-2xl p-6 mt-10 flex flex-wrap items-start gap-4 text-sm text-muted-foreground">
              <ShieldCheck className="h-6 w-6 text-accent shrink-0" />
              <p className="leading-relaxed flex-1 min-w-[16rem]">
                Our team is <strong>licensed, bonded, and insured</strong>, and every cleaner is background-checked before
                entering a home. We use only <strong>EPA Safer Choice certified</strong>, plant-based products — safe for
                children, pets, and allergy sufferers. Proudly serving the DMV since 2015.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <TrustBadges withBackground />

      {/* ── Google embed + leave a review ─────────────────── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3 flex items-center justify-center gap-2">
              <MapPin className="h-6 w-6 text-accent" /> Find Us on Google
            </h2>
            <p className="text-center text-muted-foreground mb-8">See our reviews, hours, and service area on Google Maps.</p>
            <div className="w-full rounded-2xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Capital+Clean+Care+Silver+Spring&output=embed"
                width="100%" height="420" style={{ border: 0 }} allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade" title="Capital Clean Care on Google Maps"
              />
            </div>
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">Had a great experience? We'd love to hear from you.</p>
              <Button variant="cta" size="lg" className="rounded-full" asChild>
                <a href={GOOGLE_REVIEW_URL} target="_blank" rel="noopener noreferrer">
                  <Leaf className="mr-2 h-4 w-4" /> Leave a Google Review
                </a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Final CTA + quote form ────────────────────────── */}
      <section className="py-16 md:py-20 bg-secondary border-t border-border">
        <div className="container mx-auto px-4 max-w-2xl">
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-center mb-3">Ready to Experience It Yourself?</h2>
            <p className="text-center text-muted-foreground mb-8">Get a free quote in 60 seconds — and find out why 45 families left us 5 stars.</p>
            <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
          </FadeInSection>
        </div>
      </section>
    </Layout>
  );
};

export default Reviews;
