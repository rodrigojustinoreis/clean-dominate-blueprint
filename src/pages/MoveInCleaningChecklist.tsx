import { Link } from "react-router-dom";
import { CheckCircle2, Sparkles, Home, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/move-in-empty-home.webp";
const URL = "https://capitalcleancare.com/resources/move-in-cleaning-checklist";

const rooms: { room: string; items: string[] }[] = [
  { room: "Kitchen (do this first)", items: ["Inside all cabinets and drawers before anything goes in", "Inside the refrigerator, oven, and dishwasher", "Countertops, backsplash, and sink sanitized", "Range hood and filter degreased", "Floors scrubbed, including under appliances if accessible"] },
  { room: "Bathrooms", items: ["Toilet replaced-level sanitizing, inside and out", "Tub, shower, and tile scrubbed and disinfected", "Vanity, sink, and faucet descaled", "Exhaust fan cover dusted", "Fresh disinfection of every handle and switch"] },
  { room: "Bedrooms & closets", items: ["Closet shelves and rods wiped before hanging clothes", "Baseboards, window sills, and tracks cleaned", "Ceiling fans and light fixtures dusted", "Floors vacuumed and mopped edge to edge"] },
  { room: "Whole home, before boxes arrive", items: ["All switches, handles, and doorknobs disinfected", "Air vents and returns dusted or vacuumed", "Windows cleaned inside", "Walls spot-cleaned for scuffs from the previous owners"] },
];

const faqs = [
  { q: "Should you clean a house before moving in?", a: "Yes — always. Even a home that looks clean holds the previous owner's dust, allergens, pet dander, and bathroom and kitchen bacteria. Cleaning before you unpack is the only time the home is completely empty, which makes every surface reachable: inside cabinets, under appliance lines, closet shelving, and floors with zero furniture in the way." },
  { q: "What should be cleaned first when moving into a house?", a: "Start with the kitchen (inside cabinets, refrigerator, and oven, since food goes there first), then bathrooms (full sanitizing), then bedrooms and closets before clothes are hung. Floors go last, room by room, working toward the exits. If the movers are coming in the afternoon, a morning professional clean fits perfectly." },
  { q: "How much does move-in cleaning cost in Maryland?", a: "A professional move-in clean of an empty home in the DMV typically runs from about $230 for a small apartment to $540+ for a large 4-5 bedroom house, similar to move-out pricing. The exact price depends on size, number of bathrooms, and condition. You can get an exact flat quote in about 60 seconds from Capital Clean Care." },
  { q: "Is move-in cleaning different from a regular cleaning?", a: "Yes. A move-in clean is a deep clean of an empty home: inside cabinets and appliances, baseboards, window tracks, and full disinfection — places a routine clean doesn't reach and that are only fully accessible before furniture arrives. A standard cleaning maintains a home you already live in." },
];

const MoveInCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    title: "Move-In Cleaning Checklist: What to Clean Before You Unpack",
    description:
      "Move-in cleaning checklist for MD, DC & VA homes: what to clean before the boxes arrive, room by room — cabinets, appliances, bathrooms — plus cost and when to book.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="move in cleaning checklist, move-in cleaning, clean house before moving in, move in deep clean, move in cleaning cost maryland" />
      </Helmet>
      <ArticleSchema
        title="Move-In Cleaning Checklist: What to Clean Before You Unpack"
        description="Room-by-room move-in cleaning checklist for the DMV: kitchen cabinets and appliances, bathroom sanitizing, closets, and whole-home disinfection before furniture arrives."
        url={URL}
        datePublished="2026-07-08"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="Bright empty home with moving boxes ready for a move-in cleaning in Maryland">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Move-In Cleaning Checklist: What to Clean Before You Unpack</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The one window when every surface in your new home is reachable</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A move-in clean is the single best-timed cleaning you will ever book. For one short window the home is completely
              empty: no furniture blocking the baseboards, no dishes in the cabinets, no rugs over the floors. Whatever the previous
              owners left behind — cooking grease, bathroom bacteria, pet dander in the vents — is still there, and it is never
              easier to remove than right now, before your family's things touch it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Here is the room-by-room checklist our crews use on move-in cleans across Maryland, DC, and Northern Virginia,
              in the order that makes moving day easiest.
            </p>
          </FadeInSection>

          {rooms.map((r) => (
            <FadeInSection key={r.room}>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
                <Home className="h-6 w-6 text-accent shrink-0" /> {r.room}
              </h2>
              <ul className="space-y-2.5 mb-6">
                {r.items.map((i) => (
                  <li key={i} className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" /> {i}
                  </li>
                ))}
              </ul>
            </FadeInSection>
          ))}

          <FadeInSection>
            <BlogInlineCTA headline="Moving into a home in the DMV?" subtext="Book a professional move-in clean for the empty house and unpack into a genuinely clean home — eco-friendly products, background-checked crews, flat pricing." ctaLabel="Get My Move-In Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <img src="/images/blog/sparkling-kitchen.webp" alt="Kitchen counter spotless after a move-in cleaning" loading="lazy" width={1000} height={563} className="w-full rounded-2xl shadow-lg ring-1 ring-border transition-transform duration-500 hover:scale-[1.02] my-8" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 flex items-center gap-2">
              <Clock className="h-6 w-6 text-accent" /> When to schedule it
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The ideal slot is after you get the keys and before the moving truck arrives — usually the morning of move-in day or
              the day before. If you are also leaving a rental, pair it with a{" "}
              <Link to="/resources/move-out-cleaning-checklist-maryland-tenants" className="text-accent underline hover:no-underline">move-out clean of the old place</Link>{" "}
              to protect your deposit (here is{" "}
              <Link to="/resources/move-out-cleaning-cost-maryland" className="text-accent underline hover:no-underline">what move-out cleaning costs in Maryland</Link>).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A professional{" "}
              <Link to="/services/move-out-cleaning" className="text-accent underline hover:no-underline">move-in / move-out cleaning</Link>{" "}
              of an empty DMV home typically runs $230–$540+ depending on size — and it is the one clean you truly cannot redo later,
              because the furniture only arrives once.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> Move-in cleaning FAQ
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="move-in-cleaning-checklist" />
      <StickyCTA />
    </Layout>
  );
};

export default MoveInCleaningChecklist;
