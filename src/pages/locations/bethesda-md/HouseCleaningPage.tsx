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

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to Bethesda homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Bethesda.",
  },
  {
    q: "How much does house cleaning cost in Bethesda, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds with no commitment required — use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you offer recurring cleaning in Bethesda?",
    a: "Yes — weekly, bi-weekly, and monthly plans are available at discounted recurring rates. Recurring clients in Bethesda get the same background-checked team every single visit.",
  },
  {
    q: "What areas of Bethesda do you serve?",
    a: "We serve all Bethesda ZIP codes: 20814, 20815, 20816, and 20817 — including Bethesda Row, Kenwood, Bradley Hills, Chevy Chase, and Edgemoor.",
  },
  {
    q: "What is your cancellation policy for Bethesda clients?",
    a: "We ask for 24-hour notice for cancellations. No fees for first-time cancellations. We understand life happens — just let us know as early as possible.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
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

const bethesdaServices = [
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
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

const BethesdaHouseCleaningPage = () => {
  const faqs = getServiceLocationOverride("bethesda-md", "house-cleaning")?.faqs ?? localFaqs;
  const { seoHelmet } = useSEO({
    title: "House Cleaning in Bethesda, MD | Free Quote",
    description:
      "Professional house cleaning in Bethesda, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "House Cleaning", href: "/locations/bethesda-md/house-cleaning" },
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
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="House Cleaning in Bethesda, MD"
        description="Professional, eco-friendly house cleaning in Bethesda, MD. Background-checked, bonded & insured team. EPA Safer Choice certified products. 100% satisfaction guaranteed."
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
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Professional House Cleaning in Bethesda, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Bethesda homes — from Bethesda Row to Kenwood. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Bethesda, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Bethesda House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Bethesda Homeowners Choose Capital Clean Care
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Latino-Owned & Locally Operated",
                body: trustBlurbVariants[pickVariant("bethesda-md", 3)]("Bethesda", "Montgomery County"),
              },
              {
                title: "Eco-Safe for Your Family",
                body: ecoSafeVariants[pickVariant("bethesda-md", 3, 4)]("Bethesda"),
              },
              {
                title: "100% Satisfaction Guaranteed",
                body: satisfactionVariants[pickVariant("bethesda-md", 3, 5)]("Bethesda"),
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
                body: "Get a free quote in 60 seconds — no commitment required. Same-day slots are often available throughout Bethesda (ZIP 20814 and surrounding areas). Call (240) 704-2551 or use the form below.",
              },
              {
                step: "2",
                title: "We arrive on time",
                body: arriveStepVariants[pickVariant("bethesda-md", 3, 6)]("Bethesda"),
              },
              {
                step: "3",
                title: "Thorough top-to-bottom clean",
                body: "We follow a consistent Bethesda house cleaning checklist — kitchen, bathrooms, bedrooms, living areas. Every room gets the same careful attention, with nothing skipped.",
              },
              {
                step: "4",
                title: "100% satisfaction guaranteed",
                body: satisfactionVariants[pickVariant("bethesda-md", 3, 7)]("Bethesda"),
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
            House Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care serves all of Bethesda's ZIP codes — 20814, 20815, 20816, and 20817.
              Whether your home sits near the Bethesda Metro station, in the walkable Bethesda Row district,
              along the tree-lined streets of Kenwood, or in the quiet Bradley Hills neighborhood,
              our background-checked cleaning teams know the area and are ready to serve you
              on a schedule that fits your life.
            </p>
            <p>
              We regularly clean homes throughout Woodmont Triangle, Edgemoor, Friendship Heights,
              and the neighborhoods surrounding the National Naval Medical Center. Bethesda is one of
              Montgomery County's most prestigious communities — and the residents here deserve a cleaning
              company that respects their time, their homes, and their families. That's why we offer
              flexible appointment windows — including weekday mornings, afternoons, and weekend slots —
              with same-day availability when the schedule permits.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we take genuine pride in serving the Bethesda
              community. Every team member completes background screening, eco-cleaning training, and a
              quality walk-through checklist before joining our crew. From your first cleaning to your
              hundredth, you'll receive the same meticulous standard — because we treat every Bethesda home
              the way we'd want ours cleaned. Prefer a{" "}
              <Link to="/locations/bethesda-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              plan? We offer weekly and bi-weekly options at discounted rates.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Bethesda" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving Bethesda and nearby communities." ctaProse={ctaProseVariants[pickVariant("bethesda-md", 2, 3)]("Bethesda", "House Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaHouseCleaningPage;
