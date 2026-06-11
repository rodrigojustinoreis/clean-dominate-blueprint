import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, X } from "lucide-react";
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
  "https://images.pexels.com/photos/4219137/pexels-photo-4219137.jpeg?auto=compress&cs=tinysrgb&w=1200";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/5217889/pexels-photo-5217889.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Melamine sponge cleaning marker off a wall",
    caption: "A damp melamine eraser lifts dried marker from painted drywall without abrading the finish.",
  },
  {
    src: "https://images.pexels.com/photos/6830012/pexels-photo-6830012.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cleaning wood furniture surface",
    caption: "Sealed wood responds well to rubbing alcohol — always test in a hidden spot and wipe quickly.",
  },
  {
    src: "https://images.pexels.com/photos/13072969/pexels-photo-13072969.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Treating fabric stain with cloth",
    caption: "Blot fabric stains — never scrub. Scrubbing spreads the dye deeper into the fiber weave.",
  },
  {
    src: "https://images.pexels.com/photos/6340710/pexels-photo-6340710.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Child-safe hand washing to remove ink",
    caption: "Baby oil or coconut oil loosens Sharpie from skin safely — no solvents needed.",
  },
];

const howToSteps = [
  {
    name: "Test rubbing alcohol on a hidden area first",
    text: "Before treating any visible surface, dab a small amount of 70% isopropyl alcohol onto an inconspicuous patch of wall — behind furniture or inside a closet. Wait 30 seconds and blot. If the paint color transfers to the cloth or the finish dulls, switch to a melamine eraser (magic eraser) instead, which removes marker mechanically rather than chemically. Semi-gloss and gloss paints generally tolerate alcohol well; flat latex can soften.",
  },
  {
    name: "Apply rubbing alcohol and blot — don't scrub",
    text: "Saturate a cotton ball or folded paper towel with 70% isopropyl alcohol. Press it firmly against the Sharpie mark and hold for 10–15 seconds to let the alcohol dissolve the permanent ink binder. Then blot in a single lifting motion — do not rub in circles. Rubbing spreads dissolved ink across a larger area and works it deeper into the paint pores. Repeat with a fresh cotton ball until the mark is gone or significantly faded.",
  },
  {
    name: "Clean the treated area with mild dish soap and water",
    text: "Once the marker is removed, wipe the treated spot with a damp microfiber cloth and a drop of mild dish soap. This removes alcohol residue and any remaining dissolved ink before it re-dries. Rinse with a clean damp cloth and let air-dry. In Rockville or Bethesda homes with flat or matte paint, follow with a light touch-up of matching paint — alcohol can leave a faint sheen difference on matte finishes.",
  },
];

const faqs = [
  {
    q: "Does white vinegar remove Sharpie?",
    a: "Vinegar is only mildly effective on fresh Sharpie marks and largely ineffective on dried ones. Permanent marker ink contains a resin binder dissolved in alcohol-based solvent — once dried, the resin bonds to the surface and requires a solvent (like rubbing alcohol) or mechanical abrasion (melamine eraser) to break that bond. Vinegar's acetic acid does not dissolve resin. It's useful for routine cleaning but is not the right tool for permanent marker removal.",
  },
  {
    q: "Does hairspray remove permanent marker?",
    a: "Older alcohol-based aerosol hairsprays did work on marker — because they contained high concentrations of isopropyl or denatured alcohol. Most modern hairsprays are water-based formulas with very little alcohol, so they're largely ineffective today. If you have rubbing alcohol available, use it directly — it's more concentrated and predictable. The 'hairspray trick' is a holdover from formulations that no longer exist in most brands.",
  },
  {
    q: "How do you get Sharpie off hardwood floors?",
    a: "On polyurethane-sealed hardwood, apply a small amount of rubbing alcohol to a cloth (not directly to the floor) and blot the mark quickly. Do not let alcohol pool or sit — it can soften the polyurethane finish with prolonged contact. Immediately follow with a clean damp cloth to remove the alcohol. For oil-finished or wax-finished hardwood, use a small amount of mineral oil on a cloth instead — it's gentler on those finishes. Never use acetone or nail polish remover on hardwood floors; it will strip the finish.",
  },
  {
    q: "Can you get Sharpie off leather?",
    a: "Yes, with caution. Apply a small amount of rubbing alcohol to a cotton ball and blot the mark very gently on genuine leather. Do not rub aggressively — leather's surface finish can wear away. After removing the mark, apply a leather conditioner to the treated area to restore moisture and prevent cracking. For suede or nubuck leather, do not use alcohol at all — use a suede eraser bar (dry method only). For faux leather (vinyl), rubbing alcohol is safe and usually very effective.",
  },
  {
    q: "Is rubbing alcohol safe to use on painted walls?",
    a: "It depends on the paint sheen. Semi-gloss and gloss paints are generally safe — the harder finish resists solvent penetration. Satin paint usually tolerates a brief application if you blot quickly. Flat and matte latex paints are the most vulnerable — alcohol can soften the binder and create a shiny spot or lift pigment. Always test in a hidden area first. If your walls are flat-painted (common in bedrooms and ceilings in Maryland homes), a melamine eraser used with light pressure is a safer first choice than alcohol.",
  },
];

