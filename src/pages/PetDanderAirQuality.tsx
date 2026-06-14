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

const HERO_IMAGE = "/images/blog/pet-dander/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/pet-dander/airborne.webp",
    alt: "Microscopic pet dander particles floating in a sunbeam in a living room",
    caption: "Dander is so light it can stay airborne for hours — which is why a 'clean-looking' room can still be full of it.",
  },
  {
    src: "/images/blog/pet-dander/hepa.webp",
    alt: "Person running a HEPA vacuum over a sofa while a dog rests nearby",
    caption: "Dander hides in upholstery, drapery, and air returns — not just the floor. A sealed HEPA system is what actually traps it.",
  },
  {
    src: "/images/blog/pet-dander/clean-air.webp",
    alt: "Bright, fresh living room with a cat by a window and clean air",
    caption: "The goal: lower the dander load at the source so the air everyone breathes — including your pet — is genuinely cleaner.",
  },
];

const howToSteps = [
  {
    name: "Vacuum surfaces — not just floors — twice a week with a true HEPA vacuum",
    text: "Because dander is only 2.5–10 microns and feather-light, it settles on every horizontal surface, not just the carpet: sofas, curtains, bookshelves, and the tops of baseboards. A vacuum without sealed HEPA filtration pushes those fine particles straight back into the air through the exhaust. Use a true-HEPA vacuum with a brush and upholstery tool, and go over soft furniture and drapery — the upholstery is a dander reservoir most people never touch.",
  },
  {
    name: "Wipe hard surfaces with a damp microfiber cloth — don't dry-dust",
    text: "Dry dusting and feather dusters just relaunch dander into the air. A slightly damp microfiber cloth captures and holds the particles instead. Wipe shelves, window sills, baseboards, door tops, and electronics weekly. Microfiber's split fibers grab particles far smaller than a paper towel can, and you rinse the dander down the drain rather than scattering it.",
  },
  {
    name: "Run a true-HEPA air purifier in the rooms your pet uses most",
    text: "Cleaning removes settled dander; an air purifier captures what's still floating. A true-HEPA unit removes 99.97% of particles down to 0.3 microns — and pet dander is much larger than that, so a properly sized purifier excels at it. Place one in the bedroom and the main living area, run it continuously, and pair HEPA with an activated-carbon stage if odor is also a concern (carbon, not HEPA, is what neutralizes smell).",
  },
  {
    name: "Wash bedding and control humidity to starve dust mites",
    text: "Dander is also the food supply for dust mites, whose waste is a second airborne irritant. Wash pet beds, blankets, and your own bedding weekly in hot water (130°F+), and keep indoor humidity between 30–50% with AC or a dehumidifier — Maryland's humid summers otherwise let mites thrive. Lowering humidity and laundering on a schedule cuts both the dander and the mite load at once.",
  },
];

const faqs = [
  {
    q: "What exactly is pet dander, and why is it such a problem for air quality?",
    a: "Pet dander is tiny flakes of skin (plus dried saliva and urine proteins) that animals shed constantly. The flakes are microscopic — roughly 2.5 to 10 microns, where a human hair is around 70 microns — and so light they stay suspended in the air for hours and travel on the smallest air current. That's what makes dander different from hair: you can sweep up hair, but dander floats, recirculates through your HVAC, and lands on every surface, which is why it dominates indoor air quality in pet homes.",
  },
  {
    q: "Do hypoallergenic or 'non-shedding' breeds produce less dander?",
    a: "Not really. The allergen isn't the hair — it's proteins in the dander, saliva, and skin oils — so even low-shedding breeds like poodles and many cats still produce dander. 'Hypoallergenic' breeds may release less hair into the home, but they still shed skin. The reliable way to lower the dander load in your home is environmental: regular HEPA cleaning, washing soft surfaces, and air filtration — not the breed you choose.",
  },
  {
    q: "Will an air purifier alone fix my home's dander problem?",
    a: "An air purifier helps a lot, but it can't do the job alone. A purifier only treats the dander that's currently airborne; the much larger reservoir is the dander that has already settled into carpet, upholstery, bedding, and air ducts, which keeps re-seeding the air every time someone moves through the room. The effective approach is both: remove settled dander with HEPA vacuuming and damp wiping, then let a HEPA purifier capture what stays in the air. One without the other leaves most of the load in place.",
  },
  {
    q: "Does pet dander affect my pet too, or just the humans in the house?",
    a: "It affects your pet as well. Dander mixes with dust mites, mold, and pollen into the same airborne load your dog or cat breathes all day — and pets can develop their own inhalant allergies and respiratory irritation from it, including cats with feline asthma. So cleaning up the dander load isn't only about the people with allergies; it lowers what the animal closest to the floor is breathing too.",
  },
  {
    q: "How does a deep clean help when I already vacuum regularly?",
    a: "Regular vacuuming handles the surface, but dander works its way deep into carpet pile, upholstery seams, drapery, and around HVAC returns where a weekly pass can't reach. A periodic deep clean — hot-water carpet extraction, upholstery cleaning, and detailed wiping of the spots dander hides — empties that deep reservoir so your day-to-day cleaning has far less to fight. In a shedding household, resetting that reservoir every few months is what keeps airborne dander genuinely low rather than just managed.",
  },
];

