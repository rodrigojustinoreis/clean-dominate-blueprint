import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
// Route-level code splitting: the browser loads only the current page's chunk.
// The prerender uses the eager AppRoutes; both trees share the same <Suspense>
// boundary so hydration markers match and server HTML is preserved while chunks load.
import AppRoutesLazy from "./AppRoutesLazy";
import { keepAnchorAligned, alignQuoteAnchor, cancelQuoteAlignment, QUOTE_ANCHOR_IDS } from "@/lib/hash-anchor";

const queryClient = new QueryClient();

// On route change, scroll to top — EXCEPT when the URL carries a hash (e.g. /#quote,
// /#pricing). In that case scroll to the target element instead, retrying briefly because
// the destination page is lazy-loaded and the anchor may not be mounted yet on first tick.
// Without this, hash CTAs (header "Free Quote", blog CTAs) landed at the top of the homepage
// instead of the quote form. In-page onClick scrollers and hash-less loads are unaffected.
// Once the anchor exists, keepAnchorAligned re-applies the alignment while the layout above it
// is still settling (late images / client-only widgets after hydration) — a single
// scrollIntoView() was reproducibly pushed away on cold entry and reload (2026-09-17).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      let retry: ReturnType<typeof setTimeout> | undefined;
      let cancelAlign: (() => void) | undefined;
      const go = () => {
        // Arriving with #quote/#cotizacion aims at the form, like an in-page click does.
        if ((QUOTE_ANCHOR_IDS as readonly string[]).includes(id)) {
          if (alignQuoteAnchor(id)) {
            cancelAlign = cancelQuoteAlignment;
            return;
          }
        } else {
          const el = document.getElementById(id);
          if (el) {
            cancelAlign = keepAnchorAligned(el);
            return;
          }
        }
        if (tries++ < 20) retry = setTimeout(go, 50);
      };
      go();
      return () => {
        clearTimeout(retry);
        cancelAlign?.();
      };
    }
    cancelQuoteAlignment();
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

/**
 * One delegated listener for the in-page quote CTAs. The anchors keep their `href`, so the URL, the
 * hash, copy-link and open-in-new-tab are untouched: the native jump still happens and this only
 * corrects where it lands and keeps it there while the layout settles.
 *
 * Deliberately inert for anything that is not a plain left click on a same-page quote anchor:
 * modifier keys, middle click, `target`, `download` and already-handled events are left alone.
 */
const QuoteAnchorAlignment = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as Element | null)?.closest?.("a");
      if (!anchor) return;
      const target = anchor.getAttribute("target");
      if (anchor.hasAttribute("download") || (target && target !== "_self")) return;
      // Resolved by the DOM, so `#quote`, `/#quote` and `/services/x#quote` are all comparable.
      // The hash is matched literally against the two known ids: no decoding, so a malformed hash
      // elsewhere on the page can never throw URIError here.
      const link = anchor as HTMLAnchorElement;
      const id = (link.hash || "").slice(1);
      if (!(QUOTE_ANCHOR_IDS as readonly string[]).includes(id)) return;
      // Only same-page links. A link to another path must navigate; ScrollToTop aligns on arrival.
      const samePath = (a: string, b: string) => a.replace(/\/+$/, "") === b.replace(/\/+$/, "");
      if (link.origin !== window.location.origin) return;
      if (!samePath(link.pathname, window.location.pathname)) return;
      // No anchor on this page: leave the browser to do whatever it already does.
      alignQuoteAnchor(id);
    };
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      cancelQuoteAlignment();
    };
  }, [pathname]);
  return null;
};

// Toaster portals are omitted from prerendered HTML — mount only after hydration
const ClientToasters = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      <Toaster />
      <Sonner />
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ClientToasters />
        <BrowserRouter>
          <ScrollToTop />
          <QuoteAnchorAlignment />
          <Suspense fallback={null}>
            <AppRoutesLazy />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
