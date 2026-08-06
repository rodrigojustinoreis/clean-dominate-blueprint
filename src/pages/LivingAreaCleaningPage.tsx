import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Star, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import { pickReviews } from "@/data/realReviews";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import { GuideCards } from "@/components/RelatedContent";
import { isIndexable, guidesBySlugs } from "@/data/related-content";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import logo from "@/assets/logo.webp";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const service = getServiceBySlug("living-area-cleaning")!;
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);

// Living-area cluster guides. The informational sibling is first — the reciprocal link.
const LIVING_SPOKES = [
  "living-room-cleaning-checklist",
  "what-is-included-in-a-standard-cleaning",
  "recurring-cleaning-weekly-biweekly-monthly",
  "how-to-keep-house-clean-between-cleanings",
  "deep-cleaning-vs-regular-cleaning",
];

const ZONE_LINKS = ["Seating & upholstery", "Surfaces & dusting", "Touchpoints & woodwork", "Floors & rugs", "Windows & finishing"];

const ZONES: { zone: string; tasks: string[] }[] = [
  {
    zone: "Seating & upholstery",
    tasks: [
      "Upholstered sofas and chairs vacuumed, including under cushions",
      "Cushions and pillows fluffed and straightened",
      "Throws folded, seating reset",
      "Add-on: upholstery refresh for heavy use",
    ],
  },
  {
    zone: "Surfaces & dusting",
    tasks: [
      "Furniture dusted — top, front, and underneath",
      "Ceiling fans dusted, lamps cleaned, lampshades dusted",
      "Shelves, picture frames, and décor dusted",
      "Coffee and side tables wiped",
    ],
  },
  {
    zone: "Touchpoints & woodwork",
    tasks: [
      "Fingerprints removed from woodwork and door frames",
      "Switch plates and door handles wiped",
      "Electronics and remotes wiped and sanitized",
      "General straightening throughout",
    ],
  },
  {
    zone: "Floors & rugs",
    tasks: [
      "Hardwood and tile floors vacuumed and/or washed",
      "Carpets and area rugs vacuumed",
      "Floor edges and corners detailed",
      "Under accessible furniture cleaned",
    ],
  },
  {
    zone: "Windows & finishing",
    tasks: [
      "Windowsills wiped, baseboards dusted",
      "Interior glass spot-cleaned (full windows as add-on)",
      "Trash emptied and liner replaced",
      "Final walkthrough and quality check",
    ],
  },
];

const BOOKING: { title: string; who: string; detail: string; highlight?: boolean }[] = [
  {
    title: "One-time living area cleaning",
    who: "Before guests, after a project, or a seasonal reset",
    detail:
      "A single, thorough reset of your living spaces — furniture dusted, upholstery vacuumed, floors washed, and everything straightened. Book it once, whenever your living areas need it, with no commitment.",
  },
  {
    title: "Recurring living area cleaning",
    who: "Most requested — keep them fresh",
    detail:
      "Keep every living area in tip-top shape on a schedule — weekly, bi-weekly, or monthly — with no contracts. The same team learns your home, and you can shift, add, or skip a visit whenever you need.",
    highlight: true,
  },
  {
    title: "Part of a whole-home clean",
    who: "Pairs with house or deep cleaning",
    detail:
      "Living areas are cleaned on every whole-home visit, alongside the kitchen and bathrooms. Great as the first deep clean before starting a recurring plan that keeps the whole house fresh.",
  },
];

