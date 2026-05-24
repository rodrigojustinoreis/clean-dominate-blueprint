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
  "https://images.pexels.com/photos/7512912/pexels-photo-7512912.jpeg?auto=compress&cs=tinysrgb&w=1200";

const galleryImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/11809347/pexels-photo-11809347.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Coconut oil and cloth for natural sticker removal",
    caption: "Any cooking oil works — olive, coconut, or vegetable. The fat molecules dissolve acrylic adhesive on contact.",
  },
  {
    src: "https://images.pexels.com/photos/10892870/pexels-photo-10892870.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Hair dryer warming sticker adhesive",
    caption: "15–30 seconds of low heat softens the adhesive enough to peel cleanly — the go-to method for delicate surfaces.",
  },
  {
    src: "https://images.pexels.com/photos/11370616/pexels-photo-11370616.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Cloth and vinegar wiping a surface clean",
    caption: "White vinegar dissolves the water-soluble components of label glue — ideal for glass, ceramic, and metal.",
  },
  {
    src: "https://images.pexels.com/photos/4870692/pexels-photo-4870692.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Clean glass jar after sticker residue removal",
    caption: "The result of the oil soak method: residue-free glass ready for zero-waste reuse.",
  },
];

const howToSteps = [
  {
    name: "Apply oil directly to the residue and let it soak",
    text: "Pour or rub a small amount of cooking oil — olive, coconut, vegetable, or even peanut butter — directly onto the sticker residue. The fat molecules in the oil are non-polar and dissolve the non-polar acrylic or rubber adhesive, breaking its bond with the surface. Cover the entire residue area and let it sit for 5–10 minutes. For thick, old residue that has dried and hardened, leave the oil for 20–30 minutes and cover with plastic wrap to prevent evaporation.",
  },
  {
    name: "Rub with a cloth or your fingers in circular motions",
    text: "After soaking, rub the softened residue with a cloth, paper towel, or your fingers using circular motions. The adhesive should ball up and lift off the surface. For stubborn spots, use the rough side of a sponge on glass or ceramic — not on plastic or painted surfaces, which scratch easily. If residue remains, apply a second coat of oil, wait another 5 minutes, and repeat.",
  },
  {
    name: "Wash with dish soap and warm water",
    text: "Once the adhesive is removed, wash the surface with a few drops of dish soap and warm water to cut through the oil film. This step is important — oil left on a surface attracts dust and can leave a greasy residue. For glass jars or containers, a full wash in hot soapy water finishes the job cleanly. The surface should be completely residue- and oil-free.",
  },
];

