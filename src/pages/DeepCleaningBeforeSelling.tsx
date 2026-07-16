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
const URL = "https://capitalcleancare.com/resources/deep-cleaning-before-selling-house";

const priorities: { room: string; why: string }[] = [
  { room: "Kitchen", why: "The room buyers scrutinize most. Degrease the range hood and backsplash, clean inside the oven and microwave, descale the sink, and make cabinet fronts and countertops gleam — it reads as a well-maintained home." },
  { room: "Bathrooms", why: "Grout, glass, and fixtures are where wear shows fastest. Scrubbed grout, de-scaled shower glass, and polished chrome make a dated bathroom look cared-for in photos and in person." },
  { room: "Floors and entryways", why: "The first and last thing anyone notices. Edge-to-edge vacuuming, mopped hard floors, and a spotless entry set the tone the moment the door opens." },
  { room: "Windows, sills, and light", why: "Clean glass and dusted fixtures let in more light, which makes rooms photograph brighter and feel larger — the single biggest lever in a listing photo." },
  { room: "Detail zones", why: "Baseboards, vents, ceiling fans, and behind-the-door corners. Buyers can't always name what feels 'off' about a dusty home, but they feel it. Detail is what separates 'clean' from 'move-in ready.'" },
];

const faqs = [
  { q: "How soon before listing should I deep clean?", a: "Schedule the deep clean right before your listing photos are taken, and ideally within a few days of going live. Photos are what get buyers in the door, so the home should be at its absolute best when the photographer arrives. If there's a gap between photos and the first showings, a quick touch-up keeps it camera-ready — but the deep clean itself only needs to happen once, just before the home hits the market." },
  { q: "Is a deep clean before selling actually worth it?", a: "For most sellers, yes. A deep clean is inexpensive relative to the sale price, and a spotless home photographs better, shows better, and signals that the property has been well maintained — which is exactly the impression you want buyers and agents to leave with. It's one of the highest-return, lowest-cost things you can do before listing, and it's why many real-estate agents recommend it as a standard first step." },
  { q: "What do buyers and agents notice most?", a: "Kitchens and bathrooms first, then floors, light, and smell. Buyers rarely itemize it, but grime on grout, a greasy range hood, dusty vents, or a musty odor all register as 'this home hasn't been cared for.' A deep clean removes those signals so buyers focus on the home itself instead of its upkeep." },
  { q: "Should I deep clean or just tidy up before showings?", a: "Tidying helps day to day, but a pre-listing deep clean is a different level — it reaches the detail areas a quick tidy never touches: inside appliances, grout, baseboards, vents, and behind furniture. Think of the deep clean as the one-time reset before you list, and light tidying as what keeps it showing-ready between visits." },
];

const DeepCleaningBeforeSelling = () => {
  const { seoHelmet } = useSEO({
    title: "Deep Cleaning Before Selling Your House: A Seller's Guide",
    description:
      "Why agents recommend a deep clean before listing, what to prioritize for photos and showings, and the ideal timing. A room-by-room guide to getting your home market-ready.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="deep cleaning before selling house, clean house before listing, deep clean for showings, pre-listing cleaning, cleaning house to sell" />
      </Helmet>
      <ArticleSchema
        title="Deep Cleaning Before Selling Your House: A Seller's Guide"
        description="Why a deep clean before selling matters, what to prioritize for listing photos and showings, and the ideal timing before your home hits the market."
        url={URL}
        datePublished="2026-07-16"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Deep Cleaning Before Selling", href: "/resources/deep-cleaning-before-selling-house" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Deep Cleaning Before Selling Your House" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="deep cleaning before selling — a spotless, listing-ready kitchen">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Deep Cleaning Before Selling Your House</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Why agents recommend it, what to prioritize for photos and showings, and when to book it</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A deep clean before you list is one of the cheapest, highest-return things you can do to sell your home.
              A spotless house photographs better, shows better, and quietly signals that the property has been well
              cared for — the exact impression that helps buyers picture themselves living there. It's why so many
              real-estate agents treat a pre-listing deep clean as step one.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Here's why it matters, what to prioritize for listing photos and showings, and when to schedule it so your
              home looks its absolute best the moment it hits the market.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-4 mb-4 scroll-mt-24">Why Agents Recommend a Deep Clean Before Listing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Buyers make up their minds fast, and much of that judgment is about <em>upkeep</em>, not layout. Grime on
              grout, a greasy range hood, dusty vents, or a faint musty smell all register — often subconsciously — as a
              home that hasn't been maintained. That impression follows buyers into every other part of the tour and can
              shape what they're willing to offer.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A deep clean removes those signals so the home shows on its own merits. It also makes listing photos
              brighter and crisper, which is what actually gets buyers through the door in the first place. Against a
              home's sale price, the cost of a deep clean is small — see{" "}
              <Link to="/resources/how-much-does-deep-cleaning-cost" className="text-accent underline hover:no-underline">how much a deep cleaning costs</Link>{" "}
              — which is why the return is so lopsided in the seller's favor.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">What to Prioritize for Photos and Showings</h2>
            <div className="space-y-4 mb-8">
              {priorities.map((p) => (
                <div key={p.room} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-1.5">{p.room}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.why}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              There's one thing sellers consistently underestimate: <strong>smell</strong>. Pets, cooking, and smoke
              leave odors that a homeowner stops noticing but a buyer registers within seconds of walking in. A deep
              clean tackles the sources — carpets, upholstery, trash areas, and the kitchen — rather than masking them
              with fragrance, which savvy buyers read as a red flag. A genuinely neutral-smelling home lets buyers stay
              focused on the space instead of wondering what's being covered up.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              All of this is the standard scope of a professional deep clean — see the full{" "}
              <Link to="/resources/what-is-included-in-a-deep-cleaning" className="text-accent underline hover:no-underline">room-by-room checklist</Link>{" "}
              of what's included versus a standard clean.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Getting your home ready to list?" subtext="We'll deep clean it to camera-ready condition on your timeline, with flat pricing and EPA Safer Choice products. Serving Montgomery County and the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 scroll-mt-24">The Ideal Timing Before Your Listing</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Time the deep clean to your <strong>listing photos</strong>, not the closing. Photos are what draw buyers
              in, so the home should be at its peak the day the photographer arrives — and ideally still fresh when it
              goes live and the first showings happen. A practical sequence:
            </p>
            <ul className="space-y-2.5 mb-4">
              {[
                "Declutter and finish any repairs or touch-up paint first — cleaning comes last so it isn't undone.",
                "Book the deep clean for the day or two before photos.",
                "Keep it showing-ready with light daily tidying; a quick touch-up clean helps if showings run for weeks.",
                "If the home is vacant, a single deep clean before photos usually carries all the way through — empty homes stay clean.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A deep clean typically takes a few hours to most of a day depending on size — plan around it with{" "}
              <Link to="/resources/how-long-does-deep-cleaning-take" className="text-accent underline hover:no-underline">how long a deep cleaning takes</Link>.
              If you're also moving out, pair it with our{" "}
              <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-out cleaning</Link>{" "}
              to hand over a spotless home. The full scope lives on our{" "}
              <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep cleaning service page</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg my-12">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">List With a Home That Shows Its Best</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Flat pricing, a realistic timeline, and a white-glove finish before your photos. 5.0 stars across 45 Google reviews, serving Montgomery County and the DMV since 2015.</p>
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-6 scroll-mt-24">Deep Cleaning Before Selling: FAQ</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="deep-cleaning-before-selling-house" />
      <StickyCTA />
    </Layout>
  );
};

export default DeepCleaningBeforeSelling;
