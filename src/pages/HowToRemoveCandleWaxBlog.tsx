import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";
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

const HERO_IMAGE =
  "https://images.pexels.com/photos/3965527/pexels-photo-3965527.jpeg?auto=compress&cs=tinysrgb&w=1400";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/carpet-steam-vapor.jpg",
    alt: "Steam cleaner removing candle wax residue from carpet fibers",
    caption: "Carpet: freeze first, scrape second — always.",
  },
  {
    src: "https://images.pexels.com/photos/4108710/pexels-photo-4108710.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Wiping a painted wall with a damp eco-friendly cloth",
    caption: "Walls: heat loosens wax without scratching the paint.",
  },
  {
    src: "https://images.pexels.com/photos/3270223/pexels-photo-3270223.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Transparent glass candle holders on a wooden shelf",
    caption: "Glass: hot water soak dissolves wax in minutes.",
  },
  {
    src: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Polished hardwood floor with natural light — protecting finish from candle wax",
    caption: "Wood: go cold, never hot — heat can lift the finish.",
  },
];

const howToSteps = [
  {
    name: "Harden the wax completely",
    text: "Place a zip-lock bag filled with ice cubes directly over the wax spot for 5–10 minutes. The wax must be fully solid before you touch it — trying to remove soft wax spreads it deeper into the fibers.",
  },
  {
    name: "Break and lift the hardened wax",
    text: "Use a butter knife or the edge of a credit card to gently chip away the frozen wax. Work from the outer edges inward to avoid pushing the wax further into the pile. Vacuum up the loose pieces.",
  },
  {
    name: "Draw out the residue with heat",
    text: "Place a clean white paper towel or a sheet of brown paper bag over the remaining stain. Set a clothes iron to low heat (no steam) and press gently for 5–10 seconds. The wax will transfer from the carpet into the paper. Move to a fresh section of paper and repeat.",
  },
  {
    name: "Treat the color stain with dish soap",
    text: "If dyed wax left a color mark, mix a few drops of plant-based dish soap in a cup of cold water. Apply to the stain, blot with a clean white cloth — never rub. Rinse with cold water and blot dry. For stubborn stains, a drop of rubbing alcohol on a cloth can lift the dye.",
  },
];

const faqs = [
  {
    q: "Does ice really help remove candle wax from carpet?",
    a: "Yes — and it's the most important first step. Wax that is frozen solid can be chipped away in pieces without smearing into the carpet fibers. If you try to remove soft or room-temperature wax, you'll push it deeper and spread the stain. Give it at least 5–10 minutes with an ice pack before touching it.",
  },
  {
    q: "Can I use a hair dryer to remove candle wax?",
    a: "A hair dryer can work on hard surfaces like glass or metal, but use it carefully on carpet or wood. For carpet, a low-heat iron with a paper towel barrier is safer and more controlled. On wood, avoid heat entirely — it can lift the finish. For glass candle holders, a hair dryer on medium heat softens the wax enough to peel it away cleanly.",
  },
  {
    q: "What are the best eco-friendly products for removing candle wax?",
    a: "You likely already have them: white vinegar, baking soda, plant-based dish soap, and rubbing alcohol. For color stains on carpet or fabric, a small amount of hydrogen peroxide (test first) works well. Avoid petroleum-based solvents — they're effective but leave toxic residues, especially problematic near children and pets, and harmful to the Chesapeake Bay watershed through drain runoff.",
  },
  {
    q: "Will candle wax permanently damage hardwood floors?",
    a: "No — if you act correctly. The risk with hardwood isn't the wax itself; it's heat. Never use an iron or hair dryer on hardwood. Cold is your friend: freeze the wax, chip it off carefully, then use a small amount of mineral spirits or white vinegar on a soft cloth to remove the residue. Finish with a wood-safe polish to restore the sheen.",
  },
  {
    q: "How do I get candle wax out of fabric, curtains, or upholstery?",
    a: "The method is similar to carpet. Freeze with an ice pack, chip away the solid wax, then use the paper towel + low-iron technique to lift the residue. For upholstery, check the care label — some fabrics require dry-clean only. If dye remains after wax removal, a small amount of rubbing alcohol on a white cloth will usually lift it. Test on a hidden area first.",
  },
];

