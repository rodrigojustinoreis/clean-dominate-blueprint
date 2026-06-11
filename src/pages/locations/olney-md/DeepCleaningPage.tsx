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

const PAGE_URL = "https://capitalcleancare.com/locations/olney-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Olney?",
    a: "Most Olney homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer. We work systematically through each room.",
  },
  {
    q: "How much does a deep cleaning cost in Olney, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets.",
  },
  {
    q: "Do you do spring cleaning in Olney?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year near Olney Theatre Center or anywhere in 20832.",
  },
  {
    q: "How often should I get a deep cleaning in Olney?",
    a: "Once or twice a year is typical, combined with regular maintenance cleanings in between. Many clients combine deep cleaning with a recurring schedule.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Olney and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen — Deep",
    items: [
      "Oven interior scrubbed",
      "Microwave interior cleaned",
      "Degrease range hood",
      "Inside cabinets and drawers wiped",
      "Descale faucets and sink",
      "Scrub backsplash",
      "Countertops and appliances sanitized",
    ],
  },
  {
    heading: "Bathrooms — Deep",
    items: [
      "Scrub grout lines throughout",
      "Descale showerhead and fixtures",
      "Deep-clean toilet (base, hinges, under rim)",
      "Clean exhaust fan",
      "Edge-to-edge mirror cleaning",
      "Full tub and shower scrub",
    ],
  },
  {
    heading: "All Rooms — Deep",
    items: [
      "Wipe baseboards — top and sides",
      "Window sills and tracks cleaned",
      "Light switches and outlets wiped",
      "Ceiling fans dusted and cleaned",
      "Door frames and handles sanitized",
      "Vacuum under and behind furniture",
      "Wipe all doors and door frames",
    ],
  },
  {
    heading: "Floors & Surfaces",
    items: [
      "Detail vacuum all carpets",
      "Deep mop all hard floors",
      "Grout lines scrubbed",
      "Spot-clean baseboards and trim",
    ],
  },
];

const olneyServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const OlneyDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in Olney, MD",
    description:
      "Professional deep cleaning in Olney, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/power-scrubber-tile.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Olney, MD", href: "/locations/olney-md" },
          { label: "Deep Cleaning", href: PAGE_URL },
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
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Fairfax, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Deep Cleaning Service in Olney, MD"
        description="Professional deep cleaning in Olney, MD. Top-to-bottom coverage including inside appliances, grout scrubbing, baseboards, ceiling fans, and window tracks. EPA Safer Choice certified products. Serving 20832 ZIP code."
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
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Deep Cleaning Services in Olney, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Olney home — from Williamsburg Village to Norbeck. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Olney"
        state="MD"
        zipRange="20832"
        heroImage="/images/team/power-scrubber-tile.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Olney, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Olney"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Olney Deep Cleaning"
        categories={checklistCategories}
      />

      {/* Standard vs Deep */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Standard Clean</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 text-muted-foreground border border-border/50">Surface wipe of appliances</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Inside oven and microwave</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 text-muted-foreground border border-border/50">General mopping</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Scrubbing grout and tile edges</td>
                </tr>
                <tr>
                  <td className="p-3 text-muted-foreground border border-border/50">Dusting surfaces</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Ceiling fans, baseboards, window tracks</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 text-muted-foreground border border-border/50">Standard bathroom clean</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Descaling, grout scrubbing, exhaust fans</td>
                </tr>
                <tr>
                  <td className="p-3 text-muted-foreground border border-border/50">~2–3 hours</td>
                  <td className="p-3 text-muted-foreground border border-border/50">~4–6 hours</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            When Should You Book a Deep Clean in Olney?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Moving into or out of a home in Olney's 20832 ZIP code",
              "Spring seasonal reset after winter in Olney Mill or Williamsburg Village",
              "Before a special event or holiday gathering at your Olney home",
              "After a long period between professional cleanings",
              "Post-renovation or after construction work in your home",
              "Preparing an Olney property for sale or rental listing",
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
              Olney Homeowners Love Our Deep Clean
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
                "The level of detail was incredible — areas I hadn't thought to ask about were spotless. They came out for our spring deep clean and we've been booking them ever since."
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
                Serving Olney deep cleaning clients near Olney Theatre Center and across 20832. Share your experience.
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

      {/* Deep Clean Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Deep Cleaning in Olney — Why It Matters
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Olney's older neighborhoods like Olney Mill have homes built in the 1970s and 1980s
              where grout lines, cabinet interiors, and range hoods accumulate years of buildup that
              a standard maintenance clean simply can't address. Our deep cleaning team approaches
              each room with tools and techniques specifically designed to break down that buildup
              without harsh chemicals — using EPA Safer Choice™ certified formulas that are
              effective on mineral deposits, grease, and soap scum while staying completely
              non-toxic.
            </p>
            <p>
              Many Olney homeowners book a deep clean as a transition point: starting a{" "}
              <Link to="/locations/olney-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              schedule, preparing a home for sale, or resetting after tenants. Others book annually
              as part of their spring cleaning routine near Olney Theatre Center. After a deep clean,
              maintaining your home with a{" "}
              <Link to="/locations/olney-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              on a regular schedule becomes significantly easier — and more affordable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Olney, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Olney"
        citySlug="olney-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={olneyServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Olney" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book Your Olney Deep Clean Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Olney homes near Olney Theatre Center and across ZIP 20832.
            Start fresh — free quote in 60 seconds. Call (240) 704-2551 or book online.
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

      <StickyMobileCTA />
    </Layout>
  );
};

export default OlneyDeepCleaningPage;
