import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Camera, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import {
  LocalBusinessSchema,
  ServiceSchema,
  FAQSchema,
  BreadcrumbSchema,
  WebPageSchema,
} from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import HeroLocation from "@/components/location/HeroLocation";
import ServiceChecklistLocation from "@/components/location/ServiceChecklistLocation";
import InternalLinksGrid from "@/components/location/InternalLinksGrid";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import LocationQuoteSection from "@/components/location/LocationQuoteSection";
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { pickReviews } from "@/data/realReviews";
import { trustBlurbVariants, ctaProseVariants, pickVariant, ecoSafeVariants, satisfactionVariants, arriveStepVariants } from "@/data/template-variants";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/house-cleaning";
const TEAM_IMAGE = "/images/locations/bethesda-house-cleaning/capital-clean-care-team.webp";
const SERVICE_IMAGE = "/images/locations/bethesda-house-cleaning/team-cleaning-hardwood.webp";
const verifiedReviews = pickReviews("bethesda-md/house-cleaning", 2);

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
    ogImage: `https://capitalcleancare.com${TEAM_IMAGE}`,
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href={TEAM_IMAGE} />
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
        reviews={verifiedReviews}
      />
      <ServiceSchema
        serviceName="House Cleaning in Bethesda, MD"
        description="Professional, eco-friendly house cleaning in Bethesda, MD. Background-checked, bonded & insured team. EPA Safer Choice certified products. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema name="Professional House Cleaning in Bethesda, MD" description="Professional recurring and one-time house cleaning in Bethesda with a written scope and background-checked local team." url={PAGE_URL} dateModified="2026-08-30" cityName="Bethesda" stateCode="Maryland" primaryImage={`https://capitalcleancare.com${TEAM_IMAGE}`} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-6 md:pt-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
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
        lead="Professional, eco-friendly house cleaning for Bethesda homes—from Bethesda Row to Kenwood. Our background-checked, bonded team uses family-safe products and backs every visit with our 100% satisfaction guarantee."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage={TEAM_IMAGE}
        heroImageAlt="Capital Clean Care's real background-checked house cleaning team serving Bethesda, Maryland"
        heroAspectRatio="4/3"
        heroImageWidth={900}
        heroImageHeight={1200}
        heroImageContainerClassName="max-w-[560px] mx-auto lg:ml-auto lg:mr-0"
        ctaPrimary="Get a Free Quote in Bethesda"
        teamTrustLabel="Background-Checked Team"
        ctaNote="No commitment · Written quote before service · 100% satisfaction guaranteed"
        updatedLabel="August 2026"
        updatedDateTime="2026-08-29"
      />

      <section className="border-b border-border bg-background py-10 md:py-14" aria-labelledby="bethesda-house-cleaning-answer">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 id="bethesda-house-cleaning-answer" className="font-heading text-2xl font-bold text-foreground md:text-3xl">What is included in Bethesda house cleaning?</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Professional house cleaning in Bethesda includes the high-use areas that determine how clean a home feels: kitchen counters and appliance exteriors, sinks, bathrooms, mirrors, dusting, vacuuming, mopping, beds made with client-provided linens, and high-touch surfaces. Capital Clean Care brings the equipment and family-conscious products, uses background-checked employees, and confirms the scope in writing before service. We clean downtown condos near Bethesda Row as well as larger homes in Edgemoor, Kenwood, Bradley Hills, Battery Park, and the 20814–20817 ZIP codes. Weekly, bi-weekly, monthly, and one-time visits are available; the best schedule depends on household size, pets, entertaining, and how quickly surfaces and floors collect dust. For heavier buildup, inside-appliance work, grout, baseboards, or a full reset, choose our <Link to="/locations/bethesda-md/deep-cleaning" className="font-semibold text-primary underline">Bethesda deep-cleaning service</Link> instead of routine maintenance.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">See transparent planning ranges in the <Link to="/resources/house-cleaning-cost-bethesda-md" className="font-semibold text-primary underline">Bethesda cleaning cost guide</Link>.</p>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Bethesda House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" count={3} showVideo={false} />

      {/* ── Authentic team-in-action proof ──────────────── */}
      <section className="py-12 md:py-16 bg-background" aria-labelledby="real-bethesda-cleaning-team">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] items-center rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 p-5 sm:p-8 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src={SERVICE_IMAGE}
                alt="Capital Clean Care team member professionally cleaning hardwood floors in a Bethesda-area home"
                width="1200"
                height="1500"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-sm font-semibold text-primary">
                <Camera className="h-4 w-4" aria-hidden="true" /> Our real local team
              </div>
              <h2 id="real-bethesda-cleaning-team" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                Professional equipment. Careful technique. Real people.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                These are not stock photos. They show the Capital Clean Care team and the equipment we use in local homes. Our cleaners are trained to match the method and product to the surface—from hardwood floors and area rugs to high-touch household areas.
              </p>
              <ul className="space-y-3 text-sm text-foreground">
                {["Background-checked and insured team", "Surface-appropriate cleaning methods", "Professional equipment brought to your home"].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <ShieldCheck className="h-4 w-4 text-accent flex-none" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

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
          <div className="grid gap-6 md:grid-cols-2 text-muted-foreground leading-relaxed">
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
            <p className="md:col-span-2 rounded-2xl border border-border bg-primary/5 p-5">
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

      {/* ── Neighborhood Spotlight ──────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            House Cleaning by Bethesda Neighborhood
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Bethesda is really a collection of very different neighborhoods — historic homes near
            downtown, large estates to the west, and high-rise condos in the walkable core. We tailor
            each visit to how that part of Bethesda is actually built.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Edgemoor",
                zip: "20814",
                body:
                  "One of Bethesda's oldest neighborhoods, Edgemoor sits steps from Bethesda Row and the Metro, with early-20th-century homes that often keep original hardwood, built-ins, and plaster detail. We use soft microfiber and pH-neutral products so those period finishes stay intact while the home still gets a thorough, top-to-bottom clean.",
              },
              {
                name: "Kenwood & Bradley Hills",
                zip: "20815 / 20817",
                body:
                  "Known for its cherry-blossom streets and large single-family homes on generous lots, this part of Bethesda usually means multiple bedrooms, formal dining, and finished lower levels. Our checklist scales to bigger floor plans, and we can send a multi-cleaner team so every room gets the same attention as the main suite.",
              },
              {
                name: "Woodmont Triangle & Downtown",
                zip: "20814",
                body:
                  "The walkable downtown core around Woodmont Triangle and the Wisconsin Avenue corridor is mostly high-rise condos and apartments. We coordinate with front desks and service elevators, provide a certificate of insurance when a building requires one, and fit visits to condo layouts on weekday or weekend windows.",
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

    </Layout>
  );
};

export default BethesdaHouseCleaningPage;
