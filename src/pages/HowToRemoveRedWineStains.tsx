import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Sparkles, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import {
  ArticleSchema,
  BreadcrumbSchema,
  HowToSchema,
  FAQSchema,
} from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import ImageGallery, { GalleryImage } from "@/components/blog/ImageGallery";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import BeforeAfterSlider from "@/components/blog/BeforeAfterSlider";

const HERO_IMAGE = "/images/blog/wine/wine-hero.webp";
const AFTER_IMAGE = "/images/blog/wine/wine-after.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/wine/wine-blot.webp",
    alt: "Blotting a fresh red wine stain on light carpet with a clean white cloth",
    caption: "Blot, never rub. Press straight down to lift the wine — rubbing drives the pigment deeper into the fibers.",
  },
  {
    src: "/images/blog/wine/wine-toolkit.webp",
    alt: "Eco-friendly red wine stain removal kit: hydrogen peroxide, dish soap, baking soda, and salt",
    caption: "The eco toolkit: 3% hydrogen peroxide, dish soap, salt, and baking soda — no bleach required.",
  },
  {
    src: "/images/blog/wine/wine-after.webp",
    alt: "Clean light carpet with the red wine stain completely removed",
    caption: "The goal: stain fully lifted, fibers intact, zero bleach or harsh solvents used.",
  },
];

const howToSteps = [
  {
    name: "Blot up as much wine as you can — immediately",
    text: "The moment wine hits the fiber, grab a clean white cloth or paper towel and press straight down to absorb as much liquid as possible. Keep moving to a clean section of cloth and repeat until little or no color transfers. Work from the outside of the stain inward so you don't spread it. Never rub or scrub — rubbing pushes the pigment deeper into the carpet and frays the fibers.",
  },
  {
    name: "Flush with a little cold water and keep blotting",
    text: "Pour a small amount of cold water onto the stain to dilute the remaining wine, then blot again with a dry cloth. Repeat once or twice. Always use cold water, never hot — heat sets the tannins and proteins in red wine permanently, turning a removable fresh stain into a set-in one. The goal here is to lift and dilute before any cleaning solution goes on.",
  },
  {
    name: "Apply the dish soap + hydrogen peroxide solution",
    text: "Mix two parts 3% hydrogen peroxide with one part liquid dish soap. Dab a little onto the stain (patch-test a hidden spot first on colored carpet — and skip peroxide entirely on wool). The peroxide oxidizes the red pigment, breaking it down while the soap lifts it from the fibers. Gently work it in with your fingertips and let it sit about 15 minutes.",
  },
  {
    name: "Blot, rinse with cold water, and repeat if needed",
    text: "Blot the area with a clean, damp cloth — you should see the stain fading onto the cloth. Rinse by blotting with plain cold water to remove the soap and peroxide, then blot dry. For a stubborn stain, repeat the solution-and-blot cycle two or three times; oxidation works gradually and a faint stain often disappears on the second pass.",
  },
  {
    name: "Dry the area and lift the fibers",
    text: "Press a dry towel over the spot to absorb remaining moisture, then let it air-dry completely — placing a fan nearby speeds it up. Once dry, run your hand or a soft brush over the carpet to fluff the fibers back up. If any faint shadow remains after drying, a sprinkle of baking soda left overnight and vacuumed up will absorb the last of it along with any odor.",
  },
];

const faqs = [
  {
    q: "Does this work on a dried, old red wine stain too?",
    a: "It can — old stains just need patience. Start by misting the dried stain with cold water to re-hydrate it for 5–10 minutes, then follow the same dish soap + hydrogen peroxide method, letting it dwell a little longer (20 minutes) and repeating several cycles. Set-in stains rarely lift on the first try. If after three or four full passes there's still a visible mark, the pigment has likely bonded permanently to the fiber and it's worth calling a professional with hot-water extraction equipment.",
  },
  {
    q: "Is hydrogen peroxide safe for my carpet color?",
    a: "3% hydrogen peroxide (the standard brown-bottle drugstore strength) is safe on most light and mid-tone synthetic carpets, but because it's a mild oxidizer it can lighten some dyes. Always patch-test a hidden area first — under furniture or inside a closet — wait a few minutes, and check for any color change before treating the visible stain. Never use peroxide on wool or wool-blend carpet and rugs; for those, use the salt or baking-soda methods or call a pro.",
  },
  {
    q: "What about salt, club soda, or white wine — do those tricks work?",
    a: "Salt genuinely helps on a fresh spill: pour it on immediately and it wicks up wine as it absorbs, before you start the cleaning steps. Club soda or plain cold water can dilute a fresh stain and buy you time. The popular 'pour white wine on it' trick mostly just adds more liquid to blot — it's not a real remover. None of these replace the dish soap + peroxide step; treat them as first-aid that makes the real cleaning easier.",
  },
  {
    q: "Will the same method work on upholstery, a mattress, or clothing?",
    a: "The blot-cold-water-then-treat sequence is the same, but go gentler on liquid for upholstery and mattresses since they can't be rinsed — use a barely-damp cloth and blot rather than pour, so you don't soak the padding. For washable clothing, blot and rinse from the back of the fabric under cold water, pre-treat with the dish soap + peroxide mix, then launder in cold water and air-dry. Never put a wine-stained item in the dryer until the stain is fully gone — the heat sets it for good.",
  },
  {
    q: "Why does red wine stain so badly in the first place?",
    a: "Red wine is loaded with chromogens (intense natural pigments) and tannins, the same compounds that stain teeth and wooden barrels. They bond quickly to porous, fibrous surfaces like carpet and fabric. That's why speed matters so much: while the wine is still wet you're removing loose pigment, but as it dries those compounds chemically bind to the fibers — and heat (hot water or a dryer) accelerates that bond, which is exactly why cold water is the rule.",
  },
];

