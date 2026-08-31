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
  WebPageSchema,
} from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import HeroLocation from "@/components/location/HeroLocation";
import ServiceChecklistLocation from "@/components/location/ServiceChecklistLocation";
import InternalLinksGrid from "@/components/location/InternalLinksGrid";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import LocationQuoteSection from "@/components/location/LocationQuoteSection";
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { ctaProseVariants, pickVariant } from "@/data/template-variants";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/potomac-md/move-out-cleaning";

const localFaqs = [
  {
    q: "How much does move out cleaning cost in Potomac?",
    a: "Pricing depends on home size, condition, appliance interiors, stairs and requested extras. Use the form below or call (240) 704-2551 for a written quote. Rush availability is confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Potomac?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Many Potomac clients coordinate via lockbox or key drop.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Potomac?",
    a: "Rush appointments may be available in ZIP codes 20854 and 20859, but they are not guaranteed. Contact us early so we can confirm the date, access and scope in writing.",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred — it allows our team to reach every surface without furniture in the way.",
  },
  {
    q: "Does move-out cleaning guarantee a landlord inspection or deposit return?",
    a: "No. The landlord or property manager controls the inspection and deposit decision. Our written checklist addresses common turnover items and documents the agreed cleaning scope.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current Potomac home and a deep cleaning for their new one. Call (240) 704-2551 to coordinate both.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Potomac and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Move Out",
    items: [
      "Inside oven scrubbed",
      "Inside fridge cleaned",
      "Range hood degreased",
      "Inside all cabinets and drawers wiped",
      "Sink scrubbed",
      "Microwave interior cleaned",
      "Countertops and backsplash wiped",
      "Floor mopped",
    ],
  },
  {
    heading: "Bathrooms — Move Out",
    items: [
      "Toilet scrubbed (base, tank, hinges)",
      "Inside vanity cleaned",
      "Grout and tile scrubbed",
      "Tub and shower deep-cleaned",
      "Fixtures descaled",
      "Mirrors cleaned",
      "Floor mopped",
    ],
  },
  {
    heading: "All Rooms — Move Out",
    items: [
      "Inside all closets cleaned",
      "Baseboards and door frames wiped",
      "Window sills and tracks",
      "Light switches cleaned",
      "All floors vacuumed and mopped",
      "Spot-clean walls",
      "Ceiling fans dusted",
      "Trash removed",
    ],
  },
];

const potomacServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
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

const PotomacMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning Services in Potomac, MD | Free Quote",
    description:
      "Move-out cleaning in Potomac, MD for homes, apartments and property turnovers. Written checklist, insured team, appliance options and free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  const faqs = getServiceLocationOverride("potomac-md", "move-out-cleaning")?.faqs ?? localFaqs;

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/locations/bethesda-house-cleaning/capital-clean-care-team.webp" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Potomac, MD", href: "/locations/potomac-md" },
          { label: "Move Out Cleaning", href: "/locations/potomac-md/move-out-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Potomac, MD",
          "Glen Echo, MD",
          "River Falls, Potomac MD",
          "Avenel, Potomac MD",
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
        serviceName="Move Out Cleaning in Potomac, MD"
        description="Professional move out cleaning in Potomac, MD. Deposit-ready results meeting landlord inspection standards. Background-checked, bonded & insured. Same-day availability."
        url={PAGE_URL}
        areaServed={["Potomac, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema name="Move Out Cleaning Services in Potomac, MD" description="Detailed move-out and move-in cleaning in Potomac with a written checklist, clear optional tasks and an insured team." url={PAGE_URL} dateModified="2026-08-31" cityName="Potomac" stateCode="Maryland" primaryImage="https://capitalcleancare.com/images/locations/bethesda-house-cleaning/capital-clean-care-team.webp" />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Potomac, MD", href: "/locations/potomac-md" },
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Move Out Cleaning in Potomac, MD"
        lead="Moving in or out of Potomac? Capital Clean Care prepares empty and nearly empty homes with a written room-by-room scope—from appliance interiors selected in your quote to cabinets, bathrooms, baseboards and floors. We serve ZIP codes 20854 and 20859, including River Falls and Avenel."
        cityName="Potomac"
        state="MD"
        zipRange="20854"
        heroImage="/images/locations/bethesda-house-cleaning/capital-clean-care-team.webp"
        heroImageAlt="Capital Clean Care professional cleaning team serving Potomac, Maryland"
        heroImageWidth={900}
        heroImageHeight={1200}
        heroImageContainerClassName="lg:self-start"
        stackCtas
        ctaPrimary="Book Your Move Out Clean in Potomac"
      />

      {/* ── Checklist ─────────────────────────────────────── */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Potomac"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Potomac" citySlug="potomac-md" serviceSlug="move-out-cleaning" serviceLabel="Move-Out Cleaning" />

      {/* ── Why Your Deposit Matters ──────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            What Potomac Property Turnovers Usually Require
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Potomac handovers vary by lease, property manager and home condition. Our team confirms
            the rooms, appliance interiors, cabinets, closets, baseboards, floors and requested extras
            before arrival, then works through the agreed checklist. This creates a clear record of the
            cleaning performed without claiming to control the landlord's final inspection or deposit decision.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                title: "Landlord-Standard Checklist",
                body: "Our checklist mirrors what property managers in Potomac verify during final walkthroughs — nothing is overlooked.",
              },
              {
                title: "Same-Day Availability",
                body: "Tight move-out timeline? We offer same-day and next-day bookings in ZIP 20854 and 20859 to meet your handover date.",
              },
              {
                title: "Satisfaction Re-Clean",
                body: "If your landlord spots anything we missed, call us and we return free of charge. Your deposit recovery matters to us.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{card.title}</h3>
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
            How Our Potomac Move Out Cleaning Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Book your date",
                body: "Same-day and next-day slots available for urgent moves in Potomac (20854, 20859). Call (240) 704-2551 or use the form below to confirm your date immediately.",
              },
              {
                step: "2",
                title: "We arrive with all supplies",
                body: "No need to leave anything behind. Our bonded, insured team brings all equipment and EPA Safer Choice™ certified products.",
              },
              {
                step: "3",
                title: "Full landlord-standard clean",
                body: "Every room, every surface — from River Falls to Avenel. We work systematically through our full move-out checklist so nothing is missed.",
              },
              {
                step: "4",
                title: "100% satisfaction guaranteed",
                body: "If your landlord spots anything, call us and we return free. Our goal is your deposit — every time.",
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
            Move Out Cleaning Throughout Potomac, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care handles move out cleanings throughout Potomac's ZIP codes 20854 and
              20859. Whether you're vacating a rental in Glen Echo, leaving a single-family home in
              Avenel, or moving out of a townhome near Potomac Village, our team understands the
              inspection standards that local property managers apply — and we clean to exceed them.
            </p>
            <p>
              We work around your move-out timeline. Same-day and next-day bookings are available
              when you need them most. Many Potomac renters are surprised by how thorough our
              checklist is — inside every cabinet, appliance, and closet, not just the visible
              surfaces. That thoroughness is exactly what gets your deposit back.
            </p>
            <p>
              Also moving into a new home nearby? Combine your Potomac move out clean with a{" "}
              <Link to="/locations/potomac-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              at your new address. Or consider{" "}
              <Link to="/locations/potomac-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              services once you're settled. Call (240) 704-2551 to coordinate both bookings
              and save time during your transition.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Potomac, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Potomac"
        citySlug="potomac-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={potomacServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Potomac" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Potomac" serviceLabel="Move-Out Cleaning" defaultService="move" zipLine="Serving Potomac and nearby communities." ctaProse={ctaProseVariants[pickVariant("potomac-md", 2, 3)]("Potomac", "Move-Out Cleaning")} />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default PotomacMoveOutCleaningPage;
