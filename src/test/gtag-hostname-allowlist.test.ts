/**
 * @vitest-environment jsdom
 * @vitest-environment-options { "url": "https://capitalcleancare.com/" }
 *
 * Hostname allowlist for the GA4 / Google Ads tag (measurement prototype, 2026-09-27).
 *
 * Runs the two real inline scripts from index.html with a substituted `location`, so one file covers
 * many hostnames. Before the allowlist the loader excluded only localhost / 127.0.0.1, and deploy
 * previews on *.netlify.app loaded the production tag: the preview cases below FAIL on that baseline
 * and pass with the allowlist. The load timings themselves are asserted unchanged by gtag-loader.test.ts.
 */
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const html = readFileSync(resolve(__dirname, "../../index.html"), "utf-8");
const scripts = Array.from(html.matchAll(/<script>([\s\S]*?)<\/script>/g)).map((m) => m[1]);
const LOADER = scripts.find((s) => s.includes("loadGtag"));
const CONFIG = scripts.find((s) => s.includes("window.dataLayer = window.dataLayer"));
if (!LOADER || !CONFIG) throw new Error("gtag scripts not found in index.html");

type Loc = { hostname: string; pathname: string; search: string };
const at = (hostname: string, pathname = "/"): Loc => ({ hostname, pathname, search: "" });

const gtagScripts = () =>
  Array.from(document.head.querySelectorAll("script")).filter((s) => s.src.includes("googletagmanager.com/gtag/js"));

// `location` is a free identifier inside both scripts; a Function parameter shadows the real one.
const runLoader = (loc: Loc) => new Function("location", LOADER)(loc);
const runConfig = (loc: Loc) => new Function("location", CONFIG)(loc);

const configCalls = () =>
  ((window as unknown as { dataLayer?: IArguments[] }).dataLayer ?? []).filter((a) => a[0] === "config").length;

beforeEach(() => {
  vi.useFakeTimers();
  document.head.querySelectorAll("script").forEach((s) => s.remove());
  delete (window as unknown as { dataLayer?: unknown }).dataLayer;
});
afterEach(() => {
  vi.useRealTimers();
});

const NOT_PRODUCTION = [
  "localhost",
  "127.0.0.1",
  "deploy-preview-12--vocal-paprenjak-561aa9.netlify.app",
  "6ab82ab9c41bca25366e25a9--vocal-paprenjak-561aa9.netlify.app",
  "main--vocal-paprenjak-561aa9.netlify.app",
  "vocal-paprenjak-561aa9.netlify.app",
  "capitalcleancare.com.evil",
  "staging.capitalcleancare.com",
  "capitalcleancare.co",
];

describe("GA4 / Ads tag hostname allowlist (index.html)", () => {
  it.each(["capitalcleancare.com", "www.capitalcleancare.com"])("%s: loader arms and config calls are queued", (host) => {
    runLoader(at(host));
    runConfig(at(host));
    window.dispatchEvent(new Event("load"));
    vi.advanceTimersByTime(6000);
    expect(gtagScripts()).toHaveLength(1);
    expect(configCalls()).toBe(3); // G-…, AW-…, AW-…/call conversion
  });

  it("production host keeps the Google Ads landing timing (2 s after load)", () => {
    runLoader(at("capitalcleancare.com", "/services/house-cleaning"));
    window.dispatchEvent(new Event("load"));
    vi.advanceTimersByTime(1999);
    expect(gtagScripts()).toHaveLength(0);
    vi.advanceTimersByTime(1);
    expect(gtagScripts()).toHaveLength(1);
  });

  it.each(NOT_PRODUCTION)("%s: gtag.js is never requested and nothing is configured", (host) => {
    runLoader(at(host));
    runConfig(at(host));
    window.dispatchEvent(new Event("load"));
    window.dispatchEvent(new Event("scroll"));
    window.dispatchEvent(new Event("pointerdown"));
    vi.advanceTimersByTime(10000);
    expect(gtagScripts()).toHaveLength(0);
    expect(configCalls()).toBe(0);
  });

  it("non-production host on the Ads landing path: still nothing", () => {
    runLoader(at("deploy-preview-12--vocal-paprenjak-561aa9.netlify.app", "/services/house-cleaning"));
    window.dispatchEvent(new Event("load"));
    vi.advanceTimersByTime(10000);
    expect(gtagScripts()).toHaveLength(0);
  });
});
