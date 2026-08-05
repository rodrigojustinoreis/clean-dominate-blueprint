import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TransformationsGallery from "@/components/TransformationsGallery";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
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

// Frequency guidance by household type — who each cadence fits best.
const HOW_OFTEN: { freq: string; who: string; detail: string }[] = [
  {
    freq: "Weekly",
    who: "Busy families, pets & high foot traffic",
    detail:
      "A weekly maid service is the right call when the home never gets a chance to slow down — kids, shedding pets, home offices, and constant coming and going. Each visit is quick because nothing has time to build up, so weekly is also the best per-visit value.",
  },
  {
    freq: "Bi-weekly",
    who: "Most homes — the popular middle ground",
    detail:
      "A bi-weekly cleaning service is our most-requested plan and fits the majority of Montgomery County households. It keeps the home consistently presentable without ever letting it reach the 'it really needs cleaning' point, at a comfortable balance of cost and cleanliness.",
  },
  {
    freq: "Monthly",
    who: "Light, tidy or single-person homes",
    detail:
      "A monthly house cleaning service works well for smaller households, tidy homes, or anyone who keeps up with daily upkeep and just wants a thorough reset every few weeks. It's the lightest-touch regular cleaning service we offer.",
  },
];

const RecurringCleaningPage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/recurring-cleaning",
    ogImage: "/images/cluster/pillar-og.jpg",
    preloadImage: "/images/cluster/pillar.webp",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Recurring Cleaning", href: "/services/recurring-cleaning" }]}
      />
      <LocalBusinessSchema reviews={pickReviews("services/recurring-cleaning", 2)} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/recurring-cleaning"
        serviceType="Recurring Cleaning"
      />
      <FAQSchema faqs={service.faqs} />

      {/* ── Sticky Top Bar (44px, green) ── */}
      <div
        className="fixed top-0 left-0 right-0 z-[70] bg-[#2E7D32] text-white"
        style={{ height: 44 }}
      >
        <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">
          <span className="hidden md:block text-xs font-medium whitespace-nowrap">
            ⭐⭐⭐⭐⭐ 5-Star Rated in Montgomery County
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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF6EA] via-background to-accent/5 py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: service.name }]}
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
                    src="/images/cluster/pillar.webp"
                    alt="A dedicated Capital Clean Care team keeping a bright Montgomery County home fresh on a recurring maintenance cleaning visit"
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

      {/* ── Real video transformations (2nd position) ── */}
      <TransformationsGallery />

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

      {/* ── Before & After photo carousel (4th position) ── */}
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
        src="/videos/client-testimonial.mp4"
        poster="/videos/client-testimonial-poster.jpg"
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
            <div className="overflow-x-auto rounded-xl border border-border">
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Recurring Cleaning Prices &amp; How You Save in Montgomery County</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              Every recurring plan is quoted as a <strong>flat per-visit price</strong> based on the size of
              your home — never an open-ended hourly rate. Recurring clients get <strong>preferred pricing</strong>:
              because the home stays maintained, each visit is quicker, so you pay less per visit than a one-time
              clean. Weekly plans save the most — up to <strong>25%</strong> — followed by bi-weekly and monthly.
              There are <strong>no contracts</strong> and no cancellation penalties. The ranges below are real
              recurring per-visit prices across Montgomery County and the wider DMV.
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

      {/* ── How often should you schedule (replaces "How long") ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">How Often Should You Schedule Recurring Cleaning?</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              There's no single right answer — the best frequency matches how much life your home sees each week.
              Here's the guidance we give most DMV households when they set up a regular cleaning service.
            </p>
            <div className="grid sm:grid-cols-3 gap-5">
              {HOW_OFTEN.map((h) => (
                <div key={h.freq} className="bg-card border border-border rounded-xl p-6 shadow-sm">
                  <span className="inline-block text-[#2E7D32] font-heading font-bold text-lg mb-1">{h.freq}</span>
                  <h3 className="font-heading text-base font-bold mb-2 text-foreground">{h.who}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{h.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Still weighing it up? Read{" "}
              <Link to="/resources/how-often-should-you-hire-a-cleaning-service" className="text-accent hover:underline font-medium">how often you should hire a cleaning service</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Is recurring right for you? ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Is Recurring Cleaning Right for You?</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              A recurring residential cleaning service pays off most when a clean home matters every week, not
              just once in a while. If any of these sound like you, a recurring plan is likely the best fit.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Busy professionals</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Long hours and packed calendars leave no time for upkeep. A weekly or bi-weekly maid service
                  hands you back your evenings and weekends — you come home to a clean house without ever
                  picking up a mop.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Families with kids or pets</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Little ones and shedding pets keep a home working overtime. A dedicated cleaning team that
                  visits on a regular schedule stays ahead of the mess, using pet- and kid-safe products every
                  single visit.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Larger homes</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  More square footage and more bathrooms mean more to stay on top of. Regular maintenance
                  cleaning keeps a big home consistently presentable instead of letting it snowball into an
                  all-day project.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Anyone who wants time back</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  If the home hasn't had a thorough clean in a while, we usually suggest you{" "}
                  <Link to="/services/deep-cleaning" className="text-accent hover:underline font-medium">start with a one-time deep clean to reset</Link>,
                  then maintain that baseline effortlessly with a recurring plan at a fraction of the time and cost.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Urgency Block ── */}
      <div className="w-full bg-[#FFFDE7] border-y border-yellow-300 py-4 px-4 text-center">
        <p className="font-bold text-foreground text-base">
          🗓 Now booking new weekly &amp; bi-weekly plans in Rockville, Bethesda &amp; Silver Spring
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

      {/* ── Benefits ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center mb-10">
              <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">Why a recurring plan</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">What You Get With Our Recurring Cleaning</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex gap-3 items-start bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2E7D32]/10">
                    <CheckCircle className="h-5 w-5 text-[#2E7D32]" />
                  </div>
                  <span className="text-foreground leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Social Proof — real Google reviews + brand trust video ── */}
      <LocationSocialProof
        cityName="Montgomery County"
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
                  .filter((c) => isIndexable(`/locations/${c.slug}/recurring-cleaning`))
                  .slice(0, 6)
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
            Serving Rockville, Bethesda, Silver Spring, Germantown &amp; all of Montgomery County
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

          {/* Real clean transformation Short */}
          <div className="mt-10">
            <p className="text-center text-sm font-semibold text-muted-foreground mb-3">
              See the results our recurring clients count on 👇
            </p>
            <div className="mx-auto w-full max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-border" style={{ aspectRatio: "9/16" }}>
              <iframe
                src="https://www.youtube.com/embed/zaj8T4r_3MY"
                title="Real cleaning transformation — Capital Clean Care"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

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
