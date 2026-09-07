import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AlertTriangle, ArrowRight, CheckCircle2, ExternalLink, HardHat, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import BlogInlineImage from "@/components/blog/BlogInlineImage";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

// Phase 5 (2026-09-07). Informational guide: fine construction dust on hardwood, with the
// sequence our post-construction crews use. No FAQPage/HowTo markup on purpose (FAQ is visible
// text). Photos and the 9-second clip are owner-provided: a team member demonstrating the final pass on sealed hardwood.
const SLUG = "how-to-clean-hardwood-floors-after-construction";
const URL = `https://capitalcleancare.com/resources/${SLUG}`;
const HERO_IMAGE = "/images/blog/hardwood-post-construction/hero-portrait.webp";
const HERO_IMAGE_640 = "/images/blog/hardwood-post-construction/hero-portrait-640.webp";
const SCHEMA_IMAGE = "/images/blog/hardwood-post-construction/hero-800x450.webp";
const OG_IMAGE = "/images/blog/hardwood-post-construction/hero-og.jpg";
const STEP6_IMAGE = "/images/blog/hardwood-post-construction/step6-final-pass.webp";
const VIDEO_MP4 = "/videos/hardwood-final-pass.mp4";
const VIDEO_WEBM = "/videos/hardwood-final-pass.webm";
const VIDEO_POSTER = "/images/blog/hardwood-post-construction/video-poster.webp";
const DATE_ISO = "2026-09-07";

const toc = [
  { href: "#safest-way", label: "What is the safest way to remove construction dust from hardwood floors?" },
  { href: "#dry-first", label: "Why should construction dust come off dry before any water touches the floor?" },
  { href: "#seven-steps", label: "Capital Clean Care's 7-Step Post-Construction Hardwood Floor Process" },
  { href: "#never-use", label: "What should you never use on hardwood floors after construction?" },
  { href: "#residues", label: "How do you handle paint, adhesive, and grout haze on hardwood?" },
  { href: "#stop-diy", label: "When should you stop DIY and call a professional?" },
  { href: "#faq", label: "Frequently asked questions" },
  { href: "#sources", label: "Sources" },
];

