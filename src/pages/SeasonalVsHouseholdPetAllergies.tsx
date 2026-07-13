import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, CalendarDays, PawPrint, Leaf } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/seasonal-household/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/seasonal-household/pollen-paws.webp",
    alt: "A dog walking through spring grass and pollen outdoors",
    caption: "Pollen is seasonal and outdoor — but it rides indoors on paws and fur and settles into your floors and bedding.",
  },
  {
    src: "/images/blog/seasonal-household/dust-mites.webp",
    alt: "Sunlight showing dust in a cozy living room where a cat rests",
    caption: "Dust mites, mold, and dander are the year-round, indoor half — and the half you can actually control with cleaning.",
  },
  {
    src: "/images/blog/seasonal-household/calm-pet.webp",
    alt: "A calm, comfortable dog resting in a clean bright home",
    caption: "Lowering the indoor allergen load eases the total burden — even for a pet whose worst flares are seasonal.",
  },
];

const howToSteps = [
  {
    name: "Wipe paws and coat after every time outdoors (pollen season)",
    text: "During pollen season, your pet carries ragweed, grass, and tree pollen indoors on their paws and fur, then spreads it onto every floor and bed they touch. A quick wipe-down with a damp cloth at the door — paws, belly, and coat — removes a surprising amount before it gets tracked through the house. It's the single easiest habit to blunt the seasonal half of the problem.",
  },
  {
    name: "HEPA-vacuum 2–3 times a week to control the year-round half",
    text: "Dust mites, mold spores, and dander are the perennial allergens — present no matter the season or how tidy things look. A true-HEPA vacuum captures these fine particles instead of flinging them back into the air like a standard vacuum does. Go over carpet, rugs, and upholstery, paying attention to your pet's favorite spots, so the indoor load that's there 365 days a year stays low.",
  },
  {
    name: "Wash bedding weekly and hold humidity at 30–50%",
    text: "Your pet's bed and blankets concentrate both dander and dust-mite allergen, plus any pollen they've carried in. Launder them weekly in hot water (130°F+) and dry fully. Keep indoor humidity between 30–50% with AC or a dehumidifier — dust mites and mold can't thrive in dry air, which quietly suppresses two of the biggest perennial triggers at once, all year long.",
  },
  {
    name: "Deep-clean quarterly and use only fragrance-free products",
    text: "Vacuuming handles the surface; a periodic deep clean (hot-water carpet and upholstery extraction) empties the deep reservoir of embedded dander, mite matter, and trapped pollen that keeps re-seeding the air. Throughout, use plant-based, fragrance-free, low-residue products — scented cleaners add irritants to an already-reactive pet, which is the opposite of what allergy-prone skin and airways need.",
  },
];

const faqs = [
  {
    q: "How can I tell if my pet's allergies are seasonal or year-round?",
    a: "The biggest clue is timing. Seasonal allergies flare during specific months — typically spring through early fall — when pollen from trees, grass, and ragweed is high, and they ease in winter. Year-round (perennial) allergies, driven by indoor triggers like dust mites, mold, and dander, cause symptoms that never fully go away regardless of the season. A simple way to find out is to keep an 'itch calendar': note when the scratching, paw-licking, or ear infections get worse. Consistent flares in certain months point to pollen; constant year-round signs point to indoor allergens. Many pets, frustratingly, have both — and a veterinarian can help confirm which.",
  },
  {
    q: "If the allergies are seasonal (pollen), is cleaning even worth it?",
    a: "Yes — arguably more than you'd think. You can't stop pollen from existing outdoors, but pollen doesn't stay outside: your pet carries it in on their paws and coat, where it settles into carpet, bedding, and upholstery and keeps re-exposing them indoors. Wiping paws after walks, HEPA-vacuuming, and washing bedding removes that tracked-in pollen. Just as important, allergies work on a 'total load' basis — the more you lower the indoor allergens (dust mites, mold, dander), the less your pet's immune system is dealing with overall, so the seasonal pollen spikes hit a lower baseline and tend to bother them less.",
  },
  {
    q: "My pet only itches in spring. Could it still be indoor allergens?",
    a: "It can be a mix. A clear spring-only pattern strongly suggests pollen as the main driver. But spring also brings rising humidity that lets dust mites and mold rebound after winter, so the indoor load often climbs at the same time — which can amplify the seasonal flare. That's why the most effective approach during your pet's bad season is to attack both at once: reduce the pollen they track in and keep the perennial indoor allergens low. If a strictly seasonal itch is severe, your vet can discuss seasonal medication alongside the environmental steps.",
  },
  {
    q: "Does keeping a cleaner house actually reduce vet visits for allergies?",
    a: "Cleaning isn't a cure, and it won't replace veterinary care for a genuinely allergic pet — but reducing the controllable allergen load is one of the things vets consistently recommend alongside treatment, because it lowers how hard the immune system is working. Fewer airborne and surface allergens often means less scratching, fewer secondary skin and ear infections from broken skin, and medication that works better at lower doses. It's best understood as making your vet's plan more effective, not as a substitute for it.",
  },
  {
    q: "What's the difference between environmental allergies and food or flea allergies?",
    a: "Environmental allergies (also called atopy) are reactions to things in the air and surroundings — pollen, dust mites, mold, and dander — and they show up as itchy skin, paw-licking, recurrent ear infections, and sometimes sneezing or runny eyes. Food allergies and flea-bite allergies cause overlapping signs, which is exactly why you can't reliably tell them apart at home. A veterinarian rules out fleas and food through targeted steps (flea control, diet trials) before settling on an environmental diagnosis. Cleaning specifically targets the environmental category — it does nothing for a food or flea allergy, so getting the right diagnosis first matters.",
  },
];

