import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, BadgeCheck, PawPrint, Leaf } from "lucide-react";
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
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/pet-safe-labels/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/pet-safe-labels/label-closeup.webp",
    alt: "Close-up of a cleaning product label being read by a pet owner",
    caption: "The front of the bottle is marketing. The ingredient list and third-party logos are where the truth is.",
  },
  {
    src: "/images/blog/pet-safe-labels/certified.webp",
    alt: "Cleaning products displaying EPA Safer Choice and Green Seal certification logos",
    caption: "A real third-party logo — EPA Safer Choice, Green Seal, Ecocert — means an outside body verified the ingredients.",
  },
  {
    src: "/images/blog/pet-safe-labels/pet-watching.webp",
    alt: "A cat watching as eco-friendly cleaning products are used in a kitchen",
    caption: "The family member closest to every cleaned surface is the one who can't read the label — so it's on you.",
  },
];

const howToSteps = [
  {
    name: "Look for a real third-party certification first",
    text: "The fastest way to cut through marketing is to look for an independent certification logo, not a brand's own claim. EPA Safer Choice is the strongest for cleaning products — the EPA reviews every ingredient (even dyes and fragrances) for cancer risk, reproductive and developmental harm, and aquatic toxicity, with strengthened criteria for pet-care products. Green Seal, Ecocert, and EcoLogo are also legitimate. A real logo means an outside body verified the claims; a brand simply printing 'safe' on the front did not.",
  },
  {
    name: "Ignore the unregulated buzzwords",
    text: "Words like 'natural,' 'eco-safe,' 'green,' 'non-toxic,' and especially 'chemical-free' have no legal definition and are the classic signs of greenwashing — 'chemical-free' is literally impossible, since water is a chemical. 'Plant-based' and 'natural' don't mean harmless either: many plant-based cleaners are heavily processed, and some natural ingredients (like certain essential oils) are actually toxic to pets. Treat front-of-bottle adjectives as marketing until the ingredient list and a certification back them up.",
  },
  {
    name: "Demand full ingredient disclosure — and beware 'fragrance'",
    text: "A genuinely safe product lists its ingredients. Be wary of the single word 'fragrance' or 'parfum,' which can legally hide dozens of undisclosed chemicals, including phthalates linked to allergies and hormone disruption. Look for 'fragrance-free' or 'no added fragrance,' and for precise language ('no added dyes,' 'free from ammonia') rather than vague blanket promises. If a company won't tell you what's inside, that's your answer.",
  },
  {
    name: "Avoid the ingredients that are dangerous to pets",
    text: "Whatever the label says, scan for the known offenders and put the bottle back: ammonia, chlorine bleach, formaldehyde, phthalates, and phenols (common in 'pine' and medicinal disinfectants and especially toxic to cats). Strong essential oils — tea tree, camphor, pine, citrus — can also harm pets, so 'natural fragrance' isn't automatically safer. Choose low-VOC, low-odor, biodegradable, fragrance-free formulas, since your pet lies on the floor and licks their paws.",
  },
];

