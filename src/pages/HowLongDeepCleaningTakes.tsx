import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/deep-scrub-detail.webp";
const URL = "https://capitalcleancare.com/resources/how-long-does-deep-cleaning-take";

const timeline: { size: string; solo: string; team: string }[] = [
  { size: "Studio / 1 bedroom", solo: "4–5 hours", team: "2–3 hours" },
  { size: "2 bedroom", solo: "5–7 hours", team: "3–4 hours" },
  { size: "3 bedroom", solo: "8–10 hours", team: "4–6 hours" },
  { size: "4 bedroom", solo: "10–12 hours", team: "5–7 hours" },
  { size: "5+ bedroom / large home", solo: "12+ hours", team: "6–8+ hours" },
];

const slowdowns: { title: string; text: string }[] = [
  { title: "Heavy buildup", text: "Months of soap scum, hard-water deposits, or kitchen grease can add an hour or more of pure scrubbing time. Condition is the single biggest variable between two homes of the same size." },
  { title: "Pet hair", text: "Shedding dogs and cats put hair on baseboards, vents, upholstery, and stair corners, all places that need slow, careful passes. Expect an extra 30-60 minutes in a multi-pet home." },
  { title: "Inside-appliance work", text: "The inside of an oven and the inside of a refrigerator are slow, detail-heavy jobs. Both are included in a Capital Clean Care deep cleaning, and together they typically add close to an hour." },
  { title: "Post-renovation dust", text: "Construction dust settles into every surface, vent, and cabinet interior and needs multiple passes to fully remove. A post-renovation clean often runs noticeably longer than a normal deep clean of the same home." },
];

const prep: string[] = [
  "Declutter surfaces the day before. Cleaners can't scrub a counter buried under mail and chargers; ten minutes of clearing saves them thirty.",
  "Secure pets in a room or crate, or plan a walk. Teams work fastest when they aren't managing an open door and a curious dog.",
  "Sort out access ahead of time: parking, gate codes, alarm codes, and which door to use. Fifteen minutes stuck outside is fifteen minutes off the clean.",
  "Flag priorities upfront. If the oven and the primary bathroom matter most to you, saying so during the walkthrough gets them done first and done thoroughly.",
];

const faqs = [
  { q: "Can a deep cleaning be done in one day?", a: "Yes, almost always. With a 2-person team, even a large 5-bedroom home finishes in 6-8 hours, which fits inside a single working day. The rare exceptions are severe-condition jobs or post-construction cleans of very large homes, which are sometimes split across two days, and you would know that upfront from the quote." },
  { q: "Should I be home during the deep cleaning?", a: "It is entirely up to you. Many clients let the team in and leave for the day, while others work from home during the clean. Being home neither speeds it up nor slows it down, as long as the team can move freely from room to room. What helps most is being reachable by phone for questions and available, in person or by photos, for the final walkthrough." },
  { q: "Why does the first visit take longer than later cleanings?", a: "The first visit is a full deep clean of a home the team has never touched, so buildup that accumulated over months or years comes off in that single visit. Once that baseline is set, recurring standard cleanings maintain it in a fraction of the time, often half or less, which is also why they cost far less than the initial deep clean." },
  { q: "Does the cleaning team bring everything, or do I need to supply anything?", a: "Capital Clean Care teams bring everything: equipment, vacuums, and the full EPA Safer Choice product lineup. You do not need to supply a thing. If you prefer we use a specific product you own, for a particular countertop or floor finish for example, just leave it out and mention it during the walkthrough." },
];

