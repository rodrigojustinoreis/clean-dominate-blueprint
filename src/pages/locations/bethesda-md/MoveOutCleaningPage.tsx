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

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Bethesda?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. Same-day availability confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Bethesda?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Leave a key or use a lockbox.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Bethesda?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20814, 20815, 20816, or 20817).",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred — it allows our team to clean every surface without obstacles.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Bethesda and Montgomery County, covering every area landlords routinely inspect.",
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
    title: "Move Out Cleaning in Bethesda, MD",
    description:
      "Move out cleaning in Bethesda, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-dark-floor.jpg" />
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
        reviews={[
          {
            name: "Maria L.",
            text: "Got my full deposit back thanks to Capital Clean Care's thorough move out cleaning. Incredibly professional and fast.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Bethesda, MD"
        description="Professional move out cleaning in Bethesda, MD. We clean to landlord and inspection standards so you get your deposit back. Bonded, insured, eco-friendly team."
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
        h1="Move Out Cleaning in Bethesda, MD"
        lead="Moving out in Bethesda? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Bethesda Row, Kenwood, and all Bethesda neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage="/images/team/team-mopping-dark-floor.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Bethesda, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Bethesda"
      />

      {/* ── Checklist ─────────────────────────────────────── */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Bethesda"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="move-out-cleaning" serviceLabel="Move-Out Cleaning" />

      {/* ── Why Deposit Depends on Cleaning ──────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Landlords in Bethesda and across Montgomery County routinely withhold deposits for cleaning
            deficiencies. A professional move out cleaning to landlord standards — specifically addressing
            the NIH campus area rental market and the competitive Bethesda leasing environment — is the
            most reliable way to protect your deposit. We know what property managers inspect: oven
            interiors, grout lines, inside cabinets, and baseboards are the most commonly cited items.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Landlord-Standard Checklist",
                body: "Our cleaning checklist is designed to meet the expectations of property managers and landlords in Bethesda's 20814 and 20815 ZIP codes.",
              },
              {
                title: "Protect Your Deposit",
                body: "Typical Bethesda rentals carry deposits of one to two months' rent. A professional move out clean is a small cost against that loss.",
              },
              {
                title: "100% Satisfaction Guarantee",
                body: "If your landlord flags anything after our clean, call us and we return to address it at no additional charge — no fine print.",
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
                title: "Book your date",
                body: "Same-day and next-day slots available for urgent moves in Bethesda ZIP codes 20814, 20815, 20816, and 20817. Call (240) 704-2551 or book online.",
              },
              {
                step: "2",
                title: "We arrive with all supplies",
                body: "No need to leave cleaning products behind. Our bonded, insured, background-checked team brings everything — EPA Safer Choice™ certified products included.",
              },
              {
                step: "3",
                title: "Full landlord-standard clean",
                body: "Every room, every surface — kitchen, bathrooms, all bedrooms, closets, windows, baseboards. Nothing missed.",
              },
              {
                step: "4",
                title: "100% satisfaction",
                body: "If your landlord spots anything, we return free of charge. Your deposit is on the line — so is our reputation.",
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
            Move Out Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's move out cleaning service covers all Bethesda ZIP codes — 20814,
              20815, 20816, and 20817. Whether you're vacating an apartment near the Bethesda Metro,
              a condo on Bethesda Row, or a house in Kenwood, we're ready to deliver a cleaning that
              passes landlord inspection and protects your security deposit.
            </p>
            <p>
              The Bethesda rental market is competitive, and property managers here maintain high
              standards. That's why our move out cleaning checklist covers every item they commonly
              inspect — oven interiors, grout lines, inside cabinet drawers, baseboards, and window
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
      <LocationQuoteSection cityName="Bethesda" serviceLabel="Move-Out Cleaning" defaultService="move" zipLine="Serving Bethesda and nearby communities." />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaMoveOutCleaningPage;
