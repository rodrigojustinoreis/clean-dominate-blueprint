/**
 * Rockville hub, premium layout (owner, 2026-10-12: "refaça o layout ... premium em todos os aspectos").
 * Rendered by CityPage for /locations/rockville-md, so the URL, title, description, canonical, H1,
 * schemas (Breadcrumb, WebPage, FAQPage, Service, LocalBusiness), FAQ text and every internal link of
 * the template version are kept; only the layout changes. Same visual language as the premium service
 * pages (light hero with a real photo, credentials strip, answer + fact sheet, real-photo service table,
 * GreenShield method, quote form with the credentials carousel). Brand colors, no new claims.
 */
import { Link } from "react-router-dom";
import { ArrowRight, Phone, Star, MapPin, CheckCircle, ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import PricingTable from "@/components/PricingTable";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";
import HomeTrustMarquee from "@/components/home/HomeTrustMarquee";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import GoogleBusinessLinks from "@/components/GoogleBusinessLinks";
import { FAQSchema, ServiceSchema, BreadcrumbSchema, LocalBusinessSchema, WebPageSchema } from "@/components/SchemaMarkup";
import { hubHref } from "@/data/related-content";
import type { CityData } from "@/data/locations";
import type { HubServiceSelection } from "@/data/hub-service-selection";
import { trackPhoneClick } from "@/lib/analytics";

type Review = { name: string; text: string; location?: string; datePublished?: string };
type Icon = React.ComponentType<{ className?: string }>;

export interface RockvilleHubData {
  thumb: string;
  serviceGuide: { name: string; bestFor: string; href: string; img: string; imgAlt: string }[];
  facts: { label: string; value: string }[];
  photos: { src480: string; src768: string; alt: string; caption: string }[];
  why: { icon: Icon; text: string }[];
  whyIntro: string;
  faqs: { q: string; a: string }[];
  dateModified: string;
  neighborhoods: string[];
}

const H2 = "font-heading text-2xl md:text-3xl lg:text-4xl font-bold tracking-[-0.02em] leading-tight text-foreground";
const EYEBROW = "text-xs font-bold uppercase tracking-[0.18em] text-primary";
const URL = "https://capitalcleancare.com/locations/rockville-md";
const TEAM = "/images/team/team-group-uniforms.webp";
const TEAM_640 = "/images/team/team-group-uniforms-640.webp";

const Section = ({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) => (
  <section id={id} className={`scroll-mt-28 py-14 md:py-20 ${className}`}>{children}</section>
);

const RockvilleHub = ({
  city,
  seoHelmet,
  nearbyCities,
  curated,
  testimonials,
  data,
}: {
  city: CityData;
  seoHelmet: JSX.Element;
  nearbyCities: CityData[];
  curated: HubServiceSelection | null;
  testimonials: Review[];
  data: RockvilleHubData;
}) => {
  const cityLabel = `${city.name}, ${city.state}`;
  const tableHrefs = new Set(data.serviceGuide.map((s) => s.href));
  const moreServices = curated
    ? [...curated.primary, ...curated.more].filter((c, i, all) => !tableHrefs.has(c.href) && all.findIndex((x) => x.href === c.href) === i)
    : [];

  return (
    <Layout>
      {seoHelmet}
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Maryland", href: "/maryland" }, { label: city.name, href: "/locations/rockville-md" }]} />
      <WebPageSchema
        name={city.metaTitle}
        description={city.metaDescription}
        url={URL}
        dateModified={data.dateModified}
        cityName={city.name}
        stateCode="Maryland"
        primaryImage="https://capitalcleancare.com/images/locations/rockville-real-work/rockville-real-cleaning-og.webp"
      />
      <FAQSchema faqs={data.faqs} />
      <ServiceSchema
        serviceName={city.schemaServiceName || `Cleaning Services in ${city.name}, ${city.state}`}
        description={`Professional residential cleaning services in ${cityLabel}, including recurring, deep, move-in, move-out, apartment, and eco-friendly cleaning.`}
        url={URL}
        areaServed={["Rockville, MD", "20850", "20851", "20852", "20853"]}
        serviceType="Residential Cleaning Services"
        image="https://capitalcleancare.com/images/locations/rockville-real-work/window-frame-cleaning-768.webp"
      />
      <LocalBusinessSchema areaServed={[cityLabel, ...(city.county ? [`${city.county}, ${city.state}`] : [])]} reviews={testimonials} />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/[0.07] via-background to-accent/[0.08] pb-14 pt-8 md:pb-20 md:pt-12">
        <div className="container mx-auto max-w-6xl px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Maryland", href: "/maryland" }, { label: city.name }]} className="mb-6" />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
            <div className="min-w-0">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-3.5 py-1.5 shadow-sm">
                <span className="flex gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}
                </span>
                <span className="text-sm font-bold text-foreground">5.0</span>
                <span className="text-sm text-muted-foreground">· Google reviews</span>
              </div>
              <p className={`${EYEBROW} mb-3`}>Rockville, MD · ZIP 20850 to 20853</p>
              <h1 className="mb-5 font-heading text-4xl font-bold leading-[1.08] tracking-[-0.03em] md:text-5xl lg:text-[3.4rem]">
                {city.h1 || `Cleaning Services in ${cityLabel}`}
              </h1>
              <p className="mb-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {city.heroLead || "One trusted local team for recurring, deep, move-in, move-out, apartment, and eco-friendly cleaning across Rockville."}
              </p>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row">
                <Button variant="cta" size="lg" className="h-14 rounded-xl px-8 text-base" asChild>
                  <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></a>
                </Button>
                <Button variant="outline" size="lg" className="h-14 rounded-xl border-2 px-6 text-base" asChild>
                  <a href="tel:+12407042551" onClick={() => trackPhoneClick("rockville_hub_hero")}>
                    <Phone className="mr-2 h-4 w-4" aria-hidden="true" /> (240) 704-2551
                  </a>
                </Button>
              </div>
              <HomeTrustMarquee className="-mt-1 max-w-xl" pxPerSecond={28} trackClassName="gap-6 py-1 sm:gap-8" />
            </div>
            <figure className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
                <img
                  src={TEAM}
                  srcSet={`${TEAM_640} 640w, ${TEAM} 1200w`}
                  sizes="(min-width: 1024px) 480px, 100vw"
                  alt="The Capital Clean Care team, five employees in navy uniforms"
                  width={1200}
                  height={773}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-border bg-white/95 px-5 py-3 shadow-xl backdrop-blur-sm">
                <span className="font-heading text-3xl font-extrabold leading-none text-primary">10+</span>
                <span className="text-xs leading-tight text-muted-foreground">years cleaning<br />Montgomery County homes</span>
              </div>
              <figcaption className="sr-only">Our team, serving Rockville and Montgomery County since 2015.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Quick answer + fact sheet ── */}
      <Section className="border-y border-border bg-card" id="answer">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="rounded-3xl border border-primary/15 bg-primary/[0.03] p-6 shadow-sm md:p-10">
            <p className="mb-3 text-sm font-semibold text-accent">Updated October 12, 2026 · Serving Rockville ZIP codes 20850–20853</p>
            <h2 id="rockville-cleaning-answer" className={`${H2} mb-5`}>What cleaning services are available in Rockville, MD?</h2>
            <p className="text-[17px] leading-relaxed text-foreground md:text-lg">
              Capital Clean Care is a Rockville cleaning company providing home cleaning on a weekly, bi-weekly or monthly schedule, one-time deep cleaning, move-in and move-out cleaning, apartment and condo cleaning, post-construction cleanup and eco-friendly service across ZIP codes 20850 to 20853, from King Farm and Fallsgrove to Twinbrook and Rockville Town Center. Our insured, background-checked employees bring the equipment and plant-based products, follow a room-by-room checklist, and every visit is backed by our 24-hour re-clean guarantee. Choose a service below for its complete scope, or request a written quote based on home size, bathrooms, condition and frequency.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-white p-5 md:p-6">
              <h3 className="mb-4 font-heading text-lg font-bold">Rockville at a glance</h3>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-[max-content_minmax(0,1fr)]">
                {data.facts.map((f) => (
                  <div key={f.label} className="contents">
                    <dt className="text-sm font-semibold text-foreground">{f.label}</dt>
                    <dd className="text-sm leading-relaxed text-muted-foreground">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <nav aria-label="On this page" className="mt-8">
            <ul className="flex flex-wrap justify-center gap-2 text-sm">
              {[["services", "Services"], ["method", "Our method"], ["our-work", "Our work"], ["pricing", "Pricing"], ["faq", "FAQ"], ["areas", "Neighborhoods"], ["quote", "Free quote"]].map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="inline-flex min-h-11 items-center rounded-full border border-border bg-white px-4 font-medium text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary">{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Section>

      {/* ── Services with real photos ── */}
      <Section id="services">
        <div className="container mx-auto max-w-5xl px-4">
          <p className={`${EYEBROW} mb-2`}>Choose your service</p>
          <h2 className={`${H2} mb-3`}>Cleaning Services in Rockville</h2>
          <p className="mb-8 max-w-2xl text-muted-foreground">Each service has its own Rockville page with the full scope, local FAQs and a free written quote.</p>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="hidden grid-cols-[6rem_minmax(0,0.8fr)_minmax(0,1.5fr)] gap-5 bg-secondary px-5 py-3 text-sm font-semibold sm:grid">
              <span aria-hidden="true" />
              <span>Service</span>
              <span>Best for</span>
            </div>
            {data.serviceGuide.map((s) => (
              <Link
                key={s.name}
                to={s.href}
                className="group grid grid-cols-[5rem_minmax(0,1fr)_auto] items-center gap-4 border-t border-border px-4 py-4 transition-colors hover:bg-primary/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary sm:grid-cols-[6rem_minmax(0,0.8fr)_minmax(0,1.5fr)] sm:gap-5 sm:px-5"
              >
                <img
                  src={`${data.thumb}/${s.img}-160.webp`}
                  srcSet={`${data.thumb}/${s.img}-160.webp 160w, ${data.thumb}/${s.img}-320.webp 320w`}
                  sizes="96px"
                  alt={s.imgAlt}
                  width={160}
                  height={120}
                  loading="lazy"
                  decoding="async"
                  className="h-[60px] w-20 rounded-xl object-cover shadow-sm transition-transform duration-300 motion-safe:group-hover:scale-105 sm:h-[72px] sm:w-24"
                />
                <span className="min-w-0">
                  <span className="block font-heading text-[17px] font-bold text-primary">{s.name}</span>
                  <span className="mt-0.5 block text-sm leading-snug text-muted-foreground sm:hidden">{s.bestFor}</span>
                </span>
                <span className="hidden items-center justify-between gap-3 text-sm text-muted-foreground sm:flex">
                  {s.bestFor}<ArrowRight className="h-4 w-4 shrink-0 transition-transform motion-safe:group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground sm:hidden" aria-hidden="true" />
              </Link>
            ))}
          </div>

          {moreServices.length > 0 && (
            <details className="group/more mt-5 rounded-2xl border border-border bg-card">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 p-5 font-medium text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                <span>More services and overviews ({moreServices.length})</span>
                <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-muted-foreground motion-safe:transition-transform group-open/more:rotate-180" />
              </summary>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-1 border-t border-border px-5 pb-5 pt-4 sm:grid-cols-2">
                {moreServices.map((c) => (
                  <li key={c.href}>
                    <Link to={c.href} className="block min-h-11 py-2 text-[15px] leading-snug text-foreground underline-offset-2 hover:text-primary hover:underline">
                      <span className="block">{c.label}</span>
                      {c.national && <span className="block text-sm text-muted-foreground">MD, DC &amp; VA service guide</span>}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/senior-home-cleaning-montgomery-county-md" className="block min-h-11 py-2 text-[15px] leading-snug text-foreground underline-offset-2 hover:text-primary hover:underline">
                    <span className="block">Senior Home Cleaning in Rockville</span>
                    <span className="block text-sm text-muted-foreground">Montgomery County</span>
                  </Link>
                </li>
              </ul>
            </details>
          )}

          <div className="mt-6 space-y-2 text-sm text-muted-foreground">
            <p>
              This page compares every service we offer in Rockville. To book regular house cleaning, go to the{" "}
              <Link to="/locations/rockville-md/house-cleaning" className="font-semibold text-primary underline underline-offset-2 hover:no-underline">Rockville house cleaning page</Link>,
              which covers what each visit includes and how to request a written quote.
            </p>
            <p>
              Comparing budgets? See our transparent <Link to="/resources/house-cleaning-cost-rockville-md" className="font-semibold text-primary hover:underline">2026 Rockville cleaning cost guide</Link>.
              {" "}Senior guides: <Link to="/resources/house-cleaning-for-seniors" className="text-primary hover:underline">house cleaning for seniors</Link>
              {" · "}<Link to="/resources/free-house-cleaning-for-seniors" className="text-primary hover:underline">free &amp; low-cost help</Link>.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Mid CTA band ── */}
      <section className="bg-primary py-12 text-primary-foreground md:py-14">
        <div className="container mx-auto flex max-w-5xl flex-col items-center gap-6 px-4 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <h2 className="font-heading text-2xl font-bold md:text-3xl">Get your free cleaning quote in Rockville</h2>
            <p className="mt-2 text-primary-foreground/80">Tell us your priorities and we confirm the scope and visit details in writing.</p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Button variant="secondary" size="lg" className="h-12 rounded-xl px-7" asChild>
              <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" /></a>
            </Button>
            <Button variant="outline" size="lg" className="h-12 rounded-xl border-white/40 bg-transparent px-6 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground" asChild>
              <a href="tel:+12407042551" onClick={() => trackPhoneClick("rockville_hub_band")}><Phone className="mr-2 h-4 w-4" aria-hidden="true" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ── Our method ── */}
      <div id="method" className="scroll-mt-28">
        <GreenShield5Step compact showCTA={false} claims="label-based" />
      </div>

      {/* ── Our work in Rockville (real photos) ── */}
      <Section id="our-work" className="border-t border-border bg-secondary/40">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className={`${EYEBROW} mb-2`}>Local knowledge</p>
              <h2 className={`${H2} mb-6`}>Our Work in {city.name}</h2>
              <div className="space-y-4 text-[17px] leading-relaxed text-foreground">
                {city.intro.split("\n\n").map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
            <div className="lg:sticky lg:top-28">
              <div className="grid grid-cols-2 gap-3" aria-label="Documented Capital Clean Care work completed in Rockville">
                {data.photos.map((ph) => (
                  <figure key={ph.src480} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                    <img src={ph.src480} srcSet={`${ph.src480} 480w, ${ph.src768} 768w`} sizes="(max-width: 1023px) 46vw, 270px" alt={ph.alt} width={480} height={640} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="px-3 py-2 text-xs leading-snug text-muted-foreground">{ph.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                These original photographs document a Capital Clean Care residential cleaning visit in Rockville on <time dateTime="2026-08-17">August 17, 2026</time>. The work shown includes interior window-frame, track, latch, bathroom mirror-area, and light-fixture detailing. The client's identity and exact address are withheld for privacy.
              </p>
              <details className="group/note mt-4 rounded-2xl border border-accent/25 bg-accent/5">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-3 px-5 py-3 font-heading text-base font-bold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary [&::-webkit-details-marker]:hidden">
                  <span>What this visit documents</span>
                  <ChevronDown aria-hidden="true" className="h-5 w-5 shrink-0 text-muted-foreground motion-safe:transition-transform group-open/note:rotate-180" />
                </summary>
                <p className="border-t border-accent/20 px-5 pb-5 pt-3 text-sm leading-relaxed text-foreground">
                  On August 17, 2026, a Capital Clean Care team completed residential detail work in Rockville, Maryland. The photographs on this page show the team cleaning an interior window's upper frame, track, and latch, then detailing the bathroom mirror area and light fixtures. These are original photographs from that Rockville appointment, not stock images or AI illustrations. They document the type of reachable-detail work that may be included when it appears in the client's confirmed cleaning scope. Because every home and service package is different, the photographs show work completed on this visit. They are not a promise that every item is included automatically. Capital Clean Care protects the client's privacy by publishing neither the resident's identity nor the property's street address. Homeowners who need window tracks, light fixtures, or another detail handled should list it when requesting a quote so the written scope can confirm it before the appointment.
                </p>
              </details>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Why + reviews ── */}
      <Section>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div>
              <p className={`${EYEBROW} mb-2`}>Why us</p>
              <h2 className={`${H2} mb-3`}>Why Rockville Homeowners Choose Us</h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">{data.whyIntro}</p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.why.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10"><item.icon className="h-5 w-5 text-accent" /></span>
                    <span className="mt-1 text-sm leading-snug text-foreground">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={`${EYEBROW} mb-2`}>Client reviews</p>
              <h2 className={`${H2} mb-6`}>What Our Clients Say on Google</h2>
              <div className="space-y-4">
                {testimonials.map((t) => (
                  <figure key={t.name} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                    <div className="mb-3 flex gap-0.5" aria-label="5 out of 5 stars">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                    </div>
                    <blockquote className="text-[15px] italic leading-relaxed text-foreground">"{t.text}"</blockquote>
                    <figcaption className="mt-3 text-sm"><span className="font-semibold text-foreground">{t.name}</span> <span className="text-muted-foreground">· Google review</span></figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ── Pricing ── */}
      <Section id="pricing" className="border-t border-border bg-secondary">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="mb-8 text-center">
            <p className={`${EYEBROW} mb-2`}>Published prices</p>
            <h2 className={`${H2} mb-3`}>Pricing in {city.name}</h2>
            <p className="text-muted-foreground">Estimated ranges by home size. Your actual price depends on bedrooms, bathrooms, condition, and cleaning type.</p>
          </div>
          <PricingTable />
          <h3 className="mb-4 mt-12 font-heading text-xl font-bold">What Affects Your Price in {city.name}</h3>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["Number of bedrooms & bathrooms", "Type of service requested", "Current condition of the home", "Frequency (one-time vs. recurring)", "Number of levels / floors", "Special requests or add-ons"].map((f) => (
              <li key={f} className="flex items-center gap-2 rounded-xl bg-white p-3 text-sm shadow-sm"><CheckCircle className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{f}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section id="faq">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className={`${H2} mb-8 text-center`}>{city.name} Cleaning FAQ</h2>
          <FAQ faqs={data.faqs} />
        </div>
      </Section>

      {/* ── Neighborhoods, map, nearby ── */}
      <Section id="areas" className="border-t border-border bg-secondary/40">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className={`${H2} mb-3`}>Neighborhoods We Serve in {city.name}</h2>
              <p className="mb-6 text-muted-foreground">Our teams know these Rockville neighborhoods, their street layouts and their home styles. We serve every area below and the streets between them.</p>
              <ul className="flex flex-wrap gap-2">
                {data.neighborhoods.map((n) => (
                  <li key={n} className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-white px-3 py-1.5 text-sm font-medium text-accent"><MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />{n}</li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Don't see your neighborhood? <a href="tel:+12407042551" className="font-semibold text-primary hover:underline">Call (240) 704-2551</a>. We likely serve your area.
              </p>
              <h3 className="mb-3 mt-10 font-heading text-lg font-bold">Nearby Areas We Serve</h3>
              <ul className="flex flex-wrap gap-2">
                {nearbyCities.map((nc) => {
                  const href = hubHref(nc.slug);
                  const label = `${nc.name}${nc.state !== "DC" ? `, ${nc.state}` : ""}`;
                  return (
                    <li key={nc.slug}>
                      {href ? (
                        <Link to={href} className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border bg-white px-4 text-sm font-medium hover:border-primary/30 hover:text-primary"><MapPin className="h-4 w-4 text-accent" aria-hidden="true" />{label}</Link>
                      ) : (
                        <span className="inline-flex min-h-11 items-center gap-1.5 rounded-xl border border-border bg-white px-4 text-sm"><MapPin className="h-4 w-4 text-accent" aria-hidden="true" />{label}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-heading text-xl font-bold">Our {city.name} Service Area</h2>
              <p className="mb-6 text-muted-foreground">We serve all neighborhoods in and around {cityLabel}. See our coverage area below.</p>
              <GoogleMapEmbed cityName={city.name} state={city.state} />
              <div className="mt-6"><GoogleBusinessLinks /></div>
            </div>
          </div>
        </div>
      </Section>

      <TrustBadges compact />

      {/* ── Quote form with the credentials carousel ── */}
      <section className="scroll-mt-20 bg-secondary py-16 md:py-20" id="quote">
        <div className="container mx-auto max-w-2xl px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-3 font-heading text-3xl font-bold">Get a Free Quote in {city.name}</h2>
            <p className="text-muted-foreground">Tell us about your {city.name} home and we'll respond with a personalized estimate.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
            <QuoteForm trustVariant="credentials-row" trustMarqueeSpeed={28} />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RockvilleHub;
