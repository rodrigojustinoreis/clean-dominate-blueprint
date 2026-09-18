import { Link } from "react-router-dom";
import { CheckCircle, Leaf, AlertTriangle, ArrowRight, Phone, PawPrint } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import { useSEO } from "@/hooks/useSEO";
import { BreadcrumbSchema, FAQSchema, HowToSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

// Closeout lot (Codex, 2026-09-17, CODEX-CLOSEOUT-BRIEF.md): informational guide, labels-first. Every answer below is
// limited to what a product label, the surface maker's guidance or a linked primary source supports. No product
// inventory, operating protocol or health benefit is claimed for the company; no medical advice; associations are not
// presented as causes. FAQ text is the FAQPage schema (same array). See CLAIMS-MATRIX in the audit folder.
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
    a: "No cleaning method removes risk entirely; what you can control is exposure. Tell us about infants in the home before the visit so the team can plan around them, and any precaution on a product's label — including drying time before floors are used again — takes priority. For questions about a specific child's sensitivities, your pediatrician is the right source.",
  },
  {
    q: "Does eco-friendly cleaning cost more?",
    a: "Cost depends on the size and condition of the home and the cleaning scope. Tell us your product preferences when requesting a written quote so availability and any costs can be confirmed before booking.",
  },
  {
    q: "Are the products safe for pets?",
    a: "No product is safe for every animal in every situation. Tell us about your pets before the visit; keep them off cleaned surfaces until dry and follow any re-entry instruction on the label. The ASPCA Animal Poison Control Center lists pine-oil (phenol) and chlorine products among household products that are a concern for pets, cats in particular. For a specific animal's sensitivities, check with your veterinarian.",
  },
  {
    q: "What's the difference between 'green' and 'EPA Safer Choice'?",
    a: "'Green' is a marketing term with no regulatory standard. EPA Safer Choice is a voluntary EPA label: every intentionally added ingredient is reviewed against EPA's human-health and environmental criteria, the product must pass performance testing for its category, and it must meet limits on VOCs and packaging. Where a product carries neither Safer Choice nor DfE, the label and its ingredient disclosure are what you have to go on.",
  },
  {
    q: "Can eco-friendly products disinfect and kill germs?",
    a: "Only if the product is EPA-registered for that purpose. Sanitizing and disinfecting are label claims: a registered product lists the organisms it is registered against and the contact time required. A general-purpose plant-based cleaner cleans; it does not disinfect. If you need a surface disinfected, say so when you book so a registered product and its contact time can be planned for that visit.",
  },
  {
    q: "Do eco-friendly products have a natural scent or no smell?",
    a: "It depends on the product. Essential-oil scents are still fragrance, and 'unscented' can still contain masking agents; EPA's Safer Choice fragrance-free criteria mean no fragrance materials or masking agents at all. Check the ingredient list for 'fragrance-free' rather than 'unscented' if anyone is sensitive, and tell us in advance if any scent is a problem so the team can plan around it.",
  },
];

const ingredientsToCheck: { name: string; risk: string; found: string; source?: { label: string; url: string } }[] = [
  {
    name: "Chlorine bleach",
    risk: "Can irritate the airways, eyes and skin, and may trigger symptoms in people with asthma. Never mix with ammonia or acids: the reaction releases toxic gases.",
    found: "Bathroom cleaners, disinfectant sprays, mold removers",
  },
  {
    name: "Ammonia",
    risk: "Can irritate the airways and eyes and cause chemical burns at high concentrations. People with asthma or COPD may be more sensitive to the fumes.",
    found: "Glass cleaners, multi-surface sprays, floor cleaners",
  },
  {
    name: "Undisclosed 'fragrance'",
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
    risk: "Formaldehyde itself is listed as known to be a human carcinogen in the U.S. National Toxicology Program's Report on Carcinogens and can irritate the eyes, nose and throat.",
    found: "Rarely listed as such; some products use preservatives that release small amounts of formaldehyde (for example DMDM hydantoin or quaternium-15) — check the ingredient list",
    source: { label: "NTP Report on Carcinogens", url: "https://ntp.niehs.nih.gov/whatwestudy/assessments/cancer/roc" },
  },
  {
    name: "Sodium lauryl sulfate (SLS)",
    risk: "A common surfactant that can irritate skin and eyes, especially with prolonged contact; some people develop contact dermatitis.",
    found: "Degreasers, dish soaps, bathroom cleaners",
  },
];

