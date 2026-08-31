import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, LocalBusinessSchema, WebPageSchema } from "@/components/SchemaMarkup";
import { pickReviews } from "@/data/realReviews";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import { slCities, slServices } from "@/data/service-locations";
import { GuideCards } from "@/components/RelatedContent";
import { isIndexable, guidesBySlugs } from "@/data/related-content";
import { COST_PRICE_ROWS } from "@/data/cost-cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import TestimonialVideo from "@/components/TestimonialVideo";
import logo from "@/assets/logo.webp";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const service = getServiceBySlug("recurring-cleaning")!;
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);

// Keep this regional page as the umbrella and hand city-specific intent to the
// matching local recurring-cleaning page. Live search data determines this order.
const PRIORITY_RECURRING_CITIES = [
  "bethesda-md",
  "washington-dc",
  "rockville-md",
  "silver-spring-md",
  "arlington-va",
  "fairfax-va",
];

// The recurring-cleaning cluster spokes (frequency, cadence, maintenance-between-visits),
// in reading order. guidesBySlugs() drops any that are noindex / canonicalised away / missing.
const RECURRING_SPOKES = [
  "recurring-cleaning-weekly-biweekly-monthly",
  "one-time-vs-recurring-cleaning",
  "how-often-should-you-hire-a-cleaning-service",
  "what-is-included-in-a-standard-cleaning",
  "best-cleaning-schedule-busy-families-dmv",
  "how-to-keep-house-clean-between-cleanings",
];

const HERO_IMAGE = "/images/recurring-cleaning/real-recurring-sofa-care.webp";

// What every recurring maintenance visit covers, by area. These are ROUTINE upkeep tasks —
// the same-team, every-visit checklist that keeps an already-clean home fresh. The intensive,
// less-frequent detail work (inside appliances, grout, baseboard detailing) lives on the deep
// clean; a recurring plan rotates a little of that focus in over time instead.
const BY_AREA: { room: string; tasks: string[] }[] = [
  {
    room: "Kitchen",
    tasks: [
      "Countertops, stovetop and sink wiped and sanitized",
      "Microwave and appliance exteriors wiped down",
      "Cabinet fronts and backsplash spot-cleaned",
      "Sink and faucet cleaned and polished",
      "Trash emptied and liner replaced",
      "Floor swept and mopped",
    ],
  },
  {
    room: "Bathrooms",
    tasks: [
      "Toilets scrubbed and disinfected inside and out",
      "Tubs, showers and tile surfaces cleaned",
      "Sinks, counters and fixtures wiped and polished",
      "Mirrors and glass cleaned streak-free",
      "Fresh towels folded, trash emptied",
      "Floor swept and mopped",
    ],
  },
  {
    room: "Bedrooms & living areas",
    tasks: [
      "Beds made and linens straightened",
      "All accessible surfaces and décor dusted",
      "Nightstands, dressers and tables wiped",
      "Carpets, rugs and upholstery vacuumed",
      "Hard floors mopped throughout",
      "Light switches, handles and high-touch points sanitized",
    ],
  },
  {
    room: "Whole-home upkeep",
    tasks: [
      "Top-to-bottom dusting on reachable surfaces",
      "Cobwebs removed from accessible corners",
      "Interior glass and mirrors wiped",
      "Entryway, stairs and landings vacuumed",
      "All wastebaskets emptied and relined",
      "A rotating deep-clean focus area each visit",
    ],
  },
];

// Weekly vs bi-weekly vs monthly — a brief at-a-glance so this pillar doesn't cannibalise the
// dedicated frequency guide. Savings mirror the site's real preferred-pricing data (weekly saves
// the most; see the pricing guide + /resources/recurring-cleaning-weekly-biweekly-monthly).
const FREQUENCY_COMPARE: { label: string; weekly: string; biweekly: string; monthly: string }[] = [
  {
    label: "Best for",
    weekly: "Pets, kids & high-traffic homes",
    biweekly: "Most households — the balanced pick",
    monthly: "Light, single-person or low-traffic homes",
  },
  {
    label: "Per-visit cost",
    weekly: "Lowest per visit",
    biweekly: "Moderate",
    monthly: "Highest per visit",
  },
  {
    label: "How clean it stays",
    weekly: "Always visitor-ready",
    biweekly: "Consistently tidy",
    monthly: "Reset once a month",
  },
  {
    label: "Savings vs one-time",
    weekly: "Up to 25% off",
    biweekly: "About 15% off",
    monthly: "About 10% off",
  },
];

