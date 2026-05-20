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

const PAGE_URL = "https://capitalcleancare.com/locations/gaithersburg-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Gaithersburg Airbnb?",
    a: "Most 1–2 bedroom Gaithersburg properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice across all ZIP codes.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb or VRBO calendar and we schedule around each checkout automatically. No manual coordination needed.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Gaithersburg?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — free, no contracts.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We document with photos and charge only for the additional time required. No surprises.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, direct bookings. Any short-term rental in Gaithersburg.",
  },
  {
    q: "Do you know Airbnb cleanliness standards in Gaithersburg?",
    a: "Yes. We work with multiple hosts across Gaithersburg (20877–20879) and throughout Montgomery County. We know what earns 5-star cleanliness scores.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Gaithersburg and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Every Turnover",
    items: [
      "Strip and remake all beds with fresh linens",
      "Replace all towels",
      "Sanitize all bathroom surfaces",
      "Clean kitchen — dishes, counters, appliances, trash",
      "Restock guest essentials (if provided)",
      "Sweep, vacuum, and mop all floors",
      "Wipe mirrors, screens, and glass",
    ],
  },
  {
    heading: "Deep-Reset (Periodic)",
    items: [
      "Inside all appliances",
      "Scrub grout and baseboards",
      "Window tracks cleaned",
      "Closet interiors wiped",
    ],
  },
  {
    heading: "Optional Extras",
    items: [
      "Laundry service",
      "Restock consumables",
      "Pre-check-in inspection report",
      "Same-day turnovers",
    ],
  },
];

const gaithersburgServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Germantown", slug: "germantown-md", state: "MD" },
];

const GaithersburgAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Gaithersburg, MD — Fast Turnovers, 5-Star Results",
    description:
      "Airbnb & short-term rental cleaning in Gaithersburg, MD. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote.",
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
          { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
          { label: "Airbnb Cleaning", href: PAGE_URL },
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
            name: "Amanda F.",
            text: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Airbnb & Short-Term Rental Cleaning in Gaithersburg, MD"
        description="Professional Airbnb and vacation rental cleaning in Gaithersburg, MD. Fast turnovers, hotel-standard results, flexible scheduling around your checkout windows. Serving hosts in Kentlands, Lakelands, Crown Farm, and all Gaithersburg ZIP codes."
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
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Gaithersburg, MD"
        lead="Protect your Gaithersburg Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from Kentlands to Kentlands Market Square. Flexible scheduling, 100% satisfaction guaranteed."
        cityName="Gaithersburg"
        state="MD"
        zipRange="20877–20879"
        heroImage="/images/team/team-kitchen-detail.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning in Gaithersburg, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Gaithersburg"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Our Gaithersburg Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* Why Hosts Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Gaithersburg Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-1 gap-4 mb-8">
            {[
              {
                title: "Rating protection",
                desc: "Consistent, bonded team means guests find your property exactly as listed, every time. One bad cleanliness review can drop your Superhost status. We deliver hotel-standard results on every single turnover — 100% satisfaction guaranteed.",
              },
              {
                title: "Flexible scheduling around your Gaithersburg calendar",
                desc: "We work around your checkout/check-in window across Gaithersburg's 20877 and 20878 ZIP codes. Same-day turnovers available with advance notice. Share your calendar and we handle the rest.",
              },
              {
                title: "Locally owned and accountable",
                desc: "We're not a franchise. We're Latino-owned and operate right here in Gaithersburg. Your Airbnb reputation matters to us personally — we treat your vacation rental like it's our own.",
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
              Getting started is simple. Share your Gaithersburg short-term rental calendar with us
              and we coordinate around every checkout automatically — no manual scheduling on your
              end. We arrive at checkout time, work through our full hotel-standard turnover checklist,
              and confirm when the property is ready for your next guest.
            </p>
            <p>
              For properties near Rio Washingtonian Center or in the Lakelands area, we understand
              that guests arriving from DC or the broader metro area have high expectations. Our team
              delivers consistent, detail-oriented cleaning that protects the cleanliness scores and
              reviews your rental income depends on. We've helped hosts throughout Gaithersburg
              achieve and maintain 5-star cleanliness ratings on Airbnb, VRBO, and Booking.com.
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
              Gaithersburg Hosts Trust Capital Clean Care
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
                "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. The detail is incredible — guests keep commenting on how spotless the property is."
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
                Serving Airbnb and VRBO hosts throughout Gaithersburg near Rio Washingtonian Center and across ZIPs 20877, 20878, 20879.
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
            Airbnb Cleaning FAQ — Gaithersburg, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Gaithersburg"
        citySlug="gaithersburg-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
        services={gaithersburgServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Gaithersburg" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Set Up Automatic Airbnb Turnovers in Gaithersburg
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Gaithersburg short-term rentals near Rio Washingtonian Center and across
            ZIPs 20877, 20878, 20879. Free quote in 60 seconds — or call (240) 704-2551.
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

export default GaithersburgAirbnbCleaningPage;
