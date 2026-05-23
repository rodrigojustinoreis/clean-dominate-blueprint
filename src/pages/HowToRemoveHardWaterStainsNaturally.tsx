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

const HERO_IMAGE =
  "https://images.pexels.com/photos/7005268/pexels-photo-7005268.jpeg?auto=compress&cs=tinysrgb&w=1200";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/5218014/pexels-photo-5218014.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Spray bottle applying vinegar to clean glass",
    caption: "Undiluted white vinegar in a spray bottle — the most effective tool for shower glass and tile.",
  },
  {
    src: "https://images.pexels.com/photos/4386869/pexels-photo-4386869.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sliced lemons as natural acidic cleaner",
    caption: "Lemon juice works like vinegar on mineral deposits — and is safe for chrome, brass, and ceramic.",
  },
  {
    src: "https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Clean chrome bathroom faucet",
    caption: "A vinegar-soaked paper towel wrapped around a faucet base dissolves the toughest calcium ring.",
  },
  {
    src: "https://images.pexels.com/photos/7005476/pexels-photo-7005476.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Sparkling clean shower glass after treatment",
    caption: "The result of 10 minutes of vinegar contact time and a non-scratch scrub: crystal-clear glass.",
  },
];

const howToSteps = [
  {
    name: "Saturate the glass with undiluted white vinegar",
    text: "Fill a spray bottle with straight white vinegar — no water dilution. Spray every inch of the glass surface, including the frame track and lower edge where buildup is heaviest. For heavily scaled glass, soak paper towels in vinegar and press them flat against the surface so the acid maintains continuous contact. Leave for at least 5–10 minutes; for thick mineral deposits, 20–30 minutes gives significantly better results.",
  },
  {
    name: "Scrub with a non-scratch pad using circular strokes",
    text: "Use a non-scratch scrubbing pad (white or yellow ScotchBrite, or a dedicated shower scrubber) to work the dissolved mineral deposits off the glass in circular motions. Apply firm, even pressure — the vinegar has already dissolved the calcium carbonate bonds, so the scrubbing is just mechanical removal. For stubborn spots, make a paste of baking soda and a few drops of dish soap and apply it to the pad before scrubbing.",
  },
  {
    name: "Rinse thoroughly and squeegee dry immediately",
    text: "Rinse the glass completely with warm water to remove vinegar, dissolved minerals, and any baking soda residue. Immediately squeegee from top to bottom in overlapping vertical strokes — do not let the water air-dry. This single step is also the most important maintenance habit: squeegeeing after every shower prevents new deposits from forming and means you almost never need to deep-clean shower glass again.",
  },
];

const faqs = [
  {
    q: "Is CLR safe to use on bathroom surfaces?",
    a: "CLR (Calcium, Lime & Rust) is effective but contains lactic acid and gluconic acid — synthetic acids that are more aggressive than vinegar. It's not recommended for use on natural stone, colored grout, chrome in extended contact, or in homes with septic systems (the manufacturer's own label advises against septic use). For homeowners in the WSSC service area whose homes connect to municipal sewer, CLR is generally safe on fiberglass and ceramic if rinsed promptly. However, for households on private wells or near the Chesapeake Bay watershed, the eco case for vinegar and lemon is strong — they break down completely in the environment and carry no aquatic toxicity concerns.",
  },
  {
    q: "Can I use vinegar on brushed nickel faucets?",
    a: "Yes, with an important caveat: brief contact only. White vinegar dissolves calcium deposits on brushed nickel effectively, but prolonged exposure — more than 5–10 minutes — can dull the PVD coating that gives brushed nickel its matte finish. The safe method: dampen a cloth with vinegar, wipe the fixture, then rinse immediately with clean water and dry. Never soak brushed nickel in vinegar or wrap it in vinegar-soaked paper towels the way you would chrome. For the base of brushed nickel faucets where buildup is thick, use a paste of baking soda and water instead — gentler, no acid contact.",
  },
  {
    q: "Is lemon juice safe to use on marble or natural stone?",
    a: "No — never use lemon juice or vinegar on marble, travertine, limestone, or any calcareous natural stone. The acid reacts with the calcium carbonate in the stone itself, etching the surface permanently. Etching looks like dull, matte spots or rings and cannot be removed without professional re-honing. For hard water deposits on marble or natural stone surfaces, use a stone-safe cleaner (pH-neutral, specifically labeled for natural stone) or consult a stone restoration professional. Most Maryland bathrooms with hard water buildup have ceramic or porcelain tile — which is completely safe for vinegar and lemon.",
  },
  {
    q: "How do I prevent hard water stains from coming back?",
    a: "The single most effective prevention habit is squeegeeing shower glass and tile walls after every use. It takes 20 seconds and removes the water before minerals can precipitate out as it evaporates. Secondary habits: spray a light mist of diluted vinegar (1:3 vinegar to water) on glass after squeegeeing once a week; keep a microfiber cloth on the faucet and wipe it dry after each use; and apply a hydrophobic glass treatment (like Rain-X) to shower glass every 3–4 months — it dramatically slows mineral adhesion.",
  },
  {
    q: "Will a water softener eliminate hard water stains completely?",
    a: "A whole-house water softener removes calcium and magnesium ions through ion exchange, replacing them with sodium. This largely eliminates hard water scale on all fixtures and appliances. However, softeners don't remove all dissolved minerals — silica deposits can still occur — and softened water isn't recommended for drinking in large quantities due to the added sodium. A point-of-use reverse osmosis filter at the kitchen sink combined with a whole-house softener is the most comprehensive solution for Rockville and Bethesda homes on the WSSC supply. That said, the vinegar maintenance routine covers most households without the $1,500–3,000 softener investment.",
  },
];

