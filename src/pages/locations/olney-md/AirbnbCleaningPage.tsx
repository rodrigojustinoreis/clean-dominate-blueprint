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

const PAGE_URL = "https://capitalcleancare.com/locations/olney-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Olney Airbnb?",
    a: "Most 1–2 bedroom Olney properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb calendar and we schedule around each checkout automatically for your Olney property.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Olney?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — free, no contracts.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We document with photos and charge only for the additional time required. No surprises.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, direct bookings. Any short-term rental in Olney's 20832 ZIP code.",
  },
  {
    q: "Do you know Airbnb standards in Olney?",
    a: "Yes. We work with multiple hosts across Olney (20832) and Montgomery County and understand what guests expect.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Olney and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Between Every Guest",
    items: [
      "Strip and remake beds with fresh linens",
      "Replace all towels",
      "Sanitize all bathroom surfaces",
      "Clean kitchen — dishes, surfaces, trash",
      "Restock essentials (if provided)",
      "Sweep, vacuum, and mop all floors",
      "Wipe mirrors and glass screens",
    ],
  },
  {
    heading: "Deep-Reset (Periodic)",
    items: [
      "Inside appliances cleaned",
      "Scrub grout and baseboards",
      "Window tracks cleaned",
      "Closet interiors wiped",
    ],
  },
  {
    heading: "Extras Available",
    items: [
      "Laundry service",
      "Restock consumables (toiletries, paper products)",
      "Pre-check-in inspection and photo report",
    ],
  },
];

const olneyServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const OlneyAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Olney, MD — Fast Turnovers, 5-Star Results",
    description:
      "Airbnb & short-term rental cleaning in Olney, MD. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-kitchen-detail.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Olney, MD", href: "/locations/olney-md" },
          { label: "Airbnb Cleaning", href: PAGE_URL },
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
            name: "Amanda F.",
            text: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Airbnb & Short-Term Rental Cleaning in Olney, MD"
        description="Airbnb and short-term rental turnover cleaning in Olney, MD. Hotel-standard results between every guest. Flexible scheduling, same-day turnovers available. Serving all Olney hosts in 20832 ZIP code."
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
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Olney, MD"
        lead="Protect your Olney Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from Olney Mill to Olney Theatre Center. Flexible scheduling, same-day turnovers, 100% satisfaction guaranteed."
        cityName="Olney"
        state="MD"
        zipRange="20832"
        heroImage="/images/team/team-kitchen-detail.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning in Olney, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Olney"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Our Olney Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* Why Olney Hosts Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Olney Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-1 gap-6 mb-8">
            {[
              {
                title: "Rating Protection",
                desc: "Consistent, bonded team means guests find your property exactly as listed, every time. 100% satisfaction guaranteed: we re-clean if anything falls short of hotel standard.",
              },
              {
                title: "Flexible Scheduling",
                desc: "We work around your checkout and check-in window across Olney's 20832 ZIP code. Same-day turnovers available for hosts with back-to-back bookings.",
              },
              {
                title: "Locally Owned and Accountable",
                desc: "We're not a franchise. We're Latino-owned and operate in Olney. Your Airbnb reputation and your guests' experience matter to us personally — not just as a transaction.",
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Airbnb Cleaning Works With Us
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Share your Airbnb or VRBO calendar with us and we coordinate around each checkout —
              no back-and-forth scheduling every booking. We arrive at checkout time, work through
              your Olney property from Williamsburg Village to Norbeck, and have it ready for your
              next guest. You receive confirmation so check-in goes smoothly.
            </p>
            <p>
              For hosts managing vacation rentals near the Georgia Avenue corridor and Olney Town
              Center, we also offer periodic deep-reset cleans that go beyond the standard turnover:
              inside appliances, grout scrubbing, window tracks, and closet interiors. These
              quarterly deep cleans maintain the property at a higher baseline so every standard
              turnover stays fast and effective.
            </p>
            <p>
              If you're managing multiple short-term rental properties, we offer priority scheduling
              and coordination across your portfolio. Olney's 20832 market sees consistent occupancy
              year-round — we're equipped to keep up with it. Call (240) 704-2551 to discuss a
              recurring{" "}
              <Link to="/locations/olney-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              arrangement for your vacation rental.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Host Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Olney Hosts Trust Capital Clean Care
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
                "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. The detail is incredible — guests always comment on how clean the property is."
              </p>
              <p className="text-sm font-semibold text-foreground">Amanda F.</p>
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Olney short-term rental hosts near Olney Town Center and throughout 20832. Share your experience.
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
            Airbnb Cleaning FAQ — Olney, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Olney"
        citySlug="olney-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
        services={olneyServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Olney" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Set Up Automatic Airbnb Turnovers in Olney
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Olney short-term rentals near Olney Town Center and across ZIPs 20832.
            Free quote in 60 seconds — or call (240) 704-2551 to set up your turnover schedule.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Airbnb Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Flexible scheduling · Same-day turnovers · 100% satisfaction guaranteed
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default OlneyAirbnbCleaningPage;
