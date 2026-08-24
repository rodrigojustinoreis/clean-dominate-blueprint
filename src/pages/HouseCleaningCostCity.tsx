import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, CheckCircle2, Home, Lightbulb, MapPin, Quote, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import PricingTable from "@/components/PricingTable";
import { getCostCity, COST_PRICE_ROWS, type CostFAQ } from "@/data/cost-cities";
import { trackBookNowClick } from "@/lib/analytics";
import { GOOGLE_LISTING_URL, REAL_REVIEWS } from "@/data/realReviews";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NotFound from "./NotFound";

type AlexandriaFrequency = "biweekly" | "monthly" | "onetime" | "deep";

const alexandriaHomeLabels = ["Studio / 1 BR", "2 bedrooms", "3 bedrooms", "4+ bedrooms"];
const alexandriaEstimateRanges: Record<AlexandriaFrequency, Array<[number, number]>> = {
  biweekly: [[140, 165], [180, 215], [215, 260], [260, 325]],
  monthly: [[170, 205], [215, 265], [260, 325], [315, 400]],
  onetime: [[160, 195], [215, 255], [255, 310], [310, 400]],
  deep: [[230, 295], [310, 390], [375, 470], [450, 570]],
};
const alexandriaFrequencyLabels: Record<AlexandriaFrequency, string> = {
  biweekly: "Bi-weekly",
  monthly: "Monthly",
  onetime: "One-time",
  deep: "Deep clean",
};

