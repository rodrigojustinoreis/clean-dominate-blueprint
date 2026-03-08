import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const About = lazy(() => import("./pages/About"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const LocationHub = lazy(() => import("./pages/LocationHub"));
const CityPage = lazy(() => import("./pages/CityPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ServiceLocationPage = lazy(() => import("./pages/ServiceLocationPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const SpringCleaningMD = lazy(() => import("./pages/SpringCleaningMD"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const VanityLandingPage = lazy(() => import("./pages/VanityLandingPage"));

const queryClient = new QueryClient();

const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-pulse text-muted-foreground">Loading...</div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/spring-cleaning-md" element={<SpringCleaningMD />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* Vanity landing pages - must be before :stateSlug catch-all */}
              <Route path="/house-cleaning-wheaton-md" element={<VanityLandingPage />} />
              <Route path="/eco-cleaning-bethesda-md" element={<VanityLandingPage />} />
              <Route path="/deep-cleaning-germantown-md" element={<VanityLandingPage />} />
              <Route path="/house-cleaning-frederick-md" element={<VanityLandingPage />} />
              <Route path="/move-out-cleaning-rockville-md" element={<VanityLandingPage />} />
              <Route path="/house-cleaning-silver-spring-md" element={<VanityLandingPage />} />
              <Route path="/eco-cleaning-potomac-md" element={<VanityLandingPage />} />
              <Route path="/deep-cleaning-gaithersburg-md" element={<VanityLandingPage />} />
              <Route path="/recurring-cleaning-columbia-md" element={<VanityLandingPage />} />
              <Route path="/house-cleaning-ellicott-city-md" element={<VanityLandingPage />} />
              <Route path="/apartment-cleaning-takoma-park-md" element={<VanityLandingPage />} />
              <Route path="/post-construction-cleaning-clarksburg-md" element={<VanityLandingPage />} />
              <Route path="/house-cleaning-damascus-md" element={<VanityLandingPage />} />
              <Route path="/deep-cleaning-kensington-md" element={<VanityLandingPage />} />
              <Route path="/eco-cleaning-chevy-chase-md" element={<VanityLandingPage />} />
              <Route path="/:stateSlug" element={<LocationHub />} />
              <Route path="/locations/:slug/:serviceSlug" element={<ServiceLocationPage />} />
              <Route path="/locations/:slug" element={<CityPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
