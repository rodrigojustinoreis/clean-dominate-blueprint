import { useParams, Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import FAQ from "@/components/FAQ";
import { ServiceSchema, FAQSchema } from "@/components/SchemaMarkup";
import { useSEO } from "@/hooks/useSEO";
import { getServiceBySlug } from "@/data/services";
import { cities } from "@/data/locations";
import Breadcrumbs from "@/components/Breadcrumbs";
import NotFound from "./NotFound";

const topCities = cities.filter(c => !c.slug.includes("county")).slice(0, 8);

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) return <NotFound />;

  const { seoHelmet } = useSEO({ title: service.metaTitle, description: service.metaDescription, canonical: `https://capitalcleancare.com/services/${service.slug}` });

  return (
    <Layout>
      {seoHelmet}
      <ServiceSchema
        serviceName={service.name}
        description={service.shortDescription}
        url={`https://capitalcleancare.com/services/${service.slug}`}
      />
      <FAQSchema faqs={service.faqs} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }, { label: service.name }]} className="mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
          
          <div className="space-y-4 text-foreground leading-relaxed mb-12">
            {service.intro.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">What's Included — {service.whatsIncluded.length}-Point Checklist</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.whatsIncluded.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Benefits</h2>
            <div className="space-y-3">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          {service.testimonials && service.testimonials.length > 0 && (
            <div className="mb-12">
              <h2 className="font-heading text-2xl font-bold mb-6">What Our Clients Say About {service.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.testimonials.map((t, i) => (
                  <Card key={i}>
                    <CardContent className="p-5">
                      <div className="flex gap-0.5 mb-3">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="text-foreground italic mb-3 text-sm leading-relaxed">"{t.text}"</p>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.location}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Service Areas */}
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-4">Available In These Areas</h2>
            <div className="flex flex-wrap gap-2">
              {topCities.map((c) => (
                <Button key={c.slug} variant="outline" size="sm" asChild>
                  <Link to={`/locations/${c.slug}`}>{c.name}, {c.state}</Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6">{service.name} FAQ</h2>
            <FAQ faqs={service.faqs} />
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="font-heading text-3xl font-bold text-center mb-6">Get a Free {service.name} Quote</h2>
          <Card><CardContent className="p-6 md:p-8"><QuoteForm /></CardContent></Card>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
