import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Star, ArrowRight, Camera } from "lucide-react";
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
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { pickReviews } from "@/data/realReviews";
import { satisfactionVariants, pickVariant } from "@/data/template-variants";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to Rockville homes?",
    a: "Yes. We supply all equipment and products, follow the product label for each surface, and record any sensitivities you tell us about before the visit. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Rockville or anywhere in Montgomery County.",
  },
  {
    q: "How much does house cleaning cost in Rockville, MD?",
    a: "Pricing depends on home size, bathrooms, frequency and condition. Request a free written quote with no commitment — use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you offer recurring cleaning in Rockville?",
    a: "Yes — weekly, bi-weekly, and monthly plans are available at discounted recurring rates. Recurring clients in Rockville get the same background-checked team whenever possible; if a regular team member is out, a fully trained team covers to the same checklist.",
  },
  {
    q: "What areas of Rockville do you serve?",
    a: "We serve all Rockville ZIP codes: 20850, 20851, 20852, and 20853 — including King Farm, Twinbrook, Fallsgrove, Woodley Gardens, and neighborhoods along Rockville Pike.",
  },
  {
    q: "What is your cancellation policy for Rockville clients?",
    a: "Let us know as early as possible; rescheduling and cancellation terms are confirmed with your booking. We understand life happens.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Rockville and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
  },
];

// Owner-provided photographs of a Capital Clean Care residential cleaning visit in Rockville on
// 2026-08-17 — the same set, alt text and captions already published on the Rockville hub and on the
// Rockville deep-cleaning page (two of the four). No new photos; no before/after, price or duration claims.
const ROCKVILLE_REAL_WORK_DATE = "2026-08-17";
const ROCKVILLE_REAL_WORK_DATE_LABEL = "August 17, 2026";
const rockvilleRealWorkPhotos = [
  {
    src480: "/images/locations/rockville-real-work/window-frame-cleaning-480.webp",
    src768: "/images/locations/rockville-real-work/window-frame-cleaning-768.webp",
    alt: "Capital Clean Care employee cleaning a window track and latch in a Rockville, Maryland home",
    caption: "Window track and latch cleaning",
  },
  {
    src480: "/images/locations/rockville-real-work/bathroom-fixture-detailing-480.webp",
    src768: "/images/locations/rockville-real-work/bathroom-fixture-detailing-768.webp",
    alt: "Capital Clean Care professional in uniform detailing the bathroom mirror and lighting area in a Rockville home",
    caption: "Bathroom mirror and lighting-area detail",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and backsplash wiped down",
      "Appliance exteriors cleaned (fridge, stove, dishwasher)",
      "Microwave interior cleaned",
      "Sink scrubbed and polished",
      "Floors swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet sanitized inside and out",
      "Tub and shower scrubbed",
      "Sink and faucets polished",
      "Mirrors cleaned streak-free",
      "Floors mopped and sanitized",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens changed if provided)",
      "Window sills wiped",
    ],
  },
  {
    heading: "Living Areas",
    items: [
      "All surfaces dusted (furniture, shelves, décor)",
      "Floors vacuumed and mopped",
      "Window sills and baseboards wiped",
      "Spot-clean visible marks on walls",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Light switches and door handles disinfected",
      "Baseboards dusted",
      "Trash emptied and relined",
    ],
  },
];

