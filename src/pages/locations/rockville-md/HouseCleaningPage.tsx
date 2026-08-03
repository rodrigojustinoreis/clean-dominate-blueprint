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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to Rockville homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products to every Rockville home. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Rockville or anywhere in Montgomery County.",
  },
  {
    q: "How much does house cleaning cost in Rockville, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds with no commitment required — use the form below or call (240) 704-2551.",
  },
  {
    q: "Do you offer recurring cleaning in Rockville?",
    a: "Yes — weekly, bi-weekly, and monthly plans are available at discounted recurring rates. Recurring clients in Rockville get the same background-checked team every single visit.",
  },
  {
    q: "What areas of Rockville do you serve?",
    a: "We serve all Rockville ZIP codes: 20850, 20851, 20852, and 20853 — including King Farm, Twinbrook, Fallsgrove, Woodley Gardens, and neighborhoods along Rockville Pike.",
  },
  {
    q: "What is your cancellation policy for Rockville clients?",
    a: "We ask for 24-hour notice for cancellations. No fees for first-time cancellations. We understand life happens — just let us know as early as possible.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Rockville and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
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
      "Professional house cleaning in Rockville, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
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
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="House Cleaning in Rockville, MD"
        description="Professional, eco-friendly house cleaning in Rockville, MD. Background-checked, bonded & insured team. EPA Safer Choice certified products. 100% satisfaction guaranteed."
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
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Rockville homes — from King Farm to Twinbrook. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Rockville, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Rockville"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Rockville House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Rockville" citySlug="rockville-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

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
                body: trustBlurbVariants[pickVariant("rockville-md", 3)]("Rockville", "Montgomery County"),
              },
              {
                title: "Eco-Safe for Your Family",
                body: ecoSafeVariants[pickVariant("rockville-md", 3, 4)]("Rockville"),
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
                title: "Book online or call",
                body: "Get a free quote in 60 seconds — no commitment required. Same-day slots are often available throughout Rockville (ZIP 20850 and surrounding areas). Call (240) 704-2551 or use the form below.",
              },
              {
                step: "2",
                title: "We arrive on time",
                body: arriveStepVariants[pickVariant("rockville-md", 3, 6)]("Rockville"),
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
              We regularly clean homes throughout Twinbrook, Fallsgrove, Congressional, and the Town Center
              area. Rockville is one of Montgomery County's most vibrant and diverse cities — and the residents
              here deserve a cleaning company that respects their time, their homes, and their families.
              That's why we offer flexible appointment windows — including weekday mornings, afternoons,
              and weekend slots — with same-day availability when the schedule permits. No long wait lists,
              no guessing games.
            </p>
            <p>
              As a Latino-owned Montgomery County business, we take genuine pride in serving the Rockville
              community. Every team member completes background screening, eco-cleaning training, and a
              quality walk-through checklist before joining our crew. From your first cleaning to your
              hundredth, you'll receive the same meticulous standard — because we treat every Rockville home
              the way we'd want ours cleaned.
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
                  "King Farm townhomes and single-family homes near Pleasant Drive have tight schedules and busy families. We run efficient weekday and Saturday morning slots, and we're used to working around stroller drop-offs, dog walkers, and the King Farm Village Center coffee runs. Most King Farm clients use bi-weekly recurring service.",
              },
              {
                name: "Twinbrook",
                zip: "20851",
                body:
                  "Twinbrook's mid-century brick ranches and split-levels deserve a cleaner who respects original hardwood, plaster walls, and tile bathrooms. We bring soft microfiber, pH-neutral floor cleaner, and zero abrasives so the character of these homes — many built in the 1950s — stays intact while still getting a thorough, deep refresh.",
              },
              {
                name: "Fallsgrove",
                zip: "20850",
                body:
                  "Fallsgrove homes near Shady Grove Road tend to be larger, with formal dining, multiple bathrooms, and finished basements. Our checklist scales — we send 2-cleaner teams for 3,000+ sq ft homes so the visit stays within a reasonable window and every surface gets the same attention as the master suite.",
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

      {/* ── Transparent Pricing ─────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            House Cleaning Pricing in Rockville, MD
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Pricing depends on home size, frequency, and condition. The ranges below reflect what most
            Rockville families actually pay for a standard house cleaning. Recurring clients save 10–25%
            off these rates. Get your exact quote in 60 seconds — no commitment required.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { size: "1 BR / 1 BA", range: "$140 – $170", note: "Studios &amp; condos" },
              { size: "2 BR / 2 BA", range: "$170 – $220", note: "Most townhomes" },
              { size: "3 BR / 2 BA", range: "$210 – $290", note: "Typical single-family" },
              { size: "4 BR+ / 3 BA+", range: "$280 – $420", note: "Larger Fallsgrove homes" },
            ].map((p) => (
              <div
                key={p.size}
                className="bg-card border border-border rounded-xl p-5 text-center"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{p.size}</p>
                <p className="font-heading font-bold text-2xl text-foreground mb-1">{p.range}</p>
                <p className="text-xs text-muted-foreground" dangerouslySetInnerHTML={{ __html: p.note }} />
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Recurring savings in Rockville:</strong> weekly clients save up to 25%,
                bi-weekly clients save 15%, monthly clients save 5%. Deep cleaning (first visit or seasonal refresh)
                typically runs 1.5× the standard rate. Move-in / move-out cleaning is quoted separately based on condition.
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
      <LocationQuoteSection cityName="Rockville" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving Rockville across ZIPs 20850, 20851, 20852, and 20853." ctaProse={ctaProseVariants[pickVariant("rockville-md", 2, 3)]("Rockville", "House Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvilleHouseCleaningPage;
