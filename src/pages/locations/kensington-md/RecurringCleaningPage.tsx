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

const PAGE_URL = "https://capitalcleancare.com/locations/kensington-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Kensington?",
    a: "Weekly is ideal for larger homes, families with kids or pets — or anyone who simply wants to come home to a spotless space every single week. Bi-weekly is our most popular option: a well-maintained home at a more manageable cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Kensington home. No strangers each week — they learn your preferences, your layout, and your standards.",
  },
  {
    q: "How much does recurring cleaning cost in Kensington?",
    a: "Recurring clients receive better rates than one-time bookings. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — give us 24-hour notice to skip, pause, or modify. No lock-in contracts. We make it easy to flex around your schedule.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Kensington ZIPs: 20895.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to recurring service once they experience the results.",
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
      "Wipe countertops and appliance exteriors",
      "Clean sink and microwave inside and out",
      "Sweep and mop floor",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Scrub toilet, tub/shower, and sink",
      "Clean mirrors and fixtures",
      "Mop floor",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "Dust all surfaces",
      "Vacuum floors and rugs",
      "Make beds (linens if provided)",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "Dust and vacuum throughout",
      "Mop hard floors",
      "Wipe window sills, baseboards, and door handles",
      "Light switches spot-cleaned",
    ],
  },
  {
    heading: "Add-On Rotation (every nth visit)",
    items: [
      "Inside refrigerator",
      "Inside oven",
      "Inside cabinets",
      "Laundry (on request)",
    ],
  },
];

const kensingtonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
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

const KensingtonRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Kensington, MD",
    description:
      "Weekly and bi-weekly house cleaning in Kensington, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
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
          { label: "Kensington, MD", href: "/locations/kensington-md" },
          { label: "Recurring Cleaning", href: PAGE_URL },
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
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Kensington, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Kensington, MD"
        description="Weekly and bi-weekly recurring house cleaning in Kensington, MD. Same trusted team every visit. EPA Safer Choice certified products. No contracts, 100% satisfaction guaranteed."
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
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Recurring House Cleaning in Kensington, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Kensington home — from Kensington Historic District to Rock Creek Hills to Rock Creek Knolls — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed."
        cityName="Kensington"
        state="MD"
        zipRange="20895"
        heroImage="/images/team/team-mopping-uniform.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Kensington, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Kensington"
      />

      {/* Schedule Options */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                label: "Weekly",
                best: "Busy families, large homes, pets",
                discount: "Largest recurring discount",
                result: "Always guest-ready",
              },
              {
                label: "Bi-Weekly",
                best: "Most Kensington households",
                discount: "Standard recurring discount",
                result: "Clean between uses",
              },
              {
                label: "Monthly",
                best: "Lighter maintenance",
                discount: "Minimal discount",
                result: "Seasonal freshness",
              },
            ].map((plan) => (
              <div key={plan.label} className="p-5 bg-card rounded-xl border border-border/50 text-center">
                <p className="font-bold text-lg text-foreground mb-3">{plan.label}</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><span className="font-medium text-foreground">Best for:</span> {plan.best}</p>
                  <p><span className="font-medium text-foreground">Savings:</span> {plan.discount}</p>
                  <p><span className="font-medium text-foreground">Result:</span> {plan.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Kensington Recurring Clean"
        categories={checklistCategories}
      />

      {/* Why Recurring */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              {
                title: "Cumulative cleanliness",
                body: "Regular maintenance prevents buildup. Your Kensington home actually gets cleaner over time rather than cycling between neglect and catch-up cleanings.",
              },
              {
                title: "Same team every time",
                body: "The same background-checked, bonded crew comes every visit. They learn your preferences, your layout, your standards. No retraining each week.",
              },
              {
                title: "Affordable recurring rates",
                body: "Recurring clients get better rates than one-time bookings throughout Kensington's 20895 ZIP code. Get your exact quote in 60 seconds.",
              },
              {
                title: "Priority scheduling",
                body: "First access to preferred time slots and faster rescheduling. Your slot in Kensington is protected week to week.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Getting Started With Recurring Cleaning in Kensington
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Deep baseline first",
                body: "New recurring clients start with a deeper initial clean — a thorough deep cleaning to establish a fresh baseline throughout your home.",
              },
              {
                step: "2",
                title: "Consistent team assigned",
                body: "The same dedicated, bonded team comes every visit — whether you're near Kensington Antique Row or anywhere else in ZIP 20895.",
              },
              {
                step: "3",
                title: "Set your schedule",
                body: "Weekly, bi-weekly, or monthly. Easy to adjust, pause, or modify with 24-hour notice. No long-term contracts.",
              },
              {
                step: "4",
                title: "Ongoing satisfaction guaranteed",
                body: "We re-clean free if you're ever not happy. Your standards are our standards on every recurring visit.",
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
              What Kensington Families Say About Recurring Cleaning
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
              <p className="text-xs text-muted-foreground">Kensington, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving recurring clients near Rock Creek Trail, Capitol View Park, and across Kensington's 20895 ZIP code.
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

      {/* Context section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Building a Cleaning Routine in Kensington
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kensington families lead busy lives. Between commutes along Connecticut Avenue, weekend
              trips to the Rock Creek Trail, and time spent around Historic Kensington and Kensington
              Antique Row, weekends fill up fast. Recurring cleaning means you come home to a clean
              house without spending your only free Saturday scrubbing bathrooms.
            </p>
            <p>
              Our recurring clients in Rock Creek Hills and Rock Creek Knolls often tell us that
              switching to a scheduled cleaning service is the single household change that made the
              biggest difference to their daily quality of life. The same trusted team. The same
              standard. Every visit.
            </p>
            <p>
              Not sure if recurring is right for you? Try a{" "}
              <Link to="/locations/kensington-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              or{" "}
              <Link to="/locations/kensington-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              first, then convert. Many Kensington clients start with a one-time clean and become
              recurring clients after their first experience. Call (240) 704-2551 to discuss what
              schedule works best for your home.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Kensington, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Kensington"
        citySlug="kensington-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={kensingtonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Kensington" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Kensington Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Rock Creek Park or anywhere across Kensington's 20895 ZIP code,
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

export default KensingtonRecurringCleaningPage;
