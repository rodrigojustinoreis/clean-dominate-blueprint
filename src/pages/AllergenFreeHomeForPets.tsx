import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Home, PawPrint, Leaf } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/allergen-free-home/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/allergen-free-home/bedding.webp",
    alt: "Freshly laundered pet bed and blankets being placed back down in a clean bedroom",
    caption: "Pet bedding is the #1 allergen reservoir — hot-water washing weekly is the highest-impact habit in the whole guide.",
  },
  {
    src: "/images/blog/allergen-free-home/floors.webp",
    alt: "Person steam-cleaning a low-pile rug with a dog watching from a hard floor",
    caption: "Hard floors and low-pile rugs that get steam-cleaned hold far fewer allergens than deep carpet left uncleaned.",
  },
  {
    src: "/images/blog/allergen-free-home/healthy-pet.webp",
    alt: "A relaxed, healthy dog and cat in a bright, clean, allergen-controlled living room",
    caption: "The payoff: a calmer, lower-allergen home for the whole household — humans and pets alike.",
  },
];

const howToSteps = [
  {
    name: "Control humidity to 30–50% to starve dust mites",
    text: "Dust mites — a top allergen — can't survive in dry air. Run AC or a dehumidifier to hold indoor humidity between 30 and 50%, and use bathroom and kitchen exhaust fans. In the humid DMV summer this single setting quietly suppresses mite populations in carpet, bedding, and upholstery across the whole house.",
  },
  {
    name: "Attack the bedding — yours and your pet's — weekly in hot water",
    text: "Pet beds, blankets, and the throws on furniture your pet uses hold the most concentrated dander and dust-mite allergen anywhere in the home. Wash them weekly in hot water (130°F+) and dry fully; consider allergen-impermeable covers on mattresses and pet beds. This is the highest-return habit in the entire routine.",
  },
  {
    name: "Choose hard floors or steam-cleaned low-pile carpet",
    text: "Bare floors (hardwood, tile, vinyl) hold the fewest allergens and wipe clean. If you keep carpet, low-pile is far easier to keep allergen-low than deep plush — and the key is genuine deep cleaning: hot-water extraction every 3–4 months pulls out the embedded dander and mite matter that vacuuming leaves behind. Vacuum 2–3 times a week with a sealed HEPA machine in between.",
  },
  {
    name: "Filter the air and clean with fragrance-free products",
    text: "Run true-HEPA air purifiers in the bedroom and main living area, replace HVAC filters on schedule, and damp-wipe hard surfaces instead of dry-dusting. Throughout, use only plant-based, fragrance-free, low-residue cleaners — your pet lies on the floor and licks their paws, so scented residue and harsh chemicals become a new irritant on already-sensitive skin and airways.",
  },
];

const cadence = [
  ["Daily / every other day", "HEPA-vacuum the rooms your pet uses; wipe food-area floors; quick lint-roller on favorite furniture."],
  ["Weekly", "Hot-water wash pet bedding, blankets, and throws; damp-wipe hard surfaces, sills, and baseboards; HEPA-vacuum all soft furniture."],
  ["Monthly", "Wash or replace HVAC filter; launder curtains or wipe blinds; rotate and wash removable couch covers; clean air-purifier pre-filters."],
  ["Every 3–4 months", "Deep clean: hot-water carpet extraction and upholstery cleaning to empty the embedded dander and dust-mite reservoir."],
];

