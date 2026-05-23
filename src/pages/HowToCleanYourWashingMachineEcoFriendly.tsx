import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Droplets } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/washing-machine-hero.jpg";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pouring eco-friendly detergent into washer drawer",
    caption: "Detergent drawer: a hidden breeding ground for mold.",
  },
  {
    src: "https://images.pexels.com/photos/4239099/pexels-photo-4239099.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cleaning rubber gasket of front-load washing machine",
    caption: "The gasket fold is where black mold hides.",
  },
  {
    src: "https://images.pexels.com/photos/8581380/pexels-photo-8581380.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Fresh fragrant laundry folded after clean washer",
    caption: "Clean machine = clothes that actually smell clean.",
  },
  {
    src: "https://images.pexels.com/photos/7282426/pexels-photo-7282426.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Hands folding clean fresh-smelling laundry",
    caption: "No perfume covers a musty machine — cleaning is the only fix.",
  },
];

const howToSteps = [
  {
    name: "Run an empty hot cycle with white vinegar",
    text: "Add 2 cups of distilled white vinegar directly to the drum (not the drawer). Set the machine to the hottest, longest cycle available. Start the cycle.",
  },
  {
    name: "Pause and soak for 30 minutes",
    text: "After the drum fills and agitates for a few minutes, pause the cycle. Let the vinegar solution soak for 30 minutes — this dissolves mineral deposits and kills odor-causing bacteria.",
  },
  {
    name: "Resume the cycle, then add baking soda",
    text: "Let the vinegar cycle complete fully. Then immediately run a second short hot cycle with ½ cup of baking soda in the drum. The baking soda neutralizes any remaining vinegar smell and scrubs residue off the drum walls.",
  },
  {
    name: "Wipe the drum interior",
    text: "With the machine still warm, use a clean microfiber cloth dampened with a 1:1 white vinegar and water solution to wipe the entire inner drum, door glass, and the inner edge of the door seal.",
  },
  {
    name: "Leave the door open to dry completely",
    text: "After cleaning, leave the door ajar for at least 1–2 hours. This is the single most important maintenance habit — moisture trapped in a closed drum is the root cause of musty smell.",
  },
];

const faqs = [
  {
    q: "Does vinegar damage rubber gaskets or seals?",
    a: "No — when used correctly. Undiluted vinegar left sitting on rubber for hours can degrade it over time, but a normal cleaning cycle where the vinegar is diluted in water poses no risk. The key is to run the full cycle so the vinegar rinses away rather than pooling on the gasket fold. This eco-safe method is recommended by appliance manufacturers as a bleach-free alternative.",
  },
  {
    q: "Can I use bleach instead of vinegar to clean my washing machine?",
    a: "Bleach will kill mold effectively, but it has significant drawbacks: it's corrosive to rubber seals over time, toxic to breathe in enclosed laundry rooms, harmful to aquatic life when it enters the water supply, and leaves chemical residue that can irritate skin on the next load. Vinegar and baking soda achieve comparable sanitizing results without any of those risks — making them the better choice for homes with children, pets, or septic systems.",
  },
  {
    q: "Should I use hot or cold water to clean my washing machine?",
    a: "Always hot. Cold water cleaning cycles are largely ineffective because the heat is what dissolves mineral buildup, kills bacteria, and activates the cleaning properties of vinegar. If your machine has a dedicated 'Clean Washer' or 'Tub Clean' cycle, use it — these run hotter and longer than a standard hot wash.",
  },
  {
    q: "How often should I clean my washing machine?",
    a: "Once a month for most households. In the Montgomery County, MD area, WSSC water is moderately hard (around 150–200 mg/L hardness), which means mineral deposits build up faster than in soft-water areas. Homes with hard water, high laundry volume, or front-loading machines should clean monthly. Light users with top-loaders can stretch to every 6–8 weeks.",
  },
  {
    q: "What is HE detergent and why does it affect washer smell?",
    a: "HE (High Efficiency) detergent is a low-sudsing formula designed specifically for front-load and modern top-load washers that use less water. Using regular detergent in an HE machine is one of the top causes of musty smell — the excess suds don't rinse out fully and leave a film inside the drum that feeds mold and mildew. Always use detergent labeled 'HE' if your machine requires it, and use the recommended amount (less is more — most people overdose).",
  },
];

