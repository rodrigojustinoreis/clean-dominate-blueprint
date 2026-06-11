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

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Bethesda?",
    a: "Priced by square footage, frequency, and scope. Contact us at (240) 704-2551 or use the form below for a custom quote tailored to your Bethesda office.",
  },
  {
    q: "Do you clean after business hours in Bethesda?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your schedule so your team is never disrupted.",
  },
  {
    q: "Are your cleaners background-checked for commercial properties?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Bethesda. Security and discretion are non-negotiable.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock supplies or equipment. EPA Safer Choice™ certified products only.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Bethesda?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or residue. Safe for medical offices and food prep areas.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many Bethesda clients begin with a deep cleaning baseline, then move to a recurring service schedule. Call (240) 704-2551 to discuss.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum all carpets",
      "Mop hard floors",
      "Wipe reception furniture",
      "Empty and reline trash",
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
      "Clean whiteboards (on request)",
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
      "Clean mirrors streak-free",
      "Mop floor",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const BethesdaOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Bethesda, MD",
    description:
      "Professional office cleaning in Bethesda, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
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
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "Office Cleaning", href: "/locations/bethesda-md/office-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Bethesda, MD",
          "Bethesda Row, Bethesda MD",
          "Kenwood, Bethesda MD",
          "Woodmont Triangle, Bethesda MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "David R.",
            text: "Consistent, professional, and always on time. Our office near Bethesda Row has never looked better.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Bethesda, MD"
        description="Professional office and commercial cleaning in Bethesda, MD. Reliable, background-checked team. Daily, weekly, or custom schedules. EPA Safer Choice certified products."
        url={PAGE_URL}
        areaServed={["Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Bethesda, MD", href: "/locations/bethesda-md" },
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Bethesda, MD"
        lead="Capital Clean Care brings the same reliability Bethesda families trust to commercial spaces — from small offices in Bethesda Row to professional suites near NIH campus. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Bethesda, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Bethesda Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Space Types ───────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Commercial Spaces We Clean in Bethesda
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Private & Open-Plan Offices",
                body: "From individual executive suites to open-plan workspaces in Bethesda Row and Woodmont Triangle, we maintain a clean, professional environment for your team.",
              },
              {
                title: "Medical & Dental Offices",
                body: "Clinics near NIH campus and the National Naval Medical Center area require rigorous disinfection standards. Our background-checked team is trained for healthcare environments.",
              },
              {
                title: "Co-Working Spaces",
                body: "High-traffic shared office spaces in Bethesda's 20814 ZIP code require consistent daily or multi-weekly cleaning to stay presentable for members.",
              },
              {
                title: "Real Estate & Professional Services",
                body: "Client-facing offices in Kenwood and Bradley Hills need to make a strong first impression. We ensure your space reflects the professionalism of your business.",
              },
              {
                title: "Small Retail & Multi-Tenant Suites",
                body: "Retail spaces and multi-tenant office buildings throughout Bethesda's 20815 and 20816 ZIP codes benefit from our flexible, after-hours scheduling.",
              },
              {
                title: "Custom Commercial Scopes",
                body: "Have a unique space or specific requirements? Call (240) 704-2551 and we'll build a custom cleaning plan for your Bethesda commercial property.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scheduling ────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Flexible Cleaning Schedules for Bethesda Businesses
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Frequency</th>
                  <th className="text-left p-4 font-semibold text-foreground">Best For</th>
                  <th className="text-left p-4 font-semibold text-foreground">Bethesda Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  [
                    "Daily",
                    "High-traffic offices, 15+ employees",
                    "Busy offices near Bethesda Metro (20814)",
                  ],
                  [
                    "3× per week",
                    "Mid-sized offices, co-working spaces",
                    "Professional suites in Bethesda Row",
                  ],
                  [
                    "Weekly",
                    "Smaller offices, lighter traffic",
                    "Professional offices in 20815 and 20816",
                  ],
                  [
                    "Custom",
                    "Unique requirements",
                    "Medical offices, retail, multi-tenant buildings",
                  ],
                ].map(([freq, best, use]) => (
                  <tr key={freq} className="bg-background hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{freq}</td>
                    <td className="p-4 text-muted-foreground">{best}</td>
                    <td className="p-4 text-muted-foreground">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All schedules available before business hours, after close, or on weekends. We work around your team.
          </p>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Bethesda Businesses Trust Capital Clean Care
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
                "Consistent, professional, and always on time. Our office near Bethesda Row has never looked better."
              </p>
              <p className="text-sm font-semibold text-foreground">David R.</p>
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Bethesda businesses near NIH campus, Kenwood, and Woodmont Triangle.
                If you're a business client, share your experience.
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
            Office Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's commercial cleaning service covers all Bethesda ZIP codes — 20814,
              20815, 20816, and 20817. From professional offices along the Bethesda Metro corridor and
              in Bethesda Row to medical practices near NIH campus and National Naval Medical Center,
              our background-checked, bonded team provides reliable service on your schedule.
            </p>
            <p>
              Bethesda is home to a dense concentration of professional services, healthcare offices,
              financial firms, and government contractors. These businesses require a cleaning company
              that understands the importance of confidentiality, punctuality, and consistent quality.
              We serve offices throughout Kenwood, Edgemoor, Woodmont Triangle, and Friendship Heights.
            </p>
            <p>
              Many of our commercial clients in Bethesda begin with a{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              baseline before transitioning to regular service. We also handle{" "}
              <Link to="/locations/bethesda-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              for Bethesda residents and serve nearby businesses with{" "}
              <Link to="/locations/rockville-md/office-cleaning" className="text-primary underline">
                office cleaning in Rockville
              </Link>{" "}
              and{" "}
              <Link to="/locations/chevy-chase-md/office-cleaning" className="text-primary underline">
                office cleaning in Chevy Chase
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Keep Your Bethesda Office Spotless
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Bethesda businesses near NIH campus, ZIPs 20814, 20815, 20816, and 20817 — including
            Kenwood and Bradley Hills. Get a free, no-obligation commercial cleaning quote in under 60
            seconds, or call (240) 704-2551 to discuss your office's specific needs. Custom schedules,
            after-hours available.
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
            Custom schedule · After-hours available · Bonded &amp; Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaOfficeCleaningPage;
