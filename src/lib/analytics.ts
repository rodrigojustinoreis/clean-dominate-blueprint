declare function gtag(...args: unknown[]): void;

export function trackPhoneClick(location: string) {
  if (typeof gtag === "undefined") return;
  gtag("event", "generate_lead", {
    event_category: "Phone",
    event_label: location,
  });
}

export function trackQuoteFormSubmit(service: string) {
  if (typeof gtag === "undefined") return;
  gtag("event", "generate_lead", {
    event_category: "Form",
    event_label: "quote_form",
    service_type: service,
  });
}

export function trackBookNowClick(location: string) {
  if (typeof gtag === "undefined") return;
  gtag("event", "begin_checkout", {
    event_category: "CTA",
    event_label: location,
  });
}
