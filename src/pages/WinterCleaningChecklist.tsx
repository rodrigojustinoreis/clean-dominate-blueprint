import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, Wind, ArrowDownToLine, Filter, Footprints, FileText, Sparkles, Droplets, Leaf, ShieldCheck, CheckCircle, type LucideIcon } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import QuoteForm from "@/components/QuoteForm";
import RelatedPosts from "@/components/blog/RelatedPosts";
import HomeTrustMarquee from "@/components/home/HomeTrustMarquee";
import { useSEO } from "@/hooks/useSEO";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import { trackPhoneClick } from "@/lib/analytics";
import { isIndexable } from "@/data/related-content";
import { WinterProgress, WinterJumpNav, WinterChecklist } from "@/components/blog/WinterGuideInteractive";

/**
 * /resources/eco-cleaning-tips-winters-maryland: Winter Cleaning Checklist (2026-10-12).
 * Dedicated page in the post-construction service page's visual language (owner request), replacing
 * the BlogPost body for this slug. Same URL; original publication date 2026-01-15 kept.
 * Copy: Rodrigo Reis's own account of the team's winter process (Codex V3 package,
 * capitalcleancare.com-audit/winter-content-package-2026-10-11), re-edited for plain English. Photos are
 * the team's own; captions say only what they show. Tailwind only (a <style> element in page JSX breaks
 * hydration here). No new claims: services, filters, purifiers and costs depend on the written quote.
 */

const SLUG = "eco-cleaning-tips-winters-maryland";
const URL = `https://capitalcleancare.com/resources/${SLUG}`;
const H1 = "Winter Cleaning Checklist for Maryland, DC & Northern Virginia Homes";
const DESCRIPTION = "Use our winter cleaning checklist for Maryland, DC and Northern Virginia homes. Tackle dust, floors and filters, then request a custom cleaning quote.";
const DATE_PUBLISHED = "2026-01-15";
const IMG = "/images/blog/winter-cleaning";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";
const GREEN = "#2E7D32";

const EPA_AIR = "https://www.epa.gov/indoor-air-quality-iaq/guide-air-cleaners-home";
const EPA_DUCTS = "https://www.epa.gov/indoor-air-quality-iaq/should-you-have-air-ducts-your-home-cleaned";
const EPA_MOLD = "https://www.epa.gov/mold/brief-guide-mold-moisture-and-your-home";
const EPA_SC = "https://www.epa.gov/saferchoice";
const NWFA = "https://woodfloors.org/maintenance/";
const CRI = "https://carpet-rug.org/wp-content/uploads/2019/03/CRI-205-Residential.pdf";

const FAQS = [
  { q: "Why do you clean from the top down?", a: "Dust you knock off a high surface lands on whatever is below it. Doing ceilings, fans, curtains and trim before floors and carpets means less rework. It does not mean no dust will ever settle again." },
  { q: "How often should I change my air filter in winter?", a: "Follow the equipment and filter maker's instructions. I suggest looking at an accessible filter once a month during heating season and replacing it when it is due, not on a fixed monthly schedule. If you are not sure of the size, rating or how to reach it safely, ask an HVAC professional." },
  { q: "Is cleaning vent covers the same as air duct cleaning?", a: "No. We wash covers that come off safely and clean the surface dust around them. We do not clean inside the duct system. A suspected problem inside the system needs an HVAC or duct specialist." },
  { q: "Can carpets be cleaned in winter?", a: "Yes, when the carpet suits the method and the room can dry properly. Talk through the rooms, the method and when you need the space back before you book." },
  { q: "How do you dry carpet after cleaning in winter?", a: "Keep air moving with fans as directed, keep the heat on, do not shut the room up while the carpet is damp, and stay off it until it is dry. Open a window only if the weather allows. If drying stalls, call the provider. The Carpet and Rug Institute's residential cleaning standard covers these drying practices." },
  { q: "Does every bedroom need a HEPA air purifier?", a: "No. A purifier is an optional extra for rooms where you want more filtration. It does not replace dusting or fix a moisture problem. If you add one, size it to the room (its CADR) and keep up with the filter." },
  { q: "Are replacement filters and purifiers included in the price?", a: "Only if the written quote lists them. You can book the cleaning without buying a purifier or adding every task on this checklist." },
  { q: "How long does a Winter-Ready Home Reset take?", a: "It depends on the rooms, their condition, how many filters and vent covers there are, and the carpet areas. We confirm the scope before scheduling. Carpet drying is separate: the visit can end before the carpet is ready to walk on." },
];

