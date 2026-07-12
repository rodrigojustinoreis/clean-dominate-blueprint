import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Stethoscope, PawPrint, Leaf } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/pet-dust-respiratory/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/pet-dust-respiratory/dust-mites.webp",
    alt: "Close-up of dust accumulating in a home where a cat sits on a windowsill",
    caption: "House dust is a mix of dust-mite waste, dander, and pollen — and it concentrates low to the ground, right at pet-breathing height.",
  },
  {
    src: "/images/blog/pet-dust-respiratory/vet-check.webp",
    alt: "Veterinarian listening to a dog's chest with a stethoscope during an exam",
    caption: "Persistent coughing, wheezing, or reverse sneezing always warrants a vet visit — dust control supports treatment, it doesn't replace it.",
  },
  {
    src: "/images/blog/pet-dust-respiratory/clean-home.webp",
    alt: "Calm, dust-free living room with a dog resting comfortably on the floor",
    caption: "A low-dust home is one of the few respiratory triggers you can directly control for your pet.",
  },
];

const howToSteps = [
  {
    name: "Vacuum low surfaces daily during flare-ups with a HEPA vacuum",
    text: "House dust settles low — exactly where your pet breathes, sleeps, and plays. During a flare, vacuum floors, rugs, and low upholstery daily (every other day otherwise) with a sealed HEPA vacuum so the fine dust is captured instead of blown back into the air. Pay attention to the spots your pet favors: their bed, the base of the couch, and along baseboards where dust drifts and collects.",
  },
  {
    name: "Wash pet bedding weekly in hot water and cut the humidity",
    text: "Your pet's bed is the most concentrated source of dust-mite allergen in the house. Wash it — plus blankets and any soft toy they sleep with — weekly in hot water (130°F+) to kill mites, and dry fully. Keep indoor humidity at 30–50% with AC or a dehumidifier, because dust mites can't survive in dry air. In humid Maryland summers, humidity control alone meaningfully drops the mite load your pet inhales.",
  },
  {
    name: "Filter the air your pet breathes",
    text: "Run a true-HEPA air purifier in the room where your pet spends the most time and sleeps, and replace your HVAC filter on schedule with a higher-rated filter your system supports. A true-HEPA unit captures 99.97% of particles down to 0.3 microns — well below the size of dust, dander, and pollen — so it pulls the inhalant triggers out of the air rather than recirculating them.",
  },
  {
    name: "Reduce dust reservoirs and use only fragrance-free products",
    text: "Dust hides in soft, fibrous things: heavy drapery, clutter, deep-pile rugs, and never-cleaned upholstery. Reduce what you can, damp-wipe hard surfaces instead of dry-dusting, and deep-clean carpets and upholstery periodically. Critically, avoid scented sprays, plug-ins, and harsh cleaners — fragrance and VOCs are themselves airway irritants for a pet with sensitive lungs. Clean with plant-based, fragrance-free products.",
  },
];

