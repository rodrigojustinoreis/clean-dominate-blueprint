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
import { trustBlurbVariants, ctaProseVariants, pickVariant, ecoSafeVariants, satisfactionVariants, arriveStepVariants } from "@/data/template-variants";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/potomac-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to Potomac homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products to every Potomac home. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Potomac or anywhere in Montgomery County.",
  },
  {
    q: "How much does house cleaning cost in Potomac, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds with no commitment required — use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you offer recurring cleaning in Potomac?",
    a: "Yes — weekly, bi-weekly, and monthly plans are available at discounted recurring rates. Recurring clients in Potomac get the same background-checked team every single visit.",
  },
  {
    q: "What areas of Potomac do you serve?",
    a: "We serve Potomac ZIP codes 20854 and 20859 — including Avenel, Cabin John, Glen Echo, River Falls, and neighborhoods along the River Road corridor.",
  },
  {
    q: "What is your cancellation policy for Potomac clients?",
    a: "We ask for 24-hour notice for cancellations. No fees for first-time cancellations. We understand life happens — just let us know as early as possible.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Potomac and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
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

const potomacServices = [
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
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

const PotomacHouseCleaningPage = () => {
  const faqs = getServiceLocationOverride("potomac-md", "house-cleaning")?.faqs ?? localFaqs;
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Potomac, MD",
    description:
      "Professional house cleaning in Potomac, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
          { label: "Potomac, MD", href: "/locations/potomac-md" },
          { label: "House Cleaning", href: "/locations/potomac-md/house-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Potomac, MD",
          "Avenel, Potomac MD",
          "Cabin John, Potomac MD",
          "Glen Echo, MD",
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
        serviceName="House Cleaning in Potomac, MD"
        description="Professional, eco-friendly house cleaning in Potomac, MD. Background-checked, bonded & insured team. EPA Safer Choice certified products. 100% satisfaction guaranteed."
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
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Professional House Cleaning in Potomac, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Potomac homes — from Avenel to Glen Echo and the River Road corridor. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Potomac"
        state="MD"
        zipRange="20854"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Potomac, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Potomac"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Potomac House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Potomac" citySlug="potomac-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Potomac Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: trustBlurbVariants[pickVariant("potomac-md", 3)]("Potomac", "Montgomery County"),
              },
              {
                title: "Eco-Safe for Your Family",
                body: ecoSafeVariants[pickVariant("potomac-md", 3, 4)]("Potomac"),
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: satisfactionVariants[pickVariant("potomac-md", 3, 5)]("Potomac"),
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
                body: "Get a free quote in 60 seconds — no commitment required. Same-day slots are often available throughout Potomac (ZIP 20854). Call (240) 704-2551 or use the form below.",
              },
              {
                step: "2",
                title: "We arrive on time",
                body: arriveStepVariants[pickVariant("potomac-md", 3, 6)]("Potomac"),
              },
              {
                step: "3",
                title: "Thorough top-to-bottom clean",
                body: "We work through the same detailed Potomac checklist each visit — kitchen, bathrooms, bedrooms, and living areas — so every room gets the same careful attention, start to finish.",
              },
              {
                step: "4",
                title: "100% satisfaction guaranteed",
                body: satisfactionVariants[pickVariant("potomac-md", 3, 7)]("Potomac"),
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
            House Cleaning Throughout Potomac, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all of Potomac's primary ZIP codes — 20854 and 20859.
              Whether your home sits in the upscale Avenel community, along the River Road corridor,
              in the charming Cabin John neighborhood, or near Potomac Village shopping, our
              background-checked cleaning teams are familiar with the area and ready to serve you
              on a schedule that fits your life — including same-day availability when slots permit.
            </p>
            <p>
              We regularly clean homes throughout Glen Echo, Bradley Hills, and the neighborhoods
              surrounding Great Falls and the C&O Canal National Historical Park. Potomac is one of
              Montgomery County's most affluent and family-oriented communities, and the residents
              here deserve a cleaning company that respects their time, their homes, and their
              families. That's why we offer flexible appointment windows — weekday mornings,
              afternoons, and weekend slots — with no long wait lists or guessing games.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we take genuine pride in serving the
              Potomac community. Every team member completes background screening, eco-cleaning
              training, and a quality walk-through checklist before joining our crew. From your first
              cleaning to your hundredth, you'll receive the same meticulous standard — because we
              treat every Potomac home the way we'd want ours cleaned.
            </p>
          </div>
        </div>
      </section>

      {/* ── Neighborhood Spotlight ──────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            House Cleaning by Potomac Neighborhood
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Potomac spreads across large-lot neighborhoods with very different layouts — from the
            historic village center to gated golf communities and homes backing the C&amp;O Canal. We
            scale each visit to the property.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Potomac Village",
                zip: "20854",
                body:
                  "The historic center around Falls Road and River Road blends established estates with newer construction. These are usually larger homes with formal entertaining spaces and several bathrooms, so we bring a multi-cleaner team and scale the checklist to keep the whole house — bedrooms, baths, and lower levels — thorough in one visit, not just the rooms guests see.",
              },
              {
                name: "Avenel",
                zip: "20854",
                body:
                  "Built around the TPC Potomac golf course, Avenel is a community of large custom homes with high ceilings, extensive millwork, and often a gate or community check-in to plan around. We confirm access ahead of time and match products to the premium stone and hardwood these homes use, so detailing stays even from the two-story foyer to the finished basement.",
              },
              {
                name: "River Falls",
                zip: "20854",
                body:
                  "Backing to the C&amp;O Canal and the Potomac River, River Falls sits on generous, wooded lots — many homes with finished basements, sunrooms, and detached spaces. Our checklist plans for that extra square footage up front, so the lower level and guest areas common on acre-plus Potomac properties get cleaned to the same standard as the main floor.",
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
            House Cleaning FAQ — Potomac, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Potomac"
        citySlug="potomac-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={potomacServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Potomac" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Potomac" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving Potomac and nearby communities." ctaProse={ctaProseVariants[pickVariant("potomac-md", 2, 3)]("Potomac", "House Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default PotomacHouseCleaningPage;
