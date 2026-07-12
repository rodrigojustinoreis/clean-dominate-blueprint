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

const PAGE_URL = "https://capitalcleancare.com/locations/wheaton-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Wheaton?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — free, no commitment. Same-day availability confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Wheaton?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Wheaton?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20902, 20906).",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Wheaton and Montgomery County.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current home and a deep cleaning for their new one.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Wheaton and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Inside oven scrubbed",
      "Inside refrigerator cleaned",
      "Range hood degreased",
      "Inside all cabinets and drawers wiped",
      "Sink scrubbed and polished",
      "Microwave interior cleaned",
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
      "Tub and shower deep-cleaned",
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
      "Light switches sanitized",
      "All floors vacuumed and mopped",
      "Spot-clean walls",
      "Ceiling fans dusted",
      "Trash removed",
    ],
  },
];

const wheatonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const WheatonMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Wheaton, MD",
    description:
      "Move out cleaning in Wheaton, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-making-bed.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Wheaton, MD", href: "/locations/wheaton-md" },
          { label: "Move Out Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Wheaton, MD",
          "Glenmont, Wheaton MD",
          "Kemp Mill, Wheaton MD",
          "Forest Glen, Wheaton MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Wheaton Renter",
            text: "Capital Clean Care handled our entire move out. The apartment passed inspection and we got our full deposit back.",
            location: "Wheaton, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Wheaton, MD"
        description="Move out cleaning in Wheaton, MD. Landlord and inspection-standard results. Inside appliances, grout, baseboards, closets — every inch covered. Serving Glenmont, Kemp Mill, Forest Glen, ZIP codes 20902 and 20906."
        url={PAGE_URL}
        areaServed={["Wheaton, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Wheaton, MD", href: "/locations/wheaton-md" },
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Move Out Cleaning in Wheaton, MD"
        lead="Moving out in Wheaton? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Glenmont, Kemp Mill, and all Wheaton neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Wheaton"
        state="MD"
        zipRange="20902"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Wheaton, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Wheaton"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Wheaton"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Wheaton" citySlug="wheaton-md" serviceSlug="move-out-cleaning" serviceLabel="Move-Out Cleaning" />

      {/* Why Deposit Depends on Cleaning */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Landlords in Wheaton and across Montgomery County routinely withhold deposits for
              cleaning deficiencies. Even minor issues — grease inside the oven, residue in the
              refrigerator, hair in bathroom grout — can be cited as grounds for deductions. A
              professional move out cleaning to landlord standards is the most reliable way to protect
              your deposit.
            </p>
            <p>
              Our checklist is built specifically to address the surfaces and areas property managers
              inspect most closely in Wheaton rental units near the Westfield Wheaton Mall area, Forest
              Glen, and the 20906 corridor. We know what inspectors look for — inside cabinets, under
              appliances, grout lines, baseboards, and closet interiors — and we cover each one
              systematically.
            </p>
            <p>
              If you're also settling into a new place, consider booking a{" "}
              <Link to="/locations/wheaton-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              for your new home at the same time. Many Wheaton clients bundle both services. For
              general upkeep at your next home, our{" "}
              <Link to="/locations/wheaton-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              service offers consistent, recurring options as well.
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Our Wheaton Move Out Cleaning Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book your date — same-day and next-day slots available for urgent moves in 20902 and 20906.",
              "We arrive with all supplies — no need to leave anything behind for us.",
              "Full landlord-standard clean — every room, every surface, nothing missed.",
              "100% satisfaction — if your landlord spots anything, we return free of charge.",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Wheaton, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Wheaton"
        citySlug="wheaton-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={wheatonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Wheaton" />

      <LocationQuoteSection cityName="Wheaton" serviceLabel="Move-Out Cleaning" defaultService="move" zipLine="Serving Wheaton and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default WheatonMoveOutCleaningPage;
