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

const PAGE_URL = "https://capitalcleancare.com/locations/silver-spring-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Silver Spring?",
    a: "Weekly is ideal for larger homes, families with kids or pets, or anyone who entertains frequently. Bi-weekly is our most popular option for Silver Spring households — a clean, well-maintained home without the maximum cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Silver Spring home. No strangers showing up each week — just the familiar faces who know your preferences.",
  },
  {
    q: "How much does recurring cleaning cost in Silver Spring?",
    a: "Recurring clients get discounted rates compared to one-time cleanings. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts. We understand that schedules change.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Silver Spring ZIPs: 20901, 20902, 20903, 20906, and 20910.",
  },
  {
    q: "Can I start with a one-time clean before committing to recurring service?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to recurring. There's no pressure to commit upfront.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Silver Spring and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen (Every Visit)",
    items: [
      "Countertops wiped and sanitized",
      "Sink scrubbed",
      "Appliance exteriors cleaned",
      "Microwave interior",
      "Cabinet fronts wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms (Every Visit)",
    items: [
      "Toilet disinfected inside and out",
      "Shower and tub scrubbed",
      "Sink and faucets cleaned",
      "Mirrors polished",
      "Floor mopped",
    ],
  },
  {
    heading: "Bedrooms & Living Areas",
    items: [
      "All surfaces dusted",
      "Floors vacuumed and mopped",
      "Beds made (linens if provided)",
      "Window sills wiped",
      "Baseboards dusted",
      "Light switches and handles sanitized",
    ],
  },
  {
    heading: "Add-On Rotation (Periodic)",
    items: [
      "Inside refrigerator",
      "Inside oven",
      "Inside cabinets",
      "Laundry (on request)",
    ],
  },
];

const silverSpringServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
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

const SilverSpringRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Silver Spring, MD",
    description:
      "Weekly and bi-weekly house cleaning in Silver Spring, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-uniform.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
          { label: "Recurring Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Silver Spring, MD",
          "Downtown Silver Spring, MD",
          "Four Corners, Silver Spring MD",
          "Fenton Village, Silver Spring MD",
          "Woodside, Silver Spring MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Silver Spring, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Silver Spring, MD"
        description="Weekly and bi-weekly recurring house cleaning in Silver Spring, MD. Same background-checked team every visit. EPA Safer Choice™ products. No long-term contracts. 100% satisfaction guaranteed."
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
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Recurring House Cleaning in Silver Spring, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Silver Spring home — from Downtown Silver Spring to Four Corners to Woodside — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed: we re-clean if you're not happy."
        cityName="Silver Spring"
        state="MD"
        zipRange="20901–20910"
        heroImage="/images/team/team-mopping-uniform.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Silver Spring, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Silver Spring"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Silver Spring Recurring Clean"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Silver Spring" citySlug="silver-spring-md" serviceSlug="recurring-cleaning" serviceLabel="Recurring Cleaning" />

      {/* Plans */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead className="bg-primary/5">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-foreground"></th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Weekly</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Bi-Weekly</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Monthly</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">Best for</td>
                  <td className="px-4 py-3 text-muted-foreground">Busy families, large homes, pets</td>
                  <td className="px-4 py-3 text-muted-foreground">Most Silver Spring households</td>
                  <td className="px-4 py-3 text-muted-foreground">Lighter maintenance</td>
                </tr>
                <tr className="border-t border-border bg-muted/20">
                  <td className="px-4 py-3 font-medium text-foreground">Discount</td>
                  <td className="px-4 py-3 text-muted-foreground">Largest recurring discount</td>
                  <td className="px-4 py-3 text-muted-foreground">Standard recurring discount</td>
                  <td className="px-4 py-3 text-muted-foreground">Minimal discount</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="px-4 py-3 font-medium text-foreground">Result</td>
                  <td className="px-4 py-3 text-muted-foreground">Always guest-ready</td>
                  <td className="px-4 py-3 text-muted-foreground">Clean between uses</td>
                  <td className="px-4 py-3 text-muted-foreground">Seasonal freshness</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Why Recurring */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Cumulative cleanliness — regular maintenance prevents buildup, your home gets cleaner over time",
              "Same team every time — background-checked crew learns your preferences, no retraining needed",
              "Affordable recurring rates — recurring clients always get better pricing than one-time bookings",
              "Priority scheduling — first access to preferred time slots across Silver Spring ZIP codes",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Getting Started With Recurring Cleaning in Silver Spring
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              New recurring clients typically start with a deeper initial{" "}
              <Link to="/locations/silver-spring-md/deep-cleaning" className="text-primary underline font-medium">
                deep cleaning
              </Link>{" "}
              to establish a clean baseline. From there, your consistent team maintains that
              standard visit after visit. Whether you're in ZIP 20901 near Silver Spring Town
              Center or in the 20902 area closer to the Wheaton Plaza boundary, the same
              quality and the same team applies.
            </p>
            <p>
              Silver Spring's busy households — dual-income families in Fenton Village, renters
              in the Long Branch corridor, homeowners with kids near Sligo Creek — all benefit
              from having a predictable, reliable routine rather than scrambling to book last-minute
              cleans. When you set up recurring service with Capital Clean Care, you reclaim your
              weekends. Your home is consistently maintained, your family knows what to expect,
              and you never have to think about it.
            </p>
            <p>
              Not ready to commit yet? Try a single{" "}
              <Link to="/locations/silver-spring-md/house-cleaning" className="text-primary underline font-medium">
                house cleaning
              </Link>{" "}
              first. Many clients convert after their first visit. There's no pressure and no
              long-term contract — just clean results. Call (240) 704-2551 or request a quote
              online to set up your Silver Spring recurring clean today.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Silver Spring, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Silver Spring"
        citySlug="silver-spring-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={silverSpringServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Silver Spring" />

      <LocationQuoteSection cityName="Silver Spring" serviceLabel="Recurring Cleaning" defaultService="recurring" zipLine="Serving Silver Spring and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default SilverSpringRecurringCleaningPage;
