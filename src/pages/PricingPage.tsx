import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import PricingTable from "@/components/PricingTable";

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

  const scrollLink = "/#quote";

  return (
    <Layout>
      {seoHelmet}
      <ServiceSchema
        serviceName="House Cleaning"
        description="Transparent flat-rate house cleaning in Montgomery County, Washington DC, and Northern Virginia — recurring, one-time, deep, move-out, and post-construction cleaning."
        url={URL}
        serviceType="House Cleaning"
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Pricing", href: "/pricing" }]} />

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} className="mb-6" />

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">House Cleaning Prices in Montgomery County &amp; the DMV</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Straightforward, <strong>flat-rate pricing</strong> — the price we quote is the price you pay. No hourly
            meter, no surprise charges, and all products and equipment included. Below are our real 2026 rates by home
            size and service type across Maryland, DC, and Northern Virginia.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground mb-10">
            {["Flat-rate — no hourly surprises", "All products & equipment included", "Free, no-obligation quotes", "Licensed, insured & background-checked"].map((b) => (
              <span key={b} className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-accent shrink-0" /> {b}</span>
            ))}
          </div>

          {/* ── Interactive price matrix (same component + data as the homepage — zero number
                 duplication). forceMount makes every tab's prices render in the static HTML,
                 so recurring/one-time/deep/move/post-construction are all crawlable via curl. ── */}
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Prices by Home Size, Service &amp; Frequency</h2>
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            Real 2026 flat-rate ranges by home size for every service — switch tabs to compare <strong>recurring</strong>,
            <strong> one-time</strong>, <strong>deep</strong>, <strong>move-in/out</strong>, and <strong>post-construction</strong>{" "}
            cleaning. Recurring is shown per visit at bi-weekly frequency; all prices include products and equipment.
          </p>
          <PricingTable />
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

          {/* ── Mid CTA ── */}
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 text-center shadow-lg mb-12">
            <Shield className="h-8 w-8 mx-auto mb-3 text-accent" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Get Your Exact Flat Price — Free</h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-2xl mx-auto">
              Tell us your home size and what you need, and we'll send a clear, no-obligation quote — usually within a few
              hours. No hidden fees, ever. 5.0 stars across 45 Google reviews, serving the DMV since 2015.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href={scrollLink}>Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call {PHONE}</a>
              </Button>
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
