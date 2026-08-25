import { Link } from "react-router-dom";
import { ArrowRight, Backpack, Bath, BookOpen, CheckCircle2, CookingPot, Home, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const SLUG = "back-to-school-cleaning-checklist";
const URL = `https://capitalcleancare.com/resources/${SLUG}`;
const HERO_IMAGE = "/images/blog/back-to-school/hero.webp";

const areas = [
  {
    title: "Reset the entryway",
    icon: Backpack,
    intro: "Create an easy landing zone for the things that arrive and leave every school day.",
    items: ["Vacuum entry mats and clean the floor", "Wipe the door, handles and light switches", "Remove out-of-season shoes and coats", "Assign hooks or baskets for backpacks and keys"],
  },
  {
    title: "Prepare the kitchen",
    icon: CookingPot,
    intro: "Make room for breakfasts, packed lunches, after-school snacks and weeknight meals.",
    items: ["Clear and clean the main counters", "Wipe appliance handles and cabinet pulls", "Check the refrigerator and wipe shelves", "Group lunch boxes, bottles and containers together"],
  },
  {
    title: "Create a homework area",
    icon: BookOpen,
    intro: "A clear work surface and a few easy-to-find supplies beat a complicated system.",
    items: ["Dust the desk, chair, lamp and shelves", "Organize basic supplies and chargers", "Remove broken or dried-out supplies", "Vacuum or clean the surrounding floor"],
  },
  {
    title: "Refresh shared bathrooms",
    icon: Bath,
    intro: "Simplify the surfaces everyone uses so busy mornings can move more smoothly.",
    items: ["Clean the toilet, sink, vanity and mirror", "Wipe handles, switches and fixtures", "Wash bath mats and replace used towels", "Clear empty or expired products"],
  },
];

const schedule = [
  ["Daily — 10 to 15 minutes", ["Put backpacks and shoes away", "Clear the kitchen counter after meals", "Handle visible spills and crumbs", "Do a quick evening pickup"]],
  ["Two or three times per week", ["Clean high-traffic floors", "Wipe the bathroom sink and counter", "Check laundry and school clothing", "Empty small trash cans as needed"]],
  ["Weekly maintenance", ["Clean bathrooms", "Vacuum carpets and rugs", "Mop hard floors", "Dust reachable surfaces and review the refrigerator"]],
] as const;

const faqs = [
  { q: "What should I clean before the school year begins?", a: "Prioritize the spaces that affect everyday routines: the entryway, kitchen, bathrooms, bedrooms, homework area and high-traffic floors. Declutter first, then clean the surfaces and establish simple places for backpacks, shoes, lunch supplies and school papers." },
  { q: "How can I keep my house clean during the school year?", a: "Use short daily resets for backpacks, dishes, counters and visible crumbs. Schedule bathrooms, vacuuming, mopping and dusting weekly. Assign age-appropriate tasks to family members and adjust the schedule when it becomes too difficult to maintain." },
  { q: "Should I deep clean before school starts?", a: "A deep clean can help when dust, grease or bathroom buildup accumulated during the summer. If the home is already well maintained, a focused seasonal reset may be enough." },
  { q: "Is weekly or bi-weekly cleaning better for a family with children?", a: "Weekly cleaning generally suits larger households, pets and high-traffic homes. Bi-weekly cleaning is a practical middle ground for families that handle light daily upkeep between professional visits." },
  { q: "Which rooms should busy families clean most often?", a: "Kitchens, bathrooms, entryways and frequently used living areas usually need the most regular attention. High-traffic floors may also need shorter cleaning intervals than guest rooms or low-use spaces." },
  { q: "Does Capital Clean Care offer recurring cleaning during the school year?", a: "Yes. Capital Clean Care offers weekly, bi-weekly and monthly recurring cleaning plans across Montgomery County and the wider DMV. Families can request a free quote based on the home's size, preferred frequency and cleaning needs." },
];

const BackToSchoolCleaningChecklist = () => {
  const { seoHelmet } = useSEO({
    title: "Back-to-School Cleaning Checklist for Busy DMV Families",
    description: "Reset your home for the school year with a practical cleaning checklist for kitchens, entryways, bedrooms and family spaces across the DMV.",
    canonical: URL,
    image: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="back-to-school cleaning checklist, back-to-school house cleaning, cleaning schedule busy families, house cleaning Montgomery County" />
      </Helmet>
      <ArticleSchema title="Back-to-School Cleaning Checklist: Reset Your Home for a More Organized School Year" description="A practical room-by-room back-to-school cleaning checklist and maintainable schedule for busy DMV families." url={URL} datePublished="2026-08-23" dateModified="2026-08-23" image={HERO_IMAGE} />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Back-to-School Cleaning Checklist", href: `/resources/${SLUG}` }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Back-to-School Cleaning Checklist" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="Capital Clean Care professional cleaning an organized family entryway for back-to-school season">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Seasonal Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Back-to-School Cleaning Checklist</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">A cleaner home. An easier routine for busy DMV families.</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · August 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="#checklist">Start the Checklist</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-xl text-foreground leading-relaxed mb-6">Back-to-school season changes the rhythm of the entire house. Backpacks return to the entryway, lunch containers fill the kitchen, laundry moves faster, and mornings suddenly run on a tighter schedule.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">The goal is not to make every room perfect before the first day of school. A better goal is to create a clean, manageable home that supports the routines your family will use every day.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-10">Start with the spaces that become the busiest: the entryway, kitchen, bathrooms, bedrooms, homework area and main floors. Declutter first so the surfaces you clean do not immediately disappear under piles again.</p>
          </FadeInSection>

          <FadeInSection>
            <div id="checklist" className="scroll-mt-24">
              <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Room by room</p>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Clean the spaces that carry the school-day routine</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">The system does not need to look like a magazine. It only needs to be simple enough that everyone in the family can use it consistently.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {areas.map(({ title, icon: Icon, intro, items }) => (
                <section key={title} className="border border-border rounded-2xl p-6 bg-secondary/30">
                  <div className="h-11 w-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center mb-4"><Icon className="h-6 w-6" /></div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{intro}</p>
                  <ul className="space-y-2">
                    {items.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{item}</li>)}
                  </ul>
                </section>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Want the back-to-school reset without the all-day project?" subtext="Capital Clean Care offers one-time deep cleans and recurring weekly, bi-weekly and monthly service across Montgomery County and the DMV." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mt-14 mb-5">Refresh bedrooms and high-traffic floors</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">Wash bedding according to its care label, dust reachable furniture and window sills, clear nightstands, empty wastebaskets and create a regular place for tomorrow's clothes. In children's rooms, use age-appropriate systems they understand and can maintain.</p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-5">School days bring more shoes, bags, crumbs and outdoor debris through the house. Entryways, kitchens, hallways and family rooms generally need attention more often than low-traffic rooms. Vacuum or sweep before mopping and follow the flooring manufacturer's care instructions.</p>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-9">
              <p className="font-semibold text-foreground mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent" />Keep product use simple</p>
              <p className="text-sm text-muted-foreground leading-relaxed">Routine cleaning is appropriate for ordinary household maintenance. If disinfection is needed for a specific situation, select an appropriate product and follow its label. Never mix household cleaning products.</p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">A routine you can repeat</p>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">The realistic school-year cleaning schedule</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">A successful schedule fits the household's real routine. If a task is consistently skipped, reduce its frequency, divide it into smaller steps or delegate it.</p>
            <div className="space-y-5 mb-12">
              {schedule.map(([title, items]) => (
                <section key={title} className="border border-border rounded-2xl p-6 bg-white shadow-sm">
                  <h3 className="font-heading text-xl font-bold text-foreground mb-4">{title}</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {items.map((item) => <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" />{item}</div>)}
                  </div>
                </section>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-5">When a deep clean makes sense</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">A maintenance routine works best when the home already has a clean baseline. If summer travel and activities allowed dust or buildup to accumulate, a one-time <Link to="/services/deep-cleaning" className="text-accent underline hover:no-underline">deep clean</Link> may be the easier starting point. After that reset, <Link to="/services/recurring-cleaning" className="text-accent underline hover:no-underline">weekly or bi-weekly recurring cleaning</Link> can help maintain the result during the school year.</p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg my-14">
              <Home className="h-9 w-9 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">A Simpler School Year Starts With a Workable Home</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Serving Rockville, Bethesda, Silver Spring, Gaithersburg, Germantown, Potomac and communities across the DMV.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>
      <RelatedPosts currentSlug={SLUG} />
      <StickyCTA />
    </Layout>
  );
};

export default BackToSchoolCleaningChecklist;