const faqs = [
  {
    q: "Can household dust really cause respiratory problems in dogs and cats?",
    a: "Yes. Veterinarians recognize house dust mites, dander, mold, and pollen as inhalant allergens for pets. In dogs the most common sign of inhalant allergy is actually itchy skin, but airway signs do occur — sneezing, reverse sneezing, runny nose or eyes, and coughing. Cats are especially vulnerable to airway disease: feline asthma and bronchitis can be triggered or worsened by airborne dust and allergens, causing coughing and labored breathing. If your pet has ongoing respiratory symptoms, dust is a plausible contributor and a vet should evaluate it.",
  },
  {
    q: "What's the difference between a sneeze, a reverse sneeze, and a cough in my pet?",
    a: "A normal sneeze clears the nose and is usually harmless and occasional. A reverse sneeze — a sudden, repeated snorting inhalation, most common in dogs — looks alarming but is often brief and triggered by irritants like dust or strong scents. A cough is different and more concerning, especially in cats, where a hunched, coughing posture can signal feline asthma rather than a hairball. Occasional sneezing tied to dusty conditions is one thing; frequent coughing, wheezing, or any labored breathing is a reason to see your vet promptly.",
  },
  {
    q: "My cat coughs sometimes — could it be asthma instead of hairballs?",
    a: "It's worth checking. Feline asthma is more common than many owners realize, and the cough is frequently mistaken for trying to bring up a hairball — a crouched stance, neck extended, with a dry, hacking cough and no hairball produced. Airborne triggers like dust, dander, smoke, and aerosols can set it off. Asthma is a serious, manageable condition, so any recurring cough or breathing difficulty in a cat should be examined by a veterinarian rather than assumed to be hairballs.",
  },
  {
    q: "Will cleaning fix my pet's breathing, or do I still need the vet?",
    a: "Cleaning reduces the trigger load; it does not replace veterinary care. Conditions like feline asthma and chronic bronchitis need medical diagnosis and treatment — sometimes inhalers or other medication. What dust control does is lower how much your pet is inhaling, so the prescribed treatment works better and flare-ups are less frequent. Think of it as the two halves of one plan: the vet treats the airway, and a low-dust home removes what was provoking it.",
  },
  {
    q: "How often should carpets and upholstery be deep-cleaned in a home with a pet that has breathing issues?",
    a: "For a pet with respiratory sensitivity, a deep clean of carpets and upholstery every 3–4 months is a reasonable target, alongside daily-to-weekly HEPA vacuuming. Soft furnishings are the deep reservoir where dust mites and dander accumulate beyond what surface vacuuming reaches, so resetting them periodically keeps the airborne load genuinely low between cleans. Homes with wall-to-wall carpet, multiple pets, or a diagnosed asthmatic pet benefit from the more frequent end of that range.",
  },
];

