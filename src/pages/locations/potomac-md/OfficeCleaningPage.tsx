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

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/potomac-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Potomac?",
    a: "Priced by square footage, frequency, and scope. Contact us for a custom quote tailored to your Potomac office — use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you clean after business hours in Potomac?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your schedule so your operations are never disrupted.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Potomac or throughout Montgomery County.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock supplies or equipment. Our team arrives prepared with all EPA Safer Choice™ certified products.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Potomac?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or chemical residue in your Potomac workplace.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many clients begin with a deep cleaning baseline, then move to recurring service. It's the best way to start fresh and maintain consistently.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Potomac and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum carpets and mop floors",
      "Wipe reception furniture",
      "Empty and reline trash",
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
      "Clean countertops and sink",
      "Wipe appliance exteriors",
      "Empty and reline trash",
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

const potomacServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const PotomacOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Potomac, MD",
    description:
      "Professional office cleaning in Potomac, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-cleaning-glass-door.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Potomac, MD", href: "/locations/potomac-md" },
          { label: "Office Cleaning", href: "/locations/potomac-md/office-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Potomac, MD",
          "Glen Echo, MD",
          "River Falls, Potomac MD",
          "Avenel, Potomac MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our office. Reliable, consistent, and eco-friendly — exactly what we needed.",
            location: "Potomac, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office Cleaning in Potomac, MD"
        description="Professional commercial and office cleaning in Potomac, MD. Flexible daily, weekly, or custom schedules. Background-checked, bonded & insured. EPA Safer Choice certified products."
        url={PAGE_URL}
        areaServed={["Potomac, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Potomac, MD", href: "/locations/potomac-md" },
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Potomac, MD"
        lead="Capital Clean Care brings the same reliability Potomac families trust to commercial spaces — from small offices in Glen Echo to professional suites near the C&O Canal National Historical Park area. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Potomac"
        state="MD"
        zipRange="20854"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Potomac, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Potomac"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Potomac Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Potomac" citySlug="potomac-md" serviceSlug="office-cleaning" serviceLabel="Office Cleaning" />

      {/* ── Commercial Spaces ─────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in Potomac
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Private offices and open-plan workspaces",
              "Medical and dental offices",
              "Co-working and shared office spaces",
              "Real estate and professional services offices",
              "Small retail and multi-tenant office suites",
              "Professional practices near Potomac Village",
            ].map((space) => (
              <div key={space} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed">{space}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scheduling ────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Flexible Cleaning Schedules for Potomac Businesses
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Frequency</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Daily", "High-traffic offices with 15+ employees near Potomac Village (ZIP 20854)"],
                  ["3× per week", "Mid-sized offices and co-working spaces in the River Falls area"],
                  ["Weekly", "Smaller professional offices with lighter traffic in ZIP 20859"],
                ].map(([freq, best], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 font-semibold text-foreground">{freq}</td>
                    <td className="px-4 py-3 text-muted-foreground">{best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
            All schedules available before business hours, after close, or on weekends.
            Our background-checked team works discreetly around your Potomac office schedule.
          </p>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Office Cleaning Throughout Potomac, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves commercial clients throughout Potomac's ZIP codes 20854
              and 20859 — from professional offices in Glen Echo to medical practices and
              financial services firms near Potomac Village. Our background-checked team
              understands the discretion and consistency that Potomac businesses require.
            </p>
            <p>
              We work around your hours so your business is never disrupted. Whether you need
              an early-morning clean before your team arrives, an after-hours service in the River
              Falls corridor, or weekend cleaning for your Avenel office, we accommodate your
              schedule without fail. The same bonded team arrives every visit — no rotating
              strangers with access to your space.
            </p>
            <p>
              New commercial clients often start with a{" "}
              <Link to="/locations/potomac-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              to establish a clean baseline, then move to a regular schedule. If you also need
              cleaning services for your home in Potomac, our{" "}
              <Link to="/locations/potomac-md/house-cleaning" className="text-primary underline">
                residential house cleaning
              </Link>{" "}
              service can be bundled for added convenience. Call (240) 704-2551 for a custom quote.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Potomac, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Potomac"
        citySlug="potomac-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={potomacServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Potomac" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Potomac" serviceLabel="Office Cleaning" defaultService="office" zipLine="Serving Potomac and nearby communities." />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default PotomacOfficeCleaningPage;
