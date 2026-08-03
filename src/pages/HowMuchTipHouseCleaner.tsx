import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/cleaner-thank-you-tip.webp";
const URL = "https://capitalcleancare.com/resources/how-much-tip-house-cleaner";

const toc: { href: string; label: string }[] = [
  { href: "#how-much", label: "How much to tip: the quick reference table" },
  { href: "#when-expected", label: "When tipping is and isn't expected" },
  { href: "#holiday-tipping", label: "Holiday tipping and special occasions" },
  { href: "#recurring-vs-one-time", label: "Tipping recurring teams vs one-time cleans" },
  { href: "#other-ways", label: "Other ways to show appreciation" },
];

const tippingTable: { service: string; tip: string }[] = [
  { service: "One-time standard clean", tip: "15-20% of the cleaning cost" },
  { service: "Recurring weekly or biweekly service", tip: "No tip expected per visit; an occasional or holiday tip is a kind gesture" },
  { service: "Deep clean or move-out clean", tip: "15-20%, or a flat $20-$40 for the team" },
  { service: "Holiday season", tip: "The cost of one full visit is the classic annual bonus" },
];

const otherWays: { title: string; text: string }[] = [
  { title: "Leave a Google review", text: "A specific, detailed review is the most valuable thing a happy client can give a local cleaning company. It costs nothing, takes three minutes, and does more for the crew's future than any tip on the counter." },
  { title: "Refer a neighbor", text: "Word of mouth is how small companies grow. One referral can mean months of steady work for the same crew that cleans your home." },
  { title: "Rebook consistently", text: "Steady clients are what let a company schedule crews fairly and pay them well. A predictable calendar is a gift in this industry." },
  { title: "Leave a note", text: "Crews keep them. A two-line thank-you taped to the counter gets photographed and shared with the whole team, and it outlasts any bill." },
];

const faqs = [
  { q: "Do you tip for a deep cleaning?", a: "If you choose to tip, a deep clean is the visit where it is most appreciated: these are the longest, most physical jobs a crew does. The 15-20% guideline still applies, but since deep cleans typically run $230 to $540+, most people switch to a flat $20 to $40 for the team instead. Either is a generous gesture, and neither is required." },
  { q: "Should I tip in cash or through an app?", a: "Cash handed over or left on the counter with a short note is the most direct route, and it is what most cleaners prefer. If you never carry cash, ask the company how it handles tips; many can add one to your card payment. At Capital Clean Care, tips are never expected, and any tip a client leaves, cash or card, is passed to the crew in full." },
  { q: "Do I tip each cleaner or the team as a whole?", a: "One combined tip for the team is completely fine, and it is how most clients do it: crews split it evenly among everyone who worked on the home. If you prefer to tip per person, $10 to $20 per cleaner per visit is the standard. There is no need to calculate who scrubbed which bathroom." },
  { q: "Should I tip on a discounted first clean?", a: "If you decide to tip, base it on the regular price rather than the discounted one. The crew does the same work either way, and a first clean is usually the hardest visit because the home has not been on a professional schedule yet. That said, if you are still deciding whether to keep the service, no cleaner expects a tip on a trial visit." },
  { q: "Is it rude not to tip a house cleaner?", a: "No. Tipping house cleaners is genuinely optional in the US, and professional companies price their services so crews earn a fair wage without tips. If tipping is not your style, a Google review, a referral, or simply rebooking does at least as much good. What matters to a crew is being treated with warmth and respect, not what is on the counter." },
];

