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
  FAQSchema,
} from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import ImageGallery, { GalleryImage } from "@/components/blog/ImageGallery";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/hardwood/hero.webp";
const METHOD_IMAGE = "/images/blog/hardwood/mop.webp";
const SCHEMA_IMAGE = "https://capitalcleancare.com/images/blog/hardwood/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/hardwood/mop.webp",
    alt: "Microfiber mop gliding across a clean oak hardwood floor",
    caption: "A flat microfiber mop lifts grit without scratching — the single most important tool for hardwood that lasts.",
  },
  {
    src: "/images/blog/hardwood/solution.webp",
    alt: "Spray bottle with a gentle pH-neutral floor cleaning solution on hardwood",
    caption: "A pH-neutral solution applied as a light mist — never a wet pour — keeps water out of the seams.",
  },
  {
    src: "/images/blog/hardwood/buff.webp",
    alt: "Soft microfiber cloth buffing a wood floor to a streak-free finish",
    caption: "A dry buff after damp mopping removes any haze and brings back the natural sheen.",
  },
  {
    src: "/images/blog/hardwood/dining.webp",
    alt: "Warm, clean hardwood floor in a bright dining area",
    caption: "The result: a clean, low-residue finish that's safe for kids and pets and protects the wood long-term.",
  },
];

const howToSteps = [
  {
    name: "Dry-clean first: dust, sweep, or vacuum the grit away",
    text: "Before any liquid touches the floor, remove the dry debris. Grit, sand, and pet hair act like sandpaper underfoot and are the number-one cause of micro-scratches that dull a finish over time. Use a microfiber dust mop, a soft-bristle broom, or a vacuum with the hard-floor (no beater bar) setting. Pay attention to corners, along baseboards, and under furniture where grit collects. This step alone removes 80% of what makes a floor look dirty — and it never risks water damage.",
  },
  {
    name: "Mix a pH-neutral solution — a few drops of dish soap in warm water",
    text: "Hardwood floors with a polyurethane finish are sealed, so they don't need harsh cleaners — they need a gentle, residue-free wash. Add a few drops (about 1/4 teaspoon) of clear, unscented dish soap to a quart of warm water. That's it. Skip vinegar, ammonia, oil soaps, and 'mop & shine' products: acids dull the finish over time, oil soaps leave a film that builds up and traps dirt, and wax products make future refinishing difficult. If your floors are unsealed, oiled, or waxed, use only a barely-damp cloth with plain water and check the manufacturer's guidance.",
  },
  {
    name: "Damp-mop with the grain — never wet, never standing water",
    text: "Dip a flat microfiber mop in the solution and wring it until it's just damp, not dripping. Water is hardwood's worst enemy: it seeps into seams, swells the boards, and lifts the finish. Mop in the direction of the wood grain, working in small sections from the far corner toward the door. Re-wring frequently so you're never pushing dirty water around. The floor should look barely moist and dry within a minute or two. If you can see standing water or puddles, your mop is too wet.",
  },
  {
    name: "Dry-buff to a streak-free, low-residue shine",
    text: "Immediately follow the damp mop with a dry microfiber cloth or a clean dry mop head, buffing along the grain to pick up any remaining moisture and prevent streaks or haze. This final pass is what separates a professional-looking result from a cloudy one. For a deeper natural shine on a clean, dry floor, you can buff with a microfiber pad — no spray polish needed. Let the floor air out fully before replacing rugs or furniture.",
  },
];

