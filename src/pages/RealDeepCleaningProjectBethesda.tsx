import { Link } from "react-router-dom";
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
import { Button } from "@/components/ui/button";

const HERO_IMAGE = "/images/blog/real-deep-cleaning-bethesda/bethesda-bathroom-walkthrough-crew.webp";
const IMG_DUSTING = "/images/blog/real-deep-cleaning-bethesda/chrome-fixture-hand-dusting.webp";
const IMG_VANITY = "/images/blog/real-deep-cleaning-bethesda/vanity-detail-clean-respirator.webp";
const IMG_FINAL_PASS = "/images/blog/real-deep-cleaning-bethesda/final-pass-toilet-detail-wipe.webp";
const URL = "https://capitalcleancare.com/resources/real-deep-cleaning-project-bethesda-home";
const BETHESDA_SERVICE = "/locations/bethesda-md/deep-cleaning";
const PILLAR = "/services/deep-cleaning";
const GROUT_POST = "/resources/how-to-clean-grout-without-bleach";

const toc: [string, string][] = [
  ["why-deep-clean", "Why This Home Needed a Deep Cleaning"],
  ["where-the-work-went", "Where the Work Went"],
  ["bathroom-vents", "Bathroom Vents and Hidden Dust"],
  ["grout-corners", "Grout, Corners, and Skipped Details"],
  ["our-process", "Our Step-by-Step Process"],
  ["results", "The Results"],
  ["why-it-matters", "Why Periodic Deep Cleaning Matters"],
  ["faq", "Frequently Asked Questions"],
];

const areaRows: [string, string, string][] = [
  [
    "Shower grout (floor, walls, bench)",
    "Recessed lines absorb what wet passes leave behind",
    "Hand-scrubbed with a small brush, section by section",
  ],
  [
    "Corner seams (bench-to-floor junction)",
    "No mop reaches the junction at a useful angle",
    "Detailed by hand at floor level",
  ],
  [
    "Upper walls & vent surround",
    "Overhead dust turns to grime once surfaces are wet",
    "Dry-dusted with an extension pole before wet cleaning",
  ],
];

const steps: [string, string, string][] = [
  ["01", "Assess & Protect", "The walkthrough sets priorities. Here, it sent the crew to the tiled bathroom."],
  ["02", "Dust-Free Air Start", "Everything overhead is cleared dry, first — the extension duster covered the upper walls and vent surround before any water touched the tile."],
  ["03", "GreenShield Sanitize", "EPA Safer Choice™ plant-based products on wet areas and high-touch surfaces."],
  ["04", "Deep Scrub & Polish", "Grout, seams, and fixtures, worked by hand against our 50-point checklist."],
  ["05", "White-Glove Inspection", "Anything that misses the standard gets re-cleaned before we leave."],
];

const faqs = [
  {
    q: "How often do bathroom exhaust vents need cleaning?",
    a: "A light vacuum or dusting every few months keeps the grille clear. Plan a thorough cleaning once or twice a year — more often if the bathroom has no window and the fan runs long hours.",
  },
  {
    q: "Why does grout darken even in a home that's cleaned regularly?",
    a: "Grout is porous, so it absorbs a little of the dirty water every time the floor is mopped. Surface cleaning keeps the tile bright but doesn't pull residue back out of the grout lines. That takes dedicated scrubbing.",
  },
  {
    q: "What makes a deep clean different from a recurring clean?",
    a: "Scope and depth. Recurring cleans maintain visible surfaces on a schedule. A deep clean targets the buildup zones — vents, grout, baseboards, corners, and inside appliances — to reset the home's baseline.",
  },
  {
    q: "Are EPA Safer Choice products strong enough for built-up grime?",
    a: "Yes, when paired with the right technique. Safer Choice certification reviews products for both safety and performance. On heavy buildup, dwell time and mechanical scrubbing do the work that harsh chemicals usually get credit for.",
  },
  {
    q: "How often should a home like this get a deep cleaning?",
    a: "Once or twice a year is a common rhythm, with recurring cleaning in between. Pets, allergies, and busy households shorten that interval.",
  },
];

const h2Class = "font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 scroll-mt-24";
const pClass = "text-lg text-muted-foreground leading-relaxed mb-4";

