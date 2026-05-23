import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Wind } from "lucide-react";
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
  "https://images.pexels.com/photos/6957827/pexels-photo-6957827.jpeg?auto=compress&cs=tinysrgb&w=1200";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/18675982/pexels-photo-18675982.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Ceramic vinegar bottle on a kitchen counter",
    caption: "White vinegar kills 82% of mold species — no bleach needed.",
  },
  {
    src: "https://images.pexels.com/photos/6957827/pexels-photo-6957827.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Baking soda and natural ingredients in containers",
    caption: "Baking soda absorbs odor molecules from fabric and air.",
  },
  {
    src: "https://images.pexels.com/photos/34393499/pexels-photo-34393499.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sunlight through open window airing out room",
    caption: "UV light from direct sun kills mildew spores in 1–3 hours.",
  },
  {
    src: "https://images.pexels.com/photos/17182110/pexels-photo-17182110.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Basement with ventilation for humidity control",
    caption: "Basement ventilation is the first line of defense in Maryland summers.",
  },
];

const howToSteps = [
  {
    name: "Spray white vinegar on the affected surface",
    text: "Fill a spray bottle with undiluted white vinegar. Spray liberally on all mildewed surfaces — tile, grout, caulk, and the ceiling above the shower. Do not dilute: full-strength vinegar is necessary to penetrate biofilm and kill the mildew at the root.",
  },
  {
    name: "Let it sit for 10 minutes",
    text: "Do not wipe immediately. The vinegar needs contact time to break down the mildew cell structure. For heavy buildup on grout, apply a baking soda paste (baking soda + a few drops of water) over the wet vinegar and let it fizz for 5 minutes before scrubbing.",
  },
  {
    name: "Scrub grout and caulk with a toothbrush",
    text: "Use an old toothbrush or a stiff grout brush to work into every grout line and around the caulk bead. These are the two places mildew embeds deepest. Scrub in short back-and-forth strokes, rinsing the brush often.",
  },
  {
    name: "Run the exhaust fan and keep it running",
    text: "After cleaning, run the bathroom exhaust fan for at least 30 minutes. Going forward, run it during every shower and for 20 minutes after. This single habit eliminates most of the moisture that feeds mildew regrowth. If your fan is weak or absent, a dehumidifier set to 50% RH is essential.",
  },
];

const faqs = [
  {
    q: "Does vinegar actually kill mildew, or just cover the smell?",
    a: "It kills it. Research published by the USDA Agricultural Research Service found that white vinegar eliminates approximately 82% of mold species, including the most common mildew-forming types. It works by disrupting the cell membrane of the fungus. Bleach, by contrast, kills surface mold but does not penetrate porous materials like grout, wood, or drywall — meaning mildew regrows faster after bleach treatment than after vinegar treatment.",
  },
  {
    q: "Is vinegar safe to use around children and pets?",
    a: "Yes. Diluted and dried white vinegar leaves no toxic residue, does not off-gas harmful fumes beyond mild acetic acid smell (which dissipates in minutes), and is non-carcinogenic. Bleach, by contrast, produces chlorine fumes that irritate the respiratory tract — a serious concern for children with asthma, which is disproportionately prevalent in Maryland's older housing stock. For eco-conscious homes, vinegar is the safer choice by every measure.",
  },
  {
    q: "What indoor humidity level prevents mildew from growing?",
    a: "Keep indoor relative humidity below 50% year-round. Mildew cannot sustain growth below that threshold. In Maryland, this is particularly challenging from June through September, when outdoor dew points regularly hit 70°F or higher. A dehumidifier rated for your square footage — typically one 70-pint unit per 1,000 sq ft of basement — is the most effective tool. Keep it emptied or connected to a drain line so it runs continuously.",
  },
  {
    q: "Will mildew smell come out of clothes in one wash?",
    a: "Sometimes — but usually not on the first cycle alone if the smell is established. The most reliable method: pre-soak the affected items in a basin of cold water with 1 cup of white vinegar for 30 minutes before washing. Then wash on the hottest setting the fabric allows, with your normal HE detergent. Skip the fabric softener — it coats fibers and traps odor. Dry in direct sunlight if possible; UV exposure kills residual spores. Repeat if the smell remains after drying.",
  },
  {
    q: "What are my rights as a Maryland renter if my landlord won't fix mildew?",
    a: "Maryland law (Md. Code, Real Property § 8-211) requires landlords to maintain rental properties in a habitable condition, which includes freedom from mold and mildew that constitutes a health hazard. If your landlord fails to address documented mildew after written notice, you may have the right to withhold rent, repair and deduct, or terminate the lease. Document everything with photos and written requests. Silver Spring and Montgomery County renters can also contact the Montgomery County Department of Housing and Community Affairs for code enforcement assistance.",
  },
];

