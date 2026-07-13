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

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
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
          <Suspense fallback={null}>
            <AppRoutesLazy />
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
