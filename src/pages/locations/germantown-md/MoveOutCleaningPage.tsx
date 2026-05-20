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

const PAGE_URL = "https://capitalcleancare.com/locations/germantown-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Germantown?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — free, no commitment. Same-day availability confirmed at booking for ZIPs 20874, 20875, and 20876.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Germantown?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Many clients hand us a key and we handle the rest.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Germantown?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20874, 20875, 20876).",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred for the most thorough results.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Germantown and across Montgomery County.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current home and a deep cleaning for their new one in Germantown or a nearby city.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Germantown and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Inside oven scrubbed",
      "Inside refrigerator cleaned",
      "Degrease range hood",
      "Wipe inside all cabinets and drawers",
      "Scrub sink",
      "Clean microwave",
      "Wipe countertops and backsplash",
      "Mop floor",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Scrub toilet (base, tank, hinges)",
      "Clean inside vanity",
      "Scrub grout and tile",
      "Clean tub and shower",
      "Descale fixtures",
      "Mirrors cleaned",
      "Mop floor",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Inside all closets",
      "Baseboards and door frames",
      "Window sills and tracks",
      "Light switches and outlets",
      "Vacuum and mop all floors",
      "Spot-clean walls",
      "Ceiling fans",
      "Remove trash",
    ],
  },
];

const germantownServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

const GermantownMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Germantown, MD — Get Your Full Deposit Back",
    description:
      "Move out cleaning in Germantown, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
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
          { label: "Germantown, MD", href: "/locations/germantown-md" },
          { label: "Move Out Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Germantown, MD",
          "Milestone, Germantown MD",
          "Churchill Village, Germantown MD",
          "Kingsview, Germantown MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Maria L.",
            text: "Got my full deposit back thanks to Capital Clean Care. They cleaned everything the landlord inspected and more.",
            location: "Germantown, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Germantown, MD"
        description="Professional move out cleaning in Germantown, MD. Landlord-standard results, deposit-ready checklist. Oven interior, grout, baseboards, inside cabinets — everything covered. Same-day available."
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
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Move Out Cleaning in Germantown, MD"
        lead="Moving out in Germantown? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Milestone, Churchill Village, and all Germantown neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Germantown"
        state="MD"
        zipRange="20874–20876"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Germantown, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Germantown"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Germantown"
        categories={checklistCategories}
      />

      {/* Why It Matters */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Landlords in Germantown and across Montgomery County routinely withhold deposits for
              cleaning charges. A professional move out cleaning to landlord standards — specifically
              addressing the Milestone Shopping Center area rental market — is the most reliable way
              to protect your deposit. We know what property managers inspect: inside appliances,
              grout lines, baseboards, window tracks, and every corner tenants typically miss.
            </p>
            <p>
              Our checklist is built precisely for this. We don't clean like guests arriving — we
              clean like professionals preparing a property for the next tenant and a formal
              inspection. Many Germantown renters use us for{" "}
              <Link to="/locations/germantown-md/move-out-cleaning" className="text-primary underline">
                move out cleaning
              </Link>{" "}
              on their current home and a{" "}
              <Link to="/locations/germantown-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              on their new place in the same day.
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Our Germantown Move Out Cleaning Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                step: "1. Book your date",
                body: "Same-day and next-day slots available for urgent moves in 20874 and 20876. We confirm fast.",
              },
              {
                step: "2. We arrive with all supplies",
                body: "No need to leave anything behind. Our team brings all professional cleaning equipment and EPA Safer Choice™ products.",
              },
              {
                step: "3. Full landlord-standard clean",
                body: "Every room, every surface. Kitchen, bathrooms, closets, baseboards — nothing skipped.",
              },
              {
                step: "4. 100% satisfaction",
                body: "If your landlord spots anything, we return free. Your deposit protection is our promise.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.step}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
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
              Germantown Renters Trust Capital Clean Care
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
                "Got my full deposit back thanks to Capital Clean Care. They cleaned everything the
                landlord inspected and more. Showed up the same day I called."
              </p>
              <p className="text-sm font-semibold text-foreground">Maria L.</p>
              <p className="text-xs text-muted-foreground">Germantown, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving tenants moving out of Kingsview, Churchill Village, and all Germantown
                neighborhoods. Share your move out experience.
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
            Move Out Cleaning FAQ — Germantown, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Germantown"
        citySlug="germantown-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={germantownServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Germantown" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Don't Risk Your Deposit — Book Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Germantown ZIPs (20874, 20875, 20876), including Kingsview and the
            Milestone Shopping Center area. Free quote in 60 seconds — or call (240) 704-2551.
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

export default GermantownMoveOutCleaningPage;