type RoomTip = string | { text: string; source: { label: string; url: string } };
// General guidance only. The surface or appliance maker's care instructions and the product label decide; nothing here is a recipe.
const roomGuide: { room: string; icon: string; tips: RoomTip[] }[] = [
  {
    room: "Kitchen",
    icon: "🍳",
    tips: [
      "Use a degreaser labeled for your stovetop and range hood; check the label before using any degreaser on aluminum, natural stone or painted surfaces.",
      "Wipe counters after food prep with a product labeled for food-contact surfaces, and rinse or wipe with water if its label says so.",
      "Clean inside the refrigerator with the cleaner the appliance maker recommends; keep acidic cleaners off gaskets and natural stone.",
      "Clean sinks with a non-abrasive cleaner the sink maker recommends — abrasive pastes can scratch stainless steel and composite sinks.",
    ],
  },
  {
    room: "Bathrooms",
    icon: "🚿",
    tips: [
      "Where a toilet or tile needs disinfecting, use an EPA-registered disinfectant labeled for that surface and keep it wet for the contact time on its label — the label, not the ingredient, defines what it is registered to kill.",
      "Remove soap scum with a bathroom cleaner labeled for your shower surface; acidic cleaners can etch natural stone and some grout, so check the label first.",
      "Clean mirrors and glass with an ammonia-free glass cleaner for streak-free results.",
      "Ventilate during and after cleaning and follow the label's re-entry directions; the absence of a smell does not mean a surface is dry or ready to use.",
    ],
  },
  {
    room: "Bedrooms",
    icon: "🛏️",
    tips: [
      "Dust surfaces with a slightly damp microfiber cloth — it traps particles rather than scattering them.",
      "Vacuum mattresses and upholstery with a HEPA-filter vacuum before cleaning hard surfaces.",
      { text: "Wash bedding once a week in hot water, at least 120°F (49°C), to reduce dust mites — check the bedding's care label first.", source: { label: "American Lung Association", url: "https://www.lung.org/clean-air/indoor-air/indoor-air-pollutants/dust-mites" } },
      "Skip fragranced fabric sprays in sleeping areas; if you use a deodorizer, look for 'fragrance-free' on the ingredient list ('unscented' can still contain masking agents) and follow its label.",
    ],
  },
  {
    room: "Living areas",
    icon: "🛋️",
    tips: [
      "Check the upholstery care tag (W, S, WS or X) before using any cleaner — the tag, not the product, decides what is safe for the fabric.",
      "Use the polish the furniture maker recommends for the finish — the wrong product can cloud or strip it.",
      "Clean electronics and screens the way the device maker instructs — usually a dry or barely damp microfiber cloth, never a spray applied to the screen.",
      "Vacuum area rugs as the rug maker recommends and test any deodorizer in a hidden corner first.",
    ],
  },
  {
    room: "Floors",
    icon: "🧹",
    tips: [
      "Mop hardwood with the pH-neutral cleaner the floor's finish maker recommends — excess water and leftover residue are what dull a finish over time.",
      "Clean grout with a grout cleaner labeled for your tile and test in a hidden spot — natural stone and colored grout react to acidic and peroxide-based cleaners.",
      "Use a steam mop only where the flooring maker allows it (sealed tile, some vinyl); never on unsealed wood, laminate joints or natural stone without the maker's guidance.",
      "Rinse mop heads in hot water after use — leftover solution in the mop ends up on the next floor.",
    ],
  },
];

