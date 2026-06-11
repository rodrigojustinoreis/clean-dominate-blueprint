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

const PAGE_URL = "https://capitalcleancare.com/locations/potomac-md/recurring-cleaning";

const faqs = [
  {
    q: "What's the difference between weekly and bi-weekly cleaning in Potomac?",
    a: "Weekly is ideal for larger Potomac homes, families with kids or pets. Bi-weekly is our most popular option — a well-maintained home without maximum cost. Both plans cover ZIP codes 20854 and 20859.",
  },
  {
    q: "Do I get the same cleaners every visit?",
    a: "Yes. A consistent, bonded and insured team is assigned to your Potomac home. No strangers arriving each week — the same people who learn your standards and preferences.",
  },
  {
    q: "How much does recurring cleaning cost in Potomac?",
    a: "Recurring clients get better rates than one-time bookings. Get your exact quote in 60 seconds — use the form below or call (240) 704-2551. No long-term contracts required.",
  },
  {
    q: "Can I skip or pause my recurring service?",
    a: "Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts. We understand life in Potomac is busy, and flexibility matters.",
  },
  {
    q: "Do you use eco-friendly products for recurring cleaning?",
    a: "Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all Potomac ZIPs: 20854 and 20859.",
  },
  {
    q: "Can I start with a one-time clean before committing?",
    a: "Absolutely. Many clients try a house cleaning or deep cleaning first, then convert to recurring. It's a great way to experience our standard before committing to a schedule.",
  },
  {
    q: "Is Capital Clean Care locally owned?",
    a: "Yes — Capital Clean Care is a Latino-owned and operated cleaning company serving Potomac and the greater Montgomery County area. We live and work in this community.",
  },
];

const checklistCategories = [
  {
    heading: "Kitchen",
    items: [
      "Countertops and sink cleaned",
      "Appliance exteriors wiped",
      "Microwave interior cleaned",
      "Floors swept and mopped",
    ],
  },
  {
    heading: "Bathrooms",
    items: [
      "Toilet sanitized",
      "Shower and tub scrubbed",
      "Sink and faucets polished",
      "Mirrors cleaned streak-free",
      "Floors mopped",
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
      "Surfaces dusted",
      "Floors vacuumed and mopped",
      "Window sills and baseboards wiped",
    ],
  },
  {
    heading: "Add-On Rotation",
    items: [
      "Inside fridge (every nth visit)",
      "Inside oven (every nth visit)",
      "Inside cabinets (on rotation)",
    ],
  },
];

const potomacServices = [
  { name: "House Cleaning", slug: "house-cleaning" },
  { name: "Deep Cleaning", slug: "deep-cleaning" },
  { name: "Move Out Cleaning", slug: "move-out-cleaning" },
  { name: "Airbnb Cleaning", slug: "airbnb-cleaning" },
  { name: "Post-Construction Cleaning", slug: "post-construction-cleaning" },
  { name: "Office Cleaning", slug: "office-cleaning" },
];

const nearbyCities = [
  { name: "Bethesda", slug: "bethesda-md", state: "MD" },
  { name: "Rockville", slug: "rockville-md", state: "MD" },
  { name: "North Bethesda", slug: "north-bethesda-md", state: "MD" },
];

// ── Page component ────────────────────────────────────────────────────────────

