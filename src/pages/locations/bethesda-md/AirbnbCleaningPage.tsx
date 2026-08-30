import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, CalendarClock, Camera, KeyRound, PackageCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import StickyMobileCTA from "@/components/StickyMobileCTA";
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
import { REAL_REVIEWS } from "@/data/realReviews";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/airbnb-cleaning";
const HERO_IMAGE = "/images/locations/bethesda-service-heroes/airbnb-cleaning-hero.webp";
const verifiedReviews = [REAL_REVIEWS[5], REAL_REVIEWS[4], REAL_REVIEWS[2]];

const faqs = [
  {
    q: "How quickly can you turn over my Bethesda Airbnb?",
    a: "Turnover time depends on property size, laundry, starting condition, restocking, and the gap between checkout and check-in. We confirm a realistic service window for the property instead of promising one duration for every rental.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "We can coordinate an agreed turnover schedule using the booking information you provide. Calendar access, confirmation steps, and change-notice procedures are documented during onboarding.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Bethesda?",
    a: "Pricing depends on bedrooms, bathrooms, square footage, laundry, restocking, access, turnover frequency, and the time between guests. We provide a written quote after reviewing the property and checklist.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "The team follows the agreed escalation process, documents conditions when authorized, and contacts the host before work outside the standard checklist. Any additional time or scope is confirmed according to the service agreement.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Yes. The cleaning workflow can support Airbnb, Vrbo, Booking.com, and direct-booked short-term rentals when the property, schedule, and access requirements fit our service area.",
  },
  {
    q: "Do you know Airbnb standards in Bethesda?",
    a: "Our turnover checklist focuses on guest-ready presentation, bathrooms, kitchens, floors, linens when included, restocking when supplied, and host-approved issue reporting. The exact standard is documented for each property.",
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
    title: "Airbnb Cleaning Bethesda MD | Turnovers",
    description:
      "Airbnb and short-term rental turnover cleaning in Bethesda, MD with written checklists, linen and restock options, issue reporting and flexible scheduling.",
    canonical: PAGE_URL,
    ogImage: `https://capitalcleancare.com${HERO_IMAGE}`,
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href={HERO_IMAGE} />
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
        reviews={verifiedReviews}
      />
      <ServiceSchema
        serviceName="Airbnb & Short-Term Rental Cleaning in Bethesda, MD"
        description="Airbnb and short-term rental turnover cleaning in Bethesda, Maryland, with property-specific checklists, linen and restock options, issue reporting, and scheduled handoffs."
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
        lead="Give each guest a clean, consistent arrival with a turnover plan built for your Bethesda rental. We document the checklist, access, linens, restocking, reporting, and check-in deadline before the first scheduled service."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage={HERO_IMAGE}
        heroImageAlt="Capital Clean Care team member preparing a bed during a Bethesda short-term rental turnover"
        heroAspectRatio="16/10"
        heroImageWidth={1600}
        heroImageHeight={900}
        heroImageContainerClassName="lg:min-h-[500px]"
        ctaPrimary="Request a Bethesda Turnover Quote"
        teamTrustLabel="Checklist-Trained Turnover Team"
        ctaNote="Written workflow · Licensed and insured · Airbnb, Vrbo and direct bookings"
        updatedLabel="August 30, 2026"
        updatedDateTime="2026-08-30"
      />

      {/* ── Direct answer for search and AI systems ─────── */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Quick answer</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Does Airbnb Turnover Cleaning in Bethesda Include?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Airbnb turnover cleaning prepares a short-term rental between checkout and the next guest's arrival. A property-specific checklist commonly covers bathrooms, kitchen surfaces, trash, dusting, floors, beds and towels when linens are included, supplied-amenity restocking, and a final presentation check. Capital Clean Care can also follow host-approved procedures for access, issue photos, damaged or missing items, extra-soil escalation, and completion confirmation. We serve qualifying short-term rentals in Bethesda ZIP codes 20814, 20815, 20816, and 20817. The written quote depends on property size, laundry, restocking, turnover frequency, starting condition, parking or access, and the available check-in window. Periodic deep resets are scoped separately from the standard between-guest turnover.
            </p>
          </div>
        </div>
      </section>

      {/* ── Checklist ─────────────────────────────────────── */}
      <ServiceChecklistLocation
        title="Our Bethesda Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="airbnb-cleaning" serviceLabel="Airbnb Cleaning" count={3} reviewOverrides={verifiedReviews} showVideo={false} />

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
                body: "A written property checklist makes the expected presentation, linens, amenities, and final checks clear for each turnover.",
              },
              {
                title: "Flexible Scheduling",
                body: "We confirm checkout, access, laundry, and check-in deadlines before accepting the turnover window; availability varies by date and scope.",
              },
              {
                title: "Locally Owned & Accountable",
                body: "A locally operated team and documented escalation process give hosts a clear point of contact when the property needs attention.",
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

      {/* ── Host onboarding details ──────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Four Details We Confirm Before the First Turnover
          </h2>
          <p className="text-muted-foreground mb-8">
            Reliable short-term-rental cleaning starts with an operating plan, not a generic house-cleaning checklist.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: KeyRound, title: "Access and security", body: "Entry instructions, alarm procedure, parking, keys, and who to contact if access fails." },
              { Icon: CalendarClock, title: "Turnover window", body: "Checkout, check-in, laundry time, calendar changes, and the minimum notice for schedule updates." },
              { Icon: PackageCheck, title: "Linens and supplies", body: "Where clean sets and amenities are stored, what we restock, and how shortages are reported." },
              { Icon: Camera, title: "Issue reporting", body: "Host-approved photo rules and escalation for damage, missing items, excessive soil, or maintenance concerns." },
            ].map(({ Icon, title, body }) => (
              <article key={title} className="rounded-xl border border-border/60 bg-background p-5">
                <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Estimate the operating impact with our guide to{" "}
            <Link to="/resources/airbnb-cleaning-fee" className="text-primary font-semibold underline">
              short-term rental cleaning fees
            </Link>.
          </p>
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
                body: "You provide the approved booking schedule or calendar workflow, along with the notice and confirmation process for changes.",
              },
              {
                step: "2",
                title: "We confirm the service window",
                body: "The team works within the accepted access and handoff window, based on property size, laundry, restocking, and starting condition.",
              },
              {
                step: "3",
                title: "We follow the property checklist",
                body: "Cleaning, linens, restocking, staging, and issue reporting follow the items approved during onboarding.",
              },
              {
                step: "4",
                title: "You receive completion confirmation",
                body: "The agreed confirmation closes the turnover and flags anything requiring the host, maintenance team, or additional authorization.",
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
              in Kenwood and Bradley Hills, we follow a property-specific turnover checklist between guests.
            </p>
            <p>
              Bethesda attracts a high-quality guest demographic — travelers visiting NIH campus, National
              Naval Medical Center, and the Friendship Heights area expect spotless properties. Our
              background-checked team focuses on clean presentation and timely reporting without making
              guarantees about platform ratings or host status.
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