const steps: { title: string; body: string; note?: string }[] = [
  {
    title: "Jobsite handoff and safety check",
    body: "The trades are finished, the floor is clear of tools, and nothing is still curing. Walk the room and pick up anything sharp by hand: screws, staples, tile chips, nails, drywall screws that roll under a vacuum head and score the finish. Confirm that paint, adhesive and grout have cured for the time their labels state; wiping over a soft adhesive spreads it. Identify the floor: solid or engineered hardwood, and whether the finish is a surface seal (polyurethane), an oil or hardwax finish, or wax. Everything after this depends on that answer.",
    note: "Stop here if the renovation disturbed painted surfaces in a home built before 1978, if older floor tile, sheet flooring or mastic was removed or damaged, or if you cannot tell what a material is. Lead dust and suspected asbestos are not cleaning problems: the EPA notes that asbestos cannot be identified by looking, that suspect material should be left undisturbed, and that inspection or sampling is a job for a trained professional. Do not vacuum or sweep it (see the sources below).",
  },
  {
    title: "Top-to-bottom dry removal",
    body: "Dust that is still on the ceiling, light fixtures, window sills, door tops, trim and baseboards will end up on the floor the moment air moves. Work high to low with a dry microfiber cloth, a duster head or a vacuum brush attachment, and let it fall. Baseboards and the joint where the wall meets the floor collect the most compound dust; clear them last, just before the floor. No water is used in this phase at all.",
  },
  {
    title: "HEPA soft-brush vacuum",
    body: "Vacuum the floor with a vacuum that has a sealed HEPA filter, a soft floor brush or bare-floor setting, and the beater bar switched off. A spinning brush roll can throw fine dust back into the air and drag grit across the finish. Work slowly, in overlapping straight passes along the grain, then go back over board seams, bevels, edges and corners with a crevice tool. Do not dry-sweep fine dust: a broom lifts the smallest particles, the ones that hang in the air longest, and leaves the heavier grit behind to scratch.",
  },
  {
    title: "Settling interval and second dry pass",
    body: "Fine drywall and sanding dust does not fall out of the air on the first pass. After vacuuming, the room looks clean while dust is still suspended; it comes down later, in a thin, even film. How long that takes depends on ventilation, HVAC air movement, and how much dust the job produced, so there is no universal number. Leave the room closed for a while, then inspect with a flashlight held low and almost parallel to the boards. Side light makes any film obvious. Wipe a white microfiber cloth across a board: if it picks up grey, vacuum the floor again.",
  },
  {
    title: "Residue triage and spot test",
    body: "What is left after two dry passes is not dust. Look at each mark and decide what it is before anything touches it: compound haze, latex paint specks, adhesive from tape or underlayment, grout haze from adjacent tile work, or caulk smears. Each one has a different safe first action (see the table below). Test any product in a closet or under a radiator first, and follow the floor and finish manufacturer's instructions over anything you read online, including this guide. Never scrape blindly with metal, and never reach for a solvent because a video said so.",
  },
  {
    title: "Controlled-moisture final pass on sealed hardwood only",
    body: "Only now, and only on a surface-sealed floor, does moisture come in. Use a pH-neutral hardwood cleaner approved for the finish, applied to a microfiber pad wrung until it is nearly dry, or a machine designed for sealed hard floors that meters its own liquid. The goal is to lift the last compound film, not to wash the wood. Work along the grain in small sections. Oiled, hardwax or waxed floors skip this step: they get dry buffing and the finish maker's own maintenance product, nothing else.",
    note: "The machine in the photo and the video is demonstrating this final pass only. It is not a dust-removal tool: dust removal is steps 2 to 4, and it is dry.",
  },
  {
    title: "Dry, buff and quality check",
    body: "Any moisture left on hardwood is a risk to the finish and the boards, so towel or buff each section dry with clean microfiber as soon as it is done. Then repeat the side-light inspection one last time, check the seams and edges, and note anything that stayed behind so it can be handed to the right trade. Ask whoever managed the renovation to check the HVAC filter: construction dust loads it heavily, and a clogged filter can keep recirculating fines onto a clean floor.",
  },
];

const residues: [string, string, string][] = [
  ["Grey or white film that reappears after cleaning", "Another dry HEPA pass; inspect with side light; check the HVAC filter with the renovation manager", "Film keeps returning after two or three cycles and the HVAC filter is clean: air is still carrying dust from an unfinished area"],
  ["Compound or plaster dust in seams and bevels", "Crevice tool, then a nearly dry microfiber pad along the grain", "Dust is packed into open gaps or a damaged bevel: it may need a flooring pro, not more cleaning"],
  ["Latex paint specks on a sealed finish", "Wait for full cure; soften with a drop of warm water and lift with a plastic edge, then wipe", "Speck does not lift, or the finish clouds around it: stop. Solvents and blades can take the finish with the paint"],
  ["Tape or underlayment adhesive", "Wait for cure; test the finish maker's recommended remover on a hidden spot; small area, short dwell, wipe dry", "Adhesive smears instead of lifting, or the test spot dulls: leave it for the flooring or finish professional"],
  ["Grout haze tracked over from tile work", "Dry vacuum first; then a pH-neutral cleaner on a nearly dry pad. Never an acidic haze remover meant for tile", "Haze is etched into the finish or the wood is bare underneath: refinishing question, not a cleaning one"],
  ["Caulk or silicone smear", "Let it cure fully, then roll it off gently with a fingertip or a plastic edge", "It has bonded into a raw or worn finish: stop"],
  ["Dull, scratched or grey boards after everything is clean", "Nothing further from a cleaning standpoint", "This is wear or finish damage. A flooring professional decides between screening, recoating or refinishing"],
];