const HowToRemoveRedWineStains = () => {
  const { seoHelmet } = useSEO({
    title: "How to Remove Red Wine Stains (Carpet, Upholstery & Fabric)",
    description:
      "Remove red wine stains the proven, eco-friendly way — dish soap + hydrogen peroxide, no bleach. Step-by-step for carpet, upholstery & clothing from a Maryland cleaning team.",
    canonical: "https://capitalcleancare.com/blog/how-to-remove-red-wine-stains",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to remove red wine stains, red wine out of carpet, red wine stain removal, remove wine stain upholstery, eco-friendly stain remover, hydrogen peroxide wine stain, wine stain Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="How to Remove Red Wine Stains From Carpet, Upholstery & Fabric"
        description="A proven, eco-friendly method to remove fresh and set-in red wine stains using blotting, cold water, dish soap, and hydrogen peroxide — no bleach, safe for kids and pets."
        url="https://capitalcleancare.com/blog/how-to-remove-red-wine-stains"
        datePublished="2026-06-10"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Remove a Red Wine Stain — Dish Soap & Hydrogen Peroxide Method"
        description="Five-step method to remove red wine stains from carpet and fabric by blotting, flushing with cold water, and treating with a dish soap and hydrogen peroxide solution."
        url="https://capitalcleancare.com/blog/how-to-remove-red-wine-stains"
        steps={howToSteps}
        totalTime="PT30M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Remove Red Wine Stains", href: "/blog/how-to-remove-red-wine-stains" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Remove Red Wine Stains" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Red wine spilled on a light carpet in a living room">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Stain Removal Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Remove Red Wine Stains
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The proven, no-bleach method for carpet, upholstery &amp; fabric
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Capital Clean Care · Montgomery County, MD · June 2026
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg"
          asChild
        >
          <Link to="/contact">Get a Free Cleaning Quote</Link>
        </Button>
      </BlogHero>

      {/* ARTICLE */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Intro */}
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              A glass tips over at a dinner party and suddenly there's a spreading red bloom on your light carpet. The panic is real — red wine is one of the most notorious stains there is, packed with deep natural pigments (chromogens) and tannins that bond fast to fibers. But here's what most people get wrong in that first minute: they grab the wrong thing and start <em>scrubbing</em>, which is exactly what sets the stain for good.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The method below is the one cleaning pros and stain scientists actually rely on — and it skips bleach entirely. With a clean cloth, cold water, a little dish soap, and 3% hydrogen peroxide, you can lift even an alarming-looking spill without harsh chemicals near your kids or pets. Speed and technique matter far more than any expensive product.
            </p>
          </FadeInSection>

          {/* First 60 seconds */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The First 60 Seconds Decide Everything
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Blot — never rub", "Press straight down with a clean cloth to lift the wine. Rubbing drives pigment deeper into the fibers and frays them, turning a fixable spill into permanent damage."],
                ["Cold water only", "Hot water sets red wine's tannins permanently. Cold water dilutes and lifts. This single rule is the difference between a stain that comes out and one that doesn't."],
                ["Work outside-in", "Always blot from the edge of the stain toward the center so you contain it instead of spreading the ring wider across the carpet."],
              ].map(([title, desc]) => (
                <div key={title} className="p-4 bg-secondary/40 border border-border rounded-xl">
                  <p className="font-semibold text-sm text-foreground mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>No supplies handy?</strong> Pour a generous layer of plain table salt over a fresh spill right away. It wicks up the wine while you gather everything else — a genuinely effective first-aid step for fresh stains.
              </p>
            </div>
          </FadeInSection>

          {/* Supplies */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What You'll Need
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              All eco-friendly, all likely already in your home — no bleach, no commercial solvent required.
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Clean white cloths or paper towels", "Several. White so you can see how much wine is transferring. The workhorse of the whole process is blotting."],
                ["Cold water", "For diluting and rinsing. Never warm or hot — heat sets the stain permanently."],
                ["3% hydrogen peroxide", "Standard drugstore brown-bottle strength. Oxidizes and breaks down the red pigment. Breaks down to water and oxygen — no toxic residue. (Not for wool.)"],
                ["Liquid dish soap", "A grease-cutting surfactant that lifts the loosened pigment out of the fibers. A few drops is all you need."],
                ["Table salt and baking soda", "Salt for absorbing fresh spills; baking soda to absorb any faint residual stain and odor overnight."],
              ].map(([item, desc]) => (
                <div key={item} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{item}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The Method */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              The Step-by-Step Method
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: fresh and recent stains on synthetic carpet &amp; upholstery</p>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="/images/blog/wine/wine-blot.webp"
                alt="Blotting a red wine stain with a white cloth"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-8 mb-8">
              {howToSteps.map((step, i) => (
                <div key={step.name} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent text-white font-bold text-lg flex items-center justify-center shadow-md">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{step.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Before/After Slider */}
          <FadeInSection>
            <div className="mb-10">
              <p className="text-sm text-center text-muted-foreground mb-3 font-medium uppercase tracking-widest">
                Drag the handle to compare
              </p>
              <BeforeAfterSlider
                beforeSrc={HERO_IMAGE}
                beforeAlt="Red wine stain on light carpet before treatment"
                afterSrc={AFTER_IMAGE}
                afterAlt="Carpet after the red wine stain was removed"
                beforeLabel="Before"
                afterLabel="After"
              />
              <p className="text-xs text-center text-muted-foreground mt-3">
                Dish soap + hydrogen peroxide, no bleach — fibers intact, color restored.
              </p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="Stain won't budge — or it's spread across the room?"
            subtext="Capital Clean Care's deep cleaning teams handle set-in carpet and upholstery stains across Bethesda, Rockville, Silver Spring, and Gaithersburg. Eco-certified, no bleach, background-checked."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* What not to do */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Mistakes That Set the Stain for Good
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Rubbing or scrubbing — it drives pigment deeper and damages the fibers",
                "Using hot or warm water — heat permanently sets red wine's tannins",
                "Reaching for chlorine bleach — it can bleach out the carpet's own color, leaving a worse mark",
                "Putting a stained garment in the dryer before the stain is gone — dryer heat locks it in",
                "Letting the spill sit 'until later' — every minute the wine dries makes it harder to lift",
                "Using hydrogen peroxide on wool without testing — it can damage and lighten wool fibers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* Eco note */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-12 flex gap-4 items-start">
              <Leaf className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Why no bleach?</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bleach doesn't just risk stripping your carpet's color — in Maryland it eventually reaches the Chesapeake Bay watershed, where chlorinated byproducts harm aquatic life. Hydrogen peroxide breaks down into nothing but water and oxygen. It's the same no-toxics standard behind our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning service</Link>.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* When to call a pro */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When to Call a Professional
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4 flex gap-4 items-start">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-2">Some wine stains need extraction equipment</p>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Once a stain has fully dried and bonded — or soaked into the padding underneath — surface blotting can only do so much. Hot-water extraction reaches what DIY can't.
                </p>
              </div>
            </div>
            <ul className="space-y-2 mb-8">
              {[
                "The stain is old, dried, and survived several full treatment cycles",
                "Wine soaked through to the carpet pad or down into upholstery filling",
                "The fabric is wool, silk, antique, or labeled dry-clean-only",
                "A large area or multiple spills (a whole-room party cleanup)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              For set-in stains and post-party cleanups, Capital Clean Care's{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service</Link>{" "}
              treats carpet and upholstery with{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-safe products</Link>{" "}
              across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>.
            </p>
          </FadeInSection>

          {/* FAQ */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          {/* Final CTA */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Hosting Again Soon? Start Spotless.
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning</Link>{" "}
                and{" "}
                <Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}
                across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">Maryland</Link>{" "}
                — Bethesda, Rockville, Silver Spring, Gaithersburg, and Potomac. No bleach, no fumes, background-checked teams.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {["Zero bleach or chlorine", "Background-checked teams", "Carpet & upholstery", "Free estimates"].map((item) => (
                  <div key={item} className="flex items-center gap-1.5 justify-center text-primary-foreground/90">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md"
                asChild
              >
                <Link to="/contact">
                  Get a Free Estimate <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                Licensed, insured, and locally owned. Montgomery County, MD.
              </p>
            </div>
          </FadeInSection>

        </div>
      </article>

      <StickyCTA />
    </Layout>
  );
};

export default HowToRemoveRedWineStains;
