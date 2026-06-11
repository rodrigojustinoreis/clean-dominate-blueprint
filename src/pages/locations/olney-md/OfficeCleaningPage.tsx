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

const PAGE_URL = "https://capitalcleancare.com/locations/olney-md/office-cleaning";

const faqs = [
  {
    q: "How much does office cleaning cost in Olney?",
    a: "Priced by square footage, frequency, and scope. Contact us for a custom quote tailored to your Olney office. Free, no commitment.",
  },
  {
    q: "Do you clean after business hours in Olney?",
    a: "Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your schedule throughout Olney's 20832 ZIP code.",
  },
  {
    q: "Are your cleaners background-checked?",
    a: "Every team member is fully background-screened, bonded, and insured before entering any commercial property in Olney.",
  },
  {
    q: "Do you provide your own supplies and equipment?",
    a: "Yes. We bring everything — no need for you to stock supplies or equipment at your Olney office.",
  },
  {
    q: "Do you offer eco-friendly commercial cleaning in Olney?",
    a: "Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or residue in your workspace.",
  },
  {
    q: "Can you start with a one-time deep clean before regular service?",
    a: "Absolutely. Many Olney businesses begin with a deep cleaning baseline, then move to recurring service on a weekly or daily schedule.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Olney and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Common Areas & Reception",
    items: [
      "Vacuum all carpets",
      "Mop hard floors",
      "Wipe reception furniture and surfaces",
      "Empty and reline all trash bins",
      "Disinfect door handles and light switches",
      "Clean glass doors and partitions",
    ],
  },
  {
    heading: "Workstations & Conference Rooms",
    items: [
      "Dust all surfaces and equipment",
      "Sanitize shared equipment (on request)",
      "Wipe conference tables and chairs",
      "Clean whiteboards (if requested)",
    ],
  },
  {
    heading: "Kitchen / Break Room",
    items: [
      "Clean countertops and sink",
      "Wipe appliances exterior",
      "Empty trash and replace liner",
      "Mop floor",
    ],
  },
  {
    heading: "Restrooms",
    items: [
      "Disinfect toilets, sinks, and fixtures",
      "Restock paper products (if provided)",
      "Clean mirrors",
      "Mop floor",
    ],
  },
];

const olneyServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Recurring Cleaning", slug: "recurring-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const OlneyOfficeCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Office Cleaning in Olney, MD",
    description:
      "Professional office cleaning in Olney, MD. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote.",
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
          { label: "Olney, MD", href: "/locations/olney-md" },
          { label: "Office Cleaning", href: PAGE_URL },
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
            name: "Michael P.",
            text: "Reliable, professional, and consistent every week. They keep our Olney office spotless without any oversight needed.",
            location: "Olney, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Office & Commercial Cleaning in Olney, MD"
        description="Professional office and commercial cleaning in Olney, MD. Background-checked, bonded team. Flexible scheduling — daily, weekly, or custom. EPA Safer Choice certified products. Serving Olney Mill, Williamsburg Village, and all of 20832."
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
              { label: "Office Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Office & Commercial Cleaning in Olney, MD"
        lead="Capital Clean Care brings the same reliability Olney families trust to commercial spaces — from small offices in Olney Mill to professional suites near Olney Theatre Center. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours."
        cityName="Olney"
        state="MD"
        zipRange="20832"
        heroImage="/images/team/team-cleaning-glass-door.jpg"
        heroImageAlt="Capital Clean Care office cleaning service in Olney, MD — reliable commercial cleaning"
        ctaPrimary="Get a Commercial Cleaning Quote in Olney"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Our Olney Office Cleaning"
        categories={checklistCategories}
      />

      {/* Commercial Spaces */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Spaces We Clean in Olney
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {[
              "Private offices and open-plan workspaces in Olney Mill",
              "Medical and dental offices near the Georgia Avenue corridor",
              "Co-working and shared office spaces in 20832",
              "Real estate and professional services offices",
              "Small retail and multi-tenant office suites",
              "Professional suites near Williamsburg Village",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Flexible Cleaning Schedules for Olney Businesses
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Schedule</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Best For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-medium text-foreground border border-border/50">Daily</td>
                  <td className="p-3 text-muted-foreground border border-border/50">High-traffic offices with 15+ employees near Olney Town Center</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 font-medium text-foreground border border-border/50">3× per week</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Mid-sized offices and co-working spaces in 20832</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground border border-border/50">Weekly</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Smaller Olney offices with lighter foot traffic</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            All schedules available before hours, after hours, or weekends — whatever works for your Olney business.
          </p>
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
              Olney Businesses Trust Capital Clean Care
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
                "Reliable, professional, and consistent every week. They keep our office spotless without any oversight needed. The team is background-checked and we trust them completely with our space."
              </p>
              <p className="text-sm font-semibold text-foreground">Michael P.</p>
              <p className="text-xs text-muted-foreground">Olney, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Olney businesses near Olney Village Center, Williamsburg Village, and throughout 20832. Share your experience.
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

      {/* Why Choose Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Commercial Cleaning That Olney Businesses Can Depend On
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Business owners and office managers in Olney need a commercial cleaning provider
              that shows up on schedule, every time, without follow-up. Capital Clean Care's
              background-checked team is trained for commercial environments — discrete, efficient,
              and consistent. We serve offices along the Georgia Avenue corridor, medical suites
              near Olney Mill, and professional service firms throughout Williamsburg Village.
            </p>
            <p>
              Every commercial client in Olney gets the same bonded and insured team for each
              visit. No rotating strangers with access to your workspace — the same faces, familiar
              with your layout, your priorities, and your standards. EPA Safer Choice™ certified
              products mean no harsh chemical fumes in occupied spaces or after-hours cleaning
              residue on work surfaces.
            </p>
            <p>
              New commercial clients can begin with a one-time{" "}
              <Link to="/locations/olney-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              baseline before transitioning to a regular maintenance schedule. This approach
              establishes a clean foundation that makes weekly or bi-weekly maintenance faster
              and more thorough. Call (240) 704-2551 to discuss a custom schedule for your
              Olney office.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Office Cleaning FAQ — Olney, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Olney"
        citySlug="olney-md"
        serviceLabel="Office Cleaning"
        serviceSlug="office-cleaning"
        services={olneyServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Olney" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Keep Your Olney Office Spotless
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Serving Olney businesses near Olney Theatre Center, ZIPs 20832, including Williamsburg
            Village and Norbeck. Free quote in 60 seconds — or call (240) 704-2551.
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

export default OlneyOfficeCleaningPage;
