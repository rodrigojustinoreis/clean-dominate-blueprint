/**
 * @vitest-environment jsdom
 * @vitest-environment-options { "url": "https://capitalcleancare.com/locations/rockville-md/house-cleaning" }
 *
 * Reproducible evidence of the gtag loading limits (SEO strategy batch 1, 2026-09-09, lot C).
 * Runs the real inline loader from index.html inside jsdom with fake timers. It changes no runtime
 * code: it only documents that, outside Google Ads traffic, gtag.js is requested at the first
 * interaction or 6 s after `load`, so a visit that ends before either is not measured; Ads traffic
 * (the /services/house-cleaning landing or gclid/gbraid/wbraid/src=google) requests it 2 s after `load`.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const html = readFileSync(resolve(__dirname, "../../index.html"), "utf-8");
const loaderMatch = html.match(/<script>\s*(\(function \(\) \{[\s\S]*?\}\)\(\);)\s*<\/script>/);
if (!loaderMatch) throw new Error("gtag loader script not found in index.html");
const LOADER = loaderMatch[1];

const gtagScripts = () =>
  Array.from(document.head.querySelectorAll("script")).filter((s) => s.src.includes("googletagmanager.com/gtag/js"));

function runLoader() {
  // Same code the browser executes; jsdom's default location is set by the docblock above.
  new Function(LOADER)();
}

beforeEach(() => {
  vi.useFakeTimers();
  document.head.querySelectorAll("script").forEach((s) => s.remove());
  window.history.replaceState({}, "", "/locations/rockville-md/house-cleaning");
});
afterEach(() => {
  vi.useRealTimers();
});

describe("gtag deferral (index.html loader) — documented limits", () => {
  it("organic page, no interaction: gtag.js is requested only 6 s after load (a shorter visit is not measured)", () => {
    runLoader();
    window.dispatchEvent(new Event("load"));
    vi.advanceTimersByTime(5999);
    expect(gtagScripts()).toHaveLength(0);
    vi.advanceTimersByTime(1);
    expect(gtagScripts()).toHaveLength(1);
  });

  it("organic page: the first real interaction (pointerdown/touchstart/keydown/scroll) loads gtag.js immediately", () => {
    runLoader();
    window.dispatchEvent(new Event("load"));
    vi.advanceTimersByTime(1000);
    expect(gtagScripts()).toHaveLength(0);
    window.dispatchEvent(new Event("scroll"));
    expect(gtagScripts()).toHaveLength(1);
    vi.advanceTimersByTime(10000);
    expect(gtagScripts()).toHaveLength(1); // loaded once, the 6 s fallback does not add a second script
  });

  it("Google Ads landing (/services/house-cleaning): gtag.js is requested 2 s after load, interaction or not", () => {
    window.history.replaceState({}, "", "/services/house-cleaning");
    runLoader();
    window.dispatchEvent(new Event("load"));
    vi.advanceTimersByTime(1999);
    expect(gtagScripts()).toHaveLength(0);
    vi.advanceTimersByTime(1);
    expect(gtagScripts()).toHaveLength(1);
  });

  it("gclid traffic on any page gets the 2 s timing too", () => {
    window.history.replaceState({}, "", "/locations/rockville-md/house-cleaning?gclid=abc123");
    runLoader();
    window.dispatchEvent(new Event("load"));
    vi.advanceTimersByTime(2000);
    expect(gtagScripts()).toHaveLength(1);
  });

  it("the loader source still contains the documented rules (guard against silent changes)", () => {
    expect(LOADER).toContain("setTimeout(loadGtag, 6000)");
    expect(LOADER).toContain("setTimeout(loadGtag, 2000)");
    expect(LOADER).toContain("/services/house-cleaning");
    expect(LOADER).toMatch(/gclid\|gbraid\|wbraid/);
    expect(LOADER).toContain("'127.0.0.1'"); // local previews never load the tag
  });
});
