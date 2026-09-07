import LegalDoc, { LegalSection, LEGAL_LIST } from "@/components/LegalDoc";
import { useSEO } from "@/hooks/useSEO";

const TermsOfService = () => {
  const { seoHelmet } = useSEO({
    title: "Terms of Service | Capital Clean Care",
    description: "Terms and conditions for Capital Clean Care's residential cleaning services in Maryland, DC & Virginia.",
    canonical: "https://capitalcleancare.com/terms-of-service",
  });

  return (
    <LegalDoc
      head={seoHelmet}
      title="Terms of Service"
      href="/terms-of-service"
      updated={{ iso: "2026-03-01", label: "March 1, 2026" }}
      sibling={{ label: "Privacy Policy", href: "/privacy-policy" }}
      wide
    >
      <LegalSection id="services" image={{ base: "/images/legal/terms-01-services", alt: "Capital Clean Care team member carrying a caddy of eco-friendly cleaning supplies into a bright living room" }} title="1. Services">
        <p>Capital Clean Care provides residential cleaning services throughout Maryland, Washington DC, and Northern Virginia. Services include standard cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, recurring cleaning, and eco-friendly cleaning.</p>
      </LegalSection>

      <LegalSection id="booking" title="2. Booking and Scheduling">
        <p>All bookings are subject to availability. We require a confirmed appointment before service delivery. Scheduling is managed through our website, phone, or email.</p>
      </LegalSection>

      <LegalSection id="pricing" title="3. Pricing and Payment">
        <p>Prices are provided as estimates based on home size, condition, and service type. Final pricing is confirmed before service. Payment is due upon completion of service unless otherwise arranged.</p>
      </LegalSection>

      <LegalSection id="cancellation" title="4. Cancellation Policy">
        <p>We request 24–48 hours notice for cancellations or rescheduling. No penalties apply for occasional schedule changes with adequate notice. Repeated same-day cancellations may result in a cancellation fee.</p>
      </LegalSection>

      <LegalSection id="guarantee" title="5. Satisfaction Guarantee">
        <p>We offer a 100% satisfaction guarantee. If you are not satisfied with any aspect of our service, contact us within 24 hours and we will return to re-clean the specified areas at no additional charge.</p>
      </LegalSection>

      <LegalSection id="liability" title="6. Liability and Insurance">
        <p>Capital Clean Care is fully licensed and insured. In the unlikely event of damage during cleaning, we will address the issue promptly. Please report any concerns within 24 hours of service completion.</p>
      </LegalSection>

      <LegalSection id="access" image={{ base: "/images/legal/terms-07-access", alt: "Team member unlocking the front door of a brick home with a house key" }} title="7. Access and Security">
        <p>You are responsible for providing safe access to your home. All team members are background-checked. If you provide keys, codes, or smart lock access, we will handle them with care and confidentiality.</p>
      </LegalSection>

      <LegalSection id="promotions" title="8. Promotional Offers">
        <p>Promotional codes and discounts are subject to terms specified at the time of offer. They cannot be combined unless explicitly stated and may have expiration dates.</p>
      </LegalSection>

      <LegalSection id="governing-law" title="9. Governing Law">
        <p>These terms are governed by the laws of the State of Maryland. Any disputes will be resolved in the courts of Montgomery County, Maryland.</p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact">
        <p>For questions about these terms:</p>
        <ul className={LEGAL_LIST}>
          <li>Email: info@capitalcleancare.com</li>
          <li>Phone: (240) 704-2551</li>
          <li>Address: 4111 Postgate Terrace, Silver Spring, MD 20906</li>
        </ul>
      </LegalSection>
    </LegalDoc>
  );
};

export default TermsOfService;
