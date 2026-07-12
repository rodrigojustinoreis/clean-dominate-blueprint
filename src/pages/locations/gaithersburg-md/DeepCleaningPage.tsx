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

const PAGE_URL = "https://capitalcleancare.com/locations/gaithersburg-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Gaithersburg?",
    a: "Most Gaithersburg homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer. We'll confirm the estimate when you book.",
  },
  {
    q: "How much does a deep cleaning cost in Gaithersburg, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked before every assignment.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets.",
  },
  {
    q: "Do you do spring cleaning in Gaithersburg?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year in ZIPs 20877, 20878, or 20879.",
  },
  {
    q: "How often should I get a deep cleaning in Gaithersburg?",
    a: "Once or twice a year is typical, combined with regular maintenance cleanings in between. Many clients pair it with a recurring cleaning plan.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Gaithersburg and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep Focus",
    items: [
      "Oven interior scrubbed",
      "Microwave deep-cleaned inside",
      "Range hood degreased",
      "Inside all cabinets and drawers",
      "Faucets descaled",
      "Backsplash scrubbed",
      "Sink deep-cleaned and polished",
    ],
  },
  {
    heading: "Bathrooms — Grout to Ceiling",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet deep-cleaned (base, hinges, under rim)",
      "Exhaust fan cleaned",
      "Edge-to-edge mirrors wiped",
      "Fixtures polished",
      "Floor mopped edge-to-edge",
    ],
  },
  {
    heading: "All Rooms — What Regular Cleanings Miss",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlet covers wiped",
      "Ceiling fans dusted",
      "Door frames and handles wiped",
      "Vacuum under furniture",
      "Wipe all interior doors",
    ],
  },
  {
    heading: "Add-Ons Available",
    items: [
      "Inside refrigerator",
      "Inside all closets",
      "Laundry room deep-clean",
      "Garage or utility area",
    ],
  },
];

const gaithersburgServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Germantown", slug: "germantown-md", state: "MD" },
];

const GaithersburgDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in Gaithersburg, MD",
    description:
      "Professional deep cleaning in Gaithersburg, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
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
          { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
          { label: "Deep Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Gaithersburg, MD",
          "Kentlands, Gaithersburg MD",
          "Lakelands, Gaithersburg MD",
          "Crown Farm, Gaithersburg MD",
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
        serviceName="Deep Cleaning Services in Gaithersburg, MD"
        description="Professional deep cleaning in Gaithersburg, MD. Top-to-bottom coverage including inside appliances, grout scrubbing, ceiling fans, baseboards, and window tracks. EPA Safer Choice certified products. Serving Kentlands, Lakelands, Crown Farm, and all Gaithersburg ZIP codes."
        url={PAGE_URL}
        areaServed={["Gaithersburg, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Deep Cleaning Services in Gaithersburg, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Gaithersburg home — from Lakelands to Crown Farm. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Gaithersburg"
        state="MD"
        zipRange="20877–20879"
        heroImage="/images/team/power-scrubber-tile.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Gaithersburg, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Gaithersburg"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Gaithersburg Deep Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Gaithersburg" citySlug="gaithersburg-md" serviceSlug="deep-cleaning" serviceLabel="Deep Cleaning" />

      {/* Standard vs Deep */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave"],
                  ["General mopping", "Scrubbing grout and tile edges"],
                  ["Dusting surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrubbing, exhaust fans"],
                  ["~2–3 hours", "~4–6 hours"],
                ].map(([standard, deep]) => (
                  <tr key={standard} className="bg-card">
                    <td className="px-4 py-3 text-muted-foreground">{standard}</td>
                    <td className="px-4 py-3 text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            When Should You Book a Deep Clean in Gaithersburg?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Moving into or out of a home in 20877 or 20878",
              "Spring seasonal reset for your Kentlands or Lakelands home",
              "Before a special event or holiday gathering",
              "After a long period between professional cleanings",
              "Post-renovation or construction cleanup",
              "Preparing a home for sale or rental listing in Gaithersburg",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Gaithersburg, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Gaithersburg"
        citySlug="gaithersburg-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={gaithersburgServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Gaithersburg" />

      <LocationQuoteSection cityName="Gaithersburg" serviceLabel="Deep Cleaning" defaultService="deep" zipLine="Serving Gaithersburg and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default GaithersburgDeepCleaningPage;
