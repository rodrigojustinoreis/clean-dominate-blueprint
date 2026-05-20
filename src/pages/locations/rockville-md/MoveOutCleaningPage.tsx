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

const PAGE_URL = "https://capitalcleancare.com/locations/rockville-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Rockville?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — free, no commitment. Same-day availability confirmed at booking for ZIP codes 20850, 20851, 20852, and 20853.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Rockville?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. Many clients coordinate key drop-off and handle the cleaning remotely.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Rockville?",
    a: "In most cases, yes. Contact us early to confirm availability — we regularly accommodate urgent move-out timelines throughout Rockville and Montgomery County.",
  },
  {
    q: "Do you clean empty apartments and homes?",
    a: "Yes. Empty-home move out cleanings are our specialty. Completely empty properties are preferred — it lets us reach every corner, baseboard, and inside every cabinet without obstacles.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Rockville and Montgomery County — from inside appliances to grout lines to inside cabinets. Landlord-ready results.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current Rockville home and a deep cleaning for their new home. Ask about our combination booking when you call.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Rockville and the greater Montgomery County area. We live and work in this community, and your deposit matters to us.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Full",
    items: [
      "Inside oven scrubbed clean",
      "Inside fridge cleaned and deodorized",
      "Range hood degreased",
      "Inside all cabinets and drawers wiped",
      "Sink scrubbed and polished",
      "Countertops and backsplash cleaned",
      "Microwave interior and exterior",
      "Floor mopped edge-to-edge",
    ],
  },
  {
    heading: "Bathrooms — Full",
    items: [
      "Toilet scrubbed (base, tank, hinges)",
      "Inside vanity cleaned",
      "Grout and tile scrubbed",
      "Tub and shower descaled",
      "Fixtures descaled and polished",
      "Mirrors cleaned streak-free",
      "Floor mopped",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Inside all closets cleaned",
      "Baseboards and door frames wiped",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans dusted and wiped",
      "Vacuum and mop all floors",
      "Spot-clean walls as needed",
    ],
  },
  {
    heading: "Final Steps",
    items: [
      "All trash removed",
      "All surfaces checked and touched up",
      "Garage sweep (if applicable)",
      "Final walkthrough inspection",
    ],
  },
];

const rockvilleServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
];

const RockvilleMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Rockville, MD — Get Your Full Deposit Back",
    description:
      "Move out cleaning in Rockville, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-dark-floor.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Rockville, MD", href: "/locations/rockville-md" },
          { label: "Move Out Cleaning", href: PAGE_URL },
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
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Rockville, MD"
        description="Move out cleaning in Rockville, MD. Landlord-ready checklist covers inside appliances, grout, baseboards, inside cabinets. Bonded and insured. Same-day available. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Rockville, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Rockville, MD", href: "/locations/rockville-md" },
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Move Out Cleaning in Rockville, MD"
        lead="Moving out in Rockville? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve King Farm, Twinbrook, and all Rockville neighborhoods across ZIPs 20850–20853. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Rockville"
        state="MD"
        zipRange="20850–20853"
        heroImage="/images/team/team-mopping-dark-floor.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Rockville, MD — deposit-ready landlord inspection results"
        ctaPrimary="Book Your Move Out Clean in Rockville"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Rockville"
        categories={checklistCategories}
      />

      {/* Why deposit section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Landlords in Rockville and across Montgomery County routinely withhold security deposits
              for cleaning deficiencies. A professional move out cleaning built to landlord standards —
              specifically addressing the Rockville rental market from Fallsgrove apartments to
              King Farm townhomes — is the most reliable way to protect your deposit. We know what
              property managers inspect, and our checklist covers all of it.
            </p>
            <p>
              Unlike a standard house cleaning, a move out cleaning goes deeper: inside every cabinet
              and drawer, inside the oven and fridge, grout lines scrubbed, baseboards wiped, windows
              cleaned. The goal is not "clean enough to live in" — it's "clean enough to pass a
              professional property inspection."
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Our Rockville Move Out Cleaning Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Book your date — same-day available",
                body: "Same-day and next-day slots available for urgent moves in 20850 and 20851. Call (240) 704-2551 or use the form below to confirm availability.",
              },
              {
                step: "2",
                title: "We arrive with all supplies",
                body: "No need to leave anything behind. Our bonded, background-checked team brings all equipment and EPA Safer Choice™ certified cleaning products.",
              },
              {
                step: "3",
                title: "Full landlord-standard clean",
                body: "Every room, every surface, every item on the checklist — from inside appliances to grout lines to inside all cabinets. No shortcuts.",
              },
              {
                step: "4",
                title: "100% satisfaction guarantee",
                body: "If your landlord spots anything during the inspection, call us and we return to re-clean free of charge. No arguments, no fine print.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <span className="text-primary font-bold text-sm">{step}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
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
              Rockville Renters Trust Capital Clean Care
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
                "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets. Exactly what we needed before our move."
              </p>
              <p className="text-sm font-semibold text-foreground">Sarah M.</p>
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Rockville renters in Twinbrook, King Farm, and Fallsgrove. Share your experience.
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

      {/* Service Area */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Move Out Cleaning Throughout Rockville, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We provide move out cleaning across all Rockville ZIP codes — 20850, 20851, 20852,
              and 20853. Whether you're leaving an apartment near Rockville Town Center, a townhome
              in King Farm, or a single-family home in Twinbrook or Fallsgrove, our bonded,
              background-checked team will have the property deposit-ready before your inspection.
            </p>
            <p>
              Rockville has one of the highest rental densities in Montgomery County, with a large
              concentration of managed properties along the Rockville Pike corridor and in the
              20850 ZIP code near the Metro. Our team is experienced with the cleaning standards
              expected by property managers in this market — including management companies
              operating in the Fallsgrove, King Farm, and Congressional neighborhoods.
            </p>
            <p>
              Don't risk your security deposit on a rushed DIY clean the night before inspection.
              A professional move out cleaning is one of the highest-ROI services you can book
              before vacating. Call (240) 704-2551 or use the form below — same-day slots available
              throughout Rockville.
            </p>
          </div>
        </div>
      </section>

      {/* Preparing for Inspection */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Preparing for Your Rockville Landlord Inspection
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Most Rockville property managers conduct move-out inspections within 24–72 hours
              of your vacate date. Schedule your cleaning as close to that window as possible —
              ideally the morning of or the day before your inspection. Cleaning a week early
              and then moving furniture out defeats the purpose; a clean floor gets scuffed,
              a scrubbed fridge gets left open. Timing the clean to the final walk matters.
            </p>
            <p>
              Capital Clean Care is fully bonded, insured, and licensed throughout the Rockville
              area. Both you and your property management company can request documentation of
              our coverage before or after the service. For Rockville clients moving out of
              managed communities in Fallsgrove, King Farm, or the Rockville Pike corridor,
              we're accustomed to working with professional property managers who have
              specific inspection standards — and our team is trained to meet them.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Rockville, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Rockville"
        citySlug="rockville-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={rockvilleServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Rockville" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Don't Risk Your Deposit — Book Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Rockville ZIPs (20850, 20851, 20852, 20853), including Fallsgrove and the
            Rockville Pike area. Get a free, no-obligation move out cleaning quote in 60 seconds —
            or call (240) 704-2551 for same-day availability.
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

export default RockvilleMoveOutCleaningPage;