// Label-reading criteria, not a class-vs-class verdict: origin of an ingredient (plant, mineral, synthetic)
// says nothing by itself about risk or performance (EPA Safer Choice FAQ), so the rows compare what a
// label says with what to check, for any product.
const comparisonRows = [
  { feature: "Ingredients", label: "A full list — or just 'cleaning agents' and 'fragrance'", check: "Is every ingredient named? Prefer full disclosure." },
  { feature: "Signal word and first aid", label: "Danger, Warning or Caution, with first-aid text", check: "Read it before use; keep every product out of children's reach whatever the word." },
  { feature: "Surface directions", label: "'Not for natural stone', 'test in a hidden area', dilution ratios", check: "Match the product to your surface and the surface maker's care guidance." },
  { feature: "Disinfecting claims", label: "'Kills 99.9% of germs'", check: "Valid only with an EPA registration number and the stated contact time; otherwise it is a cleaner." },
  { feature: "Fragrance", label: "'Fragrance', 'essential oils', 'unscented' or 'fragrance-free'", check: "Essential oils are still fragrance, and 'unscented' can still contain masking agents; EPA's Safer Choice fragrance-free criteria mean no fragrance materials or masking agents. Check the ingredient list if anyone is sensitive." },
  { feature: "EPA logos", label: "Safer Choice (cleaners) or DfE (registered disinfectants)", check: "Voluntary EPA review of ingredients and performance; not a guarantee of zero risk." },
  { feature: "VOCs", label: "'Low VOC', or nothing at all", check: "Safer Choice products meet VOC limits; ventilate while cleaning regardless." },
  { feature: "Disposal", label: "Disposal directions, usually on the back", check: "Follow them; never mix products, and never pour concentrates down a drain or into a septic system." },
];

const howToSteps = [
  { name: "Identify priority rooms", text: "Start with the rooms where children or pets spend the most time — typically bedrooms, playrooms, and kitchens — because floors and low surfaces there get the most hand and paw contact." },
  { name: "Replace bathroom cleaners first", text: "Where disinfection is needed, choose an EPA-registered disinfectant labeled for the surface and follow its contact time. Bathrooms are usually the least ventilated room, so run the fan or open a window while you clean." },
  { name: "Switch kitchen degreasers", text: "Replace solvent-based kitchen degreasers with a degreaser labeled for your surfaces, and wipe food-contact surfaces with clean water afterwards as most labels direct." },
  { name: "Update floor cleaning products", text: "Replace ammonia-based floor cleaners with the pH-neutral cleaner the floor's finish maker recommends, and keep children and pets off the floor until it is dry, as the label states." },
  { name: "Reduce synthetic air fresheners", text: "Replace plug-in and spray air fresheners with ventilation, a fragrance-free deodorizer used as its label directs, or nothing at all. 'Unscented' products can still contain masking agents, so check the ingredient list. Fragranced products are a common source of indoor VOCs." },
  { name: "Look for the EPA Safer Choice label", text: "When buying a new cleaning product, look for the EPA Safer Choice or DfE logo. It means the ingredients were reviewed against EPA's criteria and the product passed performance testing; it is not a guarantee that any product is risk-free, so still follow the directions." },
];

const TOC = [
  { id: "labels", label: "What a label can tell you" },
  { id: "ingredients", label: "Ingredients and precautions to check" },
  { id: "children-pets", label: "Children and pets" },
  { id: "compare", label: "What the label says vs. what to check" },
  { id: "rooms", label: "Room-by-room guidance" },
  { id: "switch", label: "How to switch, step by step" },
  { id: "environment", label: "Disposal and the Chesapeake Bay" },
  { id: "faq", label: "FAQ" },
  { id: "quote", label: "Request a written quote" },
];