const PROOFS: { icon: LucideIcon; t: string }[] = [
  { icon: Wind, t: "Dust out first, filtration second" },
  { icon: ArrowDownToLine, t: "Top-to-bottom order in every room" },
  { icon: Sparkles, t: "HEPA-filter vacuums on every visit" },
  { icon: FileText, t: "Written scope before we start" },
];

const CHECKLIST: [string, string, string][] = [
  ["HVAC filters", "Find each filter, check it and replace the ones that are due.", "The right size and rating for the system, and safe access."],
  ["Vent covers", "Take off the covers that come off safely, wash them and let them dry before they go back.", "Material, finish and how the cover is installed."],
  ["Dust, top to bottom", "Work from the ceiling down with HEPA-filter vacuums and the right tools.", "Delicate surfaces, fabric care labels and reach."],
  ["Carpets", "Vacuum first. Extraction, if it suits the carpet, comes after the dusty work.", "Material, stains and how the room will dry."],
  ["Products", "Match the product to each surface for the whole visit.", "Surface and label directions."],
  ["Room purifier (optional)", "Supply and set up a portable HEPA unit if you choose one.", "Room size, placement and the cost of the unit and filters."],
  ["Entryway", "Keep boots, grit, slush and water near the door.", "Mats that suit the floor, and quick cleanup."],
  ["Upkeep", "Check dust, filters and busy areas again during the season.", "Your household and the equipment instructions."],
];

const DECIDE = [
  { t: "Dust on surfaces you can reach", tag: "Clean it", d: "Dust on a vent cover, door trim or baseboard goes on the cleaning list. Work from high to low and follow the material's care directions. A dusty cover on its own is not a reason to pay for whole-system duct cleaning." },
  { t: "A filter you cannot identify", tag: "Check the spec", d: "Look at the equipment instructions and any label you can see safely. If the size, rating or access is unclear, ask an HVAC professional before replacing it. Do not open equipment panels just to get details for a cleaning quote." },
  { t: "Damp, musty or possible mold", tag: "Find the cause", d: "Ongoing moisture, a musty smell or suspected mold needs a proper assessment. Fragrance will not fix it, and neither will routine cleaning or a purifier. House cleaning is not a mold diagnosis or remediation service." },
];

const H2 = "font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-[-0.02em] text-foreground";
const EYEBROW = "text-xs font-bold uppercase tracking-[0.18em] text-[#2E7D32]";
const P = "text-[17px] leading-relaxed text-muted-foreground";

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="font-medium text-primary underline underline-offset-4 hover:no-underline">{children}</a>
);
const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="font-medium text-primary underline underline-offset-4 hover:no-underline">{children}</Link>
);

const StepPhoto = ({ base, small, large, w, h, alt, caption }: { base: string; small: number; large: number; w: number; h: number; alt: string; caption: string }) => (
  <figure className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
    <img
      src={`${IMG}/${base}-${large}.webp`}
      srcSet={`${IMG}/${base}-${small}.webp ${small}w, ${IMG}/${base}-${large}.webp ${large}w`}
      sizes="(min-width: 1024px) 460px, 100vw"
      alt={alt}
      width={w}
      height={h}
      loading="lazy"
      decoding="async"
      className="h-auto w-full"
    />
    <figcaption className="px-4 py-3 text-sm leading-snug text-muted-foreground">{caption}</figcaption>
  </figure>
);

type Step = { n: string; id: string; icon: LucideIcon; title: string; body: React.ReactNode; photo?: React.ReactNode };

