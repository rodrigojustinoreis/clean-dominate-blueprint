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

const PAGE_URL = "https://capitalcleancare.com/locations/wheaton-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Wheaton?",
    a: "Weekly is ideal for larger homes, families with kids or pets. Bi-weekly is our most popular option — a clean, well-maintained home without the maximum cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Wheaton home. No strangers showing up each week — your team learns your home and your preferences.",
  },
  {
    q: "How much does recurring cleaning cost in Wheaton?",
    a: "Recurring clients receive discounted rates compared to one-time cleanings. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Wheaton ZIPs: 20902, 20906.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to a recurring plan once they see the results.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Wheaton and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops wiped and sanitized",
      "Sink scrubbed and polished",
      "Appliance exteriors cleaned",
      "Microwave interior wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet cleaned and disinfected",
      "Shower and tub scrubbed",
      "Sink and faucets cleaned",
      "Mirrors polished",
      "Floors swept and mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens provided)",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "Surfaces dusted top to bottom",
      "Floors vacuumed and mopped",
      "Window sills cleaned",
      "Baseboards wiped",
      "Light switches and door handles sanitized",
      "Add-on rotation: inside fridge, oven, cabinets (every nth visit)",
    ],
  },
];

const wheatonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const WheatonRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Wheaton, MD — Weekly & Bi-Weekly Service",
    description:
      "Weekly and bi-weekly house cleaning in Wheaton, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
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
          { label: "Wheaton, MD", href: "/locations/wheaton-md" },
          { label: "Recurring Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Wheaton, MD",
          "Glenmont, Wheaton MD",
          "Kemp Mill, Wheaton MD",
          "Forest Glen, Wheaton MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Wheaton, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Wheaton, MD"
        description="Weekly and bi-weekly recurring house cleaning in Wheaton, MD. Same trusted, background-checked team every visit. EPA Safer Choice™ certified products. Serving Glenmont, Kemp Mill, Forest Glen, and all Wheaton ZIP codes."
        url={PAGE_URL}
        areaServed={["Wheaton, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Wheaton, MD", href: "/locations/wheaton-md" },
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Recurring House Cleaning in Wheaton, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Wheaton home — from Glenmont to Kemp Mill to Forest Glen — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."
        cityName="Wheaton"
        state="MD"
        zipRange="20902"
        heroImage="/images/team/team-mopping-uniform.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Wheaton, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Wheaton"
      />

      {/* Schedule Plans */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                plan: "Weekly",
                bestFor: "Busy families, large homes, pets",
                discount: "Largest recurring discount",
                result: "Always guest-ready",
              },
              {
                plan: "Bi-Weekly",
                bestFor: "Most Wheaton households",
                discount: "Standard recurring discount",
                result: "Clean between uses",
              },
              {
                plan: "Monthly",
                bestFor: "Lighter maintenance needs",
                discount: "Minimal discount",
                result: "Seasonal freshness",
              },
            ].map((item) => (
              <div key={item.plan} className="p-5 bg-card rounded-xl border border-border/50">
                <h3 className="font-bold text-foreground text-lg mb-3">{item.plan}</h3>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Best for:</span> {item.bestFor}</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Savings:</span> {item.discount}</p>
                  <p className="text-xs text-muted-foreground"><span className="font-semibold text-foreground">Result:</span> {item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Wheaton Recurring Clean"
        categories={checklistCategories}
      />

      {/* Why Recurring */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Cumulative Cleanliness",
                body: "Regular maintenance prevents buildup. Your Wheaton home actually gets cleaner over time — not just maintained.",
              },
              {
                title: "Same Team Every Time",
                body: "The same background-checked, bonded crew comes every visit. They learn your preferences, your layout, your standards. No retraining.",
              },
              {
                title: "Affordable Recurring Rates",
                body: "Recurring clients in Wheaton get better rates than one-time bookings. Get your exact quote in 60 seconds.",
              },
              {
                title: "Priority Scheduling",
                body: "First access to preferred time slots and faster rescheduling — important in a busy area like Glenmont and Kemp Mill.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Getting Started */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Getting Started With Recurring Cleaning in Wheaton
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              New recurring clients typically start with a deeper initial{" "}
              <Link to="/locations/wheaton-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              to establish a clean baseline. After that, every recurring visit maintains that standard
              efficiently. Whether you're in ZIP 20902 near Westfield Wheaton Mall or in the 20906
              area near Brookside Gardens, the same consistent team is assigned to your home.
            </p>
            <p>
              Your{" "}
              <Link to="/locations/wheaton-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              schedule is easy to adjust — weekly, bi-weekly, or monthly. Need to skip a week?
              Just give us 24-hour notice. No lock-in contracts, no penalties. We believe in earning
              your trust every single visit, not trapping you with paperwork.
            </p>
            <p>
              Capital Clean Care is a Latino-owned business rooted in the Wheaton and Montgomery
              County community. When you set up recurring service with us, you're working directly
              with a local team that's accountable to you — not a distant franchise center. Call
              (240) 704-2551 to get started or get your free quote in 60 seconds online.
            </p>
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
              What Wheaton Families Say About Recurring Cleaning
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
                "Best investment we've made. Coming home to a clean house every week is amazing."
              </p>
              <p className="text-sm font-semibold text-foreground">James T.</p>
              <p className="text-xs text-muted-foreground">Wheaton, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving recurring cleaning clients across Glenmont, Kemp Mill, and Forest Glen. Share your experience.
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
            Recurring Cleaning FAQ — Wheaton, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Wheaton"
        citySlug="wheaton-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={wheatonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Wheaton" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Wheaton Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Brookside Gardens or anywhere across Wheaton's 20902–20906 ZIP codes,
            we're ready to build your routine. Free quote in 60 seconds — or call (240) 704-2551.
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

export default WheatonRecurringCleaningPage;
