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

const PAGE_URL = "https://capitalcleancare.com/locations/potomac-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Potomac?",
    a: "Priced by square footage and scope of work. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate including drywall silica dust — not just redistribute it.",
  },
  {
    q: "How soon after construction can you come to Potomac?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request anywhere in Potomac's ZIP codes 20854 and 20859.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Potomac?",
    a: "Yes — residential and light commercial. Contact us for custom quotes on larger projects near Potomac Village or throughout Montgomery County.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before stepping foot on any Potomac property.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas of your Potomac home during phased construction projects.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Potomac and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Phase 1 — Rough Clean",
    items: [
      "Remove large debris and packaging",
      "Remove construction materials",
      "Sweep and vacuum heavy dust",
    ],
  },
  {
    heading: "Phase 2 — Detail Clean",
    items: [
      "HEPA vacuum all surfaces (walls, ceilings, floors, HVAC registers)",
      "Wipe and wash every surface",
      "Inside cabinets and drawers cleaned",
      "Paint splatters and adhesive residue removed",
      "All bathrooms and appliances deep-cleaned",
      "Windows, tracks, and frames washed",
      "Baseboards and door frames wiped",
      "Floors scrubbed and grout cleaned",
    ],
  },
  {
    heading: "Phase 3 — Final Inspection",
    items: [
      "Touch-up missed spots",
      "Final dust pass throughout",
      "Move-in ready confirmation",
    ],
  },
];

const potomacServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const PotomacPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Potomac, MD — Dust-Free, Move-In Ready",
    description:
      "Post-construction cleaning in Potomac, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
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
          { label: "Potomac, MD", href: "/locations/potomac-md" },
          { label: "Post-Construction Cleaning", href: "/locations/potomac-md/post-construction-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Potomac, MD",
          "Avenel, Potomac MD",
          "Glen Echo, MD",
          "River Falls, Potomac MD",
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
        serviceName="Post-Construction Cleaning in Potomac, MD"
        description="Professional post-construction cleaning in Potomac, MD. HEPA-equipped team removes construction dust, drywall residue, paint splatters. Move-in ready results. Licensed, bonded & insured."
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
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Post-Construction Cleaning in Potomac, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Potomac home, from Glen Echo to River Falls and the Avenel community. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Potomac"
        state="MD"
        zipRange="20854"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Potomac, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Potomac"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Potomac"
        categories={checklistCategories}
      />

      {/* ── Why Specialist ────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Potomac
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Construction dust — especially drywall silica — settles into HVAC vents, inside cabinets,
            and on every surface in the 20854 and 20859 ZIP codes we serve near C&O Canal National
            Historical Park. A standard cleaning crew without HEPA equipment redistributes more than
            it removes, leaving fine particulate in the air and embedded in surfaces. Capital Clean
            Care's team is specifically trained and HEPA-equipped for post-construction environments.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "HEPA Filtration",
                body: "Our vacuum equipment captures particles down to 0.3 microns — including drywall silica that standard vacuums simply recirculate into the air.",
              },
              {
                title: "3-Phase Protocol",
                body: "Rough clean, detail clean, and final inspection — our structured approach ensures nothing is overlooked in your Potomac renovation space.",
              },
              {
                title: "Paint & Adhesive Removal",
                body: "We remove paint splatters, caulk residue, and adhesive buildup from floors, windows, and fixtures without damaging finished surfaces.",
              },
              {
                title: "Move-In Ready Guarantee",
                body: "We don't leave until your Potomac property is genuinely move-in ready. If something is missed, we return at no additional charge.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground mb-1 text-sm">{card.title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who Books ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Who Books Post-Construction Cleaning in Potomac
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Homeowners after kitchen, bathroom, or whole-home renovations in Avenel",
              "General contractors preparing final project delivery near Potomac Village",
              "Developers completing new construction in ZIP 20854 or 20859",
              "Real estate investors flipping rental properties in Montgomery County",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
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
              Potomac Homeowners After Their Renovations
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
                Serving Potomac renovations near Glen Echo, Avenel, and across ZIPs 20854 and 20859.
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
            Post-Construction Cleaning Throughout Potomac, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Potomac is a community of substantial homes — many with full kitchen and bathroom
              renovations, additions, and whole-floor remodels. Capital Clean Care serves
              post-renovation projects throughout ZIP codes 20854 and 20859, from the Avenel
              neighborhood to Glen Echo and the estates along River Road corridor.
            </p>
            <p>
              Our 3-phase post-construction protocol is designed for the scale and complexity of
              Potomac homes. Whether you've completed a single-room renovation or a whole-house
              remodel, our HEPA-equipped team handles dust, residue, and debris removal
              systematically — leaving every surface genuinely clean and move-in ready.
            </p>
            <p>
              Once your post-construction clean is complete, many Potomac homeowners transition to
              our{" "}
              <Link to="/locations/potomac-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              or{" "}
              <Link to="/locations/potomac-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              service to maintain their newly renovated home. Call (240) 704-2551 to schedule
              your post-construction clean in Potomac today.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Potomac, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Potomac"
        citySlug="potomac-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
        services={potomacServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Potomac" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Dust-Free Home in Potomac?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Potomac renovations near Potomac Village, across ZIPs 20854 and 20859.
            Get a free quote in 60 seconds or call (240) 704-2551. Fast scheduling —
            typically within 24–48 hours of your request.
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

export default PotomacPostConstructionCleaningPage;
