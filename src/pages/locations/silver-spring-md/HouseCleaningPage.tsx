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
import TransformationsGallery from "@/components/TransformationsGallery";
import { getServiceLocationOverride } from "@/data/service-location-overrides";
import { trustBlurbVariants, ctaProseVariants, pickVariant } from "@/data/template-variants";

const PAGE_URL = "https://capitalcleancare.com/locations/silver-spring-md/house-cleaning";

const localFaqs = [
  {
    q: "Do you bring your own cleaning supplies to Silver Spring homes?",
    a: "Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything — just let us in.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any Silver Spring home. Your safety and peace of mind are non-negotiable.",
  },
  {
    q: "How much does house cleaning cost in Silver Spring, MD?",
    a: "Pricing depends on home size and frequency. Get your exact quote in 60 seconds — free, no commitment required. Same-day slots often available in the 20901 area.",
  },
  {
    q: "Do you offer recurring cleaning in Silver Spring?",
    a: "Yes — weekly, bi-weekly, and monthly plans available with a discounted recurring rate. Recurring clients get the same trusted team every visit.",
  },
  {
    q: "What areas of Silver Spring do you serve?",
    a: "We serve all Silver Spring ZIP codes: 20901, 20902, 20903, 20906, and 20910 — including Downtown Silver Spring, Four Corners, Fenton Village, Long Branch, and Woodside.",
  },
  {
    q: "What's your cancellation policy?",
    a: "We ask for 24-hour notice. No fees for first-time cancellations. We're flexible because life happens.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Silver Spring and the greater Montgomery County area. We live and work in this community.",
  },
  {
    q: "How long does a house cleaning take in Silver Spring?",
    a: "Most standard cleans of a Silver Spring home take two to four hours depending on size and condition. First-time and deep cleans take longer. We send a team so the work is done efficiently without rushing the details.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "No. Many Silver Spring clients give us entry instructions and come home to a spotless house. Whether you stay or step out is entirely up to you — every cleaner is background-checked, bonded, and insured.",
  },
  {
    q: "Can I book same-day or next-day house cleaning in Silver Spring?",
    a: "Often, yes — we frequently have same-day and next-day slots open across the 20901–20910 ZIP codes. Call (240) 704-2551 and we'll find the soonest time that works for you.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and backsplash wiped down",
      "Appliance exteriors cleaned",
      "Sink scrubbed and sanitized",
      "Microwave interior and exterior",
      "Cabinet fronts wiped",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet disinfected inside and out",
      "Tub and shower scrubbed",
      "Sink and faucet cleaned",
      "Mirrors polished streak-free",
      "Floor mopped",
      "Trash emptied",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "Surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens provided by client)",
      "Nightstands and dressers wiped",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed and mopped",
      "Window sills wiped",
      "Baseboards dusted",
      "Light switches and door handles sanitized",
      "Spot-clean visible wall marks",
    ],
  },
];