const HowToGetRidOfMildewSmellNaturally = () => {
  const { seoHelmet } = useSEO({
    title: "How to Get Rid of Mildew Smell Naturally (Maryland Guide)",
    description:
      "Eliminate mildew & musty odor from basements, bathrooms & clothes naturally. Humid-climate Maryland guide. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-get-rid-of-mildew-smell-naturally",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to get rid of mildew smell, mildew smell basement, musty smell house, mildew smell clothes, mildew smell Maryland, eco-friendly mildew removal Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Get Rid of Mildew Smell Naturally (The Maryland Humidity Survival Guide)"
        description="Eliminate mildew and musty odor from basements, bathrooms, clothes, and furniture using vinegar, baking soda, and ventilation — no bleach needed."
        url="https://capitalcleancare.com/blog/how-to-get-rid-of-mildew-smell-naturally"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Remove Mildew Smell from a Bathroom Naturally"
        description="Step-by-step guide to eliminating bathroom mildew smell with white vinegar and baking soda — safe for kids, pets, and septic systems."
        url="https://capitalcleancare.com/blog/how-to-get-rid-of-mildew-smell-naturally"
        steps={howToSteps}
        totalTime="PT45M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Get Rid of Mildew Smell Naturally", href: "/blog/how-to-get-rid-of-mildew-smell-naturally" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Get Rid of Mildew Smell" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Baking soda and natural eco-friendly cleaning ingredients for mildew removal">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Get Rid of Mildew Smell Naturally
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The Maryland Humidity Survival Guide
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
              You walk into your <strong>Silver Spring</strong> basement after a week of May rain and it hits you — that damp, earthy, unmistakably musty smell. Or maybe it's the bathroom after a humid weekend, or the gym bag that sat in the car too long. Whatever the source, the culprit is almost always the same: mildew, and the humid Mid-Atlantic air that feeds it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news is that mildew smell is one of the most treatable household problems — and you can eliminate it without bleach, without toxic sprays, and without a contractor. This guide covers every surface and every room, with methods proven safe for kids, pets, and the{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland watershed
              </Link>.
            </p>
          </FadeInSection>

          {/* Why Maryland */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Mildew Loves Maryland Summers
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Maryland's geography puts it at the intersection of humid subtropical and continental climates — meaning summer humidity is extreme and sustained. From June through September, dew points in the Montgomery County area routinely hit 70°F or higher. When outdoor air at that dew point enters a cooler basement or bathroom, it instantly deposits moisture on every surface it touches.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Humidity above 70% RH", "Mildew germinates on any porous surface within 24–48 hours"],
                ["Basements in Gaithersburg & Silver Spring", "Below-grade concrete walls absorb ground moisture year-round, not just after rain"],
                ["Older housing stock", "Pre-1990 homes common in Bethesda and Chevy Chase lack modern vapor barriers and ventilation"],
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
                <strong>Target: keep indoor relative humidity below 50% year-round.</strong> Above 60%, mildew growth is almost inevitable in a Maryland home without mechanical dehumidification. A $30 hygrometer from any hardware store tells you exactly where you stand.
              </p>
            </div>
          </FadeInSection>

          {/* Find the Source */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Find the Source Before You Clean
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cleaning mildew smell without fixing its source is like mopping around a running faucet. Before you reach for the vinegar, spend 10 minutes on a quick inspection.
            </p>
            <div className="space-y-3 mb-10">
              {[
                ["Check under sinks and around toilets", "Water supply line connections and wax ring seals are common slow-leak points that feed sustained mildew growth."],
                ["Inspect basement walls for efflorescence", "White mineral deposits on concrete signal active moisture intrusion from outside — a grading or gutter problem, not a cleaning problem."],
                ["Look behind furniture against exterior walls", "Cold exterior walls sweat in summer humidity. Furniture pushed flush against them traps moisture and grows hidden mildew colonies."],
                ["Check HVAC drain pans and ductwork", "A full condensate drain pan can back up and spray mildew spores throughout the house every time the AC runs. Clear the drain line with a vinegar flush annually."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Bathroom */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Bathroom Mildew Smell — 4 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Bathrooms are the most common mildew source in Maryland homes. The combination of daily steam, poor ventilation, and porous grout creates ideal conditions. These four steps fix both the smell and its cause.
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
            headline="Mildew beyond DIY reach? We handle the deep clean."
            subtext="Capital Clean Care's eco-certified teams serve Rockville, Bethesda, Silver Spring, and Gaithersburg. Vinegar-based protocols — no bleach, no chemical residue."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Basement */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Basement Mildew Smell — 4 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/17182110/pexels-photo-17182110.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Basement with ventilation for humidity control"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Basements in <strong>Silver Spring</strong>, <strong>Gaithersburg</strong>, and older Bethesda neighborhoods are especially vulnerable — they sit below grade, against soil that absorbs and releases moisture seasonally. The goal is to lower humidity and neutralize what's already there.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Set up activated charcoal odor absorbers",
                  text: "Place open bags of activated charcoal (available at hardware stores, ~$10 each) around the basement perimeter. Charcoal adsorbs VOCs and musty odor compounds from the air at the molecular level — unlike baking soda, it doesn't saturate and stop working as quickly. Replace every 2 months.",
                },
                {
                  step: "02",
                  title: "Run a dehumidifier continuously",
                  text: "A 70-pint dehumidifier is the single most effective tool against basement mildew in Maryland's climate. Set it to 45–50% RH and connect it to a floor drain or use the auto-pump feature so it runs without manual emptying. During peak summer humidity, it may extract several gallons of water per day from the air.",
                },
                {
                  step: "03",
                  title: "Wipe hard surfaces with vinegar solution",
                  text: "Mix 1 cup white vinegar with 1 cup water in a spray bottle. Wipe down concrete walls, floor joists, window sills, and any stored items that show visible mildew. For stubborn patches on concrete, apply undiluted vinegar and scrub with a stiff brush. Let air-dry completely before considering any sealing.",
                },
                {
                  step: "04",
                  title: "Improve airflow year-round",
                  text: "Open basement windows on dry days (below 50% outdoor RH — check your weather app). Use box fans to push air from one window to another. If the basement has no windows, a small exhaust fan ducted to the exterior makes a significant difference. Stagnant air is mildew's best friend.",
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

          {/* Clothes */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Clothes & Fabric Mildew Smell — 3 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Mildew in fabric is the result of moisture — a wet towel left in a gym bag, laundry left in the washer too long, or clothes stored in a damp closet. Standard washing often moves the smell around rather than eliminating it. This three-step method works.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Pre-soak in vinegar for 30 minutes",
                  text: "Fill a basin or bathtub with cold water and add 1–2 cups of white vinegar per gallon of water. Submerge the affected items and soak for at least 30 minutes. The vinegar penetrates the fibers and kills the mildew spores before washing. Do not use hot water for the soak — heat sets odors into fabric.",
                },
                {
                  step: "02",
                  title: "Wash on the hottest safe cycle with baking soda",
                  text: "Transfer directly from the soak to the washing machine. Add your usual HE detergent and ½ cup of baking soda (placed in the drum, not the drawer). Select the hottest cycle the garment care label permits. Skip fabric softener — it coats fibers and traps residual odor rather than eliminating it.",
                },
                {
                  step: "03",
                  title: "Dry in direct sunlight",
                  text: "UV light kills residual mildew spores more effectively than a dryer. Hang items outside in direct sun for at least 1–2 hours if possible. If you must use a dryer, run it on the highest heat setting for the full cycle. Never fold or store until completely dry — any residual moisture restarts the problem.",
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

          {/* Furniture */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Furniture & Upholstery — 3 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upholstered furniture, mattresses, and cushions are particularly prone to mildew in basement family rooms and damp bedrooms. You can't throw them in the wash — but these three steps work well on fabric surfaces.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Vacuum thoroughly first",
                  text: "Vacuum all surfaces — including under cushions and along seams — to remove loose mildew spores before any wet treatment. Use the upholstery attachment. Empty or replace the vacuum bag/filter immediately after to prevent re-releasing spores into the room.",
                },
                {
                  step: "02",
                  title: "Apply baking soda and leave overnight",
                  text: "Sprinkle a generous layer of baking soda over the affected cushions, seat surfaces, and armrests. Let it sit for a minimum of 8 hours — overnight is ideal. Baking soda absorbs the odor compounds embedded in the fabric. Vacuum it all up completely the next morning.",
                },
                {
                  step: "03",
                  title: "Mist with diluted vinegar and air in sunlight",
                  text: "Mix 1 part white vinegar with 2 parts water in a spray bottle. Mist lightly — do not saturate. Move the furniture to a sunny spot indoors or outside for 2–4 hours. The combination of vinegar and UV light kills remaining spores. Allow to dry completely before using again.",
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

          {/* Eco gallery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Eco-Friendly Toolkit
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Everything in this guide relies on four ingredients available at any grocery store. This is the{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-safe approach
              </Link>{" "}
              we apply in every home we clean across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland
              </Link>.
            </p>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* Prevention */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              Prevent It Coming Back
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cleaning removes existing mildew. Prevention stops the next cycle from starting. These habits address the Maryland climate directly.
            </p>
            <div className="space-y-3 mb-10">
              {[
                ["Keep indoor humidity below 50% year-round", "Run the AC in summer not just for temperature but for dehumidification. Central AC systems extract significant moisture — but only if they're properly sized and maintained."],
                ["Weekly bathroom wipe-down", "A 2-minute vinegar spray and wipe of tile walls and grout after the last shower of the week prevents spore accumulation between deep cleans."],
                ["Service your AC drain line annually", "Before each Maryland summer, flush the condensate drain with 1 cup of white vinegar to prevent blockage and mold growth in the pan. This also improves AC efficiency."],
                ["Move furniture away from exterior walls", "Leave at least 2 inches of space between furniture and exterior walls to allow airflow and prevent moisture accumulation behind pieces."],
                ["Never store damp items", "Gym bags, beach towels, wet umbrellas — always dry completely before storing. A damp item in an enclosed space is a mildew colony waiting to start."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <Wind className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* When it's mold */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When It's Actually Mold (Not Just Mildew) — Stop and Call a Pro
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4 flex gap-4 items-start">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-2">Know the difference before you clean</p>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Mildew is surface-level — gray or white, powdery, grows on top of materials. It's the smell in your bathroom. <strong>Mold is different</strong>: black, green, or fuzzy; grows into drywall, insulation, and wood framing; and can cause serious respiratory illness. If you see fuzzy black or green growth, especially after a flood, leak, or prolonged dampness, do not attempt DIY cleaning with household products.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Signs you need a mold remediation professional rather than a cleaning service:
            </p>
            <ul className="space-y-2 mb-10">
              {[
                "Visible mold growth larger than 10 square feet (roughly a 3×3 patch)",
                "Mold visible on drywall, insulation, or structural wood",
                "Smell that persists after multiple cleaning attempts with vinegar",
                "Household members experiencing unexplained respiratory symptoms, headaches, or fatigue",
                "Mold discovered after a flood or roof leak",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              For surface-level mildew and the musty smell that comes with Maryland summers, a{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">
                professional deep clean
              </Link>{" "}
              combined with the maintenance habits above handles it completely. More eco-cleaning methods in our{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning tips guide for Maryland homes
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
                Done Fighting Mildew? Let Us Keep It That Way.
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  eco-friendly cleaning
                </Link>{" "}
                for homes across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Rockville, Bethesda, Silver Spring, Gaithersburg, and Potomac. No bleach, no chemical residue, background-checked teams.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "Vinegar-based protocols",
                  "Background-checked teams",
                  "Deep cleaning & odor treatment",
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

export default HowToGetRidOfMildewSmellNaturally;
