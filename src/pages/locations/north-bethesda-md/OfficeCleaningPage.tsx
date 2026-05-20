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

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/north-bethesda-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in North Bethesda?",
    a: "Priced by square footage, frequency, and scope. Contact us for a custom commercial quote tailored to your North Bethesda office. Use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you clean after business hours in North Bethesda?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your North Bethesda office's schedule.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in North Bethesda or Montgomery County.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — EPA Safer Choice™ certified products, equipment, and all materials. No need for you to stock supplies.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in North Bethesda?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or residue that affects your North Bethesda team's workday.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many North Bethesda clients begin with a deep cleaning baseline, then move to daily, weekly, or bi-weekly recurring office service.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving North Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum carpets",
      "Mop hard floors",
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

const northBethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const NorthBethesdaOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in North Bethesda, MD — Reliable Commercial Cleaning Service",
    description:
      "Professional office cleaning in North Bethesda, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
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
          { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
          { label: "Office Cleaning", href: "/locations/north-bethesda-md/office-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "North Bethesda, MD",
          "White Flint, North Bethesda MD",
          "Luxmanor, North Bethesda MD",
          "Garrett Park, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office Cleaning in North Bethesda, MD"
        description="Professional commercial office cleaning in North Bethesda, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured team. EPA Safer Choice certified products."
        url={PAGE_URL}
        areaServed={["North Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Office & Commercial Cleaning in North Bethesda, MD"
        lead="Capital Clean Care brings the same reliability North Bethesda families trust to commercial spaces — from small offices in White Flint to professional suites near Pike & Rose. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="North Bethesda"
        state="MD"
        zipRange="20852"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in North Bethesda, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in North Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our North Bethesda Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Commercial Spaces ─────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in North Bethesda
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "Private offices and open-plan workspaces",
              "Medical and dental offices",
              "Co-working and shared office spaces",
              "Real estate and professional services offices",
              "Small retail and multi-tenant office suites",
              "Professional suites near Luxmanor and White Flint Metro",
            ].map((space) => (
              <div
                key={space}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-foreground">{space}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flexible Schedules ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Flexible Cleaning Schedules for North Bethesda Businesses
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                freq: "Daily",
                best: "High-traffic offices with 15+ employees near Strathmore Music Center",
                result: "Always presentation-ready",
              },
              {
                freq: "3× per Week",
                best: "Mid-sized offices and co-working spaces in ZIP 20852",
                result: "Consistently clean without daily cost",
              },
              {
                freq: "Weekly",
                best: "Smaller offices with lighter traffic in 20895",
                result: "Professional cleanliness on a budget",
              },
            ].map((plan) => (
              <div
                key={plan.freq}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <p className="font-heading font-bold text-primary text-lg mb-2">{plan.freq}</p>
                <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{plan.best}</p>
                <p className="text-xs font-semibold text-foreground">{plan.result}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All schedules available before hours, after hours, or weekends. Need a{" "}
            <Link to="/locations/north-bethesda-md/deep-cleaning" className="text-primary underline">
              deep cleaning
            </Link>{" "}
            before starting regular service? We handle that too.
          </p>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              North Bethesda Businesses Trust Capital Clean Care
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
                "Reliable, thorough, and always on time. Our office near White Flint has never looked better — and we never have to think about it. Capital Clean Care just handles it."
              </p>
              <p className="text-sm font-semibold text-foreground">Marcus T.</p>
              <p className="text-xs text-muted-foreground">North Bethesda, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving North Bethesda businesses near Luxmanor, Pike & Rose, and across ZIPs 20852 and 20895.
                A business client? Share your experience.
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

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Office Cleaning Throughout North Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care provides commercial cleaning across all of North Bethesda — ZIP codes
              20852 and 20895. From the professional office parks near the White Flint Metro station to
              the business suites along Rockville Pike, our background-checked, bonded team delivers
              consistent, professional results without interrupting your operations.
            </p>
            <p>
              North Bethesda's growing commercial corridor — anchored by the Pike & Rose development and
              the Luxmanor business district — demands cleaning partners who understand both the pace and
              the standards of professional spaces. We serve medical and dental offices, corporate suites,
              co-working spaces, and small businesses of all kinds throughout the 20852 ZIP code and beyond.
            </p>
            <p>
              As a Latino-owned business serving Montgomery County, we value the long-term relationships we
              build with North Bethesda business owners and office managers. Our background-checked team
              is discreet, punctual, and held to the same high standard on every visit. Call (240) 704-2551
              to discuss a custom cleaning schedule for your commercial space.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — North Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="North Bethesda"
        citySlug="north-bethesda-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={northBethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="North Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Keep Your North Bethesda Office Spotless
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving North Bethesda businesses near Pike & Rose, ZIPs 20852 and 20895, including
            Luxmanor and Garrett Park. Get a free commercial cleaning quote in 60 seconds —
            or call us at (240) 704-2551. Custom schedules, after-hours available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Commercial Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Custom schedule · After-hours available · Bonded & Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default NorthBethesdaOfficeCleaningPage;