const faqs = [
  {
    q: "Is Goo Gone safer or more effective than natural alternatives?",
    a: "Goo Gone uses petroleum-based solvents — primarily citrus terpene (d-limonene) — which are effective but classified as VOCs (volatile organic compounds) that off-gas into indoor air. The EPA recommends minimizing VOC exposure indoors, particularly in homes with children, the elderly, or anyone with respiratory conditions. For most residential sticker residue situations, oil and vinegar perform equally well on the same surfaces without VOC exposure. Goo Gone has a legitimate use case for industrial-grade adhesives (automotive, construction), where natural methods don't have enough solvent strength. For jar labels, kids' decals, and price stickers — oil and vinegar are sufficient and safer.",
  },
  {
    q: "Can I remove sticker residue from painted walls without damaging the paint?",
    a: "Yes, but with the gentlest method only: dry heat first. Hold a hair dryer on low heat 2–3 inches from the residue for 15–20 seconds, then gently rub with a soft cloth or your finger. Heat softens the adhesive without requiring any chemical contact with the paint. If residue remains after heat, apply a tiny amount of cooking oil with your finger and rub very gently — then immediately clean the oil off with a damp cloth and mild soap before it can soften latex paint. Never use rubbing alcohol or vinegar on painted walls without testing first — both can damage flat and matte latex finishes.",
  },
  {
    q: "Can I use a microwave to heat a sticker on a container?",
    a: "Only if the container is microwave-safe and contains no metal in the label (some jar lids have metallic ink). For glass jars without metallic labels, 15–20 seconds in the microwave warms the adhesive effectively. For plastic containers, do not use the microwave for this purpose — heat can warp the plastic unevenly and release compounds from the container material. Use a hair dryer on plastic instead: more controlled, lower temperature, directed only at the sticker.",
  },
  {
    q: "How do I remove sticker residue from a car bumper?",
    a: "Use the heat method first: a hair dryer or heat gun on low setting for 20–30 seconds softens the adhesive on automotive surfaces. Then peel slowly and use a plastic scraper (not metal, which scratches clear coat) to lift the edge. For residue left after peeling, apply a small amount of cooking oil or a dedicated automotive adhesive remover (3M Adhesive Remover is widely used and designed for clear coat safety). Avoid rubbing alcohol on automotive paint — it strips wax and can dull clear coat. Wash the area with car wash soap and rewax after treatment.",
  },
  {
    q: "Is rubbing alcohol safe on painted wood furniture?",
    a: "No — not on painted or stained wood. Rubbing alcohol strips lacquer, varnish, and painted finishes on contact. For painted wood furniture, use the oil method: apply a small amount of cooking oil, let it sit for 5 minutes, then rub gently with a soft cloth. Clean the oil off immediately with a damp soapy cloth so it doesn't penetrate the paint film. For raw, unsealed wood with dried adhesive, the heat method (hair dryer on low) is the safest approach — no liquids that could raise the grain or warp the wood.",
  },
];

