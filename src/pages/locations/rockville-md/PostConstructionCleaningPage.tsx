import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import StickyMobileCTA from "@/components/StickyMobileCTA";
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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/post-construction-cleaning";

const faqs = [
  {
    q: "How much does post-construction cleaning cost in Rockville?",
    a: "Post-construction cleaning is quoted from the affected square footage, project type, dust level, residue, access, occupied versus empty condition, and requested add-ons. A bathroom remodel and a whole-home renovation require very different labor. We provide a written scope and price after reviewing project details; larger jobs may require photos or a walkthrough.",
  },
  {
    q: "How is post-construction cleaning different from deep cleaning?",
    a: "Deep cleaning addresses accumulated household soil in a lived-in home. Post-construction cleaning is planned around fine building dust and project residue, often requiring repeated top-to-bottom passes, detailed cabinet and fixture cleaning, and finish-specific removal of labels, adhesive, paint specks, or grout haze when included in the written scope.",
  },
  {
    q: "When should I schedule the final clean after a Rockville renovation?",
    a: "Schedule the final clean after construction trades have finished, required inspections and punch-list work are complete, major debris has been removed, and utilities are operating. Cleaning too early allows new cutting, sanding, or touch-up work to create another layer of dust. If work is phased, ask about an interim clean and a separate final detail clean.",
  },
  {
    q: "What must the contractor remove before Capital Clean Care arrives?",
    a: "The work area should be safe to enter and free of active construction, exposed hazards, wet coatings, and large or heavy construction debris. Contractors should remove lumber, drywall sheets, tile boxes, sharp waste, hazardous material, and job-site equipment unless a different arrangement is documented in the quote.",
  },
  {
    q: "Can you remove paint specks, adhesive, stickers, or grout haze?",
    a: "These items can be included after the material and affected finish are evaluated. Removal methods must be compatible with new flooring, glass, tile, stone, cabinetry, paint, and hardware. Heavy residue, cured coatings, scratched surfaces, or contractor defects may require the installer or a specialized restoration professional.",
  },
  {
    q: "Do you clean occupied homes during phased renovations?",
    a: "We can assess occupied-home projects, but the active work zone must be separated and safe. Tell us which rooms remain occupied, how dust containment is being handled, where equipment can be staged, and whether children or pets will be present. The quote will distinguish interim dust control from the final post-construction clean.",
  },
  {
    q: "Does post-construction cleaning include air-duct cleaning or hazardous-material remediation?",
    a: "No. We clean reachable register and vent surfaces when included, but we do not clean inside duct systems or remediate asbestos, lead, mold, silica hazards, or other hazardous materials. Those conditions require appropriately qualified specialists and must be resolved before routine cleaning begins.",
  },
  {
    q: "Which Rockville areas do you serve for post-renovation cleaning?",
    a: "We serve residential projects across Rockville ZIP codes 20850, 20851, 20852, and 20853, including King Farm, Fallsgrove, Twinbrook, West End, College Gardens, Woodley Gardens, and Rockville Town Center. Availability is confirmed from the project address and requested date.",
  },
  {
    q: "Are Capital Clean Care teams insured and background-checked?",
    a: "Yes. Capital Clean Care is insured, and team members are background-checked and trained. If a condominium, property manager, or contractor needs current insurance documentation or specific access information, request it before scheduling so requirements can be confirmed.",
  },
];

const checklistCategories = [
  {
    heading: "Phase 1 — Project Readiness",
    items: [
      "Confirm trades and punch-list work are complete",
      "Document new finishes and sensitive materials",
      "Confirm large debris and job-site equipment are removed",
      "Plan access, parking, water, power, and occupied areas",
    ],
  },
  {
    heading: "Phase 2 — Detail Clean",
    items: [
      "HEPA-filtered vacuuming of agreed reachable surfaces",
      "Clean reachable HVAC register and vent exteriors",
      "Wipe cabinet interiors when included in the scope",
      "Evaluate paint specks, labels, adhesive, and grout haze",
      "Detail bathrooms, kitchen surfaces, and fixtures",
      "Clean interior glass, tracks, and frames when included",
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
      "Review completed work against the written scope",
    ],
  },
  {
    heading: "Specialized Surfaces",
    items: [
      "Finish-compatible treatment for paint specks",
      "Grout-haze assessment on new tile",
      "Adhesive and label-residue assessment",
      "New appliance and cabinetry detail by request",
    ],
  },
];

const rockvilleServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
];

const RockvillePostConstructionCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Post-Construction Cleaning Rockville, MD | HEPA Detail",
    description:
      "Post-construction cleaning in Rockville, MD for remodels and new builds. Written scope, HEPA-filtered dust removal, finish-safe detailing and free quotes.",
    canonical: PAGE_URL,
    ogImage: "/images/team/team-post-construction.jpg",
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
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "Post-Construction Cleaning", href: PAGE_URL },
        ]}
      />
      <WebPageSchema
        name="Post-Construction Cleaning in Rockville, MD"
        description="Post-construction and post-renovation cleaning for Rockville homes, with a written scope, HEPA-filtered dust removal, finish-aware detailing, and clear exclusions."
        url={PAGE_URL}
        dateModified="2026-08-23"
        cityName="Rockville"
        stateCode="Maryland"
        primaryImage="https://capitalcleancare.com/images/team/team-post-construction.jpg"
      />
      <LocalBusinessSchema
        areaServed={[
          "Rockville, MD",
          "King Farm, Rockville MD",
          "Twinbrook, Rockville MD",
          "Fallsgrove, Rockville MD",
          "Montgomery County, MD",
        ]}
      />
      <ServiceSchema
        serviceName="Post-Construction Cleaning in Rockville, MD"
        description="Post-construction and post-renovation cleaning in Rockville, MD, with HEPA-filtered dust removal, finish-aware detail cleaning, a written scope, and clear project-readiness requirements."
        url={PAGE_URL}
        areaServed={["Rockville, MD", "20850", "20851", "20852", "20853", "Montgomery County, MD"]}
        serviceType="Post-Construction Cleaning"
        image="https://capitalcleancare.com/images/team/team-post-construction.jpg"
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Rockville, MD", href: "/locations/rockville-md" },
              { label: "Post-Construction Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Post-Construction Cleaning in Rockville, MD"
        lead="After a remodel or new build, fine dust and project residue require a different scope than routine house cleaning. Capital Clean Care provides post-construction and post-renovation cleaning across Rockville with HEPA-filtered equipment, finish-aware methods, and a written project scope."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-post-construction.jpg"
        heroImageAlt="Capital Clean Care post-construction cleaning in Rockville, MD — HEPA-equipped team delivering move-in ready results"
        ctaPrimary="Get a Post-Construction Quote"
      />

      {/* Answer-first local intent block */}
      <section className="py-12 md:py-16 border-b border-border" aria-labelledby="rockville-post-construction-answer">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-sm font-semibold text-accent mb-3">Updated August 23, 2026 · Rockville ZIP codes 20850–20853</p>
          <h2 id="rockville-post-construction-answer" className="font-heading text-2xl md:text-3xl font-bold mb-5">
            What is post-construction cleaning in Rockville?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            Post-construction cleaning is the detailed cleaning performed after renovation or building work and before normal use of the space. In a Rockville home, the agreed scope may include repeated removal of fine dust from reachable surfaces, cabinet interiors, trim, fixtures, window tracks, floors, and reachable vent exteriors, followed by finish-compatible treatment of labels, adhesive, paint specks, or grout haze when appropriate. It is different from a standard deep clean because the team must first evaluate new materials, construction residue, job-site readiness, and whether the property is empty or occupied. Capital Clean Care provides a written quote that identifies included rooms, requested add-ons, exclusions, access requirements, and whether one final clean or multiple phases are appropriate. Large construction debris, active job-site hazards, duct cleaning, and hazardous-material remediation are not assumed to be part of routine post-construction cleaning.
          </p>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <Link to="/services/post-construction-cleaning" className="font-semibold text-accent hover:underline">Review our full post-construction service</Link>
            <Link to="/resources/post-construction-cleaning-montgomery-county-md" className="font-semibold text-accent hover:underline">Read the Montgomery County planning guide</Link>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What Our Post-Construction Cleaning Covers in Rockville"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Rockville" citySlug="rockville-md" serviceSlug="post-construction-cleaning" serviceLabel="Post-Construction Cleaning" />

      {/* Project fit and local scheduling */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Which Rockville projects need post-renovation cleaning?
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-7">
            The service is appropriate when a project creates fine dust or installation residue that routine cleaning is not designed to handle. The quote is based on what was built, the affected materials, and the condition at handoff—not simply the number of bedrooms.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Kitchen remodels: cabinetry interiors, counters, fixtures, appliance exteriors, floors, and agreed residue removal",
              "Bathroom renovations: tile, grout haze assessment, vanities, mirrors, fixtures, trim, and floor detailing",
              "Basement finishing: drywall and sanding dust, trim, doors, reachable vents, floors, and window wells or tracks when included",
              "Flooring projects: repeated dust removal plus finish-compatible cleaning for hardwood, tile, LVP, or stone",
              "Whole-home renovations: phased planning, room-by-room scope, repeated dust passes, and a final inspection",
              "New construction or additions: final interior detail after trades, inspections, punch work, and debris removal are complete",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Schedule the clean after permits, inspections, and punch work
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The City of Rockville explains that many residential and commercial construction projects require permits and that most permits require one or more inspections before the work is considered final. That matters for cleaning: the best time for a final post-construction clean is after required inspections and contractor corrections are complete, not while sanding, cutting, painting, or fixture installation is still producing new dust.
            </p>
            <p>
              Before booking, confirm that water and electricity are available, wet paint and sealants have cured according to the installer's instructions, large debris has been removed, and the team can safely access every included room. Condominiums and managed buildings should also confirm loading, elevator, parking, certificate-of-insurance, and permitted service-hour requirements.
            </p>
            <p>
              Review the City of Rockville's{" "}
              <a href="https://www.rockvillemd.gov/services/apply-for-a-building-or-trade-permit/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
                official building and trade permit guidance
              </a>{" "}
              with your contractor. Capital Clean Care does not determine whether a project passed inspection; our responsibility is to complete the cleaning items documented in your written scope once the site is ready.
            </p>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            What is not automatically included?
          </h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="grid md:grid-cols-3">
              {[
                { title: "Confirm in the quote", text: "Cabinet interiors, interior windows, stickers, adhesive, paint specks, grout haze, appliance interiors, wall washing, and photo documentation." },
                { title: "Contractor responsibility", text: "Active construction, sharp or heavy debris, lumber, drywall sheets, tile boxes, equipment, uncured coatings, and repair of installation defects." },
                { title: "Specialist required", text: "Air-duct cleaning, carpet restoration, exterior pressure washing, asbestos, lead, mold, hazardous dust, biohazards, and regulated waste." },
              ].map((item) => (
                <div key={item.title} className="p-5 border-b last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 border-border">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Post-Construction Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="Post-Construction Cleaning"
        serviceSlug="post-construction-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Rockville" />

      <LocationQuoteSection cityName="Rockville" serviceLabel="Post-Construction Cleaning" defaultService="post-construction" zipLine="Serving Rockville across ZIPs 20850, 20851, 20852, and 20853." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvillePostConstructionCleaningPage;
