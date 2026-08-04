import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Star, ArrowRight } from "lucide-react";
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

const service = getServiceBySlug("maid-service")!;
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);

const MAID_SPOKES = [
  "one-time-vs-recurring-cleaning",
  "how-often-should-you-hire-a-cleaning-service",
  "what-is-included-in-a-standard-cleaning",
  "how-much-tip-house-cleaner",
  "questions-to-ask-before-hiring-house-cleaner",
];

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
    room: "Bedrooms",
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

// Umbrella routing — a maid service covers one-time and ongoing; point each intent to the right page.
const ROUTES: { title: string; text: string; to: string; cta: string; highlight?: boolean }[] = [
  {
    title: "A One-Time Maid Visit",
    text: "Need your home reset for guests, a party, or just a busy season? Book a single visit with no commitment — our maids handle it, top to bottom.",
    to: "/services/house-cleaning",
    cta: "See one-time house cleaning",
  },
  {
    title: "A Deeper First Clean",
    text: "If it's been a while, we recommend starting with a one-time deep clean — inside appliances, baseboards, grout and the details a standard visit skips — then maintaining it.",
    to: "/services/deep-cleaning",
    cta: "See deep cleaning",
  },
  {
    title: "Recurring Maid Service",
    text: "Want the same trusted maids on a schedule? Weekly, bi-weekly, or monthly with preferred pricing and no contracts — the classic maid-service relationship.",
    to: "/services/recurring-cleaning",
    cta: "See recurring maid service",
    highlight: true,
  },
];

const MaidServicePage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/maid-service",
    ogImage: "/images/blog/maid-service-og.jpg",
    preloadImage: "/images/blog/maid-service-hero.webp",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Maid Service", href: "/services/maid-service" }]}
      />
      <LocalBusinessSchema reviews={pickReviews("services/maid-service", 2)} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/maid-service"
        serviceType="Maid Service"
        priceRange={{ low: 160, high: 385 }}
      />
      <FAQSchema faqs={service.faqs} />

      {/* ── Sticky Top Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[70] bg-[#2E7D32] text-white" style={{ height: 44 }}>
        <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">
          <span className="hidden md:block text-xs font-medium whitespace-nowrap">
            ⭐⭐⭐⭐⭐ 5-Star Rated in Montgomery County
          </span>
          <span className="text-sm font-bold text-center flex-1 md:flex-none">
            🎁 15% OFF Your First Maid Service
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
                {service.shortDescription} The same trusted, familiar maids every visit — never a random stranger.
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
                {["Background-Checked", "Insured & Bonded", "Same Trusted Team", "No Contracts"].map((b) => (
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
                    src="/images/blog/maid-service-hero.webp"
                    alt="A uniformed Capital Clean Care maid wiping a kitchen counter in a bright home in the DMV"
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl border border-border px-5 py-3.5 flex items-center gap-3">
                  <span className="text-3xl font-heading font-extrabold text-[#2E7D32] leading-none">9+</span>
                  <span className="text-xs text-muted-foreground leading-tight">years of trusted<br />maids in the DMV</span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
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

      {/* ── Real video transformations ── */}
      <TransformationsGallery />

      {/* ── What a maid service includes ── */}
      <section id="whats-included" className="scroll-mt-24 py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">What's included</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">What a Maid Service Includes</h2>
            <div className="space-y-4 text-[17px] leading-relaxed text-foreground mb-8">
              <p>
                Our maids follow the same detailed, room-by-room routine on every visit — using EPA Safer Choice™
                plant-based products, safe for kids and pets. Every team member is background-checked, bonded, insured,
                and arrives in uniform, so you always know exactly who is in your home.
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
                <span>See the full maid service checklist &amp; add-ons ({service.whatsIncluded.length} points)</span>
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

      {/* ── One-time vs recurring maid service (umbrella routing) ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">One-Time vs. Recurring Maid Service</h2>
              <p className="text-[17px] leading-relaxed text-foreground">
                A maid service can be a single visit or an ongoing relationship. Tell us what you need and we'll point you
                to the right plan — the maids, the products, and the guarantee are the same either way.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {ROUTES.map((r) => (
                <div
                  key={r.title}
                  className={`flex flex-col rounded-xl p-6 shadow-sm border ${r.highlight ? "border-2 border-accent bg-card" : "border-border bg-card"}`}
                >
                  {r.highlight && (
                    <span className="inline-block self-start bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">Most popular</span>
                  )}
                  <h3 className="font-heading text-lg font-bold mb-2">{r.title}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-4 flex-1">{r.text}</p>
                  <Link to={r.to} className="text-accent hover:underline font-medium inline-flex items-center gap-1">
                    {r.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Prices ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Maid Service Prices by Home Size</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              Every maid service is quoted as a <strong>flat per-visit price</strong> based on the size of your home —
              never an open-ended hourly rate. Most homes fall in the ranges below, and <strong>recurring plans save up
              to 25%</strong> per visit because a maintained home cleans faster.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold">Home size</th>
                    <th className="p-3 font-heading font-bold">Approx. size</th>
                    <th className="p-3 font-heading font-bold">Per visit</th>
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
              Compare plans and savings in our{" "}
              <Link to="/resources/one-time-vs-recurring-cleaning" className="text-accent hover:underline font-medium">one-time vs recurring cleaning guide</Link>.
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
              <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">Why our maids</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">Why Homeowners Choose Our Maid Service</h2>
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
        serviceSlug="maid-service"
        serviceLabel="Maid Service"
      />

      {/* ── Service Areas (near-me intent) ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-2">Maid Service Near You</h2>
          <p className="text-muted-foreground mb-4 max-w-2xl">
            Looking for a maid service or a maid cleaning service near you? We provide maid services across Montgomery
            County and the wider DMV — Bethesda, Rockville, Silver Spring, Arlington, and Washington DC — so pick your city
            or get a free quote for your home.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Maid Service in ${c.name}, ${c.state}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guides ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <GuideCards heading="Maid Service Guides" guides={guidesBySlugs(MAID_SPOKES)} />
        </div>
      </section>

      {/* ── GreenShield 5-Step ── */}
      <GreenShield5Step compact showCTA={false} />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Maid Service FAQ</h2>
          <FAQ faqs={service.faqs} />
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" className="py-16 bg-secondary" style={{ scrollMarginTop: 120 }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get Your Free Maid Service Quote — We Respond in Under 2 Hours
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving Rockville, Bethesda, Silver Spring, Germantown &amp; all of Montgomery County
          </p>
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🎁 15% OFF your first maid service — mention this offer when booking
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Send My Free Quote Request →" defaultService="maid" compact />
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

export default MaidServicePage;
