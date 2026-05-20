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

const PAGE_URL = "https://capitalcleancare.com/locations/germantown-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Germantown Airbnb?",
    a: "Most 1–2 bedroom Germantown properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice across ZIPs 20874 and 20876.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb calendar and we schedule around each checkout automatically. No need to contact us for every booking.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Germantown?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — free, no contracts required.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We document with photos and charge only for the additional time required. No surprise flat fees.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, direct bookings. Any short-term rental in Germantown qualifies.",
  },
  {
    q: "Do you know Airbnb standards in Germantown?",
    a: "Yes. We work with multiple hosts across Germantown (20874–20876) and Montgomery County. We know what guests expect and what earns 5-star reviews.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Germantown and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Between Every Guest",
    items: [
      "Strip and remake beds with fresh linens",
      "Replace towels",
      "Sanitize all bathroom surfaces",
      "Clean kitchen (dishes, surfaces, trash)",
      "Restock essentials (if provided)",
      "Sweep, vacuum, and mop",
      "Wipe mirrors and glass surfaces",
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
    heading: "Optional Extras",
    items: [
      "Laundry service",
      "Restock consumables",
      "Pre-check-in inspection report",
      "Photo documentation",
    ],
  },
];

const germantownServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Gaithersburg", slug: "gaithersburg-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

const GermantownAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Germantown, MD — Fast Turnovers, 5-Star Results",
    description:
      "Airbnb & short-term rental cleaning in Germantown, MD. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote.",
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
          { label: "Germantown, MD", href: "/locations/germantown-md" },
          { label: "Airbnb Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Germantown, MD",
          "Milestone, Germantown MD",
          "Churchill Village, Germantown MD",
          "Kingsview Village, Germantown MD",
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
        serviceName="Airbnb & Short-Term Rental Cleaning in Germantown, MD"
        description="Professional Airbnb and vacation rental turnover cleaning in Germantown, MD. Hotel-standard results, flexible scheduling, same-day turnovers. Serving all short-term rental platforms."
        url={PAGE_URL}
        areaServed={["Germantown, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Germantown, MD", href: "/locations/germantown-md" },
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Germantown, MD"
        lead="Protect your Germantown Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from Milestone to Churchill Village. Flexible scheduling, 100% satisfaction guaranteed."
        cityName="Germantown"
        state="MD"
        zipRange="20874–20876"
        heroImage="/images/team/team-kitchen-detail.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning in Germantown, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Germantown"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Our Germantown Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* Why Hosts Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Germantown Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: "Rating Protection",
                body: "Consistent, bonded team means guests find your property exactly as listed, every time. We re-clean if anything falls short — your 5-star rating stays protected.",
              },
              {
                title: "Flexible Scheduling",
                body: "We work around your checkout and check-in windows across Germantown's 20874 and 20876 ZIP codes. Same-day turnovers available with advance notice.",
              },
              {
                title: "Locally Owned & Accountable",
                body: "We're not a franchise. We're Latino-owned and operate in Germantown. Your Airbnb reputation matters to us personally — we treat your property like it's our own.",
              },
            ].map((card) => (
              <div key={card.title} className="p-5 bg-card border border-border/50 rounded-xl">
                <CheckCircle className="h-5 w-5 text-primary mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Airbnb Cleaning Works With Us
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">1. Share your calendar</strong> — We coordinate
              around your booking schedule. No need to contact us for each guest checkout.
            </p>
            <p>
              <strong className="text-foreground">2. We arrive at checkout time</strong> — Fast
              turnover anywhere in Germantown, from Churchill Village to Kingsview Village. On time,
              every time.
            </p>
            <p>
              <strong className="text-foreground">3. Hotel-standard clean</strong> — Linens,
              sanitization, restock, full inspection before the next guest arrives.
            </p>
            <p>
              <strong className="text-foreground">4. Ready for next guest</strong> — You get
              confirmation. Your guest checks in near Seneca Creek State Park to a 5-star clean.
            </p>
          </div>

          <div className="mt-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
            <p className="text-sm text-foreground italic leading-relaxed">
              "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care.
              Detail is incredible."
            </p>
            <p className="text-sm font-semibold text-foreground mt-2">Amanda F.</p>
            <p className="text-xs text-muted-foreground">Bethesda, MD</p>
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
              Germantown Hosts Trust Capital Clean Care
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
                "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care.
                Detail is incredible. Same team every turnover — I never have to worry."
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
                Serving vacation rental hosts near Milestone and across Germantown's 20874–20876. Share
                your hosting experience.
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
            Airbnb Cleaning FAQ — Germantown, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Germantown"
        citySlug="germantown-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
        services={germantownServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Germantown" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Set Up Automatic Airbnb Turnovers in Germantown
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving all Germantown short-term rentals near Seneca Creek State Park and across
            ZIPs 20874, 20875, and 20876. Free quote in 60 seconds — or call (240) 704-2551.
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

export default GermantownAirbnbCleaningPage;
