import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, BreadcrumbSchema, HowToSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";

const HERO_IMAGE = "/images/blog/whats-included-deep/hero.webp";

const checklist: [string, string[]][] = [
  ["Kitchen", ["Inside the oven, microwave & fridge", "Cabinet fronts and inside cabinets (on request)", "Backsplash, range hood & small appliances", "Sink, faucet & countertops descaled", "Floors hand-detailed along edges"]],
  ["Bathrooms", ["Grout scrubbed; tile & glass de-scaled", "Toilet cleaned base to tank", "Shower, tub & fixtures polished", "Mirrors, vanity & cabinet fronts", "Baseboards & behind-the-door corners"]],
  ["All living areas & bedrooms", ["Baseboards, door frames & trim wiped", "Ceiling fans, vents & light fixtures dusted", "Window sills, tracks & blinds", "Behind & under movable furniture", "Cobweb removal & high-to-low dusting"]],
];

const steps = [
  { name: "Top-to-bottom, high-to-low", text: "Deep cleaning works from the ceiling down — fans, vents, and light fixtures first, then walls, trim, and surfaces, and floors last — so dust that's knocked loose is captured rather than re-settling on areas already cleaned." },
  { name: "Get into the detail zones", text: "The defining part of a deep clean is the detail: grout lines scrubbed, baseboards and door frames wiped by hand, window tracks and sills cleared, and the build-up in corners and behind furniture removed — the spots a routine clean never reaches." },
  { name: "Inside the appliances & cabinets", text: "Inside the oven, microwave, and refrigerator, plus inside cabinets and drawers on request. This is grimy, time-consuming work that a standard clean leaves out, and it's a big reason a deep clean takes longer." },
  { name: "Reset, then maintain", text: "A deep clean brings the whole home to a true baseline. After that, recurring standard cleans keep it there — which is why most homes only need a deep clean a few times a year." },
];

const faqs = [
  { q: "What exactly is included in a deep cleaning?", a: "A deep cleaning includes everything in a standard clean (dusting, vacuuming, mopping, kitchen and bathroom surfaces, tidying) plus the detailed work routine cleans skip: inside the oven, microwave and refrigerator, grout scrubbing, baseboards and trim wiped by hand, ceiling fans, vents and light fixtures, window tracks, sills and blinds, and the build-up behind and under movable furniture. Inside cabinets and drawers are typically done on request. It's a full top-to-bottom reset of the home." },
  { q: "How long does a deep cleaning take?", a: "Significantly longer than a standard clean — often 1.5 to 2.5 times as long — because of all the detail work. A small apartment might take a few hours; a larger home can take most of a day or a team of cleaners. The exact time depends on the home's size and how long it's been since the last thorough cleaning, since heavier build-up takes more work to remove." },
  { q: "Is inside the fridge and oven included?", a: "Yes — interior of the oven, microwave, and refrigerator are part of a deep clean (a standard clean only does the exteriors). Inside kitchen cabinets and drawers are usually included on request, since not everyone wants them emptied and cleaned each time. If there's a specific appliance or area you want prioritized, just mention it when you book." },
  { q: "Do I need a deep clean or just a regular clean?", a: "If your home is already maintained and you want it kept fresh, a regular clean is right. Choose a deep clean if it's been a while since a thorough cleaning, you're moving in or out, hosting, recovering from a renovation, or starting recurring service. Many people book one deep clean to reset the home, then switch to recurring standard cleans to keep it that way affordably." },
];

const WhatsIncludedDeepCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "What Is Included in a Deep Cleaning? (Full Checklist)",
    description:
      "Exactly what's included in a deep cleaning — the room-by-room checklist, how it differs from a standard clean, how long it takes, and whether inside the oven and fridge are included.",
    canonical: "https://capitalcleancare.com/blog/what-is-included-in-a-deep-cleaning",
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="what is included in a deep cleaning, deep cleaning checklist, deep clean house list, deep cleaning vs standard, what does deep cleaning include" />
      </Helmet>

      <ArticleSchema
        title="What Is Included in a Deep Cleaning? (Full Checklist)"
        description="The complete room-by-room deep cleaning checklist — kitchen, bathrooms, and living areas — how it differs from a standard clean, how long it takes, and what's done on request."
        url="https://capitalcleancare.com/blog/what-is-included-in-a-deep-cleaning"
        datePublished="2026-06-16"
        image={HERO_IMAGE}
      />
      <HowToSchema
        name="What a Professional Deep Cleaning Covers"
        description="The method and scope of a professional deep cleaning, from high-to-low dusting to detail zones and inside appliances."
        url="https://capitalcleancare.com/blog/what-is-included-in-a-deep-cleaning"
        steps={steps}
        totalTime="PT4H"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "What Is Included in a Deep Cleaning", href: "/blog/what-is-included-in-a-deep-cleaning" }]} />

      <div className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "What Is Included in a Deep Cleaning?" }]} />
        </div>
      </div>

      <BlogHero src={HERO_IMAGE} alt="A professional cleaner deep-cleaning a kitchen in a Maryland home">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">What Is Included in a Deep Cleaning?</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">The full room-by-room checklist — and what makes it different from a standard clean</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Capital Clean Care · MD · DC · VA · June 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              A deep cleaning is a complete, top-to-bottom reset of your home — everything a standard clean does, <strong>plus</strong> all the detailed work that build-up requires: inside the appliances, grout, baseboards, vents, window tracks, and the corners a routine clean never reaches. Here's the full checklist, room by room, so you know exactly what you're getting.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Deep Cleaning Checklist</h2>
            <div className="space-y-5 mb-10">
              {checklist.map(([room, items]) => (
                <div key={room} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-3 flex items-center gap-2"><Sparkles className="h-5 w-5 text-accent" /> {room}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-accent shrink-0 mt-0.5" /> {it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">How a Deep Clean Is Done</h2>
            <div className="space-y-8 mb-8">
              {steps.map((s, i) => (
                <div key={s.name} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-accent text-white font-bold text-lg flex items-center justify-center shadow-md">{String(i + 1).padStart(2, "0")}</div>
                  <div><h3 className="font-heading text-xl font-bold text-foreground mb-2">{s.name}</h3><p className="text-muted-foreground leading-relaxed">{s.text}</p></div>
                </div>
              ))}
            </div>
          </FadeInSection>

          <BlogInlineCTA headline="Ready for a top-to-bottom reset?" subtext="Capital Clean Care's eco-friendly deep cleaning gets your home to a true baseline — across Bethesda, Rockville, Silver Spring, and Gaithersburg. Background-checked, locally owned." ctaLabel="Get My Free Quote" ctaTo="/contact" />

          <FadeInSection>
            <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 my-12">
              <p className="font-semibold text-foreground mb-1">Keep reading</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Compare{" "}
                <Link to="/blog/deep-cleaning-vs-regular-cleaning" className="text-accent underline hover:no-underline">deep cleaning vs regular cleaning</Link>{" "}
                or see{" "}
                <Link to="/blog/how-often-should-you-hire-a-cleaning-service" className="text-accent underline hover:no-underline">how often you should hire a cleaning service</Link>.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Book a Deep Clean for Your Home</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">Eco-friendly{" "}<Link to="/services/deep-cleaning" className="underline text-primary-foreground/90 hover:text-white">deep cleaning</Link>{" "}across Maryland, DC, and Northern Virginia — background-checked, locally owned, satisfaction guaranteed.</p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </article>
      <StickyCTA />
    </Layout>
  );
};

export default WhatsIncludedDeepCleaning;
