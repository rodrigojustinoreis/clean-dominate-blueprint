import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, ShieldAlert, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/dog-coughing/hero.webp";
const ECO_IMAGE = "/images/blog/dog-coughing/eco-safe.webp";
const SCHEMA_IMAGE = "https://capitalcleancare.com/images/blog/dog-coughing/hero.webp";
const URL = "https://capitalcleancare.com/resources/why-is-my-dog-coughing-after-house-cleaning";

const faqs = [
  {
    q: "Can household cleaning products really make my dog cough?",
    a: "Yes. Bleach, ammonia, strong air fresheners, and many 'fresh scent' sprays release fumes and fine particles that irritate a dog's airways. Because dogs breathe faster and spend their time low to the floor — where heavy fumes and residue settle — they often react before people in the home notice anything. Coughing, sneezing, gagging, or watery eyes right after you clean are common warning signs.",
  },
  {
    q: "How long should the coughing last?",
    a: "If it's a mild reaction to a fume or fragrance, it usually eases within minutes to a couple of hours once the dog gets fresh air and the room is ventilated. Coughing that continues for more than a few hours, gets worse, or comes with labored breathing is not normal and should be checked by a vet.",
  },
  {
    q: "Which cleaning products are safest for homes with dogs?",
    a: "Look for plant-based, fragrance-free products that are EPA Safer Choice™ certified, and avoid anything with chlorine bleach, ammonia, or 'parfum/fragrance' on the label. Unscented, residue-free formulas are best — there's no perfume to inhale and nothing left on the floor for a dog to lick off its paws.",
  },
  {
    q: "Is vinegar or a 'natural' cleaner safe to use around my dog?",
    a: "Diluted vinegar is far gentler than bleach, but the strong smell can still bother sensitive dogs, and 'natural' on a label doesn't guarantee a product is pet-safe — many contain essential oils (like tea tree, pine, or citrus) that are actually toxic to dogs and cats. Stick to genuinely pet-safe, certified non-toxic products and always ventilate.",
  },
  {
    q: "Should I keep my dog out of the room while I clean?",
    a: "Yes. The simplest protection is to move pets to another room or outside while you clean and while floors dry, then ventilate before bringing them back. It removes them from the strongest fumes and from wet, freshly treated surfaces.",
  },
  {
    q: "When is coughing after cleaning an emergency?",
    a: "Call a vet or emergency clinic right away if your dog has trouble breathing, breathes rapidly or with effort, has blue or pale gums, collapses, vomits, or keeps coughing and retching. These can signal a serious chemical reaction and need immediate care — especially after exposure to bleach or ammonia fumes.",
  },
];

const WhyIsMyDogCoughingAfterCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Why Is My Dog Coughing After House Cleaning? Causes & How to Prevent It",
    description:
      "Dog coughing after you clean? Cleaning-product fumes are a common, overlooked cause. Learn the triggers, what to do, when to see a vet, and how to prevent it.",
    canonical: URL,
    ogType: "article",
    ogImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="dog coughing after cleaning, why is my dog coughing after I clean, cleaning products bad for dogs, pet-safe cleaning products, non-toxic cleaning dogs, bleach fumes dog coughing, eco-friendly pet-safe cleaning DMV"
        />
      </Helmet>

      <ArticleSchema
        title="Why Is My Dog Coughing After House Cleaning? Causes, What to Do & How to Prevent It"
        description="Cleaning-product fumes and residue are a common, overlooked reason dogs cough after you clean. The triggers, the warning signs, what to do right now, when to see a vet, and how non-toxic cleaning prevents it."
        url={URL}
        datePublished="2026-06-04"
        dateModified="2026-08-07"
        image={SCHEMA_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Why Is My Dog Coughing After Cleaning?", href: URL },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Why Is My Dog Coughing After Cleaning?" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A dog resting on a clean floor in a bright living room after house cleaning">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet-Safe Home Guide
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Why Is My Dog Coughing After House Cleaning?
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The cause is often the cleaning products — here's what to do, and how to prevent it.
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Capital Clean Care · Maryland, DC &amp; Virginia · June 2026
        </p>
        <Button
          size="lg"
          className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg"
          asChild
        >
          <Link to="/contact">Get a Pet-Safe Cleaning Quote</Link>
        </Button>
      </BlogHero>

      {/* ARTICLE */}
      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">

          {/* Intro / short answer */}
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              You scrub the house until it sparkles — and within minutes your dog starts coughing, hacking, or gagging. It's worrying, and it's more common than most owners realize. One of the most overlooked causes is the cleaning itself: <strong>the fumes and residue from everyday cleaning products can irritate a dog's airways</strong>, sometimes within minutes of you finishing.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news is that it's usually preventable. Here's why dogs react, which products are the worst offenders, what to do the moment it happens, when it's a vet emergency — and the simple switch that keeps it from happening at all.
            </p>
          </FadeInSection>

          {/* Why dogs react more */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why Dogs React Before You Do
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Your dog isn't being dramatic — they're genuinely more exposed than you are, for three physical reasons:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
              {[
                ["Lower to the ground", "Heavy fumes and chemical residue settle near the floor — exactly where your dog breathes, sniffs, and rests all day."],
                ["Faster breathing", "Dogs take far more breaths per minute than people, so they inhale more airborne irritants in the same room."],
                ["Sensitive airways", "A dog's nose and respiratory tract are remarkably sensitive — and they lick residue off their paws and coat, swallowing it too."],
              ].map(([t, d]) => (
                <div key={t} className="bg-secondary/40 rounded-xl p-4 border border-border/50">
                  <p className="font-bold text-foreground mb-1">{t}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Worst offenders */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              The Cleaning Products Most Likely to Cause It
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If the coughing started right after cleaning, one of these is usually involved:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                ["Chlorine bleach", "Releases chlorine gas that irritates the eyes, nose, and lungs — one of the most common triggers."],
                ["Ammonia (glass & multi-surface cleaners)", "Sharp fumes that inflame sensitive airways; never mix with bleach."],
                ["Synthetic fragrance & air fresheners", "'Parfum,' plug-ins, and 'fresh scent' sprays release VOCs and fine particles dogs inhale."],
                ["Aerosol sprays & carpet powders", "Atomize tiny particles into the air and leave residue on the floor your dog lies on and licks."],
                ["Strong essential oils", "Tea tree, pine, citrus, and eucalyptus oils — marketed as 'natural' — are actually toxic to dogs and cats."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed"><strong className="text-foreground">{t}:</strong> {d}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* Symptoms */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Symptoms to Watch For
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A mild reaction often looks like coughing or hacking, sneezing, watery or red eyes, a runny nose, gagging, or pawing at the face. Most cases are mild and pass with fresh air — but keep a close eye out for the more serious signs below.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5 mb-6 flex gap-3">
              <ShieldAlert className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-red-800 mb-1">Call a vet right away if you see:</p>
                <p className="text-sm text-red-900/90 leading-relaxed">
                  labored or rapid breathing, wheezing, blue or pale gums, drooling with retching, vomiting, weakness, or collapse — especially after exposure to bleach or ammonia. These need immediate care.
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mt-4">
              Coughing from inhaled fumes is different from a dog swallowing a product — if yours may have licked or ingested a cleaner, see our guide to{" "}
              <Link to="/resources/cleaning-product-poisoning-in-pets" className="text-accent underline hover:no-underline">cleaning-product poisoning in pets</Link>.
            </p>
          </FadeInSection>

          {/* What to do now */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              What to Do Right Now
            </h2>
            <ol className="space-y-3 mb-6">
              {[
                "Stop using the product and move your dog to fresh air — another room or outside.",
                "Open windows and doors and get air moving to clear the fumes.",
                "Rinse any wet, freshly cleaned floors with plain water to lift chemical residue.",
                "Offer fresh drinking water and let your dog settle somewhere calm.",
                "Watch closely for 1–2 hours — if coughing persists or breathing changes, call your vet.",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/15 text-accent font-bold text-sm flex items-center justify-center">{i + 1}</span>
                  <span className="text-muted-foreground leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </FadeInSection>

          <BlogInlineCTA />

          {/* Prevention — brand tie-in */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              How to Prevent It for Good
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You shouldn't have to choose between a clean home and a comfortable dog. The fix is to clean in a way that never puts harsh fumes or residue into the air in the first place:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                ["Switch to plant-based, fragrance-free products", "Choose EPA Safer Choice™ certified, non-toxic formulas with no bleach, no ammonia, and no synthetic fragrance."],
                ["Ventilate while you clean", "Open windows and run a fan so anything airborne clears quickly instead of lingering at floor level."],
                ["Clean while pets are out of the room", "Keep your dog away from wet, freshly treated surfaces until they're dry and the air is fresh."],
                ["Rinse, and skip the 'scent'", "Residue-free, unscented cleaning means nothing for your dog to inhale or lick off its paws afterward."],
              ].map(([t, d]) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed"><strong className="text-foreground">{t}.</strong> {d}</span>
                </li>
              ))}
            </ul>
            <figure className="rounded-2xl overflow-hidden shadow-lg border border-border my-8">
              <img
                src={ECO_IMAGE}
                alt="Eco-friendly, plant-based cleaning products beside a happy, healthy dog on a clean floor"
                width={1024}
                height={768}
                loading="lazy"
                decoding="async"
                className="w-full h-64 md:h-80 object-cover"
              />
              <figcaption className="text-sm text-muted-foreground text-center p-3 bg-secondary/30">
                Plant-based, EPA Safer Choice™ products clean just as well — without the fumes that make pets cough.
              </figcaption>
            </figure>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is exactly why every visit from <strong>Capital Clean Care</strong> uses only EPA Safer Choice™ certified, plant-based products — no bleach, no ammonia, no synthetic fragrance. It's house cleaning you can do with kids and pets in the home, across{" "}
              <Link to="/maryland" className="text-accent underline hover:no-underline">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent underline hover:no-underline">Washington, DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent underline hover:no-underline">Northern Virginia</Link>. Learn more about our{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>, what{" "}
              <Link to="/resources/what-pet-safe-cleaning-really-means" className="text-accent underline hover:no-underline">pet-safe cleaning really means</Link>, and how to{" "}
              <Link to="/resources/choose-pet-safe-cleaning-company" className="text-accent underline hover:no-underline">choose a pet-safe cleaning company</Link>.
            </p>
          </FadeInSection>

          {/* FAQ */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Wind className="h-7 w-7 text-accent" /> Frequently Asked Questions
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          {/* Disclaimer */}
          <FadeInSection>
            <p className="text-sm text-muted-foreground/80 italic leading-relaxed mt-10 border-t border-border pt-6">
              This article is general information, not veterinary advice. If you're worried about your pet's breathing or health, contact your veterinarian or an emergency animal clinic right away.
            </p>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="why-is-my-dog-coughing-after-house-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default WhyIsMyDogCoughingAfterCleaning;
