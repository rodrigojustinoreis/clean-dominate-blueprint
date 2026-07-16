import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Clock, Home, PawPrint, Phone, Sparkles } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/maryland-home-exterior.webp";
const URL = "https://capitalcleancare.com/resources/deep-cleaning-cost-maryland";

const prices: { size: string; price: string; time: string }[] = [
  { size: "Studio / 1 bedroom", price: "$230 – $290", time: "2–3 hours" },
  { size: "2 bedroom", price: "$290 – $370", time: "3–4 hours" },
  { size: "3 bedroom", price: "$375 – $445", time: "4–6 hours" },
  { size: "4 bedroom", price: "$445 – $540", time: "5–7 hours" },
  { size: "5+ bedroom / large home", price: "$540+", time: "6–8+ hours" },
];

const factors: { icon: typeof Home; title: string; text: string }[] = [
  { icon: Home, title: "Square footage", text: "More floor area means more of everything: floors, surfaces, baseboards, window sills. A 3,000-square-foot colonial simply takes more hours than an 800-square-foot condo, and the price follows the hours." },
  { icon: Sparkles, title: "Number of bathrooms", text: "Bathrooms are the slowest rooms in any deep clean: soap scum, hard-water deposits, grout, and full disinfection. Two homes of identical size can quote differently just because one has an extra full bath." },
  { icon: Clock, title: "Condition and buildup", text: "A home that has gone a year without professional cleaning takes longer than one maintained monthly. Heavy grease and mineral buildup add real scrubbing time, and an honest company prices for that upfront." },
  { icon: PawPrint, title: "Pets", text: "Shedding dogs and cats leave hair and dander on floors, upholstery, vents, and baseboards. It usually adds a modest amount of time to the job, not a huge surcharge." },
  { icon: CheckCircle2, title: "Add-ons (or not)", text: "Extras like inside-the-fridge and inside-the-oven cleaning are paid add-ons at many companies. At Capital Clean Care, both are included in every deep cleaning, so compare quotes on what is actually covered, not just the headline number." },
];

const steps: { name: string; text: string }[] = [
  { name: "Assess & Protect", text: "A walkthrough of your home before work starts, noting problem areas, delicate surfaces, and anything you want prioritized." },
  { name: "Dust-Free Air Start", text: "Dusting begins at the top of every room, from ceiling fans, vents, and ledges, and works down so nothing resettles on surfaces that were already cleaned." },
  { name: "GreenShield Sanitize", text: "High-touch and food-contact surfaces are sanitized with EPA Safer Choice products, effective without harsh chemical residue in your home." },
  { name: "Deep Scrub & Polish", text: "The heavy lifting: tile and grout, inside the fridge and oven, baseboards, and fixtures, all worked against a 50-point checklist." },
  { name: "White-Glove Inspection", text: "A final pass against the checklist before the team leaves. If anything was missed, our 24-hour re-clean guarantee means we come back and fix it free." },
];

const faqs = [
  { q: "Why does deep cleaning cost more than a standard cleaning?", a: "Time. A deep cleaning covers everything a standard cleaning does, plus baseboards, tile and grout scrubbing, inside the fridge and oven, vents, and detail work, which can roughly double the labor hours. A standard cleaning of a 1-2 bedroom home runs about $150-$180, while a deep cleaning of the same home runs $230-$290. You are paying for extra hours of work, not a fancier product." },
  { q: "Do I need to tip on top of the deep cleaning price?", a: "No. The quoted price is the complete price, and tipping is never required or expected. If the team did exceptional work and you want to tip, it is always appreciated and goes directly to the cleaners; clients who choose to do so commonly give around 10-15% or a flat amount per cleaner." },
  { q: "Is a one-time deep clean priced differently from a first-visit deep clean?", a: "The deep cleaning itself is priced the same either way, based on home size and condition. The difference is what happens afterward. If you continue with recurring service, later standard cleanings cost far less ($150-$180 for a 1-2 bedroom home) and earn recurring discounts of up to 25% weekly, 15% biweekly, or 5% monthly. A true one-time clean simply has no follow-up commitment." },
  { q: "How often does a home actually need a deep cleaning?", a: "Once or twice a year is enough for most homes that also get regular cleaning, whether professional or DIY. Homes with shedding pets, allergy sufferers, or heavy kitchen use often benefit from a seasonal deep clean every three to four months. If your home is professionally cleaned every two weeks, an annual deep clean is usually plenty." },
  { q: "Does an empty home cost less to deep clean?", a: "Often, modestly. An empty home removes the time spent working around furniture and clutter, which is why a move-in or move-out deep clean can quote slightly lower than a furnished home of the same size in rough shape. Condition matters more than furniture, though: an empty home with a year of buildup still takes real hours. Either way, you get an exact flat quote before you book." },
];

