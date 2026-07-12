import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Phone, Lightbulb, PawPrint, Leaf } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/pet-poisoning/hero.webp";
const VIDEO_SRC = "/videos/pet-poisoning-warning-signs.mp4";
const VIDEO_POSTER = "/images/blog/pet-poisoning/video-poster.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/pet-poisoning/dangerous-products.webp",
    alt: "Household cleaning product bottles stored under a kitchen sink within a pet's reach",
    caption: "Bleach, ammonia, and disinfectants under the sink are among the most common household toxins for pets.",
  },
  {
    src: "/images/blog/pet-poisoning/emergency-call.webp",
    alt: "A worried pet owner on the phone with poison control beside their dog",
    caption: "If you suspect poisoning, call your vet or a pet poison helpline right away — don't wait for symptoms to worsen.",
  },
  {
    src: "/images/blog/pet-poisoning/pet-safe.webp",
    alt: "Eco-friendly, fragrance-free cleaning products safe to use around pets",
    caption: "The surest prevention: switch to plant-based, fragrance-free products around the family member closest to the floor.",
  },
];

const howToSteps = [
  {
    name: "Store all cleaning products locked away and out of reach",
    text: "The most common way pets are poisoned is simple access — a cabinet left open, a bottle on the floor, a bucket of cleaning solution left unattended. Keep all cleaners, especially bleach, ammonia, and concentrated disinfectants, behind a latched or high cabinet, and never leave a filled mop bucket or open bottle where a curious dog or cat can reach it.",
  },
  {
    name: "Keep pets out of the room while cleaning — and until surfaces dry",
    text: "Pets are exposed not just by drinking a product but by walking across a freshly cleaned, still-wet floor and then licking their paws, or by inhaling fumes in a closed room. Close the pet out of the area while you clean, ventilate with open windows or a fan, and wait until floors and surfaces are fully dry before letting them back in.",
  },
  {
    name: "Rinse surfaces pets contact, and skip the strong stuff",
    text: "Floors, counters at tail height, food and water bowls, and crates are all surfaces pets touch directly. Rinse them with water after cleaning so no chemical residue is left for paws and tongues. Avoid the harshest products entirely on these surfaces — bleach, ammonia, and phenol-based disinfectants (found in some pine and 'medicinal' cleaners) are especially dangerous to cats.",
  },
  {
    name: "Switch to pet-safe, fragrance-free products",
    text: "The single most effective prevention is removing the hazard at the source. Plant-based, fragrance-free, low-residue cleaners clean effectively without the caustic chemistry that burns mouths and irritates airways. Because your pet is the family member who lies on the floor and licks their paws, choosing genuinely pet-safe products protects the one most exposed to whatever you clean with.",
  },
];

const faqs = [
  {
    q: "Which cleaning products are most dangerous to pets?",
    a: "The biggest hazards are the strong, caustic ones: bleach, ammonia, and concentrated disinfectants — including multi-surface sprays like Lysol that can contain ammonia, bleach, and phenols, all toxic to pets (phenols are especially dangerous to cats). Heavy-duty cleaners are worse still: oven cleaners, drain and toilet-bowl cleaners, and rust or lime removers are highly corrosive and can cause chemical burns to the mouth and gastrointestinal tract. Even 'mild' products can cause drooling, vomiting, and stomach upset if ingested. The safest approach is to assume any conventional cleaner is hazardous to a pet and store and use it accordingly.",
  },
  {
    q: "What are the warning signs my pet was poisoned by a cleaner?",
    a: "Watch for drooling or excessive salivation, vomiting or diarrhea, pawing at the mouth or face, lack of appetite, lethargy or weakness, difficulty breathing, and visible redness or burns around the mouth. More severe poisoning can cause tremors, seizures, collapse, or coma. Signs can appear quickly with caustic products. If you see any of these — or you simply find chewed packaging or a spilled product near your pet — treat it as an emergency and call for help immediately rather than waiting to see if it passes.",
  },
  {
    q: "Should I make my pet vomit if they swallowed a cleaning product?",
    a: "No — not unless a veterinarian or poison control expert specifically tells you to. Many cleaning products are caustic, and forcing them back up causes a second round of chemical burns to the throat and mouth, often doing more damage than leaving them down. Instead, call your veterinarian or a pet poison helpline right away and follow their instructions exactly. Do not give home remedies like milk, salt, or hydrogen peroxide unless directed. Bring the product packaging or label with you so the vet knows exactly what was involved.",
  },
  {
    q: "Who do I call if my pet is poisoned?",
    a: "Call your own veterinarian or an emergency vet first if one is reachable. You can also contact a dedicated animal poison control line: the Pet Poison Helpline at 855-764-7661 or the ASPCA Animal Poison Control Center at 888-426-4435, both available 24/7 (a consultation fee may apply). Have the product name and ingredient label ready, note roughly how much and when your pet was exposed, and describe any symptoms. They'll tell you whether you can monitor at home or need to get to an ER immediately.",
  },
  {
    q: "How can I prevent cleaning-product poisoning in the first place?",
    a: "Prevention comes down to access and product choice. Store every cleaner locked away and never leave bottles or filled buckets within reach; keep pets out of rooms you're cleaning and until surfaces are dry; and rinse the surfaces they contact directly. The most durable fix, though, is switching to pet-safe, fragrance-free, plant-based products so the hazard isn't in the house to begin with — which is exactly why a professional cleaning service that uses genuinely pet-safe products is a meaningful safeguard for a pet household.",
  },
];

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Cleaning-Product Poisoning in Pets: Warning Signs & What to Do",
  description:
    "A quick guide to the warning signs of cleaning-product poisoning in dogs and cats, and the steps to take immediately — including not inducing vomiting and which pet poison helplines to call.",
  thumbnailUrl: "https://capitalcleancare.com" + VIDEO_POSTER,
  contentUrl: "https://capitalcleancare.com" + VIDEO_SRC,
  uploadDate: "2026-06-15T09:00:00-04:00",
  duration: "PT22S",
  publisher: {
    "@type": "Organization",
    name: "Capital Clean Care",
    logo: { "@type": "ImageObject", url: "https://capitalcleancare.com/favicon.png" },
  },
};

