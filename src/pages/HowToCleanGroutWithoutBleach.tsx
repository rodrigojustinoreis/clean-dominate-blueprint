import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Sparkles } from "lucide-react";
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

const HERO_IMAGE =
  "https://images.pexels.com/photos/9462766/pexels-photo-9462766.jpeg?auto=compress&cs=tinysrgb&w=1200";

const AFTER_IMAGE =
  "https://images.pexels.com/photos/13277522/pexels-photo-13277522.jpeg?auto=compress&cs=tinysrgb&w=1200";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/4202479/pexels-photo-4202479.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Baking soda paste for grout cleaning",
    caption: "Baking soda paste clings to vertical grout lines and works while it sits — no scrubbing yet needed.",
  },
  {
    src: "https://images.pexels.com/photos/10099087/pexels-photo-10099087.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Scrub brush cleaning tile grout",
    caption: "A stiff-bristled grout brush or old toothbrush provides the mechanical action the paste can't.",
  },
  {
    src: "https://images.pexels.com/photos/10557898/pexels-photo-10557898.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Eco-friendly grout cleaning supplies on tile counter",
    caption: "The full eco toolkit: baking soda, white vinegar, hydrogen peroxide, castile soap, and sea salt.",
  },
  {
    src: "https://images.pexels.com/photos/13277522/pexels-photo-13277522.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Bright clean white grout after eco-friendly cleaning",
    caption: "Method 1 result on moderate bathroom grout: white lines restored without bleach or CLR.",
  },
];

const howToSteps = [
  {
    name: "Apply baking soda paste directly to grout lines",
    text: "Mix ½ cup of baking soda with enough dish soap to form a thick, spreadable paste — roughly the consistency of toothpaste. Using an old toothbrush or a small spatula, work the paste directly into the grout lines. Apply generously: the paste should be visible and sitting in the groove, not just lightly coated on the surface. Let it sit for 5 minutes before the next step.",
  },
  {
    name: "Spray white vinegar over the paste and let it fizz",
    text: "Spray undiluted white vinegar directly over the baking soda paste. It will fizz immediately — this reaction is the carbon dioxide released as the acid (vinegar) meets the alkali (baking soda). The fizzing action lifts dirt and organic stains out of the grout pores while the baking soda provides gentle abrasion. Let the reaction settle for 3–5 minutes without disturbing it.",
  },
  {
    name: "Scrub with a stiff brush in short back-and-forth strokes",
    text: "Using a stiff-bristled grout brush or an old toothbrush, scrub each grout line in short, firm back-and-forth strokes — not circular. Work with the line, not across it. Apply firm pressure: you're removing loosened deposits, not just spreading the paste. For wall tiles, work from top to bottom in sections. Change brushes if yours is too soft — a brush with no stiffness does almost nothing on dried grout stain.",
  },
  {
    name: "Rinse thoroughly and dry the grout",
    text: "Rinse all treated areas with clean warm water, wiping with a damp microfiber cloth to remove paste residue completely. Baking soda residue left in grout lines attracts dirt faster than clean grout — rinse is not optional. After rinsing, wipe grout lines dry with a clean cloth or run the bathroom exhaust fan. Damp grout in Maryland's humid summers re-develops grime and mildew significantly faster than dried grout.",
  },
];

