import { ClipboardList, Cookie, History, Lock, Mail, Share2, ShieldCheck, UserCheck, Workflow } from "lucide-react";
import LegalDoc, { LegalSection, LEGAL_LIST, LEGAL_LINK } from "@/components/LegalDoc";
import { useSEO } from "@/hooks/useSEO";

const DESCRIPTION = "Capital Clean Care's privacy policy. Learn how we collect, use, and protect your personal information.";

const PrivacyPolicy = () => {
  const { seoHelmet } = useSEO({
    title: "Privacy Policy | Capital Clean Care",
    description: DESCRIPTION,
    canonical: "https://capitalcleancare.com/privacy-policy",
    preloadImage: [
      { href: "/images/legal/terms-10-contact-640.webp", media: "(max-width: 1023px)" },
      { href: "/images/legal/terms-10-contact.webp", media: "(min-width: 1024px)" },
    ],
  });

  return (
    <LegalDoc
      head={seoHelmet}
      title="Privacy Policy"
      accentWord="Policy"
      href="/privacy-policy"
      icon={ShieldCheck}
      updated={{ iso: "2026-03-01", label: "March 1, 2026" }}
      lede={DESCRIPTION}
      chips={[
        { label: "What we collect", href: "#information-we-collect", icon: ClipboardList },
        { label: "How we use it", href: "#how-we-use", icon: Workflow },
        { label: "Your rights", href: "#your-rights", icon: UserCheck },
        { label: "Cookies", href: "#cookies", icon: Cookie },
      ]}
      sibling={{ label: "Terms of Service", href: "/terms-of-service" }}
      heroImage={{ base: "/images/legal/terms-10-contact", alt: "Capital Clean Care team member on the phone in a bright hallway" }}
      badge={{ icon: Lock, text: "HTTPS/TLS encrypted · We do not sell your personal information" }}
      contactPrompt="Privacy questions or data requests?"
    >
      <LegalSection id="information-we-collect" title="1. Information We Collect" icon={ClipboardList}>
        <p>Capital Clean Care ("we," "our," or "us") collects personal information you provide when requesting a quote, booking a service, or contacting us. This may include:</p>
        <ul className={LEGAL_LIST}>
          <li>Name, email address, and phone number</li>
          <li>Home address and service location</li>
          <li>Service preferences and scheduling details</li>
          <li>Communication preferences (SMS/email consent)</li>
        </ul>
      </LegalSection>

      <LegalSection id="how-we-use" title="2. How We Use Your Information" icon={Workflow}>
        <p>We use your information to:</p>
        <ul className={LEGAL_LIST}>
          <li>Provide and schedule cleaning services</li>
          <li>Communicate about your appointments and account</li>
          <li>Send promotional offers (only with your consent)</li>
          <li>Improve our services and website experience</li>
          <li>Comply with legal obligations</li>
        </ul>
      </LegalSection>

      <LegalSection id="sharing" title="3. Information Sharing" icon={Share2}>
        <p>We do not sell your personal information. We may share data with:</p>
        <ul className={LEGAL_LIST}>
          <li>Service providers who assist our operations (payment processing, scheduling software)</li>
          <li>Legal authorities when required by law</li>
        </ul>
      </LegalSection>

      <LegalSection id="security" title="4. Data Security" icon={Lock}>
        <p>We implement industry-standard security measures to protect your personal information, including encrypted data transmission (HTTPS/TLS), secure data storage, and access controls.</p>
      </LegalSection>

      <LegalSection id="your-rights" title="5. Your Rights" icon={UserCheck}>
        <p>You may:</p>
        <ul className={LEGAL_LIST}>
          <li>Request access to your personal data</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt out of promotional communications at any time</li>
          <li>Withdraw SMS consent by texting STOP</li>
        </ul>
      </LegalSection>

      <LegalSection id="cookies" title="6. Cookies and Analytics" icon={Cookie}>
        <p>Our website uses cookies and analytics tools (including Google Analytics) to understand how visitors use our site. You can control cookie preferences through your browser settings.</p>
      </LegalSection>

      <LegalSection id="contact" title="7. Contact Us" icon={Mail}>
        <p>For privacy questions or data requests, contact us at:</p>
        <ul className={LEGAL_LIST}>
          <li>Email: <a href="mailto:info@capitalcleancare.com" className={LEGAL_LINK}>info@capitalcleancare.com</a></li>
          <li>Phone: <a href="tel:+12407042551" className={LEGAL_LINK}>(240) 704-2551</a></li>
          <li>Address: 4111 Postgate Terrace, Silver Spring, MD 20906</li>
        </ul>
      </LegalSection>

      <LegalSection id="changes" title="8. Changes to This Policy" icon={History}>
        <p>We may update this privacy policy periodically. Changes will be posted on this page with an updated revision date.</p>
      </LegalSection>
    </LegalDoc>
  );
};

export default PrivacyPolicy;
