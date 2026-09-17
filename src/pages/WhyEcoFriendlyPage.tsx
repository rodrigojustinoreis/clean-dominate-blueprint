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

// Consensus lot (2026-09-17, CONSENSUS-FINAL-CODEX-CLAUDE.md): every answer below is limited to what a
// product label or a linked primary source supports. No product inventory or operating protocol (specific
// actives, "no bleach/ammonia kit", fragrance-free/low-VOC availability) is claimed until the owner documents it;
// no medical advice; associations are not presented as causes. See CLAIMS-MATRIX in the audit folder.
const faqs = [
  {
    q: "Are eco-friendly cleaning products as effective as chemical cleaners?",
    a: "For everyday cleaning, yes: plant-based surfactant cleaners lift grease, soap scum and grime when used as the label directs. Products carrying the EPA Safer Choice label must also meet EPA's performance criteria for their product category. What changes is the ingredient profile and disclosure, not the physics of cleaning. Cleaning, sanitizing and disinfecting are different claims: only an EPA-registered product disinfects, and only for the organisms and contact time on its label.",
  },
  {
    q: "What exactly does 'non-toxic' mean for cleaning products?",
    a: "'Non-toxic' is an advertising claim that the seller must be able to substantiate under the FTC's Green Guides. On its own it does not tell you whether a product suits your surfaces or your household, and it never replaces the label. What to read instead: whether the ingredients are disclosed, whether it carries the EPA Safer Choice or Design for the Environment (DfE) logo, its signal word and first-aid statements, and its directions for use.",
  },
  {
    q: "Is eco-friendly cleaning safe for babies and toddlers?",
    a: "We reduce exposure rather than promise zero risk. Tell us about infants in the home before the visit so the team can plan around them, and any precaution on a product's label — including drying time before floors are used again — takes priority. For questions about a specific child's sensitivities, your pediatrician is the right source.",
  },
  {
    q: "Does eco-friendly cleaning cost more?",
    a: "At Capital Clean Care, plant-based products are the standard for every service type at no extra charge. You don't pay a green premium.",
  },
  {
    q: "Are the products safe for pets?",
    a: "We plan around pets rather than promise universal safety. Tell us about your animals before the visit; keep pets off cleaned surfaces until they are dry and follow any re-entry instruction on the label. The ASPCA Animal Poison Control Center lists pine-oil (phenol) and chlorine products among household products that are a concern for pets, cats in particular. For a specific animal's sensitivities, check with your veterinarian.",
  },
  {
    q: "What's the difference between 'green' and 'EPA Safer Choice'?",
    a: "'Green' is a marketing term with no regulatory standard. EPA Safer Choice is a voluntary EPA label: every intentionally added ingredient is reviewed against EPA's human-health and environmental criteria, the product must pass performance testing for its category, and it must meet limits on VOCs and packaging. We look for the Safer Choice or DfE logo when choosing products; where a product carries neither, we rely on its label and ingredient disclosure.",
  },
  {
    q: "Can eco-friendly products disinfect and kill germs?",
    a: "Only if the product is EPA-registered for that purpose. Sanitizing and disinfecting are label claims: a registered product lists the organisms it is registered against and the contact time required. A general-purpose plant-based cleaner cleans; it does not disinfect. If you need a surface disinfected, say so when you book so a registered product and its contact time can be planned for that visit.",
  },
  {
    q: "Do eco-friendly products have a natural scent or no smell?",
    a: "It depends on the product: some are unscented, some use essential oils, and essential-oil scents are still fragrance that can bother sensitive people. Tell us in advance if any scent is a problem so the team can plan around it.",
  },
];

