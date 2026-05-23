import { Routes, Route, Navigate } from "react-router-dom";

// Regular imports (no lazy) — required for synchronous renderToString in SSR
import Index from "./pages/Index";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import DeepCleaningPage from "./pages/DeepCleaningPage";
import LocationHub from "./pages/LocationHub";
import CityPage from "./pages/CityPage";
import FAQPage from "./pages/FAQPage";
import ServiceLocationPage from "./pages/ServiceLocationPage";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import HowToCleanCarpetBlog from "./pages/HowToCleanCarpetBlog";
import SpringCleaningMD from "./pages/SpringCleaningMD";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import VanityLandingPage from "./pages/VanityLandingPage";
import HouseCleaningNearMe from "./pages/HouseCleaningNearMe";
import Careers from "./pages/Careers";
import PremiumFanPage from "./pages/PremiumFanPage";
import WhyEcoFriendlyPage from "./pages/WhyEcoFriendlyPage";
import EcoFriendlyCleaningPage from "./pages/EcoFriendlyCleaningPage";
import GiftCards from "./pages/GiftCards";
import NotFound from "./pages/NotFound";
import MasterServicesPage from "@/pages/MasterServicesPage";
// Priority location pages — must come before generic /locations/:slug/:serviceSlug
import RockvilleHouseCleaningPage        from "./pages/locations/rockville-md/HouseCleaningPage";
import RockvilleRecurringCleaningPage    from "./pages/locations/rockville-md/RecurringCleaningPage";
import RockvilleDeepCleaningPage         from "./pages/locations/rockville-md/DeepCleaningPage";
import RockvilleMoveOutCleaningPage      from "./pages/locations/rockville-md/MoveOutCleaningPage";
import RockvilleAirbnbCleaningPage       from "./pages/locations/rockville-md/AirbnbCleaningPage";
import RockvilleOfficeCleaningPage       from "./pages/locations/rockville-md/OfficeCleaningPage";
import RockvillePostConstructionPage     from "./pages/locations/rockville-md/PostConstructionCleaningPage";
import NorthBethesdaHouseCleaningPage        from "./pages/locations/north-bethesda-md/HouseCleaningPage";
import NorthBethesdaRecurringCleaningPage    from "./pages/locations/north-bethesda-md/RecurringCleaningPage";
import NorthBethesdaDeepCleaningPage         from "./pages/locations/north-bethesda-md/DeepCleaningPage";
import NorthBethesdaMoveOutCleaningPage      from "./pages/locations/north-bethesda-md/MoveOutCleaningPage";
import NorthBethesdaAirbnbCleaningPage       from "./pages/locations/north-bethesda-md/AirbnbCleaningPage";
import NorthBethesdaOfficeCleaningPage       from "./pages/locations/north-bethesda-md/OfficeCleaningPage";
import NorthBethesdaPostConstructionPage     from "./pages/locations/north-bethesda-md/PostConstructionCleaningPage";
import BethesdaHouseCleaningPage             from "./pages/locations/bethesda-md/HouseCleaningPage";
import BethesdaRecurringCleaningPage         from "./pages/locations/bethesda-md/RecurringCleaningPage";
import BethesdaDeepCleaningPage              from "./pages/locations/bethesda-md/DeepCleaningPage";
import BethesdaMoveOutCleaningPage           from "./pages/locations/bethesda-md/MoveOutCleaningPage";
import BethesdaAirbnbCleaningPage            from "./pages/locations/bethesda-md/AirbnbCleaningPage";
import BethesdaOfficeCleaningPage            from "./pages/locations/bethesda-md/OfficeCleaningPage";
import BethesdaPostConstructionPage          from "./pages/locations/bethesda-md/PostConstructionCleaningPage";
import PotomacHouseCleaningPage              from "./pages/locations/potomac-md/HouseCleaningPage";
import PotomacRecurringCleaningPage          from "./pages/locations/potomac-md/RecurringCleaningPage";
import PotomacDeepCleaningPage               from "./pages/locations/potomac-md/DeepCleaningPage";
import PotomacMoveOutCleaningPage            from "./pages/locations/potomac-md/MoveOutCleaningPage";
import PotomacAirbnbCleaningPage             from "./pages/locations/potomac-md/AirbnbCleaningPage";
import PotomacOfficeCleaningPage             from "./pages/locations/potomac-md/OfficeCleaningPage";
import PotomacPostConstructionPage           from "./pages/locations/potomac-md/PostConstructionCleaningPage";
import ChevyChaseHouseCleaningPage        from "./pages/locations/chevy-chase-md/HouseCleaningPage";
import ChevyChaseRecurringCleaningPage    from "./pages/locations/chevy-chase-md/RecurringCleaningPage";
import ChevyChaseDeepCleaningPage         from "./pages/locations/chevy-chase-md/DeepCleaningPage";
import ChevyChaseMoveOutCleaningPage      from "./pages/locations/chevy-chase-md/MoveOutCleaningPage";
import ChevyChaseAirbnbCleaningPage       from "./pages/locations/chevy-chase-md/AirbnbCleaningPage";
import ChevyChaseOfficeCleaningPage       from "./pages/locations/chevy-chase-md/OfficeCleaningPage";
import ChevyChasePostConstructionPage     from "./pages/locations/chevy-chase-md/PostConstructionCleaningPage";
import OlneyHouseCleaningPage        from "./pages/locations/olney-md/HouseCleaningPage";
import OlneyRecurringCleaningPage    from "./pages/locations/olney-md/RecurringCleaningPage";
import OlneyDeepCleaningPage         from "./pages/locations/olney-md/DeepCleaningPage";
import OlneyMoveOutCleaningPage      from "./pages/locations/olney-md/MoveOutCleaningPage";
import OlneyAirbnbCleaningPage       from "./pages/locations/olney-md/AirbnbCleaningPage";
import OlneyOfficeCleaningPage       from "./pages/locations/olney-md/OfficeCleaningPage";
import OlneyPostConstructionPage     from "./pages/locations/olney-md/PostConstructionCleaningPage";
import SilverSpringHouseCleaningPage        from "./pages/locations/silver-spring-md/HouseCleaningPage";
import SilverSpringRecurringCleaningPage    from "./pages/locations/silver-spring-md/RecurringCleaningPage";
import SilverSpringDeepCleaningPage         from "./pages/locations/silver-spring-md/DeepCleaningPage";
import SilverSpringMoveOutCleaningPage      from "./pages/locations/silver-spring-md/MoveOutCleaningPage";
import SilverSpringAirbnbCleaningPage       from "./pages/locations/silver-spring-md/AirbnbCleaningPage";
import SilverSpringOfficeCleaningPage       from "./pages/locations/silver-spring-md/OfficeCleaningPage";
import SilverSpringPostConstructionPage     from "./pages/locations/silver-spring-md/PostConstructionCleaningPage";
import GaithersburgHouseCleaningPage        from "./pages/locations/gaithersburg-md/HouseCleaningPage";
import GaithersburgRecurringCleaningPage    from "./pages/locations/gaithersburg-md/RecurringCleaningPage";
import GaithersburgDeepCleaningPage         from "./pages/locations/gaithersburg-md/DeepCleaningPage";
import GaithersburgMoveOutCleaningPage      from "./pages/locations/gaithersburg-md/MoveOutCleaningPage";
import GaithersburgAirbnbCleaningPage       from "./pages/locations/gaithersburg-md/AirbnbCleaningPage";
import GaithersburgOfficeCleaningPage       from "./pages/locations/gaithersburg-md/OfficeCleaningPage";
import GaithersburgPostConstructionPage     from "./pages/locations/gaithersburg-md/PostConstructionCleaningPage";
import GermantownHouseCleaningPage        from "./pages/locations/germantown-md/HouseCleaningPage";
import GermantownRecurringCleaningPage    from "./pages/locations/germantown-md/RecurringCleaningPage";
import GermantownDeepCleaningPage         from "./pages/locations/germantown-md/DeepCleaningPage";
import GermantownMoveOutCleaningPage      from "./pages/locations/germantown-md/MoveOutCleaningPage";
import GermantownAirbnbCleaningPage       from "./pages/locations/germantown-md/AirbnbCleaningPage";
import GermantownOfficeCleaningPage       from "./pages/locations/germantown-md/OfficeCleaningPage";
import GermantownPostConstructionPage     from "./pages/locations/germantown-md/PostConstructionCleaningPage";
import WheatonHouseCleaningPage        from "./pages/locations/wheaton-md/HouseCleaningPage";
import WheatonRecurringCleaningPage    from "./pages/locations/wheaton-md/RecurringCleaningPage";
import WheatonDeepCleaningPage         from "./pages/locations/wheaton-md/DeepCleaningPage";
import WheatonMoveOutCleaningPage      from "./pages/locations/wheaton-md/MoveOutCleaningPage";
import WheatonAirbnbCleaningPage       from "./pages/locations/wheaton-md/AirbnbCleaningPage";
import WheatonOfficeCleaningPage       from "./pages/locations/wheaton-md/OfficeCleaningPage";
import WheatonPostConstructionPage     from "./pages/locations/wheaton-md/PostConstructionCleaningPage";
import KensingtonHouseCleaningPage        from "./pages/locations/kensington-md/HouseCleaningPage";
import KensingtonRecurringCleaningPage    from "./pages/locations/kensington-md/RecurringCleaningPage";
import KensingtonDeepCleaningPage         from "./pages/locations/kensington-md/DeepCleaningPage";
import KensingtonMoveOutCleaningPage      from "./pages/locations/kensington-md/MoveOutCleaningPage";
import KensingtonAirbnbCleaningPage       from "./pages/locations/kensington-md/AirbnbCleaningPage";
import KensingtonOfficeCleaningPage       from "./pages/locations/kensington-md/OfficeCleaningPage";
import KensingtonPostConstructionPage     from "./pages/locations/kensington-md/PostConstructionCleaningPage";
// Spanish pages — Fase 1 (17 pages)
import HomeES                  from "./pages/es/HomeES";
import LimpiezaDeCasasPage     from "./pages/es/LimpiezaDeCasasPage";
import LimpiezaProfundaPage    from "./pages/es/LimpiezaProfundaPage";
import LimpiezaDeMudanzaPage   from "./pages/es/LimpiezaDeMudanzaPage";
import LimpiezaAirbnbPage      from "./pages/es/LimpiezaAirbnbPage";
import LimpiezaPostConstruccionPage from "./pages/es/LimpiezaPostConstruccionPage";
import LimpiezaRecurrentePage  from "./pages/es/LimpiezaRecurrentePage";
import NosotrosPage            from "./pages/es/NosotrosPage";
import ContactoPage            from "./pages/es/ContactoPage";
import SilverSpringES          from "./pages/es/areas/SilverSpringES";
import WheatonES               from "./pages/es/areas/WheatonES";
import RockvilleES             from "./pages/es/areas/RockvilleES";
import GaithersburgES          from "./pages/es/areas/GaithersburgES";
import GermantownES            from "./pages/es/areas/GermantownES";
import AspenHillES             from "./pages/es/areas/AspenHillES";
import TakomaParkES            from "./pages/es/areas/TakomaParkES";
import MontgomeryVillageES     from "./pages/es/areas/MontgomeryVillageES";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/premium-clean" element={<PremiumFanPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/services/" element={<MasterServicesPage />} />
    <Route path="/services" element={<MasterServicesPage />} />
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
    {/* SEO redirects for dead/old URLs */}
    <Route path="/home" element={<Navigate to="/" replace />} />
    <Route path="/house-cleaning-1" element={<Navigate to="/services/house-cleaning" replace />} />
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
    {/* Vanity landing pages */}
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
    {/* Priority location pages — specific routes before generic catch-all */}
    <Route path="/locations/rockville-md/house-cleaning"             element={<RockvilleHouseCleaningPage />} />
    <Route path="/locations/rockville-md/recurring-cleaning"         element={<RockvilleRecurringCleaningPage />} />
    <Route path="/locations/rockville-md/deep-cleaning"              element={<RockvilleDeepCleaningPage />} />
    <Route path="/locations/rockville-md/move-out-cleaning"          element={<RockvilleMoveOutCleaningPage />} />
    <Route path="/locations/rockville-md/airbnb-cleaning"            element={<RockvilleAirbnbCleaningPage />} />
    <Route path="/locations/rockville-md/office-cleaning"            element={<RockvilleOfficeCleaningPage />} />
    <Route path="/locations/rockville-md/post-construction-cleaning" element={<RockvillePostConstructionPage />} />
    <Route path="/locations/north-bethesda-md/house-cleaning"             element={<NorthBethesdaHouseCleaningPage />} />
    <Route path="/locations/north-bethesda-md/recurring-cleaning"         element={<NorthBethesdaRecurringCleaningPage />} />
    <Route path="/locations/north-bethesda-md/deep-cleaning"              element={<NorthBethesdaDeepCleaningPage />} />
    <Route path="/locations/north-bethesda-md/move-out-cleaning"          element={<NorthBethesdaMoveOutCleaningPage />} />
    <Route path="/locations/north-bethesda-md/airbnb-cleaning"            element={<NorthBethesdaAirbnbCleaningPage />} />
    <Route path="/locations/north-bethesda-md/office-cleaning"            element={<NorthBethesdaOfficeCleaningPage />} />
    <Route path="/locations/north-bethesda-md/post-construction-cleaning" element={<NorthBethesdaPostConstructionPage />} />
    <Route path="/locations/bethesda-md/house-cleaning"             element={<BethesdaHouseCleaningPage />} />
    <Route path="/locations/bethesda-md/recurring-cleaning"         element={<BethesdaRecurringCleaningPage />} />
    <Route path="/locations/bethesda-md/deep-cleaning"              element={<BethesdaDeepCleaningPage />} />
    <Route path="/locations/bethesda-md/move-out-cleaning"          element={<BethesdaMoveOutCleaningPage />} />
    <Route path="/locations/bethesda-md/airbnb-cleaning"            element={<BethesdaAirbnbCleaningPage />} />
    <Route path="/locations/bethesda-md/office-cleaning"            element={<BethesdaOfficeCleaningPage />} />
    <Route path="/locations/bethesda-md/post-construction-cleaning" element={<BethesdaPostConstructionPage />} />
    <Route path="/locations/potomac-md/house-cleaning"             element={<PotomacHouseCleaningPage />} />
    <Route path="/locations/potomac-md/recurring-cleaning"         element={<PotomacRecurringCleaningPage />} />
    <Route path="/locations/potomac-md/deep-cleaning"              element={<PotomacDeepCleaningPage />} />
    <Route path="/locations/potomac-md/move-out-cleaning"          element={<PotomacMoveOutCleaningPage />} />
    <Route path="/locations/potomac-md/airbnb-cleaning"            element={<PotomacAirbnbCleaningPage />} />
    <Route path="/locations/potomac-md/office-cleaning"            element={<PotomacOfficeCleaningPage />} />
    <Route path="/locations/potomac-md/post-construction-cleaning" element={<PotomacPostConstructionPage />} />
    <Route path="/locations/chevy-chase-md/house-cleaning"             element={<ChevyChaseHouseCleaningPage />} />
    <Route path="/locations/chevy-chase-md/recurring-cleaning"         element={<ChevyChaseRecurringCleaningPage />} />
    <Route path="/locations/chevy-chase-md/deep-cleaning"              element={<ChevyChaseDeepCleaningPage />} />
    <Route path="/locations/chevy-chase-md/move-out-cleaning"          element={<ChevyChaseMoveOutCleaningPage />} />
    <Route path="/locations/chevy-chase-md/airbnb-cleaning"            element={<ChevyChaseAirbnbCleaningPage />} />
    <Route path="/locations/chevy-chase-md/office-cleaning"            element={<ChevyChaseOfficeCleaningPage />} />
    <Route path="/locations/chevy-chase-md/post-construction-cleaning" element={<ChevyChasePostConstructionPage />} />
    <Route path="/locations/olney-md/house-cleaning"             element={<OlneyHouseCleaningPage />} />
    <Route path="/locations/olney-md/recurring-cleaning"         element={<OlneyRecurringCleaningPage />} />
    <Route path="/locations/olney-md/deep-cleaning"              element={<OlneyDeepCleaningPage />} />
    <Route path="/locations/olney-md/move-out-cleaning"          element={<OlneyMoveOutCleaningPage />} />
    <Route path="/locations/olney-md/airbnb-cleaning"            element={<OlneyAirbnbCleaningPage />} />
    <Route path="/locations/olney-md/office-cleaning"            element={<OlneyOfficeCleaningPage />} />
    <Route path="/locations/olney-md/post-construction-cleaning" element={<OlneyPostConstructionPage />} />
    <Route path="/locations/silver-spring-md/house-cleaning"             element={<SilverSpringHouseCleaningPage />} />
    <Route path="/locations/silver-spring-md/recurring-cleaning"         element={<SilverSpringRecurringCleaningPage />} />
    <Route path="/locations/silver-spring-md/deep-cleaning"              element={<SilverSpringDeepCleaningPage />} />
    <Route path="/locations/silver-spring-md/move-out-cleaning"          element={<SilverSpringMoveOutCleaningPage />} />
    <Route path="/locations/silver-spring-md/airbnb-cleaning"            element={<SilverSpringAirbnbCleaningPage />} />
    <Route path="/locations/silver-spring-md/office-cleaning"            element={<SilverSpringOfficeCleaningPage />} />
    <Route path="/locations/silver-spring-md/post-construction-cleaning" element={<SilverSpringPostConstructionPage />} />
    <Route path="/locations/gaithersburg-md/house-cleaning"             element={<GaithersburgHouseCleaningPage />} />
    <Route path="/locations/gaithersburg-md/recurring-cleaning"         element={<GaithersburgRecurringCleaningPage />} />
    <Route path="/locations/gaithersburg-md/deep-cleaning"              element={<GaithersburgDeepCleaningPage />} />
    <Route path="/locations/gaithersburg-md/move-out-cleaning"          element={<GaithersburgMoveOutCleaningPage />} />
    <Route path="/locations/gaithersburg-md/airbnb-cleaning"            element={<GaithersburgAirbnbCleaningPage />} />
    <Route path="/locations/gaithersburg-md/office-cleaning"            element={<GaithersburgOfficeCleaningPage />} />
    <Route path="/locations/gaithersburg-md/post-construction-cleaning" element={<GaithersburgPostConstructionPage />} />
    <Route path="/locations/germantown-md/house-cleaning"             element={<GermantownHouseCleaningPage />} />
    <Route path="/locations/germantown-md/recurring-cleaning"         element={<GermantownRecurringCleaningPage />} />
    <Route path="/locations/germantown-md/deep-cleaning"              element={<GermantownDeepCleaningPage />} />
    <Route path="/locations/germantown-md/move-out-cleaning"          element={<GermantownMoveOutCleaningPage />} />
    <Route path="/locations/germantown-md/airbnb-cleaning"            element={<GermantownAirbnbCleaningPage />} />
    <Route path="/locations/germantown-md/office-cleaning"            element={<GermantownOfficeCleaningPage />} />
    <Route path="/locations/germantown-md/post-construction-cleaning" element={<GermantownPostConstructionPage />} />
    <Route path="/locations/wheaton-md/house-cleaning"             element={<WheatonHouseCleaningPage />} />
    <Route path="/locations/wheaton-md/recurring-cleaning"         element={<WheatonRecurringCleaningPage />} />
    <Route path="/locations/wheaton-md/deep-cleaning"              element={<WheatonDeepCleaningPage />} />
    <Route path="/locations/wheaton-md/move-out-cleaning"          element={<WheatonMoveOutCleaningPage />} />
    <Route path="/locations/wheaton-md/airbnb-cleaning"            element={<WheatonAirbnbCleaningPage />} />
    <Route path="/locations/wheaton-md/office-cleaning"            element={<WheatonOfficeCleaningPage />} />
    <Route path="/locations/wheaton-md/post-construction-cleaning" element={<WheatonPostConstructionPage />} />
    <Route path="/locations/kensington-md/house-cleaning"             element={<KensingtonHouseCleaningPage />} />
    <Route path="/locations/kensington-md/recurring-cleaning"         element={<KensingtonRecurringCleaningPage />} />
    <Route path="/locations/kensington-md/deep-cleaning"              element={<KensingtonDeepCleaningPage />} />
    <Route path="/locations/kensington-md/move-out-cleaning"          element={<KensingtonMoveOutCleaningPage />} />
    <Route path="/locations/kensington-md/airbnb-cleaning"            element={<KensingtonAirbnbCleaningPage />} />
    <Route path="/locations/kensington-md/office-cleaning"            element={<KensingtonOfficeCleaningPage />} />
    <Route path="/locations/kensington-md/post-construction-cleaning" element={<KensingtonPostConstructionPage />} />
    {/* Spanish pages — /es/ hierarchy */}
    <Route path="/es" element={<Navigate to="/es/" replace />} />
    <Route path="/es/" element={<HomeES />} />
    <Route path="/es/limpieza-de-casas" element={<LimpiezaDeCasasPage />} />
    <Route path="/es/limpieza-profunda" element={<LimpiezaProfundaPage />} />
    <Route path="/es/limpieza-de-mudanza" element={<LimpiezaDeMudanzaPage />} />
    <Route path="/es/limpieza-airbnb" element={<LimpiezaAirbnbPage />} />
    <Route path="/es/limpieza-post-construccion" element={<LimpiezaPostConstruccionPage />} />
    <Route path="/es/limpieza-recurrente" element={<LimpiezaRecurrentePage />} />
    <Route path="/es/nosotros" element={<NosotrosPage />} />
    <Route path="/es/contacto" element={<ContactoPage />} />
    <Route path="/es/areas/silver-spring-md" element={<SilverSpringES />} />
    <Route path="/es/areas/wheaton-md" element={<WheatonES />} />
    <Route path="/es/areas/rockville-md" element={<RockvilleES />} />
    <Route path="/es/areas/gaithersburg-md" element={<GaithersburgES />} />
    <Route path="/es/areas/germantown-md" element={<GermantownES />} />
    <Route path="/es/areas/aspen-hill-md" element={<AspenHillES />} />
    <Route path="/es/areas/takoma-park-md" element={<TakomaParkES />} />
    <Route path="/es/areas/montgomery-village-md" element={<MontgomeryVillageES />} />
    {/* State hub pages — catch-all for single-segment paths; LocationHub returns <NotFound /> for unknown slugs */}
    <Route path="/:stateSlug" element={<LocationHub />} />
    <Route path="/locations/:slug/:serviceSlug" element={<ServiceLocationPage />} />
    <Route path="/locations/:slug" element={<CityPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
