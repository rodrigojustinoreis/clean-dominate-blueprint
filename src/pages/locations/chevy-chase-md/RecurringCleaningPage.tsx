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

const PAGE_URL = "https://capitalcleancare.com/locations/chevy-chase-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Chevy Chase?",
    a: "Weekly is ideal for larger Chevy Chase homes, families with kids or pets, or households with high traffic. Bi-weekly is our most popular option — a clean, well-maintained home without maximum cost.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Chevy Chase home. No strangers showing up each week — your team learns your home, your preferences, and your standards.",
  },
  {
    q: "How much does recurring cleaning cost in Chevy Chase?",
    a: "Recurring clients get better rates than one-time bookings. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No commitment required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts for Chevy Chase clients. We serve all 20815 ZIP neighborhoods with flexible scheduling.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets throughout Chevy Chase. We serve all Chevy Chase ZIPs: 20815.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to recurring. We make it easy to start and easy to adjust.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — we are a Latino-owned and operated cleaning company serving Chevy Chase and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and backsplash wiped",
      "Sink scrubbed",
      "Appliance exteriors cleaned",
      "Microwave interior cleaned",
      "Floor swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet sanitized",
      "Shower/tub scrubbed",
      "Sink and faucets polished",
      "Mirrors cleaned",
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
    heading: "Living Areas",
    items: [
      "Surfaces dusted (furniture, shelves)",
      "Floors vacuumed and mopped",
      "Window sills cleaned",
    ],
  },
  {
    heading: "All Rooms",
    items: [
      "Baseboards dusted",
      "Light switches and door handles wiped",
      "Trash emptied",
    ],
  },
  {
    heading: "Add-On Rotation (Every Nth Visit)",
    items: [
      "Inside refrigerator",
      "Inside oven",
      "Inside cabinets",
      "Laundry (on request)",
    ],
  },
];

const chevyChaseServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Kensington", slug: "kensington-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const ChevyChaseRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Chevy Chase, MD",
    description:
      "Weekly and bi-weekly house cleaning in Chevy Chase, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
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
          { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
          { label: "Recurring Cleaning", href: "/locations/chevy-chase-md/recurring-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Chevy Chase, MD",
          "Martin's Additions, Chevy Chase MD",
          "Chevy Chase Village, MD",
          "Somerset, MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Chevy Chase, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Chevy Chase, MD"
        description="Weekly and bi-weekly recurring house cleaning in Chevy Chase, MD. Same trusted, background-checked team every visit. EPA Safer Choice certified products. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Chevy Chase, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Chevy Chase, MD", href: "/locations/chevy-chase-md" },
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Recurring House Cleaning in Chevy Chase, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Chevy Chase home — from Section 3 to Section 4 to Martin's Additions — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed: we re-clean if you're not happy."
        cityName="Chevy Chase"
        state="MD"
        zipRange="20815"
        heroImage="/images/team/team-two-living-room.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Chevy Chase, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Chevy Chase"
      />

      {/* ── Schedule Plans ────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-primary/10">
                  <th className="text-left p-4 font-semibold text-foreground border border-border"></th>
                  <th className="text-left p-4 font-semibold text-accent border border-border">Weekly</th>
                  <th className="text-left p-4 font-semibold text-foreground border border-border">Bi-Weekly</th>
                  <th className="text-left p-4 font-semibold text-foreground border border-border">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Best for", "Busy families, large homes, pets", "Most Chevy Chase households", "Lighter maintenance"],
                  ["Discount", "Largest recurring discount", "Standard recurring discount", "Minimal discount"],
                  ["Result", "Always guest-ready", "Clean between uses", "Seasonal freshness"],
                ].map(([label, weekly, biweekly, monthly]) => (
                  <tr key={label} className="even:bg-muted/20">
                    <td className="p-4 border border-border font-semibold text-foreground">{label}</td>
                    <td className="p-4 border border-border text-foreground">{weekly}</td>
                    <td className="p-4 border border-border text-muted-foreground">{biweekly}</td>
                    <td className="p-4 border border-border text-muted-foreground">{monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Chevy Chase Recurring Clean"
        categories={checklistCategories}
      />

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
                body: "Regular maintenance prevents buildup. Your Chevy Chase home actually gets cleaner over time — less effort per visit, better results overall. Section 3 and Section 4 clients notice the difference within weeks.",
              },
              {
                title: "Same Team Every Time",
                body: "The same background-checked, bonded crew visits every time. They learn your preferences, your layout, your standards. No retraining a new person each week — just consistent, trusted service.",
              },
              {
                title: "Affordable Recurring Rates",
                body: "Recurring Chevy Chase clients get better rates than one-time bookings. The more frequently we come, the more efficient each visit — and the lower your per-clean cost.",
              },
              {
                title: "Priority Scheduling",
                body: "Recurring clients in Chevy Chase Village and Martin's Additions get first access to preferred time slots and faster rescheduling when life happens.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <CheckCircle className="h-6 w-6 text-accent mb-3" aria-hidden="true" />
                <h3 className="font-heading font-bold text-foreground mb-2">{card.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How to Get Started ────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Getting Started With Recurring Cleaning in Chevy Chase
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Deep baseline first",
                body: "New clients start with a deeper initial clean to establish a clean baseline for your Chevy Chase home. This ensures every visit after that is efficient and thorough.",
              },
              {
                step: "2",
                title: "Consistent team assigned",
                body: "The same dedicated, bonded team is assigned to your home — whether you're in ZIP 20815 near Friendship Heights or in Chevy Chase Village.",
              },
              {
                step: "3",
                title: "Set your schedule",
                body: "Weekly, bi-weekly, or monthly. Easy to adjust anytime with 24-hour notice. No lock-in contracts, no cancellation fees.",
              },
              {
                step: "4",
                title: "Ongoing care, guaranteed",
                body: "100% satisfaction guaranteed every visit — we re-clean if you're not happy. That's our commitment to every Chevy Chase family we serve.",
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
              What Chevy Chase Families Say About Recurring Cleaning
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
              <p className="text-xs text-muted-foreground">Chevy Chase, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Chevy Chase families near Connecticut Avenue, Section 3, Section 4, and Martin's Additions
                with weekly and bi-weekly cleaning routines.
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
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Recurring Cleaning Throughout Chevy Chase, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care provides weekly and bi-weekly recurring cleaning to homes throughout Chevy Chase
              ZIP 20815 — from Section 3 to Chevy Chase Village, Martin's Additions, and Somerset. Whether your
              home is steps from the Chevy Chase Club or along Connecticut Avenue near Friendship Heights, we
              assign a consistent, background-checked team that becomes familiar with your home over time.
            </p>
            <p>
              Recurring cleaning is the most cost-effective way to keep your Chevy Chase home consistently clean.
              Our recurring clients pay lower per-visit rates than one-time clients, and they get priority access
              to preferred scheduling slots. Most clients start with a{" "}
              <Link to="/locations/chevy-chase-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              to establish a clean baseline, then transition to a regular maintenance schedule.
            </p>
            <p>
              We also offer{" "}
              <Link to="/locations/chevy-chase-md/house-cleaning" className="text-primary underline">
                standard house cleaning
              </Link>{" "}
              for one-time needs, and{" "}
              <Link to="/locations/chevy-chase-md/airbnb-cleaning" className="text-primary underline">
                Airbnb cleaning
              </Link>{" "}
              for short-term rental hosts who need turnover service alongside a home they also occupy. Nearby
              options include{" "}
              <Link to="/locations/bethesda-md/recurring-cleaning" className="text-primary underline">
                recurring cleaning in Bethesda
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Chevy Chase, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Chevy Chase"
        citySlug="chevy-chase-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={chevyChaseServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Chevy Chase" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Chevy Chase Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Connecticut Avenue or anywhere across Chevy Chase's 20815 ZIP, we're ready to
            build your routine. Free quote in 60 seconds — or call (240) 704-2551. No long-term contracts,
            easy to reschedule, 100% satisfaction guaranteed.
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

export default ChevyChaseRecurringCleaningPage;
