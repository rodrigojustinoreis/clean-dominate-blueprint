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
import { keepAnchorAligned } from "@/lib/hash-anchor";

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
        const el = document.getElementById(id);
        if (el) cancelAlign = keepAnchorAligned(el);
        else if (tries++ < 20) retry = setTimeout(go, 50);
      };
      go();
      return () => {
        clearTimeout(retry);
        cancelAlign?.();
      };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
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
          <Suspense fallback={null}>
            <AppRoutesLazy />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
