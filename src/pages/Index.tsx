import { Link } from "react-router-dom";
import { CheckCircle, Shield, Leaf, Star, MapPin, Sparkles, ArrowRight } from "lucide-react";
import PricingTable from "@/components/PricingTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { useSEO } from "@/hooks/useSEO";
import { services } from "@/data/services";
import { hubs, mdCities, dcCities, vaCities } from "@/data/locations";
import heroImage from "@/assets/hero-clean-home.jpg";

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
];

const locationAreas = [
  { label: "Maryland", slug: "/maryland", count: mdCities.length },
  { label: "Washington, DC", slug: "/washington-dc", count: dcCities.length },
  { label: "Northern Virginia", slug: "/virginia", count: vaCities.length },
];

const Index = () => {
  useSEO({
    title: "Capital Clean Care | Premium House Cleaning in MD, DC & VA",
    description: "Eco-friendly residential cleaning in Maryland, Washington DC & Northern Virginia. Licensed, insured, background-checked teams. Get a free quote today.",
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Sparkling clean modern living room" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Premium Eco-Friendly House Cleaning in MD, DC & VA
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/85 mb-8 leading-relaxed">
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
            <div className="flex flex-wrap gap-4 mt-8">
              {trustPoints.map((tp) => (
                <span key={tp.label} className="flex items-center gap-1.5 text-sm text-primary-foreground/80">
                  <tp.icon className="h-4 w-4 text-accent" /> {tp.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Why Choose Capital Clean Care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Leaf, title: "100% Eco-Friendly", desc: "Plant-based, non-toxic products safe for your family, pets, and the planet." },
              { icon: Shield, title: "Licensed & Insured", desc: "Full coverage and liability protection for complete peace of mind." },
              { icon: CheckCircle, title: "Background-Checked", desc: "Every team member is thoroughly vetted and professionally trained." },
              { icon: Star, title: "Satisfaction Guaranteed", desc: "Not happy? We'll re-clean at no extra charge. That's our promise." },
            ].map((item) => (
              <Card key={item.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Where We Clean</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Proudly serving communities across the DMV region with premium residential cleaning.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locationAreas.map((area) => (
              <Card key={area.slug} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <MapPin className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-heading text-xl font-semibold mb-2">{area.label}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{area.count} service areas</p>
                  <Button variant="cta-outline" size="sm" asChild>
                    <Link to={area.slug}>View Locations</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      {/* Pricing */}
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