const HowToRemoveCandleWaxBlog = () => {
  const { seoHelmet } = useSEO({
    title: "How to Remove Candle Wax (Eco-Friendly) | Capital Clean Care MD",
    description:
      "Remove candle wax from carpet, walls, glass & wood with eco-safe methods. Maryland homeowners' guide. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-remove-candle-wax-eco-friendly",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to remove candle wax from carpet, remove candle wax from hardwood floor, candle wax on wall, eco-friendly wax remover, candle wax cleaning Maryland, Capital Clean Care Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Remove Candle Wax from Any Surface (The Eco-Friendly Way)"
        description="Remove candle wax from carpet, walls, glass & wood with eco-safe methods. Maryland homeowners' guide."
        url="https://capitalcleancare.com/blog/how-to-remove-candle-wax-eco-friendly"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Remove Candle Wax from Carpet (Eco-Friendly)"
        description="Step-by-step guide to removing candle wax from carpet using ice, a clothes iron, and plant-based dish soap — no toxic solvents needed."
        url="https://capitalcleancare.com/blog/how-to-remove-candle-wax-eco-friendly"
        steps={howToSteps}
        totalTime="PT30M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Remove Candle Wax (Eco-Friendly)", href: "/blog/how-to-remove-candle-wax-eco-friendly" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Remove Candle Wax" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Lit pillar candles on a wooden surface with soft warm light">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Remove Candle Wax from Any Surface
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The Eco-Friendly Way
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Capital Clean Care · Montgomery County, MD · May 2026
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
              It happens to everyone. A candle tips over during dinner in your <strong>Bethesda</strong> dining room, or a decorative candle drips onto the carpet in your <strong>Rockville</strong> living room. Now there's a white (or worse, red) wax stain staring back at you.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news: candle wax is one of the more forgiving messes to clean up — if you approach it correctly. The bad news: most people make it worse by reaching for the wrong tools first. This guide covers every surface — carpet, painted walls, glass, and hardwood — using only eco-safe methods that are kind to your home, your family, and the{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland watershed
              </Link>.
            </p>
          </FadeInSection>

          {/* Key principle callout */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>The golden rule of wax removal:</strong> Cold first on porous surfaces (carpet, fabric, wood), heat second on non-porous ones (glass, metal, ceramic). Never reverse this — heat on carpet spreads the stain; cold on glass makes it more stubborn.
              </p>
            </div>
          </FadeInSection>

          {/* Surface Gallery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Wax on Every Surface: Before You Start
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Each surface type requires a slightly different approach. The gallery below matches the four sections of this guide — click any image to expand it.
            </p>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* ── SECTION 1: Carpet ── */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              How to Remove Candle Wax from Carpet
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Carpet is the most common victim. The fibers trap wax fast, and dyed wax can leave a color stain even after the wax itself is gone. Follow these four steps in order.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-md mb-8">
              <img
                src="/images/blog/carpet-vacuum-living-room.jpg"
                alt="Vacuuming carpet before removing candle wax — preparation step"
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

            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="/images/blog/carpet-steam-gloves.jpg"
                alt="Professional with gloves using steam cleaner to treat candle wax stain on carpet"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Never use petroleum-based solvents</strong> (like WD-40 or acetone nail polish remover) on carpet. They'll remove the wax but leave an oil stain and toxic residue — especially dangerous for homes with children or pets.
              </p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="Wax stain beyond DIY? We handle it."
            subtext="Capital Clean Care offers deep cleaning and stain treatment for homes across Montgomery County. Eco-certified products, background-checked teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* ── SECTION 2: Walls ── */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              How to Remove Candle Wax from Painted Walls
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Wax on walls usually comes from taper candles placed too close to a surface, or from decorative wall sconces. The risk here is scratching or lifting the paint — so use gentler tools than you'd use on carpet.
            </p>

            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Let it harden, then peel",
                  text: "Don't touch fresh wax on a wall — it will smear. Let it dry completely, then gently peel the bulk of it away with your fingernail or a plastic scraper held at a very low angle. Apply slight upward pressure; you're peeling, not scraping.",
                },
                {
                  step: "02",
                  title: "Soften the residue with a hair dryer",
                  text: "Hold a hair dryer on low heat about 6 inches from the remaining wax film for 5–10 seconds. As the wax softens, wipe it away with a clean microfiber cloth using circular motions. Work in small sections to prevent the wax from dripping.",
                },
                {
                  step: "03",
                  title: "Clean the surface with diluted white vinegar",
                  text: "Mix equal parts white vinegar and warm water. Dampen a soft cloth and gently wipe the area to remove any waxy residue. For flat (matte) paint, be extra gentle — too much moisture can dull the finish. Dry with a clean cloth immediately.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-sm text-blue-900 leading-relaxed">
                <strong>For textured walls</strong> (like orange peel or knock-down finish), skip the hair dryer step. Instead, let the wax harden fully, then use a stiff-bristle brush (like a toothbrush) to gently dislodge the wax from the texture grooves before wiping with a damp cloth.
              </p>
            </div>
          </FadeInSection>

          {/* ── SECTION 3: Glass ── */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              How to Remove Candle Wax from Glass
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Glass candle holders, votives, and jar candles accumulate wax buildup over time. Glass is forgiving — it tolerates heat well and the wax rarely stains.
            </p>

            <div className="space-y-6 mb-6">
              {[
                {
                  step: "01",
                  title: "Boiling water pour method",
                  text: "For glass vessels: place the glass in a heat-safe bowl or the sink. Pour just-boiled water over the inside and outside of the glass. The wax will melt and float to the surface within a few minutes. Once cooled, peel the solidified wax layer off the top of the water.",
                },
                {
                  step: "02",
                  title: "Freezer method for stubborn residue",
                  text: "For any remaining film: place the glass in the freezer for 15–20 minutes. The cooled wax will contract and pop away from the glass surface. Use a butter knife to pry it loose, then wash with warm soapy water.",
                },
                {
                  step: "03",
                  title: "Polish with white vinegar",
                  text: "To restore the crystal-clear look, wipe the interior with a cloth dampened in white vinegar. This removes any remaining haze and adds a streak-free shine — the same technique professional cleaners use.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent text-white font-bold text-lg flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10">
              <p className="text-sm text-foreground text-center">
                <strong>Pro tip:</strong> Pour a thin layer of water into a glass candle holder before lighting the candle. Wax drips will land in the water, not stick to the glass — making cleanup effortless.
              </p>
            </div>
          </FadeInSection>

          {/* ── SECTION 4: Wood ── */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              How to Remove Candle Wax from Wood and Hardwood Floors
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Hardwood is the surface where people most often make things worse. The danger isn't the wax — it's heat damaging the finish, or abrasive scraping leaving scratches. Go slow.
            </p>

            <div className="space-y-6 mb-6">
              {[
                {
                  step: "01",
                  title: "Freeze and chip — no shortcuts",
                  text: "Apply an ice pack wrapped in a thin cloth to the wax for 5 minutes. Once hardened, use a plastic scraper (an old credit card works perfectly) at a very low angle to push the wax toward the center. It should pop off cleanly. Never use a metal scraper on wood — scratches are permanent.",
                },
                {
                  step: "02",
                  title: "Remove the residue with mineral spirits",
                  text: "Dampen a soft cloth with a small amount of mineral spirits (white spirits) or naphtha. Gently rub the wax residue in the direction of the wood grain. These solvents dissolve wax without lifting the wood finish. Wipe clean with a dry cloth immediately after.",
                },
                {
                  step: "03",
                  title: "Restore the finish",
                  text: "Apply a thin coat of wood polish or floor wax appropriate for your floor type (hardwood, engineered, bamboo). This restores the protective layer and blends the cleaned area with the surrounding surface so no dull spot remains.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shadow-md">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Never use a clothes iron on hardwood floors.</strong> The heat from an iron — even set to low — can soften and warp the wood finish in seconds. Cold methods only on hardwood.
              </p>
            </div>
          </FadeInSection>

          {/* Eco Products Section */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              Eco-Friendly Cleaning Products That Actually Work
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              You don't need to buy specialty products. These five items handle virtually every wax removal scenario — and all of them are safe for kids, pets, and the{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-conscious approach
              </Link>{" "}
              we bring to every home we clean.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                ["White vinegar", "Dissolves wax residue and leaves a streak-free finish on glass and walls. Safe on all surfaces except natural stone."],
                ["Plant-based dish soap", "Lifts dye stains from carpet and fabric after the wax is removed. Avoid synthetic detergents — they can leave a sticky residue."],
                ["Baking soda", "Excellent odor absorber if scented wax left a lingering fragrance in carpet. Apply dry, let sit 20 min, vacuum up."],
                ["Rubbing alcohol (70%)", "Lifts dye from carpet and upholstery when soap doesn't fully work. Use sparingly on a white cloth. Always test first."],
                ["Mineral spirits", "The best option for hardwood floors. Dissolves wax without damaging wood finish. Eco note: use ventilation and dispose properly — don't pour down drains."],
              ].map(([name, desc]) => (
                <div key={name} className="flex gap-3 p-4 bg-secondary/40 border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{name}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Maryland / Chesapeake angle */}
          <FadeInSection>
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Why This Matters for Maryland Homeowners
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                In the Montgomery County area — <strong>Rockville, Bethesda, Potomac, Silver Spring, Gaithersburg</strong> — most homes drain into the Chesapeake Bay watershed. That means the cleaning products that go down your drain, or get rinsed off your surfaces, eventually affect the Bay.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Petroleum-based solvents, synthetic detergents, and chemical degreasers are common in conventional cleaning products. Choosing white vinegar, plant-based soap, and baking soda isn't just good for your family — it's good for the watershed. At Capital Clean Care, our{" "}
                <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                  eco-friendly cleaning service
                </Link>{" "}
                uses only products certified safe for sensitive environments.
              </p>
            </div>
          </FadeInSection>

          {/* FAQ Section */}
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
                When DIY Isn't Enough — We're Here
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Some stains go beyond what DIY methods can fix — old wax, large spills, or combined damage. Capital Clean Care provides{" "}
                <Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  deep cleaning
                </Link>{" "}
                for homes across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Rockville, Bethesda, Silver Spring, Gaithersburg, Potomac, and beyond.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "Eco-certified products",
                  "Background-checked teams",
                  "Deep cleaning & stain treatment",
                  "Free estimates",
                ].map((item) => (
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

export default HowToRemoveCandleWaxBlog;
