import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Star, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import TransformationsGallery from "@/components/TransformationsGallery";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { pickReviews } from "@/data/realReviews";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import { GuideCards } from "@/components/RelatedContent";
import { isIndexable, guidesBySlugs } from "@/data/related-content";
import { COST_PRICE_ROWS } from "@/data/cost-cities";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import logo from "@/assets/logo.webp";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const service = getServiceBySlug("condo-cleaning")!;
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);

// Condo-relevant cluster guides. guidesBySlugs() drops any noindex / missing slug.
const CONDO_SPOKES = [
  "deep-cleaning-for-apartments",
  "one-time-vs-recurring-cleaning",
  "how-often-should-you-hire-a-cleaning-service",
  "what-is-included-in-a-standard-cleaning",
  "how-to-keep-house-clean-between-cleanings",
];

// The living spaces a condo clean covers, linked from the "Your Condo, Cleaned Your Way" list.
const AREA_LINKS = ["Kitchen", "Bathrooms", "Sleeping areas", "Living areas"];

const BY_AREA: { room: string; tasks: string[] }[] = [
  {
    room: "Kitchen",
    tasks: [
      "Counters, stovetop and sink wiped and sanitized",
      "Appliance exteriors and backsplash cleaned",
      "Cabinet fronts spot-cleaned, sink polished",
      "Trash emptied and relined, floor swept and mopped",
    ],
  },
  {
    room: "Bathrooms",
    tasks: [
      "Toilet, shower, tub and tile scrubbed and disinfected",
      "Sinks, counters and fixtures wiped and polished",
      "Mirrors and glass cleaned streak-free",
      "Fresh towels staged, floor washed",
    ],
  },
  {
    room: "Sleeping areas",
    tasks: [
      "Beds made and linens straightened",
      "Nightstands, dressers and surfaces dusted",
      "Carpets and rugs vacuumed, hard floors mopped",
      "Closet fronts and high-touch points wiped",
    ],
  },
  {
    room: "Living areas",
    tasks: [
      "All accessible surfaces and décor dusted",
      "Cushions straightened, floors vacuumed and mopped",
      "Interior glass, sills and window tracks wiped",
      "Baseboards, switches, handles and remotes sanitized",
    ],
  },
];

const FREQUENCY: { freq: string; who: string; detail: string; highlight?: boolean }[] = [
  {
    freq: "Weekly",
    who: "Busy professionals, pets & high-traffic units",
    detail:
      "You have a lot on your plate. A weekly condo cleaning takes 'clean the condo' off the to-do list for good — dusted furniture, mopped floors, and a fresh unit to come home to every week. Shift a day, add a clean before guests, or skip a week when you travel. Just ask.",
  },
  {
    freq: "Bi-weekly",
    who: "Most condos — our most popular plan",
    detail:
      "Bi-weekly is our most-requested condo plan for a reason: the consistency of regular cleaning without someone in every week. Showers scrubbed, floors mopped, surfaces dusted — you do nothing but enjoy the clean.",
    highlight: true,
  },
  {
    freq: "Monthly",
    who: "Tidy or single-person units",
    detail:
      "If you keep your condo in good shape but want someone to handle the deeper tasks on a regular basis, a monthly condo cleaning is the lightest-touch reset we offer — the dirty work, done for you.",
  },
];

