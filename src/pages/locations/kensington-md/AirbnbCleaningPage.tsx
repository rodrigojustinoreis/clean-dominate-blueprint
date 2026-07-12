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
import LocationSocialProof from "@/components/location/LocationSocialProof";
import LocationQuoteSection from "@/components/location/LocationQuoteSection";

const PAGE_URL = "https://capitalcleancare.com/locations/kensington-md/airbnb-cleaning";

const faqs = [
  {
    q: "How quickly can you turn over my Kensington Airbnb?",
    a: "Most 1–2 bedroom Kensington properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice, including near Historic Kensington and ZIP 20895.",
  },
  {
    q: "Can you manage my cleaning schedule automatically?",
    a: "Yes — share your Airbnb calendar and we schedule around each checkout automatically. No manual coordination needed between each guest.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Kensington?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — free, no contracts required.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "We document with photos and charge only for the additional time required. Transparency is built into our process.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, direct bookings. If it's a short-term rental in Kensington, we can handle the turnover.",
  },
  {
    q: "Do you know Airbnb standards in Kensington?",
    a: "Yes. We work with multiple hosts across Kensington (20895) and Montgomery County and understand what guests expect in this market.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Kensington and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Between Every Guest",
    items: [
      "Strip and remake beds with fresh linens",
      "Replace towels",
      "Sanitize all bathroom surfaces",
      "Clean kitchen (surfaces, dishes, trash)",
      "Restock essentials (if provided)",
      "Sweep, vacuum, and mop throughout",
      "Wipe mirrors and screens",
    ],
  },
  {
    heading: "Deep-Reset (Periodic)",
    items: [
      "Clean inside appliances",
      "Scrub grout and tile",
      "Clean baseboards and window tracks",
      "Clean closet interiors",
    ],
  },
  {
    heading: "Extras Available",
    items: [
      "Laundry service",
      "Restock consumables",
      "Pre-check-in inspection",
    ],
  },
];

const kensingtonServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

const KensingtonAirbnbCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning in Kensington, MD",
    description:
      "Airbnb & short-term rental cleaning in Kensington, MD. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote.",
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
          { label: "Kensington, MD", href: "/locations/kensington-md" },
          { label: "Airbnb Cleaning", href: PAGE_URL },
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
            name: "Amanda F.",
            text: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Airbnb & Short-Term Rental Cleaning in Kensington, MD"
        description="Professional Airbnb turnover cleaning in Kensington, MD. Hotel-standard results, flexible scheduling around your guest calendar. Fast same-day turnovers. 100% satisfaction guaranteed."
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
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Kensington, MD"
        lead="Protect your Kensington Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from Kensington Historic District to Kensington Antique Row. Flexible scheduling, 100% satisfaction guaranteed."
        cityName="Kensington"
        state="MD"
        zipRange="20895"
        heroImage="/images/team/team-kitchen-detail.jpg"
        heroImageAlt="Capital Clean Care Airbnb turnover cleaning in Kensington, MD — hotel-standard results"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Kensington"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Our Kensington Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Kensington" citySlug="kensington-md" serviceSlug="airbnb-cleaning" serviceLabel="Airbnb Cleaning" />

      {/* Why Hosts Choose */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Kensington Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              {
                title: "Rating protection",
                body: "Consistent, bonded team means guests find your property exactly as listed, every time. We re-clean free if anything falls short.",
              },
              {
                title: "Flexible scheduling",
                body: "We work around your checkout and check-in window across Kensington's 20895 ZIP code. Same-day turnovers available.",
              },
              {
                title: "Locally owned and accountable",
                body: "We're not a franchise. We're Latino-owned and operate in Kensington. Your Airbnb reputation matters to us personally.",
              },
            ].map((item) => (
              <div key={item.title} className="p-5 bg-card rounded-xl border border-border/50">
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            How Airbnb Cleaning Works With Us
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Share your calendar",
                body: "We coordinate around your booking schedule. Share your Airbnb or vacation rental calendar and we handle the rest.",
              },
              {
                step: "2",
                title: "We arrive at checkout time",
                body: "Fast turnover anywhere in Kensington from Rock Creek Hills to Rock Creek Knolls. We respect your check-in window.",
              },
              {
                step: "3",
                title: "Hotel-standard clean",
                body: "Fresh linens, sanitization, restock, full room-by-room inspection. Your property looks exactly as listed.",
              },
              {
                step: "4",
                title: "Ready for next guest",
                body: "You get confirmation once we're done. Guest checks in to a 5-star clean. Simple.",
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

      {/* Context */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Kensington Short-Term Rental Market
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kensington draws visitors exploring the Historic District, Kensington Antique Row,
              and the Rock Creek Trail system. Short-term rental hosts in the area attract guests
              who compare your property's cleanliness directly against hotel standards. One negative
              review about cleanliness can set back weeks of otherwise excellent ratings.
            </p>
            <p>
              Capital Clean Care's vacation rental cleaning service is built around the host's
              experience — not just the guest's. We coordinate with your calendar, arrive on
              checkout day, and complete the turnover so your property is ready well before
              check-in. Our background-checked, bonded team handles every property with the
              discretion and consistency that remote hosts rely on.
            </p>
            <p>
              Want to add periodic{" "}
              <Link to="/locations/kensington-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              between seasons, or set up{" "}
              <Link to="/locations/kensington-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning
              </Link>{" "}
              for your own residence alongside your rental? We handle both. Call (240) 704-2551
              to discuss your Kensington rental setup.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Airbnb Cleaning FAQ — Kensington, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Kensington"
        citySlug="kensington-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
        services={kensingtonServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Kensington" />

      <LocationQuoteSection cityName="Kensington" serviceLabel="Airbnb Cleaning" defaultService="airbnb" zipLine="Serving Kensington and nearby communities." />

      <StickyMobileCTA />
    </Layout>
  );
};

export default KensingtonAirbnbCleaningPage;
