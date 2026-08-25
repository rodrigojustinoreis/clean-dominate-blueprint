import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, CircleDollarSign, Clock3, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/cluster/cost.webp";
const OG_IMAGE = "/images/cluster/cost-og.jpg";

// Deep-clean prices by home size — consistent with the city cost pages.
const priceRows: [string, string, string][] = [
  ["Studio / 1 bedroom", "up to 900 sq ft", "$230 – $285"],
  ["2 bed · 2 bath", "1,300 – 1,700 sq ft", "$310 – $375"],
  ["3 bed · 2 bath", "1,700 – 2,200 sq ft", "$375 – $445"],
  ["4 bed · 2–3 bath", "2,200 – 3,000 sq ft", "$450 – $540"],
  ["5+ bed · 3+ bath", "3,000+ sq ft", "From $570"],
];

const drivers = [
  ["Home size & bathrooms", "Square footage and bathroom count are the biggest factors — bathrooms and kitchens are the most labor-intensive rooms in a deep clean."],
  ["How long since the last deep clean", "A home that hasn't had a thorough cleaning in a year takes far more work than one cleaned every few months. Heavier build-up means more time."],
  ["Condition & add-ons", "Inside the fridge and cabinets, interior windows, pet hair, or post-renovation dust add time and cost. Most are optional add-ons you choose."],
  ["First clean vs. maintained home", "A first-time deep clean is the most expensive because it resets the whole home. Once on a recurring plan, future deep cleans cost less because less accumulates."],
];

const faqs = [
  { q: "How much does a deep house cleaning cost?", a: "In the DMV (Maryland, DC, Northern Virginia), a one-time deep house cleaning typically runs from about $230 for a studio or 1-bedroom up to $540+ for a large 4–5 bedroom home. A typical 3-bedroom house lands around $375–$445. The price is driven by home size, number of bathrooms, and how long it's been since the last thorough cleaning — the more build-up, the more time it takes." },
  { q: "Why is a deep clean more expensive than a regular clean?", a: "A deep clean includes everything a standard clean does plus all the detailed work routine cleans skip: inside the oven and fridge, grout scrubbing, baseboards and trim, ceiling fans and vents, window tracks, and the build-up behind furniture. That extra detail takes significantly more time — usually 1.5 to 2.5 times longer than a standard clean — which is why a deep clean runs roughly 40–75% more for the same home." },
  { q: "How often do I need to pay for a deep clean?", a: "Only occasionally. Most homes need a deep clean a few times a year — or just once, before starting recurring service. After the first deep clean resets the home, lighter recurring maintenance cleans keep it that way at a lower per-visit cost, so you're not paying deep-clean prices every visit." },
  { q: "Can I get an exact deep cleaning price?", a: "Yes — the ranges above are typical, but an exact quote depends on your specific home and any add-ons. Tell us your home size, number of bathrooms, and roughly how long since the last deep clean, and we'll give you a clear, no-obligation price. There are no hidden fees." },
  { q: "Is a deep clean worth the money?", a: "For most homes, yes — especially the first one. A single deep clean removes months or years of built-up grime, improves indoor air quality, and resets the home to a baseline that recurring standard cleans can then maintain cheaply. It's most worth it before starting recurring service, before selling or hosting, after a renovation, or for allergy relief. A well-maintained home that just needs upkeep is usually better served by a standard clean." },
  { q: "Does a deep cleaning cost more than a standard cleaning?", a: "Yes. A deep clean typically costs more than a standard clean of the same home because it takes significantly longer — often 1.5 to 2.5 times as long — thanks to the detail work: inside appliances, grout, baseboards, vents, and behind furniture. The upside is that after one deep clean resets the home, ongoing standard cleans are quicker and cost less per visit." },
];

const HowMuchDeepCleaningCosts = () => {
  const { seoHelmet } = useSEO({
    title: "House Deep Cleaning Cost: 2026 Prices",
    description:
      "House deep cleaning costs $230–$540+ in 2026. See prices by home size, what raises the price, what's included, and when a deep clean is worth it for DMV homes.",
    canonical: "https://capitalcleancare.com/resources/how-much-does-deep-cleaning-cost",
    ogImage: OG_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="house deep cleaning cost, deep cleaning house cost, how much does a deep house cleaning cost, cost for deep cleaning house, deep cleaning price" />
      </Helmet>

      <ArticleSchema
        title="Deep Cleaning Cost (2026): $230–$540+ Price Guide"
        description="Real 2026 deep cleaning prices in the DMV by home size, what drives the cost, and how a deep clean compares to a standard clean."
        url="https://capitalcleancare.com/resources/how-much-does-deep-cleaning-cost"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Much Does a Deep Cleaning Cost", href: "/resources/how-much-does-deep-cleaning-cost" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How Much Does a Deep Cleaning Cost?" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A pristine, freshly deep-cleaned living room in soft daylight">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Much Does a House Deep Cleaning Cost in 2026?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Real 2026 deep cleaning prices by home size in Maryland, DC & Virginia</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <section className="relative mb-12 overflow-hidden rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-6 shadow-[0_22px_60px_-35px_rgba(2,132,199,0.5)] md:p-8" aria-labelledby="quick-cost-answer">
              <div aria-hidden="true" className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
              <div className="relative">
                <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-accent"><Sparkles className="h-4 w-4" /> Quick answer</p>
                <h2 id="quick-cost-answer" className="font-heading text-2xl font-bold leading-tight text-foreground md:text-3xl">A house deep cleaning costs about $230–$540+ in 2026</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                  For homes in Maryland, Washington DC, and Northern Virginia, a typical <strong>3-bedroom deep clean costs $375–$445</strong>. Smaller apartments start near <strong>$230</strong>, while large homes generally cost <strong>$540 or more</strong>. Home size, bathrooms, buildup, and optional inside-appliance cleaning create most of the price difference.
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    { icon: Home, label: "Small home", value: "$230–$285" },
                    { icon: CircleDollarSign, label: "Typical 3-bedroom", value: "$375–$445" },
                    { icon: Clock3, label: "Large home", value: "$540+" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="rounded-2xl border border-white bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                      <Icon className="mb-3 h-5 w-5 text-accent" />
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                      <p className="mt-1 text-xl font-bold text-foreground">{value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-relaxed text-muted-foreground">These are transparent DMV-area pricing ranges, not a universal national rate. Your written quote should reflect the actual size and condition of your home.</p>
              </div>
            </section>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Deep Cleaning Cost by Home Size</h2>
            <div className="overflow-x-auto mb-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 rounded-tl-xl">Home size</th>
                    <th className="text-left p-3">Approx. area</th>
                    <th className="text-left p-3 rounded-tr-xl">One-time deep clean</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((r, i) => (
                    <tr key={r[0]} className={i % 2 ? "bg-secondary/40" : "bg-white"}>
                      <td className="p-3 font-medium text-foreground">{r[0]}</td>
                      <td className="p-3 text-muted-foreground">{r[1]}</td>
                      <td className="p-3 font-semibold text-accent">{r[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mb-10">Typical DMV ranges for 2026. Exact price depends on bathrooms, condition, and add-ons. Prices in nearby cities vary slightly — see our city cost guides below.</p>
          </FadeInSection>

          <FadeInSection>
            <section className="mb-12" aria-labelledby="cost-vs-regular-cleaning">
              <h2 id="cost-vs-regular-cleaning" className="mb-4 font-heading text-3xl font-bold text-foreground">Deep Cleaning Cost vs. Regular Cleaning</h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                A deep clean generally costs more because it covers detailed buildup that a maintenance visit is not designed to remove. For the same home, it often takes <strong>1.5 to 2.5 times longer</strong> and can cost roughly <strong>40–75% more</strong> than a standard clean.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="font-heading text-lg font-bold text-foreground">Regular cleaning</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Routine surfaces, floors, bathrooms, kitchen exteriors, and general maintenance for a home already in good condition.</p>
                </div>
                <div className="rounded-2xl border border-accent/30 bg-accent/10 p-5">
                  <p className="font-heading text-lg font-bold text-foreground">Deep cleaning</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Baseboards, detailed buildup, grout, vents, fixtures, and selected inside-appliance or cabinet work that requires additional time.</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Compare the scopes in our <Link to="/resources/deep-cleaning-vs-regular-cleaning" className="font-semibold text-accent underline hover:no-underline">deep cleaning vs. regular cleaning guide</Link> or review <Link to="/resources/what-is-included-in-a-deep-cleaning" className="font-semibold text-accent underline hover:no-underline">everything included in a professional deep clean</Link>.</p>
            </section>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What Drives the Price</h2>
            <div className="space-y-4 mb-10">
              {drivers.map(([t, d]) => (
                <div key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-1" />
                  <div><p className="font-semibold text-foreground">{t}</p><p className="text-sm text-muted-foreground leading-relaxed">{d}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">When a Deep Clean Is Worth the Investment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A deep clean costs more than a routine visit, but it buys back more too: a full weekend of your own
              scrubbing, a healthier home, and — before a move or a sale — real leverage. These are the moments the
              spend pays off most clearly:
            </p>
            <ul className="space-y-2.5 mb-4">
              {[
                "Your first professional clean. This is where the return is highest — one visit removes buildup that has accumulated over months or years, and resets the whole home to a true baseline you can then maintain cheaply.",
                "Before starting recurring service. A deep clean first means your ongoing standard cleans stay quick and affordable, instead of every visit fighting old grime.",
                "Before selling, listing, or hosting. A spotless home photographs better and shows better, and there is no faster way to get guest-ready before the holidays than a single top-to-bottom reset.",
                "After a renovation or an illness in the house. Construction dust and lingering germs settle into vents, fabric, and every surface — exactly the detail work a deep clean targets.",
                "For allergy and asthma relief. Removing dander, dust mites, and settled pollen from baseboards, vents, and behind furniture measurably lowers the indoor allergen load.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Put in those terms, a $375–$445 deep clean for a typical 3-bedroom home is often the best-value visit a
              household books all year — it's the one that makes every clean after it faster and cheaper.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">How to Keep Deep-Clean Costs Down</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You control several of the levers that move a deep-clean price. A few habits keep you near the bottom of
              each range instead of the top:
            </p>
            <ul className="space-y-2.5 mb-4">
              {[
                "Deep clean once, then maintain. After the initial reset, switch to a recurring standard clean — it costs far less per visit and stops buildup before it ever needs another deep clean.",
                "Don't wait years between deep cleans. The longer the gap, the more buildup, and buildup is the single biggest thing that pushes a quote to the top of its range.",
                "Declutter surfaces before the team arrives. Cleaners can't scrub a counter buried under mail and chargers — ten minutes of clearing keeps the visit efficient and the quote tight.",
                "Book recurring for preferred pricing. Weekly and bi-weekly clients get lower per-visit rates than one-off bookings.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-10">
              The pattern most DMV households settle into is one deep clean a year (or a quarterly deep clean for busy,
              high-traffic homes) plus a{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring standard clean</Link>{" "}
              in between. See the full comparison in{" "}
              <Link to="/resources/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs regular cleaning</Link>, or
              how the timeline affects labor in{" "}
              <Link to="/resources/how-long-does-deep-cleaning-take" className="text-accent underline hover:no-underline">how long a deep cleaning takes</Link>.
            </p>
          </FadeInSection>

          <BlogInlineCTA headline="Want an exact deep cleaning price?" subtext="Tell us your home size and we'll give you a clear, no-obligation quote — no hidden fees. Eco-friendly, background-checked cleaners across Bethesda, Rockville, Silver Spring & Gaithersburg." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                See{" "}
                <Link to="/resources/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs regular cleaning</Link>,{" "}
                <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>, or your city's prices:{" "}
                <Link to="/resources/house-cleaning-cost-bethesda-md" className="text-accent underline hover:no-underline">Bethesda</Link>,{" "}
                <Link to="/resources/house-cleaning-cost-rockville-md" className="text-accent underline hover:no-underline">Rockville</Link>,{" "}
                <Link to="/resources/house-cleaning-cost-silver-spring-md" className="text-accent underline hover:no-underline">Silver Spring</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Get Your Deep Cleaning Quote</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Maryland homeowners can also see{" "}<Link to="/resources/deep-cleaning-cost-maryland" className="underline text-primary-foreground/90 hover:text-white">2026 deep cleaning prices in Maryland</Link>. Eco-friendly{" "}<Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}across Maryland, DC, and Northern Virginia, including{" "}<Link to="/locations/arlington-va/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning in Arlington, VA</Link> — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug="how-much-does-deep-cleaning-cost" />
      <StickyCTA />
    </Layout>
  );
};

export default HowMuchDeepCleaningCosts;
