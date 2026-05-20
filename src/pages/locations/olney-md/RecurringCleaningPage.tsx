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

const PAGE_URL = "https://capitalcleancare.com/locations/olney-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Olney?",
    a: "Weekly is ideal for larger homes, families with kids or pets. Bi-weekly is our most popular option for Olney households — a clean, well-maintained home without maximum cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Olney home. No strangers each week — your team learns your layout and preferences.",
  },
  {
    q: "How much does recurring cleaning cost in Olney?",
    a: "Recurring clients receive discounted rates compared to one-time cleanings. Get your exact quote in 60 seconds — free, no commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify your schedule. No lock-in contracts. Flexibility is part of the deal.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Olney ZIPs: 20832.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to recurring service.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Olney and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops wiped and sanitized",
      "Sink scrubbed and polished",
      "Appliance exteriors cleaned",
      "Microwave interior cleaned",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet scrubbed inside and out",
      "Shower/tub cleaned",
      "Sink and mirrors polished",
      "Floor mopped",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens if provided)",
    ],
  },
  {
    heading: "Living Areas & All Rooms",
    items: [
      "Dusting all surfaces",
      "Vacuuming and mopping floors",
      "Window sills cleaned",
      "Baseboards and light switches wiped",
      "Door handles sanitized",
    ],
  },
  {
    heading: "Add-On Rotation (every nth visit)",
    items: [
      "Inside refrigerator",
      "Inside oven",
      "Inside kitchen cabinets",
      "Laundry (on request)",
    ],
  },
];

const olneyServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
];

const nearbyCities = [
  { name: "Silver Spring", slug: "silver-spring-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
];

const OlneyRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Olney, MD — Weekly & Bi-Weekly Service",
    description:
      "Weekly and bi-weekly house cleaning in Olney, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
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
          { label: "Olney, MD", href: "/locations/olney-md" },
          { label: "Recurring Cleaning", href: PAGE_URL },
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
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Olney, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Olney, MD"
        description="Weekly and bi-weekly recurring house cleaning in Olney, MD. Same background-checked team every visit. EPA Safer Choice certified eco-friendly products. Serving Olney Mill, Williamsburg Village, Norbeck, and the full 20832 ZIP code."
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
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* Hero */}
      <HeroLocation
        h1="Recurring House Cleaning in Olney, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Olney home — from Olney Mill to Williamsburg Village to Norbeck — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed: we re-clean if you're not happy."
        cityName="Olney"
        state="MD"
        zipRange="20832"
        heroImage="/images/team/team-mopping-uniform.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Olney, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Olney"
      />

      {/* Checklist */}
      <ServiceChecklistLocation
        title="What's Included in Every Olney Recurring Clean"
        categories={checklistCategories}
      />

      {/* Schedule Options */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-primary/5">
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50"></th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Weekly</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Bi-Weekly</th>
                  <th className="text-left p-3 font-semibold text-foreground border border-border/50">Monthly</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 font-medium text-foreground border border-border/50">Best for</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Busy families, large homes, pets</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Most Olney households</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Lighter maintenance</td>
                </tr>
                <tr className="bg-muted/20">
                  <td className="p-3 font-medium text-foreground border border-border/50">Discount</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Largest recurring discount</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Standard recurring discount</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Minimal discount</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium text-foreground border border-border/50">Result</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Always guest-ready</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Clean between uses</td>
                  <td className="p-3 text-muted-foreground border border-border/50">Seasonal freshness</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Recurring is Better */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              "Cumulative cleanliness — regular maintenance prevents buildup. Your Olney home actually gets cleaner over time.",
              "Same team every time — the same background-checked crew learns your preferences, layout, and standards. No retraining.",
              "Affordable recurring rates — Olney recurring clients receive better rates than one-time bookings.",
              "Priority scheduling — first access to preferred time slots and faster rescheduling throughout 20832.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6">
            Getting Started With Recurring Cleaning in Olney
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              New recurring clients start with a deeper initial{" "}
              <Link to="/locations/olney-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              to establish a clean baseline. This first visit takes longer and covers areas that
              have accumulated buildup — inside appliances, grout lines, baseboards — so that
              subsequent recurring visits maintain a truly clean home rather than fighting
              existing dirt.
            </p>
            <p>
              After the baseline, your assigned team arrives on your schedule — weekly or
              bi-weekly — with the same faces every time. Whether your home is near Olney
              Theatre Center or in the Sparkling Spring area along the Georgia Avenue corridor,
              we work around your family's routine. Prefer 8 AM on Tuesdays? Done. Need to
              reschedule one week? 24-hour notice and no questions asked.
            </p>
            <p>
              Many Olney families also pair their recurring schedule with an occasional{" "}
              <Link to="/locations/olney-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              for larger gatherings or seasonal refreshes. Call (240) 704-2551 to discuss
              what combination works best for your household in 20832.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              What Olney Families Say About Recurring Cleaning
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
                "Best investment we've made. Coming home to a clean house every week is amazing. The same team every time — they know exactly what we like."
              </p>
              <p className="text-sm font-semibold text-foreground">James T.</p>
              <p className="text-xs text-muted-foreground">Olney, MD</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Olney recurring clients across Olney Mill, Williamsburg Village, and Norbeck. Share your experience.
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
            Recurring Cleaning FAQ — Olney, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      <InternalLinksGrid
        cityName="Olney"
        citySlug="olney-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={olneyServices}
        nearbyCities={nearbyCities}
      />

      <TrustBadges compact />
      <ConversionCTA cityName="Olney" />

      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Olney Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Olney Town Center or anywhere across Olney's 20832 ZIP code,
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

export default OlneyRecurringCleaningPage;
