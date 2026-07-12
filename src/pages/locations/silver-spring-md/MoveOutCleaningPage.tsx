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

const PAGE_URL = "https://capitalcleancare.com/locations/silver-spring-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Silver Spring?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — free, same-day availability confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Silver Spring?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Leave a key or use a lockbox.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Silver Spring?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20901, 20902, 20910).",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty — completely empty homes are actually preferred for the best results.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Silver Spring and Montgomery County. We clean exactly what landlords and property managers look at.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current home and a deep cleaning for their new one. We coordinate both.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Silver Spring and the greater Montgomery County area. We live and work in this community.",
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
      "Sink scrubbed and sanitized",
      "Microwave interior and exterior",
      "Countertops and backsplash wiped",
      "Floor mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet scrubbed (base, tank, hinges)",
      "Inside vanity and medicine cabinet cleaned",
      "Grout and tile scrubbed",
      "Tub and shower deep-cleaned",
      "Fixtures descaled",
      "Mirrors cleaned",
      "Floor mopped",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Inside all closets wiped",
      "Baseboards and door frames cleaned",
      "Window sills and tracks wiped",
      "Light switches and outlets cleaned",
      "All floors vacuumed and mopped",
      "Spot-clean walls",
      "Ceiling fans dusted",
      "Trash removed",
    ],
  },
];

const silverSpringServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const SilverSpringMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Silver Spring, MD",
    description:
      "Move out cleaning in Silver Spring, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
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
          { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
          { label: "Move Out Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Silver Spring, MD",
          "Downtown Silver Spring, MD",
          "Four Corners, Silver Spring MD",
          "Woodside, Silver Spring MD",
          "Long Branch, Silver Spring MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Marcus L.",
            text: "Got my full deposit back thanks to Capital Clean Care. They cleaned things I didn't even think to check.",
            location: "Silver Spring, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Silver Spring, MD"
        description="Move out cleaning in Silver Spring, MD built to landlord and inspection standards. Inside oven, fridge, cabinets, grout — everything property managers check. Same-day availability. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Silver Spring, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Move Out Cleaning in Silver Spring, MD"
        lead="Moving out in Silver Spring? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Downtown Silver Spring, Four Corners, and all Silver Spring neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Silver Spring"
        state="MD"
        zipRange="20901–20910"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Silver Spring, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Silver Spring"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Silver Spring"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Silver Spring" citySlug="silver-spring-md" serviceSlug="move-out-cleaning" serviceLabel="Move-Out Cleaning" />

      {/* Why It Matters */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Landlords in Silver Spring and across Montgomery County routinely withhold security
              deposits for cleaning deficiencies. The rental market near Downtown Silver Spring,
              around the transit hub, and in Long Branch apartments is competitive — and property
              managers know exactly what to look for. An oven with grease buildup, bathroom grout
              that hasn't been scrubbed, or a refrigerator with food residue can cost you a month
              or more of rent.
            </p>
            <p>
              A professional move out cleaning specifically built to landlord standards is the
              most reliable way to protect your deposit. Our checklist was developed based on
              what property managers in Silver Spring and Montgomery County actually inspect.
              We clean inside the oven, inside cabinets, baseboards, window tracks — not just
              the visible surfaces. The difference between a standard clean and a move-out
              standard clean is exactly what your landlord checks.
            </p>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Our Silver Spring Move Out Cleaning Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book your date — same-day and next-day slots available for urgent moves in 20901 and 20902",
              "We arrive with all supplies — no need to leave anything behind",
              "Full landlord-standard clean — every room, every surface on our complete checklist",
              "100% satisfaction guarantee — if your landlord spots anything, we return free",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-accent/5 rounded-xl border border-accent/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Also need a clean for your new place? Many clients pair our Silver Spring move out clean
              with a{" "}
              <Link to="/locations/silver-spring-md/deep-cleaning" className="text-primary underline font-medium">
                deep cleaning
              </Link>{" "}
              at their new home. For ongoing maintenance after moving in, see our{" "}
              <Link to="/locations/silver-spring-md/recurring-cleaning" className="text-primary underline font-medium">
                recurring cleaning
              </Link>{" "}
              plans serving all Silver Spring ZIP codes.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Silver Spring, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Silver Spring"
        citySlug="silver-spring-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={silverSpringServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Silver Spring" />

      <LocationQuoteSection cityName="Silver Spring" serviceLabel="Move-Out Cleaning" defaultService="move" zipLine="Serving Silver Spring and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default SilverSpringMoveOutCleaningPage;