const CondoCleaningPage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/condo-cleaning",
    ogImage: "/images/blog/condo-og.jpg",
    preloadImage: "/images/blog/condo-hero.webp",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Condo Cleaning", href: "/services/condo-cleaning" }]}
      />
      <LocalBusinessSchema reviews={pickReviews("services/condo-cleaning", 2)} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/condo-cleaning"
        serviceType="Condo Cleaning"
      />
      <FAQSchema faqs={service.faqs} />

      {/* ── Sticky Top Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[70] bg-[#2E7D32] text-white" style={{ height: 44 }}>
        <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">
          <span className="hidden md:block text-xs font-medium whitespace-nowrap">
            ⭐⭐⭐⭐⭐ 5-Star Rated in Montgomery County
          </span>
          <span className="text-sm font-bold text-center flex-1 md:flex-none">
            🎁 15% OFF Your First Condo Cleaning
          </span>
          <a href={PHONE_HREF} className="hidden sm:block bg-white text-[#2E7D32] font-bold text-xs px-3 py-1.5 rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap">
            Call {PHONE}
          </a>
        </div>
      </div>
      <div style={{ height: 44 }} />

      {/* ── Header ── */}
      {isAdTraffic ? (
        <header className="sticky top-[44px] z-50 bg-card/95 backdrop-blur border-b border-border">
          <div className="container mx-auto px-4 flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Capital Clean Care logo" className="h-8 w-8 object-contain" />
              <span className="font-heading font-bold text-lg text-foreground">Capital Clean Care</span>
            </Link>
            <a href={PHONE_HREF} className="flex items-center gap-1.5 font-semibold text-sm text-accent hover:opacity-80 transition-opacity">
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
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: service.name }]} className="mb-6" />
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

              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.1]">{service.h1}</h1>

              <p className="text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
                {service.shortDescription} We work around your building — and your schedule — so your unit stays fresh
                without the hassle.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <button onClick={scrollToForm} className="inline-flex items-center justify-center bg-[#2E7D32] hover:bg-[#1B5E20] text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg shadow-[#2E7D32]/20 transition-colors">
                  Get My Free Quote →
                </button>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center border-2 border-[#2E7D32] text-[#2E7D32] hover:bg-[#2E7D32]/5 font-bold text-base px-8 py-3.5 rounded-lg transition-colors">
                  <Phone className="h-4 w-4 mr-2" /> Call {PHONE}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["HOA-Friendly", "COI Provided", "Fob & Elevator Access", "No Contracts"].map((b) => (
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
                    src="/images/blog/condo-hero.webp"
                    alt="A bright, spotless high-rise condo living room with city views after a Capital Clean Care condo cleaning in the DMV"
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

      {/* ── Your Condo, Cleaned Your Way (2-col intro + area links) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <FadeInSection>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">Your Condo, Cleaned Your Way</h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-foreground">
                <p>
                  You start the week strong — floors vacuumed, dishes done, bathrooms sparkling. But by mid-week it's hard
                  to tell you ever spent your weekend on it. Wouldn't it be better to get that freshly-cleaned feeling
                  whenever you want it, even on a Wednesday?
                </p>
                <p>
                  When you partner with Capital Clean Care, your condo gets cleaned your way — while you're at work, on your
                  schedule, by the same dedicated team that learns your unit and your building. Our{" "}
                  <Link to="/checklist" className="text-accent font-semibold hover:underline">50-Point Cleaning Checklist</Link>{" "}
                  guides every visit, and we visit as often as you'd like.
                </p>
                <p>All our regular condo cleanings cover the living spaces you use most, including:</p>
              </div>
              <ul className="mt-4 space-y-2.5">
                {AREA_LINKS.map((a) => (
                  <li key={a}>
                    <a href="#whats-included" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                      <ChevronRight className="h-4 w-4 shrink-0" /> {a}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[17px] leading-relaxed text-foreground">
                And for the times you want a hand washing dishes or cleaning inside the refrigerator, we offer{" "}
                <a href="#whats-included" className="text-accent font-semibold hover:underline">add-on cleaning services</a>.
              </p>
            </FadeInSection>

            <FadeInSection>
              <div className="relative lg:pl-4">
                {/* Teal corner accents (reference scheme) */}
                <span className="absolute -top-3 -left-3 h-12 w-12 border-t-4 border-l-4 border-accent rounded-tl-xl hidden sm:block" aria-hidden="true" />
                <span className="absolute -bottom-3 -right-3 h-12 w-12 border-b-4 border-r-4 border-accent rounded-br-xl hidden sm:block" aria-hidden="true" />
                <div className="rounded-3xl overflow-hidden shadow-xl border border-border aspect-[4/3]">
                  <img
                    src="/images/blog/condo-interior.webp"
                    alt="A clean, staged open-plan condo living and kitchen area after a professional cleaning"
                    className="w-full h-full object-cover"
                    width={1000}
                    height={750}
                    loading="lazy"
                  />
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── What's included, by area ── */}
      <section id="whats-included" className="scroll-mt-24 py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">What's included</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">What's Included in Every Condo Cleaning</h2>
            <div className="space-y-4 text-[17px] leading-relaxed text-foreground mb-8">
              <p>
                Because a condo is an interior-only footprint, every visit focuses entirely on the spaces you live in — no
                yard, garage, or exterior to split the time. Each cleaning follows the same room-by-room routine below,
                using our EPA Safer Choice™ plant-based products, which are non-toxic and low-odor — a real plus in a
                smaller, sealed unit.
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
            <details className="group mt-6 rounded-xl border border-border bg-card">
              <summary className="cursor-pointer list-none px-5 py-4 font-heading font-bold text-foreground flex items-center justify-between gap-3">
                <span>See the full condo cleaning checklist &amp; add-ons ({service.whatsIncluded.length} points)</span>
                <span className="text-[#2E7D32] transition-transform group-open:rotate-180 shrink-0" aria-hidden="true">▾</span>
              </summary>
              <ul className="px-5 pb-5 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {service.whatsIncluded.map((item) => (
                  <li key={item} className="flex gap-2 items-start text-[15px] text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </details>
          </FadeInSection>
        </div>
      </section>

      {/* ── Choose your condo cleaning frequency ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Choose Your Condo Cleaning Frequency</h2>
              <p className="text-[17px] leading-relaxed text-foreground">
                We won't lock you into a strict schedule. Pick the rhythm that fits your unit and your life — and change it
                whenever you need. These are our most popular condo cleaning frequencies:
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {FREQUENCY.map((f) => (
                <div
                  key={f.freq}
                  className={`rounded-xl p-6 shadow-sm border ${f.highlight ? "border-2 border-accent bg-card" : "border-border bg-card"}`}
                >
                  {f.highlight && (
                    <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">Most popular</span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-[#2E7D32]">{f.freq}</h3>
                  <p className="font-heading text-sm font-bold text-foreground mt-1 mb-2">{f.who}</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── No Contracts. No Hassle. (navy panel + photo, reference scheme) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <FadeInSection>
            <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-xl border border-border">
              <div className="bg-[#0D2B5E] text-white p-8 md:p-12 flex flex-col justify-center">
                <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-1">No Contracts.</p>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">No Hassle.</h2>
                <p className="text-white/85 text-lg leading-relaxed mb-6">
                  You get the condo cleaning frequency you want without signing a contract. Get your unit cleaned as often —
                  or as little — as you like. Reschedule, add a visit, or pause when you travel. No problem, no penalties.
                </p>
                <div>
                  <Button variant="cta" size="lg" asChild>
                    <a href="#quote" onClick={scrollToForm}>Start With a Free Quote →</a>
                  </Button>
                </div>
              </div>
              <div className="min-h-[280px] lg:min-h-full">
                <img
                  src="/images/blog/condo-living.webp"
                  alt="A cozy, freshly cleaned condo living room corner with a styled sofa, plant and rug"
                  className="w-full h-full object-cover"
                  width={1000}
                  height={750}
                  loading="lazy"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Real video transformations ── */}
      <TransformationsGallery />

      {/* ── Prices ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Condo Cleaning Prices by Unit Size</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              Every condo cleaning is quoted as a <strong>flat per-visit price</strong> based on the size of your unit —
              never an open-ended hourly rate. Because most condos are smaller than single-family homes, they usually fall
              at the lower end of the ranges below, and <strong>recurring plans save up to 25%</strong> per visit.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold">Unit size</th>
                    <th className="p-3 font-heading font-bold">Approx. size</th>
                    <th className="p-3 font-heading font-bold">Per condo cleaning</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_PRICE_ROWS.slice(0, 4).map((row) => (
                    <tr key={row[0]} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{row[0]}</td>
                      <td className="p-3 text-muted-foreground">{row[1]}</td>
                      <td className="p-3 font-semibold text-[#2E7D32]">{row[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Want to compare plans and savings? See{" "}
              <Link to="/resources/one-time-vs-recurring-cleaning" className="text-accent hover:underline font-medium">one-time vs recurring cleaning</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

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
              <div key={s.l} className="flex flex-col items-center gap-1 py-5 px-3 rounded-xl border border-border bg-card text-center shadow-sm">
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
              <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">Built for condo living</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">What You Get With Our Condo Cleaning</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex gap-3 items-start bg-card border border-border rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
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

      {/* ── Social Proof — real Google reviews ── */}
      <LocationSocialProof
        cityName="Montgomery County"
        citySlug="services"
        serviceSlug="condo-cleaning"
        serviceLabel="Condo Cleaning"
      />

      {/* ── Service Areas ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-2">Condo Cleaning Services Near You</h2>
          <p className="text-muted-foreground mb-4 max-w-2xl">
            Looking for a condo cleaning service near you? We cover Montgomery County and the wider DMV — pick your city
            or get a free quote for your building.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Condo Cleaning in ${c.name}, ${c.state}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Condo Cleaning Guides ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <GuideCards heading="Condo & Apartment Cleaning Guides" guides={guidesBySlugs(CONDO_SPOKES)} />
        </div>
      </section>

      {/* ── GreenShield 5-Step ── */}
      <GreenShield5Step compact showCTA={false} />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Condo Cleaning FAQ</h2>
          <FAQ faqs={service.faqs} />
        </div>
      </section>

      {/* ── Get started CTA (photo + navy overlay, reference scheme) ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/blog/condo-hero.webp" alt="" aria-hidden="true" className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-[#0D2B5E]/85" />
        </div>
        <div className="relative container mx-auto px-4 max-w-4xl py-14 md:py-20 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Get Started — See Why the DMV Trusts Us With Their Condos</h2>
          <p className="text-white/85 text-lg mb-7">Book your condo clean today. Free quote, no contracts, HOA-friendly.</p>
          <Button variant="cta" size="lg" asChild>
            <a href="#quote" onClick={scrollToForm}>Get My Free Quote →</a>
          </Button>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" className="py-16 bg-secondary" style={{ scrollMarginTop: 120 }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get Your Free Condo Cleaning Quote — We Respond in Under 2 Hours
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving Rockville, Bethesda, Silver Spring, Germantown &amp; all of Montgomery County
          </p>
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🎁 15% OFF your first condo cleaning — mention this offer when booking
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Send My Free Quote Request →" defaultService="condo" compact />
            </CardContent>
          </Card>
          <p className="text-center text-xs text-muted-foreground mt-4">🔒 No spam. No contracts. We'll call you back within 2 hours.</p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Prefer to call?{" "}
            <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">{PHONE}</a> — Mon–Sat 8AM–6PM
          </p>
        </div>
      </section>

      {!isAdTraffic && <Footer />}

      {/* ── Mobile Split CTA ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex" style={{ height: 56 }}>
        <a href={PHONE_HREF} className="flex-1 flex items-center justify-center bg-[#2E7D32] text-white font-bold text-sm gap-1.5">
          <Phone className="h-4 w-4" /> Call Now
        </a>
        <button onClick={scrollToForm} className="flex-1 flex items-center justify-center bg-gray-900 text-white font-bold text-sm">
          Get Quote
        </button>
      </div>
      <div className="h-14 md:hidden" />
    </div>
  );
};

export default CondoCleaningPage;