const LivingAreaCleaningPage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/living-area-cleaning",
    ogImage: "/images/team/real-team-luxury-home.webp",
    preloadImage: "/images/team/real-team-luxury-home.webp",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Living Areas Cleaning", href: "/services/living-area-cleaning" }]}
      />
      <LocalBusinessSchema reviews={pickReviews("services/living-area-cleaning", 2)} />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/living-area-cleaning"
        serviceType="Living Area Cleaning"
        priceRange={{ low: 80, high: 220 }}
      />
      <FAQSchema faqs={service.faqs} />

      {/* ── Sticky Top Bar ── */}
      <div className="fixed top-0 left-0 right-0 z-[70] bg-[#2E7D32] text-white" style={{ height: 44 }}>
        <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between gap-2">
          <span className="hidden md:block text-xs font-medium whitespace-nowrap">
            ⭐⭐⭐⭐⭐ 5-Star Rated in Montgomery County
          </span>
          <span className="text-sm font-bold text-center flex-1 md:flex-none">
            🎁 15% OFF Your First Living Area Cleaning
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

      {/* ── Hero (the one image) ── */}
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
                {service.shortDescription}
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
                {["Dusted, Vacuumed & Straightened", "Eco-Friendly & Pet-Safe", "Insured DMV Team", "No Contracts"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0" /> {b}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative lg:pl-4">
                <div className="rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[3/4] max-w-md mx-auto lg:mx-0">
                  <img
                    src="/images/team/real-team-luxury-home.webp"
                    alt="A Capital Clean Care team in navy uniforms cleaning the floors and windows of a bright, spacious living area in a DMV home"
                    className="w-full h-full object-cover"
                    width={800}
                    height={1066}
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

      {/* ── Intro (single column, no image) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5">Clean Less. Live More.</h2>
            <div className="space-y-4 text-[17px] leading-relaxed text-foreground">
              <p>
                The living spaces of your home — the living room, dining room, home office, playroom, and more — are meant
                to be <em>used</em> by the people who live there, not kept as showrooms. That doesn't mean they can't look
                and feel clean on a regular basis.
              </p>
              <p>
                Capital Clean Care gets all your home's living areas into tip-top shape while you're at work — the same
                dedicated, uniformed team every visit, using our{" "}
                <Link to="/services/eco-friendly-cleaning" className="text-accent font-semibold hover:underline">EPA Safer Choice™ plant-based products</Link>{" "}
                that are non-toxic and safe for kids and pets. Prefer to do it yourself? Our{" "}
                <Link to="/resources/living-room-cleaning-checklist" className="text-accent font-semibold hover:underline">living areas cleaning checklist</Link>{" "}
                walks through every step.
              </p>
              <p>Every living area cleaning covers:</p>
            </div>
            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {ZONE_LINKS.map((a) => (
                <li key={a}>
                  <a href="#whats-included" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
                    <ChevronRight className="h-4 w-4 shrink-0" /> {a}
                  </a>
                </li>
              ))}
            </ul>
          </FadeInSection>
        </div>
      </section>

      {/* ── What's included, by zone ── */}
      <section id="whats-included" className="scroll-mt-24 py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">What's included</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">What's Included in Every Living Area Cleaning</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-8 max-w-3xl">
              All our living area cleanings involve everything you'd normally expect, plus a few extras, using our EPA
              Safer Choice™ plant-based products. It's the same zone-by-zone routine we work through on every visit:
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {ZONES.map((z) => (
                <div key={z.zone} className="bg-card border border-border rounded-xl p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-bold mb-3">{z.zone}</h3>
                  <ul className="space-y-2">
                    {z.tasks.map((t) => (
                      <li key={t} className="flex gap-2 items-start text-[15px] text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-[#2E7D32] shrink-0 mt-0.5" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-6 text-[15px] text-muted-foreground">
              A special need you don't see covered here? Just ask — we're flexible and we want to get your living areas
              cleaned your way.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── One-time or recurring ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Book It Once — or Keep Them That Way</h2>
              <p className="text-[17px] leading-relaxed text-foreground">
                Get your living areas cleaned a single time, or keep them fresh on a schedule. Prefer a set cadence? Our{" "}
                <Link to="/services/recurring-cleaning" className="text-accent hover:underline font-medium">recurring plans</Link>{" "}
                have you covered — no contracts, ever.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {BOOKING.map((b) => (
                <div
                  key={b.title}
                  className={`rounded-xl p-6 shadow-sm border ${b.highlight ? "border-2 border-accent bg-card" : "border-border bg-card"}`}
                >
                  {b.highlight && (
                    <span className="inline-block bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2">Most popular</span>
                  )}
                  <h3 className="font-heading text-xl font-bold text-[#2E7D32]">{b.title}</h3>
                  <p className="font-heading text-sm font-bold text-foreground mt-1 mb-2">{b.who}</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{b.detail}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── No Contracts. No Hassle. (navy panel, no image) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <FadeInSection>
            <div className="rounded-3xl overflow-hidden shadow-xl border border-border bg-[#0D2B5E] text-white p-8 md:p-14 text-center">
              <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-1">Flat price.</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">No Contracts. No Hassle.</h2>
              <p className="text-white/85 text-lg leading-relaxed mb-6 max-w-2xl mx-auto">
                Living area cleaning is quoted as a flat per-visit price based on the size of your home and the rooms you
                want covered — never an open-ended hourly rate. Book once or on a schedule, and reschedule, add, or skip a
                visit whenever you like. No penalties.
              </p>
              <Button variant="cta" size="lg" asChild>
                <a href="#quote" onClick={scrollToForm}>Start With a Free Quote →</a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Social Proof — real Google reviews ── */}
      <LocationSocialProof
        cityName="Montgomery County"
        citySlug="services"
        serviceSlug="living-area-cleaning"
        serviceLabel="Living Area Cleaning"
      />

      {/* ── Service Areas ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-2">Living Area Cleaning Near You</h2>
          <p className="text-muted-foreground mb-4 max-w-2xl">
            Looking for living area cleaning near you? We cover Montgomery County and the wider DMV — pick your city or
            get a free quote for your home.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Living Area Cleaning in ${c.name}, ${c.state}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Living Area Guides ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <GuideCards heading="Living Area Cleaning Guides" guides={guidesBySlugs(LIVING_SPOKES)} />
        </div>
      </section>

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Living Area Cleaning FAQ</h2>
          <FAQ faqs={service.faqs} />
        </div>
      </section>

      {/* ── Get started CTA (solid navy, no image) ── */}
      <section className="bg-[#0D2B5E]">
        <div className="container mx-auto px-4 max-w-4xl py-14 md:py-20 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Get Started — Spend Less Time Cleaning</h2>
          <p className="text-white/85 text-lg mb-7">Book your living area cleaning today. Free quote, no contracts, eco-friendly.</p>
          <Button variant="cta" size="lg" asChild>
            <a href="#quote" onClick={scrollToForm}>Get My Free Quote →</a>
          </Button>
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section id="quote" className="py-16 bg-secondary" style={{ scrollMarginTop: 120 }}>
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-2">
            Get Your Free Living Area Cleaning Quote — We Respond in Under 2 Hours
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving Rockville, Bethesda, Silver Spring, Germantown &amp; all of Montgomery County
          </p>
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🎁 15% OFF your first living area cleaning — mention this offer when booking
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Send My Free Quote Request →" defaultService="recurring" compact />
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

export default LivingAreaCleaningPage;
