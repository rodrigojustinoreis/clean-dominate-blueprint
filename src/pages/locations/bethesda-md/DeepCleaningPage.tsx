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

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Bethesda?",
    a: "Most Bethesda homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer. We'll give you a realistic estimate when you book.",
  },
  {
    q: "How much does a deep cleaning cost in Bethesda, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked, so you can carry on with your day.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets throughout Bethesda.",
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
    title: "Deep Cleaning Service in Bethesda, MD — Top-to-Bottom, Eco-Friendly",
    description:
      "Professional deep cleaning in Bethesda, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
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
        reviews={[
          {
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Deep Cleaning in Bethesda, MD"
        description="Professional deep cleaning in Bethesda, MD. Inside appliances, grout lines, baseboards, ceiling fans — everywhere standard cleanings miss. EPA Safer Choice certified products."
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
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Deep Cleaning Services in Bethesda, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Bethesda home — from Kenwood to Bradley Hills. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage="/images/team/team-tile-scrubber.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Bethesda, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Bethesda"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Our Bethesda Deep Cleaning"
        categories={checklistCategories}
      />

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
                body: "Drywall dust and construction residue require more than a standard clean. See our{' '} dedicated post-construction page for full-scope work.",
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

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Bethesda Homeowners Love Our Deep Clean
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
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Bethesda homes near Kenwood, Bradley Hills, and the NIH campus area.
                If you're a client, share your experience.
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
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book Your Bethesda Deep Clean Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Bethesda homes near NIH campus and across ZIPs 20814, 20815, 20816, and 20817.
            Start fresh — get a free, no-obligation deep cleaning quote in under 60 seconds,
            or call (240) 704-2551 to speak with our team today. Same-day slots available.
            100% satisfaction guaranteed.
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
            Same-day slots available · 100% satisfaction guaranteed · Bonded &amp; Insured
          </p>
        </div>
      </section>

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaDeepCleaningPage;
