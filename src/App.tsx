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

const queryClient = new QueryClient();

// On route change, scroll to top — EXCEPT when the URL carries a hash (e.g. /#quote,
// /#pricing). In that case scroll to the target element instead, retrying briefly because
// the destination page is lazy-loaded and the anchor may not be mounted yet on first tick.
// Without this, hash CTAs (header "Free Quote", blog CTAs) landed at the top of the homepage
// instead of the quote form. In-page onClick scrollers and hash-less loads are unaffected.
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1));
      let tries = 0;
      const go = () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
        else if (tries++ < 20) setTimeout(go, 50);
      };
      go();
      return;
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
