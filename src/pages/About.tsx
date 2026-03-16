import { Shield, Leaf, Users, Heart, CheckCircle, Award, Star, MapPin, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { FAQSchema, LocalBusinessSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import teamPhoto from "@/assets/team-photo.png";
import cleanerBlinds from "@/assets/cleaner-blinds.png";
import cleanerSupplies from "@/assets/cleaner-supplies.png";
import happyClient from "@/assets/happy-client.png";

const testimonials = [
  { name: "Sarah M.", location: "Bethesda, MD", text: "Capital Clean Care transformed our home. The team is professional, thorough, and uses products safe for my kids and pets. I couldn't be happier with the service." },
  { name: "David R.", location: "Rockville, MD", text: "Consistent quality every single visit. Our dedicated team knows our home perfectly and always leaves everything sparkling. Best cleaning service in Montgomery County." },
  { name: "Lauren K.", location: "Capitol Hill, DC", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust from places I never would have thought to check." },
  { name: "James T.", location: "Arlington, VA", text: "We've used their bi-weekly service for over a year. Every visit exceeds expectations. The team even remembers our dog's name!" },
  { name: "Angela T.", location: "Silver Spring, MD", text: "I love that they use eco-friendly products. With two kids and a dog, knowing the products are safe gives me real peace of mind. Highly recommend." },
];

const aboutFaqs = [
  { q: "What areas does Capital Clean Care serve?", a: "We serve communities throughout Maryland (Montgomery, Frederick, Howard, and Prince George's Counties), Washington DC (all quadrants), and Northern Virginia (Arlington, Fairfax, McLean, Alexandria, Falls Church, Vienna, and Tysons)." },
  { q: "Are your cleaning teams background-checked?", a: "Yes. Every Capital Clean Care team member undergoes comprehensive background screening, professional training, and ongoing quality assessments before entering any client's home." },
  { q: "What eco-friendly products do you use?", a: "We use plant-based, non-toxic cleaning solutions that are free from harsh chemicals, artificial fragrances, and allergens. Our products are safe for families, pets, and the environment while delivering professional-grade results." },
  { q: "Do you offer a satisfaction guarantee?", a: "Yes. We offer a 100% satisfaction guarantee on every cleaning. If you're not completely happy with any aspect of our work, contact us within 24 hours and we'll return to re-clean the area at no additional charge." },
  { q: "How long has Capital Clean Care been in business?", a: "Capital Clean Care has been serving the DMV region with premium, eco-friendly residential cleaning services. Our experience spans hundreds of homes across Maryland, DC, and Virginia." },
  { q: "What services do you offer?", a: "We offer standard house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, recurring cleaning plans (weekly, bi-weekly, monthly), and specialized eco-friendly cleaning." },
  { q: "How do I get a free quote?", a: "Fill out our online quote form, call us at (240) 704-2551, or email capitalcleancare@gmail.com. We typically respond within a few hours with a personalized estimate." },
  { q: "Are you licensed and insured?", a: "Yes. Capital Clean Care is fully licensed, bonded, and insured with comprehensive liability coverage. We carry worker's compensation and general liability insurance for your complete protection." },
  { q: "Do I need to be home during the cleaning?", a: "No. Many clients provide key, code, or smart lock access so we can clean while they're at work. All team members are background-checked and insured." },
  { q: "What are your hours of operation?", a: "We operate Monday through Saturday, 8 AM to 6 PM. We offer flexible scheduling including early morning and Saturday appointments to accommodate your lifestyle." },
  { q: "Do you bring your own cleaning supplies?", a: "Yes. Our teams arrive fully equipped with all necessary eco-friendly cleaning products and professional-grade equipment. You don't need to provide anything." },
  { q: "Can I customize my cleaning service?", a: "Absolutely. While we follow comprehensive checklists, we're happy to adjust priorities based on your preferences. Just let us know your specific needs when booking." },
];

const About = () => {
  const { seoHelmet } = useSEO({
    title: "About Us — Eco-Friendly Cleaning Team in MD, DC & VA | Capital Clean Care",
    description: "Meet Capital Clean Care: licensed, insured, background-checked teams serving Maryland, DC & Virginia with non-toxic cleaning. 5-star rated. Learn our story!",
    canonical: "https://capitalcleancare.com/about",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <FAQSchema faqs={aboutFaqs} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} className="mb-6" />
          {/* Hero with team photo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">About Capital Clean Care</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-4">
                Capital Clean Care was founded with a simple belief: every family deserves a clean, healthy home — and achieving that shouldn't require toxic chemicals or unreliable service.
              </p>
              <p className="text-foreground leading-relaxed mb-6">
                Based in Silver Spring, Maryland, we serve homeowners across Maryland, Washington DC, and Northern Virginia with premium residential cleaning services that prioritize quality, consistency, and environmental responsibility. Our address is 4111 Postgate Terrace, Silver Spring, MD 20906.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:+12407042551">(240) 704-2551</a>
                </Button>
              </div>
            </div>
            <img
              src={teamPhoto}
              alt="Capital Clean Care team members in branded uniforms ready for residential cleaning"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[4/5]"
              loading="eager"
            />
          </div>

          {/* Action photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <img src={cleanerBlinds} alt="Capital Clean Care team member cleaning window blinds with eco-friendly products" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={cleanerSupplies} alt="Professional carrying eco-friendly, non-toxic cleaning supplies for residential service" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" loading="lazy" />
            <img src={happyClient} alt="Happy Capital Clean Care client relaxing in a freshly cleaned home" className="rounded-xl shadow-md w-full aspect-[3/4] object-cover" loading="lazy" />
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Our Mission */}
            <h2 className="font-heading text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our mission is to provide the highest quality residential cleaning services in the DMV area while protecting the health of your family and the environment. We believe that a truly clean home should never come at the cost of your wellbeing. That's why every product we use is plant-based, non-toxic, and free from harsh chemicals — delivering sparkling results that are safe for children, pets, and the planet.
            </p>

            {/* Our Team */}
            <h2 className="font-heading text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-foreground leading-relaxed mb-6">
              Our teams are carefully selected and thoroughly vetted. Every cleaning professional undergoes comprehensive background checks, professional training, and ongoing quality assessments. When you open your door to a Capital Clean Care team, you can trust that you're welcoming experienced, trustworthy professionals into your home. We assign dedicated teams to recurring clients so they get to know your home, your preferences, and your priorities — delivering increasingly personalized results with every visit.
            </p>

            {/* Key Differentiators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {[
                { icon: Leaf, title: "Eco-Friendly Promise", desc: "We use only plant-based, non-toxic cleaning products. No harsh chemicals, no artificial fragrances — just effective, safe cleaning for your family and pets." },
                { icon: Shield, title: "Fully Protected", desc: "Licensed, bonded, and insured with comprehensive liability coverage. Every team member is background-checked for your complete peace of mind." },
                { icon: Heart, title: "100% Satisfaction Guaranteed", desc: "If you're not completely satisfied with any cleaning visit, we'll return within 24 hours to make it right at no additional charge — guaranteed." },
              ].map((item) => (
                <Card key={item.title}>
                  <CardContent className="p-6">
                    <item.icon className="h-8 w-8 text-accent mb-3" aria-hidden="true" />
                    <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Benefits Section */}
            <h2 className="font-heading text-2xl font-bold mb-6">Why Choose Capital Clean Care</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {[
                { icon: CheckCircle, text: "55-60 point detailed cleaning checklist on every visit" },
                { icon: Users, text: "Dedicated teams who learn your home and preferences" },
                { icon: Award, text: "Continuous training and quality improvement" },
                { icon: Leaf, text: "100% eco-friendly, non-toxic, plant-based products" },
                { icon: Shield, text: "Fully licensed, bonded, and insured" },
                { icon: Clock, text: "Flexible scheduling: Monday–Saturday, 8 AM–6 PM" },
                { icon: Star, text: "5.0-star Google rating from verified clients" },
                { icon: MapPin, text: "Serving MD, DC & Northern VA — local teams" },
              ].map((v, i) => (
                <div key={i} className="flex gap-3 items-start p-4 rounded-xl border border-border bg-card">
                  <v.icon className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                  <p className="text-sm text-foreground">{v.text}</p>
                </div>
              ))}
            </div>

            {/* Service Areas */}
            <h2 className="font-heading text-2xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-foreground leading-relaxed mb-4">
              Capital Clean Care proudly serves homeowners across the Washington DC metropolitan area, including:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-heading font-semibold mb-2">Maryland</h3>
                  <p className="text-sm text-muted-foreground">Montgomery, Frederick, Howard & Prince George's Counties — Rockville, Bethesda, Silver Spring, Germantown, Frederick, Columbia & more.</p>
                  <Link to="/maryland" className="text-accent text-sm font-medium mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all" aria-label="View Maryland cleaning services">
                    Explore MD <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-heading font-semibold mb-2">Washington, DC</h3>
                  <p className="text-sm text-muted-foreground">All four quadrants — Georgetown, Capitol Hill, Dupont Circle, Adams Morgan, Downtown & more.</p>
                  <Link to="/washington-dc" className="text-accent text-sm font-medium mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all" aria-label="View Washington DC cleaning services">
                    Explore DC <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-5">
                  <h3 className="font-heading font-semibold mb-2">Northern Virginia</h3>
                  <p className="text-sm text-muted-foreground">Arlington, Fairfax, McLean, Alexandria, Falls Church, Vienna, Tysons & surrounding areas.</p>
                  <Link to="/virginia" className="text-accent text-sm font-medium mt-2 inline-flex items-center gap-1 hover:gap-2 transition-all" aria-label="View Northern Virginia cleaning services">
                    Explore VA <ArrowRight className="h-3 w-3" />
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Testimonials */}
            <h2 className="font-heading text-2xl font-bold mb-6">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {testimonials.map((t, i) => (
                <Card key={i}>
                  <CardContent className="p-5">
                    <div className="flex gap-0.5 mb-3" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-foreground italic mb-3 text-sm leading-relaxed">"{t.text}"</p>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Our Values */}
            <h2 className="font-heading text-2xl font-bold mb-4">Our Values</h2>
            <div className="space-y-3 mb-12">
              <p className="text-foreground leading-relaxed">
                At Capital Clean Care, our values guide everything we do — from the products we select to the people we hire:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Consistency over shortcuts — every visit follows our detailed checklist",
                  "Environmental responsibility in every product and process",
                  "Transparency in pricing with no hidden fees or surprise charges",
                  "Respect for your home, your time, and your privacy",
                  "Continuous team training and quality improvement",
                  "Community involvement across the DMV region",
                ].map((v, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-sm text-foreground">{v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <FAQ faqs={aboutFaqs} />
          </div>
        </div>
      </section>

      {/* Contact & NAP Info */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="font-heading text-2xl font-bold mb-4">Contact Capital Clean Care</h2>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-accent" aria-hidden="true" /> 4111 Postgate Terrace, Silver Spring, MD 20906</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" aria-hidden="true" /> Mon–Sat: 8 AM–6 PM</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">Get Your Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551" aria-label="Call Capital Clean Care at (240) 704-2551">(240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-6">Get Your Free Quote</h2>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default About;