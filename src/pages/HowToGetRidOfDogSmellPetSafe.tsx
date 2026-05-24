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
  "https://images.pexels.com/photos/2248516/pexels-photo-2248516.jpeg?auto=compress&cs=tinysrgb&w=1200";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/5482615/pexels-photo-5482615.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pet bedding being washed for odor removal",
    caption: "Dog beds hold more odor per square foot than any other surface in the home — wash weekly.",
  },
  {
    src: "https://images.pexels.com/photos/4202485/pexels-photo-4202485.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Baking soda deodorizing carpet",
    caption: "Baking soda neutralizes acidic odor compounds in carpet fiber — leave overnight for best results.",
  },
  {
    src: "https://images.pexels.com/photos/4440525/pexels-photo-4440525.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Pet-safe enzyme cleaner sprayed on fabric",
    caption: "Enzyme cleaners break down the odor molecules themselves — unlike masking sprays, they eliminate the source.",
  },
  {
    src: "https://images.pexels.com/photos/5865645/pexels-photo-5865645.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Happy clean dog in a fresh-smelling Maryland home",
    caption: "A clean dog is the single most effective odor prevention measure — bathing every 4–6 weeks makes every other step easier.",
  },
];

const howToSteps = [
  {
    name: "Sprinkle baking soda over the entire carpet and let sit overnight",
    text: "Apply a visible, generous layer of baking soda across the entire carpet — not just the spots where the dog sleeps. Dog sebum and dander travel much farther than the obvious areas. Work the baking soda lightly into the pile with a soft brush or the back of a broom. Leave undisturbed for a minimum of 8 hours; overnight is ideal. Baking soda (sodium bicarbonate) is alkaline and chemically neutralizes the acidic compounds in dog sebum and urine — it doesn't mask them.",
  },
  {
    name: "Vacuum slowly with a HEPA filter vacuum",
    text: "In the morning, vacuum the entire carpet using slow, overlapping passes. Do not rush — one quick pass at walking speed releases more dander than it extracts. A HEPA-filter vacuum is important for pet homes: standard vacuums without HEPA filtration capture the larger particles but exhaust microscopic dander and allergens back into the room air. Empty the canister or replace the bag outside immediately after vacuuming to avoid re-releasing captured particles indoors.",
  },
  {
    name: "Apply enzyme cleaner to high-traffic zones and accident spots",
    text: "After vacuuming, identify the areas where your dog spends the most time and any spots with previous urine accidents (use a UV black light in a darkened room to find old spots invisible in daylight). Apply a pet-safe enzyme cleaner generously to these areas — soak the carpet, not just the surface. Enzyme cleaners contain biological catalysts that break down the protein chains in urine, saliva, and sebum at the molecular level. Let sit for the dwell time on the product label (typically 10–15 minutes). Blot with a clean cloth — do not scrub.",
  },
  {
    name: "Steam clean for deep fiber penetration on persistent odor",
    text: "For carpet with months or years of absorbed dog odor, hot-water extraction (steam cleaning) reaches the backing and pad beneath the carpet pile where most of the odor compounds have settled. The high-temperature water flushes and extracts what surface methods can't reach. If renting a machine, make two passes — one with the hot water/cleaner solution and one with clean water only to extract residue. Allow carpet to dry completely (24 hours with good airflow) before allowing the dog back on it.",
  },
];