const faqs: { q: string; a: string }[] = [
  {
    q: "How do you get drywall dust off hardwood floors?",
    a: "Dry first, always. Clear high surfaces and trim, then vacuum with a sealed HEPA vacuum on the bare-floor setting with the brush roll off, working along the grain and into the seams. Let the room settle, check with a low flashlight, and vacuum again. Only after that should a nearly dry, pH-neutral microfiber pass touch a sealed floor. Water on unremoved drywall dust can turn it into a paste that dries as a haze.",
  },
  {
    q: "Can I use a steam mop on hardwood floors after construction?",
    a: "No. The National Wood Flooring Association advises against wet mops and steam mops on wood floors because moisture and heat can drive into seams, cloud the finish and swell the boards. After construction the risk is worse: steam plus fine compound dust makes a film that sets into the grain. Use a nearly dry microfiber pad on sealed floors, and nothing wet at all on oiled or waxed floors.",
  },
  {
    q: "What kind of vacuum should I use for construction dust on wood floors?",
    a: "A vacuum with a sealed HEPA filter, a soft bare-floor brush and a beater bar that can be turned off. A standard household vacuum or a shop vacuum without HEPA filtration may pass the finest particles through its filter and recirculate them into the room. If the work involved cutting concrete, tile, stone or block, the dust may contain respirable crystalline silica, and OSHA's housekeeping rule for that material calls for HEPA-filtered vacuuming rather than dry sweeping.",
  },
  {
    q: "When is it safe to mop hardwood floors after construction?",
    a: "After two dry passes have come back clean on a white cloth, and only on a floor with an intact surface seal. Even then it is not a mop-and-bucket job: a pH-neutral hardwood cleaner on a pad wrung nearly dry, one section at a time, buffed dry immediately. If you do not know what the finish is, confirm it with the installer or the flooring manufacturer first, and stop at the dry steps until you do.",
  },
  {
    q: "What if the house was built before 1978?",
    a: "If the renovation sanded, scraped, cut or demolished painted surfaces in a pre-1978 home, assume lead-based paint may have been disturbed. The EPA's lead-safe renovation guidance applies, and cleanup is not a regular cleaning task. Stop, keep children and pets out of the area, and bring in a lead-safe certified renovation professional to handle containment and cleanup. Capital Clean Care does not perform lead abatement or lead-hazard cleanup.",
  },
  {
    q: "When is professional post-construction cleaning worth it?",
    a: "When the job is dust removal at volume rather than a single room, when there is more than one floor type in the home, when the timeline is tight before move-in or listing photos, or when the first DIY pass left a haze you cannot read. A professional post-construction cleaning follows the dry-then-damp sequence with sealed HEPA equipment and the right pad for the finish. It does not replace a flooring professional for scratches, dull finish or refinishing.",
  },
];

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Controlled-moisture final pass on a sealed hardwood floor (silent demonstration)",
  description:
    "Owner-provided video of a Capital Clean Care team member demonstrating the controlled-moisture final pass on sealed hardwood with a hard-floor machine (step 6 of the post-construction hardwood process, which comes only after dry removal and HEPA vacuuming). Silent clip, no narration.",
  thumbnailUrl: `https://capitalcleancare.com${VIDEO_POSTER}`,
  contentUrl: `https://capitalcleancare.com${VIDEO_MP4}`,
  uploadDate: `${DATE_ISO}T09:00:00-04:00`,
  duration: "PT9S",
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    "@id": "https://capitalcleancare.com/#business",
    name: "Capital Clean Care",
    logo: { "@type": "ImageObject", url: "https://capitalcleancare.com/logo.png" },
  },
};