const faqs = [
  {
    q: "Is vinegar safe to clean hardwood floors?",
    a: "It's one of the most common myths in floor care. Vinegar is a mild acid (around pH 2.5), and on a sealed polyurethane floor, repeated acidic cleaning slowly etches and dulls the protective finish — the haze people blame on 'old floors' is often years of vinegar use. A heavily diluted vinegar solution won't ruin a floor in one use, but it's not the right routine cleaner. For everyday cleaning, a few drops of pH-neutral dish soap in warm water cleans just as well without degrading the finish. Save vinegar for glass and hard non-porous surfaces, not wood. If you want a natural cleaner that won't harm the seal, neutral pH is the rule.",
  },
  {
    q: "How often should I clean hardwood floors?",
    a: "Dust-mop or vacuum high-traffic areas (kitchen, entryway, hallways) every 1–2 days — this dry cleaning is what actually protects the finish by removing abrasive grit. Damp-mop the whole floor every 1–2 weeks for most households, or weekly in homes with kids, pets, or heavy foot traffic. The biggest mistake is over-wetting: cleaning more often with a properly wrung mop is far better for the wood than occasional heavy washing. In the humid Mid-Atlantic summers across Maryland, DC, and Virginia, keep mopping light and let floors dry quickly to avoid trapped moisture.",
  },
  {
    q: "What's the best natural cleaner for sealed hardwood floors?",
    a: "Plain warm water with a few drops of clear, unscented dish soap is the safest, most effective natural cleaner for sealed (polyurethane-finished) hardwood — it's pH-neutral, residue-free, and won't dull the finish. Avoid 'natural' products that contain vinegar, citrus oils, or oil soap (like Murphy Oil Soap), which leave a buildup that attracts dirt and complicates future refinishing. If you prefer a ready-made option, look for a cleaner specifically labeled pH-neutral and safe for polyurethane-sealed wood. Always apply as a fine mist or with a wrung-out mop — never pour cleaner directly on the floor.",
  },
  {
    q: "Can I steam-mop a hardwood floor?",
    a: "No — most flooring manufacturers explicitly warn against steam mops on hardwood, and using one often voids the finish warranty. Steam forces hot moisture into the seams between boards and through micro-cracks in the finish, where it swells the wood, lifts the sealant, and can cause cupping or cloudy white spots over time. The damage is gradual and usually irreversible without refinishing. Steam is fine for tile and sealed stone, but for wood, stick to a barely-damp microfiber mop. If your floor is engineered hardwood or has any worn finish, steam is especially risky.",
  },
  {
    q: "How do I make dull hardwood floors shine again without chemicals?",
    a: "First, the dullness is usually residue or fine scratches, not lack of polish. Do a thorough dry dust, then a proper damp-mop with neutral cleaner to strip any built-up film from old oil-soap or 'shine' products — that buildup is frequently the real cause of a flat, cloudy look. Once the floor is genuinely clean and dry, buff along the grain with a dry microfiber pad to restore the natural sheen. If the finish itself is worn through in walkways, no cleaner will fix it — that's when a screen-and-recoat or refinishing is the right call. For a whole-home reset, a professional deep clean removes the residue most DIY mopping leaves behind.",
  },
  {
    q: "Are homemade floor cleaners safe for kids and pets?",
    a: "A solution of warm water and a few drops of unscented dish soap is one of the safest cleaning options for homes with children and pets — there are no harsh chemical residues, no fumes, and nothing left on the floor that's unsafe for crawling babies or paws. This is a major advantage over conventional floor products and acidic or oil-based 'natural' cleaners, which can leave residues. It's the same principle behind our EPA Safer Choice-aligned approach: clean effectively with the gentlest method that does the job. Just make sure the floor dries fully so it isn't slippery.",
  },
];

