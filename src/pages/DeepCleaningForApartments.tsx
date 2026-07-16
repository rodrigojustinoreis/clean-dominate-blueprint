import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/sparkling-kitchen.webp";
const URL = "https://capitalcleancare.com/resources/deep-cleaning-for-apartments";

// Team timelines for apartments — the smaller end of our standard deep-clean timings.
const timeline: [string, string][] = [
  ["Studio / 1-bedroom", "2–3 hours"],
  ["2-bedroom", "3–4 hours"],
  ["3-bedroom / large condo", "4–6 hours"],
];

const differences: { title: string; text: string }[] = [
  { title: "Smaller footprint, tighter timeline", text: "Most apartments and condos are a single level with less square footage than a house, so a deep clean runs faster — often a half-day rather than a full one. Fewer rooms also means the team can go deeper on the ones you have." },
  { title: "Building access and logistics", text: "High-rises come with their own rules: loading docks, service elevators, visitor parking, and front-desk check-in. A little coordination up front — a COI on file, a reserved elevator window — keeps the clean on schedule." },
  { title: "Shared walls, HVAC, and air", text: "Condos trap dust in vents and along baseboards just like houses, and shared HVAC can move it around. Deep cleaning vents, registers, and window tracks makes a real difference to the air in a closed-up unit." },
  { title: "Balconies and sliding-door tracks", text: "The one 'outdoor' surface most units have. Glass, tracks, and railings collect grime fast in the city and are easy to forget — we include the interior glass and slider tracks." },
];

const faqs = [
  { q: "How long does it take to deep clean an apartment?", a: "With a 2-person team, a studio or 1-bedroom apartment usually takes about 2 to 3 hours, a 2-bedroom around 3 to 4 hours, and a larger 3-bedroom condo 4 to 6 hours. Condition matters as much as size — a unit that hasn't had a thorough clean in a while, or one with heavy kitchen and bathroom buildup, sits at the top of its range." },
  { q: "Do you deep clean high-rise condos and apartment buildings?", a: "Yes — we regularly clean condos and high-rise units across Silver Spring, Bethesda, and the wider DMV. We work with building requirements like certificate-of-insurance paperwork, service-elevator reservations, and front-desk or fob access. Let us know your building's rules when you book and we'll handle the coordination." },
  { q: "Will a deep clean help me get my apartment deposit back?", a: "It can make a real difference. A move-out deep clean targets exactly what landlords and property managers inspect — inside appliances, bathroom grout, baseboards, and floors. If you're moving, our move-out cleaning is built around deposit-return standards, and an empty unit cleans faster and more thoroughly since there's no furniture to work around." },
  { q: "Is deep cleaning an apartment cheaper than a house?", a: "Usually, yes — a smaller footprint means less time and a lower flat price than a comparable single-family home. The exact price still depends on the number of bathrooms and the unit's condition rather than square footage alone. Tell us the size and condition and we'll quote a flat rate with no hidden fees." },
];