const DeepCleaningCostMaryland = () => {
  const { seoHelmet } = useSEO({
    title: "How Much Does Deep Cleaning Cost in Maryland? (2026)",
    description:
      "Deep cleaning cost in Maryland runs $230 for a studio to $540+ for large homes, with a typical 3BR at $375-$445. See prices by size and what changes them.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="deep cleaning cost maryland, how much does deep cleaning cost, deep cleaning prices md, deep clean cost 3 bedroom house, deep cleaning cost montgomery county" />
      </Helmet>
      <ArticleSchema
        title="How Much Does Deep Cleaning Cost in Maryland? (2026)"
        description="Real 2026 deep cleaning prices in Maryland by home size, from $230 for a studio to $540+ for large homes, plus the factors that move a quote up or down."
        url={URL}
        datePublished="2026-07-08"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Single-family Maryland home exterior, illustrating deep cleaning cost in Maryland by home size">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Much Does Deep Cleaning Cost in Maryland?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Real 2026 prices by home size, and the factors that move a quote up or down</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A professional deep cleaning in Maryland costs <strong>$230 to $540+</strong>, depending on the size and condition of
              the home. A typical 3-bedroom house runs about <strong>$375 to $445</strong>, a studio or 1-bedroom apartment starts
              around $230, and large 4-5 bedroom homes reach $540 or more.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Those are real 2026 numbers from the quotes we send across Montgomery County every week, not national averages pulled
              from a directory site. Below: prices by home size, what moves a quote up or down, and how to tell whether you need a
              deep cleaning at all.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-4 rounded-r-xl mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Want a real number instead of a range?{" "}
                <a href="/#quote" className="text-accent font-semibold underline hover:no-underline">Get a free flat-rate quote</a>{" "}
                for your home in about 60 seconds.
              </p>
            </div>

            <nav aria-label="Table of contents" className="border border-border rounded-2xl bg-secondary/30 p-5 mb-10">
              <p className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wider">In this guide</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#prices" className="text-accent underline hover:no-underline">Deep cleaning prices in Maryland by home size</a></li>
                <li><a href="#factors" className="text-accent underline hover:no-underline">What makes the price go up or down</a></li>
                <li><a href="#vs-standard" className="text-accent underline hover:no-underline">Deep vs. standard cleaning: which do you need?</a></li>
                <li><a href="#included" className="text-accent underline hover:no-underline">What's included in the GreenShield 5-Step Clean™</a></li>
                <li><a href="#worth-it" className="text-accent underline hover:no-underline">Is deep cleaning worth it in Montgomery County?</a></li>
                <li><a href="#faq" className="text-accent underline hover:no-underline">Deep cleaning cost FAQ</a></li>
              </ul>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="prices" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4 scroll-mt-24">Deep Cleaning Prices in Maryland by Home Size</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here is what homeowners across the DMV typically pay for a full deep cleaning in 2026. Every Capital Clean Care quote
              is a flat rate: you approve the price before we arrive, and it does not change on the day of the clean.
            </p>
            <div className="rounded-2xl border border-border overflow-hidden mb-4 text-sm">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold">
                <div className="p-3">Home size</div>
                <div className="p-3">Typical price</div>
                <div className="p-3">Typical time*</div>
              </div>
              {prices.map((r, i) => (
                <div key={r.size} className={`grid grid-cols-3 border-t border-border ${i % 2 === 1 ? "bg-secondary/30" : "bg-white"}`}>
                  <div className="p-3 font-medium text-foreground">{r.size}</div>
                  <div className="p-3 text-muted-foreground">{r.price}</div>
                  <div className="p-3 text-muted-foreground">{r.time}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              *Times assume a 2-person team. Curious how the hours break down?{" "}
              <Link to="/resources/how-long-does-deep-cleaning-take" className="text-accent underline hover:no-underline">See how long a deep cleaning takes</Link>{" "}
              by home size.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For comparison, a standard recurring cleaning runs $150-$180 for a 1-2 bedroom home and $200-$400+ for larger houses.
              Deep cleaning costs more because it covers far more: baseboards, inside appliances, tile and grout scrubbing, and
              detail work a maintenance clean never touches. Many clients book one deep clean, then keep the home at that level
              with recurring service, which earns discounts of up to 25% for weekly visits, 15% biweekly, and 5% monthly.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="factors" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">What Makes the Price Go Up or Down</h2>
            <div className="space-y-4 mb-8">
              {factors.map((f) => (
                <div key={f.title} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <f.icon className="h-5 w-5 text-accent shrink-0" />
                    <p className="font-heading font-bold text-foreground">{f.title}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
            <img
              src="/images/blog/deep-scrub-detail.webp"
              alt="deep cleaning cost Maryland — professional tile and grout scrubbing detail"
              loading="lazy"
              width={1000}
              height={563}
              className="w-full rounded-2xl shadow-md my-8"
            />
          </FadeInSection>

          <FadeInSection>
            <h2 id="vs-standard" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">Deep vs. Standard Cleaning: Which Do You Need?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A quick rule of thumb: if a professional has cleaned your home within the last two or three months and it has been
              maintained since, a standard cleaning is probably enough. If it has been longer, if you have never had professional
              cleaning, or if there is visible buildup in the kitchen or bathrooms, a deep cleaning is the right call. Most
              companies, ours included, recommend it as the first visit so recurring cleanings start from a truly clean baseline.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Not sure which side you fall on? We wrote a full comparison:{" "}
              <Link to="/resources/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs. regular cleaning</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Want an exact deep cleaning price for your home?" subtext="Flat-rate quotes in about 60 seconds. EPA Safer Choice products, bonded and background-checked cleaners, and a 24-hour re-clean guarantee across Montgomery County and the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 id="included" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">What's Included in the GreenShield 5-Step Clean™</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every deep cleaning we do follows the same method, the GreenShield 5-Step Clean™. That matters for pricing: the quote
              buys a defined process, not whatever a cleaner feels like doing that day.
            </p>
            <ol className="space-y-4 mb-8">
              {steps.map((s, i) => (
                <li key={s.name} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white font-heading font-bold text-sm shrink-0 mt-0.5">{i + 1}</span>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">{s.name}.</strong> {s.text}
                  </p>
                </li>
              ))}
            </ol>
          </FadeInSection>

          <FadeInSection>
            <h2 id="worth-it" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">Is Deep Cleaning Worth It in Montgomery County?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Honest answer: not always. If your home already gets professional cleaning every two weeks, paying for a full deep
              cleaning every month would be wasted money. Where a deep clean earns its price is as a reset: the first professional
              visit, a once- or twice-a-year refresh, spring cleaning, or getting a home ready for guests or a market listing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In Montgomery County, it also tends to be worth more than the sticker price suggests. Homes in Bethesda skew large,
              with multiple bathrooms that dominate cleaning time, and older houses in Rockville and Silver Spring often carry
              years of buildup in grout and behind appliances that a standard cleaning never addresses. We have cleaned 500+ homes
              across the area since 2015 and hold a 5.0-star rating across 45 Google reviews doing exactly this work.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              You can see the full scope on our{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service page</Link>, or
              check the local details for{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning in Bethesda</Link>{" "}
              and{" "}
              <Link to="/locations/rockville-md/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning in Rockville</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg my-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Get Your Exact Deep Cleaning Price</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Tell us your home's size and condition and we'll send a flat, no-surprise quote. Bonded, insured, background-checked cleaners using EPA Safer Choice products, backed by a 24-hour re-clean guarantee.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call (240) 704-2551</a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 id="faq" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">Deep Cleaning Cost FAQ</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="deep-cleaning-cost-maryland" />
      <StickyCTA />
    </Layout>
  );
};

export default DeepCleaningCostMaryland;