const faqs = [
  {
    q: "Can I use a toothbrush, or do I need a special grout brush?",
    a: "A firm toothbrush works on narrow grout lines (⅛ inch or less) and is ideal for tight spots, corners, and around fixture bases. For wider grout lines (¼ inch and up, common on floor tile), a dedicated grout brush with stiffer bristles does the job three times faster and applies more pressure per stroke. You can find a grout brush at any hardware store for under $5. If you only have a toothbrush, it will work — it'll just take longer and more passes per line.",
  },
  {
    q: "How often should I seal grout after cleaning?",
    a: "For floor grout in high-traffic bathrooms or kitchens, reseal every 12–18 months. For wall grout (shower walls, backsplash) that has less water contact, every 2–3 years is sufficient. The test: drip a few drops of water on the grout line. If it beads up, the sealer is intact. If it absorbs within 30 seconds, the sealer has worn away and it's time to reseal. Always clean grout thoroughly and let it dry for 24–48 hours before applying sealer — sealing over dirty grout traps stains permanently.",
  },
  {
    q: "Will these methods work on colored or dark grout?",
    a: "Yes — with one important note. Hydrogen peroxide (Method 2) can lighten very dark grout slightly with repeated use, since it's a mild bleaching agent. For charcoal, gray, or brown grout, Method 1 (baking soda and vinegar) or Method 3 (castile soap and salt) are safer choices that clean without affecting the grout color. Avoid hydrogen peroxide on epoxy grout or any grout the manufacturer specifies as color-sensitive. When in doubt, test in a hidden corner first.",
  },
  {
    q: "What if the grout has actual black mold, not just grime?",
    a: "Black mold in grout requires a different approach than surface staining. Apply undiluted white vinegar to the affected lines and let it sit for 30–60 minutes — vinegar kills approximately 82% of mold species on contact. Scrub, rinse, and repeat. For persistent black mold that has penetrated deep into porous grout, a 3% hydrogen peroxide solution (standard drugstore bottle) applied for 10 minutes before scrubbing is effective. If the mold returns quickly after cleaning, the source is moisture — check exhaust fan function, caulk integrity, and whether the shower pan or wall substrate has a water intrusion issue.",
  },
  {
    q: "Can I use these methods on hardwood floors or natural stone tile?",
    a: "No. Never use vinegar or hydrogen peroxide on natural stone tile (marble, travertine, limestone, slate) — the acid etches the surface permanently. Never apply any of these methods to hardwood floors — moisture penetrates wood and causes swelling, warping, and finish damage. These methods are safe for ceramic tile, porcelain tile, fiberglass, and acrylic tub surrounds only. For stone or hardwood, use products specifically labeled pH-neutral and safe for natural stone or hardwood.",
  },
];