const faqs = [
  {
    q: "Can I really have an allergen-free home if I own pets?",
    a: "\"Allergen-free\" is the goal, not a literal end state — with pets, the realistic aim is allergen-controlled: keeping the load low enough that people and pets are comfortable. The good news is that household allergens are highly responsive to routine. Controlling humidity, washing bedding weekly, choosing the right flooring, filtering the air, and deep-cleaning soft surfaces a few times a year can dramatically lower dander, dust mites, pollen, and mold. You don't have to rehome a pet to get there; you have to manage the environment consistently.",
  },
  {
    q: "What's the single most important thing I can do?",
    a: "Two things tie for first: control humidity (30–50%) and wash pet bedding weekly in hot water. Humidity control suppresses dust mites across the entire house at once, and the pet's bed is the most concentrated allergen reservoir you can reset with a single wash. If you only build two habits, build those — then layer HEPA vacuuming, air filtration, and periodic deep cleaning on top.",
  },
  {
    q: "Do I need to remove all my carpet?",
    a: "No. Bare floors do hold fewer allergens, but carpet you keep genuinely clean is far better than its reputation. The problem is carpet that's never deep-extracted, acting as a reservoir. If you're renovating anyway, hard floors or low-pile carpet in your pet's main areas is a sensible upgrade — but a HEPA-vacuum-plus-quarterly-steam routine keeps existing carpet allergen-low without ripping anything out.",
  },
  {
    q: "Are air purifiers worth it for pet allergens?",
    a: "Yes, as part of the system. A true-HEPA purifier captures 99.97% of particles down to 0.3 microns — well below the size of dander, dust, and pollen — so it meaningfully lowers what's airborne, especially in bedrooms where you and your pet spend hours. Just remember a purifier only treats air; it can't touch the allergens already embedded in carpet, upholstery, and bedding. Pair it with cleaning, don't substitute it.",
  },
  {
    q: "How do pet-safe cleaning products fit into an allergen-free home?",
    a: "They're essential, because the family member closest to the floor is usually the pet. Harsh, fragranced cleaners leave residue on the surfaces pets lie on and lick, turning an allergen-reduction effort into a new source of irritation for sensitive skin and airways. Plant-based, fragrance-free, low-residue products clean effectively without that trade-off — which is exactly why our cleanings use them by default in pet homes.",
  },
];

