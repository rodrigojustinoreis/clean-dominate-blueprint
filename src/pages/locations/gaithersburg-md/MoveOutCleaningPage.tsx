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

const PAGE_URL = "https://capitalcleancare.com/locations/gaithersburg-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Gaithersburg?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — free, no commitment. Same-day availability confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Gaithersburg?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Many clients leave a key or lockbox.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Gaithersburg?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20877, 20878, 20879).",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are actually preferred — we can reach every surface.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Gaithersburg and across Montgomery County.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many Gaithersburg clients book a move out clean for their current home and a deep cleaning for their new one.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Gaithersburg and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Inside oven scrubbed",
      "Inside refrigerator cleaned",
      "Range hood degreased",
      "Inside all cabinets and drawers",
      "Sink deep-cleaned",
      "Microwave interior cleaned",
      "Countertops and backsplash wiped",
      "Floor mopped edge-to-edge",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet scrubbed (base, tank, hinges)",
      "Inside vanity and medicine cabinet",
      "Grout and tile scrubbed",
      "Tub and shower deep-cleaned",
      "Fixtures descaled",
      "Mirrors wiped",
      "Floor mopped and disinfected",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Inside all closets wiped",
      "Baseboards and door frames cleaned",
      "Window sills and tracks wiped",
      "Light switches cleaned",
      "All floors vacuumed and mopped",
      "Spot-clean visible wall marks",
      "Ceiling fans dusted",
      "Trash removed",
    ],
  },
];

const gaithersburgServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Germantown", slug: "germantown-md", state: "MD" },
];

const GaithersburgMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Gaithersburg, MD — Get Your Full Deposit Back",
    description:
      "Move out cleaning in Gaithersburg, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-making-bed.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
          { label: "Move Out Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Gaithersburg, MD",
          "Kentlands, Gaithersburg MD",
          "Lakelands, Gaithersburg MD",
          "Crown Farm, Gaithersburg MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Michelle R.",
            text: "They did an incredible move out clean on my Gaithersburg apartment. Got my full deposit back — landlord was impressed.",
            location: "Gaithersburg, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Gaithersburg, MD"
        description="Professional move out cleaning in Gaithersburg, MD. We clean to landlord and inspection standards — inside appliances, grout, baseboards, closets. Deposit-ready results with 100% satisfaction guarantee. Serving Kentlands, Lakelands, Crown Farm, and all Gaithersburg ZIP codes."
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
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Move Out Cleaning in Gaithersburg, MD"
        lead="Moving out in Gaithersburg? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Kentlands, Lakelands, and all Gaithersburg neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Gaithersburg"
        state="MD"
        zipRange="20877–20879"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Gaithersburg, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Gaithersburg"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Gaithersburg"
        categories={checklistCategories}
      />

      {/* Why Deposit Matters */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Landlords and property managers in Gaithersburg and across Montgomery County routinely
              withhold security deposits for cleaning deficiencies. In the competitive rental market
              around Kentlands Market Square and throughout the 20877, 20878, and 20879 ZIP codes,
              property managers follow detailed inspection checklists — and they know what to look
              for. A standard clean, even a thorough one, is not the same as a landlord-standard
              move out cleaning.
            </p>
            <p>
              Capital Clean Care's move out cleaning checklist is built specifically around what
              property managers inspect in Gaithersburg. We clean inside every appliance, scrub
              grout lines that collect buildup over years of tenancy, clean inside every closet,
              and address window tracks, ceiling fans, and baseboards that most tenants overlook.
              If your landlord spots anything after our clean, we return to address it — free,
              no questions asked.
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Our Gaithersburg Move Out Cleaning Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book your date — same-day and next-day slots available for urgent moves in 20877 and 20878",
              "We arrive with all supplies — no need to leave anything behind for us",
              "Full landlord-standard clean — every room, every surface, every appliance",
              "100% satisfaction guarantee — if your landlord spots anything, we return free",
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
              Gaithersburg Renters Trust Capital Clean Care
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
                "They did an incredible move out clean on my Gaithersburg apartment. Got my full deposit back — the landlord said it was the cleanest move-out they'd ever seen."
              </p>
              <p className="text-sm font-semibold text-foreground">Michelle R.</p>
              <p className="text-xs text-muted-foreground">Gaithersburg, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving renters throughout Gaithersburg — from Crown Farm to Kentlands Market Square, ZIPs 20877, 20878, and 20879.
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

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Gaithersburg, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Gaithersburg"
        citySlug="gaithersburg-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={gaithersburgServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Gaithersburg" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Don't Risk Your Deposit — Book Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Gaithersburg ZIP codes (20877, 20878, 20879), including Crown Farm and the
            Kentlands Market Square area. Free quote in 60 seconds — or call (240) 704-2551.
            Same-day availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Move Out Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Same-day slots · 100% satisfaction guaranteed · Bonded & Insured
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default GaithersburgMoveOutCleaningPage;
