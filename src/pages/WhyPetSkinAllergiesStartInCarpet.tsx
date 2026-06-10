import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Sparkles, PawPrint, Leaf } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/pet-carpet-allergies/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/pet-carpet-allergies/allergens.webp",
    alt: "Macro view of dust, pet dander, and pollen trapped deep in carpet fibers",
    caption: "What's really in the carpet: dander, dust-mite debris, and pollen settle below the surface where a normal vacuum can't reach.",
  },
  {
    src: "/images/blog/pet-carpet-allergies/hepa.webp",
    alt: "Person vacuuming a carpet with a HEPA vacuum while a cat watches",
    caption: "A true HEPA vacuum captures the fine particles a standard vacuum just blows back into the air.",
  },
  {
    src: "/images/blog/pet-carpet-allergies/clean.webp",
    alt: "Happy healthy dog relaxing on a freshly deep-cleaned carpet",
    caption: "The goal: a low-allergen floor your pet can lie on without paying for it later in itchy paws.",
  },
];

const howToSteps = [
  {
    name: "Vacuum with a true HEPA vacuum 2–3 times a week",
    text: "Pet dander and dust-mite debris are light and re-settle constantly, so weekly isn't enough in a home with animals. Use a vacuum with a sealed HEPA filtration system — an ordinary vacuum lacks the filtration to hold microscopic allergens and actually flings them back into the air, making the problem worse for a sensitive pet. Go slowly with overlapping passes, especially along baseboards and under furniture where dander collects.",
  },
  {
    name: "Deep-clean (steam-extract) carpets every 3–4 months",
    text: "Vacuuming only removes what sits near the surface. Hot-water extraction (steam cleaning) reaches deep into the pile and pulls out the embedded dander, dust-mite matter, and pollen that vacuuming leaves behind — the reservoir that keeps re-exposing your pet. In homes with shedding breeds or seasonal allergies, every 8–12 weeks keeps allergen levels genuinely low rather than just managed.",
  },
  {
    name: "Wash pet bedding and soft furnishings weekly in hot water",
    text: "Your pet's bed, blankets, and the rug they nap on hold more concentrated dander and dust mites than almost anywhere else in the house. Launder them weekly in hot water (130°F+ kills dust mites) and dry fully. Throw blankets over couches and chairs your pet uses, and wash those on the same schedule — it's the single highest-impact habit for an itchy pet.",
  },
  {
    name: "Use only pet-safe, fragrance-free cleaning products",
    text: "Harsh carpet chemicals and scented 'fresh' products can leave residues that irritate already-inflamed skin and paws — the same paws your pet licks and walks on. Choose fragrance-free, plant-based, low-residue products designed to be safe around animals. The cleaning that's meant to help your pet's skin shouldn't introduce a new irritant in the process.",
  },
];

const faqs = [
  {
    q: "Do I have to get rid of my carpet if my pet has skin allergies?",
    a: "No — and you usually don't need to. Bare floors (hardwood, tile, vinyl) do hold fewer allergens, but carpet you keep genuinely clean is far better than the choice implies. The problem isn't carpet itself; it's carpet that's never deep-cleaned, acting as a reservoir that constantly re-exposes your pet. A true-HEPA vacuum 2–3 times a week plus steam extraction every 3–4 months keeps allergen levels low enough that most pets do fine. If you're renovating anyway, low-pile carpet or hard floors in your pet's main areas is a reasonable upgrade — but it's not a requirement.",
  },
  {
    q: "How do I know if my pet's itching is from the carpet or something else?",
    a: "You often can't tell on your own, and that's exactly why a vet visit matters. Environmental allergies (dust mites, pollen, mold — much of which lives in carpet and bedding) tend to cause year-round or seasonal itching focused on the paws, belly, ears, and face, with licking and chewing. Food allergies and fleas cause overlapping signs. A veterinarian (or veterinary dermatologist) can distinguish them. What cleaning does is remove one of the biggest controllable triggers, so that whatever treatment your vet recommends works better and your pet is more comfortable in the meantime.",
  },
  {
    q: "Can cleaning alone cure my pet's skin allergies?",
    a: "No — cleaning is allergen reduction, not a cure. Atopic dermatitis (environmental allergy) is a managed condition, not something you eliminate by vacuuming. But reducing the allergen load in the home is one of the most effective things you can control, and vets routinely recommend it alongside medical treatment. Think of it this way: medication treats the reaction; cleaning lowers how much your pet is reacting to in the first place. The two together work far better than either alone.",
  },
  {
    q: "Are professional carpet-cleaning chemicals safe for my pet's skin?",
    a: "They can be — but it depends entirely on the products. Many conventional carpet cleaners leave fragranced or chemical residue that irritates an allergic pet's skin and paws, since pets lie directly on the floor and lick their paws. Always ask whether the products are pet-safe, fragrance-free, and low-residue, and whether the carpet is thoroughly rinsed and dried. Our cleanings use only plant-based, EPA Safer Choice–type products specifically because the family member closest to the floor is usually the pet.",
  },
  {
    q: "How soon should I notice a difference in my pet after deep cleaning?",
    a: "Many owners notice less scratching within one to two weeks of starting a real allergen-reduction routine (HEPA vacuuming plus a deep clean and weekly bedding washes), because you've removed the reservoir that was re-triggering the skin daily. That said, inflamed skin and any secondary infection take time to calm down, and results vary with the severity of the allergy and the season. If there's no improvement after a few weeks of consistent cleaning, that's a strong signal to involve your vet for the medical side.",
  },
];

