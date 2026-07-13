import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Wind, PawPrint, Leaf } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/hepa-pets-asthma/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/hepa-pets-asthma/hepa-vacuum.webp",
    alt: "A sealed HEPA vacuum being used on a carpet while a cat watches nearby",
    caption: "A true-HEPA vacuum traps the fine particles a standard vacuum just blows back into the air an asthmatic pet breathes.",
  },
  {
    src: "/images/blog/hepa-pets-asthma/air-purifier.webp",
    alt: "A HEPA air purifier running in a living room with a resting cat",
    caption: "A true-HEPA air purifier, run several hours a day, captures what's still airborne between cleans.",
  },
  {
    src: "/images/blog/hepa-pets-asthma/healthy-cat.webp",
    alt: "A calm cat breathing easily in a clean, bright home",
    caption: "The goal of technical cleaning: the lowest possible trigger load for a pet whose lungs are sensitive.",
  },
];

const howToSteps = [
  {
    name: "Vacuum 2–3 times a week with a true-HEPA, sealed vacuum",
    text: "This is the single most important piece of 'technical' cleaning for an asthmatic pet. An ordinary vacuum lacks the sealed filtration to hold microscopic dust-mite matter and dander, so it aerosolizes them — spiking the exact airborne triggers right after you 'clean.' A true-HEPA vacuum with a sealed system captures particles down to 0.3 microns instead. Go slowly over carpet, rugs, and upholstery, especially your pet's favorite resting spots.",
  },
  {
    name: "Run a true-HEPA air purifier in your pet's main room — at least 4 hours a day",
    text: "Cleaning removes settled triggers; a purifier captures what's still floating. The American College of Allergy, Asthma & Immunology recommends HEPA air purifiers for reducing allergens, and the Asthma and Allergy Foundation of America suggests running one at least four hours a day. Place a correctly-sized true-HEPA unit where your pet sleeps and spends the most time, and pair HEPA with an activated-carbon stage if odor or smoke is also a trigger (carbon, not HEPA, handles those).",
  },
  {
    name: "Wash bedding hot weekly and hold humidity at 30–50%",
    text: "Your pet's bed is the most concentrated source of dust-mite allergen in the house — a major asthma trigger. Launder it, plus blankets and soft toys, weekly in hot water (130°F+) and dry fully. Keep indoor humidity between 30–50% with AC or a dehumidifier, since dust mites and mold can't survive in dry air. In humid Maryland summers, humidity control alone meaningfully drops the trigger load an asthmatic pet inhales.",
  },
  {
    name: "Deep-clean with HEPA-grade equipment and fragrance-free products",
    text: "Vacuuming handles the surface; a periodic deep clean with hot-water extraction empties the embedded reservoir of dander and dust-mite matter in carpet and upholstery that keeps re-seeding the air. Just as important for sensitive lungs: skip scented sprays, plug-ins, and harsh chemicals entirely — fragrance and VOCs are themselves airway irritants. Use only plant-based, fragrance-free, low-residue products around a pet that's prone to asthma flares.",
  },
];

