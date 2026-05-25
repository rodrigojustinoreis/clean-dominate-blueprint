declare function gtag(...args: unknown[]): void;

// Google Ads Conversion IDs
const AW_PHONE_CALL = "AW-16450100951/srSCCMrk2bIcENe9gqQ9";
const AW_QUOTE_FORM = "AW-16450100951/9MghCM3k2bIcENe9gqQ9";

export function trackPhoneClick(location: string) {
    if (typeof gtag === "undefined") return;
    // GA4 event
  gtag("event", "generate_lead", {
        event_category: "Phone",
        event_label: location,
  });
    // Google Ads conversion — Phone Call from Website
  gtag("event", "conversion", {
        send_to: AW_PHONE_CALL,
  });
}

export function trackQuoteFormSubmit(service: string) {
    if (typeof gtag === "undefined") return;
    // GA4 event
  gtag("event", "generate_lead", {
        event_category: "Form",
        event_label: "quote_form",
        service_type: service,
  });
    // Google Ads conversion — Quote Form Submit
  gtag("event", "conversion", {
        send_to: AW_QUOTE_FORM,
  });
}

export function trackBookNowClick(location: string) {
    if (typeof gtag === "undefined") return;
    gtag("event", "begin_checkout", {
          event_category: "CTA",
          event_label: location,
    });
}
