import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, DollarSign, Percent, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { useSEO } from "@/hooks/useSEO";
import { Helmet } from "react-helmet-async";
import { ArticleSchema, FAQSchema } from "@/components/SchemaMarkup";
import BlogHero from "@/components/blog/BlogHero";
import FadeInSection from "@/components/blog/FadeInSection";
import FAQAccordion from "@/components/blog/FAQAccordion";
import BlogInlineCTA from "@/components/blog/BlogInlineCTA";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";

const HERO_IMAGE = "/images/blog/airbnb-cleaning-fee.webp";
const URL = "https://capitalcleancare.com/resources/airbnb-cleaning-fee";

const toc: { href: string; label: string }[] = [
  { href: "#how-to-add", label: "How to add a cleaning fee to your listing" },
  { href: "#how-much", label: "How much should you charge?" },
  { href: "#fee-vs-rate", label: "Cleaning fee vs nightly rate" },
  { href: "#mistakes", label: "Mistakes that cost you bookings" },
  { href: "#pro-turnover", label: "What the fee should actually cover" },
];

const steps: { step: string; text: string }[] = [
  { step: "1. Open your listing", text: "From your hosting dashboard, go to Listings and select the property you want to set the fee on." },
  { step: "2. Go to Pricing", text: "Open the Pricing tab (on some accounts it is 'Pricing and availability'). This is where every guest-facing charge lives." },
  { step: "3. Find Fees", text: "Scroll to the Fees section and select Cleaning fee. If you have never set one, it will show as $0 or blank." },
  { step: "4. Enter your amount", text: "Type the flat amount you want to charge per stay and save. The cleaning fee is a one-time charge added to the reservation total, not a per-night charge." },
  { step: "5. Confirm the guest total", text: "Preview your listing as a guest and check the price breakdown at checkout. The cleaning fee shows as its own line and folds into the total the guest actually pays." },
];

const sizing: { size: string; text: string }[] = [
  { size: "Studio / 1-bedroom", text: "A single-bedroom turnover in the DMV runs roughly $150 for a professional clean, so a $75-$150 cleaning fee keeps you at or near cost without scaring off short bookings." },
  { size: "2-3 bedroom", text: "More bathrooms and more space mean a longer turnover. A $150-$250 fee typically matches what a professional two-person team charges to reset the unit between guests." },
  { size: "4+ bedroom / luxury", text: "Larger homes justify a $250-$400+ fee, especially with extras like laundry, a hot tub, or extensive staging. Guests booking a big home expect a higher fee and read it as a sign the place is genuinely cared for." },
];

const mistakes: { title: string; text: string }[] = [
  { title: "Charging far above your real cost", text: "A cleaning fee that dwarfs the nightly rate is the number one reason guests abandon a booking. Airbnb shows the total price prominently and guests compare totals, so an inflated fee quietly pushes you down in their results." },
  { title: "Setting it to zero to look cheap", text: "A $0 cleaning fee does not mean free cleaning, it means you are absorbing the cost into thin air or skipping a proper turnover. Both hurt: one eats your margin, the other eats your reviews." },
  { title: "Never updating it", text: "Your turnover cost changes when your cleaner's rates change or you add a bedroom's worth of work. Revisit the fee a couple of times a year so it still covers an actual professional clean." },
  { title: "Ignoring short stays", text: "On a one-night booking, a $150 fee can more than double the guest's total. If you allow one and two-night stays, consider a lower fee plus a slightly higher nightly rate so the total stays competitive." },
];

const faqs = [
  { q: "How do I add a cleaning fee on Airbnb?", a: "In your hosting dashboard, open the listing, go to the Pricing tab, scroll to the Fees section, and select Cleaning fee. Enter a flat amount and save. It is charged once per reservation, no matter how many nights the guest books, and it appears as its own line in the guest's price breakdown at checkout." },
  { q: "How much should an Airbnb cleaning fee be?", a: "Set it to match what a professional turnover of your specific home actually costs. In the DMV that is roughly $75-$150 for a one-bedroom, $150-$250 for a two-to-three bedroom, and $250-$400+ for larger or luxury homes. The goal is to cover a real clean without letting the fee tower over your nightly rate, which suppresses bookings." },
  { q: "Is the Airbnb cleaning fee charged per night or per stay?", a: "Per stay. The cleaning fee is a single flat charge added once to the reservation total, regardless of whether the guest stays one night or ten. That is exactly why it can feel steep on very short stays and barely noticeable on long ones, and why fee-versus-nightly-rate strategy matters." },
  { q: "Should I charge a cleaning fee or raise my nightly rate?", a: "Both approaches recover your cost; the right mix depends on your typical stay length. A cleaning fee is fairest on longer stays because it spreads across more nights. If most of your bookings are one or two nights, a lower cleaning fee combined with a slightly higher nightly rate keeps the guest's total competitive in search while still covering your turnover." },
];

