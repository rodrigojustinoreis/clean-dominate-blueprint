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

const PAGE_URL = "https://capitalcleancare.com/locations/olney-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Olney?",
    a: "Priced by square footage and scope of the project. Get your exact quote in 60 seconds — free, no commitment. We typically schedule within 24–48 hours of your request throughout Olney 20832.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate including drywall silica. Standard vacuums recirculate this dust — our equipment removes it.",
  },
  {
    q: "How soon after construction can you come to Olney?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request throughout Olney's 20832 ZIP code.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Olney?",
    a: "Yes — we handle both residential renovations and light commercial post-construction cleaning. Contact us for custom quotes on larger projects or phased renovation cleanup.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before working on any post-construction project in Olney.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas. Many Olney clients have multi-phase renovations and need interim cleaning while work continues on other sections.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Olney and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Phase 1 — Rough Clean",
    items: [
      "Remove large debris and packaging",
      "Sweep and vacuum heavy construction dust",
      "Remove leftover materials and supplies",
      "Initial floor sweep all rooms",
    ],
  },
  {
    heading: "Phase 2 — Detail Clean",
    items: [
      "HEPA vacuum all surfaces (walls, ceilings, floors)",
      "Clean HVAC registers and vents",
      "Wipe and wash every cabinet interior",
      "Remove paint splatters and adhesive residue",
      "Deep-clean bathrooms and appliances",
      "Wash windows, tracks, and frames",
      "Wipe baseboards and door frames",
      "Scrub floors and grout",
    ],
  },
  {
    heading: "Phase 3 — Final Inspection",
    items: [
      "Touch-up any missed areas",
      "Final dust pass all surfaces",
      "Confirm all rooms are move-in ready",
      "Photo documentation available",
    ],
  },
  {
    heading: "Specialized Surfaces",
    items: [
      "Paint splatter removal from floors",
      "Grout haze removal from tile",
      "Construction adhesive removal",
      "New appliance first clean",
    ],
  },
];

const olneyServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const OlneyPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Olney, MD",
    description:
      "Post-construction cleaning in Olney, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-post-construction.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Olney, MD", href: "/locations/olney-md" },
          { label: "Post-Construction Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Olney, MD",
          "Olney Mill, Olney MD",
          "Norbeck, Olney MD",
          "Brooke Manor, Olney MD",
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
        serviceName="Post-Construction Cleaning in Olney, MD"
        description="Post-construction and post-renovation cleaning in Olney, MD. HEPA-equipped team for drywall dust, paint splatters, and construction residue. Three-phase process. Move-in ready results. Serving all of Olney's 20832 ZIP code."
        url={PAGE_URL}
        areaServed={["Olney, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Olney, MD", href: "/locations/olney-md" },
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Post-Construction Cleaning in Olney, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Olney home, from Olney Mill to Williamsburg Village. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Olney"
        state="MD"
        zipRange="20832"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Olney, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Olney"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Olney"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Olney" citySlug="olney-md" serviceSlug="post-construction-cleaning" serviceLabel="Post-Construction Cleaning" />

      {/* Why Specialist */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Olney
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Construction dust — especially drywall silica — settles into HVAC vents, inside
              cabinets, and on every horizontal surface in Olney homes throughout the 20832 ZIP code.
              Near Olney Theatre Center and throughout Norbeck, we regularly encounter post-renovation
              properties where fine particulate has penetrated into places a standard cleaning crew
              without HEPA equipment would simply redistribute rather than remove.
            </p>
            <p>
              Capital Clean Care's team is trained and equipped specifically for post-construction
              environments. Our three-phase process — rough clean, detail clean, and final inspection
              — addresses the full scope of post-renovation cleanup systematically. We don't apply a
              standard checklist regardless of the scope; we evaluate what was done and approach the
              clean accordingly. A full kitchen gut renovation in Olney Mill leaves a different dust
              and residue profile than a bathroom tile replacement in Brooke Manor.
            </p>
          </div>

          {/* Who Books */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Who Books Post-Construction Cleaning in Olney
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Homeowners after kitchen, bathroom, or whole-home renovations in Norbeck",
              "General contractors preparing final project delivery in Olney 20832",
              "Developers completing new construction along the Georgia Avenue corridor",
              "Real estate investors preparing rental properties in Olney Mill",
              "Commercial property managers after tenant build-outs",
              "Homeowners after basement finishing or whole-floor renovations",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Olney Renovation Market */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Olney's Active Home Renovation Market
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Olney is an active renovation market with a strong mix of 1970s–1990s colonials in
              neighborhoods like Olney Mill and Norbeck that regularly undergo kitchen and bathroom
              updates. Newer sections along the MD-108/Georgia Ave intersection see phased renovations
              as properties change hands and owners modernize finishes. Brooke Manor and Sparkling
              Spring homeowners frequently undertake full-floor renovations that leave fine drywall
              silica and grout haze distributed through HVAC vents, inside cabinets, along baseboards,
              and throughout window tracks.
            </p>
            <p>
              Capital Clean Care has cleaned post-renovation properties throughout these Olney
              neighborhoods. The dust profile from a 1980s Olney Mill split-level renovation differs
              from a newer bathroom remodel in Williamsburg Village, and we approach each project
              accordingly. Our HEPA-equipped team doesn't apply a generic checklist — we assess the
              scope of the work that was done and clean to genuinely move-in ready standards.
            </p>
            <p>
              For general contractors completing projects in Olney's 20832 ZIP code, we offer
              white-label final cleaning services you can present to your client as part of project
              delivery. Fully insured, bonded, consistent, and background-checked — we won't
              embarrass you on the final walkthrough. Call (240) 704-2551 to discuss recurring
              post-construction partnerships or to get a custom quote for your current project.
              We also handle{" "}
              <Link to="/locations/olney-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              and{" "}
              <Link to="/locations/olney-md/move-out-cleaning" className="text-primary underline">
                move out cleaning
              </Link>{" "}
              for homeowners who need comprehensive service beyond the renovation itself.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Olney, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Olney"
        citySlug="olney-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
        services={olneyServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Olney" />

      <LocationQuoteSection cityName="Olney" serviceLabel="Post-Construction Cleaning" defaultService="post-construction" zipLine="Serving Olney and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default OlneyPostConstructionCleaningPage;