const chemicalsToAvoid: { name: string; risk: string; found: string; source?: { label: string; url: string } }[] = [
  {
    name: "Chlorine Bleach",
    risk: "Can irritate the airways, eyes and skin, and may trigger symptoms in people with asthma. Never mix with ammonia or acids: the reaction releases toxic gases.",
    found: "Bathroom cleaners, disinfectant sprays, mold removers",
  },
  {
    name: "Ammonia",
    risk: "Can irritate the airways and eyes and cause chemical burns at high concentrations. People with asthma or COPD may be more sensitive to the fumes.",
    found: "Glass cleaners, multi-surface sprays, floor cleaners",
  },
  {
    name: "Phthalates",
    risk: "Fragrance ingredients are often not itemized on the label, so a scented product may contain phthalates or other components without saying so. If that matters to you, choose products that list every ingredient.",
    found: "Synthetic fragranced products, air fresheners",
  },
  {
    name: "Triclosan",
    risk: "In 2016 the FDA ruled that triclosan and 18 other ingredients could no longer be marketed in over-the-counter consumer antiseptic washes, because manufacturers had not shown they were safe for long-term daily use or more effective than plain soap and water.",
    found: "Older antibacterial soaps, some multi-surface cleaners",
    source: { label: "FDA consumer update", url: "https://www.fda.gov/consumers/consumer-updates/antibacterial-soap-you-can-skip-it-use-plain-soap-and-water" },
  },
  {
    name: "Formaldehyde",
    risk: "Listed as known to be a human carcinogen in the U.S. National Toxicology Program's Report on Carcinogens; can irritate the eyes, nose and throat.",
    found: "Some products use formaldehyde-releasing preservatives; check the ingredient list",
    source: { label: "NTP Report on Carcinogens", url: "https://ntp.niehs.nih.gov/whatwestudy/assessments/cancer/roc" },
  },
  {
    name: "Sodium Lauryl Sulfate (SLS)",
    risk: "A common surfactant that can irritate skin and eyes, especially with prolonged contact; some people develop contact dermatitis.",
    found: "Degreasers, dish soaps, bathroom cleaners",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Less Exposure for Children",
    description:
      "Children breathe more air for their body weight than adults and spend more time on floors. Tell us about infants in the home before the visit so the team can plan around them; label drying times before floors are used again take priority. That reduces exposure; no cleaning method removes it entirely.",
  },
  {
    icon: Shield,
    title: "Considerate of Allergies & Asthma",
    description:
      "Synthetic fragrances and VOCs in conventional cleaners are common triggers for people with asthma or allergies. Tell us about asthma, allergies or fragrance sensitivities before your visit so the team can plan around them.",
  },
  {
    icon: Leaf,
    title: "Pets Planned For",
    description:
      "Pets walk on cleaned floors and groom by licking, so what is left on the floor reaches them directly. Tell us about your animals before the visit, and keep them off cleaned surfaces until dry, as the label directs.",
  },
  {
    icon: CheckCircle,
    title: "Less Added to Your Indoor Air",
    description:
      "EPA lists cleaning products among the sources of indoor VOCs. Ventilation while cleaning and products chosen by their labels reduce what a visit adds to your air. We do not measure air quality and make no air-quality claim for your home.",
  },
  {
    icon: Star,
    title: "Surfaces Left Clean and Dry",
    description:
      "Any cleaner can leave residue if it is not wiped or rinsed as the label directs. We follow the label: dilution, dwell time, wiping and drying, with extra care on food-prep counters and floors.",
  },
  {
    icon: AlertTriangle,
    title: "Use and Dispose as Directed",
    description:
      "Our region sits in the Chesapeake Bay watershed, so what leaves a home eventually reaches local water. Follow the label's dilution and disposal directions, use the small quantities it calls for, and never pour concentrates down a drain or into a septic system.",
  },
];

