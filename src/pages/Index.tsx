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
import regionMD from "@/assets/region-maryland.jpg";
import regionDC from "@/assets/region-dc.jpg";
import regionVA from "@/assets/region-virginia.jpg";
import teamPhoto from "@/assets/team-photo.png";
import cleanerMopping from "@/assets/cleaner-mopping.png";
import ecoProducts from "@/assets/eco-products.png";
import happyClient from "@/assets/happy-client.png";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ScrollReveal from "@/components/ScrollReveal";

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
  { q: "Is there a new client discount?", a: "Yes! New clients receive $25 off their first cleaning service. This applies to all service types and is automatically applied when you mention it during booking." },
];

const locationAreas = [
  { label: "Maryland", slug: "/maryland", count: mdCities.length, image: regionMD },
  { label: "Washington, DC", slug: "/washington-dc", count: dcCities.length, image: regionDC },
  { label: "Northern Virginia", slug: "/virginia", count: vaCities.length, image: regionVA },
];

const Index = () => {
  const { seoHelmet } = useSEO({
    title: "Eco-Friendly House Cleaning in Maryland, DC & Virginia | Capital Clean Care",
    description: "Premium residential cleaning in MD, DC & Northern VA. Non-toxic products, background-checked teams, 5-star rated. $25 off your first clean — get a free quote!",
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

      {/* ══════════════ TRUST STRIP ══════════════ */}
      <ScrollReveal>
        <section className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { icon: Shield, label: "Licensed & Insured", sub: "Full coverage" },
                { icon: Users, label: "Background-Checked", sub: "Vetted teams" },
                { icon: Leaf, label: "Eco-Friendly", sub: "Non-toxic products" },
                { icon: Star, label: "5-Star Rated", sub: "150+ happy clients" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.sub}</p>
                  </div>
                </div>
              ))}
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
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">
                  Family-Owned<br />Cleaning Excellence
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
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

      {/* ══════════════ SERVICE AREAS ══════════════ */}
      <ScrollReveal>
        <section className="py-20 md:py-28 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Service Areas</span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4">Where We Clean</h2>
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

      {/* ══════════════ REAL WORK PHOTOS ══════════════ */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Work</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2">See Us in Action</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
              <img src={cleanerMopping} alt="Capital Clean Care professional mopping hardwood floors" className="rounded-2xl shadow-md w-full aspect-[4/5] object-cover" loading="lazy" />
              <img src={ecoProducts} alt="Eco-friendly non-toxic cleaning products used by Capital Clean Care" className="rounded-2xl shadow-md w-full aspect-[4/5] object-cover" loading="lazy" />
              <img src={happyClient} alt="Satisfied client relaxing while Capital Clean Care team cleans" className="rounded-2xl shadow-md w-full aspect-[4/5] object-cover" loading="lazy" />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* ══════════════ BEFORE & AFTER ══════════════ */}
      <ScrollReveal>
        <BeforeAfterGallery />
      </ScrollReveal>

      {/* ══════════════ TESTIMONIALS ══════════════ */}
      <ScrollReveal>
        <TestimonialsSection />
      </ScrollReveal>

      {/* ══════════════ LOCAL CLEANING PAGES ══════════════ */}
      <ScrollReveal>
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Local Services</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold mt-2 mb-3">Cleaning Services Near You</h2>
              <p className="text-muted-foreground">Explore our city-specific cleaning pages with tailored services and local pricing.</p>
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
            </div>
            <PricingTable />
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
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-accent-foreground mb-3">
              Still have questions? We're here to help.
            </h2>
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
              <h2 className="font-heading text-3xl md:text-4xl font-bold mt-2 mb-4">Get Your Free Quote</h2>
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