const HowLongDeepCleaningTakes = () => {
  const { seoHelmet } = useSEO({
    title: "How Long Does a Deep Cleaning Take? Real Timelines",
    description:
      "How long does a deep cleaning take? A typical 3BR home takes 4-6 hours with a 2-person team. Timelines by home size, what slows it down, and how to prep.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how long does a deep cleaning take, deep cleaning time, how many hours deep clean house, deep clean 3 bedroom house time, deep cleaning timeline" />
      </Helmet>
      <ArticleSchema
        title="How Long Does a Deep Cleaning Take? Real Timelines"
        description="Real deep cleaning timelines by home size, from a 2-3 hour studio to a 6-8+ hour large house, plus what slows a clean down and how to prepare."
        url={URL}
        datePublished="2026-07-08"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="how long does a deep cleaning take — DMV team deep scrubbing tile">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How Long Does a Deep Cleaning Take?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Real timelines by home size, from studios to 5-bedroom houses</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A deep cleaning takes <strong>4 to 6 hours for a typical 3-bedroom home</strong> with a 2-person team. A studio or
              1-bedroom apartment takes about 2 to 3 hours, while a large 5-bedroom house can run 6 to 8 hours or more.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Those numbers come from the deep cleans our teams do every week across Montgomery County, and they hold up well as
              long as the home is in average condition. Here is the full timeline by home size, what makes a job run long, and
              what you can do beforehand to speed it up.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-4 rounded-r-xl mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Want to know exactly how long your home would take?{" "}
                <a href="/#quote" className="text-accent font-semibold underline hover:no-underline">Get a free quote</a>{" "}
                and we'll include a time estimate for your specific home.
              </p>
            </div>

            <nav aria-label="Table of contents" className="border border-border rounded-2xl bg-secondary/30 p-5 mb-10">
              <p className="font-heading font-bold text-foreground mb-3 text-sm uppercase tracking-wider">In this guide</p>
              <ul className="space-y-1.5 text-sm">
                <li><a href="#timeline" className="text-accent underline hover:no-underline">Deep cleaning time by home size</a></li>
                <li><a href="#slowdowns" className="text-accent underline hover:no-underline">What slows a deep clean down</a></li>
                <li><a href="#solo-vs-team" className="text-accent underline hover:no-underline">Solo cleaner vs. a team</a></li>
                <li><a href="#prepare" className="text-accent underline hover:no-underline">How to prepare so it goes faster</a></li>
                <li><a href="#move-out" className="text-accent underline hover:no-underline">A note on move-in and move-out cleans</a></li>
                <li><a href="#faq" className="text-accent underline hover:no-underline">Deep cleaning timeline FAQ</a></li>
              </ul>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="timeline" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4 scroll-mt-24">Deep Cleaning Time by Home Size</h2>
            <div className="rounded-2xl border border-border overflow-hidden mb-6 text-sm">
              <div className="grid grid-cols-3 bg-primary text-primary-foreground font-semibold">
                <div className="p-3">Home size</div>
                <div className="p-3">Solo cleaner</div>
                <div className="p-3">2-person team</div>
              </div>
              {timeline.map((r, i) => (
                <div key={r.size} className={`grid grid-cols-3 border-t border-border ${i % 2 === 1 ? "bg-secondary/30" : "bg-white"}`}>
                  <div className="p-3 font-medium text-foreground">{r.size}</div>
                  <div className="p-3 text-muted-foreground">{r.solo}</div>
                  <div className="p-3 text-muted-foreground">{r.team}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Two things to notice. First, a team does not just halve the time; it usually beats the half, because cleaners split
              by specialty: one takes the kitchen and bathrooms (the slow, wet work) while the other handles dusting and floors.
              Second, bathrooms drive the totals more than bedrooms do. A 3-bedroom home with three and a half baths will often
              take longer than a 4-bedroom home with two.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="slowdowns" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">What Slows a Deep Clean Down</h2>
            <div className="space-y-4 mb-6">
              {slowdowns.map((s) => (
                <div key={s.title} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-1.5">{s.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <img
              src="/images/blog/sparkling-kitchen.webp"
              alt="kitchen counter after a full deep cleaning in Montgomery County"
              loading="lazy"
              width={1000}
              height={563}
              className="w-full rounded-2xl shadow-md my-8"
            />
          </FadeInSection>

          <FadeInSection>
            <h2 id="solo-vs-team" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">Solo Cleaner vs. a Team</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A solo cleaner can absolutely do an excellent deep clean; it just takes most of a day for anything larger than a
              1-bedroom. That matters if you need to be home during the clean, or if you are working against a deadline like a
              lease inspection or a party that evening. Teams also stay fresher: hour nine of solo scrubbing rarely looks like
              hour two.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Capital Clean Care sends 2-person teams on most deep cleanings, which is how a 3-bedroom home lands in the 4-6 hour
              window instead of eating a whole day. Every team is bonded, insured, and background-checked, and every job follows
              the same GreenShield 5-Step Clean™ method, so the timeline stays predictable. You can see the full scope on our{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service page</Link>, or
              the local details for{" "}
              <Link to="/locations/silver-spring-md/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning in Silver Spring</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Want a time and price estimate for your home?" subtext="Tell us the size and condition and we'll quote a flat price with a realistic timeline. EPA Safer Choice products and a 24-hour re-clean guarantee, across Montgomery County and the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 id="prepare" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">How to Prepare So It Goes Faster</h2>
            <ul className="space-y-2.5 mb-4">
              {prep.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {p}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              None of this is required; teams handle cluttered homes every week. But each item shaves real minutes off the clock,
              and on a large home they add up to an hour or more.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="move-out" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">A Note on Move-In and Move-Out Cleans</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Empty homes clean faster per square foot, since there is no furniture to work around. But move-out cleans usually
              add extras like the inside of every cabinet and closet, so the totals end up close to the table above. If you are on
              either side of a move, our{" "}
              <Link to="/resources/move-in-cleaning-checklist" className="text-accent underline hover:no-underline">move-in cleaning checklist</Link>{" "}
              covers what to clean before you unpack, room by room.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Also worth reading before you book:{" "}
              <Link to="/resources/deep-cleaning-cost-maryland" className="text-accent underline hover:no-underline">what deep cleaning costs in Maryland</Link>{" "}
              and exactly{" "}
              <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg my-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Book a Deep Clean That Respects Your Time</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Flat pricing, realistic timelines, and 2-person teams that show up when they say they will. 5.0 stars across 45 Google reviews, serving the DMV since 2015.</p>
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
            <h2 id="faq" className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">Deep Cleaning Timeline FAQ</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="how-long-does-deep-cleaning-take" />
      <StickyCTA />
    </Layout>
  );
};

export default HowLongDeepCleaningTakes;
