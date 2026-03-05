import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { useSEO } from "@/hooks/useSEO";
import { getHubBySlug, getCityBySlug } from "@/data/locations";
import NotFound from "./NotFound";

const LocationHub = () => {
  const { stateSlug } = useParams<{ stateSlug: string }>();
  const hub = getHubBySlug(stateSlug || "");

  if (!hub) return <NotFound />;

  useSEO({ title: hub.metaTitle, description: hub.metaDescription });

  const hubCities = hub.citySlugs.map(getCityBySlug).filter(Boolean);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{hub.name}</h1>

          <div className="space-y-4 text-foreground leading-relaxed mb-12">
            {hub.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6">Our {hub.stateAbbr} Service Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {hubCities.map((city) => city && (
                <Card key={city.slug} className="group hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <Link to={`/locations/${city.slug}`} className="flex items-center gap-2 group-hover:text-accent transition-colors">
                      <MapPin className="h-4 w-4 text-accent shrink-0" />
                      <span className="font-medium">{city.name}{city.state !== "DC" ? `, ${city.state}` : ""}</span>
                      <ArrowRight className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <FAQ faqs={hub.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-6">Get a Free Quote in {hub.stateAbbr}</h2>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default LocationHub;
