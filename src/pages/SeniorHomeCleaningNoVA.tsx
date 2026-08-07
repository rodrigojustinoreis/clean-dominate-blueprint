import { Link } from "react-router-dom";
import { Phone, ArrowRight, Shield, UserCheck, Star, CheckCircle2, Home, Heart, MessageSquare, CalendarClock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import SeniorQuoteForm from "@/components/SeniorQuoteForm";
import { pickReviews, GOOGLE_LISTING_URL } from "@/data/realReviews";
import { SENIOR_GUIDE_LINKS } from "@/data/senior-cleaning-content";

const URL = "https://capitalcleancare.com/senior-home-cleaning-northern-virginia";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";
const HERO_IMAGE = "/images/team/cleaning-window-blinds.webp";

// Northern-Virginia-specific service descriptions (worded distinctly from the other regional hubs)
const INCLUDED = [
  { title: "Reaching high and low, safely", text: "Ceiling fans, tall shelves, and low baseboards are taken care of for you — no stretching or climbing, whether it's a multi-level Fairfax home or an Arlington high-rise." },
  { title: "Bathrooms left clean and dry", text: "Tubs, tile, and floors finished residue-free and slip-safe — one of the most important rooms to get right." },
  { title: "Fresh, made-up beds", text: "Beds changed and neatly made with clean linens, taking a tiring, awkward task off your parent's plate." },
  { title: "Kitchen and fridge cleaning", text: "Counters, sink, stovetop, and the inside of the refrigerator, with expired-food removal whenever you request it." },
  { title: "Respectful light organizing", text: "We tidy surfaces and keep paths clear, always with permission and never rearranging belongings on our own." },
  { title: "Products chosen for sensitivities", text: "Non-toxic, plant-based, EPA Safer Choice cleaners, fragrance-free when preferred — gentle for older adults." },
];

const PROMISE = [
  { Icon: Heart, title: "The same cleaner you know", text: "We keep a familiar, trusted cleaner on your schedule, so every visit feels easy, comfortable, and safe." },
  { Icon: Shield, title: "Background-checked and insured", text: "Thorough background checks on every team member, plus full licensing and insurance for real peace of mind." },
  { Icon: MessageSquare, title: "Family kept in the loop", text: "Texts when we arrive and finish go to whoever arranges the service — reassuring for relatives nearby or across the country." },
  { Icon: CalendarClock, title: "Flexible, easy scheduling", text: "Weekly, biweekly, or monthly, and adjusted whenever your parent's needs shift." },
];
const AREA = ["Arlington", "Alexandria", "Fairfax", "McLean", "Northern Virginia"];
const CCC_PLUS = "https://www.dmas.virginia.gov/for-members/benefits-and-services/waivers/ccc-plus-waiver/";

const faqs = [
  { q: "Do you clean high-rise condos and apartments in Arlington?", a: "Yes — a large share of our Northern Virginia senior clients live in condos and apartment towers in Arlington and along the Metro corridor. We coordinate with front desks, concierges, and loading docks for smooth access, so your parent's home is handled without any hassle for them." },
  { q: "Do you serve Old Town Alexandria and older homes with stairs?", a: "Absolutely. From Old Town Alexandria's historic townhomes to single-family homes across Fairfax and McLean, stairs and multi-level cleaning are part of the job. We do the climbing, carrying, and reaching so your parent never has to." },
  { q: "Are your cleaners background-checked?", a: "Yes. Every cleaner passes a thorough background check before ever entering a home, and our team is fully licensed and insured. Your parent's safety and your peace of mind come first, always." },
  { q: "Do you use products safe for seniors with allergies or respiratory issues?", a: "Yes. We offer fragrance-free, hypoallergenic, EPA Safer Choice plant-based products on request — gentle on sensitive lungs and skin, with no harsh chemical fumes. Just tell us about any sensitivities and we'll clean accordingly." },
  { q: "I live out of state — can I arrange cleaning for a parent in Northern Virginia?", a: "Yes, and many of our clients do exactly that. You can set up and pay for the service remotely, we coordinate directly with your parent, and we send arrival and departure texts so you always know their home is cared for." },
  { q: "Does Virginia have programs that help seniors with cleaning?", a: "It can, for those who qualify. Virginia's CCC Plus Medicaid waiver covers personal care and some light housekeeping for eligible members. We're a private-pay service, but it's worth checking your options — see our guide to free and low-cost cleaning help for seniors." },
];

const SeniorHomeCleaningNoVA = () => {
  const { seoHelmet } = useSEO({
    title: "Senior Home Cleaning in Northern Virginia",
    description:
      "Trusted, gentle house cleaning for seniors in Northern Virginia — Arlington, Alexandria & Fairfax. Licensed, insured, background-checked. Free quote today.",
    canonical: URL,
    geo: { region: "US-VA", placename: "Arlington" },
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema areaServed={AREA} />
      <ServiceSchema
        serviceName="Senior Home Cleaning"
        description="Gentle, reliable house cleaning for older adults across Northern Virginia — Arlington, Alexandria, Fairfax, and McLean. Background-checked, licensed, and insured, with fall-prevention cleaning and fragrance-free products."
        url={URL}
        serviceType="Senior Home Cleaning"
        areaServed={AREA}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Senior Home Cleaning in Northern Virginia", href: "/senior-home-cleaning-northern-virginia" }]} />

      {/* ── Hero ── */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Senior Home Cleaning in Northern Virginia" }]} className="mb-6" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-base uppercase tracking-wide px-4 py-2 rounded-full mb-5">
                <Home className="h-4 w-4" /> Serving Northern Virginia
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.12] text-foreground">
                Senior Home Cleaning Services in Northern Virginia
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-7 max-w-xl">
                Gentle, reliable house cleaning for older adults — trusted by families across Arlington, Alexandria,
                Fairfax, and McLean.
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
                  alt="A friendly Capital Clean Care team keeping an older adult's home fresh, safe, and comfortable in Northern Virginia"
                  className="w-full h-full object-cover"
                  width={800} height={600} loading="eager" fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Caring ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Caring for a Home, Caring for a Person</h2>
          <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              Northern Virginia is home to a huge community of older adults — from longtime homeowners in Fairfax and
              McLean to condo residents along Arlington's Metro corridor and historic townhome owners in Old Town
              Alexandria. Wherever they live, the goal is the same: stay in the home they love, comfortably and safely.
              Our team quietly handles the bending, reaching, and scrubbing so your parent can enjoy a fresh home without
              the strain or the worry of a fall.
            </p>
            <p>
              If you're arranging cleaning for a parent — perhaps from another state —{" "}
              <strong className="text-foreground">we understand what you're really looking for: peace of mind that Mom or
              Dad's home is safe and clean, even when you can't be there.</strong> We look after your parent's home — and
              your parent — the way we'd want our own family looked after.
            </p>
            <p>
              That means gentle, unhurried visits, a friendly and familiar cleaner, and clear communication every step of
              the way — including coordinating with your building's concierge or front desk. That's not just housekeeping;
              it's genuine care.
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

      {/* ── Senior Care Promise ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3 text-foreground">Our Senior Care Promise</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">The commitments that make Northern Virginia families comfortable trusting us with a parent&#x27;s home.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            {PROMISE.map(({ Icon, title, text }) => (
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

      {/* ── Serving Senior Communities (NoVA) ── */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Serving Senior Communities Across Northern Virginia</h2>
          <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              We serve older adults throughout Northern Virginia — Arlington's condo towers, Old Town Alexandria's
              townhomes, and single-family homes across Fairfax and McLean — including residents of retirement communities
              like <strong className="text-foreground">Goodwin House</strong>, <strong className="text-foreground">Vinson Hall</strong> in
              McLean, and <strong className="text-foreground">Greenspring</strong> in Springfield.
            </p>
            <p>
              Northern Virginia also has a strong aging-in-place network. Neighborhood "villages" like{" "}
              <strong className="text-foreground">Arlington Neighborhood Village</strong>,{" "}
              <strong className="text-foreground">At Home in Alexandria</strong>, and{" "}
              <strong className="text-foreground">Mount Vernon At Home</strong> help older residents stay independent, and
              Virginia's{" "}
              <a href={CCC_PLUS} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline hover:no-underline">CCC Plus Medicaid waiver</a>{" "}
              can help those who qualify. No matter the type of home, the care we bring is the same: gentle, reliable, and respectful.
            </p>
            <p className="text-lg">
              Explore cleaning in your city:{" "}
              <Link to="/locations/arlington-va" className="text-accent font-semibold underline hover:no-underline">Arlington</Link>,{" "}
              <Link to="/locations/alexandria-va" className="text-accent font-semibold underline hover:no-underline">Alexandria</Link>, and{" "}
              <Link to="/locations/fairfax-va" className="text-accent font-semibold underline hover:no-underline">Fairfax</Link>.
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
            {pickReviews("senior-home-cleaning-nova", 3).map((r) => (
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

      {/* ── FAQ ── */}
      <section className="py-14 md:py-20 bg-secondary/40">
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

      {/* ── Senior Cleaning Guides ── */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-foreground">Senior Cleaning Guides</h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Helping a parent in Northern Virginia, or thinking ahead for yourself? These are the questions local families ask us most.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {SENIOR_GUIDE_LINKS.map((g) => (
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
                Tell us a little about your parent's home in Northern Virginia and we'll follow up with a friendly,
                no-pressure quote. Prefer to talk? Call us any time.
              </p>
              <a href={PHONE_HREF} className="inline-flex items-center gap-3 text-white text-2xl md:text-3xl font-bold hover:text-accent transition-colors">
                <Phone className="h-8 w-8" /> {PHONE}
              </a>
            </div>
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
              <SeniorQuoteForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SeniorHomeCleaningNoVA;