const faqs = [
  {
    q: "Does 'pet-safe' on a label actually mean anything?",
    a: "On its own, not much. 'Pet-safe,' like 'natural,' 'eco-friendly,' and 'non-toxic,' is an unregulated marketing term — there's no legal standard a product must meet to print it on the front of a bottle. That doesn't mean every product claiming it is unsafe; it means the claim alone isn't proof. What gives the claim weight is verification: a third-party certification like EPA Safer Choice or Green Seal, full ingredient disclosure, and the absence of the chemicals known to harm pets. Look for those, not the marketing phrase.",
  },
  {
    q: "Isn't anything 'natural' or 'plant-based' automatically safe for my pet?",
    a: "No — that's one of the most common and dangerous assumptions. 'Natural' has no regulated meaning, and 'plant-based' cleaners are often heavily processed. More importantly, plenty of natural substances are toxic to pets: many essential oils (tea tree, pentachlorophenol-style pine oils, citrus, camphor) can cause drooling, vomiting, tremors, or worse in cats and dogs, and 'natural fragrance' can still trigger airway irritation. Natural and safe are not the same thing — judge a product by its actual ingredients and certifications, not by a wholesome-sounding word.",
  },
  {
    q: "What certifications should I actually trust?",
    a: "For cleaning products, EPA Safer Choice is the strongest signal — the EPA screens every ingredient (including fragrances and dyes) for carcinogenicity, reproductive and developmental toxicity, and environmental harm, and has added stronger criteria specifically for pet-care products. Green Seal, Ecocert, and EcoLogo are also credible independent certifications; Ecocert, for instance, requires full ingredient disclosure. The key is that these are awarded by outside organizations that verify the chemistry — unlike a brand's own 'safe' or 'green' badge, which it gave itself.",
  },
  {
    q: "Why does 'fragrance' on the label matter so much?",
    a: "Because that one word can legally conceal a long list of undisclosed chemicals, and fragrance is one of the most common irritants for pets. Synthetic fragrances often contain phthalates — endocrine disruptors linked to allergies — and the VOCs they release can stress a pet's airways, which is a real problem for animals prone to asthma. Since you can't see what's behind the word, the safest move in a pet home is to choose products labeled 'fragrance-free' or 'no added fragrance' rather than 'lightly scented' or 'natural fragrance.'",
  },
  {
    q: "If reading labels is this complicated, what's the simplest safe option?",
    a: "Two shortcuts. First, when buying products, look for the EPA Safer Choice logo and a 'fragrance-free' label — that combination clears most of the hurdles at a glance. Second, if you'd rather not audit every bottle, use a cleaning service that already cleans exclusively with genuinely pet-safe, fragrance-free, plant-based products, so the decision is made for you. That's the approach we take by default in pet homes — the family member closest to the floor shouldn't depend on you decoding marketing copy.",
  },
];