const HowToCleanGroutWithoutBleach = () => {
  const { seoHelmet } = useSEO({
    title: "How to Clean Grout Without Bleach (Natural Methods)",
    description:
      "Get sparkling white grout without bleach. Eco-safe paste & spray methods for Maryland homes. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-clean-grout-without-bleach",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to clean grout without bleach, natural grout cleaner, clean tile grout, white grout cleaning, eco-friendly grout Maryland, grout cleaning Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Clean Grout Without Bleach (Eco-Friendly Methods That Actually Work)"
        description="Clean grout lines on tile, shower, and bathroom floors using baking soda, vinegar, hydrogen peroxide, and castile soap — no bleach, no fumes, safe for kids, pets, and the Chesapeake Bay watershed."
        url="https://capitalcleancare.com/blog/how-to-clean-grout-without-bleach"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Clean Grout Without Bleach — Baking Soda & Vinegar Method"
        description="Four-step method to clean white and light grout using a baking soda paste and white vinegar spray — no bleach, no fumes, safe for septic systems."
        url="https://capitalcleancare.com/blog/how-to-clean-grout-without-bleach"
        steps={howToSteps}
        totalTime="PT30M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Clean Grout Without Bleach", href: "/blog/how-to-clean-grout-without-bleach" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Clean Grout Without Bleach" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Bathroom tile floor with grout in a modern home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Clean Grout Without Bleach
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Eco-Friendly Methods That Actually Work
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
              The master bathroom in a <strong>Bethesda</strong> or <strong>Potomac</strong> home can cost more per square foot than some entire apartments — and nothing ages it faster than grout that's gone from white to gray to a shade best described as "years of neglect." The instinct is to reach for bleach. But in a home with kids crawling on the floor, pets lounging by the tub, or a private well system, chlorine bleach carries real costs: respiratory irritation from fumes, damage to colored grout, degradation of septic bacteria, and eventual runoff into the Chesapeake Bay watershed.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The better news: you don't need it. Grout stains are primarily organic matter — soap scum, body oils, mildew, and mineral deposits — all of which respond to acid, mild abrasion, and oxidation. Three methods below cover every grout condition from routine maintenance to years of neglect, all without chlorine. For more{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning tips for Maryland homes
              </Link>
              , see our full guide.
            </p>
          </FadeInSection>

          {/* Why Skip Bleach */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Skip Bleach on Grout
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Lung and airway irritation", "Chlorine fumes from bleach reach harmful concentrations in an unventilated bathroom within seconds. With kids, elderly occupants, or anyone with asthma — common in Maryland's older housing stock — the risk is real every time you spray."],
                ["Septic system damage", "Chlorine bleach kills the beneficial bacteria that process waste in septic systems. Repeated use degrades function over time. Many homes in Potomac and rural Montgomery County rely on private septic — bleach poured down drains is not a neutral act."],
                ["Chesapeake Bay impact", "Maryland drains into the Chesapeake watershed. Chlorine from household bleach combines with organic material in wastewater to form chlorinated byproducts that are toxic to aquatic life and persistent in the Bay ecosystem."],
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
                <strong>Bleach also fades colored grout permanently.</strong> Gray, charcoal, and sand-toned grout are increasingly common in Maryland bathrooms — a single bleach application can create uneven lightening that can't be reversed short of regrouting. The methods below are color-safe on all grout types except where noted.
              </p>
            </div>
          </FadeInSection>

          {/* Supplies */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Supplies You'll Need
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              All three methods below draw from this list. Pick the items for the method you'll use — you won't need everything at once.
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Baking soda (sodium bicarbonate)", "Mild alkali and gentle abrasive — the base of Methods 1 and 2. Safe for all surfaces and septic systems."],
                ["White distilled vinegar", "Acid that activates the baking soda fizz and dissolves mineral deposits. Use undiluted for grout."],
                ["3% hydrogen peroxide", "Standard brown-bottle drugstore hydrogen peroxide. Oxygen-based stain remover for deeper discoloration. Breaks down to water — no toxic residue."],
                ["Castile soap (liquid)", "Plant-oil based surfactant for Method 3. Dr. Bronner's unscented works well. Gentle, safe for colored grout."],
                ["Sea salt or kosher salt", "Coarse abrasive for the castile soap scrub. Dissolves in water, leaves no residue."],
                ["Stiff grout brush or old toothbrush", "Mechanical action is what actually removes loosened deposits. A brush with no stiffness won't do the job."],
                ["Spray bottle", "For even vinegar application. A standard trigger bottle works."],
                ["Microfiber cloths (3+)", "For rinsing and drying. Have several clean ones ready."],
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

          {/* Method 1 */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              Method 1 — Baking Soda + Vinegar Paste
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: routine maintenance and moderate discoloration</p>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/4202479/pexels-photo-4202479.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Baking soda paste for grout cleaning"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is the right starting method for most Maryland bathrooms — effective on grout that's gone from white to off-white or light gray, and safe on white, light, and colored grout lines.
            </p>
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
                beforeAlt="Bathroom tile grout before cleaning"
                afterSrc={AFTER_IMAGE}
                afterAlt="Bright clean white grout after eco-friendly cleaning"
                beforeLabel="Before"
                afterLabel="After Method 1"
              />
              <p className="text-xs text-center text-muted-foreground mt-3">
                Method 1 result on bathroom floor grout — baking soda + vinegar, no bleach.
              </p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="Grout beyond a single scrub session? Let us handle it."
            subtext="Capital Clean Care's deep cleaning teams cover bathrooms across Bethesda, Rockville, Silver Spring, and Gaithersburg. Eco-certified, no bleach, background-checked."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Method 2 */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Method 2 — Hydrogen Peroxide + Baking Soda
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: deeper stains, soap scum, and stubborn discoloration</p>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/10099087/pexels-photo-10099087.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Scrub brush cleaning tile grout"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When Method 1 isn't enough — grout that's gone dark, old soap scum buildup, or bathroom tile in a <strong>Bethesda</strong> home that hasn't been deep cleaned in years — hydrogen peroxide provides oxygen-based bleaching that lifts stains Method 1 can't reach, without chlorine.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Mix hydrogen peroxide and baking soda into a thick paste",
                  text: "Combine ½ cup of 3% hydrogen peroxide (standard drugstore bottle) with enough baking soda to form a thick paste — typically 3–4 tablespoons. Optionally add a small squeeze of dish soap to improve adhesion on vertical surfaces. Mix in a small bowl. The paste should hold its shape when applied to a vertical grout line without immediately sliding down.",
                },
                {
                  step: "02",
                  title: "Apply and let sit for 10–15 minutes before scrubbing",
                  text: "Apply the paste to grout lines with an old toothbrush or gloved finger, pressing it into the lines. Leave undisturbed for 10–15 minutes. During this time, the hydrogen peroxide is actively releasing oxygen, which breaks the molecular bonds of organic stain compounds within the grout pores. You may see light fizzing — this is normal. After sitting, scrub with a stiff grout brush using firm back-and-forth strokes.",
                },
                {
                  step: "03",
                  title: "Rinse completely and ventilate the room",
                  text: "Rinse all treated areas thoroughly with warm water and wipe dry with a clean microfiber cloth. Run the bathroom exhaust fan during and after treatment. While hydrogen peroxide is far safer than bleach, it does release oxygen gas in a confined space — ventilation is good practice. The paste breaks down to water and carbon dioxide, leaving no toxic residue in your grout, pipes, or septic system.",
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
          </FadeInSection>

          {/* Method 3 */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Method 3 — Castile Soap + Salt Scrub
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: colored grout, weekly maintenance, and gentle surfaces</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              For grout that's in reasonable shape and just needs a weekly touch-up, or for dark-colored or epoxy grout where you want zero risk of any lightening effect, the castile soap and salt method is the gentlest option. It's also the best choice for households where any hint of acid (vinegar) is a concern — near natural stone, for example, where overspray is possible.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Make the castile soap and salt scrub mixture",
                  text: "In a small bowl, combine 2 tablespoons of liquid castile soap with 2 tablespoons of coarse sea salt or kosher salt. Stir to combine. The salt acts as a gentle abrasive that dissolves completely in rinse water, leaving no residue. Optionally add 10 drops of tea tree essential oil — it has mild antimicrobial properties that help with mildew odor in bathroom grout, without the harsh fume profile of bleach.",
                },
                {
                  step: "02",
                  title: "Apply with a brush and scrub in sections",
                  text: "Apply the mixture to grout lines with a toothbrush or grout brush. Work in 2-foot sections rather than treating the entire floor or wall at once — the salt begins dissolving immediately and loses abrasive effectiveness if the mixture sits too long before scrubbing. Scrub each section with firm, even strokes before moving to the next. Rinse each finished section as you go.",
                },
                {
                  step: "03",
                  title: "Rinse with warm water and buff dry",
                  text: "Rinse each section with clean warm water and a damp microfiber cloth. Castile soap can leave a light film if not fully rinsed — a second pass with a clean, damp cloth ensures no residue. Buff tile surfaces dry with a dry microfiber. For colored grout, the salt-free Method 3 rinse is especially important — any salt residue left in dark grout lines can create light streaks when dry.",
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
          </FadeInSection>

          {/* Steam Cleaning */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Bonus — Steam Cleaning
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: no-chemical grout cleaning, maintenance between deep cleans</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A handheld steam cleaner uses only water and heat — no chemicals at all — to loosen and extract grout grime. The steam penetrates grout pores and dissolves biofilm, soap residue, and surface mildew without any acid or abrasive. It's the right tool for homeowners who want a chemical-free option, or as a monthly maintenance pass between the deeper treatments above.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Work the steam nozzle slowly along each grout line",
                  text: "Fill your steam cleaner per manufacturer instructions and attach the narrow grout nozzle attachment. Hold the nozzle 1–2 inches from the grout surface and move slowly — 1–2 inches per second — along each line. Moving too fast doesn't give the steam enough dwell time to penetrate. For heavy buildup, make two passes. Steam cleaners reach 212°F+, which kills mildew spores and bacteria without chemicals.",
                },
                {
                  step: "02",
                  title: "Wipe immediately with a microfiber cloth as you go",
                  text: "Have a clean microfiber cloth or the steam cleaner's included cloth attachment ready as you go. Wipe immediately behind the nozzle — the steam loosens the grime and the cloth physically removes it before it re-deposits as the surface cools. Work in 2-foot sections: steam a section, wipe, move forward. Don't steam an entire wall or floor before wiping — the loosened grime re-deposits as it cools.",
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
          </FadeInSection>

          {/* How to Keep Grout Clean */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              How to Keep Grout Clean
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The best grout-cleaning session is the one you don't need. Maryland's humid summers — with dew points regularly above 70°F from June through August — accelerate mildew and soap scum accumulation in bathrooms more than most homeowners realize. These habits interrupt that cycle.
            </p>
            <div className="space-y-3 mb-10">
              {[
                ["Seal grout after every deep clean", "Grout sealer creates a hydrophobic barrier that repels water and staining agents. Sealed grout is dramatically easier to wipe clean and resists mildew growth. Apply after grout is fully dry (24–48 hours post-cleaning). Floor grout: reseal annually. Wall grout: every 2–3 years."],
                ["Daily squeegee on shower walls", "Wiping shower tile walls after every use removes the soap and mineral residue before it dries into grout lines. A 20-second habit that eliminates most grout maintenance."],
                ["Run the exhaust fan during and 20 minutes after every shower", "Maryland summer air at 75°F and 70% humidity entering a bathroom makes grout wet 24 hours a day. An exhaust fan rated for the bathroom size (CFM ≥ room square footage) is the most effective long-term anti-mildew investment."],
                ["Weekly baking soda spray on floor grout", "Keep a spray bottle of 2 tablespoons baking soda dissolved in a quart of warm water near the shower. A 30-second spray on floor grout lines once a week prevents the accumulation that leads to Method 2-level deep cleans."],
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

          {/* When You Should Call a Pro */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When You Should Call a Professional
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4 flex gap-4 items-start">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-2">Some grout conditions exceed what DIY methods can fix</p>
                <p className="text-sm text-amber-900 leading-relaxed">
                  When grout has years of compacted buildup, active black mold growth behind the tile, or structural damage from water intrusion, cleaning the surface doesn't solve the underlying problem.
                </p>
              </div>
            </div>
            <ul className="space-y-2 mb-8">
              {[
                "Grout remains noticeably dark after two full applications of Method 2 — the stain has penetrated too deeply for surface cleaning",
                "Grout is crumbling, cracked, or missing in sections — regrouting needed before cleaning matters",
                "Black mold returns within days of cleaning — active moisture intrusion behind the tile requires a plumber or tile contractor",
                "Tile is loose, hollow-sounding, or separating from the wall — water has likely damaged the substrate",
                "Multiple bathrooms or large tiled areas that would take multiple full days to treat manually",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              For surface-level grout that needs systematic, room-by-room treatment, Capital Clean Care's{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">
                deep cleaning service
              </Link>{" "}
              handles it completely using the{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-safe protocols
              </Link>{" "}
              in this guide — no bleach, no chemical residue, safe for the{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland
              </Link>{" "}
              watershed.
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
                Want Results Like the "After"? Let Our Team Do It.
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  deep cleaning
                </Link>{" "}
                and{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  eco-friendly cleaning
                </Link>{" "}
                across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Bethesda, Rockville, Silver Spring, Gaithersburg, and Potomac. No bleach, no fumes, background-checked teams.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "Zero bleach or chlorine",
                  "Background-checked teams",
                  "Bathroom deep cleaning",
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

export default HowToCleanGroutWithoutBleach;