type RoomTip = string | { text: string; source: { label: string; url: string } };
const roomGuide: { room: string; icon: string; tips: RoomTip[] }[] = [
  {
    room: "Kitchen",
    icon: "🍳",
    tips: [
      "Use a citrus-based degreaser on stovetops and range hoods — dissolves cooking grease without petroleum solvents.",
      "Wipe counters after food prep with a product labeled for food-contact surfaces, and rinse or wipe with water if its label says so.",
      "Wipe inside the refrigerator with a diluted white vinegar solution to cut film and odors — it is a cleaner, not a registered disinfectant.",
      "Clean sinks with a non-abrasive cleaner the sink maker recommends — abrasive pastes can scratch stainless steel and composite sinks.",
    ],
  },
  {
    room: "Bathrooms",
    icon: "🚿",
    tips: [
      "For toilets and tiles, use an EPA-registered hydrogen peroxide disinfectant and keep the surface wet for the contact time on its label — the label, not the ingredient, defines what it is registered to kill.",
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
      { text: "Wash bedding once a week in hot water, at least 120°F (49°C), to reduce dust mites — check the bedding's care label first.", source: { label: "American Lung Association", url: "https://www.lung.org/clean-air/indoor-air/indoor-air-pollutants/dust-mites" } },
    ],
  },
  {
    room: "Living Areas",
    icon: "🛋️",
    tips: [
      "Check the upholstery care tag (W, S, WS or X) before using any cleaner — the tag, not the product, decides what is safe for the fabric.",
      "Use the polish the furniture maker recommends for the finish — the wrong product can cloud or strip it.",
      "Clean electronics and screens the way the device maker instructs — usually a dry or barely damp microfiber cloth, never a spray applied to the screen.",
      "Refresh area rugs with baking soda before vacuuming — natural deodorizer with no synthetic musks.",
    ],
  },
  {
    room: "Floors",
    icon: "🧹",
    tips: [
      "Mop hardwood with the pH-neutral cleaner the floor's finish maker recommends — excess water and leftover residue are what dull a finish over time.",
      "Clean grout with a grout cleaner labeled for your tile, or a hydrogen peroxide solution — test in a hidden spot first, as some stone and colored grout react.",
      "A steam mop can loosen soil on sealed tile and vinyl without added chemicals — check the flooring maker's guidance first, and do not use it on unsealed wood.",
      "Rinse mop heads in hot water after use — leftover solution in the mop ends up on the next floor.",
    ],
  },
];

// Label-reading criteria, not a class-vs-class verdict: origin of an ingredient (plant, mineral, synthetic)
// says nothing by itself about risk or performance (EPA Safer Choice FAQ), so the columns compare what a
// label says with what to check, for any product.
const comparisonRows = [
  { feature: "Ingredients", label: "A full list — or just 'cleaning agents' and 'fragrance'", check: "Is every ingredient named? Prefer full disclosure." },
  { feature: "Signal word and first aid", label: "Danger, Warning or Caution, with first-aid text", check: "Read it before use; keep every product out of children's reach whatever the word." },
  { feature: "Surface directions", label: "'Not for natural stone', 'test in a hidden area', dilution ratios", check: "Match the product to your surface and the surface maker's care guidance." },
  { feature: "Disinfecting claims", label: "'Kills 99.9% of germs'", check: "Valid only with an EPA registration number and the stated contact time; otherwise it is a cleaner." },
  { feature: "Fragrance", label: "'Fragrance', 'essential oils' or 'unscented'", check: "Both fragrance and essential oils are scents; choose unscented if anyone is sensitive." },
  { feature: "EPA logos", label: "Safer Choice (cleaners) or DfE (registered disinfectants)", check: "Voluntary EPA review of ingredients and performance; not a guarantee of zero risk." },
  { feature: "VOCs", label: "'Low VOC', or nothing at all", check: "Safer Choice products meet VOC limits; ventilate while cleaning regardless." },
  { feature: "Disposal", label: "Disposal directions, usually on the back", check: "Follow them; never mix products, and never pour concentrates down a drain or into a septic system." },
];

const howToSteps = [
  { name: "Identify Priority Rooms", text: "Start with the rooms where children or pets spend the most time — typically bedrooms, playrooms, and kitchens — because floors and low surfaces there get the most hand and paw contact." },
  { name: "Replace Bathroom Cleaners First", text: "Swap conventional toilet and tile cleaners for an EPA-registered hydrogen peroxide disinfectant and follow its contact time. Bathrooms are usually the least ventilated room, so run the fan or open a window while you clean." },
  { name: "Switch Kitchen Degreasers", text: "Replace solvent-based kitchen degreasers with citrus or plant-derived formulas, and wipe food-contact surfaces with clean water afterwards as most labels direct." },
  { name: "Update Floor Cleaning Products", text: "Replace ammonia-based floor cleaners with a pH-neutral cleaner the floor's finish maker recommends, and keep children and pets off the floor until it is dry, as the label states." },
  { name: "Reduce Synthetic Air Fresheners", text: "Replace plug-in and spray air fresheners with ventilation, a fragrance-free deodorizer such as baking soda, or nothing at all. Fragranced products are a common source of indoor VOCs." },
  { name: "Look for the EPA Safer Choice Label", text: "When buying a new cleaning product, look for the EPA Safer Choice or DfE logo. It means the ingredients were reviewed against EPA's criteria and the product passed performance testing; it is not a guarantee that any product is risk-free, so still follow the directions." },
];

