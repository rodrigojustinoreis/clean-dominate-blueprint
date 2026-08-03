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
import { trustBlurbVariants, ctaProseVariants, pickVariant } from "@/data/template-variants";

const PAGE_URL = "https://capitalcleancare.com/locations/gaithersburg-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to Gaithersburg homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in Gaithersburg.",
  },
  {
    q: "How much does house cleaning cost in Gaithersburg, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do you offer recurring cleaning in Gaithersburg?",
    a: "Yes — weekly, bi-weekly, and monthly plans available with a discounted recurring rate. See our recurring cleaning service for Gaithersburg families.",
  },
  {
    q: "What areas of Gaithersburg do you serve?",
    a: "We serve all Gaithersburg ZIP codes: 20877, 20878, 20879 — including Kentlands, Lakelands, Crown Farm, and Quince Orchard.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice. No fees for first-time cancellations.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Gaithersburg and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops wiped and sanitized",
      "Appliance exteriors cleaned",
      "Sink scrubbed and polished",
      "Microwave interior cleaned",
      "Cabinet fronts wiped down",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet disinfected inside and out",
      "Tub and shower scrubbed",
      "Sink and faucets cleaned",
      "Mirrors cleaned streak-free",
      "Floors mopped and disinfected",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens if provided)",
      "Mirrors wiped clean",
    ],
  },
  {
    heading: "Living Areas & Throughout",
    items: [
      "Dusting all surfaces and shelves",
      "Vacuuming carpets and rugs",
      "Mopping hard floors",
      "Window sills wiped",
      "Baseboards cleaned",
      "Light switches and door handles disinfected",
      "Spot-clean visible marks on walls",
    ],
  },
];

const gaithersburgServices = [
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Germantown", slug: "germantown-md", state: "MD" },
];

const GaithersburgHouseCleaningPage = () => {
  const faqs = getServiceLocationOverride("gaithersburg-md", "house-cleaning")?.faqs ?? localFaqs;
  const { seoHelmet } = useSEO({
    title: "House Cleaning Gaithersburg MD | Move-In & Residential",
    description:
      "Professional house cleaning in Gaithersburg, MD. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-bright-room.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
          { label: "House Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Gaithersburg, MD",
          "Kentlands, Gaithersburg MD",
          "Lakelands, Gaithersburg MD",
          "Crown Farm, Gaithersburg MD",
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
        serviceName="House Cleaning in Gaithersburg, MD"
        description="Professional, eco-friendly house cleaning in Gaithersburg, MD. Background-checked, bonded team serving Kentlands, Lakelands, Crown Farm, and all Gaithersburg ZIP codes. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Gaithersburg, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="House Cleaning Gaithersburg MD: Residential & Move-In Cleaning"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Gaithersburg homes — from Kentlands to Lakelands. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Gaithersburg"
        state="MD"
        zipRange="20877–20879"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Gaithersburg, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Gaithersburg"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Gaithersburg House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Gaithersburg" citySlug="gaithersburg-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

      {/* Why Capital Clean Care */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Gaithersburg Homeowners Choose Capital Clean Care
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {trustBlurbVariants[pickVariant("gaithersburg-md", 3)]("Gaithersburg", "Montgomery County")}
            </p>
            <p>
              Every product we bring into your Gaithersburg home is EPA Safer Choice™ certified —
              no bleach, no ammonia, no synthetic fragrances. Safe from the first visit. Whether you
              have toddlers crawling on the kitchen floor near Kentlands Market Square or elderly
              family members sensitive to chemical fumes, our non-toxic, plant-based formulas
              deliver a genuinely clean home without the health tradeoffs.
            </p>
            <p>
              Our 100% satisfaction guarantee is not fine print. If anything isn't right after your
              Gaithersburg house cleaning, call us and we return to re-clean at no charge — no
              arguments, no exceptions. We want you to feel the difference every single visit.
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book online or call — free quote in 60 seconds, same-day slots often available in Gaithersburg (20877)",
              "We arrive on time — bonded, insured, background-checked cleaners bring all supplies",
              "Room-by-room clean the Gaithersburg way — same checklist each visit, corners and baseboards included",
              "100% satisfaction guarantee — if anything isn't right, we return free, no fine print",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Gaithersburg, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Gaithersburg"
        citySlug="gaithersburg-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={gaithersburgServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />

      {/* ── Neighborhood Spotlight ──────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            House Cleaning by Gaithersburg Neighborhood
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Gaithersburg covers a lot of ground — from the walkable Kentlands village to the newer Crown Farm
            developments. We adjust our crew size, products, and timing to match how each community lives.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Kentlands",
                zip: "20878",
                body:
                  "Kentlands homes near Market Square blend traditional New Urbanism design with modern interiors — open kitchens, painted woodwork, and detailed trim. We use soft microfiber on millwork and gentle cleaners on the painted surfaces so finishes stay sharp visit after visit.",
              },
              {
                name: "Lakelands",
                zip: "20878",
                body:
                  "Lakelands single-family homes near the Lakelands Park trails often have hardwood entryways, larger primary bathrooms, and three-car garages. We bring HEPA-filter vacuums to keep allergens down, especially for families with kids using the nearby park year-round.",
              },
              {
                name: "Crown Farm",
                zip: "20878",
                body:
                  "Crown Farm townhomes and apartments around Crown Park have a younger, busier rhythm. Many of our Crown Farm clients book weekday evening or Saturday slots and use recurring bi-weekly service to keep on top of the high-traffic main-floor wear.",
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
            House Cleaning Pricing in Gaithersburg, MD
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Pricing depends on home size, frequency, and condition. The ranges below reflect what most
            Gaithersburg families actually pay for a standard house cleaning. Recurring clients save up to 25%.
            Get your exact quote in 60 seconds — no commitment required.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { size: "1 BR / 1 BA", range: "$140 – $170", note: "Crown Farm apartments" },
              { size: "2 BR / 2 BA", range: "$170 – $220", note: "Kentlands townhomes" },
              { size: "3 BR / 2 BA", range: "$210 – $290", note: "Typical single-family" },
              { size: "4 BR+ / 3 BA+", range: "$280 – $420", note: "Larger Lakelands homes" },
            ].map((p) => (
              <div
                key={p.size}
                className="bg-card border border-border rounded-xl p-5 text-center"
              >
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{p.size}</p>
                <p className="font-heading font-bold text-2xl text-foreground mb-1">{p.range}</p>
                <p className="text-xs text-muted-foreground">{p.note}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="text-sm text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Recurring savings in Gaithersburg:</strong> weekly clients save up to 25%,
                bi-weekly clients save 15%, monthly clients save 5%. Deep cleaning typically runs 1.5× the standard rate.
                Move-in / move-out cleaning is quoted separately based on condition.
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConversionCTA cityName="Gaithersburg" />

      <LocationQuoteSection cityName="Gaithersburg" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving Gaithersburg and nearby communities." ctaProse={ctaProseVariants[pickVariant("gaithersburg-md", 2, 3)]("Gaithersburg", "House Cleaning")} />

      <StickyMobileCTA />
    </Layout>
  );
};

export default GaithersburgHouseCleaningPage;