const HowToRemoveSharpieSafely = () => {
  const { seoHelmet } = useSEO({
    title: "How to Remove Sharpie From Any Surface | Capital Clean Care",
    description:
      "Remove permanent marker from walls, wood, skin & fabric with kid-safe methods. Maryland cleaning experts. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-remove-sharpie-safely",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to remove sharpie, remove permanent marker, sharpie off walls, sharpie off skin, sharpie out of carpet, permanent marker removal Maryland, eco-friendly stain removal Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Remove Sharpie From Any Surface (Kid-Safe Methods That Actually Work)"
        description="Remove permanent marker from painted walls, wood, fabric, carpet, skin, and more using kid-safe, pet-safe methods — no bleach, no harsh solvents."
        url="https://capitalcleancare.com/blog/how-to-remove-sharpie-safely"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Remove Sharpie From Painted Walls"
        description="Three-step method to remove permanent marker from interior painted walls using rubbing alcohol and a mild dish soap rinse — safe for semi-gloss and satin finishes."
        url="https://capitalcleancare.com/blog/how-to-remove-sharpie-safely"
        steps={howToSteps}
        totalTime="PT15M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Remove Sharpie Safely", href: "/blog/how-to-remove-sharpie-safely" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Remove Sharpie Safely" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Permanent markers and art supplies on white surface">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Remove Sharpie From Any Surface
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Kid-Safe Methods That Actually Work
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
              It's a Tuesday afternoon in <strong>Rockville</strong>. You walk into the playroom and find a Sharpie mural across three feet of freshly painted wall. Your five-year-old is very proud. You are not. The instinct is to grab the strongest cleaner in the cabinet — but that's usually how a small marker stain becomes a large patch of stripped paint.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Permanent marker is designed to bond to surfaces, but it's not indestructible. The right solvent, the right technique, and the right surface knowledge gets it off cleanly in most cases — without bleach, without damage, and without exposing kids or pets to harsh chemicals. This guide covers every surface in the home, from painted drywall to hardwood, fabric to skin. For more{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning tips for Maryland homes
              </Link>
              , see our full guide.
            </p>
          </FadeInSection>

          {/* What Will and Won't Come Out */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What Surfaces Will Sharpie Come Out Of?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Before you start, a quick reality check. Permanent marker comes out of most <em>sealed</em> surfaces but is very difficult or impossible to remove from <em>porous, unsealed</em> ones where the ink has soaked into the material itself.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                { surface: "Painted walls (semi-gloss / satin)", result: true, note: "Rubbing alcohol or melamine eraser" },
                { surface: "Painted walls (flat / matte)", result: "maybe", note: "Melamine eraser only — alcohol risks sheen damage" },
                { surface: "Unpainted drywall", result: false, note: "Ink absorbs permanently — prime and repaint" },
                { surface: "Sealed wood furniture", result: true, note: "Rubbing alcohol, work quickly" },
                { surface: "Raw / unsealed wood", result: false, note: "Ink absorbs into grain — sanding required" },
                { surface: "Sealed hardwood floors", result: true, note: "Alcohol on cloth, not directly on floor" },
                { surface: "Cotton & synthetic fabric", result: true, note: "Rubbing alcohol + blot method" },
                { surface: "Carpet", result: true, note: "Patient blotting with alcohol" },
                { surface: "Skin", result: true, note: "Baby oil or coconut oil — no solvents needed" },
                { surface: "Glass & metal", result: true, note: "Rubbing alcohol, very easy" },
                { surface: "Hard plastic", result: true, note: "Rubbing alcohol or dry-erase marker trick" },
                { surface: "Leather (genuine)", result: true, note: "Gentle alcohol, follow with conditioner" },
                { surface: "Suede / nubuck", result: false, note: "No liquids — suede eraser bar only" },
                { surface: "Granite & sealed tile", result: true, note: "Rubbing alcohol works on sealant layer" },
              ].map(({ surface, result, note }) => (
                <div
                  key={surface}
                  className={`flex items-start gap-3 p-3 rounded-xl border ${
                    result === true
                      ? "bg-green-50 border-green-200"
                      : result === "maybe"
                      ? "bg-amber-50 border-amber-200"
                      : "bg-red-50 border-red-200"
                  }`}
                >
                  {result === true ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                  ) : result === "maybe" ? (
                    <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  ) : (
                    <X className="h-4 w-4 text-red-500 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <p className="font-semibold text-sm text-foreground">{surface}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* From Painted Walls */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Removing Sharpie From Painted Walls — 3 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/5217889/pexels-photo-5217889.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Melamine sponge cleaning marker off a wall"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Painted walls are the most common Sharpie surface in homes with young children — and the most anxiety-inducing. The good news: semi-gloss and satin painted walls (the most common choices in <strong>Bethesda</strong> and <strong>Silver Spring</strong> family homes) respond well to the method below.
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
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Dry-erase marker trick:</strong> Color directly over the Sharpie mark with a dry-erase marker, then immediately wipe with a dry cloth. The solvent in dry-erase ink dissolves the permanent marker's binder — both come off together. Works especially well on glass, whiteboards, and glossy painted surfaces.
              </p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="Marker damage beyond a single spot? We handle the deep clean."
            subtext="Capital Clean Care serves Rockville, Bethesda, Silver Spring, and Gaithersburg. Eco-certified teams, kid-safe products, background-checked."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* From Wood Furniture */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Removing Sharpie From Wood Furniture — 3 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/6830012/pexels-photo-6830012.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Cleaning wood furniture surface"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The key variable on wood is the finish. <em>Sealed</em> wood (polyurethane, lacquer, varnish) traps the ink on top of the finish layer, so a solvent can remove it. <em>Unsealed or oil-finished</em> wood has absorbed the ink into the grain — no solvent will fully extract it. Before you start, determine which you have: sealed wood feels smooth and plasticky; unsealed wood feels more like raw material and absorbs water drops instead of beading them.
            </p>
            <div className="space-y-6 mb-6">
              {[
                {
                  step: "01",
                  title: "Apply rubbing alcohol to a cloth — not directly to the wood",
                  text: "Never pour or spray rubbing alcohol directly onto wood. Pooled alcohol can penetrate the finish seal if it sits long enough. Instead, dampen a folded paper towel or cloth with 70% isopropyl alcohol and press it against the mark. The key is controlled, targeted application. For a small mark, a cotton swab gives the most precision.",
                },
                {
                  step: "02",
                  title: "Blot and lift immediately — work in 10-second intervals",
                  text: "Press the alcohol-dampened cloth onto the mark for 10 seconds, then lift and inspect. If ink is transferring, repeat with a fresh section of cloth. Do not let alcohol sit on the wood surface between applications. Work quickly — wood finishes tolerate brief alcohol contact but can soften with prolonged exposure, especially lacquer finishes.",
                },
                {
                  step: "03",
                  title: "Wipe dry and condition the surface",
                  text: "Once the mark is removed, immediately wipe the area dry with a clean cloth. Then apply a small amount of furniture polish or wood conditioner (like Murphy Oil Soap diluted per label, or a dedicated furniture wax) to the treated area. This restores any moisture lost to the alcohol and prevents the treated spot from looking dull compared to the surrounding finish.",
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
                <strong>Finish warning:</strong> Acetone (nail polish remover) removes Sharpie very effectively — but also strips most wood finishes completely. Never use acetone on sealed wood furniture. Stick to rubbing alcohol, which is strong enough to dissolve the ink without attacking polyurethane or lacquer at brief contact.
              </p>
            </div>
          </FadeInSection>

          {/* Fabric & Carpet */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Removing Sharpie From Fabric & Carpet — 4 Steps
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Fabric and carpet require more patience than hard surfaces, but they're very recoverable if treated promptly. The fundamental rule: <strong>blot, never scrub</strong>. Scrubbing spreads the dissolved ink laterally into surrounding fibers and can push it deeper into the weave or backing.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Place an absorbent cloth under the fabric (if applicable)",
                  text: "For clothing, tablecloths, or loose fabric items, place a clean white cloth or several layers of paper towels directly under the stained area before applying any solvent. This gives the dissolved ink somewhere to travel as it lifts — toward the backing cloth rather than spreading to adjacent fabric. For carpet, skip this step and proceed directly to treatment.",
                },
                {
                  step: "02",
                  title: "Apply rubbing alcohol and blot from the outside in",
                  text: "Dampen a clean white cloth with 70% isopropyl alcohol. Start at the outer edge of the Sharpie mark and blot inward toward the center — working outward spreads the stain. Use a firm pressing and lifting motion. Change to a clean section of cloth every few blots as it picks up ink. For carpet, use a small amount of alcohol so you don't saturate the backing and subfloor beneath.",
                },
                {
                  step: "03",
                  title: "Treat residual color with dish soap and cold water",
                  text: "Once most of the marker has lifted, apply one drop of clear dish soap to the area and work it in gently with a damp cloth using the same blotting technique. Rinse with cold water (not hot — heat sets stains into fabric permanently). Blot dry. For cotton garments, this two-step alcohol-then-soap approach removes the majority of Sharpie marks even on light colors.",
                },
                {
                  step: "04",
                  title: "For carpet: apply baking soda after treatment",
                  text: "After the stain has been treated and the area is slightly damp, sprinkle a light layer of baking soda over the spot. Let it sit for 15–20 minutes — it absorbs any remaining dissolved ink as it dries and pulls it to the surface. Vacuum thoroughly. For stubborn carpet stains with deep penetration, a{' '}<Link to='/services/recurring-cleaning' className='text-accent underline hover:no-underline'>recurring professional cleaning</Link>{' '}with steam extraction will reach the backing level that home methods can't.",
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

          {/* From Skin */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Removing Sharpie From Skin — Kid-Safe, 3 Steps
            </h2>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/6340710/pexels-photo-6340710.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Child-safe hand washing to remove ink"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Skin is actually one of the easiest surfaces to remove Sharpie from — but the method matters when it's a child's skin. Rubbing alcohol works, but it's harsh on sensitive skin and can cause dryness or irritation. The oil-based approach below is gentler, equally effective, and completely safe for kids.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Apply baby oil, coconut oil, or olive oil to the mark",
                  text: "Pour a small amount of baby oil, coconut oil, or even standard cooking olive oil onto the marked skin. Rub gently in circular motions for 30–60 seconds. The oil penetrates between the ink layer and the skin's surface and begins breaking the bond. This is the same principle that makes oil-based makeup removers effective — oil dissolves the resin binder in permanent ink.",
                },
                {
                  step: "02",
                  title: "Wipe with a clean cloth or paper towel",
                  text: "After working the oil in, wipe with a dry cloth using light friction. Most of the Sharpie will come off on the first pass. For darker or older marks, repeat the oil application and wait another 30 seconds before wiping again. Don't scrub hard — the goal is to let the oil do the chemical work, not mechanical abrasion.",
                },
                {
                  step: "03",
                  title: "Wash with soap and warm water",
                  text: "Wash the area with regular hand soap and warm water to remove the oil residue and any remaining ink. Any mild soap works — dish soap is slightly more effective at cutting oil than hand soap if you prefer a cleaner finish. For toddlers or babies, use their regular gentle bath wash. The skin will be completely clean and significantly less irritated than if you had used rubbing alcohol directly.",
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

          {/* Gallery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Right Tool for Each Surface
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-safe approach
              </Link>{" "}
              to stain removal across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland homes
              </Link>{" "}
              relies on matching the right solvent to the right surface — not the strongest chemical available. These four images capture the key scenarios covered in this guide.
            </p>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* When the Damage Is Done */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              When the Damage Is Done — Call a Professional
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              DIY methods work well for single marks on manageable surfaces. But some situations are beyond what a cotton ball and rubbing alcohol can address:
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Large murals across multiple walls or rooms",
                "Sharpie on unpainted drywall — ink has penetrated the paper facing and must be primed over",
                "Raw or oil-finished hardwood floors where ink has absorbed into the grain",
                "Light-colored carpet or upholstery with set-in stains that have been scrubbed (spreading the mark)",
                "Multiple surfaces involved — walls, carpet, and furniture treated simultaneously",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              In these cases, a professional cleaning assessment can determine what's removable and what requires surface repair or repainting. Capital Clean Care's{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-friendly cleaning service
              </Link>{" "}
              covers the Montgomery County area including Rockville, Bethesda, Silver Spring, and Gaithersburg. We use kid-safe, pet-safe protocols on every job. More cleaning tips in our{" "}
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
                Bigger Than a Marker? Let Us Handle It.
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
                for families across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Rockville, Bethesda, Silver Spring, Gaithersburg, and Potomac. Kid-safe products, background-checked teams, no harsh chemicals.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "Kid-safe & pet-safe",
                  "Background-checked teams",
                  "Eco-certified products",
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

export default HowToRemoveSharpieSafely;
