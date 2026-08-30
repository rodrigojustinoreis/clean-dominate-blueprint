import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, CalendarDays, ClipboardCheck, Home, ShieldCheck } from "lucide-react";
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

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/recurring-cleaning";
const HERO_IMAGE = "/images/team/real-team-luxury-home.webp";
const verifiedReviews = [REAL_REVIEWS[3], REAL_REVIEWS[2], REAL_REVIEWS[0]];

const localFaqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Bethesda?",
    a: "Weekly service suits busy households, homes with children or pets, and spaces with heavy daily use. Biweekly service is a practical maintenance rhythm for many Bethesda households. We recommend the frequency after learning the home's size, condition, occupants, and priorities.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "We prioritize a consistent, background-checked team so your cleaners learn the home and your preferences. If staffing or scheduling requires a change, the replacement team receives the documented service notes.",
  },
  {
    q: "How much does recurring cleaning cost in Bethesda?",
    a: "The written quote depends on square footage, bedrooms and bathrooms, current condition, pets, visit frequency, and any requested extras. Request a free quote or call (240) 704-2551 for pricing specific to your Bethesda home.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes. Contact our team as early as possible to discuss a skip, pause, or schedule change. We confirm availability and any applicable policy before changing the visit.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "We use eco-conscious products and can discuss household sensitivities, children, and pets before the first visit. Tell us about any material-specific care requirements when requesting your quote.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to a recurring plan. Call (240) 704-2551 to discuss your options.",
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
      "Countertops and backsplash wiped",
      "Sink scrubbed and polished",
      "Appliance exteriors cleaned",
      "Microwave interior cleaned",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet sanitized",
      "Shower and tub scrubbed",
      "Sink and faucets polished",
      "Mirrors cleaned streak-free",
      "Floor mopped and sanitized",
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
      "All surfaces dusted",
      "Floors vacuumed and mopped",
      "Baseboards and window sills wiped",
    ],
  },
  {
    heading: "Rotation Add-Ons (Every Nth Visit)",
    items: [
      "Inside refrigerator",
      "Inside oven",
      "Inside cabinets",
      "Laundry (on request)",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const BethesdaRecurringCleaningPage = () => {
  const faqs = getServiceLocationOverride("bethesda-md", "recurring-cleaning")?.faqs ?? localFaqs;
  const { seoHelmet } = useSEO({
    title: "Recurring Cleaning Bethesda MD | Weekly & Biweekly",
    description:
      "Weekly and biweekly recurring cleaning in Bethesda, MD with background-checked teams, eco-conscious products and a written quote. Request yours today.",
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
          { label: "Recurring Cleaning", href: "/locations/bethesda-md/recurring-cleaning" },
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
        serviceName="Recurring House Cleaning in Bethesda, MD"
        description="Weekly and biweekly recurring house cleaning in Bethesda, Maryland, with documented preferences, background-checked teams, eco-conscious products, and written quotes."
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
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Recurring Cleaning in Bethesda, MD"
        lead="Keep your Bethesda home consistently cared for with weekly or biweekly visits built around its size, condition, and priorities. Our background-checked team documents your preferences, uses eco-conscious products, and provides a written quote before service begins."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage={HERO_IMAGE}
        heroImageAlt="Capital Clean Care team maintaining a residential home in Bethesda, Maryland"
        heroAspectRatio="4/3"
        preserveFullImage
        ctaPrimary="Request a Bethesda Recurring Quote"
        teamTrustLabel="Consistent Team & Documented Preferences"
        ctaNote="Free written quote · Licensed and insured · Satisfaction guarantee"
        updatedLabel="August 30, 2026"
        updatedDateTime="2026-08-30"
      />

      {/* ── Direct answer for search and AI systems ─────── */}
      <section className="py-10 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Quick answer</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Does Recurring Cleaning in Bethesda Include?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Recurring cleaning is scheduled home maintenance performed weekly, biweekly, or at an agreed interval. A typical Bethesda visit covers kitchens, bathrooms, bedrooms, living areas, dusting, vacuuming, and hard-floor care; the exact checklist is confirmed in writing for the home. The first appointment may require extra time when buildup must be brought to a maintainable baseline. After that, documented preferences and rotating detail tasks help keep results consistent. Capital Clean Care serves Bethesda ZIP codes 20814, 20815, 20816, and 20817, including Bethesda Row, Woodmont Triangle, Kenwood, Edgemoor, and Bradley Hills. A written quote considers the home's size, current condition, visit frequency, pets, and requested extras. North Bethesda addresses are confirmed separately because postal and neighborhood boundaries can differ.
            </p>
          </div>
        </div>
      </section>

      {/* ── Cross-link Banner ──────────────────────────────── */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl py-3 text-center text-sm">
          <span className="text-muted-foreground">Need a thorough reset before starting your routine?</span>{" "}
          <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary font-semibold underline">
            See Deep Cleaning in Bethesda →
          </Link>
        </div>
      </div>

      {/* ── Checklist ─────────────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Bethesda Recurring Clean"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="recurring-cleaning" serviceLabel="Recurring Cleaning" count={3} reviewOverrides={verifiedReviews} showVideo={false} />

      {/* ── Schedule Comparison ───────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Plan</th>
                  <th className="text-left p-4 font-semibold text-foreground">Best For</th>
                  <th className="text-left p-4 font-semibold text-foreground">Between Visits</th>
                  <th className="text-left p-4 font-semibold text-foreground">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  [
                    "Weekly",
                    "Busy Bethesda families, large homes, pets",
                    "Less time for dust and pet hair to accumulate",
                    "High-frequency maintenance",
                  ],
                  [
                    "Bi-Weekly",
                    "Most Bethesda households",
                    "More routine upkeep by the household",
                    "Balanced maintenance rhythm",
                  ],
                  [
                    "Monthly",
                    "Light maintenance, vacation homes",
                    "More buildup can develop between visits",
                    "Light professional maintenance",
                  ],
                ].map(([plan, best, disc, result]) => (
                  <tr key={plan} className="bg-background hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{plan}</td>
                    <td className="p-4 text-muted-foreground">{best}</td>
                    <td className="p-4 text-muted-foreground">{disc}</td>
                    <td className="p-4 text-muted-foreground">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why Recurring Is Better ───────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cumulative Cleanliness",
                body: "Regular maintenance prevents buildup. Your Bethesda home actually gets cleaner over time — dust, grime, and bacterial load decrease with each visit.",
              },
              {
                title: "Consistent, Documented Care",
                body: "We prioritize team consistency and record service preferences so the work remains clear even if scheduling requires a team change.",
              },
              {
                title: "A Quote Built for the Schedule",
                body: "Your written quote reflects the home's size, condition, frequency, pets, and requested extras rather than a generic online price.",
              },
              {
                title: "A Predictable Routine",
                body: "An agreed visit rhythm makes home care easier to plan around work, family, travel, and events in Bethesda.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-3 p-5 rounded-xl border border-border/50 bg-card"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote factors ────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            What Shapes a Bethesda Recurring Cleaning Quote?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            We quote the actual scope of work. These are the main variables we confirm before recommending a schedule.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: Home, title: "Home size and layout", body: "Square footage, bedrooms, bathrooms, stairs, and finished living areas." },
              { Icon: ClipboardCheck, title: "Starting condition", body: "Current buildup and whether an initial deep-clean baseline is appropriate." },
              { Icon: CalendarDays, title: "Visit frequency", body: "Weekly, biweekly, or another agreed rhythm and the time between visits." },
              { Icon: ShieldCheck, title: "Priorities and extras", body: "Pets, material sensitivities, rotating details, and requested add-on work." },
            ].map(({ Icon, title, body }) => (
              <article key={title} className="rounded-xl border border-border/60 bg-background p-5">
                <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Comparing options? Read our guide to{" "}
            <Link to="/resources/house-cleaning-prices-maryland-2026" className="text-primary font-semibold underline">
              Maryland house cleaning prices
            </Link>{" "}
            and request a written quote for your address.
          </p>
        </div>
      </section>

      {/* ── Getting Started ───────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Getting Started With Recurring Cleaning in Bethesda
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Deep baseline first",
                body: "We assess whether the home needs an initial deep-clean baseline or can begin with routine maintenance. The recommendation is documented in your quote.",
              },
              {
                step: "2",
                title: "Preferences documented",
                body: "We record access details, priorities, surface-care notes, and household preferences so the scope remains clear from visit to visit.",
              },
              {
                step: "3",
                title: "Set your schedule",
                body: "Choose a weekly, biweekly, or agreed maintenance rhythm. Contact the office early when travel, holidays, or other changes affect a visit.",
              },
              {
                step: "4",
                title: "Ongoing care, guaranteed",
                body: "Review the completed work and contact us promptly if something in the agreed checklist needs attention. Our satisfaction guarantee explains the next step.",
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
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Recurring Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's recurring cleaning service covers all Bethesda ZIP codes — 20814,
              20815, 20816, and 20817. Whether you're near Bethesda Metro, in the Woodmont Triangle
              neighborhood, or in the established residential streets of Kenwood, we deliver the same
              consistent, reliable clean on every scheduled visit.
            </p>
            <p>
              Bethesda families are busy. Between demanding careers, kids, and active social lives,
              cleaning falls to the bottom of the list. Our recurring service gives you back your
              weekends — the same trusted, background-checked team arrives at Bradley Hills, Edgemoor,
              and Friendship Heights properties on a schedule you set, with EPA Safer Choice™ products
              safe for every member of your household.
            </p>
            <p>
              Not sure which frequency is right for you? Try a{" "}
              <Link to="/locations/bethesda-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              or{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              first, then decide. We also offer recurring service to clients nearby with{" "}
              <Link to="/locations/rockville-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning in Rockville
              </Link>{" "}
              and{" "}
              <Link to="/locations/chevy-chase-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning in Chevy Chase
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Bethesda" serviceLabel="Recurring Cleaning" defaultService="recurring" zipLine="Serving Bethesda and nearby communities." ctaProse={ctaProseVariants[pickVariant("bethesda-md", 2, 3)]("Bethesda", "Recurring Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaRecurringCleaningPage;
