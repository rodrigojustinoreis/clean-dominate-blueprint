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

const PAGE_URL = "https://capitalcleancare.com/locations/gaithersburg-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Gaithersburg?",
    a: "Weekly is ideal for larger homes, families with kids or pets, or anyone who wants their home always guest-ready. Bi-weekly is our most popular option — a clean, well-maintained Gaithersburg home without the maximum cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Gaithersburg home. No strangers every week — your team learns your home, your preferences, and your standards.",
  },
  {
    q: "How much does recurring cleaning cost in Gaithersburg?",
    a: "Recurring clients receive discounted rates compared to one-time bookings. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts, ever.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Gaithersburg ZIPs: 20877, 20878, 20879.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many Gaithersburg clients try a house cleaning or deep cleaning first, then convert to a recurring schedule.",
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
      "Countertops wiped and sanitized",
      "Sink scrubbed and polished",
      "Appliance exteriors cleaned",
      "Microwave interior cleaned",
      "Cabinet fronts wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet disinfected inside and out",
      "Shower and tub scrubbed",
      "Sink and faucets cleaned",
      "Mirrors wiped streak-free",
      "Floor mopped and disinfected",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens if provided)",
    ],
  },
  {
    heading: "Living Areas & Add-On Rotation",
    items: [
      "Dusting all surfaces and shelves",
      "Vacuuming carpets and hard floors",
      "Mopping hard floors",
      "Window sills wiped",
      "Baseboards and door handles",
      "Rotating add-ons: inside fridge, inside oven, inside cabinets",
    ],
  },
];

const gaithersburgServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Germantown", slug: "germantown-md", state: "MD" },
];

const GaithersburgRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Gaithersburg, MD — Weekly & Bi-Weekly Service",
    description:
      "Weekly and bi-weekly house cleaning in Gaithersburg, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-uniform.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
          { label: "Recurring Cleaning", href: PAGE_URL },
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
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Gaithersburg, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Gaithersburg, MD"
        description="Weekly, bi-weekly, and monthly recurring house cleaning in Gaithersburg, MD. Same trusted, background-checked team every visit. EPA Safer Choice certified products. Serving Kentlands, Lakelands, Crown Farm, and all Gaithersburg ZIP codes."
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
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Recurring House Cleaning in Gaithersburg, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Gaithersburg home — from Kentlands to Lakelands to Crown Farm — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."
        cityName="Gaithersburg"
        state="MD"
        zipRange="20877–20879"
        heroImage="/images/team/team-mopping-uniform.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Gaithersburg, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Gaithersburg"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Gaithersburg Recurring Clean"
        categories={checklistCategories}
      />

      {/* Why Recurring */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              One-time cleanings solve yesterday's problem. Recurring cleaning in Gaithersburg
              builds a standard — your home actually gets cleaner over time as maintenance prevents
              buildup before it starts. Families in Kentlands and Lakelands tell us the same thing:
              after a few months on a weekly or bi-weekly schedule, the cleaning feels effortless
              because there's nothing to fight against.
            </p>
            <p>
              The biggest complaint about cleaning services is inconsistency — different cleaners,
              different standards, constant re-explaining. Capital Clean Care solves this by assigning
              a dedicated team to your Gaithersburg home. Whether you're in ZIP 20877 near Kentlands
              Market Square or in the 20878 area, the same bonded and insured crew arrives every
              visit. They learn your preferences, your layout, your high-priority areas. No retraining.
              No surprises.
            </p>
          </div>

          {/* Schedule Options */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                label: "Weekly",
                best: "Busy families, large homes, pets",
                discount: "Largest recurring discount",
                result: "Always guest-ready",
              },
              {
                label: "Bi-Weekly",
                best: "Most Gaithersburg households",
                discount: "Standard recurring discount",
                result: "Clean and well-maintained",
              },
              {
                label: "Monthly",
                best: "Lighter maintenance needs",
                discount: "Minimal discount",
                result: "Seasonal freshness",
              },
            ].map((plan) => (
              <div key={plan.label} className="p-5 bg-card border border-border rounded-xl">
                <p className="font-semibold text-foreground text-lg mb-2">{plan.label}</p>
                <p className="text-xs text-muted-foreground mb-1"><span className="font-medium">Best for:</span> {plan.best}</p>
                <p className="text-xs text-muted-foreground mb-1"><span className="font-medium">Savings:</span> {plan.discount}</p>
                <p className="text-xs text-muted-foreground"><span className="font-medium">Result:</span> {plan.result}</p>
              </div>
            ))}
          </div>

          {/* Getting Started */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Getting Started With Recurring Cleaning in Gaithersburg
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Start with a deep baseline clean to establish a clean foundation throughout your home",
              "Same dedicated team assigned — every visit, whether you're near Kentlands Market Square or in Crown Farm",
              "Set your schedule — weekly, bi-weekly, or monthly, easy to adjust any time",
              "Ongoing 100% satisfaction guarantee — we re-clean if you're not happy, no exceptions",
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
              What Gaithersburg Families Say About Recurring Cleaning
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
                "Best investment we've made. Coming home to a clean house every week is amazing. Same team, same high standard every single time."
              </p>
              <p className="text-sm font-semibold text-foreground">James T.</p>
              <p className="text-xs text-muted-foreground">Gaithersburg, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Gaithersburg families near Rio Washingtonian Center and throughout the Kentlands, Lakelands, and Crown Farm neighborhoods.
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
            Recurring Cleaning FAQ — Gaithersburg, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Gaithersburg"
        citySlug="gaithersburg-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={gaithersburgServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Gaithersburg" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Gaithersburg Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Rio Washingtonian Center or anywhere across Gaithersburg's 20877,
            20878, or 20879 ZIP codes, we're ready to build your routine. Free quote in 60 seconds
            — or call (240) 704-2551.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Free Recurring Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            No long-term contracts · Easy to reschedule · 100% satisfaction guaranteed
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default GaithersburgRecurringCleaningPage;
