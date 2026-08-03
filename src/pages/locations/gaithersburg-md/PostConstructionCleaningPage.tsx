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

const PAGE_URL = "https://capitalcleancare.com/locations/gaithersburg-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Gaithersburg?",
    a: "Priced by square footage and scope of the project. Get your exact quote in 60 seconds — free, no commitment. We typically schedule within 24–48 hours of your request throughout Gaithersburg.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate, including drywall silica. Standard vacuums recirculate this dust — our equipment removes it.",
  },
  {
    q: "How soon after construction can you come to Gaithersburg?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request throughout all Gaithersburg ZIP codes: 20877, 20878, 20879.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Gaithersburg?",
    a: "Yes — we handle both residential renovations and light commercial post-construction cleaning. Contact us for custom quotes on larger projects or phased renovation cleanup.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before working on any post-construction project, residential or commercial.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas. Many Gaithersburg clients have multi-phase renovations and need interim cleaning while work continues on other sections.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Gaithersburg and the greater Montgomery County area. We've cleaned post-construction homes throughout Kentlands, Crown Farm, and Lakelands.",
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

const gaithersburgServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Germantown", slug: "germantown-md", state: "MD" },
];

const GaithersburgPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Gaithersburg, MD",
    description:
      "Post-construction cleaning in Gaithersburg, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
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
          { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
          { label: "Post-Construction Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Gaithersburg, MD",
          "Kentlands, Gaithersburg MD",
          "Crown Farm, Gaithersburg MD",
          "Lakelands, Gaithersburg MD",
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
        serviceName="Post-Construction Cleaning in Gaithersburg, MD"
        description="Post-construction and post-renovation cleaning in Gaithersburg, MD. HEPA-equipped team for drywall dust, paint splatters, and construction residue. Three-phase process. Move-in ready results guaranteed. Serving Kentlands, Crown Farm, Lakelands, and all Gaithersburg ZIP codes."
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
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Post-Construction Cleaning in Gaithersburg, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Gaithersburg home, from Kentlands to Lakelands. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Gaithersburg"
        state="MD"
        zipRange="20877–20879"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Gaithersburg, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Gaithersburg"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Gaithersburg"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Gaithersburg" citySlug="gaithersburg-md" serviceSlug="post-construction-cleaning" serviceLabel="Post-Construction Cleaning" />

      {/* Why Specialist */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Gaithersburg
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Construction dust — especially drywall silica — settles into HVAC vents, inside
              cabinets, and on every horizontal surface in your Gaithersburg home. In the 20877 and
              20878 ZIP codes we serve near Kentlands Market Square, we regularly encounter
              renovations where fine dust has penetrated into places a standard cleaning crew
              without HEPA equipment would simply redistribute rather than remove.
            </p>
            <p>
              Capital Clean Care's team is trained and equipped specifically for post-construction
              environments. Our three-phase process — rough clean, detail clean, and final
              inspection — addresses the full scope of post-renovation cleanup systematically. We
              don't rush a post-construction clean through a standard checklist; we approach each
              project by the scope and nature of the work that was done. A Crown Farm kitchen
              remodel leaves a very different dust profile than a whole-floor renovation in Lakelands.
            </p>
          </div>

          {/* Who Books */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Who Books Post-Construction Cleaning in Gaithersburg
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Homeowners after kitchen, bathroom, or whole-home renovations in Crown Farm",
              "General contractors preparing final project delivery near Kentlands Market Square",
              "Developers completing new construction in 20877 and 20879",
              "Real estate investors preparing rental properties in Lakelands",
              "Commercial property managers after tenant build-outs",
              "Homeowners after basement finishing in the Quince Orchard area",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gaithersburg Renovation Market */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Gaithersburg's Active Home Renovation Market
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Gaithersburg is one of Montgomery County's most dynamic renovation markets. Established
              neighborhoods like Kentlands and Lakelands see consistent kitchen and bathroom updates
              as homeowners modernize finishes. Crown Farm and newer developments along the 20878
              corridor experience frequent renovation activity as properties change hands. In the
              20877 and 20879 ZIP codes, older homes regularly undergo full-floor renovations that
              leave fine drywall silica and construction residue throughout HVAC systems, inside
              cabinetry, and along every baseboard.
            </p>
            <p>
              Capital Clean Care has cleaned post-renovation homes throughout all of these
              Gaithersburg neighborhoods. A tile installation in a Kentlands bathroom leaves a
              different cleanup profile than a full kitchen gut renovation in Crown Farm — and we
              approach each one accordingly. Our HEPA-equipped team doesn't apply a generic checklist;
              we assess the scope of the work that was done and clean to match.
            </p>
            <p>
              For general contractors completing projects in Gaithersburg, we offer white-label
              final cleaning services that you can present to your client as part of your project
              delivery. Fully insured, bonded, and consistent — we won't embarrass you on your
              final walkthrough. Call (240) 704-2551 to discuss recurring post-construction
              partnerships for active project pipelines throughout Gaithersburg and the broader
              Montgomery County market.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Gaithersburg, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Gaithersburg"
        citySlug="gaithersburg-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
        services={gaithersburgServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Gaithersburg" />

      <LocationQuoteSection cityName="Gaithersburg" serviceLabel="Post-Construction Cleaning" defaultService="post-construction" zipLine="Serving Gaithersburg and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default GaithersburgPostConstructionCleaningPage;
