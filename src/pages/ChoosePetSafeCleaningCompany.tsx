import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, ShieldCheck, PawPrint, Leaf } from "lucide-react";
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

const HERO_IMAGE = "/images/blog/choose-pet-safe-company/hero.webp";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/choose-pet-safe-company/team-products.webp",
    alt: "A professional cleaner showing eco-friendly products to a pet-owning client",
    caption: "A pet-aware company can name exactly what it uses — and show you the certifications behind it.",
  },
  {
    src: "/images/blog/choose-pet-safe-company/hepa-vacuum.webp",
    alt: "A professional cleaner using a HEPA vacuum in a home with a dog",
    caption: "HEPA-filter vacuums capture 99.97% of particles down to 0.3 microns — the difference between removing dander and spreading it.",
  },
  {
    src: "/images/blog/choose-pet-safe-company/happy-pet.webp",
    alt: "A relaxed dog in a freshly cleaned, fragrance-free home",
    caption: "The real test of a pet-safe clean: a fresh home with no chemical smell and a comfortable animal.",
  },
];

const howToSteps = [
  {
    name: "Ask exactly what products they use — and for proof",
    text: "A company that takes pet safety seriously can tell you the specific products it cleans with and back them up with third-party certification like EPA Safer Choice or Green Seal — not just 'we use green products.' Ask whether they're fragrance-free and free of ammonia, bleach, and phenols. Vagueness here is the single biggest red flag; transparency is the single best sign.",
  },
  {
    name: "Confirm they use HEPA-filter equipment",
    text: "Products are only half the job. Ask whether they use HEPA-filter vacuums, which capture 99.97% of particles down to 0.3 microns — including pet dander, dust mites, and allergens. A standard vacuum re-aerosolizes those particles back into the air your pet breathes. HEPA equipment (and microfiber instead of paper towels) is what separates a genuinely pet-aware service from a basic one.",
  },
  {
    name: "Ask about their pet-specific protocols",
    text: "A good company has a plan for your animal, not just your floors: keeping pets safely out of the area while cleaning, ventilating, rinsing surfaces pets contact, and waiting for floors to dry before pets return. Ask how they handle a nervous or escape-prone pet, and whether the same team comes each visit so your animal grows familiar with them. If they've never thought about it, that tells you something.",
  },
  {
    name: "Verify they're background-checked, insured, and trained",
    text: "You're handing strangers access to your home and your pet, so trust and accountability matter as much as chemistry. Confirm the team is background-checked and the company is licensed and insured, ask about their training, and look for consistent, named teams rather than a rotating cast. Professional standards and pet safety tend to go together — a company that invests in one usually invests in the other.",
  },
];

const faqs = [
  {
    q: "What's the most important question to ask a cleaning company about pets?",
    a: "'Exactly which products do you use, and can you show me the certifications?' A pet-aware company answers specifically — naming fragrance-free, plant-based, third-party-certified products (EPA Safer Choice, Green Seal) and confirming no ammonia, bleach, or phenols. A company that answers with vague reassurances like 'oh, everything we use is safe' or 'we use green products' without specifics is the one to be cautious of. Transparency about the actual chemistry is the clearest signal that a service genuinely understands pet safety rather than just marketing it.",
  },
  {
    q: "Do cleaning companies need a special certification to be pet-safe?",
    a: "There's no single 'pet-safe company' license, but credible signals exist. The products they use can carry EPA Safer Choice or Green Seal certification, and for cleaning services specifically, the Green Seal GS-49 standard sets requirements for green home cleaning — banning things like carcinogens, formaldehyde donors, and ozone-depleting compounds. Beyond certifications, look for the practical markers: HEPA equipment, fragrance-free products, background-checked teams, insurance, and a clear protocol for keeping pets safe during and after the clean. The combination matters more than any one badge.",
  },
  {
    q: "Why does the equipment matter, not just the products?",
    a: "Because how a company cleans affects your pet as much as what it cleans with. A vacuum without sealed HEPA filtration can't hold fine dust-mite matter and dander — it pushes them back into the air through the exhaust, spiking the exact allergens that bother sensitive and asthmatic pets right when the cleaner is there. A true-HEPA vacuum captures 99.97% of particles down to 0.3 microns instead. Microfiber cloths (versus paper towels) also let a company use less product and trap more. Pet-safe products plus pet-safe equipment is the full picture.",
  },
  {
    q: "Are the big national cleaning chains pet-safe?",
    a: "It varies, and you shouldn't assume — ask the same questions of any provider, national or local. Some franchises use conventional products including bleach and ammonia by default unless you specifically request otherwise, and a rotating cast of cleaners means no one learns your pet's needs. The advantage of a smaller, local, pet-focused company is usually consistency (the same team), flexibility (genuinely pet-safe products as the default rather than an upgrade), and accountability. Whoever you consider, judge them on the specifics — products, equipment, protocols, and trust — not the size of the brand.",
  },
  {
    q: "What are the red flags that a company isn't really pet-safe?",
    a: "A few stand out: they can't name their products or show certifications; they default to bleach, ammonia, or strongly scented cleaners; the home smells heavily of chemicals afterward; they have no protocol for keeping pets safe during the clean; they use standard (non-HEPA) vacuums; or they won't confirm background checks and insurance. Any one of these isn't automatically disqualifying, but several together mean the 'pet-friendly' label is marketing rather than practice. A genuinely pet-safe company welcomes these questions and answers them concretely.",
  },
];