const HowToRemoveHardWaterStainsNaturally = () => {
  const { seoHelmet } = useSEO({
    title: "How to Remove Hard Water Stains Naturally (No Harsh Chemicals)",
    description:
      "Remove hard water stains from shower glass, faucets & tiles naturally. Maryland-tested. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-remove-hard-water-stains-naturally",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to remove hard water stains, hard water shower glass, mineral deposits faucet, limescale removal, hard water Maryland, eco-friendly descaling Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Remove Hard Water Stains Naturally (The Maryland Homeowner's Guide)"
        description="Remove hard water stains from shower glass, faucets, tile, toilets, and appliances using white vinegar and lemon juice — no CLR, no harsh chemicals, safe for septic and Chesapeake Bay watershed."
        url="https://capitalcleancare.com/blog/how-to-remove-hard-water-stains-naturally"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Remove Hard Water Stains From Shower Glass Naturally"
        description="Three-step method to remove calcium and mineral deposits from shower glass using white vinegar and a non-scratch pad — no CLR required."
        url="https://capitalcleancare.com/blog/how-to-remove-hard-water-stains-naturally"
        steps={howToSteps}
        totalTime="PT30M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Remove Hard Water Stains Naturally", href: "/blog/how-to-remove-hard-water-stains-naturally" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Remove Hard Water Stains Naturally" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Modern shower with glass enclosure in a clean bathroom">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Remove Hard Water Stains Naturally
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The Maryland Homeowner's Guide
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
              If you live in <strong>Rockville</strong>, <strong>Bethesda</strong>, or anywhere served by the Washington Suburban Sanitary Commission, you're living with hard water. WSSC-supplied water from the Patuxent and Potomac rivers averages <strong>~150 mg/L of calcium carbonate</strong> — classified as moderately hard to hard. Every drop that evaporates off your shower glass, faucet, or tile leaves behind a microscopic mineral deposit. Multiply that by every shower, every day, for months, and you get the white film that no ordinary soap or all-purpose spray can touch.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news: calcium carbonate is alkaline, and acid dissolves it instantly. White vinegar and lemon juice are the safest, cheapest, and most effective tools for every hard water surface in your home — no CLR, no harsh chemicals, and no risk to your septic system or the{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Chesapeake Bay watershed
              </Link>. This guide covers every surface, room by room.
            </p>
          </FadeInSection>

          {/* Why Maryland Has Hard Water */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Maryland Has Hard Water
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Maryland's water hardness varies by source and region, but most of the densely populated Montgomery County area falls in the moderately hard to hard range year-round.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["WSSC municipal supply", "Draws from Potomac and Patuxent rivers. Average hardness 120–170 mg/L CaCO3 depending on season and treatment levels."],
                ["Private wells (rural MD)", "Groundwater percolates through limestone and dolomite bedrock in western Maryland — well water can reach 300+ mg/L, classified as very hard."],
                ["Why it matters indoors", "Above 120 mg/L, calcium deposits form visibly on glass and fixtures within days of cleaning. At 200+ mg/L, appliances like water heaters and dishwashers lose efficiency measurably within a year."],
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
                <strong>The chemistry in one sentence:</strong> Hard water stains are calcium and magnesium carbonate deposits. Acid (vinegar pH ~2.4, lemon juice pH ~2.0) dissolves carbonate on contact. That's why vinegar works where scrubbing alone fails — it's a chemical reaction, not just mechanical abrasion.
              </p>
            </div>
          </FadeInSection>

          {/* Supplies */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What You'll Need
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Everything below is available at any grocery or hardware store for under $15 total. No specialty products, no Amazon orders, no chemical exposure.
            </p>
            <div className="space-y-3 mb-10">
              {[
                ["White vinegar (distilled)", "The workhorse. Use undiluted for heavy deposits; 1:1 with water for regular maintenance. Buy the large gallon jug — you'll use it throughout the house."],
                ["Lemon juice (fresh or bottled)", "Effective alternative to vinegar for fixtures and surfaces where the vinegar smell is bothersome. Slightly less acidic but leaves a neutral scent after rinsing."],
                ["Baking soda", "Mild abrasive for scrubbing paste. Mixed with a few drops of dish soap, it provides mechanical action without scratching tile, porcelain, or glass."],
                ["Microfiber cloths", "Essential for final wipe-down and polishing. Microfiber lifts dissolved minerals from the surface without leaving lint. Have at least three on hand."],
                ["Spray bottle", "For even vinegar application on glass and tile. A standard 32 oz trigger bottle works for most surfaces."],
                ["Non-scratch scrubbing pad", "White or yellow ScotchBrite for glass and tile. Never use green ScotchBrite on glass or chrome — it scratches. An old soft toothbrush handles grout lines."],
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
          </FadeInSection>

          {/* Shower Glass */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Shower Glass — 3 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/5218014/pexels-photo-5218014.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Spray bottle applying vinegar to clean glass"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Shower glass is the most visible hard water surface in any Maryland bathroom and the one most people try to clean with inadequate tools. Glass cleaner and paper towels cannot dissolve calcium carbonate — they just smear it. These three steps do the job in under 30 minutes, even on glass that hasn't been deep-cleaned in months.
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
            headline="Hard water buildup beyond a DIY session? We've got it."
            subtext="Capital Clean Care's deep cleaning service covers bathrooms, fixtures, and tile across Rockville, Bethesda, Silver Spring, and Gaithersburg. Eco-certified, no harsh chemicals."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Faucets & Fixtures */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Faucets & Fixtures — 3 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/271631/pexels-photo-271631.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Clean chrome bathroom faucet"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Faucet bases and aerators collect the heaviest mineral deposits in the bathroom — water drips and sits there daily. Chrome tolerates vinegar well with longer contact. Brushed nickel and matte black finishes need briefer contact time (see the FAQ below).
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Wrap the base in a vinegar-soaked paper towel",
                  text: "Saturate several layers of paper towels or a small cloth rag with white vinegar and wrap it firmly around the faucet base where the white calcium ring forms. Secure with a rubber band or simply tuck it tightly. Leave for 20–30 minutes for chrome; 5 minutes maximum for brushed nickel or matte black. The extended contact time on chrome is what dissolves built-up mineral rings that a quick wipe never reaches.",
                },
                {
                  step: "02",
                  title: "Clean the aerator with a vinegar soak",
                  text: "Unscrew the aerator (the small screen at the tip of the faucet — usually hand-tightens off). Drop it into a small cup or zip-lock bag filled with undiluted vinegar. Soak for 30 minutes to 1 hour. Rinse under running water and use an old toothbrush to scrub any remaining deposits from the screen. Reinstall. A clean aerator restores full water pressure and eliminates the sideways spray caused by partially blocked mineral buildup.",
                },
                {
                  step: "03",
                  title: "Polish dry with a microfiber cloth",
                  text: "After removing the vinegar wrap and rinsing the fixture, dry and polish immediately with a clean microfiber cloth. Air-drying leaves new water spots from the rinse water — microfiber removes all moisture and brings chrome or nickel to a streak-free shine. A drop of mineral oil on the cloth after polishing creates a light protective layer that slows future buildup.",
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

          {/* Tile & Tub */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Tile & Tub Surfaces — 3 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Ceramic and porcelain tile are acid-safe and respond quickly to vinegar. Grout lines concentrate mineral deposits and need a little more attention. Note: if you have natural stone tile (marble, travertine), see the FAQ — do not use vinegar or lemon on stone surfaces.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Spray tile walls with undiluted vinegar and wait",
                  text: "Spray all tile surfaces — walls, tub surround, and floor tiles if applicable — with undiluted vinegar. Pay extra attention to the waterline around the tub where the most concentrated deposits form. Let sit for 10–15 minutes. For thick, long-neglected deposits, apply a second coat after 5 minutes without wiping the first.",
                },
                {
                  step: "02",
                  title: "Scrub grout with a baking soda paste and toothbrush",
                  text: "Mix 2 tablespoons of baking soda with enough dish soap to form a thick paste. Apply the paste to grout lines with an old toothbrush and scrub in short back-and-forth strokes. The baking soda provides gentle abrasive action while the vinegar already on the surface creates a mild fizzing reaction that lifts the mineral deposits from within the grout pores. Work in sections and don't let the paste dry.",
                },
                {
                  step: "03",
                  title: "Rinse from top to bottom and dry the grout",
                  text: "Rinse tile walls thoroughly from the top down. Pay attention to rinsing grout lines completely — baking soda residue left in grout can attract dirt and actually make lines look darker over time. After rinsing, wipe tile surfaces with a dry microfiber cloth or use a squeegee. Leaving grout damp after cleaning is the primary reason mildew returns quickly in Maryland bathrooms.",
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

          {/* Toilet Bowls */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Toilet Bowls — 3 Steps (Overnight Method)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The brown or orange ring at the waterline in toilets is iron and mineral deposits from hard water — not a hygiene failure. Standard toilet bowl cleaners mask it with fragrance but rarely dissolve it completely. The overnight vinegar method works on rings that have resisted scrubbing for months.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Pour 2 cups of white vinegar into the bowl before bed",
                  text: "Pour 2 cups of undiluted white vinegar directly into the toilet bowl at night, just before you go to bed. Swish briefly with a brush to distribute it around the ring. Do not flush. The extended overnight contact time (8+ hours) is what makes this method work where a 5-minute spray treatment fails — the acid needs time to dissolve thick, layered mineral deposits.",
                },
                {
                  step: "02",
                  title: "In the morning, scrub the ring with a stiff brush",
                  text: "After the overnight soak, the mineral ring should be significantly softened or completely dissolved. Scrub with a stiff toilet brush, paying attention to the waterline and under the rim. For any remaining spots, sprinkle baking soda on the brush before scrubbing — the mild abrasive helps with mechanically stubborn deposits the acid has already loosened.",
                },
                {
                  step: "03",
                  title: "Flush and repeat if needed for very old stains",
                  text: "Flush to rinse. For toilets with years of accumulated mineral buildup, one overnight treatment may lighten but not fully remove the ring. Repeat for 2–3 consecutive nights. Each treatment dissolves another layer. Pouring a cup of vinegar into the bowl weekly as maintenance prevents the ring from reforming — takes 10 seconds and keeps the overnight deep-clean from being necessary again.",
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

          {/* Dishwasher & Coffee Maker */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Dishwasher & Coffee Maker Descaling — 2 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Appliances that heat water are the most vulnerable to hard water scale. A layer of mineral buildup on a water heater element or dishwasher spray arm forces the appliance to work harder, uses more energy, and shortens the lifespan. Descaling twice a year keeps them running efficiently — no commercial descaler needed.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Dishwasher: run an empty hot cycle with vinegar",
                  text: "Place a dishwasher-safe cup filled with 2 cups of white vinegar on the top rack of an otherwise empty dishwasher. Run a full hot cycle. The vinegar distributes through the spray arms and interior, dissolving mineral deposits from the heating element, spray arm holes, filter, and interior walls. Follow with a second empty cycle with ½ cup of baking soda sprinkled on the bottom — this removes any vinegar smell and adds a mild scrubbing action on the interior.",
                },
                {
                  step: "02",
                  title: "Coffee maker: run a vinegar-water descale cycle",
                  text: "Fill the water reservoir with a 1:1 mixture of white vinegar and water. Run a full brew cycle without coffee. Pause halfway through for 30 minutes to let the vinegar solution sit in the heating element — this extended contact time dissolves calcium scale that builds up inside the element over months of use. Complete the cycle, then run two full cycles of plain water to rinse the vinegar completely before brewing coffee again. Repeat every 1–3 months depending on your water hardness.",
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

          {/* Natural Toolkit Gallery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Natural Hard Water Toolkit
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-safe approach
              </Link>{" "}
              to hard water removal uses two ingredients: white vinegar and lemon juice. Both are safe for{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland's
              </Link>{" "}
              Chesapeake Bay watershed, safe for septic systems, and cost a fraction of commercial descalers. Every scenario in this guide is covered by these four tools.
            </p>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* Prevention */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              Prevent Future Buildup
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              With WSSC water averaging 150 mg/L of hardness year-round, prevention isn't optional — it's what separates a 15-minute weekly wipe from a two-hour quarterly deep-clean. These habits keep every surface in this guide from needing major treatment again.
            </p>
            <div className="space-y-3 mb-10">
              {[
                ["Squeegee shower glass after every use", "The single highest-impact habit. Takes 20 seconds. Removes all mineral-laden water before it can evaporate and deposit. A $6 shower squeegee hung on the wall eliminates the primary source of glass scale."],
                ["Weekly vinegar spray on tile and glass", "A quick mist of 1:3 vinegar-to-water on shower walls and glass after the last shower of the week prevents accumulation between deep cleans. No scrubbing needed — just spray and walk away."],
                ["Wipe faucets dry after each use", "Keep a microfiber cloth folded on the sink. Wiping faucets and the base of fixtures dry after use prevents the daily drip deposits that create mineral rings."],
                ["Descale appliances every 90 days", "Set a quarterly reminder for dishwasher and coffee maker descaling. Hard water scale on heating elements builds invisibly — treating it before it's thick is faster and more effective."],
                ["Consider a whole-house water softener", "For homes with very hard water (200+ mg/L) or new construction, a water softener eliminates scale at the source. Installation runs $1,500–3,000 in the Rockville and Bethesda area but pays back in extended appliance life and reduced cleaning time."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <Droplets className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* When You Need a Pro */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When You Need a Professional
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4 flex gap-4 items-start">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-2">Some buildup has compounded beyond DIY reach</p>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Years of mineral deposits on glass can etch into the surface itself — creating a texture that traps future deposits and can't be removed with acid alone. At that point, professional glass polishing or panel replacement may be necessary.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Signs the job needs professional-level treatment:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Shower glass has permanent haziness or etching that remains after vinegar treatment — the glass surface itself has been damaged",
                "Grout is so heavily calcified it has changed color and texture — grout replacement may be required",
                "Toilet bowl stains have persisted through multiple overnight vinegar treatments — iron staining may require a different treatment",
                "Dishwasher or appliance scale has caused mechanical failure — heating element replacement needed",
                "Multiple bathrooms with years of neglect — too large a scope for a single DIY session",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Capital Clean Care's{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">
                deep cleaning service
              </Link>{" "}
              handles bathroom mineral buildup across the Montgomery County area using the same vinegar-based protocols in this guide — scaled to cover every fixture, tile, and grout line in the home systematically. More eco cleaning methods in our{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning tips for Maryland homes
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
                Ready for Spotless Fixtures? Let Us Handle the Deep Clean.
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
                — Rockville, Bethesda, Silver Spring, Gaithersburg, and Potomac. Vinegar-based protocols, background-checked teams, safe for septic and the Bay.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "No CLR or harsh acids",
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

export default HowToRemoveHardWaterStainsNaturally;
