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

const PAGE_URL = "https://capitalcleancare.com/locations/germantown-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Germantown?",
    a: "Weekly is ideal for larger homes, families with kids or pets, or homes with high foot traffic. Bi-weekly is our most popular option — a clean, well-maintained Germantown home without maximum cost. Both options serve ZIPs 20874, 20875, and 20876.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Germantown home. No strangers each week — the same people who learn your preferences come back every time.",
  },
  {
    q: "How much does recurring cleaning cost in Germantown?",
    a: "Recurring clients receive discounted rates compared to one-time cleanings. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts. We serve Germantown on your terms.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Germantown ZIPs: 20874, 20875, and 20876.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a one-time house cleaning or deep cleaning first, then convert to a recurring plan once they experience the results.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Germantown and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops wiped and sanitized",
      "Sink scrubbed and polished",
      "Appliance exteriors cleaned",
      "Microwave interior cleaned",
      "Cabinet fronts wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet disinfected",
      "Shower and tub scrubbed",
      "Sink and faucets cleaned",
      "Mirrors streak-free",
      "Floors mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "Surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens if provided)",
      "Baseboards wiped",
    ],
  },
  {
    heading: "Living Areas & Add-On Rotations",
    items: [
      "Dusting and vacuuming",
      "Mopping all hard floors",
      "Window sills cleaned",
      "Light switches and door handles sanitized",
      "Add-on rotation: inside fridge",
      "Add-on rotation: inside oven",
      "Add-on rotation: inside cabinets",
    ],
  },
];

const germantownServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

const GermantownRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Germantown, MD",
    description:
      "Weekly and bi-weekly house cleaning in Germantown, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
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
          { label: "Germantown, MD", href: "/locations/germantown-md" },
          { label: "Recurring Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Germantown, MD",
          "Milestone, Germantown MD",
          "Churchill Village, Germantown MD",
          "Kingsview Village, Germantown MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Germantown, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Germantown, MD"
        description="Weekly, bi-weekly, and monthly recurring house cleaning in Germantown, MD. Same trusted team every visit, EPA Safer Choice™ certified products, 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Germantown, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Germantown, MD", href: "/locations/germantown-md" },
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Recurring House Cleaning in Germantown, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Germantown home — from Milestone to Churchill Village to Kingsview — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."
        cityName="Germantown"
        state="MD"
        zipRange="20874–20876"
        heroImage="/images/team/team-mopping-uniform.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Germantown, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Germantown"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Germantown Recurring Clean"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Germantown" citySlug="germantown-md" serviceSlug="recurring-cleaning" serviceLabel="Recurring Cleaning" />

      {/* Schedule Options */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50"></th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Weekly</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Bi-Weekly</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Monthly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-medium text-foreground border border-border/50">Best for</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Busy families, large homes, pets</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Most Germantown households</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Lighter maintenance</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 font-medium text-foreground border border-border/50">Discount</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Largest recurring discount</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Standard recurring discount</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Minimal discount</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground border border-border/50">Result</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Always guest-ready</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Clean between uses</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Seasonal freshness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Cumulative cleanliness",
                body: "Regular maintenance prevents buildup. Your Germantown home actually gets cleaner over time — not just cleaned and then neglected.",
              },
              {
                title: "Same team every time",
                body: "The same background-checked, bonded crew comes every visit. They learn your preferences, your layout, your standards. No retraining ever.",
              },
              {
                title: "Affordable recurring rates",
                body: "Recurring clients get better rates than one-time bookings. Get your exact quote in 60 seconds — serving all Germantown ZIPs.",
              },
              {
                title: "Priority scheduling",
                body: "Recurring clients get first access to preferred time slots and faster rescheduling when plans change.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{benefit.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Getting Started */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Getting Started With Recurring Cleaning in Germantown
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              New recurring clients start with a deeper initial clean to establish a clean baseline —
              think of it as a{" "}
              <Link to="/locations/germantown-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              to reset the home before your regular maintenance begins. This makes each subsequent
              visit faster, more thorough, and more affordable.
            </p>
            <p>
              Once the baseline is set, the same dedicated, bonded team is assigned to your home.
              Whether you're in ZIP 20874 near Milestone Shopping Center or the 20876 area near
              Seneca Valley, your team will know your home, your priorities, and your schedule.
            </p>
            <p>
              Prefer to try before committing? Start with a one-time{" "}
              <Link to="/locations/germantown-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              and convert when you're ready. No pressure, no contracts. Call (240) 704-2551 to get
              started or get a free quote online.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Germantown, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Germantown"
        citySlug="germantown-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={germantownServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Germantown" />

      <LocationQuoteSection cityName="Germantown" serviceLabel="Recurring Cleaning" defaultService="recurring" zipLine="Serving Germantown and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default GermantownRecurringCleaningPage;
