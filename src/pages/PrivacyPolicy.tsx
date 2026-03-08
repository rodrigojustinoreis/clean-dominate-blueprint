import Layout from "@/components/layout/Layout";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSEO } from "@/hooks/useSEO";

const PrivacyPolicy = () => {
  const { seoHelmet } = useSEO({
    title: "Privacy Policy | Capital Clean Care",
    description: "Capital Clean Care's privacy policy. Learn how we collect, use, and protect your personal information.",
    canonical: "https://capitalcleancare.com/privacy-policy",
  });

  return (
    <Layout>
      {seoHelmet}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} className="mb-6" />
          <h1 className="font-heading text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-muted-foreground"><em>Last updated: March 1, 2026</em></p>

            <h2 className="font-heading">1. Information We Collect</h2>
            <p>Capital Clean Care ("we," "our," or "us") collects personal information you provide when requesting a quote, booking a service, or contacting us. This may include:</p>
            <ul>
              <li>Name, email address, and phone number</li>
              <li>Home address and service location</li>
              <li>Service preferences and scheduling details</li>
              <li>Communication preferences (SMS/email consent)</li>
            </ul>

            <h2 className="font-heading">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Provide and schedule cleaning services</li>
              <li>Communicate about your appointments and account</li>
              <li>Send promotional offers (only with your consent)</li>
              <li>Improve our services and website experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-heading">3. Information Sharing</h2>
            <p>We do not sell your personal information. We may share data with:</p>
            <ul>
              <li>Service providers who assist our operations (payment processing, scheduling software)</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="font-heading">4. Data Security</h2>
            <p>We implement industry-standard security measures to protect your personal information, including encrypted data transmission (HTTPS/TLS), secure data storage, and access controls.</p>

            <h2 className="font-heading">5. Your Rights</h2>
            <p>You may:</p>
            <ul>
              <li>Request access to your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Opt out of promotional communications at any time</li>
              <li>Withdraw SMS consent by texting STOP</li>
            </ul>

            <h2 className="font-heading">6. Cookies and Analytics</h2>
            <p>Our website uses cookies and analytics tools (including Google Analytics) to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>

            <h2 className="font-heading">7. Contact Us</h2>
            <p>For privacy questions or data requests, contact us at:</p>
            <ul>
              <li>Email: capitalcleancare@gmail.com</li>
              <li>Phone: (240) 704-2551</li>
              <li>Address: 4111 Postgate Terrace, Silver Spring, MD 20906</li>
            </ul>

            <h2 className="font-heading">8. Changes to This Policy</h2>
            <p>We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
