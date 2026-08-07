import { Link } from "react-router-dom";
import { Phone, ArrowRight, Shield, UserCheck, Star, CheckCircle2, MessageSquare, CalendarClock, Heart, Home } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import SeniorQuoteForm from "@/components/SeniorQuoteForm";
import { pickReviews, GOOGLE_LISTING_URL } from "@/data/realReviews";

const URL = "https://capitalcleancare.com/senior-home-cleaning-montgomery-county-md";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";
const HERO_IMAGE = "/images/team/real-team-two-members.webp";
const AREA = ["Silver Spring", "Rockville", "Bethesda", "Gaithersburg", "Montgomery County"];

const INCLUDED: { title: string; text: string }[] = [
  { title: "Dusting at safe heights", text: "We reach the high and low spots — shelves, ceiling fans, baseboards — so there's never a need to climb, stretch, or risk a fall." },
  { title: "Fall-prevention bathroom cleaning", text: "Tubs, tiles, and floors left clean, dry, and residue-free — no slippery film underfoot where a slip is most dangerous." },
  { title: "Fresh bed linen changes", text: "Beds stripped, changed, and neatly made with fresh linens — one of the tasks that gets hardest to manage with age." },
  { title: "Kitchen & refrigerator cleaning", text: "Counters, sink, stovetop, and inside the fridge — including removing expired food when you'd like us to (only with permission)." },
  { title: "Gentle light organizing", text: "We tidy clutter and clear surfaces to keep walkways safe — always asking first, never moving belongings without consent." },
  { title: "Fragrance-free & hypoallergenic products", text: "Plant-based, EPA Safer Choice cleaners available fragrance-free — gentle on sensitive lungs, skin, and allergies." },
];

const TRUST: { Icon: typeof Shield; title: string; text: string }[] = [
  { Icon: Heart, title: "The same friendly cleaner every visit", text: "Seniors value routine and a familiar face. We keep the same trusted cleaner on your schedule so every visit feels comfortable and safe." },
  { Icon: Shield, title: "Background-checked, licensed & insured", text: "Every team member passes a thorough background check. We're fully licensed and insured, so your family is protected." },
  { Icon: MessageSquare, title: "Family communication", text: "We send arrival and departure text updates to the adult child who books — so you always know when we've come and gone." },
  { Icon: CalendarClock, title: "Flexible scheduling", text: "Weekly, biweekly, or monthly — as often or as little as your parent needs. Easy to change as needs change." },
];

const faqs = [
  { q: "Do you offer cleaning for residents of Leisure World and other 55+ communities?", a: "Yes. We regularly clean homes in Leisure World, Riderwood, and other 55+ communities across Montgomery County. We're familiar with community access and gate check-in procedures, so visits go smoothly — just tell us your community when you book." },
  { q: "Can I book cleaning for my elderly parent who lives in another home?", a: "Absolutely — many of our clients are adult children arranging cleaning for a parent. You can set up and pay for the service remotely, and we'll coordinate directly with your mom or dad on the day. It's real peace of mind knowing their home is cared for, even from afar." },
  { q: "Are your cleaners background-checked?", a: "Yes. Every cleaner passes a thorough background check before ever entering a home, and our team is fully licensed and insured. Your parent's safety and your trust are the foundation of everything we do." },
  { q: "Do you use products safe for seniors with allergies or respiratory issues?", a: "Yes. We offer fragrance-free, hypoallergenic, EPA Safer Choice plant-based products on request — gentle on sensitive lungs and skin, with no harsh chemical fumes. Just tell us about any sensitivities and we'll clean accordingly." },
  { q: "Can you send the same cleaner every time?", a: "Yes, and we strongly recommend it for seniors. A familiar face each visit builds comfort, trust, and a reliable routine. We do our best to keep the same cleaner on your schedule every single time." },
  { q: "How do I know when the cleaning is done if I don't live with my parent?", a: "We send arrival and departure text updates to the family member who books, so you always know when we've arrived and finished. If you'd like, we can add a quick note about the visit too — you stay in the loop without having to be there." },
];

