import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CheckCircle, Shield, Leaf, Star, MapPin, Sparkles, ArrowRight } from "lucide-react";
import PricingTable from "@/components/PricingTable";


import CityGallery from "@/components/CityGallery";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import { LocalBusinessSchema, FAQSchema, WebSiteSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { useSEO } from "@/hooks/useSEO";
import { services } from "@/data/services";
import { hubs, mdCities, dcCities, vaCities } from "@/data/locations";
import { vanityLandingPages } from "@/data/vanity-landings";
import heroImage from "@/assets/hero-clean-home.jpg";
import regionMD from "@/assets/region-maryland.jpg";
import regionDC from "@/assets/region-dc.jpg";
import regionVA from "@/assets/region-virginia.jpg";
import teamPhoto from "@/assets/team-photo.png";
import happyClient from "@/assets/happy-client.png";
import cleanerMopping from "@/assets/cleaner-mopping.png";
import ecoProducts from "@/assets/eco-products.png";

const trustPoints = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: CheckCircle, label: "Background-Checked Teams" },
  { icon: Leaf, label: "Eco-Friendly Products" },
  { icon: Star, label: "Satisfaction Guaranteed" },
];

const testimonials = [
  { name: "Sarah M.", location: "Bethesda, MD", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products that I feel safe having around my kids and pets. Highly recommend!", rating: 5 },
  { name: "James T.", location: "Arlington, VA", text: "We've used their bi-weekly service for six months and every visit exceeds expectations. Our dedicated team knows our home and preferences perfectly.", rating: 5 },
  { name: "Lauren K.", location: "Capitol Hill, DC", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I didn't even know existed. Worth every penny.", rating: 5 },
  { name: "David R.", location: "Rockville, MD", text: "Switching to Capital Clean Care was the best decision. Their eco-friendly approach and consistent quality make them stand out. Our home has never looked better.", rating: 5 },
];

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
      <DiscountBanner />
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[420px] md:min-h-[600px]">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Capital Clean Care professional carrying eco-friendly cleaning supplies" className="w-full h-full object-cover object-center" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60 md:from-primary/90 md:via-primary/75 md:to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 py-14 md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 md:mb-6 leading-tight">
              Premium Eco-Friendly House Cleaning in MD, DC & VA
            </h1>
            <p className="text-base md:text-xl text-primary-foreground/85 mb-6 md:mb-8 leading-relaxed">
              Experience the difference of truly clean. Our background-checked professionals use non-toxic, plant-based products to make your home sparkle — safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="cta" size="lg" className="text-base" asChild>
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="secondary" size="lg" className="text-base" asChild>
                <a href="tel:+12407042551">Call (240) 704-2551</a>
              </Button>
            </div>
            <div className="flex flex-wrap gap-3 md:gap-4 mt-6 md:mt-8">
              {trustPoints.map((tp) => (
                <span key={tp.label} className="flex items-center gap-1 md:gap-1.5 text-xs md:text-sm text-primary-foreground/80">
                  <tp.icon className="h-4 w-4 text-accent" /> {tp.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Internal Link Silo — Services × Locations */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Our Cleaning Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From routine maintenance to intensive deep cleans, we offer comprehensive cleaning solutions for every need.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.slug} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Sparkles className="h-8 w-8 text-accent mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-2">{s.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.shortDescription}</p>
                  <Link to={`/services/${s.slug}`} className="text-accent font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </Link>
                  {/* Keyword-rich internal links to service-location combos */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["wheaton-md", "silver-spring-md", "bethesda-md", "arlington-va"].slice(0, 2).map((citySlug) => {
                      const cityName = citySlug.replace(/-md|-va|-dc/g, "").split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
                      const stateAbbr = citySlug.endsWith("-va") ? "VA" : citySlug.endsWith("-dc") ? "DC" : "MD";
                      return (
                        <Link
                          key={citySlug}
                          to={`/locations/${citySlug}`}
                          className="text-xs text-muted-foreground hover:text-accent transition-colors"
                          aria-label={`${s.name} in ${cityName}, ${stateAbbr}`}
                        >
                          {cityName}, {stateAbbr}
                        </Link>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src={teamPhoto}
                alt="Capital Clean Care team members smiling in branded uniforms"
                className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5] lg:aspect-[3/4]"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">Meet the People Behind Every Clean</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Capital Clean Care, we're more than a cleaning company — we're a team of dedicated professionals who genuinely care about your home. Every team member is background-checked, professionally trained, and passionate about delivering exceptional results.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { icon: Shield, title: "Licensed & Insured", desc: "Full coverage for your peace of mind." },
                  { icon: CheckCircle, title: "Background-Checked", desc: "Every team member is thoroughly vetted." },
                  { icon: Leaf, title: "100% Eco-Friendly", desc: "Safe for your family, pets, and planet." },
                  { icon: Star, title: "Satisfaction Guaranteed", desc: "We'll re-clean at no extra charge." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-sm">{item.title}</h3>
                      <p className="text-muted-foreground text-xs">{item.desc}</p>
                    </div>
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

      {/* Real Work Photo Strip */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <img src={cleanerMopping} alt="Capital Clean Care professional mopping hardwood floors" className="rounded-xl shadow-md w-full aspect-square object-cover" loading="lazy" />
            <img src={ecoProducts} alt="Eco-friendly non-toxic cleaning products used by Capital Clean Care" className="rounded-xl shadow-md w-full aspect-square object-cover" loading="lazy" />
            <img src={happyClient} alt="Satisfied client relaxing while Capital Clean Care team cleans in background" className="rounded-xl shadow-md w-full aspect-square object-cover hidden md:block" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Service Areas - Region Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Where We Clean</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Proudly serving communities across the DMV region with premium residential cleaning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationAreas.map((area) => (
              <Card key={area.slug} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={area.image}
                    alt={`House cleaning service areas in ${area.label} — Capital Clean Care`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/40" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-primary-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="font-heading font-semibold text-lg">{area.label}</span>
                  </div>
                </div>
                <CardContent className="p-5 text-center">
                  <p className="text-muted-foreground text-sm mb-3">{area.count} service areas</p>
                  <Button variant="cta-outline" size="sm" className="w-full" asChild>
                    <Link to={area.slug}>View Locations <ArrowRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Location-Specific Pages — Content Silo Links */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Local Cleaning Services Near You</h2>
            <p className="text-muted-foreground">Explore our city-specific cleaning pages with tailored services, checklists, and local pricing.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {vanityLandingPages.slice(0, 9).map((vp) => (
              <Card key={vp.slug} className="group hover:shadow-md transition-all duration-200 hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <Link to={`/${vp.slug}`} className="block">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-4 w-4 text-accent shrink-0" aria-hidden="true" />
                      <h3 className="font-heading font-semibold text-sm text-foreground group-hover:text-accent transition-colors">{vp.h1}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{vp.metaDescription}</p>
                    <span className="text-accent font-medium text-xs mt-2 inline-flex items-center gap-1">
                      View Details <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" size="sm" asChild>
              <Link to="/maryland" aria-label="View all Maryland cleaning service locations">View All Maryland Locations <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* City Gallery */}
      <CityGallery limit={12} />

      {/* Before & After */}
      <BeforeAfterGallery />

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <CardContent className="p-6">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{t.text}"</p>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Sample Pricing */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Sample Pricing</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Transparent pricing based on home size and frequency. Select a cleaning type to see estimated ranges.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <FAQ faqs={homeFaqs} />
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 md:py-24 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Get Your Free Quote</h2>
            <p className="text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours with a personalized estimate.</p>
          </div>
          <Card>
            <CardContent className="p-6 md:p-8">
              <QuoteForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
