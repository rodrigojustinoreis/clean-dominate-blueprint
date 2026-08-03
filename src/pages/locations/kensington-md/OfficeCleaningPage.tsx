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

const PAGE_URL = "https://capitalcleancare.com/locations/kensington-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Kensington?",
    a: "Priced by square footage, frequency, and scope. Contact us for a custom commercial quote tailored to your Kensington office — free, no obligation.",
  },
  {
    q: "Do you clean after business hours in Kensington?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work entirely around your schedule and your team's hours.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Kensington. Access and discretion are taken seriously.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock cleaning supplies or equipment at your Kensington office.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Kensington?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes, no residue that lingers in your workspace.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many clients begin with a deep cleaning baseline, then transition to a regular recurring commercial schedule.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Kensington and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum carpets and mop hard floors",
      "Wipe reception furniture and surfaces",
      "Empty and reline trash bins",
      "Disinfect door handles and light switches",
      "Clean glass doors and partitions",
    ],
  },
  {
    heading: "Workstations & Conference Rooms",
    items: [
      "Dust all surfaces",
      "Sanitize shared equipment (on request)",
      "Wipe conference tables and chairs",
      "Clean whiteboards (if requested)",
    ],
  },
  {
    heading: "Kitchen / Break Room",
    items: [
      "Wipe countertops and sink",
      "Clean appliance exteriors",
      "Empty and reline trash",
      "Sweep and mop floor",
    ],
  },
  {
    heading: "Restrooms",
    items: [
      "Disinfect toilets, sinks, and fixtures",
      "Restock paper products (if provided)",
      "Clean mirrors",
      "Sweep and mop floor",
    ],
  },
];

const kensingtonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const KensingtonOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Kensington, MD",
    description:
      "Professional office cleaning in Kensington, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-cleaning-glass-door.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Kensington, MD", href: "/locations/kensington-md" },
          { label: "Office Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Kensington, MD",
          "Kensington Historic District, MD",
          "Rock Creek Hills, Kensington MD",
          "Rock Creek Knolls, Kensington MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "David K.",
            text: "Reliable, professional, and thorough every visit. Our Kensington office has never looked better.",
            location: "Kensington, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Kensington, MD"
        description="Reliable office and commercial cleaning in Kensington, MD. Flexible daily, weekly, or custom schedules. Background-checked, bonded, insured team. EPA Safer Choice certified products."
        url={PAGE_URL}
        areaServed={["Kensington, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Kensington, MD", href: "/locations/kensington-md" },
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Kensington, MD"
        lead="Capital Clean Care brings the same reliability Kensington families trust to commercial spaces — from small offices in Kensington Historic District to professional suites near Kensington Antique Row. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Kensington"
        state="MD"
        zipRange="20895"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Kensington, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Kensington"
      />

      {/* Space Types */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in Kensington
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Private offices and open-plan workspaces",
              "Medical and dental offices",
              "Co-working and shared office spaces",
              "Real estate and professional services offices",
              "Small retail and multi-tenant office suites",
              "Property management offices near Connecticut Avenue",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Kensington Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Kensington" citySlug="kensington-md" serviceSlug="office-cleaning" serviceLabel="Office Cleaning" />

      {/* Schedules */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Flexible Cleaning Schedules for Kensington Businesses
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: "Daily",
                desc: "High-traffic offices with 15+ employees near Rock Creek Hills. Keeps your space consistently clean with no buildup between visits.",
              },
              {
                label: "3× Per Week",
                desc: "Mid-sized offices and co-working spaces in 20895. Balances consistent cleanliness with cost efficiency.",
              },
              {
                label: "Weekly",
                desc: "Smaller offices with lighter traffic in Kensington. A thorough clean each week to maintain professional standards.",
              },
            ].map((plan) => (
              <div key={plan.label} className="p-5 bg-card rounded-xl border border-border/50">
                <p className="font-bold text-foreground mb-2">{plan.label}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            All schedules available before hours, after hours, or on weekends. We work around your team.
          </p>
        </div>
      </section>

      {/* Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Cleaning for Kensington's Business Community
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kensington's commercial corridor along Connecticut Avenue hosts a mix of professional
              service offices, medical practices, real estate firms, and small businesses that rely
              on a consistently clean environment for client-facing operations. Rock Creek Hills
              and the Historic District area attract professionals who expect the same attention to
              detail in their workplace as in their homes.
            </p>
            <p>
              Capital Clean Care's commercial clients value three things above all: that our
              background-checked team arrives when scheduled, that the same familiar crew shows
              up each time, and that we work around their business hours without disruption.
              We've built our commercial service around exactly these priorities.
            </p>
            <p>
              New to commercial cleaning? Many businesses start with a one-time{" "}
              <Link to="/locations/kensington-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              to establish a clean baseline before moving to a regular schedule. Others maintain
              their office alongside{" "}
              <Link to="/locations/kensington-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              at their Kensington home. Call (240) 704-2551 to discuss a custom schedule for
              your office.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Kensington, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Kensington"
        citySlug="kensington-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={kensingtonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Kensington" />

      <LocationQuoteSection cityName="Kensington" serviceLabel="Office Cleaning" defaultService="office" zipLine="Serving Kensington and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default KensingtonOfficeCleaningPage;
