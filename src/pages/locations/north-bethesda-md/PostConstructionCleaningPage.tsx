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

const PAGE_URL = "https://capitalcleancare.com/locations/north-bethesda-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in North Bethesda?",
    a: "Priced by square footage and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate including drywall silica — common in North Bethesda renovation projects.",
  },
  {
    q: "How soon after construction can you come to North Bethesda?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request for properties in ZIP 20852 and 20895.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in North Bethesda?",
    a: "Yes — residential and light commercial. Contact us for custom quotes on larger projects near Pike & Rose or elsewhere in North Bethesda.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before entering any property in North Bethesda.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas. We work around your living situation throughout the renovation process.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving North Bethesda and the greater Montgomery County area. We live and work in this community.",
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
      "Clean inside cabinets and drawers",
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
      "Confirm move-in ready condition",
    ],
  },
];

const northBethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const NorthBethesdaPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in North Bethesda, MD — Dust-Free, Move-In Ready",
    description:
      "Post-construction cleaning in North Bethesda, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
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
          { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
          { label: "Post-Construction Cleaning", href: "/locations/north-bethesda-md/post-construction-cleaning" },
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
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Fairfax, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Post-Construction Cleaning in North Bethesda, MD"
        description="Professional post-construction cleaning in North Bethesda, MD. HEPA vacuums, construction dust, drywall residue, paint splatters. Three-phase process. Move-in ready results."
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
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Post-Construction Cleaning in North Bethesda, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your North Bethesda home, from White Flint to Luxmanor. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="North Bethesda"
        state="MD"
        zipRange="20852"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in North Bethesda, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in North Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in North Bethesda"
        categories={checklistCategories}
      />

      {/* ── Why Specialist ────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in North Bethesda
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Construction dust — especially drywall silica — settles into HVAC vents, inside cabinets, and on every
            surface in the 20852 and 20895 ZIP codes we serve near Pike & Rose. A standard cleaning crew without
            HEPA equipment redistributes more than it removes. Capital Clean Care's team is trained and
            HEPA-equipped specifically for post-construction environments, ensuring genuinely dust-free results
            — not just a surface wipe.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "HEPA-Equipped Team",
                body: "HEPA-filter vacuums capture fine particulate including drywall silica — standard vacuums cannot.",
              },
              {
                title: "Three-Phase Process",
                body: "Rough clean, detail clean, and final inspection — a proven sequence that catches everything.",
              },
              {
                title: "Move-In Ready Results",
                body: "Your North Bethesda home is genuinely livable after our clean — not just visually presentable.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Books ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Who Books Post-Construction Cleaning in North Bethesda
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                label: "Homeowners after kitchen, bathroom, or whole-home renovations",
                detail: "Especially in Garrett Park and Luxmanor neighborhoods",
              },
              {
                label: "General contractors preparing final project delivery",
                detail: "Move-in ready handoff for clients throughout North Bethesda",
              },
              {
                label: "Developers completing new construction",
                detail: "Large and small projects near Pike & Rose and White Flint Metro",
              },
              {
                label: "Real estate investors flipping rental properties",
                detail: "Inspection-ready turnovers in ZIP 20852 and 20895",
              },
            ].map(({ label, detail }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            After your post-construction clean, consider our{" "}
            <Link to="/locations/north-bethesda-md/recurring-cleaning" className="text-primary underline">
              recurring cleaning
            </Link>{" "}
            service to keep your renovated North Bethesda home in peak condition.
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
              North Bethesda Homeowners After Their Renovations
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
                Serving post-renovation homes near Strathmore Music Center and across North Bethesda's 20852–20895 area.
                Just completed a renovation? Share your experience.
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
            Post-Construction Cleaning Throughout North Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care provides post-construction cleaning across all of North Bethesda — ZIP codes
              20852 and 20895. From kitchen and bathroom remodels in Garrett Park and White Flint to
              whole-home renovations in Luxmanor, our HEPA-equipped team handles the specialized cleanup
              that follows any construction project.
            </p>
            <p>
              North Bethesda has seen substantial residential renovation activity, particularly in the areas
              surrounding the Rockville Pike corridor and the Pike & Rose development. Our three-phase cleaning
              process — rough clean, detail clean, and final inspection — ensures that every surface is
              genuinely dust-free and move-in ready, not just visually clean.
            </p>
            <p>
              As a Latino-owned business serving Montgomery County, we pride ourselves on technical thoroughness.
              Every post-construction cleaning team member receives specialized training in HEPA operation,
              construction residue removal, and final inspection protocols. We schedule within 24–48 hours of
              your call at (240) 704-2551 — because we know construction timelines don't wait.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — North Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="North Bethesda"
        citySlug="north-bethesda-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
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
            Ready for a Dust-Free Home in North Bethesda?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving North Bethesda renovations near Strathmore Music Center, across ZIPs 20852 and 20895.
            Get a free quote in 60 seconds — or call us at (240) 704-2551.
            Fast scheduling · HEPA-equipped team · Licensed, Bonded & Insured.
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

export default NorthBethesdaPostConstructionCleaningPage;
