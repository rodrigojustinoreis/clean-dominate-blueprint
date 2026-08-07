import { Link } from "react-router-dom";
import { Phone, ArrowRight, Shield, UserCheck, Star, CheckCircle2, MessageSquare, CalendarClock, Heart, Home } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import SeniorQuoteForm from "@/components/SeniorQuoteForm";
import { pickReviews, GOOGLE_LISTING_URL } from "@/data/realReviews";
import { SENIOR_GUIDE_LINKS } from "@/data/senior-cleaning-content";

const URL = "https://capitalcleancare.com/senior-home-cleaning-washington-dc";
const PHONE = "(240) 704-2551";
const PHONE_HREF = "tel:+12407042551";
const HERO_IMAGE = "/images/team/team-supplies-basket.webp";

// DC-specific service descriptions (worded distinctly from the other regional hubs)
const INCLUDED = [
  { title: "High and low dusting, no climbing", text: "Ceiling fans, tall shelves, and low baseboards in your rowhouse or condo are handled for you — no ladders, no bending, no risk of a fall." },
  { title: "Slip-safe bathroom cleaning", text: "Tubs, tile, and floors left clean and dry with no slippery film — a real safety point in older DC bathrooms." },
  { title: "Beds changed and made", text: "We strip the bed and remake it with fresh linens — one of the chores that quietly gets harder to manage with age." },
  { title: "Kitchen and refrigerator care", text: "Counters, sink, stovetop, and the inside of the fridge, including clearing expired food whenever you ask us to." },
  { title: "Careful, permission-first tidying", text: "We clear clutter and keep walkways safe, always checking first and never moving personal belongings on our own." },
  { title: "Fragrance-free, gentle products", text: "Plant-based, EPA Safer Choice cleaners available fragrance-free — easy on sensitive lungs, skin, and allergies." },
];

const PROMISE = [
  { Icon: Heart, title: "One familiar cleaner, every visit", text: "A consistent, trusted face on your schedule — reassuring for an older adult, especially someone living alone in the city." },
  { Icon: Shield, title: "Vetted, licensed, and insured", text: "Every cleaner is background-checked, and we carry full licensing and insurance, so your family is protected." },
  { Icon: MessageSquare, title: "We keep the family posted", text: "Arrival and departure texts go to whoever books the visit, so out-of-town relatives always know it happened." },
  { Icon: CalendarClock, title: "A schedule that flexes with you", text: "Weekly, biweekly, or monthly — and simple to change as your parent's needs change over time." },
];
const AREA = ["Washington DC", "Capitol Hill", "Georgetown", "Chevy Chase DC", "Palisades"];
const DACL = "https://dacl.dc.gov/";

const faqs = [
  { q: "Do you clean rowhouses and walk-up condos in DC?", a: "Yes — most of our DC senior clients live in classic rowhouses or apartment and condo buildings, and stairs are part of the job. We handle the carrying, climbing, and reaching so your parent never has to, whether it's a Capitol Hill rowhouse or a high-rise near the Metro." },
  { q: "Can you work with building concierges and access in DC condos?", a: "Absolutely. We regularly coordinate with front desks, concierges, and building management across DC for smooth, scheduled access. Just share the building's entry procedure when you book and we'll take care of the rest." },
  { q: "Are your cleaners background-checked?", a: "Yes — every team member clears a full background check before ever setting foot in a home, and we're fully licensed and insured. For a senior living alone in the city, that vetting is non-negotiable, and it's the foundation of how we operate." },
  { q: "Do you use products safe for seniors with allergies or respiratory issues?", a: "Yes. On request we clean with plant-based, EPA Safer Choice products in a fragrance-free, hypoallergenic formula — no harsh fumes to trouble sensitive lungs or skin. Just flag any allergies or sensitivities up front and we'll adjust." },
  { q: "My parent lives alone in DC and I'm out of state — can you help?", a: "That's one of the most common situations we help with. You can arrange and pay for the service remotely, we'll coordinate directly with your parent, and we send arrival and departure texts so you always know their home is cared for." },
  { q: "Does DC have programs that help seniors with cleaning?", a: "It can, for those who qualify. The DC Department of Aging and Community Living connects residents to in-home support and programs like Safe at Home. We're a private-pay service, but it's always worth checking your options — see our guide to free and low-cost cleaning help for seniors." },
];