const HowToCleanYourWashingMachineEcoFriendly = () => {
  const { seoHelmet } = useSEO({
    title: "How to Clean Your Washing Machine (Eco-Friendly, Easy)",
    description:
      "Clean your washing machine drum, drawer & gasket with vinegar & baking soda. Eliminate musty smell. Free quote in Montgomery County, MD.",
    canonical: "https://capitalcleancare.com/blog/how-to-clean-your-washing-machine-eco-friendly",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to clean washing machine, clean front load washer, washing machine smell, vinegar washing machine, eco-friendly washing machine cleaning Maryland, WSSC hard water Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Clean Your Washing Machine (Eco-Friendly Method That Removes Smell)"
        description="Clean your washing machine drum, drawer & gasket with vinegar & baking soda. Eliminate musty smell with no harsh chemicals."
        url="https://capitalcleancare.com/blog/how-to-clean-your-washing-machine-eco-friendly"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Clean a Front-Load Washing Machine (Eco-Friendly)"
        description="Step-by-step guide to deep cleaning a front-load washer with white vinegar and baking soda — no bleach, no chemicals."
        url="https://capitalcleancare.com/blog/how-to-clean-your-washing-machine-eco-friendly"
        steps={howToSteps}
        totalTime="PT1H30M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Clean Your Washing Machine (Eco-Friendly)", href: "/blog/how-to-clean-your-washing-machine-eco-friendly" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Clean Your Washing Machine" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Washing machine being cleaned with eco-friendly products">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Clean Your Washing Machine
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Eco-Friendly Method That Removes Smell
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
              If your laundry in <strong>Rockville</strong> or <strong>Bethesda</strong> comes out of the washer smelling faintly musty — like mildew, not clean cotton — the problem isn't your detergent. It's your washing machine itself. Washing machines get dirty, and most households never clean them.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The fix is simple, costs almost nothing, and uses two ingredients you already have: <strong>white vinegar</strong> and <strong>baking soda</strong>. No bleach, no chemical tablets, no residue on your clothes. This guide covers front-loaders, top-loaders, and every part in between.
            </p>
          </FadeInSection>

          {/* Why Washing Machines Get Dirty */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Washing Machines Get Dirty
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your washer cleans everything you put in it — but nothing cleans the washer itself. Three things accumulate over time:
            </p>
            <div className="space-y-3 mb-6">
              {[
                ["Biofilm", "A thin, slimy layer of bacteria and mold that grows wherever warm, damp surfaces are never fully dried. Front-loaders are especially prone because the tight rubber gasket traps moisture after every cycle."],
                ["Hard water mineral deposits", "WSSC water in Montgomery County runs at approximately 150–200 mg/L hardness. That mineral content leaves calcium and magnesium scale on drum walls and heating elements — reducing efficiency and trapping odors."],
                ["Detergent residue", "Excess detergent — especially regular (non-HE) detergent in high-efficiency machines — doesn't rinse out completely. The leftover film coats the drum interior and feeds mold growth."],
              ].map(([term, desc]) => (
                <div key={term} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <Droplets className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{term}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Maryland homeowner note:</strong> Hard water accelerates mineral buildup in washers. If you're in Rockville, Gaithersburg, or Potomac, your machine likely needs cleaning more often than the manufacturer's generic recommendation. Monthly is the right frequency.
              </p>
            </div>
          </FadeInSection>

          {/* Supplies */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What You'll Need
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No specialty products required. Everything below is safe for{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-conscious homes
              </Link>,{" "}
              septic systems, and sensitive skin.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
              {[
                ["Distilled white vinegar", "2 cups (front-loader) / 4 cups (top-loader)"],
                ["Baking soda", "½ cup"],
                ["Microfiber cloths", "2–3 clean cloths"],
                ["Old toothbrush", "For grout and gasket folds"],
                ["Spray bottle", "For 1:1 vinegar + water solution"],
                ["Small bowl or bucket", "For soaking the detergent drawer"],
              ].map(([item, note]) => (
                <div key={item} className="flex flex-col gap-1 p-4 bg-secondary/40 border border-border rounded-xl">
                  <p className="font-semibold text-sm text-foreground">{item}</p>
                  <p className="text-xs text-muted-foreground">{note}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Front-Loader Section */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Front-Loader Full Clean Cycle
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Front-load washers are more water-efficient but require more attentive cleaning — the horizontal drum and tight door seal create ideal conditions for mold.
            </p>
            <div className="space-y-8 mb-10">
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
            headline="Want a professionally cleaned home — from washer to windows?"
            subtext="Capital Clean Care serves Montgomery County with eco-certified products and background-checked teams. New clients get 15% OFF their first visit."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Top-Loader Section */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Top-Loader Full Clean Cycle
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Top-loaders are simpler to clean because you can fill the drum and let it soak. The method is the same — vinegar first, baking soda second — just applied differently.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Fill with hot water and add vinegar",
                  text: "Set the machine to the hottest, largest load setting. As the drum fills, add 4 cups of white vinegar. Let it agitate for 1–2 minutes, then pause the cycle.",
                },
                {
                  step: "02",
                  title: "Soak for 1 hour",
                  text: "Let the vinegar-water solution sit for a full hour. This is the working phase — the vinegar is dissolving mineral scale, killing bacteria, and loosening the detergent film coating the drum walls.",
                },
                {
                  step: "03",
                  title: "Resume cycle, then run baking soda rinse",
                  text: "Let the vinegar cycle drain and spin completely. Then run a second short hot cycle — this time add 1 cup of baking soda directly to the drum. The baking soda scrubs residue and deodorizes.",
                },
                {
                  step: "04",
                  title: "Wipe down and air dry",
                  text: "Wipe the inner drum, agitator (if present), and the underside of the lid with a damp microfiber cloth. Leave the lid open for a few hours after every wash — not just cleaning day.",
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

          {/* Gasket / Door Seal */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Clean the Gasket / Door Seal (Front-Loaders)
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/4239099/pexels-photo-4239099.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Cleaning rubber gasket of front-load washing machine"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The rubber gasket fold is the single dirtiest part of a front-loader — and the most overlooked. Black mold accumulates in the hidden fold that most people never peel back.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Peel back the fold and inspect",
                  text: "Pull the rubber seal gently outward all the way around the drum opening. Look for black or gray mold spots, lint, coins, and accumulated grime in the crease.",
                },
                {
                  step: "02",
                  title: "Scrub with vinegar solution and toothbrush",
                  text: "Spray the fold generously with 1:1 white vinegar and water. Use an old toothbrush to scrub the entire gasket, paying extra attention to the bottom where moisture pools. For established black mold, apply undiluted vinegar and let sit for 10 minutes before scrubbing.",
                },
                {
                  step: "03",
                  title: "Wipe and dry thoroughly",
                  text: "Wipe the gasket clean with a microfiber cloth. Then dry it completely — a damp gasket starts molding again within 24 hours. This step needs to be part of your routine after every wash, not just cleaning day.",
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

          {/* Detergent Drawer */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Clean the Detergent Drawer
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Pouring eco-friendly detergent into washer drawer"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-5 mb-10">
              {[
                {
                  step: "01",
                  title: "Remove the drawer completely",
                  text: "Most detergent drawers pull out fully — press the release tab (usually a small button or latch at the back of the drawer) as you pull. Take it to the sink.",
                },
                {
                  step: "02",
                  title: "Soak in hot vinegar water",
                  text: "Fill a bowl or the sink with hot water and 1 cup of white vinegar. Submerge the drawer for 15–20 minutes. Use a toothbrush to scrub the detergent and fabric softener compartments — the residue is sticky and needs mechanical action to break loose.",
                },
                {
                  step: "03",
                  title: "Scrub the drawer housing",
                  text: "While the drawer soaks, spray the empty drawer housing in the machine with vinegar solution and wipe thoroughly — mold often grows in this cavity. Dry the drawer before reinstalling it.",
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

          {/* Filter & Drain Pump */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Clean the Filter & Drain Pump (Front-Loaders, Monthly)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most front-loaders have a drain pump filter — usually behind a small access panel at the bottom front of the machine. It collects lint, hair, coins, and debris. A clogged filter causes slow draining, error codes, and amplified odor.
            </p>
            <div className="space-y-5 mb-6">
              {[
                {
                  step: "01",
                  title: "Locate the filter and drain the water",
                  text: "Open the access panel (usually a flip-down cover). Place a shallow tray and several towels below the drain hose. Pull out the small drain hose, uncap it, and let the water drain completely. Expect a small amount of water — this is normal.",
                },
                {
                  step: "02",
                  title: "Remove, clean, and reinstall the filter",
                  text: "Unscrew the filter cap counterclockwise. Remove the filter and rinse it under hot water, scrubbing any debris with a toothbrush. Wipe the filter housing cavity with a damp cloth. Reinstall the filter, screw it tight, close the drain cap, and close the panel.",
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
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Don't skip the towels.</strong> Even machines that appear to have drained completely can release a significant amount of water when you remove the filter. Place a stack of old towels and a baking sheet before you open anything.
              </p>
            </div>
          </FadeInSection>

          {/* Long-Term Maintenance */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Long-Term Maintenance Habits
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cleaning once fixes today's smell. These habits prevent the smell from coming back.
            </p>
            <div className="space-y-3 mb-10">
              {[
                ["Always leave the door open after washing", "Even 2–3 inches of clearance allows the drum to dry completely between loads. This single habit prevents 90% of front-loader odor issues."],
                ["Run a hot vinegar cycle once a month", "Calendar it. In Montgomery County's hard water environment, monthly cleaning keeps mineral buildup from progressing past the point vinegar can fix it."],
                ["Use HE detergent — and use less of it", "More detergent doesn't mean cleaner clothes. Excess suds coat the drum and feed mold. The recommended dose is usually far less than the fill line suggests."],
                ["Wipe the gasket dry after the last load of the day", "Takes 30 seconds. Prevents black mold from establishing in the fold between cleans."],
                ["Remove laundry promptly", "Wet clothes left in a closed drum for hours contribute to the same moisture problem. Move them to the dryer within 30 minutes of the cycle ending."],
              ].map(([title, text]) => (
                <div key={title as string} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Gallery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Before and After: What a Clean Washer Means for Your Laundry
            </h2>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* When to Call a Tech */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              When to Call an Appliance Tech vs. a Cleaning Service
            </h2>
            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-accent text-white">
                    <th className="p-4 text-left font-semibold rounded-tl-xl">Symptom</th>
                    <th className="p-4 text-center font-semibold">Who to call</th>
                    <th className="p-4 text-center font-semibold rounded-tr-xl">Why</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Musty smell from drum or clothes", "Cleaning service / DIY", "Almost always a build-up issue, not a mechanical one"],
                    ["Black mold visible on gasket", "Cleaning service", "Requires proper scrubbing; may recur without recurring service"],
                    ["Machine vibrates excessively", "Appliance tech", "Bearing or drum balance issue — not a cleaning problem"],
                    ["Water not draining fully", "Check filter first (DIY)", "If filter is clean and problem persists, call a tech"],
                    ["Error codes on display", "Appliance tech", "Could be sensor, pump, or electronic fault"],
                    ["Lingering detergent smell after cleaning", "DIY — adjust detergent dose", "Overdosing HE detergent; reduce amount by 50%"],
                  ].map(([symptom, who, why], i) => (
                    <tr key={symptom as string} className={i % 2 === 0 ? "bg-secondary/30" : "bg-white"}>
                      <td className="p-4 font-medium text-foreground border-b border-border">{symptom}</td>
                      <td className="p-4 text-center text-accent font-medium border-b border-border">{who}</td>
                      <td className="p-4 text-muted-foreground border-b border-border">{why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              If your machine's smell persists after two full cleaning cycles — drum, gasket, drawer, and filter — that's worth an appliance service call. But 9 times out of 10, the vinegar and baking soda method above will fix it entirely. For homes needing regular deep-cleaning support across the whole house, see our{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">
                recurring cleaning plans
              </Link>
              . More on Maryland-specific eco tips in our{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning guide for Maryland homes
              </Link>.
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
                Ready for a Home That's Clean from Top to Bottom?
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  eco-friendly house cleaning
                </Link>{" "}
                for homes across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Rockville, Bethesda, Silver Spring, Gaithersburg, and Potomac. Certified safe products, background-checked teams, no chemical residue.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "Eco-certified products",
                  "Background-checked teams",
                  "Recurring cleaning plans",
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

export default HowToCleanYourWashingMachineEcoFriendly;