const RealDeepCleaningProjectBethesda = () => {
  const { seoHelmet } = useSEO({
    title: "Inside a Real Deep Cleaning Project in a Bethesda Home",
    description:
      "A walkthrough of a real deep cleaning project in a Bethesda home — vent-first dusting, hand-scrubbed shower grout, and the 5-step method behind it.",
    canonical: URL,
    ogType: "article",
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="real deep cleaning project Bethesda, Bethesda home deep cleaning results, bathroom vent cleaning, grout and corner cleaning"
        />
      </Helmet>

      <ArticleSchema
        title="Inside a Real Deep Cleaning Project in a Bethesda Home"
        description="A walkthrough of a real deep cleaning project in a Bethesda, Maryland home — dry dusting at the exhaust vent, hand-scrubbed shower grout, and how the GreenShield 5-Step Clean sequence applied on site."
        url={URL}
        datePublished="2026-07-23"
        dateModified="2026-07-24"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Inside a Real Deep Cleaning Project in a Bethesda Home", href: "/resources/real-deep-cleaning-project-bethesda-home" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Inside a Real Deep Cleaning Project in a Bethesda Home" },
            ]}
          />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Capital Clean Care crew during the pre-clean walkthrough of a Bethesda master bathroom">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Cleaning Guides
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Inside a Real Deep Cleaning Project in a Bethesda Home
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Where the labor went, in what order, and the reasoning behind both
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Bethesda, MD · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className={pClass}>
              Our team at Capital Clean Care recently finished a full deep cleaning in a Bethesda, Maryland home. Most
              cleaning articles describe services in the abstract. This one doesn't. These are working photos from a
              real deep cleaning project in Bethesda — where the labor actually went, in what order, and why.
            </p>
          </FadeInSection>

          <FadeInSection>
            <nav aria-label="Table of contents" className="my-8 rounded-2xl border border-border bg-gray-50 p-5 sm:p-6">
              <p className="font-heading text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">In this article</p>
              <ol className="grid gap-2 sm:grid-cols-2 text-sm">
                {toc.map(([id, label], i) => (
                  <li key={id}>
                    <a href={`#${id}`} className="flex gap-2 text-foreground hover:text-accent transition-colors">
                      <span className="text-accent font-semibold">{i + 1}.</span> {label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="why-deep-clean" className={h2Class}>Why This Bethesda Home Needed a Deep Cleaning</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Most deep cleaning requests follow the same pattern: routine cleaning keeps surfaces presentable, but it
              doesn't reach the buildup zones — vent covers, grout lines, corner seams, the tops of walls. A recurring
              clean maintains a home. A deep clean resets it. This project was that reset.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="where-the-work-went" className={h2Class}>Where the Work Went</h2>
            <p className={pClass}>
              Every project starts with a walkthrough before anyone touches a surface, because the walkthrough decides
              where the labor goes — that's the crew in the photo above, reading the master bath before the first
              cloth comes out. In this home, the walkthrough pointed to the bathrooms, and above all to a shower tiled
              floor to ceiling: white squares with dark grout lines on every plane, a glass-block window, and a
              lighted exhaust vent overhead.
            </p>
            <p className={pClass}>
              A room like that concentrates everything a deep clean exists for. Grout runs across the floor, up the
              walls, and along the built-in bench. Every seam is a place residue can settle.
            </p>
            <aside className="my-8 rounded-2xl border-l-4 border-accent bg-accent/5 p-5 sm:p-6">
              <p className="font-heading font-bold text-foreground mb-3">🔍 Where the labor went</p>
              <ul className="space-y-2 text-sm text-foreground">
                {[
                  "Shower grout lines — floor, walls, and the built-in bench",
                  "Corner seams where the bench meets the floor",
                  "Upper walls and the surround of the lighted exhaust vent",
                  "The floor, worked in sections toward the drain",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span aria-hidden="true" className="text-accent mt-0.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </FadeInSection>

          <FadeInSection>
            <h2 id="bathroom-vents" className={h2Class}>Bathroom Vents and the Dust Nobody Sees</h2>
            <p className={pClass}>
              Bathroom exhaust vents sit overhead, so their buildup stays out of sight until you look straight up. A
              clogged grille also restricts airflow, which means moisture lingers after showers — and lingering
              moisture is where mildew smells start.
            </p>
            <p className={pClass}>
              That's why hidden dust removal comes first in our sequence, while everything is still dry. In this
              bathroom, that meant running an extension duster over the upper walls and the vent surround before any
              water touched the tile. Bathroom vent cleaning starts dry, or the dust that comes down just turns into
              grime.
            </p>
            <figure className="my-8">
              <img
                src={IMG_DUSTING}
                alt="Team member hand-dusting a chrome towel bar with a duster"
                width={1000}
                height={1000}
                loading="lazy"
                className="rounded-2xl w-full h-auto"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                The dry pass covers hardware too — towel bars, frames, and trim hold a film of dust that a wet wipe
                would only smear.
              </figcaption>
            </figure>
          </FadeInSection>

          <FadeInSection>
            <h2 id="grout-corners" className={h2Class}>Grout, Corners, and the Details That Get Skipped</h2>
            <p className={pClass}>
              Grout is porous — it slowly absorbs what the mop leaves behind, which is why it darkens even in homes
              that look clean everywhere else. For upkeep between visits, we've covered that in our guide on{" "}
              <Link to={GROUT_POST} className="text-accent font-medium hover:underline">how to clean grout without bleach</Link>.
            </p>
            <p className={pClass}>
              In this shower, the grout work was done by hand. Grout and corner cleaning in practice means crouching at
              floor level and working a small scrub tool along the seam where the tiled bench meets the floor. No mop
              reaches that junction at a useful angle, and no spray-and-wipe pass has the contact time to matter.
            </p>
            <figure className="my-8 rounded-2xl bg-gray-50 border border-border p-5 sm:p-6">
              <blockquote className="font-heading text-lg text-foreground leading-snug">
                When a shower is tiled floor to ceiling, nearly every pass is grout work. The room is mostly lines.
              </blockquote>
              <figcaption className="mt-3 text-sm text-muted-foreground">— Capital Clean Care field note</figcaption>
            </figure>
            <p className={pClass}>
              The floor itself was worked in sections toward the drain, with supplies staged on the bench — the small
              habits that keep a wet room orderly while the detail work happens.
            </p>
            <div className="my-8">
            <p className="sm:hidden text-xs text-muted-foreground mb-2 text-right" aria-hidden="true">Swipe to see the full table →</p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full min-w-[540px] text-sm">
                <thead>
                  <tr className="bg-secondary text-left">
                    <th className="px-4 py-3 font-semibold text-foreground">Area</th>
                    <th className="px-4 py-3 font-semibold text-foreground">Why it's hand work</th>
                    <th className="px-4 py-3 font-semibold text-foreground">What we did</th>
                  </tr>
                </thead>
                <tbody>
                  {areaRows.map(([area, why, did]) => (
                    <tr key={area} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-semibold text-foreground">{area}</td>
                      <td className="px-4 py-3 text-muted-foreground">{why}</td>
                      <td className="px-4 py-3 text-muted-foreground">{did}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 id="our-process" className={h2Class}>Our Step-by-Step Process</h2>
            <p className={pClass}>
              Every visit follows the GreenShield 5-Step Clean™, Capital Clean Care's in-house methodology. The full
              version lives on{" "}
              <Link to={PILLAR} className="text-accent font-medium hover:underline">our deep cleaning services page</Link>;
              what matters here is the order, which exists to prevent recontamination. The products we sanitize with
              come from the{" "}
              <a href="https://www.epa.gov/saferchoice" target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">EPA's Safer Choice program</a>,
              certified for both safety and performance.
            </p>
            <ol className="my-8 relative space-y-6 list-none">
              <span aria-hidden="true" className="absolute left-4 top-1 bottom-1 w-px bg-accent/30" />
              {steps.map(([n, title, desc]) => (
                <li key={n} className="relative pl-12">
                  <span className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-sm">
                    {n}
                  </span>
                  <p className="font-heading font-bold text-foreground">{title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </li>
              ))}
            </ol>
            <figure className="my-8">
              <img
                src={IMG_VANITY}
                alt="Technician in a respirator detail-cleaning the vanity while a teammate works on the soaking tub"
                width={1080}
                height={1350}
                loading="lazy"
                className="rounded-2xl w-full h-auto"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                Steps 3 and 4 in progress: detail work at the vanity while the soaking tub gets its own pass — each
                zone is worked separately.
              </figcaption>
            </figure>
          </FadeInSection>

          <FadeInSection>
            <h2 id="results" className={h2Class}>The Results</h2>
            <p className={pClass}>
              We closed this project the way we close every one: a white-glove pass against the 50-point checklist,
              walking the same route as the opening walkthrough.
            </p>
            <p className={pClass}>
              We could fill this section with adjectives, but we'd rather tell you where the time went: dry dusting
              before water, hand scrubbing where mops don't reach, and a final inspection that walks every seam.
              Bethesda home deep cleaning results are built in the order of operations and the contact time — not in
              the adjectives.
            </p>
            <figure className="my-8">
              <img
                src={IMG_FINAL_PASS}
                alt="Technician wiping a toilet seat with a yellow microfiber cloth during the final pass"
                width={1000}
                height={1000}
                loading="lazy"
                className="rounded-2xl w-full h-auto"
              />
              <figcaption className="mt-3 text-sm text-muted-foreground text-center">
                The last pass is close-up work — seats, hinges, and the spots a quick wipe never reaches.
              </figcaption>
            </figure>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Ready for your home's reset?"
              subtext="Tell us about your home and get a free, no-obligation quote — same five-step process, same care as the project above."
              ctaLabel="Get My Free Quote"
              ctaTo="/#quote"
            />
          </FadeInSection>

          <FadeInSection>
            <h2 id="why-it-matters" className={h2Class}>Why Periodic Deep Cleaning Matters in Bethesda Homes</h2>
            <p className={pClass}>
              Humid Mid-Atlantic summers, spring pollen, and busy households keep pushing buildup into vents, grout,
              and seams — the zones recurring cleaning isn't designed to chase. A professional cleaning project in
              Bethesda like this one resets that baseline. Recurring visits then hold it.
            </p>
            <p className={pClass}>
              If your home has the same quiet problem areas, our{" "}
              <Link to={BETHESDA_SERVICE} className="text-accent font-medium hover:underline">professional deep cleaning service in Bethesda</Link>{" "}
              handles this kind of detailed home cleaning with the same process documented here.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
              Dust finds vents, and water finds grout. That's the inside view of a real deep cleaning project in
              Bethesda — the work, the sequence, and the reasoning behind both.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="faq" className={h2Class}>Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="real-deep-cleaning-project-bethesda-home" />
      <StickyCTA />
    </Layout>
  );
};

export default RealDeepCleaningProjectBethesda;
