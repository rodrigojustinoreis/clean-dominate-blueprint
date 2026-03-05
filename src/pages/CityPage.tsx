import { useParams, Link } from "react-router-dom";
import { CheckCircle, MapPin, ArrowRight, Phone, Shield, Leaf, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import PricingTable from "@/components/PricingTable";
import { useSEO } from "@/hooks/useSEO";
import { getCityBySlug } from "@/data/locations";
import { services } from "@/data/services";
import NotFound from "./NotFound";

const CityPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const city = getCityBySlug(slug || "");

  if (!city) return <NotFound />;

  useSEO({ title: city.metaTitle, description: city.metaDescription });

  const nearbyCities = city.nearbySlugs.map(getCityBySlug).filter(Boolean);
  const stateLabel = city.stateSlug === "maryland" ? "Maryland" : city.stateSlug === "washington-dc" ? "Washington DC" : "Virginia";

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-primary-foreground/60 text-sm mb-4">
            <Link to={`/${city.stateSlug}`} className="hover:text-primary-foreground transition-colors">
              {stateLabel}
            </Link>
            <span>/</span>
            <span className="text-primary-foreground/80">{city.name}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            House Cleaning Services in {city.name}{city.state !== "DC" ? `, ${city.state}` : ""}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Professional, eco-friendly house cleaning for {city.name} homes. Licensed, insured, and background-checked teams you can trust.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote">Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+12407042551"><Phone className="h-4 w-4 mr-2" /> (240) 704-2551</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Our Work in This Neighborhood */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">
            Our Work in {city.name}
          </h2>
          <div className="space-y-4 text-foreground leading-relaxed">
            {city.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services Available */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Cleaning Services in {city.name}</h2>
          <p className="text-muted-foreground mb-6">We bring the full range of Capital Clean Care services to {city.name}. Click any service to learn more.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((s) => (
              <Card key={s.slug} className="group hover:shadow-md transition-all hover:-translate-y-0.5">
                <CardContent className="p-5">
                  <Link to={`/services/${s.slug}`} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">{s.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.shortDescription}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Why {city.name} Homeowners Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Leaf, text: "Eco-friendly, non-toxic products safe for your family and pets" },
              { icon: Shield, text: "Fully licensed and insured for your complete protection" },
              { icon: CheckCircle, text: "Every team member is background-checked and trained" },
              { icon: Star, text: "100% satisfaction guarantee — we'll re-clean if needed" },
              { icon: MapPin, text: `Local teams that know ${city.name} neighborhoods` },
              { icon: Sparkles, text: "Flexible scheduling including weekday and Saturday" },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start p-3 rounded-lg border border-border">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm text-foreground mt-1.5">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Pricing in {city.name}</h2>
            <p className="text-muted-foreground">Estimated ranges by home size. Your actual price depends on bedrooms, bathrooms, condition, and cleaning type.</p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-heading text-2xl font-bold mb-4">What Affects Your Price in {city.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              "Number of bedrooms & bathrooms",
              "Type of service requested",
              "Current condition of the home",
              "Frequency (one-time vs. recurring)",
              "Number of levels / floors",
              "Special requests or add-ons",
            ].map((f, i) => (
              <div key={i} className="flex gap-2 items-center p-3 rounded-lg bg-secondary text-sm">
                <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-8">{city.name} Cleaning FAQ</h2>
          <FAQ faqs={city.faqs} />
        </div>
      </section>

      {/* Nearby Areas */}
      {nearbyCities.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="font-heading text-2xl font-bold mb-6">Nearby Areas We Serve</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {nearbyCities.map((nc) => nc && (
                <Button key={nc.slug} variant="outline" className="h-auto py-3 flex-col gap-1" asChild>
                  <Link to={`/locations/${nc.slug}`}>
                    <MapPin className="h-4 w-4 text-accent" />
                    <span className="text-xs font-medium">{nc.name}{nc.state !== "DC" ? `, ${nc.state}` : ""}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Quote Form */}
      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl font-bold mb-3">Get a Free Quote in {city.name}</h2>
            <p className="text-muted-foreground">Tell us about your {city.name} home and we'll respond with a personalized estimate.</p>
          </div>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
