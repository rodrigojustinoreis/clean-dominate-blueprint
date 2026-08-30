import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ClipboardCheck, HardHat, Ruler, Sparkles } from "lucide-react";
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
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { ctaProseVariants, pickVariant } from "@/data/template-variants";
import { REAL_REVIEWS } from "@/data/realReviews";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/post-construction-cleaning";
const HERO_IMAGE = "/images/locations/post-construction-authentic/post-construction-team-landscape-v3.webp";
const verifiedReviews = [REAL_REVIEWS[6], REAL_REVIEWS[1], REAL_REVIEWS[2]];

const localFaqs = [
  {
    q: "How much does post-construction cleaning cost in Bethesda?",
    a: "The written quote depends on square footage, project phase, dust level, surfaces, access, windows, fixtures, and the requested handoff standard. Photos or a walkthrough help us define the scope before scheduling.",
  },
  {
    q: "How do you control fine construction dust?",
    a: "We use detailed top-to-bottom dust removal, appropriate filtered vacuuming, microfiber wiping, and repeat passes based on the agreed scope. Active construction, hazardous dust, and regulated remediation require the appropriate licensed trade and are not represented as ordinary cleaning.",
  },
  {
    q: "How soon after construction can you come to Bethesda?",
    a: "The site should be safe, utilities available, contractor work substantially complete, and trades' debris removed. Send the address, completion date, photos, and desired handoff date so we can confirm availability.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Bethesda?",
    a: "Yes — residential and light commercial. Contact us at (240) 704-2551 for custom quotes on larger projects near NIH campus or Bethesda Row.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Capital Clean Care is licensed and insured, and team members are background-checked. We confirm the proposed scope and site conditions before accepting the project.",
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
      "Confirm contractor work is substantially complete",
      "Collect light, loose surface debris within the agreed scope",
      "Initial filtered vacuum and dust-removal pass",
    ],
  },
  {
    heading: "Phase 2 — Detail Clean",
    items: [
      "Filtered vacuuming and top-to-bottom dust removal",
      "Wipe cleanable surfaces using material-appropriate methods",
      "Clean inside all cabinets and drawers",
      "Address removable paint specks and adhesive residue where surface-safe",
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
      "Walk through the agreed checklist and document completion",
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
    ogImage: `https://capitalcleancare.com${HERO_IMAGE}`,
  });

  const faqs = getServiceLocationOverride("bethesda-md", "post-construction-cleaning")?.faqs ?? localFaqs;

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
        reviews={verifiedReviews}
      />
      <ServiceSchema
        serviceName="Post-Construction Cleaning in Bethesda, MD"
        description="Professional post-construction cleaning in Bethesda, Maryland, with phased dust removal, detailed surface cleaning, written scopes, and final checklist review."
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
        lead="Turn a completed renovation into a clean, presentation-ready space. Capital Clean Care defines the scope in writing, performs phased dust and detail cleaning, and reviews the agreed checklist for Bethesda homeowners, contractors, and property managers."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage={HERO_IMAGE}
        heroImageAlt="Full Capital Clean Care team serving post-construction cleaning projects in Bethesda, Maryland"
        heroAspectRatio="16/9"
        heroImageWidth={1400}
        heroImageHeight={788}
        ctaPrimary="Request a Bethesda Project Quote"
        teamTrustLabel="Background-Checked Project Team"
        ctaNote="Written scope · Licensed and insured · Residential and light commercial"
        updatedLabel="August 30, 2026"
        updatedDateTime="2026-08-30"
      />

      {/* ── Direct answer for Google and AI systems ─────── */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Quick answer</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Is Included in Post-Construction Cleaning in Bethesda?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Post-construction cleaning begins after active trade work is substantially complete and contractor debris has been removed. The service focuses on fine dust, cabinets and drawers, baseboards, doors and frames, fixtures, bathrooms, appliance exteriors, floors, window interiors and tracks when included, plus repeat detail passes before handoff. The final checklist depends on the renovation, surfaces, access, and whether the project is residential or light commercial. Capital Clean Care serves Bethesda ZIP codes 20814, 20815, 20816, and 20817. We request photos or a walkthrough, define inclusions and exclusions in writing, and confirm the site is safe and ready before scheduling. Hazardous-material cleanup, regulated remediation, and removal of heavy construction debris require the appropriate specialty contractor and are outside a standard cleaning scope.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3-Phase Checklist ─────────────────────────────── */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Bethesda"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="post-construction-cleaning" serviceLabel="Post-Construction Cleaning" count={3} reviewOverrides={verifiedReviews} showVideo={false} />

      {/* ── Why Specialist ────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Bethesda
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Renovation dust settles beyond the visible floor: cabinet interiors, trim, doors, fixtures,
            window tracks, and other horizontal surfaces often require multiple passes. A successful handoff
            starts with a safe, substantially completed site and a written scope that distinguishes ordinary
            cleaning from trade work, heavy debris removal, and regulated remediation.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Filtered Dust Removal",
                body: "Appropriate filtered vacuuming, microfiber wiping, and repeat passes help remove fine settled dust without making unsupported remediation claims.",
              },
              {
                title: "Paint & Adhesive Removal",
                body: "We assess paint specks, caulk, and adhesive residue before using a method that could affect finished floors, windows, or fixtures.",
              },
              {
                title: "Details Defined in Writing",
                body: "Cabinet interiors, windows, tracks, registers, appliances, and other details are listed when included so the handoff expectation is clear.",
              },
              {
                title: "Move-In Ready Verification",
                body: "The team reviews the agreed checklist and identifies any access limitation, trade residue, or item requiring a specialist before completion.",
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

      {/* ── Authentic equipment proof ───────────────────── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] items-center gap-7 rounded-2xl border border-border/60 bg-background p-4 md:p-6 shadow-sm">
            <figure className="overflow-hidden rounded-xl bg-muted">
              <img
                src="/images/locations/post-construction-authentic/professional-floor-care-equipment-v2.webp"
                alt="Capital Clean Care professional using powered floor-care equipment on hardwood flooring"
                className="aspect-[3/4] h-full w-full object-cover object-center"
                loading="lazy"
                width={1050}
                height={1400}
              />
            </figure>
            <div className="px-1 md:px-2">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Real team. Professional equipment.</p>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
                Surface-Appropriate Floor Detailing
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                After fine dust is removed, the finishing method is selected for the installed surface and the written project scope. Powered floor-care equipment may be used where appropriate, followed by an inspection of edges, transitions, and remaining residue.
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                Equipment and products vary by flooring manufacturer, finish, condition, and access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quote preparation ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            What We Need to Quote Your Bethesda Project
          </h2>
          <p className="text-muted-foreground mb-8">
            Clear project information prevents surprises and helps us schedule the right team and time window.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: Ruler, title: "Size and rooms", body: "Approximate square footage, room count, stairs, windows, and finished areas." },
              { Icon: HardHat, title: "Project status", body: "Trade completion date, remaining punch-list work, utilities, and safe site access." },
              { Icon: Sparkles, title: "Desired handoff", body: "The surfaces and details required before move-in, listing, turnover, or owner walkthrough." },
              { Icon: ClipboardCheck, title: "Photos or walkthrough", body: "Current photos help identify dust load, residue, access limits, and specialty items." },
            ].map(({ Icon, title, body }) => (
              <article key={title} className="rounded-xl border border-border/60 bg-background p-5">
                <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Planning a renovation handoff? See our{" "}
            <Link to="/resources/post-renovation-cleaning-guide-maryland" className="text-primary font-semibold underline">
              Maryland post-renovation cleaning guide
            </Link>.
          </p>
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
                body: "Kitchen, bathroom, and whole-home renovations can leave fine dust across trim, cabinets, fixtures, and floors after the trades finish.",
              },
              {
                title: "General Contractors",
                body: "A written checklist helps contractors coordinate the cleaning phase before the owner or client handoff.",
              },
              {
                title: "Real Estate Investors",
                body: "Investors can define the cleaning scope needed before photography, listing, leasing, or the final walkthrough.",
              },
              {
                title: "Developers",
                body: "Developers and project managers can coordinate residential or light-commercial final cleaning around the construction schedule.",
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
              remodels in Bradley Hills and full-home renovations near Bethesda Row, our team follows
              the written scope and documents the final checklist before handoff.
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
      <LocationQuoteSection cityName="Bethesda" serviceLabel="Post-Construction Cleaning" defaultService="post-construction" zipLine="Serving Bethesda and nearby communities." ctaProse={ctaProseVariants[pickVariant("bethesda-md", 2, 3)]("Bethesda", "Post-Construction Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaPostConstructionCleaningPage;
