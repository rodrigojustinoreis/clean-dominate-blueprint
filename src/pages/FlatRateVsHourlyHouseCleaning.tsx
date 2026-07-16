import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/flat-vs-hourly-hero.webp";
const URL = "https://capitalcleancare.com/resources/flat-rate-vs-hourly-house-cleaning";

const hourlyWins: string[] = [
  "Your home is small, tidy, and professionally cleaned recently",
  "You only want a partial job, like \"kitchen and bathrooms only\"",
  "You can set a hard cap: \"stop at two hours, do what you can\"",
];

const compareRows: string[][] = [
  ["1 to 2 bedroom condo, standard clean (Silver Spring)", "2 to 2.5 hours: $160 to $200", "$150 to $180", "Flat rate"],
  ["3 bedroom home, first deep clean (Rockville)", "5 to 6 hours: $400 to $480, can run longer", "$375 to $445", "Flat rate"],
  ["4 to 5 bedroom home, deep clean (Potomac)", "Open ended, often 7+ hours", "$540+, locked before the visit", "Flat rate"],
  ["3 bedroom home, biweekly upkeep (Gaithersburg)", "Varies visit to visit", "Standard rate minus a 15% biweekly discount", "Flat rate"],
  ["\"Two hours on the kitchen and baths\" budget clean", "Capped at whatever you approve", "Rarely offered for partial scopes", "Hourly"],
];

const faqs = [
  { q: "Is flat rate or hourly cheaper for house cleaning?", a: "For a full standard or deep clean of a typical home, flat rate is usually equal or cheaper once real hours are counted, and it cannot grow mid-job. Hourly can win only on small partial jobs with a hard cap, like two focused hours on a kitchen and bathrooms." },
  { q: "What is the average cost of house cleaning per hour in Maryland?", a: "There is no single hourly number worth trusting, because rates depend on team size, insurance, supplies, and speed. Compare total job price instead: a standard 1 to 2 bedroom clean typically runs $150 to $180 in Montgomery County, regardless of which pricing model produced that number." },
  { q: "Can a flat rate change after I book?", a: "Only if the scope was described inaccurately, for example a home listed as \"lightly lived in\" that has not been cleaned in a year. A reputable company confirms any adjustment with you before starting work, never on the invoice afterward. Get that policy in writing when you book." },
  { q: "Do I tip differently on flat rate versus hourly cleanings?", a: "No, tipping etiquette is the same under both models. It is always optional and based on the result, not the pricing structure. If you are unsure what is customary in our area, our guide on how much to tip your house cleaner covers it." },
];

const FlatRateVsHourlyHouseCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Flat Rate vs. Hourly House Cleaning: Which Saves You More?",
    description:
      "Flat rate vs hourly house cleaning compared: real costs, pros and cons, and which pricing model protects your budget.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="flat rate vs hourly house cleaning, hourly house cleaning rates, flat fee house cleaning, house cleaning pricing models, average cost of house cleaning per hour, cleaning service quote" />
      </Helmet>
      <ArticleSchema
        title="Flat Rate vs. Hourly House Cleaning: Which Saves You More?"
        description="Flat rate vs hourly house cleaning compared on real Maryland homes: how each pricing model works, a cost comparison table, red flags in any quote, and which model protects your budget."
        url={URL}
        datePublished="2026-07-10"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Calculator and clock beside cleaning supplies, flat rate vs hourly house cleaning pricing">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Flat Rate vs. Hourly House Cleaning: Which Saves You More?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Real costs, pros and cons, and which pricing model protects your budget</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Flat rate vs hourly house cleaning comes down to one question: who carries the risk of a slow day, you or the
              company? With hourly house cleaning rates, the final bill grows with every extra minute. With flat fee house
              cleaning, the price is locked before anyone rings your doorbell. For most homes in Montgomery County, Maryland,
              flat rate wins on predictability, and this guide shows exactly when hourly can still make sense.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The flat rate vs hourly house cleaning debate matters more here than in most markets. Homes in Bethesda, Rockville,
              and Potomac range from compact condos to 5,000 square foot colonials, and the wrong pricing model on the wrong
              house can cost you real money.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Flat Rate vs. Hourly Cleaning: The Key Difference in 30 Seconds</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              House cleaning pricing models boil down to two approaches:
            </p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Hourly:</strong> you pay for time. The cleaning service quotes a rate per hour, per cleaner or per team, and bills for however long the job actually takes.</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Flat rate:</strong> you pay for an outcome. The company quotes one price for a defined scope, usually based on bedrooms, bathrooms, square footage, and condition, and the number does not move with the clock.</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That is the entire flat rate vs hourly house cleaning difference: hourly bills for effort, flat rate bills for
              results. Everything else, including which one saves you money, flows from who absorbs the overrun when a job runs
              long.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">How Hourly Pricing Works (and Where It Surprises You)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With hourly house cleaning rates, you never really get a price. You get an estimate. The house cleaner says
              "probably three hours," you mentally multiply, and you book. If the job takes four and a half hours, the bill grows
              by 50%, and you find out at the end.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              People searching the average cost of house cleaning per hour also discover the ranges are all over the map, because
              hourly rates vary with team size, experience, insurance, and whether supplies are included. A bargain hourly rate
              attached to a slow or undertrained team is no bargain at all. Speed is invisible in an hourly quote, and speed is
              what you are actually buying.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">When hourly works in your favor</h3>
            <ul className="space-y-2.5 mb-6">
              {hourlyWins.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">When hourly stings</h3>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>First visits and deep cleans, where hidden buildup blows up estimates. The same catch-up work that explains{" "}
                  <Link to="/resources/why-first-house-cleaning-costs-more" className="text-accent underline hover:no-underline">why your first house cleaning costs more</Link>{" "}
                  is what turns a three-hour estimate into a five-hour invoice.</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Phone estimates with no walkthrough, photos, or written assumptions</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Any quote with no cap, because the meter simply runs</span>
              </li>
            </ul>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">How Flat-Rate Pricing Works (and Why Companies Offer It)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Flat fee house cleaning prices the home, not the hours. A serious company asks about bedrooms, bathrooms, square
              footage, pets, and when the home was last professionally cleaned, then commits to a number. If the team hits a slow
              day, the company absorbs it. Your price does not change.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Why would professional cleaners take that risk? Because after enough homes, they know their numbers. Predictable
              pricing also means predictable scheduling, fewer billing disputes, and customers who stay for years instead of
              arguing over minutes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The honest concern with flat rates is the opposite incentive: does a fixed price tempt a team to rush? The
              protection is a written task list and a guarantee. Compare any flat cleaning service quote against the checklist in{" "}
              <Link to="/resources/what-is-included-in-a-standard-cleaning" className="text-accent underline hover:no-underline">what is included in a standard cleaning</Link>, and confirm the company will return and fix anything missed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That combination, a flat number plus a written scope plus a satisfaction guarantee, is exactly how we price at
              Capital Clean Care. If you want to see your own number before committing to anything, you can grab a free quote at{" "}
              <a href="/#quote" className="text-accent underline hover:no-underline">capitalcleancare.com</a>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Want a number that cannot grow mid-job?" subtext="Get a flat, written cleaning quote for your home in about 60 seconds: one price, a written scope, and a satisfaction guarantee across Rockville, Bethesda & Silver Spring." ctaLabel="Get My Flat Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Cost Comparison Table: Real Scenarios for Maryland Homes</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here is how flat rate vs hourly house cleaning plays out on real Montgomery County homes. Flat-rate figures reflect
              typical Maryland ranges from our guide to{" "}
              <Link to="/resources/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">house cleaning prices in Maryland</Link>.
              The hourly column is illustrative, assuming a two-person team billing $80 per hour, so you can see how the math
              behaves.
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="text-left p-3 rounded-tl-xl">Scenario</th>
                    <th className="text-left p-3">Hourly team (illustrative, $80/hr)</th>
                    <th className="text-left p-3">Flat rate (typical Maryland)</th>
                    <th className="text-left p-3 rounded-tr-xl">Safer bet</th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r, i) => (
                    <tr key={r[0]} className={i % 2 ? "bg-secondary/40" : "bg-white"}>
                      <td className="p-3 font-medium text-foreground">{r[0]}</td>
                      <td className="p-3 text-muted-foreground">{r[1]}</td>
                      <td className="p-3 text-muted-foreground">{r[2]}</td>
                      <td className="p-3 font-semibold text-accent">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Notice the pattern. Hourly only clearly wins when you are deliberately buying less than a full clean. The moment the
              whole house is in scope, especially on a deep clean, the flat number is usually equal or better, and it is
              guaranteed not to grow.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Which Model Protects Your Budget? (By Home Type)</h2>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Condos and small apartments</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Either model can work, but there is little upside to hourly here. A standard 1 to 2 bedroom flat rate of $150 to
              $180 leaves an hourly team almost no room to beat it, and the flat quote removes the risk entirely.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Family homes with kids and pets</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A 3 or 4 bedroom home in{" "}
              <Link to="/locations/bethesda-md" className="text-accent underline hover:no-underline">Bethesda</Link>{" "}
              or Germantown with kids, a dog, and a busy week is exactly where hourly estimates slip. Toy pickup, pet hair, and a
              messy playroom all add invisible minutes. Flat fee house cleaning absorbs that variability so your budget does not
              have to.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">First cleans, post-renovation, and move-outs</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              These are the highest-variance jobs in the industry, which makes them the worst candidates for an open meter. Get a
              flat, written number for any deep clean or{" "}
              <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-out cleaning</Link>,
              ideally after sharing photos or a video walkthrough.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">Recurring service</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recurring is where flat pricing shines brightest. Your rate is stable visit after visit, and schedule discounts
              stack on top: weekly saves up to 25%, biweekly 15%, and monthly 5%. Here is how{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning service</Link>{" "}
              plans work in practice.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Red Flags in Any Cleaning Quote</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whichever of the house cleaning pricing models you choose, walk away from these:
            </p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">An hourly quote with no cap and no walkthrough.</strong> That is not a price. It is a blank check.</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">A cleaning service quote far below local ranges.</strong> A $130 quote for a 3 bedroom home is bait, not a bargain. Our guide to{" "}
                  <Link to="/resources/hidden-fees-house-cleaning" className="text-accent underline hover:no-underline">hidden fees in house cleaning</Link>{" "}
                  shows how those quotes grow after you book.</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">A vague scope.</strong> "Full house clean" is not a scope. A task list is a scope.</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">"We will confirm the price on arrival."</strong> By then your afternoon is committed and your leverage is gone.</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">No proof of license and insurance.</strong> If the price conversation is slippery, the liability conversation will be worse.</span>
              </li>
            </ul>
          </FadeInSection>

          <FadeInSection>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you would rather skip the estimate roulette entirely, Capital Clean Care offers transparent flat-rate pricing
              across Rockville, Bethesda, Silver Spring, Gaithersburg, and the rest of Montgomery County, plus Washington DC and
              Northern Virginia. We are a family-owned, licensed and insured local company, our team is background checked, and we
              clean with EPA Safer Choice eco-friendly products that are safe for kids and pets. Every visit is backed by a
              satisfaction guarantee.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center mt-8">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">One flat number, locked before anyone rings the doorbell</h3>
              <p className="text-primary-foreground/80 text-sm mb-5 max-w-md mx-auto">Get your free flat-rate quote in about 60 seconds, with a written scope and a satisfaction guarantee.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <a href="/#quote">Get a Free Quote</a>
                </Button>
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
                  <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> FAQ: Flat Rate vs. Hourly House Cleaning
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="flat-rate-vs-hourly-house-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default FlatRateVsHourlyHouseCleaning;
