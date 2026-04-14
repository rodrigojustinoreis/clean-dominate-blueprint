import { Link } from "react-router-dom";
import { MapPin, CheckCircle, Star, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import TrustBadges from "@/components/TrustBadges";
import FAQ from "@/components/FAQ";
import { LocalBusinessSchema, FAQSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";

const areas = [
  { name: "Silver Spring", state: "MD", slug: "silver-spring-md" },
  { name: "Rockville", state: "MD", slug: "rockville-md" },
  { name: "Bethesda", state: "MD", slug: "bethesda-md" },
  { name: "Gaithersburg", state: "MD", slug: "gaithersburg-md" },
  { name: "Germantown", state: "MD", slug: "germantown-md" },
  { name: "Frederick", state: "MD", slug: "frederick-md" },
  { name: "Washington", state: "DC", slug: "washington-dc" },
  { name: "Arlington", state: "VA", slug: "arlington-va" },
  { name: "Alexandria", state: "VA", slug: "alexandria-va" },
  { name: "McLean", state: "VA", slug: "mclean-va" },
  { name: "Fairfax", state: "VA", slug: "fairfax-va" },
  { name: "Reston", state: "VA", slug: "reston-va" },
];

const faqs = [
  { q: "How do I find a reliable house cleaning service near me?", a: "Capital Clean Care serves Maryland, Washington DC, and Northern Virginia with licensed, insured, and background-checked cleaning teams. Call (240) 704-2551 or fill out our quote form to book your first cleaning." },
  { q: "What areas near me do you cover?", a: "We cover communities throughout Montgomery, Frederick, Howard, and Prince George's Counties in Maryland, all of Washington DC, and Northern Virginia including Arlington, Fairfax, McLean, Alexandria, and Reston." },
  { q: "How much does house cleaning near me cost?", a: "A standard cleaning for a 1-2 bedroom home starts at $100–$150. Larger homes range $150–$350+. Recurring clients save up to 25%. Request a free quote for your exact price." },
  { q: "Can I get same-week house cleaning?", a: "Yes, we often have availability within the same week. Call (240) 704-2551 or use our quote form and we'll confirm the earliest available slot near you." },
  { q: "Are your cleaners background checked?", a: "Every Capital Clean Care team member passes a thorough background check before joining our team. We are fully licensed, bonded, and insured for your peace of mind." },
  { q: "Do you bring your own cleaning supplies?", a: "Yes. We bring all supplies and equipment, including our eco-friendly, non-toxic plant-based products. No need to provide anything." },
];

const testimonials = [
  { name: "Patricia W.", location: "Silver Spring, MD", text: "Searched 'house cleaning near me' and found Capital Clean Care. Best decision ever. They show up on time, do an incredible job, and the eco-friendly products are a bonus." },
  { name: "Kevin M.", location: "Rockville, MD", text: "After trying 3 different cleaning services in my area, Capital Clean Care is by far the best. Consistent, thorough, and professional every single time." },
  { name: "Diana T.", location: "Arlington, VA", text: "I needed cleaning near me fast before a family visit. They fit me in within 2 days and the house was spotless. Highly recommend to anyone in the DMV area." },
];

const HouseCleaningNearMe = () => {
  const { seoHelmet } = useSEO({
    title: "House Cleaning Near Me in MD, DC & VA | Capital Clean Care",
    description: "Looking for house cleaning near you? Capital Clean Care serves Maryland, Washington DC & Northern Virginia. Background-checked teams, eco-friendly products. Free quote!",
    canonical: "https://capitalcleancare.com/house-cleaning-near-me",
    ogImage: "https://capitalcleancare.com/og-image.jpg",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "House Cleaning Near Me", href: "/house-cleaning-near-me" }]} />
      <FAQSchema faqs={faqs} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-5 w-5 text-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Serving MD, DC & VA</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            House Cleaning Near Me
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Professional, eco-friendly house cleaning serving Maryland, Washington DC, and Northern Virginia. Background-checked teams, non-toxic products, 5-star results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+12407042551"><Phone className="mr-2 h-4 w-4" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-10 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto text-center">
            {[
              { label: "Licensed & Insured", sub: "Full coverage" },
              { label: "Background-Checked", sub: "Every team member" },
              { label: "Eco-Friendly", sub: "Non-toxic products" },
              { label: "5-Star Rated", sub: "150+ happy clients" },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-semibold text-sm text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-center">
            Why Choose Capital Clean Care Near You?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Licensed, bonded & fully insured for your protection",
              "Background-checked and vetted cleaning professionals",
              "EPA Safer Choice certified, non-toxic eco products",
              "Consistent dedicated teams who know your home",
              "Flexible scheduling — weekdays, weekends & same-week",
              "100% satisfaction guarantee — we re-clean if needed",
              "Transparent pricing — no hidden fees or surprises",
              "Serving MD, DC & VA for 9+ years",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-4 text-center">
            House Cleaning Near You — Service Areas
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Find house cleaning in your city. We serve communities across the DMV region.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {areas.map((area) => (
              <Link
                key={area.slug}
                to={`/locations/${area.slug}`}
                className="group block"
              >
                <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 h-full">
                  <CardContent className="p-4 text-center">
                    <MapPin className="h-4 w-4 text-accent mx-auto mb-1" />
                    <p className="font-semibold text-sm">{area.name}</p>
                    <p className="text-xs text-muted-foreground">{area.state}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8 flex flex-wrap gap-3 justify-center">
            <Button variant="outline" size="sm" asChild>
              <Link to="/maryland">All Maryland Locations <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/washington-dc">Washington DC <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link to="/virginia">Northern Virginia <ArrowRight className="ml-1 h-3 w-3" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center">
            Cleaning Services Available Near You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { name: "House Cleaning", slug: "house-cleaning", desc: "Regular upkeep to keep your home fresh and tidy." },
              { name: "Deep Cleaning", slug: "deep-cleaning", desc: "Top-to-bottom intensive cleaning for a full reset." },
              { name: "Move In / Move Out", slug: "move-out-cleaning", desc: "Thorough cleaning for property transitions." },
              { name: "Recurring Cleaning", slug: "recurring-cleaning", desc: "Weekly, bi-weekly or monthly plans with up to 25% off." },
              { name: "Eco-Friendly Cleaning", slug: "eco-friendly-cleaning", desc: "Non-toxic, plant-based products safe for kids & pets." },
              { name: "Airbnb Cleaning", slug: "airbnb-cleaning", desc: "Fast turnover cleaning for short-term rentals." },
            ].map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="group block">
                <Card className="hover:shadow-md transition-all hover:-translate-y-0.5 h-full">
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{s.name}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                    <span className="text-accent text-xs font-medium mt-2 inline-flex items-center gap-1">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">What Neighbors Near You Are Saying</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <Card key={i}>
                <CardContent className="p-5">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-sm italic text-foreground mb-3">"{t.text}"</p>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">
            House Cleaning Near Me — FAQ
          </h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges compact />

      {/* Quote Form */}
      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-6">
            Get a Free Quote for Cleaning Near You
          </h2>
          <Card className="shadow-xl">
            <CardContent className="p-6 md:p-10">
              <QuoteForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default HouseCleaningNearMe;