const DeepCleaningForApartments = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning for Apartments & Condos: What to Expect",
    description:
      "How deep cleaning an apartment or condo differs from a house — building access, shorter timelines, and what's covered. Real team timelines for studios to large condos across the DMV.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="deep cleaning apartment, condo deep cleaning, apartment deep clean cost, high-rise cleaning, deep clean apartment silver spring bethesda" />
      </Helmet>
      <ArticleSchema
        title="Deep Cleaning for Apartments & Condos: What to Expect"
        description="How an apartment or condo deep clean differs from a house — logistics, timelines, and scope — with real 2-person-team timings for studios through large condos."
        url={URL}
        datePublished="2026-07-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Deep Cleaning for Apartments", href: "/resources/deep-cleaning-for-apartments" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Deep Cleaning for Apartments & Condos" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="deep cleaning for apartments — a spotless condo kitchen in the DMV">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Deep Cleaning for Apartments &amp; Condos</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">How it differs from a house — logistics, timelines, and what's covered</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Deep cleaning an apartment or condo isn't just a smaller version of cleaning a house. The scope is the
              same — inside appliances, grout, baseboards, vents, and behind furniture — but the footprint is smaller,
              the timeline is shorter, and there's an extra layer of building logistics that a single-family home never
              has. Here's what to expect for a unit in Silver Spring, Bethesda, or anywhere across the DMV.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-6 scroll-mt-24">How Apartment Deep Cleaning Differs From a House</h2>
            <div className="space-y-4 mb-8">
              {differences.map((d) => (
                <div key={d.title} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-1.5">{d.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{d.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">Deep Cleaning Timelines by Unit Size</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Apartments sit at the faster end of our deep-clean timelines. With a 2-person team, most units are done in
              a half-day or less:
            </p>
            <div className="rounded-2xl border border-border overflow-hidden mb-6 text-sm">
              <div className="grid grid-cols-2 bg-primary text-primary-foreground font-semibold">
                <div className="p-3">Unit size</div>
                <div className="p-3">Time (2-person team)</div>
              </div>
              {timeline.map((r, i) => (
                <div key={r[0]} className={`grid grid-cols-2 border-t border-border ${i % 2 === 1 ? "bg-secondary/30" : "bg-white"}`}>
                  <div className="p-3 font-medium text-foreground">{r[0]}</div>
                  <div className="p-3 text-muted-foreground">{r[1]}</div>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Condition shifts these as much as size does — see the full picture in{" "}
              <Link to="/resources/how-long-does-deep-cleaning-take" className="text-accent underline hover:no-underline">how long a deep cleaning takes</Link>, and
              exactly what's covered in{" "}
              <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">what's included in a deep cleaning</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">What an Apartment Deep Clean Covers</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The scope is the full deep-clean checklist, sized to a unit rather than a house. In a typical apartment or
              condo, that means:
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-4">
              {[
                "Inside the oven, microwave, and refrigerator",
                "Stovetop, range hood, backsplash, and cabinet fronts",
                "Bathroom tile and grout scrubbed; glass and fixtures de-scaled",
                "Baseboards, trim, doors, and door frames wiped",
                "Ceiling fans, light fixtures, and air vents dusted",
                "Window sills, tracks, blinds, and slider glass",
                "Behind and under accessible furniture",
                "All floors HEPA-vacuumed and hard floors mopped",
                "High-touch surfaces sanitized with EPA Safer Choice products",
                "Inside cabinets and closets on request",
              ].map((it) => (
                <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {it}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Because there's less square footage, the team can spend more of the visit on the detail work that actually
              makes a unit feel new — the grout, the vents, and the tracks — rather than covering ground.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Deep cleaning a condo or apartment?" subtext="We handle building access and COI paperwork, and quote a flat price for your unit size. EPA Safer Choice products, background-checked teams, across Silver Spring, Bethesda, and the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">Renters, Move-Outs, and Local Buildings</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you rent, a deep clean is also your best tool for protecting a deposit — an empty unit cleans faster and
              lets the team reach every surface a landlord inspects. When you're on either side of a move, our{" "}
              <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-in / move-out cleaning</Link>{" "}
              is built around deposit-return standards.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One tip specific to buildings: check your condo or apartment's rules before you book. Some require the
              cleaning company to have a certificate of insurance on file with management, and many restrict service
              elevators to certain hours. A locally owned, fully insured company can turn a COI around quickly — we do it
              routinely — so it rarely holds up a booking as long as you flag it a day or two ahead.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We clean condos and high-rises throughout the region, including detailed local pages for{" "}
              <Link to="/locations/silver-spring-md/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning in Silver Spring</Link>{" "}
              and{" "}
              <Link to="/locations/bethesda-md/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning in Bethesda</Link>. The
              full service — flat pricing, eco-friendly products, satisfaction guaranteed — is on our{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning page</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg my-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Book a Deep Clean for Your Unit</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Flat pricing sized to your apartment or condo, building logistics handled, and a white-glove finish. 5.0 stars across 45 Google reviews, serving the DMV since 2015.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call (240) 704-2551</a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">Apartment Deep Cleaning: FAQ</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="deep-cleaning-for-apartments" />
      <StickyCTA />
    </Layout>
  );
};

export default DeepCleaningForApartments;