const HowMuchTipHouseCleaner = () => {
  const { seoHelmet } = useSEO({
    title: "How Much Should You Tip Your House Cleaner? (2026)",
    description:
      "How much to tip your house cleaner: 15-20% or $10-$20 per cleaner is the norm. When tipping is expected, holiday bonuses, and what to do for teams.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how much to tip house cleaner, tipping house cleaners, do you tip house cleaners, holiday tip cleaning lady, tip cleaning crew" />
      </Helmet>
      <ArticleSchema
        title="How Much Should You Tip Your House Cleaner? (2026)"
        description="The honest guide to tipping house cleaners: standard amounts by service type, when tipping is expected, holiday bonuses, and appreciation that matters as much as cash."
        url={URL}
        datePublished="2026-07-08"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="how much to tip your house cleaner — thank-you card and tip on a clean counter">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Tips & Advice</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Much Should You Tip Your House Cleaner?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The honest etiquette guide: standard amounts, holiday bonuses, and when to skip it guilt-free</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The common range in the US is <strong>15-20% of the cleaning cost, or $10 to $20 per cleaner per visit.</strong>{" "}
              Tipping a house cleaner is always appreciated and never required, and no reputable company will make you feel
              otherwise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Still, "never required" leaves a lot of gray area: what about recurring crews you see every two weeks, a brutal
              move-out clean, or the holidays? This guide covers the actual etiquette, with real numbers, plus the
              alternatives that mean just as much to a crew as cash.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-4 mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Looking for a team worth thanking? <a href="/#quote" className="text-accent font-semibold underline hover:no-underline">Get a free quote</a>{" "}
                from Capital Clean Care, rated 5.0 stars across 45 Google reviews.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <nav aria-label="Table of contents" className="border border-border rounded-2xl p-5 bg-secondary/30 mb-10">
              <p className="font-heading font-bold text-foreground mb-2 text-sm uppercase tracking-wider">In this guide</p>
              <ul className="space-y-1.5">
                {toc.map((t) => (
                  <li key={t.href}>
                    <a href={t.href} className="text-sm text-accent underline hover:no-underline">{t.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="how-much" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">How Much to Tip: The Quick Reference Table</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Tipping a house cleaner works like tipping in most US service settings: 15-20% is the benchmark, and flat
              amounts are just as welcome. On a standard clean of a 1-2 bedroom home, which typically runs $150 to $180, that
              works out to roughly $25 to $35.
            </p>
            <div className="border border-border rounded-2xl overflow-hidden mb-6">
              <div className="hidden sm:grid sm:grid-cols-2 bg-secondary/50 px-5 py-3">
                <p className="font-heading font-bold text-foreground text-sm">Type of service</p>
                <p className="font-heading font-bold text-foreground text-sm">Typical tip</p>
              </div>
              {tippingTable.map((row) => (
                <div key={row.service} className="grid grid-cols-1 sm:grid-cols-2 gap-1 px-5 py-4 border-t border-border">
                  <p className="font-semibold text-foreground text-sm">{row.service}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{row.tip}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Two notes on the table. First, these are guidelines for a thank-you, not invoices: any amount is appreciated,
              and a $10 bill with a kind note lands better than you might guess. Second, for bigger jobs like deep cleans,
              which run $230 to $540+, most people skip the percentage math and give a flat amount per cleaner instead.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="when-expected" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">When Tipping Is and Isn't Expected</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Whether a tip is even anticipated depends mostly on who owns the business. An owner-operator sets her own
              prices and builds her margin into the rate, so a tip is a pleasant surprise rather than an expectation. Cleaners
              employed by a company do not set the prices, so a tip goes further and lands directly with the person who did
              the work.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Either way, tipping a house cleaner is never required, and skipping it is not rude. Unlike restaurant servers,
              professional cleaners are paid a full wage for the job, and a reputable company builds fair pay into its
              pricing rather than counting on your generosity to cover the gap.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Company policies on handling tips differ, so it is worth asking. At Capital Clean Care, tips are never
              expected, and when a client chooses to leave one, 100% of it goes to the crew that cleaned the home.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="holiday-tipping" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Holiday Tipping and Special Occasions</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The classic holiday rule for any recurring home service is the cost of one full visit as an annual bonus. If
              your biweekly clean is $160, a $160 holiday tip in December is the traditional gesture, and it is how many of
              our longtime clients in Bethesda and Silver Spring thank the crew they have seen all year.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If a full visit is outside the budget, scale it down without guilt: half a visit, a gift card, or homemade
              cookies with a card and a $20 inside all land beautifully. Timing matters more than size. The last scheduled
              visit before the holidays is the natural moment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Special occasions deserve the same instinct: a cleaner who rescued your home the morning of a big party, stayed
              late on a chaotic move-out day, or handled something well beyond the checklist has earned more than the
              invoice says.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Want a crew that earns the thank-you note?" subtext="Eco-friendly, background-checked cleaners with a 24-hour re-clean guarantee, serving Bethesda, Rockville, Silver Spring and the DMV since 2015. Flat quotes in about 60 seconds." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 id="recurring-vs-one-time" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Tipping Recurring Teams vs One-Time Cleans</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For a one-time clean, if you tip, it happens at the time of service: cash on the counter or added when you
              pay. The cleaner may never see you again, so there is no later moment to make up for it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Recurring service changes the relationship. Nobody expects a tip every week or every two weeks; over a year
              that would add up to hundreds of dollars nobody asked you for. The same crew learns your home, your pets, and
              your preferences, and appreciation naturally shifts to occasional gestures: a tip after an especially tough
              visit, a cold drink on a summer day, and the holiday bonus covered above.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When a team of two or three cleans your home, one combined tip is perfectly fine; crews split it evenly. If you
              would rather tip per person, $10 to $20 per cleaner per visit remains the standard.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="other-ways" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Other Ways to Show Appreciation That Matter as Much</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              For a small local company, some gestures genuinely outweigh cash:
            </p>
            <div className="space-y-4 mb-6">
              {otherWays.map((w) => (
                <div key={w.title} className="border border-border rounded-2xl p-5 bg-white">
                  <p className="font-heading font-bold text-foreground mb-1.5 flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0" /> {w.title}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.text}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you love your cleaner, the best long-term thank-you is keeping them on the calendar. Our{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring cleaning plans</Link>{" "}
              keep the same team coming back at a lower per-visit rate, and if you are unsure of the rhythm, here is{" "}
              <Link to="/resources/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often to schedule a cleaning service</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14 mb-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Meet the Crews Behind the 5.0 Stars</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Bonded, insured, background-checked teams cleaning with EPA Safer Choice products since 2015. 500+ homes,
                45 five-star Google reviews, and a 24-hour re-clean guarantee on every visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="tel:+12407042551">Call (240) 704-2551</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> Tipping FAQ
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="how-much-tip-house-cleaner" />
      <StickyCTA />
    </Layout>
  );
};

export default HowMuchTipHouseCleaner;