const faqs = [
  {
    q: "Do air purifiers and HEPA filters actually help pets with asthma?",
    a: "They can help meaningfully, as part of a plan. Feline asthma (and chronic bronchitis in dogs) is triggered or worsened by airborne particles — dust mites, pollen, mold spores, smoke, and dander — and a true-HEPA filter traps up to 99.97% of airborne particles, including those allergens. The American College of Allergy, Asthma & Immunology recommends HEPA air purifiers for allergen reduction, and many owners report their pet's wheezing and coughing decrease within weeks of running one. Just remember a purifier treats only the air; it can't touch the triggers already embedded in carpet, bedding, and upholstery, which is why HEPA cleaning and filtration work best together.",
  },
  {
    q: "What does 'true HEPA' actually mean, and is H13 better?",
    a: "A 'true HEPA' filter is certified to capture at least 99.97% of particles as small as 0.3 microns — the size range that includes pet dander, dust-mite debris, and pollen. Watch for vague labels like 'HEPA-type' or 'HEPA-like,' which are not held to that standard and underperform. H13 is a medical-grade HEPA classification that captures around 99.95% of particles down to 0.1 microns — even finer filtration, useful for severe sensitivity. For most asthmatic pets, a genuine true-HEPA unit (and a sealed true-HEPA vacuum) is the meaningful step; H13 is a worthwhile upgrade for a severely affected animal.",
  },
  {
    q: "Why does the type of vacuum matter so much for an asthmatic pet?",
    a: "Because a regular vacuum can make things worse. Dust-mite waste and dander are microscopic and light; a vacuum without sealed HEPA filtration can't actually hold them, so it pushes them straight back into the room through its exhaust — aerosolizing the triggers right when your pet is nearby. A sealed true-HEPA vacuum captures and keeps those particles instead. For a pet with sensitive airways, switching to a HEPA vacuum (and vacuuming when the pet isn't in the room) is one of the highest-impact changes you can make.",
  },
  {
    q: "Will cleaning and filtration replace my pet's asthma medication?",
    a: "No — and this is important. Feline asthma and chronic bronchitis are medical conditions that require veterinary diagnosis and treatment, sometimes including inhalers or other medication. HEPA cleaning and air filtration reduce the trigger load your pet is exposed to, which can mean fewer and milder flare-ups and treatment that works better — but they are a complement to veterinary care, never a substitute. Any coughing, wheezing, or labored breathing in a pet should be evaluated by a vet promptly.",
  },
  {
    q: "How often should carpets and upholstery be deep-cleaned for a pet with asthma?",
    a: "For a pet with respiratory sensitivity, a deep clean of carpets and upholstery every 3–4 months is a sensible target, on top of HEPA vacuuming 2–3 times a week. Soft furnishings are the deep reservoir where dust mites and dander accumulate beyond what surface vacuuming reaches, so resetting them periodically keeps the airborne trigger load genuinely low between cleans. Homes with wall-to-wall carpet, multiple pets, or a severely asthmatic animal benefit from the more frequent end of that range — ideally with HEPA-grade equipment and fragrance-free products.",
  },
];

