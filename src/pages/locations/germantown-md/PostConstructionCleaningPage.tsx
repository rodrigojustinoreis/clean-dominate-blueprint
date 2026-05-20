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

const PAGE_URL = "https://capitalcleancare.com/locations/germantown-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Germantown?",
    a: "Priced by square footage and scope of the project. Get your exact quote in 60 seconds — free, no commitment. We typically schedule within 24–48 hours of your request across Germantown's 20874 and 20876 ZIP codes.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate, including drywall silica. Standard vacuums recirculate this dust — our equipment removes it.",
  },
  {
    q: "How soon after construction can you come to Germantown?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request throughout all Germantown ZIP codes: 20874, 20875, and 20876.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Germantown?",
    a: "Yes — we handle both residential renovations and light commercial post-construction cleaning near Milestone Shopping Center and across Germantown. Contact us for custom quotes on larger projects.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before working on any post-construction project.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas. Many Germantown clients have multi-phase renovations and need interim cleaning while work continues on other sections.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Germantown and the greater Montgomery County area. We've cleaned post-construction homes throughout Milestone, Kingsview, and Churchill Village.",
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

const germantownServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

const GermantownPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Germantown, MD — Dust-Free, Move-In Ready",
    description:
      "Post-construction cleaning in Germantown, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
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
          { label: "Germantown, MD", href: "/locations/germantown-md" },
          { label: "Post-Construction Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Germantown, MD",
          "Milestone, Germantown MD",
          "Kingsview, Germantown MD",
          "Churchill Village, Germantown MD",
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
        serviceName="Post-Construction Cleaning in Germantown, MD"
        description="Post-construction and post-renovation cleaning in Germantown, MD. HEPA-equipped team for drywall dust, paint splatters, and construction residue. Three-phase process. Move-in ready results guaranteed."
        url={PAGE_URL}
        areaServed={["Germantown, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Germantown, MD", href: "/locations/germantown-md" },
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Post-Construction Cleaning in Germantown, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Germantown home, from Milestone to Churchill Village. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Germantown"
        state="MD"
        zipRange="20874–20876"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Germantown, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Germantown"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Germantown"
        categories={checklistCategories}
      />

      {/* Why Specialist */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Germantown
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Construction dust — especially drywall silica — settles into HVAC vents, inside cabinets,
              and on every horizontal surface in your Germantown home. In the 20874 and 20876 ZIP codes
              we serve near Milestone Shopping Center, we regularly encounter renovations where fine dust
              has penetrated into places a standard cleaning crew without HEPA equipment would simply
              redistribute rather than remove.
            </p>
            <p>
              Capital Clean Care's team is trained and equipped specifically for post-construction
              environments. Our three-phase process — rough clean, detail clean, and final inspection —
              addresses the full scope of post-renovation cleanup systematically. We don't rush a
              post-construction clean through a standard checklist; we approach each Germantown project
              by the scope and nature of the work that was done.
            </p>
          </div>

          {/* Who Books */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Who Books Post-Construction Cleaning in Germantown
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Homeowners after kitchen, bathroom, or whole-home renovations in Kingsview",
              "General contractors preparing final project delivery near Milestone",
              "Developers completing new construction in 20874 and 20876",
              "Real estate investors preparing rental properties in Churchill Village",
              "Commercial property managers after tenant build-outs in Germantown Town Center",
              "Homeowners after basement finishing near Great Seneca Creek",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Germantown Homeowners After Their Renovations
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <div role="img" aria-label="5 out of 5 stars" className="flex items-center gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-foreground italic mb-3 leading-relaxed">
                "After our renovation, they got every last bit of construction dust. Professional and
                incredibly thorough. Move-in ready on the first visit."
              </p>
              <p className="text-sm font-semibold text-foreground">Brian G.</p>
              <p className="text-xs text-muted-foreground">Fairfax, VA</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Germantown renovations from Kingsview to Churchill Village. Share your
                post-renovation experience.
              </p>
              <a
                href="https://g.page/r/capitalcleancare/review"
                className="text-sm text-primary underline font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Leave a Google Review →
              </a>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            <span className="font-semibold text-foreground">5.0 ★</span> average rating · 47 reviews on Google
          </p>
        </div>
      </section>

      {/* Germantown Renovation Market */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Germantown's Active Home Renovation Market
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Germantown is one of Montgomery County's most active renovation markets. Homes in
              Kingsview Village and near Clopper Road routinely undergo kitchen and bathroom
              renovations. Newer construction near Seneca Valley sees phased renovations as properties
              change hands. In the 20874 ZIP code near Milestone Center, townhome owners frequently
              complete flooring and tile installations that leave fine drywall silica and grout haze
              in every corner — in HVAC vents, inside cabinets, along baseboards, and on window tracks.
            </p>
            <p>
              Capital Clean Care has cleaned post-renovation homes throughout all of Germantown's
              neighborhoods. A renovation in an older Churchill Village property leaves different dust
              profiles than a kitchen remodel in a newer Kingsview townhome. Our HEPA-equipped team
              approaches each project by the scope and nature of what was done — not a generic checklist
              applied uniformly regardless of whether the work was a single bathroom tile replacement
              or a full-floor renovation.
            </p>
            <p>
              For general contractors completing projects in 20874 or 20876, we offer final cleaning
              services that you can present to your client as part of your project delivery. Fully
              insured, bonded, and consistent — we won't embarrass you on the final walkthrough. Call
              (240) 704-2551 to discuss post-construction partnerships for active project pipelines
              throughout Germantown. Many local contractors pair our post-construction service with a
              follow-up{" "}
              <Link to="/locations/germantown-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              once the owners are settled in.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Germantown, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Germantown"
        citySlug="germantown-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
        services={germantownServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Germantown" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Dust-Free Home in Germantown?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Germantown renovations near Seneca Creek State Park, across ZIPs 20874, 20875,
            and 20876. Get a free post-construction cleaning quote in 60 seconds — or call
            (240) 704-2551 to discuss your project. Scheduling within 24–48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Post-Construction Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Fast scheduling · HEPA-equipped team · Licensed, Bonded & Insured
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default GermantownPostConstructionCleaningPage;
