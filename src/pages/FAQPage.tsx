import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import FAQ from "@/components/FAQ";
import { FAQSchema } from "@/components/SchemaMarkup";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import QuoteForm from "@/components/QuoteForm";
import { useSEO } from "@/hooks/useSEO";

const faqCategories = [
  {
    title: "Serviços e Agendamento",
    faqs: [
      { q: "What cleaning services do you offer?", a: "We offer standard recurring cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, and eco-friendly green cleaning. Each service is tailored to your home's specific needs." },
      { q: "How do I schedule a cleaning?", a: "You can schedule by filling out our free quote form, calling us at (240) 704-2551, or emailing us. We typically respond within a few hours with availability and a personalized estimate." },
      { q: "Can I customize my cleaning plan?", a: "Absolutely. We work with you to create a cleaning checklist that matches your priorities. Whether you need extra attention in the kitchen or prefer certain rooms skipped, we adapt to your preferences." },
      { q: "Do you offer one-time or recurring cleaning?", a: "Both. We offer one-time deep cleans as well as weekly, bi-weekly, and monthly recurring plans. Recurring clients enjoy priority scheduling and consistent pricing." },
      { q: "What's your cancellation policy?", a: "We ask for 24–48 hours notice for cancellations or rescheduling. There are no penalties for occasional schedule changes." },
    ],
  },
  {
    title: "Preços e Pagamento",
    faqs: [
      { q: "How much does a cleaning cost?", a: "Pricing depends on your home's size, condition, and the type of cleaning. A standard cleaning for a 2-bedroom home typically starts around $150–$200. Request a free quote for an accurate estimate." },
      { q: "Do you charge by the hour or by the job?", a: "We charge by the job based on a flat-rate estimate. This means no surprises — you know the cost upfront before we start." },
      { q: "What payment methods do you accept?", a: "We accept all major credit and debit cards, ACH bank transfers, and digital payments. Payment is processed after the cleaning is completed." },
      { q: "Are there discounts for recurring service?", a: "Yes. Clients on weekly or bi-weekly plans receive discounted rates compared to one-time bookings. The more frequently we clean, the more you save." },
    ],
  },
  {
    title: "Confiança e Segurança",
    faqs: [
      { q: "Are your cleaners background-checked?", a: "Yes. Every team member undergoes a thorough background check before joining Capital Clean Care. Your safety and peace of mind are our top priorities." },
      { q: "Is Capital Clean Care licensed and insured?", a: "Absolutely. We are fully licensed, bonded, and insured. In the rare event of any issue, you're completely protected." },
      { q: "Do I need to be home during the cleaning?", a: "No. Many clients provide a key, door code, or smart lock access so we can clean while they're away. All team members are vetted and insured." },
      { q: "What if I'm not satisfied with the cleaning?", a: "We offer a satisfaction guarantee. If you're not happy with any part of our work, let us know within 24 hours and we'll re-clean the area at no extra charge." },
    ],
  },
  {
    title: "Produtos e Sustentabilidade",
    faqs: [
      { q: "What cleaning products do you use?", a: "We exclusively use plant-based, non-toxic cleaning products that are safe for children, pets, and the environment while delivering professional-grade results." },
      { q: "Are your products safe for pets and children?", a: "Yes. All our cleaning products are EPA Safer Choice certified, free from harsh chemicals, and completely safe for your entire family including pets." },
      { q: "Can I request specific products or supplies?", a: "Of course. If you have preferred products or specific sensitivities, let us know and we'll gladly accommodate your preferences." },
    ],
  },
  {
    title: "Áreas de Atendimento",
    faqs: [
      { q: "What areas do you serve?", a: "We serve communities throughout Maryland (Montgomery, Frederick, Howard, and Prince George's Counties), Washington DC, and Northern Virginia (Arlington, Fairfax, McLean, Alexandria, and more)." },
      { q: "Do you serve my specific neighborhood?", a: "We cover a wide area across the DMV region. If you're unsure whether we serve your location, contact us and we'll confirm availability right away." },
      { q: "Do you charge extra for travel to distant areas?", a: "For most locations within our service area, there is no travel surcharge. For areas outside our standard coverage, we'll discuss any additional costs upfront." },
    ],
  },
];

const allFaqs = faqCategories.flatMap((c) => c.faqs);

const FAQPage = () => {
  const { seoHelmet } = useSEO({
    title: "FAQ | Capital Clean Care — Frequently Asked Questions",
    description: "Find answers to common questions about Capital Clean Care's premium eco-friendly house cleaning services in Maryland, DC & Virginia.",
    canonical: "https://capitalcleancare.com/faq",
  });

  return (
    <Layout>
      {seoHelmet}
      <FAQSchema faqs={allFaqs} />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know about our premium eco-friendly cleaning
            services across Maryland, Washington DC & Northern Virginia.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-12">
          {faqCategories.map((category) => (
            <div key={category.title}>
              <h2 className="font-heading text-2xl font-bold mb-4 border-b border-border pb-2">
                {category.title}
              </h2>
              <FAQ faqs={category.faqs} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact us directly or request a free quote — we're happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="tel:+12407042551">Call (240) 704-2551</a>
            </Button>
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

export default FAQPage;
