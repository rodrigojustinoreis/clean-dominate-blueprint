import { Link } from "react-router-dom";
import { ArrowRight, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import AuthorBio from "@/components/blog/AuthorBio";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/resources/bringing-baby-home-cleaning-guide.webp";
const URL = "https://capitalcleancare.com/resources/bringing-baby-home-cleaning-guide";
const HOUSE = "/services/house-cleaning";
const DEEP = "/services/deep-cleaning";
const RECURRING = "/services/recurring-cleaning";
const QUOTE = "/#quote";
const CDC_BOTTLES = "https://www.cdc.gov/hygiene/faq/index.html";
const CDC_BOTTLE_FEEDING = "https://www.cdc.gov/infant-toddler-nutrition/bottle-feeding/index.html";
const EPA_SAFER = "https://www.epa.gov/saferchoice/products";
const CDC_HOME = "https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html";
const PREGNANCY_PAGE = "/resources/cleaning-during-pregnancy-prepare-home-for-baby";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const InlineArticleImage = ({ src, alt, caption }: { src: string; alt: string; caption: string }) => (
  <figure className="my-8 overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm">
    <img
      src={src}
      alt={alt}
      width={1400}
      height={933}
      loading="lazy"
      decoding="async"
      className="aspect-[3/2] w-full object-cover"
    />
    <figcaption className="px-5 py-3 text-sm leading-relaxed text-gray-600">
      {caption}
    </figcaption>
  </figure>
);

// The visible FAQ and the FAQPage JSON-LD are both rendered from this one array,
// so their text always matches (a same-source-of-truth requirement of the build pack).
const faqs = [
  {
    q: "How do you keep your house clean with a newborn?",
    a: "Focus on a short daily reset rather than the entire house. Prioritize feeding items, the changing area, essential laundry, trash, visible spills, and safe walking paths. Rotate deeper work by room and let low-priority tasks wait.",
  },
  {
    q: "Does a house need to be disinfected every day for a newborn?",
    a: "Routine whole-house disinfection is generally not necessary. The CDC says regular cleaning is enough in most household situations. Disinfection may be appropriate when someone is sick, a surface is contaminated, or a healthcare provider recommends additional precautions.",
  },
  {
    q: "How often should you clean floors with a newborn?",
    a: "There is no universal schedule. Clean visible spills and soil promptly, then vacuum or clean the most-used floor areas based on household traffic, pets, and the flooring manufacturer's instructions.",
  },
  {
    q: "How should baby bottles and feeding items be cleaned?",
    a: "Follow the manufacturer's directions and current CDC guidance for disassembling, washing, sanitizing when appropriate, air-drying, and storing feeding items. Ask your pediatrician about individual needs, especially for babies born prematurely or with health concerns.",
  },
  {
    q: "Is it okay to use a cleaning service with a newborn at home?",
    a: "Many families use professional cleaning after a baby arrives. Tell the company where the baby will be, discuss products and ventilation, secure feeding and medical supplies, and prioritize the rooms that reduce the most household work.",
  },
  {
    q: "What should a cleaner focus on after a baby comes home?",
    a: "Common priorities include bathrooms, kitchen surfaces, floors, accumulated dust, trash, and the main living area. Feeding-item care, personal baby-care tasks, and medical equipment should remain separate unless specifically arranged with a qualified provider.",
  },
];

const BringingBabyHomeCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Bringing Baby Home: A Practical Cleaning Guide",
    description:
      "Bringing a newborn home? Use this realistic cleaning guide for feeding items, laundry, floors, visitors, pets, safer products, and tasks to delegate.",
    canonical: URL,
    ogType: "article",
    ogImage: HERO_IMAGE,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta
          name="keywords"
          content="bringing baby home, bringing newborn home, newborn cleaning routine, newborn safe cleaning products, keeping house clean with a baby, cleaning service for new parents"
        />
      </Helmet>

      <ArticleSchema
        title="Bringing Baby Home: A Practical Cleaning Guide for the First Weeks With a Newborn"
        description="Bringing a newborn home? Use this realistic cleaning guide for feeding items, laundry, floors, visitors, pets, safer products, and tasks to delegate."
        url={URL}
        datePublished="2026-08-18"
        dateModified="2026-08-18"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources" },
          { label: "Bringing Baby Home Cleaning Guide", href: "/resources/bringing-baby-home-cleaning-guide" },
        ]}
      />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Resources", href: "/resources" },
              { label: "Bringing Baby Home Cleaning Guide" },
            ]}
          />
        </div>
      </div>

      <BlogHero
        src={HERO_IMAGE}
        alt="Capital Clean Care professional cleaning a living room while new parents care for their newborn"
      >
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">
          Family &amp; New Baby
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">
          Bringing Baby Home: A Practical Cleaning Guide for the First Weeks With a Newborn
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">
          A low-friction cleaning routine for feeding items, diaper areas, laundry, floors, pets, visitors, and the first weeks at home.
        </p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">
          By Rodrigo Reis, Owner · Serving MD, DC &amp; Northern Virginia · 8 min read
        </p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          {/* ── Intro ── */}
          <FadeInSection>
            <p className="mb-6">
              Bringing baby home changes the cleaning priorities. The goal is no longer to finish a pre-baby project list. It is to keep the household functional while feeding the baby, changing diapers, managing laundry, resting, and adjusting to a completely new routine.
            </p>
            <p className="mb-6">
              Cleaning with a newborn does not require a spotless or completely sterile home. A better plan is to protect the spaces and supplies your family uses most, complete a short daily reset, and let lower-priority work wait.
            </p>
            <p className="mb-8">
              This guide provides a realistic cleaning routine for the first weeks with a newborn, including feeding-item cleanup, diaper-area care, laundry, floors, pets, visitors, and physically demanding tasks that may be easier to delegate. It offers general household information—not medical advice. Ask your pediatrician or healthcare provider about your baby's individual health needs.
            </p>
          </FadeInSection>

          {/* ── What Changes ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What Changes After the Baby Comes Home?</h2>
            <p className="mb-4">
              Before delivery, cleaning may revolve around preparation: organizing the sleep area, deep cleaning the kitchen and bathroom, washing baby clothes, and clearing clutter. After the baby comes home, the focus shifts to repetition.
            </p>
            <p className="mb-4">
              The same few tasks return throughout the day:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Feeding items need attention after use.",
                "Diaper and changing areas need a quick reset.",
                "Laundry accumulates in smaller but more frequent loads.",
                "Kitchen and bathroom surfaces get used continuously.",
                "Floors collect crumbs, dust, and pet hair.",
                "Trash and diaper waste need to leave the house regularly.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">
              Instead of trying to "finish" the house, build a routine that can be paused and restarted. A ten-minute reset completed most days is often more useful than an ambitious cleaning plan that exhausts the household.
            </p>
            <p className="mb-8">
              If you are still preparing for delivery, begin with our{" "}
              <Link to={PREGNANCY_PAGE} className="text-accent font-medium hover:underline">Cleaning During Pregnancy guide</Link>. This article picks up after the baby is already home.
            </p>
          </FadeInSection>

          {/* ── Minimum-Viable Reset ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Minimum-Viable Daily Reset</h2>
            <p className="mb-4">
              The minimum-viable reset is the smallest routine that keeps tomorrow from becoming harder. It is not a whole-house clean.
            </p>
            <p className="mb-6">
              Choose three to five tasks that can usually be completed in about 10 to 15 minutes:
            </p>
            <ol className="space-y-3 mb-6 pl-6 list-decimal marker:text-accent marker:font-bold">
              <li className="text-foreground"><strong>Put used feeding items in their designated cleaning area.</strong></li>
              <li className="text-foreground"><strong>Wipe a visibly dirty kitchen or changing surface.</strong></li>
              <li className="text-foreground"><strong>Gather essential laundry in one hamper.</strong></li>
              <li className="text-foreground"><strong>Remove diaper waste and household trash when needed.</strong></li>
              <li className="text-foreground"><strong>Clear one safe walking path through the main living area.</strong></li>
            </ol>
            <p className="mb-8">
              If the baby needs attention halfway through, stop. The routine is designed to be interrupted.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Try the one-room rule</h3>
            <p className="mb-8">
              On difficult days, choose one room instead of the entire house. Reset the kitchen today, the bathroom tomorrow, and the primary living space another day. Bedrooms and low-use areas can wait unless something is visibly dirty or creates a safety concern.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Keep supplies where the work happens</h3>
            <p className="mb-8">
              A small, secured set of supplies near the kitchen or bathroom can reduce unnecessary trips through the house. Keep all cleaning products closed, labeled, and inaccessible to children and pets. Do not store them with feeding supplies, food, medication, or baby-care products.
            </p>
          </FadeInSection>

          {/* ── Feeding Items ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Feeding Items and Pump Parts: Keep This Routine Separate</h2>
            <p className="mb-4">
              Baby bottles, nipples, rings, caps, pump parts, and other feeding supplies are not ordinary dishes. Follow the item manufacturer's directions and current guidance from your pediatrician or public-health authorities.
            </p>
            <p className="mb-6">
              The{" "}
              <a href={CDC_BOTTLE_FEEDING} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">CDC advises keeping bottle-feeding supplies clean</a>{" "}
              and provides detailed instructions for{" "}
              <a href={CDC_BOTTLES} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">cleaning, sanitizing, and storing infant feeding items</a>.
            </p>
            <InlineArticleImage
              src="/images/resources/bringing-baby-home/feeding-items-cleaning.webp"
              alt="Clean baby bottles and feeding parts air-drying beside a dedicated wash basin in a family kitchen"
              caption="Keep feeding-item cleanup separate from general household cleaning, and follow current CDC and manufacturer guidance."
            />
            <p className="mb-6">
              For a practical household setup:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Create one clearly defined area for used feeding items.",
                "Wash your hands before handling cleaned or sanitized parts.",
                "Take bottles and other items apart as directed before cleaning.",
                "Use the dishwasher only when the manufacturer says the item is dishwasher-safe.",
                "Allow cleaned items to air-dry thoroughly in a protected area.",
                "Do not use the feeding-item basin or brush for unrelated household cleaning.",
                "Inspect nipples, valves, membranes, and other parts for damage or wear.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Sanitizing recommendations can depend on the baby's age, whether the baby was born prematurely, and individual health circumstances. The CDC notes that daily sanitizing is particularly important for some infants, including babies younger than two months, those born prematurely, or those with weakened immune systems. Follow current CDC instructions and ask your pediatrician what is appropriate for your baby.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Keep diaper cleanup away from feeding supplies</h3>
            <p className="mb-8">
              Separate diapering and feeding workflows. Do not clean bottles, pump parts, or feeding tools near the changing area. Wash hands after diaper changes and before preparing or handling feeding items.
            </p>
          </FadeInSection>

          {/* ── Diaper Area ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">A Practical Diaper-Area Reset</h2>
            <p className="mb-4">
              The changing area should be easy to restore without turning every diaper change into a deep-cleaning project.
            </p>
            <p className="mb-6">
              After a routine change:
            </p>
            <InlineArticleImage
              src="/images/resources/bringing-baby-home/diaper-area-reset.webp"
              alt="Parent placing a soiled newborn onesie in a hamper beside a safely organized diaper-changing area"
              caption="A practical diaper-area reset focuses on safe disposal, separating soiled laundry, restoring essentials, and washing hands."
            />
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Dispose of the diaper and wipes appropriately.",
                "Place soiled clothing or washable covers in a designated hamper or container.",
                "Clean visible soil from the changing surface according to its care instructions.",
                "Restock only the supplies needed for the next few changes.",
                "Wash your hands when finished.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-4">
              Follow the changing-pad manufacturer's directions before using any cleaner or disinfectant. Some materials can be damaged by products that are too strong or left wet for too long.
            </p>
            <p className="mb-8">
              If bodily fluids contaminate a surface, clean the visible material first, then follow the product and surface instructions for any additional sanitizing or disinfecting step. Keep the baby away from wet surfaces and cleaning products.
            </p>
          </FadeInSection>

          {/* ── Laundry ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Laundry Without Letting It Take Over the Day</h2>
            <p className="mb-4">
              Newborn laundry can feel endless because it includes small clothes, burp cloths, sheets, towels, adult clothing, and occasional heavily soiled items. The answer is usually a simpler sorting system, not larger piles.
            </p>
            <p className="mb-6">
              Try three categories:
            </p>
            <ol className="space-y-3 mb-6 pl-6 list-decimal marker:text-accent marker:font-bold">
              <li className="text-foreground"><strong>Needed soon:</strong> feeding cloths, essential baby clothes, adult basics, and the linens used daily.</li>
              <li className="text-foreground"><strong>Can wait:</strong> decorative blankets, backup clothing, and nonessential linens.</li>
              <li className="text-foreground"><strong>Special handling:</strong> items that need stain treatment or manufacturer-specific care.</li>
            </ol>
            <p className="mb-4">
              Wash items according to their labels and dry them completely. The{" "}
              <a href={CDC_HOME} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">CDC's household-cleaning guidance</a>{" "}
              recommends using detergent and the recommended water temperature for laundry.
            </p>
            <p className="mb-8">
              You do not need to fold every item immediately. A clean basket for frequently used baby clothes and cloths may be more realistic during the first weeks. The objective is to keep clean and dirty items separate and make essentials easy to find.
            </p>
          </FadeInSection>

          {/* ── Floors and Pets ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Floors, Pets, and the Rooms You Actually Use</h2>
            <p className="mb-4">
              Your newborn may not be crawling yet, but floors still affect daily comfort—especially when adults are walking through the house, sitting on rugs, or caring for pets.
            </p>
            <p className="mb-6">
              Prioritize:
            </p>
            <InlineArticleImage
              src="/images/resources/bringing-baby-home/laundry-floors-pets.webp"
              alt="New parent folding baby laundry in a tidy living room while a dog rests away from the newborn bassinet"
              caption="Prioritize the rooms your family actually uses: clear walking paths, essential laundry, visible pet hair, crumbs, and spills."
            />
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "The path between the sleep area, kitchen, and bathroom",
                "The main living-room rug or floor",
                "Areas where pet hair collects",
                "Visible crumbs, tracked soil, and spills",
                "Entryways used by visitors",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Vacuum or clean floors as needed rather than following an inflexible daily schedule. Use products appropriate for the floor and keep the baby away until the surface is dry and the room is ready for use.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Living with pets and a newborn</h3>
            <p className="mb-4">
              Keep pet bowls, litter boxes, waste, toys, and cleaning supplies separate from baby feeding and changing areas. Wash hands after handling pet waste or cleaning pet areas.
            </p>
            <p className="mb-8">
              Routine vacuuming and removal of visible pet hair may be more sustainable than repeatedly deep cleaning the entire home. Questions about a baby's allergies, immune system, or contact with a particular pet should go to the pediatrician.
            </p>
          </FadeInSection>

          {/* ── Cleaning vs Disinfecting ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Cleaning Versus Disinfecting With a Newborn at Home</h2>
            <p className="mb-4">
              Cleaning and disinfecting are different tasks. Cleaning removes dirt and impurities with soap, water, and physical action. Disinfecting uses a product intended to kill germs on a surface after it has been cleaned.
            </p>
            <p className="mb-6">
              The{" "}
              <a href={CDC_HOME} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">CDC says regular cleaning is enough in most household situations</a>. Disinfection may be appropriate when someone is sick, when a surface is contaminated, or when a healthcare professional recommends additional precautions for someone at higher risk.
            </p>
            <p className="mb-6">
              When a disinfectant is appropriate:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Clean visible dirt first.",
                "Use a product suitable for the surface.",
                "Follow the label, including contact time and ventilation directions.",
                "Never mix cleaners or disinfectants.",
                "Keep children and pets away during use.",
                "Store products securely when finished.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Avoid spraying products near the baby. A stronger odor or a larger amount of product does not mean a better clean.
            </p>
          </FadeInSection>

          {/* ── Products ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How to Choose Cleaning Products With a Newborn at Home</h2>
            <p className="mb-4">
              "Baby-safe" and "newborn-safe" are common marketing terms, but they are not a substitute for reading the label. Choose a product made for the surface and task, follow its directions, and use only the amount instructed. Never describe a product as chemical-free: water, soap, and every cleaning ingredient are chemicals.
            </p>
            <p className="mb-6">
              For routine household cleaning, consider products carrying the{" "}
              <a href={EPA_SAFER} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">EPA Safer Choice label</a>. EPA reviews every intentionally added ingredient in a Safer Choice-certified formula against its human-health and environmental criteria. The label does not mean that a product can be used carelessly or that it is appropriate for every surface or every task.
            </p>
            <p className="mb-8">
              Use these practical rules:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Prefer cleaning over disinfecting when routine cleaning is enough.",
                "Check whether a product is a cleaner, sanitizer, or disinfectant; those are different functions.",
                "Follow dilution, ventilation, protective-equipment, contact-time, and rinse instructions.",
                "Never mix cleaning or disinfecting products.",
                "Avoid spraying or using products in the same occupied space as the baby when the label calls for ventilation or restricted access.",
                "Let treated surfaces dry or complete any label-required rinse before use.",
                "Store every product closed, labeled, and out of reach of children and pets.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              If the baby was born prematurely, has a weakened immune system, or has another individual health concern, ask the pediatrician whether the household needs additional precautions. A cleaning-product label and a professional cleaning company cannot replace individualized medical guidance.
            </p>
          </FadeInSection>

          {/* ── Visitors ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Visitors: Focus on Simple Household Boundaries</h2>
            <p className="mb-4">
              Visitors can bring food, gifts, shoes, coats, and extra activity into the home. The house does not need a complete reset after every visit.
            </p>
            <p className="mb-6">
              Useful boundaries may include:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Asking visitors to wash their hands when they arrive",
                "Keeping shoes and bags in a defined entry area",
                "Cleaning high-touch surfaces as part of the regular routine",
                "Postponing visits when someone is ill",
                "Keeping feeding and diaper supplies in their designated spaces",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Follow your pediatrician's guidance about visitors, illness exposure, vaccines, or contact with the baby. A cleaning company should not set medical visitation rules.
            </p>
          </FadeInSection>

          {/* ── Professional Cleaner ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How to Prepare for a Professional Cleaner After Baby Arrives</h2>
            <p className="mb-4">
              A professional cleaning visit can reduce the workload when the household is short on sleep or when physically demanding tasks keep getting postponed.
            </p>
            <p className="mb-6">
              You do not need to organize the whole house before the cleaners arrive. Instead:
            </p>
            <InlineArticleImage
              src="/images/resources/bringing-baby-home/professional-cleaning-new-parents-official-uniform.webp"
              alt="Capital Clean and Care employee in the official navy uniform vacuuming while new parents care for their newborn"
              caption="Professional cleaning can return valuable time to new parents by handling floors, bathrooms, kitchens, and accumulated dust."
            />
            <ol className="space-y-3 mb-6 pl-6 list-decimal marker:text-accent marker:font-bold">
              <li className="text-foreground"><strong>Identify the two or three rooms that matter most.</strong></li>
              <li className="text-foreground"><strong>Secure medications, personal documents, valuables, and feeding supplies.</strong></li>
              <li className="text-foreground"><strong>Tell the company where the baby and pets will be during the visit.</strong></li>
              <li className="text-foreground"><strong>Share product preferences or surface restrictions in advance.</strong></li>
              <li className="text-foreground"><strong>Ask the team to avoid spraying products near occupied rooms.</strong></li>
              <li className="text-foreground"><strong>Keep feeding-item cleaning separate unless the service explicitly includes it and follows your instructions.</strong></li>
            </ol>
            <p className="mb-8">
              High-value priorities often include bathrooms, kitchen surfaces, floors, accumulated dust, and the primary living area. Personal baby-care tasks, bottle preparation, and medical equipment should remain with the family unless a qualified service has been specifically arranged.
            </p>
            <p className="mb-8">
              Capital Clean Care offers{" "}
              <Link to={HOUSE} className="text-accent font-medium hover:underline">house cleaning</Link>,{" "}
              <Link to={DEEP} className="text-accent font-medium hover:underline">deep cleaning</Link>, and{" "}
              <Link to={RECURRING} className="text-accent font-medium hover:underline">recurring cleaning</Link>{" "}
              across Maryland, Washington DC, and Northern Virginia.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Professional help can be a lifesaver after baby arrives"
              subtext="Capital Clean Care handles bathrooms, kitchen, floors, and accumulated dust while your family focuses on rest and caring for the newborn. Serving Maryland, DC & Northern Virginia."
              ctaLabel="Get My Free Quote"
              ctaTo={QUOTE}
            />
          </FadeInSection>

          {/* ── Checklist ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Weekly Newborn-Home Cleaning Checklist</h2>
            <p className="mb-6">
              Use this list as a flexible menu. It does not need to be completed in one day.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Every day or as needed</h3>
            <ul className="space-y-2 mb-8 pl-1">
              {[
                "Move used feeding items to their designated cleaning area",
                "Reset the changing area and remove visible soil",
                "Wipe visibly dirty kitchen or bathroom surfaces",
                "Gather essential laundry",
                "Remove diaper waste and trash when needed",
                "Clear safe walking paths",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">A few times each week</h3>
            <ul className="space-y-2 mb-8 pl-1">
              {[
                "Vacuum or clean the most-used floor areas",
                "Address visible pet hair",
                "Wash essential baby and adult laundry",
                "Clean the primary bathroom",
                "Wipe frequently touched handles and switches",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-3">Weekly or when manageable</h3>
            <ul className="space-y-2 mb-8 pl-1">
              {[
                "Change household linens according to your family's routine",
                "Clean less-used floors and surfaces",
                "Check supplies and restock essentials",
                "Clean hampers, bins, or baskets as needed",
                "Delegate postponed deep-cleaning tasks",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          {/* ── FAQ ── */}
          <FadeInSection>
            <div className="mt-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.q} className="group border border-border rounded-xl bg-white overflow-hidden">
                    <summary className="cursor-pointer list-none px-5 py-4 font-heading font-semibold text-foreground text-lg flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                      <span>{faq.q}</span>
                      <span className="text-accent transition-transform group-open:rotate-45 text-2xl leading-none" aria-hidden="true">+</span>
                    </summary>
                    <div className="px-5 pb-5 pt-0 text-lg text-gray-700 leading-relaxed">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* ── Closing + CTA ── */}
          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4 mt-14">A Routine That Supports the Family</h2>
            <p className="mb-6">
              A newborn-home cleaning routine should reduce friction, not create another standard the family cannot meet. Keep feeding and diaper workflows separate, clean visible soil, maintain the rooms you use most, and let optional projects wait.
            </p>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Let Us Handle the Heavy Work</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                If bathrooms, floors, dust, and recurring household cleaning are taking time away from rest and family care, Capital Clean Care can help. Request a free quote for professional cleaning in Maryland, Washington DC, or Northern Virginia.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-6 rounded-full shadow-md w-full sm:w-auto" asChild>
                  <Link to={QUOTE}>Get My Free Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 text-primary-foreground text-lg font-semibold hover:text-accent transition-colors">
                  <Phone className="h-5 w-5" /> {PHONE}
                </a>
              </div>
            </div>
          </FadeInSection>

          {/* ── Medical disclaimer (end) ── */}
          <FadeInSection>
            <div className="rounded-2xl border border-border bg-secondary/40 p-5 md:p-6 mt-10 text-base md:text-lg text-muted-foreground italic">
              This article provides general household information and is not medical advice. Ask your pediatrician or healthcare provider about your baby's individual health needs, feeding equipment, illness exposure, or cleaning precautions.
            </div>
          </FadeInSection>

          <FadeInSection>
            <AuthorBio />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="bringing-baby-home-cleaning-guide" />
      <StickyCTA />
    </Layout>
  );
};

export default BringingBabyHomeCleaning;