const HowToCleanHardwoodFloorsAfterConstruction = () => {
  const { seoHelmet } = useSEO({
    title: "How to Clean Hardwood Floors After Construction",
    description:
      "How to clean hardwood floors after construction: dry removal, HEPA vacuum, a second pass once dust settles, then one damp pass on sealed wood. What to avoid.",
    canonical: URL,
    ogType: "article",
    ogImage: OG_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="how to clean hardwood floors after construction, how to clean construction dust from floors, drywall dust hardwood floors, post construction cleaning hardwood" />
        <link rel="preload" as="image" href={HERO_IMAGE} imageSrcSet={`${HERO_IMAGE_640} 640w, ${HERO_IMAGE} 960w`} imageSizes="(min-width: 1024px) 448px, 100vw" fetchPriority="high" />
        <script type="application/ld+json">{JSON.stringify(videoSchema)}</script>
      </Helmet>
      <ArticleSchema
        title="How to Clean Hardwood Floors After Construction"
        description="Construction dust on hardwood floors comes off in a set order: dry removal from the top down, HEPA vacuuming with the beater bar off, a second dry pass after the fine dust settles, then a single controlled-moisture pass on sealed wood. Includes the 7-step process our crews use, what never to use, and when to stop."
        url={URL}
        datePublished={DATE_ISO}
        image={SCHEMA_IMAGE}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resource Center", href: "/resources" }, { label: "How to Clean Hardwood Floors After Construction", href: URL }]} />

      {/* ===== HERO — two columns, same anatomy as FAQPage (bg-mesh, glass pill, gradient accent, portrait photo card) ===== */}
      <section className="relative overflow-hidden bg-mesh">
        <div className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="hidden md:block absolute top-10 -right-24 w-96 h-96 bg-primary/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

        <div className="relative container mx-auto px-4 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resource Center", href: "/resources" }, { label: "Hardwood Floors After Construction" }]} className="mb-6" />
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-up">
                <HardHat className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">Cleaning Guides · Post-Construction</span>
              </div>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1] text-foreground mb-6 animate-fade-up drop-shadow-sm" style={{ animationDelay: "100ms" }}>
                How to Clean Hardwood Floors <span className="text-gradient">After Construction</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-5 animate-fade-up" style={{ animationDelay: "200ms" }}>
                Dry removal first, one controlled damp pass last: the order that protects the finish, and the point where
                cleaning ends and a flooring professional begins.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mb-8 animate-fade-up" style={{ animationDelay: "250ms" }}>
                By Rodrigo Reis, Owner · MD · DC · VA · <time dateTime={DATE_ISO}>September 7, 2026</time>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
                <Button variant="cta" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" /></a>
                </Button>
                <Button size="lg" variant="outline" className="text-sm px-8 h-14 rounded-full glass hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300" asChild>
                  <a href="#seven-steps">Jump to the 7 steps</a>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-up" style={{ animationDelay: "250ms" }}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-black/5 aspect-[3/4] max-w-md mx-auto lg:ml-auto">
                <img
                  src={HERO_IMAGE}
                  srcSet={`${HERO_IMAGE_640} 640w, ${HERO_IMAGE} 960w`}
                  sizes="(min-width: 1024px) 448px, 100vw"
                  alt="Capital Clean Care team member making a controlled final pass on a sealed hardwood floor"
                  className="w-full h-full object-cover"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={960}
                  height={1280}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" aria-hidden="true" />
              </div>
              <div className="absolute -left-2 bottom-8 glass-card rounded-2xl px-4 py-3 shadow-xl max-w-[250px]">
                <p className="text-xs font-bold text-foreground leading-snug">Step 6: controlled-moisture final pass</p>
                <p className="text-xs text-muted-foreground leading-snug">Owner-provided photo of a Capital Clean Care team member demonstrating it on sealed hardwood.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Construction dust is not ordinary dust. Drywall compound, sanding residue, sawdust and plaster grind down to a
              powder fine enough to hang in the air for hours, settle back onto a floor you already cleaned, and scratch a
              polyurethane finish if you push it around with a wet mop. Cleaning hardwood floors after construction is a
              sequence problem: the order matters more than the product.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This guide walks through the sequence our post-construction crews follow on renovated homes: dry removal from
              the top of the room down, HEPA vacuuming, a second pass after the fine dust settles, and only then a single
              controlled-moisture pass on sealed wood. It also covers what should never touch the floor, how to read paint,
              adhesive and grout haze, and the point where cleaning ends and a flooring professional begins.
            </p>
          </FadeInSection>

          {/* Direct answer (40-60 words) */}
          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-5 mb-8 rounded-r-xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">Short answer</p>
              <p className="text-foreground leading-relaxed">
                Clean hardwood floors after construction in this order: pick up debris by hand, dust every surface above
                the floor, vacuum with a sealed HEPA vacuum (bare-floor setting, beater bar off), let the airborne dust
                settle and vacuum a second time, then make one damp pass on sealed wood with a pH-neutral cleaner and a
                nearly dry microfiber pad.
              </p>
            </div>
          </FadeInSection>

          {/* Quotable full answer (134-167 words) */}
          <FadeInSection>
            <blockquote className="border border-border rounded-2xl p-6 bg-secondary/30 mb-10 text-foreground leading-relaxed">
              <p>
                The safest way to clean hardwood floors after construction is to remove every layer of dust dry before any
                moisture touches the finish. Start at the top of the room and work down so that ceiling, trim, sill and
                baseboard dust falls to the floor before you vacuum it. Use a vacuum with a sealed HEPA filter, a soft floor
                brush and the beater bar switched off; a dry broom or an unfiltered vacuum can lift fine drywall dust
                back into the air. Because that dust keeps settling for hours, the floor needs a second dry pass and a
                side-light inspection before it is really clean. Only on sealed hardwood, and only after the dry passes, use
                a pH-neutral wood-floor cleaner on a microfiber pad wrung nearly dry, then buff the surface dry. Steam mops,
                wet mops, vinegar and abrasive pads stay off the floor. If the renovation disturbed painted surfaces in a
                home built before 1978, stop and follow lead-safe guidance instead of cleaning it yourself.
              </p>
            </blockquote>
          </FadeInSection>

          <FadeInSection>
            <nav aria-label="Table of contents" className="border border-border rounded-2xl p-5 bg-secondary/30 mb-10">
              <p className="font-heading font-bold text-foreground mb-2 text-sm uppercase tracking-wider">In this guide</p>
              <ul className="space-y-1.5">
                {toc.map((t) => (
                  <li key={t.href}>
                    <a href={t.href} className="text-sm text-accent underline hover:no-underline">{t.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="safest-way" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              What is the safest way to remove construction dust from hardwood floors?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Three things make construction dust different from the dust of daily life, and each one argues for the same
              method. First, it is abrasive: drywall compound, tile grit and sanding residue sit on the floor like fine
              sandpaper, and anything that drags them, a broom, a mop head, a shoe, can leave micro-scratches in the finish.
              Second, it bonds with water. Add moisture to compound dust and you get a thin paste that flows into board
              seams and bevels and dries there as a grey haze that is far harder to remove than the dry powder was. Third,
              it is a respiratory issue while it is airborne, and the finest particles stay airborne longest.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Wood-flooring guidance points the same way. The National Wood Flooring Association's maintenance advice is to
              sweep or vacuum on a bare-floor setting, to avoid wet mops and steam mops, and to use only products made for
              the specific finish. Where a job involved cutting or grinding concrete, tile, stone or block, the dust may
              contain respirable crystalline silica; OSHA's silica standard for construction treats dry sweeping and dry
              brushing as unacceptable housekeeping where they could add to exposure, and names HEPA-filtered vacuuming as
              the method that minimizes it. Not every renovation produces silica dust, but a sealed HEPA vacuum is the
              right tool either way, because it is also the only one that does not blow the finest drywall dust back into
              the room.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              So the safest method is dry, filtered and patient: remove what you can without water, capture it instead of
              moving it, wait for what is still in the air to come down, and only then introduce a controlled amount of
              moisture to a floor that can take it. Everything below is that method in detail. It is a cleaning process, not
              sanding, refinishing or floor restoration, and it will not repair a finish that construction traffic has
              already damaged.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="dry-first" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              Why should construction dust come off dry before any water touches the floor?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Because water turns a removable powder into an adhesive film. Joint compound is designed to be worked wet and
              to harden as it dries. Sweep a damp pad through compound dust and you are re-wetting it: the pad pushes a
              slurry ahead of itself, the slurry runs into the seams between boards and the small bevel along each edge,
              and when it dries it leaves the white or grey haze that people then try to scrub off. On a polyurethane
              finish that scrubbing is a common way the finish gets damaged after a renovation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              There is a second reason, and it is the one most DIY guides skip: the dust keeps coming back. Fine particles
              settle slowly, and every time someone walks through the room, opens a door or the HVAC cycles, part of what
              settled goes back up. A floor mopped an hour after the trades leave often shows a new film by evening. Two dry
              passes separated by a settling interval remove the bulk and then the fallout, and a low flashlight held almost
              parallel to the boards shows whether a third is needed. A clean white microfiber cloth wiped across one board
              gives the same answer without the light.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              How long to wait between passes has no universal number. A small room with the HVAC off and the doors closed
              settles far faster than an open floor plan with a return vent pulling air across it, and a light sanding job
              produces a fraction of the dust of a full drywall replacement. Use the inspection, not the clock.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="seven-steps" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              What is Capital Clean Care's 7-Step Post-Construction Hardwood Floor Process?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This is the sequence our crews follow on hardwood after a renovation. Steps 1 to 5 are dry. Moisture appears
              only in step 6, only on a sealed floor, and only in a controlled amount.
            </p>
            <ol className="space-y-6 mb-8">
              {steps.map((s, i) => (
                <li key={s.title} className="border border-border rounded-2xl p-5 bg-secondary/20">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-2 flex items-start gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-white text-sm font-bold">{i + 1}</span>
                    <span className="pt-1">{s.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{s.body}</p>
                  {s.note && (
                    <p className="mt-3 text-sm text-foreground bg-accent/10 border border-accent/30 rounded-xl p-3 flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{s.note}</span>
                    </p>
                  )}
                  {i === 5 && (
                    <BlogInlineImage
                      src={STEP6_IMAGE}
                      alt="Capital Clean Care cleaner using a sealed-floor machine after dry construction dust removal"
                      caption="Owner-provided photo of a Capital Clean Care team member demonstrating the controlled-moisture final pass on sealed hardwood (step 6). The machine is used only for this pass, after dry removal and HEPA vacuuming; it is not the dust-removal tool."
                    />
                  )}
                </li>
              ))}
            </ol>

            {/* Video: silent demonstration, our own team */}
            <div className="mb-3 mx-auto w-full max-w-[380px] rounded-2xl overflow-hidden border border-border shadow-lg bg-black">
              <video
                className="block w-full h-auto aspect-[9/16]"
                poster={VIDEO_POSTER}
                controls
                muted
                playsInline
                preload="metadata"
                width={720}
                height={1280}
                aria-label="Silent demonstration: controlled-moisture final pass on a sealed hardwood floor"
              >
                <source src={VIDEO_WEBM} type="video/webm" />
                <source src={VIDEO_MP4} type="video/mp4" />
              </video>
            </div>
            <p className="text-xs text-muted-foreground text-center mb-10 max-w-lg mx-auto">
              Silent demonstration (9 seconds, no narration): owner-provided video of a Capital Clean Care team member
              demonstrating the controlled-moisture final pass on sealed hardwood, step 6 of the process. Steps 2 to 4 (dry
              removal and HEPA vacuuming) always come before this pass.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="never-use" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              What should you never use on hardwood floors after construction?
            </h2>
            <ul className="space-y-3 mb-6">
              {[
                ["Steam mops", "Heat and moisture driven into seams and under the finish. The NWFA advises against them on wood floors at any time; after construction the steam also sets compound dust into a film."],
                ["Wet mops and buckets", "Standing water on wood, and a slurry of dust that runs into every joint. Even on sealed floors, the pad should be wrung nearly dry."],
                ["Vinegar, ammonia, all-purpose degreasers and dish soap", "Not finish-safe. Acids and alkalis dull polyurethane over time, and soaps leave a residue that grabs the next layer of dust."],
                ["Abrasive pads, scrub brushes and metal blades", "They can scratch or remove the finish along with the residue, and finish damage is not reversible by cleaning."],
                ["Dry sweeping of fine dust", "A broom lifts the smallest particles into the air and leaves the grit that scratches. Vacuum with HEPA filtration instead."],
                ["Shop vacuums without HEPA filtration", "They capture the visible debris, but the finest particles may pass through the filter and recirculate into the room through the exhaust."],
                ["Oil soaps, polishes and 'restorers' as a shortcut", "They can leave a film that looks like shine for a week and can cause adhesion problems if the floor is ever recoated. Use only what the finish maker approves."],
                ["Any solvent chosen because a video said so", "Mineral spirits, acetone and citrus removers can each attack some finishes. The floor or finish manufacturer's guidance comes first."],
              ].map(([what, why]) => (
                <li key={what} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                  <AlertTriangle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span><strong className="text-foreground">{what}.</strong> {why}</span>
                </li>
              ))}
            </ul>
          </FadeInSection>

          <FadeInSection>
            <h2 id="residues" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              How do you handle paint, adhesive, and grout haze on hardwood?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              After two dry passes, what remains is residue rather than dust, and each kind has a safe first action and a
              point where cleaning should stop. Test in a hidden spot first, follow the floor and finish manufacturer's
              instructions, and accept that paint or adhesive on a finish cannot be removed with zero risk: if the finish
              comes off with the residue, that is a flooring professional's job.
            </p>
            <div className="overflow-x-auto mb-6 rounded-2xl border border-border">
              <table className="w-full text-sm text-left">
                <thead className="bg-secondary/60 text-foreground">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">Residue or sign</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Safe first action</th>
                    <th scope="col" className="px-4 py-3 font-semibold">Stop and escalate when</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  {residues.map(([sign, action, stop]) => (
                    <tr key={sign} className="border-t border-border align-top">
                      <td className="px-4 py-3 font-medium text-foreground">{sign}</td>
                      <td className="px-4 py-3">{action}</td>
                      <td className="px-4 py-3">{stop}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 id="stop-diy" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              When should you stop DIY and call a professional?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Some situations are not cleaning problems at all. Stop and bring in the right specialist when the renovation
              disturbed painted surfaces in a home built before 1978 (possible lead dust, covered by the EPA's lead-safe
              renovation rules and handled by certified professionals), when older floor tile, sheet flooring or mastic was
              removed or damaged (possible asbestos: the EPA says it cannot be identified by looking, suspect material should
              be left undisturbed rather than vacuumed or swept, and inspection or sampling is a job for a trained
              professional), when large volumes of concrete, tile or stone dust
              are involved, or when you cannot identify the floor's finish. Scratches, dull patches, grey boards or a finish
              that is coming off with the residue are a flooring professional's territory: screening, recoating or
              refinishing, which no cleaning process replaces.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When the problem is dust at volume rather than damage, professional help is mostly about equipment and
              sequence. A{" "}
              <Link to="/services/post-construction-cleaning" className="text-accent underline hover:no-underline">post-construction cleaning service</Link>{" "}
              brings sealed HEPA vacuums, the right pad and cleaner for the finish, and crews who do the two dry passes and
              the settling check as a routine. That is what our teams do on renovated homes across Maryland, Washington DC
              and Northern Virginia, and the seven steps above are the hardwood part of that visit. If you are searching
              for a hardwood floor cleaning service or a wood floor cleaning service after a renovation, that is the right
              category to look in; it is not the same as hiring a flooring contractor, and a good cleaning company will say
              so when a floor needs one. For the wider job, room by room, see our{" "}
              <Link to="/resources/post-construction-cleaning-montgomery-county-md" className="text-accent underline hover:no-underline">post-construction cleaning guide for Montgomery County</Link>.
              For ongoing care once the dust is gone, the routine in our{" "}
              <Link to="/resources/how-to-clean-hardwood-floors-naturally" className="text-accent underline hover:no-underline">guide to cleaning hardwood floors naturally</Link>{" "}
              is the one to keep.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA
              headline="Renovation dust on hardwood in MD, DC or Northern Virginia?"
              subtext="Post-construction cleaning with sealed HEPA equipment and a finish-safe final pass. Written scope, background-checked team, free quote."
              ctaLabel="Get My Post-Construction Quote"
              ctaTo="/contact"
              analyticsLocation="hardwood_post_construction_guide"
            />
          </FadeInSection>

          <FadeInSection>
            <h2 id="faq" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6">
              Frequently asked questions
            </h2>
            <div className="space-y-6 mb-10">
              {faqs.map((f) => (
                <div key={f.q} className="border border-border rounded-2xl p-5">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{f.q}</h3>
                  <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 id="sources" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">
              Sources
            </h2>
            <ul className="space-y-3 mb-10 text-muted-foreground leading-relaxed">
              {[
                ["National Wood Flooring Association, Wood Floor Maintenance", "https://woodfloors.org/maintenance/", "Sweep or vacuum on a bare-floor setting; avoid wet mops and steam mops; use products made for the specific finish."],
                ["OSHA, 29 CFR 1926.1153, Respirable Crystalline Silica (Construction)", "https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1153", "Housekeeping: dry sweeping and dry brushing are not allowed where they could contribute to silica exposure; HEPA-filtered vacuuming and methods that minimize exposure are required."],
                ["U.S. EPA, Lead-Safe Renovations for DIYers", "https://www.epa.gov/lead/lead-safe-renovations-diyers", "Renovations that disturb lead-based paint in pre-1978 homes can create hazardous dust; guidance on when to stop and use certified professionals."],
                ["U.S. EPA, Protect Your Family from Exposures to Asbestos", "https://www.epa.gov/asbestos/protect-your-family-exposures-asbestos", "Asbestos cannot be identified by looking; suspect material should be left undisturbed, and inspection or sampling should be done by a trained professional."],
              ].map(([name, href, note]) => (
                <li key={href} className="flex items-start gap-3">
                  <ExternalLink className="h-4 w-4 text-accent shrink-0 mt-1" aria-hidden="true" />
                  <span>
                    <a href={href} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:no-underline font-medium">{name}</a>{" "}
                    <span className="text-sm">{note}</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10">
              About the photos and video on this page: they are owner-provided photos and video of a Capital Clean Care team
              member demonstrating the controlled-moisture final pass on sealed hardwood. They illustrate step 6 only.
              Capital Clean Care provides post-construction cleaning; it does not perform sanding, refinishing, floor
              restoration, lead abatement or asbestos removal.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-10 text-center">
              <Sparkles className="h-8 w-8 mx-auto mb-4 text-accent" aria-hidden="true" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Move-in ready floors, without the haze</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-xl mx-auto">
                Our post-construction crews follow the dry-then-damp sequence on every hardwood floor, then hand you a
                written note of anything that needs a flooring professional.
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white rounded-full px-8" asChild>
                <Link to="/services/post-construction-cleaning">
                  See Post-Construction Cleaning <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4 flex items-center justify-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" /> Serving Maryland, Washington DC and Northern Virginia
              </p>
            </div>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug={SLUG} />
      <StickyCTA />
    </Layout>
  );
};

export default HowToCleanHardwoodFloorsAfterConstruction;
