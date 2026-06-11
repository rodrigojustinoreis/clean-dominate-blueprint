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

const PAGE_URL = "https://capitalcleancare.com/locations/chevy-chase-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Chevy Chase?",
    a: "Priced by square footage and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate including drywall silica — not just redistribute it.",
  },
  {
    q: "How soon after construction can you come to Chevy Chase?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request anywhere in Chevy Chase ZIP 20815.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Chevy Chase?",
    a: "Yes — residential and light commercial. Contact us for custom quotes on larger projects near Friendship Heights or the Connecticut Avenue corridor.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before entering any Chevy Chase property.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas. Common in Martin's Additions and Section 3 homes undergoing room-by-room renovations.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Chevy Chase and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Phase 1 — Rough Clean",
    items: [
      "Remove large debris and packaging",
      "Clear construction materials",
      "Sweep and vacuum heavy dust",
    ],
  },
  {
    heading: "Phase 2 — Detail Clean",
    items: [
      "HEPA vacuum all surfaces (walls, ceilings, floors, HVAC registers)",
      "Wipe and wash every surface",
      "Clean inside all cabinets and drawers",
      "Remove paint splatters and adhesive residue",
      "Deep-clean all bathrooms and appliances",
      "Wash windows, tracks, and frames",
      "Wipe baseboards and door frames",
      "Scrub floors and grout",
    ],
  },
  {
    heading: "Phase 3 — Final Inspection",
    items: [
      "Touch-up missed spots",
      "Final dust pass on all surfaces",
      "Confirm move-in ready",
    ],
  },
];

const chevyChaseServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const ChevyChasePostConstructionPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Chevy Chase, MD",
    description:
      "Post-construction cleaning in Chevy Chase, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-post-construction.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
          { label: "Post-Construction Cleaning", href: "/locations/chevy-chase-md/post-construction-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Chevy Chase, MD",
          "Martin's Additions, Chevy Chase MD",
          "Chevy Chase Village, MD",
          "Somerset, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Fairfax, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Post-Construction Cleaning in Chevy Chase, MD"
        description="Professional post-construction and post-renovation cleaning in Chevy Chase, MD. HEPA-equipped team, three-phase process, move-in ready results. Licensed, bonded & insured."
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
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Post-Construction Cleaning in Chevy Chase, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Chevy Chase home, from Section 3 to Section 4. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Chevy Chase"
        state="MD"
        zipRange="20815"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Chevy Chase, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Chevy Chase"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Chevy Chase"
        categories={checklistCategories}
      />

      {/* ── Why Specialist ────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Chevy Chase
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Construction dust — especially drywall silica — settles into HVAC vents, inside cabinets, and on every
            surface in the 20815 ZIP code we serve near Friendship Heights. A standard cleaning crew without HEPA
            equipment redistributes more than it removes. Capital Clean Care's team is trained and HEPA-equipped
            specifically for post-construction environments in Chevy Chase and across Montgomery County.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "HEPA Equipment — Not Standard Vacuums",
                body: "Our HEPA-filter vacuums capture fine drywall silica particles that standard vacuums blow back into the air. The result is a genuinely dust-free home, not just a surface wipe.",
              },
              {
                title: "Three-Phase Process",
                body: "We don't skip steps. Rough clean, detail clean, final inspection — each phase is completed before we move to the next to ensure nothing is missed in your Chevy Chase property.",
              },
              {
                title: "Paint Spatter & Residue Removal",
                body: "We remove paint splatters, adhesive residue, caulk marks, and construction film from floors, windows, fixtures, and surfaces throughout Section 3 and Martin's Additions homes.",
              },
              {
                title: "Move-In Ready Confirmation",
                body: "Every job ends with a final inspection. We don't leave until your Chevy Chase home passes our own walk-through standard. 100% satisfaction guarantee applies.",
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

      {/* ── Who Books ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Who Books Post-Construction Cleaning in Chevy Chase
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Homeowners after kitchen, bathroom, or whole-home renovations",
                detail: "Especially common in Martin's Additions and Chevy Chase Village, where many historic homes undergo phased renovations.",
              },
              {
                label: "General contractors preparing final project delivery",
                detail: "We work directly with contractors to schedule post-construction cleanup as soon as the crew clears out.",
              },
              {
                label: "Developers completing new construction",
                detail: "From small infill projects near Section 4 to larger builds along the Connecticut Avenue corridor.",
              },
              {
                label: "Real estate investors flipping properties",
                detail: "Move-in ready results help properties sell faster and photograph better for listings throughout Chevy Chase (20815).",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
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
              Chevy Chase Homeowners After Their Renovations
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
                "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough."
              </p>
              <p className="text-sm font-semibold text-foreground">Brian G.</p>
              <p className="text-xs text-muted-foreground">Fairfax, VA</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving post-renovation and new construction projects throughout Chevy Chase, Martin's Additions,
                and ZIP 20815. Share your experience.
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
            Post-Construction Cleaning Throughout Chevy Chase, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all post-construction and post-renovation cleaning needs in Chevy Chase ZIP
              20815 — from Section 3 homes undergoing kitchen remodels to larger new builds near the Connecticut Avenue
              corridor. Our HEPA-equipped team is ready to schedule within 24–48 hours of your request.
            </p>
            <p>
              Chevy Chase's mature housing stock — including many historic properties near the Chevy Chase Club and
              along the tree-lined streets of Martin's Additions — means renovation work is a regular part of the
              community. We understand the specific challenges of post-construction cleanup in older homes and have
              developed a thorough three-phase process to deliver genuinely move-in ready results every time.
            </p>
            <p>
              After your post-construction clean, consider setting up a{" "}
              <Link to="/locations/chevy-chase-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              schedule to maintain your newly renovated space. We also offer{" "}
              <Link to="/locations/bethesda-md/post-construction-cleaning" className="text-primary underline">
                post-construction cleaning in Bethesda
              </Link>{" "}
              for projects across the county line.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Chevy Chase, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Chevy Chase"
        citySlug="chevy-chase-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
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
            Ready for a Dust-Free Home in Chevy Chase?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Chevy Chase renovations near Connecticut Avenue and across ZIP 20815. Free quote in 60 seconds —
            or call (240) 704-2551. HEPA-equipped team, fast scheduling, 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Post-Construction Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Fast scheduling · HEPA-equipped team · Licensed, Bonded & Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default ChevyChasePostConstructionPage;