const HowToRemoveStickerResidueNatural = () => {
  const { seoHelmet } = useSEO({
    title: "How to Remove Sticker Residue Naturally (No Goo Gone Needed)",
    description:
      "Remove sticker residue & label glue from glass, plastic, wood & metal naturally. Maryland eco guide. Free quote in Montgomery County.",
    canonical: "https://capitalcleancare.com/blog/how-to-remove-sticker-residue-natural",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to remove sticker residue, sticker residue glass, remove label glue, sticker off plastic, natural adhesive remover Maryland, eco-friendly cleaning Montgomery County"
        />
      </Helmet>

      <ArticleSchema
        title="How to Remove Sticker Residue Naturally (5 Methods That Beat Goo Gone)"
        description="Remove sticker residue and label glue from glass, plastic, wood, metal, and fabric using oil, vinegar, heat, baking soda, and rubbing alcohol — no VOC solvents needed."
        url="https://capitalcleancare.com/blog/how-to-remove-sticker-residue-natural"
        datePublished="2026-05-23"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Remove Sticker Residue With Oil (Natural Method)"
        description="Three-step oil soak method to remove sticker residue and label glue from glass, plastic, and metal — no Goo Gone, no VOC solvents."
        url="https://capitalcleancare.com/blog/how-to-remove-sticker-residue-natural"
        steps={howToSteps}
        totalTime="PT20M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "How to Remove Sticker Residue Naturally", href: "/blog/how-to-remove-sticker-residue-natural" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Remove Sticker Residue Naturally" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Glass jars ready for label and sticker residue removal">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Remove Sticker Residue Naturally
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          5 Methods That Beat Goo Gone
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
              You've got a mason jar collection from last season's jam, a new laptop covered in a previous owner's stickers, and a stack of Amazon boxes with shipping labels that don't budge. Or you're doing a{" "}
              <Link to="/services/move-in-move-out-cleaning" className="text-accent underline hover:no-underline">
                move-in clean
              </Link>{" "}
              in <strong>Silver Spring</strong> and the previous tenant left a galaxy of kids' decals on every bedroom door. Whatever brought you here, the answer is the same: you don't need a VOC-heavy solvent sitting in the cabinet under the sink.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Five natural methods below cover every surface and adhesive type found in a home. The right method depends on what you're cleaning — oil for most jobs, heat for delicate surfaces, vinegar for glass, alcohol only as a last resort. Takoma Park and Bethesda households reusing glass jars for zero-waste storage will find Method 1 handles 90% of label residue in under 10 minutes. For more{" "}
              <Link to="/blog/eco-friendly-cleaning-tips-for-maryland-homes" className="text-accent underline hover:no-underline">
                eco-friendly cleaning tips for Maryland homes
              </Link>
              , see our full guide.
            </p>
          </FadeInSection>

          {/* Why It's Hard */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Sticker Residue Is Hard to Remove
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Most modern label adhesives are <strong>acrylic-based</strong> — a plastic polymer designed to form a molecular bond with any surface it contacts. When you peel the sticker, the paper or film separates from the adhesive layer, which stays behind, bonded to the surface. Water alone can't break that bond because acrylic adhesive is non-polar and water is polar — they repel each other.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                ["Acrylic adhesives (most stickers)", "Non-polar, water-resistant. Dissolve in non-polar solvents — oils, petroleum products, alcohol. Heat softens and re-liquefies them."],
                ["Rubber-based adhesives (older labels)", "More brittle when cold, soft when warm. Respond better to heat than to oil. Common in older price tags and postal labels."],
                ["Heat changes everything", "Both adhesive types soften significantly above 100°F — which is why a hair dryer is the single most universally useful tool for sticker removal regardless of surface."],
                ["Time makes it worse", "Adhesive oxidizes and hardens as it ages. A sticker removed the same day it's applied peels cleanly. One left for a year requires active solvent treatment."],
              ].map(([title, desc]) => (
                <div key={title} className="p-4 bg-secondary/40 border border-border rounded-xl">
                  <p className="font-semibold text-sm text-foreground mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Method 1 — Oil */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Method 1 — Oil
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: glass, ceramic, most plastics, metal</p>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/11809347/pexels-photo-11809347.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Coconut oil and cloth for natural sticker removal"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The most versatile method. Any cooking oil works — olive, coconut, vegetable, canola. The fat molecules are non-polar and dissolve acrylic adhesive on contact without any surface damage risk. This is also the method recommended by glass jar zero-waste communities in <strong>Takoma Park</strong> and <strong>Bethesda</strong> for reusing commercial jars.
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

          {/* Method 2 — Vinegar */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Method 2 — White Vinegar
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: glass, ceramic tile, stainless steel</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              White vinegar's acetic acid dissolves the water-soluble binder components of label adhesive — particularly effective on paper-backed labels (like product price tags and jar labels) where the adhesive has a more water-accessible surface layer.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Soak a cloth or paper towel in undiluted white vinegar",
                  text: "Press a vinegar-saturated cloth flat against the residue. For a jar or container, you can submerge the entire item in a bowl of white vinegar if the residue is at the base. Let the vinegar make contact with the adhesive for 5–10 minutes — acetic acid needs contact time to work its way under the adhesive layer.",
                },
                {
                  step: "02",
                  title: "Rub and peel the softened residue",
                  text: "After soaking, the adhesive should have softened enough to rub off with the cloth in circular motions or to peel off in strips with your fingernail. A plastic scraper or an old credit card edge helps lift larger patches without scratching glass. Repeat the vinegar application if stubborn spots remain.",
                },
                {
                  step: "03",
                  title: "Rinse with warm water",
                  text: "Rinse the surface with warm water to remove vinegar and dissolved adhesive residue. For glass jars, a full wash in hot soapy water leaves a streak-free finish. The surface should be completely clean with no sticky or acidic residue remaining.",
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

          <BlogInlineCTA
            headline="Move-in sticker and adhesive cleanup across a whole home? We've got it."
            subtext="Capital Clean Care serves Silver Spring, Bethesda, Rockville, and Gaithersburg. Eco-certified teams, background-checked, no VOC solvents."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Method 3 — Heat */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              Method 3 — Heat (Hair Dryer)
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: painted surfaces, delicate plastics, wood, car surfaces</p>
            <div className="rounded-2xl overflow-hidden shadow-md mb-6">
              <img
                src="https://images.pexels.com/photos/10892870/pexels-photo-10892870.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Hair dryer warming sticker adhesive"
                className="w-full max-h-[380px] object-cover"
                loading="lazy"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Heat is the only method that requires no liquid contact with the surface — making it the safest option for painted walls, finished wood furniture, and delicate plastics that could be damaged by solvents or moisture.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Apply low heat for 15–30 seconds",
                  text: "Set a hair dryer to low or medium heat. Hold it 2–3 inches from the sticker or residue and move slowly back and forth for 15–30 seconds. The goal is to warm the adhesive to around 100–130°F — hot enough to soften but not so hot that it damages the surface underneath. For painted walls or wood, stay on the low setting. For glass or metal, medium heat is fine.",
                },
                {
                  step: "02",
                  title: "Peel or rub immediately while still warm",
                  text: "Work quickly — the adhesive re-hardens as it cools. Peel the sticker or rub the residue with a cloth, plastic scraper, or your finger while the adhesive is still soft and pliable. For stickers still on the surface, start peeling from one corner using a fingernail or plastic card to keep the angle low (30°) to avoid tearing the sticker and leaving more residue.",
                },
                {
                  step: "03",
                  title: "Wipe with a damp cloth and let dry",
                  text: "After removing the residue, wipe the area with a slightly damp cloth to remove any remaining adhesive traces. For painted surfaces, dry immediately with a clean cloth — do not let moisture sit on latex paint. The heat method leaves no chemical residue and requires the lightest cleanup of all five methods.",
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

          {/* Method 4 — Baking Soda Paste */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Method 4 — Baking Soda + Oil Paste
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: stubborn multi-layer residue on hard surfaces</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When a sticker has left multiple overlapping layers of adhesive — common with industrial packaging, price sticker layering, or old kids' decals that have been repeatedly stuck and re-stuck — the oil alone doesn't provide enough mechanical action. The baking soda paste adds gentle abrasion without scratching.
            </p>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Mix equal parts baking soda and cooking oil into a paste",
                  text: "Combine 1 tablespoon of baking soda with 1 tablespoon of cooking oil (coconut oil works particularly well here because it solidifies slightly, making the paste thicker and easier to apply). Mix until uniform. The oil dissolves the adhesive while the baking soda provides fine mechanical abrasion to physically lift the softened residue.",
                },
                {
                  step: "02",
                  title: "Apply and rub in circular motions with a cloth",
                  text: "Apply the paste directly to the residue and rub in circular motions with a cloth or sponge. The baking soda grit will work the oil into and under the adhesive layer while simultaneously abrading it off the surface. Do not use on soft plastics or lacquered surfaces — test in a hidden spot first. On glass, ceramic, and stainless steel, this paste is completely safe.",
                },
                {
                  step: "03",
                  title: "Rinse and wash with dish soap",
                  text: "Rinse with warm water and wash with dish soap to remove all oil and baking soda residue. The surface should be completely clean in one wash. If any adhesive remains after the paste treatment, apply a pure oil coat for another 5 minutes — the combination has typically dissolved the remainder.",
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

          {/* Method 5 — Rubbing Alcohol */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Method 5 — Rubbing Alcohol
            </h2>
            <p className="text-sm font-medium text-accent mb-2 uppercase tracking-wide">Best for: metal, glass, hard plastic — last resort, test first</p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-6 flex gap-4 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Test first on every surface.</strong> Rubbing alcohol (isopropyl alcohol) strips lacquer, varnish, painted finishes, and some plastic coatings. It's the most powerful of the five methods and the most likely to cause surface damage if used without testing. Always apply to a hidden area first and wait 30 seconds before treating the visible area.
              </p>
            </div>
            <div className="space-y-6 mb-10">
              {[
                {
                  step: "01",
                  title: "Apply 70% isopropyl alcohol to a cotton ball and blot",
                  text: "Dampen a cotton ball or folded paper towel with 70% isopropyl alcohol. Press it against the residue for 10–15 seconds, then blot — do not rub immediately. The alcohol dissolves acrylic and rubber adhesive very quickly on contact. For stubborn industrial adhesive that resisted the oil method, alcohol will typically remove it in one application.",
                },
                {
                  step: "02",
                  title: "Wipe clean and rinse with water",
                  text: "After blotting, wipe the area with a clean cloth to remove the dissolved adhesive. Follow immediately with a clean damp cloth to remove alcohol residue — allowing alcohol to sit on a surface longer than needed increases the risk of finish damage. The surface should be residue-free in one treatment. For metal or glass, dry immediately with a microfiber cloth to prevent water spots.",
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

          {/* Gallery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Natural Sticker Removal Toolkit
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Five methods, four pantry ingredients. This is the{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-safe approach
              </Link>{" "}
              to adhesive removal across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">
                Maryland homes
              </Link>{" "}
              — no VOC solvents, no petroleum products, safe for kids and pets.
            </p>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* Surface-by-Surface Guide */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-4 mb-4">
              Surface-by-Surface Quick Reference
            </h2>
            <div className="space-y-2 mb-10">
              {[
                { surface: "Glass (jars, windows)", methods: "Oil → Vinegar → Alcohol", note: "All 5 methods safe. Oil first for jar labels." },
                { surface: "Hard plastic (containers, toys)", methods: "Oil → Warm water soak", note: "Avoid alcohol on soft or colored plastic — may discolor." },
                { surface: "Stainless steel / chrome", methods: "Vinegar → Oil → Alcohol", note: "Dry immediately to prevent water spots." },
                { surface: "Sealed wood furniture", methods: "Oil → Heat (low)", note: "No alcohol — strips lacquer and varnish." },
                { surface: "Raw / unsealed wood", methods: "Heat only", note: "No liquids — raises grain and can cause warping." },
                { surface: "Painted walls (latex)", methods: "Heat only → Oil (test)", note: "No alcohol or vinegar — damages matte/flat paint." },
                { surface: "Fabric / clothing", methods: "Rubbing alcohol (blot)", note: "Blot from outside in; cold water rinse only." },
                { surface: "Car paint / clear coat", methods: "Heat → Automotive adhesive remover", note: "No rubbing alcohol — strips wax and can dull clear coat." },
              ].map(({ surface, methods, note }) => (
                <div key={surface} className="grid grid-cols-3 gap-2 p-3 bg-secondary/40 border border-border rounded-xl items-start">
                  <p className="font-semibold text-sm text-foreground">{surface}</p>
                  <p className="text-xs text-accent font-medium">{methods}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{note}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Pro plug */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When DIY Won't Cut It
            </h2>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-6 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Move-in and move-out situations in <strong>Bethesda</strong> and <strong>Silver Spring</strong> commonly involve sticker and adhesive cleanup at a scale beyond a single afternoon's work — kids' decals on multiple doors, floor cable management tape residue, wall-mounted frame strips, and commercial packaging adhesive on counters. Capital Clean Care's{" "}
                <Link to="/services/move-in-move-out-cleaning" className="text-accent underline hover:no-underline">
                  move-in/move-out cleaning service
                </Link>{" "}
                covers adhesive and residue removal as part of a systematic whole-home clean using{" "}
                <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                  eco-safe protocols
                </Link>{" "}
                throughout.
              </p>
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
                More Than a Sticker? Let Us Handle the Full Clean.
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/move-in-move-out-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  move-in/move-out cleaning
                </Link>{" "}
                and{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  eco-friendly cleaning
                </Link>{" "}
                across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>{" "}
                — Silver Spring, Bethesda, Rockville, Gaithersburg, and Potomac. No VOC solvents, background-checked teams, free estimates.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "No VOC solvents",
                  "Background-checked teams",
                  "Move-in/out specialists",
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

export default HowToRemoveStickerResidueNatural;