const RecurringCleaningPage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/recurring-cleaning",
    ogImage: HERO_IMAGE,
    preloadImage: HERO_IMAGE,
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Recurring Cleaning", href: "/services/recurring-cleaning" }]}
      />
      <LocalBusinessSchema reviews={pickReviews("services/recurring-cleaning", 2)} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/recurring-cleaning"
        serviceType="Recurring Cleaning"
      />
      <FAQSchema faqs={service.faqs} />
      <WebPageSchema
        name="Recurring House Cleaning in Maryland, DC & Virginia"
        description={service.metaDescription}
        url="https://capitalcleancare.com/services/recurring-cleaning"
        dateModified="2026-08-31"
        primaryImage={`https://capitalcleancare.com${HERO_IMAGE}`}
      />

      {/* ── Sticky Top Bar (44px, green) ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[70] bg-[#2E7D32] text-white"
        style={{ height: 44 }}
      >
        <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">
          <span className="hidden md:block text-xs font-medium whitespace-nowrap">
            ⭐⭐⭐⭐⭐ 5-Star Rated Across the DMV
          </span>
          <span className="text-sm font-bold text-center flex-1 md:flex-none">
            🎁 15% OFF Your First Recurring Clean
          </span>
          <a
            href={PHONE_HREF}
            className="hidden sm:block bg-white text-[#2E7D32] font-bold text-xs px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Call {PHONE}
          </a>
        </div>
      </div>

      {/* Spacer for fixed bar */}
      <div style={{ height: 44 }} />

      {/* ── Header (simplified for ad traffic) ── */}
      {isAdTraffic ? (
        <header className="sticky top-[44px] z-50 bg-card/95 backdrop-blur border-b border-border">
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Capital Clean Care logo" className="h-8 w-8 object-contain" />
              <span className="font-heading font-bold text-lg text-foreground">Capital Clean Care</span>
            </Link>
            <a
              href={PHONE_HREF}
              className="flex items-center gap-1.5 font-semibold text-sm text-accent hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" /> {PHONE}
            </a>
          </div>
        </header>
      ) : (
        <div className="[&>header]:!top-[44px]">
          <Header />
        </div>
      )}

      <main id="main-content">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF6EA] via-background to-accent/5 py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
            className="mb-6"
          />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FadeInSection>
              <div className="inline-flex items-center gap-2 bg-white border border-[#2E7D32]/20 rounded-full px-3.5 py-1.5 shadow-sm mb-5">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· 45 Google reviews</span>
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">
                Recurring House Cleaning in Maryland, DC &amp; Virginia
              </h1>

              <p className="text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
                {service.shortDescription} Our recurring cleaning service lets you choose the weekly,
                bi-weekly, or monthly rhythm that fits your home — same trusted team, every visit.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg shadow-[#2E7D32]/20 transition-colors"
                >
                  Get My Free Quote →
                </button>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/5 font-bold text-base px-8 py-3.5 rounded-lg transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" /> Call {PHONE}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["No Contracts", "Preferred Pricing", "Same Dedicated Team", "Eco-Friendly Products"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0" /> {b}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative lg:pl-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                  <img
                    src={HERO_IMAGE}
                    alt="Capital Clean Care professional wearing black gloves arranging a sofa throw during a recurring home cleaning visit"
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl border border-border px-5 py-3.5 flex items-center gap-3">
                  <span className="text-3xl font-heading font-extrabold text-[#2E7D32] leading-none">9+</span>
                  <span className="text-xs text-muted-foreground leading-tight">years keeping<br />DMV homes clean</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Answer-first summary: compact, quotable and useful to search/AI systems ── */}
      <section aria-labelledby="recurring-cleaning-summary" className="py-10 md:py-12 border-b border-border bg-card">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-2xl border border-[#2E7D32]/25 bg-[#F4FAF4] p-6 md:p-8 shadow-sm">
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">Quick answer</span>
            <h2 id="recurring-cleaning-summary" className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-3">
              What Is Recurring House Cleaning?
            </h2>
            <p className="text-[17px] md:text-lg leading-relaxed text-foreground max-w-3xl">
              Recurring house cleaning is a scheduled recurring maintenance cleaning service performed weekly, every two weeks,
              or monthly. Capital Clean Care sends a trusted team to clean kitchens, bathrooms, bedrooms,
              living areas, floors, dust and high-touch surfaces throughout Maryland, Washington, DC, and
              Northern Virginia—with no long-term contract and a plan tailored to the home.
            </p>
            <div className="grid sm:grid-cols-3 gap-3 mt-6" aria-label="Recurring cleaning essentials">
              {[
                ["Frequency", "Weekly, bi-weekly or monthly"],
                ["Best for", "Ongoing whole-home upkeep"],
                ["Pricing", "Flat quote based on size and condition"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[#2E7D32]/15 bg-white p-4">
                  <span className="block text-xs font-bold uppercase tracking-wide text-[#2E7D32]">{label}</span>
                  <span className="block mt-1 text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Intro / About ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <div className="space-y-4 text-foreground leading-relaxed text-[17px]">
              {service.intro.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ═══════════ PILLAR CONTENT — informative reference ═══════════ */}

      {/* ── One authentic proof gallery; duplicate media galleries intentionally removed ── */}
      <BeforeAfterGallery />

      {/* ── What's included, by area ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">What's included</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">What's Included in Every Recurring Cleaning</h2>
            <div className="space-y-4 text-[17px] leading-relaxed text-foreground mb-8">
              <p>
                A recurring cleaning is maintenance cleaning: instead of resetting a neglected home, your
                dedicated cleaning team keeps an already-clean one consistently fresh. Every visit follows the
                same routine checklist below — the essential upkeep across your kitchen, bathrooms, bedrooms,
                and living areas that keeps the whole house presentable without you lifting a finger.
              </p>
              <p>
                Because a home on a regular plan never has time to get truly dirty, each visit is faster and
                lighter than a one-time clean — which is exactly what makes recurring service so cost-effective.
                We rotate a little extra deep-clean attention into a different focus area each visit, so over
                the month the whole home gets that closer detail without a separate appointment. Everything
                still uses our EPA Safer Choice™ plant-based products, safe for kids and pets on frequent use.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {BY_AREA.map((r) => (
                <div key={r.room} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-bold mb-3">{r.room}</h3>
                  <ul className="space-y-2">
                    {r.tasks.map((t) => (
                      <li key={t} className="flex gap-2 items-start text-[15px] text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0 mt-0.5" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Want the full room-by-room list? See{" "}
              <Link to="/resources/what-is-included-in-a-standard-cleaning" className="text-accent hover:underline font-medium">
                what a standard cleaning includes
              </Link>{" "}
              — the checklist every recurring visit follows.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Client video testimonial (autoplay-on-scroll), above the frequency section ── */}
      <TestimonialVideo
        src="/videos/client-testimonial-0805.mp4"
        poster="/videos/client-testimonial-0805-poster.jpg"
        label="Capital Clean Care client testimonial — a DMV client on working with our cleaning team"
        heading="Hear It From a Capital Clean Care Client"
        subtext="A DMV client on what it's like to have Capital Clean Care handle the cleaning."
      />

      {/* ── Weekly vs bi-weekly vs monthly (brief, anti-cannibalization) ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Weekly vs. Bi-Weekly vs. Monthly: Which Frequency Fits?</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              The right cadence depends on how hard your home works. Here's the quick comparison — a fuller
              breakdown lives in our{" "}
              <Link to="/resources/recurring-cleaning-weekly-biweekly-monthly" className="text-accent hover:underline font-medium">weekly vs bi-weekly vs monthly guide</Link>.
            </p>
            <div className="hidden md:block overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold"> </th>
                    <th className="p-3 font-heading font-bold text-center">Weekly</th>
                    <th className="p-3 font-heading font-bold text-center">Bi-Weekly</th>
                    <th className="p-3 font-heading font-bold text-center">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {FREQUENCY_COMPARE.map((row) => (
                    <tr key={row.label} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{row.label}</td>
                      <td className="p-3 text-center text-muted-foreground">{row.weekly}</td>
                      <td className="p-3 text-center text-muted-foreground">{row.biweekly}</td>
                      <td className="p-3 text-center text-muted-foreground">{row.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="grid gap-4 md:hidden" aria-label="Recurring cleaning frequency comparison">
              {[
                { name: "Weekly", values: FREQUENCY_COMPARE.map((row) => [row.label, row.weekly]) },
                { name: "Bi-Weekly", values: FREQUENCY_COMPARE.map((row) => [row.label, row.biweekly]) },
                { name: "Monthly", values: FREQUENCY_COMPARE.map((row) => [row.label, row.monthly]) },
              ].map((plan) => (
                <article key={plan.name} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-[#2E7D32] mb-3">{plan.name}</h3>
                  <dl className="space-y-3">
                    {plan.values.map(([label, value]) => (
                      <div key={label} className="border-t border-border pt-3 first:border-0 first:pt-0">
                        <dt className="text-xs font-bold uppercase tracking-wide text-muted-foreground">{label}</dt>
                        <dd className="mt-1 text-[15px] text-foreground">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Not sure whether to commit to a plan at all? Compare{" "}
              <Link to="/resources/one-time-vs-recurring-cleaning" className="text-accent hover:underline font-medium">one-time vs recurring cleaning</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Prices (recurring per-visit, column [2]) ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Recurring Cleaning Prices &amp; How You Save Across the DMV</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              Every recurring plan is quoted as a <strong>flat per-visit price</strong> based on the size of
              your home — never an open-ended hourly rate. Recurring clients get <strong>preferred pricing</strong>:
              because the home stays maintained, each visit is quicker, so you pay less per visit than a one-time
              clean. Weekly plans save the most — up to <strong>25%</strong> — followed by bi-weekly and monthly.
              There are <strong>no contracts</strong> and no cancellation penalties. The ranges below are real
              recurring per-visit prices across Maryland, Washington, DC, and Northern Virginia.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold">Home size</th>
                    <th className="p-3 font-heading font-bold">Approx. size</th>
                    <th className="p-3 font-heading font-bold">Recurring (per visit)</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_PRICE_ROWS.map((row) => (
                    <tr key={row[0]} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{row[0]}</td>
                      <td className="p-3 text-muted-foreground">{row[1]}</td>
                      <td className="p-3 font-semibold text-[#2E7D32]">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Want the full pricing breakdown by home size, frequency and city? See our{" "}
              <Link to="/resources/house-cleaning-prices-maryland-2026" className="text-accent hover:underline font-medium">Maryland house cleaning prices guide</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Urgency Block ── */}
      <div className="w-full bg-[#FFFDE7] border-y border-yellow-300 py-4 px-4 text-center">
        <p className="font-bold text-foreground text-base">
          🗓 Now booking new weekly &amp; bi-weekly plans across Maryland, DC &amp; Northern Virginia
        </p>
      </div>

      {/* ── Stats band ── */}
      <section className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { v: "5.0★", l: "Google rating" },
              { v: "45", l: "Five-star reviews" },
              { v: "9+ yrs", l: "Serving the DMV" },
              { v: "100%", l: "Satisfaction guarantee" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col items-center gap-1 py-5 px-3 rounded-xl border border-border bg-card text-center shadow-sm"
              >
                <span className="font-heading text-2xl md:text-3xl font-extrabold text-[#2E7D32] leading-none">{s.v}</span>
                <span className="text-xs font-medium text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social Proof — real Google reviews + brand trust video ── */}
      <LocationSocialProof
        cityName="DMV Region"
        citySlug="services"
        serviceSlug="recurring-cleaning"
        serviceLabel="Recurring Cleaning"
      />

      {/* ── Service Areas ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Recurring Cleaning Available In These Areas</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Recurring Cleaning in ${c.name}, ${c.state}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
          {slServices.some((sl) => sl.slug === "recurring-cleaning" || sl.name.toLowerCase().includes("recurring")) && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Detailed Recurring Cleaning pages by city:</p>
              <div className="flex flex-wrap gap-2">
                {slCities
                  .filter((c) => PRIORITY_RECURRING_CITIES.includes(c.slug))
                  .filter((c) => isIndexable(`/locations/${c.slug}/recurring-cleaning`))
                  .sort((a, b) => PRIORITY_RECURRING_CITIES.indexOf(a.slug) - PRIORITY_RECURRING_CITIES.indexOf(b.slug))
                  .map((c) => (
                    <Link
                      key={c.slug}
                      to={`/locations/${c.slug}/recurring-cleaning`}
                      className="text-sm text-accent hover:underline"
                    >
                      Recurring Cleaning in {c.name} →
                    </Link>
                  ))}
              </div>
            </div>
          )}
          <div className="mt-8 pt-8 border-t border-border">
          <h3 className="font-heading text-xl font-bold mb-2">Want to Focus on One Room?</h3>
          <p className="text-muted-foreground mb-4 max-w-2xl">
            Recurring visits keep the whole home fresh — but you can also book a single room on its own:
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/services/kitchen-cleaning" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-accent hover:border-accent/40 transition-colors">Kitchen cleaning service →</Link>
            <Link to="/services/bathroom-cleaning" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-accent hover:border-accent/40 transition-colors">Bathroom cleaning service →</Link>
            <Link to="/services/living-area-cleaning" className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-accent hover:border-accent/40 transition-colors">Living area cleaning →</Link>
          </div>
          </div>
        </div>
      </section>

      {/* ── Recurring Cleaning Guides (cluster posts) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <GuideCards heading="Recurring Cleaning Guides" guides={guidesBySlugs(RECURRING_SPOKES)} />
        </div>
      </section>

      {/* ── GreenShield 5-Step Clean ── */}
      <GreenShield5Step compact showCTA={false} />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Recurring Cleaning FAQ</h2>
          <FAQ faqs={service.faqs} />
          <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Reviewed by Capital Clean Care · Updated August 31, 2026</p>
            <p className="mt-2">
              Service details reflect Capital Clean Care's recurring-cleaning checklist and current service area.
              Price ranges are planning estimates based on home size and typical condition; every home receives a
              written custom quote. Review totals and availability can change and are verified before publication.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section
        id="quote"
        className="py-16 bg-secondary"
        style={{ scrollMarginTop: 120 }}
      >
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get Your Free Recurring Cleaning Quote — We Respond in Under 2 Hours
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving Maryland, Washington, DC &amp; Northern Virginia
          </p>

          {/* Offer callout */}
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🎁 15% OFF your first recurring cleaning — mention this offer when booking
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm
                submitLabel="Send My Free Quote Request →"
                defaultService="recurring"
                compact
              />
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 No spam. No contracts. We'll call you back within 2 hours.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Prefer to call?{" "}
            <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">
              {PHONE}
            </a>{" "}
            — Mon–Sat 8AM–6PM
          </p>

        </div>
      </section>
      </main>

      {!isAdTraffic && <Footer />}

      {/* ── Mobile Split CTA (fixed bottom) ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex" style={{ height: 56 }}>
        <a
          href={PHONE_HREF}
          className="flex-1 flex items-center justify-center bg-[#2E7D32] text-white font-bold text-sm gap-1.5"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <button
          onClick={scrollToForm}
          className="flex-1 flex items-center justify-center bg-gray-900 text-white font-bold text-sm"
        >
          Get Quote
        </button>
      </div>

      {/* Bottom padding for mobile CTA */}
      <div className="h-14 md:hidden" />
    </div>
  );
};

export default RecurringCleaningPage;