const AllergenFreeHomeForPets = () => {
  const { seoHelmet } = useSEO({
    title: "The Allergen-Free Home: A Complete Guide for Dog & Cat Owners",
    description:
      "A vet-informed, room-by-room routine to control dander, dust mites, pollen & mold in a pet home — humidity, bedding, floors, air filtration, and a clear weekly-to-quarterly cleaning cadence.",
    canonical: "https://capitalcleancare.com/blog/allergen-free-home-dog-cat-owners",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="allergen-free home pets, reduce pet allergens home, dust mites pets, pet dander control, allergy-friendly home dog cat, HEPA pet allergens, pet-safe cleaning Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="The Allergen-Free Home: A Complete Guide for Dog & Cat Owners"
        description="A complete, vet-informed guide to controlling the four main household allergens for pet owners — dander, dust mites, pollen, and mold — with humidity control, bedding hygiene, flooring choices, air filtration, fragrance-free products, and a weekly-to-quarterly cleaning cadence."
        url="https://capitalcleancare.com/blog/allergen-free-home-dog-cat-owners"
        datePublished="2026-06-14"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Create an Allergen-Controlled Home for Dogs and Cats"
        description="A four-step system to lower dander, dust mites, pollen, and mold in a pet home using humidity control, hot-water bedding hygiene, smart flooring and deep cleaning, and HEPA air filtration with fragrance-free products."
        url="https://capitalcleancare.com/blog/allergen-free-home-dog-cat-owners"
        steps={howToSteps}
        totalTime="PT60M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "The Allergen-Free Home for Dog & Cat Owners", href: "/blog/allergen-free-home-dog-cat-owners" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "The Allergen-Free Home: A Complete Guide for Dog & Cat Owners" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A bright, clean living room with a happy dog and cat in an allergen-controlled home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          The Allergen-Free Home: A Complete Guide for Dog & Cat Owners
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          You don't have to choose between your pet and a low-allergen home
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
              If someone in your home sneezes through allergy season, or your pet scratches and coughs no matter what you try, the house itself is usually part of the story. Homes with dogs and cats accumulate four main allergens — <strong>pet dander, dust mites, pollen, and mold</strong> — and they build up in predictable places. The encouraging part: every one of them responds to routine. You can't make a pet home literally allergen-<em>free</em>, but you can make it allergen-<em>controlled</em>, and the difference is night and day.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              This is the complete guide: the four allergens and where they hide, the four habits that lower them the most, a clear cleaning cadence you can actually follow, and when to bring in a deep clean. It pulls together the details from our companion guides on{" "}
              <Link to="/blog/pet-dander-air-quality" className="text-accent underline hover:no-underline">pet dander and air quality</Link>,{" "}
              <Link to="/blog/pet-sneezing-household-dust" className="text-accent underline hover:no-underline">household dust and your pet's lungs</Link>, and{" "}
              <Link to="/blog/why-pet-skin-allergies-start-in-carpet" className="text-accent underline hover:no-underline">pet skin allergies and carpet</Link>.
            </p>
          </FadeInSection>

          {/* The four allergens */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Four Allergens in Every Pet Home
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {[
                ["Pet dander", "Microscopic skin flakes (2.5–10 microns) carrying saliva and skin-oil proteins. Light enough to stay airborne for hours and coat every surface — the breed doesn't matter, the cleaning does."],
                ["Dust mites", "Tiny organisms that live in carpet, bedding, and upholstery, feeding on shed dander. Their waste is a leading allergen and they thrive above 50% humidity."],
                ["Pollen", "Tracked in on paws and fur, it settles into fibers and doesn't break down — which is why indoor pets and people can react to 'outdoor' allergens year-round."],
                ["Mold spores", "Flourish in damp, humid spots — bathrooms, basements, around windows. Spores ride the same air currents as dander and dust."],
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
                <strong>They share one weakness — humidity.</strong> Three of the four (dust mites, mold, and the dust that carries dander and pollen) are suppressed by keeping indoor humidity at 30–50%. It's the highest-leverage setting in the whole house.
              </p>
            </div>
          </FadeInSection>

          {/* Where they hide */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Where Allergens Hide — Room by Room
            </h2>
            <div className="space-y-3 mb-8">
              {[
                ["The bedroom", "Mattresses, your bedding, and the pet bed are the most concentrated dust-mite and dander reservoirs in the house — and you breathe them for hours each night. Highest priority for hot-water washing and HEPA filtration."],
                ["Living-room soft surfaces", "Sofas, throw pillows, drapery, and area rugs trap dander and dust deep in their fibers. Vacuuming the floor but skipping the couch leaves most of the load in place."],
                ["Carpet and along baseboards", "Deep-pile carpet is the biggest single reservoir; allergens also drift and bank up along baseboards and in corners where airflow drops."],
                ["Damp zones", "Bathrooms, basements, laundry areas, and around leaky windows grow mold. Ventilation and humidity control matter as much as scrubbing here."],
                ["The HVAC system", "A neglected furnace filter and dusty ducts recirculate every allergen through the entire home. The filter is cheap leverage most people forget."],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <Home className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The 4 habits */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              The Four Habits That Lower Allergens Most
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">In order of impact</p>
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

          {/* Cadence table */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Your Allergen-Control Cleaning Cadence
            </h2>
            <div className="overflow-hidden rounded-2xl border border-border mb-10">
              {cadence.map(([when, what], i) => (
                <div key={when} className={`flex flex-col sm:flex-row gap-1 sm:gap-4 p-4 ${i % 2 === 0 ? "bg-secondary/40" : "bg-background"}`}>
                  <p className="font-semibold text-sm text-accent sm:w-44 shrink-0">{when}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{what}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="The quarterly deep clean is the hard part — let us handle it"
            subtext="Capital Clean Care resets the embedded allergen reservoir with hot-water carpet and upholstery extraction, using pet-safe, fragrance-free products across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Mistakes */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Mistakes That Quietly Undo Your Work
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Letting humidity drift above 50% — it re-grows dust mites and mold no matter how much you clean",
                "Cleaning floors but never the pet bed, couch, or drapery — that's where most of the allergen load lives",
                "Using a filterless vacuum — it re-aerosolizes everything you just tried to remove",
                "Masking with scented sprays and 'fresh' powders — fragrance and residue irritate sensitive skin and airways",
                "Forgetting the HVAC filter — it recirculates allergens through the whole house between cleanings",
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
                <p className="font-semibold text-foreground mb-1">Pet-safe products are non-negotiable in a pet home</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  An allergen-control routine fails if the cleaning itself adds irritants. Because your pet lies on the floor and licks their paws, our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products — safe for the family member closest to every surface.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* When to call a pro / vet */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When to Bring in Help
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Symptoms (yours or your pet's) persist despite a consistent routine — embedded reservoirs in carpet and upholstery are the likely holdout",
                "A pet with diagnosed allergies, asthma, or recurring ear/skin infections — keep the environmental trigger load as low as possible alongside vet care",
                "Carpet or upholstery that hasn't been hot-water extracted in over a year — there's a deep reservoir to reset",
                "You can't keep the weekly and quarterly tasks going on your own — a professional deep clean handles the heavy reset",
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
              resets the allergen load in carpet, upholstery, and pet areas with pet-safe protocols across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent underline hover:no-underline">DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent underline hover:no-underline">Northern Virginia</Link>.
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
                An Allergen-Controlled Home, Without the Heavy Lifting
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

      <RelatedPosts currentSlug="allergen-free-home-dog-cat-owners" />
      <StickyCTA />
    </Layout>
  );
};

export default AllergenFreeHomeForPets;
