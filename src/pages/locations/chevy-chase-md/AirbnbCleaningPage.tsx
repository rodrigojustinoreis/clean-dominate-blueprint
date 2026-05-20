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

const PAGE_URL = "https://capitalcleancare.com/locations/chevy-chase-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Chevy Chase Airbnb?",
    a: "Most 1–2 bedroom Chevy Chase properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice throughout ZIP 20815.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb calendar and we schedule around each checkout automatically, handling turnovers across Chevy Chase Village and Martin's Additions.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Chevy Chase?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No contracts required.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We document with photos and charge only for the additional time required. Transparency is part of how we build trust with Chevy Chase hosts.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, and direct bookings. Any short-term rental property in Chevy Chase (20815) qualifies.",
  },
  {
    q: "Do you know Airbnb standards in Chevy Chase?",
    a: "Yes. We work with multiple hosts across Chevy Chase and Montgomery County, and we understand the standards that drive 5-star guest reviews.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Chevy Chase and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Between Every Guest",
    items: [
      "Strip and remake all beds with fresh linens",
      "Replace all towels",
      "Sanitize all bathroom surfaces",
      "Clean kitchen (dishes, countertops, trash)",
      "Restock essentials (if provided by host)",
      "Sweep, vacuum, and mop all floors",
      "Wipe mirrors and screens",
    ],
  },
  {
    heading: "Deep-Reset (Periodic)",
    items: [
      "Inside appliances cleaned",
      "Grout and baseboards scrubbed",
      "Window tracks cleaned",
      "Closet interiors wiped",
    ],
  },
  {
    heading: "Optional Add-Ons",
    items: [
      "Laundry service",
      "Restock consumables",
      "Pre-check-in inspection",
    ],
  },
];

const chevyChaseServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
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

const ChevyChaseAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Chevy Chase, MD — Fast Turnovers, 5-Star Results",
    description:
      "Airbnb & short-term rental cleaning in Chevy Chase, MD. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-making-bed.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
          { label: "Airbnb Cleaning", href: "/locations/chevy-chase-md/airbnb-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Chevy Chase, MD",
          "Chevy Chase Village, MD",
          "Martin's Additions, Chevy Chase MD",
          "Connecticut Avenue corridor, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Amanda F.",
            text: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Airbnb Cleaning in Chevy Chase, MD"
        description="Professional Airbnb and short-term rental turnover cleaning in Chevy Chase, MD. Hotel-standard results, fast turnovers, flexible scheduling. 100% satisfaction guaranteed."
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
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Chevy Chase, MD"
        lead="Protect your Chevy Chase Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from Section 3 to Friendship Heights. Flexible scheduling, 100% satisfaction guaranteed."
        cityName="Chevy Chase"
        state="MD"
        zipRange="20815"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning in Chevy Chase, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Chevy Chase"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="Our Chevy Chase Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* ── Why Hosts Choose Us ───────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Chevy Chase Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rating Protection",
                body: "Consistent, bonded team means guests find your Chevy Chase property exactly as listed, every time. 100% satisfaction guaranteed: we re-clean if anything falls short of 5-star standards.",
              },
              {
                title: "Flexible Scheduling",
                body: "We work around your checkout/check-in window across Chevy Chase's 20815 ZIP code — from Section 4 to the Connecticut Avenue corridor. Same-day turnovers available with advance notice.",
              },
              {
                title: "Locally Owned & Accountable",
                body: "We're not a franchise. We're Latino-owned and operate in Chevy Chase. Your Airbnb rating and your guests' experience matter to us personally — every single turnover.",
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
            How Airbnb Cleaning Works With Us
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Share your calendar",
                body: "We coordinate around your Airbnb booking schedule — automatically scheduling turnovers for every checkout across Chevy Chase and Martin's Additions.",
              },
              {
                step: "2",
                title: "We arrive at checkout time",
                body: "Fast turnover anywhere in Chevy Chase, from Section 4 to the Chevy Chase Village. Our bonded, background-checked team handles everything.",
              },
              {
                step: "3",
                title: "Hotel-standard clean",
                body: "Fresh linens, sanitized bathrooms, spotless kitchen, restocked essentials. Every guest checks in to a genuinely clean space.",
              },
              {
                step: "4",
                title: "Ready for next guest",
                body: "You get confirmation when the property is ready. Your guest checks in to a 5-star clean. Your rating stays protected.",
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
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Host Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Chevy Chase Hosts Trust Capital Clean Care
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
                "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible."
              </p>
              <p className="text-sm font-semibold text-foreground">Amanda F.</p>
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving short-term rental hosts near Connecticut Avenue and across Chevy Chase's 20815 ZIP.
                Share your experience as a host.
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
            Airbnb Cleaning Throughout Chevy Chase, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves Airbnb and short-term rental hosts throughout Chevy Chase ZIP 20815 —
              including properties near Section 3, Section 4, Chevy Chase Lake, and along the Connecticut Avenue
              corridor near Friendship Heights Metro. Our flexible scheduling is designed around your guest calendar,
              not ours.
            </p>
            <p>
              Chevy Chase's proximity to Washington D.C. and Bethesda makes it a popular destination for short-term
              rentals. Hosts here expect a high standard — and so do their guests. Our consistent, background-checked
              team delivers the same hotel-quality result on every turnover, protecting your property's reputation
              and keeping your reviews strong.
            </p>
            <p>
              In addition to turnovers, we also offer{" "}
              <Link to="/locations/chevy-chase-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              for your Chevy Chase rental between seasons, and{" "}
              <Link to="/locations/chevy-chase-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              for properties that also serve as primary residences. Need Airbnb cleaning nearby? See{" "}
              <Link to="/locations/bethesda-md/airbnb-cleaning" className="text-primary underline">
                Airbnb cleaning in Bethesda
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
            Airbnb Cleaning FAQ — Chevy Chase, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Chevy Chase"
        citySlug="chevy-chase-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
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
            Set Up Automatic Airbnb Turnovers in Chevy Chase
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Chevy Chase short-term rentals near Connecticut Avenue and across ZIP 20815.
            Free quote in 60 seconds — or call (240) 704-2551. Flexible scheduling, same-day turnovers available.
            100% satisfaction guaranteed on every turnover.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Airbnb Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Flexible scheduling · Same-day turnovers · 100% satisfaction guaranteed
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default ChevyChaseAirbnbCleaningPage;
