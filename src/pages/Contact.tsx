import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";

const Contact = () => {
  useSEO({
    title: "Contact Us | Capital Clean Care",
    description: "Get in touch with Capital Clean Care for a free house cleaning quote. Serving MD, DC & VA. Call (301) 555-1234 or fill out our form.",
  });

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Ready for a cleaner home? Reach out for a free, no-obligation quote.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="space-y-6">
              {[
                { icon: Phone, label: "Phone", value: "(301) 555-1234", href: "tel:+13015551234" },
                { icon: Mail, label: "Email", value: "hello@capitalcleancare.com", href: "mailto:hello@capitalcleancare.com" },
                { icon: Clock, label: "Hours", value: "Mon–Sat: 7 AM – 7 PM" },
                { icon: MapPin, label: "Service Area", value: "Maryland • DC • Northern Virginia" },
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

              {/* Map placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="bg-muted h-48 rounded-lg flex items-center justify-center text-muted-foreground">
                    <MapPin className="h-8 w-8 mr-2" /> Service Area Map
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-heading text-2xl font-bold mb-6">Get a Free Quote</h2>
                  <QuoteForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
