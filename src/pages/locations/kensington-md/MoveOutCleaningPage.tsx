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

const PAGE_URL = "https://capitalcleancare.com/locations/kensington-md/move-out-cleaning";

const faqs = [
  {
    q: "How much does move out cleaning cost in Kensington?",
    a: "Pricing depends on home size and condition. Get your exact quote in 60 seconds — free, no commitment. Same-day availability is confirmed at booking for the 20895 ZIP code.",
  },
  {
    q: "Do I need to be present during the move out cleaning in Kensington?",
    a: "No. Our fully insured, background-checked team handles everything while you manage your move. A key or lockbox access is all we need.",
  },
  {
    q: "Can you do same-day or next-day move out cleaning in Kensington?",
    a: "In most cases, yes. Contact us early to confirm availability in your ZIP code (20895). We understand move-out timelines are tight.",
  },
  {
    q: "Do you clean empty apartments?",
    a: "Yes. Empty-home move out cleanings are our specialty. A completely empty property is preferred and allows our team to be most thorough.",
  },
  {
    q: "Does your move out cleaning meet Maryland landlord inspection standards?",
    a: "Yes. Our checklist is built to meet typical property management standards in Kensington and throughout Montgomery County.",
  },
  {
    q: "Do you also do move-in cleaning for the new home?",
    a: "Absolutely. Many clients book a move out clean for their current Kensington home and a deep cleaning for their new one.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Kensington and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Deep clean inside oven",
      "Clean inside refrigerator",
      "Degrease range hood",
      "Wipe inside all cabinets and drawers",
      "Scrub sink and fixtures",
      "Clean microwave inside and out",
      "Wipe countertops and backsplash",
      "Sweep and mop floor",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Scrub toilet (base, tank, and hinges)",
      "Clean inside vanity cabinets",
      "Scrub grout and tile throughout",
      "Clean tub and shower surround",
      "Descale fixtures and showerhead",
      "Clean mirrors edge to edge",
      "Sweep and mop floor",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Clean inside all closets",
      "Wipe baseboards and door frames",
      "Clean window sills and tracks",
      "Wipe light switches and outlets",
      "Vacuum and mop all floors",
      "Spot-clean walls",
      "Dust ceiling fans",
      "Remove all trash",
    ],
  },
];

const kensingtonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const KensingtonMoveOutCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Move Out Cleaning in Kensington, MD",
    description:
      "Move out cleaning in Kensington, MD. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available.",
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
          { label: "Kensington, MD", href: "/locations/kensington-md" },
          { label: "Move Out Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Kensington, MD",
          "Kensington Historic District, MD",
          "Rock Creek Hills, Kensington MD",
          "Rock Creek Knolls, Kensington MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Maria L.",
            text: "Got my full deposit back thanks to Capital Clean Care. They cleaned every corner my landlord would look at.",
            location: "Kensington, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Move Out Cleaning in Kensington, MD"
        description="Professional move out cleaning in Kensington, MD. Landlord-standard results to protect your security deposit. Same-day availability. Bonded, insured, eco-friendly team."
        url={PAGE_URL}
        areaServed={["Kensington, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Kensington, MD", href: "/locations/kensington-md" },
              { label: "Move Out Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Move Out Cleaning in Kensington, MD"
        lead="Moving out in Kensington? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve Kensington Historic District, Rock Creek Hills, and all Kensington neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee."
        cityName="Kensington"
        state="MD"
        zipRange="20895"
        heroImage="/images/team/team-making-bed.jpg"
        heroImageAlt="Capital Clean Care move out cleaning service in Kensington, MD — deposit-ready results"
        ctaPrimary="Book Your Move Out Clean in Kensington"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Move Out Cleaning Checklist — Kensington"
        categories={checklistCategories}
      />

      {/* Why Deposit Matters */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Your Security Deposit Depends on the Cleaning
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed mb-10">
            <p>
              Landlords in Kensington and across Montgomery County routinely withhold deposits for
              cleaning. A professional move out cleaning to landlord standards — specifically addressing
              the rental market around Kensington Antique Row and the Connecticut Avenue corridor —
              is the most reliable way to protect your deposit. We know what property managers inspect.
            </p>
            <p>
              Our checklist was built around the items that most commonly cause deposit deductions:
              the inside of the oven, refrigerator shelves, grout lines in bathrooms, window tracks,
              and the condition of baseboards. These are the areas that clearly distinguish a
              professionally cleaned Kensington property from one that was simply tidied before departure.
            </p>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            How Our Kensington Move Out Cleaning Works
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Book your date",
                body: "Same-day and next-day slots available for urgent moves in Kensington's 20895 ZIP code.",
              },
              {
                step: "2",
                title: "We arrive with all supplies",
                body: "No need to leave anything behind. Our team brings everything, including EPA Safer Choice™ certified products.",
              },
              {
                step: "3",
                title: "Full landlord-standard clean",
                body: "Every room, every surface — built around what Montgomery County property managers actually inspect.",
              },
              {
                step: "4",
                title: "100% satisfaction guaranteed",
                body: "If your landlord spots anything, we return free to address it. No fine print.",
              },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border/50">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {item.step}
                </span>
                <div>
                  <p className="font-semibold text-foreground">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{item.body}</p>
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
              Kensington Renters Trust Capital Clean Care
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
                "Got my full deposit back thanks to Capital Clean Care. They cleaned every corner my landlord would look at."
              </p>
              <p className="text-sm font-semibold text-foreground">Maria L.</p>
              <p className="text-xs text-muted-foreground">Kensington, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving move-out clients across Rock Creek Knolls and all of Kensington's 20895 ZIP code.
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

      {/* Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving Kensington's Rental Market
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kensington's rental market includes properties ranging from apartments near Chevy Chase
              Lake to single-family homes in Rock Creek Hills and Rock Creek Knolls. When leases end,
              the expectation from Montgomery County landlords and property managers is a thoroughly
              cleaned property — not just surface-level tidying.
            </p>
            <p>
              Capital Clean Care's move out service is built specifically for this standard. We know
              the difference between what passes a walkthrough and what triggers a deduction. Our
              team arrives with professional equipment and EPA Safer Choice™ products to address
              grease buildup, bathroom mineral deposits, and the kind of embedded grime that
              accumulates over months or years of normal use.
            </p>
            <p>
              Need a{" "}
              <Link to="/locations/kensington-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              for your new place? Or a one-time{" "}
              <Link to="/locations/kensington-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              once you're settled? We can coordinate both. Call (240) 704-2551 or get your free
              move out quote in 60 seconds.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Move Out Cleaning FAQ — Kensington, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Kensington"
        citySlug="kensington-md"
        serviceLabel="Move Out Cleaning"
        serviceSlug="move-out-cleaning"
        services={kensingtonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Kensington" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Don't Risk Your Deposit — Book Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all of Kensington, ZIP 20895 — including Rock Creek Knolls and the
            Kensington Antique Row area. Free quote in 60 seconds, or call (240) 704-2551.
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

export default KensingtonMoveOutCleaningPage;