const ext = "text-primary underline hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-sm";
// scroll-mt-32 (128px): the sticky header plus the announcement bar measured 102px at the top of the page; 96px left the first lines covered.
const H2 = "font-heading text-2xl md:text-3xl font-bold mb-4 scroll-mt-32";

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
      {/* HowToSchema emits nothing (retired rich result); kept for call-site compatibility, without an invented totalTime. */}
      <HowToSchema
        name="How to Switch to Eco-Friendly Home Cleaning"
        description="A step-by-step guide to moving a home from conventional chemical cleaners to plant-based products chosen by their labels."
        url="https://capitalcleancare.com/why-eco-friendly-cleaning"
        steps={howToSteps}
      />

      {/* ── Hero: direct intro, one primary CTA, contextual path to the service ── */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Why Eco-Friendly Cleaning" },
            ]}
            className="mb-4"
          />
          <span className="inline-flex items-center gap-2 bg-accent/10 text-primary font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full mb-3">
            <Leaf className="h-3.5 w-3.5" /> Cleaning labels, explained
          </span>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Eco-Friendly Cleaning: How to Choose Products and Use Them
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5 max-w-3xl">
            A practical guide to what a cleaning label can and cannot tell you, what to check for children, pets and your surfaces, and what to ask before you book.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote">Get a Free Eco-Clean Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Link to="/services/eco-friendly-cleaning" className={`inline-flex items-center justify-center min-h-11 px-4 py-2 font-medium ${ext}`}>
              See the eco-friendly cleaning service
            </Link>
            <a href={PHONE_HREF} className={`inline-flex items-center justify-center min-h-11 px-4 py-2 font-semibold text-[#2E7D32] ${ext}`}>
              <Phone className="h-4 w-4 mr-2" /> {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* ── In short + table of contents ── */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4 max-w-4xl grid gap-6 md:grid-cols-5">
          <div className="md:col-span-3 rounded-2xl border border-accent/20 bg-accent/5 p-5 md:p-6">
            <h2 className="font-heading text-lg font-bold text-foreground mb-3">In short</h2>
            <ul className="space-y-2 text-sm md:text-base text-foreground">
              {[
                "\"Green\", \"natural\" and \"non-toxic\" are advertising claims. The ingredient list, the EPA logo, the signal word and the directions are what tell you something.",
                "A cleaner cleans. Only an EPA-registered product disinfects, and only for the contact time on its label.",
                "Children and pets are closer to floors: drying time and re-entry directions on the label matter more than the product's origin.",
                "Match every product to the surface using the surface maker's care guidance — acidic and abrasive cleaners damage stone and finishes.",
                "Before booking: tell us about infants, pets, allergies or fragrance sensitivities, and ask for disinfection if you need it.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <nav aria-label="On this page" className="md:col-span-2 rounded-2xl border border-border bg-secondary/30 p-5">
            <p className="font-heading font-bold text-foreground mb-2 text-xs uppercase tracking-wider">On this page</p>
            <ul className="text-sm">
              {TOC.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className={`flex items-center min-h-11 py-2 ${ext}`}>{t.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ── Labels ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="labels" className={H2}>What a Cleaning Product Label Can Tell You</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Federal law does not require cleaning-product makers to list every ingredient; only EPA-registered disinfectants must declare their active ingredients. California's{" "}
              <a href="https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201720180SB258" target="_blank" rel="noopener noreferrer" className={ext}>Cleaning Product Right to Know Act (SB 258, 2017)</a>{" "}
              requires online and on-label disclosure for products sold there, which is why many labels have improved. Even so, the single word "fragrance" can still stand for several components that are not itemized.
            </p>
            <p>
              "Natural" and "non-toxic" are advertising claims: under the FTC's{" "}
              <a href="https://www.ftc.gov/business-guidance/resources/environmental-claims-summary-green-guides" target="_blank" rel="noopener noreferrer" className={ext}>Green Guides</a>{" "}
              a seller must be able to substantiate them, but the words alone don't tell you whether a product suits your surface or your household. What does: the ingredient list, any EPA logo, the signal word, and the directions.
            </p>
            <p>
              The most useful logo on a cleaner is{" "}
              <a href="https://www.epa.gov/saferchoice/learn-about-safer-choice-label" target="_blank" rel="noopener noreferrer" className={`${ext} font-semibold`}>EPA Safer Choice</a>. To carry it, every intentionally added ingredient is reviewed against EPA's criteria for human health and the environment, the product must pass performance testing for its category, and it must meet limits on VOCs and packaging. Antimicrobial products cannot carry Safer Choice; the equivalent review for registered disinfectants is EPA's{" "}
              <a href="https://www.epa.gov/pesticide-labels/learn-about-design-environment-dfe-certification" target="_blank" rel="noopener noreferrer" className={ext}>Design for the Environment (DfE)</a>{" "}
              logo. Neither logo means a product is risk-free, and neither replaces the directions on the label. EPA also notes that a "natural" origin does not by itself mean lower risk.
            </p>
            <p>
              <a href="https://www.epa.gov/coronavirus-and-disinfectants/whats-difference-between-products-disinfect-sanitize-and-clean" target="_blank" rel="noopener noreferrer" className={ext}>Cleaning, sanitizing and disinfecting</a>{" "}
              are different claims. Only an EPA-registered product can be labeled as a sanitizer or disinfectant, and only for the organisms and contact time on its label — look for the EPA registration number. A general-purpose plant-based cleaner cleans; it does not disinfect. Plant-derived surfactants lift soil the same way petroleum-derived ones do; where an ingredient comes from is not a guarantee of zero residue. Wiping, rinsing and drying as the label directs is what leaves a surface clean.
            </p>
            <p>
              Ventilation matters as much as the product. The EPA's{" "}
              <a href="https://www.epa.gov/indoor-air-quality-iaq/inside-story-guide-indoor-air-quality" target="_blank" rel="noopener noreferrer" className={ext}>guide to indoor air quality</a>{" "}
              notes that indoor levels of some pollutants may be 2 to 5 times higher than outdoor levels and lists household cleaning products among the sources of indoor VOCs, which linger longest in poorly ventilated rooms such as bathrooms.
            </p>
          </div>
          <div className="mt-6 rounded-2xl border border-accent/20 bg-accent/5 p-5">
            <h3 className="font-heading text-base font-bold text-foreground mb-2">What to check on any label</h3>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm text-foreground">
              {[
                "EPA Safer Choice or DfE logo, when a product in that category carries one",
                "Full ingredient disclosure, not just 'fragrance' or 'cleaning agents'",
                "A surface list that matches your home (stone, wood finish, grout, appliances)",
                "Signal word and first-aid statement, read before use",
                "Directions you can follow: dilution, contact time, drying and re-entry time",
                "Disposal directions and 'do not mix' warnings",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Ingredients and precautions ── */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="ingredients" className={H2}>Ingredients and Precautions to Check</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            Examples of ingredients and label information to check. None of this is medical advice: the label's precautions and your own doctor or veterinarian come first.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {ingredientsToCheck.map((c) => (
              <div key={c.name} className="rounded-xl border border-border bg-white p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{c.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{c.risk}</p>
                    <p className="text-xs text-muted-foreground/80">
                      <span className="font-medium">Found in:</span> {c.found}
                      {c.source && (
                        <>
                          {" · "}
                          <a href={c.source.url} target="_blank" rel="noopener noreferrer" className={ext}>Source: {c.source.label}</a>
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

      {/* ── Children and pets ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="children-pets" className={H2}>Children and Pets: Shorter Exposure Routes</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Children breathe more air for their body weight than adults, crawl on floors, and put their hands in their mouths. Pets walk on cleaned floors and groom by licking. Whatever is left on a floor — dust, residue, a product that was not wiped up — reaches them more directly than it reaches an adult. That does not mean a given product has harmed a child or a pet; it means wiping, drying and re-entry directions on the label matter more in those homes.
            </p>
            <p>
              Two observational studies are worth knowing. In the Canadian CHILD birth cohort,{" "}
              <a href="https://doi.org/10.1503/cmaj.190819" target="_blank" rel="noopener noreferrer" className={ext}>Parks et al. (CMAJ, 2020)</a>{" "}
              found that infants in homes with frequent use of household cleaning products had a higher risk of recurrent wheeze and asthma by age 3. In adults,{" "}
              <a href="https://doi.org/10.1164/rccm.201706-1311OC" target="_blank" rel="noopener noreferrer" className={ext}>Svanes et al. (AJRCCM, 2018)</a>{" "}
              associated regular cleaning at home, especially with sprays, with faster decline in lung function over 20 years. Both are associations, not proof that any product causes disease, and neither says anything about a particular cleaning service.
            </p>
            <p>
              For pets, the{" "}
              <a href="https://www.aspca.org/pet-care/animal-poison-control/poisonous-household-products" target="_blank" rel="noopener noreferrer" className={ext}>ASPCA Animal Poison Control Center</a>{" "}
              lists household cleaners among common hazards and singles out pine-oil (phenol) products — often marketed as natural — and chlorine products as concerns, cats in particular. Keep pets out of the room while any strong product is used, ventilate, and follow the label's re-entry directions rather than relying on the smell fading.
            </p>
            <p>
              Before a visit, tell us about infants, pets, allergies or fragrance sensitivities so the team can plan the order of rooms and drying times around them. Your pediatrician or veterinarian is the right source for a specific child or animal.
            </p>
          </div>
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h3 className="font-heading text-base font-bold text-foreground mb-3 flex items-center gap-2">
              <PawPrint className="h-4 w-4 text-amber-600" /> Household products the ASPCA flags for pets
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

      {/* ── Compare: table on md+, stacked cards on small screens ── */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="compare" className={H2}>What the Label Says vs. What to Check</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            The same checks apply to any product, plant-based or not: where an ingredient comes from says nothing by itself about risk or performance. The label and the surface maker's guidance do. On scent, EPA's{" "}
            <a href="https://www.epa.gov/saferchoice/safer-choice-criteria-fragrance-free-products" target="_blank" rel="noopener noreferrer" className={ext}>Safer Choice fragrance-free criteria</a>{" "}
            distinguish "fragrance-free" (no fragrance materials or masking agents) from "unscented", which can still contain masking agents.
          </p>
          <div className="hidden md:block overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-secondary">
                  <th scope="col" className="text-left px-5 py-3 font-semibold text-foreground w-1/4">Item</th>
                  <th scope="col" className="text-left px-5 py-3 font-semibold text-foreground">What the label may say</th>
                  <th scope="col" className="text-left px-5 py-3 font-semibold text-primary">What to check</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                    <th scope="row" className="px-5 py-3 font-medium text-foreground text-left align-top">{row.feature}</th>
                    <td className="px-5 py-3 text-muted-foreground align-top">{row.label}</td>
                    <td className="px-5 py-3 text-foreground align-top">{row.check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <dl className="md:hidden space-y-3">
            {comparisonRows.map((row) => (
              <div key={row.feature} className="rounded-xl border border-border bg-white p-4">
                <dt className="font-semibold text-foreground mb-1">{row.feature}</dt>
                <dd className="text-sm text-muted-foreground mb-1"><span className="font-medium text-foreground">Label may say:</span> {row.label}</dd>
                <dd className="text-sm text-foreground"><span className="font-medium text-primary">Check:</span> {row.check}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Room-by-room ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="rooms" className={H2}>Room-by-Room Guidance</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            General guidance for a home, not a recipe: the surface or appliance maker's care instructions and the product label decide what is appropriate, especially on natural stone, unsealed wood and sensitive finishes.
          </p>
          <div className="space-y-4">
            {roomGuide.map((room) => (
              <div key={room.room} className="border border-border rounded-2xl overflow-hidden">
                <div className="bg-accent/5 px-5 py-3 flex items-center gap-3 border-b border-border">
                  <span className="text-xl" aria-hidden="true">{room.icon}</span>
                  <h3 className="font-heading text-lg font-bold text-foreground">{room.room}</h3>
                </div>
                <div className="px-5 py-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {room.tips.map((tip) => {
                    const t = typeof tip === "string" ? { text: tip, source: undefined } : tip;
                    return (
                      <div key={t.text} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t.text}
                          {t.source && (
                            <>
                              {" "}
                              <a href={t.source.url} target="_blank" rel="noopener noreferrer" className={ext}>({t.source.label})</a>
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
          <div className="mt-6 p-5 bg-accent/5 border border-accent/20 rounded-xl text-sm text-foreground">
            <strong>Want this done for you?</strong> Capital Clean Care cleans homes across{" "}
            <Link to="/maryland" className={ext}>Maryland</Link>,{" "}
            <Link to="/washington-dc" className={ext}>Washington DC</Link> and{" "}
            <Link to="/virginia" className={ext}>Northern Virginia</Link> with plant-based products chosen by their labels. See the{" "}
            <Link to="/services/eco-friendly-cleaning" className={ext}>eco-friendly cleaning service</Link> or{" "}
            <a href="#quote" className={ext}>request a written quote</a>.
          </div>
        </div>
      </section>

      {/* ── How to switch ── */}
      <section className="py-10 md:py-14 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="switch" className={H2}>How to Switch Your Home to Eco-Friendly Cleaning</h2>
          <p className="text-muted-foreground mb-6 max-w-3xl">
            You don't have to change everything at once. A workable order, one room type at a time.
          </p>
          <ol className="space-y-3">
            {howToSteps.map((step, i) => (
              <li key={step.name} className="flex items-start gap-4 p-4 bg-white border border-border rounded-xl">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-white font-bold text-sm" aria-hidden="true">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-foreground mb-1">{step.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Disposal and the watershed ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="environment" className={H2}>Disposal and the Chesapeake Bay Watershed</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Montgomery County, Washington DC and Northern Virginia sit inside the Chesapeake Bay watershed. According to the{" "}
              <a href="https://www.chesapeakebay.net/discover/bay-facts" target="_blank" rel="noopener noreferrer" className={ext}>Chesapeake Bay Program</a>, the watershed covers about 64,000 square miles across parts of six states and all of DC, and excess nitrogen and phosphorus — mostly from agriculture and stormwater — are the main drivers of its water-quality problems. A household's share is small, but it is the share a household controls.
            </p>
            <p>
              What a home can do is on the label: use the dilution and quantity it calls for, follow its disposal directions, never mix products, and never pour concentrates down a drain or into a septic system. "Readily biodegradable" is a label claim about the surfactant, not a promise about how any treatment plant or septic system performs. Where a product does not state disposal directions, your county's household hazardous waste program is the right place to ask.
            </p>
          </div>
        </div>
      </section>

      {/* ── Trust badges (shared, unchanged) ── */}
      <TrustBadges compact withBackground={false} />

      {/* ── Related services and guides ── */}
      <section className="py-10 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-2 text-center">Related Services and Guides</h2>
          <p className="text-center text-muted-foreground text-sm mb-6">
            Serving <Link to="/maryland" className={ext}>Maryland</Link>, <Link to="/washington-dc" className={ext}>Washington DC</Link> and <Link to="/virginia" className={ext}>Northern Virginia</Link>.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
            {[
              { label: "Eco-Friendly Cleaning Service", href: "/services/eco-friendly-cleaning" },
              { label: "Deep Cleaning", href: "/services/deep-cleaning" },
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
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-white hover:border-accent hover:shadow-sm transition-all text-sm font-medium text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
          <h3 className="font-heading text-lg font-bold mb-3 text-center">Related Guides</h3>
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
                className="flex items-center gap-2 px-4 py-3 rounded-lg border border-border bg-white hover:border-accent hover:shadow-sm transition-all text-sm font-medium text-foreground hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 id="faq" className={`${H2} text-center`}>Eco-Friendly Cleaning FAQ</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* ── Quote form ── */}
      <section className="py-12 bg-secondary scroll-mt-32" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              Request a Written Eco-Friendly Cleaning Quote
            </h2>
            <p className="text-muted-foreground">
              Tell us about your home, pets and any sensitivities, and we reply with a written quote. Tell us if disinfection is needed so availability and requirements can be confirmed before the visit.
            </p>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm submitLabel="Get My Free Eco-Clean Quote →" compact />
            </CardContent>
          </Card>
          <p className="text-center text-xs text-muted-foreground mt-4">
            Or call <a href={PHONE_HREF} className={`font-semibold ${ext}`}>{PHONE}</a> — calls answered 24/7. Prefer the service page? <Link to="/services/eco-friendly-cleaning" className={ext}>Eco-friendly cleaning service</Link>.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default WhyEcoFriendlyPage;
