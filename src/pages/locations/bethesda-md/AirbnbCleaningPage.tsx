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

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Bethesda Airbnb?",
    a: "Most 1–2 bedroom Bethesda properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb calendar and we schedule around each checkout automatically. No reminders needed on your end.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Bethesda?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No contracts required.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We document with photos and charge only for the additional time required. Transparent, fair billing every time.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, direct bookings. Any short-term rental in Bethesda's 20814–20817 ZIP codes.",
  },
  {
    q: "Do you know Airbnb standards in Bethesda?",
    a: "Yes. We work with multiple hosts across Bethesda (20814–20815) and Montgomery County. Our team knows what guests expect.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Between Every Guest",
    items: [
      "Strip and remake beds with fresh linens",
      "Replace towels and bath items",
      "Sanitize all bathroom surfaces",
      "Clean kitchen — dishes, surfaces, trash",
      "Restock essentials (if provided)",
      "Sweep, vacuum, and mop all floors",
      "Wipe mirrors and screens streak-free",
    ],
  },
  {
    heading: "Deep Reset (Periodic)",
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
      "Pre-check-in inspection report",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const BethesdaAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Bethesda, MD",
    description:
      "Airbnb & short-term rental cleaning in Bethesda, MD. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote.",
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
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "Airbnb Cleaning", href: "/locations/bethesda-md/airbnb-cleaning" },
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
            name: "Amanda F.",
            text: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Airbnb & Short-Term Rental Cleaning in Bethesda, MD"
        description="Professional Airbnb and short-term rental cleaning in Bethesda, MD. Fast turnovers, hotel-standard results, flexible scheduling around your booking calendar."
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
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Bethesda, MD"
        lead="Protect your Bethesda Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from Bethesda Row to NIH campus. Flexible scheduling, 100% satisfaction guaranteed."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning in Bethesda, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Bethesda"
      />

      {/* ── Checklist ─────────────────────────────────────── */}
      <ServiceChecklistLocation
        title="Our Bethesda Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="airbnb-cleaning" serviceLabel="Airbnb Cleaning" />

      {/* ── Why Hosts Choose Us ───────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Bethesda Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rating Protection",
                body: "Consistent, bonded team means guests find your Bethesda property exactly as listed, every time. 100% satisfaction guaranteed: we re-clean if anything falls short of hotel standard.",
              },
              {
                title: "Flexible Scheduling",
                body: "We work around your checkout and check-in window across Bethesda's 20814 and 20815 ZIP codes and throughout Kenwood and Bradley Hills. Same-day turnovers available.",
              },
              {
                title: "Locally Owned & Accountable",
                body: "We're not a franchise. We're a Latino-owned company operating in Bethesda. Your Airbnb reputation matters to us personally — every 5-star review reflects our work.",
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            How Airbnb Cleaning Works With Us
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Share your calendar",
                body: "We coordinate around your booking schedule across all platforms — Airbnb, VRBO, Booking.com, and direct bookings in Bethesda.",
              },
              {
                step: "2",
                title: "We arrive at checkout time",
                body: "Fast turnover anywhere in Bethesda — from Kenwood to Bradley Hills to Woodmont Triangle. Our background-checked team is punctual and prepared.",
              },
              {
                step: "3",
                title: "Hotel-standard clean",
                body: "Fresh linens, full sanitization, restock, and a final walkthrough inspection. Every surface, every time.",
              },
              {
                step: "4",
                title: "Ready for next guest",
                body: "You get confirmation. Your guest checks in to a 5-star clean. Protect your Bethesda Airbnb rating with every turnover.",
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

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Airbnb Turnover Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves Airbnb and vacation rental hosts across all Bethesda ZIP codes —
              20814, 20815, 20816, and 20817. From condos near the Bethesda Metro to single-family homes
              in Kenwood and Bradley Hills, we turn over short-term rental properties to hotel-grade
              standards between every guest.
            </p>
            <p>
              Bethesda attracts a high-quality guest demographic — travelers visiting NIH campus, National
              Naval Medical Center, and the Friendship Heights area expect spotless properties. Our
              background-checked, bonded team understands these expectations and delivers consistently,
              protecting your Airbnb Superhost status and guest ratings.
            </p>
            <p>
              Want ongoing support for your property? Pair turnover cleanings with a{" "}
              <Link to="/locations/bethesda-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              schedule or schedule a periodic{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              for a full property reset. Also serving hosts near{" "}
              <Link to="/locations/rockville-md/airbnb-cleaning" className="text-primary underline">
                Airbnb cleaning in Rockville
              </Link>{" "}
              and{" "}
              <Link to="/locations/chevy-chase-md/airbnb-cleaning" className="text-primary underline">
                Airbnb cleaning in Chevy Chase
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
            Airbnb Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Bethesda" serviceLabel="Airbnb Cleaning" defaultService="airbnb" zipLine="Serving Bethesda and nearby communities." />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaAirbnbCleaningPage;