const AirbnbCleaningFee = () => {
  const { seoHelmet } = useSEO({
    title: "How to Add a Cleaning Fee to Your Airbnb Listing",
    description:
      "How to add a cleaning fee on Airbnb step by step, plus how much to charge by home size in the DMV and how to price it without losing bookings.",
    canonical: URL,
  });

  return (
    <Layout>
      {seoHelmet}
      <Helmet>
        <meta name="keywords" content="airbnb cleaning fee, how to add cleaning fee airbnb, how much to charge airbnb cleaning fee, airbnb cleaning fee amount, short term rental cleaning fee" />
      </Helmet>
      <ArticleSchema
        title="How to Add a Cleaning Fee to Your Airbnb Listing"
        description="A step-by-step guide to adding a cleaning fee on Airbnb, how much to charge by home size in the DMV, and how to price the fee without hurting your bookings."
        url={URL}
        datePublished="2026-08-01"
        image={HERO_IMAGE}
      />
      <FAQSchema faqs={faqs} />

      <BlogHero src={HERO_IMAGE} alt="How to add a cleaning fee to your Airbnb listing: a clean, guest-ready short-term rental living room">
        <span className="bg-accent/20 text-accent font-semibold px-4 py-1.5 rounded-full text-sm inline-block mb-6 uppercase tracking-wider border border-accent/30">Cleaning Guides</span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight drop-shadow-md">How to Add a Cleaning Fee to Your Airbnb Listing</h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-4 leading-relaxed font-medium">Where to set it, how much to charge, and how to price it without losing bookings</p>
        <p className="text-gray-300 mb-8 text-sm uppercase tracking-widest">By Rodrigo Reis, Owner · MD · DC · VA · August 2026</p>
        <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-lg" asChild>
          <a href="/#quote">Get My Free Quote</a>
        </Button>
      </BlogHero>

      <article className="py-14 md:py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <FadeInSection>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The cleaning fee lives in your listing's <strong>Pricing tab, under Fees</strong>. It is a one-time charge
              added to each reservation, no matter how many nights a guest books, and it shows as its own line in their
              checkout total. Setting it takes two minutes. Setting it to the <em>right</em> number is what actually protects
              both your margin and your bookings.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This guide walks through exactly where to add the fee, how much to charge based on your home size here in the
              DMV, and the pricing mistakes that quietly cost hosts reservations. The short version: your fee should cover a
              genuine professional turnover, and not a dollar more than it needs to.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="border-l-4 border-accent bg-accent/5 p-4 mb-8">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hosting in Maryland, DC, or Virginia? <a href="/#quote" className="text-accent font-semibold underline hover:no-underline">Get a flat per-turnover quote</a>{" "}
                so you know the exact number to build your cleaning fee around.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection>
            <nav aria-label="Table of contents" className="border border-border rounded-2xl p-5 bg-secondary/30 mb-10">
              <p className="font-heading font-bold text-foreground mb-2 text-sm uppercase tracking-wider">In this guide</p>
              <ul className="space-y-1.5">
                {toc.map((t) => (
                  <li key={t.href}>
                    <a href={t.href} className="text-sm text-accent underline hover:no-underline">{t.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </FadeInSection>

          <FadeInSection>
            <h2 id="how-to-add" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
              <ClipboardCheck className="h-6 w-6 text-accent shrink-0" /> How to Add a Cleaning Fee to Your Listing
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Airbnb occasionally moves labels around, but the path is consistent: your listing's pricing controls hold every
              guest-facing charge, and the cleaning fee is one of them. Here is the whole flow.
            </p>
            <div className="space-y-4 mb-8">
              {steps.map((s) => (
                <div key={s.step} className="border border-border rounded-2xl p-5 bg-secondary/30">
                  <p className="font-heading font-bold text-foreground mb-1">{s.step}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you manage several listings, set the fee on each one individually, since a studio and a four-bedroom should
              never carry the same cleaning fee.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="how-much" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
              <DollarSign className="h-6 w-6 text-accent shrink-0" /> How Much Should You Charge?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              There is one rule that keeps you out of trouble: <strong>set the fee to what a professional turnover of your
              home actually costs</strong>. Charge less and you subsidize every guest out of your own pocket. Charge much
              more and you turn the fee into a profit center, which guests notice and punish. Here is the realistic range by
              home size in the DMV:
            </p>
            <div className="space-y-4 mb-8">
              {sizing.map((s) => (
                <div key={s.size} className="border border-border rounded-2xl p-5 bg-white">
                  <p className="font-heading font-bold text-foreground mb-1.5">{s.size}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Note that the first clean of a brand-new listing costs more, closer to a deep clean, because you are setting
              the baseline every future turnover maintains. Price your ongoing fee around the recurring turnover, not that
              one-time reset.
            </p>
          </FadeInSection>

          <FadeInSection>
            <BlogInlineCTA headline="Know your number before you set the fee" subtext="A flat, predictable per-turnover price for your exact listing means your cleaning fee covers a real clean every time. Booking-synced scheduling, restocking, and photo verification for DMV hosts." ctaLabel="Get My Turnover Quote" ctaTo="/contact" />
          </FadeInSection>

          <FadeInSection>
            <h2 id="fee-vs-rate" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Percent className="h-6 w-6 text-accent shrink-0" /> Cleaning Fee vs Nightly Rate
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Because the cleaning fee is charged once per stay, it spreads thin over a long booking and lands hard on a
              short one. A $150 fee on a seven-night stay adds about $21 a night. The same fee on a single night doubles what
              the guest expected to pay, and that is where bookings quietly disappear.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If you mostly host longer stays, a straightforward cost-covering cleaning fee is the fairest, cleanest setup.
              If you allow one and two-night bookings, consider a lower cleaning fee paired with a slightly higher nightly
              rate, so the guest's <em>total</em> stays competitive in search while your turnover still gets paid for. Airbnb
              ranks and displays on total price, so the total is the number that wins or loses the booking.
            </p>
          </FadeInSection>

          <FadeInSection>
            <h2 id="mistakes" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">Mistakes That Cost You Bookings</h2>
            <div className="space-y-4 mb-8">
              {mistakes.map((m) => (
                <div key={m.title} className="border border-border rounded-2xl p-5 bg-white">
                  <p className="font-heading font-bold text-foreground mb-1.5">{m.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                </div>
              ))}
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 id="pro-turnover" className="scroll-mt-24 font-heading text-2xl md:text-3xl font-bold text-foreground mt-10 mb-4">What the Fee Should Actually Cover</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              A cleaning fee is not just a chore reimbursement, it is what funds the reset that earns your next five-star
              review. The fee should cover fresh linens and towels, a full bathroom and kitchen sanitize, restocking the
              consumables guests expect, and a final guest-eye inspection, everything on our{" "}
              <Link to="/resources/airbnb-cleaning-checklist" className="text-accent underline hover:no-underline">Airbnb cleaning checklist</Link>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              That is exactly what a dedicated{" "}
              <Link to="/services/airbnb-cleaning" className="text-accent underline hover:no-underline">Airbnb cleaning service</Link>{" "}
              delivers: a crew that works from your booking calendar, follows a fixed turnover checklist, restocks from your
              owner's closet, and sends photo verification of the finished unit before locking up. When your fee is built on
              a real, flat turnover price, it covers a genuine clean on every single stay, and your reviews follow. Capital
              Clean Care has handled 500+ homes since 2015 with bonded, insured, background-checked crews and a 24-hour
              re-clean guarantee for hosts across Bethesda, Rockville, Silver Spring, and the wider DMV.
            </p>
          </FadeInSection>

          <FadeInSection>
            <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center shadow-lg mt-14 mb-14">
              <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Set a Fee That Covers a Real Clean</h2>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Rated 5.0 stars across 45 Google reviews. Flat per-turnover pricing, booking-synced scheduling, and photo
                verification so you can build your Airbnb cleaning fee on a number you can trust.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="tel:+12407042551">Call (240) 704-2551</a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 px-8 py-6 rounded-full text-base font-semibold shadow-md" asChild>
                  <a href="/#quote">Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
                </Button>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-12 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-accent" /> Airbnb Cleaning Fee FAQ
            </h2>
            <FAQAccordion faqs={faqs} />
          </FadeInSection>
        </div>
      </article>

      <RelatedPosts currentSlug="airbnb-cleaning-fee" />
      <StickyCTA />
    </Layout>
  );
};

export default AirbnbCleaningFee;