const HowToCleanHardwoodFloorsNaturally = () => {
  const { seoHelmet } = useSEO({
    title: "How to Clean Hardwood Floors Naturally (Without Damaging the Finish)",
    description:
      "Clean sealed hardwood floors safely with a pH-neutral natural method — no vinegar, no steam, no oil soap. Maryland eco guide. Free quote in the DMV.",
    canonical: "https://capitalcleancare.com/resources/how-to-clean-hardwood-floors-naturally",
    ogType: "article",
    ogImage: HERO_IMAGE,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how to clean hardwood floors naturally, best natural hardwood floor cleaner, clean wood floors without chemicals, is vinegar safe for hardwood, pH neutral floor cleaner, eco-friendly cleaning Maryland, hardwood floor care DMV"
        />
      </Helmet>

      <ArticleSchema
        title="How to Clean Hardwood Floors Naturally (Without Damaging the Finish)"
        description="A safe, residue-free method for cleaning sealed hardwood floors using a pH-neutral solution — why to skip vinegar, steam, and oil soap, and how to restore a natural shine."
        url="https://capitalcleancare.com/resources/how-to-clean-hardwood-floors-naturally"
        datePublished="2026-06-02"
        dateModified="2026-08-09"
        image={SCHEMA_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "How to Clean Hardwood Floors Naturally", href: "/resources/how-to-clean-hardwood-floors-naturally" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "How to Clean Hardwood Floors Naturally" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Clean, warm hardwood floor in a bright DMV home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Home Care Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Clean Hardwood Floors Naturally
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Protect the Finish — No Vinegar, No Steam, No Harsh Chemicals
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
              Hardwood floors are one of the most valuable features in a DMV home — and one of the easiest to slowly ruin with the wrong cleaning routine. From <strong>Bethesda</strong> colonials to <strong>Capitol Hill</strong> rowhouses to <strong>Arlington</strong> bungalows, the most common floor damage we see isn't dramatic — it's the gradual haze, dullness, and film that comes from years of vinegar, steam mops, and oil-soap "shine" products.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news: cleaning hardwood naturally is genuinely simple, and the gentlest method is also the most effective. No special chemicals required — just the right technique and a pH-neutral solution you can mix in 30 seconds. For more{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">
                eco-friendly cleaning
              </Link>{" "}
              approaches, this is the same residue-free philosophy our teams use in every home.
            </p>
          </FadeInSection>

          {/* Why finish matters */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              First, Know What Kind of Floor You Have
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Almost all modern hardwood floors are <strong>sealed with polyurethane</strong> — a clear, durable plastic-like coating that sits on top of the wood. You're never actually cleaning wood; you're cleaning the finish that protects it. That single fact drives every rule below: the goal is to clean the seal gently and keep water out of the seams, not to scrub bare wood.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                ["Sealed / polyurethane (most floors)", "A surface coating you can damp-mop. Water beads on top rather than soaking in. The method in this guide is built for these floors."],
                ["Engineered hardwood", "A real-wood veneer over plywood, usually polyurethane-sealed. Clean it exactly like solid sealed hardwood — but be even more careful with moisture, as the layers can separate."],
                ["Oiled or hardwax-oil finish", "Penetrating finish, not a surface seal. Use only barely-damp plain water and a finish-specific maintenance oil per the manufacturer — no soap films."],
                ["Waxed / unsealed (older floors)", "No protective topcoat. Never wet-mop. Dust and buff only; water will stain and raise the grain. When in doubt, test in a closet first."],
              ].map(([title, desc]) => (
                <div key={title} className="p-4 bg-secondary/40 border border-border rounded-xl">
                  <p className="font-semibold text-sm text-foreground mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Not sure which you have? Put a few drops of water in an inconspicuous spot. If it beads up, your floor is sealed. If it soaks in and darkens the wood, it's unsealed or oiled — stop and dust-clean only.
            </p>
          </FadeInSection>

          {/* The 4-step method */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              The Natural Method — 4 Steps
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Best for: sealed &amp; engineered hardwood</p>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6 group">
              <img
                src={METHOD_IMAGE}
                alt="Microfiber mop cleaning a sealed oak hardwood floor"
                className="w-full max-h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="space-y-5 mb-6">
              {howToSteps.map((step, i) => (
                <div key={step.name} className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-full bg-accent text-white flex items-center justify-center shrink-0 font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{step.name}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Inline CTA */}
          <BlogInlineCTA />

          {/* The vinegar myth */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Vinegar Myth (and Other Floor-Killers to Skip)
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The internet is full of "natural" hardwood hacks that quietly damage the finish. Here's what to leave out of the bucket — and why.
            </p>
            <div className="space-y-3 mb-6">
              {[
                ["Vinegar", "A mild acid that slowly etches and dulls polyurethane with repeated use. The cloudy look people blame on age is often years of vinegar mopping. Use neutral pH instead."],
                ["Steam mops", "Force hot moisture into seams and micro-cracks, swelling boards and lifting the finish. Most manufacturers void the warranty if you use one."],
                ["Oil soaps (e.g., Murphy)", "Leave a film that builds up, attracts dirt, and turns floors hazy over time — and that buildup must be stripped before any future refinishing."],
                ["Wax & 'mop-and-shine' products", "Create a layer that polyurethane can't bond to, complicating recoats and trapping grime. The 'shine' is temporary; the buildup is permanent until stripped."],
                ["Too much water", "The single biggest cause of hardwood damage. Standing water seeps into seams, cups the boards, and ruins the finish. Always wring the mop until it's just damp."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-3 items-start p-4 bg-red-50 border border-red-100 rounded-xl">
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-0.5">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Gallery */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">
              The Right Tools &amp; Technique
            </h2>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* Restore shine */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              How to Bring Back the Shine — Naturally
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If your floors look flat and lifeless, resist the urge to reach for a polish. Nine times out of ten, the dullness is <strong>residue buildup</strong> from old oil-soap or "shine" products, plus a layer of fine grit — not a lack of gloss. The fix is to clean more thoroughly, not to add another product on top.
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-6 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Pro sequence:</strong> dry-dust thoroughly → damp-mop with neutral cleaner to strip film → let dry fully → buff along the grain with a dry microfiber pad. That alone restores the natural sheen on most floors. If walkways are worn down to bare wood, no cleaner will help — that's a screen-and-recoat job, not a cleaning one.
              </p>
            </div>
          </FadeInSection>

          {/* When DIY won't cut it */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When to Call in a Professional Clean
            </h2>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-6 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                Stripping years of oil-soap buildup, deep-cleaning a whole home's floors before guests or a sale, or a{" "}
                <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">
                  move-in/move-out clean
                </Link>{" "}
                in <strong>Silver Spring</strong> or <strong>Rockville</strong> is more than an afternoon's work. Capital Clean Care's teams clean hardwood the residue-free way — pH-neutral, properly wrung, dried streak-free — as part of a systematic whole-home clean using{" "}
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
                Want Floors Cleaned the Right Way? Let Us Handle It.
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/house-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  house cleaning
                </Link>{" "}
                and{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">
                  eco-friendly cleaning
                </Link>{" "}
                across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">
                  Maryland
                </Link>
                , Washington DC, and Northern Virginia — Silver Spring, Bethesda, Rockville, Gaithersburg, and Potomac. Residue-free methods, background-checked teams, free estimates.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {[
                  "pH-neutral, finish-safe",
                  "Background-checked teams",
                  "Eco-friendly products",
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

      <RelatedPosts currentSlug="how-to-clean-hardwood-floors-naturally" />
      <StickyCTA />
    </Layout>
  );
};

export default HowToCleanHardwoodFloorsNaturally;
