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
  "https://images.pexels.com/photos/19026351/pexels-photo-19026351.jpeg?auto=compress&cs=tinysrgb&w=1200";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/6690850/pexels-photo-6690850.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Baking soda used as natural deodorizer",
    caption: "Baking soda draws nicotine compounds out of carpet fibers and upholstery — leave it overnight for best results.",
  },
  {
    src: "https://images.pexels.com/photos/8564622/pexels-photo-8564622.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Bowls of natural odor absorbers",
    caption: "Vinegar bowls, activated charcoal, and coffee grounds passively pull smoke VOCs from the air.",
  },
  {
    src: "https://images.pexels.com/photos/9361627/pexels-photo-9361627.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Air purifier in a clean living room",
    caption: "A HEPA + activated carbon purifier handles airborne molecules — after surface cleaning removes the source.",
  },
  {
    src: "https://images.pexels.com/photos/18224551/pexels-photo-18224551.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Fresh smoke-free living room",
    caption: "The result of deep-cleaning walls, carpet, and HVAC: a genuinely fresh, smoke-free home.",
  },
];

const howToSteps = [
  {
    name: "Open all windows and doors simultaneously",
    text: "Create true cross-ventilation by opening every window and exterior door at the same time. Cigarette smell is trapped in stagnant air — moving it out is step one. In Silver Spring or Gaithersburg, choose a dry day with outdoor humidity below 60% to avoid pulling in humid air that drives deeper absorption into walls and flooring.",
  },
  {
    name: "Set up fans in a push-pull configuration",
    text: "Place one fan in a window blowing inward (intake) and a second fan at the opposite end of the home blowing outward (exhaust). This pressure differential flushes the interior air volume in 15–20 minutes. For multi-story homes, run exhaust fans at the top floor and intake fans at the lowest level — smoky, warm air rises and collects at the ceiling.",
  },
  {
    name: "Run HVAC on fan-only mode while ventilating",
    text: "Set your thermostat to 'fan only' (not heating or cooling) while windows are open. This circulates interior air continuously through your filters. Immediately after this step, replace HVAC filters — they will have captured a heavy concentration of smoke particulates and nicotine compounds. Use a MERV-11 or higher filter for smoke removal.",
  },
];

const faqs = [
  {
    q: "How long does it take to fully remove cigarette smell from a house?",
    a: "It depends on how long the home was smoked in and how deeply odor has penetrated surfaces. A lightly smoked home can be freshened within a week of consistent ventilation, cleaning, and natural absorbers. A home with years of indoor smoking — where nicotine has saturated drywall, subfloor, and HVAC ductwork — typically takes 2–4 weeks of deep cleaning, wall washing, repainting, and HVAC servicing. In severe cases, drywall and carpet must be replaced entirely. Professional move-in cleaning significantly compresses that timeline.",
  },
  {
    q: "Can you just paint over cigarette smell without cleaning first?",
    a: "No — not with standard latex paint. Nicotine bleeds through latex within weeks and the smell returns. If repainting a smoked room, you must first wash all surfaces with white vinegar or TSP-substitute solution to remove surface nicotine, then apply a shellac-based or oil-based odor-blocking primer (Zinsser BIN or Kilz Original) before the finish coat. Skipping the primer and using standard paint is the most common reason DIY smoke removal fails. Primer alone without cleaning first also fails — the nicotine layer must come off the surface before sealing.",
  },
  {
    q: "Will an air purifier alone remove cigarette smell from a house?",
    a: "No. A HEPA + activated carbon air purifier captures airborne particulates and adsorbs some VOCs — but it cannot remove nicotine that has already bonded to walls, carpet fibers, upholstery, and ceiling surfaces. Those surfaces continue to off-gas odor 24 hours a day. An air purifier addresses roughly 10–20% of the odor source (airborne molecules). The remaining 80–90% re-releases from porous surfaces continuously. Treat it as a maintenance tool after deep cleaning — not a substitute for it.",
  },
  {
    q: "Is ozone treatment safe for removing cigarette smoke odor?",
    a: "Ozone generators can neutralize smoke odor, but the EPA warns that ozone at concentrations required for strong odors is a lung irritant and damages rubber seals, electronics, and plants. The home must be completely vacated — people, pets, all living things — during treatment, and ozone must fully dissipate (4–6 hours minimum) before reentry. For most residential situations, the combination of vinegar washing, baking soda treatment, and HVAC filter replacement achieves comparable results without the health and property risks. Capital Clean Care does not use ozone in any service.",
  },
  {
    q: "Can I require a landlord or home seller to remove cigarette smell before I move in?",
    a: "Yes — in many cases. Maryland law (Md. Code, Real Property § 8-211) requires landlords to deliver rental units in habitable condition. Courts in Montgomery County have held that pervasive third-hand smoke contamination can constitute a habitability defect. For home buyers, smoke odor remediation is a legitimate repair request and can be negotiated as a seller concession. Document the condition before signing — photos, written correspondence, and a move-in inspection report all strengthen your position. Silver Spring and Montgomery County renters can also contact the Department of Housing and Community Affairs for code enforcement assistance.",
  },
];

