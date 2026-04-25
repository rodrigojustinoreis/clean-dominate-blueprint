import { Link } from "react-router-dom";
import { CheckCircle, Leaf, Shield, Heart, AlertTriangle, ArrowRight, Star, Phone, FlaskConical, Home, PawPrint, Baby, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema, FAQSchema, HowToSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const faqs = [
  {
    q: "Are eco-friendly cleaning products as effective as chemical cleaners?",
    a: "Yes — modern plant-based formulas remove bacteria, grease, soap scum, mold, and grime as effectively as conventional chemical cleaners. EPA Safer Choice certified products undergo rigorous efficacy testing. The difference is what they leave behind: no toxic residues, no harmful fumes, no risk to your family.",
  },
  {
    q: "What exactly does 'non-toxic' mean for cleaning products?",
    a: "Non-toxic means the product doesn't contain ingredients classified as hazardous by the EPA or OSHA — including chlorine bleach, ammonia, formaldehyde, synthetic musks, and phthalates. Our products are plant-derived, biodegradable, and free from VOCs (volatile organic compounds) that cause indoor air pollution.",
  },
  {
    q: "Is eco-friendly cleaning safe for babies and toddlers?",
    a: "Absolutely. Infants and toddlers are especially vulnerable to chemical residues because they crawl on floors and put hands in their mouths. Our plant-based products leave no harmful residues, making your home genuinely safer for the youngest family members.",
  },
  {
    q: "Does eco-friendly cleaning cost more?",
    a: "At Capital Clean Care, eco-friendly cleaning is our standard — it's what we use in every home at no extra charge. You don't pay a green premium. Every cleaning, regardless of service type, uses our EPA Safer Choice certified products.",
  },
  {
    q: "Are the products safe for pets?",
    a: "Yes. Dogs and cats are particularly sensitive to cleaning chemicals because they walk on cleaned floors and lick their paws. Our plant-based products are formulated to be safe for household pets. No fumes, no residues that could harm animals.",
  },
  {
    q: "What's the difference between 'green' and 'EPA Safer Choice'?",
    a: "'Green' is a marketing term with no regulatory standard. EPA Safer Choice is a rigorous government certification — every ingredient must be evaluated for human health and environmental safety before a product can carry the label. We only use products that meet this standard.",
  },
  {
    q: "Can eco-friendly products disinfect and kill germs?",
    a: "Yes. Our sanitizing products use plant-derived active ingredients like citric acid and hydrogen peroxide that are proven to kill 99.9% of common household bacteria and viruses — without chlorine or synthetic biocides.",
  },
  {
    q: "Do eco-friendly products have a natural scent or no smell?",
    a: "Our products have a light, natural scent derived from essential oils — or are unscented entirely. There's no artificial fragrance, no overpowering chemical smell. Your home will smell clean and fresh, not like it was just bleached.",
  },
];

const chemicalsToAvoid = [
  {
    name: "Chlorine Bleach",
    risk: "Irritates airways, triggers asthma attacks, damages lung tissue with repeated exposure. Creates toxic chloramine gas when mixed with ammonia.",
    found: "Bathroom cleaners, disinfectant sprays, mold removers",
  },
  {
    name: "Ammonia",
    risk: "Causes respiratory inflammation, eye irritation, and chemical burns at high concentrations. Especially dangerous for asthma and COPD sufferers.",
    found: "Glass cleaners, multi-surface sprays, floor cleaners",
  },
  {
    name: "Phthalates",
    risk: "Endocrine disruptors linked to hormonal imbalances and developmental issues in children. Often hidden under 'fragrance' on product labels.",
    found: "Synthetic fragranced products, air fresheners",
  },
  {
    name: "Triclosan",
    risk: "Antimicrobial agent linked to antibiotic resistance. Disrupts thyroid function and accumulates in body tissue.",
    found: "Antibacterial soaps, some multi-surface cleaners",
  },
  {
    name: "Formaldehyde",
    risk: "Known human carcinogen. Causes nose and throat irritation, watery eyes, and long-term respiratory damage.",
    found: "Some furniture polish and disinfectant products",
  },
  {
    name: "Sodium Lauryl Sulfate (SLS)",
    risk: "Skin and eye irritant that penetrates skin and may disrupt hormonal function. Causes contact dermatitis in sensitive individuals.",
    found: "Degreasers, dish soaps, bathroom cleaners",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Safer for Children",
    description:
      "Kids spend 80% of their time indoors and are exposed to 3x more airborne chemicals than adults relative to body weight. Plant-based products eliminate that risk. No toxic residues on floors where babies crawl. No chemical off-gassing in bedrooms where children sleep.",
  },
  {
    icon: Shield,
    title: "Safe for Allergy & Asthma Sufferers",
    description:
      "Synthetic fragrances and VOCs in conventional cleaners are among the top triggers for asthma attacks and allergic reactions. Our fragrance-free and low-VOC formulas are recommended by allergists and pulmonologists for chemically sensitive individuals.",
  },
  {
    icon: Leaf,
    title: "Pet-Safe Every Visit",
    description:
      "Dogs and cats absorb chemicals through paw pads and grooming. Studies show pets in chemically-cleaned homes have significantly higher concentrations of toxic compounds in their blood. Our plant-based approach protects four-legged family members.",
  },
  {
    icon: CheckCircle,
    title: "Cleaner Indoor Air",
    description:
      "The EPA reports indoor air can be 2–5x more polluted than outdoor air — largely due to cleaning product VOCs. Our low-VOC, biodegradable formulas dramatically reduce chemical off-gassing, giving your family genuinely cleaner air to breathe.",
  },
  {
    icon: Star,
    title: "No Toxic Residues",
    description:
      "Conventional cleaners leave chemical films on counters, floors, and appliances that persist for days. Our plant-based products break down completely, leaving surfaces clean with no harmful residue — safer for food prep, for touching, for living.",
  },
  {
    icon: AlertTriangle,
    title: "Environmental Responsibility",
    description:
      "Harsh chemicals wash down drains into waterways, harming aquatic ecosystems and entering the drinking water supply. Biodegradable plant-based products break down naturally, protecting Maryland's rivers, the Chesapeake Bay, and the water your family drinks.",
  },
];

const roomGuide = [
  {
    room: "Kitchen",
    icon: "🍳",
    tips: [
      "Use a citrus-based degreaser on stovetops and range hoods — dissolves cooking grease without petroleum solvents.",
      "Wipe counters with plant-derived multi-surface spray after food prep — no chemical residue near food contact surfaces.",
      "Clean inside the refrigerator with a diluted white vinegar solution — food-safe and antimicrobial.",
      "Scrub sinks with a baking soda paste for gentle abrasion without scratching stainless steel.",
    ],
  },
  {
    room: "Bathrooms",
    icon: "🚿",
    tips: [
      "Use hydrogen peroxide-based disinfectant on toilets and tiles — kills 99.9% of bacteria without chlorine gas risk.",
      "Remove soap scum and hard water deposits with citric acid solution — no bleach required.",
      "Clean mirrors and glass with ammonia-free plant-based glass cleaner for streak-free results.",
      "Ventilate during and after cleaning — even with eco products, fresh air improves indoor air quality.",
    ],
  },
  {
    room: "Bedrooms",
    icon: "🛏️",
    tips: [
      "Dust surfaces with a slightly damp microfiber cloth — traps particles rather than scattering them.",
      "Use an enzyme-based fabric refresher on mattresses instead of synthetic fragrances.",
      "Vacuum mattresses and upholstery with a HEPA-filter vacuum before eco-cleaning hard surfaces.",
      "Wash bedding at 140°F (60°C) to kill dust mites — hot water is more effective than most chemical treatments.",
    ],
  },
  {
    room: "Living Areas",
    icon: "🛋️",
    tips: [
      "Clean upholstery with plant-based foam cleaner — no petroleum solvents that can off-gas for days.",
      "Use wood-safe plant-derived polish on furniture — maintains finish without formaldehyde-containing waxes.",
      "Clean electronics and screens with distilled water and microfiber — no ammonia sprays near screens.",
      "Refresh area rugs with baking soda before vacuuming — natural deodorizer with no synthetic musks.",
    ],
  },
  {
    room: "Floors",
    icon: "🧹",
    tips: [
      "Mop hardwood with a pH-neutral plant-based cleaner — no chemical residue that dulls finish over time.",
      "Clean tile grout with hydrogen peroxide and baking soda paste — whitens without chlorine bleach.",
      "Use a steam mop for deep sanitization on tile and vinyl — heat kills bacteria with no chemicals at all.",
      "Rinse mop heads in hot water after use — prevents chemical buildup if any cleaning solution is used.",
    ],
  },
];

const comparisonRows = [
  { feature: "Active ingredients", conventional: "Chlorine, ammonia, synthetic solvents", plantBased: "Citric acid, hydrogen peroxide, plant surfactants" },
  { feature: "VOC emissions", conventional: "High — off-gases for hours after use", plantBased: "Low or zero — minimal indoor air impact" },
  { feature: "Child safety", conventional: "Risk of residue exposure on floors & surfaces", plantBased: "Safe — no harmful residues" },
  { feature: "Pet safety", conventional: "Risk of paw pad absorption and ingestion during grooming", plantBased: "Safe — plant-derived, non-toxic after drying" },
  { feature: "Allergy/asthma risk", conventional: "Synthetic fragrances and VOCs trigger reactions", plantBased: "Fragrance-free or essential oil scented — low trigger risk" },
  { feature: "Environmental impact", conventional: "Bioaccumulates in waterways, harms aquatic ecosystems", plantBased: "Biodegradable — breaks down safely in waterways" },
  { feature: "Ingredient disclosure", conventional: "Hidden under 'fragrance' — not fully disclosed by law", plantBased: "Full transparency — no hidden ingredients" },
  { feature: "Disinfection efficacy", conventional: "Effective — but with significant health trade-offs", plantBased: "Equally effective — kills 99.9% of common bacteria and viruses" },
  { feature: "Regulatory standard", conventional: "No certification required — self-regulated", plantBased: "EPA Safer Choice certified — rigorous third-party evaluation" },
  { feature: "Disposal safety", conventional: "Can contaminate water treatment systems", plantBased: "Safe for drains — doesn't disrupt water treatment" },
];

const howToSteps = [
  { name: "Identify Priority Rooms", text: "Start with the rooms where children or pets spend the most time — typically bedrooms, playrooms, and kitchens. These areas have the highest risk of chemical residue exposure." },
  { name: "Replace Bathroom Cleaners First", text: "Swap conventional toilet and tile cleaners for hydrogen peroxide-based disinfectants. Bathrooms have poor ventilation and high chemical VOC concentrations from conventional products." },
  { name: "Switch Kitchen Degreasers", text: "Replace petroleum-based kitchen degreasers with citrus or plant-derived formulas. Food contact surfaces in the kitchen present the highest ingestion risk from chemical residues." },
  { name: "Update Floor Cleaning Products", text: "Replace ammonia or chemical floor cleaners with pH-neutral, plant-based floor solutions safe for children crawling and pets walking on treated surfaces." },
  { name: "Eliminate Synthetic Air Fresheners", text: "Replace synthetic air fresheners and fabric sprays with enzyme-based deodorizers or essential oil diffusers. Synthetic fragrances are among the highest-VOC household products." },
  { name: "Choose EPA Safer Choice Products", text: "When purchasing any new cleaning product, look for the EPA Safer Choice label. This certification guarantees every ingredient has passed rigorous human health and environmental safety evaluation." },
];

const WhyEcoFriendlyPage = () => {
  const { seoHelmet } = useSEO({
    title: "Why Eco-Friendly Cleaning Is Safer for Your Family | Research & Science | Capital Clean Care",
    description:
      "Discover the science behind non-toxic cleaning. Learn how common household chemicals affect children, pets, and indoor air quality — and what plant-based alternatives actually work.",
    canonical: "https://capitalcleancare.com/why-eco-friendly-cleaning",
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Why Eco-Friendly Cleaning", href: "/why-eco-friendly-cleaning" },
        ]}
      />
      <FAQSchema faqs={faqs} />
      <HowToSchema
        name="How to Switch to Eco-Friendly Home Cleaning"
        description="A step-by-step guide to transitioning your home from conventional chemical cleaners to safe, EPA Safer Choice certified plant-based products."
        url="https://capitalcleancare.com/why-eco-friendly-cleaning"
        steps={howToSteps}
        totalTime="PT2H"
      />

      {/* ── Hero ── */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Why Eco-Friendly Cleaning" },
            ]}
            className="mb-6"
          />
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Leaf className="h-3.5 w-3.5" /> The Science of Green Cleaning
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Why Eco-Friendly Cleaning Is the Safer Choice for Your Family and Home
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl">
            Most households use cleaning products that contain dozens of chemicals never tested for long-term safety. Here's what the science says — and why Capital Clean Care made the switch to plant-based, EPA-certified products for every home we clean across Maryland, DC, and Virginia.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get a Free Eco-Clean Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center border-2 border-[#2E7D32] text-[#2E7D32] font-bold px-6 py-3 rounded-md hover:bg-[#2E7D32]/5 transition-colors"
            >
              <Phone className="h-4 w-4 mr-2" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── The Problem with Conventional Cleaners ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-block bg-red-50 text-red-600 font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
            The Hidden Problem
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            What's Really in Your Cleaning Products?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <p>
              According to the Environmental Working Group (EWG), fewer than half of cleaning product ingredients are disclosed on labels. Under U.S. law, manufacturers are not required to list every ingredient — only "active" disinfectants. The rest can be hidden under umbrella terms like "fragrance," a single word that may represent a cocktail of dozens of synthetic chemicals.
            </p>
            <p>
              The EPA reports that indoor air is typically <strong className="text-foreground">2 to 5 times more polluted than outdoor air</strong> — and cleaning products are a significant contributor. Volatile organic compounds (VOCs) released during cleaning linger in the air for hours after use, concentrating in poorly ventilated spaces like bathrooms, kitchens, and bedrooms.
            </p>
            <p>
              Children are the most vulnerable. They breathe more air relative to body weight than adults, spend more time on floors where residues concentrate, and put their hands in their mouths regularly. The American Academy of Pediatrics recommends minimizing children's exposure to chemical cleaning agents — advice that aligns with everything Capital Clean Care does.
            </p>
            <p>
              Pets face similar risks. Dogs and cats absorb chemicals through the paw pads they lick when grooming. A 2008 study found significantly elevated levels of flame retardants and other household chemicals in the blood of pets — many of which are linked to cleaning products used in the home.
            </p>
          </div>

          {/* Chemical cards */}
          <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
            6 Common Cleaning Chemicals to Avoid
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {chemicalsToAvoid.map((c) => (
              <div key={c.name} className="rounded-xl border border-red-100 bg-red-50/50 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{c.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{c.risk}</p>
                    <p className="text-xs text-muted-foreground/70">
                      <span className="font-medium">Found in:</span> {c.found}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Eco-Friendly Solution ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Leaf className="h-3.5 w-3.5" /> The Green Solution
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            What Makes a Cleaning Product Truly Safe?
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <p>
              Not all "green" products are created equal. The word "natural" has no legal definition and is often used as a marketing term with no standards behind it. At Capital Clean Care, we look beyond marketing claims to certifications with real scientific backing.
            </p>
            <p>
              The gold standard is the <strong className="text-foreground">EPA Safer Choice certification</strong>. To earn this label, every single ingredient in a product must be evaluated by EPA scientists for human health and environmental safety. Products must be biodegradable, free from carcinogens, and safe for aquatic ecosystems. It's the most rigorous third-party standard for cleaning product safety available in the United States.
            </p>
            <p>
              Our plant-based formulas use active ingredients derived from coconut, corn, and other renewable plant sources. They clean through surfactant action — breaking the bond between dirt and surfaces — rather than through toxic chemical reactions. The result is equally effective cleaning with zero harmful residues.
            </p>
            <p>
              Plant-based disinfectants use hydrogen peroxide, citric acid, and thymol (derived from thyme) as active antimicrobials. These compounds kill 99.9% of common household bacteria and viruses, including E. coli, Salmonella, and influenza — and they break down into water and oxygen after use, leaving no toxic byproducts.
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Capital Clean Care's Product Standard
                </h3>
                <ul className="space-y-1.5">
                  {[
                    "EPA Safer Choice certified or equivalent third-party verified",
                    "Plant-derived surfactants — no petroleum-based ingredients",
                    "Free from chlorine, ammonia, formaldehyde, and phthalates",
                    "Biodegradable — breaks down safely in waterways",
                    "Low or zero VOC — no harmful off-gassing",
                    "Cruelty-free — never tested on animals",
                    "Free from synthetic fragrances and artificial dyes",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 Benefits ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Why It Matters
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              6 Reasons to Choose Eco-Friendly Cleaning
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The science is clear. Switching to plant-based cleaning products delivers measurable benefits for your family, your home, and the environment.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <Card key={b.title} className="border-border hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <b.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-foreground mb-2">{b.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Children's Health Deep-Dive ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-pink-50 text-pink-700 font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Baby className="h-3.5 w-3.5" /> Children's Health
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Why Conventional Cleaners Are Especially Dangerous for Children
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
            <p>
              Children are not small adults when it comes to chemical exposure. Their bodies process toxins differently, their developing organs are more vulnerable to disruption, and their behaviors — crawling on floors, mouthing objects, spending more time indoors — dramatically increase their exposure to cleaning product residues.
            </p>
            <p>
              Research published in the <strong className="text-foreground">American Journal of Respiratory and Critical Care Medicine</strong> found that children regularly exposed to cleaning spray chemicals had a 49% higher risk of developing asthma by age 7. Another study from the <strong className="text-foreground">Silent Spring Institute</strong> found that children in homes where conventional cleaning products are used had measurably higher concentrations of endocrine-disrupting chemicals in their urine.
            </p>
            <p>
              The issue is compounded by where children spend most of their time. Infants and toddlers who crawl on floors are in direct contact with the surfaces where chemical residues from conventional floor cleaners concentrate. Hand-to-mouth contact — a natural behavior in children under 3 — transfers those residues directly. No amount of ventilation eliminates surface residues.
            </p>
            <p>
              The <strong className="text-foreground">American Academy of Pediatrics (AAP)</strong> specifically recommends that families with young children reduce or eliminate exposure to cleaning products containing synthetic fragrances, ammonia, chlorine bleach, and VOC-emitting solvents. Their 2016 policy statement on chemical management explicitly calls for stricter regulation of household cleaning chemicals and encourages the use of safer alternatives.
            </p>
            <p>
              Capital Clean Care eliminates this risk entirely. Our plant-based products leave no toxic surface residues, emit no VOCs into breathing air, and contain no synthetic fragrances. When your floors are cleaned, your baby can crawl on them safely — because we designed our approach with exactly that in mind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { stat: "49%", label: "Higher asthma risk in children exposed to cleaning sprays (AJRCCM)" },
              { stat: "3×", label: "More air breathed per body weight by children vs. adults" },
              { stat: "80%+", label: "Of children's time spent indoors where VOC concentrations are highest" },
            ].map((item) => (
              <div key={item.stat} className="bg-pink-50 rounded-xl p-5 text-center border border-pink-100">
                <p className="font-heading text-3xl font-bold text-pink-700 mb-1">{item.stat}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pet Safety Science ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <PawPrint className="h-3.5 w-3.5" /> Pet Safety
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            The Science of Chemical Exposure in Pets
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
            <p>
              Cats and dogs are uniquely vulnerable to household cleaning chemicals. Unlike humans, pets walk barefoot on every cleaned surface — absorbing chemical residues through the sensitive skin of their paw pads. Cats are additionally at risk because they groom themselves by licking their paws, directly ingesting whatever cleaning product residues are present on floors and surfaces.
            </p>
            <p>
              A landmark study published in <strong className="text-foreground">Environmental Science & Technology</strong> found that cats living in homes that used conventional cleaning products had blood levels of polybrominated diphenyl ethers (PBDEs) — flame retardants that accumulate from household products — that were 20 to 100 times higher than those found in human adults. Dogs showed similar accumulation patterns for other household chemical compounds.
            </p>
            <p>
              Certain cleaning chemicals are acutely dangerous to specific pets. <strong className="text-foreground">Pine-based cleaners</strong> — commonly marketed as natural — contain phenols that are hepatotoxic (liver-damaging) to cats. <strong className="text-foreground">Quaternary ammonium compounds</strong> (quats), found in many disinfecting wipes and sprays, have been linked to fertility problems in mice and are a known skin and respiratory irritant for cats and dogs.
            </p>
            <p>
              Even the fumes from conventional cleaning products represent a hazard. Cats have an exceptionally efficient respiratory system that makes them more susceptible than humans to inhaled chemicals. Cleaning a bathroom with conventional bleach-based products while a cat is in the home can cause acute respiratory distress.
            </p>
            <p>
              Our plant-based formulas contain no phenols, no quats (in our standard line), and no chlorine compounds. They're designed to be safe not just for humans — but for every living thing in your home. If you have cats, dogs, or other pets, our eco-friendly approach isn't just a preference — it's a meaningful health safeguard.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-amber-600" /> Common Cleaning Chemicals That Harm Pets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "Pine-oil cleaners", risk: "Phenols are liver-toxic to cats even in small amounts" },
                { name: "Quaternary ammonium (quats)", risk: "Linked to respiratory irritation and fertility issues in animals" },
                { name: "Ethylene glycol", risk: "Causes acute kidney failure in cats and dogs — sweet taste increases ingestion risk" },
                { name: "Chlorine bleach", risk: "Fumes cause respiratory distress; paw contact causes chemical burns" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-2 bg-white rounded-lg p-3 border border-amber-100">
                  <AlertTriangle className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.risk}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <FlaskConical className="h-3.5 w-3.5" /> Side by Side
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Conventional Chemical Cleaners vs. Plant-Based Products
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The differences between conventional and plant-based cleaning products go far beyond marketing claims. Here's a factual comparison across the factors that matter most for your family's health and the environment.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left px-5 py-3 font-semibold text-foreground w-1/3">Factor</th>
                  <th className="text-left px-5 py-3 font-semibold text-red-600">⚠ Conventional Cleaners</th>
                  <th className="text-left px-5 py-3 font-semibold text-accent">✓ Plant-Based Products</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                    <td className="px-5 py-3 font-medium text-foreground">{row.feature}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row.conventional}</td>
                    <td className="px-5 py-3 text-foreground">{row.plantBased}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Room-by-Room Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Home className="h-3.5 w-3.5" /> Room-by-Room Guide
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            How to Clean Every Room the Eco-Friendly Way
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            Transitioning to plant-based cleaning products is straightforward when you know which products to use in each space. Our professional teams follow this approach in every home we clean across Maryland, DC, and Virginia.
          </p>
          <div className="space-y-6">
            {roomGuide.map((room) => (
              <div key={room.room} className="border border-border rounded-2xl overflow-hidden">
                <div className="bg-accent/5 px-6 py-4 flex items-center gap-3 border-b border-border">
                  <span className="text-2xl">{room.icon}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground">{room.room}</h3>
                </div>
                <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.tips.map((tip) => (
                    <div key={tip} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
            <p className="text-sm text-foreground">
              <strong>Want this done for you?</strong> Capital Clean Care's professional teams follow this eco protocol in every home across{" "}
              <Link to="/maryland" className="text-accent hover:underline font-medium">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent hover:underline font-medium">Washington DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent hover:underline font-medium">Northern Virginia</Link> — using EPA Safer Choice certified products at no extra charge.{" "}
              <Link to="/contact" className="text-accent hover:underline font-medium">Get a free quote →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── How to Make the Switch ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <CheckCircle className="h-3.5 w-3.5" /> Step-by-Step
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            How to Switch Your Home to Eco-Friendly Cleaning
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            You don't have to change everything at once. Here's the priority sequence our cleaning experts recommend for transitioning from conventional to plant-based products.
          </p>
          <div className="space-y-4">
            {howToSteps.map((step, i) => (
              <div key={step.name} className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl hover:shadow-sm transition-shadow">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center shrink-0 text-white font-bold text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{step.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chesapeake Bay & Environmental Impact ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
            <Droplets className="h-3.5 w-3.5" /> Environmental Impact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Protecting the Chesapeake Bay — One Home at a Time
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
            <p>
              The Chesapeake Bay is the largest estuary in the United States and one of the most ecologically significant bodies of water in North America. It provides habitat for more than 3,600 species of plants, fish, and animals — including blue crabs, rockfish, and migratory waterfowl that define the character of the region. But the Bay is also under severe stress.
            </p>
            <p>
              Nitrogen and phosphorus from chemical runoff are the primary drivers of the Bay's ongoing water quality crisis. While agricultural runoff is the largest source, household cleaning chemicals — including surfactants, phosphates, and synthetic compounds — contribute meaningfully to the problem when they flow down drains and into the watershed.
            </p>
            <p>
              The Chesapeake Bay watershed spans six states and Washington DC, covering more than 64,000 square miles. Every home in Montgomery County, Fairfax, Arlington, Alexandria, Washington DC, and Prince George's County sits within this watershed. The cleaning products used in those homes — multiplied by hundreds of thousands of households — have a cumulative impact on Bay water quality.
            </p>
            <p>
              <strong className="text-foreground">Biodegradable cleaning products</strong> change this equation. Plant-derived surfactants break down into harmless compounds when they enter water treatment systems and natural waterways. Conventional petroleum-based surfactants and synthetic compounds resist biodegradation, accumulating in sediment and bioaccumulating in aquatic species.
            </p>
            <p>
              Maryland's Department of the Environment has partnered with businesses committed to reducing their chemical footprint as part of the Chesapeake Bay Restoration effort. When you choose Capital Clean Care, you're participating in that commitment. Every home we clean uses products that won't contribute to Bay pollution — a choice that compounds across thousands of cleanings.
            </p>
            <p>
              Beyond the Bay, our low-VOC products contribute less to the regional air quality challenges that affect DMV communities. Ground-level ozone — a significant air quality concern in the Washington-Baltimore corridor — is partly driven by VOC emissions from household and commercial cleaning products. Plant-based formulas emit dramatically less VOC, reducing your household's contribution to regional air quality issues.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🌊", stat: "64,000 mi²", label: "Chesapeake Bay watershed — includes all of Maryland, DC, and most of Northern Virginia" },
              { icon: "🐟", stat: "3,600+", label: "Species depend on Bay water quality — directly affected by chemical runoff" },
              { icon: "♻️", stat: "100%", label: "Of our products are biodegradable — break down safely without harming waterways" },
            ].map((item) => (
              <div key={item.stat} className="bg-blue-50 rounded-xl p-5 text-center border border-blue-100">
                <p className="text-2xl mb-1">{item.icon}</p>
                <p className="font-heading text-2xl font-bold text-blue-700 mb-1">{item.stat}</p>
                <p className="text-xs text-muted-foreground leading-snug">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eco Cleaning in the DMV ── */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Eco-Friendly Cleaning in Maryland, DC & Virginia
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <p>
              The DMV region has some of the most environmentally conscious homeowners in the country — and for good reason. The Chesapeake Bay watershed, which covers most of Maryland and parts of Virginia, is one of the most ecologically sensitive areas on the East Coast. Every chemical poured down a drain in Montgomery County, Fairfax, or Washington DC has the potential to reach this ecosystem.
            </p>
            <p>
              Maryland's Department of the Environment actively encourages residents and businesses to reduce their use of toxic cleaning agents. The Maryland Green Registry recognizes businesses that commit to environmental standards — a recognition that aligns with Capital Clean Care's approach to every single client we serve.
            </p>
            <p>
              In Washington DC, the Department of Energy and Environment (DOEE) has specific guidelines for safer chemical use. Northern Virginia communities from Arlington to Alexandria have increasingly adopted green building and living standards that extend to household cleaning practices.
            </p>
            <p>
              When you choose Capital Clean Care, you're not just protecting your family — you're making a choice that benefits the broader DMV community. Our biodegradable products don't contribute to chemical runoff. Our low-VOC formulas don't add to regional air quality issues. It's green cleaning that goes beyond the label.
            </p>
            <p>
              We serve <Link to="/maryland" className="text-accent hover:underline font-medium">Maryland</Link> homeowners across Montgomery County, Frederick County, Howard County, and Prince George's County, <Link to="/washington-dc" className="text-accent hover:underline font-medium">Washington DC</Link> across all quadrants, and <Link to="/virginia" className="text-accent hover:underline font-medium">Northern Virginia</Link> from Arlington to McLean to Fairfax. Eco-friendly cleaning is available for every service type — standard, deep cleaning, move-in/move-out, recurring plans, and post-construction cleanup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { label: "Maryland", slug: "/maryland", desc: "Montgomery, Frederick, Howard & Prince George's Counties" },
              { label: "Washington DC", slug: "/washington-dc", desc: "All DC quadrants — NW, NE, SW, SE" },
              { label: "Northern Virginia", slug: "/virginia", desc: "Arlington, McLean, Fairfax, Alexandria & more" },
            ].map((area) => (
              <Link
                key={area.slug}
                to={area.slug}
                className="block p-5 rounded-xl border border-border hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-4 w-4 text-accent" />
                  <span className="font-semibold text-foreground group-hover:text-accent transition-colors">{area.label}</span>
                </div>
                <p className="text-sm text-muted-foreground">{area.desc}</p>
                <span className="text-accent text-sm font-medium mt-3 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View locations <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── GreenShield Process ── */}
      <GreenShield5Step showCTA={false} />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── Testimonials ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              What Clients Say
            </span>
            <h2 className="font-heading text-3xl font-bold">
              DMV Families Who Made the Switch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                name: "Sarah M.",
                location: "Bethesda, MD",
                stars: 5,
                text: "I have two kids under 5 and a dog. Knowing Capital Clean Care only uses plant-based products means I don't have to worry about what they're touching after the house is cleaned. Game changer.",
              },
              {
                name: "David K.",
                location: "Arlington, VA",
                stars: 5,
                text: "My wife has asthma and we'd always struggle with cleaning smells. We haven't had a single reaction since switching to Capital Clean Care. Their eco products are genuinely different.",
              },
              {
                name: "Michelle R.",
                location: "Silver Spring, MD",
                stars: 5,
                text: "I was skeptical that 'green' products would actually clean as well. I was completely wrong. My bathroom has never looked this good and there's none of that harsh bleach smell.",
              },
              {
                name: "Thomas L.",
                location: "Washington, DC",
                stars: 5,
                text: "We have three cats. The fact that these products are safe if our cats walk on freshly cleaned floors and then groom themselves — that was the deciding factor for us. Highly recommend.",
              },
            ].map((t) => (
              <Card key={t.name}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-1 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-foreground italic mb-3 leading-relaxed">"{t.text}"</p>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links / Related Pages ── */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-2 text-center">Explore Our Eco-Friendly Services</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">All services use EPA Safer Choice certified plant-based products — no green premium charged.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {[
              { label: "Eco-Friendly Cleaning Service", href: "/services/eco-friendly-cleaning" },
              { label: "Deep Cleaning (Green)", href: "/services/deep-cleaning" },
              { label: "Recurring Cleaning Plans", href: "/services/recurring-cleaning" },
              { label: "Move-In / Move-Out Cleaning", href: "/services/move-out-cleaning" },
              { label: "Post-Construction Cleanup", href: "/services/post-construction-cleaning" },
              { label: "Spring Cleaning Maryland", href: "/spring-cleaning-md" },
              { label: "House Cleaning Near Me", href: "/house-cleaning-near-me" },
              { label: "Airbnb Cleaning Service", href: "/services/airbnb-cleaning" },
              { label: "Office Cleaning", href: "/services/office-cleaning" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-white hover:border-accent hover:shadow-sm transition-all text-sm font-medium text-foreground hover:text-accent"
              >
                <ArrowRight className="h-3.5 w-3.5 text-accent shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
          <h3 className="font-heading text-lg font-bold mb-3 text-center">Related Blog Articles</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: "Eco Cleaning Tips for Maryland Homes", href: "/blog/eco-cleaning-tips-maryland-homes" },
              { label: "Eco Cleaning Tips for Winter — Maryland", href: "/blog/eco-cleaning-tips-winters-maryland" },
              { label: "Allergy-Proofing Your DMV Home", href: "/blog/allergy-proofing-home-dmv" },
              { label: "Remove Pet Hair & Odors — DMV Homes", href: "/blog/remove-pet-hair-odors-dmv-homes" },
              { label: "Deep Cleaning Checklist — DMV Homeowners", href: "/blog/deep-cleaning-checklist-dmv-homeowners" },
              { label: "Best Cleaning Schedule for Busy Families", href: "/blog/best-cleaning-schedule-busy-families-dmv" },
            ].map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-white hover:border-accent hover:shadow-sm transition-all text-sm font-medium text-foreground hover:text-accent"
              >
                <ArrowRight className="h-3.5 w-3.5 text-accent shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Eco-Friendly Cleaning FAQ
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Quote Form ── */}
      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">
              Get a Free Eco-Friendly Cleaning Quote
            </h2>
            <p className="text-muted-foreground">
              Serving Maryland, DC & Northern Virginia. 15% off your first clean — new clients only.
            </p>
          </div>
          <div className="bg-accent text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🌿 All services use EPA Safer Choice certified plant-based products — at no extra charge
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Get My Free Eco-Clean Quote →" />
            </CardContent>
          </Card>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Or call <a href={PHONE_HREF} className="font-semibold text-accent hover:underline">{PHONE}</a> — Mon–Sat 8AM–6PM
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default WhyEcoFriendlyPage;
