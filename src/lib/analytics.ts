declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const AW_PHONE_CALL = "AW-16450100951/srSCCMrk2bIcENe9gqQ9";
const AW_QUOTE_FORM = "AW-16450100951/9MghCM3k2bIcENe9gqQ9";

type AnalyticsParams = Record<string, string | number | boolean | undefined>;

function pageContext(): AnalyticsParams {
  if (typeof window === "undefined") return {};
  return {
    page_location: window.location.href,
    page_path: `${window.location.pathname}${window.location.search}`,
  };
}

function sendEvent(name: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, { ...pageContext(), ...params });
}

export function trackPhoneClick(location: string) {
  sendEvent("phone_click", { cta_location: location, lead_method: "phone" });
  sendEvent("generate_lead", { cta_location: location, lead_method: "phone" });
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: AW_PHONE_CALL });
  }
}

export function trackQuoteFormStart(service: string, formLocation: string, language = "en") {
  sendEvent("quote_form_start", {
    form_location: formLocation,
    service_type: service || "not_selected",
    language,
  });
}

export function trackQuoteFormSubmit(service: string, formLocation = "quote_form", language = "en") {
  const params = {
    form_location: formLocation,
    service_type: service || "not_selected",
    lead_method: "quote_form",
    language,
  };
  sendEvent("quote_form_submit", params);
  sendEvent("generate_lead", params);
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "conversion", {
      send_to: AW_QUOTE_FORM,
      value: 50,
      currency: "USD",
    });
  }
}

export function trackSmsClick(location: string) {
  sendEvent("sms_click", { cta_location: location, lead_method: "sms" });
}

export function trackEmailClick(location: string) {
  sendEvent("email_click", { cta_location: location, lead_method: "email" });
}

export function trackBookNowClick(location: string) {
  // A quote CTA is not a checkout. Reserve begin_checkout for a real
  // scheduling or payment flow so GA4 funnel reports stay meaningful.
  sendEvent("quote_cta_click", { cta_location: location });
}
