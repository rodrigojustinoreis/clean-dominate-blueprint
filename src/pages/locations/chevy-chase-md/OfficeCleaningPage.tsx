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

const PAGE_URL = "https://capitalcleancare.com/locations/chevy-chase-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Chevy Chase?",
    a: "Priced by square footage, frequency, and scope. Contact us at (240) 704-2551 or use the form below for a custom quote tailored to your Chevy Chase office.",
  },
  {
    q: "Do you clean after business hours in Chevy Chase?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your schedule so business operations are never disrupted.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Chevy Chase or Montgomery County.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock supplies. EPA Safer Choice™ certified products exclusively.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Chevy Chase?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or chemical residue in your Chevy Chase workspace.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many Chevy Chase clients begin with a deep cleaning baseline, then move to a recurring commercial schedule that fits their business.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Chevy Chase and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum carpets and mop hard floors",
      "Wipe reception furniture and surfaces",
      "Empty and reline all trash cans",
      "Disinfect door handles and light switches",
      "Clean glass doors and windows",
    ],
  },
  {
    heading: "Workstations & Conference Rooms",
    items: [
      "Dust all surfaces and shelving",
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

const chevyChaseServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const ChevyChaseOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Chevy Chase, MD — Reliable Commercial Cleaning Service",
    description:
      "Professional office cleaning in Chevy Chase, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
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
          { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
          { label: "Office Cleaning", href: "/locations/chevy-chase-md/office-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Chevy Chase, MD",
          "Friendship Heights, MD",
          "Connecticut Avenue corridor, MD",
          "Martin's Additions, Chevy Chase MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Patricia O.",
            text: "Reliable, discreet, and thorough. They clean our medical office after hours without a single issue.",
            location: "Chevy Chase, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office Cleaning in Chevy Chase, MD"
        description="Professional commercial and office cleaning in Chevy Chase, MD. Custom schedules, background-checked team, eco-friendly products. Serving offices near Friendship Heights and Connecticut Avenue."
        url={PAGE_URL}
        areaServed={["Chevy Chase, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Chevy Chase, MD"
        lead="Capital Clean Care brings the same reliability Chevy Chase families trust to commercial spaces — from small offices in Section 3 to professional suites near Friendship Heights. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Chevy Chase"
        state="MD"
        zipRange="20815"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Chevy Chase, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Chevy Chase"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Chevy Chase Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Commercial Spaces We Serve ────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Commercial Spaces We Clean in Chevy Chase
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Private & Open-Plan Offices",
                body: "From executive suites along Connecticut Avenue to open co-working environments in Section 3, our background-checked team adapts to your layout and needs.",
              },
              {
                title: "Medical & Dental Offices",
                body: "Chevy Chase hosts numerous healthcare practices requiring strict disinfection standards. Our EPA Safer Choice™ certified products meet the hygiene expectations of medical environments.",
              },
              {
                title: "Professional Services & Retail",
                body: "Real estate offices, financial advisors, retail boutiques, and multi-tenant suites near Friendship Heights — we serve the full range of Chevy Chase commercial clients.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scheduling Options ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Flexible Cleaning Schedules for Chevy Chase Businesses
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-semibold text-foreground border border-border">Frequency</th>
                  <th className="text-left p-4 font-semibold text-foreground border border-border">Best For</th>
                  <th className="text-left p-4 font-semibold text-foreground border border-border">Typical Setting</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Daily", "High-traffic offices with 15+ employees", "Near Connecticut Avenue, Section 4"],
                  ["3× per week", "Mid-sized offices and co-working spaces", "20815 ZIP code, Martin's Additions"],
                  ["Weekly", "Smaller offices with lighter traffic", "Section 3, Chevy Chase Village"],
                ].map(([freq, best, setting]) => (
                  <tr key={freq} className="even:bg-muted/20">
                    <td className="p-4 border border-border font-semibold text-foreground">{freq}</td>
                    <td className="p-4 border border-border text-muted-foreground">{best}</td>
                    <td className="p-4 border border-border text-muted-foreground">{setting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All schedules available before hours, after hours, or weekends. Not sure what frequency you need? Start
            with a{" "}
            <Link to="/locations/chevy-chase-md/deep-cleaning" className="text-primary underline">
              one-time deep cleaning
            </Link>{" "}
            baseline and we'll recommend a maintenance plan from there.
          </p>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Business Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Chevy Chase Businesses Trust Capital Clean Care
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
                "Reliable, discreet, and thorough. They clean our medical office after hours without a single issue."
              </p>
              <p className="text-sm font-semibold text-foreground">Patricia O.</p>
              <p className="text-xs text-muted-foreground">Chevy Chase, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving businesses throughout Chevy Chase — near Friendship Heights, Section 3, Section 4,
                and the Connecticut Avenue corridor.
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
            Office Cleaning Throughout Chevy Chase, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves commercial clients throughout Chevy Chase ZIP 20815 — from small
              professional offices in Section 3 and Martin's Additions to larger multi-suite buildings near
              Friendship Heights and the Connecticut Avenue business corridor. Our background-checked team handles
              after-hours access with complete discretion and professionalism.
            </p>
            <p>
              Chevy Chase's commercial landscape includes a growing number of professional services, healthcare
              practices, and boutique businesses that expect a high standard of cleanliness from their service
              providers. We deliver the same meticulous standard to every Chevy Chase office that our residential
              clients depend on — because a clean workspace reflects your business.
            </p>
            <p>
              Looking for office cleaning in neighboring areas? We also provide{" "}
              <Link to="/locations/bethesda-md/office-cleaning" className="text-primary underline">
                office cleaning in Bethesda
              </Link>{" "}
              and{" "}
              <Link to="/locations/kensington-md/office-cleaning" className="text-primary underline">
                office cleaning in Kensington
              </Link>
              . For Chevy Chase businesses that also need residential service, check out our{" "}
              <Link to="/locations/chevy-chase-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              options for owners and employees.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Chevy Chase, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Chevy Chase"
        citySlug="chevy-chase-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={chevyChaseServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Chevy Chase" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Keep Your Chevy Chase Office Spotless
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Chevy Chase businesses near Friendship Heights, ZIP 20815, including Section 4 and Martin's
            Additions. Free commercial quote in 60 seconds — or call (240) 704-2551. Custom schedule, after-hours
            available. 100% satisfaction guaranteed.
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

export default ChevyChaseOfficeCleaningPage;
