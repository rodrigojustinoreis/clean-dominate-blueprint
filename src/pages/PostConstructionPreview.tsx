/**
 * PRÉ-VISUALIZAÇÃO — não é a página de produção.
 *
 * Parte da página publicada (todo o conteúdo e todo o schema) e aplica a estrutura
 * do mockup enviado pelo proprietário em 21/09/2026: hero em duas colunas, faixa de
 * provas, processo em seis cartões, faixa do resultado final e chamada escura no fim.
 * Rota /preview/post-construction, noindex, fora do prerender e do sitemap.
 */
import { useSearchParams, Link } from "react-router-dom";
import { Phone, CheckCircle, Star, Wind, Sparkles, MapPin, FileText, Home, Leaf, Shield, ArrowRight, Building2, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import TrustBadges from "@/components/TrustBadges";
import { ServiceSchema, FAQSchema, BreadcrumbSchema, LocalBusinessSchema, WebPageSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import { slCities } from "@/data/service-locations";
import { GuideCards } from "@/components/RelatedContent";
import { isIndexable, guidesBySlugs } from "@/data/related-content";
import Breadcrumbs from "@/components/Breadcrumbs";
import FadeInSection from "@/components/blog/FadeInSection";
import LocationSocialProof from "@/components/location/LocationSocialProof";
import logo from "@/assets/logo.webp";

const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const service = getServiceBySlug("post-construction-cleaning")!;

// The cities array lists every Maryland entry first, so a plain slice(0,8) returned MD only
// and contradicted an H1 that promises DC and Northern Virginia. Spread across all three.
const indexableCities = cities.filter(
  (c) => !c.slug.includes("county") && isIndexable(`/locations/${c.slug}`),
);
const topCities = [
  ...indexableCities.filter((c) => c.state === "MD").slice(0, 4),
  ...indexableCities.filter((c) => c.state === "DC").slice(0, 2),
  ...indexableCities.filter((c) => c.state === "VA").slice(0, 3),
];

const SPOKES = [
  "post-construction-cleaning-montgomery-county-md",
  "post-renovation-cleaning-guide-maryland",
  "what-is-included-in-a-deep-cleaning",
  "move-in-cleaning-checklist",
];

const HERO_IMAGE = "/images/team/team-post-construction.jpg";
const IMG = "/images/services/post-construction";

// The eight-step order the crews actually work in. Order is the whole point: every surface
// cleaned sends dust downward, so a room worked out of sequence gets cleaned twice.
const SEQUENCE = [
  "Ceilings, upper walls, ledges and corners",
  "Light fixtures, fans, exhaust and HVAC register covers",
  "Walls, doors, frames, window glass, sills and tracks",
  "Cabinets, closets, shelving and built-ins",
  "Trim, molding and baseboards",
  "Edges, corners and transitions, as their own pass",
  "Floors: HEPA vacuumed dry, then washed",
  "Second look, and another pass wherever dust came back",
];

// The dust section is about scale, so the figures get their own display treatment.
const DUST_FACTS = [
  { prefix: "under", value: "10", unit: "µm", label: "Dust this fine stays suspended in the air instead of falling." },
  { prefix: "under", value: "4", unit: "µm", label: "It passes the nose and throat and reaches deep into the lungs." },
  { prefix: "for", value: "48–72", unit: "hours", label: "The finest particles keep settling after the crew leaves." },
];

const SCRUBBER_SPECS = [
  { k: "Motor", v: "1/2 HP" },
  { k: "Airflow", v: "up to 550 CFM" },
  { k: "Filtration", v: "4 stages" },
  { k: "HEPA filter", v: "99.97% at 0.3 µm" },
  { k: "Carbon stage", v: "paint and adhesive odours" },
  { k: "Outlet", v: "ducted, for negative pressure" },
];

const BY_AREA = [
  {
    room: "Kitchen",
    tasks: [
      "Cabinet exteriors, interiors and drawers",
      "Countertops, backsplash and sink",
      "Appliance exteriors, plus the gaps beside and under them",
      "Protective film and label adhesive removed",
      "Toe kicks and floor edges behind the run",
    ],
  },
  {
    room: "Bathrooms",
    tasks: [
      "Tile and grout, including grout haze on new installs",
      "Shower glass, tub, vanity and mirror",
      "Fixtures and hardware",
      "Exhaust cover taken down and washed separately",
      "Floor edges and behind the door",
    ],
  },
  {
    room: "Living and sleeping areas",
    tasks: [
      "Ceilings, upper walls, ledges and fans",
      "Window glass, frames, sills and compacted track dust",
      "Doors, frames, trim and baseboards",
      "Closets, shelving and built-ins",
      "Outlet and switch plates",
    ],
  },
  {
    room: "Throughout",
    tasks: [
      "HVAC register and return covers, cleaned off the wall",
      "Paint spatter, adhesive and sealant residue",
      "Light fixtures and accessible covers",
      "Stairs, railings and landings",
      "Floors identified by material before any moisture",
    ],
  },
];

// Mockup: quatro provas curtas na faixa logo abaixo do hero.
const PROVAS = [
  { icon: Wind, t: "HEPA-filtered air scrubber" },
  { icon: Sparkles, t: "Ceiling-to-floor sequence" },
  { icon: MapPin, t: "Serving MD, DC & Northern Virginia" },
  { icon: FileText, t: "Written scope before we start" },
];

// Mockup: o processo em seis cartões. Cada um leva à seção detalhada mais abaixo,
// para que o resumo visual não substitua o conteúdo técnico.
const PASSOS = [
  { n: 1, icon: Wind, t: "Air filtration on", href: "#equipment", d: "The scrubber runs before anyone wipes a surface, so lifted dust leaves the room instead of landing again." },
  { n: 2, icon: Sparkles, t: "Ceilings and upper walls", href: "#how-it-works", d: "Ceilings, ledges, corners, light fixtures, fans and HVAC register covers. Everything above head height first." },
  { n: 3, icon: CheckCircle, t: "Walls, glass and frames", href: "#how-it-works", d: "Walls, doors, frames, window glass, sills and tracks, including factory film and label adhesive." },
  { n: 4, icon: Home, t: "Cabinets and built-ins", href: "#whats-included", d: "Cabinets, closets, shelving and built-ins, inside and out, then trim, molding and baseboards." },
  { n: 5, icon: Leaf, t: "Floors, dry then wet", href: "#floors", d: "The whole floor is HEPA vacuumed dry first. Only then does water come out, and only where the floor takes it." },
  { n: 6, icon: Shield, t: "Second look", href: "#why-dust", d: "Edges, corners and transitions get their own pass, then another wherever dust came back." },
];

const PERSONAS = [
  {
    title: "You just finished a renovation",
    body: "The contractors are out, the debris is gone, and every surface in the house carries a grey film. This is the clean that makes the work look finished.",
  },
  {
    title: "You are moving into a new build",
    body: "New construction leaves protective film, label adhesive, grout haze and drywall dust in places you will not find until you unpack. Better to clear it before the furniture arrives.",
  },
  {
    title: "You finished one room, not the house",
    body: "A basement finish, a kitchen or a single bathroom still sends dust through the whole floor. The clean can be scoped to the work zone and the rooms it reached.",
  },
  {
    title: "You are a contractor or builder",
    body: "Final cleans on a schedule, coordinated around the punch list, with a written scope your client can see. We work alongside trades rather than around them.",
  },
];

const PostConstructionPreview = () => {
  const [searchParams] = useSearchParams();
  const isAdTraffic =
    searchParams.has("gclid") || searchParams.has("gbraid") || searchParams.get("src") === "google";

  const { seoHelmet } = useSEO({
    title: service.metaTitle,
    description: service.metaDescription,
    canonical: "https://capitalcleancare.com/preview/post-construction",
    ogImage: `https://capitalcleancare.com${IMG}/hero-hepa.webp`,
    preloadImage: `${IMG}/hero-hepa.webp`,
    noIndex: true,
  });

  const scrollToForm = () => {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {seoHelmet}
      <div className="bg-amber-400 px-4 py-2 text-center text-sm font-bold text-amber-950">
        PRÉ-VISUALIZAÇÃO · não é a página publicada · noindex
      </div>
      <BreadcrumbSchema
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name, href: "/services/post-construction-cleaning" },
        ]}
      />
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url="https://capitalcleancare.com/services/post-construction-cleaning"
        serviceType={service.name}
      />
      <FAQSchema faqs={service.faqs} />
      <LocalBusinessSchema areaServed={["Maryland", "Washington, DC", "Northern Virginia"]} />
      <WebPageSchema
        name={service.metaTitle}
        description={service.metaDescription}
        url="https://capitalcleancare.com/services/post-construction-cleaning"
        cityName="Silver Spring"
        stateCode="Maryland"
        dateModified="2026-09-20"
        primaryImage={`https://capitalcleancare.com${HERO_IMAGE}`}
      />

      {/* ── Sticky top bar ── */}
      <div className="sticky top-0 z-50 bg-[#2E7D32] text-white">
        <div className="container mx-auto flex h-11 max-w-6xl items-center justify-between gap-3 px-4">
          <p className="truncate text-sm font-semibold">15% OFF Your First Post-Construction Clean</p>
          <a href={PHONE_HREF} className="flex shrink-0 items-center gap-1.5 text-sm font-bold hover:underline">
            <Phone className="h-4 w-4" /> {PHONE}
          </a>
        </div>
      </div>

      {isAdTraffic ? (
        <header className="border-b border-border bg-background py-3">
          <div className="container mx-auto flex max-w-6xl items-center justify-between px-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Capital Clean Care logo" className="h-8 w-8 object-contain" />
              <span className="font-heading text-lg font-bold">Capital Clean Care</span>
            </Link>
            <a href={PHONE_HREF} className="text-sm font-bold text-[#2E7D32]">
              {PHONE}
            </a>
          </div>
        </header>
      ) : (
        <Header />
      )}

      {/* ── Hero ── */}
      <section className="relative bg-gradient-to-br from-[#EAF6EA] via-background to-accent/5 py-10 pb-16 md:py-16 md:pb-24">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]}
            className="mb-6"
          />
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <FadeInSection>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2E7D32]/20 bg-white px-3.5 py-1.5 shadow-sm">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· Google reviews</span>
              </div>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#2E7D32]">
                From construction to a fresh start
              </p>
              <h1 className="mb-5 font-heading text-4xl font-bold leading-[1.1] md:text-5xl">{service.h1}</h1>

              <p className="mb-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {service.shortDescription} We work ceiling to floor with sealed HEPA equipment and filter the
                air while we clean, because construction dust keeps settling for days after the crew leaves.
              </p>

              <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={scrollToForm}
                  className="inline-flex items-center justify-center rounded-lg bg-[#2E7D32] px-8 py-3.5 text-base font-bold text-white shadow-lg shadow-[#2E7D32]/20 transition-[background-color,scale] duration-150 hover:bg-[#1B5E20] active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100"
                >
                  Book My Free Assessment →
                </button>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border-2 border-[#2E7D32] px-6 py-3.5 text-base font-bold text-[#2E7D32] transition-colors hover:bg-[#2E7D32]/5"
                >
                  <Phone className="mr-2 h-4 w-4 shrink-0" /> Call&nbsp;{PHONE}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {["Sealed HEPA equipment", "Air filtered while we work", "Written scope before we start", "Licensed & insured"].map((b) => (
                  <span key={b} className="flex items-center gap-1.5">
                    <CheckCircle className="h-4 w-4 shrink-0 text-[#2E7D32]" /> {b}
                  </span>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection>
              <div className="relative lg:ps-4">
                <div className="group aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-2xl">
                  <img
                    src={`${IMG}/hero-hepa.webp`}
                    srcSet={`${IMG}/hero-hepa-sm.webp 640w, ${IMG}/hero-hepa.webp 1280w`}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    alt="A professional HEPA air scrubber and a HEPA canister vacuum set up in a bright, empty, newly renovated room"
                    className="h-full w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    width={1280}
                    height={853}
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
                <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-2xl border border-border bg-white/95 px-5 py-3.5 shadow-xl backdrop-blur-sm">
                  <span className="font-heading text-3xl font-extrabold leading-none text-[#2E7D32]">10+</span>
                  <span className="text-xs leading-tight text-muted-foreground">
                    years keeping
                    <br />
                    DMV homes clean
                  </span>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* ── Faixa de provas (mockup): quatro fatos antes de qualquer parágrafo ── */}
      <section className="border-b border-border bg-[#2E7D32]/[0.07]">
        <div className="container mx-auto grid max-w-6xl gap-x-4 gap-y-3 px-4 py-6 sm:grid-cols-2 md:grid-cols-4 md:py-7">
          {PROVAS.map((f) => (
            <div key={f.t} className="flex items-center gap-3">
              <f.icon className="h-6 w-6 shrink-0 text-[#2E7D32]" />
              <span className="text-sm font-semibold leading-snug text-foreground">{f.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Answer-first summary ── */}
      <section aria-labelledby="pcc-summary" className="border-b border-border bg-card py-10 md:py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-2xl border border-[#2E7D32]/25 bg-[#F4FAF4] p-6 shadow-sm md:p-8">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">Quick answer</span>
            <h2 id="pcc-summary" className="mb-3 mt-2 font-heading text-2xl font-bold md:text-3xl">
              What Is Post-Construction Cleaning?
            </h2>
            <p className="max-w-3xl text-[17px] leading-relaxed text-foreground md:text-lg">
              Post-construction cleaning is the detailed clean that takes a property from buildable to liveable
              after construction or remodeling work is finished. It removes fine dust from every surface, along
              with debris, paint and adhesive residue, protective film, label glue and grout haze. It is a
              different job from a regular house cleaning because of the dust: drywall compound, concrete and
              tile cutting produce particles fine enough to stay suspended in the air and keep settling for 48 to
              72 hours after the crew leaves.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3" aria-label="Post-construction cleaning essentials">
              {[
                ["Best timing", "After debris is hauled out, before move-in"],
                ["How it is priced", "After a technician assesses the property"],
                ["What makes it different", "Sealed HEPA capture plus air filtration"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-[#2E7D32]/15 bg-white p-4">
                  <span className="block text-xs font-bold uppercase tracking-wide text-[#2E7D32]">{label}</span>
                  <span className="mt-1 block text-sm font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Jump nav: the page runs long, so give the reader a way past the explainer ── */}
      <nav aria-label="On this page" className="sticky top-11 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto max-w-4xl px-4">
          <ul className="flex gap-1 overflow-x-auto py-2 text-sm">
            {[
              ["how-it-works", "How it works"],
              ["equipment", "Equipment"],
              ["whats-included", "What's included"],
              ["pricing", "Pricing"],
              ["quote", "Free assessment"],
            ].map(([id, label]) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block whitespace-nowrap rounded-full px-3.5 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-[#2E7D32]/10 hover:text-[#2E7D32]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Intro ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <FadeInSection>
            <div className="space-y-4 text-[17px] leading-relaxed text-foreground">
              {service.intro.split("\n\n").map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Processo em seis cartões (mockup). É um resumo visual: cada cartão leva
             à seção detalhada correspondente, em vez de substituí-la. ── */}
      <section id="process" className="scroll-mt-28 border-t border-border py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <FadeInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">Our process</span>
            <h2 className="mb-3 mt-2 font-heading text-2xl font-bold md:text-3xl">
              Our Post-Construction Cleaning Process
            </h2>
            <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Every surface we clean sends dust downward, so the order decides the result. Tap any step to read
              how it is actually done.
            </p>

            <div className="grid gap-5 lg:grid-cols-[1fr_19rem]">
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {PASSOS.map((p, i) => (
                  <a
                    key={p.n}
                    href={p.href}
                    style={{ animationDelay: `${i * 90}ms` }}
                    className="group animate-fade-up rounded-2xl border border-border bg-card p-5 opacity-0 shadow-sm transition-[border-color,box-shadow,transform] duration-200 [transition-timing-function:cubic-bezier(0.2,0,0,1)] hover:-translate-y-0.5 hover:border-[#2E7D32]/40 hover:shadow-md active:scale-[0.96] motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <div className="mb-3 flex items-center gap-2.5">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2E7D32] text-xs font-bold tabular-nums text-white">
                        {p.n}
                      </span>
                      <p.icon className="h-5 w-5 text-[#2E7D32]" />
                    </div>
                    <h3 className="mb-1.5 flex items-center gap-1 font-heading text-base font-bold leading-snug text-foreground">
                      {p.t}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#2E7D32] opacity-0 transition-opacity group-hover:opacity-100" />
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.d}</p>
                  </a>
                ))}
              </div>

              <figure className="group relative overflow-hidden rounded-2xl ring-1 ring-border lg:self-stretch">
                <img
                  src={`${IMG}/ceiling-first.webp`}
                  srcSet={`${IMG}/ceiling-first-sm.webp 320w, ${IMG}/ceiling-first.webp 640w`}
                  sizes="(min-width: 1024px) 304px, 100vw"
                  alt="A Capital Clean Care team member reaching the ceiling with an extension tool over a newly installed closet"
                  className="h-full min-h-[18rem] w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.2,0,0,1)] group-hover:scale-[1.05] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  width={640}
                  height={853}
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 pt-10 text-sm font-semibold leading-snug text-white">
                  Step one, every time: the ceiling before anything below it.
                </figcaption>
              </figure>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── How the work is done: four subsections under one heading, so the technical
           explainer reads as one topic instead of four competing sections ── */}
      <section className="border-t border-border bg-secondary/30 py-14 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">Our process</span>
            <h2 className="mb-3 mt-2 font-heading text-2xl font-bold md:text-3xl">How the Work Is Done</h2>
            <p className="mb-10 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Four things decide the result: understanding how the dust behaves, working in the right order,
              filtering the air while the work happens, and leaving the floor until last.
            </p>
            <div className="space-y-14">
            {/* Scale is the point of this one, so the measurements lead and the prose follows. */}
            <div id="why-dust" className="scroll-mt-28">
              <h3 className="mb-5 font-heading text-xl font-bold text-foreground md:text-2xl">Why the dust needs different equipment</h3>
              <dl className="mb-8 grid gap-4 sm:grid-cols-3">
                {DUST_FACTS.map((f) => (
                  <div key={f.value} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                    <dt className="flex items-baseline gap-1.5">
                      <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{f.prefix}</span>
                      <span className="font-heading text-3xl font-extrabold leading-none tabular-nums text-[#2E7D32] md:text-4xl">{f.value}</span>
                      <span className="font-heading text-base font-bold text-[#2E7D32]">{f.unit}</span>
                    </dt>
                    <dd className="mt-2 text-[15px] leading-snug text-muted-foreground">{f.label}</dd>
                  </div>
                ))}
              </dl>
              <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                <p>
                  Construction dust behaves differently from household dust, and the difference is measurable.
                  Drywall compound, concrete, mortar and tile cutting all release respirable crystalline silica,
                  which OSHA regulates on jobsites for that reason.
                </p>
                <p>
                  Because the finest particles keep settling for days, a house cleaned once on the day the crew
                  finishes gets a grey film back on every horizontal surface two mornings later. Nothing was done
                  wrong. The dust had not finished falling.
                </p>
                <p>
                  A standard vacuum makes it worse. The body is not sealed and the filter was never built for
                  particles this small, so much of what it collects goes back out through the exhaust and the housing
                  seams. The floor looks clean while the finest fraction moves into the air and onto the surfaces
                  someone already wiped.
                </p>
              </div>
              <div className="mt-8 grid items-center gap-5 rounded-2xl border border-border bg-card p-5 sm:grid-cols-[minmax(0,11rem)_1fr] md:gap-7 md:p-6">
                <img
                  src={`${IMG}/vent-cover.webp`}
                  srcSet={`${IMG}/vent-cover-sm.webp 340w, ${IMG}/vent-cover.webp 680w`}
                  sizes="(min-width: 640px) 176px, 100vw"
                  alt="An HVAC return cover heavily caked with construction dust being washed in a sink"
                  className="aspect-square w-full max-w-[13rem] rounded-xl object-cover ring-1 ring-border sm:max-w-none"
                  width={680}
                  height={680}
                  loading="lazy"
                />
                <div>
                  <p className="font-heading font-bold text-foreground">What wiping in place leaves behind</p>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    An HVAC return cover after a renovation. The face wipes clean in seconds. What sits between and
                    behind the fins does not come out until the cover comes off and goes in the sink.
                  </p>
                </div>
              </div>
            </div>

            {/* A route, so it gets a rail. The photo sits beside it rather than interrupting it. */}
            <div id="how-it-works" className="scroll-mt-28">
              <h3 className="mb-4 font-heading text-xl font-bold text-foreground md:text-2xl">Ceiling to floor, in this order</h3>
              <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                Every surface we clean sends dust downward, so the order decides the result. Work a room out of
                sequence and parts of it get cleaned twice. The floor is close to last for the same reason.
              </p>
              <div className="grid gap-8 md:grid-cols-[1fr_minmax(0,19rem)] md:gap-10">
                <ol>
                  {SEQUENCE.map((step, n) => (
                    // The connector is drawn per item, between the dots, so nothing has to mask it.
                    <li
                      key={step}
                      className="relative flex gap-4 pb-5 last:pb-0 after:absolute after:bottom-1 after:left-[11.5px] after:top-8 after:w-px after:bg-border after:content-[''] last:after:hidden"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2E7D32]/10 text-sm font-bold tabular-nums text-[#2E7D32]">
                        {n + 1}
                      </span>
                      <span className="text-[17px] leading-relaxed text-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
                <figure className="md:sticky md:top-28 md:self-start">
                  <img
                    src={`${IMG}/ceiling-first.webp`}
                    srcSet={`${IMG}/ceiling-first-sm.webp 320w, ${IMG}/ceiling-first.webp 640w`}
                    sizes="(min-width: 768px) 304px, 100vw"
                    alt="A Capital Clean Care team member reaching the ceiling with an extension tool above a newly installed closet during a post-construction clean"
                    className="aspect-[3/4] w-full rounded-2xl object-cover ring-1 ring-border"
                    width={640}
                    height={853}
                    loading="lazy"
                  />
                  <figcaption className="mt-2 text-sm text-muted-foreground">Step one, every time.</figcaption>
                </figure>
              </div>
              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                The sequence follows the same logic as the EPA&apos;s guidance for cleaning after renovation work,
                which also runs high to low, uses HEPA vacuuming and wet cleaning, and calls for re-inspecting while
                dust remains. We use that as a technical reference for how we work. It is not a certification, and we
                do not hold one.
              </p>
            </div>

            {/* A machine with published figures, so it gets a spec sheet instead of a caption. */}
            <div id="equipment" className="scroll-mt-28">
              <h3 className="mb-4 font-heading text-xl font-bold text-foreground md:text-2xl">We filter the air while we work</h3>
              <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                Wiping a surface lifts part of its dust back into the room, where it drifts and lands again on
                everything already finished. So an air scrubber runs through the job rather than only cleaning
                surfaces.
              </p>
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm md:grid md:grid-cols-2">
                <img
                  src={`${IMG}/air-equipment.webp`}
                  srcSet={`${IMG}/air-equipment-sm.webp 288w, ${IMG}/air-equipment.webp 576w`}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  alt="A uniformed Capital Clean Care team member setting up air-handling equipment against the baseboard of an empty renovated room"
                  className="aspect-[4/3] w-full object-cover md:h-full"
                  width={576}
                  height={432}
                  loading="lazy"
                />
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">The unit we run</span>
                  <p className="mt-1 font-heading text-xl font-bold text-foreground">XPOWER X-2580</p>
                  <dl className="mt-4 divide-y divide-border border-y border-border">
                    {SCRUBBER_SPECS.map((s) => (
                      <div key={s.k} className="flex items-baseline justify-between gap-4 py-2.5">
                        <dt className="text-[15px] text-muted-foreground">{s.k}</dt>
                        <dd className="text-right text-[15px] font-semibold tabular-nums text-foreground">{s.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    Placed to pull air across the room, and moved as the crew moves.
                  </p>
                </div>
              </div>
              <div className="mt-8 max-w-2xl space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                <p>
                  The outlet takes a duct, which lets us hold a room at negative pressure and vent filtered air away
                  from the rooms already done. In each zone it usually runs about two hours while the detail work
                  happens around it. That figure is our own operating protocol rather than a published standard, and
                  room size, ceiling height and dust load all change it.
                </p>
                <p className="rounded-xl border border-border bg-background p-4 text-[15px]">
                  <strong className="text-foreground">What &ldquo;HEPA&rdquo; actually means.</strong> HEPA rates a
                  filter, not a company. There is no such thing as a HEPA-certified cleaning company, so treat that
                  phrase as a warning sign. At 0.3 microns a filter is tested against the particle size it finds
                  hardest to catch, not the smallest it can catch, so 99.97% describes it at its worst.
                </p>
              </div>
            </div>

            {/* Two stages, so it gets two panels. The proof photo lives inside the stage it proves. */}
            <div id="floors" className="scroll-mt-28">
              <h3 className="mb-4 font-heading text-xl font-bold text-foreground md:text-2xl">Vacuumed dry before anything gets wet</h3>
              <p className="mb-8 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
                A wet-dry floor washer is built to vacuum and wash in one pass, and in a normal house that is exactly
                how it should be used. A house after construction carries far more dry particulate than the machine
                was designed to meet at once. Put water on that floor first and the fine dust turns into a slurry
                that spreads into grout lines, board seams and corners instead of leaving the room. So we split it in
                two.
              </p>
              <div className="grid items-start gap-5 md:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-[#2E7D32]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#2E7D32]">
                      Stage one &middot; dry
                    </span>
                    <p className="mt-3 text-[17px] leading-relaxed text-muted-foreground">
                      The whole floor gets HEPA vacuumed dry, including wall transitions, corners, door jambs,
                      closets, stair treads, cabinet toe kicks and the perimeter. Nothing gets wet until that is
                      finished.
                    </p>
                  </div>
                  <img
                    src={`${IMG}/floor-dustreveal.webp`}
                    srcSet={`${IMG}/floor-dustreveal-sm.webp 340w, ${IMG}/floor-dustreveal.webp 680w`}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    alt="A wet-dry floor washer with its green dust-detection light on, showing construction dust still on hardwood beside the baseboard"
                    className="aspect-square w-full object-cover"
                    width={680}
                    height={680}
                    loading="lazy"
                  />
                  <p className="border-t border-border bg-secondary/40 px-6 py-3 text-sm leading-relaxed text-muted-foreground">
                    The floor washer&apos;s dust sensor lighting up a floor that already looked finished. That is
                    what the dry pass is for.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                    Stage two &middot; wet
                  </span>
                  <div className="mt-3 space-y-4 text-[17px] leading-relaxed text-muted-foreground">
                    <p>
                      Only then does water come out. For sealed hard floors we use a Tineco FLOOR ONE S7 Master,
                      which pulls at 23,000&nbsp;Pa, senses how dirty the floor is and adjusts as it goes, cleans
                      against both edges, and keeps recovered dirty water in a separate tank from the clean solution.
                    </p>
                    <p>
                      Before any water goes down, someone identifies the floor. A renovated property often has three
                      or four materials in it, and sealed hardwood, engineered wood, laminate, luxury vinyl, tile,
                      porcelain and natural stone do not take the same moisture or the same machine. We do not flood
                      wood.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── What's included, by area ── */}
      <section id="whats-included" className="scroll-mt-24 border-t border-border bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">What&apos;s included</span>
            <h2 className="mb-4 mt-2 font-heading text-2xl font-bold md:text-3xl">What a Post-Construction Clean Covers</h2>
            <p className="mb-7 max-w-2xl text-[17px] leading-relaxed text-muted-foreground">
              Kitchens and bathrooms take the longest, and not because they are dirtier. They hold the most separate
              surfaces. Exact scope is confirmed in writing before the appointment, because a basement finish and a
              whole-house renovation are not the same job.
            </p>
            <div className="mb-7 grid gap-4 sm:grid-cols-2">
              {BY_AREA.map((r) => (
                <div key={r.room} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="mb-3 font-heading text-lg font-bold">{r.room}</h3>
                  <ul className="space-y-2">
                    {r.tasks.map((t) => (
                      <li key={t} className="flex items-start gap-2 text-[15px] text-muted-foreground">
                        <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#2E7D32]" /> {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <figure className="grid gap-5 sm:grid-cols-[1.6fr_1fr] sm:items-end">
              <img
                src={`${IMG}/window-work.webp`}
                srcSet={`${IMG}/window-work-sm.webp 480w, ${IMG}/window-work.webp 960w`}
                sizes="(min-width: 640px) 60vw, 100vw"
                alt="A uniformed Capital Clean Care team member cleaning a window in a newly built room, with the manufacturer's shipping label still stuck to the glass"
                className="aspect-[4/3] w-full rounded-2xl object-cover ring-1 ring-border"
                width={960}
                height={720}
                loading="lazy"
              />
              <figcaption className="text-[15px] leading-relaxed text-muted-foreground">
                The shipping label is still on the glass. Windows come with film, labels and adhesive from the
                factory, and the tracks hold dust that has compacted into the corners.
              </figcaption>
            </figure>
            <p className="mt-7 text-sm leading-relaxed text-muted-foreground">
              Some things stay outside our scope on purpose. We clean accessible register and return covers and the
              surfaces around them, which is not professional duct cleaning. Work requiring a licensed electrical,
              HVAC or mechanical trade is not part of a cleaning visit. We assess visually and by hand, and we do not
              perform measured air quality testing; an environmental testing service does that. For the longer read,
              see our{" "}
              <Link to="/resources/post-renovation-cleaning-guide-maryland" className="font-medium text-accent hover:underline">
                post-renovation cleaning guide
              </Link>
              .
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Faixa do resultado final (mockup). A foto é gerada e ilustra o padrão do
             serviço; não é o "depois" de um trabalho específico e não é rotulada como tal. ── */}
      <section className="border-t border-border">
        <div className="relative">
          <img
            src={`${IMG}/kitchen-finished.webp`}
            srcSet={`${IMG}/kitchen-finished-sm.webp 640w, ${IMG}/kitchen-finished.webp 1280w`}
            sizes="100vw"
            alt="A newly renovated kitchen with clean cabinets, countertops, appliances and floors, ready to move into"
            className="h-[22rem] w-full animate-kenburns object-cover md:h-[28rem]"
            width={1280}
            height={853}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="max-w-md">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/80">The standard</span>
                <h2 className="mb-3 mt-2 font-heading text-2xl font-bold text-white md:text-4xl">
                  Move-in ready, not broom-clean
                </h2>
                <p className="text-[17px] leading-relaxed text-white/85">
                  A construction contract usually ends at broom-clean: debris hauled out, floors swept.
                  What comes after that is this, and arranging it is normally the owner&apos;s job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing / assessment ── */}
      <section id="pricing" className="scroll-mt-24 border-t border-border py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">Pricing</span>
            <h2 className="mb-4 mt-2 font-heading text-2xl font-bold md:text-3xl">How Much Does Post-Construction Cleaning Cost?</h2>
            <div className="space-y-4 text-[17px] leading-relaxed text-muted-foreground">
              <p>
                We quote post-construction work after a technician has assessed the property, and we do not publish a
                price list for it. Two houses of identical size can take very different amounts of work depending on
                how the trades left them.
              </p>
              <p>
                Quoting that from a phone call would mean padding the number to cover the unknown, or giving you a
                figure that changes once we are inside. The assessment costs you nothing, and what comes out of it is
                a written scope with the price attached before anyone starts.
              </p>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ["Dust load", "How much settled, and how far it travelled through the property"],
                ["What was left behind", "Debris, packaging and protective film still on site"],
                ["Surface residue", "Paint spatter, adhesive, sealant and label glue"],
                ["Floors and surfaces", "Material, condition, moisture tolerance, and how many separate surfaces the rooms hold"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="font-heading font-bold text-foreground">{label}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{value}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* ── Personas ── */}
      <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <FadeInSection>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#2E7D32]">Is this you?</span>
            <h2 className="mb-6 mt-2 font-heading text-2xl font-bold md:text-3xl">When This Is the Right Service</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {PERSONAS.map((p) => (
                <div key={p.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <h3 className="mb-2 font-heading font-bold text-foreground">{p.title}</h3>
                  <p className="text-[15px] leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              If the property is also changing hands, a{" "}
              <Link to="/services/move-out-cleaning" className="font-medium text-accent hover:underline">
                move-in or move-out clean
              </Link>{" "}
              usually runs alongside this one. If the dust is old rather than new, you may want{" "}
              <Link to="/services/deep-cleaning" className="font-medium text-accent hover:underline">
                deep cleaning
              </Link>{" "}
              instead.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* ── Urgency ── */}
      <div className="w-full border-y border-yellow-300 bg-[#FFFDE7] px-4 py-4 text-center">
        <p className="text-base font-bold text-foreground">
          Now booking final cleans across Maryland, DC &amp; Northern Virginia
        </p>
      </div>

      {/* ── Stats ── */}
      <section className="py-8">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {[
              { v: "5.0★", l: "Google rating" },
              { v: "24h", l: "Re-clean guarantee" },
              { v: "10+ yrs", l: "Serving the DMV" },
              { v: "100%", l: "Satisfaction guarantee" },
            ].map((s) => (
              <div
                key={s.l}
                className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card px-3 py-5 text-center shadow-sm"
              >
                <span className="font-heading text-2xl font-extrabold leading-none text-[#2E7D32] md:text-3xl">{s.v}</span>
                <span className="text-xs font-medium text-muted-foreground">{s.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <LocationSocialProof
        cityName="DMV Region"
        citySlug="services"
        serviceSlug="post-construction-cleaning"
        serviceLabel="Post-Construction Cleaning"
      />

      {/* ── Service areas ── */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-4 font-heading text-2xl font-bold">Post-Construction Cleaning Near You</h2>
          <div className="mb-4 flex flex-wrap gap-2">
            {topCities.map((c) => (
              <Link
                key={c.slug}
                to={`/locations/${c.slug}`}
                className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-[#2E7D32]/40 hover:text-[#2E7D32]"
              >
                {c.name}, {c.state}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {slCities
              .filter((c) => isIndexable(`/locations/${c.slug}/post-construction-cleaning`))
              .slice(0, 10)
              .map((c) => (
                <Link
                  key={c.slug}
                  to={`/locations/${c.slug}/post-construction-cleaning`}
                  className="rounded-full border border-[#2E7D32]/20 bg-[#F4FAF4] px-3.5 py-1.5 text-sm text-[#2E7D32] transition-colors hover:bg-[#2E7D32]/10"
                >
                  Post-Construction Cleaning in {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* ── Guides ── */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <GuideCards heading="Post-Construction Cleaning Guides" guides={guidesBySlugs(SPOKES)} />
        </div>
      </section>

      <TrustBadges compact withBackground={false} />

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container mx-auto max-w-4xl px-4">
          <h2 className="mb-6 font-heading text-2xl font-bold">Post-Construction Cleaning FAQ</h2>
          <FAQ faqs={service.faqs} />
          <div className="mt-8 rounded-xl border border-border bg-secondary/40 p-5 text-sm leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Reviewed by Capital Clean Care · Updated September 20, 2026</p>
            <p className="mt-2">
              Equipment specifications are the manufacturers&apos; published figures. Dust behaviour and filtration
              standards reflect published guidance from the EPA, OSHA and the US Department of Energy, cited here as
              technical reference rather than certification. Scope and price for any property are confirmed in writing
              after an on-site assessment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quote form ── */}
      <section id="quote" className="bg-secondary py-16" style={{ scrollMarginTop: 120 }}>
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-2 font-heading text-2xl font-bold md:text-3xl">Book Your Free Post-Construction Assessment</h2>
            <p className="text-muted-foreground">
              A technician reads the property, and you get a written scope with the price on it before any work
              starts.
            </p>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm defaultService="post-construction" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* ── Chamada escura de fechamento (mockup) ── */}
      <section className="bg-primary py-14 text-primary-foreground md:py-16">
        <div className="container mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[1fr_auto]">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">
              Clean spaces create brighter tomorrows
            </span>
            <h2 className="mb-3 mt-2 font-heading text-2xl font-bold md:text-4xl">
              Ready for a Detailed Post-Construction Clean?
            </h2>
            <p className="mb-7 max-w-lg text-[17px] leading-relaxed text-white/80">
              The price comes after a technician assesses the property, because two houses of the same size can
              be left in very different states. The assessment is free and the scope comes in writing.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#2E7D32] px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-[#1B5E20]"
              >
                Request Estimate <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border-2 border-white/40 px-7 py-3.5 text-base font-bold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 shrink-0" /> {PHONE}
              </a>
            </div>
          </div>
          <ul className="space-y-3">
            {[{ icon: Home, t: "Homes" }, { icon: Building2, t: "Condos" }, { icon: Building, t: "Commercial" }].map((x) => (
              <li key={x.t} className="flex items-center gap-3 text-base font-semibold">
                <x.icon className="h-5 w-5 shrink-0 text-white/70" /> {x.t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />

      {/* ── Mobile split CTA ── */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background shadow-[0_-4px_16px_rgba(0,0,0,0.08)] md:hidden">
        <a href={PHONE_HREF} className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-[#2E7D32]">
          <Phone className="h-4 w-4" /> Call
        </a>
        <button onClick={scrollToForm} className="bg-[#2E7D32] py-3.5 text-sm font-bold text-white">
          Free Assessment
        </button>
      </div>
      <div className="h-14 md:hidden" aria-hidden="true" />
    </div>
  );
};

export default PostConstructionPreview;
