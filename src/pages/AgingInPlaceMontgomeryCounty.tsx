import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import BlogInlineImage from "@/components/blog/BlogInlineImage";
import AuthorBio from "@/components/blog/AuthorBio";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/team/real-team-luxury-home.webp";
const URL = "https://capitalcleancare.com/resources/aging-in-place-montgomery-county-cleaning";
const SENIOR = "/senior-home-cleaning-montgomery-county-md";
const FALL_POST = "/resources/clean-home-fall-prevention-seniors";
const CAREGIVER_POST = "/resources/cleaning-service-vs-caregiver-elderly";
const SIGNS_POST = "/resources/signs-aging-parent-needs-help-housekeeping";
const LEISURE_POST = "/resources/house-cleaning-seniors-silver-spring-leisure-world";
const HIRE_POST = "/resources/how-to-hire-cleaning-service-elderly-parents";
const AARP = "https://www.aarp.org/livable-communities/housing/info-2020/homefit-guide.html";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const AgingInPlaceMontgomeryCounty = () => {
  const { seoHelmet } = useSEO({
    title: "Aging in Place in Montgomery County: How Cleaning Helps",
    description:
      "Want to stay in your own home as you age? See how regular house cleaning supports safe, independent living in Montgomery County, MD.",
    canonical: URL,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="aging in place Montgomery County, staying independent at home seniors MD, senior cleaning aging in place" />
      </Helmet>

      <ArticleSchema
        title="Aging in Place in Montgomery County: How Regular Cleaning Keeps You Independent"
        description="A warm, plain-language look at aging in place for older adults in Montgomery County, MD — what it really means, the home tasks that get harder first, how a regularly cleaned home keeps you independent longer, building your support team, and why the county is a great place to age in place."
        url={URL}
        datePublished="2026-07-21"
        image={HERO_IMAGE}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Aging in Place in Montgomery County", href: "/resources/aging-in-place-montgomery-county-cleaning" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Aging in Place in Montgomery County" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A comfortable, well-kept home in Montgomery County, Maryland — aging in place with a little help">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Home Care Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">Aging in Place in Montgomery County: How Regular Cleaning Keeps You Independent</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Staying in the home you love, on your own terms</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Montgomery County, MD · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href={PHONE_HREF}>Call {PHONE}</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          <FadeInSection>
            <p className="mb-6">
              Ask almost anyone what they want for their later years, and the answer is simple: to stay in their own
              home. Your home holds your routines, your memories, your neighbors, your favorite chair. The good news is
              that staying put is more realistic than most people think — with a little of the right support.
            </p>
            <p className="mb-6">
              And here's the part that surprises people: one of the simplest, most affordable pieces of that support is
              keeping the home clean. Not glamorous, but it does more for your independence than almost anything else you
              can arrange. Let's look at why.
            </p>
            <p className="mb-8">
              None of this asks you to change who you are or how you live. It's about protecting the life you already
              have — the mornings in your own kitchen, the yard you know by heart, the neighbors who wave. A little help
              in the right place is what makes all of that last.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineImage
              src="/images/services/kitchen-hero.webp"
              alt="A clean, easy-to-manage kitchen with wiped counters and appliances."
              caption="A clean, easy-to-manage kitchen makes staying in your own home safer and simpler."
            />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What "Aging in Place" Really Means</h2>
            <p className="mb-4">
              "Aging in place" just means living in your own home, safely and comfortably, for as long as you choose —
              instead of moving to assisted living or a nursing home before you're ready.
            </p>
            <p className="mb-8">
              It's worth being clear about one thing: aging in place is <em>not</em> about refusing help. It's the
              opposite. It's about choosing the kind of help that lets you stay in charge of your own life. Accepting a
              hand with the hard jobs is exactly how independent people stay independent. You're not giving up control —
              you're protecting it.
            </p>
            <p className="mb-8">
              People who plan a little tend to stay in their homes longer and more comfortably than those who wait for a
              problem to force the issue. You don't need a big, complicated plan. You just need to look honestly at what's
              gotten harder, and line up simple help for those few things — before they turn into a fall or a crisis.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">The Home Tasks That Get Harder First</h2>
            <p className="mb-4">
              Certain jobs around the house tend to get tricky before anything else does. If you've noticed a few of
              these, you're in very good company — it's simply how bodies change:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Scrubbing the bathtub and shower — all that bending and reaching in a slippery spot.",
                "Cleaning floors, especially getting down low and back up again.",
                "Reaching high shelves or low cabinets without a steady base under you.",
                "Carrying laundry up and down stairs, or wrestling a full basket.",
                "Pushing a heavy vacuum from room to room.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              Your knees and your back change over the years. Your standards for your own home don't. Handing off the
              handful of tasks that have gotten hard — with{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">a steady cleaning routine you can rely on</Link>{" "}
              — lets your home stay exactly as tidy as you like it, without the strain.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How a Regularly Cleaned Home Keeps You Independent Longer</h2>
            <p className="mb-4">
              A clean home isn't just nicer to be in. It quietly does three things that help you stay put.
            </p>
            <p className="mb-4">
              <strong className="text-foreground">It keeps you safer.</strong> Clear floors, dry bathrooms, and less
              clutter mean fewer things to trip over or slip on. That's a real part of{" "}
              <Link to={FALL_POST} className="text-accent font-medium hover:underline">the safety side of a consistently clean home</Link> —
              and falls are the single biggest threat to staying independent.
            </p>
            <p className="mb-4">
              <strong className="text-foreground">It keeps you healthier.</strong> Regular attention to dust, the
              bathroom, and the kitchen keeps allergens and germs down. That matters more, not less, as the years go by.
              A tidy kitchen makes it easier to cook for yourself, and a clean bathroom is simply safer to use every day.
            </p>
            <p className="mb-8">
              <strong className="text-foreground">It saves your energy.</strong> The strength you'd spend fighting the
              vacuum is strength you get to keep for your garden, your grandkids, or your morning walk. If you'd like a
              deeper checklist for a safe, comfortable home, AARP's{" "}
              <a href={AARP} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">HomeFit Guide</a>{" "}
              is a well-known, free resource for aging in place.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Building Your Aging-in-Place Support Team</h2>
            <p className="mb-4">
              No one does this entirely alone, and you don't have to either. Think of it as a small team you assemble on
              your own terms: family who check in, your doctor, maybe a handyman for the odd repair — and a cleaning
              service for the regular upkeep. You stay the decision-maker. Everyone else just lightens the load.
            </p>
            <p className="mb-8">
              Each piece does a different job, and it helps to know which is which. A cleaner keeps the home in shape; a
              caregiver helps with personal, hands-on care. If you're ever unsure which you actually need, it's worth
              understanding{" "}
              <Link to={CAREGIVER_POST} className="text-accent font-medium hover:underline">the difference between a cleaning service and a caregiver</Link>{" "}
              before you spend a penny — often, the home is the only piece that needs help.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Why Montgomery County Is a Great Place to Age in Place</h2>
            <p className="mb-4">
              You've picked a good place to grow older. Montgomery County is built for it. There are strong senior
              communities — Leisure World and Riderwood in Silver Spring, Asbury Methodist Village in Gaithersburg,
              Ingleside at King Farm in Rockville — plus county senior services and walkable downtowns in Silver Spring,
              Rockville, and Bethesda where you can still run your own errands.
            </p>
            <p className="mb-4">
              It also means the everyday support you might want is close at hand and used to working with older adults.
              Cleaners, handymen, and home services here know these neighborhoods and communities well. You're not
              piecing together help in a place that wasn't built for it — you're in one of the better counties in the
              country for staying in your own home.
            </p>
            <p className="mb-8">
              Whether you're in a longtime house or a 55+ community, the everyday help fits right in. We offer{" "}
              <Link to={LEISURE_POST} className="text-accent font-medium hover:underline">house cleaning for seniors in Silver Spring and Leisure World</Link>{" "}
              and across the county — always{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">senior home cleaning built around aging in place</Link>, with the
              same trusted cleaner every visit.
            </p>
          </FadeInSection>

          <FadeInSection>
            <p className="mb-8">
              Aging in place isn't one big decision. It's a series of small, smart ones — and keeping your home clean and
              safe is among the easiest to make. It costs little, asks nothing of your pride, and pays you back every
              single day in comfort and peace of mind. Handle that one piece well, and you free yourself up to enjoy the
              home you worked so hard for, for as long as you like.
            </p>
          </FadeInSection>

          {/* ── Final CTA — phone-forward for this audience ── */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Let's Talk — No Pressure at All</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                Call us with any questions about keeping your home clean and comfortable as you age in place. We'll listen,
                answer honestly, and give you a free quote over the phone — no hard sell, ever.
              </p>
              <div className="flex flex-col items-center gap-4">
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent/90 text-white text-2xl md:text-3xl font-bold px-10 py-6 rounded-full shadow-md w-full sm:w-auto">
                  <Phone className="h-7 w-7" /> {PHONE}
                </a>
                <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                  <Link to={SENIOR}>Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </FadeInSection>

          {/* ── Note for family members ── */}
          <FadeInSection>
            <p className="mt-10 text-lg text-gray-600 border-t border-border pt-6">
              <strong className="text-foreground">If you're helping a parent age in place:</strong> thank you for looking
              out for them. If you're not yet sure they need help around the house,{" "}
              <Link to={SIGNS_POST} className="text-accent font-medium hover:underline">start with these early signs it's time to step in</Link>.
              And when it's time to line up cleaning help, here's{" "}
              <Link to={HIRE_POST} className="text-accent font-medium hover:underline">how to check out a cleaning company before you hire</Link>,
              with the questions to ask and the warning signs to watch for.
            </p>
          </FadeInSection>
        </div>
      </article>

      <div className="container mx-auto px-4 max-w-3xl">
        <AuthorBio />
      </div>
      <RelatedPosts currentSlug="aging-in-place-montgomery-county-cleaning" />
      <StickyCTA />
    </Layout>
  );
};

export default AgingInPlaceMontgomeryCounty;
