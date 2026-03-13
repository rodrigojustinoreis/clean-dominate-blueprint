import { Routes, Route, Navigate } from "react-router-dom";

// Regular imports (no lazy) — required for synchronous renderToString in SSR
import Index from "./pages/Index";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import LocationHub from "./pages/LocationHub";
import CityPage from "./pages/CityPage";
import FAQPage from "./pages/FAQPage";
import ServiceLocationPage from "./pages/ServiceLocationPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import SpringCleaningMD from "./pages/SpringCleaningMD";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import VanityLandingPage from "./pages/VanityLandingPage";
import HouseCleaningNearMe from "./pages/HouseCleaningNearMe";
import Careers from "./pages/Careers";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
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
    <Route path="/house-cleaning-near-me" element={<HouseCleaningNearMe />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/join-our-team" element={<Careers />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    {/* Redirects from old Wix/GoDaddy site */}
    <Route path="/apartment-cleaning" element={<Navigate to="/services/house-cleaning" replace />} />
    <Route path="/airbnb-cleaning" element={<Navigate to="/services/airbnb-cleaning" replace />} />
    <Route path="/house-cleaning" element={<Navigate to="/services/house-cleaning" replace />} />
    <Route path="/deep-cleaning-service" element={<Navigate to="/services/deep-cleaning" replace />} />
    <Route path="/move-in-move-out" element={<Navigate to="/services/move-out-cleaning" replace />} />
    <Route path="/move-in-move-out-cleaning" element={<Navigate to="/services/move-out-cleaning" replace />} />
    <Route path="/recurring-cleaning-service" element={<Navigate to="/services/recurring-cleaning" replace />} />
    <Route path="/post-construction" element={<Navigate to="/services/post-construction-cleaning" replace />} />
    <Route path="/office-cleaning" element={<Navigate to="/services/office-cleaning" replace />} />
    <Route path="/commercial-cleaning" element={<Navigate to="/services/office-cleaning" replace />} />
    <Route path="/eco-friendly-cleaning-service" element={<Navigate to="/services/eco-friendly-cleaning" replace />} />
    <Route path="/about-us" element={<Navigate to="/about" replace />} />
    <Route path="/contact-us" element={<Navigate to="/contact" replace />} />
    <Route path="/book-now" element={<Navigate to="/#quote" replace />} />
    <Route path="/pricing" element={<Navigate to="/" replace />} />
    <Route path="/services" element={<Navigate to="/" replace />} />
    {/* Vanity landing pages — must be before :stateSlug catch-all */}
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
);

export default AppRoutes;
