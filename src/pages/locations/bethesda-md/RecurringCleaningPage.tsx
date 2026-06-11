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

// ── Page constants ────────────────────────────────────────────────────────────

const PAGE_URL = "https://capitalcleancare.com/locations/bethesda-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Bethesda?",
    a: "Weekly is ideal for larger homes, families with kids or pets, or homes that see high daily use. Bi-weekly is our most popular option — a consistently clean, well-maintained home without maximum cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Bethesda home. No strangers showing up each week — the same trusted crew that knows your preferences.",
  },
  {
    q: "How much does recurring cleaning cost in Bethesda?",
    a: "Recurring clients receive discounted rates compared to one-time bookings. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No long-term contracts, no lock-in. Easy to adjust around holidays and travel.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Bethesda ZIPs: 20814, 20815, 20816, 20817.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to a recurring plan. Call (240) 704-2551 to discuss your options.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Bethesda and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and backsplash wiped",
      "Sink scrubbed and polished",
      "Appliance exteriors cleaned",
      "Microwave interior cleaned",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet sanitized",
      "Shower and tub scrubbed",
      "Sink and faucets polished",
      "Mirrors cleaned streak-free",
      "Floor mopped and sanitized",
    ],
  },
  {
    heading: "Bedrooms",
    items: [
      "All surfaces dusted",
      "Floors vacuumed",
      "Beds made (linens changed if provided)",
      "Window sills wiped",
    ],
  },
  {
    heading: "Living Areas",
    items: [
      "All surfaces dusted",
      "Floors vacuumed and mopped",
      "Baseboards and window sills wiped",
    ],
  },
  {
    heading: "Rotation Add-Ons (Every Nth Visit)",
    items: [
      "Inside refrigerator",
      "Inside oven",
      "Inside cabinets",
      "Laundry (on request)",
    ],
  },
];

const bethesdaServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "Chevy Chase", slug: "chevy-chase-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const BethesdaRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Bethesda, MD",
    description:
      "Weekly and bi-weekly house cleaning in Bethesda, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
    canonical: PAGE_URL,
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {/* ── SEO ───────────────────────────────────────────── */}
      {seoHelmet}
      <Helmet>
        <link rel="preload" as="image" href="/images/team/team-two-living-room.jpg" />
        <link rel="alternate" hrefLang="en-US" href={PAGE_URL} />
      </Helmet>

      {/* ── Schema ────────────────────────────────────────── */}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Bethesda, MD", href: "/locations/bethesda-md" },
          { label: "Recurring Cleaning", href: "/locations/bethesda-md/recurring-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Bethesda, MD",
          "Bethesda Row, Bethesda MD",
          "Kenwood, Bethesda MD",
          "Bradley Hills, Bethesda MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Bethesda, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Bethesda, MD"
        description="Weekly and bi-weekly house cleaning in Bethesda, MD. Same trusted, background-checked team every visit. EPA Safer Choice certified products. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Bethesda, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Bethesda, MD", href: "/locations/bethesda-md" },
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Recurring House Cleaning in Bethesda, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Bethesda home — from Bethesda Row to Kenwood to Bradley Hills — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed: we re-clean if you're not happy."
        cityName="Bethesda"
        state="MD"
        zipRange="20814–20817"
        heroImage="/images/team/team-two-living-room.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Bethesda, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Bethesda"
      />

      {/* ── Cross-link Banner ──────────────────────────────── */}
      <div className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 max-w-6xl py-3 text-center text-sm">
          <span className="text-muted-foreground">Need a thorough reset before starting your routine?</span>{" "}
          <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary font-semibold underline">
            See Deep Cleaning in Bethesda →
          </Link>
        </div>
      </div>

      {/* ── Checklist ─────────────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Bethesda Recurring Clean"
        categories={checklistCategories}
      />

      {/* ── Schedule Comparison ───────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left p-4 font-semibold text-foreground">Plan</th>
                  <th className="text-left p-4 font-semibold text-foreground">Best For</th>
                  <th className="text-left p-4 font-semibold text-foreground">Discount</th>
                  <th className="text-left p-4 font-semibold text-foreground">Result</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  [
                    "Weekly",
                    "Busy Bethesda families, large homes, pets",
                    "Largest recurring discount",
                    "Always guest-ready",
                  ],
                  [
                    "Bi-Weekly",
                    "Most Bethesda households",
                    "Standard recurring discount",
                    "Clean between everyday use",
                  ],
                  [
                    "Monthly",
                    "Light maintenance, vacation homes",
                    "Minimal discount",
                    "Seasonal freshness",
                  ],
                ].map(([plan, best, disc, result]) => (
                  <tr key={plan} className="bg-background hover:bg-muted/20 transition-colors">
                    <td className="p-4 font-medium text-foreground">{plan}</td>
                    <td className="p-4 text-muted-foreground">{best}</td>
                    <td className="p-4 text-muted-foreground">{disc}</td>
                    <td className="p-4 text-muted-foreground">{result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why Recurring Is Better ───────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cumulative Cleanliness",
                body: "Regular maintenance prevents buildup. Your Bethesda home actually gets cleaner over time — dust, grime, and bacterial load decrease with each visit.",
              },
              {
                title: "Same Team Every Time",
                body: "The same background-checked, bonded crew comes every visit. They learn your preferences, your layout, your standards. No retraining, no surprises.",
              },
              {
                title: "Better Rates",
                body: "Recurring Bethesda clients receive better rates than one-time bookings. The savings add up quickly over a year of weekly or bi-weekly service.",
              },
              {
                title: "Priority Scheduling",
                body: "Recurring clients get first access to preferred time slots and faster rescheduling — including slots near Bethesda Metro, Kenwood, and Bradley Hills.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="flex items-start gap-3 p-5 rounded-xl border border-border/50 bg-card"
              >
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting Started ───────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Getting Started With Recurring Cleaning in Bethesda
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Deep baseline first",
                body: "New recurring clients start with a deeper initial clean to establish a solid baseline throughout your Bethesda home. This ensures your first recurring visit starts from a clean slate.",
              },
              {
                step: "2",
                title: "Consistent team assigned",
                body: "The same dedicated, bonded team is assigned to your home every visit — whether you're in ZIP 20814 near NIH campus or in the 20815 area of Bethesda.",
              },
              {
                step: "3",
                title: "Set your schedule",
                body: "Weekly, bi-weekly, or monthly — whatever fits your life. Easy to adjust for holidays, travel, or schedule changes with 24-hour notice.",
              },
              {
                step: "4",
                title: "Ongoing care, guaranteed",
                body: "100% satisfaction guaranteed on every visit. If anything isn't right, call us and we return to re-clean — no fine print, no arguments.",
              },
            ].map(({ step, title, body }) => (
              <div
                key={step}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-background"
              >
                <div
                  className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  aria-hidden="true"
                >
                  <span className="text-primary font-bold text-sm">{step}</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof ──────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">
              <Star className="h-3.5 w-3.5 fill-accent" aria-hidden="true" /> Client Reviews
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              What Bethesda Families Say About Recurring Cleaning
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
              <p className="text-xs text-muted-foreground">Bethesda, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Bethesda recurring clients in Bethesda Row, Kenwood, and across ZIPs 20814–20817.
                If you're a client, share your experience.
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

      {/* ── Service Area ──────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Recurring Cleaning Throughout Bethesda, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care's recurring cleaning service covers all Bethesda ZIP codes — 20814,
              20815, 20816, and 20817. Whether you're near Bethesda Metro, in the Woodmont Triangle
              neighborhood, or in the established residential streets of Kenwood, we deliver the same
              consistent, reliable clean on every scheduled visit.
            </p>
            <p>
              Bethesda families are busy. Between demanding careers, kids, and active social lives,
              cleaning falls to the bottom of the list. Our recurring service gives you back your
              weekends — the same trusted, background-checked team arrives at Bradley Hills, Edgemoor,
              and Friendship Heights properties on a schedule you set, with EPA Safer Choice™ products
              safe for every member of your household.
            </p>
            <p>
              Not sure which frequency is right for you? Try a{" "}
              <Link to="/locations/bethesda-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              or{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              first, then decide. We also offer recurring service to clients nearby with{" "}
              <Link to="/locations/rockville-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning in Rockville
              </Link>{" "}
              and{" "}
              <Link to="/locations/chevy-chase-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning in Chevy Chase
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Bethesda, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Bethesda"
        citySlug="bethesda-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={bethesdaServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Bethesda" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Bethesda Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Bethesda Metro or anywhere across Bethesda's 20814–20817 ZIP codes,
            we're ready to build your routine. Get a free, no-obligation quote in under 60 seconds,
            or call (240) 704-2551. No long-term contracts. Easy to reschedule. 100% satisfaction guaranteed.
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

      {/* ── Sticky mobile phone CTA ───────────────────────── */}
      <StickyMobileCTA />
    </Layout>
  );
};

export default BethesdaRecurringCleaningPage;