const CleaningProductPoisoningPets = () => {
  const { seoHelmet } = useSEO({
    title: "Cleaning-Product Poisoning in Pets: Warning Signs to Know",
    description:
      "Bleach, ammonia & disinfectants are top household toxins for pets. The warning signs of cleaning-product poisoning in dogs & cats, what to do (don't induce vomiting), who to call, and how to prevent it.",
    canonical: "https://capitalcleancare.com/blog/cleaning-product-poisoning-in-pets",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="cleaning product poisoning pets, dog cat poisoned bleach ammonia, pet poisoning symptoms, pet poison control number, pet-safe cleaning products, disinfectant toxic to cats Maryland"
        />
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>

      <ArticleSchema
        title="Cleaning-Product Poisoning in Pets: Warning Signs to Know"
        description="Which household cleaning products poison dogs and cats, the warning signs of poisoning, the immediate steps to take (and why not to induce vomiting), the pet poison helplines to call, and how to prevent it with pet-safe products."
        url="https://capitalcleancare.com/blog/cleaning-product-poisoning-in-pets"
        datePublished="2026-06-15"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Prevent Cleaning-Product Poisoning in Pets"
        description="A four-step routine to keep dogs and cats safe from household cleaning-product poisoning: secure storage, keeping pets away while cleaning, rinsing contact surfaces, and switching to pet-safe products."
        url="https://capitalcleancare.com/blog/cleaning-product-poisoning-in-pets"
        steps={howToSteps}
        totalTime="PT15M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Cleaning-Product Poisoning in Pets", href: "/blog/cleaning-product-poisoning-in-pets" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "Cleaning-Product Poisoning in Pets: Warning Signs to Know" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A curious dog sniffing a household cleaning spray bottle on the floor">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Cleaning-Product Poisoning in Pets: Warning Signs to Know
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The bottle under your sink is one of the most common household toxins for dogs and cats
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
              Common household cleaners — bleach, ammonia, and disinfectants — are among the most frequent causes of pet poisoning, and they're sitting in nearly every home. A dog who licks a freshly mopped floor, a cat who brushes against a sprayed counter and grooms it off, a curious nose that finds an open bottle: it doesn't take much. Caustic products can cause real harm fast, so knowing the <strong>warning signs</strong> and exactly <strong>what to do</strong> can make the difference.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Here's which products are most dangerous, the signs of poisoning to watch for, the right emergency steps (including the one thing you should <em>not</em> do), and how to prevent it entirely.
            </p>
          </FadeInSection>

          {/* VIDEO */}
          <FadeInSection>
            <div className="rounded-2xl overflow-hidden border border-border shadow-lg bg-black mb-3">
              <video
                className="w-full h-auto block"
                src={VIDEO_SRC}
                poster={VIDEO_POSTER}
                controls
                muted
                playsInline
                preload="none"
                aria-label="Cleaning-product poisoning in pets: warning signs and what to do"
              />
            </div>
            <p className="text-xs text-muted-foreground text-center mb-10">
              Watch: the warning signs of cleaning-product poisoning — and the steps to take right away.
            </p>
          </FadeInSection>

          {/* Dangerous products */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Most Dangerous Products in Your Home
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Bleach & ammonia", "Two of the most common — and most caustic — cleaners. Ingestion or even strong fumes can burn the mouth and airways. Never mix them, and keep pets well away."],
                ["Disinfectants & phenols", "Multi-surface disinfectants can contain ammonia, bleach, and phenols. Phenol-based 'pine' and medicinal cleaners are especially toxic to cats, who can't process them well."],
                ["Heavy-duty cleaners", "Oven, drain, and toilet-bowl cleaners and rust/lime removers are highly corrosive — among the most dangerous things a pet can contact in the house."],
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
                <strong>Pets are exposed in three ways:</strong> ingesting a product, walking on a wet treated surface and then licking their paws, or inhaling fumes in a closed room. Prevention has to cover all three — not just keeping bottles capped.
              </p>
            </div>
          </FadeInSection>

          {/* Warning signs */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Warning Signs to Watch For
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Signs can appear quickly with caustic products. If several of these show up — or you find evidence of exposure — act immediately:
            </p>
            <div className="space-y-3 mb-8">
              {[
                ["Drooling or excessive salivation", "Often the earliest sign, as the mouth reacts to a caustic or bitter substance."],
                ["Vomiting, diarrhea, or no appetite", "Gastrointestinal upset is common; with caustic products it can include blood."],
                ["Pawing at the mouth or face", "A sign of mouth irritation or chemical burns to the lips, tongue, and gums."],
                ["Difficulty breathing", "From inhaled fumes or airway irritation — a serious, urgent sign."],
                ["Lethargy, weakness, or wobbliness", "Whole-body signs that the toxin is affecting your pet systemically."],
                ["Tremors, seizures, or collapse", "Severe poisoning — a true emergency requiring immediate veterinary care."],
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
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* What to do — emergency callout */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-4">
              What to Do Right Away
            </h2>
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 mb-6">
              <div className="flex gap-3 items-start mb-4">
                <AlertTriangle className="h-6 w-6 text-red-600 shrink-0 mt-0.5" />
                <p className="text-red-900 font-semibold leading-relaxed">
                  Do NOT induce vomiting unless a vet or poison control tells you to — caustic cleaners cause more damage coming back up.
                </p>
              </div>
              <ol className="space-y-3 text-sm text-foreground">
                <li className="flex gap-3"><span className="font-bold text-red-600">1.</span> Remove your pet from the source; rinse paws, skin, or fur if there was contact.</li>
                <li className="flex gap-3"><span className="font-bold text-red-600">2.</span> Grab the product packaging or label so you can tell the vet exactly what was involved.</li>
                <li className="flex gap-3"><span className="font-bold text-red-600">3.</span> Call for help immediately — your vet, an emergency vet, or a pet poison helpline.</li>
                <li className="flex gap-3"><span className="font-bold text-red-600">4.</span> Don't give milk, salt, or home remedies unless specifically directed.</li>
              </ol>
              <div className="mt-5 pt-5 border-t border-red-200 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a href="tel:18557647661" className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-red-200 hover:border-red-400 transition-colors">
                  <Phone className="h-5 w-5 text-red-600 shrink-0" />
                  <span className="text-sm"><span className="block font-semibold text-foreground">Pet Poison Helpline</span><span className="text-red-700 font-bold">855-764-7661</span></span>
                </a>
                <a href="tel:18884264435" className="flex items-center gap-2 bg-white rounded-xl px-4 py-3 border border-red-200 hover:border-red-400 transition-colors">
                  <Phone className="h-5 w-5 text-red-600 shrink-0" />
                  <span className="text-sm"><span className="block font-semibold text-foreground">ASPCA Animal Poison Control</span><span className="text-red-700 font-bold">888-426-4435</span></span>
                </a>
              </div>
              <p className="text-xs text-red-800/80 mt-3">Both lines are available 24/7. A consultation fee may apply. This article is not a substitute for veterinary advice.</p>
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="The surest prevention: don't bring the hazard home"
            subtext="Capital Clean Care cleans with pet-safe, fragrance-free, plant-based products across Bethesda, Rockville, Silver Spring, and Gaithersburg — no bleach, ammonia, or harsh chemistry around your pets. Background-checked, eco-certified teams."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Prevention */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-2">
              How to Prevent It
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Access and product choice are everything</p>
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

          {/* Eco note */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-12 flex gap-4 items-start">
              <Leaf className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Why pet-safe products are the real fix</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can lock cabinets and ventilate rooms, but the most reliable prevention is not having caustic chemicals in the house at all. That's the whole reason our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free, low-residue products. For more on what's actually in conventional cleaners, see our guides on{" "}
                  <Link to="/blog/why-pet-skin-allergies-start-in-carpet" className="text-accent underline hover:no-underline">pet skin allergies</Link>{" "}
                  and an{" "}
                  <Link to="/blog/allergen-free-home-dog-cat-owners" className="text-accent underline hover:no-underline">allergen-free home</Link>.
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
                A Cleaner Home Without the Chemical Risk
              </h2>
              <p className="text-primary-foreground/80 mb-4 leading-relaxed">
                Capital Clean Care provides{" "}
                <Link to="/services/eco-friendly-cleaning" className="underline text-primary-foreground/90 hover:text-white">eco-friendly cleaning</Link>{" "}
                and{" "}
                <Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}
                for pet families across{" "}
                <Link to="/maryland" className="underline text-primary-foreground/90 hover:text-white">Maryland</Link>{" "}
                — Bethesda, Rockville, Silver Spring, Gaithersburg, and Potomac. Pet-safe, fragrance-free, background-checked.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 text-sm">
                {["No bleach or ammonia", "Pet-safe products", "Fragrance-free", "Free estimates"].map((item) => (
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

      <RelatedPosts currentSlug="cleaning-product-poisoning-in-pets" />
      <StickyCTA />
    </Layout>
  );
};

export default CleaningProductPoisoningPets;
