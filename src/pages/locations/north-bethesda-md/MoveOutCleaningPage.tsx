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

const PAGE_URL = "https://capitalcleancare.com/locations/north-bethesda-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in North Bethesda?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. Same-day availability confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in North Bethesda?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move throughout North Bethesda and the surrounding area.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in North Bethesda?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20852 or 20895).",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred for the most thorough result.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in North Bethesda and Montgomery County.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current home and a deep cleaning for their new one. We serve all of North Bethesda's ZIP codes: 20852 and 20895.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving North Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Inside oven fully cleaned",
      "Inside fridge cleaned",
      "Range hood degreased",
      "Inside all cabinets and drawers wiped",
      "Sink scrubbed",
      "Microwave cleaned",
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
      "Tub/shower deep-cleaned",
      "Fixtures descaled",
      "Mirrors polished",
      "Floor mopped",
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

const northBethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
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

const NorthBethesdaMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in North Bethesda, MD",
    description:
      "Move out cleaning in North Bethesda, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
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
          { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
          { label: "Move Out Cleaning", href: "/locations/north-bethesda-md/move-out-cleaning" },
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
        serviceName="Move Out Cleaning in North Bethesda, MD"
        description="Professional move out cleaning in North Bethesda, MD. Deposit-ready results to landlord inspection standards. EPA Safer Choice certified products. Same-day availability."
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
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Move Out Cleaning in North Bethesda, MD"
        lead="Moving out in North Bethesda? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve White Flint, Luxmanor, and all North Bethesda neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="North Bethesda"
        state="MD"
        zipRange="20852"
        heroImage="/images/team/team-mopping-dark-floor.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in North Bethesda, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in North Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — North Bethesda"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="North Bethesda" citySlug="north-bethesda-md" serviceSlug="move-out-cleaning" serviceLabel="Move-Out Cleaning" />

      {/* ── Why Your Deposit Depends on Cleaning ──────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Landlords in North Bethesda and across Montgomery County routinely withhold deposits for cleaning.
            A professional move out cleaning to landlord standards — specifically addressing the Pike & Rose area
            rental market — is the most reliable way to protect your deposit. We know what property managers inspect,
            and our checklist is built to pass every walkthrough.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Landlord-Standard Checklist",
                body: "Built from real inspection reports. Nothing missed — from oven interior to window tracks.",
              },
              {
                title: "Same-Day Availability",
                body: "Urgent move-out? We accommodate last-minute bookings across North Bethesda ZIPs 20852 and 20895.",
              },
              {
                title: "100% Satisfaction Backed",
                body: "If your landlord flags anything after our clean, we return — free — to address it.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-foreground text-sm mb-2">{card.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            How Our North Bethesda Move Out Cleaning Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Book your date",
                body: "Same-day and next-day slots available for urgent moves in North Bethesda ZIPs 20852 and 20895. Call (240) 704-2551 or use the form below.",
              },
              {
                step: "2",
                title: "We arrive with all supplies",
                body: "No need to leave anything behind. Our bonded, insured, background-checked team brings everything — EPA Safer Choice™ certified products included.",
              },
              {
                step: "3",
                title: "Full landlord-standard clean",
                body: "Every room, every surface — kitchen, bathrooms, bedrooms, closets, and all common areas. We clean to pass the inspection, not just to look clean.",
              },
              {
                step: "4",
                title: "100% satisfaction",
                body: "If your landlord spots anything, we return free. Your deposit is our benchmark.",
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
            Move Out Cleaning Throughout North Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care handles move out cleaning across all of North Bethesda — ZIP codes 20852 and 20895.
              Whether you're vacating an apartment near the White Flint Metro station, a townhome in Luxmanor,
              or a single-family residence in Garrett Park Estates, our background-checked team arrives equipped
              to deliver a landlord-ready result.
            </p>
            <p>
              The North Bethesda rental market — particularly near the Pike & Rose development and along the
              Rockville Pike corridor — demands a high standard of cleanliness at move-out. Our move out cleaning
              checklist is built around the exact areas property managers inspect most closely, from oven interiors
              and grout lines to window tracks and closet interiors.
            </p>
            <p>
              As a Latino-owned business serving Montgomery County, we understand that your security deposit
              represents real money. Every North Bethesda move out cleaning is backed by our 100% satisfaction
              guarantee — if your landlord notes anything during the walkthrough, we return to address it at
              no additional charge. Call us at (240) 704-2551 to confirm same-day or next-day availability.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — North Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="North Bethesda"
        citySlug="north-bethesda-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={northBethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="North Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="North Bethesda" serviceLabel="Move-Out Cleaning" defaultService="move" zipLine="Serving North Bethesda and nearby communities." />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default NorthBethesdaMoveOutCleaningPage;
