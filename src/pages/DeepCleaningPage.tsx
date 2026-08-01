import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Shield, Leaf, UserCheck, Award, Star } from "lucide-react";
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
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import { slCities, slServices } from "@/data/service-locations";
import { GuideCards } from "@/components/RelatedContent";
import { isIndexable, guidesBySlugs } from "@/data/related-content";
import { COST_PRICE_ROWS } from "@/data/cost-cities";

// The 8 spokes of the deep-cleaning cluster (Fase 2.2 + 2.3), in reading order.
const DEEP_SPOKES = [
  "what-is-included-in-a-deep-cleaning",
  "how-much-does-deep-cleaning-cost",
  "how-long-does-deep-cleaning-take",
  "how-often-should-you-deep-clean",
  "deep-cleaning-before-selling-house",
  "post-renovation-cleaning-guide-maryland",
  "deep-cleaning-for-apartments",
  "eco-friendly-deep-cleaning",
];
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import logo from "@/assets/logo.webp";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const service = getServiceBySlug("deep-cleaning")!;
const topCities = cities
  .filter((c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`))
  .slice(0, 8);


const trustBadges = [
  { Icon: Shield, text: "Licensed & Insured" },
  { Icon: Leaf, text: "Eco-Friendly" },
  { Icon: UserCheck, text: "Background-Checked" },
  { Icon: Award, text: "Satisfaction Guaranteed" },
];

// Real deep-clean timelines with a 2-person team — aligned to the same home-size tiers as our
// pricing. Source: the deep cleans our teams run weekly across Montgomery County (see
// /resources/how-long-does-deep-cleaning-take). Order matches COST_PRICE_ROWS.
const DEEP_TEAM_TIMES = ["2–3 hours", "3–4 hours", "4–6 hours", "5–7 hours", "6–8+ hours"];

// What a deep clean covers, by room. Consistent with our service definition and the
// GreenShield 5-Step Clean™ (inside appliances, grout, baseboards, vents, behind furniture).
const BY_ROOM: { room: string; tasks: string[] }[] = [
  {
    room: "Kitchen",
    tasks: [
      "Inside the oven and inside the microwave",
      "Stovetop, grates, backsplash and range hood",
      "Refrigerator exterior + accessible top, sides and behind",
      "Cabinet and drawer fronts degreased",
      "Countertops, sink and fixtures descaled and polished",
      "Floors hand-detailed along edges and under accessible furniture",
    ],
  },
  {
    room: "Bathrooms",
    tasks: [
      "Tile and grout scrubbed line by line",
      "Shower, tub and glass doors descaled of soap scum and hard water",
      "Toilet cleaned base, hinges and behind the bowl",
      "Vanity, mirrors and chrome fixtures polished",
      "Exhaust fan covers and switch plates wiped",
      "Floors detailed to the baseboard",
    ],
  },
  {
    room: "Bedrooms & living areas",
    tasks: [
      "Baseboards, trim, doors and door frames wiped",
      "Ceiling fans, light fixtures and blinds dusted top-to-bottom",
      "Window sills and window tracks cleaned",
      "Behind and under accessible furniture",
      "Light switches, handles and other high-touch points sanitized",
      "All floors HEPA-vacuumed and hard floors mopped",
    ],
  },
  {
    room: "Whole-home detail",
    tasks: [
      "Air vents, registers and return covers dusted",
      "High dusting and cobweb removal in corners and ceilings",
      "Interior glass and mirrors",
      "Trash removed and liners replaced",
      "EPA Safer Choice™ sanitize of every high-touch surface",
      "Final white-glove inspection against our 50-point checklist",
    ],
  },
];

// Deep vs standard cleaning — what each service includes. Standard = routine upkeep;
// deep = everything in standard plus the intensive, less-frequent detail work.
const DEEP_VS_STANDARD: { task: string; standard: boolean; deep: boolean }[] = [
  { task: "Dusting, vacuuming and mopping all rooms", standard: true, deep: true },
  { task: "Kitchen and bathroom surfaces cleaned and sanitized", standard: true, deep: true },
  { task: "Beds made, trash removed, mirrors and glass", standard: true, deep: true },
  { task: "Inside the oven and inside the microwave", standard: false, deep: true },
  { task: "Refrigerator: behind, beside and accessible interior", standard: false, deep: true },
  { task: "Baseboards, trim, doors and door frames", standard: false, deep: true },
  { task: "Ceiling fans, vents and air registers", standard: false, deep: true },
  { task: "Tile and grout scrubbed line by line", standard: false, deep: true },
  { task: "Behind and under accessible furniture", standard: false, deep: true },
  { task: "Window sills, tracks and blinds", standard: false, deep: true },
];

const GoogleLogo = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const DeepCleaningPage = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic = searchParams.has("gclid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/services/deep-cleaning",
    ogImage: "/images/cluster/pillar-og.jpg",
  });

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {seoHelmet}
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Deep Cleaning", href: "/services/deep-cleaning" }]}
      />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/deep-cleaning"
        serviceType="Deep Cleaning"
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
            🎁 15% OFF Your First Deep Clean
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
                Deep Cleaning Services in Montgomery County, MD
              </h1>

              <p className="text-lg text-muted-foreground mb-7 leading-relaxed max-w-xl">
                {service.shortDescription}
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
                {["Licensed & Insured", "Eco-Friendly Products", "Satisfaction Guaranteed", "Background-Checked"].map((b) => (
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
                    alt="Gloved hands wiping a stainless steel oven to a shine during a deep cleaning in a bright Montgomery County kitchen"
                    className="w-full h-full object-cover"
                    width={800}
                    height={600}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute -bottom-5 left-2 sm:-left-4 bg-white rounded-2xl shadow-xl border border-border px-5 py-3.5 flex items-center gap-3">
                  <span className="text-3xl font-heading font-extrabold text-[#2E7D32] leading-none">9+</span>
                  <span className="text-xs text-muted-foreground leading-tight">years deep cleaning<br />the DMV</span>
                </div>
              </div>
            </FadeInSection>
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

      {/* ── Real video transformations (3rd position) ── */}
      <TransformationsGallery />

      {/* ── What's included, by room ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">What's included</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-4">What a Deep Cleaning Includes, Room by Room</h2>
            <div className="space-y-4 text-[17px] leading-relaxed text-foreground mb-8">
              <p>
                A deep cleaning is the reset a home gets when routine tidying is no longer enough. Instead of
                maintaining already-clean surfaces, our team removes the built-up grime, hidden dust, and neglected
                detail that accumulate over months — inside appliances, along baseboards, in grout lines, behind
                furniture, and across every vent and fixture. It is the service most Montgomery County homes need
                before starting a regular plan, after a season of heavy use, or any time the house needs to feel
                genuinely new again.
              </p>
              <p>
                Every deep clean follows the <strong>GreenShield 5-Step Clean™</strong>, our proprietary process:
                we assess and protect the home, dry-dust top-to-bottom before any wet work so dust never resettles,
                sanitize high-touch areas with EPA Safer Choice™ plant-based products, deep-scrub and polish every
                surface, and finish with a white-glove inspection against a 50-point checklist. That methodology is
                what keeps a deep clean consistent from the first visit to the fiftieth — you can see all five steps
                in detail further down this page.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {BY_ROOM.map((r) => (
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
              Want the full list? See our{" "}
              <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent hover:underline font-medium">
                complete deep cleaning checklist
              </Link>{" "}
              or read{" "}
              <Link to="/resources/how-to-deep-clean-a-stove-maryland" className="text-accent hover:underline font-medium">
                how we deep clean a stove
              </Link>{" "}
              step by step.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Before & After photo carousel (5th position) ── */}
      <BeforeAfterGallery />

      {/* ── Deep vs standard ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Deep Cleaning vs. Standard Cleaning</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              A standard cleaning keeps an already-clean home fresh — surfaces, floors, kitchen and bathrooms on a
              regular cadence. A deep cleaning is more intensive and less frequent: it includes everything in a
              standard clean <em>plus</em> the slow, detailed work that isn't practical every visit. Most homes start
              with one deep clean to set a baseline, then maintain it with{" "}
              <Link to="/services/recurring-cleaning" className="text-accent hover:underline font-medium">recurring standard cleanings</Link>{" "}
              at a fraction of the time and cost. Here is exactly how the two compare:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold">What's cleaned</th>
                    <th className="p-3 font-heading font-bold text-center w-28">Standard</th>
                    <th className="p-3 font-heading font-bold text-center w-28">Deep</th>
                  </tr>
                </thead>
                <tbody>
                  {DEEP_VS_STANDARD.map((row) => (
                    <tr key={row.task} className="border-b border-border last:border-0">
                      <td className="p-3 text-foreground">{row.task}</td>
                      <td className="p-3 text-center">{row.standard ? <span className="text-[#2E7D32] font-bold">✓</span> : <span className="text-muted-foreground">—</span>}</td>
                      <td className="p-3 text-center">{row.deep ? <span className="text-[#2E7D32] font-bold">✓</span> : <span className="text-muted-foreground">—</span>}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Still deciding? Read the full breakdown of{" "}
              <Link to="/resources/deep-cleaning-vs-regular-cleaning" className="text-accent hover:underline font-medium">deep cleaning vs regular cleaning</Link>{" "}
              or{" "}
              <Link to="/resources/what-is-included-in-a-standard-cleaning" className="text-accent hover:underline font-medium">what a standard cleaning includes</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Prices ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Deep Cleaning Prices in Montgomery County</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              We quote deep cleaning as a <strong>flat price</strong> based on the size and condition of your home —
              never an open-ended hourly rate that leaves you guessing. The ranges below reflect what Capital Clean
              Care actually charges across Montgomery County and the wider DMV. Condition is the biggest variable: a
              home that hasn't had a professional clean in a year sits at the top of its range, while a well-kept home
              sits near the bottom. Your exact price is confirmed before we book — all products and equipment included,
              no hidden fees.
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold">Home size</th>
                    <th className="p-3 font-heading font-bold">Approx. size</th>
                    <th className="p-3 font-heading font-bold">One-time deep clean</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_PRICE_ROWS.map((row) => (
                    <tr key={row[0]} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{row[0]}</td>
                      <td className="p-3 text-muted-foreground">{row[1]}</td>
                      <td className="p-3 font-semibold text-[#2E7D32]">{row[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Want a deeper cost breakdown by home size and city? See{" "}
              <Link to="/resources/how-much-does-deep-cleaning-cost" className="text-accent hover:underline font-medium">how much a deep cleaning costs</Link>{" "}
              and{" "}
              <Link to="/resources/deep-cleaning-cost-maryland" className="text-accent hover:underline font-medium">deep cleaning cost in Maryland</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── How long ── */}
      <section className="py-12 md:py-16 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">How Long Does a Deep Cleaning Take?</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              A deep cleaning takes longer than a standard visit because of the detail work involved. Capital Clean
              Care sends a <strong>2-person team</strong> on most deep cleans, which is how a typical 3-bedroom home
              finishes in about 4 to 6 hours instead of eating a whole day. Bathrooms drive the total more than
              bedrooms do — a home with three-and-a-half baths often takes longer than a larger home with two.
              Heavy buildup and inside-appliance work (the oven and refrigerator) add time, and both are always
              included. Here are realistic timelines by home size:
            </p>
            <div className="overflow-x-auto rounded-xl border border-border">
              <table className="w-full text-left text-[15px] bg-card">
                <thead>
                  <tr className="border-b border-border bg-secondary/60">
                    <th className="p-3 font-heading font-bold">Home size</th>
                    <th className="p-3 font-heading font-bold">Approx. size</th>
                    <th className="p-3 font-heading font-bold">Time (2-person team)</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_PRICE_ROWS.map((row, i) => (
                    <tr key={row[0]} className="border-b border-border last:border-0">
                      <td className="p-3 font-medium text-foreground">{row[0]}</td>
                      <td className="p-3 text-muted-foreground">{row[1]}</td>
                      <td className="p-3 font-semibold text-[#2E7D32]">{DEEP_TEAM_TIMES[i]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              Times assume a 2-person team and average condition. For what speeds a clean up or slows it down, read{" "}
              <Link to="/resources/how-long-does-deep-cleaning-take" className="text-accent hover:underline font-medium">how long a deep cleaning takes</Link>.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── When to schedule ── */}
      <section className="py-12 md:py-16 border-t border-border">
        <div className="container mx-auto px-4 max-w-4xl">
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">When to Schedule a Deep Cleaning</h2>
            <p className="text-[17px] leading-relaxed text-foreground mb-6 max-w-3xl">
              A deep clean pays off most at a handful of specific moments. If any of these describe your situation,
              it's the right time to book one.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Moving in or out</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  An empty home is the one time every surface is reachable. A deep clean before you unpack means you
                  never move into someone else's grime; a deep clean on the way out protects your security deposit.
                  Pair it with our{" "}
                  <Link to="/services/move-out-cleaning" className="text-accent hover:underline font-medium">move-in / move-out cleaning</Link>{" "}
                  and follow the{" "}
                  <Link to="/resources/move-out-cleaning-checklist-maryland-tenants" className="text-accent hover:underline font-medium">Maryland tenant checklist</Link>.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">After a renovation or construction</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  Remodels leave behind fine drywall and construction dust that settles into every vent, track, and
                  fabric for weeks. A deep clean — or our dedicated{" "}
                  <Link to="/services/post-construction-cleaning" className="text-accent hover:underline font-medium">post-construction cleaning</Link>{" "}
                  — clears it so the finished space is actually livable.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">A seasonal or spring refresh</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  The DMV's pollen and humidity load up a home over the year. Many Montgomery County families book a
                  deep clean each spring, then maintain it with{" "}
                  <Link to="/services/recurring-cleaning" className="text-accent hover:underline font-medium">recurring service</Link>.
                  See our{" "}
                  <Link to="/resources/deep-cleaning-tips-maryland-homes-spring-prep" className="text-accent hover:underline font-medium">spring-prep deep cleaning tips</Link>.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
                <h3 className="font-heading text-lg font-bold mb-2">Before selling or hosting</h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  A spotless home shows better in listing photos and open houses, and there's no faster way to get a
                  house guest-ready before the holidays. A single deep clean resets everything a standard tidy can't
                  reach — inside appliances, grout, baseboards, and vents included.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Urgency Block ── */}
      <div className="w-full bg-[#FFFDE7] border-y border-yellow-300 py-4 px-4 text-center">
        <p className="font-bold text-foreground text-base">
          🗓 We have availability this week in Rockville, Bethesda &amp; Silver Spring
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
              <span className="text-[#2E7D32] font-semibold text-sm uppercase tracking-wider">Why a deep clean</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2">What You Get With Our Deep Cleaning</h2>
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
        serviceSlug="deep-cleaning"
        serviceLabel="Deep Cleaning"
      />

      {/* ── Service Areas ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">Deep Cleaning Available In These Areas</h2>
          <div className="flex flex-wrap gap-2 mb-4">
            {topCities.map((c) => (
              <Button key={c.slug} variant="outline" size="sm" asChild>
                <Link to={`/locations/${c.slug}`} aria-label={`Deep Cleaning in ${c.name}, ${c.state}`}>
                  {c.name}, {c.state}
                </Link>
              </Button>
            ))}
          </div>
          {slServices.some((sl) => sl.slug === "deep-cleaning" || sl.name.toLowerCase().includes("deep")) && (
            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Detailed Deep Cleaning pages by city:</p>
              <div className="flex flex-wrap gap-2">
                {slCities
                  .filter((c) => isIndexable(`/locations/${c.slug}/deep-cleaning`))
                  .slice(0, 6)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      to={`/locations/${c.slug}/deep-cleaning`}
                      className="text-sm text-accent hover:underline"
                    >
                      Deep Cleaning in {c.name} →
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Deep Cleaning Guides (cluster posts) ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <GuideCards heading="Deep Cleaning Guides" guides={guidesBySlugs(DEEP_SPOKES)} />
        </div>
      </section>

      {/* ── GreenShield 5-Step Clean ── */}
      <GreenShield5Step compact showCTA={false} />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-6">Deep Cleaning FAQ</h2>
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
            Get Your Free Deep Cleaning Quote — We Respond in Under 2 Hours
          </h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving Rockville, Bethesda, Silver Spring, Germantown &amp; all of Montgomery County
          </p>

          {/* Offer callout */}
          <div className="bg-[#2E7D32] text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🎁 15% OFF your first deep cleaning — mention this offer when booking
          </div>

          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm
                submitLabel="Send My Free Quote Request →"
                defaultService="deep"
                compact
              />
            </CardContent>
          </Card>

          <p className="text-center text-xs text-muted-foreground mt-4">
            🔒 No spam. No commitment. We'll call you back within 2 hours.
          </p>
          <p className="text-center text-xs text-muted-foreground mt-1">
            Prefer to call?{" "}
            <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">
              {PHONE}
            </a>{" "}
            — Mon–Sat 8AM–6PM
          </p>

          {/* Stove transformation Short */}
          <div className="mt-10">
            <p className="text-center text-sm font-semibold text-muted-foreground mb-3">
              See what a real deep clean looks like 👇
            </p>
            <div className="mx-auto w-full max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-border" style={{ aspectRatio: "9/16" }}>
              <iframe
                src="https://www.youtube.com/embed/zaj8T4r_3MY"
                title="Deep cleaning stove transformation — Capital Clean Care"
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

export default DeepCleaningPage;
