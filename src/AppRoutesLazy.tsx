import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Homepage and NotFound load eagerly — everything else is lazy
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const About                  = lazy(() => import("./pages/About"));
const Reviews                = lazy(() => import("./pages/Reviews"));
const Contact                = lazy(() => import("./pages/Contact"));
const ServicePage            = lazy(() => import("./pages/ServicePage"));
const DeepCleaningPage       = lazy(() => import("./pages/DeepCleaningPage"));
const EcoFriendlyCleaningPage = lazy(() => import("./pages/EcoFriendlyCleaningPage"));
const LocationHub            = lazy(() => import("./pages/LocationHub"));
const CityPage               = lazy(() => import("./pages/CityPage"));
const FAQPage                = lazy(() => import("./pages/FAQPage"));
const ServiceLocationPage    = lazy(() => import("./pages/ServiceLocationPage"));
const Blog                   = lazy(() => import("./pages/Blog"));
const BlogPost               = lazy(() => import("./pages/BlogPost"));
const HowToCleanCarpetBlog    = lazy(() => import("./pages/HowToCleanCarpetBlog"));
const SpringCleaningMD       = lazy(() => import("./pages/SpringCleaningMD"));
const PrivacyPolicy          = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService         = lazy(() => import("./pages/TermsOfService"));
const VanityLandingPage      = lazy(() => import("./pages/VanityLandingPage"));
const HouseCleaningNearMe    = lazy(() => import("./pages/HouseCleaningNearMe"));
const Careers                = lazy(() => import("./pages/Careers"));
const PremiumFanPage         = lazy(() => import("./pages/PremiumFanPage"));
const WhyEcoFriendlyPage     = lazy(() => import("./pages/WhyEcoFriendlyPage"));
const GiftCards              = lazy(() => import("./pages/GiftCards"));

// Priority location pages — must come before generic /locations/:slug/:serviceSlug
const RockvilleHouseCleaningPage        = lazy(() => import("./pages/locations/rockville-md/HouseCleaningPage"));
const RockvilleRecurringCleaningPage    = lazy(() => import("./pages/locations/rockville-md/RecurringCleaningPage"));
const RockvilleDeepCleaningPage         = lazy(() => import("./pages/locations/rockville-md/DeepCleaningPage"));
const RockvilleMoveOutCleaningPage      = lazy(() => import("./pages/locations/rockville-md/MoveOutCleaningPage"));
const RockvilleAirbnbCleaningPage       = lazy(() => import("./pages/locations/rockville-md/AirbnbCleaningPage"));
const RockvilleOfficeCleaningPage       = lazy(() => import("./pages/locations/rockville-md/OfficeCleaningPage"));
const RockvillePostConstructionPage     = lazy(() => import("./pages/locations/rockville-md/PostConstructionCleaningPage"));

const AppRoutesLazy = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/premium-clean" element={<PremiumFanPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services/deep-cleaning" element={<DeepCleaningPage />} />
    <Route path="/services/eco-friendly-cleaning" element={<EcoFriendlyCleaningPage />} />
    <Route path="/services/:slug" element={<ServicePage />} />
    <Route path="/why-eco-friendly-cleaning" element={<WhyEcoFriendlyPage />} />
    <Route path="/faq" element={<FAQPage />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/how-to-clean-carpet-home-apartment" element={<HowToCleanCarpetBlog />} />
    <Route path="/blog/:slug" element={<BlogPost />} />
    <Route path="/spring-cleaning-md" element={<SpringCleaningMD />} />
    <Route path="/house-cleaning-near-me" element={<HouseCleaningNearMe />} />
    <Route path="/careers" element={<Careers />} />
    <Route path="/join-our-team" element={<Careers />} />
    <Route path="/gift-cards" element={<GiftCards />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-of-service" element={<TermsOfService />} />
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="/house-cleaning-1" element={<Navigate to="/services/house-cleaning" replace />} />
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
    {/* Priority location pages — specific routes before generic catch-alls */}
    <Route path="/locations/rockville-md/house-cleaning"          element={<RockvilleHouseCleaningPage />} />
    <Route path="/locations/rockville-md/recurring-cleaning"      element={<RockvilleRecurringCleaningPage />} />
    <Route path="/locations/rockville-md/deep-cleaning"           element={<RockvilleDeepCleaningPage />} />
    <Route path="/locations/rockville-md/move-out-cleaning"       element={<RockvilleMoveOutCleaningPage />} />
    <Route path="/locations/rockville-md/airbnb-cleaning"         element={<RockvilleAirbnbCleaningPage />} />
    <Route path="/locations/rockville-md/office-cleaning"         element={<RockvilleOfficeCleaningPage />} />
    <Route path="/locations/rockville-md/post-construction-cleaning" element={<RockvillePostConstructionPage />} />
    <Route path="/:stateSlug" element={<LocationHub />} />
    <Route path="/locations/:slug/:serviceSlug" element={<ServiceLocationPage />} />
    <Route path="/locations/:slug" element={<CityPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutesLazy;
