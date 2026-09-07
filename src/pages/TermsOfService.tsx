import { BadgeCheck, Calendar, CalendarX, DollarSign, FileText, KeyRound, Phone, Scale, ShieldCheck, Sparkles, Tag } from "lucide-react";
import LegalDoc, { LegalSection, LEGAL_LIST, LEGAL_LINK } from "@/components/LegalDoc";
import { useSEO } from "@/hooks/useSEO";

const DESCRIPTION = "Terms and conditions for Capital Clean Care's residential cleaning services in Maryland, DC & Virginia.";

const TermsOfService = () => {
  const { seoHelmet } = useSEO({
    title: "Terms of Service | Capital Clean Care",
    description: DESCRIPTION,
    canonical: "https://capitalcleancare.com/terms-of-service",
    preloadImage: [
      { href: "/images/legal/terms-01-services-640.webp", media: "(max-width: 1023px)" },
      { href: "/images/legal/terms-01-services.webp", media: "(min-width: 1024px)" },
    ],
  });

  return (
    <LegalDoc
      head={seoHelmet}
      title="Terms of Service"
      accentWord="Service"
      href="/terms-of-service"
      icon={FileText}
      updated={{ iso: "2026-03-01", label: "March 1, 2026" }}
      lede={DESCRIPTION}
      chips={[
        { label: "Booking", href: "#booking", icon: Calendar },
        { label: "Pricing", href: "#pricing", icon: DollarSign },
        { label: "Cancellation", href: "#cancellation", icon: CalendarX },
        { label: "Guarantee", href: "#guarantee", icon: BadgeCheck },
        { label: "Liability", href: "#liability", icon: ShieldCheck },
      ]}
      sibling={{ label: "Privacy Policy", href: "/privacy-policy" }}
      heroImage={{ base: "/images/legal/terms-01-services", alt: "Capital Clean Care team member carrying a caddy of eco-friendly cleaning supplies into a bright living room" }}
      badge={{ icon: ShieldCheck, text: "Licensed & insured · Background-checked team" }}
      contactPrompt="Questions about these terms?"
    >
      <LegalSection id="services" title="1. Services" icon={Sparkles}>
        <p>Capital Clean Care provides residential cleaning services throughout Maryland, Washington DC, and Northern Virginia. Services include standard cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleaning, recurring cleaning, and eco-friendly cleaning.</p>
      </LegalSection>

      <LegalSection id="booking" title="2. Booking and Scheduling" icon={Calendar}>
        <p>All bookings are subject to availability. We require a confirmed appointment before service delivery. Scheduling is managed through our website, phone, or email.</p>
      </LegalSection>

      <LegalSection id="pricing" title="3. Pricing and Payment" icon={DollarSign}>
        <p>Prices are provided as estimates based on home size, condition, and service type. Final pricing is confirmed before service. Payment is due upon completion of service unless otherwise arranged.</p>
      </LegalSection>

      <LegalSection id="cancellation" title="4. Cancellation Policy" icon={CalendarX}>
        <p>We request 24–48 hours notice for cancellations or rescheduling. No penalties apply for occasional schedule changes with adequate notice. Repeated same-day cancellations may result in a cancellation fee.</p>
      </LegalSection>

      <LegalSection id="guarantee" title="5. Satisfaction Guarantee" icon={BadgeCheck}>
        <p>We offer a 100% satisfaction guarantee. If you are not satisfied with any aspect of our service, contact us within 24 hours and we will return to re-clean the specified areas at no additional charge.</p>
      </LegalSection>

      <LegalSection id="liability" title="6. Liability and Insurance" icon={ShieldCheck}>
        <p>Capital Clean Care is fully licensed and insured. In the unlikely event of damage during cleaning, we will address the issue promptly. Please report any concerns within 24 hours of service completion.</p>
      </LegalSection>

      <LegalSection id="access" title="7. Access and Security" icon={KeyRound}>
        <p>You are responsible for providing safe access to your home. All team members are background-checked. If you provide keys, codes, or smart lock access, we will handle them with care and confidentiality.</p>
      </LegalSection>

      <LegalSection id="promotions" title="8. Promotional Offers" icon={Tag}>
        <p>Promotional codes and discounts are subject to terms specified at the time of offer. They cannot be combined unless explicitly stated and may have expiration dates.</p>
      </LegalSection>

      <LegalSection id="governing-law" title="9. Governing Law" icon={Scale}>
        <p>These terms are governed by the laws of the State of Maryland. Any disputes will be resolved in the courts of Montgomery County, Maryland.</p>
      </LegalSection>

      <LegalSection id="contact" title="10. Contact" icon={Phone}>
        <p>For questions about these terms:</p>
        <ul className={LEGAL_LIST}>
          <li>Email: <a href="mailto:info@capitalcleancare.com" className={LEGAL_LINK}>info@capitalcleancare.com</a></li>
          <li>Phone: <a href="tel:+12407042551" className={LEGAL_LINK}>(240) 704-2551</a></li>
          <li>Address: 4111 Postgate Terrace, Silver Spring, MD 20906</li>
        </ul>
      </LegalSection>
    </LegalDoc>
  );
};

export default TermsOfService;
