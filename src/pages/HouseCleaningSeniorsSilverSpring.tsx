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
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/team/real-team-maria-fridge.webp";
const URL = "https://capitalcleancare.com/resources/house-cleaning-seniors-silver-spring-leisure-world";
const SENIOR = "/senior-home-cleaning-montgomery-county-md";
const FALL_POST = "/resources/clean-home-fall-prevention-seniors";
const HIRE_POST = "/resources/how-to-hire-cleaning-service-elderly-parents";
const SILVER_SPRING = "/locations/silver-spring-md";
const MOCO_ADS = "https://www.montgomerycountymd.gov/department-health-human-services/about-us/aging-disability-services";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";

const HouseCleaningSeniorsSilverSpring = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning for Seniors in Silver Spring & Leisure World",
    description:
      "Friendly, reliable house cleaning for seniors in Silver Spring and Leisure World, MD. Same trusted cleaner every visit. See what to expect.",
    canonical: URL,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="house cleaning Leisure World Silver Spring, senior house cleaning Silver Spring MD, cleaning service for seniors Silver Spring" />
      </Helmet>

      <ArticleSchema
        title="House Cleaning Help for Seniors in Silver Spring & Leisure World: What to Expect"
        description="A warm, plain-language guide for older adults in Silver Spring and Leisure World, MD who are thinking about house cleaning help — what a visit looks like, what most senior clients ask for, how it supports staying independent at home, and how to start."
        url={URL}
        datePublished="2026-07-21"
        image={HERO_IMAGE}
      />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "House Cleaning for Seniors in Silver Spring & Leisure World", href: "/resources/house-cleaning-seniors-silver-spring-leisure-world" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "House Cleaning for Seniors in Silver Spring & Leisure World" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A friendly, familiar house cleaner helping in a senior's home in Silver Spring, Maryland">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Home Care Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">House Cleaning Help for Seniors in Silver Spring &amp; Leisure World: What to Expect</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Friendly, reliable help that keeps your home yours — on your terms</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · Silver Spring, MD · July 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href={PHONE_HREF}>Call {PHONE}</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-xl text-gray-700 leading-relaxed">

          <FadeInSection>
            <p className="mb-6">
              You've kept your home your way for decades. You know where everything goes. You know how you like things
              done. Getting a little help with the cleaning doesn't change any of that.
            </p>
            <p className="mb-8">
              In fact, it does the opposite. Good cleaning help keeps your home <em>yours</em> — comfortable, safe, and
              cared for, exactly the way you want it. You stay in charge of what gets done and how. Someone else simply
              handles the parts that have gotten harder on your back and your knees, so you don't have to push through
              them or leave them undone. Here's what that actually looks like, in plain terms.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What a Cleaning Visit Actually Looks Like</h2>
            <p className="mb-4">
              If you've never had a cleaner before, the not-knowing is the hardest part. You may be picturing something
              formal or fussy, or worrying it means giving up control of your own home. It's none of those things. So
              let's walk through exactly how a visit goes, start to finish.
            </p>
            <p className="mb-4">
              Your cleaner arrives at the time you agreed on — not a surprise, not "sometime in the afternoon." It's the
              same person each visit, so you get to know them and they get to know your home. No stream of strangers.
            </p>
            <p className="mb-4">
              That part matters, so let's be plain about it. Letting someone into your home is a big deal, and it should
              be. The person who comes to you is background-checked and fully insured — a real employee, not a stranger
              picked up for the day. After a visit or two, they stop being "the cleaner" and start being a familiar,
              friendly face you look forward to. Many of our clients tell us that visit becomes one of the nicer parts of
              their week.
            </p>
            <p className="mb-4">
              You decide what gets done. Maybe it's the whole house. Maybe it's just the bathrooms, the kitchen, and the
              floors. You can point out what matters to you and what to leave alone. It's your home, and it stays your
              call.
            </p>
            <p className="mb-8">
              And you do whatever feels comfortable while they work. Some people like to chat and follow along. Others
              put their feet up with a cup of coffee or head out for a walk. Both are fine. There's no wrong way to spend
              the visit.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Cleaning Help Made for Leisure World and 55+ Communities</h2>
            <p className="mb-4">
              If you live in Leisure World, you already know it isn't quite like anywhere else. There's the gatehouse.
              There are the parking rules. Condos and co-ops each have their own layout and their own quiet hours. A
              cleaner who knows Leisure World doesn't need all of that explained twice.
            </p>
            <p className="mb-8">
              We clean in Leisure World regularly, so we come prepared — checking in at the gate the right way, parking
              where we're supposed to, and being mindful of your neighbors and the community's schedule. The same goes
              for Riderwood and other 55+ communities around Silver Spring. You get help that fits how your community
              actually works, not a company learning it on your time.
            </p>
            <p className="mb-8">
              Little things make a difference in a community like Leisure World. Quiet hours are respected. Elevators and
              shared hallways are kept clear. We keep the noise down and stay out of your neighbors' way. It's your home
              and your community, and we treat both with care.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">What Most of Our Senior Clients Ask For</h2>
            <p className="mb-4">
              Everyone's list is a little different, but a few things come up again and again. You might recognize some
              of these:
            </p>
            <ul className="space-y-3 mb-6 pl-1">
              {[
                "Bathrooms and the kitchen cleaned thoroughly — the rooms that matter most for staying healthy.",
                "Floors left clean, dry, and clear, so nothing underfoot becomes a hazard.",
                "Bed linens stripped and changed — a job that's surprisingly hard to do alone.",
                "The high shelves and low corners reached, so you don't have to climb or crouch.",
                "Gentle, low-scent products, in case strong cleaning smells bother you.",
              ].map((item) => (
                <li key={item} className="flex gap-3 items-start text-lg">
                  <span className="flex-shrink-0 mt-2 h-2.5 w-2.5 rounded-full bg-accent" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mb-8">
              If that sounds about right, it's exactly what{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">our senior home cleaning service</Link>{" "}
              is built around — the everyday upkeep that keeps a home comfortable and safe, done by someone you can count on.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">Staying Independent at Home</h2>
            <p className="mb-4">
              Most of us want the same thing: to stay in our own home, comfortably, for as long as we can. A clean, tidy
              home is a bigger part of that than people realize. Clear floors and uncluttered rooms are simply safer to
              move through — it's a real piece of{" "}
              <Link to={FALL_POST} className="text-accent font-medium hover:underline">how a clean, clutter-free home helps prevent falls</Link>.
            </p>
            <p className="mb-8">
              You don't have to do it all yourself to stay independent. Accepting help with the heavy or awkward jobs
              isn't giving anything up — it's a smart way to protect the independence you already have. The energy you'd
              spend wrestling with the vacuum or the tub is energy you get to keep for the things you actually enjoy.
            </p>
            <p className="mb-8">
              You're not alone in this either. Montgomery County has real resources for people who want to age well at
              home — the county's{" "}
              <a href={MOCO_ADS} target="_blank" rel="noopener noreferrer" className="text-accent font-medium hover:underline">Aging &amp; Disability Services</a>{" "}
              office is a good place to learn what's available locally. Cleaning help is one small, practical piece of the
              same idea: a little support so you can keep living the way you like, in the home you know.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">How Much It Costs and How to Start</h2>
            <p className="mb-4">
              Pricing is simple and clear. You get a flat rate per visit, agreed up front, based on your home and what
              you'd like done. No surprises on the bill, and no long contracts to sign. If you want help every week,
              every two weeks, or once a month, that's up to you — and you can change it whenever you like.
            </p>
            <p className="mb-4">
              There's no pressure to decide anything on the spot. Plenty of people start with a single visit, just to
              see how it feels, before settling into a regular schedule. If it's a good fit, wonderful. If it isn't,
              you've lost nothing. You're always the one in charge of what happens next.
            </p>
            <p className="mb-8">
              The easiest way to start is a quick phone call. Tell us about your home, ask anything you're wondering
              about, and we'll give you a free quote — no pressure, no hard sell. We help with{" "}
              <Link to={SILVER_SPRING} className="text-accent font-medium hover:underline">house cleaning across Silver Spring</Link>, and we're
              glad to set up{" "}
              <Link to={SENIOR} className="text-accent font-medium hover:underline">cleaning visits designed around your routine</Link>{" "}
              whenever you're ready.
            </p>
          </FadeInSection>

          {/* ── Final CTA — phone-forward for this audience ── */}
          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-2">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Call Us — We're Happy to Answer Questions</h2>
              <p className="text-primary-foreground/85 mb-6 leading-relaxed max-w-xl mx-auto text-lg">
                No pressure, no hard sell — just a friendly conversation about your home. We'll answer anything you're
                wondering about and give you a free quote over the phone.
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
              <strong className="text-foreground">If you're reading this for a parent:</strong> thank you for helping
              them look into it. When you're ready to compare companies, here's{" "}
              <Link to={HIRE_POST} className="text-accent font-medium hover:underline">how to choose a cleaning service you can trust</Link>,
              with the questions to ask and the red flags to watch for.
            </p>
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="house-cleaning-seniors-silver-spring-leisure-world" />
      <StickyCTA />
    </Layout>
  );
};

export default HouseCleaningSeniorsSilverSpring;