const silverSpringServices = [
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Wheaton", slug: "wheaton-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const SilverSpringHouseCleaningPage = () => {
  const faqs = getServiceLocationOverride("silver-spring-md", "house-cleaning")?.faqs ?? localFaqs;

  const { seoHelmet } = useSEO({
    title: "House Cleaning in Silver Spring, MD | Free Quote",
    description:
      "House cleaning in Silver Spring MD — eco-friendly products safe for kids & pets, background-checked, bonded & insured. Latino-owned. Free quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-mopping-bright-room.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Silver Spring, MD", href: "/locations/silver-spring-md" },
          { label: "House Cleaning", href: PAGE_URL },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Silver Spring, MD",
          "Downtown Silver Spring, MD",
          "Four Corners, Silver Spring MD",
          "Fenton Village, Silver Spring MD",
          "Long Branch, Silver Spring MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "Sarah M.",
            text: "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="House Cleaning in Silver Spring, MD"
        description="Professional, eco-friendly house cleaning in Silver Spring, MD. Background-checked, bonded team uses EPA Safer Choice™ certified products safe for kids and pets. 100% satisfaction guaranteed."
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
              { label: "House Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Professional House Cleaning in Silver Spring, MD"
        lead="Capital Clean Care brings professional, eco-friendly house cleaning to Silver Spring homes — from Downtown Silver Spring to Four Corners to Fenton Village. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy."
        cityName="Silver Spring"
        state="MD"
        zipRange="20901–20910"
        heroImage="/images/team/team-mopping-bright-room.jpg"
        heroImageAlt="Capital Clean Care team providing house cleaning service in Silver Spring, MD — Latino-owned, background-checked professionals"
        ctaPrimary="Get a Free Quote in Silver Spring"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Silver Spring House Cleaning"
        categories={checklistCategories}
      />

      {/* ── Social Proof (3rd — trust video early) ── */}
      <LocationSocialProof cityName="Silver Spring" citySlug="silver-spring-md" serviceSlug="house-cleaning" serviceLabel="House Cleaning" />

      {/* ── Before & After video carousel — real footage from our team (breaks up the text) ── */}
      <TransformationsGallery
        heading="Before & After: Real Results from Our Silver Spring Team"
        subtext="These aren't stock clips — every video is unedited footage from our own team across the DMV, using the same eco-friendly, family-safe products we bring to every Silver Spring home. Real homes, real results."
      />

      {/* Why Capital Clean Care */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Silver Spring Homeowners Choose Capital Clean Care
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              {trustBlurbVariants[pickVariant("silver-spring-md", 3)]("Silver Spring", "Montgomery County")}
            </p>
            <p>
              Every product we use is EPA Safer Choice™ certified. That means no bleach, no
              ammonia, no synthetic fragrances that linger in your air. Whether you have young
              children playing on the floor or pets that spend their days inside, our cleaning
              is safe from the first visit. And every team member who enters your Silver Spring
              home is fully background-screened, bonded, and insured — because trust matters
              more than any cleaning checklist.
            </p>
          </div>

          {/* How It Works */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            How It Works
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Book online or call (240) 704-2551 — free quote in 60 seconds, same-day slots often available in 20901",
              "We arrive on time — bonded, insured, background-checked cleaners bring all supplies",
              "Room-by-room clean your Silver Spring home the same way every visit — no corners cut",
              "100% satisfaction guarantee — if anything isn't right, we return free, no fine print",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-5 bg-accent/5 rounded-xl border border-accent/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Want a consistent routine instead of a one-time clean?{" "}
              <Link to="/locations/silver-spring-md/recurring-cleaning" className="text-primary underline font-medium">
                See our recurring cleaning plans
              </Link>{" "}
              for Silver Spring — weekly, bi-weekly, and monthly with the same trusted team every visit.
              If your home needs a deeper reset first, our{" "}
              <Link to="/locations/silver-spring-md/deep-cleaning" className="text-primary underline font-medium">
                deep cleaning service
              </Link>{" "}
              covers inside appliances, grout lines, ceiling fans, and everywhere a standard clean skips.
            </p>
          </div>
        </div>
      </section>

      {/* Serving Silver Spring */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Serving All Silver Spring Neighborhoods
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Silver Spring's residential landscape is as diverse as its population. From the
              newer condos and apartments near the AFI Silver Theatre and Silver Spring Town Center
              to single-family homes in the Four Corners and Woodside neighborhoods, we clean them
              all. The Long Branch corridor, Fenton Village, and the Sligo Creek area each have
              their own character, and we've worked in homes throughout these communities.
            </p>
            <p>
              Beyond the downtown core, we regularly clean homes across the wider Silver Spring MD
              area — the mid-century ramblers of Forest Glen and Woodmoor, the established streets of
              Northwood and Four Corners, and the larger properties out toward White Oak, Colesville,
              and Cloverly. We also serve the Kemp Mill, Glenmont, and Aspen Hill communities along
              the Georgia Avenue and Veirs Mill corridors, plus the historic homes near the Takoma
              Park border. Each pocket of Silver Spring has its own housing stock — from 1950s brick
              colonials to new-build condos near the Metro — and our team adjusts its approach to each.
            </p>
            <p>
              We serve all Silver Spring ZIP codes: 20901, 20902, 20903, 20906, and 20910.
              Whether you're in a studio apartment near downtown or a four-bedroom home closer
              to the Wheaton Plaza area, the same quality applies. Our team arrives with
              everything needed and leaves your home genuinely clean — not just visually tidy.
            </p>
            <p>
              Many Silver Spring homeowners also book our{" "}
              <Link to="/locations/silver-spring-md/move-out-cleaning" className="text-primary underline font-medium">
                move out cleaning
              </Link>{" "}
              when transitioning between properties, or our{" "}
              <Link to="/locations/silver-spring-md/airbnb-cleaning" className="text-primary underline font-medium">
                Airbnb cleaning
              </Link>{" "}
              for short-term rental properties near the transit hub. For offices and commercial
              spaces, see our{" "}
              <Link to="/locations/silver-spring-md/office-cleaning" className="text-primary underline font-medium">
                office cleaning in Silver Spring
              </Link>.
              Call (240) 704-2551 to discuss any cleaning need in Silver Spring.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            How Much Does House Cleaning Cost in Silver Spring, MD?
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              House cleaning prices in Silver Spring, MD depend mainly on your home's size, the
              number of bathrooms, and how often you book. As a general guide, a recurring clean for
              a typical two- to three-bedroom Silver Spring home starts in the lower range, while
              larger homes — or first-time and one-time cleans — cost more simply because they take
              longer and tackle more built-up grime. Recurring weekly, bi-weekly, and monthly plans
              carry a discounted rate compared with a single one-time visit.
            </p>
            <p>
              Every quote is flat and transparent — no hourly surprises and no hidden fees. Tell us
              your home size and how often you'd like service, and you'll get an exact price in about
              60 seconds, online or by phone, with no obligation. Many Silver Spring homeowners start
              with a one-time deep reset, then switch to a recurring plan to keep their home
              effortlessly clean year-round.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            House Cleaning FAQ — Silver Spring, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Silver Spring"
        citySlug="silver-spring-md"
        serviceLabel="House Cleaning"
        serviceSlug="house-cleaning"
        services={silverSpringServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Silver Spring" />

      <LocationQuoteSection cityName="Silver Spring" serviceLabel="House Cleaning" defaultService="standard" zipLine="Serving Silver Spring and nearby communities." ctaProse={ctaProseVariants[pickVariant("silver-spring-md", 2, 3)]("Silver Spring", "House Cleaning")} />

      <StickyMobileCTA />
    </Layout>
  );
};

export default SilverSpringHouseCleaningPage;
