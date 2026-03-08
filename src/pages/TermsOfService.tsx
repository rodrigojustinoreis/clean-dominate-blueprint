import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";

const TermsOfService = () => {
  const { seoHelmet } = useSEO({
    title: "Terms of Service | Capital Clean Care",
    description: "Terms and conditions for Capital Clean Care's residential cleaning services in Maryland, DC & Virginia.",
    canonical: "https://capitalcleancare.com/terms-of-service",
  });

  return (
    <Layout>
      {seoHelmet}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]} className="mb-6" />
          <h1 className="font-heading text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground"><em>Last updated: March 1, 2026</em></p>

            <h2 className="font-heading">1. Services</h2>
            <p>Capital Clean Care provides residential cleaning services throughout Maryland, Washington DC, and Northern Virginia. Services include standard cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, recurring cleaning, and eco-friendly cleaning.</p>

            <h2 className="font-heading">2. Booking and Scheduling</h2>
            <p>All bookings are subject to availability. We require a confirmed appointment before service delivery. Scheduling is managed through our website, phone, or email.</p>

            <h2 className="font-heading">3. Pricing and Payment</h2>
            <p>Prices are provided as estimates based on home size, condition, and service type. Final pricing is confirmed before service. Payment is due upon completion of service unless otherwise arranged.</p>

            <h2 className="font-heading">4. Cancellation Policy</h2>
            <p>We request 24–48 hours notice for cancellations or rescheduling. No penalties apply for occasional schedule changes with adequate notice. Repeated same-day cancellations may result in a cancellation fee.</p>

            <h2 className="font-heading">5. Satisfaction Guarantee</h2>
            <p>We offer a 100% satisfaction guarantee. If you are not satisfied with any aspect of our service, contact us within 24 hours and we will return to re-clean the specified areas at no additional charge.</p>

            <h2 className="font-heading">6. Liability and Insurance</h2>
            <p>Capital Clean Care is fully licensed and insured. In the unlikely event of damage during cleaning, we will address the issue promptly. Please report any concerns within 24 hours of service completion.</p>

            <h2 className="font-heading">7. Access and Security</h2>
            <p>You are responsible for providing safe access to your home. All team members are background-checked. If you provide keys, codes, or smart lock access, we will handle them with care and confidentiality.</p>

            <h2 className="font-heading">8. Promotional Offers</h2>
            <p>Promotional codes and discounts are subject to terms specified at the time of offer. They cannot be combined unless explicitly stated and may have expiration dates.</p>

            <h2 className="font-heading">9. Governing Law</h2>
            <p>These terms are governed by the laws of the State of Maryland. Any disputes will be resolved in the courts of Montgomery County, Maryland.</p>

            <h2 className="font-heading">10. Contact</h2>
            <p>For questions about these terms:</p>
            <ul>
              <li>Email: capitalcleancare@gmail.com</li>
              <li>Phone: (240) 704-2551</li>
              <li>Address: 4111 Postgate Terrace, Silver Spring, MD 20906</li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;