const faqs = [
  {
    q: "Are essential oils safe to use for dog odor in the home?",
    a: "No — many commonly recommended essential oils are toxic to dogs. Tea tree oil, eucalyptus, peppermint, and citrus oils (limonene and linalool) are among the most dangerous, causing symptoms ranging from skin irritation to liver damage and neurological effects at household concentrations. Even oils often described as 'pet-friendly' — like lavender — are not definitively safe for dogs and should be avoided on surfaces dogs contact. The safe alternatives for dog odor are baking soda, white vinegar (diluted, safe when dry), activated charcoal, and enzyme cleaners. Do not use essential oil diffusers in rooms where dogs spend time.",
  },
  {
    q: "Does Febreze eliminate dog odor, or just cover it up?",
    a: "Febreze works through a cyclodextrin molecule that traps odor compounds and prevents them from reaching your nose — it's not a true masking agent, but it's also not elimination. The trapped odor compounds remain in the fabric; when Febreze wears off or gets wet, the smell can return. Febreze is generally considered safe around pets when used as directed and allowed to dry fully before pets contact the surface. For a home with persistent dog odor, Febreze is a short-term freshener, not a substitute for enzyme cleaner treatment and the baking soda carpet method.",
  },
  {
    q: "Does steam cleaning actually remove dog odor from carpet?",
    a: "Yes — when done correctly. Hot-water extraction (what's typically called steam cleaning) reaches the carpet backing and pad, where most of the sebum and urine compounds have settled after months of accumulation. The key is using an enzyme pre-treatment before steam cleaning, not just heat and water alone. Heat without enzymatic pre-treatment can actually set some protein-based odor compounds deeper into the fiber. The sequence matters: enzyme cleaner first, allow full dwell time, then hot-water extraction. Professional steam cleaning (versus rental machines) reaches higher water temperatures and stronger extraction pressure, which produces significantly better results.",
  },
  {
    q: "How do I prevent dog smell from coming back after deep cleaning?",
    a: "Prevention is a maintenance routine, not a one-time event. The most impactful habits: bathe your dog every 4–6 weeks (more in Maryland's humid summers, when sebum production increases); wash dog bedding weekly in hot water; vacuum carpets twice a week with a HEPA vacuum; replace HVAC filters monthly instead of quarterly; and keep a window cracked or run an exhaust fan in rooms where your dog sleeps. A weekly baking soda sprinkle on dog-frequented carpet areas, left for 30 minutes then vacuumed, prevents accumulation between deep cleans.",
  },
  {
    q: "Is carpet or hardwood better for controlling dog smell?",
    a: "Hardwood, tile, and other hard floors are significantly easier to keep odor-free than carpet. Hard surfaces don't absorb sebum, dander, or urine — they sit on the surface until wiped. Carpet traps all of these compounds in the fiber, backing, and pad, where they accumulate over months. If you're choosing flooring for a dog home in Maryland, sealed hardwood or luxury vinyl plank (LVP) is the better choice for odor management. If you have carpet and are keeping it, area rugs in dog zones (which can be washed or replaced) and enzyme-based maintenance cleaning are the most practical approach.",
  },
];

