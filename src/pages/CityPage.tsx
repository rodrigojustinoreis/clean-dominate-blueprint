import { useParams, Link } from "react-router-dom";
import { CheckCircle, MapPin, ArrowRight, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
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

  return (
    <Layout>
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center gap-2 text-primary-foreground/70 text-sm mb-4">
            <Link to={`/${city.stateSlug}`} className="hover:text-primary-foreground transition-colors">
              {city.stateSlug === "maryland" ? "Maryland" : city.stateSlug === "washington-dc" ? "Washington DC" : "Virginia"}
            </Link>
            <span>/</span>
            <span>{city.name}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            House Cleaning Services in {city.name}{city.state !== "DC" ? `, ${city.state}` : ""}
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Professional, eco-friendly house cleaning for {city.name} homes. Licensed, insured, and background-checked teams you can trust.
          </p>
          <div className="flex gap-3 mt-6">
            <Button variant="cta" size="lg" asChild>
              <a href="#quote">Get a Free Quote</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+13015551234"><Phone className="h-4 w-4 mr-2" /> Call Now</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Intro */}
          <div className="space-y-4 text-foreground leading-relaxed mb-12">
            {city.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Services */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Cleaning Services Available in {city.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="flex items-center gap-2 p-3 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  <span className="font-medium text-sm">{s.name}</span>
                  <ArrowRight className="h-3 w-3 ml-auto text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Why {city.name} Homeowners Choose Capital Clean Care</h2>
            <div className="space-y-3">
              {[
                "Eco-friendly, non-toxic products safe for your family and pets",
                "Every team member is background-checked and professionally trained",
                "Fully licensed and insured for your complete protection",
                "Flexible scheduling including weekday and Saturday availability",
                "100% satisfaction guarantee — we'll re-clean if you're not happy",
                "Dedicated teams that learn your home and preferences",
              ].map((point, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Factors */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Cleaning Pricing Factors in {city.name}</h2>
            <p className="text-muted-foreground mb-4">Every home is unique, so we provide personalized quotes rather than one-size-fits-all pricing. Factors that influence your quote include:</p>
            <ul className="space-y-2 text-sm">
              {[
                "Home size (number of bedrooms and bathrooms)",
                "Type of service (standard, deep cleaning, move-in/out, etc.)",
                "Current condition of the home",
                "Frequency of service (one-time vs. recurring)",
                "Special requests or add-on services",
              ].map((f, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <span className="text-accent font-bold">•</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6">{city.name} Cleaning FAQ</h2>
            <FAQ faqs={city.faqs} />
          </div>

          {/* Nearby Areas */}
          {nearbyCities.length > 0 && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-4">Nearby Areas We Serve</h2>
              <div className="flex flex-wrap gap-2">
                {nearbyCities.map((nc) => nc && (
                  <Button key={nc.slug} variant="outline" size="sm" asChild>
                    <Link to={`/locations/${nc.slug}`}>
                      <MapPin className="h-3 w-3 mr-1" />
                      {nc.name}{nc.state !== "DC" ? `, ${nc.state}` : ""}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-secondary" id="quote">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-6">Get a Free Quote in {city.name}</h2>
          <p className="text-muted-foreground text-center mb-6">Fill out the form and we'll respond with a personalized estimate for your {city.name} home.</p>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