const SeasonalVsHouseholdPetAllergies = () => {
  const { seoHelmet } = useSEO({
    title: "Seasonal vs. Household Allergies in Pets: How to Tell Them Apart",
    description:
      "Is your pet's itching from pollen or from year-round indoor triggers? How to tell seasonal vs. household (dust mite, mold, dander) allergies apart — and the cleaning that controls the half you can.",
    canonical: "https://capitalcleancare.com/blog/seasonal-vs-household-pet-allergies",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="seasonal vs household pet allergies, dog seasonal allergies pollen, cat year-round allergies dust mites, perennial allergies pets, indoor allergens dogs cats, atopy pet cleaning Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="Seasonal vs. Household Allergies in Pets: How to Tell Them Apart"
        description="How to distinguish seasonal (pollen-driven) allergies from year-round household allergies (dust mites, mold, dander) in dogs and cats — the timing clues, why both often overlap, and the cleaning routine that controls the indoor half you can actually manage."
        url="https://capitalcleancare.com/blog/seasonal-vs-household-pet-allergies"
        datePublished="2026-06-15"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Reduce the Household Allergens Behind Your Pet's Year-Round Itching"
        description="A four-step routine to control the indoor (perennial) allergens — dust mites, mold, dander, and tracked-in pollen — that drive a pet's environmental allergies."
        url="https://capitalcleancare.com/blog/seasonal-vs-household-pet-allergies"
        steps={howToSteps}
        totalTime="PT45M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Seasonal vs. Household Allergies in Pets", href: "/blog/seasonal-vs-household-pet-allergies" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Seasonal vs. Household Allergies in Pets: How to Tell Them Apart" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A dog scratching outdoors in spring, with pollen in the air and a home in the background">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Seasonal vs. Household Allergies in Pets: How to Tell Them Apart
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          Pollen comes and goes — but the indoor triggers never leave. Here's how to read the difference.
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
              Some pets itch for a few weeks every spring and then settle down. Others never stop — scratching, licking paws, and battling ear infections in January as much as July. The pattern itself is the biggest clue to what's driving it: <strong>seasonal allergies</strong> ride the pollen calendar, while <strong>household (perennial) allergies</strong> come from indoor triggers that are present all year.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Telling them apart matters, because it changes what you can do about it. You can't switch off pollen — but the year-round indoor half (dust mites, mold, and dander) is the part you genuinely control with cleaning. Here's how to read your pet's signs, why the two so often overlap, and the routine that lowers the load you <em>can</em> manage.
            </p>
          </FadeInSection>

          {/* The key difference */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Key Difference Is Timing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                ["Seasonal (pollen-driven)", "Tree, grass, and ragweed pollen spike in spring, summer, and early fall, then fade in winter. If your pet's worst weeks line up with certain months — and ease off-season — pollen is likely the main driver."],
                ["Household / perennial (indoor)", "Dust mites, mold, mildew, and dander are present year-round, 'no matter how clean the house may be.' These cause symptoms that never fully disappear with the seasons — a constant, low-grade itch."],
              ].map(([title, desc]) => (
                <div key={title} className="p-4 bg-secondary/40 border border-border rounded-xl">
                  <p className="font-semibold text-sm text-foreground mb-1">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <CalendarDays className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>Keep an "itch calendar."</strong> For a few weeks, jot down when the scratching, paw-licking, or ear flare-ups get worse. Spikes tied to certain months point to pollen; a steady year-round itch points to indoor allergens. Many pets show both patterns at once.
              </p>
            </div>
          </FadeInSection>

          {/* They look the same on the pet */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              On Your Pet, They Look Almost Identical
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Whether the trigger is pollen or dust mites, environmental (atopic) allergies show up the same way — which is why timing, not symptoms, is what separates them:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Itching, licking, and chewing the paws", "The hallmark sign. Pets walk through allergens and lick what collects between their toes — reddish-brown staining on the fur is a tell-tale of chronic licking."],
                ["Recurring ear infections", "Repeated, itchy ear infections are one of the most commonly missed allergy symptoms in both dogs and cats."],
                ["Red or irritated skin, belly, and armpits", "Thin-skinned, low-to-the-ground areas press into allergen-holding surfaces and react first."],
                ["Sneezing, runny eyes, or worse shedding", "Airway and coat signs can accompany the skin symptoms, especially during a heavy pollen stretch."],
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
                <strong>This isn't a diagnosis.</strong> Food allergies and fleas cause overlapping signs, so persistent itching always warrants a vet visit. Cleaning targets the <em>environmental</em> triggers specifically — it does nothing for a food or flea allergy, which is why the right diagnosis comes first.
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The controllable half */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              Control the Half You Actually Can
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">You can't stop pollen — but you can slash the indoor load</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Here's the strategic point: allergies work on <strong>total load</strong>. The lower you keep the indoor allergens, the smaller the baseline your pet's immune system is fighting — so even seasonal pollen spikes land softer. And pollen itself doesn't stay outside; it rides in on paws and fur. Both halves respond to the same handful of habits:
            </p>
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
            headline="Can't keep up with the indoor allergen load yourself?"
            subtext="Capital Clean Care deep-cleans carpets, upholstery, and pet areas with pet-safe, fragrance-free products across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Mistakes */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Mistakes That Keep Your Pet Itching
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Assuming a spring-only itch means cleaning won't help — tracked-in pollen and rebounding dust mites both live indoors",
                "Letting humidity climb above 50% — it lets dust mites and mold multiply year-round",
                "Skipping the paw-wipe after walks in pollen season — it spreads outdoor allergens across every floor",
                "Using a filterless vacuum — it re-aerosolizes the dust mites and dander you're trying to remove",
                "Masking it with scented sprays — fragrance irritates already-reactive skin and airways",
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
                <p className="font-semibold text-foreground mb-1">Why fragrance-free is non-negotiable for an allergic pet</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Adding scented cleaners to a pet already reacting to pollen and dust just stacks on another irritant. That's why our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products. For the full room-by-room plan, see our guide to an{" "}
                  <Link to="/blog/allergen-free-home-dog-cat-owners" className="text-accent underline hover:no-underline">allergen-free home for dog &amp; cat owners</Link>.
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
                "The itching is constant, the skin is raw, or there's hair loss — see your vet; this needs medical treatment alongside cleaning",
                "Recurring ear or skin infections — a sign of underlying allergy a vet should manage",
                "You can't pin down a seasonal pattern — a vet can help separate environmental, food, and flea triggers",
                "Carpet and upholstery that haven't been deep-cleaned in months — the year-round reservoir likely needs a reset",
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
              resets the year-round allergen load in carpet and pet areas with pet-safe protocols across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent underline hover:no-underline">DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent underline hover:no-underline">Northern Virginia</Link> — so your vet's plan works on a lower baseline.
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
                A Lower Allergen Baseline, All Year
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

      <RelatedPosts currentSlug="seasonal-vs-household-pet-allergies" />
      <StickyCTA />
    </Layout>
  );
};

export default SeasonalVsHouseholdPetAllergies;
