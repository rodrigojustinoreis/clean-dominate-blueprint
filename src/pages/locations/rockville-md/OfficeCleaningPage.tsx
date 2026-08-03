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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Rockville?",
    a: "Pricing is based on square footage, cleaning frequency, and scope. Contact us for a custom commercial quote tailored to your Rockville office — free, no commitment required.",
  },
  {
    q: "Do you clean after business hours in Rockville?",
    a: "Yes. Full scheduling flexibility — early morning before your team arrives, evenings after close, or weekends. We work around your business hours, not the other way around.",
  },
  {
    q: "Are your cleaners background-checked for commercial properties?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Rockville. No exceptions.",
  },
  {
    q: "Do you provide your own cleaning supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock supplies or equipment. EPA Safer Choice™ certified products only — effective cleaning with no harsh fumes.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Rockville?",
    a: "Yes. We use EPA Safer Choice™ certified products exclusively — powerful disinfection performance without bleach fumes, ammonia residue, or harsh chemicals. Ideal for medical offices and shared workspaces.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many commercial clients begin with a deep cleaning baseline, then move to recurring weekly or bi-weekly service. We'll give you a single quote covering both.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Rockville and the greater Montgomery County area. We live and work in this community, and your workplace environment matters to us.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum all carpeted areas",
      "Mop hard floor areas",
      "Wipe reception furniture and surfaces",
      "Empty and reline all trash cans",
      "Disinfect door handles and light switches",
      "Clean glass doors and partitions",
    ],
  },
  {
    heading: "Workstations & Conference Rooms",
    items: [
      "Dust all surfaces and equipment",
      "Wipe conference tables and chairs",
      "Clean whiteboards (if requested)",
      "Sanitize shared surfaces on request",
      "Vacuum under desk areas",
    ],
  },
  {
    heading: "Kitchen / Break Room",
    items: [
      "Clean countertops and sink",
      "Wipe appliance exteriors",
      "Empty and reline trash",
      "Mop floor",
      "Restock supplies (if provided)",
    ],
  },
  {
    heading: "Restrooms",
    items: [
      "Disinfect toilets, sinks, and fixtures",
      "Restock paper products (if provided)",
      "Clean mirrors streak-free",
      "Mop floor",
      "Wipe all surfaces and hardware",
    ],
  },
];

const rockvilleServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
];

const RockvilleOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Rockville, MD",
    description:
      "Professional office cleaning in Rockville, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
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
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "Office Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Rockville, MD",
          "King Farm, Rockville MD",
          "Twinbrook, Rockville MD",
          "Fallsgrove, Rockville MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our space. Thorough, eco-friendly products. Reliable every single visit.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Rockville, MD"
        description="Professional office and commercial cleaning in Rockville, MD. Daily, weekly, and custom schedules available. Background-checked, bonded and insured team. EPA Safer Choice certified products. Free quote."
        url={PAGE_URL}
        areaServed={["Rockville, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Rockville, MD", href: "/locations/rockville-md" },
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Rockville, MD"
        lead="Capital Clean Care brings the same reliability Rockville families trust to commercial spaces — from small offices in King Farm to professional suites near Rockville Pike. Background-checked, bonded team. EPA Safer Choice™ certified products. Flexible scheduling before, during, or after business hours."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Rockville, MD — reliable commercial cleaning for businesses"
        ctaPrimary="Get a Commercial Cleaning Quote"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Rockville Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Rockville" citySlug="rockville-md" serviceSlug="office-cleaning" serviceLabel="Office Cleaning" />

      {/* Space Types */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in Rockville
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Private offices and open-plan workspaces",
              "Medical and dental offices",
              "Co-working and shared office spaces",
              "Real estate and professional services offices",
              "Small retail and multi-tenant office suites",
              "Government and nonprofit offices near Rockville Pike",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Options */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Flexible Cleaning Schedules for Rockville Businesses
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                freq: "Daily",
                ideal: "High-traffic offices with 15+ employees near Montgomery College",
                timing: "Morning, evening, or split-shift",
              },
              {
                freq: "3× Per Week",
                ideal: "Mid-sized offices and co-working spaces in 20850",
                timing: "Any combination of days",
              },
              {
                freq: "Weekly",
                ideal: "Smaller offices with lighter traffic in 20851 and 20852",
                timing: "Any day, any time window",
              },
            ].map((p) => (
              <div key={p.freq} className="bg-background rounded-xl border border-border/50 p-6">
                <p className="font-heading font-bold text-lg text-primary mb-2">{p.freq}</p>
                <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{p.ideal}</p>
                <p className="text-xs text-accent font-medium">{p.timing}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            All schedules available before hours, after hours, or weekends — we work around your team.
          </p>
        </div>
      </section>

      {/* Why Rockville Businesses Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Rockville Businesses Choose Capital Clean Care
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Rockville's commercial landscape spans everything from small professional service
              offices near Rockville Pike to medical and dental practices in the 20852 corridor,
              co-working spaces near the Metro station in 20850, and government-adjacent offices
              throughout ZIP codes 20851 and 20853. Each of these environments has different
              cleaning standards, different traffic patterns, and different liability considerations.
              Capital Clean Care has served the full spectrum — and we apply the same care to a
              two-person law office in Twinbrook as we do to a 30-person medical suite near
              Montgomery College.
            </p>
            <p>
              For medical and dental offices in Rockville, we clean to a higher standard than
              typical commercial services: EPA Safer Choice™ disinfectants with documented
              efficacy, proper product-use protocols, and team members who understand the
              sensitivity of healthcare environments. For professional services firms and real
              estate offices near Rockville Town Center, we focus on presentation — streak-free
              glass partitions, spotless reception surfaces, and a client-facing space that
              reflects the professionalism of your brand before anyone sits down.
            </p>
            <p>
              We also understand that commercial cleaning is a relationship, not a one-time
              transaction. Our recurring commercial clients in Rockville work with the same
              assigned team visit after visit — people who know your space, your schedule, and
              your specific preferences. When something changes — a renovation, a new tenant
              floor, a special event — we adapt without you needing to brief a stranger on your
              entire operation.
            </p>
            <p>
              As a locally owned, Latino-operated business in Montgomery County, we don't route
              your calls through a national service center. When a Rockville commercial client
              calls (240) 704-2551, they reach someone who knows their account, their building,
              and their cleaning history. That accountability is rare in commercial cleaning
              services, and it's why our Rockville business clients consistently recommend
              Capital Clean Care to others in their professional networks along the
              Rockville Pike corridor and throughout the 20850–20853 ZIP codes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Rockville" />

      <LocationQuoteSection cityName="Rockville" serviceLabel="Office Cleaning" defaultService="office" zipLine="Serving Rockville across ZIPs 20850, 20851, 20852, and 20853." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvilleOfficeCleaningPage;
