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

const PAGE_URL = "https://capitalcleancare.com/locations/potomac-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Potomac Airbnb?",
    a: "Most 1–2 bedroom Potomac properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice anywhere in ZIP 20854 or 20859.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb calendar and we schedule around each checkout automatically. No need to call us before every booking.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Potomac?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No contracts required.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We document with photos and charge only for the additional time required. You'll always know what was found and what was done.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, and direct bookings. If guests are staying at your Potomac property, we can handle the turnovers.",
  },
  {
    q: "Do you know Airbnb standards in Potomac?",
    a: "Yes. We work with multiple short-term rental hosts across Potomac (20854–20859), Glen Echo, and the broader Montgomery County area.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Potomac and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Between Every Guest",
    items: [
      "Strip and remake beds with fresh linens",
      "Replace towels",
      "Sanitize all bathroom surfaces",
      "Clean kitchen (dishes, surfaces, trash)",
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
      "Pre-check-in inspection report",
    ],
  },
];

const potomacServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const PotomacAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Potomac, MD — Fast Turnovers, 5-Star Results",
    description:
      "Airbnb & short-term rental cleaning in Potomac, MD. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote.",
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
          { label: "Potomac, MD", href: "/locations/potomac-md" },
          { label: "Airbnb Cleaning", href: "/locations/potomac-md/airbnb-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Potomac, MD",
          "Glen Echo, MD",
          "River Falls, Potomac MD",
          "Avenel, Potomac MD",
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
        serviceName="Airbnb Cleaning in Potomac, MD"
        description="Professional Airbnb and short-term rental cleaning in Potomac, MD. Hotel-standard turnovers, flexible scheduling, same-day availability. Latino-owned, bonded & insured."
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
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Potomac, MD"
        lead="Protect your Potomac Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from Glen Echo to C&O Canal National Historical Park. Flexible scheduling, same-day turnovers available, 100% satisfaction guaranteed."
        cityName="Potomac"
        state="MD"
        zipRange="20854"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning in Potomac, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Potomac"
      />

      {/* ── Turnover Checklist ────────────────────────────── */}
      <ServiceChecklistLocation
        title="Our Potomac Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* ── Why Hosts Choose Us ───────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Potomac Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rating Protection",
                body: "Consistent, bonded team means guests find your Potomac property exactly as listed, every time. 100% satisfaction guaranteed: we re-clean if anything falls short before your next check-in.",
              },
              {
                title: "Flexible Scheduling",
                body: "We work around your checkout and check-in window across Potomac's 20854 and 20859 ZIP codes. Same-day turnovers available. Share your Airbnb calendar and we coordinate automatically.",
              },
              {
                title: "Locally Owned & Accountable",
                body: "We're not a franchise. We're Latino-owned and operate in Potomac. Your Airbnb reputation matters to us personally — and we're reachable when you need us.",
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
                body: "We coordinate around your booking schedule. Provide access to your Airbnb calendar and we schedule each turnover automatically.",
              },
              {
                step: "2",
                title: "We arrive at checkout time",
                body: "Fast turnover anywhere in Potomac — from River Falls to Avenel. Our background-checked team arrives on time, every time.",
              },
              {
                step: "3",
                title: "Hotel-standard clean",
                body: "Fresh linens, sanitized surfaces, restocked essentials, and a full inspection. We treat your Potomac property the way a 5-star hotel would.",
              },
              {
                step: "4",
                title: "Ready for your next guest",
                body: "You get confirmation when we're done. Your guests check in to a spotless, 5-star property — and your rating stays protected.",
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
              Potomac Hosts Trust Capital Clean Care
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
                "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. The detail is incredible."
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
                Serving Potomac short-term rental hosts near Potomac Village and across
                ZIP codes 20854 and 20859.
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
            Airbnb Cleaning Throughout Potomac, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Potomac's proximity to Washington D.C., the Great Falls area, and the C&O Canal
              National Historical Park makes it a desirable destination for short-term rental guests.
              Capital Clean Care supports Airbnb, VRBO, and vacation rental hosts throughout
              ZIP codes 20854 and 20859 with professional, hotel-standard turnover cleanings.
            </p>
            <p>
              Whether your rental is a modern home in River Falls, a cozy property in Cabin John,
              or a spacious estate in Avenel, our background-checked team delivers the same
              meticulous standard between every guest. We know what Potomac guests expect — and we
              make sure your property delivers it every time.
            </p>
            <p>
              For hosts managing multiple properties or looking to establish a long-term cleaning
              partnership, consider pairing your turnover service with our{" "}
              <Link to="/locations/potomac-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              plan, or scheduling periodic{" "}
              <Link to="/locations/potomac-md/deep-cleaning" className="text-primary underline">
                deep cleanings
              </Link>{" "}
              between busy seasons. Call (240) 704-2551 to set up your Potomac Airbnb cleaning schedule.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Airbnb Cleaning FAQ — Potomac, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Potomac"
        citySlug="potomac-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
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
            Set Up Automatic Airbnb Turnovers in Potomac
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Potomac short-term rentals near Potomac Village and across ZIPs 20854
            and 20859. Get a free quote in 60 seconds — or call (240) 704-2551 to talk through
            your cleaning schedule. Flexible scheduling · Same-day turnovers available.
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

export default PotomacAirbnbCleaningPage;
