import { Shield, Leaf, Users, Heart, CheckCircle, Award, Star, MapPin, Clock, ArrowRight, Quote } from "lucide-react";
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
import { FAQSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
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
  { q: "What areas does Capital Clean Care serve?", a: "We serve communities throughout Maryland (Montgomery, Frederick, Howard, and Prince George's Counties), Washington DC (all quadrants), and Northern Virginia (Arlington, Fairfax, McLean, Alexandria, Falls Church, Vienna, and Tysons)." },
  { q: "Are your cleaning teams background-checked?", a: "Yes. Every Capital Clean Care team member undergoes comprehensive background screening, professional training, and ongoing quality assessments before entering any client's home." },
  { q: "What eco-friendly products do you use?", a: "We use plant-based, non-toxic cleaning solutions that are free from harsh chemicals, artificial fragrances, and allergens. Our products are EPA Safer Choice certified and safe for families, pets, and the environment." },
  { q: "Do you offer a satisfaction guarantee?", a: "Yes. We offer a 100% satisfaction guarantee on every cleaning. If you're not completely happy with any aspect of our work, contact us within 24 hours and we'll return to re-clean the area at no additional charge." },
  { q: "What is the GreenShield 5-Step Clean™?", a: "The GreenShield 5-Step Clean™ is our proprietary cleaning methodology developed over 9+ years of residential cleaning in the DMV. It covers: (1) Assess & Protect walkthrough, (2) Dust-Free Air Start top-to-bottom, (3) GreenShield Sanitize with EPA Safer Choice products, (4) Deep Scrub & Polish against our 50-point checklist, and (5) White-Glove Inspection before we leave. Every visit follows this exact sequence." },
  { q: "How long has Capital Clean Care been in business?", a: "Capital Clean Care has been serving the DMV region for over 9 years with premium, eco-friendly residential cleaning. Our experience spans hundreds of homes across Maryland, DC, and Virginia." },
  { q: "What services do you offer?", a: "We offer standard house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, recurring cleaning plans (weekly, bi-weekly, monthly), Airbnb/short-term rental cleaning, and specialized eco-friendly cleaning." },
  { q: "How do I get a free quote?", a: "Fill out our online quote form, call us at (240) 704-2551, or email capitalcleancare@gmail.com. We typically respond within a few hours with a personalized estimate." },
  { q: "Are you licensed and insured?", a: "Yes. Capital Clean Care is fully licensed, bonded, and insured with comprehensive liability coverage. We carry general liability insurance for your complete protection on every visit." },
  { q: "Do I need to be home during the cleaning?", a: "No. Many clients provide key, code, or smart lock access so we can clean while they're at work. All team members are background-checked and insured." },
  { q: "What are your hours of operation?", a: "We operate Monday through Saturday, 8 AM to 6 PM. We offer flexible scheduling including early morning and Saturday appointments to accommodate your lifestyle." },
  { q: "Can I customize my cleaning service?", a: "Absolutely. While we follow comprehensive checklists, we're happy to adjust priorities based on your preferences. Just let us know your specific needs when booking." },
];

const milestones = [
  { year: "2015", title: "Founded in Silver Spring", desc: "Capital Clean Care opens its doors with a single team and a clear mission: eco-friendly cleaning that families can trust." },
  { year: "2017", title: "First 100 Clients", desc: "Word-of-mouth growth takes us to 100 recurring clients across Montgomery County. We hire our second dedicated team." },
  { year: "2019", title: "GreenShield Method Born", desc: "After hundreds of homes and thousands of hours, we codify our 5-step proprietary cleaning process: the GreenShield 5-Step Clean™." },
  { year: "2021", title: "Expanding Into DC & VA", desc: "Growing demand from DC and Northern Virginia clients leads us to expand our service area across the full DMV region." },
  { year: "2024", title: "9+ Years, 500+ Homes", desc: "Today we serve hundreds of families across Maryland, DC, and Virginia — with the same care and standards as our very first client." },
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
                    Capital Clean Care didn't start as a business plan. It started as a problem.
                  </p>
                  <p>
                    In 2015, our founder — a Silver Spring resident with young children and a dog — was hiring cleaning services and noticing the same pattern over and over: strong chemical smells that lingered for days, inconsistent results that varied wildly visit to visit, and a growing unease about what those products were leaving behind on the floors where their kids played.
                  </p>
                  <p>
                    After one too many disappointing experiences, the decision was simple: <em>start the cleaning company they wished existed.</em>
                  </p>
                  <p>
                    The early days were spent researching EPA Safer Choice certified products, studying professional cleaning techniques, and testing every method in their own Silver Spring home. What emerged from those early months wasn't just a business — it was a set of standards that became the foundation for everything Capital Clean Care is today.
                  </p>
                  <p>
                    The first client was a neighbor. Then a referral. Then another referral. Growth was slow, intentional, and entirely word-of-mouth — because the work spoke for itself.
                  </p>
                </div>

                {/* Founder Quote */}
                <div className="mt-8 relative pl-6 border-l-4 border-accent">
                  <Quote className="absolute -left-2 -top-1 h-5 w-5 text-accent" />
                  <p className="text-foreground italic leading-relaxed">
                    "I started this company because I couldn't find a cleaning service I would trust in my own home. Nine years later, I hold every client's home to that same standard — because it <em>is</em> my standard."
                  </p>
                  <p className="text-sm font-semibold text-accent mt-3">— Founder, Capital Clean Care</p>
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
                    {/* Year bubble */}
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground font-bold text-xs flex items-center justify-center z-10 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-3">
                      {m.year.slice(2)}
                    </div>
                    {/* Card */}
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

      {/* ══════════════ GREENSHIELD ORIGIN ══════════════ */}
      <ScrollReveal>
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                🛡️ Our Proprietary Method
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                How the GreenShield 5-Step Clean™ Was Born
              </h2>
              <div className="space-y-4 text-foreground text-left max-w-3xl mx-auto leading-relaxed">
                <p>
                  By 2019, after four years and hundreds of homes, patterns became clear. The homes we cleaned weren't staying clean as long as they should. Dust was resettling. Surfaces that looked clean weren't actually sanitized. The reason? Most cleaning approaches — even professional ones — follow the wrong order.
                </p>
                <p>
                  We spent months testing and refining a specific sequence: start at the top with dry dusting before any wet cleaning (so dust never falls onto already-cleaned surfaces), apply EPA Safer Choice sanitizers to every high-touch area before scrubbing begins, then finish with a 50-point white-glove inspection that holds every cleaner accountable.
                </p>
                <p>
                  The result was the <strong>GreenShield 5-Step Clean™</strong> — a structured, repeatable process that delivers a deeper, safer, and longer-lasting clean than anything we'd seen from other services. Every Capital Clean Care visit has followed this method ever since.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ GREENSHIELD COMPONENT ══════════════ */}
      <ScrollReveal>
        <GreenShield5Step compact showCTA={false} />
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
                  desc: "New cleaners complete structured onboarding that covers the GreenShield 5-Step process, product safety, surface-specific techniques, and client communication standards.",
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
                  { icon: Users, text: "Continuous team training and measurable quality improvement" },
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
                  desc: "All four quadrants — Georgetown, Capitol Hill, Dupont Circle, Adams Morgan, U Street, Navy Yard, Columbia Heights & more.",
                  slug: "/washington-dc",
                  label: "Explore DC",
                },
                {
                  title: "Northern Virginia",
                  desc: "Arlington, Fairfax, McLean, Alexandria, Falls Church, Reston, Vienna, Tysons & surrounding communities.",
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
