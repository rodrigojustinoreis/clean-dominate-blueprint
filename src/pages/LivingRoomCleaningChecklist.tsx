import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, Sofa } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/team/real-team-luxury-home.webp";
const URL = "https://capitalcleancare.com/resources/living-room-cleaning-checklist";

const CHECKLIST = [
  "Upholstered furniture vacuumed, cushions and pillows fluffed and straightened",
  "Furniture dusted — top, front, and underneath",
  "Ceiling fans dusted, lamps cleaned and lampshades dusted",
  "Picture frames, shelves, and décor dusted",
  "Fingerprints removed from woodwork, door frames, and switch plates",
  "Electronics and remotes wiped and sanitized",
  "Windowsills wiped and baseboards dusted",
  "Hardwood and tile floors vacuumed and/or washed",
  "Carpets and rugs vacuumed",
  "General straightening throughout the room",
  "Trash emptied and liner replaced",
];

const STEPS: { step: string; text: string }[] = [
  { step: "1. Straighten and clear first", text: "Fluff the cushions, fold the throws, and clear the clutter off the coffee table and side tables. Tidying first means you're dusting a surface, not working around a pile." },
  { step: "2. Dust top-down", text: "Start high — ceiling fans, light fixtures, and lampshades — then work down to shelves, picture frames, and furniture. Dust falls, so anything you knock loose lands on a surface you haven't cleaned yet." },
  { step: "3. Wipe the touchpoints", text: "Woodwork, door frames, switch plates, remotes, and electronics collect fingerprints and germs. A quick wipe here is what makes a room feel genuinely clean, not just tidy." },
  { step: "4. Detail the furniture", text: "Vacuum upholstered sofas and chairs, including under the cushions, and dust furniture on the top, front, and underneath — the spots a quick pass always misses." },
  { step: "5. Floors last", text: "Vacuum carpets and rugs, then vacuum and/or wash hardwood and tile. Save the floors for last so everything that fell during dusting gets cleaned up on the way out." },
];

const faqs = [
  { q: "What counts as a living area when cleaning?", a: "Living areas are the shared spaces you actually live in — the living room, family room, dining room, home office, playroom, and hallways. They're meant to be used, not kept as showrooms, so the goal is a room that looks and feels clean on a regular basis without you having to lift a finger." },
  { q: "How often should living areas be cleaned?", a: "Straighten up and vacuum high-traffic living areas weekly, and dust every one to two weeks. Homes with kids, pets, or a lot of foot traffic do best on a weekly or bi-weekly recurring plan; tidier households can stretch to monthly." },
  { q: "What's included in a living area cleaning?", a: "Everything on the checklist above: upholstered furniture vacuumed, cushions fluffed, ceiling fans and lampshades dusted, furniture dusted top-front-and-underneath, picture frames dusted, fingerprints removed from woodwork and switch plates, floors vacuumed and washed, baseboards and windowsills wiped, general straightening, and trash emptied." },
  { q: "Do you clean living areas in the DMV?", a: "Yes — living areas are part of every Capital Clean Care visit across Maryland, DC, and Northern Virginia. Set up a recurring plan to keep them fresh every week, bi-week, or month, or book a deep clean to reset them. Request a free quote for your home." },
];

const LivingRoomCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    title: "Living Room Cleaning Checklist: How to Clean Living Areas",
    description:
      "A living room cleaning checklist — dusting, upholstery, floors and touchpoints for your living room, dining and home office, plus a daily/weekly/monthly routine.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="living room cleaning checklist, how to clean living room, living area cleaning, family room cleaning, living room deep cleaning" />
      </Helmet>
      <ArticleSchema
        title="Living Room Cleaning Checklist: How to Clean Your Living Areas"
        description="A step-by-step living room cleaning checklist — how to clean the living room, dining room, and home office: dusting, upholstery, floors, and touchpoints — with a daily, weekly and monthly routine."
        url={URL}
        datePublished="2026-08-06"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Living Room Cleaning Checklist", href: "/resources/living-room-cleaning-checklist" }]}
      />

      <BlogHero src={HERO_IMAGE} alt="A Capital Clean Care team member cleaning a bright, comfortable living area in a DMV home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Living Room Cleaning Checklist: How to Clean Your Living Areas</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Spend less time cleaning your living spaces — and more time living in them</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · August 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The living spaces of your home — the living room, dining room, home office, playroom, and more — are meant to
              be <em>used</em> by the people who live there, not kept as showrooms. That doesn't mean they can't look and
              feel clean on a regular basis. This is the <strong>living areas cleaning checklist</strong> our crews follow
              so nothing gets missed — dust bunnies and grubby fingerprints gone, without you ever lifting a finger.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-4 mb-10">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rather have it done for you, every single time? Our{" "}
                <Link to="/services/recurring-cleaning" className="text-accent font-semibold underline hover:no-underline">recurring cleaning service</Link>{" "}
                keeps every living area in tip-top shape while you're at work — from a 5.0-star, bonded and insured team
                across Maryland, DC &amp; Northern Virginia.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4 flex items-center gap-2">
              <Sofa className="h-6 w-6 text-accent shrink-0" /> What a Full Living Area Cleaning Covers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              All our living area cleanings involve everything you'd normally expect, plus a few extras. It's the same list
              we work through on every visit, top to bottom:
            </p>
            <ul className="space-y-2.5 mb-6">
              {CHECKLIST.map((i) => (
                <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If your home has a special need you don't see covered here, just ask — we're flexible, and we want to get your
              living areas cleaned your way.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Your Living Room Cleaning Routine: Daily, Weekly &amp; Monthly</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The easiest way to keep a living room clean is to split the work by how often it's actually needed. A few
              minutes daily, a proper clean weekly, and a deeper pass monthly keeps your living areas looking cared-for
              without a marathon session.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border mb-4">
              <table className="w-full text-left text-[15px] bg-white">
                <thead>
                  <tr className="border-b border-border bg-secondary/40">
                    <th className="p-3 font-heading font-bold whitespace-nowrap">How often</th>
                    <th className="p-3 font-heading font-bold">What to do</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border align-top">
                    <td className="p-3 font-semibold text-foreground whitespace-nowrap">Daily (5 min)</td>
                    <td className="p-3 text-muted-foreground">Straighten cushions and throws, clear clutter and dishes, fluff pillows, and spot-wipe the coffee table and any obvious marks.</td>
                  </tr>
                  <tr className="border-b border-border align-top">
                    <td className="p-3 font-semibold text-foreground whitespace-nowrap">Weekly</td>
                    <td className="p-3 text-muted-foreground">Dust surfaces, shelves, and electronics; wipe touchpoints (remotes, switch plates, door handles); vacuum upholstery and floors; mop hard floors; empty the trash.</td>
                  </tr>
                  <tr className="align-top">
                    <td className="p-3 font-semibold text-foreground whitespace-nowrap">Monthly</td>
                    <td className="p-3 text-muted-foreground">Dust ceiling fans, light fixtures, and lampshades; wipe baseboards and windowsills; clean blinds; vacuum under and behind furniture; wash throw covers and spot-clean upholstery.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              <strong>What you'll need:</strong> a microfiber duster and cloths, a vacuum with an upholstery attachment,
              an all-purpose (or EPA Safer Choice™) cleaner, glass cleaner for screens and windows, and a mop for hard
              floors. That's it — no specialty products required for routine living area cleaning.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent shrink-0" /> How to Clean Living Areas, Step by Step
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Working in the right order saves time and means you never re-dirty a surface you already cleaned. Go
              top-down and save the floors for last.
            </p>
            <div className="space-y-4 mb-8">
              {STEPS.map((s) => (
                <div key={s.step} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-1">{s.step}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Clean less, live more." subtext="Living areas are part of every Capital Clean Care visit — weekly, bi-weekly, monthly, or a one-time deep clean. Eco-friendly products, background-checked crews, flat pricing." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">When to Hand Your Living Areas to a Pro</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you'd rather spend your evenings and weekends actually enjoying your living spaces, a professional clean is
              the fast track. Living areas are covered on every whole-home visit:
            </p>
            <ul className="space-y-2.5 mb-6">
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> Want them kept fresh? A{" "}
                <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">recurring plan</Link>{" "}gets your living areas into tip-top shape weekly, bi-weekly, or monthly.
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> Neglected or overdue? Start with a{" "}
                <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning</Link>{" "}to reset every room — baseboards, ceiling fans, and behind the furniture included.
              </li>
              <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> Just need routine upkeep? Our{" "}
                <Link to="/services/house-cleaning" className="text-accent underline hover:no-underline">house cleaning</Link>{" "}covers the living areas on every visit.
              </li>
            </ul>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-12 mb-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Clean Less. Live More.</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Rated 5.0 stars across 45 Google reviews. Eco-friendly cleaning for your living areas across Bethesda,
                Rockville, Silver Spring, and the wider DMV.
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
              <Sparkles className="h-6 w-6 text-accent" /> Living Areas Cleaning FAQ
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="living-room-cleaning-checklist" />
      <StickyCTA />
    </Layout>
  );
};

export default LivingRoomCleaningChecklist;
