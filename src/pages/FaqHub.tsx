import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";
import { FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";

// Central FAQ hub at /resources/faq. All 45 Q&As are consolidated + deduped from the real FAQs
// already on the site (services.ts, the /faq page, the deep-cleaning cluster). Every answer's
// FIRST sentence answers the question directly (AI / featured-snippet friendly). Optional `href`
// links to a RELEVANT INDEXABLE page. Content renders in full static HTML; the search box is a
// client-only filter (SSR renders with an empty query, so curl sees every question and answer).

interface Faq {
  q: string;
  a: string;
  href?: string;
  linkText?: string;
}
interface Theme {
  id: string;
  title: string;
  faqs: Faq[];
}

const THEMES: Theme[] = [
  {
    id: "booking",
    title: "Booking & Getting Started",
    faqs: [
      { q: "How do I book a cleaning?", a: "Book in one of three ways: fill out our free online quote form, call us at (240) 704-2551, or send an email. We typically respond within a few hours with availability and a flat-price estimate — there's no obligation to proceed.", href: "/contact", linkText: "Request a free quote" },
      { q: "Is a quote free, and am I committed to anything?", a: "Yes, quotes are completely free and carry no commitment. Tell us your home size, number of bathrooms, and the type of clean you want, and we'll send a clear flat price. You decide from there — there are no contracts required to book." },
      { q: "Can I schedule a walkthrough before booking?", a: "Yes, we're happy to arrange a quick walkthrough for larger homes or detailed jobs. It lets us tailor the plan and confirm the flat price, though for most standard bookings a phone or online quote is all it takes." },
      { q: "How far in advance should I book?", a: "We recommend booking at least 3–5 business days ahead for new clients. Recurring clients get priority scheduling with a consistent day and time, and we can often accommodate same-week requests depending on availability." },
      { q: "What happens on the first cleaning?", a: "Your first visit is usually a deep clean that resets the whole home to a baseline. It removes built-up grime that routine cleaning skips, which is why the first visit takes longer and costs more than the maintenance cleanings that follow.", href: "/services/deep-cleaning", linkText: "About deep cleaning" },
      { q: "What's your cancellation or rescheduling policy?", a: "We ask for 24–48 hours' notice to cancel or reschedule. There are no penalties for occasional changes — we know life happens and aim to be flexible." },
      { q: "Do you require a contract or long-term commitment?", a: "No. You can book a one-time cleaning or a recurring plan with no long-term contract. Recurring clients stay because of the results and the preferred pricing, not because they're locked in." },
    ],
  },
  {
    id: "pricing",
    title: "Pricing & Payment",
    faqs: [
      { q: "How much does house cleaning cost?", a: "Cost depends on your home's size, condition, and the type of clean. As a guide, a standard cleaning for a 2-bedroom home typically starts around $150–$200, and a deep clean runs higher. Request a free quote for an exact flat price.", href: "/resources/house-cleaning-prices-maryland-2026", linkText: "2026 pricing breakdown" },
      { q: "Do you charge by the hour or a flat rate?", a: "We charge a flat rate per job, not by the hour. You know the full price upfront before we start, so there are no surprises if a clean takes longer than expected." },
      { q: "What makes a cleaning cost more or less?", a: "Home size, number of bathrooms, and condition are the biggest factors. Bathrooms drive the price more than bedrooms, and a home that hasn't had a professional clean in a while sits at the top of its range because there's more built-up grime to remove." },
      { q: "Are there any hidden fees?", a: "No — our flat-rate quote is the price you pay, with all products and equipment included. We're transparent about anything that would change a quote, like add-on tasks you request.", href: "/resources/hidden-fees-house-cleaning", linkText: "Hidden fees to watch for" },
      { q: "How much does a deep cleaning cost?", a: "A one-time deep clean in the DMV typically runs from about $230 for a studio up to $540+ for a large home, with a typical 3-bedroom around $375–$445. The exact price depends on bathrooms and condition.", href: "/resources/how-much-does-deep-cleaning-cost", linkText: "Deep cleaning cost guide" },
      { q: "Do you offer discounts for recurring service?", a: "Yes. Weekly and bi-weekly clients get discounted per-visit rates compared to one-time bookings — the more frequently we clean, the lower the per-visit cost, because the home stays easier to maintain.", href: "/services/recurring-cleaning", linkText: "Recurring cleaning" },
      { q: "Should I tip my house cleaner, and how much?", a: "Tipping is appreciated but never required. When clients do tip, 15–20% or a flat $10–$20 per visit is typical, with many giving a larger holiday bonus to a regular team.", href: "/resources/how-much-tip-house-cleaner", linkText: "Tipping guide" },
      { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, ACH bank transfers, and digital payments. Payment is processed after the cleaning is completed to your satisfaction — no cash needed." },
    ],
  },
  {
    id: "services",
    title: "Our Services & What's Included",
    faqs: [
      { q: "What cleaning services do you offer?", a: "We offer standard recurring cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, Airbnb turnover, office cleaning, and eco-friendly green cleaning. Each is tailored to your home's needs.", href: "/services", linkText: "See all services" },
      { q: "What's included in a standard cleaning?", a: "A standard cleaning covers all the routine upkeep: dusting, vacuuming and mopping, kitchen and bathroom surfaces cleaned and sanitized, beds made, trash removed, and mirrors and glass. It keeps an already-clean home fresh on a regular cadence." },
      { q: "What's the difference between deep cleaning and standard cleaning?", a: "A deep clean includes everything in a standard clean plus the intensive detail work routine cleans skip — inside appliances, grout, baseboards, vents, and behind furniture. Most homes start with a deep clean, then maintain it with standard cleanings.", href: "/resources/deep-cleaning-vs-regular-cleaning", linkText: "Deep vs standard" },
      { q: "What does a deep cleaning include?", a: "A deep clean is a full top-to-bottom reset: inside the oven, microwave and refrigerator, tile and grout scrubbed, baseboards and trim wiped, ceiling fans and vents dusted, window tracks cleared, and behind and under accessible furniture.", href: "/resources/what-is-included-in-a-deep-cleaning", linkText: "Full deep-clean checklist" },
      { q: "Do you clean inside the oven and refrigerator?", a: "Yes, during a deep clean the interiors of the oven, microwave, and refrigerator are included (a standard clean does the exteriors only). Inside kitchen cabinets and drawers are done on request." },
      { q: "Do you offer move-in and move-out cleaning?", a: "Yes. Our move-in/move-out cleaning is built around deposit-return standards and covers the empty home in detail, including inside cabinets and appliances. It's ideal on either side of a move.", href: "/services/move-out-cleaning", linkText: "Move-out cleaning" },
      { q: "Can I customize what gets cleaned?", a: "Absolutely. We build the checklist around your priorities — extra attention on the kitchen, certain rooms skipped, or add-on tasks like interior windows. Just flag your priorities when you book or during the pre-clean walkthrough." },
      { q: "Do you clean after a renovation or construction?", a: "Yes, we offer dedicated post-construction cleaning that removes fine drywall and construction dust from vents, surfaces, and cabinet interiors using commercial HEPA equipment — a step beyond a standard deep clean.", href: "/services/post-construction-cleaning", linkText: "Post-construction cleaning" },
    ],
  },
  {
    id: "supplies",
    title: "Products & Supplies",
    faqs: [
      { q: "What cleaning products do you use?", a: "We use plant-based, non-toxic cleaning products that are tough on grime but safe for your family. They're EPA Safer Choice certified and free from harsh chemicals, artificial fragrances, and allergens.", href: "/why-eco-friendly-cleaning", linkText: "Why eco-friendly cleaning" },
      { q: "Are your products safe for pets and children?", a: "Yes. Our EPA Safer Choice products leave no harsh chemical residue or airborne irritants, so they're safe around crawling babies and pets — there's no need to leave the house or air it out after a clean." },
      { q: "Do I need to provide any cleaning supplies or equipment?", a: "No — our teams arrive fully equipped with all products, vacuums, and professional-grade equipment. You don't need to supply anything. If you'd prefer we use a specific product you own, just leave it out and mention it." },
      { q: "Are eco-friendly products as effective as harsh chemicals?", a: "Yes, for the vast majority of household cleaning. The cleaning power comes from technique and dwell time, not toxicity — give a good plant-based product time to work and grease, soap scum, and grime come off just the same, without the fumes.", href: "/resources/eco-friendly-deep-cleaning", linkText: "The eco-friendly method" },
      { q: "Does eco-friendly cleaning cost more?", a: "No — eco-friendly cleaning is our standard at no premium. Every service uses plant-based, EPA Safer Choice products by default, so you get non-toxic cleaning without paying extra for it." },
      { q: "Can I request specific products for sensitivities?", a: "Of course. If you have allergies, a preferred product, or a delicate surface that needs a particular cleaner, let us know when you book and we'll accommodate it." },
      { q: "Do you use professional or HEPA equipment?", a: "Yes. Our teams use professional-grade equipment including HEPA-filtration vacuums, which capture fine dust and allergens rather than recirculating them — important for pet homes, allergy sufferers, and post-renovation cleans." },
    ],
  },
  {
    id: "trust-safety",
    title: "Trust & Safety",
    faqs: [
      { q: "Are your cleaners background-checked?", a: "Yes. Every team member is thoroughly background-checked before joining Capital Clean Care. Your safety and peace of mind come first." },
      { q: "Is Capital Clean Care licensed and insured?", a: "Yes — we are fully licensed, bonded, and insured. In the rare event of an issue, you're completely protected." },
      { q: "What happens if something is damaged during a cleaning?", a: "We carry full liability insurance, so in the unlikely event of damage we handle it promptly and professionally. Just report any concern within 24 hours and we'll make it right." },
      { q: "Do you offer a satisfaction guarantee?", a: "Yes. We stand behind every clean with a 100% satisfaction guarantee — if any area doesn't meet your expectations, tell us within 24 hours and we'll return to re-clean it at no charge." },
      { q: "Do I need to be home during the cleaning?", a: "No. Many clients provide a key, door code, or smart-lock access so we can clean while they're out. Every team member is background-checked and insured, so your home is in trusted hands." },
      { q: "How is my key or access kept secure?", a: "Access details are handled discreetly and only shared with your assigned team. Many clients use a lockbox, smart lock, or building front desk, and you can update or revoke access at any time." },
      { q: "Do you clean homes with pets?", a: "Yes, we love homes with pets. Our eco-friendly products are pet-safe, and our teams are experienced working calmly around dogs and cats — just let us know about your pets when you book." },
      { q: "How can I trust the quality before booking?", a: "Check our real reviews — we hold a 5.0 rating across 45 Google reviews, and every testimonial on our site is from a genuine client. We've served the DMV since 2015.", href: "/reviews", linkText: "Read our reviews" },
    ],
  },
  {
    id: "scheduling",
    title: "Scheduling & Service Areas",
    faqs: [
      { q: "How often should I schedule cleaning?", a: "Most households choose weekly or bi-weekly for a consistently clean home, while monthly suits smaller homes or those who tidy daily. The right frequency depends on pets, kids, and how the home is used.", href: "/resources/recurring-cleaning-weekly-biweekly-monthly", linkText: "Weekly vs bi-weekly vs monthly" },
      { q: "How often should I get a deep clean?", a: "As a baseline, deep clean at least twice a year, and ideally quarterly. Homes with pets, young children, or allergies benefit from every 3–4 months.", href: "/resources/how-often-should-you-deep-clean", linkText: "Deep-clean frequency guide" },
      { q: "Can I change my cleaning frequency?", a: "Yes, anytime. You can move between weekly, bi-weekly, and monthly as your needs change — just let us know and we'll adjust your plan and pricing accordingly." },
      { q: "Can I pause my recurring plan for vacation?", a: "Yes. Recurring plans are flexible — pause or skip a visit when you're traveling with a little notice, and pick right back up when you return with no penalty." },
      { q: "Do I get the same cleaning team each visit?", a: "We aim for consistency, sending the same team to recurring clients whenever possible so they learn your home and preferences. If a regular team member is out, a fully trained team covers to the same checklist." },
      { q: "What areas do you serve?", a: "We serve the DMV: Maryland (Montgomery, Frederick, Howard, and Prince George's Counties), Washington DC, and Northern Virginia (Arlington, Fairfax, McLean, Alexandria, and more). Contact us to confirm your neighborhood.", href: "/maryland", linkText: "Maryland service areas" },
      { q: "Do you offer evening or weekend availability?", a: "Yes. We offer early-morning, evening, and weekend slots for busy schedules, in addition to standard weekday hours (Mon–Sat, 8AM–6PM). Availability varies by area, so book ahead for the best choice of times." },
      { q: "Do you clean on holidays?", a: "We schedule around major holidays and can arrange holiday-week cleanings — popular before hosting. Let us know your dates early, as those slots fill quickly." },
    ],
  },
];

const ALL_FAQS = THEMES.flatMap((t) => t.faqs);
const norm = (s: string) => s.toLowerCase();

const FaqHub = () => {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const { seoHelmet } = useSEO({
    title: "Cleaning FAQ — Booking, Pricing, Services & More | Capital Clean Care",
    description:
      "Answers to 45 common questions about house cleaning in Maryland, DC & Virginia — booking, pricing, what's included, products, trust & safety, and scheduling. Search or browse by topic.",
    canonical: "https://capitalcleancare.com/resources/faq",
    ogImage: "/images/cluster/faq-og.jpg",
  });

  // Client-only filter. SSR renders with an empty query, so all Q&As are in the static HTML.
  const filtered = useMemo(
    () =>
      THEMES.map((t) => ({
        ...t,
        faqs: q ? t.faqs.filter((f) => norm(f.q).includes(q) || norm(f.a).includes(q)) : t.faqs,
      })).filter((t) => t.faqs.length > 0),
    [q]
  );
  const matchCount = filtered.reduce((n, t) => n + t.faqs.length, 0);

  return (
    <Layout>
      {seoHelmet}
      <FAQSchema faqs={ALL_FAQS.map((f) => ({ q: f.q, a: f.a }))} />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "FAQ", href: "/resources/faq" }]} />

      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "FAQ" }]} className="mb-6" />

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Cleaning Questions, Answered</h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl leading-relaxed">
            Everything DMV homeowners ask us about house cleaning — booking, pricing, what's included, the products we
            use, trust and safety, and scheduling. Search below, or jump to a topic. Still stuck?{" "}
            <Link to="/contact" className="text-accent hover:underline font-medium">Ask us directly</Link>.
          </p>

          {/* Light illustrative banner — fixed height reserves space (no CLS), kept modest so the
              search box and first questions stay above the fold. */}
          <div className="rounded-2xl overflow-hidden border border-border mb-8 h-36 md:h-48">
            <img
              src="/images/cluster/faq.webp"
              srcSet="/images/cluster/faq-640.webp 640w, /images/cluster/faq.webp 1280w"
              sizes="(max-width: 896px) 100vw, 896px"
              alt="A warm, tidy entryway of a clean home with a plant and folded blanket"
              className="w-full h-full object-cover"
              width={1280}
              height={720}
              loading="eager"
            />
          </div>

          {/* Search filter */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions… (e.g. price, pets, deep clean)"
              aria-label="Search frequently asked questions"
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-border bg-card text-foreground text-base focus:outline-none focus:ring-2 focus:ring-accent/40"
            />
          </div>

          {/* Topic anchor nav */}
          <nav aria-label="FAQ topics" className="flex flex-wrap gap-2 mb-10">
            {THEMES.map((t) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="inline-flex items-center rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm font-semibold text-foreground hover:border-accent/60 hover:text-accent transition-colors"
              >
                {t.title}
              </a>
            ))}
          </nav>

          {q && (
            <p className="text-sm text-muted-foreground mb-6">
              {matchCount} {matchCount === 1 ? "result" : "results"} for "{query}"
              {matchCount === 0 && (
                <> — try a different term, or <Link to="/contact" className="text-accent hover:underline">contact us</Link>.</>
              )}
            </p>
          )}

          {/* Themes */}
          <div className="space-y-12">
            {filtered.map((theme) => (
              <section key={theme.id} id={theme.id} className="scroll-mt-24">
                <h2 className="font-heading text-2xl md:text-3xl font-bold mb-5 pb-2 border-b border-border">{theme.title}</h2>
                <div className="space-y-6">
                  {theme.faqs.map((f) => (
                    <div key={f.q}>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1.5">{f.q}</h3>
                      <p className="text-muted-foreground leading-relaxed">{f.a}</p>
                      {f.href && f.linkText && (
                        <Link to={f.href} className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                          {f.linkText} <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Soft CTA */}
          <div className="mt-16 rounded-2xl bg-primary text-primary-foreground p-8 text-center shadow-lg">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Still have a question?</h2>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-2xl mx-auto">
              We're happy to help — get a free, no-obligation quote or reach our team directly. 5.0 stars across 45 Google
              reviews, serving Montgomery County and the DMV since 2015.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button size="lg" className="bg-white/10 hover:bg-white/20 text-white border border-white/40 px-8 py-6 rounded-full text-base font-semibold" asChild>
                <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> Call (240) 704-2551</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FaqHub;
