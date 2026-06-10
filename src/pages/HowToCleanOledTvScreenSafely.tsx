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

const HERO_IMAGE = "/images/blog/oled/oled-hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/oled/oled-toolkit.webp",
    alt: "Microfiber cloth and a small bottle of distilled water — the safe OLED cleaning kit",
    caption: "The entire safe toolkit: a clean microfiber cloth and distilled water. No sprays, no chemicals.",
  },
  {
    src: "/images/blog/oled/oled-dust.webp",
    alt: "Microfiber cloth gently wiping dust off a dark OLED TV screen",
    caption: "Start dry. A dry microfiber cloth removes most dust without any liquid at all.",
  },
  {
    src: "/images/blog/oled/oled-avoid.webp",
    alt: "Household chemical sprays and rubbing alcohol that must never be used on an OLED screen",
    caption: "Everything here will damage an OLED panel: glass cleaner, alcohol, ammonia, paper towels.",
  },
];

const howToSteps = [
  {
    name: "Power off the TV and unplug it",
    text: "Turn the TV off and unplug it from the wall, then let it cool for a few minutes. A powered-off screen is dark, which makes dust, smudges, and fingerprints far easier to see — you'll clean more accurately. Unplugging also removes any electrical risk if a cloth is slightly damp, and a cool screen won't flash-dry streaks the way a warm one does.",
  },
  {
    name: "Dust the screen dry with a clean microfiber cloth",
    text: "Using a soft, clean microfiber cloth, wipe the screen gently to lift dust. Use light, even strokes — wipe in one direction or in small circles, with almost no pressure. For most screens, this dry pass is all the cleaning that's needed. Never use paper towels, tissues, or a kitchen rag: their fibers are abrasive enough to leave fine micro-scratches and lint on the delicate OLED coating.",
  },
  {
    name: "For marks, lightly dampen the cloth with distilled water",
    text: "If fingerprints or smudges remain, lightly dampen a corner of the microfiber cloth with distilled water — never tap or regular water, which leaves mineral spots, and never spray liquid directly onto the screen. Wring the cloth until it is barely damp, not wet. Wipe the marked area gently in one direction. Distilled water alone lifts almost all everyday smudges without any cleaner.",
  },
  {
    name: "Dry immediately with a second microfiber cloth",
    text: "Follow the damp pass right away with a second, dry microfiber cloth, buffing gently to remove any moisture before it can dry into a streak or seep toward the edges of the panel. Moisture must never pool at the bezel or run behind the screen. Work in small sections — damp wipe, then dry wipe — rather than dampening the whole screen at once.",
  },
  {
    name: "Let it dry fully before plugging back in",
    text: "Leave the TV off and let the screen air-dry completely — a few minutes is plenty after a barely-damp wipe. Confirm there is no visible moisture anywhere on the panel or frame, then plug it back in and power on. Turning the screen on while any dampness remains is the one mistake that can actually harm the electronics underneath the glass.",
  },
];

const faqs = [
  {
    q: "Why can't I just use glass cleaner or Windex on my OLED TV?",
    a: "Window cleaners like Windex contain ammonia and other solvents that dissolve the anti-glare and anti-reflective coatings bonded to an OLED panel. LG, Samsung, and Sony all explicitly warn against any cleaner containing alcohol, ammonia, benzene, acetone, or other solvents. Once that coating is clouded or stripped, it can't be restored — you'd be looking at a permanently hazy patch on a very expensive screen. Distilled water on a microfiber cloth removes the same fingerprints with zero risk.",
  },
  {
    q: "Is it safe to use a pre-moistened screen wipe?",
    a: "Only if the label specifically says it is alcohol-free and ammonia-free and is rated for OLED/LED TV or LCD screens. Many 'electronics wipes' sold for phones and glasses contain isopropyl alcohol, which is fine for tempered phone glass but not for a TV's soft display coating. When in doubt, skip the wipe and use a microfiber cloth barely dampened with distilled water — it's what the manufacturers recommend and it costs nothing.",
  },
  {
    q: "How often should I clean my OLED TV screen?",
    a: "A light dry dusting with a microfiber cloth every one to two weeks keeps dust from building up and is the safest routine. Do a damp (distilled-water) wipe only when you actually see fingerprints or smudges — usually every few weeks, or after kids and guests. The less you touch the screen, the better: each cleaning is a small amount of friction on a delicate surface, so cleaning only when needed is genuinely better than over-cleaning.",
  },
  {
    q: "What about the rest of the TV — the frame, vents, and back?",
    a: "The bezel, stand, and back panel are sturdier than the screen, but still wipe them with a dry or barely-damp microfiber cloth — not a soaked one. Pay attention to the ventilation slots on the back and bottom: dust buildup there traps heat, which matters for OLED longevity. A soft brush or the low setting on a vacuum with a brush attachment, held a few inches away, clears vent dust without contact. Never let liquid run into vents or ports.",
  },
  {
    q: "Does this same method work for QLED, LED, LCD, and 4K TVs?",
    a: "Yes. The dry-microfiber-first, distilled-water-only, no-chemicals, never-spray-the-screen method is the safe standard for essentially every modern flat-panel TV — OLED, QLED, QD-OLED, mini-LED, and standard LED/LCD. OLED simply has the least tolerance for error, so a method that is safe for OLED is safe for all of them. The one difference: older glossy LCDs tolerate slightly more pressure, but there's no reason to push your luck.",
  },
];

