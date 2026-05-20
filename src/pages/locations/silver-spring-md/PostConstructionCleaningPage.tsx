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

const PAGE_URL = "https://capitalcleancare.com/locations/silver-spring-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Silver Spring?",
    a: "Priced by square footage and scope of the project. Get your exact quote in 60 seconds — free, no commitment. We typically schedule within 24–48 hours of your request throughout Silver Spring.",
  },
  {
    q: "Do you use HEPA vacuums for construction dust?",
    a: "Yes. We use HEPA-filter equipment specifically designed to capture fine construction particulate, including drywall silica. Standard vacuums recirculate this dust — our equipment removes it.",
  },
  {
    q: "How soon after construction can you come to Silver Spring?",
    a: "As soon as your contractors are done. We typically schedule within 24–48 hours of your request throughout Silver Spring ZIP codes: 20901, 20902, 20903, 20906, and 20910.",
  },
  {
    q: "Can you handle larger commercial post-construction projects in Silver Spring?",
    a: "Yes — we handle both residential renovations and light commercial post-construction cleaning. Contact us for custom quotes on larger projects or phased renovation cleanup.",
  },
  {
    q: "Are you insured for post-construction work?",
    a: "Fully licensed, bonded, and insured. All team members are background-checked before working on any post-construction project in Silver Spring, residential or commercial.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "Yes, with appropriate protocols to protect the occupied areas. Many Silver Spring clients have multi-phase renovations and need interim cleaning while work continues on other sections.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Silver Spring and the greater Montgomery County area. We've cleaned post-construction homes throughout Downtown Silver Spring, Woodside, and Long Branch.",
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

const silverSpringServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const SilverSpringPostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning in Silver Spring, MD — Dust-Free, Move-In Ready",
    description:
      "Post-construction cleaning in Silver Spring, MD. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote.",
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
          { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
          { label: "Post-Construction Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Silver Spring, MD",
          "Downtown Silver Spring, MD",
          "Woodside, Silver Spring MD",
          "Long Branch, Silver Spring MD",
          "Four Corners, Silver Spring MD",
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
        serviceName="Post-Construction Cleaning in Silver Spring, MD"
        description="Post-construction and post-renovation cleaning in Silver Spring, MD. HEPA-equipped team for drywall dust, paint splatters, and construction residue. Three-phase process. Move-in ready results guaranteed."
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
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Post-Construction Cleaning in Silver Spring, MD"
        lead="Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your Silver Spring home, from Downtown Silver Spring to Four Corners. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready."
        cityName="Silver Spring"
        state="MD"
        zipRange="20901–20910"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Silver Spring, MD — HEPA-equipped, move-in ready results"
        ctaPrimary="Get a Post-Construction Quote in Silver Spring"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Silver Spring"
        categories={checklistCategories}
      />

      {/* Why Specialist */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Post-Construction Requires a Specialist in Silver Spring
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Construction dust — especially drywall silica — settles into HVAC vents, inside
              cabinets, and on every horizontal surface in your Silver Spring home. In the 20901
              and 20902 ZIP codes we serve near Silver Spring Town Center, we regularly encounter
              renovations where fine dust has penetrated places a standard cleaning crew without
              HEPA equipment would simply redistribute rather than remove.
            </p>
            <p>
              Capital Clean Care's team is trained and equipped specifically for post-construction
              environments. Our three-phase process — rough clean, detail clean, and final
              inspection — addresses the full scope of post-renovation cleanup systematically.
              We don't rush a post-construction clean through a standard checklist; we approach
              each Silver Spring project by the scope and nature of what was done.
            </p>
          </div>

          {/* Who Books */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Who Books Post-Construction Cleaning in Silver Spring
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Homeowners after kitchen, bathroom, or whole-home renovations in Woodside",
              "General contractors preparing final project delivery near Downtown Silver Spring",
              "Developers completing new construction in 20901 and 20902",
              "Real estate investors flipping rental properties in Long Branch",
              "Commercial property managers after tenant build-outs in Fenton Village",
              "Homeowners after basement finishing near Sligo Creek",
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
              Silver Spring Homeowners After Their Renovations
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
                "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough."
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
                Serving Silver Spring renovations from Woodside to Long Branch. Share your
                post-renovation experience with your neighbors.
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

      {/* Silver Spring Renovation Market */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Silver Spring's Active Home Renovation Market
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Silver Spring is one of Montgomery County's most active renovation markets. Older
              homes in the Long Branch corridor and around Sligo Creek regularly undergo full
              kitchen and bathroom renovations. Properties near Four Corners and Woodside see
              phased renovations as families expand and update finishes. In the 20901 ZIP code
              near Downtown Silver Spring, condo and apartment owners frequently complete
              flooring and tile installations that leave fine drywall silica and grout haze
              in every corner — in HVAC vents, inside cabinets, along baseboards, and on
              window tracks.
            </p>
            <p>
              Capital Clean Care has cleaned post-renovation homes throughout Silver Spring's
              neighborhoods. A renovation in a 1970s Long Branch split-level leaves a different
              dust profile than a kitchen remodel in a newer Fenton Village townhome. Our
              HEPA-equipped team approaches each project by the scope and nature of what was
              done — not a generic checklist applied uniformly regardless of whether the work
              was a single bathroom tile replacement or a full-floor renovation.
            </p>
            <p>
              For general contractors completing projects in 20901 or 20902, we offer white-label
              final cleaning services you can present to your client as part of your project
              delivery package. Fully insured, bonded, and consistent — we won't embarrass you
              on your final walkthrough. Many Silver Spring contractors maintain ongoing
              relationships with Capital Clean Care precisely because our post-construction
              results hold up to a homeowner's first close inspection of their renovated space.
              Call (240) 704-2551 to discuss recurring post-construction partnerships for your
              active project pipeline throughout Silver Spring.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Silver Spring, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Silver Spring"
        citySlug="silver-spring-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
        services={silverSpringServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Silver Spring" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready for a Dust-Free Home in Silver Spring?
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Silver Spring renovations near AFI Silver Theatre, across ZIPs 20901, 20902,
            20910. Get a free post-construction cleaning quote in 60 seconds — or call
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

export default SilverSpringPostConstructionCleaningPage;