const PotomacRecurringCleaningPage = () => {
  const { seoHelmet } = useSEO({
    title: "Recurring House Cleaning in Potomac, MD",
    description:
      "Weekly and bi-weekly house cleaning in Potomac, MD. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds.",
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
          { label: "Potomac, MD", href: "/locations/potomac-md" },
          { label: "Recurring Cleaning", href: "/locations/potomac-md/recurring-cleaning" },
        ]}
      />
      <LocalBusinessSchema
        areaServed={[
          "Potomac, MD",
          "Glen Echo, MD",
          "River Falls, Potomac MD",
          "Avenel, Potomac MD",
          "Montgomery County, MD",
        ]}
        reviews={[
          {
            name: "James T.",
            text: "Best investment we've made. Coming home to a clean house every week is amazing.",
            location: "Potomac, MD",
          },
        ]}
      />
      <ServiceSchema
        serviceName="Recurring House Cleaning in Potomac, MD"
        description="Weekly and bi-weekly recurring house cleaning in Potomac, MD. Same trusted, background-checked team every visit. EPA Safer Choice certified eco-friendly products. 100% satisfaction guaranteed."
        url={PAGE_URL}
        areaServed={["Potomac, MD", "Montgomery County, MD"]}
      />
      <FAQSchema faqs={faqs} />

      {/* ── Breadcrumbs ───────────────────────────────────── */}
      <div className="pt-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="container mx-auto px-4 max-w-6xl pb-2">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Potomac, MD", href: "/locations/potomac-md" },
              { label: "Recurring Cleaning" },
            ]}
          />
        </div>
      </div>

      {/* ── Hero ──────────────────────────────────────────── */}
      <HeroLocation
        h1="Recurring House Cleaning in Potomac, MD"
        lead="Stop cleaning on weekends. Capital Clean Care's recurring service comes to your Potomac home — from Glen Echo to River Falls to Avenel — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed: we re-clean if you're not happy."
        cityName="Potomac"
        state="MD"
        zipRange="20854"
        heroImage="/images/team/team-two-living-room.jpg"
        heroImageAlt="Capital Clean Care recurring house cleaning in Potomac, MD — same trusted team, every visit"
        ctaPrimary="Set Up Recurring Cleaning in Potomac"
      />

      {/* ── What's Included ───────────────────────────────── */}
      <ServiceChecklistLocation
        title="What's Included in Every Potomac Recurring Clean"
        categories={checklistCategories}
      />

      {/* ── Schedule Plans ────────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">
            Choose Your Recurring Cleaning Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-muted/50">
                  <th className="text-left px-4 py-3 font-semibold text-foreground"> </th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Weekly</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Bi-Weekly</th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground">Monthly</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Best for", "Busy Potomac families, large homes, pets", "Most Potomac households", "Lighter maintenance"],
                  ["Discount", "Largest recurring discount", "Standard recurring discount", "Minimal discount"],
                  ["Result", "Always guest-ready", "Clean and well-maintained", "Seasonal freshness"],
                ].map(([label, weekly, biweekly, monthly], idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="px-4 py-3 font-semibold text-foreground">{label}</td>
                    <td className="px-4 py-3 text-muted-foreground">{weekly}</td>
                    <td className="px-4 py-3 text-muted-foreground">{biweekly}</td>
                    <td className="px-4 py-3 text-muted-foreground">{monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Why Recurring Is Better ───────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Why Recurring Cleaning Is Better Than One-Time
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cumulative Cleanliness",
                body: "Regular maintenance prevents buildup. Your Potomac home actually gets cleaner over time — and stays that way. One-time cleans can't maintain that standard.",
              },
              {
                title: "Same Team Every Time",
                body: "The same background-checked, bonded crew comes every visit to your Potomac home. They learn your preferences, your layout, your standards. No retraining strangers each week.",
              },
              {
                title: "Affordable Recurring Rates",
                body: "Recurring clients in ZIP 20854 and 20859 get better rates than one-time bookings. The more consistent the schedule, the more you save per visit.",
              },
              {
                title: "Priority Scheduling",
                body: "Recurring Potomac clients get first access to preferred time slots and faster rescheduling when your plans change — no waiting in line.",
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

      {/* ── Getting Started ───────────────────────────────── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Getting Started With Recurring Cleaning in Potomac
          </h2>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "Deep baseline first",
                body: "New recurring clients start with a deeper initial clean to establish a fresh baseline. This one-time investment makes every subsequent visit faster and more thorough.",
              },
              {
                step: "2",
                title: "Consistent team assigned",
                body: "The same dedicated, bonded team is assigned to your Potomac home — whether you're in ZIP 20854 near C&O Canal National Historical Park or in the 20859 area near Avenel.",
              },
              {
                step: "3",
                title: "Set your schedule",
                body: "Weekly, bi-weekly, or monthly. Easy to adjust with 24-hour notice — no lock-in contracts, no penalties for rescheduling.",
              },
              {
                step: "4",
                title: "Ongoing care",
                body: "100% satisfaction guaranteed every visit. We re-clean if you're not happy — no questions, no fine print. Your Potomac home stays clean, your weekends stay free.",
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
              What Potomac Families Say About Recurring Cleaning
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
                "Best investment we've made. Coming home to a clean house every week is amazing — and it's always the same team who knows exactly what we like."
              </p>
              <p className="text-sm font-semibold text-foreground">James T.</p>
              <p className="text-xs text-muted-foreground">Potomac, MD</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-5 flex flex-col items-center justify-center text-center gap-3">
              <div role="img" aria-label="5 out of 5 stars average" className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" aria-hidden="true" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Serving Potomac families across ZIP 20854 and 20859, including Glen Echo,
                River Falls, and Potomac Village.
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
            Recurring Cleaning Throughout Potomac, MD
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Capital Clean Care builds long-term cleaning relationships with Potomac families
              across ZIP codes 20854 and 20859. Whether your home is in the Glen Echo community,
              along the River Road corridor, in the estates of Avenel, or near Great Falls,
              we assign a consistent team and maintain the same high standard visit after visit.
            </p>
            <p>
              Potomac homes tend to be large, detailed spaces — and maintaining them properly
              requires more than occasional cleaning. Our recurring clients tell us that the biggest
              benefit isn't just cleanliness: it's the time they get back. Stop spending your
              weekends on chores. Let our bonded, background-checked Potomac team handle it while
              you focus on what matters.
            </p>
            <p>
              Not sure where to start? Try a{" "}
              <Link to="/locations/potomac-md/house-cleaning" className="text-primary underline">
                house cleaning
              </Link>{" "}
              or{" "}
              <Link to="/locations/potomac-md/deep-cleaning" className="text-primary underline">
                deep cleaning
              </Link>{" "}
              first to experience our standard — then convert to a recurring schedule when you're
              ready. Many Potomac clients make the switch after their very first visit. Call
              (240) 704-2551 to set up your Potomac recurring cleaning plan today.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-8">
            Recurring Cleaning FAQ — Potomac, MD
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Internal Links ────────────────────────────────── */}
      <InternalLinksGrid
        cityName="Potomac"
        citySlug="potomac-md"
        serviceLabel="Recurring Cleaning"
        serviceSlug="recurring-cleaning"
        services={potomacServices}
        nearbyCities={nearbyCities}
      />

      {/* ── Trust Badges ──────────────────────────────────── */}
      <TrustBadges compact />

      {/* ── Mid-page CTA ──────────────────────────────────── */}
      <ConversionCTA cityName="Potomac" />

      {/* ── Final CTA + #quote anchor ─────────────────────── */}
      <section id="quote" className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-3">
            Start Your Recurring Clean in Potomac Today
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Whether you're near Potomac Village or anywhere across Potomac's ZIP codes 20854
            and 20859, we're ready to build your routine. Get a free quote in 60 seconds or
            call (240) 704-2551. No long-term contracts required.
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

export default PotomacRecurringCleaningPage;
