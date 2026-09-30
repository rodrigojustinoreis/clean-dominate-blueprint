import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2, Shield, Star, Users, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import PricingTable from "@/components/PricingTable";
import QuickPriceEstimator from "@/components/pricing/QuickPriceEstimator";
import QuoteForm from "@/components/QuoteForm";
import { trackPhoneClick } from "@/lib/analytics";

const URL = "https://capitalcleancare.com/pricing";
const PHONE = "(240) 704-2551";

const FACTORS: { title: string; text: string }[] = [
  { title: "Home size & bathrooms", text: "The biggest driver. Bathrooms move the price more than bedrooms do — a 3-bedroom home with three-and-a-half baths can cost more than a larger home with two." },
  { title: "Condition", text: "How long since the last professional clean. A home with a year of buildup sits at the top of its range; a well-kept home sits near the bottom." },
  { title: "Pets", text: "Shedding dogs and cats leave hair and dander on baseboards, vents, and upholstery — extra detail work that adds a little time." },
  { title: "Frequency", text: "Recurring cleanings cost less per visit than one-time bookings, because a maintained home is faster to clean." },
  { title: "Add-ons", text: "Optional extras like inside the oven or interior windows are quoted per item (shown in the pricing table above), so you only pay for what you choose." },
];

// Frequency comparison — real modifiers from our pricing (recurring prices are shown at bi-weekly).
const FREQUENCY: { freq: string; perVisit: string; best: string }[] = [
  { freq: "One-time", perVisit: "Highest per visit", best: "A single reset, a move, or before an event" },
  { freq: "Monthly", perVisit: "About 5% more than bi-weekly", best: "Smaller homes or light, tidy households" },
  { freq: "Bi-weekly", perVisit: "Baseline recurring rate (shown above)", best: "The most popular plan — steady upkeep" },
  { freq: "Weekly", perVisit: "Saves up to 25% per visit", best: "Busy homes, pets, and kids" },
];

const faqs = [
  { q: "How much does house cleaning cost in Montgomery County?", a: "For a typical 3-bedroom home in Montgomery County, expect roughly $215–$260 for a recurring (bi-weekly) clean, $255–$310 for a one-time standard clean, and $375–$445 for a deep clean. Smaller homes cost less and larger homes more — the table above breaks it down by size. Every quote is a flat price with all products and equipment included." },
  { q: "Do you charge by the room, the hour, or a flat rate?", a: "We charge a flat rate per job — not by the room or the hour. You get one clear price upfront based on your home's size, condition, and the type of clean, so the cost never changes if a visit takes longer than expected. That's the core of our no-surprise pricing." },
  { q: "Why does the first cleaning cost more?", a: "The first visit is usually a deep clean that removes months or years of built-up grime and resets the whole home to a baseline. That takes longer than the maintenance cleanings that follow, which is why it costs more. After that first reset, recurring cleans keep the home in shape at a lower per-visit price." },
  { q: "How much do I save with recurring service?", a: "The more often we clean, the lower the per-visit cost, because a maintained home is quicker to clean. Recurring prices above are shown at bi-weekly frequency; weekly clients save up to 25% per visit, while monthly runs about 5% more per visit than bi-weekly (more buildup between visits). Every recurring plan still costs less per visit than a one-time booking." },
  { q: "Are cleaning supplies and equipment included in the price?", a: "Yes — every quote includes all products and professional equipment at no extra charge. We bring plant-based, EPA Safer Choice cleaners and HEPA-filtration vacuums, so you never need to supply anything or pay a separate materials fee." },
  { q: "Can I get an exact quote, and is it free?", a: "Yes. The ranges here are typical, but your exact flat price depends on your specific home and any add-ons. Tell us your home size, number of bathrooms, and roughly how long since the last deep clean, and we'll give you a clear, no-obligation quote — free, with no hidden fees." },
];

