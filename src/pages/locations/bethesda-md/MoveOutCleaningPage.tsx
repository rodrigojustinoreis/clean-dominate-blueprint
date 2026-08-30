import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ClipboardCheck, KeyRound, ShieldCheck } from "lucide-react";
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

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/move-out-cleaning";
const HERO_IMAGE = "/images/services/move-out-cleaning.webp";
const verifiedReviews = [REAL_REVIEWS[6], REAL_REVIEWS[4], REAL_REVIEWS[2]];

const faqs = [
  {
    q: "How much does move out cleaning cost in Bethesda?",
    a: "Pricing depends on the home's size, condition, room count, appliance interiors, and deadline. Capital Clean Care provides a written quote before service; use the form below or call (240) 704-2551.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Bethesda?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Leave a key or use a lockbox.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Bethesda?",
    a: "Same-day or next-day appointments may be available, but they are not guaranteed. Contact us as early as possible to confirm a team and arrival window for ZIP codes 20814, 20815, 20816, or 20817.",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred — it allows our team to clean every surface without obstacles.",
  },
  {
    q: "Does your move out cleaning cover common landlord inspection items?",
    a: "Yes. Our checklist addresses commonly reviewed areas such as appliance interiors, cabinets, closets, baseboards, bathrooms, window tracks, and floors. Lease requirements vary, so share any property-manager checklist before service. Cleaning supports a smoother walkthrough but cannot guarantee a security-deposit decision.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current Bethesda home and a deep cleaning for their new one. Call (240) 704-2551 to bundle both.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Inside oven scrubbed",
      "Inside fridge cleaned",
      "Range hood degreased",
      "Inside all cabinets and drawers wiped",
      "Sink scrubbed",
      "Microwave cleaned inside and out",
      "Countertops and backsplash wiped",
      "Floor mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet scrubbed (base, tank, hinges)",
      "Inside vanity cleaned",
      "Grout and tile scrubbed",
      "Tub and shower deep cleaned",
      "Fixtures descaled",
      "Mirrors polished",
      "Floor mopped and sanitized",
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
      "Walls spot-cleaned",
      "Ceiling fans dusted",
      "Trash removed",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
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

const BethesdaMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning Bethesda MD | Checklist & Free Quote",
    description:
      "Move-out cleaning in Bethesda, MD for empty homes and apartments. Appliance interiors, cabinets, baseboards, bathrooms and floors. Get a written quote.",
    canonical: PAGE_URL,
    ogImage: `https://capitalcleancare.com${HERO_IMAGE}`,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "Move Out Cleaning", href: "/locations/bethesda-md/move-out-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Bethesda, MD",
          "Bethesda Row, Bethesda MD",
          "Kenwood, Bethesda MD",
          "Bradley Hills, Bethesda MD",
          "Montgomery County, MD",
        ]}
        reviews={verifiedReviews}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Bethesda, MD"
        description="Professional move-out cleaning for empty homes and apartments in Bethesda, MD. Detailed kitchens, bathrooms, cabinets, closets, baseboards, window tracks and floors."
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
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Move-Out Cleaning Services in Bethesda, MD"
        lead="Hand over a cleaner, inspection-ready home without spending moving day scrubbing it yourself. Our Bethesda move-out cleaning details appliance interiors, cabinets, closets, bathrooms, baseboards, window tracks and floors using a written room-by-room checklist."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage={HERO_IMAGE}
        heroImageAlt="Professional move-out cleaning in an empty Bethesda home with packed moving boxes"
        heroAspectRatio="16/9"
        heroImageWidth={1280}
        heroImageHeight={720}
        heroImageContainerClassName="max-w-[640px] mx-auto lg:ml-auto lg:mr-0"
        ctaPrimary="Request a Bethesda Move-Out Quote"
        teamTrustLabel="Background-Checked Team"
        ctaNote="No commitment · Written quote before service · 100% satisfaction guaranteed"
        updatedLabel="August 2026"
        updatedDateTime="2026-08-29"
      />

      {/* Direct answer block for local commercial intent and AI citation. */}
      <section className="border-y border-border bg-background py-10 md:py-12" aria-labelledby="bethesda-move-out-answer">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Bethesda service answer</p>
          <h2 id="bethesda-move-out-answer" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5">
            What Does Move-Out Cleaning in Bethesda Include?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Capital Clean Care's move-out cleaning in Bethesda is a detailed final cleaning for empty or nearly empty homes, condos and apartments before a lease handoff, sale or new occupancy. The service covers oven, refrigerator and microwave interiors; cabinet and drawer interiors; sinks, counters and backsplashes; showers, tubs, toilets, grout and vanities; plus closets, baseboards, doors, switches, window sills and tracks, and accessible floors throughout the property. Our bonded, insured and background-checked team brings the supplies and follows a written room-by-room checklist before the final quality check. Scope and price depend on size, condition, appliance interiors, access and deadline, so clients receive a written quote before service. We serve Bethesda ZIP codes 20814–20817, including Bethesda Row, Edgemoor, Kenwood and Bradley Hills. Pike &amp; Rose, White Flint and the Pike District are handled through our dedicated North Bethesda service page.
          </p>
        </div>
      </section>

      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl py-3 text-center text-sm">
          <span className="text-muted-foreground">Moving into another local home too?</span>{" "}
          <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary font-semibold underline">
            Pair it with a Bethesda move-in deep clean →
          </Link>
        </div>
      </div>

      {/* ── Checklist ─────────────────────────────────────── */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Bethesda"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="move-out-cleaning" serviceLabel="Move-Out Cleaning" count={3} reviewOverrides={verifiedReviews} showVideo={false} />

      {/* ── Why Deposit Depends on Cleaning ──────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why a Detailed Final Cleaning Matters
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            A move-out walkthrough often focuses on areas that routine maintenance misses: appliance
            interiors, cabinet shelves, grout lines, closet corners, baseboards and window tracks. Our
            service documents the agreed scope and follows a detailed checklist so these high-friction
            tasks are completed before the keys change hands. Cleaning can support a smoother inspection,
            but the landlord or property manager makes the final security-deposit decision under the lease.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Written Scope and Checklist",
                body: "We confirm the rooms, appliance interiors, add-ons and access details before the team starts, then complete a final quality check.",
              },
              {
                title: "Lease-Ready Detail Work",
                body: "Share any landlord or property-manager checklist before service so the quote can address property-specific requirements.",
              },
              {
                title: "100% Satisfaction Guarantee",
                body: "If an included cleaning item needs attention, contact us promptly and we will work to make it right under our service guarantee.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-5"
              >
                <CheckCircle className="h-5 w-5 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
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
            How Our Bethesda Move Out Cleaning Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Share the property and deadline",
                body: "Tell us the Bethesda ZIP code, home type, room count, condition, appliance interiors, access details and key-handoff date.",
              },
              {
                step: "2",
                title: "Approve the written quote",
                body: "We confirm the included rooms, requested add-ons and arrival window before service, so the moving-day scope is clear.",
              },
              {
                step: "3",
                title: "We clean the agreed scope",
                body: "Our insured, background-checked team brings the supplies and works through the kitchen, bathrooms, closets, details and floors on the written checklist.",
              },
              {
                step: "4",
                title: "Final quality check",
                body: "We review included areas before completion. If an included item needs attention, contact us promptly under our satisfaction guarantee.",
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

      {/* ── Move-out vs regular cleaning ─────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent">Choose the correct scope</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
              Move-Out Cleaning vs. Regular House Cleaning
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Move-out service is designed for a final handoff and reaches empty-storage areas and appliance interiors that are normally outside a maintenance visit.
            </p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-border bg-background shadow-sm">
            <table className="w-full min-w-[620px] text-sm">
              <thead>
                <tr className="bg-primary/5">
                  <th className="p-4 text-left font-semibold text-foreground">Area</th>
                  <th className="p-4 text-left font-semibold text-muted-foreground">Regular cleaning</th>
                  <th className="p-4 text-left font-semibold text-primary">Move-out cleaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Appliances", "Exterior surfaces", "Oven, refrigerator and microwave interiors"],
                  ["Cabinets and drawers", "Exterior fronts", "Accessible interiors and shelves"],
                  ["Closets", "Vacuum accessible floor", "Shelves, corners, doors and floor"],
                  ["Detail work", "Routine visible surfaces", "Baseboards, tracks, switches and door frames"],
                  ["Best timing", "Occupied home", "After belongings are removed and before key handoff"],
                ].map(([area, regular, moveOut]) => (
                  <tr key={area}>
                    <td className="p-4 font-medium text-foreground">{area}</td>
                    <td className="p-4 text-muted-foreground">{regular}</td>
                    <td className="p-4 text-foreground">{moveOut}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Booking readiness ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-7">
            What to Have Ready for an Accurate Bethesda Quote
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: KeyRound, title: "Handoff deadline", body: "Share the final walkthrough or key-return date and your preferred cleaning window." },
              { icon: ClipboardCheck, title: "Property checklist", body: "Send any lease, landlord or property-manager cleaning requirements before quoting." },
              { icon: ShieldCheck, title: "Access and condition", body: "Confirm parking, elevator or lockbox access, whether the home will be empty, and any heavy buildup." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <Icon className="mb-3 h-6 w-6 text-accent" aria-hidden="true" />
                <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Move Out Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's move out cleaning service covers all Bethesda ZIP codes — 20814,
              20815, 20816, and 20817. Whether you're vacating an apartment near the Bethesda Metro,
              a condo on Bethesda Row, or a house in Kenwood, we're ready to deliver a cleaning that
              addresses the agreed checklist before your final walkthrough or key handoff.
            </p>
            <p>
              Because every lease and property manager may define the handoff differently, clients can
              share a property-specific checklist before we quote. Our standard move-out scope addresses
              oven interiors, grout lines, cabinet and drawer interiors, baseboards, closets, and window
              tracks. We serve the NIH campus area, Bradley Hills, Edgemoor, and Friendship Heights.
            </p>
            <p>
              Also moving into a new property? Pair your Bethesda move out clean with a{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              for your new home. We also offer{" "}
              <Link to="/locations/bethesda-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              for ongoing maintenance. Need move out cleaning in a nearby city? Check our{" "}
              <Link to="/locations/rockville-md/move-out-cleaning" className="text-primary underline">
                move out cleaning in Rockville
              </Link>{" "}
              or{" "}
              <Link to="/locations/chevy-chase-md/move-out-cleaning" className="text-primary underline">
                move out cleaning in Chevy Chase
              </Link>
              .
            </p>
            <p>
              Moving from Pike &amp; Rose, White Flint, or the Pike District? Those neighborhoods are covered
              by our dedicated{" "}
              <Link to="/locations/north-bethesda-md/move-out-cleaning" className="text-primary underline">
                North Bethesda move-out cleaning service
              </Link>
              , helping residents reach the correct local page and quote route.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Bethesda" serviceLabel="Move-Out Cleaning" defaultService="move" zipLine="Serving Bethesda ZIP codes 20814–20817." />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaMoveOutCleaningPage;
