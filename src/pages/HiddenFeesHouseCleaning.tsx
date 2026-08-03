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

const HERO_IMAGE = "/images/blog/hidden-fees-hero.webp";
const URL = "https://capitalcleancare.com/resources/hidden-fees-house-cleaning";

const faqs = [
  { q: "Are hidden fees in house cleaning illegal?", a: "Usually not, which is the frustrating part. Deceptive pricing can cross into consumer protection violations, but most hidden fees live in fine print you technically agreed to. Your practical defense is prevention: a flat written quote, disclosed policies, and refusing any company that will not put its price in writing." },
  { q: "What is a reasonable cleaning service cancellation fee?", a: "A fair policy asks for 24 to 48 hours of notice and reschedules for free within that window. A modest fee for a same-day cancellation is understandable, since the team already reserved your slot. Charging the full visit price or demanding 72-plus hours of notice is a red flag." },
  { q: "Should I pay extra for cleaning supplies?", a: "No. Professional house cleaners bring their own products and equipment, and that cost belongs inside the quoted price. The only fair exception is a specific product you request. Ask what they use, too: we use EPA Safer Choice eco-friendly cleaning products at no extra charge." },
  { q: "How do I compare cleaning quotes fairly?", a: "Force every company onto the same scope: same rooms, same tasks, same frequency, first visit included. Then compare the total written price, not the teaser number. A quote is only comparable when nothing is left to be \"confirmed on arrival.\"" },
];

const HiddenFeesHouseCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Hidden Fees in House Cleaning: 8 Charges to Watch For",
    description:
      "Hidden fees in house cleaning services: cancellation penalties, supply charges, bait-and-switch quotes & how to get a transparent price.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="hidden fees in house cleaning, cleaning service cancellation fee, bait and switch cleaning quote, transparent cleaning pricing, house cleaning extra charges, cleaning service contract terms" />
      </Helmet>
      <ArticleSchema
        title="Hidden Fees in House Cleaning: 8 Charges to Watch For"
        description="The 8 most common hidden fees in house cleaning services: first-visit surcharges, supply fees, cancellation penalties, bait-and-switch quotes, and the questions that force price transparency before you book."
        url={URL}
        datePublished="2026-07-10"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Magnifying glass over an invoice revealing hidden fees in house cleaning">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Hidden Fees in House Cleaning: 8 Charges to Watch For</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Cancellation penalties, supply charges, bait-and-switch quotes, and how to get a transparent price</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Hidden fees in house cleaning are how a $130 estimate becomes a $300 invoice, and they are the most common complaint
              we hear from homeowners comparing services. The usual house cleaning extra charges are first-visit surcharges,
              supply fees, and a cleaning service cancellation fee buried in fine print. Before you book anyone in Montgomery
              County, Maryland, here are the eight charges to watch for, and the questions that make companies show their real
              price.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To be clear, not every add-on is a scam, and some extras are legitimate. The problem with hidden fees in house
              cleaning is the word hidden: you find out after the team is already standing in your Rockville or Silver Spring
              kitchen, when saying no feels impossible.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">The 8 Most Common Hidden Fees in House Cleaning</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After years of quoting homes across Maryland, these are the eight charges that surprise people most often.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">1. The undisclosed first-visit surcharge</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A higher first visit is normal and honest when it is explained up front, because the first clean is really a deep
              clean. We break down the math in{" "}
              <Link to="/resources/why-first-house-cleaning-costs-more" className="text-accent underline hover:no-underline">why your first house cleaning costs more</Link>.
              The hidden version is different: you book at the standard rate, and the surcharge appears only after the team walks
              through your door.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">2. Supply and equipment fees</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Reputable professional cleaners include products and equipment in the price. A separate line item for "supplies" or
              "equipment rental" that was never mentioned in the quote is pure margin. The one fair exception is a specialty
              product you specifically requested, agreed to in writing beforehand.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">3. Travel or trip charges</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If your home sits inside the company's advertised service area, travel should be free. A fuel or trip fee that
              materializes on the invoice for a house in Gaithersburg or Germantown, well inside the normal coverage map, is a fee
              for existing.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">4. Cancellation and rescheduling fees</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A cleaning service cancellation fee is defensible when the notice window is reasonable, typically 24 to 48 hours,
              and disclosed at booking. The hidden version demands 72 hours or charges the full visit price, and you only discover
              it when life happens and you need to move a date.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">5. Credit card and processing surcharges</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some companies quietly add a few percent when you pay by card instead of cash or check. Legal in many cases, but it
              belongs in the quote, not as a surprise at checkout. If a company prefers cash that strongly, ask yourself why.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">6. The "condition fee" added on arrival</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The team arrives, looks around, and declares the home dirtier than expected, adding $50 or more on the spot.
              Sometimes homes genuinely are heavier than described. The honest fix is a price confirmed before work starts, based
              on photos or a walkthrough, never a mid-job renegotiation.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">7. Pet fees</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pet hair takes real time, and honest companies simply build it into the quote when you tell them about your golden
              retriever. A pet fee that appears only after the crew meets the dog is a fee they always intended to charge.
            </p>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">8. Contract lock-ins and early termination penalties</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Read the cleaning service contract terms before your card goes on file. Some recurring plans hide minimum visit
              commitments, auto-renewals, and penalties that claw back your discount if you cancel early. A discount you cannot
              leave is not a discount. It is a lease.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">The Bait-and-Switch Quote: How a $130 Estimate Becomes $300</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The bait and switch cleaning quote works because it wins the phone call. You collect three quotes for your 3 bedroom
              home, two land near the real market, and one says $130. Guess who gets the booking.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here is the problem with that number. In Maryland, a typical 3 bedroom deep clean runs <strong>$375 to $445</strong>,
              and even a standard clean of a small 1 to 2 bedroom home runs <strong>$150 to $180</strong>. You can check every
              range in our guide to{" "}
              <Link to="/resources/house-cleaning-prices-maryland-2026" className="text-accent underline hover:no-underline">house cleaning prices in Maryland</Link>.
              A $130 quote for a 3 bedroom home is not a deal. It is below the cost of doing the job properly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              So the price gets corrected on your doorstep: a condition fee here, a mandatory first-visit deep clean there, a
              supply charge on top, and the invoice lands at $300 or more. The company never intended to clean your home for
              $130. The bait and switch cleaning quote existed only to beat honest companies to your calendar.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The defense is simple: treat any quote dramatically below market as a red flag, and insist on a flat, written price
              before booking. Our comparison of{" "}
              <Link to="/resources/flat-rate-vs-hourly-house-cleaning" className="text-accent underline hover:no-underline">flat rate vs hourly house cleaning</Link>{" "}
              explains why a locked flat number is your best protection against a growing bill.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Subscription Traps and Cancellation Penalties to Avoid</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recurring service is genuinely the best value in cleaning, which is exactly why sketchy operators use it as a trap.
              Watch the cleaning service contract terms for four things:
            </p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Auto-renewal you did not choose</strong>, where "pause" and "cancel" mysteriously require a phone call during business hours</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Minimum visit commitments</strong>, such as twelve required cleanings before you can leave</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Discount claw-backs</strong>, where cancelling means retroactively repaying the difference on past visits</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span><strong className="text-foreground">Skip penalties</strong>, a cleaning service cancellation fee charged even when you gave generous notice</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Here is the standard to hold everyone to: recurring discounts should reward loyalty, not imprison it. Real plans
              work like ours do, with weekly service saving up to 25%, biweekly 15%, and monthly 5%, no lock-in required. That is
              how{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning service</Link>{" "}
              pricing should look: you stay because the work is good, not because the contract says you must.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Questions That Force Price Transparency Before You Book</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Ask these nine questions before you hand over a card number. Companies with transparent cleaning pricing answer them
              instantly. Companies with hidden fees in house cleaning start hedging around question three.
            </p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Is this a flat price or an hourly estimate, and can I have it in writing?</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Exactly which tasks are included? Compare the answer against{" "}
                  <Link to="/resources/what-is-included-in-a-standard-cleaning" className="text-accent underline hover:no-underline">what is included in a standard cleaning</Link>.</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Are supplies and equipment included in the price?</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Is the first visit priced differently, and by exactly how much?</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>What is your cancellation and rescheduling policy, in writing?</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Are there extra charges for pets, parking, or paying by card?</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Under what circumstances can the price change after booking?</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Are you licensed and insured, and can you show proof?</span>
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span>Is there a satisfaction guarantee if something gets missed?</span>
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We built the quote process at Capital Clean Care to answer all nine before you ever ask, because we got tired of
              hearing what happened to neighbors who did not ask. If you want to see what a straight answer looks like, request a
              free flat-rate quote at{" "}
              <a href="/#quote" className="text-accent underline hover:no-underline">capitalcleancare.com</a>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Tired of quotes that grow on your doorstep?" subtext="Get one flat, written price that includes supplies, equipment, and zero surprise fees, answered up front, before you ever hand over a card number." ctaLabel="Get My Transparent Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">What a Fair, Transparent Cleaning Quote Looks Like</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A trustworthy cleaning company quote has four traits, and they are easy to verify:
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">One flat number tied to a written scope.</strong> The price names the service,
              the rooms, and the tasks. Deep cleans are scoped like real{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning</Link>,
              standard cleans like standard cleans, with no blurry middle where fees breed.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Specialty jobs priced as specialty jobs.</strong> A{" "}
              <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-out cleaning</Link>{" "}
              or post-renovation clean should carry its own flat price up front, not a standard quote with "adjustments" later.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Policies in plain English.</strong> Cancellation windows, reschedule rules, and
              guarantee terms stated before booking, not linked in size-8 font after payment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">Numbers that match the local market.</strong> In Montgomery County, a standard 1
              to 2 bedroom clean at $150 to $180 and a 3 bedroom deep clean at $375 to $445 are honest math. Quotes far below that
              range are usually missing information you will pay for later.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              That is transparent cleaning pricing in full: nothing to discover on your doorstep, nothing to dispute on your
              invoice.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you would rather never audit an invoice again, Capital Clean Care serves Rockville, Bethesda,{" "}
              <Link to="/locations/silver-spring-md" className="text-accent underline hover:no-underline">Silver Spring</Link>,
              Gaithersburg, and the rest of Montgomery County, plus Washington DC and Northern Virginia, with flat-rate pricing
              that includes supplies, equipment, and zero surprise fees. We are family-owned, licensed and insured, our team is
              background checked, and we clean with EPA Safer Choice eco-friendly products that are safe for kids and pets, all
              backed by a satisfaction guarantee.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 md:p-8 text-center mt-8">
              <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">Zero surprise fees, in writing</h3>
              <p className="text-primary-foreground/80 text-sm mb-5 max-w-md mx-auto">Supplies, equipment, and policies all included in one transparent flat-rate quote, backed by a satisfaction guarantee.</p>
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
              <Sparkles className="h-6 w-6 text-accent" /> FAQ: Cleaning Fees & Pricing
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="hidden-fees-house-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default HiddenFeesHouseCleaning;
