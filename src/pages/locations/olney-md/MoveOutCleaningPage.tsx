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

const PAGE_URL = "https://capitalcleancare.com/locations/olney-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Olney?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — free, no commitment. Same-day availability confirmed at booking.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Olney?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Olney?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20832).",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred and allow us to be most thorough.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Olney and Montgomery County.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current home and a deep cleaning for their new one.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Olney and the greater Montgomery County area. We live and work in this community.",
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
      "Clean microwave inside and out",
      "Wipe countertops and backsplash",
      "Mop floor",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Scrub toilet (base, tank, hinges)",
      "Clean inside vanity cabinet",
      "Scrub grout and tile",
      "Clean tub and shower",
      "Descale fixtures and faucets",
      "Clean mirrors",
      "Mop floor",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Inside all closets cleaned",
      "Baseboards and door frames wiped",
      "Window sills and tracks cleaned",
      "Light switches sanitized",
      "Vacuum and mop all floors",
      "Spot-clean walls",
      "Ceiling fans dusted",
      "Remove all trash",
    ],
  },
];

const olneyServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const OlneyMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Olney, MD — Get Your Full Deposit Back",
    description:
      "Move out cleaning in Olney, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
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
          { label: "Olney, MD", href: "/locations/olney-md" },
          { label: "Move Out Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Olney, MD",
          "Olney Mill, Olney MD",
          "Williamsburg Village, Olney MD",
          "Norbeck, Olney MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Rachel K.",
            text: "Booked last-minute before my move-out inspection in Olney. Passed with flying colors and got my full deposit back.",
            location: "Olney, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Olney, MD"
        description="Move out cleaning in Olney, MD. Landlord-standard cleaning checklist covering inside appliances, grout, baseboards, closets, and every surface. Same-day and next-day availability. Serving all of 20832 ZIP code."
        url={PAGE_URL}
        areaServed={["Olney, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Olney, MD", href: "/locations/olney-md" },
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Move Out Cleaning in Olney, MD"
        lead="Moving out in Olney? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Olney Mill, Williamsburg Village, and all Olney neighborhoods in 20832. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Olney"
        state="MD"
        zipRange="20832"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Olney, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Olney"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Olney"
        categories={checklistCategories}
      />

      {/* Why Deposit Depends on Cleaning */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Landlords in Olney and across Montgomery County routinely withhold security deposits
              for cleaning deficiencies. The areas most commonly cited at inspections — inside the
              oven, grout lines in bathrooms, cabinet interiors, and baseboards — are precisely the
              areas a professional move out clean addresses that a DIY effort typically misses.
              When you're managing a move with furniture, logistics, and a deadline, those details
              fall through the cracks.
            </p>
            <p>
              Capital Clean Care's move out checklist is built specifically to meet the inspection
              standards used by property managers in Olney and the surrounding 20832 area. We know
              what gets flagged at final walkthroughs in Williamsburg Village apartments and Norbeck
              townhomes. Our team arrives with everything needed — no supplies required from you —
              and works through every room, every surface, every closet.
            </p>
            <p>
              A professional move out clean is the most reliable way to protect a deposit that
              could represent 1–2 months of rent. Pair your Olney move out with a{" "}
              <Link to="/locations/olney-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              at your new home to start fresh on both ends. Same-day and next-day slots are
              available for urgent moves throughout 20832 — call (240) 704-2551 to confirm.
            </p>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Our Olney Move Out Cleaning Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book your date — same-day and next-day slots available for urgent moves in Olney 20832.",
              "We arrive with all supplies — no need to leave anything behind for us.",
              "Full landlord-standard clean — every room, every surface, every closet.",
              "100% satisfaction guaranteed — if your landlord spots anything, we return free.",
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
              Olney Renters Trust Capital Clean Care
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
                "Booked last-minute before my move-out inspection. Passed with flying colors and got my full deposit back. Worth every penny — would not attempt a move-out inspection without them."
              </p>
              <p className="text-sm font-semibold text-foreground">Rachel K.</p>
              <p className="text-xs text-muted-foreground">Olney, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Olney move-out clients from Norbeck to Olney Theatre Center area. Share your experience.
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
            Move Out Cleaning FAQ — Olney, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Olney"
        citySlug="olney-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={olneyServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Olney" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Don't Risk Your Deposit — Book Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Olney ZIPs (20832), including Norbeck and the Olney Theatre Center area.
            Free quote in 60 seconds — or call (240) 704-2551 for same-day availability.
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

export default OlneyMoveOutCleaningPage;
