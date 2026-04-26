import { Link } from "react-router-dom";
import { CheckCircle, Shield, Leaf, Star, MapPin, Sparkles, ArrowRight, Phone, Users, Clock, Check } from "lucide-react";
import PricingTable from "@/components/PricingTable";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { LocalBusinessSchema, FAQSchema, WebSiteSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { useSEO } from "@/hooks/useSEO";
import { services } from "@/data/services";
import { mdCities, dcCities, vaCities } from "@/data/locations";
import { vanityLandingPages } from "@/data/vanity-landings";
import regionMD from "@/assets/region-maryland.webp";
import regionDC from "@/assets/region-dc.webp";
import regionVA from "@/assets/region-virginia.webp";
import teamPhoto from "@/assets/team-photo.webp";
import cleanerMopping from "@/assets/cleaner-mopping.webp";
import ecoProducts from "@/assets/eco-products.webp";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsCarousel from "@/components/home/TestimonialsCarousel";
import EcoCallout from "@/components/home/EcoCallout";
import ScrollReveal from "@/components/ScrollReveal";
import GreenShield5Step from "@/components/GreenShield5Step";
import TrustBadges from "@/components/TrustBadges";

const homeFaqs = [
  { q: "What areas do you serve?", a: "We serve communities throughout Maryland (Montgomery, Frederick, Howard, and Prince George's Counties), Washington DC, and Northern Virginia (Arlington, Fairfax, McLean, Alexandria, and more)." },
  { q: "Are your cleaning products safe for children and pets?", a: "Absolutely. We exclusively use plant-based, non-toxic cleaning products that are safe for your entire family, including children and pets, while delivering professional-grade results." },
  { q: "How do I get a quote?", a: "Fill out our free quote form on this page or any page on our website, or call us at (240) 704-2551. We typically respond with a personalized estimate within a few hours." },
  { q: "Do I need to be home during cleaning?", a: "No. Many clients provide key, code, or smart lock access so we can clean while they're at work or running errands. All team members are background-checked and insured." },
  { q: "What's your cancellation policy?", a: "We ask for 24-48 hours notice for cancellations or rescheduling. There are no penalties for occasional schedule changes." },
  { q: "Are your cleaners insured and background-checked?", a: "Yes. Capital Clean Care is fully licensed and insured. Every team member undergoes thorough background checks before joining our team." },
  { q: "How much does a standard cleaning cost?", a: "A standard cleaning for a 1-2 bedroom home starts at $100–$150, while larger homes range from $150–$350+. Recurring clients save up to 25% with weekly plans. Request a free quote for your exact price." },
  { q: "What's included in a deep cleaning?", a: "Deep cleaning covers everything in a standard clean plus detailed work inside cabinets, appliance interiors, baseboard scrubbing, light fixtures, window sills, and more. It's ideal for first-time clients or seasonal refreshes." },
  { q: "Do you offer a satisfaction guarantee?", a: "Yes! We offer a 100% satisfaction guarantee. If you're not completely happy with any aspect of our cleaning, contact us within 24 hours and we'll return to re-clean the area at no extra charge." },
  { q: "What makes your eco-friendly products different?", a: "Our products are EPA Safer Choice certified, plant-based, and free from chlorine, ammonia, and artificial fragrances. They deliver the same cleaning power as conventional products without the harmful chemicals or residues." },
  { q: "How do recurring cleaning discounts work?", a: "Weekly clients save up to 25%, bi-weekly clients save 15%, and monthly clients save 5% compared to one-time pricing. The more frequently we clean, the less time each visit takes — savings we pass on to you." },
  { q: "Can I change or skip a scheduled cleaning?", a: "Of course. Life happens! Simply let us know 24–48 hours in advance and we'll reschedule at no charge. You can also pause recurring service anytime without penalty." },
  { q: "Do you bring your own supplies and equipment?", a: "Yes, we bring all cleaning supplies, equipment, and products. If you have preferred products or specific sensitivities, let us know and we'll gladly accommodate." },
  { q: "Is there a new client discount?", a: "Yes! New clients get 15% off their first cleaning service. This applies to all service types and is automatically applied when you mention it during booking." },
];

const locationAreas = [
  { label: "Maryland", slug: "/maryland", count: mdCities.length, image: regionMD },
  { label: "Washington, DC", slug: "/washington-dc", count: dcCities.length, image: regionDC },
  { label: "Northern Virginia", slug: "/virginia", count: vaCities.length, image: regionVA },
];

const Index = () => {
  const { seoHelmet } = useSEO({
    title: "Eco-Friendly House Cleaning MD, DC & VA | Capital Clean Care",
    description: "Professional eco-friendly house cleaning in Maryland, DC & Virginia. EPA Safer Choice certified. 5.0 stars. 15% OFF first clean. Call (240) 704-2551.",
    canonical: "https://capitalcleancare.com/",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <WebSiteSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }]} />
      <FAQSchema faqs={homeFaqs} />

      {/* ══════════════ HERO ══════════════ */}
      <HeroSection />

      {/* ══════════════ TRUST BAR ══════════════ */}
      <ScrollReveal>
        <section className="border-b border-border bg-card shadow-sm">
          <div className="container mx-auto px-4 py-5">
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
              {[
                { icon: Shield, label: "Licensed & Insured", sub: "Full liability coverage" },
                { icon: Users, label: "Background-Checked", sub: "Every team member" },
                { icon: Leaf, label: "EPA Safer Choice", sub: "100% non-toxic products" },
                { icon: Star, label: "5-Star Rated", sub: "500+ happy clients" },
                { icon: CheckCircle, label: "Satisfaction Guarantee", sub: "Re-clean free in 24h" },
                { icon: Clock, label: "9+ Years in DMV", sub: "Family-owned & trusted" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-4 w-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground leading-tight">{item.label}</p>
                    <p className="text-xs text-muted-foreground leading-tight">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ SOCIAL PROOF NUMBERS ══════════════ */}
      <ScrollReveal>
        <div className="py-10 bg-white border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
              {[
                { value: "500+", label: "Homes Cleaned", icon: "🏠" },
                { value: "9+",   label: "Years Serving DMV", icon: "📅" },
                { value: "5.0★", label: "Google Rating", icon: "⭐" },
                { value: "100%", label: "Satisfaction Promise", icon: "🛡️" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{s.icon}</span>
                  <p className="font-heading font-bold text-3xl md:text-4xl text-accent">{s.value}</p>
                  <p className="text-sm text-muted-foreground font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ══════════════ PROBLEM / AGITATION ══════════════ */}
      <ScrollReveal>
        <section className="relative py-20 md:py-28 bg-mesh overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">Sound Familiar?</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                You shouldn't have to spend your weekend cleaning.
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">You work hard all week. The last thing you need is to spend your free time scrubbing bathrooms.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { emoji: "😩", text: "You come home exhausted and the house is still a mess" },
                { emoji: "🧪", text: "Worried about harsh chemicals around your kids or pets" },
                { emoji: "😤", text: "Previous cleaners didn't meet your expectations" },
                { emoji: "⏰", text: "Never enough time to keep up with deep cleaning" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-4 glass-card rounded-2xl p-6">
                  <span className="text-3xl shrink-0 animate-float">{item.emoji}</span>
                  <p className="text-base text-foreground font-medium leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-lg font-semibold text-foreground mb-4">That's exactly why Capital Clean Care exists.</p>
              <Button variant="cta" size="lg" asChild>
                <a href="#quote">Let Us Handle It <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ FAMILY-OWNED / ABOUT ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
              <div className="relative order-2 lg:order-1">
                <img
                  src={teamPhoto}
                  alt="Capital Clean Care team members smiling in branded uniforms"
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5]"
                  loading="lazy"
                />
                <div className="absolute -bottom-4 -right-4 md:bottom-6 md:-right-6 bg-accent text-accent-foreground rounded-xl p-4 shadow-lg">
                  <p className="font-heading font-bold text-2xl">9+</p>
                  <p className="text-xs font-medium">Years of<br />Experience</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">About Us</span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-6 leading-tight">
                  <span className="text-gradient">Family-Owned</span> Cleaning Excellence
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed text-base md:text-lg">
                  At Capital Clean Care, we're more than a cleaning company — we're a team of dedicated professionals who genuinely care about your home. Over 150 homes cleaned with the care we'd give our own.
                </p>
                <div className="space-y-3 mb-8">
                  {["Licensed, bonded & fully insured", "EPA Safer Choice certified products", "Consistent dedicated cleaning teams", "24-hour satisfaction guarantee"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                        <Check className="h-3 w-3 text-accent" />
                      </div>
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="cta" size="lg" asChild>
                  <Link to="/about">Learn More About Us <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ ECO CALLOUT ══════════════ */}
      <ScrollReveal>
        <EcoCallout />
      </ScrollReveal>

      {/* ══════════════ SERVICE AREAS ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-mesh relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">Service Areas</span>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Where We Clean</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">Proudly serving communities across the DMV region with premium residential cleaning.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {locationAreas.map((area) => (
                <Link key={area.slug} to={area.slug} className="group block">
                  <div className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <img
                      src={area.image}
                      alt={`House cleaning service areas in ${area.label}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin className="h-4 w-4 text-accent" />
                        <h3 className="font-heading font-bold text-lg text-card">{area.label}</h3>
                      </div>
                      <p className="text-card/70 text-sm">{area.count} service areas</p>
                      <span className="text-accent font-medium text-sm mt-2 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        View Locations <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ WHY CHOOSE US ══════════════ */}
      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      {/* ══════════════ OUR SERVICES ══════════════ */}
      <ScrollReveal>
        <ServicesSection />
      </ScrollReveal>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <ScrollReveal>
        <section className="py-24 md:py-32 relative">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">The Process</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Getting a clean home is simple</h2>
              <p className="text-muted-foreground max-w-xl mx-auto text-lg">From first contact to sparkling home — we make it effortless.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Connector line (desktop only) */}
              <div className="hidden md:block absolute top-[2.5rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-0.5 bg-gradient-to-r from-accent/10 via-accent/50 to-accent/10 z-0" />
              {[
                {
                  step: "01",
                  title: "Get Your Free Quote",
                  desc: "Fill out our quick form or call (240) 704-2551. We respond within a few hours with a personalized estimate — no obligation.",
                  icon: Sparkles,
                },
                {
                  step: "02",
                  title: "We Clean Your Home",
                  desc: "Our background-checked, eco-friendly team arrives on schedule. You don't even need to be home.",
                  icon: CheckCircle,
                },
                {
                  step: "03",
                  title: "Enjoy Your Space",
                  desc: "Come home to a spotless house. If anything isn't perfect, we re-clean for free within 24 hours. Guaranteed.",
                  icon: Star,
                },
              ].map((s) => (
                <div key={s.step} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6 shadow-xl shadow-accent/20 group-hover:-translate-y-2 transition-transform duration-300 rotate-3 group-hover:rotate-6">
                    <s.icon className="h-8 w-8 text-white -rotate-3 group-hover:-rotate-6 transition-transform" />
                  </div>
                  <span className="text-xs font-bold text-accent uppercase tracking-widest mb-3 bg-accent/10 px-3 py-1 rounded-full">Step {s.step}</span>
                  <h3 className="font-heading text-xl font-bold mb-3">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="cta" size="lg" className="rounded-full" asChild>
                <a href="#quote">Start with a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
              <p className="text-xs text-muted-foreground mt-3">No commitment • Response within hours • 15% OFF first clean</p>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ GREENSHIELD INTRO BANNER ══════════════ */}
      <ScrollReveal>
        <div className="bg-accent/5 border-y border-accent/20 py-5">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm md:text-base font-medium text-foreground">
              🛡️ Every Capital Clean Care visit follows the <strong>GreenShield 5-Step Clean™</strong> — our proprietary method developed over 9 years and 500+ homes.{" "}
              <a href="/about" className="text-accent font-semibold hover:underline">Learn the story behind it →</a>
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* ══════════════ GREENSHIELD 5-STEP CLEAN ══════════════ */}
      <ScrollReveal>
        <GreenShield5Step />
      </ScrollReveal>

      {/* ══════════════ TRUST BADGES ══════════════ */}
      <ScrollReveal>
        <TrustBadges />
      </ScrollReveal>

      {/* ══════════════ REAL WORK PHOTOS ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-mesh">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">Our Work</span>
              <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2">See Us in Action</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <img src={cleanerMopping} alt="Capital Clean Care professional mopping hardwood floors" className="rounded-2xl shadow-md w-full aspect-[4/5] object-cover" loading="lazy" />
              <img src={ecoProducts} alt="Eco-friendly non-toxic cleaning products used by Capital Clean Care" className="rounded-2xl shadow-md w-full aspect-[4/5] object-cover" loading="lazy" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ BEFORE & AFTER ══════════════ */}
      <ScrollReveal>
        <BeforeAfterGallery />
      </ScrollReveal>

      {/* ══════════════ TESTIMONIALS CAROUSEL ══════════════ */}
      <ScrollReveal>
        <TestimonialsCarousel />
      </ScrollReveal>

      {/* ══════════════ LOCAL CLEANING PAGES ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-background relative overflow-hidden">
          {/* Decorative blur elements for modern touch */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob pointer-events-none" />
          
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-14">
              <span className="inline-block bg-accent/10 text-accent font-semibold text-sm uppercase tracking-wider px-3 py-1 rounded-full mb-3">Local Services</span>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Cleaning Services Near You</h3>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Explore our city-specific cleaning pages with tailored services and local pricing.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {vanityLandingPages.slice(0, 9).map((vp) => (
                <Link key={vp.slug} to={`/${vp.slug}`} className="group block">
                  <Card className="hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 h-full">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                        <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-accent transition-colors">{vp.h1}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground line-clamp-2">{vp.metaDescription}</p>
                      <span className="text-accent font-medium text-xs mt-2 inline-flex items-center gap-1">
                        View Details <ArrowRight className="h-3 w-3" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="sm" asChild>
                <Link to="/maryland">View All Maryland Locations <ArrowRight className="ml-1 h-3 w-3" /></Link>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ PRICING ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Pricing</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Transparent Pricing</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Honest pricing based on home size and frequency. No hidden fees, ever.</p>
              {/* Urgency badge */}
              <div className="inline-flex items-center gap-2 mt-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300 rounded-full px-4 py-1.5 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                New clients save 15% on their first clean — limited availability
              </div>
            </div>
            <PricingTable />
            <div className="text-center mt-8">
              <Button variant="cta" size="lg" className="rounded-full" asChild>
                <a href="#quote">Claim 15% OFF — Get My Free Quote <ArrowRight className="ml-2 h-4 w-4" /></a>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ FAQ ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">FAQ</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">Frequently Asked Questions</h2>
            </div>
            <FAQ faqs={homeFaqs} />
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ POST-FAQ CTA ══════════════ */}
      <ScrollReveal>
        <section className="py-12 md:py-16 bg-accent">
          <div className="container mx-auto px-4 text-center">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-3">
              Still have questions? We're here to help.
            </h3>
            <p className="text-accent-foreground/80 mb-6 max-w-xl mx-auto">
              Call us at <a href="tel:+12407042551" className="font-semibold underline underline-offset-2">(240) 704-2551</a> or get a free, no-obligation quote in minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="secondary" size="lg" asChild>
                <a href="#quote">Get My Free Quote →</a>
              </Button>
              <Button variant="outline" size="lg" className="border-accent-foreground/40 text-accent-foreground hover:bg-accent-foreground/10" asChild>
                <a href="tel:+12407042551">
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </a>
              </Button>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ QUOTE FORM ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28" id="quote">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Free Estimate</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">
                Get Your Free Quote + <span className="text-accent">15% OFF</span>
              </h2>
              <p className="text-muted-foreground">No commitment required. We respond within a few hours with a personalized estimate.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
              {/* Trust signals column */}
              <div className="lg:col-span-2 space-y-6">
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: "Licensed & Insured", desc: "Fully bonded and covered — your home is protected." },
                    { icon: Users, title: "Background-Checked Team", desc: "Every cleaner passes a thorough background screening." },
                    { icon: Leaf, title: "Eco-Friendly Products", desc: "EPA-certified, non-toxic, safe for kids and pets." },
                    { icon: Star, title: "Satisfaction Guarantee", desc: "Not happy? We re-clean for free within 24 hours." },
                    { icon: CheckCircle, title: "No Hidden Fees", desc: "Transparent pricing — what we quote is what you pay." },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground">{item.title}</p>
                        <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick contact */}
                <div className="rounded-xl bg-secondary border border-border p-5 space-y-3">
                  <p className="text-sm font-semibold">Prefer to talk first?</p>
                  <a href="tel:+12407042551" className="flex items-center gap-2 text-accent font-semibold text-sm hover:underline">
                    <Phone className="h-4 w-4" /> (240) 704-2551
                  </a>
                  <p className="text-xs text-muted-foreground">Mon–Sat 8am–6pm. We also respond to texts!</p>
                </div>
              </div>

              {/* Form column */}
              <div className="lg:col-span-3">
                <Card className="shadow-xl">
                  <CardContent className="p-6 md:p-10">
                    <QuoteForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </Layout>
  );
};

export default Index;
