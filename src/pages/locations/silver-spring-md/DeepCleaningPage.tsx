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
import LocationSocialProof from "@/components/location/LocationSocialProof";
import LocationQuoteSection from "@/components/location/LocationQuoteSection";

const PAGE_URL = "https://capitalcleancare.com/locations/silver-spring-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Silver Spring?",
    a: "Most Silver Spring homes take 4–6 hours. Larger homes or properties with heavy buildup may take longer. We don't rush — every surface gets the attention it needs.",
  },
  {
    q: "How much does a deep cleaning cost in Silver Spring, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured, fully background-checked team handles everything securely.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, yet non-toxic for your family and pets.",
  },
  {
    q: "Do you do spring cleaning in Silver Spring?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year, not just spring.",
  },
  {
    q: "How often should I get a deep cleaning in Silver Spring?",
    a: "Once or twice a year is typical for most households, combined with regular maintenance cleanings in between. We serve all Silver Spring ZIPs: 20901, 20902, 20903, 20906, 20910.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Silver Spring and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep",
    items: [
      "Oven interior scrubbed",
      "Microwave inside cleaned",
      "Range hood degreased",
      "Inside cabinets wiped",
      "Faucets and sink descaled",
      "Backsplash scrubbed",
      "Refrigerator exterior wiped",
    ],
  },
  {
    heading: "Bathrooms — Deep",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet deep-cleaned (base, hinges, under rim)",
      "Exhaust fan cleaned",
      "Mirrors edge-to-edge",
      "Tile and tub scrubbed",
    ],
  },
  {
    heading: "All Rooms — Detail",
    items: [
      "Baseboards top and sides wiped",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans cleaned",
      "Door frames and handles sanitized",
      "Vacuum under furniture",
      "Doors wiped",
    ],
  },
  {
    heading: "Floors",
    items: [
      "All carpets vacuumed thoroughly",
      "Hard floors scrubbed and mopped",
      "Grout lines cleaned",
      "Transitions and edges addressed",
    ],
  },
];

const silverSpringServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const SilverSpringDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Silver Spring MD | Bathroom & Whole-Home",
    description:
      "Professional deep cleaning in Silver Spring, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
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
          { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
          { label: "Deep Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Silver Spring, MD",
          "Downtown Silver Spring, MD",
          "Four Corners, Silver Spring MD",
          "Woodside, Silver Spring MD",
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
        serviceName="Deep Cleaning Service in Silver Spring, MD"
        description="Top-to-bottom deep cleaning in Silver Spring, MD. Inside appliances, grout scrubbing, baseboards, ceiling fans, window tracks — everything a standard cleaning misses. EPA Safer Choice™ certified products."
        url={PAGE_URL}
        areaServed={["Silver Spring, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Deep Cleaning Silver Spring MD: Bathroom & Whole-Home Deep Cleaning"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Silver Spring home — from Four Corners to Woodside. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Silver Spring"
        state="MD"
        zipRange="20901–20910"
        heroImage="/images/team/power-scrubber-tile.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Silver Spring, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Silver Spring"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Silver Spring Deep Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Silver Spring" citySlug="silver-spring-md" serviceSlug="deep-cleaning" serviceLabel="Deep Cleaning" />

      {/* Standard vs Deep */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave"],
                  ["General mopping", "Scrubbing grout and tile edges"],
                  ["Dusting surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrubbing, exhaust fans"],
                  ["~2–3 hours", "~4–6 hours"],
                ].map(([std, deep], i) => (
                  <tr key={i} className={`border-t border-border ${i % 2 === 1 ? "bg-muted/20" : ""}`}>
                    <td className="px-4 py-3 text-muted-foreground">{std}</td>
                    <td className="px-4 py-3 text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            When Should You Book a Deep Clean in Silver Spring?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Moving into or out of a home in 20901 or 20902",
              "Spring seasonal reset after a long winter",
              "Before a special event or holiday gathering",
              "After a long period between professional cleanings",
              "Post-renovation or construction cleanup",
              "Preparing a home for sale or rental listing near Silver Spring Town Center",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-accent/5 rounded-xl border border-accent/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              After your deep cleaning, many Silver Spring homeowners set up a{" "}
              <Link to="/locations/silver-spring-md/recurring-cleaning" className="text-primary underline font-medium">
                recurring cleaning
              </Link>{" "}
              to maintain the results. For move-outs, see our{" "}
              <Link to="/locations/silver-spring-md/move-out-cleaning" className="text-primary underline font-medium">
                move out cleaning
              </Link>{" "}
              — built specifically for landlord inspections and deposit recovery.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Silver Spring, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Silver Spring"
        citySlug="silver-spring-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={silverSpringServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Silver Spring" />

      <LocationQuoteSection cityName="Silver Spring" serviceLabel="Deep Cleaning" defaultService="deep" zipLine="Serving Silver Spring and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default SilverSpringDeepCleaningPage;
