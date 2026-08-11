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
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { trustBlurbVariants, ctaProseVariants, ecoSafeVariants, satisfactionVariants, arriveStepVariants, pickVariant } from "@/data/template-variants";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/chevy-chase-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to Chevy Chase homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products to every Chevy Chase home. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Chevy Chase.",
  },
  {
    q: "How much does house cleaning cost in Chevy Chase, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds with no commitment required — use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you offer recurring cleaning in Chevy Chase?",
    a: "Yes — weekly, bi-weekly, and monthly plans are available at discounted recurring rates. Recurring clients in Chevy Chase get the same background-checked team every single visit.",
  },
  {
    q: "What areas of Chevy Chase do you serve?",
    a: "We serve Chevy Chase ZIP code 20815 — including Section 3, Section 4, Martin's Additions, Chevy Chase Village, and the Friendship Heights corridor.",
  },
  {
    q: "What is your cancellation policy for Chevy Chase clients?",
    a: "We ask for 24-hour notice for cancellations. No fees for first-time cancellations. We understand life happens — just let us know as early as possible.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Chevy Chase and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
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

const chevyChaseServices = [
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
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

const ChevyChaseHouseCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Chevy Chase, MD",
    description:
      "Professional house cleaning in Chevy Chase, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  const faqs = getServiceLocationOverride("chevy-chase-md", "house-cleaning")?.faqs ?? localFaqs;

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
          { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
          { label: "House Cleaning", href: "/locations/chevy-chase-md/house-cleaning" },
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
            name: "Sarah M.",
            text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="House Cleaning in Chevy Chase, MD"
        description="Professional, eco-friendly house cleaning in Chevy Chase, MD. Background-checked, bonded & insured team. EPA Safer Choice certified products. 100% satisfaction guaranteed."
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
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Professional House Cleaning in Chevy Chase, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Chevy Chase homes — from Section 3 to Martin's Additions. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Chevy Chase"
        state="MD"
        zipRange="20815"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Chevy Chase, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Chevy Chase"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Chevy Chase House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Chevy Chase" citySlug="chevy-chase-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Chevy Chase Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: trustBlurbVariants[pickVariant("chevy-chase-md", 3)]("Chevy Chase", "Montgomery County"),
              },
              {
                title: "Eco-Safe for Your Family",
                body: ecoSafeVariants[pickVariant("chevy-chase-md", 3, 4)]("Chevy Chase"),
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: satisfactionVariants[pickVariant("chevy-chase-md", 3, 5)]("Chevy Chase"),
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
                title: "Book online or call",
                body: "Get a free quote in 60 seconds — no commitment required. Same-day slots are often available throughout Chevy Chase (ZIP 20815). Call (240) 704-2551 or use the form below.",
              },
              {
                step: "2",
                title: "We arrive on time",
                body: arriveStepVariants[pickVariant("chevy-chase-md", 3, 6)]("Chevy Chase"),
              },
              {
                step: "3",
                title: "Thorough top-to-bottom clean",
                body: "We work through a consistent Chevy Chase house cleaning checklist — kitchen, bathrooms, bedrooms, living areas — so every room gets the same careful, corner-to-corner attention.",
              },
              {
                step: "4",
                title: "100% satisfaction guaranteed",
                body: satisfactionVariants[pickVariant("chevy-chase-md", 3, 7)]("Chevy Chase"),
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
            House Cleaning Throughout Chevy Chase, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all of Chevy Chase's ZIP code 20815 — from the quiet residential streets of
              Section 3 and Section 4 to the upscale Chevy Chase Village and the Connecticut Avenue corridor near
              Friendship Heights. Whether your home sits steps from the Chevy Chase Club or along the tree-lined
              avenues of Martin's Additions, our background-checked cleaning teams are ready to serve you on a
              schedule that fits your life.
            </p>
            <p>
              We regularly clean homes throughout Chevy Chase Lake, Somerset, and the neighborhoods adjoining
              Bethesda. Chevy Chase is one of Montgomery County's most desirable communities, and the residents here
              deserve a cleaning company that respects their time, their homes, and their families. That's why we
              offer flexible appointment windows — including weekday mornings, afternoons, and weekend slots —
              with same-day availability when the schedule permits.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we take genuine pride in serving the Chevy Chase
              community. Every team member completes background screening, eco-cleaning training, and a quality
              walk-through checklist before joining our crew. From your first cleaning to your hundredth, you'll
              receive the same meticulous standard — because we treat every home the way we'd want ours cleaned.
              We also offer{" "}
              <Link to="/locations/chevy-chase-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              plans for Chevy Chase households that want consistent, ongoing care.
            </p>
          </div>
        </div>
      </section>

      {/* ── Neighborhood Spotlight ──────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            House Cleaning by Chevy Chase Neighborhood
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            "Chevy Chase" is really a cluster of small, distinct municipalities along the DC line —
            each with its own housing stock and street pattern. We fit the visit to how each one is
            actually built.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Village of Chevy Chase (Section 5)",
                zip: "20815",
                body:
                  "One of the region's earliest planned communities, the Village and Section 5 are known for early-1900s Georgian, colonial, and Victorian homes on tree-lined lots near Chevy Chase Circle. They're larger houses with formal rooms, deep trim, and glass-front built-ins that reward patient, detailed dusting rather than a quick pass — our checklist gives the millwork, staircases, and multiple living areas the time they actually take.",
              },
              {
                name: "Martin's Additions",
                zip: "20815",
                body:
                  "A small tree-lined municipality off Brookville Road, Martin's Additions mixes 1920s bungalows with larger renovated homes on compact lots. With on-street parking and tighter driveways, we keep our kit compact and stage efficiently, and we adapt to homes that frequently pair original character with a modern rear addition or finished basement.",
              },
              {
                name: "Somerset",
                zip: "20815",
                body:
                  "Incorporated and walkable to Friendship Heights and the Metro, Somerset runs from older cottages to newer infill houses and nearby condominiums. For units near the high-rises we coordinate front-desk or elevator access first, then size the visit to the layout — a compact two-bedroom or a full single-family both get the same room-by-room attention.",
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

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Chevy Chase, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Chevy Chase"
        citySlug="chevy-chase-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={chevyChaseServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Chevy Chase" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Chevy Chase" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving Chevy Chase and nearby communities." ctaProse={ctaProseVariants[pickVariant("chevy-chase-md", 2, 3)]("Chevy Chase", "House Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default ChevyChaseHouseCleaningPage;
