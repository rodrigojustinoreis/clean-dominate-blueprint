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

const PAGE_URL = "https://capitalcleancare.com/locations/germantown-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Germantown?",
    a: "Priced by square footage, frequency, and scope. Contact us for a custom commercial cleaning quote tailored to your Germantown office.",
  },
  {
    q: "Do you clean after business hours in Germantown?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your schedule without disrupting operations.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Germantown.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — professional equipment and EPA Safer Choice™ certified products. No need for you to stock supplies.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Germantown?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or residue. Safe for medical and dental offices.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many clients begin with a deep cleaning baseline, then move to a recurring commercial schedule.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Germantown and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum carpets and mop floors",
      "Wipe reception furniture",
      "Empty and reline trash cans",
      "Disinfect door handles and light switches",
      "Clean glass doors and entry surfaces",
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
      "Clean countertops and sink",
      "Wipe appliance exteriors",
      "Empty trash",
      "Mop floor",
    ],
  },
  {
    heading: "Restrooms",
    items: [
      "Disinfect toilets, sinks, and fixtures",
      "Restock paper products (if provided)",
      "Clean mirrors",
      "Mop floor",
    ],
  },
];

const germantownServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

const GermantownOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Germantown, MD",
    description:
      "Professional office cleaning in Germantown, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
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
          { label: "Germantown, MD", href: "/locations/germantown-md" },
          { label: "Office Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Germantown, MD",
          "Milestone, Germantown MD",
          "Churchill Village, Germantown MD",
          "Germantown Town Center, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Kevin R.",
            text: "Consistent, professional, and always on time. Our office has never looked better. Highly recommend for any Germantown business.",
            location: "Germantown, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Germantown, MD"
        description="Reliable commercial cleaning in Germantown, MD. Background-checked, bonded team. Flexible scheduling before, during, or after business hours. EPA Safer Choice™ certified products."
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
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Germantown, MD"
        lead="Capital Clean Care brings the same reliability Germantown families trust to commercial spaces — from small offices in Milestone to professional suites near Milestone Shopping Center. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Germantown"
        state="MD"
        zipRange="20874–20876"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Germantown, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Germantown"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Germantown Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Germantown" citySlug="germantown-md" serviceSlug="office-cleaning" serviceLabel="Office Cleaning" />

      {/* Spaces We Clean */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in Germantown
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Private offices and open-plan workspaces",
              "Medical and dental offices near Kingsview Village",
              "Co-working and shared office spaces",
              "Real estate and professional services offices",
              "Small retail and multi-tenant office suites",
              "Professional suites near Germantown Town Center",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          {/* Schedules */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Flexible Cleaning Schedules for Germantown Businesses
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
            <p>
              <strong className="text-foreground">Daily</strong> — High-traffic offices with 15+ employees near
              Milestone Shopping Center or along Clopper Road.
            </p>
            <p>
              <strong className="text-foreground">3× per week</strong> — Mid-sized offices and co-working spaces
              in ZIP 20874. Ideal for professional services firms.
            </p>
            <p>
              <strong className="text-foreground">Weekly</strong> — Smaller offices and medical suites with
              lighter traffic in 20876.
            </p>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            All schedules available before hours, after hours, or weekends — with a background-checked,
            bonded team you can trust in your space at any time. Many Germantown businesses start with a
            one-time{" "}
            <Link to="/locations/germantown-md/deep-cleaning" className="text-primary underline">
              deep cleaning
            </Link>{" "}
            to establish a clean baseline before moving to a recurring commercial contract.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Germantown, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Germantown"
        citySlug="germantown-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={germantownServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Germantown" />

      <LocationQuoteSection cityName="Germantown" serviceLabel="Office Cleaning" defaultService="office" zipLine="Serving Germantown and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default GermantownOfficeCleaningPage;