const HepaFiltersPetsAsthma = () => {
  const { seoHelmet } = useSEO({
    title: "HEPA Filters and Pets: Cleaning for Animals with Asthma",
    description:
      "Feline asthma is triggered by airborne dust mites, dander & mold. Why true-HEPA vacuuming and filtration (not a regular vacuum) is vital for asthmatic pets — and the technical cleaning routine that helps.",
    canonical: "https://capitalcleancare.com/blog/hepa-filters-pets-asthma",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="HEPA filter pets asthma, air purifier feline asthma, HEPA vacuum pet dander, true HEPA H13 pets, cat asthma triggers cleaning, pet respiratory cleaning Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="HEPA Filters and Pets: Cleaning for Animals with Asthma"
        description="Why true-HEPA filtration and vacuuming matter for pets with feline asthma or chronic bronchitis, how HEPA (and medical-grade H13) capture the airborne dust-mite, dander, and mold triggers, and the technical cleaning routine that lowers a sensitive pet's exposure."
        url="https://capitalcleancare.com/blog/hepa-filters-pets-asthma"
        datePublished="2026-06-15"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Use HEPA Cleaning and Filtration to Help an Asthmatic Pet"
        description="A four-step technical-cleaning routine — sealed HEPA vacuuming, true-HEPA air filtration, hot-water bedding hygiene with humidity control, and deep cleaning with fragrance-free products — to lower airborne triggers for a pet with asthma."
        url="https://capitalcleancare.com/blog/hepa-filters-pets-asthma"
        steps={howToSteps}
        totalTime="PT45M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "HEPA Filters and Pets with Asthma", href: "/blog/hepa-filters-pets-asthma" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "HEPA Filters and Pets: Cleaning for Animals with Asthma" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A cat resting near a HEPA air purifier in a clean, calm living room">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          HEPA Filters and Pets: Cleaning for Animals with Asthma
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          For a pet with sensitive lungs, how you clean — and what you filter — really matters
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
              If your cat has been diagnosed with asthma — or your dog with chronic bronchitis — you've already learned that the air in your home isn't a small detail. Feline asthma is <strong>triggered or worsened by airborne particles</strong>: dust mites, pollen, mold spores, smoke, and pet dander, most of which live indoors. For these pets, ordinary cleaning isn't enough; the <em>technical</em> piece — HEPA-grade filtration and vacuuming — is what actually lowers what they breathe.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The catch is that the wrong equipment makes things worse. A standard vacuum can fling the very triggers back into the air. Here's what "true HEPA" really means, why it matters so much for an asthmatic pet, and the cleaning-and-filtration routine that keeps the trigger load as low as possible.
            </p>
          </FadeInSection>

          {/* What HEPA is */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What "True HEPA" Actually Means
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["99.97% at 0.3 microns", "A true-HEPA filter captures at least 99.97% of airborne particles down to 0.3 microns — the range that includes pet dander, dust-mite debris, and pollen, the core asthma triggers."],
                ["Medical-grade H13", "H13 HEPA is a medical-grade step up, capturing ~99.95% of particles down to 0.1 microns — even finer filtration for a severely sensitive pet."],
                ["Beware 'HEPA-type'", "Labels like 'HEPA-type' or 'HEPA-like' aren't held to the true-HEPA standard and underperform. For an asthmatic pet, look specifically for 'true HEPA' (and a sealed system on vacuums)."],
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
                <strong>HEPA captures particles; carbon captures odor.</strong> A HEPA filter traps solid particles like dander and dust, but it does nothing for smells, smoke, or VOCs — those need an <em>activated-carbon</em> stage. If odor or smoke is one of your pet's triggers, choose a unit (and a cleaning approach) that addresses both.
              </p>
            </div>
          </FadeInSection>

          {/* Why a regular vacuum makes it worse */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why a Regular Vacuum Can Make Asthma Worse
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              This is the part most owners miss. The way you clean can either lower the trigger load or spike it:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Standard vacuums aerosolize triggers", "Dust-mite waste and dander are microscopic and light. A vacuum without sealed HEPA filtration can't hold them — it blows them back into the room through the exhaust, right where your pet is breathing."],
                ["Dry dusting relaunches particles", "Feather dusters and dry cloths lift settled dander and dust into the air instead of capturing it. A damp microfiber cloth holds the particles and rinses them away."],
                ["Vacuum when the pet is elsewhere", "Even with a HEPA vacuum, stirring up settled particles briefly raises the airborne count. For a sensitive pet, clean while they're in another room and let the air settle (or the purifier run) before they return."],
                ["Filterless = false clean", "A room can look spotless while the air is full of fine triggers. For an asthmatic pet, the filter is the cleaning — not just the visible tidiness."],
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
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Asthma is a medical condition.</strong> HEPA cleaning lowers triggers, but it does not replace treatment. Any coughing, wheezing, or labored breathing — especially the crouched, hacking cough common in feline asthma — needs prompt veterinary care. Filtration makes that treatment work on a lower trigger load.
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The routine */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              The Technical-Cleaning Routine for an Asthmatic Pet
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Capture, filter, and keep the trigger load low</p>
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
            headline="Want HEPA-grade deep cleaning without buying the equipment?"
            subtext="Capital Clean Care deep-cleans carpets, upholstery, and pet areas with HEPA-grade equipment and pet-safe, fragrance-free products across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Mistakes */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Mistakes That Spike an Asthmatic Pet's Triggers
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Using a 'HEPA-type' or filterless vacuum — it re-aerosolizes dust mites and dander instead of trapping them",
                "Buying an air purifier too small for the room, or running it only an hour a day",
                "Skipping the activated-carbon stage when smoke or odor is a trigger — HEPA alone won't touch those",
                "Cleaning with scented sprays, plug-ins, or harsh chemicals — fragrance and VOCs are airway irritants",
                "Vacuuming with the pet in the room — let the air settle before they come back",
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
                <p className="font-semibold text-foreground mb-1">Fragrance-free matters most for sensitive lungs</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  For a pet prone to asthma flares, the wrong cleaner adds irritation instead of removing it. That's why our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products. Related reading:{" "}
                  <Link to="/blog/pet-sneezing-household-dust" className="text-accent underline hover:no-underline">how household dust affects your pet's lungs</Link>{" "}
                  and{" "}
                  <Link to="/blog/pet-dander-air-quality" className="text-accent underline hover:no-underline">how pet dander wrecks your air quality</Link>.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* When to call */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When to Get Help
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Coughing, wheezing, or any labored breathing — see your vet promptly; asthma needs medical management",
                "A cat with a recurring crouched, hacking cough — a classic feline-asthma sign, not a hairball",
                "Flares that ease when you're away and return at home — a strong indoor-trigger signal worth acting on",
                "Carpet and upholstery that haven't had a HEPA-grade deep clean in months — the embedded reservoir needs a reset",
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
              lowers the airborne trigger load in carpet, upholstery, and pet areas with HEPA-grade, pet-safe protocols across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent underline hover:no-underline">DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent underline hover:no-underline">Northern Virginia</Link> — so your vet's plan works on the lowest possible baseline.
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
                Cleaner Air for a Pet That Needs It Most
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
                {["Pet-safe products", "HEPA-grade deep clean", "Carpet & upholstery", "Free estimates"].map((item) => (
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

      <RelatedPosts currentSlug="hepa-filters-pets-asthma" />
      <StickyCTA />
    </Layout>
  );
};

export default HepaFiltersPetsAsthma;
