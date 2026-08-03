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

const PAGE_URL = "https://capitalcleancare.com/locations/north-bethesda-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to North Bethesda homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products to every North Bethesda home. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in North Bethesda or anywhere in Montgomery County.",
  },
  {
    q: "How much does house cleaning cost in North Bethesda, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds with no commitment required — use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you offer recurring cleaning in North Bethesda?",
    a: "Yes — weekly, bi-weekly, and monthly plans are available at discounted recurring rates. Recurring clients in North Bethesda get the same background-checked team every single visit.",
  },
  {
    q: "What areas of North Bethesda do you serve?",
    a: "We serve all North Bethesda ZIP codes: 20852 and 20895 — including White Flint, Luxmanor, Garrett Park, Tilden Woods, and neighborhoods along the Rockville Pike corridor.",
  },
  {
    q: "What is your cancellation policy for North Bethesda clients?",
    a: "We ask for 24-hour notice for cancellations. No fees for first-time cancellations. We understand life happens — just let us know as early as possible.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving North Bethesda and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
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

const northBethesdaServices = [
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const NorthBethesdaHouseCleaningPage = () => {
  const faqs = getServiceLocationOverride("north-bethesda-md", "house-cleaning")?.faqs ?? localFaqs;
  const { seoHelmet } = useSEO({
    title: "House Cleaning in North Bethesda, MD",
    description:
      "Professional house cleaning in North Bethesda, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
          { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
          { label: "House Cleaning", href: "/locations/north-bethesda-md/house-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "North Bethesda, MD",
          "White Flint, North Bethesda MD",
          "Luxmanor, North Bethesda MD",
          "Garrett Park, MD",
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
        serviceName="House Cleaning in North Bethesda, MD"
        description="Professional, eco-friendly house cleaning in North Bethesda, MD. Background-checked, bonded & insured team. EPA Safer Choice certified products. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["North Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Professional House Cleaning in North Bethesda, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to North Bethesda homes — from White Flint to Luxmanor. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="North Bethesda"
        state="MD"
        zipRange="20852"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in North Bethesda, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in North Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every North Bethesda House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="North Bethesda" citySlug="north-bethesda-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why North Bethesda Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: trustBlurbVariants[pickVariant("north-bethesda-md", 3)]("North Bethesda", "Montgomery County"),
              },
              {
                title: "Eco-Safe for Your Family",
                body: ecoSafeVariants[pickVariant("north-bethesda-md", 3, 4)]("North Bethesda"),
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: satisfactionVariants[pickVariant("north-bethesda-md", 3, 5)]("North Bethesda"),
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
                body: "Get a free quote in 60 seconds — no commitment required. Same-day slots are often available throughout North Bethesda (ZIP 20852). Call (240) 704-2551 or use the form below.",
              },
              {
                step: "2",
                title: "We arrive on time",
                body: arriveStepVariants[pickVariant("north-bethesda-md", 3, 6)]("North Bethesda"),
              },
              {
                step: "3",
                title: "Thorough top-to-bottom clean",
                body: "We work through a consistent North Bethesda checklist — kitchen, bathrooms, bedrooms, living areas — so each room gets the same careful, top-to-bottom attention on every visit.",
              },
              {
                step: "4",
                title: "100% satisfaction guaranteed",
                body: satisfactionVariants[pickVariant("north-bethesda-md", 3, 7)]("North Bethesda"),
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
            House Cleaning Throughout North Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all of North Bethesda's ZIP codes — 20852 and 20895.
              Whether your home is steps from the White Flint Metro station, nestled in the Tilden Woods community,
              in the upscale Luxmanor neighborhood, or near the vibrant Pike & Rose development along Rockville Pike,
              our background-checked cleaning teams are familiar with these neighborhoods and ready to work around
              your schedule.
            </p>
            <p>
              We regularly clean homes throughout Garrett Park Estates, Twinbrook, and the corridors connecting
              North Bethesda to neighboring Rockville. North Bethesda is one of Montgomery County's most
              dynamic communities — and residents here deserve a cleaning company that respects their time,
              their homes, and their families. That's why we offer flexible appointment windows, including weekday
              mornings, afternoons, and weekend slots — with same-day availability when the schedule permits.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we take genuine pride in serving the North Bethesda
              community. Every team member completes background screening, eco-cleaning training, and a quality
              walk-through checklist before joining our crew. From your first cleaning to your hundredth, you'll
              receive the same meticulous standard — because we treat every North Bethesda home the way we'd
              want ours cleaned.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — North Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="North Bethesda"
        citySlug="north-bethesda-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={northBethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="North Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="North Bethesda" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving North Bethesda and nearby communities." ctaProse={ctaProseVariants[pickVariant("north-bethesda-md", 2, 3)]("North Bethesda", "House Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default NorthBethesdaHouseCleaningPage;