const ChoosePetSafeCleaningCompany = () => {
  const { seoHelmet } = useSEO({
    title: "How to Choose a Cleaning Company That Understands Pet Safety",
    description:
      "Hiring a cleaner means trusting their chemicals and equipment around your pet. The exact questions to ask — products & certifications, HEPA equipment, pet protocols, background checks — and the red flags to avoid.",
    canonical: "https://capitalcleancare.com/blog/choose-pet-safe-cleaning-company",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="pet-safe cleaning company, questions to ask cleaning service pets, choose pet-friendly house cleaner, green cleaning service pets, HEPA cleaning service Maryland, eco cleaning company DMV"
        />
      </Helmet>

      <ArticleSchema
        title="How to Choose a Cleaning Company That Understands Pet Safety"
        description="A practical guide to vetting a house-cleaning company for pet safety: the questions to ask about products and certifications, HEPA equipment, pet-specific protocols, and trust signals like background checks and insurance — plus the red flags that reveal greenwashing."
        url="https://capitalcleancare.com/blog/choose-pet-safe-cleaning-company"
        datePublished="2026-06-15"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="How to Vet a Cleaning Company for Pet Safety"
        description="A four-step checklist for choosing a pet-safe cleaning company: confirm the products and certifications, verify HEPA equipment, ask about pet-specific protocols, and check background screening and insurance."
        url="https://capitalcleancare.com/blog/choose-pet-safe-cleaning-company"
        steps={howToSteps}
        totalTime="PT15M"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: "Choosing a Pet-Safe Cleaning Company", href: "/blog/choose-pet-safe-cleaning-company" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How to Choose a Cleaning Company That Understands Pet Safety" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A friendly professional cleaner greeting a homeowner and their dog at the door">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How to Choose a Cleaning Company That Understands Pet Safety
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          You're trusting strangers with their chemicals and equipment around your pet — here's how to vet them
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
              Hiring a house cleaner is supposed to make life easier — but if you have a dog or cat, you're also inviting someone else's <strong>chemicals, equipment, and habits</strong> into the space your pet lives in, breathes in, and grooms in. A company that doesn't think about pets can leave bleach residue on the floor your dog licks, spray a fragranced product that triggers your cat's asthma, or vacuum dander right back into the air.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news is that a few specific questions quickly separate a genuinely pet-aware company from one that just says "pet-friendly" on its website. Here's exactly what to ask, what good answers sound like, and the red flags that should make you keep looking.
            </p>
          </FadeInSection>

          {/* The checklist */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-2 mb-2">
              The Four Questions That Tell You Everything
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">Ask these before you book</p>
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
            <ImageGallery images={galleryImages} />
          </FadeInSection>

          {/* What good looks like */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-4">
              What a Good Answer Sounds Like
            </h2>
            <div className="space-y-3 mb-8">
              {[
                ["On products", "\"We use only plant-based, fragrance-free, EPA Safer Choice–type products — no bleach, ammonia, or phenols — and we're happy to show you exactly what we bring.\""],
                ["On equipment", "\"We use HEPA-filter vacuums and microfiber cloths, so we capture dander and allergens instead of spreading them.\""],
                ["On pets", "\"Tell us about your pet. We'll keep them out of the room we're cleaning, ventilate, rinse the surfaces they touch, and let floors dry before they come back.\""],
                ["On trust", "\"Every team member is background-checked and trained, we're licensed and insured, and you'll have a consistent team that gets to know your home and your pet.\""],
              ].map(([title, desc]) => (
                <div key={title} className="flex gap-4 p-4 bg-secondary/40 border border-border rounded-xl">
                  <ShieldCheck className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground text-sm mb-1">{title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA
            headline="We answer 'yes' to every question on this page"
            subtext="Capital Clean Care cleans with pet-safe, fragrance-free, plant-based products and HEPA-grade equipment, with background-checked, insured, consistent teams — across Bethesda, Rockville, Silver Spring, and Gaithersburg."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Red flags */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              Red Flags to Walk Away From
            </h2>
            <ul className="space-y-2 mb-8">
              {[
                "They can't name their products or show any third-party certification",
                "Bleach, ammonia, or heavily scented cleaners are the default",
                "The home smells strongly of chemicals after they leave",
                "No plan for keeping pets safe during and after the clean",
                "Standard (non-HEPA) vacuums — dander goes right back into the air",
                "Won't confirm background checks, licensing, or insurance",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-sm text-amber-900 leading-relaxed">
                <strong>Big brand ≠ pet-safe.</strong> Some national chains use conventional products by default and rotate cleaners so no one learns your pet's needs. Judge any provider — national or local — on the specifics, not the logo.
              </p>
            </div>
          </FadeInSection>

          {/* Eco note */}
          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 mb-12 flex gap-4 items-start">
              <Leaf className="h-6 w-6 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-foreground mb-1">Why we built our service around pets in the first place</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The family member closest to every surface we clean is usually the pet — so our{" "}
                  <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">eco-friendly cleaning</Link>{" "}
                  uses only plant-based, fragrance-free products and HEPA-grade equipment by default, not as an upsell. For more, see{" "}
                  <Link to="/blog/what-pet-safe-cleaning-really-means" className="text-accent underline hover:no-underline">what "pet-safe" really means</Link>{" "}
                  and{" "}
                  <Link to="/blog/cleaning-product-poisoning-in-pets" className="text-accent underline hover:no-underline">cleaning-product poisoning in pets</Link>.
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
                A Cleaning Company Built Around Pet Safety
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
                {["Pet-safe products", "HEPA-grade equipment", "Background-checked", "Free estimates"].map((item) => (
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

export default ChoosePetSafeCleaningCompany;