const WhatPetSafeCleaningMeans = () => {
  const { seoHelmet } = useSEO({
    title: "What 'Pet-Safe' Cleaning Really Means: How to Read the Labels",
    description:
      "'Pet-safe,' 'natural,' and 'non-toxic' are unregulated marketing terms. How to decode cleaning-product labels — the certifications that matter (EPA Safer Choice), the greenwashing buzzwords to ignore, and the ingredients to avoid for pets.",
    canonical: "https://capitalcleancare.com/resources/what-pet-safe-cleaning-really-means",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="what does pet-safe mean cleaning, pet-safe cleaning product labels, EPA Safer Choice pets, greenwashing cleaning products, non-toxic cleaning pets, fragrance-free pet cleaning Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="What 'Pet-Safe' Cleaning Really Means: How to Read the Labels"
        description="Why 'pet-safe,' 'natural,' and 'non-toxic' are unregulated marketing terms, how to decode cleaning-product labels using third-party certifications like EPA Safer Choice, which greenwashing buzzwords to ignore, and which ingredients to avoid for dogs and cats."
        url="https://capitalcleancare.com/resources/what-pet-safe-cleaning-really-means"
        datePublished="2026-06-15"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Read a Cleaning-Product Label for Pet Safety"
        description="A four-step method to judge whether a cleaning product is genuinely safe for pets: check for third-party certification, ignore unregulated buzzwords, demand ingredient disclosure, and avoid the chemicals known to harm pets."
        url="https://capitalcleancare.com/resources/what-pet-safe-cleaning-really-means"
        steps={howToSteps}
        totalTime="PT10M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "What 'Pet-Safe' Cleaning Really Means", href: "/resources/what-pet-safe-cleaning-really-means" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "What 'Pet-Safe' Cleaning Really Means: How to Read the Labels" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A pet owner reading the label of a cleaning product with a dog nearby">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          What "Pet-Safe" Cleaning Really Means: How to Read the Labels
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          "Natural," "non-toxic," and "pet-safe" are marketing — here's how to find the truth
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Montgomery County, MD · June 2026
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
              Walk down any cleaning aisle and you'll see it everywhere: <strong>"natural," "eco-friendly," "non-toxic," "pet-safe."</strong> It's reassuring — and almost none of it is regulated. There's no legal standard a company has to meet before printing "pet-safe" on the front of a bottle, which means the phrase, by itself, tells you very little about whether it's actually safe for your dog or cat.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news: once you know where to look, the truth is easy to find. It's not in the marketing on the front — it's in the certification logos and the ingredient list. Here's how to decode a label in under a minute, the buzzwords that mean nothing, and the ingredients to put straight back on the shelf.
            </p>
          </FadeInSection>

          {/* Buzzwords */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Buzzwords That Mean Nothing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["\"Natural\" / \"plant-based\"", "No legal definition, and not a guarantee of safety. Many plant-based cleaners are heavily processed, and some natural ingredients — like certain essential oils — are toxic to pets."],
                ["\"Non-toxic\" / \"pet-safe\"", "Unregulated marketing claims a brand can print without meeting any standard. They may be true; the words alone aren't proof. Look for verification."],
                ["\"Chemical-free\"", "A red flag — it's literally impossible (water is a chemical). Legitimate brands use precise language like 'free from ammonia' or 'no added fragrance' instead."],
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
                <strong>The rule of thumb:</strong> if a safety claim is on the front of the bottle in big friendly letters but isn't backed by a third-party logo or a clear ingredient list, treat it as advertising — not information.
              </p>
            </div>
          </FadeInSection>

          {/* What to trust */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What to Actually Look For
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Three things separate a genuinely safe product from a well-marketed one:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["A real third-party certification", "EPA Safer Choice is the gold standard — the EPA screens every ingredient, even fragrances and dyes, for cancer risk, reproductive harm, and environmental toxicity, with extra criteria for pet-care products. Green Seal, Ecocert, and EcoLogo are also credible."],
                ["Full ingredient disclosure", "A safe product tells you what's inside. Ecocert-style certifications even require it. If a company hides its formula, that's a signal in itself."],
                ["'Fragrance-free,' not just 'fresh scent'", "The single word 'fragrance' can hide dozens of undisclosed chemicals, including phthalates. For a pet — especially one prone to asthma — fragrance-free is far safer than 'natural scent.'"],
                ["Low-VOC, low-odor, biodegradable", "These point to formulas designed to be gentle on airways and surfaces — exactly what you want around an animal that breathes low to the ground and grooms constantly."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <BadgeCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The 4 steps */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              How to Read a Label in Under a Minute
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Skip the front; read the proof</p>
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
            headline="Skip the label-reading entirely"
            subtext="Capital Clean Care cleans only with genuinely pet-safe, fragrance-free, plant-based products — EPA Safer Choice–type, no ammonia, bleach, or hidden fragrance. Across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Ingredients to avoid */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              The Ingredients to Avoid in a Pet Home
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Ammonia and chlorine bleach — caustic, and dangerous to breathe or ingest",
                "Phenols — common in 'pine' and medicinal disinfectants, and especially toxic to cats",
                "Formaldehyde and formaldehyde-releasing preservatives",
                "Phthalates — usually hidden behind the word 'fragrance'; endocrine disruptors linked to allergies",
                "Strong essential oils (tea tree, camphor, pine, citrus) — 'natural' but genuinely toxic to many pets",
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
                <p className="font-semibold text-foreground mb-1">Why we don't ask you to take our word for it</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Pet-safe" only matters if it's real. Our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products that clear the same bar we describe here. Related reading:{" "}
                  <Link to="/resources/cleaning-product-poisoning-in-pets" className="text-accent underline hover:no-underline">cleaning-product poisoning in pets</Link>{" "}
                  and{" "}
                  <Link to="/resources/allergen-free-home-dog-cat-owners" className="text-accent underline hover:no-underline">building an allergen-free home</Link>.
                </p>
              </div>
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
                Genuinely Pet-Safe — Not Just Labeled That Way
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">eco-friendly cleaning</Link>{" "}
                and{" "}
                <Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}
                for pet families across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">Maryland</Link>{" "}
                — Bethesda, Rockville, Silver Spring, Gaithersburg, and Potomac. Plant-based, fragrance-free, background-checked.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {["EPA Safer Choice–type", "Fragrance-free", "No bleach or ammonia", "Free estimates"].map((item) => (
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

      <RelatedPosts currentSlug="what-pet-safe-cleaning-really-means" />
      <StickyCTA />
    </Layout>
  );
};

export default WhatPetSafeCleaningMeans;