const SeniorHomeCleaningDC = () => {
  const { seoHelmet } = useSEO({
    title: "Senior Home Cleaning in Washington, DC",
    description:
      "Trusted, gentle house cleaning for seniors in Washington, DC — Capitol Hill, Georgetown & beyond. Licensed, insured, background-checked. Free quote today.",
    canonical: URL,
    geo: { region: "US-DC", placename: "Washington" },
    preloadImage: HERO_IMAGE,
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema areaServed={AREA} />
      <ServiceSchema
        serviceName="Senior Home Cleaning"
        description="Gentle, reliable house cleaning for older adults across Washington, DC — Capitol Hill, Georgetown, and the District's 55+ communities. Background-checked, licensed, and insured, with fall-prevention cleaning and fragrance-free products."
        url={URL}
        serviceType="Senior Home Cleaning"
        areaServed={AREA}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Senior Home Cleaning in Washington, DC", href: "/senior-home-cleaning-washington-dc" }]} />

      {/* ── Hero ── */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-secondary/50 to-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Senior Home Cleaning in Washington, DC" }]} className="mb-6" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-base uppercase tracking-wide px-4 py-2 rounded-full mb-5">
                <Home className="h-4 w-4" /> Serving Washington, DC
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5 leading-[1.12] text-foreground">
                Senior Home Cleaning Services in Washington, DC
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed mb-7 max-w-xl">
                Gentle, reliable house cleaning for older adults — trusted by DC families from Capitol Hill and
                Georgetown to the District's quiet residential streets.
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
                  alt="A friendly Capital Clean Care team keeping an older adult's home fresh, safe, and comfortable in Washington, DC"
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
              Many DC seniors have lived in the same rowhouse or neighborhood for decades, and staying there is a big part
              of independence. But the District's older homes come with their own challenges — steep rowhouse stairs,
              narrow bathrooms, and the everyday dust of city living. Our team quietly handles the bending, reaching, and
              scrubbing so your parent can enjoy a fresh, comfortable home without the strain or the worry of a fall.
            </p>
            <p>
              If you're arranging cleaning for a parent in the city — maybe from out of state —{" "}
              <strong className="text-foreground">we understand what you're really looking for: peace of mind that Mom or
              Dad's home is safe and clean, even when you can't be there.</strong> We treat your parent's home, and your
              parent, with the same patience and respect we'd want for our own family.
            </p>
            <p>
              That means gentle, unhurried visits, a friendly and familiar cleaner, and clear communication every step of
              the way — including coordinating with your building's front desk or concierge. It's more than cleaning; it's
              care.
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
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">The commitments that make DC families comfortable trusting us with a parent&#x27;s home.</p>
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

      {/* ── Serving Senior Communities (DC) ── */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">Serving Senior Communities Across Washington, DC</h2>
          <div className="space-y-5 text-lg md:text-xl text-gray-700 leading-relaxed">
            <p>
              We serve older adults throughout the District — from the rowhouses of{" "}
              <strong className="text-foreground">Capitol Hill</strong> and{" "}
              <strong className="text-foreground">Georgetown</strong> to the quieter residential streets of{" "}
              <strong className="text-foreground">Chevy Chase DC</strong>, the{" "}
              <strong className="text-foreground">Palisades</strong>, and upper Northwest, plus condo and
              independent-living residents near the Metro.
            </p>
            <p>
              DC also has one of the strongest senior support networks in the country. Neighborhood groups like{" "}
              <strong className="text-foreground">Capitol Hill Village</strong> help older residents stay in their homes,
              and the{" "}
              <a href={DACL} target="_blank" rel="noopener noreferrer" className="text-accent font-semibold underline hover:no-underline">DC Department of Aging and Community Living</a>{" "}
              connects residents to in-home support and programs like Safe at Home. Whatever your parent's home looks like,
              we bring the same gentle, dependable care.
            </p>
            <p className="text-lg">
              Explore cleaning in your neighborhood:{" "}
              <Link to="/locations/washington-dc" className="text-accent font-semibold underline hover:no-underline">Washington, DC</Link>,{" "}
              <Link to="/locations/capitol-hill-dc" className="text-accent font-semibold underline hover:no-underline">Capitol Hill</Link>, and{" "}
              <Link to="/locations/georgetown-dc" className="text-accent font-semibold underline hover:no-underline">Georgetown</Link>.
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
            {pickReviews("senior-home-cleaning-dc", 3).map((r) => (
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
            Caring for a parent in the District, or planning ahead for yourself? These guides answer the questions DC families ask us most.
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
                Tell us a little about your parent's home in DC and we'll follow up with a friendly, no-pressure quote.
                Prefer to talk? Call us any time.
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

export default SeniorHomeCleaningDC;
