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

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/north-bethesda-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in North Bethesda?",
    a: "Most North Bethesda homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer. We'll give you a time estimate when you book.",
  },
  {
    q: "How much does a deep cleaning cost in North Bethesda, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked and trusted by North Bethesda homeowners throughout ZIP 20852.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets in North Bethesda.",
  },
  {
    q: "Do you do spring cleaning in North Bethesda?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. We serve North Bethesda year-round in ZIPs 20852 and 20895.",
  },
  {
    q: "How often should I get a deep cleaning in North Bethesda?",
    a: "Once or twice a year is typical, combined with regular maintenance cleanings in between. Many clients near White Flint and Luxmanor pair deep cleans with ongoing recurring service.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving North Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Oven interior thoroughly cleaned",
      "Microwave inside scrubbed",
      "Range hood degreased",
      "Inside cabinets wiped",
      "Faucets and sink descaled",
      "Backsplash scrubbed",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Grout lines scrubbed",
      "Showerhead descaled",
      "Toilet deep-cleaned (base, hinges, under rim)",
      "Exhaust fan cleaned",
      "Edge-to-edge mirrors polished",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Baseboards wiped top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans dusted",
      "Door frames and handles cleaned",
      "Vacuum under furniture",
      "Doors wiped down",
    ],
  },
];

const northBethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const NorthBethesdaDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in North Bethesda, MD — Top-to-Bottom, Eco-Friendly",
    description:
      "Professional deep cleaning in North Bethesda, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
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
          { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
          { label: "Deep Cleaning", href: "/locations/north-bethesda-md/deep-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "North Bethesda, MD",
          "White Flint, North Bethesda MD",
          "Luxmanor, North Bethesda MD",
          "Garrett Park, MD",
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
        serviceName="Deep Cleaning in North Bethesda, MD"
        description="Professional top-to-bottom deep cleaning in North Bethesda, MD. Inside appliances, grout scrubbing, baseboards, ceiling fans. EPA Safer Choice certified products. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["North Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "North Bethesda, MD", href: "/locations/north-bethesda-md" },
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Deep Cleaning Services in North Bethesda, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your North Bethesda home — from Luxmanor to Garrett Park. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="North Bethesda"
        state="MD"
        zipRange="20852"
        heroImage="/images/team/team-tile-scrubber.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in North Bethesda, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in North Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our North Bethesda Deep Cleaning"
        categories={checklistCategories}
      />

      {/* ── When to Book ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            When Should You Book a Deep Clean in North Bethesda?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Moving in or out", detail: "Properties in ZIP 20852 or 20895" },
              { label: "Spring seasonal reset", detail: "Annual freshening for any home" },
              { label: "Before a special event", detail: "Holiday gatherings or parties" },
              { label: "After a long gap", detail: "Homes not cleaned professionally in months" },
              { label: "Post-renovation", detail: "After any construction or remodel" },
              { label: "Preparing to sell or rent", detail: "Listing-ready results near Pike & Rose" },
            ].map(({ label, detail }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Standard vs Deep ──────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-3 bg-muted font-semibold text-foreground rounded-tl-lg">Standard Cleaning</th>
                  <th className="text-left p-3 bg-primary/10 font-semibold text-foreground rounded-tr-lg">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave"],
                  ["General mopping", "Scrubbing grout and tile edges"],
                  ["Dusting surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrubbing, exhaust fans"],
                  ["~2–3 hours", "~4–6 hours"],
                ].map(([standard, deep], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="p-3 text-muted-foreground border-t border-border">{standard}</td>
                    <td className="p-3 text-foreground font-medium border-t border-border">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Need ongoing maintenance after your deep clean? Our{" "}
            <Link to="/locations/north-bethesda-md/recurring-cleaning" className="text-primary underline">
              recurring cleaning
            </Link>{" "}
            service keeps your North Bethesda home in peak condition year-round.
          </p>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              North Bethesda Homeowners Love Our Deep Clean
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
                Serving North Bethesda homes near White Flint, Luxmanor, and the Pike & Rose corridor.
                Experienced a great deep clean? Share your story.
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

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Deep Cleaning Throughout North Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's deep cleaning service covers all of North Bethesda — ZIP codes 20852 and 20895.
              From the upscale residences near Luxmanor and Tilden Woods to the active communities along the
              Rockville Pike corridor, our HEPA-equipped, background-checked teams know what it takes to restore
              a home to its cleanest state.
            </p>
            <p>
              Deep cleaning in North Bethesda is especially popular after winter — when White Flint Metro commuters
              return to find their homes need a thorough reset — and before listing a home for sale or rent near
              the Pike & Rose development. Whether the trigger is seasonal, event-driven, or simply that it's been
              too long, our thorough checklist ensures nothing is overlooked.
            </p>
            <p>
              As a Latino-owned business rooted in Montgomery County, we hold every deep clean to a higher standard.
              Every team member undergoes background screening, eco-cleaning training, and hands-on quality review
              before joining our crew. If anything falls short after your North Bethesda deep cleaning, we return
              to re-clean — free of charge, every time.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — North Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="North Bethesda"
        citySlug="north-bethesda-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={northBethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="North Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book Your North Bethesda Deep Clean Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving North Bethesda homes near Pike & Rose and across ZIPs 20852 and 20895.
            Start fresh with a thorough, top-to-bottom deep clean — get your free quote in 60 seconds,
            or call us at (240) 704-2551. Same-day slots available. 100% satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Deep Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Same-day slots available · 100% satisfaction guaranteed · Bonded & Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default NorthBethesdaDeepCleaningPage;