const PetDanderAirQuality = () => {
  const { seoHelmet } = useSEO({
    title: "Pet Dander: The Invisible Enemy of Your Home's Air Quality",
    description:
      "Pet dander is 2.5–10 microns and floats for hours. How it wrecks your indoor air quality — and the HEPA, microfiber & deep-cleaning routine that actually eliminates it.",
    canonical: "https://capitalcleancare.com/blog/pet-dander-air-quality",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="pet dander air quality, how to get rid of pet dander, pet dander HEPA filter, reduce pet dander home, dog cat dander allergies, pet dander air purifier, eliminate pet dander Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="Pet Dander: The Invisible Enemy of Your Home's Air Quality"
        description="What pet dander really is, why its microscopic size lets it dominate your indoor air, and the HEPA vacuuming, microfiber, air-filtration, and deep-cleaning routine that lowers the load for both people and pets."
        url="https://capitalcleancare.com/blog/pet-dander-air-quality"
        datePublished="2026-06-14"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Eliminate Pet Dander and Improve Indoor Air Quality"
        description="A four-step home routine to remove airborne and settled pet dander using HEPA vacuuming, damp microfiber wiping, air filtration, and humidity control."
        url="https://capitalcleancare.com/blog/pet-dander-air-quality"
        steps={howToSteps}
        totalTime="PT40M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Pet Dander & Your Air Quality", href: "/blog/pet-dander-air-quality" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Pet Dander: The Invisible Enemy of Your Air Quality" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="Sunlight revealing fine pet dander particles floating in the air of a living room with a dog">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Pet Dander: The Invisible Enemy of Your Home's Air Quality
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          You can't see it, you can't sweep it — but you and your pet breathe it all day
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
              Hold a beam of afternoon sunlight in a room where a dog or cat lives and you'll see it: a slow, drifting haze of fine particles that never quite settles. Most of it is <strong>pet dander</strong> — and it's the single biggest reason the air in a pet home feels different, smells different, and triggers allergies even when every surface looks spotless.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The reason dander is so hard to beat comes down to size. Pet dander is roughly <strong>2.5 to 10 microns</strong> — for comparison, a human hair is about 70 microns wide. Particles that small are so light they stay airborne for hours, ride every air current, and get pulled through your HVAC system into rooms your pet has never even entered. Here's what dander actually is, why it dominates your indoor air, and the routine that genuinely lowers it.
            </p>
          </FadeInSection>

          {/* What dander is */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What Pet Dander Actually Is (and Why Hair Isn't the Problem)
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["It's skin, not hair", "Dander is microscopic flakes of dead skin your pet sheds constantly — coated with the proteins from saliva and skin oils that are the actual allergen. You can vacuum up hair; dander floats."],
                ["It's smaller than dust", "At 2.5–10 microns, dander is far smaller than what the eye sees as 'dust.' It slips past cheap filters, stays suspended for hours, and recirculates through your air handler again and again."],
                ["It sticks to everything", "Dander's proteins are slightly sticky, so it clings to walls, upholstery, drapery, and HVAC ducting — building an invisible reservoir that re-seeds the air every time the room is disturbed."],
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
                <strong>Why "hypoallergenic" breeds don't solve it:</strong> the allergen is the dander and saliva protein, not the fur — so even low-shedding dogs and cats produce it. The dander load in your home is controlled by how you clean, not by the breed you own.
              </p>
            </div>
          </FadeInSection>

          {/* How it hurts air quality */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              How Dander Quietly Degrades Your Air
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Dander rarely acts alone. It mixes with dust mites, pollen, and mold into one airborne load — and because it's the lightest of them, it's the part that keeps everything else circulating. Here's where it shows up:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Allergy symptoms that flare indoors", "Sneezing, congestion, itchy eyes, or a scratchy throat that's worse at home — especially in the bedroom — is a classic dander signature, because you spend hours breathing settled-and-relaunched particles overnight."],
                ["A 'pet smell' that comes back fast", "Odor molecules cling to the same dander and oils coating your soft surfaces. Spraying air freshener masks it; it returns because the source — the dander reservoir — is still there."],
                ["Dust that reappears a day after cleaning", "If visible dust returns almost immediately, fine dander is being relaunched from upholstery and ducts that a surface clean never reached."],
                ["Your pet's own breathing", "Dander, dust mites, and mold are inhalant allergens for animals too. Cats in particular can develop feline asthma, with coughing and labored breathing tied to airborne irritants."],
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
                <strong>If a person or pet has asthma,</strong> dander isn't just a comfort issue — it's a recognized respiratory trigger. Persistent coughing, wheezing, or breathing trouble (in people or pets) deserves a medical or veterinary evaluation; cleaning lowers the trigger load alongside that care.
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The routine */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              How to Actually Eliminate Pet Dander
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Capture it at the source, then filter what's left in the air</p>
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
            headline="Dander hides where a weekly vacuum can't reach"
            subtext="Capital Clean Care deep-cleans carpets, upholstery, and the spots dander collects — with pet-safe, fragrance-free products — across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Mistakes */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Mistakes That Keep Dander Airborne
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Using a vacuum without sealed HEPA filtration — it exhausts fine dander straight back into the room",
                "Dry-dusting or using a feather duster — it relaunches dander instead of capturing it",
                "Only cleaning floors — upholstery, drapery, and bedding hold more dander than the carpet does",
                "Ignoring the HVAC — a clogged or low-grade furnace filter recirculates dander through the whole house",
                "Masking the smell with sprays and scented plug-ins — fragrance adds VOCs without removing a single particle",
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
                <p className="font-semibold text-foreground mb-1">Why we clean dander with fragrance-free products</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Scented sprays and harsh cleaners add irritants to air that's already carrying dander — the opposite of what a sensitive person or pet needs. That's why our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products. Dealing with allergies too? See how{" "}
                  <Link to="/blog/why-pet-skin-allergies-start-in-carpet" className="text-accent underline hover:no-underline">your pet's skin allergies can start in the carpet</Link>.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* When to call a pro */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              When to Bring in Help
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Allergy symptoms persist even though you vacuum and run a purifier — settled dander in upholstery and ducts is likely the source",
                "There's wall-to-wall carpet that hasn't been hot-water extracted in over a year",
                "A household member or pet has asthma and reacts indoors — lowering the airborne load matters most here",
                "You simply can't keep up with HEPA vacuuming soft surfaces every week — a deep clean resets the reservoir",
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
              resets the dander load in carpet, upholstery, and pet areas with pet-safe protocols across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent underline hover:no-underline">DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent underline hover:no-underline">Northern Virginia</Link> — so the air everyone breathes is cleaner.
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
                Cleaner Air for Your Family — and Your Pet
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
                {["Pet-safe products", "HEPA-grade deep clean", "Upholstery & carpet", "Free estimates"].map((item) => (
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

export default PetDanderAirQuality;
