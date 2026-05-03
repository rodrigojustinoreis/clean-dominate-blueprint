import { Link } from "react-router-dom";
import { Gift, Heart, Cake, Home as HomeIcon, Sparkles, ShieldCheck, Mail, Phone, ArrowRight, CheckCircle, CreditCard } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import FAQ from "@/components/FAQ";
import ScrollReveal from "@/components/ScrollReveal";
import TrustBadges from "@/components/TrustBadges";
import { FAQSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";

// NOTE: The "Order a Gift Card" CTA currently routes to /contact for manual handling.
// A real purchase/checkout flow (Stripe or Square integration) is intentionally NOT
// in scope for this iteration. When integrating later, replace the /contact CTAs with
// the actual checkout component and add a server-side webhook for code generation.

const giftCardOptions = [
  {
    amount: "$100",
    label: "Quick Refresh",
    description: "Covers a standard cleaning for an apartment or small home — perfect for a thank-you gift.",
    popular: false,
  },
  {
    amount: "$150",
    label: "Standard Clean",
    description: "Most popular — covers a full standard cleaning for a 2–3 bedroom DMV home.",
    popular: true,
  },
  {
    amount: "$200",
    label: "Premium Clean",
    description: "Generous gift covering a thorough cleaning for a larger home or a recurring-plan kickoff.",
    popular: false,
  },
  {
    amount: "$300",
    label: "Deep Clean Experience",
    description: "Funds a complete deep cleaning — the kind of whole-home reset that genuinely changes how a home feels.",
    popular: false,
  },
  {
    amount: "Custom",
    label: "Custom Amount",
    description: "Choose any amount from $50 to $1,000+. Perfect when you want to fund part of a larger service.",
    popular: false,
  },
];

const occasions = [
  {
    icon: Heart,
    title: "Mother's Day",
    description: "The gift every mom secretly wants — a professionally cleaned home and a real day off. Skip the flowers; give her her time back.",
  },
  {
    icon: Cake,
    title: "Birthday",
    description: "A practical luxury that lasts long after the celebration. Perfect for friends or family members who say they 'have everything.'",
  },
  {
    icon: HomeIcon,
    title: "Housewarming",
    description: "Welcome new neighbors or new homeowners with a move-in cleaning gift card. Starting fresh in a freshly cleaned home is a memorable gift.",
  },
  {
    icon: Gift,
    title: "Holiday Gift",
    description: "Gift a clean home for the holidays — Christmas, Hanukkah, or end-of-year appreciation gifts for parents, in-laws, or longtime friends.",
  },
  {
    icon: Sparkles,
    title: "Thank You",
    description: "A meaningful thank-you gift for someone who's helped you — caregivers, teachers, friends who supported you through a hard time.",
  },
];

const howItWorks = [
  {
    step: "1",
    title: "Purchase Your Gift Card",
    description: "Choose an amount and contact us — we'll process your gift card order within one business day. Pay by credit card, check, or Zelle.",
  },
  {
    step: "2",
    title: "Recipient Receives a Code",
    description: "We email a personalized gift card code directly to your recipient (or to you to deliver in person). The card includes your message, the amount, and how to redeem.",
  },
  {
    step: "3",
    title: "They Book Their Cleaning",
    description: "The recipient calls us at (240) 704-2551 or fills out a quote form, applies their gift card code, and schedules service at their convenience.",
  },
];

const giftCardFaqs = [
  {
    q: "How long is a Capital Clean Care gift card valid?",
    a: "Gift cards are valid for 12 months from the date of purchase. After 12 months, contact us and we'll typically extend the validity in good faith — we don't believe in expiring people's money.",
  },
  {
    q: "Can the recipient use a gift card for any service?",
    a: "Yes. The gift card can be applied to any of our services — standard house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, recurring cleaning plans, or eco-friendly cleaning. The recipient chooses what works best for them.",
  },
  {
    q: "What if the cleaning costs more than the gift card amount?",
    a: "The recipient simply pays the difference at the time of service. The gift card is applied as a credit against the total bill. Many recipients use a gift card to subsidize a recurring plan or a larger service.",
  },
  {
    q: "Can the recipient use the gift card across multiple visits?",
    a: "Yes — and many do. If a $200 gift card covers more than a single cleaning, the remaining balance carries over and can be applied to future visits. We track the balance and apply credit until it's fully used.",
  },
  {
    q: "Is the gift card refundable or transferable?",
    a: "Gift cards are non-refundable but fully transferable. If your recipient can't use it, they can pass it on to someone else who can. We don't restrict who ultimately uses the gift card.",
  },
];

const GiftCards = () => {
  const { seoHelmet } = useSEO({
    title: "Gift Cards | Capital Clean Care | Silver Spring, MD",
    description:
      "Give the perfect gift — a professionally cleaned home. Capital Clean Care gift cards from $100 to $300+. Perfect for Mother's Day, birthdays, and housewarmings.",
    canonical: "https://capitalcleancare.com/gift-cards",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Gift Cards", href: "/gift-cards" }]} />
      <FAQSchema faqs={giftCardFaqs} />

      {/* HERO */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#F1F8F1] to-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Gift Cards" }]} className="mb-8" />
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
              <Gift className="h-4 w-4" /> The Gift That Actually Gets Used
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Give the Gift of a <span className="text-gradient">Clean Home</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Skip the flowers. Skip the candles. Give someone the gift they actually want — a professionally cleaned home and a real day off.
            </p>
            <p className="text-foreground leading-relaxed mb-8">
              Capital Clean Care gift cards are perfect for Mother's Day, birthdays, housewarmings, holidays, or any time you want to give something genuinely useful. Backed by our 9-year DMV reputation, EPA Safer Choice plant-based products, and 100% satisfaction guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Order a Gift Card <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+12407042551">(240) 704-2551</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* GIFT CARD AMOUNTS */}
      <ScrollReveal>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Choose Your Amount
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Gift Card Options
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Pick a fixed amount or choose your own — every gift card can be used toward any of our cleaning services.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {giftCardOptions.map((option) => (
                <Card
                  key={option.amount}
                  className={`border-border shadow-sm hover:shadow-md transition-shadow relative ${
                    option.popular ? "border-accent border-2" : ""
                  }`}
                >
                  {option.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                      <CreditCard className="h-6 w-6 text-accent" />
                    </div>
                    <p className="font-heading font-bold text-3xl text-accent mb-2">{option.amount}</p>
                    <p className="font-semibold text-sm mb-3">{option.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">
                  Order Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* OCCASIONS */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Perfect For
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Every Occasion That Matters
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                A clean home is a meaningful gift — practical, generous, and memorable long after the moment passes.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {occasions.map((occasion) => (
                <Card key={occasion.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <occasion.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{occasion.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{occasion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* HOW IT WORKS */}
      <ScrollReveal>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Simple Process
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Three steps from purchase to a clean home — designed to be effortless for both giver and recipient.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {howItWorks.map((item) => (
                <div key={item.step} className="relative">
                  <Card className="border-border shadow-sm hover:shadow-md transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-lg bg-accent text-accent-foreground font-bold text-lg flex items-center justify-center mb-4">
                        {item.step}
                      </div>
                      <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* WHY CCC GIFT CARDS */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-secondary/50">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                Why Capital Clean Care
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                A Gift Backed by 9+ Years of Trust
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  icon: ShieldCheck,
                  title: "Licensed, Bonded, Insured",
                  desc: "Your recipient gets the same documented credentials we provide every client — full insurance, bonding, and background-checked teams.",
                },
                {
                  icon: Sparkles,
                  title: "EPA Safer Choice Products",
                  desc: "Plant-based, non-toxic cleaning safe for kids, pets, and allergy sufferers. Their home gets a professional clean without harsh chemicals.",
                },
                {
                  icon: CheckCircle,
                  title: "100% Satisfaction Guarantee",
                  desc: "If anything is missed, we re-clean within 24 hours at no charge. Your gift carries our reputation behind it.",
                },
              ].map((item) => (
                <Card key={item.title} className="border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
                      <item.icon className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* FAQ */}
      <ScrollReveal>
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-4 py-1.5 rounded-full mb-4">
                FAQ
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
                Gift Card Questions
              </h2>
            </div>
            <FAQ faqs={giftCardFaqs} />
          </div>
        </section>
      </ScrollReveal>

      {/* TRUST BADGES */}
      <ScrollReveal>
        <TrustBadges />
      </ScrollReveal>

      {/* FINAL CTA */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Give the Gift of a Clean Home?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us to order a gift card today. We'll process your order within one business day and deliver a personalized gift card directly to your recipient.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Order a Gift Card <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551">
                <Phone className="h-4 w-4 mr-2" /> (240) 704-2551
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            <Mail className="h-4 w-4" /> Or email{" "}
            <a href="mailto:capitalcleancare@gmail.com" className="text-accent font-semibold underline">
              capitalcleancare@gmail.com
            </a>
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default GiftCards;
