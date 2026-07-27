import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, Lightbulb, Droplets, Utensils, Bone, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import {
  ArticleSchema,
  BreadcrumbSchema,
  FAQSchema,
} from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import ImageGallery, { GalleryImage } from "@/components/blog/ImageGallery";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/pet-bowl-hygiene/hero.webp";
const URL = "https://capitalcleancare.com/resources/how-often-to-clean-pet-bowls-and-toys";

const galleryImages: GalleryImage[] = [
  {
    src: "/images/blog/pet-bowl-hygiene/biofilm-closeup.webp",
    alt: "Close-up of a stainless steel dog bowl coated in dried food residue and a slimy biofilm film",
    caption: "That slick film you feel on a water bowl is biofilm — a living bacterial layer that a quick rinse doesn't remove.",
  },
  {
    src: "/images/blog/pet-bowl-hygiene/washing-bowls.webp",
    alt: "Hands washing stainless steel pet bowls under running hot water with dish soap in a kitchen sink",
    caption: "The FDA's baseline is simple: hot water and dish soap after every meal — the same standard you'd use for your own plate.",
  },
  {
    src: "/images/blog/pet-bowl-hygiene/clean-toys-drying.webp",
    alt: "Freshly cleaned rubber chew toy, rope tug, and tennis ball air-drying on a towel beside clean pet bowls",
    caption: "Toys need a schedule too — hard toys in the dishwasher, rope and fabric on a hot wash, weekly or after any illness.",
  },
];

const howToSteps = [
  {
    name: "Wash food bowls after every meal",
    text: "This is the FDA's baseline, and it's the single most important habit: wash your pet's food bowl with hot water and dish soap after each meal, exactly as you would your own dinner plate. Leftover kibble and wet food are protein — a perfect growth medium for bacteria at room temperature. A daily rinse under cold water is not enough; it moves food around without killing anything.",
  },
  {
    name: "Scrub the water bowl daily",
    text: "The water bowl is the one people forget, and it's the one that grows biofilm fastest — that slippery film on the sides is a living bacterial layer. Empty it, scrub the whole inside surface (not just a top-up) with soap and hot water every day, and refill with fresh water. If you can feel slime, a rinse won't remove it; it takes friction.",
  },
  {
    name: "Disinfect bowls about once a week",
    text: "On top of daily washing, disinfect weekly. The two FDA-endorsed options: run dishwasher-safe bowls through a normal hot cycle, or soak them in a solution of about one tablespoon of unscented bleach per gallon of water, then rinse thoroughly and let them air-dry. Rinsing well and air-drying removes any bleach residue, so nothing is left where your pet eats.",
  },
  {
    name: "Clean toys by type — weekly, and after any illness",
    text: "Hard rubber and nylon toys can go on the top rack of the dishwasher or get a hot, soapy hand-wash. Rope tugs and fabric toys go through a hot laundry cycle (skip fragranced detergent). Aim for weekly, and always clean every toy after your pet has been sick — toys are a common way an infection re-introduces itself to a recovering animal.",
  },
  {
    name: "Wash your hands and keep the feeding zone separate",
    text: "The CDC's reminders are for you, not just your pet: wash your hands right after handling pet food or bowls, and don't prep pet food — or wash the bowls — in the same spot where you prepare your family's meals, since Salmonella can transfer to counters and the sink. If you do use the kitchen sink, give it a wipe-down afterward.",
  },
];