const WhyEcoFriendlyPage = () => {
  const { seoHelmet } = useSEO({
    // Consensus lot (2026-09-17): explicit, documented exception to the title/meta/H1 freeze for this URL only.
    title: "Eco-Friendly Cleaning: What the Labels Mean | Capital Clean Care",
    description:
      "Learn what eco-friendly cleaning labels mean, how to check products for your surfaces, and what to ask before booking house cleaning in Maryland, DC or Virginia.",
    canonical: "https://capitalcleancare.com/why-eco-friendly-cleaning",
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout stickyQuoteHref="#quote">
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
        description="A step-by-step guide to moving a home from conventional chemical cleaners to plant-based products chosen by their labels."
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
            <Leaf className="h-3.5 w-3.5" /> Cleaning Labels, Explained
          </span>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Eco-Friendly Cleaning: How to Choose Products and Use Them
          </h1>
          {/* Mobile: CTA row before the intro paragraph so it sits in the first 360×740 viewport (same pattern as the dedicated location pages); ≥ sm unchanged order. */}
          <div className="flex flex-col">
            <p className="order-2 sm:order-1 text-lg text-muted-foreground leading-relaxed mt-6 sm:mt-0 mb-0 sm:mb-8 max-w-3xl">
              What a cleaning label can tell you, what the research does and doesn't show, and what to ask before you book — the way Capital Clean Care reads labels for the homes it cleans across Maryland, DC, and Virginia.
            </p>
            <div className="order-1 sm:order-2 flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" asChild>
                <a href="#quote">Get a Free Eco-Clean Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center border-2 border-[#2E7D32] text-[#2E7D32] font-bold px-6 py-3 rounded-md hover:bg-[#2E7D32]/5 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" /> {PHONE}
              </a>
            </div>
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
              Federal law does not require cleaning-product makers to list every ingredient; only EPA-registered disinfectants must declare their active ingredients. California's{" "}
              <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB258" target="_blank" rel="noopener noreferrer" className="text-accent underline">Cleaning Product Right to Know Act (SB 258, 2017)</a>{" "}
              requires online and on-label disclosure for products sold there, which is why many labels have improved. Even so, the single word "fragrance" can still stand for several components that are not itemized.
            </p>
            <p>
              The EPA's{" "}
              <a href="https://www.epa.gov/indoor-air-quality-iaq/inside-story-guide-indoor-air-quality" target="_blank" rel="noopener noreferrer" className="text-accent underline">guide to indoor air quality</a>{" "}
              notes that indoor levels of some pollutants <strong className="text-foreground">may be 2 to 5 times higher than outdoor levels</strong>, and lists household cleaning products among the sources of indoor volatile organic compounds (VOCs). VOCs released during cleaning linger longest in poorly ventilated rooms such as bathrooms, which is why ventilation while cleaning matters as much as the product.
            </p>
            <p>
              Children breathe more air relative to body weight than adults, spend more time on floors where residues settle, and put their hands in their mouths. That does not mean any single product harms a child; it means the exposure route is shorter, so how a floor is cleaned and dried matters more in a home with toddlers.
            </p>
            <p>
              Pets are in the same position: they walk on cleaned floors and groom by licking. Whatever is left on the floor reaches them more directly than it reaches an adult — a reason to follow label drying times, not proof that a given product has harmed a pet.
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
                      {c.source && (
                        <>
                          {" · "}
                          <a href={c.source.url} target="_blank" rel="noopener noreferrer" className="text-accent underline">Source: {c.source.label}</a>
                        </>
                      )}
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
            What a Cleaning Product Label Can Tell You
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <p>
              Not all "green" products are created equal. "Natural" and "non-toxic" are advertising claims: under the FTC's{" "}
              <a href="https://www.ftc.gov/business-guidance/resources/environmental-claims-summary-green-guides" target="_blank" rel="noopener noreferrer" className="text-accent underline">Green Guides</a>{" "}
              a seller must be able to substantiate them, but the words alone don't tell you whether a product suits your surface or your household. What does: the ingredient list, any EPA logo, the signal word, and the directions.
            </p>
            <p>
              The most useful logo on a cleaner is{" "}
              <a href="https://www.epa.gov/saferchoice/learn-about-safer-choice-label" target="_blank" rel="noopener noreferrer" className="text-accent underline font-semibold">EPA Safer Choice</a>. To carry it, every intentionally added ingredient is reviewed against EPA's criteria for human health and the environment, the product must pass performance testing for its category, and it must meet limits on VOCs and packaging. Antimicrobial products cannot carry Safer Choice; the equivalent review for registered disinfectants is EPA's{" "}
              <a href="https://www.epa.gov/pesticide-labels/learn-about-design-environment-dfe-certification" target="_blank" rel="noopener noreferrer" className="text-accent underline">Design for the Environment (DfE)</a>{" "}
              logo. Neither logo means a product is risk-free, and neither replaces the directions on the label. EPA also notes that a "natural" origin does not by itself mean lower risk.
            </p>
            <p>
              Plant-derived surfactants — typically made from coconut or corn oils — lift soil the same way petroleum-derived surfactants do: by breaking the bond between dirt and the surface. The difference is where the ingredient comes from and how it is disclosed, not a guarantee of zero residue. Wiping, rinsing and drying as the label directs is what leaves a surface clean.
            </p>
            <p>
              <a href="https://www.epa.gov/coronavirus-and-disinfectants/whats-difference-between-products-disinfect-sanitize-and-clean" target="_blank" rel="noopener noreferrer" className="text-accent underline">Cleaning, sanitizing and disinfecting</a>{" "}
              are different claims. Only an EPA-registered product can be labeled as a sanitizer or disinfectant, and only for the organisms and contact time on its label — look for the EPA registration number. A general-purpose plant-based cleaner cleans; it does not disinfect. If you need a surface disinfected, say so when you book.
            </p>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  What We Look For on a Label
                </h3>
                <ul className="space-y-1.5">
                  {[
                    "EPA Safer Choice or DfE logo, when a product in that category carries one",
                    "Full ingredient disclosure, not just 'fragrance' or 'cleaning agents'",
                    "Surfactants listed by name and a surface list that matches the home",
                    "A signal word and first-aid statement we can read before use",
                    "Directions we can follow on site: dilution, contact time, drying time",
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
              Here is what changes when products are chosen by their labels and used as directed — and what stays the same.
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
            Why Children's Exposure Is Different
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
            <p>
              Children are not small adults when it comes to chemical exposure. They breathe more air for their body weight, their organs are still developing, and their behaviors — crawling on floors, mouthing objects, spending most of the day indoors — put them in closer contact with whatever is left on low surfaces.
            </p>
            <p>
              Two observational studies are worth knowing. In the Canadian CHILD birth cohort,{" "}
              <a href="https://doi.org/10.1503/cmaj.190819" target="_blank" rel="noopener noreferrer" className="text-accent underline">Parks et al. (CMAJ, 2020)</a>{" "}
              found that infants in homes with frequent use of household cleaning products had a higher risk of recurrent wheeze and asthma by age 3. In adults,{" "}
              <a href="https://doi.org/10.1164/rccm.201706-1311OC" target="_blank" rel="noopener noreferrer" className="text-accent underline">Svanes et al. (AJRCCM, 2018)</a>{" "}
              associated regular cleaning at home, especially with sprays, with faster decline in lung function over 20 years. Both are associations, not proof that any product causes disease, and neither says anything about a particular cleaning service.
            </p>
            <p>
              Where children spend their time matters as much as which product is used. Infants and toddlers who crawl are in direct contact with the floor, and hand-to-mouth contact — normal in children under 3 — moves whatever is on that floor to their mouths. Ventilation helps with fumes; it does nothing for what is left on the floor, which is why wiping and drying as the label directs matters most in a home with a crawler.
            </p>
            <p>
              What you can do with us: tell us about infants in the home and any sensitivities before the visit so the team plans around them. Any product-specific precaution on the label — including drying time before floors are used again — takes priority over speed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { stat: "2020", label: "Parks et al., CMAJ — frequent early-life use of cleaning products associated with higher wheeze and asthma risk by age 3 (association, not cause)", url: "https://doi.org/10.1503/cmaj.190819" },
              { stat: "2018", label: "Svanes et al., AJRCCM — cleaning at home, especially with sprays, associated with faster adult lung-function decline over 20 years (association, not cause)", url: "https://doi.org/10.1164/rccm.201706-1311OC" },
            ].map((item) => (
              <div key={item.stat} className="bg-pink-50 rounded-xl p-5 text-center border border-pink-100">
                <p className="font-heading text-3xl font-bold text-pink-700 mb-1">{item.stat}</p>
                <p className="text-xs text-muted-foreground leading-snug">
                  {item.label}{" · "}
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-accent underline">Read the study</a>
                </p>
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
            How Pets Are Exposed to What Is on the Floor
          </h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-8">
            <p>
              Cats and dogs walk on every cleaned surface and groom by licking their paws and coat. Whatever settles or is left on a floor — dust, residue, a product that was not wiped up — reaches them by mouth far more directly than it reaches an adult.
            </p>
            <p>
              Some cleaning products are a specific concern for pets. The{" "}
              <a href="https://www.aspca.org/pet-care/animal-poison-control/poisonous-household-products" target="_blank" rel="noopener noreferrer" className="text-accent underline">ASPCA Animal Poison Control Center</a>{" "}
              lists household cleaners among common hazards and singles out <strong className="text-foreground">pine-oil (phenol) products</strong> — often marketed as natural — and chlorine products as concerns, cats in particular. Disinfecting wipes and sprays should be used and dried as their label directs before an animal walks on the surface.
            </p>
            <p>
              Fumes matter too. Keep pets out of the room while any strong product is used and ventilate until the smell is gone.
            </p>
            <p>
              What you can do with us: tell us about your animals before the visit so the team can plan the order of rooms, and keep pets off cleaned surfaces until they are dry. This reduces exposure; it is not a medical guarantee for any particular animal, and your veterinarian is the right source for a specific pet.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
            <h3 className="font-heading text-lg font-bold text-foreground mb-3 flex items-center gap-2">
              <PawPrint className="h-5 w-5 text-amber-600" /> Household Products the ASPCA Flags for Pets
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { name: "Pine-oil cleaners", risk: "Phenols are a listed concern for cats; keep cats off floors cleaned with them" },
                { name: "Disinfecting wipes and sprays", risk: "Use and dry as the label directs before an animal walks on the surface" },
                { name: "Chlorine bleach", risk: "Fumes irritate the airways; keep pets out until the room is aired and the floor is dry" },
                { name: "Any product while wet", risk: "Follow the label's drying and re-entry instructions; drying reduces contact, it does not remove every risk" },
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
            What the Label Says vs. What to Check
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            The same checks apply to any product, plant-based or not: where an ingredient comes from says nothing by itself about risk or performance. The label and the surface maker's guidance do.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th className="text-left px-5 py-3 font-semibold text-foreground w-1/4">Item</th>
                  <th className="text-left px-5 py-3 font-semibold text-foreground">What the label may say</th>
                  <th className="text-left px-5 py-3 font-semibold text-accent">What to check</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                    <td className="px-5 py-3 font-medium text-foreground">{row.feature}</td>
                    <td className="px-5 py-3 text-muted-foreground">{row.label}</td>
                    <td className="px-5 py-3 text-foreground">{row.check}</td>
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
            Switching to plant-based cleaning is easier room by room. These are the practices our own teams use across Maryland, DC, and Virginia; the product-specific advice always defers to the label and to the surface maker's care guidance.
          </p>
          <div className="space-y-6">
            {roomGuide.map((room) => (
              <div key={room.room} className="border border-border rounded-2xl overflow-hidden">
                <div className="bg-accent/5 px-6 py-4 flex items-center gap-3 border-b border-border">
                  <span className="text-2xl">{room.icon}</span>
                  <h3 className="font-heading text-xl font-bold text-foreground">{room.room}</h3>
                </div>
                <div className="px-6 py-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.tips.map((tip) => {
                    const t = typeof tip === "string" ? { text: tip, source: undefined } : tip;
                    return (
                      <div key={t.text} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t.text}
                          {t.source && (
                            <>
                              {" "}
                              <a href={t.source.url} target="_blank" rel="noopener noreferrer" className="text-accent underline">({t.source.label})</a>
                            </>
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-accent/5 border border-accent/20 rounded-xl">
            <p className="text-sm text-foreground">
              <strong>Want this done for you?</strong> Capital Clean Care's professional teams follow this eco protocol in every home across{" "}
              <Link to="/maryland" className="text-accent hover:underline font-medium">Maryland</Link>,{" "}
              <Link to="/washington-dc" className="text-accent hover:underline font-medium">Washington DC</Link>, and{" "}
              <Link to="/virginia" className="text-accent hover:underline font-medium">Northern Virginia</Link> — with plant-based products chosen by their labels, at no extra charge.{" "}
              <a href="#quote" className="text-accent hover:underline font-medium">Get a free quote →</a>
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
            You don't have to change everything at once. Here's the order our teams suggest for moving a home from conventional to plant-based products.
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
              The Chesapeake Bay is the largest estuary in the United States. According to the{" "}
              <a href="https://www.chesapeakebay.net/discover/bay-facts" target="_blank" rel="noopener noreferrer" className="text-accent underline">Chesapeake Bay Program</a>, its watershed covers about 64,000 square miles across parts of six states and all of Washington DC, and is home to more than 3,600 species of plants and animals. Montgomery County, Washington DC and Northern Virginia sit inside it.
            </p>
            <p>
              Excess nitrogen and phosphorus are the main drivers of the Bay's water-quality problems, and agriculture and stormwater are the largest sources according to the same program. A household's share is small — but it is the share a household controls, whether the home is on a sewer line or a septic system.
            </p>
            <p>
              The practical rules are on the label: use the dilution and quantity it calls for, follow its disposal directions, never mix products, and never pour concentrates down a drain or into a septic system. Products whose labels state <strong className="text-foreground">readily biodegradable</strong> surfactants break down more completely in treatment; that is a label claim to look for, not a promise about any home's plumbing.
            </p>
            <p>
              We are one cleaning company, not a Bay program. What we can say is what we do: products chosen by their labels and used as directed, in every home we clean in the watershed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: "🌊", stat: "64,000 mi²", label: "Chesapeake Bay watershed, across parts of six states and all of DC (Chesapeake Bay Program)" },
              { icon: "🐟", stat: "3,600+", label: "Species of plants and animals in the Bay watershed (Chesapeake Bay Program)" },
              { icon: "🏷️", stat: "Label", label: "Dilution, disposal and 'never mix' directions are the household rules that reach the water" },
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
              Montgomery County, Washington DC and Northern Virginia all sit inside the Chesapeake Bay watershed, so the household rules above apply in every home we clean, on a sewer line or a septic system.
            </p>
            <p>
              What you get from us is consistent across the region: products chosen by their labels, used as directed, with the same label drying times — whether the home is in Maryland, the District or Northern Virginia. Tell us about pets, allergies or fragrance sensitivities before the visit and the team plans around them.
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
      <GreenShield5Step showCTA={false} claims="label-based" />

      {/* ── Trust Badges ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── Internal Links / Related Pages ── */}
      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-2 text-center">Explore Our Eco-Friendly Services</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">All services use the same plant-based products, chosen by their labels — no green premium charged.</p>
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
              { label: "Eco Cleaning Tips for Maryland Homes", href: "/resources/eco-cleaning-tips-maryland-homes" },
              { label: "Eco Cleaning Tips for Winter — Maryland", href: "/resources/eco-cleaning-tips-winters-maryland" },
              { label: "Allergy-Proofing Your DMV Home", href: "/resources/allergy-proofing-home-dmv" },
              { label: "Remove Pet Hair & Odors — DMV Homes", href: "/resources/remove-pet-hair-odors-dmv-homes" },
              { label: "What Is Included in a Deep Cleaning? (Full Checklist)", href: "/resources/what-is-included-in-a-deep-cleaning" },
              { label: "Best Cleaning Schedule for Busy Families", href: "/resources/best-cleaning-schedule-busy-families-dmv" },
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
      <section className="py-16 bg-secondary scroll-mt-20" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">
              Get a Free Eco-Friendly Cleaning Quote
            </h2>
            <p className="text-muted-foreground">
              Serving Maryland, DC & Northern Virginia. Tell us about your home and we reply with a written quote.
            </p>
          </div>
          <div className="bg-accent text-white rounded-lg py-3 px-5 text-center mb-6 font-medium text-sm">
            🌿 Plant-based products, chosen by their labels, on every service — at no extra charge
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Get My Free Eco-Clean Quote →" compact />
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
