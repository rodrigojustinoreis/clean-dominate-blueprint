import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { CheckCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import ConversionCTA from "@/components/ConversionCTA";
import TrustBadges from "@/components/TrustBadges";
import StickyMobileCTA from "@/components/StickyMobileCTA";
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
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { ctaProseVariants, pickVariant } from "@/data/template-variants";

const PAGE_URL = "https://capitalcleancare.com/locations/silver-spring-md/airbnb-cleaning";

const localFaqs = [
  {
    q: "How quickly can you turn over my Silver Spring Airbnb?",
    a: "Turnover time depends on the property's size, condition, laundry and restocking scope. We confirm the required checkout-to-check-in window before accepting the job, including same-day requests when the schedule allows.",
  },
  {
    q: "Can you coordinate cleaning with my booking schedule?",
    a: "Yes. Share the checkout and next check-in details and we coordinate the confirmed turnover window with you. Recurring host arrangements can use a consistent handoff process for access, linens, supplies and completion updates.",
  },
  {
    q: "How much does Airbnb turnover cleaning cost in Silver Spring?",
    a: "Pricing depends on property size and scope. Get your exact quote in 60 seconds — free, no contracts required.",
  },
  {
    q: "What if a guest leaves the property extra dirty?",
    a: "If the condition falls outside the agreed turnover scope, we contact the host, explain what changed and confirm any additional work before proceeding. Photo documentation can be included when requested and permitted.",
  },
  {
    q: "Do you clean VRBO and other short-term rental platforms?",
    a: "Absolutely — Airbnb, VRBO, Booking.com, and direct bookings. Any short-term rental in Silver Spring qualifies.",
  },
  {
    q: "Do you know Airbnb standards in Silver Spring?",
    a: "Our turnover checklist focuses on the guest-ready details hosts control: clean bathrooms and kitchen surfaces, fresh linens supplied by the host, floors, visible dust, trash removal and an agreed restocking checklist. Platform rules and property-specific requirements remain the host's responsibility.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Silver Spring and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Between Every Guest",
    items: [
      "Strip and remake beds with fresh linens",
      "Replace towels with fresh set",
      "Sanitize all bathroom surfaces",
      "Clean kitchen — dishes, surfaces, trash",
      "Restock essentials (if provided by host)",
      "Sweep, vacuum, and mop all floors",
      "Wipe mirrors and glass surfaces",
    ],
  },
  {
    heading: "Deep-Reset (Periodic)",
    items: [
      "Inside appliances cleaned",
      "Grout and baseboards scrubbed",
      "Window tracks cleaned",
      "Closet interiors wiped",
    ],
  },
  {
    heading: "Extras Available",
    items: [
      "Laundry service",
      "Restock consumables",
      "Pre-check-in inspection",
      "Photo documentation",
    ],
  },
];

const silverSpringServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const SilverSpringAirbnbCleaningPage = () => {
  const faqs = getServiceLocationOverride("silver-spring-md", "airbnb-cleaning")?.faqs ?? localFaqs;
  const { seoHelmet } = useSEO({
    title: "Airbnb Cleaning Service in Silver Spring, MD | Turnovers",
    description:
      "Airbnb cleaning service in Silver Spring, MD for guest turnovers, linens, restocking and completion updates. Get a written scope and free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/airbnb/real-turnover-sofa-professional-v3-960.webp" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
          { label: "Airbnb Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Silver Spring, MD",
          "Downtown Silver Spring, MD",
          "Four Corners, Silver Spring MD",
          "Fenton Village, Silver Spring MD",
          "Montgomery County, MD",
        ]}
      />
      <ServiceSchema
        serviceName="Airbnb & Short-Term Rental Cleaning in Silver Spring, MD"
        description="Airbnb and short-term rental turnover cleaning in Silver Spring, MD, with a written property checklist, host-supplied linen changes, restocking options and completion updates."
        url={PAGE_URL}
        areaServed={["Silver Spring, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* Breadcrumbs */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
              { label: "Airbnb Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Airbnb & Short-Term Rental Cleaning in Silver Spring, MD"
        lead="Capital Clean Care provides Airbnb cleaning service in Silver Spring for guest turnovers, with a written property checklist, host-supplied linen changes, restocking options and completion updates. We confirm access, scope and the checkout-to-check-in window before each accepted visit."
        cityName="Silver Spring"
        state="MD"
        zipRange="20901–20910"
        heroImage="/images/airbnb/real-turnover-sofa-professional-v3-960.webp"
        heroImageAlt="Capital Clean Care cleaner preparing a sofa during a short-term rental turnover"
        heroImageWidth={960}
        heroImageHeight={640}
        heroImageSrcSet="/images/airbnb/real-turnover-sofa-professional-v3-640.webp 640w, /images/airbnb/real-turnover-sofa-professional-v3-960.webp 960w"
        heroImageSizes="(min-width: 1024px) 54vw, 100vw"
        ctaPrimary="Set Up Airbnb Turnover Cleaning in Silver Spring"
        updatedLabel="Reviewed August 31, 2026"
        updatedDateTime="2026-08-31"
      />

      <section className="py-10 md:py-12 bg-card border-y border-border/60">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            What does an Airbnb turnover cleaner handle in Silver Spring?
          </h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            An Airbnb turnover clean resets the property after checkout and before the next guest:
            bathrooms and kitchen surfaces are cleaned, beds are remade with host-supplied linens,
            floors are vacuumed or mopped, trash is removed, visible dust is addressed and agreed
            essentials are restocked. Capital Clean Care documents the property-specific scope in
            advance, so hosts know what is included and what requires separate approval.
          </p>
        </div>
      </section>

      {/* Checklist */}
      <ServiceChecklistLocation
        title="Our Silver Spring Airbnb Turnover Checklist"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Silver Spring" citySlug="silver-spring-md" serviceSlug="airbnb-cleaning" serviceLabel="Airbnb Cleaning" />

      {/* Why Hosts Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Silver Spring Airbnb Hosts Choose Capital Clean Care
          </h2>
          <div className="grid sm:grid-cols-1 gap-5">
            <div className="p-5 bg-card rounded-xl border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">Rating protection</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A repeatable written checklist reduces missed details between stays. We align the
                scope with your property, access instructions and supplied inventory, then provide
                a clear completion handoff so you can prepare for the next guest.
              </p>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">Flexible scheduling</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We confirm the checkout and check-in window for properties across Silver Spring's
                20901, 20902 and 20910 ZIP codes. Same-day requests depend on availability, property
                condition and the agreed laundry or restocking scope.
              </p>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border/50">
              <h3 className="font-semibold text-foreground mb-2">Locally owned and accountable</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Capital Clean Care is a Latino-owned local cleaning company serving Silver Spring
                and Montgomery County. Hosts receive a written scope and a direct local contact for
                access notes, schedule changes and property-specific priorities.
              </p>
            </div>
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How Airbnb Cleaning Works With Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Send the confirmed checkout, next check-in time and access instructions",
              "Approve the written turnover checklist, linen plan and restocking scope",
              "The team completes the agreed clean and flags unexpected conditions",
              "Receive the agreed completion update before the next guest arrives",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-accent/5 rounded-xl border border-accent/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Some Silver Spring hosts also book our{" "}
              <Link to="/locations/silver-spring-md/deep-cleaning" className="text-primary underline font-medium">
                deep cleaning
              </Link>{" "}
              service periodically for a full appliance and grout reset between seasons. For
              property owners with multiple units, see our{" "}
              <Link to="/locations/silver-spring-md/recurring-cleaning" className="text-primary underline font-medium">
                recurring cleaning
              </Link>{" "}
              plans for consistent, scheduled maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Airbnb Cleaning FAQ — Silver Spring, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Silver Spring"
        citySlug="silver-spring-md"
        serviceLabel="Airbnb Cleaning"
        serviceSlug="airbnb-cleaning"
        services={silverSpringServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Silver Spring" />

      <LocationQuoteSection cityName="Silver Spring" serviceLabel="Airbnb Cleaning" defaultService="airbnb" zipLine="Serving Silver Spring and nearby communities." ctaProse={ctaProseVariants[pickVariant("silver-spring-md", 2, 3)]("Silver Spring", "Airbnb Cleaning")} />

      <StickyMobileCTA />
    </Layout>
  );
};

export default SilverSpringAirbnbCleaningPage;