const STEPS: Step[] = [
  {
    n: "01", id: "winter-step-1", icon: Filter, title: "Find and check the HVAC filters",
    body: (
      <>
        <p>We start by finding the filters that are part of the visit. Many homes have more than one, and they do not always take the same size or type. The question is not "which filter looks strongest?" but "which one is right for this system?"</p>
        <p>We check the filters we can reach and replace the ones whose condition and maintenance schedule call for it, instead of swapping every filter because it is fall. The EPA recommends a MERV 13 filter, or the highest rating the system can handle (<A href={EPA_AIR}>EPA</A>). A filter that fits the slot is not automatically the right one, so if the specification is unclear, an HVAC professional should confirm it.</p>
        <p>Doing it yourself? Follow the manufacturer's directions for shutting the system off and reaching the filter. Changing a filter is not a reason to open other panels or attempt repairs.</p>
      </>
    ),
  },
  {
    n: "02", id: "winter-step-2", icon: Droplets, title: "Wash the vent covers, not the ducts",
    body: (
      <>
        <p>Next come the supply registers and return grilles. When the material, finish and installation allow it, we take the cover off, wash it and let it dry completely before putting it back. Some covers need a gentler method, and not every cover should be soaked.</p>
        <p>We keep water out of the opening and only vacuum the dust we can reach at the surface. We do not go deep into the ducts, and washing a grille does not clean the air system. The EPA does not recommend routine duct cleaning for every home (<A href={EPA_DUCTS}>EPA on air duct cleaning</A>). Mold, water damage or unusual buildup inside the system calls for a specialist, not a harder scrub of the cover.</p>
      </>
    ),
    photo: <StepPhoto base="washing-removable-vent-cover" small={480} large={960} w={960} h={720} alt="Capital Clean Care team member washing a removable vent cover in a sink" caption="Washing a removable vent cover. This is cover cleaning, not duct cleaning or a filter change." />,
  },
  {
    n: "03", id: "winter-step-3", icon: ArrowDownToLine, title: "Dust each room from the top down",
    body: (
      <>
        <p>This is the detailed part of the reset. We work down through the room so dust from higher surfaces does not land on a floor we already finished. Depending on the materials and what we agreed to reach, that covers:</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-[#2E7D32]">
          <li>Ceiling corners, cobwebs and the dust line above doors.</li>
          <li>Fan blades and light fixtures we can reach, switched off first.</li>
          <li>Curtain tops and drapes, following their care labels.</li>
          <li>Window frames, shelves, cabinet tops and door trim.</li>
          <li>Baseboards and the reachable spaces beside and under furniture.</li>
        </ul>
        <p>Our team uses vacuums with HEPA filtration for this work. The right attachment and a well-kept machine still matter: a good filter does not make every technique right for every material.</p>
        <p>If you are doing this yourself, start with one room and work from high to low. Do not stand on a chair, move heavy furniture alone or wash a delicate curtain without reading its label. If you book us, mention the spots that are hard to reach so we can plan for them. More on dust: <L to="/resources/can-house-dust-make-you-sick">Can house dust make you sick?</L></p>
      </>
    ),
    photo: <StepPhoto base="cleaning-upper-door-panel" small={480} large={960} w={960} h={1280} alt="Capital Clean Care team member wiping the upper panel of an interior door" caption="Cleaning the upper panel of a door before the lower areas." />,
  },
  {
    n: "04", id: "winter-step-4", icon: Footprints, title: "Leave carpet extraction for after the dusty work",
    body: (
      <>
        <p>With carpets in winter, the order and the drying plan go together. We vacuum the loose soil first. When extraction suits the carpet and is part of the visit, it comes after the work above, not before the fan blades and curtain tops.</p>
        <p>Not every carpet needs extraction every fall. The material, backing, condition and care instructions decide it, and delicate rugs may need a specialist. For single spills, our <L to="/resources/carpet-stain-guide-pets-wine-milk">carpet stain guide</L> helps you avoid trying one product after another.</p>
        <p>Tell us when you need the room back. If guests arrive that evening, we talk about drying and access before booking: air movement, moving furniture and when the carpet can be walked on.</p>
        <p><strong className="text-foreground">The goal is for the carpet to dry promptly, not to stay damp for two days.</strong> The EPA's 24 to 48 hour figure is about drying materials after water damage (<A href={EPA_MOLD}>EPA guide to mold and moisture</A>), not a target for a cleaning visit. Follow the carpet maker's and the cleaner's directions, and call the provider if drying is not going as expected.</p>
      </>
    ),
    photo: <StepPhoto base="vacuuming-before-carpet-work" small={380} large={570} w={570} h={760} alt="Capital Clean Care employee vacuuming upholstered furniture in a living room" caption="Vacuuming upholstery and loose dust before any carpet or floor work." />,
  },
  {
    n: "05", id: "winter-step-5", icon: Leaf, title: "Use products that suit the surface",
    body: (
      <>
        <p>Our team uses EPA Safer Choice certified products in our work (<L to="/why-eco-friendly-cleaning">why we clean this way</L>). We pick the product for the material and follow the label, including dilution and ventilation. A cleaner that is right for one finish may be wrong for another.</p>
        <p>Safer Choice identifies products whose ingredients meet its criteria (<A href={EPA_SC}>EPA Safer Choice</A>). It does not certify Capital Clean Care as a company, and it does not make a product risk-free. A cleaner is only a disinfectant if its label says so.</p>
        <p>Products are step 5 in this list, but we choose them for every step, including the surface and carpet work above. Tell us about fragrance preferences, delicate finishes and any products you do not want used. At home, never mix chemicals or make a solution stronger than the label says.</p>
      </>
    ),
  },
  {
    n: "06", id: "winter-step-6", icon: Wind, title: "Add a bedroom HEPA purifier when it makes sense",
    body: (
      <>
        <p>After the cleaning, some homeowners want more filtration in certain rooms. We can supply and set up portable HEPA air purifiers. Bedrooms are a good place to consider because of the hours people spend there, but not every bedroom needs a new appliance.</p>
        <p>The EPA advises matching the purifier's clean air delivery rate (CADR) to the room (<A href={EPA_AIR}>EPA</A>). Check the maker's room-size guidance, keep the airflow clear of curtains and furniture, and keep up with the filter. Avoid devices that produce ozone on purpose.</p>
        <p>The principle stays the same: <strong className="text-foreground">clean the surfaces first, then use filtration where it helps.</strong> We do not promise allergy relief or the removal of every indoor pollutant. If you choose a purifier, the model, quantity and cost go on the quote.</p>
      </>
    ),
  },
];

const JUMP: [string, string][] = [
  ["winter-checklist", "Checklist"],
  ["winter-decide", "Clean or call?"],
  ["winter-steps", "The 6 steps"],
  ["winter-step-3", "Top-down dusting"],
  ["winter-entry", "Front door"],
  ["winter-quote", "Your quote"],
  ["winter-faq", "FAQ"],
];

const WinterCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    // 56-character SERP title; the H1 keeps "Maryland ... Homes".
    title: "Winter Cleaning Checklist for MD, DC & Northern Virginia",
    description: DESCRIPTION,
    canonical: URL,
    ogType: "article",
    ogImage: `https://capitalcleancare.com${IMG}/team-cleaning-living-room-840.webp`,
  });

  return (
    <Layout>
      {seoHelmet}
      <WinterProgress />
      <ArticleSchema
        title={H1}
        description={DESCRIPTION}
        url={URL}
        datePublished={DATE_PUBLISHED}
        image={`${IMG}/team-cleaning-living-room-840.webp`}
        imageWidth={840}
        imageHeight={1111}
        imageCaption="Capital Clean Care team cleaning a living room floor and window"
        about={["Winter cleaning", "Dust removal", "HVAC filters", "Carpet cleaning", "Maryland", "Washington, DC", "Northern Virginia"]}
      />
      <FAQSchema faqs={FAQS} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: H1, href: URL }]} />

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#EAF6EA] via-background to-accent/5 pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Winter Cleaning Checklist" }]} className="mb-6" />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2E7D32]/20 bg-white px-3.5 py-1.5 shadow-sm">
                <span className="flex gap-0.5" aria-hidden="true">{Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</span>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· Google reviews</span>
              </div>
              <p className={`${EYEBROW} mb-3`}>Winter guide · Maryland, DC &amp; Northern Virginia</p>
              <h1 className="mb-5 font-heading text-4xl font-bold leading-[1.1] md:text-5xl">{H1}</h1>
              <p className="mb-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Most winter lists stop at the gutters, the pipes and the furnace. This one starts inside the house: get the built-up dust out first, in the right order, then decide what extra filtration is worth adding.
              </p>
              <p className="mb-7 text-xs uppercase tracking-widest text-muted-foreground">
                By <Link to="/about" className="font-semibold text-foreground hover:underline">Rodrigo Reis</Link>, founder · <time dateTime={DATE_PUBLISHED}>January 15, 2026</time>
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <a href="#quote" className="inline-flex items-center justify-center rounded-lg bg-[#2E7D32] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[#2E7D32]/20 transition-colors hover:bg-[#1B5E20]">
                  Get My Winter Cleaning Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
                <a href={PHONE_HREF} onClick={() => trackPhoneClick("winter_guide_hero")} className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border-2 border-[#2E7D32] px-6 py-3.5 text-base font-bold text-[#2E7D32] transition-colors hover:bg-[#2E7D32]/5">
                  <Phone className="mr-2 h-4 w-4 shrink-0" aria-hidden="true" /> Call&nbsp;{PHONE}
                </a>
              </div>
              <HomeTrustMarquee className="-mt-1 max-w-xl" pxPerSecond={28} trackClassName="gap-6 py-1 sm:gap-8" />
            </div>
            <figure className="relative mx-auto w-full max-w-sm lg:max-w-none lg:ps-4">
              <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
                <img
                  src={`${IMG}/team-cleaning-living-room-840.webp`}
                  srcSet={`${IMG}/team-cleaning-living-room-420.webp 420w, ${IMG}/team-cleaning-living-room-840.webp 840w`}
                  sizes="(min-width: 1024px) 440px, 100vw"
                  alt="Two Capital Clean Care team members cleaning a living room floor and window"
                  width={840}
                  height={1111}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm lg:left-8">
                <span className="font-heading text-3xl font-extrabold leading-none text-[#2E7D32]">6</span>
                <span className="text-xs leading-tight text-muted-foreground">steps, top to bottom,<br />in the order we work</span>
              </div>
              <figcaption className="mt-8 text-center text-xs text-muted-foreground">Our team cleaning a living room floor and window. The photos in this guide show individual tasks, not one complete winter visit.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Proof strip ── */}
      <section className="border-b border-border bg-[#2E7D32]/[0.07]">
        <div className="container mx-auto grid max-w-6xl gap-x-4 gap-y-3 px-4 py-6 sm:grid-cols-2 md:grid-cols-4 md:py-7">
          {PROOFS.map((f) => (
            <div key={f.t} className="flex items-center gap-3">
              <f.icon className="h-6 w-6 shrink-0 text-[#2E7D32]" aria-hidden="true" />
              <span className="text-sm font-semibold leading-snug text-foreground">{f.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick answer + owner's opening ── */}
      <section aria-labelledby="winter-answer" className="border-b border-border bg-card py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-[#2E7D32]/25 bg-[#F4FAF4] p-6 shadow-sm md:p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">Quick answer</span>
            <h2 id="winter-answer" className="mb-3 mt-2 font-heading text-2xl font-bold md:text-3xl">What goes on a winter cleaning checklist?</h2>
            <p className="text-[17px] leading-relaxed text-foreground md:text-lg">
              Check your HVAC filters and replace the ones that are due, using the size and rating your system calls for. Wash the vent covers that come off safely. Dust each room from the top down, vacuum, and leave carpet extraction for last with a plan for drying. Use products that suit each surface. If you want more filtration, a HEPA purifier sized for the room can help in a bedroom, but it does not replace the cleaning.
            </p>
          </div>

          <div className="mt-10 space-y-4 text-[17px] leading-relaxed text-foreground">
            <p>Every fall the same reminders come back: clean the gutters, protect the pipes, service the furnace. Those jobs matter. But I also want homeowners to look inside, at the tops of the curtains, the fan blades, the return grilles and the carpets the family walks on every day.</p>
            <p>Our team cleans homes in Montgomery County and around the DMV every week. When we get a home ready for winter, the rule is simple: <strong>take out the dust that has built up first, then think about what filtration can add.</strong> A better filter will not clean a baseboard. An air purifier will not pull dirt out of a carpet.</p>
            <p>That is the idea behind our Winter-Ready Home Reset. Below is the order our team follows, why the order matters, and what you can do yourself.</p>
          </div>

        </div>
      </section>

      <WinterJumpNav items={JUMP} />

      {/* ── Why + checklist ── */}
      <section id="winter-checklist" className="scroll-mt-32 md:scroll-mt-44 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="mb-10 max-w-3xl">
            <p className={`${EYEBROW} mb-2`}>Why an indoor plan</p>
            <h2 className={`${H2} mb-4`}>Servicing the furnace and cleaning the house are two different jobs</h2>
            <p className={P}>A furnace tune-up does not wipe shelves, vacuum curtains or pick up the grit that comes in on boots. Both are worth doing before the holidays fill the calendar. The EPA describes air filtration as a supplement to removing the sources of pollutants and bringing in clean outdoor air (<A href={EPA_AIR}>EPA guide to air cleaners in the home</A>). That is how we work: remove the dirt we can reach instead of expecting a machine to do the whole job. This guide is about cleaning. It does not diagnose indoor air problems or promise to remove every particle.</p>
          </div>

          <p className={`${EYEBROW} mb-2`}>The checklist</p>
          <h2 className={`${H2} mb-6`}>Your winter house cleaning checklist at a glance</h2>
          <p className="mb-5 text-sm text-muted-foreground">Tick each task as you finish it. Your progress stays on this device.</p>
          <WinterChecklist rows={CHECKLIST} />
          <p className="mt-4 text-sm text-muted-foreground">Not every home needs every task. Your quote lists the work, any replacement filters and any purifier you choose.</p>
        </div>
      </section>

      {/* ── Clean, replace or call a specialist ── */}
      <section id="winter-decide" className="scroll-mt-32 md:scroll-mt-44 border-t border-border bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <p className={`${EYEBROW} mb-2`}>Before you add a task</p>
          <h2 className={`${H2} mb-8`}>Clean it, replace it or call a specialist?</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {DECIDE.map((c) => (
              <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <span className="mb-3 inline-block rounded-full bg-[#2E7D32]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2E7D32]">{c.tag}</span>
                <h3 className="mb-2 font-heading text-lg font-bold text-foreground">{c.t}</h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The six steps ── */}
      <section id="winter-steps" className="scroll-mt-32 md:scroll-mt-44 py-12 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className={`${EYEBROW} mb-2`}>Our process</p>
            <h2 className={H2}>The Winter-Ready Home Reset, step by step</h2>
            <p className={`${P} mt-3`}>The order our team follows for the work included in a visit, from the air system to the floor.</p>
          </div>
          <ol className="space-y-8">
            {STEPS.map((s) => (
              <li key={s.n} id={s.id} className="scroll-mt-32 md:scroll-mt-44">
                <article className={`grid gap-8 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10 ${s.photo ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-start" : ""}`}>
                  <div className="min-w-0">
                    <div className="mb-4 flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2E7D32] font-heading text-lg font-bold text-white shadow-md shadow-[#2E7D32]/25">{s.n}</span>
                      <s.icon className="h-6 w-6 text-[#2E7D32]" aria-hidden="true" />
                    </div>
                    <h3 className="mb-4 font-heading text-xl font-bold text-foreground md:text-2xl">Step {Number(s.n)}: {s.title}</h3>
                    <div className="space-y-4 text-[16px] leading-relaxed text-muted-foreground">{s.body}</div>
                  </div>
                  {s.photo && <div className="mx-auto w-full max-w-sm lg:max-w-none">{s.photo}</div>}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="bg-[#1B3A2A] py-12 text-white md:py-14">
        <div className="container mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">Want us to do the Winter-Ready Home Reset?</h2>
            <p className="mt-2 text-white/80">Pick the steps your home needs. We confirm the scope and the quote in writing before we schedule.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="#quote" className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-bold text-[#1B3A2A] transition-colors hover:bg-white/90">Get My Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></a>
            <a href={PHONE_HREF} onClick={() => trackPhoneClick("winter_guide_band")} className="inline-flex items-center justify-center rounded-lg border-2 border-white/50 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"><Phone className="mr-2 h-4 w-4" aria-hidden="true" /> {PHONE}</a>
          </div>
        </div>
      </section>

      {/* ── Front door + between visits ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-2">
          <div id="winter-entry" className="scroll-mt-32 md:scroll-mt-44 rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <p className={`${EYEBROW} mb-2`}>Entryway</p>
            <h2 className="mb-4 font-heading text-2xl font-bold">Don't forget the front door</h2>
            <img src={`${IMG}/mopping-wood-floor-570.webp`} srcSet={`${IMG}/mopping-wood-floor-380.webp 380w, ${IMG}/mopping-wood-floor-570.webp 570w`} sizes="(min-width: 768px) 320px, 100vw" alt="Capital Clean Care employee mopping a hardwood floor" width={570} height={760} loading="lazy" decoding="async" className="mb-5 aspect-[4/3] w-full rounded-2xl object-cover" />
            <div className="space-y-4 text-[16px] leading-relaxed text-muted-foreground">
              <p>The reset deals with the dirt that has built up. The entryway is where you keep the next round out. Give wet boots a tray, use mats with a backing that suits your floor, and clean the mats before trapped moisture becomes a problem of its own.</p>
              <p>Sweep up loose grit before you wipe, and use a cleaner made for that floor and finish. Vinegar and water is not right for every wood, stone or carpet. The National Wood Flooring Association recommends finish-appropriate cleaners and advises against wet or steam mops on wood (<A href={NWFA}>NWFA floor maintenance</A>). Wipe up water quickly. If salt residue stays, check the flooring maker's guidance instead of soaking the spot.</p>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
            <p className={`${EYEBROW} mb-2`}>Between visits</p>
            <h2 className="mb-4 font-heading text-2xl font-bold">Winter cleaning tips between visits</h2>
            <div className="space-y-4 text-[16px] leading-relaxed text-muted-foreground">
              <p>For filters you can reach, I recommend a quick look once a month from November through March, as long as the equipment instructions allow safe access. That is a reminder to check, not to replace every month. The manufacturer's instructions come first.</p>
              <p>Between visits, keep up with the simple things: entry mats, spills, vacuuming and surfaces that look dusty. Let pets, the number of people at home and the rooms you actually use set the routine. Condensation, a musty smell or lasting damp need their cause fixed, not another air freshener.</p>
              <p>Late October or November is a good time to plan a reset, before guests and busy weeks. It is not a weather deadline for every home in Maryland, DC or Northern Virginia, so book around your own maintenance and plans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What the quote includes + limits ── */}
      <section id="winter-quote" className="scroll-mt-32 md:scroll-mt-44 border-t border-border bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div>
            <p className={`${EYEBROW} mb-2`}>Your quote</p>
            <h2 className={`${H2} mb-4`}>What should your winter cleaning quote include?</h2>
            <p className={`${P} mb-5`}>A quote should describe the work, not leave you guessing from a package name. Our Winter-Ready Home Reset combines the steps above to fit your home and the scope we agree on. Check that it covers:</p>
            <ul className="space-y-3">
              {["The rooms, surfaces and vent covers to be cleaned.", "Filter sizes and quantities, who supplies them and any charge.", "Carpet areas, material limits, furniture moving and the drying plan.", "Purifier model, quantity, cost, setup and future filter costs, if you choose one.", "Access limits, exclusions and aftercare."].map((x) => (
                <li key={x} className="flex items-start gap-3 rounded-xl bg-white p-3.5 text-[15px] text-foreground shadow-sm"><CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2E7D32]" aria-hidden="true" />{x}</li>
              ))}
            </ul>
            <p className={`${P} mt-6`}>To help us prepare, tell us your priority rooms, any delicate surfaces and when you need carpeted rooms back. If it is safe and easy, have photos of the vent covers or the filter label ready. Do not remove a panel, climb or move heavy furniture to get them.</p>
            <p className={`${P} mt-4`}>For a full room-by-room clean, see our <L to="/services/deep-cleaning">deep cleaning service</L>, or <L to="/locations/rockville-md/deep-cleaning">deep cleaning in Rockville</L> if you are local.</p>
          </div>
          <aside className="self-start rounded-3xl border border-amber-200 bg-amber-50 p-6 md:p-8">
            <ShieldCheck className="mb-3 h-7 w-7 text-amber-700" aria-hidden="true" />
            <h3 className="mb-3 font-heading text-lg font-bold text-foreground">Not part of a house cleaning</h3>
            <p className="text-[15px] leading-relaxed text-foreground/80">Furnace repairs, combustion safety, inside-the-duct cleaning, mold remediation and chimney work. Book those with a qualified provider, so the cleaning and the maintenance work together.</p>
          </aside>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="winter-faq" className="scroll-mt-32 md:scroll-mt-44 py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className={`${H2} mb-8 text-center`}>Winter cleaning questions</h2>
          <FAQ faqs={FAQS} />
        </div>
      </section>

      {/* ── Quote form (owner rule 2026-10-11: credentials carousel on the form) ── */}
      <section id="quote" className="scroll-mt-20 bg-secondary py-16 md:py-20">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-3 font-heading text-3xl font-bold">Get Your Winter Cleaning Quote</h2>
            <p className="text-muted-foreground">Capital Clean Care is based in Silver Spring and cleans homes in Maryland, Washington, DC and Northern Virginia. Tell us the rooms, the carpets and any filters or vent covers you want included. You do not have to pick every service.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <QuoteForm defaultService="deep" trustVariant="credentials-row" trustMarqueeSpeed={28} />
          </div>
        </div>
      </section>

      {/* ── About this guide + sources ── */}
      <section className="py-12 md:py-14">
        <div className="container mx-auto max-w-3xl px-4 text-[15px] leading-relaxed text-muted-foreground">
          <h2 className="mb-3 font-heading text-xl font-bold text-foreground">About this guide</h2>
          <p><L to="/about">Rodrigo Reis</L> is the founder and owner of Capital Clean Care. This guide comes from his account of how the team prepares homes for winter; it was organized and edited with AI assistance, and the technical points link to their sources. The photos show the tasks named in their captions. They are not air quality tests or proof of health benefits.</p>
          <h2 className="mb-3 mt-8 font-heading text-xl font-bold text-foreground">Sources</h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li><A href={EPA_AIR}>EPA: Guide to Air Cleaners in the Home</A></li>
            <li><A href={EPA_DUCTS}>EPA: Should You Have the Air Ducts in Your Home Cleaned?</A></li>
            <li><A href={EPA_MOLD}>EPA: A Brief Guide to Mold, Moisture and Your Home</A></li>
            <li><A href={EPA_SC}>EPA: Safer Choice</A></li>
            <li><A href={NWFA}>National Wood Flooring Association: Maintenance</A></li>
            <li><A href={CRI}>Carpet and Rug Institute: CRI 205 Residential Carpet Maintenance and Cleaning Standard</A></li>
          </ul>
          <div className="mt-10">
            <RelatedPosts currentSlug={SLUG} showVideos={false} />
          </div>
          <div className="mt-10 border-t border-border pt-8">
            <h2 className="mb-2 font-heading text-lg font-bold text-foreground">Local house cleaning across the DMV</h2>
            <div className="mb-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
              {[["bethesda-md","Bethesda"],["rockville-md","Rockville"],["silver-spring-md","Silver Spring"],["gaithersburg-md","Gaithersburg"],["potomac-md","Potomac"],["chevy-chase-md","Chevy Chase"],["arlington-va","Arlington"],["alexandria-va","Alexandria"],["mclean-va","McLean"],["frederick-md","Frederick"],["columbia-md","Columbia"],["takoma-park-md","Takoma Park"]]
                .filter(([slug]) => isIndexable(`/locations/${slug}/house-cleaning`))
                .map(([slug, name]) => <Link key={slug} to={`/locations/${slug}/house-cleaning`} className="text-primary hover:underline">{name}</Link>)}
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
              {[["deep-cleaning","Deep Cleaning"],["move-out-cleaning","Move-Out Cleaning"],["recurring-cleaning","Recurring Cleaning"],["eco-friendly-cleaning","Eco-Friendly Cleaning"],["post-construction-cleaning","Post-Construction Cleaning"]].map(([slug, name]) => <Link key={slug} to={`/services/${slug}`} className="text-primary hover:underline">{name}</Link>)}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WinterCleaningChecklist;
