import { Link } from "react-router-dom";
import {
  ArrowRight, Calendar, DollarSign, ShieldCheck, Leaf, MapPin,
  Phone, Star, MessageCircleQuestion, Sparkles,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import FAQ from "@/components/FAQ";
import { FAQSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import ScrollReveal from "@/components/ScrollReveal";

const faqCategories = [
  {
    title: "Services & Scheduling",
    icon: Calendar,
    faqs: [
      { q: "What cleaning services do you offer?", a: "We offer standard recurring cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and eco-friendly green cleaning. Each service is tailored to your home's specific needs." },
      { q: "How do I schedule a cleaning?", a: "You can schedule by filling out our free quote form, calling us at (240) 704-2551, or emailing us. We typically respond within a few hours with availability and a personalized estimate." },
      { q: "Can I customize my cleaning plan?", a: "Absolutely. We work with you to create a cleaning checklist that matches your priorities. Whether you need extra attention in the kitchen or prefer certain rooms skipped, we adapt to your preferences." },
      { q: "Do you offer one-time or recurring cleaning?", a: "Both. We offer one-time deep cleans as well as weekly, bi-weekly, and monthly recurring plans. Recurring clients enjoy priority scheduling and consistent pricing." },
      { q: "What's your cancellation policy?", a: "We ask for 24–48 hours notice for cancellations or rescheduling. There are no penalties for occasional schedule changes." },
    ],
  },
  {
    title: "Pricing & Payment",
    icon: DollarSign,
    faqs: [
      { q: "How much does a cleaning cost?", a: "Pricing depends on your home's size, condition, and the type of cleaning. A standard cleaning for a 2-bedroom home typically starts around $150–$200. Request a free quote for an accurate estimate." },
      { q: "Do you charge by the hour or by the job?", a: "We charge by the job based on a flat-rate estimate. This means no surprises — you know the cost upfront before we start." },
      { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, ACH bank transfers, and digital payments. Payment is processed after the cleaning is completed." },
      { q: "Are there discounts for recurring service?", a: "Yes. Clients on weekly or bi-weekly plans receive discounted rates compared to one-time bookings. The more frequently we clean, the more you save." },
    ],
  },
  {
    title: "Trust & Safety",
    icon: ShieldCheck,
    faqs: [
      { q: "Are your cleaners background-checked?", a: "Yes. Every team member undergoes a thorough background check before joining Capital Clean Care. Your safety and peace of mind are our top priorities." },
      { q: "Is Capital Clean Care licensed and insured?", a: "Absolutely. We are fully licensed, bonded, and insured. In the rare event of any issue, you're completely protected." },
      { q: "Do I need to be home during the cleaning?", a: "No. Many clients provide a key, door code, or smart lock access so we can clean while they're away. All team members are vetted and insured." },
      { q: "What if I'm not satisfied with the cleaning?", a: "We offer a satisfaction guarantee. If you're not happy with any part of our work, let us know within 24 hours and we'll re-clean the area at no extra charge." },
    ],
  },
  {
    title: "Products & Sustainability",
    icon: Leaf,
    faqs: [
      { q: "What cleaning products do you use?", a: "We exclusively use plant-based, non-toxic cleaning products that are safe for children, pets, and the environment while delivering professional-grade results." },
      { q: "Are your products safe for pets and children?", a: "Yes. All our cleaning products are EPA Safer Choice certified, free from harsh chemicals, and completely safe for your entire family including pets." },
      { q: "Can I request specific products or supplies?", a: "Of course. If you have preferred products or specific sensitivities, let us know and we'll gladly accommodate your preferences." },
    ],
  },
  {
    title: "Service Areas",
    icon: MapPin,
    faqs: [
      { q: "What areas do you serve?", a: "We serve communities throughout Maryland (Montgomery, Frederick, Howard, and Prince George's Counties), Washington DC, and Northern Virginia (Arlington, Fairfax, McLean, Alexandria, and more)." },
      { q: "Do you serve my specific neighborhood?", a: "We cover a wide area across the DMV region. If you're unsure whether we serve your location, contact us and we'll confirm availability right away." },
      { q: "Do you charge extra for travel to distant areas?", a: "For most locations within our service area, there is no travel surcharge. For areas outside our standard coverage, we'll discuss any additional costs upfront." },
    ],
  },
];

const allFaqs = faqCategories.flatMap((c) => c.faqs);

const popularTopics = [
  "Pricing & estimates", "Eco-friendly products", "Background-checked team",
  "Recurring discounts", "Same-day availability", "Satisfaction guarantee",
  "Pet & kid safe", "Licensed & insured", "Move-in / move-out", "MD · DC · VA",
];

const FAQPage = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning FAQ — MD, DC & VA | Capital Clean Care",
    description: "Answers to 30+ questions about eco-friendly house cleaning in Maryland, DC & Virginia — pricing, products, scheduling & more. Get 15% off your first clean!",
    canonical: "https://capitalcleancare.com/faq",
  });

  return (
    <Layout>
      {seoHelmet}
      <FAQSchema faqs={allFaqs} />

      {/* ===== HERO — animated ===== */}
      <section className="relative overflow-hidden bg-mesh">
        {/* moving background blobs (desktop) */}
        <div className="hidden md:block absolute -top-24 -left-24 w-96 h-96 bg-accent/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" />
        <div className="hidden md:block absolute top-10 -right-24 w-96 h-96 bg-primary/25 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000" />
        <div className="hidden md:block absolute -bottom-32 left-1/3 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-4000" />

        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — copy */}
            <div>
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "FAQ" }]} className="mb-6" />
              <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 animate-fade-up">
                <Sparkles className="h-4 w-4 text-accent" />
                <span className="text-xs font-semibold text-foreground uppercase tracking-wider">30+ Answers · Eco-Friendly Cleaning</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-foreground mb-6 animate-fade-up drop-shadow-sm" style={{ animationDelay: "100ms" }}>
                Questions?
                <br />
                <span className="text-gradient">We've got answers.</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
                Everything you need to know about our premium eco-friendly cleaning
                across Maryland, Washington DC &amp; Northern Virginia — pricing,
                products, safety, and scheduling.
              </p>

              {/* Quick category jumps */}
              <div className="flex flex-wrap gap-2.5 mb-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
                {faqCategories.map(({ title, icon: Icon }, i) => (
                  <a
                    key={title}
                    href={`#cat-${i}`}
                    className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-sm font-medium text-foreground hover:text-accent hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    {title}
                  </a>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
                <Button variant="cta" size="lg" className="text-sm px-8 h-14 rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
                  <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="text-sm px-8 h-14 rounded-full glass hover:bg-white/40 dark:hover:bg-black/40 transition-all duration-300" asChild>
                  <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> (240) 704-2551</a>
                </Button>
              </div>
            </div>

            {/* Right — moving image + floating cards */}
            <div className="relative animate-fade-up" style={{ animationDelay: "250ms" }}>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-primary/20 ring-1 ring-black/5 aspect-[4/5] max-w-md mx-auto">
                <img
                  src="/images/team/real-team-two-members.webp"
                  alt="Capital Clean Care team ready to answer your questions"
                  className="w-full h-full object-cover animate-kenburns"
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={1000}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
              </div>

              {/* floating glass rating card */}
              <div className="absolute -left-3 top-8 glass-card rounded-2xl px-4 py-3 shadow-xl animate-float">
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs font-bold text-foreground">5.0 · 500+ homes cleaned</p>
              </div>

              {/* floating glass Q bubble */}
              <div className="absolute -right-2 bottom-10 glass-card rounded-2xl px-4 py-3 shadow-xl max-w-[200px] animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="flex items-start gap-2">
                  <MessageCircleQuestion className="h-5 w-5 text-accent shrink-0" />
                  <p className="text-xs text-foreground leading-snug font-medium">"Are your products safe for my pets?" <span className="text-accent font-semibold">Yes — always.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== Moving marquee of popular topics ===== */}
        <div className="relative border-y border-border/60 bg-background/40 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee hover:[animation-play-state:paused]">
            {[...popularTopics, ...popularTopics].map((topic, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground whitespace-nowrap px-2">
                <Sparkles className="h-3.5 w-3.5 text-accent" />
                {topic}
                <span className="ml-2 text-border">•</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ Categories ===== */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {faqCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={category.title} delay={i * 60}>
                <div
                  id={`cat-${i}`}
                  className="scroll-mt-24 rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-foreground tracking-tight">
                      {category.title}
                    </h2>
                  </div>
                  <FAQ faqs={category.faqs} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <TrustBadges compact withBackground={false} />

      {/* ===== CTA ===== */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-secondary">
        <div className="hidden md:block absolute -top-20 right-0 w-80 h-80 bg-accent/15 rounded-full filter blur-3xl opacity-60 animate-blob" />
        <div className="relative container mx-auto px-4 max-w-2xl text-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-5 text-xs font-semibold uppercase tracking-wider text-foreground">
              <MessageCircleQuestion className="h-4 w-4 text-accent" /> Didn't find your answer?
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Still Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Contact us directly or request a free quote — we're happy to help, usually within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Button variant="cta" size="lg" className="rounded-full shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300" asChild>
                <Link to="/contact">
                  Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="secondary" size="lg" className="rounded-full" asChild>
                <a href="tel:+12407042551">Call (240) 704-2551</a>
              </Button>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120}>
            <Card className="shadow-xl border-border/70 rounded-3xl">
              <CardContent className="p-6 md:p-8">
                <QuoteForm />
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default FAQPage;