const HowToGetCigaretteSmellOutOfYourHouse = () => {
  const { seoHelmet } = useSEO({
    title: "How to Get Cigarette Smell Out of Your House (Naturally)",
    description:
      "Remove cigarette smoke odor from walls, furniture, carpet & air with eco-safe methods. Maryland guide. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-get-cigarette-smell-out-of-your-house",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to get cigarette smell out of house, remove smoke smell house, cigarette smell furniture, smoke odor walls, smoke odor removal Maryland, eco-friendly smoke removal Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Get Cigarette Smell Out of Your House (Natural, Long-Lasting Methods)"
        description="Remove cigarette smoke odor from walls, furniture, carpet, and air with eco-safe methods proven for Maryland's humid climate — no ozone, no harsh chemicals."
        url="https://capitalcleancare.com/blog/how-to-get-cigarette-smell-out-of-your-house"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Air Out a House of Cigarette Smell"
        description="Three-step ventilation method to begin removing cigarette smoke odor from a home using cross-ventilation and HVAC fan mode."
        url="https://capitalcleancare.com/blog/how-to-get-cigarette-smell-out-of-your-house"
        steps={howToSteps}
        totalTime="PT30M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Get Cigarette Smell Out of Your House", href: "/blog/how-to-get-cigarette-smell-out-of-your-house" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Get Cigarette Smell Out of Your House" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Open window airing out a fresh home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Get Cigarette Smell Out of Your House
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Natural, Long-Lasting Methods for Maryland Homes
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
              You just signed the lease on a <strong>Silver Spring</strong> apartment — great location, great price, and a persistent layer of stale cigarette smoke baked into every wall, every inch of carpet, and every ceiling tile. Or maybe you bought a home in Gaithersburg that was smoked in for years, and two weeks of open windows have barely made a dent. Whatever brought you here, the problem is the same: <em>third-hand smoke</em>, and it doesn't leave on its own.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news: you can remove cigarette smell completely using natural, eco-safe methods — without ozone generators, toxic sprays, or a full gut renovation. This guide covers every surface, every room, and every HVAC component, with methods that work in Maryland's humid climate and won't compromise your family's air quality. For more{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning tips for Maryland homes
              </Link>
              , see our full guide.
            </p>
          </FadeInSection>

          {/* Why Smoke Persists */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Cigarette Smoke Smell Persists
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Cigarette smoke doesn't just float in the air — it actively bonds to every porous surface it touches. Drywall, wood trim, carpet backing, upholstery foam, curtain fabric, and even the silicone caulk around your tub absorb nicotine and tar compounds on contact. Once embedded, these molecules continue to off-gas at room temperature for months or years. That's what researchers call <strong>third-hand smoke</strong>: the residue that remains after the visible smoke is gone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Nicotine bonds to surfaces", "Nicotine is a sticky alkaloid that adheres to paint, drywall, and fabric at the molecular level — requiring acid (vinegar) or mechanical abrasion to remove."],
                ["Maryland humidity makes it worse", "High summer humidity in Gaithersburg and Silver Spring reactivates surface-bound nicotine, causing it to off-gas more intensely on warm, humid days."],
                ["HVAC spreads it everywhere", "Central air systems recirculate smoke-contaminated air through every room — including rooms that were never smoked in — until filters and ducts are cleaned."],
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
                <strong>The sequence matters.</strong> Every step in this guide builds on the last. Skipping straight to air fresheners or painting over walls without cleaning first is why most DIY attempts fail — the source keeps off-gassing through whatever you layer on top.
              </p>
            </div>
          </FadeInSection>

          {/* Air It Out */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Step 1 — Air It Out First (3 Steps)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Before touching a single surface, flush the air. This removes the highest concentration of airborne smoke molecules and makes every subsequent cleaning step more effective. Do this on a dry day — outdoor humidity below 60% is ideal.
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
            headline="Move-in smoke remediation beyond DIY reach? We handle it."
            subtext="Capital Clean Care's eco-certified teams serve Silver Spring, Rockville, Gaithersburg, and Bethesda. Vinegar-based protocols — no ozone, no chemical residue."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Walls & Ceilings */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Deep Clean Walls & Ceilings — 4 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Walls and ceilings hold the largest volume of embedded nicotine in any smoked home. You can often see it: a yellow-brown film on light-colored walls, especially near vents and in corners. Cleaning this is labor-intensive but essential — no amount of absorbers or air purifiers can overcome walls that are continuously off-gassing.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Dust and dry-wipe surfaces first",
                  text: "Use a dry microfiber cloth or a dry mop on a long handle to remove loose dust and soot from walls and ceilings before any wet cleaning. Wetting a dusty nicotine-coated wall first spreads the contamination rather than removing it. Pay extra attention to the ceiling — smoke rises, and ceilings typically hold more nicotine than walls.",
                },
                {
                  step: "02",
                  title: "Wash with white vinegar solution",
                  text: "Mix equal parts white vinegar and warm water in a bucket. Working from top to bottom (ceiling first), wipe every surface with a wrung-out sponge or cloth. Change the solution when it turns visibly yellow or brown — a heavily smoked room may require 3–4 bucket changes. The acetic acid in vinegar dissolves nicotine's alkaloid bonds from painted and sealed surfaces without damaging most latex paint.",
                },
                {
                  step: "03",
                  title: "Apply TSP substitute for stubborn residue",
                  text: "For rooms with heavy yellow staining, follow the vinegar wash with a TSP substitute (trisodium phosphate-free cleaner, available at hardware stores). Mix per label instructions and apply with a sponge, working in sections. TSP substitute is more aggressive than vinegar on heavy nicotine buildup and is safer for users and the environment than true TSP. Rinse with clean water after.",
                },
                {
                  step: "04",
                  title: "Apply odor-blocking primer before repainting",
                  text: "If smell persists after washing or if you plan to repaint, apply a shellac-based or oil-based primer (Zinsser BIN or Kilz Original) before any finish coat. Standard latex primer does not seal nicotine — it bleeds through within weeks. One coat of shellac primer seals the surface permanently. Apply with a brush or roller in a well-ventilated room; shellac fumes are strong and require good airflow.",
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

          {/* Carpet & Upholstery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Carpet & Upholstery Deodorize — 4 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Carpet is the single largest odor reservoir in a smoked home. The fibers, the backing, and the pad underneath all absorb nicotine. In severe cases the pad must be replaced — but in most move-in situations, the following four steps achieve substantial improvement before that drastic measure.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Vacuum thoroughly with a HEPA filter vacuum",
                  text: "Before any wet treatment, vacuum the entire carpet using a vacuum with a HEPA filter. This lifts loose particulates and prepares the fiber for deeper treatment. Use the slow, overlapping stroke method — one pass at walking speed deposits particulates back down; slow passes with overlapping strokes actually extract them. Empty the canister outside immediately.",
                },
                {
                  step: "02",
                  title: "Apply baking soda generously and leave overnight",
                  text: "Sprinkle a heavy, visible layer of baking soda over the entire carpet surface. Work it lightly into the fibers with a stiff brush or the back of a broom. Leave for a minimum of 8 hours — overnight is ideal, 24 hours is better for heavy odor. Baking soda (sodium bicarbonate) is alkaline and reacts with the acidic nicotine compounds, neutralizing them rather than just masking the smell. Vacuum completely in the morning.",
                },
                {
                  step: "03",
                  title: "Treat upholstery with vinegar mist and baking soda",
                  text: "For sofas, chairs, and upholstered headboards, vacuum all surfaces first, then mist lightly with a 1:2 vinegar-to-water solution. Do not saturate. Immediately sprinkle baking soda over the misted surface, let sit for 2–4 hours, then vacuum completely. The combination of vinegar and baking soda works on fabric the same way it works on carpet — neutralizing nicotine at the chemical level.",
                },
                {
                  step: "04",
                  title: "Steam clean or call a pro for embedded odor",
                  text: "For carpet or upholstery with deep, years-long smoke penetration, hot-water extraction (professional steam cleaning) is the most effective next step. The high-temperature water and suction action flush nicotine from deep in the carpet pile and backing — something dry methods cannot reach. Capital Clean Care's{' '}<Link to='/services/move-in-move-out-cleaning' className='text-accent underline hover:no-underline'>move-in/move-out cleaning</Link>{' '}service includes carpet steam treatment across Montgomery County.",
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

          {/* Curtains, Bedding, Clothing */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Curtains, Bedding & Clothing — 3 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fabric items that were present during smoking need to be washed separately from regular laundry — smoke compounds can transfer to other items in the wash. The method below works for curtains, bedding, and machine-washable clothing.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Pre-soak in a vinegar bath for 30 minutes",
                  text: "Fill a bathtub or large basin with cold water and add 2 cups of white vinegar per gallon of water. Submerge curtains, bedding, or clothing and soak for at least 30 minutes. The vinegar penetrates the fabric and begins breaking down nicotine bonds before the wash cycle. Cold water only for the soak — heat sets odors into fabric at this stage.",
                },
                {
                  step: "02",
                  title: "Wash on the hottest safe cycle with baking soda",
                  text: "Transfer directly from the soak to the washing machine. Add your usual HE detergent plus ½ cup of baking soda placed directly in the drum. Select the hottest cycle the fabric care label allows. Skip fabric softener — it coats fibers and can trap residual odor. For very heavy smoke exposure, run a second cycle.",
                },
                {
                  step: "03",
                  title: "Dry outdoors in direct sunlight if possible",
                  text: "UV light from direct sun kills residual odor-causing compounds more effectively than a dryer. Hang outside for 2+ hours when available. If using a dryer, run on the highest heat setting for a full cycle. Never fold or store until completely dry — any remaining moisture restarts the odor cycle. Curtains should be rehung immediately after drying to prevent wrinkling and re-absorption from stored bedding.",
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

          {/* HVAC */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              HVAC, Filters & Air — 3 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/9361627/pexels-photo-9361627.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Air purifier in a clean living room"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A smoked home's HVAC system is a smoke-distribution machine. Every time the system ran while the home was smoked in, it pulled contaminated air across the filter, through the air handler, and into every duct in the house. Ignoring the HVAC is the most common reason homes still smell after a thorough surface cleaning.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Replace all HVAC filters immediately",
                  text: "Remove and discard every HVAC filter in the home — return air filters, supply grilles, and any media filters in the air handler. Replace with MERV-11 or higher filters rated for smoke and allergens. A saturated smoke filter is an active odor source that pumps contaminated air into every room every time the system runs. Budget $20–40 per filter and change again in 30 days after the initial deep clean.",
                },
                {
                  step: "02",
                  title: "Clean supply and return grilles",
                  text: "Wipe all supply and return air grilles with a vinegar-dampened microfiber cloth. These metal grilles accumulate a visible layer of nicotine-laden dust that off-gasses directly into room air. For grilles with heavy buildup, remove them and soak in a vinegar solution for 20 minutes before scrubbing and drying thoroughly before reinstalling.",
                },
                {
                  step: "03",
                  title: "Consider professional duct cleaning for severe cases",
                  text: "If the smell persists after filter replacement and surface cleaning, ductwork may have accumulated nicotine deposits on interior surfaces. Professional duct cleaning uses high-powered vacuums and brushes to extract buildup from inside the duct walls. This is especially worth considering for homes smoked in for 5+ years in the Montgomery County area, where central air systems run 8–10 months of the year and have processed an enormous volume of contaminated air.",
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

          {/* Natural Odor Absorbers */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Natural Odor Absorbers That Actually Work
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              After cleaning surfaces, passive odor absorbers continue drawing residual smoke compounds from the air around the clock. These four options are safe, inexpensive, and available at any grocery or hardware store. Place them in every room — especially closets, bathrooms, and enclosed spaces where air circulation is limited. This is the{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-safe approach
              </Link>{" "}
              we recommend across all{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland
              </Link>{" "}
              homes we clean.
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["White vinegar bowls", "Place uncovered bowls of undiluted white vinegar in each room. The acetic acid vapor neutralizes nicotine molecules in the air. Replace every 48–72 hours. The vinegar smell itself dissipates within a few hours, leaving neutral air — not vinegar-scented air."],
                ["Activated charcoal bags", "Activated charcoal adsorbs VOCs and smoke compounds at the molecular level. Place 200–400g bags in each room, closet, and cabinet. Unlike baking soda, activated charcoal doesn't saturate quickly — bags last 1–2 months. Recharge by placing in direct sunlight for a few hours."],
                ["Fresh coffee grounds", "Open containers of fresh coffee grounds absorb and neutralize airborne odors effectively. Replace every 2–3 days as the coffee oxidizes and loses absorption capacity. A practical option for kitchens and living areas where charcoal might not fit aesthetically."],
                ["Baking soda in closed spaces", "In closets, cabinets, and drawers, open boxes or shallow bowls of baking soda absorb odors passively. Replace monthly. For closets with smoked clothing still present, this won't substitute for washing — but it slows re-contamination of freshly cleaned items."],
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

          {/* When You Need a Professional */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              When You Need a Professional
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4 flex gap-4 items-start">
              <AlertTriangle className="h-6 w-6 text-amber-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-amber-900 mb-2">DIY has limits — know when to escalate</p>
                <p className="text-sm text-amber-900 leading-relaxed">
                  Everything in this guide is effective for light-to-moderate smoke contamination. For homes where smoking occurred indoors daily for years, the nicotine penetration can exceed what surface cleaning reaches. At that point, the risk is spending significant time and effort for incomplete results.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Signs you're dealing with a professional-level job:
            </p>
            <ul className="space-y-2 mb-8">
              {[
                "Smell returns within days of cleaning — surfaces are re-releasing trapped compounds faster than absorbers can capture them",
                "Visible yellow-brown staining on ceilings that reappears after washing",
                "HVAC continues to distribute smell even after filter replacement",
                "Drywall has been painted over multiple times without primer — sealer cannot penetrate",
                "Carpet pad has absorbed smoke below the fiber level — requires replacement, not cleaning",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Capital Clean Care's{" "}
              <Link to="/services/move-in-move-out-cleaning" className="text-accent underline hover:no-underline">
                move-in/move-out cleaning service
              </Link>{" "}
              is specifically designed for situations like this. Our teams work systematically through walls, ceilings, all hard surfaces, carpet, and appliances using vinegar-based protocols — no ozone, no chemical residue, and safe for Maryland's watershed. See more in our{" "}
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
                Ready for a Smoke-Free Home? Let Us Do the Heavy Work.
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  eco-friendly cleaning
                </Link>{" "}
                and{" "}
                <Link to="/services/move-in-move-out-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  move-in cleaning
                </Link>{" "}
                across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Silver Spring, Rockville, Bethesda, Gaithersburg, and Potomac. Vinegar-based protocols, background-checked teams, no ozone or harsh chemicals.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "No ozone — EPA-safe only",
                  "Background-checked teams",
                  "Move-in smoke treatment",
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

export default HowToGetCigaretteSmellOutOfYourHouse;
