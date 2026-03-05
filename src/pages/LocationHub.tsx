import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowRight, Shield, Leaf, CheckCircle, Star, Phone, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import PricingTable from "@/components/PricingTable";
import { useSEO } from "@/hooks/useSEO";
import { getHubBySlug, getCityBySlug } from "@/data/locations";
import { services } from "@/data/services";
import NotFound from "./NotFound";

const trustSignals = [
  { icon: Leaf, title: "Eco-Friendly", desc: "Plant-based, non-toxic products safe for families and pets." },
  { icon: Shield, title: "Licensed & Insured", desc: "Full coverage and liability protection." },
  { icon: CheckCircle, title: "Background-Checked", desc: "Every team member is thoroughly vetted." },
  { icon: Star, title: "Satisfaction Guaranteed", desc: "Not happy? We'll re-clean at no charge." },
];

const testimonialsByState: Record<string, { name: string; location: string; text: string }[]> = {
  MD: [
    { name: "Sarah M.", location: "Bethesda, MD", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products safe for my kids and pets." },
    { name: "David R.", location: "Rockville, MD", text: "Consistent quality every visit. Our dedicated team knows our home perfectly. Best cleaning service in Montgomery County." },
  ],
  DC: [
    { name: "Lauren K.", location: "Capitol Hill, DC", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust." },
    { name: "Monica J.", location: "Georgetown, DC", text: "They handle our historic Georgetown rowhouse with care. Love the eco-friendly products and flexible scheduling." },
  ],
  VA: [
    { name: "James T.", location: "Arlington, VA", text: "We've used their bi-weekly service for six months and every visit exceeds expectations. Highly recommend!" },
    { name: "Priya S.", location: "McLean, VA", text: "Professional, reliable, and always on time. Our McLean home has never looked better." },
  ],
};

const LocationHub = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const hub = getHubBySlug(stateSlug || "");

  if (!hub) return <NotFound />;

  useSEO({ title: hub.metaTitle, description: hub.metaDescription });

  const hubCities = hub.citySlugs.map(getCityBySlug).filter(Boolean);
  const reviews = testimonialsByState[hub.stateAbbr] || [];

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{hub.name}</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mb-8">
            Premium, eco-friendly house cleaning across {hub.stateAbbr === "MD" ? "Maryland" : hub.stateAbbr === "DC" ? "Washington, DC" : "Northern Virginia"}. Background-checked teams, flexible plans, satisfaction guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4 text-foreground leading-relaxed">
            {hub.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-3">Our {hub.stateAbbr} Service Areas</h2>
            <p className="text-muted-foreground">Click on any area to learn more about our services in your neighborhood.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {hubCities.map((city) => city && (
              <Card key={city.slug} className="group hover:shadow-lg transition-all hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <Link to={`/locations/${city.slug}`} className="block">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-accent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors">
                          {city.name}{city.state !== "DC" ? `, ${city.state}` : ""}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {city.intro.split(".")[0]}.
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="font-heading text-3xl font-bold mb-3">Services We Offer in {hub.stateAbbr === "MD" ? "Maryland" : hub.stateAbbr === "DC" ? "DC" : "Northern Virginia"}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <Card key={s.slug} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Sparkles className="h-7 w-7 text-accent mb-3" />
                  <h3 className="font-heading text-lg font-semibold mb-2">{s.name}</h3>
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
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-10">Why Choose Capital Clean Care</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((t) => (
              <Card key={t.title}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-3">
                    <t.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{t.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Sample Pricing</h2>
            <p className="text-muted-foreground">Estimated ranges by home size and cleaning frequency.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Reviews */}
      {reviews.length > 0 && (
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="font-heading text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reviews.map((r, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-foreground italic mb-4">"{r.text}"</p>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.location}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <FAQ faqs={hub.faqs} />
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Get a Free Quote in {hub.stateAbbr === "MD" ? "Maryland" : hub.stateAbbr === "DC" ? "Washington, DC" : "Northern Virginia"}</h2>
            <p className="text-muted-foreground">Fill out the form and we'll respond with a personalized estimate.</p>
          </div>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default LocationHub;