const HowToGetRidOfDogSmellPetSafe = () => {
  const { seoHelmet } = useSEO({
    title: "How to Get Rid of Dog Smell in House (Pet-Safe Methods)",
    description:
      "Remove dog odor from carpet, furniture, beds & air without harsh chemicals. Pet-safe Maryland guide. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-get-rid-of-dog-smell-pet-safe",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to get rid of dog smell in house, dog smell carpet, deodorize dog bed, pet odor furniture, dog odor removal Maryland, pet-safe cleaning Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Get Rid of Dog Smell in Your House (Pet-Safe Methods That Work)"
        description="Remove dog odor from carpet, furniture, beds, and air using baking soda, enzyme cleaners, and vinegar — no essential oils (toxic to dogs), no harsh chemicals, safe for the Chesapeake Bay watershed."
        url="https://capitalcleancare.com/blog/how-to-get-rid-of-dog-smell-pet-safe"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Deep Clean Dog Smell From Carpet"
        description="Four-step method to remove dog odor from carpet using baking soda, a HEPA vacuum, enzyme cleaner, and steam extraction — no harsh chemicals, pet-safe."
        url="https://capitalcleancare.com/blog/how-to-get-rid-of-dog-smell-pet-safe"
        steps={howToSteps}
        totalTime="PT60M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Get Rid of Dog Smell (Pet-Safe)", href: "/blog/how-to-get-rid-of-dog-smell-pet-safe" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Get Rid of Dog Smell (Pet-Safe)" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Dog relaxing on a couch in a clean home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Get Rid of Dog Smell in Your House
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Pet-Safe Methods That Actually Work
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
              You live in <strong>Potomac</strong>, you have a 90-pound golden retriever, and you've accepted that your home has a certain… ambiance. Guests notice it the moment they walk in, even though you stopped noticing it months ago. You've tried candles, plug-ins, and a Febreze habit that's gotten expensive — and the smell keeps coming back, usually faster when it rains or the humidity climbs, which in Maryland runs from May through September without a break.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The smell isn't going away because you haven't addressed its sources — and most of the common fixes (essential oil diffusers, masking sprays) either don't work or aren't safe around dogs. This guide covers every source of dog odor in the home with methods that eliminate it rather than cover it, all without chemicals that could harm your pet. For more{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning tips for Maryland homes
              </Link>
              , see our full guide.
            </p>
          </FadeInSection>

          {/* Why Houses Smell Like Dog */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Your House Smells Like Dog
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dog smell isn't one odor — it's several, from different biological sources, each requiring a different approach to eliminate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                ["Sebum (skin oil)", "Dogs have sebaceous glands distributed across their skin that produce oils — much more than humans. These oils coat the fur and transfer to every surface the dog contacts: carpet, upholstery, bedding, walls at shoulder height. Sebum oxidizes and develops a rancid, 'dog smell' character over time."],
                ["Saliva", "Dogs lick themselves, their toys, and anything that interests them. Dried saliva leaves protein compounds on surfaces that off-gas continuously and intensify in Maryland's humid summer air."],
                ["Dander", "Microscopic skin flakes shed constantly and carry odor compounds. Dander travels throughout the home in air currents and accumulates in HVAC filters, upholstery seams, and duct corners — producing smell even in rooms the dog rarely enters."],
                ["Urine (historic accidents)", "Even accidents that were cleaned immediately may have penetrated carpet backing and subfloor. Uric acid crystals don't dissolve in water — they reactivate when humid air hits them, which in a Maryland summer means they smell worse June through August."],
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
                <strong>Maryland humidity is a multiplier.</strong> Humid air reactivates dried sebum, saliva, and uric acid deposits on every surface simultaneously. During Bethesda and Potomac summers — when dew points regularly exceed 70°F — a home that smells acceptable in dry winter air can become noticeably stronger overnight. This is why odor control in a Maryland dog home requires elimination, not just masking.
              </p>
            </div>
          </FadeInSection>

          {/* Start with the Dog */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Start With the Dog
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every surface cleaning step below will be undone within days if the primary odor source — the dog — isn't addressed first. A clean home with an unwashed dog just means the dog recoats everything faster.
            </p>
            <div className="space-y-3 mb-10">
              {[
                ["Bathe every 4–6 weeks (more in summer)", "Most dogs need bathing every 4–6 weeks to keep sebum buildup at bay. In Maryland's humid summers, when dogs spend more time outdoors and sebum production increases with heat, every 3–4 weeks is more realistic. Use a dog-specific shampoo — human shampoos disrupt the pH of dog skin and can increase sebum production."],
                ["Brush 2–3 times per week", "Regular brushing removes loose fur, dander, and surface sebum before it transfers to your floors and furniture. Brush outdoors or in a bathroom where loose hair can be contained. A deshedding brush (like a Furminator) significantly reduces ambient dander in the home compared to standard bristle brushes."],
                ["Clean ears and teeth monthly", "Ear infections and dental disease produce their own distinct odors that many owners attribute to general 'dog smell' — and masking the whole house doesn't solve them. If your dog's ears smell yeasty or their breath is unusually strong, a vet visit addresses something no amount of baking soda will fix."],
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

          {/* Dog Beds & Toys */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Clean Dog Beds & Toys — 3 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/5482615/pexels-photo-5482615.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Pet bedding being washed for odor removal"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A dog bed that's washed monthly holds more concentrated odor per square foot than any other surface in the home. Dogs sleep there 8–14 hours a day, depositing a continuous layer of sebum, dander, and saliva. Washing every 1–2 weeks is the highest-impact single habit for reducing ambient dog smell.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Pre-soak in a white vinegar bath for 30 minutes",
                  text: "Fill a bathtub or large basin with cold water and add 1–2 cups of white vinegar per gallon of water. Submerge the dog bed cover or the entire bed (if small enough) and soak for 30 minutes. The vinegar's acetic acid penetrates the fabric and begins breaking down sebum and bacterial biofilm before the wash cycle. Remove any loose fur with a rubber glove while submerged. White vinegar is safe for dogs — it leaves no harmful residue when rinsed.",
                },
                {
                  step: "02",
                  title: "Machine wash on the hottest safe cycle with an enzyme detergent",
                  text: "Transfer directly to the washing machine. Add your regular HE detergent plus ½ cup of baking soda placed directly in the drum. If the bedding care label allows hot water, use it — heat kills odor-causing bacteria more effectively than cold. For a seriously smelly bed, add an enzyme-based pet laundry booster (available at pet stores) alongside the regular detergent. These enzyme products specifically target the protein compounds in pet sebum and urine that regular detergent leaves behind.",
                },
                {
                  step: "03",
                  title: "Dry in direct sunlight if possible",
                  text: "UV light from direct sun kills residual bacteria and odor-causing compounds more effectively than a dryer — and it's free. Hang the bed cover or lay the full bed in direct sun for 2+ hours. If using a dryer, run on the highest heat setting the material allows for the full cycle. Never store or return to use until completely dry — a damp dog bed in Maryland summer air will smell musty within 12 hours. Wash fabric toys on the same cycle monthly.",
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

          <BlogInlineCTA
            headline="Dog odor beyond a weekend project? We handle it."
            subtext="Capital Clean Care's pet-home deep cleaning covers carpet, upholstery, and HVAC across Potomac, Bethesda, Rockville, and Silver Spring. Pet-safe products, background-checked teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Carpet & Rugs */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Deep Clean Carpet & Rugs — 4 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/4202485/pexels-photo-4202485.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Baking soda deodorizing carpet"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Carpet is the largest odor reservoir in any dog home. The fiber, backing, and pad each hold compounds at different depths. This four-step sequence works from the surface down — surface neutralization first, then molecular breakdown, then deep extraction.
            </p>
            <div className="space-y-8 mb-10">
              {howToSteps.map((step, i) => (
                <div key={step.name} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center shadow-md">
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

          {/* Sofas & Furniture */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Sofas & Furniture — 3 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upholstered furniture absorbs dog sebum from contact and dog dander from the air. The seams, cushion crevices, and back cushions where dogs lean are typically the heaviest concentration points. You can't put a sofa in the washing machine, but these three steps reach the fiber level effectively.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Vacuum all surfaces with the upholstery attachment",
                  text: "Vacuum every surface — seat cushions, back cushions, armrests, the sides of the sofa, and especially the crevice between the seat and back. Use a rubber glove to wipe the surface first — static electricity in the rubber lifts embedded fur that the vacuum nozzle misses. Remove and vacuum underneath cushions; dog dander accumulates heavily there. Empty the canister outside immediately.",
                },
                {
                  step: "02",
                  title: "Mist with diluted white vinegar and let air-dry",
                  text: "Mix 1 part white vinegar with 2 parts water in a spray bottle. Mist lightly over all upholstered surfaces — do not saturate. The vinegar smell dissipates within 1–2 hours as it dries, taking odor compounds with it. For heavily smoked-in or sebum-saturated upholstery, use a diluted enzyme cleaner (follow label dilution instructions) instead of vinegar — enzyme cleaners break down the protein chains in sebum more effectively than acid alone. Do not let pets on the treated furniture until fully dry.",
                },
                {
                  step: "03",
                  title: "Apply baking soda, wait 20 minutes, then vacuum again",
                  text: "After the vinegar mist has dried completely, sprinkle a light layer of baking soda over seat cushions and armrests. Let sit for 20–30 minutes. Vacuum thoroughly. This second baking soda step picks up any residual odor compounds the vinegar loosened to the surface. For leather furniture, skip the baking soda and vinegar — use a leather-safe enzyme cleaner and follow with a leather conditioner to prevent drying.",
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

          {/* HVAC */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              HVAC, Filters & Air — 2 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Dog dander is microscopic and airborne — it circulates through your HVAC system constantly, depositing in return vents, ductwork, and on the coil. A dog home with a standard quarterly filter-change schedule is effectively pumping dander-laden air through every room. This is also why dog smell appears in rooms the dog never enters.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Switch to MERV-11 or higher filters and replace monthly",
                  text: "Standard fiberglass HVAC filters (MERV 1–4) capture large particles but let pet dander pass through freely. MERV-11 filters capture particles as small as 1 micron — including most pet dander and the allergen compounds it carries. For a dog home, replace monthly instead of quarterly: a MERV-11 filter in a pet household reaches capacity in 3–4 weeks, at which point it restricts airflow and recirculates what it can no longer capture. Also wipe all supply and return grilles with a damp microfiber cloth monthly — they accumulate dander-laden dust that off-gasses into room air.",
                },
                {
                  step: "02",
                  title: "Run a HEPA air purifier in the main rooms",
                  text: "A HEPA + activated carbon air purifier in the living room and bedroom (where the dog spends most time) continuously filters dander, odor VOCs, and hair from the room air between HVAC cycles. Size matters: look for a unit rated for the square footage of the room — a small purifier in a large open-plan living area won't circulate air effectively. Run continuously, not just when you notice smell. Replace the activated carbon filter on schedule — an exhausted carbon filter stops adsorbing odor compounds and can start releasing them.",
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

          {/* Natural Odor Eliminators */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Natural Odor Eliminators — What's Safe and What Isn't
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6 flex gap-4 items-start">
              <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-red-900 mb-2">Essential oils are not pet-safe — do not use them</p>
                <p className="text-sm text-red-900 leading-relaxed">
                  Tea tree oil, eucalyptus, peppermint, and citrus oils (limonene, linalool) are toxic to dogs at household concentrations. They cause symptoms ranging from skin irritation and GI distress to liver toxicity and neurological effects. Lavender is often cited as safe but remains controversial in veterinary literature. <strong>Do not use essential oil diffusers, plug-ins with essential oils, or DIY sprays containing these oils in any room where dogs spend time.</strong>
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-5">
              These four options are genuinely safe and effective for{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-friendly cleaning
              </Link>{" "}
              in a dog home across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland
              </Link>:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Baking soda (bowls or sprinkle)", "Open bowls of baking soda placed in dog-heavy rooms absorb airborne odor compounds passively. Replace every 2 weeks. Also use as a surface treatment on carpet and upholstery as described above. Completely non-toxic if ingested by dogs in small amounts."],
                ["White vinegar (diluted, when dry)", "Vinegar mist neutralizes odor compounds on contact and is safe for dogs once dry. The acetic acid smell dissipates quickly. Never apply to surfaces while wet and then let the dog lie on them immediately — wait for full drying."],
                ["Activated charcoal bags", "Activated charcoal adsorbs VOCs and odor compounds from room air at the molecular level. Place in areas the dog frequents most. Safe if the dog investigates and sniffs the bag. Replace or recharge in sunlight every 4–6 weeks."],
                ["Enzyme-based pet cleaners (spray form)", "Products like Nature's Miracle, Rocco & Roxie, or Zymox use biological enzymes that break down odor compounds at the molecular level. Once dry, the enzyme residue is non-toxic. Use on carpet, upholstery, and hard floors for ongoing odor maintenance."],
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
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* When to Call a Pro */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              When to Call a Professional
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The methods in this guide handle ongoing dog odor maintenance effectively. But some situations have accumulated past what a weekend cleaning project can address:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Carpet odor returns within days of deep cleaning — uric acid has penetrated the pad and possibly the subfloor, which surface methods can't reach",
                "Previous owners' dogs left odor embedded in carpet, subfloor, or drywall throughout the home",
                "Multiple rooms with years of accumulated sebum — too large a scope for a single session",
                "HVAC ductwork has accumulated dander over years — professional duct cleaning needed",
                "Furniture odor remains after vinegar and enzyme treatment — professional hot-water extraction on upholstery may be required",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Capital Clean Care's{" "}
              <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">
                recurring cleaning service
              </Link>{" "}
              keeps pet homes in Montgomery County on a schedule that prevents odor from accumulating between deep treatments — Potomac, Bethesda, Rockville, Silver Spring, and Gaithersburg. Pet-safe protocols on every visit. See more in our{" "}
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
                Love Your Dog. Love Your Home. We Help With Both.
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  eco-friendly cleaning
                </Link>{" "}
                and{" "}
                <Link to="/services/recurring-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  recurring cleaning
                </Link>{" "}
                for pet homes across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Potomac, Bethesda, Rockville, Silver Spring, and Gaithersburg. Pet-safe products, background-checked teams, no essential oils.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "Pet-safe products only",
                  "Background-checked teams",
                  "Enzyme-based protocols",
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

export default HowToGetRidOfDogSmellPetSafe;
