/**
 * Lot 3 — chat launcher opt-in (CODEX-BATCH-3-CHAT-CONSENSUS.md / CLAUDE-BATCH-3-CHAT-ACK.md).
 * QuoteChatbot.launcherAfterScrollOnNarrow: when true, the floating launcher carries `max-sm:hidden` while
 * scrollY <= 320 and the panel is closed; no aria-hidden/tabIndex/transform. Default/false: no class, no listener.
 * Real component under jsdom; no network, no submit (the panel is only opened/closed).
 */
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, screen, fireEvent, act, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Suspense } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppRoutes from "@/AppRoutes";
import QuoteChatbot from "@/components/QuoteChatbot";

// jsdom lacks scrollIntoView (used by the panel to keep the last message in view).
if (!Element.prototype.scrollIntoView) Element.prototype.scrollIntoView = () => {};

afterEach(() => { cleanup(); vi.restoreAllMocks(); Object.defineProperty(window, "scrollY", { value: 0, writable: true, configurable: true }); });
const setScroll = (y: number) => { Object.defineProperty(window, "scrollY", { value: y, writable: true, configurable: true }); act(() => { window.dispatchEvent(new Event("scroll")); }); };
const launcher = () => screen.getByRole("button", { name: /chat with us|close chat/i });
const mount = (props: Record<string, unknown> = {}) => render(<MemoryRouter><QuoteChatbot {...props} /></MemoryRouter>);

describe("QuoteChatbot launcherAfterScrollOnNarrow", () => {
  it("default and explicit false: no max-sm:hidden, no scroll listener, no aria/tabIndex changes", () => {
    const add = vi.spyOn(window, "addEventListener");
    for (const props of [{}, { launcherAfterScrollOnNarrow: false }]) {
      const r = mount(props);
      const b = launcher();
      expect(b.className).not.toContain("max-sm:hidden");
      expect(b.getAttribute("aria-hidden")).toBeNull(); expect(b.getAttribute("tabindex")).toBeNull();
      expect(add.mock.calls.filter((c) => c[0] === "scroll")).toHaveLength(0);
      r.unmount();
    }
  });
  it("opt-in: hidden class at the top, removed after scrolling past 320px, re-applied back at the top", () => {
    const add = vi.spyOn(window, "addEventListener"); const rem = vi.spyOn(window, "removeEventListener");
    const r = mount({ launcherAfterScrollOnNarrow: true });
    expect(launcher().className).toContain("max-sm:hidden");
    expect(launcher().getAttribute("aria-hidden")).toBeNull(); expect(launcher().getAttribute("tabindex")).toBeNull();
    expect(launcher().className).not.toMatch(/translate|opacity-0/);
    expect(add.mock.calls.filter((c) => c[0] === "scroll")).toHaveLength(1);
    setScroll(400); expect(launcher().className).not.toContain("max-sm:hidden");
    setScroll(0); expect(launcher().className).toContain("max-sm:hidden");
    r.unmount(); expect(rem.mock.calls.filter((c) => c[0] === "scroll")).toHaveLength(1);
  });
  it("opt-in: initial position is checked on mount (already scrolled → visible)", () => {
    Object.defineProperty(window, "scrollY", { value: 500, writable: true, configurable: true });
    mount({ launcherAfterScrollOnNarrow: true });
    expect(launcher().className).not.toContain("max-sm:hidden");
  });
  it("opt-in: while the panel is open the launcher stays visible at the top; hidden again once closed", () => {
    mount({ launcherAfterScrollOnNarrow: true });
    setScroll(400); fireEvent.click(launcher()); // opens the panel (no message sent)
    expect(screen.getByRole("button", { name: /close chat/i }).className).not.toContain("max-sm:hidden");
    setScroll(0); expect(screen.getByRole("button", { name: /close chat/i }).className).not.toContain("max-sm:hidden");
    fireEvent.click(screen.getByRole("button", { name: /close chat/i }));
    expect(launcher().className).toContain("max-sm:hidden");
  });
});

function renderRoute(url: string) {
  const qc = new QueryClient({ defaultOptions: { queries: { retry: false, staleTime: 0 } } });
  return renderToString(<HelmetProvider><QueryClientProvider client={qc}><TooltipProvider><StaticRouter location={url}><Suspense fallback={null}><AppRoutes /></Suspense></StaticRouter></TooltipProvider></QueryClientProvider></HelmetProvider>);
}
const LOT = ["/locations/gaithersburg-md/deep-cleaning","/locations/gaithersburg-md/house-cleaning","/locations/gaithersburg-md/recurring-cleaning","/locations/germantown-md/deep-cleaning","/locations/germantown-md/house-cleaning","/locations/kensington-md/recurring-cleaning","/locations/north-bethesda-md/house-cleaning","/locations/north-bethesda-md/recurring-cleaning","/locations/olney-md/office-cleaning","/locations/potomac-md/house-cleaning","/locations/potomac-md/move-out-cleaning","/locations/silver-spring-md/airbnb-cleaning","/locations/silver-spring-md/deep-cleaning","/locations/silver-spring-md/house-cleaning","/locations/silver-spring-md/post-construction-cleaning","/locations/silver-spring-md/recurring-cleaning","/locations/wheaton-md/house-cleaning"];
describe("prerendered launcher class: only the 17 lot pages opt in", () => {
  it("17 lot pages carry max-sm:hidden on the launcher (SSR, scrolled=false)", () => {
    for (const u of LOT) { const h = renderRoute(u); expect(h).toMatch(/aria-label="Chat with us"/); expect(h.match(/class="fixed bottom-\[4\.5rem\][^"]*"/)?.[0]).toContain("max-sm:hidden"); }
  });
  it("protected controls do not", () => {
    for (const u of ["/locations/bethesda-md/house-cleaning","/locations/rockville-md/house-cleaning","/","/contact","/services/house-cleaning"]) { const h = renderRoute(u); expect(h.match(/class="fixed bottom-\[4\.5rem\][^"]*"/)?.[0] ?? "").not.toContain("max-sm:hidden"); }
  });
});
