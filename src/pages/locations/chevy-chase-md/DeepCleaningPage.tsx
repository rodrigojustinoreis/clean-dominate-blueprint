import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Star, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
import {
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
} from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import HeroLocation from "@/components/location/HeroLocation";
import ServiceChecklistLocation from "@/components/location/ServiceChecklistLocation";
import InternalLinksGrid from "@/components/location/InternalLinksGrid";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/chevy-chase-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Chevy Chase?",
    a: "Most Chevy Chase homes take 4–6 hours. Larger homes or homes with heavy buildup near Chevy Chase Village or Martin's Additions may take longer.",
  },
  {
    q: "How much does a deep cleaning cost in Chevy Chase, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — use the form below. No commitment required. Call (240) 704-2551 for immediate assistance.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked before entering any Chevy Chase home.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets throughout Chevy Chase (ZIP 20815).",
  },
  {
    q: "Do you do spring cleaning in Chevy Chase?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year for homes in Chevy Chase, Somerset, or anywhere in the 20815 ZIP.",
  },
  {
    q: "How often should I get a deep cleaning in Chevy Chase?",
    a: "Once or twice a year is typical, combined with regular maintenance cleanings in between. Our recurring cleaning plans keep your Chevy Chase home consistently clean.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Chevy Chase and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep Detail",
    items: [
      "Oven interior scrubbed",
      "Microwave inside cleaned",
      "Range hood degreased",
      "Inside all cabinets and drawers",
      "Faucets descaled",
      "Backsplash scrubbed",
      "Sink deep-cleaned",
    ],
  },
  {
    heading: "Bathrooms — Deep Detail",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet (base, hinges, under rim) deep-cleaned",
      "Exhaust fan cleaned",
      "Mirrors edge-to-edge",
      "Tile surfaces sanitized",
    ],
  },
  {
    heading: "All Rooms — Deep Detail",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans dusted",
      "Door frames and handles wiped",
      "Vacuum under all furniture",
      "Interior doors wiped",
    ],
  },
];

const chevyChaseServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const ChevyChaseDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in Chevy Chase, MD",
    description:
      "Professional deep cleaning in Chevy Chase, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-tile-scrubber.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
          { label: "Deep Cleaning", href: "/locations/chevy-chase-md/deep-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Chevy Chase, MD",
          "Chevy Chase Village, MD",
          "Martin's Additions, Chevy Chase MD",
          "Somerset, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Fairfax, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Deep Cleaning in Chevy Chase, MD"
        description="Professional top-to-bottom deep cleaning in Chevy Chase, MD. Inside appliances, grout scrubbing, ceiling fans, baseboards — everywhere standard cleanings miss. EPA Safer Choice certified products."
        url={PAGE_URL}
        areaServed={["Chevy Chase, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Deep Cleaning Services in Chevy Chase, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Chevy Chase home — from Section 4 to Martin's Additions. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Chevy Chase"
        state="MD"
        zipRange="20815"
        heroImage="/images/team/team-tile-scrubber.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Chevy Chase, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Chevy Chase"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Chevy Chase Deep Cleaning"
        categories={checklistCategories}
      />

      {/* ── When to Book ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            When Should You Book a Deep Clean in Chevy Chase?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Moving In or Out",
                body: "Starting fresh in a new home in the 20815 ZIP code? Or leaving your current Chevy Chase property spotless for inspection? A deep clean is the right choice.",
              },
              {
                title: "Seasonal Reset",
                body: "Spring cleaning is the most popular reason Chevy Chase families book a deep clean. We cover everything — from ceiling fans to grout lines — so your home starts the season right.",
              },
              {
                title: "Before a Special Event",
                body: "Hosting guests near the Chevy Chase Club or along Connecticut Avenue? A deep clean ensures every detail is picture-perfect before company arrives.",
              },
              {
                title: "Long Gap Between Cleanings",
                body: "If your home hasn't had a professional clean in months, a deep clean resets the baseline so that future maintenance cleanings are faster and more effective.",
              },
              {
                title: "Post-Renovation",
                body: "After construction or remodeling, fine dust settles everywhere. Our team is equipped to handle post-construction residue in Chevy Chase homes.",
              },
              {
                title: "Preparing to Sell or Rent",
                body: "First impressions matter. A thorough deep clean in Section 3 or Martin's Additions can make a meaningful difference in how buyers or renters perceive your property.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ──────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-semibold text-foreground border border-border">Area</th>
                  <th className="text-left p-4 font-semibold text-foreground border border-border">Standard Cleaning</th>
                  <th className="text-left p-4 font-semibold text-accent border border-border">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Appliances", "Surface wipe", "Inside oven, inside microwave"],
                  ["Floors", "General mopping", "Scrubbing grout and tile edges"],
                  ["Surfaces", "Dusting surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Bathrooms", "Standard sanitize", "Descaling, grout scrubbing, exhaust fans"],
                  ["Duration", "~2–3 hours", "~4–6 hours"],
                ].map(([area, standard, deep]) => (
                  <tr key={area} className="even:bg-muted/20">
                    <td className="p-4 border border-border font-medium text-foreground">{area}</td>
                    <td className="p-4 border border-border text-muted-foreground">{standard}</td>
                    <td className="p-4 border border-border text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Need ongoing care after your deep clean? Our{" "}
            <Link to="/locations/chevy-chase-md/recurring-cleaning" className="text-primary underline">
              recurring cleaning
            </Link>{" "}
            plans keep your Chevy Chase home consistently clean between deep clean visits.
          </p>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Chevy Chase Homeowners Love Our Deep Clean
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <div role="img" aria-label="5 out of 5 stars" className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-foreground italic mb-3 leading-relaxed">
                "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough."
              </p>
              <p className="text-sm font-semibold text-foreground">Brian G.</p>
              <p className="text-xs text-muted-foreground">Fairfax, VA</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Chevy Chase homes near Friendship Heights, Section 3, Section 4, and the Connecticut Avenue corridor.
                Share your experience.
              </p>
              <a
                href="https://g.page/r/capitalcleancare/review"
                className="text-sm text-primary underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google Review →
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            <span className="font-semibold text-foreground">5.0 ★</span> average rating · 47 reviews on Google
          </p>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Deep Cleaning Throughout Chevy Chase, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all of Chevy Chase's ZIP code 20815 for deep cleaning services. Whether your
              home sits in Section 3, Section 4, Chevy Chase Village, or Martin's Additions, our background-checked
              team arrives fully equipped and ready to tackle every corner a standard cleaning skips.
            </p>
            <p>
              Deep cleaning is especially popular among Chevy Chase homeowners preparing for seasonal transitions,
              selling or renting their property, or recovering from renovation work. The Chevy Chase area's older
              homes — many of them historic properties near the Chevy Chase Club and along Connecticut Avenue —
              often benefit from a thorough baseline clean before transitioning to regular maintenance.
            </p>
            <p>
              Need regular upkeep after your deep clean? Our{" "}
              <Link to="/locations/chevy-chase-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              and{" "}
              <Link to="/locations/chevy-chase-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              services keep your Chevy Chase home consistently fresh. We also serve nearby{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning in Bethesda
              </Link>{" "}
              and{" "}
              <Link to="/locations/kensington-md/deep-cleaning" className="text-primary underline">
                deep cleaning in Kensington
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Chevy Chase, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Chevy Chase"
        citySlug="chevy-chase-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={chevyChaseServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Chevy Chase" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book Your Chevy Chase Deep Clean Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Chevy Chase homes near Friendship Heights and across ZIP 20815. Start fresh — get a free,
            no-obligation deep cleaning quote in 60 seconds. Or call us directly at (240) 704-2551.
            Same-day slots available. 100% satisfaction guaranteed on every visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Deep Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Same-day slots available · 100% satisfaction guaranteed · Bonded & Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default ChevyChaseDeepCleaningPage;