const WhyPetSkinAllergiesStartInCarpet = () => {
  const { seoHelmet } = useSEO({
    title: "Why Your Pet's Skin Allergies Might Start in Your Carpet",
    description:
      "Itchy paws and constant scratching? Your carpet may be the hidden allergen reservoir. How dander, dust mites & pollen trigger pet skin allergies — and the cleaning that helps.",
    canonical: "https://capitalcleancare.com/blog/why-pet-skin-allergies-start-in-carpet",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="pet skin allergies carpet, dog itchy paws carpet, pet dander allergens carpet, dust mites pets, atopic dermatitis dog cat, HEPA vacuum pet allergies, deep clean carpet pet allergens Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="Why Your Pet's Skin Allergies Might Start in Your Carpet"
        description="How carpet traps pet dander, dust-mite debris, pollen, and mold that trigger itchy skin and atopic dermatitis in dogs and cats — and the HEPA + deep-cleaning routine that lowers the allergen load."
        url="https://capitalcleancare.com/blog/why-pet-skin-allergies-start-in-carpet"
        datePublished="2026-06-10"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Lower Carpet Allergens That Trigger Pet Skin Allergies"
        description="A four-step home routine to reduce the dander, dust mites, and pollen in carpet that trigger itchy skin in dogs and cats."
        url="https://capitalcleancare.com/blog/why-pet-skin-allergies-start-in-carpet"
        steps={howToSteps}
        totalTime="PT45M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Why Pet Skin Allergies Start in Your Carpet", href: "/blog/why-pet-skin-allergies-start-in-carpet" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Why Pet Skin Allergies Start in Your Carpet" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A dog scratching an itchy paw while lying on a living-room carpet">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Why Your Pet's Skin Allergies Might Start in Your Carpet
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The itchy paws, the constant licking — the trigger may be right under their feet
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Capital Clean Care · Montgomery County, MD · June 2026
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg"
          asChild
        >
          <Link to="/contact">Get a Free Pet-Safe Cleaning Quote</Link>
        </Button>
      </BlogHero>

      {/* ARTICLE */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Intro */}
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The licking starts at night. Then you notice the reddened paws, the chewing at the belly, the scratching that never quite stops. You change the food, you try a new shampoo — and the itch keeps coming back. For a huge number of dogs and cats, the reason is hiding somewhere most owners never think to look: <strong>the carpet they lie on every single day.</strong>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Carpet acts like a giant filter. It traps pet dander, dust-mite debris, pollen, and mold spores deep in its fibers — and unlike a real air filter, nobody ever changes it. Every time your pet flops down, naps, or rolls around, they're pressing their skin and face into a reservoir of the exact things their immune system overreacts to. Here's how it works, what it looks like on your pet, and the cleaning routine that actually lowers the load.
            </p>
          </FadeInSection>

          {/* Why carpet is a reservoir */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Your Carpet Is an Allergen Reservoir
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Pet dander & saliva proteins", "The actual allergen in cats and dogs isn't the hair — it's proteins in their dander (dead skin flakes) and dried saliva. These are microscopic and feather-light, so they sink past the carpet surface and accumulate in the pile over months."],
                ["Dust mites", "Dust mites thrive in warm, humid carpet and bedding, feeding on the very dander your pet sheds. Their waste particles are a top trigger of atopic dermatitis in pets — and Maryland's humid summers are ideal conditions for them."],
                ["Pollen & mold", "Pollen and mold spores ride in on paws and fur and settle into the fibers. They don't break down — they just build up, which is why an indoor pet can react to 'outdoor' allergens year-round."],
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
                <strong>The re-seeding problem:</strong> these particles are so light that every footstep, fan, or opening door lifts them back into the air — where they land on your pet again and re-trigger the skin. Cleaning isn't a one-time fix; it's about keeping the reservoir empty.
              </p>
            </div>
          </FadeInSection>

          {/* How it shows up on your pet */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              How It Shows Up on Your Pet
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Environmental (atopic) allergies have a recognizable pattern. If several of these sound familiar, the home environment is worth investigating:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Licking and chewing the paws", "The most classic sign. Pets walk through and lie on the allergens, so the paws take a constant dose. Reddish-brown staining on the fur between the toes is a tell-tale of chronic licking."],
                ["Scratching the belly, armpits, and face", "Thin-skinned, low-to-the-ground areas press directly into the carpet and react first."],
                ["Recurring ear infections", "Allergic inflammation often shows up as repeated, itchy ear infections — a frequently missed allergy symptom."],
                ["Year-round or seasonal flare-ups", "Dust-mite reactions tend to run all year (worse in humid months); pollen-driven ones spike with the seasons. Both are concentrated indoors by carpet."],
                ["Secondary skin infections", "Constant scratching breaks the skin barrier, letting bacteria and yeast take hold — which makes the itch even worse in a vicious cycle."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <PawPrint className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>This article isn't a diagnosis.</strong> Persistent itching always warrants a vet visit — food allergies and fleas cause overlapping signs. Cleaning removes one of the biggest <em>controllable</em> triggers so that whatever your vet recommends works better.
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The cleaning that helps */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              The Cleaning Routine That Actually Lowers the Load
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Allergen reduction, not a quick spritz of air freshener</p>
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

          <BlogInlineCTA
            headline="Too much carpet — or too little time — to deep-clean it yourself?"
            subtext="Capital Clean Care deep-cleans carpets and pet areas with pet-safe, fragrance-free products across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* What works against you */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Mistakes That Make a Pet's Skin Worse
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Using a cheap or filterless vacuum — it aerosolizes allergens instead of trapping them, spiking exposure right after you 'clean'",
                "Vacuuming only once a week in a home with shedding pets — dander rebuilds faster than that",
                "Skipping the pet's bed and blankets — the single most allergen-dense spot in the house",
                "Masking odor with scented sprays and 'fresh' carpet powders — fragrance and residue irritate inflamed skin",
                "Using bleach or ammonia-based cleaners on floors pets lie on — harsh on paws and respiratory systems alike",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* Eco note */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-12 flex gap-4 items-start">
              <Leaf className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Why pet-safe products matter here especially</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your pet is the family member who lies directly on the floor and licks their paws — so cleaning residue goes straight onto already-sensitive skin and into their mouth. That's the whole reason our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products. For more on pet hair and odor control, see our guide to{" "}
                  <Link to="/blog/remove-pet-hair-odors-dmv-homes" className="text-accent underline hover:no-underline">removing pet hair and odors in DMV homes</Link>.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* When to call a pro / vet */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When to Get Help
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "The itching is constant, the skin is raw, or there's hair loss — see your vet; this needs medical treatment alongside cleaning",
                "Recurring ear or skin infections — a sign of underlying allergy that a vet should manage",
                "You can't keep up with HEPA vacuuming and quarterly deep cleans yourself — a professional deep clean resets the allergen load",
                "Carpet that hasn't been deep-extracted in over a year — there's likely years of embedded dander to remove",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              Capital Clean Care's{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service</Link>{" "}
              resets the allergen load in carpet and pet areas with pet-safe protocols across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent underline hover:no-underline">DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent underline hover:no-underline">Northern Virginia</Link> — so your vet's plan has the best possible chance to work.
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
                A Cleaner Floor, A More Comfortable Pet
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}
                and{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">eco-friendly cleaning</Link>{" "}
                for pet families across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">Maryland</Link>{" "}
                — Bethesda, Rockville, Silver Spring, Gaithersburg, and Potomac. Pet-safe, fragrance-free, background-checked.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {["Pet-safe products", "HEPA-grade deep clean", "Background-checked teams", "Free estimates"].map((item) => (
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

export default WhyPetSkinAllergiesStartInCarpet;
