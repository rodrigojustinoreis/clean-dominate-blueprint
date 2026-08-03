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

const PAGE_URL = "https://capitalcleancare.com/locations/wheaton-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Wheaton?",
    a: "Priced by square footage, frequency, and scope. Contact us for a custom commercial cleaning quote tailored to your Wheaton office.",
  },
  {
    q: "Do you clean after business hours in Wheaton?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your schedule.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Wheaton.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock supplies or equipment.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Wheaton?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or residue.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many clients begin with a deep cleaning baseline, then move to recurring commercial service.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Wheaton and the greater Montgomery County area. We live and work in this community.",
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
      "Countertops and sink cleaned",
      "Appliance exteriors wiped",
      "Trash emptied and relined",
      "Floor mopped",
    ],
  },
  {
    heading: "Restrooms",
    items: [
      "Toilets, sinks, and fixtures disinfected",
      "Paper products restocked (if provided)",
      "Mirrors cleaned",
      "Floor mopped",
    ],
  },
];

const wheatonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const WheatonOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Wheaton, MD",
    description:
      "Professional office cleaning in Wheaton, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
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
          { label: "Wheaton, MD", href: "/locations/wheaton-md" },
          { label: "Office Cleaning", href: PAGE_URL },
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
            name: "Wheaton Business Owner",
            text: "Consistent, professional, and always on time. Our office has never been cleaner since switching to Capital Clean Care.",
            location: "Wheaton, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Wheaton, MD"
        description="Professional office and commercial cleaning in Wheaton, MD. Daily, weekly, or custom schedules. Background-checked team, EPA-certified products. Serving businesses in Glenmont, Kemp Mill, Forest Glen, ZIP codes 20902 and 20906."
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
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Wheaton, MD"
        lead="Capital Clean Care brings the same reliability Wheaton families trust to commercial spaces — from small offices in Glenmont to professional suites near Westfield Wheaton Mall. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Wheaton"
        state="MD"
        zipRange="20902"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Wheaton, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Wheaton"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Wheaton Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Wheaton" citySlug="wheaton-md" serviceSlug="office-cleaning" serviceLabel="Office Cleaning" />

      {/* Commercial Spaces */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in Wheaton
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Private offices and open-plan workspaces along the Georgia Avenue corridor",
              "Medical and dental offices in Wheaton's commercial districts",
              "Co-working and shared office spaces near the Glenmont Metro",
              "Real estate and professional services offices in Kemp Mill",
              "Small retail spaces and multi-tenant office suites in 20902",
              "Professional offices near Westfield Wheaton Mall",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Flexible Schedules */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Flexible Cleaning Schedules for Wheaton Businesses
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                freq: "Daily",
                detail: "High-traffic offices with 15+ employees near Brookside Gardens",
              },
              {
                freq: "3× Per Week",
                detail: "Mid-sized offices and co-working spaces in 20902",
              },
              {
                freq: "Weekly",
                detail: "Smaller offices with lighter traffic in 20906 and Forest Glen",
              },
            ].map((item) => (
              <div key={item.freq} className="p-5 bg-card rounded-xl border border-border/50">
                <h3 className="font-bold text-foreground mb-2">{item.freq}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>

          {/* Narrative */}
          <div className="space-y-4 text-muted-foreground leading-relaxed mt-8">
            <p>
              Every team member is background-checked before entering any commercial property — a
              non-negotiable standard for us at Capital Clean Care. For businesses handling sensitive
              documents or operating medical facilities in Wheaton, knowing that every cleaner has
              passed a full background screening matters. We're bonded and insured to protect your
              business as well.
            </p>
            <p>
              Many Wheaton businesses begin with a comprehensive{" "}
              <Link to="/locations/wheaton-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              to establish a spotless baseline, then convert to a scheduled maintenance plan. The
              same background-checked team assigned to your office arrives consistently on your
              chosen schedule — whether that's before your team arrives in the morning or after
              close on weekday evenings. Call (240) 704-2551 or request a free commercial quote
              online to discuss your Wheaton office's requirements.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Wheaton, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Wheaton"
        citySlug="wheaton-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={wheatonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Wheaton" />

      <LocationQuoteSection cityName="Wheaton" serviceLabel="Office Cleaning" defaultService="office" zipLine="Serving Wheaton and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default WheatonOfficeCleaningPage;