const faqs = [
  {
    q: "How often should I wash my dog's or cat's food bowl?",
    a: "After every meal. The FDA recommends washing pet food bowls with hot water and dish soap after each use — the same standard you'd apply to your own plate — because leftover food is an ideal growth surface for bacteria at room temperature. On top of that daily washing, disinfect the bowl about once a week, either in the dishwasher or with a diluted bleach soak. A quick cold-water rinse between meals is not a substitute; it moves food around without removing the bacteria growing in it.",
  },
  {
    q: "Is the water bowl really that important if it's 'just water'?",
    a: "Yes — arguably more than the food bowl, because it's the one most people top up instead of scrubbing. Standing water at room temperature grows biofilm, the slippery film you can feel on the sides, which is a living layer of bacteria that shields itself from a simple rinse. Empty and scrub the entire inside surface with soap and hot water every day, then refill. If you can feel slime, only friction — not a top-up — will remove it.",
  },
  {
    q: "Can I just put my pet's bowls in the dishwasher?",
    a: "If the bowl is dishwasher-safe, yes — and it's one of the two disinfecting methods the FDA endorses. Run it through a normal hot cycle with detergent; the high water temperature does the sanitizing. Stainless steel and most ceramic bowls handle this well. The dishwasher is the easiest way to hit the weekly disinfecting step without mixing a bleach solution, though you should still wash the bowl by hand after each meal in between.",
  },
  {
    q: "How do I clean pet toys, and how often?",
    a: "Clean toys weekly, and always after your pet has been sick. Method depends on the material: hard rubber, nylon, and most plastic toys can go on the top rack of the dishwasher or get a hot, soapy hand-wash; rope tugs and plush toys go through a hot laundry cycle with unscented detergent. Let everything air-dry fully — damp toys grow mildew. After an illness, cleaning every toy matters because a contaminated toy is a common way an infection re-introduces itself to a recovering pet.",
  },
  {
    q: "Why does the germ risk matter for my family, not just my pet?",
    a: "Because a pet's bowl is one of the germiest items in the whole house — the NSF ranked pet food bowls the fourth-most-contaminated spot in the average home, behind only the dish sponge, kitchen sink, and toothbrush holder — and the bacteria found on them, including Salmonella and E. coli, make people sick too. The CDC notes that young children, adults over 65, pregnant people, and anyone with a weakened immune system are at higher risk. The feeding station sits on your floor, so the surfaces around it matter as much as the bowl itself.",
  },
];

