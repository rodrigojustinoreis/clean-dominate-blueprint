import { Link } from "react-router-dom";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/team/team-window-blinds-pro.webp";
const URL = "https://capitalcleancare.com/resources/clean-home-fall-prevention-seniors";
const SENIOR = "/senior-home-cleaning-montgomery-county-md";
const SIGNS_POST = "/resources/signs-aging-parent-needs-help-housekeeping";
const NIA = "https://www.nia.nih.gov/health/falls-and-falls-prevention/fall-proofing-your-home";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const CHECKLIST: { room: string; items: string[] }[] = [
  { room: "Bathroom", items: ["Scrub tub and shower floors free of soap residue — and keep them dry", "Secure loose bath mats, or replace them with non-slip backing", "Clear mildew and fix any lingering moisture", "Keep a clear, unobstructed path to the toilet"] },
  { room: "Kitchen", items: ["Clean grease and spills off the floor promptly, especially near the stove and sink", "Move everyday dishes, food, and pans to shelves within easy reach", "Remove the step-stool kept out for daily reaching"] },
  { room: "Hallways & Stairs", items: ["Clear all clutter from walkways and every step", "Tape down or reroute cords along the wall", "Keep lamps and switches unblocked; add night-lights in transition areas"] },
  { room: "Bedroom & Living Room", items: ["Pick up laundry, newspapers, and floor piles", "Flatten or remove rugs that bunch, fold, or curl at the edges", "Keep the nighttime path to the bathroom clear and well-lit"] },
];

