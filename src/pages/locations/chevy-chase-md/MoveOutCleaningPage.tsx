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

const PAGE_URL = "https://capitalcleancare.com/locations/chevy-chase-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Chevy Chase?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. Same-day availability confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Chevy Chase?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Many Chevy Chase clients provide a lockbox or spare key.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Chevy Chase?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20815). We understand move-out deadlines are real — we work fast.",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings in Chevy Chase are our specialty. Completely empty homes are preferred and allow us to clean every inch without obstacles.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Chevy Chase and Montgomery County, including inspections near Friendship Heights.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current Chevy Chase home and a deep cleaning for their new one. We can coordinate both.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Chevy Chase and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Inside oven cleaned",
      "Inside refrigerator cleaned",
      "Range hood degreased",
      "Inside all cabinets and drawers wiped",
      "Sink scrubbed",
      "Microwave interior cleaned",
      "Countertops and backsplash wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet scrubbed (base, tank, hinges)",
      "Inside vanity cleaned",
      "Grout and tile scrubbed",
      "Tub/shower deep-cleaned",
      "Fixtures descaled",
      "Mirrors cleaned",
      "Floor mopped",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Inside all closets cleaned",
      "Baseboards and door frames wiped",
      "Window sills and tracks cleaned",
      "Light switches wiped",
      "All floors vacuumed and mopped",
      "Spot-clean walls",
      "Ceiling fans dusted",
      "Trash removed",
    ],
  },
];

const chevyChaseServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const ChevyChaseMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Chevy Chase, MD — Get Your Full Deposit Back",
    description:
      "Move out cleaning in Chevy Chase, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-dark-floor.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
          { label: "Move Out Cleaning", href: "/locations/chevy-chase-md/move-out-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Chevy Chase, MD",
          "Martin's Additions, Chevy Chase MD",
          "Chevy Chase Village, MD",
          "Friendship Heights, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "David R.",
            text: "Got our full deposit back after a 3-year tenancy. The team was thorough and professional from start to finish.",
            location: "Chevy Chase, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Chevy Chase, MD"
        description="Professional move out cleaning in Chevy Chase, MD. Landlord-standard checklist covering every surface. Deposit-ready results backed by 100% satisfaction guarantee."
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
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Move Out Cleaning in Chevy Chase, MD"
        lead="Moving out in Chevy Chase? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Section 3, Section 4, and all Chevy Chase neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Chevy Chase"
        state="MD"
        zipRange="20815"
        heroImage="/images/team/team-mopping-dark-floor.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Chevy Chase, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Chevy Chase"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Chevy Chase"
        categories={checklistCategories}
      />

      {/* ── Why Your Deposit Depends on It ────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Landlords in Chevy Chase and across Montgomery County routinely withhold deposits for cleaning issues.
            A professional move out cleaning to landlord standards — specifically addressing the Friendship Heights
            area rental market — is the most reliable way to protect your deposit. We know what property managers
            inspect, and we build our checklist to meet those exact expectations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Covers Every Inspection Point",
                body: "From inside kitchen cabinets to grout lines in bathroom tile, our checklist is built to pass the strictest Chevy Chase property manager walkthrough.",
              },
              {
                title: "Same-Day & Next-Day Available",
                body: "Move-out deadlines don't wait. We offer same-day and next-day move out cleaning slots across Chevy Chase ZIP 20815 — including Martin's Additions.",
              },
              {
                title: "100% Satisfaction Guarantee",
                body: "If your landlord spots anything we missed, call us and we return free of charge. No arguments, no fine print. Your deposit is the goal.",
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

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            How Our Chevy Chase Move Out Cleaning Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Book your date",
                body: "Same-day and next-day slots available for urgent moves in 20815. Call (240) 704-2551 or use the form below — no commitment, free quote in 60 seconds.",
              },
              {
                step: "2",
                title: "We arrive with all supplies",
                body: "No need to leave anything behind. Our bonded, insured, background-checked team brings all equipment and EPA Safer Choice™ certified products.",
              },
              {
                step: "3",
                title: "Full landlord-standard clean",
                body: "Every room, every surface — inside appliances, inside closets, grout, baseboards, and more. We follow a Chevy Chase-specific checklist designed to meet property manager expectations.",
              },
              {
                step: "4",
                title: "100% satisfaction",
                body: "If your landlord spots anything, we return free. That's our promise to every client in Chevy Chase Village, Martin's Additions, or anywhere in ZIP 20815.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background"
              >
                <div
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-primary font-bold text-sm">{step}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
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
              Chevy Chase Renters Trust Capital Clean Care
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
                "Got our full deposit back after a 3-year tenancy. The team was thorough and professional from start to finish."
              </p>
              <p className="text-sm font-semibold text-foreground">David R.</p>
              <p className="text-xs text-muted-foreground">Chevy Chase, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Helping Chevy Chase renters and homeowners protect their deposits and pass inspections throughout ZIP 20815.
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
            Move Out Cleaning Throughout Chevy Chase, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all Chevy Chase ZIP codes (20815) for move out cleaning — from Section 3
              to Chevy Chase Village and Martin's Additions. Whether you're vacating an apartment near Friendship
              Heights or a single-family home along the Connecticut Avenue corridor, our team is ready with
              same-day and next-day availability.
            </p>
            <p>
              We understand that move-out day is stressful. Our job is to remove one major source of that stress
              by handling the clean completely — so you can focus on the logistics of your move while we focus on
              making your former Chevy Chase home pass inspection. Every item on the checklist is confirmed before
              we leave.
            </p>
            <p>
              Also need a clean for your new place? Consider our{" "}
              <Link to="/locations/chevy-chase-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              service for a fresh start. We also offer{" "}
              <Link to="/locations/bethesda-md/move-out-cleaning" className="text-primary underline">
                move out cleaning in Bethesda
              </Link>{" "}
              and{" "}
              <Link to="/locations/kensington-md/move-out-cleaning" className="text-primary underline">
                move out cleaning in Kensington
              </Link>{" "}
              for clients relocating within the area.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Chevy Chase, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Chevy Chase"
        citySlug="chevy-chase-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
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
            Don't Risk Your Deposit — Book Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Chevy Chase ZIPs (20815), including Martin's Additions and the Friendship Heights area.
            Free quote in 60 seconds — or call (240) 704-2551. Same-day slots available.
            100% satisfaction guaranteed on every move out clean.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Move Out Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Same-day slots · 100% satisfaction guaranteed · Bonded & Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default ChevyChaseMoveOutCleaningPage;