const HowToCleanOledTvScreenSafely = () => {
  const { seoHelmet } = useSEO({
    title: "How to Clean an OLED TV Screen Safely (Without Damaging It)",
    description:
      "Clean your OLED TV screen safely the way LG & Samsung recommend — microfiber + distilled water, no chemicals. Step-by-step guide from a Maryland cleaning team.",
    canonical: "https://capitalcleancare.com/blog/how-to-clean-oled-tv-screen-safely",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to clean OLED TV screen, clean OLED safely, OLED screen cleaning, clean TV screen without streaks, microfiber TV cleaning, clean QLED LED TV screen, OLED TV care Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="How to Clean an OLED TV Screen Safely (Without Damaging the Panel)"
        description="Step-by-step, manufacturer-aligned method to clean an OLED, QLED, or LED TV screen using a microfiber cloth and distilled water — no alcohol, no ammonia, no chemical sprays."
        url="https://capitalcleancare.com/blog/how-to-clean-oled-tv-screen-safely"
        datePublished="2026-06-10"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Clean an OLED TV Screen Safely — Microfiber & Distilled Water Method"
        description="Five-step method to safely clean an OLED TV screen with a microfiber cloth and distilled water, with no chemicals, following LG and Samsung guidance."
        url="https://capitalcleancare.com/blog/how-to-clean-oled-tv-screen-safely"
        steps={howToSteps}
        totalTime="PT10M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Clean an OLED TV Screen Safely", href: "/blog/how-to-clean-oled-tv-screen-safely" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Clean an OLED TV Screen Safely" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Person gently cleaning a large OLED TV screen with a microfiber cloth">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Clean an OLED TV Screen Safely
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The microfiber-and-water method LG &amp; Samsung actually recommend
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
              An OLED TV is one of the most expensive — and most delicate — surfaces in your home. Unlike an LCD that's lit from behind, an OLED screen is made of millions of <strong>organic, self-lighting pixels</strong> sitting under a soft anti-glare coating. That coating is what gives OLED its perfect blacks and wide viewing angle, and it's exactly what a paper towel or a squirt of glass cleaner will quietly ruin. Clean it the wrong way once and you can leave a permanent hazy smear on a $1,500+ screen.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news: the <em>correct</em> method is almost laughably simple, costs nothing, and uses zero chemicals. It's the same approach LG, Samsung, and Sony publish in their own support documents — a microfiber cloth and, when needed, a touch of distilled water. Here's exactly how to do it without a single risky product anywhere near the panel.
            </p>
          </FadeInSection>

          {/* Why OLED is different */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why You Can't Clean an OLED Like a Window
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Organic, fragile pixels", "OLED pixels are organic compounds that emit their own light. The panel is thinner and more pressure-sensitive than an LCD — pressing too hard while wiping can distort pixels and leave temporary (or permanent) marks."],
                ["A coating chemicals dissolve", "The anti-glare/anti-reflective layer bonded to the screen is broken down by alcohol, ammonia, and solvents. Once it clouds, it cannot be restored — you'd see a permanent hazy patch."],
                ["No backlight to hide flaws", "Because each pixel makes its own light, any residue, streak, or scratch shows clearly against OLED's deep blacks. Sloppy cleaning is far more visible than on a backlit LCD."],
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
                <strong>The golden rule:</strong> the safest cleaner for any TV screen is the gentlest one that does the job. Start dry, add only distilled water if you must, and never reach for anything you'd use on a window or countertop.
              </p>
            </div>
          </FadeInSection>

          {/* Supplies */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What You'll Need
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              That's the whole list. No screen sprays required — and the ones you do see in stores are optional at best.
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Two clean microfiber cloths", "One for dusting and the damp pass, one for drying. Microfiber lifts dust and oil without scratching. Keep them clean — grit trapped in a dirty cloth is what scratches screens."],
                ["Distilled water", "Distilled (not tap) water leaves no mineral spots as it dries. A small bottle lasts months. This is the only liquid you ever need for everyday smudges."],
                ["Optional: an alcohol-free, ammonia-free screen cleaner", "Only if the label specifically says it's safe for OLED/LED TV screens. For 95% of cleaning, you won't need it — distilled water does the same job with zero risk."],
                ["Optional: a soft brush or vacuum with brush attachment", "For dust in the back vents and ports — held a few inches away, never pressed against the panel."],
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
              The Safe Way to Clean an OLED Screen — Step by Step
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Total time: under 10 minutes · zero chemicals</p>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="/images/blog/oled/oled-dust.webp"
                alt="Microfiber cloth gently wiping an OLED TV screen"
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

          <BlogInlineCTA
            headline="Want the whole living room spotless — TV included?"
            subtext="Capital Clean Care dusts electronics gently and cleans every room across Bethesda, Rockville, Silver Spring, and Gaithersburg. Eco-certified, background-checked teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* What NEVER to use */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              What You Must Never Use on an OLED Screen
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="/images/blog/oled/oled-avoid.webp"
                alt="Glass cleaner, rubbing alcohol and other products that damage OLED screens"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Every item below is named directly in manufacturer warnings. Any one of them can permanently cloud, streak, or scratch the panel:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Window/glass cleaner (Windex) — the ammonia dissolves the screen coating",
                "Rubbing alcohol, isopropyl, or any alcohol-based wipe",
                "Ammonia, acetone, benzene, or any solvent",
                "Dish soap, all-purpose spray, or any household cleaner",
                "Paper towels, tissues, napkins, or kitchen rags — abrasive enough to micro-scratch",
                "Spraying any liquid directly onto the screen — it runs to the edges and into the electronics",
                "Pressing hard or scrubbing — OLED pixels are pressure-sensitive",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* Habits to keep it clean */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Habits That Keep the Screen Clean Longer
            </h2>
            <div className="space-y-3 mb-10">
              {[
                ["Dust dry every week or two", "A 30-second dry microfiber pass stops dust from building into a film you'd need water to remove. The less liquid your screen ever sees, the better."],
                ["Keep fingers off the panel", "Most 'smudges' are fingerprints. A simple no-touching habit (and keeping toddlers' hands busy elsewhere) eliminates the majority of cleaning entirely."],
                ["Clear the back vents", "OLED longevity depends on heat dissipation. Keep the rear ventilation slots dust-free with a soft brush so the panel runs cool."],
                ["Avoid leaving static images on for hours", "Not a cleaning issue, but worth knowing: OLED can retain burned-in static logos or game HUDs over long sessions. Vary content and use the TV's built-in pixel-refresh feature."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <Sparkles className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Eco note */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-12 flex gap-4 items-start">
              <Leaf className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">The eco bonus</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The manufacturer-approved method also happens to be the greenest: a reusable microfiber cloth and distilled water mean no aerosol screen sprays, no single-use wipes, and no harsh chemicals in your home or down the drain. It's the same no-toxics philosophy behind our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning service</Link>.
                </p>
              </div>
            </div>
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
                A Spotless Home, Down to the Screen
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">house cleaning</Link>{" "}
                and{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">eco-friendly cleaning</Link>{" "}
                across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">Maryland</Link>{" "}
                — Bethesda, Rockville, Silver Spring, Gaithersburg, and Potomac. We dust electronics gently and skip the harsh chemicals entirely.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {["No harsh chemicals", "Background-checked teams", "Gentle on electronics", "Free estimates"].map((item) => (
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

export default HowToCleanOledTvScreenSafely;
