import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle, Camera, ShieldCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import { Button } from "@/components/ui/button";
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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/deep-cleaning";
const HERO_IMAGE = "/images/locations/post-construction-authentic/post-construction-team-landscape-v3.webp";
const HERO_IMAGE_SRCSET = "/images/locations/post-construction-authentic/post-construction-team-landscape-v3-640.webp 640w, /images/locations/post-construction-authentic/post-construction-team-landscape-v3.webp 1400w";

const faqs = [
  {
    q: "How long does a deep cleaning take in Rockville?",
    a: "A four-to-six-hour window is a useful planning range for many homes, but it is not a fixed promise. Home size, room count, buildup, access and selected add-ons determine the written estimate provided before booking.",
  },
  {
    q: "How much does a deep cleaning cost in Rockville, MD?",
    a: "Pricing is based on home size, current condition, priority areas and optional tasks. Request a free written quote for ZIP codes 20850, 20851, 20852 and 20853; availability is confirmed before booking.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many Rockville clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked — every member before their first day on the job.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "We offer product-conscious, lower-odor options and follow the product label for each surface. Tell us about pets, children, allergies or fragrance sensitivities so we can record appropriate preferences and precautions.",
  },
  {
    q: "Do you do spring cleaning in Rockville?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year, not just spring. It's a great reset after winter or before a major event.",
  },
  {
    q: "How often should I get a deep cleaning in Rockville?",
    a: "Once or twice a year is typical for most homes, combined with regular maintenance cleanings in between. We offer recurring service that keeps your Rockville home clean year-round.",
  },
  {
    q: "Do you deep clean apartments and condos in Rockville?",
    a: "Yes. Deep-clean scopes are available for occupied apartments, condos and townhomes across Rockville. For an empty home at the end of a lease, use our dedicated Rockville move-out cleaning service so the quote includes turnover-specific priorities.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Rockville and the greater Montgomery County area. We live and work in this community, and your home matters to us personally.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep",
    items: [
      "Inside oven scrubbed clean",
      "Microwave interior degreased",
      "Range hood degreased",
      "Inside cabinets and drawers wiped",
      "Faucets descaled and polished",
      "Backsplash scrubbed",
    ],
  },
  {
    heading: "Bathrooms — Deep",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet base, hinges, and under rim",
      "Exhaust fan cleaned",
      "Edge-to-edge mirrors",
      "Vanity interior cleaned",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans dusted and wiped",
      "Door frames and handles wiped",
    ],
  },
  {
    heading: "Floors & Furniture",
    items: [
      "Vacuum under furniture",
      "Hardwood floors mopped",
      "Tile floors scrubbed",
      "Upholstered surfaces vacuumed",
      "Doors spot-cleaned",
    ],
  },
];

const rockvilleServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
];

const RockvilleDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Services in Rockville, MD",
    description:
      "Deep cleaning in Rockville, MD for grout, baseboards, fixtures and selected appliance interiors. See the written scope, local work and request a quote.",
    canonical: PAGE_URL,
    ogImage: `https://capitalcleancare.com${HERO_IMAGE}`,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "Deep Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Rockville, MD",
          "King Farm, Rockville MD",
          "Twinbrook, Rockville MD",
          "Fallsgrove, Rockville MD",
          "Montgomery County, MD",
        ]}
        reviews={pickReviews("rockville-md/deep-cleaning")}
      />
      <ServiceSchema
        serviceName="Deep Cleaning Service in Rockville, MD"
        description="Professional deep cleaning in Rockville for grout, baseboards, fixtures, floors and selected appliance interiors, with a written scope and insured team."
        url={PAGE_URL}
        areaServed={["Rockville, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />
      <WebPageSchema name="Deep Cleaning Services in Rockville, MD" description="Professional deep cleaning in Rockville with a written scope, background-checked team, and detailed room-by-room checklist." url={PAGE_URL} dateModified="2026-08-31" cityName="Rockville" stateCode="Maryland" primaryImage={`https://capitalcleancare.com${HERO_IMAGE}`} />

      {/* Breadcrumbs */}
      <div className="pt-12 md:pt-16 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Rockville, MD", href: "/locations/rockville-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Deep Cleaning Services in Rockville, MD"
        lead="Detailed deep cleaning for Rockville homes, with a written scope for baseboards, grout, fixtures, floors and selected appliance interiors."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage={HERO_IMAGE}
        heroImageAlt="Five members of the Capital Clean Care professional cleaning team in company uniforms"
        heroAspectRatio="1400/788"
        heroImageWidth={1400}
        heroImageHeight={788}
        heroImageSrcSet={HERO_IMAGE_SRCSET}
        heroImageSizes="(max-width: 1023px) 320px, 640px"
        ctaPrimary="Schedule a Deep Clean in Rockville"
        ctaBeforePills
        stackCtas
        teamTrustLabel="Background-Checked Team"
        ctaNote="No commitment · Written quote before service · Satisfaction guarantee applies"
        updatedLabel="August 31, 2026"
        updatedDateTime="2026-08-31"
      />

      <section className="border-b border-border bg-background py-10 md:py-14" aria-labelledby="rockville-deep-cleaning-answer">
        <div className="container mx-auto max-w-4xl px-4">
          <p className="mb-3 text-sm font-semibold text-accent">Reviewed August 31, 2026 · Rockville ZIP codes 20850–20853</p>
          <h2 id="rockville-deep-cleaning-answer" className="font-heading text-2xl font-bold text-foreground md:text-3xl">What does deep cleaning in Rockville include?</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A Capital Clean Care deep cleaning in Rockville is a room-by-room reset for accumulated buildup that routine maintenance does not target. The written scope can include baseboards, window sills and tracks, ceiling fans, door frames, grout lines, bathroom fixtures, kitchen grease, and selected appliance or cabinet interiors. Our bonded, insured and background-checked team brings its equipment, follows product labels for each surface and completes a final checklist. Four to six hours is a planning range for many homes—not a fixed promise—because size, bathrooms, stairs, condition and add-ons determine the written estimate. Service covers ZIP codes 20850–20853, including Rockville Town Center, King Farm, Twinbrook, Fallsgrove and College Gardens. This page is specifically for occupied-home deep cleaning; empty-home turnovers, routine visits and renovation dust have separate service scopes below.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">Compare current planning ranges in our <Link to="/resources/house-cleaning-cost-rockville-md" className="font-semibold text-primary underline">Rockville house-cleaning cost guide</Link>.</p>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-10" aria-labelledby="rockville-service-match">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 id="rockville-service-match" className="font-heading text-2xl font-bold text-foreground">Choose the right Rockville cleaning scope</h2>
          <p className="mt-2 max-w-3xl text-muted-foreground">These services solve different needs. Selecting the closest match produces a more accurate checklist and quote.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Routine upkeep", "/locations/rockville-md/recurring-cleaning", "Recurring cleaning"],
              ["Empty home or lease end", "/locations/rockville-md/move-out-cleaning", "Move-out cleaning"],
              ["Renovation dust", "/locations/rockville-md/post-construction-cleaning", "Post-construction cleaning"],
              ["Workplace scope", "/locations/rockville-md/office-cleaning", "Office cleaning"],
            ].map(([need, href, label]) => (
              <Link key={href} to={href} className="rounded-xl border border-border bg-background p-4 shadow-sm transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <span className="block text-xs font-semibold uppercase tracking-wide text-accent">{need}</span>
                <span className="mt-1 block font-semibold text-primary">{label} →</span>
              </Link>
            ))}
          </div>
          <dl className="mt-8 grid gap-4 rounded-2xl border border-border bg-background p-5 sm:grid-cols-2 lg:grid-cols-4">
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Primary service</dt><dd className="mt-1 font-semibold">Occupied-home deep clean</dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Service area</dt><dd className="mt-1 font-semibold">Rockville 20850–20853</dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Scope</dt><dd className="mt-1 font-semibold">Written before service</dd></div>
            <div><dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Timing</dt><dd className="mt-1 font-semibold">Estimated after property details</dd></div>
          </dl>
        </div>
      </section>

      {/* ── Cross-link Banner ──────────────────────────────── */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl py-3 text-center text-sm">
          <span className="text-muted-foreground">Want ongoing maintenance after your deep clean?</span>{" "}
          <Link to="/locations/rockville-md/recurring-cleaning" className="text-primary font-semibold underline">
            See Recurring Cleaning in Rockville →
          </Link>
        </div>
      </div>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Rockville Deep Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Rockville" citySlug="rockville-md" serviceSlug="deep-cleaning" serviceLabel="Deep Cleaning" />

      {/* Standard vs Deep */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left p-4 font-semibold text-primary">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave fully cleaned"],
                  ["General floor mopping", "Scrubbing grout and tile edges"],
                  ["Dusting visible surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrub, exhaust fans"],
                  ["2–3 hours typical", "4–6 hours — every corner covered"],
                ].map(([std, deep], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-4 text-muted-foreground">{std}</td>
                    <td className="p-4 text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to Book */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            When Rockville Homeowners Schedule a Deep Clean
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Your first thorough clean of the year, or a seasonal reset in King Farm or Twinbrook",
              "Before a special event, holiday gathering, or houseguests arriving",
              "After a long gap between professional cleanings",
              "Resetting the home after heavy use — pets, kids, or illness",
              "Preparing a home for sale or a rental listing",
              "Whenever a standard clean just isn't reaching the buildup",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-5 leading-relaxed">
            Moving soon? See our{" "}
            <Link to="/locations/rockville-md/move-out-cleaning" className="text-primary font-medium underline">
              move-out cleaning in Rockville
            </Link>
            . Just finished a renovation? See{" "}
            <Link to="/locations/rockville-md/post-construction-cleaning" className="text-primary font-medium underline">
              post-construction cleaning in Rockville
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Deep Cleaning Throughout Rockville, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care provides professional deep cleaning across all Rockville ZIP codes —
              20850, 20851, 20852, and 20853. From homes near the Rockville Metro station in ZIP 20850
              to larger single-family homes along the 20852 corridor near Rockville Pike, our experienced,
              equipped teams follow the written room-by-room scope and final quality check.
            </p>
            <p>
              Rockville residents in King Farm, Twinbrook, Fallsgrove, and Woodley Gardens regularly book
              deep cleanings before major life events — spring resets, holiday prep, or after a renovation.
              If your Rockville home hasn't had a professional deep clean in over a year, there's buildup in
              the grout, the oven, the ceiling fans, and behind appliances that a standard maintenance
              cleaning simply won't reach. Our deep cleaning changes that — in one thorough visit.
            </p>
            <p>
              As a Latino-owned business rooted in Montgomery County, we bring the same personal
              accountability to every deep clean that we do to our recurring service. Your home isn't
              rushed through a checklist — it's treated with the care it deserves. 100% satisfaction
              guaranteed: if something was missed, we return to fix it at no charge.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            What Sets Our Rockville Deep Cleaning Apart
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A deep cleaning is only as good as the team performing it. Capital Clean Care trains
              every technician on a four-category protocol — a systematic approach used for homes in
              King Farm, Twinbrook, Fallsgrove, and along the Rockville Pike corridor. Each visit
              starts at the ceiling and works methodically downward: ceiling fans and light fixtures
              first, then wall surfaces and windows, then furniture and appliances, then floors —
              so dust falls onto surfaces we haven't cleaned yet rather than ones we've already
              finished.
            </p>
            <p>
              We select each cleaner for the surface and type of buildup, follow its label and use
              lower-odor options when appropriate. For homes in 20850 and 20852 with children,
              pets, allergies or fragrance sensitivities, we document those preferences before the
              visit. We do not make blanket medical or immediate re-entry claims; any product-specific
              precautions on the label take priority.
            </p>
            <p>
              Every deep cleaning is backed by our 100% satisfaction guarantee. If anything was
              missed or doesn't meet your standard, call us within 24 hours and we return to
              re-clean the specific areas at no charge. No negotiations, no fine print — just
              the thorough clean your Rockville home deserves. We schedule most follow-up
              the follow-up window when you report the issue.
            </p>
          </div>
        </div>
      </section>

      {/* Eco-friendly */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Eco-Friendly Deep Cleaning in Rockville — Why It Matters
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Our Rockville process uses{" "}
              <strong className="text-foreground">product-conscious, label-directed cleaning options</strong>.
              We match the product, tool and dwell time to grease, soap scum, dust or mineral buildup and
              confirm household sensitivities in advance. This gives families in King Farm, Twinbrook and
              Fallsgrove a clear, documented approach without unsupported health claims.
            </p>
            <p>
              Product choice is only part of the result. Correct dilution, dwell time, agitation and microfiber
              or vacuum technique determine how well grease, soap scum and dust are removed.{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-primary font-medium underline">
                See how our eco-friendly cleaning works →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Rockville" />

      <LocationQuoteSection cityName="Rockville" serviceLabel="Deep Cleaning" defaultService="deep" zipLine="Serving Rockville across ZIPs 20850, 20851, 20852, and 20853." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default RockvilleDeepCleaningPage;
