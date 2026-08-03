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

const PAGE_URL = "https://capitalcleancare.com/locations/kensington-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Kensington?",
    a: "Priced by square footage and scope of the project. Get your exact quote in 60 seconds — free, no commitment. We typically schedule within 24–48 hours of your request throughout Kensington.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate, including drywall silica. Standard vacuums recirculate this dust — our equipment removes it.",
  },
  {
    q: "How soon after construction can you come to Kensington?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request throughout Kensington's 20895 ZIP code.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Kensington?",
    a: "Yes — we handle both residential renovations and light commercial post-construction cleaning. Contact us for custom quotes on larger projects or phased renovation cleanup.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before working on any post-construction project in Kensington.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas. Many Kensington clients have multi-phase renovations and need interim cleaning while work continues in other sections.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Kensington and the greater Montgomery County area. We live and work in this community.",
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

const kensingtonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const KensingtonPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Kensington, MD",
    description:
      "Post-construction cleaning in Kensington, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
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
          { label: "Kensington, MD", href: "/locations/kensington-md" },
          { label: "Post-Construction Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Kensington, MD",
          "Kensington Historic District, MD",
          "Rock Creek Hills, Kensington MD",
          "Rock Creek Knolls, Kensington MD",
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
        serviceName="Post-Construction Cleaning in Kensington, MD"
        description="Post-construction and post-renovation cleaning in Kensington, MD. HEPA-equipped team for drywall dust, paint splatters, and construction residue. Three-phase process. Move-in ready results guaranteed."
        url={PAGE_URL}
        areaServed={["Kensington, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Kensington, MD", href: "/locations/kensington-md" },
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Post-Construction Cleaning in Kensington, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Kensington home, from Kensington Historic District to Rock Creek Hills. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Kensington"
        state="MD"
        zipRange="20895"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Kensington, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Kensington"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Kensington"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Kensington" citySlug="kensington-md" serviceSlug="post-construction-cleaning" serviceLabel="Post-Construction Cleaning" />

      {/* Why Specialist */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Kensington
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Construction dust — especially drywall silica — settles into HVAC vents, inside
              cabinets, and on every horizontal surface in your Kensington home. In the 20895
              ZIP code we serve near Kensington Antique Row, we regularly encounter renovations
              where fine dust has penetrated into places a standard cleaning crew without HEPA
              equipment would simply redistribute rather than remove.
            </p>
            <p>
              Capital Clean Care's team is trained and equipped specifically for post-construction
              environments. Our three-phase process — rough clean, detail clean, and final
              inspection — addresses the full scope of post-renovation cleanup systematically.
              We don't rush a post-construction clean through a standard checklist; we approach
              each project by the scope of the work that was done.
            </p>
          </div>

          {/* Who Books */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Who Books Post-Construction Cleaning in Kensington
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Homeowners after kitchen, bathroom, or whole-home renovations in Rock Creek Knolls",
              "General contractors preparing final project delivery near Connecticut Avenue",
              "Developers completing new construction in 20895",
              "Real estate investors preparing rental properties in Rock Creek Hills",
              "Commercial property managers after tenant build-outs",
              "Homeowners after basement finishing in the Kensington Historic District",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kensington Renovation Market */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Kensington's Historic Home Renovation Market
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kensington is one of Montgomery County's most distinctive residential communities,
              with a large stock of Victorian and early 20th-century homes in the Historic District
              and along the Connecticut Avenue corridor. These older homes renovate differently —
              original plaster walls, antique tile, and older HVAC systems mean construction dust
              travels further and settles deeper than in newer construction.
            </p>
            <p>
              Capital Clean Care has cleaned post-renovation homes throughout Kensington's
              neighborhoods. A full kitchen renovation in a 1920s Kensington Historic District
              property leaves different dust profiles than a bathroom remodel in Rock Creek Hills.
              Our HEPA-equipped team approaches each project based on the scope and nature of
              what was done — not a generic checklist applied regardless of context.
            </p>
            <p>
              For general contractors completing projects in 20895, we offer white-label final
              cleaning services that you can present to your client as part of your project
              delivery. Fully insured, bonded, and consistent — we won't embarrass you on your
              final walkthrough. Call (240) 704-2551 to discuss ongoing post-construction
              partnerships for active project pipelines in Kensington. You can also pair our
              service with a{" "}
              <Link to="/locations/kensington-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              or transition to{" "}
              <Link to="/locations/kensington-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              once you've moved back in.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Kensington, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Kensington"
        citySlug="kensington-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
        services={kensingtonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Kensington" />

      <LocationQuoteSection cityName="Kensington" serviceLabel="Post-Construction Cleaning" defaultService="post-construction" zipLine="Serving Kensington and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default KensingtonPostConstructionCleaningPage;