const rockvilleServices = [
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const RockvilleHouseCleaningPage = () => {
  const faqs = getServiceLocationOverride("rockville-md", "house-cleaning")?.faqs ?? localFaqs;
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Rockville, MD",
    description:
      "House cleaning in Rockville, MD (ZIPs 20850–20853): a written checklist, a background-checked, bonded & insured Latino-owned team, and a free written quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-bright-room.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "House Cleaning", href: "/locations/rockville-md/house-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Rockville, MD",
          "King Farm, Rockville MD",
          "Twinbrook, Rockville MD",
          "Fallsgrove, Rockville MD",
          "Montgomery County, MD",
        ]}
        reviews={pickReviews("rockville-md/house-cleaning")}
      />
      <ServiceSchema
        serviceName="House Cleaning in Rockville, MD"
        description="Professional house cleaning in Rockville, MD with a written checklist and a free written quote. Background-checked, bonded and insured team; re-clean guarantee."
        url={PAGE_URL}
        areaServed={["Rockville, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Rockville, MD", href: "/locations/rockville-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Professional House Cleaning in Rockville, MD"
        lead="Capital Clean Care brings professional house cleaning to Rockville homes — from King Farm to Twinbrook. A background-checked, bonded team works from a written checklist, follows the product label and material for each surface, records the sensitivities you tell us about before the visit, and backs every visit with our re-clean guarantee."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Rockville, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Request a Free Written Quote"
        teamTrustLabel="Background-Checked Team"
        ctaNote="No commitment · Date confirmed at booking · 100% satisfaction guaranteed"
        updatedLabel="September 2026"
        updatedDateTime="2026-09-09"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Rockville House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Rockville" citySlug="rockville-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

      {/* ── Documented work in Rockville (owner photographs already published on the hub and deep page) ── */}
      <section className="py-12 md:py-16 bg-muted/30" aria-labelledby="rockville-house-documented-work">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 mb-3">
            <Camera className="h-5 w-5 text-accent" aria-hidden="true" />
            <p className="text-sm font-semibold text-accent">Original photographs · Rockville, MD · <time dateTime={ROCKVILLE_REAL_WORK_DATE}>{ROCKVILLE_REAL_WORK_DATE_LABEL}</time></p>
          </div>
          <h2 id="rockville-house-documented-work" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Documented work in a Rockville home
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            These photographs are from a Capital Clean Care residential cleaning visit in Rockville on {ROCKVILLE_REAL_WORK_DATE_LABEL}.
            They show detail tasks — window tracks and latches, bathroom fixtures — that go beyond the standard checklist above.
            When you want that level of detail, ask for it in your quote or see our{" "}
            <Link to="/locations/rockville-md/deep-cleaning" className="text-primary font-medium underline">Rockville deep cleaning</Link>.
            The full photo record of that visit is on our{" "}
            <Link to="/locations/rockville-md" className="text-primary font-medium underline">Rockville page</Link>.
          </p>
          <div className="grid grid-cols-2 gap-3 sm:max-w-md" aria-label="Documented Capital Clean Care work completed in Rockville">
            {rockvilleRealWorkPhotos.map((photo) => (
              <figure key={photo.src480} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <img
                  src={photo.src480}
                  srcSet={`${photo.src480} 480w, ${photo.src768} 768w`}
                  sizes="(max-width: 639px) 46vw, 220px"
                  alt={photo.alt}
                  width="480"
                  height="640"
                  className="aspect-[4/3] w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-3 py-2 text-xs leading-snug text-muted-foreground">{photo.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Rockville Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: "We're not a franchise — we're a Latino-owned Montgomery County company, and our reputation in Rockville is built one clean at a time. Every cleaner is background-checked, bonded and insured.",
              },
              {
                title: "Products Chosen for Your Home",
                body: "We offer product-conscious, lower-odor options and follow the product label for each surface. Tell us about pets, children, allergies or fragrance sensitivities so we can record the right preferences and precautions before the visit.",
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: satisfactionVariants[pickVariant("rockville-md", 3, 5)]("Rockville"),
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
            How It Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Request a written quote",
                body: "Tell us your ZIP (20850–20853), home size, bathrooms and what you need — online or at (240) 704-2551. We send a written quote and confirm the date and details before the visit. No commitment.",
              },
              {
                step: "2",
                title: "We arrive on the confirmed date",
                body: "A vetted, bonded and insured crew arrives on the confirmed date with its own supplies and equipment. Product choices follow the label and material of each surface, and the sensitivities you told us about are already on the checklist.",
              },
              {
                step: "3",
                title: "Thorough top-to-bottom clean",
                body: "We work through the same detailed Rockville checklist on every visit — kitchen, bathrooms, bedrooms, and living areas — so nothing gets skipped and your home looks consistent clean after clean.",
              },
              {
                step: "4",
                title: "100% satisfaction guaranteed",
                body: satisfactionVariants[pickVariant("rockville-md", 3, 7)]("Rockville"),
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
            House Cleaning Throughout Rockville, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all of Rockville's ZIP codes — 20850, 20851, 20852, and 20853.
              Whether your home sits near the Rockville Metro station, in the master-planned community of
              King Farm, along the Rockville Pike corridor, or in the quiet streets of Woodley Gardens,
              our background-checked cleaning teams are familiar with the neighborhoods and ready to serve you
              on a schedule that fits your life.
            </p>
            <p>
              We serve Twinbrook, Fallsgrove, Congressional, and the Town Center area as well. Rockville is
              one of Montgomery County's most vibrant and diverse cities — and the residents here deserve a
              cleaning company that respects their time, their homes, and their families. Appointment windows
              and your first date are confirmed with your written quote, so you know when to expect us
              before we arrive.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we take genuine pride in serving the Rockville
              community. Every team member is background-screened before joining our crew and works from the
              same written checklist and final walk-through. From your first cleaning onward, the standard is
              the checklist, not a guess — because we treat every Rockville home the way we'd want ours cleaned.
            </p>
          </div>
        </div>
      </section>

      {/* ── Neighborhood Spotlight ──────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            House Cleaning by Rockville Neighborhood
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Every Rockville neighborhood has its own rhythm — from the master-planned streets of King Farm
            to the mid-century blocks of Twinbrook. Our crews know the difference, and we tailor our visit
            to fit how each community actually lives.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "King Farm",
                zip: "20850",
                body:
                  "For a King Farm townhome or single-family home near Pleasant Drive, tell us how many levels and bathrooms need attention, along with parking or HOA access requirements.",
              },
              {
                name: "Twinbrook",
                zip: "20851",
                body:
                  "Twinbrook's mid-century brick ranches and split-levels often keep original hardwood, plaster walls and tile bathrooms. We follow the material and product label for each surface and note any finish you want handled with extra care — just tell us when you book.",
              },
              {
                name: "Fallsgrove",
                zip: "20850",
                body:
                  "Fallsgrove homes near Shady Grove Road tend to be larger, with formal dining, multiple bathrooms and finished basements. Team size and visit length are set in your written quote from square footage, bathrooms and the areas you want covered, so the checklist scales with the home.",
              },
            ].map((n) => (
              <div
                key={n.name}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-baseline gap-2 mb-3">
                  <h3 className="font-heading font-bold text-foreground">{n.name}</h3>
                  <span className="text-xs text-muted-foreground">ZIP {n.zip}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{n.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing guidance (no standalone table: ranges live in the cost guide; quotes are written) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            House Cleaning Pricing in Rockville, MD
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl">
            Pricing depends on home size, number of bathrooms, frequency and current condition. Planning ranges for
            Rockville are published in our{" "}
            <Link to="/resources/house-cleaning-cost-rockville-md" className="text-primary font-medium underline">Rockville house cleaning cost guide</Link>;
            your written quote is based on your own home, not on an average. Request it below or call (240) 704-2551 — no commitment.
          </p>
          <div className="p-5 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Recurring plans in Rockville:</strong> weekly, bi-weekly and monthly visits are
                discounted off the one-time rate (25%, 15% and 5% — the same base our price calculator uses). See{" "}
                <Link to="/locations/rockville-md/recurring-cleaning" className="text-primary font-medium underline">recurring cleaning in Rockville</Link>.
                A first-visit reset is quoted as a{" "}
                <Link to="/locations/rockville-md/deep-cleaning" className="text-primary font-medium underline">deep cleaning</Link>, and an empty
                home at the end of a lease as a{" "}
                <Link to="/locations/rockville-md/move-out-cleaning" className="text-primary font-medium underline">move-out cleaning</Link>; each has its own written scope.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
          {/* Contextual links into the specialty service pages from this high-authority page (they had few inbound links). */}
          <p className="mt-8 text-sm text-muted-foreground">
            Need something more specific than a standard clean? Rockville homes can also book{" "}
            <Link to="/services/kitchen-cleaning" className="text-accent underline hover:no-underline">kitchen cleaning</Link>,{" "}
            <Link to="/services/bathroom-cleaning" className="text-accent underline hover:no-underline">bathroom cleaning</Link>,{" "}
            <Link to="/services/living-area-cleaning" className="text-accent underline hover:no-underline">living area cleaning</Link>,{" "}
            <Link to="/services/condo-cleaning" className="text-accent underline hover:no-underline">condo &amp; apartment cleaning</Link>,{" "}
            <Link to="/services/maid-service" className="text-accent underline hover:no-underline">maid service</Link>, or{" "}
            <Link to="/services/office-cleaning" className="text-accent underline hover:no-underline">office cleaning</Link>.
          </p>
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Rockville" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Rockville" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving Rockville across ZIPs 20850, 20851, 20852, and 20853." ctaProse="Tell us about your Rockville home and we'll send a clear, no-obligation house cleaning quote, with your date confirmed before the visit." availabilityNote="Your date is confirmed at booking." trustLine="Date confirmed at booking · 100% satisfaction guaranteed · Bonded & Insured" />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvilleHouseCleaningPage;