const HowOftenCleanPetBowls = () => {
  const { seoHelmet } = useSEO({
    title: "How Often to Clean Pet Bowls and Toys — FDA Guide",
    description:
      "Your pet's bowl is one of the germiest items in the home. What the FDA and CDC recommend for cleaning food bowls, water dishes, and toys — and how often.",
    canonical: URL,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="how often to clean pet bowls, how often wash dog bowl, cleaning cat bowls bacteria, how to disinfect pet bowls, cleaning pet toys, pet food bowl germs Maryland"
        />
      </Helmet>

      <ArticleSchema
        title="How Often Should You Clean Your Pet's Bowls and Toys?"
        description="Pet food bowls are among the germiest items in the home. What the FDA and CDC actually recommend for cleaning and disinfecting food bowls, water dishes, and toys — how often, and the method for each."
        url={URL}
        datePublished="2026-07-26"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "How Often Should You Clean Your Pet's Bowls and Toys?", href: "/resources/how-often-to-clean-pet-bowls-and-toys" },
        ]}
      />

      {/* Breadcrumb bar */}
      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "How Often Should You Clean Your Pet's Bowls and Toys?" },
            ]}
          />
        </div>
      </div>

      {/* HERO */}
      <BlogHero src={HERO_IMAGE} alt="A golden retriever and a gray tabby cat beside their stainless steel food and water bowls in a bright kitchen">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Pet Health
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          How Often Should You Really Clean Your Pet's Bowls and Toys?
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          The bowl you rinse once in a while is one of the germiest things you own — here's what the FDA and CDC actually say
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Montgomery County, MD · July 2026
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
              Here's an uncomfortable fact most pet owners have never heard: your dog or cat's food bowl is one of the <strong>germiest objects in your entire home</strong>. When the NSF (National Sanitation Foundation) swabbed 30 everyday items across 22 households, pet food bowls came in <strong>fourth</strong> — behind only the kitchen sponge, the sink, and the toothbrush holder. The bacteria they found routinely include the ones that make <em>people</em> sick, like Salmonella and E. coli.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The good news: the fix is simple and the guidance is clear. Two federal agencies — the <strong>FDA</strong> and the <strong>CDC</strong> — have straightforward recommendations for how often to clean pet bowls and toys, and almost nobody follows them. Here's the actual schedule, the right method for each item, and why the floor around the bowl matters as much as the bowl.
            </p>
          </FadeInSection>

          {/* The germiest bowl */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Why a Pet Bowl Gets So Dirty So Fast
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Leftover food — especially wet food — is protein sitting at room temperature, which is exactly what bacteria need to multiply. On the water side, standing water grows <strong>biofilm</strong>: that slippery film you feel on the sides of a water bowl is a living, self-protecting layer of bacteria that a quick rinse slides right over. Left alone, bowls accumulate not just Salmonella and E. coli but yeast, mold, and in some studies even MRSA.
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-5 mb-10 flex gap-4 items-start">
              <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">
                <strong>The tell:</strong> if you can feel a slick or slimy film when you run a finger inside the bowl, that's biofilm. It means a rinse isn't cutting it — that surface needs soap, hot water, and friction.
              </p>
            </div>
          </FadeInSection>

          {/* Schedule cards */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              How Often to Clean What
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              A simple schedule, drawn from FDA guidance, covers everything at the feeding station:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                { Icon: Utensils, title: "Food bowl", freq: "After every meal", desc: "Hot water + dish soap, like your own plate. Never leave it to the next feeding." },
                { Icon: Droplets, title: "Water bowl", freq: "Every day", desc: "Empty and scrub the whole inside surface — biofilm forms here fastest. Don't just top it up." },
                { Icon: PawPrint, title: "Bowls — disinfect", freq: "About weekly", desc: "Dishwasher hot cycle, or a soak in 1 tbsp unscented bleach per gallon of water, then rinse well." },
                { Icon: Bone, title: "Toys, mats & scoops", freq: "Weekly + after illness", desc: "By material: dishwasher or hot wash for hard toys, hot laundry cycle for rope and fabric." },
              ].map(({ Icon, title, freq, desc }) => (
                <div key={title} className="p-5 bg-secondary/40 border border-border rounded-xl">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Icon className="h-5 w-5 text-accent shrink-0" />
                    <p className="font-semibold text-foreground">{title}</p>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wide text-accent mb-1.5">{freq}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* The 5 steps */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-8 mb-2">
              How to Clean and Disinfect — Step by Step
            </h2>
            <p className="text-sm font-medium text-accent mb-6 uppercase tracking-wide">The FDA + CDC routine</p>
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

          <BlogInlineCTA
            headline="The bowl is on you — the rest of the room is on us"
            subtext="Capital Clean Care deep-cleans the floors, corners, and surfaces around your pet's feeding station with EPA Safer Choice–type, fragrance-free products — safe for the family member who eats off the floor. Across Bethesda, Rockville, Silver Spring, and Gaithersburg."
            ctaLabel="Get My Free Quote"
            ctaTo="/contact"
          />

          {/* Where bacteria spreads — service angle */}
          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-12 mb-4">
              The Part Bowl-Washing Misses
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              You can scrub the bowl perfectly and still leave the problem behind — because the bacteria don't stay in the bowl. Every splash, dropped kibble, and wagging tail spreads them to the <strong>floor, the baseboard, the wall behind the station, and the mat underneath</strong>. That's the zone a daily bowl-wash never touches, and it's exactly where a pet lies down, licks its paws, and picks contamination back up.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              This is the half we handle. A periodic{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning</Link>{" "}
              resets those surfaces — and because we clean with{" "}
              <Link to="/services/eco-friendly-cleaning" className="text-accent underline hover:no-underline">pet-safe, fragrance-free products</Link>, nothing toxic is introduced right where your pet eats. If you're not sure what "pet-safe" really means on a label, that's worth{" "}
              <Link to="/resources/what-pet-safe-cleaning-really-means" className="text-accent underline hover:no-underline">a two-minute read</Link>.
            </p>
          </FadeInSection>

          {/* At-risk box */}
          <FadeInSection>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12">
              <div className="flex gap-3 items-start mb-3">
                <AlertTriangle className="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground mb-1">This isn't only about the pet</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    The CDC flags some people as higher-risk for the germs pet bowls carry. In these households, the cleaning routine matters even more:
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                {["Children under 5", "Adults over 65", "Pregnant people", "Weakened immune systems"].map((g) => (
                  <div key={g} className="flex items-center gap-1.5 text-muted-foreground bg-white/60 border border-amber-100 rounded-lg px-3 py-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-amber-500" />
                    <span>{g}</span>
                  </div>
                ))}
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
                A Cleaner Home for the Whole Family — Including the Four-Legged One
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
                {["EPA Safer Choice–type", "Fragrance-free", "Pet & family safe", "Free estimates"].map((item) => (
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

      <RelatedPosts currentSlug="how-often-to-clean-pet-bowls-and-toys" />
      <StickyCTA />
    </Layout>
  );
};

export default HowOftenCleanPetBowls;
