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

const PAGE_URL = "https://capitalcleancare.com/locations/kensington-md/deep-cleaning";

const faqs = [
  {
    q: "How long does a deep cleaning take in Kensington?",
    a: "Most Kensington homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer. We'll give you a realistic estimate when you book.",
  },
  {
    q: "How much does a deep cleaning cost in Kensington, MD?",
    a: "Pricing is based on home size and scope. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Do I need to be home during the deep cleaning?",
    a: "No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked and trusted in Kensington homes.",
  },
  {
    q: "Is your deep cleaning eco-friendly?",
    a: "Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets.",
  },
  {
    q: "Do you do spring cleaning in Kensington?",
    a: "Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year for a thorough reset of your Kensington home.",
  },
  {
    q: "How often should I get a deep cleaning in Kensington?",
    a: "Once or twice a year is typical, combined with regular maintenance cleanings in between. Many clients pair periodic deep cleans with ongoing recurring cleaning.",
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
      "Clean inside microwave",
      "Degrease range hood",
      "Wipe inside all cabinets and drawers",
      "Descale faucets and fixtures",
      "Scrub sink and backsplash",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Scrub grout lines throughout",
      "Descale showerhead and fixtures",
      "Deep-clean toilet (base, hinges, under rim)",
      "Clean exhaust fan",
      "Edge-to-edge mirror clean",
      "Scrub tub and shower surround",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Wipe baseboards top and sides",
      "Clean window sills and tracks",
      "Wipe light switches and outlets",
      "Dust ceiling fans",
      "Wipe door frames and handles",
      "Vacuum under and behind furniture",
      "Wipe all doors",
    ],
  },
];

const kensingtonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const KensingtonDeepCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Service in Kensington, MD — Top-to-Bottom, Eco-Friendly",
    description:
      "Professional deep cleaning in Kensington, MD. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote.",
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
          { label: "Kensington, MD", href: "/locations/kensington-md" },
          { label: "Deep Cleaning", href: PAGE_URL },
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
            name: "Brian G.",
            text: "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough.",
            location: "Fairfax, VA",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Deep Cleaning Service in Kensington, MD"
        description="Top-to-bottom deep cleaning in Kensington, MD. Inside appliances, grout lines, baseboards, ceiling fans, and everywhere a standard cleaning misses. EPA Safer Choice certified products. 100% satisfaction guaranteed."
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
              { label: "Deep Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Deep Cleaning Services in Kensington, MD"
        lead="When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your Kensington home — from Rock Creek Hills to Rock Creek Knolls. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only."
        cityName="Kensington"
        state="MD"
        zipRange="20895"
        heroImage="/images/team/power-scrubber-tile.jpg"
        heroImageAlt="Capital Clean Care deep cleaning service in Kensington, MD — top-to-bottom professional results"
        ctaPrimary="Schedule a Deep Clean in Kensington"
      />

      {/* Standard vs Deep comparison */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Standard Cleaning vs. Deep Cleaning — What's the Difference?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-border rounded-xl overflow-hidden text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-3 font-semibold text-foreground">Standard Cleaning</th>
                  <th className="text-left p-3 font-semibold text-foreground">Deep Cleaning</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Surface wipe of appliances", "Inside oven and microwave"],
                  ["General mopping", "Scrubbing grout and tile edges"],
                  ["Dusting surfaces", "Ceiling fans, baseboards, window tracks"],
                  ["Standard bathroom clean", "Descaling, grout scrubbing, exhaust fans"],
                  ["~2–3 hours", "~4–6 hours"],
                ].map(([standard, deep], idx) => (
                  <tr key={idx} className="bg-card">
                    <td className="p-3 text-muted-foreground">{standard}</td>
                    <td className="p-3 text-foreground font-medium">{deep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Kensington Deep Cleaning"
        categories={checklistCategories}
      />

      {/* When to Book */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            When Should You Book a Deep Clean in Kensington?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Moving into or out of a home in 20895",
              "Spring seasonal reset near Historic Kensington",
              "Before a special event or holiday gathering",
              "After a long period between professional cleanings",
              "Post-renovation or construction",
              "Preparing a home for sale or rental listing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Kensington Homeowners Love Our Deep Clean
          </h2>
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
                Serving deep cleaning clients across Kensington Historic District, Rock Creek Hills, and ZIP 20895.
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
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Deep Cleaning Near Kensington Antique Row and Rock Creek Park
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kensington's older Victorian and craftsman homes in the Historic District accumulate
              dust and grime in ways that newer construction doesn't. Crown moldings, original
              window tracks, antique tile grout — these surfaces demand care that a weekly maintenance
              cleaning simply doesn't reach. Capital Clean Care's deep cleaning service is built
              for exactly these scenarios.
            </p>
            <p>
              Whether you're in Rock Creek Hills preparing for a Kensington Antique Row event,
              or in Rock Creek Knolls resetting your home after a long winter, our team brings
              EPA Safer Choice™ certified products and the attention to detail that gets results
              visible after the first visit. We don't rush a deep clean through a standard checklist.
            </p>
            <p>
              Looking for ongoing maintenance after your deep clean? Our{" "}
              <Link to="/locations/kensington-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              service keeps your home at that same level week after week. Or pair a deep clean
              with{" "}
              <Link to="/locations/kensington-md/move-out-cleaning" className="text-primary underline">
                move-out cleaning
              </Link>{" "}
              when it's time to hand back the keys. Call (240) 704-2551 to discuss the right
              approach for your Kensington home.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Deep Cleaning FAQ — Kensington, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Kensington"
        citySlug="kensington-md"
        serviceLabel="Deep Cleaning"
        serviceSlug="deep-cleaning"
        services={kensingtonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Kensington" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Book Your Kensington Deep Clean Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Kensington homes near Kensington Antique Row and across ZIP 20895.
            Start fresh — free quote in 60 seconds, or call (240) 704-2551.
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

export default KensingtonDeepCleaningPage;
