import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, ArrowRight, Camera, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
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
import { pickReviews } from "@/data/realReviews";

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/deep-cleaning";
const CASE_STUDY_URL = "/resources/real-deep-cleaning-project-bethesda-home";
const HERO_IMAGE = "/images/locations/bethesda-deep-cleaning/real-hvac-filter-deep-cleaning.webp";
const HERO_IMAGE_SRCSET = "/images/locations/bethesda-deep-cleaning/real-hvac-filter-deep-cleaning-640.webp 640w, /images/locations/bethesda-deep-cleaning/real-hvac-filter-deep-cleaning-800.webp 800w, /images/locations/bethesda-deep-cleaning/real-hvac-filter-deep-cleaning.webp 1600w";
const PROJECT_IMAGE = "/images/blog/real-deep-cleaning-bethesda/vanity-detail-clean-respirator.webp";
const verifiedReviews = pickReviews("bethesda-md/deep-cleaning", 3);

const faqs = [
  {
    q: "How long does a deep cleaning take in Bethesda?",
    a: "A four-to-six-hour window is a useful planning range for many homes, but it is not a fixed promise. Home size, room count, buildup, access and selected add-ons determine the written estimate provided before booking.",
  },
  {
    q: "How much does a deep cleaning cost in Bethesda, MD?",
    a: "Pricing depends on the home's size, current condition, room count, and requested add-ons. Capital Clean Care provides a written quote before service; use the form below or call (240) 704-2551.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked, so you can carry on with your day.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "We offer product-conscious, lower-odor options and follow the product label for each surface. Tell us about pets, children, allergies or fragrance sensitivities so the team can record appropriate preferences and precautions.",
  },
  {
    q: "Do you do spring cleaning in Bethesda?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year for a complete seasonal reset.",
  },
  {
    q: "How often should I get a deep cleaning in Bethesda?",
    a: "Once or twice a year is typical for most Bethesda homes, combined with regular maintenance cleanings in between. We can recommend a schedule based on your home.",
  },
  {
    q: "Do you provide deep cleaning in North Bethesda too?",
    a: "Yes. This page covers Bethesda ZIP codes 20814–20817. Homes and high-rise residences around Pike & Rose, White Flint, and the Pike District are covered by our dedicated North Bethesda deep cleaning service.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep Detail",
    items: [
      "Oven interior scrubbed",
      "Microwave interior cleaned",
      "Range hood degreased",
      "Inside cabinets wiped",
      "Faucets descaled",
      "Backsplash scrubbed",
    ],
  },
  {
    heading: "Bathrooms — Deep Detail",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet base, hinges, and under-rim deep cleaned",
      "Exhaust fan cleaned",
      "Mirrors edge-to-edge streak-free",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans dusted",
      "Door frames and handles wiped",
      "Vacuum under furniture",
      "Interior doors wiped",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const BethesdaDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Bethesda MD | Detailed Service & Free Quote",
    description:
      "Deep cleaning in Bethesda, MD for grout, baseboards and selected appliance interiors. See real local project work, written scope and request a quote.",
    canonical: PAGE_URL,
    ogImage: `https://capitalcleancare.com${HERO_IMAGE}`,
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "Deep Cleaning", href: "/locations/bethesda-md/deep-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Bethesda, MD",
          "Kenwood, Bethesda MD",
          "Bradley Hills, Bethesda MD",
          "Bethesda Row, Bethesda MD",
          "Montgomery County, MD",
        ]}
        reviews={verifiedReviews}
      />
      <ServiceSchema
        serviceName="Deep Cleaning in Bethesda, MD"
        description="Professional deep cleaning in Bethesda, MD for selected appliance interiors, grout lines, baseboards and ceiling fans, with a written scope and local project evidence."
        url={PAGE_URL}
        areaServed={["Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema name="Deep Cleaning Services in Bethesda, MD" description="Professional deep cleaning in Bethesda with original project photography, a written scope, and a background-checked team." url={PAGE_URL} dateModified="2026-08-31" cityName="Bethesda" stateCode="Maryland" primaryImage={`https://capitalcleancare.com${HERO_IMAGE}`} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-12 md:pt-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Bethesda, MD", href: "/locations/bethesda-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Deep Cleaning Services in Bethesda, MD"
        lead="When routine cleaning no longer reaches the buildup, our Bethesda deep cleaning resets the home room by room. We detail baseboards, grout, appliance interiors, window tracks and ceiling fans using surface-appropriate, eco-friendly products."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage={HERO_IMAGE}
        heroImageAlt="Capital Clean Care professional washing a heavily soiled HVAC vent filter during a detailed deep cleaning service"
        heroAspectRatio="4/3"
        heroImageWidth={1600}
        heroImageHeight={1200}
        heroImageSrcSet={HERO_IMAGE_SRCSET}
        heroImageSizes="(max-width: 1023px) 320px, 560px"
        heroImageContainerClassName="max-w-[640px] mx-auto lg:ml-auto lg:mr-0"
        ctaPrimary="Schedule a Deep Clean in Bethesda"
        ctaBeforePills
        teamTrustLabel="Background-Checked Team"
        ctaNote="No commitment · Written quote before service · 100% satisfaction guaranteed"
        updatedLabel="August 31, 2026"
        updatedDateTime="2026-08-31"
      />

      {/* Direct, self-contained answer for local commercial intent and AI citation. */}
      <section className="border-y border-border bg-background py-10 md:py-12" aria-labelledby="bethesda-deep-cleaning-answer">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">Bethesda service answer</p>
          <h2 id="bethesda-deep-cleaning-answer" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-5">
            What Does a Deep Cleaning in Bethesda Include?
          </h2>
          <p className="text-lg leading-relaxed text-foreground">
            A Capital Clean Care deep cleaning in Bethesda is a room-by-room reset for buildup that routine maintenance does not target. The written scope can cover selected kitchen appliance and cabinet interiors, range hoods, faucets and backsplashes; bathroom grout, showerheads, exhaust fans and detailed toilet areas; plus baseboards, window tracks, ceiling fans, doors, switches and accessible spaces beneath furniture. Our bonded, insured and background-checked team uses surface-appropriate products, follows each label and completes a final checklist. Four to six hours is a planning range for many homes—not a fixed promise—because size, condition and add-ons determine the estimate. This page serves Bethesda ZIP codes 20814–20817, including Bethesda Row, Edgemoor, Kenwood and Bradley Hills. Pike &amp; Rose, White Flint and the Pike District use our dedicated North Bethesda page. Routine visits, empty-home turnovers and renovation dust have separate scopes below.
          </p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-10" aria-labelledby="bethesda-service-match">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 id="bethesda-service-match" className="font-heading text-2xl font-bold text-foreground">Choose the right Bethesda cleaning scope</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">These pages represent different search needs and checklists, helping homeowners reach the correct service without overlap.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Routine upkeep", "/locations/bethesda-md/recurring-cleaning", "Recurring cleaning"],
              ["Empty home or lease end", "/locations/bethesda-md/move-out-cleaning", "Move-out cleaning"],
              ["Renovation dust", "/locations/bethesda-md/post-construction-cleaning", "Post-construction cleaning"],
              ["Pike & Rose / White Flint", "/locations/north-bethesda-md/deep-cleaning", "North Bethesda deep cleaning"],
            ].map(([need, href, label]) => (
              <Link key={href} to={href} className="rounded-xl border border-border bg-background p-4 shadow-sm transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span className="block text-xs font-semibold uppercase tracking-wide text-accent">{need}</span>
                <span className="mt-1 block font-semibold text-primary">{label} →</span>
              </Link>
            ))}
          </div>
          <dl className="mt-8 grid gap-4 rounded-2xl border border-border bg-background p-5 sm:grid-cols-2 lg:grid-cols-4">
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Primary service</dt><dd className="mt-1 font-semibold">Occupied-home deep clean</dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Service area</dt><dd className="mt-1 font-semibold">Bethesda 20814–20817</dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Evidence</dt><dd className="mt-1 font-semibold">Real Bethesda project photos</dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Timing</dt><dd className="mt-1 font-semibold">Estimated after property details</dd></div>
          </dl>
        </div>
      </section>

      {/* ── Cross-link Banner ──────────────────────────────── */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl py-3 text-center text-sm">
          <span className="text-muted-foreground">Want ongoing maintenance after your deep clean?</span>{" "}
          <Link to="/locations/bethesda-md/recurring-cleaning" className="text-primary font-semibold underline">
            See Recurring Cleaning in Bethesda →
          </Link>
        </div>
      </div>

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Bethesda Deep Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Bethesda" citySlug="bethesda-md" serviceSlug="deep-cleaning" serviceLabel="Deep Cleaning" count={3} showVideo={false} />

      {/* ── First-party Bethesda project proof ───────────── */}
      <section className="py-12 md:py-16 bg-background" aria-labelledby="bethesda-project-proof">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_.95fr] items-center rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-background to-accent/5 p-5 sm:p-8 shadow-sm">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <img
                src={PROJECT_IMAGE}
                alt="Capital Clean Care professionals detailing a vanity and tiled bath during a real Bethesda deep cleaning project"
                width="1080"
                height="1350"
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-3 py-1.5 text-sm font-semibold text-primary">
                <Camera className="h-4 w-4" aria-hidden="true" /> Real Bethesda project
              </div>
              <h2 id="bethesda-project-proof" className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
                See how we deep cleaned a Bethesda bathroom
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                This documented local project shows the crew walkthrough, dry-first vent dusting, hand-scrubbed grout and final detail pass—so you can evaluate the process before requesting a quote.
              </p>
              <ul className="space-y-2.5 mb-6 text-sm text-foreground">
                {["Original on-site photos", "Step-by-step cleaning method", "Real detail work on grout, vents and fixtures"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-accent flex-none" aria-hidden="true" /> {item}
                  </li>
                ))}
              </ul>
              <Link to={CASE_STUDY_URL} className="inline-flex items-center gap-2 font-semibold text-primary hover:text-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm">
                View the real Bethesda project <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ──────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Task</th>
                  <th className="text-left p-4 font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left p-4 font-semibold text-accent">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Appliances", "Exterior wipe only", "Inside oven and microwave"],
                  ["Floors", "General mopping", "Scrubbing grout and tile edges"],
                  ["Dusting", "Visible surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Bathrooms", "Standard clean", "Descaling, grout scrubbing, exhaust fans"],
                  ["Cabinets", "Exterior only", "Inside all cabinets and drawers"],
                  ["Duration", "~2–3 hours", "~4–6 hours"],
                ].map(([task, standard, deep]) => (
                  <tr key={task} className="bg-background hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{task}</td>
                    <td className="p-4 text-muted-foreground">{standard}</td>
                    <td className="p-4 text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── When to Book ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            When Should You Book a Deep Clean in Bethesda?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Moving into or out of a home",
                body: "In ZIP codes 20814 or 20815 — a deep clean sets the right baseline for your new chapter or ensures you leave on great terms.",
              },
              {
                title: "Spring seasonal reset",
                body: "Bethesda winters leave grime in every corner. A thorough spring deep clean restores your home's freshness after months of heavy use.",
              },
              {
                title: "Before a special event",
                body: "Hosting a gathering near Bethesda Row or Woodmont Triangle? We make sure every room is guest-ready down to the last detail.",
              },
              {
                title: "After a long gap between professional cleanings",
                body: "When regular upkeep has slipped, a deep clean catches up on months of buildup before transitioning to a maintenance schedule.",
              },
              {
                title: "Post-renovation or construction",
                body: "Drywall dust and construction residue require a specialized scope beyond a residential deep clean. Our post-construction service is designed for that work.",
              },
              {
                title: "Preparing a home for sale or listing",
                body: "Near the National Naval Medical Center or anywhere across Bethesda, a deep clean helps your property show at its very best.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Deep Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's deep cleaning service covers all Bethesda ZIP codes — 20814, 20815, 20816,
              and 20817. From the Woodmont Triangle area and Bethesda Row to the quiet residential streets
              near the National Naval Medical Center and NIH campus, our trained teams are ready to tackle
              every corner of your home with the thoroughness a deep clean demands.
            </p>
            <p>
              We serve homes throughout Kenwood, Bradley Hills, Edgemoor, Chevy Chase Section Five, and
              Friendship Heights. Bethesda's older homes — many with tile grout, hardwood floors, and
              detailed millwork — benefit enormously from the kind of attention our deep cleaning provides.
              We don't rush. We follow a detailed multi-room checklist so nothing gets skipped.
            </p>
            <p>
              Looking for a{" "}
              <Link to="/locations/bethesda-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              plan to maintain the results? Many Bethesda clients start with a deep clean baseline and then
              move to weekly or bi-weekly maintenance. We also offer{" "}
              <Link to="/locations/bethesda-md/move-out-cleaning" className="text-primary underline">
                move out cleaning
              </Link>{" "}
              and{" "}
              <Link to="/locations/bethesda-md/post-construction-cleaning" className="text-primary underline">
                post-construction cleaning
              </Link>{" "}
              for specialized situations.
            </p>
            <p>
              Comparing the investment first? Review our current{" "}
              <Link to="/resources/house-cleaning-cost-bethesda-md" className="text-primary underline">
                Bethesda house cleaning cost guide
              </Link>{" "}
              for typical ranges and the factors that change a deep-clean quote. For Pike &amp; Rose, White Flint,
              and the Pike District, use our{" "}
              <Link to="/locations/north-bethesda-md/deep-cleaning" className="text-primary underline">
                North Bethesda deep cleaning page
              </Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <LocationQuoteSection cityName="Bethesda" serviceLabel="Deep Cleaning" defaultService="deep" zipLine="Serving Bethesda and nearby communities." />

    </Layout>
  );
};

export default BethesdaDeepCleaningPage;
