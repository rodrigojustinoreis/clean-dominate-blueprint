import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";
import { LocalBusinessSchema, ContactPageSchema, BreadcrumbSchema } from "@/components/SchemaMarkup";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";

const Contact = () => {
  const { seoHelmet } = useSEO({
    title: "Get a Free Cleaning Quote in MD, DC & VA | Capital Clean Care",
    description: "Request your free house cleaning quote from Capital Clean Care. Serving Maryland, DC & Virginia. Call (240) 704-2551 or fill out our form — 15% off first clean!",
    canonical: "https://capitalcleancare.com/contact",
  });

  return (
    <Layout>
      {seoHelmet}
      <LocalBusinessSchema />
      <ContactPageSchema />
      <BreadcrumbSchema items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} className="mb-6" />
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Ready for a cleaner home? Reach out for a free, no-obligation quote.</p>
          </div>

          {/* Quote Form — top */}
          <Card className="max-w-3xl mx-auto mb-12">
            <CardContent className="p-6 md:p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">Get a Free Quote</h2>
              <QuoteForm />
            </CardContent>
          </Card>

          {/* Contact info + map */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Phone, label: "Phone", value: "(240) 704-2551", href: "tel:+12407042551" },
              // TODO: update to hello@capitalcleancare.com when domain email is configured
              { icon: Mail, label: "Email", value: "capitalcleancare@gmail.com", href: "mailto:capitalcleancare@gmail.com" },
              { icon: Clock, label: "Hours", value: "Mon–Sat: 8 AM – 6 PM" },
              { icon: MapPin, label: "Address", value: "4111 Postgate Terrace, Silver Spring, MD 20906" },
            ].map((item) => (
              <Card key={item.label}>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-accent transition-colors">{item.value}</a>
                    ) : (
                      <p className="font-semibold">{item.value}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Google Maps */}
          <Card className="max-w-5xl mx-auto mt-8">
            <CardContent className="p-0 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3098.5!2d-77.02!3d39.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4111+Postgate+Terrace+Silver+Spring+MD+20906!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Capital Clean Care location"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <TrustBadges compact withBackground={false} />
    </Layout>
  );
};

export default Contact;
