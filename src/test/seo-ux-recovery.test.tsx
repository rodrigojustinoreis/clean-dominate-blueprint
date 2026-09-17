/**
 * SEO/UX recovery batch (2026-09-17, worklist of 28 non-indexed URLs).
 * Route-level checks through the prerender providers (eager AppRoutes) plus jsdom mounts for the sticky bar.
 * Helmet output and JSON-LD are not captured under jsdom; the SEO layer is verified on the built dist by the gate script.
 */
import { describe, it, expect, vi } from "vitest";
import { Suspense, act } from "react";
import { renderToString } from "react-dom/server";
import { render } from "@testing-library/react";
import { MemoryRouter, StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import { getServiceLocationOverride } from "@/data/service-location-overrides";

vi.mock("@/lib/analytics", () => ({ trackPhoneClick: vi.fn(), trackBookNowClick: vi.fn() }));

class ObserverStub { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
const g = globalThis as unknown as { ResizeObserver?: unknown; IntersectionObserver?: unknown };
if (typeof g.ResizeObserver === "undefined") g.ResizeObserver = ObserverStub;
if (typeof g.IntersectionObserver === "undefined") g.IntersectionObserver = ObserverStub;

const providers = (router: React.ReactNode) => (
  <HelmetProvider>
    <QueryClientProvider client={new QueryClient({ defaultOptions: { queries: { retry: false } } })}>
      <TooltipProvider>{router}</TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);
const renderMain = (url: string) => {
  const html = renderToString(providers(<StaticRouter location={url}><Suspense fallback={null}><AppRoutes /></Suspense></StaticRouter>));
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? html;
  return main.replace(/<!-- -->/g, "").replace(/&#x27;/g, "'").replace(/&amp;/g, "&");
};
const count = (s: string, needle: string) => s.split(needle).length - 1;
const text = (main: string) => main.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");

const DEDICATED = [
  "/locations/bethesda-md/airbnb-cleaning",
  "/locations/bethesda-md/move-out-cleaning",
  "/locations/chevy-chase-md/deep-cleaning",
  "/locations/chevy-chase-md/house-cleaning",
  "/locations/chevy-chase-md/move-out-cleaning",
  "/locations/chevy-chase-md/post-construction-cleaning",
  "/locations/gaithersburg-md/airbnb-cleaning",
  "/locations/germantown-md/move-out-cleaning",
  "/locations/kensington-md/house-cleaning",
];

describe("dedicated pages of the worklist — hero CTAs before pills, no shared availability defaults", () => {
  for (const url of DEDICATED) {
    it(url, () => {
      const main = renderMain(url);
      const cta = main.indexOf('href="#quote"');
      const pills = main.indexOf("Latino-Owned & Operated");
      expect(cta).toBeGreaterThan(-1);
      expect(pills).toBeGreaterThan(-1);
      expect(cta).toBeLessThan(pills);
      expect(main).toContain("max-w-md flex-col");
      const t = text(main);
      expect(t).not.toMatch(/same-day slots/i);
      expect(t).not.toContain("Same Team Every Visit");
      expect(t).not.toContain("so you get your deposit back");
      expect(main).toMatch(/<h1[^>]*>[^<]+<\/h1>/);
    });
  }
});

describe("Layout sticky bar — exactly one bar per route with the page-local href; controls keep defaults", () => {
  const bars = () => [...document.querySelectorAll("div.fixed.bottom-0")].filter((d) => /Free Quote|Cotización Gratis/.test(d.textContent ?? ""));
  const CASES: [string, string][] = [
    ...DEDICATED.map((u): [string, string] => [u, "#quote"]),
    ["/why-eco-friendly-cleaning", "#quote"], // support page that owns a #quote form
    ["/spring-cleaning-md", "#spring-quote"], // gate 2: sticky bar targets the page's own form
    ["/locations/kentlands-md/house-cleaning", "/contact#quote"], // template page (ServiceLocationPage): unchanged default
    ["/locations/bowie-md", "/contact#quote"], // hub: unchanged default
    ["/es/areas/rockville-md", "/es/contacto#cotizacion"],
  ];
  for (const [url, href] of CASES) {
    it(`${url} → 1 bar, href ${href}, dismiss removes it`, () => {
      const { unmount } = render(providers(<MemoryRouter initialEntries={[url]}><Suspense fallback={null}><AppRoutes /></Suspense></MemoryRouter>));
      const quoteSection = document.getElementById("quote");
      if (quoteSection) quoteSection.getBoundingClientRect = () => ({ top: 5000, bottom: 5600, left: 0, right: 0, width: 0, height: 600, x: 0, y: 5000, toJSON: () => ({}) }) as DOMRect;
      Object.defineProperty(window, "scrollY", { value: 600, configurable: true });
      act(() => { window.dispatchEvent(new Event("scroll")); });
      const found = bars();
      expect(found).toHaveLength(1);
      const quote = [...found[0].querySelectorAll("a")].find((a) => /Free Quote|Cotización Gratis/.test(a.textContent ?? ""));
      expect(quote).toHaveAttribute("href", href);
      const dismiss = found[0].querySelector('button[aria-label="Dismiss"]') as HTMLButtonElement;
      act(() => { dismiss.click(); });
      expect(bars()).toHaveLength(0);
      unmount();
    });
  }
});

describe("template pages — shared team photos no longer claim a city in alt text", () => {
  const KEYS = ["adams-morgan-dc/house-cleaning", "boyds-md/deep-cleaning", "burtonsville-md/deep-cleaning", "capitol-hill-dc/house-cleaning", "damascus-md/move-out-cleaning", "damascus-md/office-cleaning", "kentlands-md/house-cleaning", "mclean-va/house-cleaning", "montgomery-village-md/house-cleaning", "navy-yard-dc/eco-friendly-cleaning"];
  const CITY = /Damascus|Kentlands|Montgomery Village|Capitol Hill|Burtonsville|Adams Morgan|Boyds|Navy Yard|McLean/;
  for (const key of KEYS) {
    it(key, () => {
      const [city, service] = key.split("/");
      const photos = getServiceLocationOverride(city, service)?.photos ?? [];
      expect(photos.length).toBeGreaterThan(0);
      for (const p of photos) expect(p.alt).not.toMatch(CITY);
    });
  }
  it("a key outside the worklist keeps its original alt (data untouched elsewhere)", () => {
    const photos = getServiceLocationOverride("mount-airy-md", "house-cleaning")?.photos ?? [];
    expect(photos.some((p) => /Mount Airy/.test(p.alt))).toBe(true);
  });
});

describe("hubs — true neighbour links give Bowie and Boyds an indexable inbound link", () => {
  it("College Park hub links Bowie; Clarksburg hub links Boyds", () => {
    expect(renderMain("/locations/college-park-md")).toContain('href="/locations/bowie-md"');
    expect(renderMain("/locations/clarksburg-md")).toContain('href="/locations/boyds-md"');
  });
});

describe("support content — CTAs stay on a page that owns a quote form", () => {
  it("why-eco-friendly-cleaning: hero and inline CTAs target the page's own #quote", () => {
    const main = renderMain("/why-eco-friendly-cleaning");
    expect(main).toContain('id="quote"');
    expect(count(main, 'href="#quote"')).toBeGreaterThanOrEqual(2);
    expect(main).not.toContain('href="/contact"');
    const t = text(main);
    expect(t).not.toContain("49% higher risk");
    expect(t).not.toContain("recommended by allergists and pulmonologists");
    expect(t).not.toContain("eliminates this risk entirely");
    expect(t).not.toContain("proven to kill 99.9%");
    expect(t).toContain("Parks et al.");
  });
  it("how-long-does-deep-cleaning-take: quote CTAs go to /services/deep-cleaning#quote", () => {
    const main = renderMain("/resources/how-long-does-deep-cleaning-take");
    expect(count(main, 'href="/services/deep-cleaning#quote"')).toBe(4);
    expect(main).not.toContain('href="/#quote"');
  });
  it("spring-cleaning-md gains contextual links from the deep cleaning service and the how-often guide", () => {
    expect(renderMain("/services/deep-cleaning")).toContain('href="/spring-cleaning-md"');
    expect(renderMain("/resources/how-often-should-you-deep-clean")).toContain('href="/spring-cleaning-md"');
  });
});

describe("content gate 2 (2026-09-17) — expired promotion, absolute claims, authorship; defaults preserved elsewhere", () => {
  it("spring-cleaning-md: no SPRING25 campaign, no expiry date, no unpublished price, no local discount, no demand-peak claim; form preselects deep cleaning", () => {
    const main = renderMain("/spring-cleaning-md");
    const t = text(main);
    expect(t).not.toContain("SPRING25");
    expect(t).not.toMatch(/May 31|Valid through|Seasonal Special/);
    expect(t).not.toContain("$150");
    expect(t).not.toMatch(/EPA Safer Choice certified|non-toxic/i);
    // consensus lot: no page-local repetition of the offer (the shared QuoteForm badge and the global AnnouncementBar are out of scope)
    expect(t).not.toMatch(/New clients get 15% off|15% off for new clients|15% off their first/i);
    expect(t).not.toMatch(/busiest/i);
    expect(t).toContain("chosen by their labels");
    expect(main).toContain('href="/services/deep-cleaning"');
    expect(main).toContain('id="spring-quote"');
    expect(main).toMatch(/<h1[^>]*>Spring Cleaning in Maryland — Fresh Start for Your Home<\/h1>/); // H1 unchanged
  });

  it("why-eco-friendly-cleaning: absolute health/safety, certification and unconfirmed-practice claims are gone; linked sources stay", () => {
    const main = renderMain("/why-eco-friendly-cleaning");
    const t = text(main);
    for (const phrase of [
      "no risk to your family", "Plant-based products eliminate that risk", "zero harmful residues", "kills 99.9%",
      "Safe — no harmful residues", "non-toxic after drying", "We only use products that meet this standard",
      "EPA Safer Choice certified products", "Zero Recontamination", "Safe for children, pets, and allergy sufferers",
      "Especially Dangerous for Children", "may disrupt hormonal function", "100% Of our products", "Ethylene glycol",
      "developed over 10+ years", "food-safe and antimicrobial", "Their 2016 policy statement",
      // consensus lot (2026-09-17)
      "no chemical residue", "Every drain", "every drain", "all of Maryland", "Most incidents", "standard kit",
      "we use one of those", "we avoid pine-oil", "We prefer fragrance-free", "no legal definition", "Dye et al.",
      "Reproductive Toxicology", "Safer Choice for Your Family", "15% off",
    ]) expect(t, phrase).not.toContain(phrase);
    expect(main).toMatch(/<h1[^>]*>Eco-Friendly Cleaning: How to Choose Products and Use Them<\/h1>/);
    expect(t).toContain("Parks et al.");
    expect(t).toContain("Svanes et al.");
    expect(t).toContain("Only an EPA-registered product");
    expect(t).toContain("Label-Guided Products"); // GreenShield label-based variant rendered here
    for (const url of [
      "https://www.ftc.gov/business-guidance/resources/environmental-claims-summary-green-guides",
      "https://www.epa.gov/saferchoice/learn-about-safer-choice-label",
      "https://www.epa.gov/coronavirus-and-disinfectants/whats-difference-between-products-disinfect-sanitize-and-clean",
      "https://www.aspca.org/pet-care/animal-poison-control/poisonous-household-products",
      "https://www.chesapeakebay.net/discover/bay-facts",
      "https://www.fda.gov/consumers/consumer-updates/antibacterial-soap-you-can-skip-it-use-plain-soap-and-water",
      "https://ntp.niehs.nih.gov/whatwestudy/assessments/cancer/roc",
    ]) expect(main, url).toContain(`href="${url}"`);
  });

  it("GreenShield default copy is untouched on a control consumer (/services/deep-cleaning)", () => {
    const t = text(renderMain("/services/deep-cleaning"));
    expect(t).toContain("Zero Recontamination");
    expect(t).toContain("Eco-Certified Products");
    expect(t).toContain("developed over 10+ years");
    expect(t).not.toContain("Label-Guided Products");
  });

  it("how-long guide: factual author bio (no 500+ homes, logo alt); default bio kept on a control post", () => {
    const howLong = renderMain("/resources/how-long-does-deep-cleaning-take");
    expect(text(howLong)).not.toContain("500+ homes");
    expect(text(howLong)).not.toContain("EPA Safer Choice products");
    expect(howLong).toContain('alt="Capital Clean Care logo"');
    expect(howLong).toContain("Rodrigo founded Capital Clean Care in 2015");
    expect(text(howLong)).not.toContain("describe how his own teams work");
    expect(howLong).toContain('href="/about"');
    const control = renderMain("/resources/hidden-fees-house-cleaning");
    expect(text(control)).toContain("500+ homes");
    expect(control).toContain('alt="Rodrigo Reis, Capital Clean Care"');
  });
});
