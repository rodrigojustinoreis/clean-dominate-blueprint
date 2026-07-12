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

const PAGE_URL = "https://capitalcleancare.com/locations/potomac-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Potomac?",
    a: "Most Potomac homes take 4–6 hours. Larger homes in Avenel or Glen Echo, or homes with heavy buildup, may take longer. We'll give you a time estimate when you book.",
  },
  {
    q: "How much does a deep cleaning cost in Potomac, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients in Potomac leave a key or use a lockbox. Our bonded, insured, and fully background-checked team handles everything.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, yet non-toxic for your family and pets throughout your Potomac home.",
  },
  {
    q: "Do you do spring cleaning in Potomac?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year, whether you're in ZIP 20854 near Potomac Village or 20859 near the C&O Canal.",
  },
  {
    q: "How often should I get a deep cleaning in Potomac?",
    a: "Once or twice a year is typical for most Potomac homes, combined with regular maintenance cleanings in between. We can recommend a schedule based on your home size and lifestyle.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Potomac and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep",
    items: [
      "Oven interior scrubbed",
      "Microwave interior cleaned",
      "Range hood degreased",
      "Inside cabinets wiped",
      "Faucets descaled",
      "Backsplash scrubbed",
      "Floor deep-mopped",
    ],
  },
  {
    heading: "Bathrooms — Deep",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet deep-cleaned (base, hinges, under rim)",
      "Exhaust fan cleaned",
      "Mirrors edge-to-edge",
      "Vanity inside and out",
    ],
  },
  {
    heading: "All Rooms — Deep",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks",
      "Light switches and outlets",
      "Ceiling fans dusted",
      "Door frames and handles",
      "Under furniture vacuumed",
      "Doors wiped down",
    ],
  },
];

const potomacServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
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

const PotomacDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in Potomac, MD",
    description:
      "Professional deep cleaning in Potomac, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-tile-scrubber.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Potomac, MD", href: "/locations/potomac-md" },
          { label: "Deep Cleaning", href: "/locations/potomac-md/deep-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Potomac, MD",
          "River Falls, Potomac MD",
          "Avenel, Potomac MD",
          "Glen Echo, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Fairfax, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Deep Cleaning in Potomac, MD"
        description="Professional top-to-bottom deep cleaning in Potomac, MD. Inside appliances, grout scrubbing, baseboards, ceiling fans — everything standard cleanings miss. EPA Safer Choice certified. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Potomac, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Potomac, MD", href: "/locations/potomac-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Deep Cleaning Services in Potomac, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Potomac home — from River Falls to Avenel. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Potomac"
        state="MD"
        zipRange="20854"
        heroImage="/images/team/team-tile-scrubber.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Potomac, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Potomac"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Potomac Deep Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Potomac" citySlug="potomac-md" serviceSlug="deep-cleaning" serviceLabel="Deep Cleaning" />

      {/* ── Standard vs Deep ──────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave"],
                  ["General mopping", "Scrubbing grout and tile edges"],
                  ["Dusting surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrubbing, exhaust fans"],
                  ["~2–3 hours", "~4–6 hours"],
                ].map(([standard, deep], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 text-muted-foreground">{standard}</td>
                    <td className="px-4 py-3 text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── When to Book ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            When Should You Book a Deep Clean in Potomac?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Moving into or out of a home in ZIP 20854 or 20859",
              "Spring seasonal reset near the C&O Canal area",
              "Before a special event or holiday gathering",
              "After a long period between professional cleanings",
              "Post-renovation or construction cleanup",
              "Preparing a home for sale or rental listing",
            ].map((reason) => (
              <div key={reason} className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-background">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm text-muted-foreground leading-relaxed">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Deep Cleaning Throughout Potomac, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care provides deep cleaning services across Potomac's ZIP codes 20854
              and 20859. Whether your home is in the River Falls neighborhood, along the River Road
              corridor, or near the trails of the C&O Canal National Historical Park, our team arrives
              with all equipment needed for a thorough, top-to-bottom reset — no shortcuts, no skipped corners.
            </p>
            <p>
              Potomac homes range from spacious single-family residences in Avenel to elegant properties
              in Glen Echo and Bradley Hills. Our deep cleaning checklist is designed to handle the
              specific demands of larger homes — multiple bathrooms, extensive hardwood and tile floors,
              gourmet kitchens with professional appliances. We bring the same standard of care to
              every Potomac property regardless of size.
            </p>
            <p>
              After your deep clean, many Potomac clients transition to our{" "}
              <Link to="/locations/potomac-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              schedule to maintain the results. We also offer{" "}
              <Link to="/locations/potomac-md/house-cleaning" className="text-primary underline">
                standard house cleaning
              </Link>{" "}
              for routine maintenance between deep cleans. Call (240) 704-2551 to discuss the
              best plan for your Potomac home.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Potomac, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Potomac"
        citySlug="potomac-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={potomacServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Potomac" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Potomac" serviceLabel="Deep Cleaning" defaultService="deep" zipLine="Serving Potomac and nearby communities." />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default PotomacDeepCleaningPage;