const AlexandriaProgressNav = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="sticky top-[72px] z-40 border-y border-border bg-white/95 shadow-sm backdrop-blur md:top-[104px]">
      <div className="h-1 bg-secondary">
        <div className="h-full bg-accent transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>
      <nav className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-3 py-2 [scrollbar-width:none]" aria-label="Alexandria cost guide navigation">
        {[
          ["alexandria-estimate", "Estimate"],
          ["prices-by-home-size", "Prices"],
          ["alexandria-price-examples", "Local homes"],
          ["alexandria-reviews", "Reviews"],
          ["alexandria-faq", "FAQ"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="min-h-11 shrink-0 rounded-full px-4 py-2.5 text-sm font-semibold text-muted-foreground transition hover:bg-accent/10 hover:text-accent">
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};

const AlexandriaPricePlanner = () => {
  const [homeIndex, setHomeIndex] = useState(1);
  const [frequency, setFrequency] = useState<AlexandriaFrequency>("biweekly");
  const estimate = useMemo(() => alexandriaEstimateRanges[frequency][homeIndex], [frequency, homeIndex]);

  return (
    <section id="alexandria-estimate" className="scroll-mt-40 mb-12 overflow-hidden rounded-[2rem] border border-border bg-white shadow-[0_20px_60px_rgba(26,71,91,.12)]" aria-labelledby="alexandria-estimate-title">
      <div className="grid lg:grid-cols-[1.12fr_.88fr]">
        <div className="p-6 md:p-9">
          <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-accent">30-second price planner</p>
          <h2 id="alexandria-estimate-title" className="font-heading text-2xl font-bold text-foreground md:text-3xl">Start with a realistic Alexandria range</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Choose the closest home size and service. No contact information is required to see the estimate.</p>
          <fieldset className="mt-7">
            <legend className="mb-3 text-sm font-bold text-foreground">1. Your home</legend>
            <div className="grid grid-cols-2 gap-2">
              {alexandriaHomeLabels.map((label, index) => (
                <button key={label} type="button" aria-pressed={homeIndex === index} onClick={() => setHomeIndex(index)} className={`min-h-12 rounded-xl border px-3 py-3 text-sm font-semibold transition ${homeIndex === index ? "border-accent bg-accent/10 text-accent ring-2 ring-accent/15" : "border-border bg-white text-muted-foreground hover:border-accent/50"}`}>
                  {label}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-6">
            <legend className="mb-3 text-sm font-bold text-foreground">2. Cleaning type</legend>
            <div className="grid grid-cols-2 gap-2">
              {(Object.keys(alexandriaFrequencyLabels) as AlexandriaFrequency[]).map((key) => (
                <button key={key} type="button" aria-pressed={frequency === key} onClick={() => setFrequency(key)} className={`min-h-12 rounded-xl border px-3 py-3 text-sm font-semibold transition ${frequency === key ? "border-accent bg-accent/10 text-accent ring-2 ring-accent/15" : "border-border bg-white text-muted-foreground hover:border-accent/50"}`}>
                  {alexandriaFrequencyLabels[key]}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="flex flex-col justify-between bg-primary p-7 text-primary-foreground md:p-9">
          <div>
            <Sparkles className="h-7 w-7 text-accent" />
            <p className="mt-6 text-sm font-semibold text-primary-foreground/60">Your planning range</p>
            <p aria-live="polite" className="mt-1 font-heading text-5xl font-bold tracking-tight">${estimate[0]}–${estimate[1]}</p>
            <p className="mt-2 text-primary-foreground/70">per visit · {alexandriaFrequencyLabels[frequency].toLowerCase()}</p>
            <div className="my-7 h-px bg-primary-foreground/15" />
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              {["Supplies and equipment included", "Plant-based, family-safe products", "Exact written quote before booking"].map((item) => (
                <li key={item} className="flex gap-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{item}</li>
              ))}
            </ul>
          </div>
          <Button asChild className="mt-8 h-14 rounded-full bg-accent text-base font-bold text-white hover:bg-accent/90">
            <Link to="/contact" onClick={() => trackBookNowClick("alexandria_cost_planner")}>Get my exact price <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
      <p className="border-t border-border bg-secondary/30 px-6 py-3 text-xs leading-relaxed text-muted-foreground">Planning estimate only. Bathrooms, condition, pets, stairs, access, and selected add-ons determine the written quote.</p>
    </section>
  );
};

// Renders a "House Cleaning Cost in <City>" lead-gen article from cost-cities.ts data.
// One template, many cities. citySlug is passed per route so each URL prerenders statically.
const HouseCleaningCostCity = ({ citySlug }: { citySlug: string }) => {
  const c = getCostCity(citySlug);
  if (!c) return <NotFound />;

  const where = `${c.city}, ${c.state}`;
  const isAlexandria = c.slug === "alexandria-va";
  const title = isAlexandria
    ? "House Cleaning Cost in Alexandria, VA | 2026 Prices"
    : `House Cleaning Cost in ${where}: 2026 Prices & Rates`;
  const description = isAlexandria
    ? "Alexandria house cleaning costs $180–$325 recurring, $215–$400 one-time, and $310–$570+ deep. Compare 2026 rates by home size and get a free quote."
    : `House cleaning cost in ${where}: recurring cleans ${c.quick.recurring}, one-time ${c.quick.onetime}, deep cleans ${c.quick.deep}. Real price ranges by home size, what affects the price, and how to get a free quote.`;
  const url = `https://capitalcleancare.com/resources/house-cleaning-cost-${c.slug}`;

  // City-specific FAQs + two shared ones (general enough to repeat).
  const sharedFaqs: CostFAQ[] = [
    {
      q: "What affects the final price of a house cleaning?",
      a: "Five things, in roughly this order: home size (square footage), number of bedrooms and bathrooms, the type of clean (standard vs. deep vs. move-out), how often you book (recurring is cheaper per visit), and the current condition of the home plus any add-ons (inside the oven or fridge, interior windows, laundry). Pets and heavy clutter can add time too. A reputable company prices on these specifics rather than a flat rate — which is why a detailed quote is more accurate than a generic number.",
    },
    {
      q: `Do you offer free quotes for ${c.city} homes?`,
      a: `Yes. Capital Clean Care gives free, no-obligation quotes for every ${c.city} home, and you can get a fast estimate online in about two minutes using your home's size and service type. Because we price on your actual home rather than a one-size-fits-all rate, the quote you get is the price you pay — no surprises on cleaning day.`,
    },
  ];
  const alexandriaResearchFaqs: CostFAQ[] = isAlexandria ? [
    {
      q: "How much do house cleaners charge per hour in Alexandria, VA?",
      a: "Hourly quotes can be hard to compare because one company may send one cleaner while another sends a two-person crew. Capital Clean Care quotes the home and scope instead of leaving the final bill open-ended. To compare an hourly offer fairly, divide the total quote by total cleaner-hours: a $240 visit completed by two cleaners in two hours equals $60 per cleaner-hour. Always confirm whether supplies, travel, insurance, and add-ons are included.",
    },
    {
      q: "Is a flat-rate or hourly house-cleaning price better?",
      a: "A written flat rate is usually easier for homeowners to budget because it ties the price to an agreed scope rather than how long the crew happens to take. Hourly pricing can make sense for a short, custom task, but ask for a time cap and a clear checklist. For a full Alexandria home, compare what is included, the number of cleaners, and the satisfaction policy — not only the hourly number.",
    },
    {
      q: "How much does it cost to clean a three-bedroom house in Alexandria?",
      a: "For a typical three-bedroom, two-bath Alexandria home of about 1,700–2,200 square feet, plan on roughly $215–$260 for recurring cleaning, $255–$310 for a one-time standard clean, or $375–$445 for a deep clean. Multiple levels, extra bathrooms, pets, heavy buildup, and delicate historic finishes can move the quote higher.",
    },
    {
      q: "Can I estimate Alexandria house cleaning cost by square footage?",
      a: "Square footage is a useful starting point, but it is not enough by itself. A home under 900 square feet may run about $140–$165 recurring, while a 2,200–3,000-square-foot home may run about $265–$325. Bathrooms, condition, stairs, pets, frequency, and add-ons also affect cleaner-hours, so the final written quote should use both size and scope.",
    },
    {
      q: "How much should I budget per month for house cleaning in Alexandria?",
      a: "Using typical per-visit ranges, monthly service is about $215–$400 per month, bi-weekly service is roughly $390–$705 per average month, and weekly service is roughly $780–$1,410 before any frequency discount. These are planning figures; an exact recurring quote may be lower because regularly maintained homes usually take less time per visit.",
    },
  ] : [];
  const faqs = [...c.faqs, ...alexandriaResearchFaqs, ...sharedFaqs];

  const { seoHelmet } = useSEO({
    title,
    description,
    canonical: url,
    ogImage: isAlexandria ? "https://capitalcleancare.com/images/blog/cost-alexandria/hero.webp" : undefined,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content={`house cleaning cost ${c.city.toLowerCase()} ${c.state.toLowerCase()}, how much does house cleaning cost ${c.city.toLowerCase()}, maid service prices ${c.city.toLowerCase()}, cleaning service cost ${c.city.toLowerCase()}, deep cleaning cost ${c.city.toLowerCase()}`}
        />
      </Helmet>

      <ArticleSchema
        title={title}
        description={description}
        url={url}
        datePublished="2026-06-16"
        dateModified={isAlexandria ? "2026-08-24" : undefined}
        image={c.hero}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: `House Cleaning Cost in ${where}`, href: `/resources/house-cleaning-cost-${c.slug}` },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: title },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={c.hero} alt={`A clean, bright living room in a ${where} home`}>
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          {c.positioning}
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          {isAlexandria
            ? "Know what your Alexandria home should cost to clean — with a clear estimate in under 30 seconds"
            : "Real 2026 price ranges by home size — plus what actually drives the cost"}
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · {where} · {isAlexandria ? "Updated August 24, 2026" : "June 2026"}
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <Link to="/contact" onClick={() => trackBookNowClick(`${c.slug}_cost_hero`)}>Get My Free {c.city} Quote</Link>
        </Button>
      </BlogHero>

      {isAlexandria && (
        <section aria-label="Why Alexandria homeowners choose Capital Clean Care" className="border-b border-border bg-white">
          <div className="container mx-auto grid max-w-5xl grid-cols-2 gap-x-3 gap-y-4 px-4 py-5 md:grid-cols-4">
            {[
              { icon: Star, title: "5-Star Rated", detail: "Verified Google reviews" },
              { icon: ShieldCheck, title: "Licensed & Insured", detail: "Background-checked crews" },
              { icon: CheckCircle2, title: "Satisfaction Guarantee", detail: "We make it right" },
              { icon: MapPin, title: "Alexandria Service", detail: "Old Town, Del Ray & more" },
            ].map(({ icon: Icon, title: trustTitle, detail }) => (
              <div key={trustTitle} className="flex items-center gap-3">
                <Icon className="h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <p className="text-sm font-bold text-foreground">{trustTitle}</p>
                  <p className="text-xs text-muted-foreground">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {isAlexandria && <AlexandriaProgressNav />}

      {/* ARTICLE */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Quick answer */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-8">
              <p className="font-semibold text-foreground mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent" /> The quick answer</p>
              <p className="text-muted-foreground leading-relaxed">
                In {c.city}, most homeowners pay roughly <strong className="text-foreground">{c.quick.recurring} per visit</strong> for recurring (bi-weekly) cleaning, <strong className="text-foreground">{c.quick.onetime}</strong> for a one-time standard clean, and <strong className="text-foreground">{c.quick.deep}</strong> for a deep clean. Your exact price depends mainly on home size, the type of clean, and how often you book.
              </p>
              {isAlexandria && (
                <p className="mt-4 pt-4 border-t border-accent/20 text-sm text-foreground">
                  <strong>Most popular:</strong> bi-weekly service for Alexandria homes, with a free exact quote before booking and no obligation.
                </p>
              )}
            </div>
            {isAlexandria && <AlexandriaPricePlanner />}
            {isAlexandria && (
              <aside className="mb-10 grid items-center gap-6 rounded-2xl bg-[#edf6f1] p-6 md:grid-cols-[1fr_auto]" aria-label="Featured verified Google review">
                <div>
                  <div className="mb-3 flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />)}
                  </div>
                  <blockquote className="text-base font-medium leading-relaxed text-foreground">“{REAL_REVIEWS[4].text}”</blockquote>
                  <p className="mt-3 text-sm font-bold text-foreground">— {REAL_REVIEWS[4].name} <span className="font-normal text-muted-foreground">· Verified Google review</span></p>
                </div>
                <a href="#alexandria-reviews" className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#2e7d62]/20 bg-white px-5 text-sm font-bold text-[#2e7d62] hover:border-[#2e7d62]/50">Read customer reviews</a>
              </aside>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{c.intro}</p>
            {isAlexandria && (
              <figure className="mb-10 overflow-hidden rounded-2xl border border-border bg-secondary/20 shadow-sm">
                <img
                  src="/images/locations/alexandria-neighborhood-v1.webp"
                  alt="Federal-style brick rowhouses on a tree-lined street in Old Town Alexandria, Virginia"
                  width="1280"
                  height="605"
                  loading="lazy"
                  decoding="async"
                  className="aspect-[1280/605] w-full object-cover"
                />
                <figcaption className="px-5 py-3 text-sm text-muted-foreground">
                  Old Town Alexandria's historic rowhouses require careful cleaning methods for original hardwood, tile, millwork, and narrow multi-level layouts.
                </figcaption>
              </figure>
            )}
            {isAlexandria && (
              <div className="mb-10">
                <h2 id="prices-by-frequency" className="font-heading text-3xl font-bold text-foreground mb-4 scroll-mt-24">
                  Alexandria Cleaning Prices by Frequency
                </h2>
                <div className="grid sm:grid-cols-2 gap-4" aria-label="Alexandria cleaning price options">
                  {[
                    ["Bi-weekly cleaning", "$180–$325 per visit", "The lowest practical per-visit range for consistent maintenance."],
                    ["Monthly cleaning", "$215–$400 typical range", "Usually closer to a one-time clean because more buildup accumulates between visits."],
                    ["One-time cleaning", "$215–$400 per visit", "A flexible option before guests, events, or seasonal resets."],
                    ["Deep cleaning", "$310–$570+ per visit", "The detailed top-to-bottom reset for first visits or homes needing extra attention."],
                  ].map(([label, price, detail]) => (
                    <div key={label} className="rounded-xl border border-border bg-background p-5">
                      <h3 className="text-base font-bold text-foreground mb-1">{label}</h3>
                      <p className="text-accent font-bold mb-2">{price}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </FadeInSection>

          {isAlexandria && (
            <FadeInSection>
              <section className="mb-12" aria-labelledby="monthly-cleaning-budget">
                <div className="rounded-[2rem] border border-border bg-secondary/30 p-6 md:p-8">
                  <p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-accent">Monthly budget planner</p>
                  <h2 id="monthly-cleaning-budget" className="font-heading text-3xl font-bold text-foreground mb-4">
                    How Much Does House Cleaning Cost per Month in Alexandria?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Convert the per-visit price into a realistic household budget. The figures below use an average 4.33-week month and the published Alexandria ranges on this page.
                  </p>
                  <div className="grid gap-4 md:grid-cols-3">
                    {[
                      ["Monthly", "1 visit / month", "$215–$400", "Best for lighter-use homes and occasional maintenance."],
                      ["Bi-weekly", "2.17 visits / month", "$390–$705", "The most practical balance of consistency and cost."],
                      ["Weekly", "4.33 visits / month", "$780–$1,410", "Best for busy homes, children, pets, or frequent entertaining."],
                    ].map(([frequencyLabel, cadence, budget, note]) => (
                      <article key={frequencyLabel} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
                        <p className="text-sm font-bold text-foreground">{frequencyLabel}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{cadence}</p>
                        <p className="mt-4 font-heading text-2xl font-bold text-accent">{budget}</p>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{note}</p>
                      </article>
                    ))}
                  </div>
                  <p className="mt-5 text-xs leading-relaxed text-muted-foreground">Planning estimate, not a binding quote. Regularly maintained homes may qualify for a lower per-visit recurring rate after a walkthrough.</p>
                </div>
              </section>
            </FadeInSection>
          )}

          {/* Price ranges table */}
          <FadeInSection>
            <h2 id={isAlexandria ? "prices-by-home-size" : undefined} className="font-heading text-3xl font-bold text-foreground mb-4 scroll-mt-24">
              {c.city} House Cleaning Prices by Home Size
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Typical per-visit ranges for {c.city} homes. Recurring (bi-weekly) is the lowest per visit; deep cleaning is the most thorough, top-to-bottom service.
            </p>
            {isAlexandria && (
              <div className="mb-6 grid gap-3 sm:hidden" aria-label="Alexandria cleaning prices by home size">
                {alexandriaHomeLabels.map((home, index) => (
                  <article key={home} className={`rounded-2xl border p-5 ${index === 1 ? "border-accent bg-accent/5 shadow-md" : "border-border bg-white"}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3"><Home className="h-5 w-5 text-accent" /><h3 className="font-bold text-foreground">{home}</h3></div>
                      {index === 1 && <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-accent">Popular</span>}
                    </div>
                    <dl className="mt-5 space-y-3 text-sm">
                      <div className="flex justify-between border-b border-border pb-3"><dt className="text-muted-foreground">Recurring</dt><dd className="font-bold text-accent">${alexandriaEstimateRanges.biweekly[index][0]}–${alexandriaEstimateRanges.biweekly[index][1]}</dd></div>
                      <div className="flex justify-between border-b border-border pb-3"><dt className="text-muted-foreground">One-time</dt><dd className="font-bold text-foreground">${alexandriaEstimateRanges.onetime[index][0]}–${alexandriaEstimateRanges.onetime[index][1]}</dd></div>
                      <div className="flex justify-between"><dt className="text-muted-foreground">Deep clean</dt><dd className="font-bold text-foreground">${alexandriaEstimateRanges.deep[index][0]}–${alexandriaEstimateRanges.deep[index][1]}</dd></div>
                    </dl>
                  </article>
                ))}
              </div>
            )}
            <div className={`overflow-x-auto rounded-2xl border border-border mb-4 ${isAlexandria ? "hidden sm:block" : ""}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-left">
                    <th className="px-4 py-3 font-semibold text-foreground">Home</th>
                    <th className="px-4 py-3 font-semibold text-foreground hidden sm:table-cell">Approx. size</th>
                    <th className="px-4 py-3 font-semibold text-foreground text-right">Recurring</th>
                    <th className="px-4 py-3 font-semibold text-foreground text-right">One-time</th>
                    <th className="px-4 py-3 font-semibold text-foreground text-right">Deep</th>
                  </tr>
                </thead>
                <tbody>
                  {COST_PRICE_ROWS.map((r, i) => (
                    <tr key={r[0]} className={`border-t border-border ${i % 2 ? "bg-secondary/30" : "bg-background"}`}>
                      <td className="px-4 py-3 font-medium text-foreground">{r[0]}</td>
                      <td className="px-4 py-3 text-muted-foreground hidden sm:table-cell">{r[1]}</td>
                      <td className="px-4 py-3 text-right font-bold text-accent whitespace-nowrap">{r[2]}</td>
                      <td className="px-4 py-3 text-right text-foreground whitespace-nowrap">{r[3]}</td>
                      <td className="px-4 py-3 text-right text-foreground whitespace-nowrap">{r[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-10">Ranges are typical for the {c.city} / {c.county} area and vary with your home's condition and any add-ons. Get your exact price with a free quote.</p>
          </FadeInSection>

          {isAlexandria && (
            <FadeInSection>
              <section className="mb-12" aria-labelledby="hourly-vs-flat-rate">
                <h2 id="hourly-vs-flat-rate" className="scroll-mt-24 font-heading text-3xl font-bold text-foreground mb-4">
                  Alexandria House Cleaner Cost: Flat Rate vs. Hourly
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Searchers often compare a house cleaning cost per hour, but the hourly number alone can be misleading. A two-person crew working for two hours represents four cleaner-hours, while one cleaner working for four hours represents the same labor. The clearest comparison is the total price for the same written scope.
                </p>
                <div className="grid gap-4 md:grid-cols-2 mb-6">
                  <div className="rounded-2xl border-2 border-accent/40 bg-accent/5 p-6">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-accent">Best for a full home</p>
                    <h3 className="mb-3 text-xl font-bold text-foreground">Written flat-rate quote</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Known total before cleaning day", "Scope tied to rooms and service level", "No penalty when an efficient crew finishes sooner", "Easier to compare recurring, one-time, and deep cleaning"].map((item) => (
                        <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl border border-border bg-secondary/30 p-6">
                    <p className="mb-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">Useful for custom tasks</p>
                    <h3 className="mb-3 text-xl font-bold text-foreground">Hourly cleaning</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Ask how many cleaners will arrive", "Confirm the estimated cleaner-hours", "Set a maximum time or budget", "Verify whether supplies and add-ons are included"].map((item) => (
                        <li key={item} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-white p-5 text-sm text-foreground shadow-sm">
                  <strong>Quick comparison formula:</strong> total quote ÷ (number of cleaners × hours on site) = cost per cleaner-hour. Example: $240 ÷ (2 cleaners × 2 hours) = $60 per cleaner-hour.
                </div>
              </section>
            </FadeInSection>
          )}

          {isAlexandria && (
            <FadeInSection>
              <section className="mb-12" aria-labelledby="alexandria-price-examples">
                <h2 id="alexandria-price-examples" className="scroll-mt-24 font-heading text-3xl font-bold text-foreground mb-4">
                  Realistic Alexandria House Cleaning Cost Examples
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  These examples apply the price table above to common Alexandria home types. They are planning ranges, not binding quotes; bathrooms, condition, pets, stairs, access, and requested extras determine the final number.
                </p>
                <div className="space-y-4">
                  {[
                    { home: "Carlyle or Potomac Yard condo", profile: "Studio or 1 bedroom · up to 900 sq ft · single level", recurring: "$140–$165", oneTime: "$160–$195", note: "Usually the most efficient layout, although elevator and parking instructions should be confirmed." },
                    { home: "Del Ray bungalow", profile: "2 bedrooms · about 1,300–1,700 sq ft", recurring: "$180–$215", oneTime: "$215–$255", note: "Original woodwork, pets, and a finished lower level can move the home toward the upper end." },
                    { home: "Old Town rowhouse", profile: "3 bedrooms · multiple narrow levels · about 1,700–2,200 sq ft", recurring: "$215–$260", oneTime: "$255–$310", note: "Stairs, extra bathrooms, heart-pine floors, and delicate historic finishes can add time and care." },
                  ].map((example) => (
                    <article key={example.home} className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="max-w-md">
                          <h3 className="text-lg font-bold text-foreground">{example.home}</h3>
                          <p className="mt-1 text-sm text-muted-foreground">{example.profile}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm sm:text-right">
                          <div><p className="text-xs text-muted-foreground">Recurring</p><p className="font-bold text-accent">{example.recurring}</p></div>
                          <div><p className="text-xs text-muted-foreground">One-time</p><p className="font-bold text-foreground">{example.oneTime}</p></div>
                        </div>
                      </div>
                      <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">{example.note}</p>
                    </article>
                  ))}
                </div>
              </section>
            </FadeInSection>
          )}

          {isAlexandria && (
            <FadeInSection>
              <section className="mb-12" aria-labelledby="included-by-service">
                <h2 id="included-by-service" className="font-heading text-3xl font-bold text-foreground mb-4">
                  What Is Included at Each Cleaning Price Level?
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-border">
                  <table className="w-full min-w-[620px] text-sm">
                    <thead className="bg-secondary text-left">
                      <tr><th className="px-4 py-3">Service</th><th className="px-4 py-3">Best for</th><th className="px-4 py-3">Typical scope</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ["Recurring cleaning", "Weekly or bi-weekly upkeep", "Kitchen and bathroom surfaces, dusting, vacuuming, mopping, beds, trash, and routine touchpoints."],
                        ["One-time standard", "Guests, events, or an occasional reset", "The standard maintenance scope with more time allowed for buildup because there is no recurring baseline."],
                        ["Deep cleaning", "First visit or seasonal reset", "Standard cleaning plus detail work such as baseboards, buildup, cabinet fronts, fixtures, and other agreed deep-clean items."],
                        ["Move-out cleaning", "Lease turnover or home sale", "An empty-home reset with detailed kitchens, bathrooms, floors, cabinets, and selected appliance interiors."],
                      ].map(([service, bestFor, scope]) => (
                        <tr key={service} className="border-t border-border align-top"><td className="px-4 py-4 font-bold text-foreground">{service}</td><td className="px-4 py-4 text-muted-foreground">{bestFor}</td><td className="px-4 py-4 text-muted-foreground">{scope}</td></tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Always compare a written checklist. Inside ovens, refrigerators, interior windows, laundry, and heavy buildup may be priced as add-ons depending on the quote.</p>
              </section>
            </FadeInSection>
          )}

          {/* What affects price */}
          <FadeInSection>
            <h2 id={isAlexandria ? "price-factors" : undefined} className="font-heading text-3xl font-bold text-foreground mb-4 scroll-mt-24">
              What Actually Drives the Price
            </h2>
            <div className="space-y-3 mb-8">
              {[
                ["Home size & layout", "Square footage plus the number of bedrooms and bathrooms is the biggest factor — more space and more bathrooms mean more time."],
                ["Type of clean", "A standard/recurring clean maintains; a deep clean resets everything (baseboards, inside appliances, grout); a move-out clean is the most detailed. Each step up adds time and cost."],
                ["How often you book", "Recurring service is cheaper per visit because the home stays cleaner between visits. Weekly saves the most, bi-weekly is close behind, and one-time costs the most per clean."],
                ["Condition & add-ons", "A home that hasn't been deep-cleaned in a while, heavy clutter, pets, or extras (inside the oven/fridge, interior windows, laundry) all add time — and a bit to the price."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{t}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed"><strong>{c.city} tip:</strong> {c.localTip}</p>
            </div>
          </FadeInSection>

          {isAlexandria && (
            <FadeInSection>
              <section aria-labelledby="alexandria-reviews" className="my-12">
                <div className="mb-7 text-center">
                  <p className="mb-2 text-sm font-bold uppercase tracking-wider text-accent">Verified customer feedback</p>
                  <h2 id="alexandria-reviews" className="font-heading text-3xl font-bold text-foreground">
                    Why Local Homeowners Trust Capital Clean Care
                  </h2>
                  <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
                    Real feedback from customers published on our Google Business Profile.
                  </p>
                </div>
                <Carousel opts={{ align: "start", loop: true }} className="mx-auto max-w-3xl" aria-label="Verified Google customer reviews">
                  <CarouselContent className="-ml-3 md:-ml-4">
                    {REAL_REVIEWS.map((review) => (
                      <CarouselItem key={review.name} className="pl-3 md:basis-1/2 md:pl-4">
                        <article className="flex h-full min-h-[270px] flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                          <div className="mb-4 flex items-center justify-between">
                            <div className="flex" aria-label="5 out of 5 stars">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                              ))}
                            </div>
                            <Quote className="h-6 w-6 text-accent/40" aria-hidden="true" />
                          </div>
                          <blockquote className="flex-1 text-sm leading-relaxed text-foreground">“{review.text}”</blockquote>
                          <div className="mt-5 border-t border-border pt-4">
                            <p className="text-sm font-bold text-foreground">{review.name}</p>
                            <p className="text-xs text-muted-foreground">Verified Google review</p>
                          </div>
                        </article>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2 top-1/2 h-11 w-11 border-accent/30 bg-white/95 text-accent shadow-lg hover:bg-white md:-left-5" />
                  <CarouselNext className="right-2 top-1/2 h-11 w-11 border-accent/30 bg-white/95 text-accent shadow-lg hover:bg-white md:-right-5" />
                </Carousel>
                <p className="mt-4 text-center text-xs text-muted-foreground">Swipe on mobile or use the arrows to read all {REAL_REVIEWS.length} featured reviews.</p>
                <div className="mt-4 text-center">
                  <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-accent underline hover:no-underline">
                    Read all reviews on Google
                  </a>
                </div>
              </section>
            </FadeInSection>
          )}

          <BlogInlineCTA
            headline={`Want your exact ${c.city} price?`}
            subtext={`Capital Clean Care gives free, no-obligation quotes for every ${c.city} home — fast online estimate or an in-home walkthrough. Eco-friendly, background-checked, locally owned.`}
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
            analyticsLocation={`${c.slug}_cost_mid_article`}
          />

          {/* Full interactive price list */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              The Full Price List, by Service
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Browse every service type and home size below, including recurring discounts and optional add-ons.
            </p>
            <PricingTable />
          </FadeInSection>

          {/* Local link */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12 flex gap-4 items-start">
              <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Cleaning in {c.city} specifically</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For what's included, our process, and how we work in {c.city} homes, see our{" "}
                  <Link to={c.locationPath} className="text-accent underline hover:no-underline">{c.city} house cleaning page</Link>. Not sure how often to book? Read{" "}
                  <Link to="/resources/choose-pet-safe-cleaning-company" className="text-accent underline hover:no-underline">how to choose a cleaning company</Link>.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* FAQ */}
          <FadeInSection>
            <h2 id={isAlexandria ? "alexandria-faq" : undefined} className="font-heading text-3xl font-bold text-foreground mb-6 scroll-mt-24">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          {/* Final CTA */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Get Your Exact {c.city} Price — Free
              </h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Two minutes online or a quick call. Capital Clean Care provides eco-friendly{" "}
                <Link to={c.locationPath} className="underline text-primary-foreground/90 hover:text-white">house cleaning in {c.city}</Link>{" "}
                — recurring, one-time, deep, and move-out — with background-checked, locally owned teams.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {["Free quotes", "No hidden fees", "Eco-friendly", "Background-checked"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 justify-center text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <Link to="/contact" onClick={() => trackBookNowClick(`${c.slug}_cost_final`)}>Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                Licensed, insured, and locally owned. Serving {c.city} &amp; {c.county}.
              </p>
            </div>
          </FadeInSection>

        </div>
      </article>

      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningCostCity;