const PetSneezingHouseholdDust = () => {
  const { seoHelmet } = useSEO({
    title: "Is Your Pet Sneezing? How Household Dust Affects Their Lungs",
    description:
      "Dust mites, dander & pollen are inhalant allergens for pets — and can trigger feline asthma. Why your dog or cat sneezes and coughs, and the cleaning routine that helps them breathe.",
    canonical: "https://capitalcleancare.com/blog/pet-sneezing-household-dust",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="pet sneezing dust, dog sneezing coughing allergies, cat coughing asthma dust, household dust pet respiratory, feline asthma triggers, dust mites pets, HEPA vacuum pet breathing Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="Is Your Pet Sneezing? How Household Dust Affects Their Lungs"
        description="How house dust, dust mites, dander, and pollen act as inhalant allergens for dogs and cats — the difference between sneezing, reverse sneezing, and a cough, feline asthma warning signs, and the cleaning routine that lowers the load."
        url="https://capitalcleancare.com/blog/pet-sneezing-household-dust"
        datePublished="2026-06-14"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Reduce Household Dust That Affects Your Pet's Breathing"
        description="A four-step routine to lower the house dust, dust mites, and dander that irritate a pet's respiratory system, using HEPA vacuuming, hot-water laundering, humidity control, and air filtration."
        url="https://capitalcleancare.com/blog/pet-sneezing-household-dust"
        steps={howToSteps}
        totalTime="PT45M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Is Your Pet Sneezing? Household Dust & Their Lungs", href: "/blog/pet-sneezing-household-dust" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Is Your Pet Sneezing? How Household Dust Affects Their Lungs" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A cat mid-sneeze in a sunlit living room with visible dust in the air">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Is Your Pet Sneezing? How Household Dust Affects Their Lungs
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The dust you barely notice sits right at your pet's breathing height
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
              An occasional sneeze from a dog or cat is normal. But a pet that sneezes in bouts, snorts, sniffles, or develops a dry, hacking cough may be reacting to something you can't see — <strong>the house dust settled at their level.</strong> Pets live low to the ground, where dust concentrates, so they breathe a heavier dose of it than anyone standing up in the same room.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              That "dust" isn't just dirt. It's a mix of <strong>dust-mite waste, pet dander, pollen, and mold spores</strong> — all of which veterinarians recognize as inhalant allergens for dogs and cats. For some pets it means sneezing and runny eyes; for cats especially, airborne irritants can trigger or worsen feline asthma. Here's how to read the signs, when it's a vet visit, and the cleaning that lowers what your pet is breathing.
            </p>
          </FadeInSection>

          {/* What's in house dust */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What's Really in the Dust Your Pet Breathes
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Dust-mite waste", "Microscopic mites live in carpet, bedding, and upholstery, feeding on shed skin and dander. Their waste particles are one of the most common inhalant allergens — and they thrive in humid Maryland summers."],
                ["Dander & pollen", "Your pet's own dander plus pollen and mold tracked in on paws and fur settle into the same low surfaces, building a fibrous reservoir of airway irritants right where they rest."],
                ["It sits low", "Dust drifts downward and concentrates near the floor — at nose height for a dog or cat. Standing humans breathe far less of it than the pet napping on the rug."],
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
                <strong>The humidity link:</strong> dust mites can't survive in dry air. Keeping indoor humidity between 30–50% is one of the most effective, least obvious ways to cut the airway allergens your pet inhales — especially through a humid DMV summer.
              </p>
            </div>
          </FadeInSection>

          {/* Reading the signs */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Sneeze, Reverse Sneeze, or Cough? How to Read It
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Not all of these mean the same thing. Knowing the difference helps you decide what needs a vet now versus what dust control can ease:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Occasional sneezing", "A normal nose-clearing reflex. If it spikes in dusty conditions or after sweeping, it's likely irritant-driven and responds well to lowering the dust load."],
                ["Reverse sneezing (snorting fits)", "Sudden, repeated snorting inhales — most common in dogs and often set off by dust or strong scents. Usually brief and harmless, but frequent episodes are worth mentioning to your vet."],
                ["Runny eyes or nose", "Clear discharge can accompany inhalant allergies. Colored or thick discharge, though, points to infection and needs veterinary attention."],
                ["A dry, hacking cough — especially in cats", "A crouched, neck-extended cough that produces no hairball can be feline asthma, not digestion. This is the sign to take seriously."],
                ["Wheezing or labored breathing", "Any open-mouth breathing (in cats), wheezing, or visible effort to breathe is urgent — see a vet right away."],
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
              <Stethoscope className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>This is not a diagnosis.</strong> Feline asthma, chronic bronchitis, infections, and other conditions share these signs. Persistent coughing, wheezing, or any breathing difficulty needs a veterinarian. Cleaning lowers the <em>controllable</em> triggers alongside whatever treatment your vet prescribes.
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* The routine */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              The Cleaning Routine That Helps Your Pet Breathe
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Lower the dust at pet level — and keep it low</p>
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
            headline="A low-dust home is one trigger you can actually control"
            subtext="Capital Clean Care deep-cleans carpets, upholstery, and the dust reservoirs near pet level — with pet-safe, fragrance-free products — across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Mistakes */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Habits That Make Your Pet's Breathing Worse
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "Dry-sweeping or feather-dusting — it kicks settled dust back into the air your pet is breathing",
                "Letting humidity climb above 50% — it lets dust mites multiply, especially in summer",
                "Skipping the pet's bed — it's the single most allergen-dense spot they breathe all night",
                "Using scented sprays, plug-ins, or harsh cleaners near a coughing pet — fragrance and VOCs are airway irritants",
                "Assuming a cat's cough is 'just hairballs' — it can be asthma that needs treatment",
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
                  For a pet with airway sensitivity, the wrong cleaner adds irritation instead of removing it. That's why our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products. Related reading:{" "}
                  <Link to="/blog/pet-dander-air-quality" className="text-accent underline hover:no-underline">how pet dander wrecks your air quality</Link>.
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
                "Coughing, wheezing, or any labored breathing — see your vet promptly; this needs medical evaluation",
                "A cat with a recurring crouched, hacking cough — rule out feline asthma",
                "Symptoms that ease when you're away from home and return indoors — a strong environmental-trigger signal",
                "Carpet and upholstery that haven't been deep-cleaned in months — the dust reservoir likely needs a reset",
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
              lowers the dust and allergen load in carpet, upholstery, and pet areas with pet-safe protocols across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent underline hover:no-underline">DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent underline hover:no-underline">Northern Virginia</Link> — so your vet's plan has the best chance to work.
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
                Help Your Pet Breathe Easier
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

      <RelatedPosts currentSlug="pet-sneezing-household-dust" />
      <StickyCTA />
    </Layout>
  );
};

export default PetSneezingHouseholdDust;
