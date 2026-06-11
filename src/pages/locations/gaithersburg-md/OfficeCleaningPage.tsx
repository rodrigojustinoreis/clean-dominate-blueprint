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

const PAGE_URL = "https://capitalcleancare.com/locations/gaithersburg-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Gaithersburg?",
    a: "Priced by square footage, frequency, and scope. Contact us for a custom quote tailored to your Gaithersburg office — free, no commitment.",
  },
  {
    q: "Do you clean after business hours in Gaithersburg?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work entirely around your schedule.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Gaithersburg.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock supplies or equipment.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Gaithersburg?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or residue left behind.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many Gaithersburg business clients begin with a deep cleaning baseline, then move to recurring commercial service.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Gaithersburg and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum carpets and mop hard floors",
      "Wipe reception and lobby furniture",
      "Empty and reline trash bins",
      "Disinfect door handles and light switches",
      "Clean glass entry doors",
      "Dust shelves and surfaces",
    ],
  },
  {
    heading: "Workstations & Conference Rooms",
    items: [
      "Dust all workstation surfaces",
      "Sanitize shared equipment (on request)",
      "Wipe conference tables and chairs",
      "Clean whiteboards (if requested)",
      "Vacuum under desks",
    ],
  },
  {
    heading: "Kitchen / Break Room",
    items: [
      "Clean countertops and sink",
      "Wipe all appliance exteriors",
      "Empty trash and replace liner",
      "Mop floor",
    ],
  },
  {
    heading: "Restrooms",
    items: [
      "Disinfect toilets, sinks, and all fixtures",
      "Restock paper products (if provided)",
      "Clean mirrors edge-to-edge",
      "Mop floor and disinfect",
    ],
  },
];

const gaithersburgServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
  { name: "Germantown", slug: "germantown-md", state: "MD" },
];

const GaithersburgOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Gaithersburg, MD",
    description:
      "Professional office cleaning in Gaithersburg, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-cleaning-glass-door.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Gaithersburg, MD", href: "/locations/gaithersburg-md" },
          { label: "Office Cleaning", href: PAGE_URL },
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
            name: "David K.",
            text: "Reliable, consistent, and professional. Capital Clean Care keeps our Kentlands office spotless on every visit.",
            location: "Gaithersburg, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Gaithersburg, MD"
        description="Professional office and commercial cleaning in Gaithersburg, MD. Daily, weekly, or custom schedules — before, during, or after business hours. Background-checked, bonded, insured team. Serving offices in Kentlands, Lakelands, and throughout Gaithersburg."
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
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Gaithersburg, MD"
        lead="Capital Clean Care brings the same reliability Gaithersburg families trust to commercial spaces — from small offices in Kentlands to professional suites near Kentlands Market Square. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Gaithersburg"
        state="MD"
        zipRange="20877–20879"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Gaithersburg, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Gaithersburg"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Gaithersburg Office Cleaning"
        categories={checklistCategories}
      />

      {/* Commercial Spaces */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in Gaithersburg
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Private offices and open-plan workspaces in Kentlands and Lakelands",
              "Medical and dental offices throughout the 20877 and 20878 ZIP codes",
              "Co-working and shared office spaces near Kentlands Market Square",
              "Real estate and professional services offices",
              "Small retail and multi-tenant office suites",
              "Technology and biotech offices in the Gaithersburg business corridor",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Flexible Cleaning Schedules for Gaithersburg Businesses
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Gaithersburg's business landscape is diverse — from technology corridor offices along
              Shady Grove Road to professional suites near Rio Washingtonian Center and healthcare
              facilities throughout the 20878 ZIP code. Different businesses have different cleaning
              requirements, and we build schedules around yours.
            </p>
            <p>
              High-traffic offices near Kentlands Market Square with 15 or more employees often
              require daily service to maintain a professional environment. Mid-sized offices and
              co-working spaces in the 20877 area typically run on a 3x-per-week schedule. Smaller
              offices with lighter traffic often find weekly cleaning sufficient. All schedules are
              available before hours, after hours, or weekends — whatever keeps your operations
              uninterrupted.
            </p>
            <p>
              Every team member entering your Gaithersburg commercial property is background-checked,
              bonded, and insured. We understand that access to a workplace requires a higher level
              of trust and accountability. Capital Clean Care has built commercial cleaning
              relationships with Gaithersburg businesses because we show up on time, every time,
              with consistent results that hold up to close inspection. Call (240) 704-2551 to
              discuss a commercial cleaning plan for your office.
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
              Gaithersburg Businesses Trust Capital Clean Care
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
                "Reliable, consistent, and professional. Capital Clean Care keeps our Kentlands office spotless on every visit. The same background-checked team every time — we trust them completely."
              </p>
              <p className="text-sm font-semibold text-foreground">David K.</p>
              <p className="text-xs text-muted-foreground">Gaithersburg, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Gaithersburg businesses near Kentlands Market Square and throughout the 20877, 20878, and 20879 ZIP codes.
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
            Office Cleaning FAQ — Gaithersburg, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Gaithersburg"
        citySlug="gaithersburg-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={gaithersburgServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Gaithersburg" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Keep Your Gaithersburg Office Spotless
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Gaithersburg businesses near Kentlands Market Square, ZIPs 20877, 20878, 20879,
            including Lakelands and Crown Farm. Free commercial quote in 60 seconds — or call
            (240) 704-2551.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get My Commercial Cleaning Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">(240) 704-2551</a>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Custom schedule · After-hours available · Bonded & Insured
          </p>
        </div>
      </section>

      <StickyMobileCTA />
    </Layout>
  );
};

export default GaithersburgOfficeCleaningPage;
