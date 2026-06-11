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

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Bethesda?",
    a: "Priced by square footage and scope of work. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate including drywall silica dust, which standard vacuums recirculate into the air.",
  },
  {
    q: "How soon after construction can you come to Bethesda?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request throughout Bethesda's 20814–20817 ZIP codes.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Bethesda?",
    a: "Yes — residential and light commercial. Contact us at (240) 704-2551 for custom quotes on larger projects near NIH campus or Bethesda Row.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before any project begins.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas from construction debris and dust migration.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Phase 1 — Rough Clean",
    items: [
      "Remove large debris and packaging",
      "Haul construction materials",
      "Sweep and vacuum heavy dust accumulation",
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
      "Wipe baseboards and all door frames",
      "Scrub floors and grout lines",
    ],
  },
  {
    heading: "Phase 3 — Final Inspection",
    items: [
      "Touch-up any missed spots",
      "Final full-property dust pass",
      "Confirm move-in ready condition",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const BethesdaPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Bethesda, MD",
    description:
      "Post-construction cleaning in Bethesda, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
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
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "Post-Construction Cleaning", href: "/locations/bethesda-md/post-construction-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Bethesda, MD",
          "Bethesda Row, Bethesda MD",
          "Bradley Hills, Bethesda MD",
          "Kenwood, Bethesda MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Post-Construction Cleaning in Bethesda, MD"
        description="Professional post-construction cleaning in Bethesda, MD. HEPA-equipped team removes construction dust, paint splatters, and debris for genuinely move-in ready results."
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
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Post-Construction Cleaning in Bethesda, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Bethesda home, from Bethesda Row to Bradley Hills. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Bethesda, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Bethesda"
      />

      {/* ── 3-Phase Checklist ─────────────────────────────── */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Bethesda"
        categories={checklistCategories}
      />

      {/* ── Why Specialist ────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Bethesda
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Construction dust — especially drywall silica — settles into HVAC vents, inside cabinets,
            and on every surface in the 20814 and 20815 ZIP codes we serve near NIH campus. A standard
            cleaning crew without HEPA equipment redistributes more than it removes. Capital Clean Care's
            team is trained and HEPA-equipped specifically for post-construction environments, applying a
            three-phase approach that leaves no residue behind.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "HEPA Filtration",
                body: "HEPA vacuums capture particles down to 0.3 microns — including fine drywall silica that ordinary vacuums blow back into the air.",
              },
              {
                title: "Paint & Adhesive Removal",
                body: "We remove paint splatters, caulk residue, and construction adhesive from floors, windows, and fixtures throughout your Bethesda home.",
              },
              {
                title: "HVAC Register Cleaning",
                body: "Construction dust inside HVAC registers circulates through your home for months if left unaddressed. We clean every register as part of our standard scope.",
              },
              {
                title: "Move-In Ready Verification",
                body: "Our three-phase process ends with a final inspection walkthrough to confirm your Bethesda property is genuinely move-in ready before we leave.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Books ─────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Who Books Post-Construction Cleaning in Bethesda
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Homeowners After Renovation",
                body: "Kitchen, bathroom, or whole-home renovations in Bradley Hills and Kenwood leave significant dust and residue that requires professional-grade equipment to fully remove.",
              },
              {
                title: "General Contractors",
                body: "Bethesda contractors delivering finished projects rely on our three-phase clean to ensure a polished final presentation that reflects well on their work.",
              },
              {
                title: "Real Estate Investors",
                body: "Investors flipping rental properties throughout Bethesda's 20814–20817 ZIP codes need fast, thorough post-construction cleaning before listing or renting.",
              },
              {
                title: "Developers",
                body: "New construction projects near the Bethesda Metro and Woodmont Triangle area require a complete clean before occupancy inspections and final walkthroughs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
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
              Bethesda Homeowners After Their Renovations
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
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Bethesda renovation projects near Bethesda Metro, Bradley Hills, and Kenwood.
                If you're a client, share your experience.
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
            Post-Construction Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's post-construction cleaning service covers all Bethesda ZIP codes —
              20814, 20815, 20816, and 20817. From newly renovated kitchens in Kenwood to bathroom
              remodels in Bradley Hills and full-home renovations near Bethesda Row, our HEPA-equipped
              team delivers a move-in ready standard that generic cleaners can't match.
            </p>
            <p>
              The Bethesda area sees significant renovation activity — from historic home updates to new
              construction near the Bethesda Metro corridor and NIH campus. We're experienced with both
              residential projects and light commercial scopes, and we coordinate directly with contractors
              and project managers to fit within handoff timelines.
            </p>
            <p>
              After your post-construction clean, many Bethesda clients transition to a{" "}
              <Link to="/locations/bethesda-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              plan to maintain the results, or book a{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              annually. Also serving post-renovation projects nearby:{" "}
              <Link to="/locations/rockville-md/post-construction-cleaning" className="text-primary underline">
                post-construction cleaning in Rockville
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
            Post-Construction Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
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
            Ready for a Dust-Free Home in Bethesda?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Bethesda renovations near Bethesda Metro, across ZIPs 20814, 20815, 20816, and 20817.
            Get a free, no-obligation quote in under 60 seconds — or call (240) 704-2551 to discuss your
            project scope. Fast scheduling, HEPA-equipped team, fully licensed and insured.
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
            Fast scheduling · HEPA-equipped team · Licensed, Bonded &amp; Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaPostConstructionCleaningPage;
