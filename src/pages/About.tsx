import { Shield, Leaf, Users, Heart, CheckCircle, Award, Star, MapPin, Clock, ArrowRight, Quote, Lightbulb, FlaskConical, Target, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import GreenShield5Step from "@/components/GreenShield5Step";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQSchema, LocalBusinessSchema, BreadcrumbSchema, FounderPersonSchema, AboutPageSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import teamPhoto from "@/assets/team-photo.webp";
import cleanerBlinds from "@/assets/cleaner-blinds.webp";
import cleanerSupplies from "@/assets/cleaner-supplies.webp";
import happyClient from "@/assets/happy-client.webp";

const testimonials = [
  { name: "Sarah M.", location: "Bethesda, MD", text: "Capital Clean Care transformed our home. The team is professional, thorough, and uses products safe for my kids and pets. I couldn't be happier with the service." },
  { name: "David R.", location: "Rockville, MD", text: "Consistent quality every single visit. Our dedicated team knows our home perfectly and always leaves everything sparkling. Best cleaning service in Montgomery County." },
  { name: "Lauren K.", location: "Capitol Hill, DC", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I never would have thought to check." },
  { name: "James T.", location: "Arlington, VA", text: "We've used their bi-weekly service for over a year. Every visit exceeds expectations. The team even remembers our dog's name!" },
  { name: "Angela T.", location: "Silver Spring, MD", text: "I love that they use eco-friendly products. With two kids and a dog, knowing the products are safe gives me real peace of mind. Highly recommend." },
  { name: "Michelle P.", location: "Georgetown, DC", text: "Finally a cleaning service I can trust completely. They arrive on time, follow a real checklist, and the results are consistently amazing. Worth every penny." },
];

const aboutFaqs = [
  { q: "What areas does Capital Clean Care serve?", a: "We serve communities throughout Maryland (Montgomery, Frederick, Howard, and Prince George's Counties), Washington DC (all quadrants), and Northern Virginia (Arlington, Fairfax, McLean, Alexandria, Falls Church, Vienna, Reston, Tysons, Herndon, and Annandale)." },
  { q: "Are your cleaning teams background-checked?", a: "Yes. Every Capital Clean Care team member undergoes comprehensive background screening, professional training, and ongoing quality assessments before entering any client's home." },
  { q: "What eco-friendly products do you use?", a: "We use plant-based, non-toxic cleaning solutions that are free from harsh chemicals, artificial fragrances, and allergens. Our products are EPA Safer Choice certified and safe for families, pets, and the environment." },
  { q: "Do you offer a satisfaction guarantee?", a: "Yes. We offer a 100% satisfaction guarantee on every cleaning. If you're not completely happy with any aspect of our work, contact us within 24 hours and we'll return to re-clean the area at no additional charge." },
  { q: "What is the GreenShield 5-Step Clean™?", a: "The GreenShield 5-Step Clean™ is our proprietary cleaning methodology developed over 9+ years of residential cleaning in the DMV. It covers: (1) Assess & Protect walkthrough, (2) Dust-Free Air Start top-to-bottom, (3) GreenShield Sanitize with EPA Safer Choice products, (4) Deep Scrub & Polish against our 50-point checklist, and (5) White-Glove Inspection before we leave. Every visit follows this exact sequence." },
  { q: "How long has Capital Clean Care been in business?", a: "Capital Clean Care has been serving the DMV region since 2015 — over 9 years of premium, eco-friendly residential cleaning. Our experience spans hundreds of homes across Maryland, DC, and Virginia." },
  { q: "What services do you offer?", a: "We offer standard house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, recurring cleaning plans (weekly, bi-weekly, monthly), Airbnb/short-term rental cleaning, and specialized eco-friendly cleaning." },
  { q: "How do I get a free quote?", a: "Fill out our online quote form, call us at (240) 704-2551, or email capitalcleancare@gmail.com. We typically respond within a few hours with a personalized estimate." },
  { q: "Are you licensed and insured?", a: "Yes. Capital Clean Care is fully licensed, bonded, and insured with comprehensive liability coverage. We carry general liability insurance for your complete protection on every visit." },
  { q: "Do I need to be home during the cleaning?", a: "No. Many clients provide key, code, or smart lock access so we can clean while they're at work. All team members are background-checked and insured." },
  { q: "What are your hours of operation?", a: "We operate Monday through Saturday, 8 AM to 6 PM. We offer flexible scheduling including early morning and Saturday appointments to accommodate your lifestyle." },
  { q: "Can I customize my cleaning service?", a: "Absolutely. While we follow comprehensive checklists, we're happy to adjust priorities based on your preferences. Just let us know your specific needs when booking." },
];

const milestones = [
  { year: "2015", title: "Founded in Silver Spring", desc: "Capital Clean Care opens its doors with a single team and a clear mission: eco-friendly cleaning that families can trust. The first client is a neighbor on the same street." },
  { year: "2016", title: "First 50 Recurring Clients", desc: "Word-of-mouth growth reaches 50 recurring households across Montgomery County. Every new client comes through a referral — no advertising required." },
  { year: "2017", title: "100 Clients & Second Team", desc: "Demand outpaces capacity. The second dedicated cleaning team is hired and trained. The team composition: all background-checked, all trained on our evolving protocols." },
  { year: "2019", title: "GreenShield Method Born", desc: "After hundreds of homes and thousands of hours of hands-on cleaning, the patterns are undeniable. The 5-step proprietary GreenShield Clean™ is formalized and becomes the standard for every visit." },
  { year: "2021", title: "Expanding Into DC & Virginia", desc: "Growing demand from DC neighborhoods and Northern Virginia drives a deliberate expansion across the full DMV region — same standards, broader reach." },
  { year: "2024", title: "9+ Years, 500+ Homes Served", desc: "Today we serve hundreds of families across Maryland, DC, and Virginia — with the same care, products, and standards as our very first client in 2015." },
];

const greenShieldSteps = [
  {
    number: "01",
    icon: Target,
    title: "Assess & Protect",
    problem: "Most cleaning services start scrubbing without a plan — and it shows.",
    solution: "Before touching a single surface, our professional walks every room to identify priorities, note delicate items, flag problem areas, and customize the visit specifically to your space. This 5-minute walkthrough prevents damage and ensures nothing gets missed.",
    scienceBadge: "Pre-Clean Protocol",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Dust-Free Air Start",
    problem: "Cleaning top surfaces after you've already mopped the floor is cleaning theater — the dust you just raised settles right back down.",
    solution: "We always start at the top: ceiling fan blades, air vents, blinds, high shelves, crown molding, and baseboards — all dry-dusted before any wet cleaning begins. This eliminates recontamination, a problem most cleaning services never even consider.",
    scienceBadge: "Zero Recontamination",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "GreenShield Sanitize",
    problem: "Surface-level cleaning removes visible dirt. It doesn't kill pathogens on the 37 high-touch surfaces in a typical home.",
    solution: "We apply our EPA Safer Choice™ plant-based disinfectants to every high-touch surface — light switches, door handles, faucet handles, refrigerator pulls, toilet seats, remote controls — and allow proper dwell time before wiping. This is the difference between a clean-looking home and a genuinely safe one.",
    scienceBadge: "EPA Safer Choice™",
  },
  {
    number: "04",
    icon: Award,
    title: "Deep Scrub & Polish",
    problem: "A 'clean' bathroom that still has soap scum in the corners isn't clean.",
    solution: "Detailed, hands-on scrubbing of every surface, fixture, appliance, and floor. We use specialized brushes for grout, microfiber cloths matched to each surface type, and our 50-point checklist that holds every cleaner accountable for things like the inside of the microwave, stovetop grates, and shower door tracks.",
    scienceBadge: "50-Point Checklist",
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "White-Glove Inspection",
    problem: "Without accountability, quality drifts. Most services have no final check.",
    solution: "Before we leave your home, our team runs a white-glove inspection against the full 50-point checklist. We catch what was missed and re-clean it immediately — before you ever see it. If you still find something after we've left, we return within 24 hours at no charge. No questions, no arguments.",
    scienceBadge: "100% Guaranteed",
  },
];

const whyDifferent = [
  {
    aspect: "Cleaning Sequence",
    others: "Random order — often clean floors before dusting",
    us: "Strict top-to-bottom sequence prevents recontamination every time",
  },
  {
    aspect: "Products Used",
    others: "Harsh chemical disinfectants with artificial fragrances",
    us: "EPA Safer Choice plant-based products — safe for kids, pets & allergy sufferers",
  },
  {
    aspect: "Accountability",
    others: "No formal checklist — results vary visit to visit",
    us: "50-point GreenShield checklist + white-glove inspection on every visit",
  },
  {
    aspect: "Team Consistency",
    others: "Rotating staff — strangers in your home each time",
    us: "Dedicated recurring teams — same people who learn your home and preferences",
  },
  {
    aspect: "Background Checks",
    others: "Varies — often unchecked subcontractors",
    us: "Every team member: comprehensive background screen before first visit",
  },
  {
    aspect: "Satisfaction Guarantee",
    others: "\"We'll try to make it right\" — no commitment",
    us: "We return within 24 hours and re-clean at zero charge — unconditionally",
  },
];

const About = () => {
  const { seoHelmet } = useSEO({
    title: "About Capital Clean Care — Founder Story, GreenShield Method & Our Team | MD, DC & VA",
    description: "The story behind Capital Clean Care: a family-founded eco-friendly cleaning service serving MD, DC & VA for 9+ years. Learn about our GreenShield 5-Step Clean™ methodology, our licensed team, and our 100% satisfaction guarantee.",
    canonical: "https://capitalcleancare.com/about",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <FounderPersonSchema />
      <AboutPageSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]} />
      <FAQSchema faqs={aboutFaqs} />

      {/* ══════════════ HERO ══════════════ */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} className="mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                🏡 Family-Owned Since 2015
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We Clean Like It's <span className="text-gradient">Our Own Home</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Capital Clean Care was built on a simple truth: your family deserves a clean, healthy home — without toxic chemicals, broken promises, or inconsistent results.
              </p>
              <p className="text-foreground leading-relaxed mb-8">
                For over 9 years, we've served hundreds of families across Maryland, Washington DC, and Northern Virginia with a standard of care that goes far beyond what most cleaning companies offer. Every visit follows our proprietary <strong>GreenShield 5-Step Clean™</strong> — the method we developed in our own home, for homes just like yours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+12407042551">(240) 704-2551</a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={teamPhoto}
                alt="Capital Clean Care team members in branded uniforms ready for residential cleaning"
                className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
                loading="eager"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg text-center">
                <p className="font-heading font-bold text-3xl">9+</p>
                <p className="text-xs font-medium leading-tight">Years<br/>Serving DMV</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS BAR ══════════════ */}
      <ScrollReveal>
        <section className="border-y border-border bg-card py-8">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: "500+", label: "Homes Cleaned" },
                { value: "9+", label: "Years in DMV" },
                { value: "5.0 ★", label: "Google Rating" },
                { value: "100%", label: "Satisfaction Guarantee" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading font-bold text-3xl md:text-4xl text-accent">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ FOUNDER STORY ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              <div>
                <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                  Our Story
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  Born Out of Frustration.<br/>Built on Principle.
                </h2>
                <div className="space-y-4 text-foreground leading-relaxed">
                  <p>
                    Capital Clean Care didn't start as a business plan. It started as a problem every parent in the DMV recognizes.
                  </p>
                  <p>
                    In 2015, our founder — a Silver Spring resident raising young children alongside a family dog — was cycling through cleaning services the way most people cycle through frustration. The pattern repeated itself: strangers in the home, results that looked acceptable until you actually ran your finger along the baseboard, and a sharp chemical smell that hung in the air for two days after every visit. The kind of smell that makes you wonder what your toddler is breathing while they crawl across a freshly mopped kitchen floor.
                  </p>
                  <p>
                    The breaking point wasn't dramatic. It was ordinary: another mediocre cleaning, another inconsistent result, another Sunday spent worrying about the products soaking into surfaces where the kids spent most of their time. The decision was simple — <em>build the cleaning company that should already exist.</em>
                  </p>
                  <p>
                    The early months weren't about business — they were about research. Hours spent studying EPA Safer Choice certification requirements. Evenings testing plant-based cleaning concentrates, comparing dwell times and efficacy. Weekends in the family home in Silver Spring, running every new protocol and every new product through the toughest quality test available: a home with kids, a dog, and a parent who actually knew what "clean" meant.
                  </p>
                  <p>
                    The first client was a neighbor who noticed the difference when she visited. Then came her sister. Then a referral from across the street. For the first two years, not a single dollar was spent on advertising. Growth was intentional and slow — because the point was never scale. The point was standards.
                  </p>
                  <p>
                    By 2017, there were fifty recurring clients and a second team. By 2019, the patterns of hundreds of homes had revealed something important: most cleaning services — even professional ones — were doing it in the wrong order. That insight became the foundation for the GreenShield 5-Step Clean™.
                  </p>
                </div>

                {/* Founder Quote */}
                <div className="mt-8 relative pl-6 border-l-4 border-accent">
                  <Quote className="absolute -left-2 -top-1 h-5 w-5 text-accent" />
                  <p className="text-foreground italic leading-relaxed">
                    "I started this company because I couldn't find a cleaning service I would trust in my own home — not with my kids on the floor, not with my dog sleeping in the kitchen. Nine years later, I hold every client's home to that same standard. Because it <em>is</em> my standard."
                  </p>
                  <p className="text-sm font-semibold text-accent mt-3">— Rodrigo Reis, Founder & Owner, Capital Clean Care</p>
                </div>

                {/* Problem → Solution callout */}
                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-red-50 border border-red-100 p-4">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-wide mb-2">The Problem We Solved</p>
                    <ul className="space-y-1.5 text-sm text-foreground">
                      <li className="flex gap-2"><span className="text-red-400 mt-0.5">✗</span>Harsh chemicals near children & pets</li>
                      <li className="flex gap-2"><span className="text-red-400 mt-0.5">✗</span>Inconsistent results visit to visit</li>
                      <li className="flex gap-2"><span className="text-red-400 mt-0.5">✗</span>No accountability or real checklist</li>
                      <li className="flex gap-2"><span className="text-red-400 mt-0.5">✗</span>New strangers in your home each time</li>
                    </ul>
                  </div>
                  <div className="rounded-xl bg-accent/5 border border-accent/20 p-4">
                    <p className="text-xs font-bold text-accent uppercase tracking-wide mb-2">What We Built Instead</p>
                    <ul className="space-y-1.5 text-sm text-foreground">
                      <li className="flex gap-2"><span className="text-accent mt-0.5">✓</span>EPA Safer Choice plant-based products</li>
                      <li className="flex gap-2"><span className="text-accent mt-0.5">✓</span>50-point GreenShield checklist</li>
                      <li className="flex gap-2"><span className="text-accent mt-0.5">✓</span>White-glove inspection every visit</li>
                      <li className="flex gap-2"><span className="text-accent mt-0.5">✓</span>Dedicated recurring team per home</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Photos */}
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={cleanerBlinds}
                  alt="Capital Clean Care professional cleaning window blinds with eco-friendly products"
                  className="rounded-2xl shadow-md w-full aspect-square object-cover"
                  loading="lazy"
                />
                <img
                  src={cleanerSupplies}
                  alt="Eco-friendly non-toxic cleaning products used by Capital Clean Care teams"
                  className="rounded-2xl shadow-md w-full aspect-square object-cover mt-8"
                  loading="lazy"
                />
                <img
                  src={happyClient}
                  alt="Happy Capital Clean Care client relaxing in a freshly cleaned home"
                  className="rounded-2xl shadow-md w-full aspect-square object-cover col-span-2"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ TIMELINE / MILESTONES ══════════════ */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                9 Years in the Making
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">Our Journey</h2>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 md:-translate-x-px" />
              <div className="space-y-10">
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-xs flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-3">
                      {m.year.slice(2)}
                    </div>
                    <div className={`flex-1 bg-white rounded-xl border border-border p-5 shadow-sm md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:mr-[calc(50%+1.5rem)]" : "md:ml-[calc(50%+1.5rem)]"}`}>
                      <p className="text-accent font-bold text-sm mb-1">{m.year}</p>
                      <h3 className="font-heading font-bold text-base mb-1">{m.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ GREENSHIELD ORIGIN — DEEP DIVE ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                🛡️ Our Proprietary Method
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                How the GreenShield 5-Step Clean™ Was Born
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  By 2018, after three years and hundreds of homes, something became undeniable: the homes we cleaned weren't staying clean as long as they should. Surfaces that looked spotless on cleaning day had visible dust by Thursday. Bathrooms that appeared sanitized still harbored pathogens on the light switch and faucet handle — surfaces most cleaners wipe but don't actually disinfect with adequate dwell time.
                </p>
                <p>
                  The root cause wasn't effort. It was sequence and science. Most residential cleaning — even professional cleaning — follows the order that feels intuitive rather than the order that actually works. You scrub the toilet, then you spray the mirror, then you mop the floor. But when you've disturbed all the dust on the ceiling fan and baseboards first, none of that scrubbing matters because you're cleaning into a dust storm.
                </p>
                <p>
                  We spent six months testing systematically. What happens if we do all dry dusting before any wet work? What if we treat high-touch surfaces with a disinfectant that has a mandated two-minute dwell time before wiping — the way hospital cleaning protocols require — rather than spray-and-wipe? What if there's an actual inspection checklist that a supervisor signs off before the team leaves?
                </p>
                <p>
                  The difference was measurable. Homes stayed clean longer between visits. Allergy sufferers reported improvements. And clients who had bounced between four or five cleaning services told us ours was the first time their home had ever felt genuinely clean — not just tidy.
                </p>
                <p>
                  In 2019, we formalized what had been evolving organically into the <strong>GreenShield 5-Step Clean™</strong>: a structured, repeatable, science-informed process that delivers a deeper, safer, and longer-lasting clean on every single visit. It's proprietary because no one else does it exactly this way. It's exclusive to Capital Clean Care because it took years of refinement in real homes to develop.
                </p>
              </div>

              {/* Science breakdown */}
              <div className="space-y-4">
                <h3 className="font-heading text-xl font-bold mb-4">The Science Behind the Sequence</h3>
                {greenShieldSteps.map((step) => (
                  <div key={step.number} className="rounded-xl border border-border bg-white p-5 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                        <step.icon className="h-4 w-4 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center flex-wrap gap-2 mb-1.5">
                          <span className="text-xs text-muted-foreground font-mono">Step {step.number}</span>
                          <h4 className="font-heading font-bold text-sm">{step.title}</h4>
                          <span className="text-xs bg-accent/10 text-accent font-semibold px-2 py-0.5 rounded-full">{step.scienceBadge}</span>
                        </div>
                        <p className="text-xs text-red-500 mb-1"><strong>Problem:</strong> {step.problem}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed"><strong className="text-foreground">Our fix:</strong> {step.solution}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust note */}
            <div className="bg-accent/5 border border-accent/20 rounded-2xl py-5 px-6 text-center">
              <p className="text-sm text-foreground font-medium">
                🛡️ The GreenShield 5-Step Clean™ is exclusive to Capital Clean Care — developed over{" "}
                <strong>9+ years</strong> of real-home refinement and used on every single visit across Maryland, DC & Virginia.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ GREENSHIELD COMPONENT ══════════════ */}
      <ScrollReveal>
        <GreenShield5Step compact showCTA={false} />
      </ScrollReveal>

      {/* ══════════════ WHY WE'RE DIFFERENT ══════════════ */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Side by Side
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Capital Clean Care vs. Everyone Else
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                These aren't marketing claims. They're structural differences in how we operate — differences you'll feel in your home.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-border shadow-sm bg-white">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 text-muted-foreground font-semibold w-1/3">What We're Comparing</th>
                    <th className="text-left p-4 text-muted-foreground font-semibold w-1/3">Typical Cleaning Service</th>
                    <th className="text-left p-4 text-accent font-semibold w-1/3">Capital Clean Care</th>
                  </tr>
                </thead>
                <tbody>
                  {whyDifferent.map((row, i) => (
                    <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-secondary/30"}>
                      <td className="p-4 font-semibold text-foreground">{row.aspect}</td>
                      <td className="p-4 text-muted-foreground">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                          {row.others}
                        </span>
                      </td>
                      <td className="p-4 text-foreground">
                        <span className="inline-flex items-start gap-2">
                          <span className="text-accent mt-0.5 shrink-0">✓</span>
                          {row.us}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ OUR TEAM ══════════════ */}
      <ScrollReveal>
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F1F8F1]">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Our People
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                The Team Behind Every Clean
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our cleaners aren't just employees — they're trained professionals who take personal pride in the work they deliver inside your home.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Shield,
                  title: "Rigorous Screening",
                  desc: "Every team member passes a comprehensive background check, identity verification, and professional reference review before their first visit. We don't cut corners on who we trust inside your home.",
                },
                {
                  icon: Award,
                  title: "Professional Training",
                  desc: "New cleaners complete structured onboarding that covers the GreenShield 5-Step process, product safety, surface-specific techniques, and client communication standards before their first solo visit.",
                },
                {
                  icon: Users,
                  title: "Dedicated Teams",
                  desc: "Recurring clients are assigned a consistent team. They learn your home, your preferences, and your priorities — delivering increasingly personalized results with every visit.",
                },
              ].map((item) => (
                <Card key={item.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Core values grid */}
            <div className="bg-white rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="font-heading text-xl font-bold mb-6 text-center">What We Stand For</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: CheckCircle, text: "Consistency over shortcuts — every visit follows our 50-point GreenShield checklist" },
                  { icon: Leaf, text: "Environmental responsibility in every product, process, and practice" },
                  { icon: Heart, text: "Genuine care for your home, your family, and your time" },
                  { icon: Award, text: "Transparency in pricing — no hidden fees, no surprise charges" },
                  { icon: TrendingUp, text: "Continuous team training and measurable quality improvement" },
                  { icon: MapPin, text: "Deep community roots across Maryland, DC, and Northern Virginia" },
                ].map((v, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <v.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <p className="text-sm text-foreground leading-relaxed">{v.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ SERVICE AREAS ══════════════ */}
      <ScrollReveal>
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Where We Serve
              </span>
              <h2 className="font-heading text-3xl font-bold">Your Neighborhood, Our Expertise</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                Capital Clean Care serves the full Washington DC metropolitan area — from suburban Maryland to DC neighborhoods to Northern Virginia communities.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Maryland",
                  desc: "Montgomery, Frederick, Howard & Prince George's Counties — Rockville, Bethesda, Silver Spring, Germantown, Frederick, Columbia, Ellicott City & more.",
                  slug: "/maryland",
                  label: "Explore MD",
                },
                {
                  title: "Washington, DC",
                  desc: "All four quadrants — Georgetown, Capitol Hill, Dupont Circle, Adams Morgan, Shaw, Columbia Heights, Navy Yard & more.",
                  slug: "/washington-dc",
                  label: "Explore DC",
                },
                {
                  title: "Northern Virginia",
                  desc: "Arlington, Fairfax, McLean, Alexandria, Falls Church, Reston, Vienna, Tysons, Herndon & surrounding communities.",
                  slug: "/virginia",
                  label: "Explore VA",
                },
              ].map((area) => (
                <Card key={area.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <MapPin className="h-4 w-4 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{area.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{area.desc}</p>
                    <Link
                      to={area.slug}
                      className="text-accent text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      {area.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Client Stories
              </span>
              <h2 className="font-heading text-3xl font-bold">What Our Clients Say</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <Card key={i} className="border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-5">
                    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground italic mb-4 text-sm leading-relaxed">"{t.text}"</p>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ FAQ ══════════════ */}
      <ScrollReveal>
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="font-heading text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <FAQ faqs={aboutFaqs} />
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ TRUST BADGES ══════════════ */}
      <ScrollReveal>
        <TrustBadges />
      </ScrollReveal>

      {/* ══════════════ CONTACT / NAP ══════════════ */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Contact Capital Clean Care</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              4111 Postgate Terrace, Silver Spring, MD 20906
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
              Mon–Sat: 8 AM–6 PM
            </span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Your Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551" aria-label="Call Capital Clean Care at (240) 704-2551">(240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* ══════════════ QUOTE FORM ══════════════ */}
      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="font-heading text-3xl font-bold">Get Your Free Quote</h2>
            <p className="text-muted-foreground mt-2">
              New clients get <strong className="text-accent">15% off</strong> their first GreenShield Clean. Fill out the form and we'll respond within hours.
            </p>
          </div>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;