const PricingPage = () => {
  const { seoHelmet } = useSEO({
    // Differs from the H1 (Semrush "H1 == title") while staying ≤ 49 chars so useSEO keeps the brand suffix.
    title: "House Cleaning Prices: Montgomery County & DMV",
    description:
      "Transparent, flat-rate house cleaning prices for Montgomery County, DC & Northern Virginia — recurring, one-time, and deep cleaning costs by home size, plus add-ons and what affects the price.",
    canonical: URL,
    ogImage: "/images/cluster/cost-og.jpg",
  });

  // Lead lot (30/09/2026): every quote CTA on this page stays on this page (#quote) instead of
  // sending the visitor to the home form.
  return (
    <Layout stickyQuoteHref="#quote">
      {seoHelmet}
      <ServiceSchema
        serviceName="House Cleaning"
        description="Transparent flat-rate house cleaning in Montgomery County, Washington DC, and Northern Virginia — recurring, one-time, deep, move-out, and post-construction cleaning."
        url={URL}
        serviceType="House Cleaning"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }]} />

      {/* ── Hero (owner request 30/09/2026): working estimator with a price on screen at load, next to
             the real team photo. Copy is the page's existing text; the long paragraphs move just below. ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-background to-background pb-10 pt-6 md:pb-16 md:pt-10">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} className="mb-5" />
          <div className="grid items-start gap-5 md:gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <h1 className="font-heading text-[1.9rem] leading-[1.1] sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">House Cleaning Prices in Montgomery County &amp; the DMV</h1>
              <div className="mb-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-muted-foreground sm:flex sm:flex-wrap sm:gap-x-4 sm:gap-y-2 sm:text-sm md:mb-5">
                {["Flat-rate — no hourly surprises", "All products & equipment included", "Free, no-obligation quotes", "Licensed, insured & background-checked"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {b}</span>
                ))}
              </div>
              <figure className="relative overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
                <img
                  src="/images/team/team-group-uniforms.webp"
                  srcSet="/images/team/team-group-uniforms-640.webp 640w, /images/team/team-group-uniforms.webp 1200w"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  alt="The Capital Clean Care team in navy uniforms, standing together in a client's home"
                  width={1200}
                  height={773}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[2/1] w-full object-cover object-[center_30%] sm:aspect-[16/10]"
                />
                <figcaption className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center gap-x-2 gap-y-0.5 rounded-xl bg-background/95 px-3 py-2 shadow-sm">
                  <span className="inline-flex items-center gap-0.5">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />)}</span>
                  <span className="text-xs font-bold text-foreground">5.0 on Google</span>
                  <span className="hidden text-xs text-muted-foreground sm:inline">· Our own team, serving the DMV since 2015</span>
                </figcaption>
              </figure>
            </div>
            <div className="lg:sticky lg:top-24">
              <QuickPriceEstimator quoteHref="#quote" />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Straightforward, <strong>flat-rate pricing</strong> — the price we quote is the price you pay. No hourly
            meter, no surprise charges, and all products and equipment included. Below are our real 2026 rates by home
            size and service type across Maryland, DC, and Northern Virginia.
          </p>

          {/* Entity-first passage (AI/LLM citability): legal name + offer + place + verifiable facts. */}
          <p className="text-base leading-relaxed text-muted-foreground mb-10 max-w-3xl">
            Capital Clean Care LLC offers flat-rate house cleaning pricing across Maryland, Washington DC, and Northern Virginia — no hourly meter, no surprise charges. We've served the DMV since 2015 as a licensed, insured, background-checked team using EPA Safer Choice products, backed by a 24-hour re-clean guarantee and a 5.0-star rating on Google.
          </p>

          {/* ── Interactive price matrix (same data the estimator above reads). forceMount makes every
                 tab's prices render in the static HTML, so all services are crawlable via curl. ── */}
          <h2 id="prices" className="scroll-mt-28 font-heading text-2xl md:text-3xl font-bold mb-4">Prices by Home Size, Service &amp; Frequency</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Real 2026 flat-rate ranges by home size for every service — switch tabs to compare <strong>recurring</strong>,
            <strong> one-time</strong>, <strong>deep</strong>, <strong>move-in/out</strong>, and <strong>post-construction</strong>{" "}
            cleaning. Recurring is shown per visit at bi-weekly frequency; all prices include products and equipment.
          </p>
          <PricingTable ctaHref="#quote" />
          <p className="text-xs text-muted-foreground mt-4 mb-10 max-w-3xl">
            Ranges are typical 2026 DMV rates; your exact flat price depends on bathrooms, condition, and any add-ons.
            Deeper dives: our{" "}
            <Link to="/resources/how-much-does-deep-cleaning-cost" className="text-accent underline hover:no-underline">deep cleaning cost guide</Link>,
            the{" "}
            <Link to="/resources/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">2026 Maryland pricing guide</Link>, and our dedicated{" "}
            <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-out</Link>{" "}and{" "}
            <Link to="/services/post-construction-cleaning" className="text-accent underline hover:no-underline">post-construction</Link>{" "}cleaning pages.
            Looking for a room-by-room or specialty service? See{" "}
            <Link to="/services/kitchen-cleaning" className="text-accent underline hover:no-underline">kitchen cleaning</Link>,{" "}
            <Link to="/services/bathroom-cleaning" className="text-accent underline hover:no-underline">bathroom cleaning</Link>,{" "}
            <Link to="/services/living-area-cleaning" className="text-accent underline hover:no-underline">living area cleaning</Link>,{" "}
            <Link to="/services/condo-cleaning" className="text-accent underline hover:no-underline">condo &amp; apartment cleaning</Link>,{" "}
            <Link to="/services/maid-service" className="text-accent underline hover:no-underline">maid service</Link>, and{" "}
            <Link to="/services/office-cleaning" className="text-accent underline hover:no-underline">office cleaning</Link>.
          </p>

          {/* ── What affects the price ── */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">What Affects Your Price</h2>
          <div className="space-y-3 mb-10">
            {FACTORS.map((f) => (
              <div key={f.title} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div><p className="font-semibold text-foreground">{f.title}</p><p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p></div>
              </div>
            ))}
          </div>

          {/* ── Frequency comparison ── */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">One-Time vs. Recurring: What You Save</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
            Recurring cleanings always cost less per visit than a one-time booking, because a home we maintain is faster
            to clean. The more often we come, the more you save per visit:
          </p>
          <div className="overflow-x-auto rounded-xl border border-border mb-4">
            <table className="w-full text-left text-[15px] bg-card">
              <thead>
                <tr className="border-b border-border bg-secondary/60">
                  <th className="p-3 font-heading font-bold">Frequency</th>
                  <th className="p-3 font-heading font-bold">Per-visit cost</th>
                  <th className="p-3 font-heading font-bold">Best for</th>
                </tr>
              </thead>
              <tbody>
                {FREQUENCY.map((r) => (
                  <tr key={r.freq} className="border-b border-border last:border-0">
                    <td className="p-3 font-medium text-foreground">{r.freq}</td>
                    <td className="p-3 text-muted-foreground">{r.perVisit}</td>
                    <td className="p-3 text-muted-foreground">{r.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            Most households start with a one-time{" "}
            <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep clean</Link>{" "}
            to reset the home, then switch to a{" "}
            <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring plan</Link>{" "}
            to keep it that way affordably. See the full comparison in{" "}
            <Link to="/resources/how-often-should-you-deep-clean" className="text-accent underline hover:no-underline">how often you should deep clean</Link>.
          </p>

          {/* ── Quote form on this page (was a CTA box that sent visitors to the home form) ── */}
          <div id="quote" className="scroll-mt-24 mb-12 overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="bg-primary p-6 text-center text-primary-foreground md:p-8">
              <Shield className="mx-auto mb-3 h-8 w-8 text-accent" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Get Your Exact Flat Price — Free</h2>
              <p className="mx-auto max-w-2xl leading-relaxed text-primary-foreground/80">
                Tell us your home size and what you need, and we'll send a clear, no-obligation quote — usually within a few
                hours. No hidden fees, ever. 5.0 stars on Google, serving the DMV since 2015.
              </p>
            </div>
            <div className="grid gap-8 bg-card p-6 md:p-8 lg:grid-cols-5">
              <Card className="shadow-none border-0 lg:col-span-3">
                <CardContent className="p-0">
                  <QuoteForm compact />
                </CardContent>
              </Card>
              <div className="space-y-4 lg:col-span-2">
                {[
                  { icon: Star, title: "5.0 on Google", desc: "Real reviews from DMV homeowners." },
                  { icon: Users, title: "Background-checked team", desc: "Licensed and insured." },
                  { icon: Leaf, title: "Products included", desc: "EPA Safer Choice cleaners and HEPA vacuums." },
                  { icon: CheckCircle2, title: "Flat price", desc: "The price we quote is the price you pay." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10"><item.icon className="h-4 w-4 text-accent" aria-hidden="true" /></span>
                    <div><p className="text-sm font-semibold text-foreground">{item.title}</p><p className="text-xs text-muted-foreground">{item.desc}</p></div>
                  </div>
                ))}
                <div className="rounded-xl border border-border bg-secondary p-4">
                  <p className="text-sm font-semibold">Prefer to talk first?</p>
                  <a href="tel:+12407042551" onClick={() => trackPhoneClick("pricing_quote_section")} className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"><Phone className="h-4 w-4" aria-hidden="true" /> Call {PHONE}</a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Prices by city ── */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Cleaning Prices by City</h2>
          <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
            Prices are consistent across our service area, with small local variations. See rates and details for your city:
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mb-10 text-[15px]">
            {[
              ["Bethesda", "/locations/bethesda-md/house-cleaning"],
              ["Rockville", "/locations/rockville-md/house-cleaning"],
              ["Silver Spring", "/locations/silver-spring-md/house-cleaning"],
              ["Gaithersburg", "/locations/gaithersburg-md/house-cleaning"],
              ["Arlington, VA", "/locations/arlington-va/house-cleaning"],
              ["Alexandria, VA", "/locations/alexandria-va/house-cleaning"],
            ].map(([name, href]) => (
              <Link key={href} to={href} className="text-accent hover:underline inline-flex items-center gap-1">
                {name} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
          <p className="-mt-5 mb-10 text-sm text-muted-foreground max-w-3xl">
            Live in Northern Virginia? Read the detailed{" "}
            <Link to="/resources/house-cleaning-cost-alexandria-va" className="text-accent font-semibold underline hover:no-underline">
              house cleaning cost guide for Alexandria, VA
            </Link>{" "}
            for neighborhood-specific examples and cleaner-hour calculations.
          </p>

          {/* ── FAQ ── */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Pricing FAQ</h2>
          <div className="space-y-6 mb-6">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-heading text-lg font-bold text-foreground mb-1.5">{f.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            More quick answers on booking, services, and trust in our{" "}
            <Link to="/resources/faq" className="text-accent underline hover:no-underline">cleaning FAQ hub</Link>{" "}
            and the full{" "}
            <Link to="/faq" className="text-accent underline hover:no-underline">house cleaning FAQ</Link>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
