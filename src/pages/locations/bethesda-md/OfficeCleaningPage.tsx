import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Building2, CalendarClock, ClipboardCheck, ShieldCheck } from "lucide-react";
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
} from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import HeroLocation from "@/components/location/HeroLocation";
import ServiceChecklistLocation from "@/components/location/ServiceChecklistLocation";
import InternalLinksGrid from "@/components/location/InternalLinksGrid";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import LocationQuoteSection from "@/components/location/LocationQuoteSection";
import { REAL_REVIEWS } from "@/data/realReviews";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/office-cleaning";
const HERO_IMAGE = "/images/locations/bethesda-service-heroes/office-cleaning-hero.webp";
const verifiedReviews = [REAL_REVIEWS[0], REAL_REVIEWS[2], REAL_REVIEWS[4]];

const faqs = [
  {
    q: "How much does office cleaning cost in Bethesda?",
    a: "The written quote considers square footage, traffic, restrooms, break rooms, floor types, frequency, access, consumables, and the tasks assigned to each visit. A walkthrough is the best way to define a commercial scope.",
  },
  {
    q: "Do you clean after business hours in Bethesda?",
    a: "We can discuss early-morning, evening, or weekend service based on team availability, building access, security procedures, and the approved scope.",
  },
  {
    q: "Are your cleaners background-checked for commercial properties?",
    a: "Team members are background-checked, and Capital Clean Care is licensed and insured. Access, keys, alarms, restricted areas, and contact procedures are documented before service begins.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "We define who supplies cleaning products, equipment, liners, paper goods, soap, and other consumables in the proposal so responsibilities are clear.",
  },
  {
    q: "Do you offer eco-conscious office cleaning in Bethesda?",
    a: "Yes. We can build an eco-conscious plan and discuss occupants' sensitivities and material-care requirements. Regulated healthcare, food-service, laboratory, or specialized disinfection protocols require separate review and are not implied by a general office-cleaning scope.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many Bethesda clients begin with a deep cleaning baseline, then move to a recurring service schedule. Call (240) 704-2551 to discuss.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum all carpets",
      "Mop hard floors",
      "Wipe reception furniture",
      "Empty and reline trash",
      "Disinfect door handles and light switches",
      "Clean glass doors and entry surfaces",
    ],
  },
  {
    heading: "Workstations & Conference Rooms",
    items: [
      "Dust all surfaces",
      "Sanitize shared equipment (on request)",
      "Wipe conference tables and chairs",
      "Clean whiteboards (on request)",
    ],
  },
  {
    heading: "Kitchen / Break Room",
    items: [
      "Clean countertops and sink",
      "Wipe appliance exteriors",
      "Empty and reline trash",
      "Mop floor",
    ],
  },
  {
    heading: "Restrooms",
    items: [
      "Disinfect toilets, sinks, and fixtures",
      "Restock paper products (if provided)",
      "Clean mirrors streak-free",
      "Mop floor",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const BethesdaOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning Bethesda MD | Local Team",
    description:
      "Office cleaning in Bethesda, MD with written scopes, flexible schedules, background-checked teams and clear access procedures. Request a commercial quote.",
    canonical: PAGE_URL,
    ogImage: `https://capitalcleancare.com${HERO_IMAGE}`,
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href={HERO_IMAGE} />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "Office Cleaning", href: "/locations/bethesda-md/office-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Bethesda, MD",
          "Bethesda Row, Bethesda MD",
          "Kenwood, Bethesda MD",
          "Woodmont Triangle, Bethesda MD",
          "Montgomery County, MD",
        ]}
        reviews={verifiedReviews}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Bethesda, MD"
        description="Office and light-commercial cleaning in Bethesda, Maryland, with written scopes, documented access procedures, background-checked teams, and flexible schedules."
        url={PAGE_URL}
        areaServed={["Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Bethesda, MD", href: "/locations/bethesda-md" },
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Bethesda, MD"
        lead="Maintain a clean, client-ready Bethesda workplace with a plan built around your space, traffic, floor types, access, and operating hours. We document the scope and security procedure before recurring office service begins."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage={HERO_IMAGE}
        heroImageAlt="Capital Clean Care's local background-checked cleaning team serving Bethesda businesses"
        heroAspectRatio="16/10"
        heroImageWidth={1600}
        heroImageHeight={900}
        heroImageContainerClassName="lg:min-h-[500px]"
        ctaPrimary="Request a Bethesda Office Quote"
        teamTrustLabel="Background-Checked Local Team"
        ctaNote="Written scope · Licensed and insured · Access procedures documented"
        updatedLabel="August 30, 2026"
        updatedDateTime="2026-08-30"
      />

      {/* ── Direct answer for search and AI systems ─────── */}
      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-primary/15 bg-primary/[0.04] p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary mb-3">Quick answer</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              What Does Office Cleaning in Bethesda Include?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Office cleaning is a recurring or one-time service defined by a written task schedule for the workplace. A typical Bethesda scope can include reception areas, workspaces, conference rooms, break rooms, restrooms, trash, dusting, vacuuming, hard-floor care, interior glass, and supplied-consumable restocking. The exact plan depends on square footage, employee and visitor traffic, floor materials, service frequency, building access, and any restricted areas. Capital Clean Care serves qualifying offices and light-commercial spaces in Bethesda ZIP codes 20814, 20815, 20816, and 20817. Before service begins, we document keys or alarms, approved hours, points of contact, supply responsibilities, and how completed work or exceptions are reported. Regulated medical, laboratory, food-service, hazardous-material, and specialty floor-restoration requirements receive separate review.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Bethesda Office Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="office-cleaning" serviceLabel="Office Cleaning" count={3} reviewOverrides={verifiedReviews} showVideo={false} />

      {/* ── Space Types ───────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Commercial Spaces We Clean in Bethesda
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Private & Open-Plan Offices",
                body: "From individual executive suites to open-plan workspaces in Bethesda Row and Woodmont Triangle, we maintain a clean, professional environment for your team.",
              },
              {
                title: "Medical & Dental Offices",
                body: "General environmental cleaning for professional healthcare offices is considered only after reviewing required protocols, restricted areas, and whether specialized compliance is involved.",
              },
              {
                title: "Co-Working Spaces",
                body: "High-traffic shared office spaces in Bethesda's 20814 ZIP code require consistent daily or multi-weekly cleaning to stay presentable for members.",
              },
              {
                title: "Real Estate & Professional Services",
                body: "Client-facing offices in Kenwood and Bradley Hills need to make a strong first impression. We ensure your space reflects the professionalism of your business.",
              },
              {
                title: "Small Retail & Multi-Tenant Suites",
                body: "Retail spaces and multi-tenant office buildings throughout Bethesda's 20815 and 20816 ZIP codes benefit from our flexible, after-hours scheduling.",
              },
              {
                title: "Custom Commercial Scopes",
                body: "Have a unique space or specific requirements? Call (240) 704-2551 and we'll build a custom cleaning plan for your Bethesda commercial property.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-5 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-5 w-5 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Commercial quote factors ─────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            What We Confirm During an Office Walkthrough
          </h2>
          <p className="text-muted-foreground mb-8">
            A walkthrough turns a vague request into a measurable scope your business and cleaning team can verify.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { Icon: Building2, title: "Space and traffic", body: "Square footage, employee and visitor counts, restrooms, break rooms, and high-use areas." },
              { Icon: CalendarClock, title: "Frequency and hours", body: "Service days, approved access window, holidays, building rules, and interruption limits." },
              { Icon: ShieldCheck, title: "Security procedure", body: "Keys, alarms, escorts, restricted areas, points of contact, and incident escalation." },
              { Icon: ClipboardCheck, title: "Scope and reporting", body: "Tasks by visit, periodic details, supplies, quality checks, and completion reporting." },
            ].map(({ Icon, title, body }) => (
              <article key={title} className="rounded-xl border border-border/60 bg-background p-5">
                <Icon className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </article>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-6">
            Small workplace? Review our guide to{" "}
            <Link to="/resources/office-cleaning-small-business-dmv" className="text-primary font-semibold underline">
              office cleaning for DMV small businesses
            </Link>.
          </p>
        </div>
      </section>

      {/* ── Scheduling ────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Flexible Cleaning Schedules for Bethesda Businesses
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Frequency</th>
                  <th className="text-left p-4 font-semibold text-foreground">Best For</th>
                  <th className="text-left p-4 font-semibold text-foreground">Bethesda Use Case</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  [
                    "Daily",
                    "High-traffic offices, 15+ employees",
                    "Busy offices near Bethesda Metro (20814)",
                  ],
                  [
                    "3× per week",
                    "Mid-sized offices, co-working spaces",
                    "Professional suites in Bethesda Row",
                  ],
                  [
                    "Weekly",
                    "Smaller offices, lighter traffic",
                    "Professional offices in 20815 and 20816",
                  ],
                  [
                    "Custom",
                    "Unique requirements",
                    "Professional offices, retail, multi-tenant suites",
                  ],
                ].map(([freq, best, use]) => (
                  <tr key={freq} className="bg-background hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{freq}</td>
                    <td className="p-4 text-muted-foreground">{best}</td>
                    <td className="p-4 text-muted-foreground">{use}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Early-morning, evening, and weekend options depend on availability, building access, security procedures, and the approved scope.
          </p>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Office Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's commercial cleaning service covers all Bethesda ZIP codes — 20814,
              20815, 20816, and 20817. From professional offices along the Bethesda Metro corridor and
              in Bethesda Row to professional suites near the NIH and Walter Reed area, our
              background-checked team follows the approved schedule and access procedure.
            </p>
            <p>
              Bethesda is home to a dense concentration of professional services, healthcare offices,
              financial firms, and government contractors. These businesses require a cleaning company
              that understands the importance of confidentiality, punctuality, and consistent quality.
              We serve offices throughout Kenwood, Edgemoor, Woodmont Triangle, and Friendship Heights.
            </p>
            <p>
              Many of our commercial clients in Bethesda begin with a{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              baseline before transitioning to regular service. We also handle{" "}
              <Link to="/locations/bethesda-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              for Bethesda residents and serve nearby businesses with{" "}
              <Link to="/locations/rockville-md/office-cleaning" className="text-primary underline">
                office cleaning in Rockville
              </Link>{" "}
              and{" "}
              <Link to="/locations/chevy-chase-md/office-cleaning" className="text-primary underline">
                office cleaning in Chevy Chase
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Bethesda" serviceLabel="Office Cleaning" defaultService="office" zipLine="Serving Bethesda and nearby communities." />

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaOfficeCleaningPage;
