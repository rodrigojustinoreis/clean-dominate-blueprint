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

const PAGE_URL = "https://capitalcleancare.com/locations/wheaton-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Wheaton?",
    a: "Most Wheaton homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer. We'll give you an estimate when you book.",
  },
  {
    q: "How much does a deep cleaning cost in Wheaton, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets.",
  },
  {
    q: "Do you do spring cleaning in Wheaton?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year.",
  },
  {
    q: "How often should I get a deep cleaning in Wheaton?",
    a: "Once or twice a year is typical, combined with regular maintenance cleanings in between. Many clients pair a deep clean with our recurring service.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Wheaton and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Full Detail",
    items: [
      "Oven interior scrubbed",
      "Microwave inside cleaned",
      "Range hood degreased",
      "Inside cabinets and drawers wiped",
      "Faucets descaled",
      "Backsplash scrubbed",
      "Sink deep-cleaned",
    ],
  },
  {
    heading: "Bathrooms — Deep Scrub",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet deep-cleaned (base, hinges, under rim)",
      "Exhaust fan cleaned",
      "Mirrors edge-to-edge polished",
      "Tile and tub scrubbed",
    ],
  },
  {
    heading: "All Rooms — Detail Pass",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans cleaned",
      "Door frames and handles wiped",
      "Vacuum under furniture",
      "All doors wiped down",
    ],
  },
];

const wheatonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const WheatonDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in Wheaton, MD",
    description:
      "Professional deep cleaning in Wheaton, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/power-scrubber-tile.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Wheaton, MD", href: "/locations/wheaton-md" },
          { label: "Deep Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Wheaton, MD",
          "Glenmont, Wheaton MD",
          "Kemp Mill, Wheaton MD",
          "Forest Glen, Wheaton MD",
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
        serviceName="Deep Cleaning Service in Wheaton, MD"
        description="Top-to-bottom deep cleaning in Wheaton, MD. Inside appliances, grout lines, baseboards, ceiling fans — all areas standard cleanings miss. EPA Safer Choice™ certified products. Serving Kemp Mill, Glenmont, Forest Glen, and all Wheaton ZIP codes."
        url={PAGE_URL}
        areaServed={["Wheaton, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Wheaton, MD", href: "/locations/wheaton-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Deep Cleaning Services in Wheaton, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Wheaton home — from Kemp Mill to Forest Glen. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Wheaton"
        state="MD"
        zipRange="20902"
        heroImage="/images/team/power-scrubber-tile.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Wheaton, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Wheaton"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Wheaton Deep Cleaning"
        categories={checklistCategories}
      />

      {/* Standard vs Deep */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 border border-border font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left p-3 border border-border font-semibold text-primary">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave scrubbed"],
                  ["General mopping", "Scrubbing grout and tile edges"],
                  ["Dusting surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrubbing, exhaust fans"],
                  ["Approx. 2–3 hours", "Approx. 4–6 hours"],
                ].map(([std, deep], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                    <td className="p-3 border border-border text-muted-foreground">{std}</td>
                    <td className="p-3 border border-border text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* When to Book */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            When Should You Book a Deep Clean in Wheaton?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Moving into or out of a home in 20902 or 20906",
              "Spring seasonal reset — especially near Wheaton Regional Park",
              "Before a special event or holiday gathering",
              "After a long period between professional cleanings",
              "Post-renovation or construction cleanup",
              "Preparing a Kemp Mill or Glenmont home for sale or rental",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-8">
            <p>
              A deep cleaning in Wheaton means going beyond what standard maintenance covers. Inside
              the oven, beneath appliances, along grout lines in the shower, inside cabinet interiors,
              along the full length of every baseboard — these are the areas that accumulate grime
              between routine visits and require focused attention.
            </p>
            <p>
              Many Wheaton homeowners near Westfield Wheaton Mall schedule a deep clean when
              transitioning from a{" "}
              <Link to="/locations/wheaton-md/move-out-cleaning" className="text-primary underline">
                move out cleaning
              </Link>{" "}
              to{" "}
              <Link to="/locations/wheaton-md/recurring-cleaning" className="text-primary underline">
                recurring maintenance service
              </Link>
              . Starting with a deep baseline ensures every subsequent visit maintains a high standard
              without needing to catch up on buildup. Call (240) 704-2551 or get a free quote online.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Wheaton Homeowners Love Our Deep Clean
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
                Serving Wheaton deep cleaning clients across Glenmont, Kemp Mill, and ZIP codes 20902 and 20906.
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

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Wheaton, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Wheaton"
        citySlug="wheaton-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={wheatonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Wheaton" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book Your Wheaton Deep Clean Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Wheaton homes near Westfield Wheaton Mall and across ZIPs 20902 and 20906.
            Start fresh — free quote in 60 seconds, or call (240) 704-2551.
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

      <StickyMobileCTA />
    </Layout>
  );
};

export default WheatonDeepCleaningPage;