const SeniorHomeCleaning = () => {
  const { seoHelmet } = useSEO({
    title: "Senior Home Cleaning in Montgomery County, MD | Capital Clean Care",
    description:
      "Trusted, gentle house cleaning for seniors in Silver Spring, Rockville & Bethesda. Licensed, insured, family-approved. Call for a free quote today.",
    canonical: URL,
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema areaServed={AREA} />
      <ServiceSchema
        serviceName="Senior Home Cleaning"
        description="Gentle, reliable house cleaning for older adults across Montgomery County, MD — Silver Spring, Rockville, Bethesda and beyond. Background-checked, licensed, and insured, with fall-prevention cleaning and fragrance-free products."
        url={URL}
        serviceType="Senior Home Cleaning"
        areaServed={AREA}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Senior Home Cleaning", href: "/senior-home-cleaning-montgomery-county-md" }]} />

      {/* ── Hero ── */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Senior Home Cleaning" }]} className="mb-6" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-base uppercase tracking-wide px-4 py-2 rounded-full mb-5">
                <Home className="h-4 w-4" /> Serving Montgomery County, MD
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.12] text-foreground">
                Senior Home Cleaning Services in Montgomery County, MD
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-7 max-w-xl">
                Gentle, reliable house cleaning for older adults — trusted by families across Silver Spring,
                Rockville, Bethesda and beyond.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-7">
                <a href="#quote" className="inline-flex items-center justify-center bg-accent hover:bg-accent/90 text-white font-bold text-xl px-8 py-5 rounded-xl shadow-lg shadow-accent/25 transition-colors">
                  Get a Free Quote
                </a>
                <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary/5 font-bold text-xl px-8 py-5 rounded-xl transition-colors">
                  <Phone className="h-6 w-6" /> {PHONE}
                </a>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-3 text-lg text-gray-700">
                {[
                  { Icon: Shield, t: "Licensed & Insured" },
                  { Icon: UserCheck, t: "Background-Checked Team" },
                  { Icon: Star, t: "5-Star Rated" },
                ].map(({ Icon, t }) => (
                  <span key={t} className="flex items-center gap-2 font-medium">
                    <Icon className="h-6 w-6 text-accent shrink-0" /> {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative lg:pl-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
                <img
                  src={HERO_IMAGE}
                  alt="A friendly Capital Clean Care team keeping an older adult's home fresh, safe, and comfortable in Montgomery County, Maryland"
                  className="w-full h-full object-cover"
                  width={800} height={600} loading="eager" fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Caring for a Home, Caring for a Person ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Caring for a Home, Caring for a Person</h2>
          <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Staying in the home you love is one of the greatest parts of independence — and keeping it clean should
              never stand in the way. Our team quietly handles the tiring, tricky, and risky work — the bending,
              reaching, and scrubbing — so you can enjoy a fresh, comfortable home without the strain, and without the
              worry of a fall.
            </p>
            <p>
              If you're arranging cleaning for a parent, we understand what you're really looking for:{" "}
              <strong className="text-foreground">peace of mind knowing Mom or Dad's home is safe and clean — even when
              you can't be there.</strong> We treat your parent's home, and your parent, with the same patience and
              respect we'd want for our own family.
            </p>
            <p>
              That means gentle, unhurried visits, a friendly and familiar cleaner, and clear communication every step
              of the way. It's more than cleaning — it's care.
            </p>
          </div>
        </div>
      </section>

      {/* ── What's Included ── */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">What's Included in Our Senior Cleaning Service</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {INCLUDED.map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
                <CheckCircle2 className="h-7 w-7 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1.5">{item.title}</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Families Trust Us ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground">Our Senior Care Promise</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">The commitments that make families comfortable trusting us with a parent&#x27;s home.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {TRUST.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Serving Senior Communities ── */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Serving Senior Communities Across Montgomery County</h2>
          <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              We proudly serve seniors and their families throughout Montgomery County — including residents of{" "}
              <strong className="text-foreground">Leisure World</strong> and <strong className="text-foreground">Riderwood</strong> in
              Silver Spring, <strong className="text-foreground">Ingleside at King Farm</strong> in Rockville,{" "}
              <strong className="text-foreground">Asbury Methodist Village</strong> in Gaithersburg, and{" "}
              <strong className="text-foreground">Maplewood Park Place</strong> in Bethesda.
            </p>
            <p>
              We also clean for older adults across the many neighborhoods with a high concentration of 55+ residents —
              throughout Silver Spring, Rockville, Bethesda, Chevy Chase, Potomac, and Kensington. Whether it's a
              single-family home, a condo, or an independent-living apartment, we bring the same gentle, dependable care.
            </p>
            <p className="text-lg">
              Explore cleaning in your city:{" "}
              <Link to="/locations/silver-spring-md" className="text-accent font-semibold underline hover:no-underline">Silver Spring</Link>,{" "}
              <Link to="/locations/rockville-md" className="text-accent font-semibold underline hover:no-underline">Rockville</Link>, and{" "}
              <Link to="/locations/bethesda-md" className="text-accent font-semibold underline hover:no-underline">Bethesda</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Real Google reviews ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-1 mb-3" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm font-semibold text-muted-foreground mb-2">Rated 5.0 from 45 Google reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What Families Say</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pickReviews("senior-home-cleaning", 3).map((r) => (
              <figure key={r.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm flex flex-col">
                <div className="flex gap-0.5 mb-3" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed mb-4 flex-1">&ldquo;{r.text}&rdquo;</blockquote>
                <figcaption className="text-sm font-semibold text-foreground">{r.name}</figcaption>
              </figure>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href={GOOGLE_LISTING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-accent font-medium hover:underline">
              Read all reviews on Google <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ (visible + FAQPage schema) ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((f) => (
              <div key={f.q}>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{f.q}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Senior Cleaning Guides (hub → spokes) ── */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Senior Cleaning Guides</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Helping a parent — or planning your own next chapter? These guides cover the questions families ask us most.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { to: "/resources/signs-aging-parent-needs-help-housekeeping", label: "Is it time to get Mom or Dad some help at home?" },
              { to: "/resources/clean-home-fall-prevention-seniors", label: "Fall prevention starts with a clean floor" },
              { to: "/resources/cleaning-service-vs-caregiver-elderly", label: "Cleaning service or caregiver: which does your parent need?" },
              { to: "/resources/how-to-hire-cleaning-service-elderly-parents", label: "10 questions to ask before hiring for a senior's home" },
              { to: "/resources/house-cleaning-seniors-silver-spring-leisure-world", label: "Serving Leisure World and Silver Spring's 55+ communities" },
              { to: "/resources/aging-in-place-montgomery-county-cleaning", label: "A practical guide to aging in place in Montgomery County" },
              { to: "/resources/house-cleaning-for-seniors", label: "House cleaning for seniors: what to look for and how to choose" },
              { to: "/resources/free-house-cleaning-for-seniors", label: "Free & low-cost cleaning help: Medicare, Medicaid, VA & more" },
              { to: "/resources/caregiver-guide-house-cleaning-aging-parent", label: "A family caregiver's guide to arranging cleaning for a parent" },
              { to: "/resources/house-cleaning-after-hospital-surgery-seniors", label: "Cleaning after a hospital stay or surgery: a safe home to return to" },
              { to: "/resources/senior-downsizing-decluttering-cleaning", label: "Downsizing & decluttering: the cleaning side of a big move" },
            ].map((g) => (
              <Link key={g.to} to={g.to} className="group flex items-start gap-3 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow border border-border">
                <ArrowRight className="h-5 w-5 text-accent flex-shrink-0 mt-1 transition-transform group-hover:translate-x-1" />
                <span className="text-lg font-medium text-foreground">{g.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA + short form ── */}
      <section id="quote" className="py-14 md:py-20 bg-primary scroll-mt-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="text-center lg:text-left">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Get a Free, No-Obligation Quote</h2>
              <p className="text-xl text-white/85 leading-relaxed mb-8">
                Call us or send a few details — we'll get back to you quickly with a clear, flat-rate price. Trusted by
                families across Montgomery County.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center justify-center gap-3 bg-white text-primary font-bold text-2xl md:text-3xl px-8 py-6 rounded-2xl shadow-xl hover:bg-white/95 transition-colors">
                <Phone className="h-8 w-8" /> {PHONE}
              </a>
              <p className="text-lg text-white/80 mt-4">Mon–Sat, 8am–6pm · We also answer texts</p>
            </div>
            <SeniorQuoteForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeniorHomeCleaning;