const CleanHomeFallPrevention = () => {
  const { seoHelmet } = useSEO({
    title: "How a Clean Home Prevents Falls: Senior Safety Guide for Maryland",
    description:
      "Falls are the #1 cause of injury for adults 65+. Learn how regular house cleaning reduces fall risks for seniors in Montgomery County, MD.",
    canonical: URL,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="fall prevention home cleaning seniors, how to prevent falls at home elderly, fall hazards in the home checklist" />
      </Helmet>

      <ArticleSchema
        title="How a Clean Home Prevents Falls: A Safety Guide for Seniors in Maryland"
        description="How regular house cleaning systematically removes the fall hazards hiding in every room — bathroom, kitchen, hallways, stairs, bedroom, and living room — plus a room-by-room fall-prevention checklist and when to bring in professional help."
        url={URL}
        datePublished="2026-07-21"
        image={HERO_IMAGE}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How a Clean Home Prevents Falls", href: "/resources/clean-home-fall-prevention-seniors" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "How a Clean Home Prevents Falls" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A bright, clean, uncluttered room — a clean home is a safer home for older adults">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Home Care Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How a Clean Home Prevents Falls: A Safety Guide for Seniors in Maryland</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A hopeful, practical look at how everyday cleaning keeps older adults safe at home</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Montgomery County, MD · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href={PHONE_HREF}>Call {PHONE}</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-lg text-muted-foreground leading-relaxed">

          <FadeInSection>
            <p className="mb-6">
              If you've ever worried about your mom or dad — or yourself — taking a fall at home, that concern is
              well-founded, but it doesn't have to be frightening. According to the CDC, about{" "}
              <strong className="text-foreground">1 in 4 adults aged 65 and older falls each year</strong>, and the
              majority of those falls happen inside the home — in the most familiar rooms of all: the kitchen, the
              bathroom, the hallway walked a thousand times before.
            </p>
            <p className="mb-8">
              Here's the hopeful part: a large share of home falls are <strong className="text-foreground">preventable</strong> —
              and one of the most overlooked tools is simply a clean, organized home. Cleaning isn't only about how a
              home looks; done regularly, it quietly removes the exact hazards that cause falls. And prevention here
              isn't about wrapping the house in bubble wrap or taking away anyone's independence — it's the opposite. A
              safe, clutter-free home is precisely what lets an older adult keep living confidently in the place they
              love. This guide walks through where those hazards hide, how routine cleaning eliminates them, and a
              practical checklist you can use in your parent's home today.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Hidden Fall Hazards in Every Home</h2>
            <p className="mb-6">
              Most fall hazards are ordinary, everyday things we stop noticing precisely because they're always there.
              Here's where they hide, room by room.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Bathroom</h3>
            <p className="mb-6">
              The bathroom is the single most dangerous room in the house for a fall — hard surfaces, water, and tight
              spaces. Soap scum and residue on tub and shower floors create a slick, nearly invisible film underfoot.
              Bath mats that aren't secured slide across tile. And mildew buildup both makes surfaces slippery and signals
              the kind of lingering moisture that keeps them wet. It's also the room where a fall is most likely to cause
              a serious injury, given all that unforgiving porcelain and tile — so keeping it clean, dry, and slip-free
              matters more here than anywhere else. Every one of these hazards is created — and removed — by cleaning
              habits.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Kitchen</h3>
            <p className="mb-6">
              Kitchen floors collect grease and spills that turn tile treacherous, especially near the stove and sink.
              A splash of water or oil is easy to miss on busy flooring, and a small throw rug in front of the sink can
              slide the moment weight lands on it. Just as risky is what ends up out of reach: when everyday dishes, pans,
              or food get stored on high shelves, a senior may climb onto a step-stool or chair to get them — one of the
              most common ways older adults fall. Clean floors and daily items kept within easy reach remove both dangers
              at once.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">Hallways & Stairs</h3>
            <p className="mb-6">
              Hallways and stairs are travel corridors, so anything on them is a hazard. Clutter narrows the path;
              electrical or phone cords stretched across the floor are easy to catch a foot on; and objects that pile up
              in front of lamps or light switches leave these transition zones poorly lit — a major factor in falls.
              Stairs deserve special attention: even a single item left on a step, or a runner that has worked loose at
              the edge, can turn a routine trip upstairs into an emergency. Clear, well-lit walkways aren't optional;
              they're foundational.
            </p>

            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-8">Bedroom & Living Room</h3>
            <p className="mb-8">
              Even these "safe" rooms hide quieter risks. Piles of laundry, newspapers, or magazines on the floor become
              obstacles in dim light. Throw rugs that bunch, fold, or curl at the edges are a classic trip trigger. And
              cluttered nightstands or side tables can crowd the path to the bathroom during a nighttime trip — exactly
              when falls are most likely. The route between the bed and the bathroom is worth protecting above all others:
              keep it completely clear, add a night-light, and make sure no cord, basket, or stray shoe sits in the way of
              a half-asleep walk in the dark.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Cleaning-Safety Connection</h2>
            <p className="mb-4">
              Once you see falls this way, the connection becomes obvious: the same routine that keeps a home clean is the
              routine that keeps it safe. Regular cleaning systematically removes the fall hazards that quietly rebuild
              week after week.
            </p>
            <p className="mb-4">
              <strong className="text-foreground">Clean, dry floors</strong> are the foundation — no grease film in the
              kitchen, no soap residue in the shower, no wet spots left behind. <strong className="text-foreground">Clear
              pathways</strong> come next: consistent tidying keeps walkways, hallways, and stairs open and obstacle-free.
              And <strong className="text-foreground">thoughtful organization</strong> keeps the things your parent uses
              every day within easy reach, so there's never a reason to climb or overreach.
            </p>
            <p className="mb-8">
              This is why fall prevention isn't a one-time fix. Hazards return — grease reappears, clutter creeps back,
              residue rebuilds. Safety comes from consistency, which is exactly what a cleaning routine provides. When
              keeping up that routine starts to feel like too much, that can be one of the{" "}
              <Link to={SIGNS_POST} className="text-accent font-medium hover:underline">signs your parent may need help at home</Link>.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">A Room-by-Room Fall Prevention Checklist</h2>
            <p className="mb-6">
              Use this today — walk your parent's home (or your own) room by room and check off what's already safe:
            </p>
            <div className="space-y-6 mb-8">
              {CHECKLIST.map((section) => (
                <div key={section.room} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <h3 className="font-heading text-lg font-bold text-foreground mb-3">{section.room}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-base leading-relaxed">
                        <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">When to Bring In Professional Help</h2>
            <p className="mb-4">
              Doing all of this once is manageable. Keeping it up — every week, in every room — is where it gets hard,
              especially for a senior living alone or an adult child managing care from a distance. That's where
              professional help becomes a genuine safety measure, not a luxury.
            </p>
            <p className="mb-4">
              Recurring professional cleaning acts as a continuous layer of protection: floors stay clean and dry, paths
              stay clear, and hazards never get the chance to build up. A service designed for older adults goes further —{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">recurring cleaning built around senior safety</Link>{" "}
              means bathrooms cleaned with fall prevention in mind, and products that rinse clean without leaving a
              slippery residue behind. The best providers also send the same trusted cleaner each visit, run thorough
              background checks, and text arrival and departure updates to the family — so an adult child managing care
              from across town, or across the country, always knows the home has been looked after.
            </p>
            <p className="mb-8">
              For families across Maryland,{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">a cleaning team that keeps floors dry and paths clear</Link>{" "}
              can be the difference between worrying from afar and knowing a parent's home is safe between visits. Pair a
              dependable cleaning routine with the NIA's guidance on{" "}
              <a href={NIA} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">fall-proofing the home</a>,
              and a familiar house becomes a genuinely safe one.
            </p>
          </FadeInSection>

          {/* ── Final CTA ── */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-4">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Make Their Home Safer — Starting Today</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Trusted <Link to={SENIOR} className="underline text-white hover:text-white/90">senior-focused cleaning across Montgomery County</Link> —
                the same cleaner every visit, background-checked, with fall-prevention cleaning and text updates for the
                family. Get a free, no-obligation quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <Link to={SENIOR}>Explore Senior Home Cleaning <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <a href={PHONE_HREF}><Phone className="mr-2 h-4 w-4" /> Call {PHONE}</a>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="clean-home-fall-prevention-seniors" />
      <StickyCTA />
    </Layout>
  );
};

export default CleanHomeFallPrevention;
