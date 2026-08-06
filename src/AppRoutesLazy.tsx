// AUTO-GENERATED from AppRoutes.tsx — route-level code splitting for the browser bundle.
// Every page is a lazy chunk. The prerender keeps using the eager AppRoutes; both trees
// are wrapped in the same <Suspense> boundary so hydration markers match (React 18
// selective hydration keeps the prerendered HTML visible while a lazy chunk loads).
// Regenerate with the same transform if routes change.
// NOTE: Index is lazy too — it used to be an eager static import ("LCP-critical"), but the
// home LCP is the preloaded hero image (not JS), and eager Index forced its 438KB chunk into
// EVERY page's modulepreload graph. Lazy keeps it on the "/" route only.
import { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { RESOURCE_CATEGORIES } from "./data/resource-categories";

const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Reviews = lazy(() => import("./pages/Reviews"));
const Contact = lazy(() => import("./pages/Contact"));
const ServicePage = lazy(() => import("./pages/ServicePage"));
const HouseCleaningPage = lazy(() => import("./pages/HouseCleaningPage"));
const DeepCleaningPage = lazy(() => import("./pages/DeepCleaningPage"));
const RecurringCleaningPage = lazy(() => import("./pages/RecurringCleaningPage"));
const AirbnbCleaningPage = lazy(() => import("./pages/AirbnbCleaningPage"));
const CondoCleaningPage = lazy(() => import("./pages/CondoCleaningPage"));
const KitchenCleaningPage = lazy(() => import("./pages/KitchenCleaningPage"));
const BathroomCleaningPage = lazy(() => import("./pages/BathroomCleaningPage"));
const MaidServicePage = lazy(() => import("./pages/MaidServicePage"));
const CleaningChecklistPage = lazy(() => import("./pages/CleaningChecklistPage"));
const LocationHub = lazy(() => import("./pages/LocationHub"));
const CityPage = lazy(() => import("./pages/CityPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const ServiceLocationPage = lazy(() => import("./pages/ServiceLocationPage"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogTopic = lazy(() => import("./pages/BlogTopic"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ResourceCategory = lazy(() => import("./pages/ResourceCategory"));
const FaqHub = lazy(() => import("./pages/FaqHub"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const HowToCleanCarpetBlog = lazy(() => import("./pages/HowToCleanCarpetBlog"));
const HowToRemoveCandleWaxBlog = lazy(() => import("./pages/HowToRemoveCandleWaxBlog"));
const HowToCleanYourWashingMachineEcoFriendly = lazy(() => import("./pages/HowToCleanYourWashingMachineEcoFriendly"));
const HowToGetRidOfMildewSmellNaturally = lazy(() => import("./pages/HowToGetRidOfMildewSmellNaturally"));
const HowToGetCigaretteSmellOutOfYourHouse = lazy(() => import("./pages/HowToGetCigaretteSmellOutOfYourHouse"));
const HowToRemoveSharpieSafely = lazy(() => import("./pages/HowToRemoveSharpieSafely"));
const HowToRemoveHardWaterStainsNaturally = lazy(() => import("./pages/HowToRemoveHardWaterStainsNaturally"));
const HowToCleanGroutWithoutBleach = lazy(() => import("./pages/HowToCleanGroutWithoutBleach"));
const HowToCleanOledTvScreenSafely = lazy(() => import("./pages/HowToCleanOledTvScreenSafely"));
const WhyPetSkinAllergiesStartInCarpet = lazy(() => import("./pages/WhyPetSkinAllergiesStartInCarpet"));
const PetDanderAirQuality = lazy(() => import("./pages/PetDanderAirQuality"));
const PetSneezingHouseholdDust = lazy(() => import("./pages/PetSneezingHouseholdDust"));
const AllergenFreeHomeForPets = lazy(() => import("./pages/AllergenFreeHomeForPets"));
const SeasonalVsHouseholdPetAllergies = lazy(() => import("./pages/SeasonalVsHouseholdPetAllergies"));
const HepaFiltersPetsAsthma = lazy(() => import("./pages/HepaFiltersPetsAsthma"));
const CleaningProductPoisoningPets = lazy(() => import("./pages/CleaningProductPoisoningPets"));
const WhatPetSafeCleaningMeans = lazy(() => import("./pages/WhatPetSafeCleaningMeans"));
const HowOftenCleanPetBowls = lazy(() => import("./pages/HowOftenCleanPetBowls"));
const ChoosePetSafeCleaningCompany = lazy(() => import("./pages/ChoosePetSafeCleaningCompany"));
const HouseCleaningCostCity = lazy(() => import("./pages/HouseCleaningCostCity"));
const DeepVsRegularCleaning = lazy(() => import("./pages/DeepVsRegularCleaning"));
const WhatsIncludedDeepCleaning = lazy(() => import("./pages/WhatsIncludedDeepCleaning"));
const SignsAgingParentNeedsHelp = lazy(() => import("./pages/SignsAgingParentNeedsHelp"));
const CleanHomeFallPrevention = lazy(() => import("./pages/CleanHomeFallPrevention"));
const CleaningServiceVsCaregiver = lazy(() => import("./pages/CleaningServiceVsCaregiver"));
const HowToHireCleaningServiceElderly = lazy(() => import("./pages/HowToHireCleaningServiceElderly"));
const HouseCleaningSeniorsSilverSpring = lazy(() => import("./pages/HouseCleaningSeniorsSilverSpring"));
const AgingInPlaceMontgomeryCounty = lazy(() => import("./pages/AgingInPlaceMontgomeryCounty"));
const RealDeepCleaningProjectBethesda = lazy(() => import("./pages/RealDeepCleaningProjectBethesda"));
const HowOftenHireCleaningService = lazy(() => import("./pages/HowOftenHireCleaningService"));
const OneTimeVsRecurringCleaning = lazy(() => import("./pages/OneTimeVsRecurringCleaning"));
const HowMuchDeepCleaningCosts = lazy(() => import("./pages/HowMuchDeepCleaningCosts"));
const WhatsIncludedStandardCleaning = lazy(() => import("./pages/WhatsIncludedStandardCleaning"));
const IsProfessionalCleaningWorthIt = lazy(() => import("./pages/IsProfessionalCleaningWorthIt"));
const MoveOutCleaningCostMaryland = lazy(() => import("./pages/MoveOutCleaningCostMaryland"));
const BestHouseCleaningRockville = lazy(() => import("./pages/BestHouseCleaningRockville"));
const BestHouseCleaningBethesda = lazy(() => import("./pages/BestHouseCleaningBethesda"));
const DeepCleaningCostMaryland = lazy(() => import("./pages/DeepCleaningCostMaryland"));
const PostHolidayCleanup = lazy(() => import("./pages/PostHolidayCleanup"));
const CleaningCompanyVsIndependentCleaner = lazy(() => import("./pages/CleaningCompanyVsIndependentCleaner"));
const LocalCleaningCompanyVsFranchise = lazy(() => import("./pages/LocalCleaningCompanyVsFranchise"));
const QuestionsToAskBeforeHiringHouseCleaner = lazy(() => import("./pages/QuestionsToAskBeforeHiringHouseCleaner"));
const WhyFirstHouseCleaningCostsMore = lazy(() => import("./pages/WhyFirstHouseCleaningCostsMore"));
const FlatRateVsHourlyHouseCleaning = lazy(() => import("./pages/FlatRateVsHourlyHouseCleaning"));
const RedFlagsHouseCleaningService = lazy(() => import("./pages/RedFlagsHouseCleaningService"));
const HiddenFeesHouseCleaning = lazy(() => import("./pages/HiddenFeesHouseCleaning"));
const HouseTooMessyForCleaningService = lazy(() => import("./pages/HouseTooMessyForCleaningService"));
const HowLongDeepCleaningTakes = lazy(() => import("./pages/HowLongDeepCleaningTakes"));
const HowOftenDeepClean = lazy(() => import("./pages/HowOftenDeepClean"));
const DeepCleaningBeforeSelling = lazy(() => import("./pages/DeepCleaningBeforeSelling"));
const DeepCleaningForApartments = lazy(() => import("./pages/DeepCleaningForApartments"));
const EcoFriendlyDeepCleaning = lazy(() => import("./pages/EcoFriendlyDeepCleaning"));
const AirbnbCleaningChecklist = lazy(() => import("./pages/AirbnbCleaningChecklist"));
const AirbnbCleaningFee = lazy(() => import("./pages/AirbnbCleaningFee"));
const KitchenCleaningChecklist = lazy(() => import("./pages/KitchenCleaningChecklist"));
const LivingRoomCleaningChecklist = lazy(() => import("./pages/LivingRoomCleaningChecklist"));
const HowMuchTipHouseCleaner = lazy(() => import("./pages/HowMuchTipHouseCleaner"));
const MoveInCleaningChecklist = lazy(() => import("./pages/MoveInCleaningChecklist"));
const BestHouseCleaningSilverSpring = lazy(() => import("./pages/BestHouseCleaningSilverSpring"));
const HouseCleaningGuideGermantown = lazy(() => import("./pages/HouseCleaningGuideGermantown"));
const HouseCleaningGuideClarksburg = lazy(() => import("./pages/HouseCleaningGuideClarksburg"));
const PostConstructionCleaningMontgomeryCounty = lazy(() => import("./pages/PostConstructionCleaningMontgomeryCounty"));
const MostForgottenCleaningAreas = lazy(() => import("./pages/MostForgottenCleaningAreas"));
const WhyDustBuildsUpMaryland = lazy(() => import("./pages/WhyDustBuildsUpMaryland"));
const PrepareHomeForCleaning = lazy(() => import("./pages/PrepareHomeForCleaning"));
const KeepHouseCleanBetween = lazy(() => import("./pages/KeepHouseCleanBetween"));
const SummerCleaningChecklist = lazy(() => import("./pages/SummerCleaningChecklist"));
const HolidayCleaningChecklist = lazy(() => import("./pages/HolidayCleaningChecklist"));
const CleaningTipsWorkingProfessionals = lazy(() => import("./pages/CleaningTipsWorkingProfessionals"));
const HowToRemoveRedWineStains = lazy(() => import("./pages/HowToRemoveRedWineStains"));
const HowToGetRidOfDogSmellPetSafe = lazy(() => import("./pages/HowToGetRidOfDogSmellPetSafe"));
const HowToRemoveStickerResidueNatural = lazy(() => import("./pages/HowToRemoveStickerResidueNatural"));
const SpringCleaningMD = lazy(() => import("./pages/SpringCleaningMD"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const VanityLandingPage = lazy(() => import("./pages/VanityLandingPage"));
const HouseCleaningNearMe = lazy(() => import("./pages/HouseCleaningNearMe"));
const SeniorHomeCleaning = lazy(() => import("./pages/SeniorHomeCleaning"));
const Careers = lazy(() => import("./pages/Careers"));
const PremiumFanPage = lazy(() => import("./pages/PremiumFanPage"));
const WhyEcoFriendlyPage = lazy(() => import("./pages/WhyEcoFriendlyPage"));
const EcoFriendlyCleaningPage = lazy(() => import("./pages/EcoFriendlyCleaningPage"));
const GiftCards = lazy(() => import("./pages/GiftCards"));
const NotFound = lazy(() => import("./pages/NotFound"));
const MasterServicesPage = lazy(() => import("@/pages/MasterServicesPage"));
// Priority location pages — must come before generic /locations/:slug/:serviceSlug
const RockvilleHouseCleaningPage = lazy(() => import("./pages/locations/rockville-md/HouseCleaningPage"));
const RockvilleRecurringCleaningPage = lazy(() => import("./pages/locations/rockville-md/RecurringCleaningPage"));
const RockvilleDeepCleaningPage = lazy(() => import("./pages/locations/rockville-md/DeepCleaningPage"));
const RockvilleMoveOutCleaningPage = lazy(() => import("./pages/locations/rockville-md/MoveOutCleaningPage"));
const RockvilleAirbnbCleaningPage = lazy(() => import("./pages/locations/rockville-md/AirbnbCleaningPage"));
const RockvilleOfficeCleaningPage = lazy(() => import("./pages/locations/rockville-md/OfficeCleaningPage"));
const RockvillePostConstructionPage = lazy(() => import("./pages/locations/rockville-md/PostConstructionCleaningPage"));
const NorthBethesdaHouseCleaningPage = lazy(() => import("./pages/locations/north-bethesda-md/HouseCleaningPage"));
const NorthBethesdaRecurringCleaningPage = lazy(() => import("./pages/locations/north-bethesda-md/RecurringCleaningPage"));
const NorthBethesdaDeepCleaningPage = lazy(() => import("./pages/locations/north-bethesda-md/DeepCleaningPage"));
const NorthBethesdaMoveOutCleaningPage = lazy(() => import("./pages/locations/north-bethesda-md/MoveOutCleaningPage"));
const NorthBethesdaAirbnbCleaningPage = lazy(() => import("./pages/locations/north-bethesda-md/AirbnbCleaningPage"));
const NorthBethesdaOfficeCleaningPage = lazy(() => import("./pages/locations/north-bethesda-md/OfficeCleaningPage"));
const NorthBethesdaPostConstructionPage = lazy(() => import("./pages/locations/north-bethesda-md/PostConstructionCleaningPage"));
const BethesdaHouseCleaningPage = lazy(() => import("./pages/locations/bethesda-md/HouseCleaningPage"));
const BethesdaRecurringCleaningPage = lazy(() => import("./pages/locations/bethesda-md/RecurringCleaningPage"));
const BethesdaDeepCleaningPage = lazy(() => import("./pages/locations/bethesda-md/DeepCleaningPage"));
const BethesdaMoveOutCleaningPage = lazy(() => import("./pages/locations/bethesda-md/MoveOutCleaningPage"));
const BethesdaAirbnbCleaningPage = lazy(() => import("./pages/locations/bethesda-md/AirbnbCleaningPage"));
const BethesdaOfficeCleaningPage = lazy(() => import("./pages/locations/bethesda-md/OfficeCleaningPage"));
const BethesdaPostConstructionPage = lazy(() => import("./pages/locations/bethesda-md/PostConstructionCleaningPage"));
const PotomacHouseCleaningPage = lazy(() => import("./pages/locations/potomac-md/HouseCleaningPage"));
const PotomacRecurringCleaningPage = lazy(() => import("./pages/locations/potomac-md/RecurringCleaningPage"));
const PotomacDeepCleaningPage = lazy(() => import("./pages/locations/potomac-md/DeepCleaningPage"));
const PotomacMoveOutCleaningPage = lazy(() => import("./pages/locations/potomac-md/MoveOutCleaningPage"));
const PotomacAirbnbCleaningPage = lazy(() => import("./pages/locations/potomac-md/AirbnbCleaningPage"));
const PotomacOfficeCleaningPage = lazy(() => import("./pages/locations/potomac-md/OfficeCleaningPage"));
const PotomacPostConstructionPage = lazy(() => import("./pages/locations/potomac-md/PostConstructionCleaningPage"));
const ChevyChaseHouseCleaningPage = lazy(() => import("./pages/locations/chevy-chase-md/HouseCleaningPage"));
const ChevyChaseRecurringCleaningPage = lazy(() => import("./pages/locations/chevy-chase-md/RecurringCleaningPage"));
const ChevyChaseDeepCleaningPage = lazy(() => import("./pages/locations/chevy-chase-md/DeepCleaningPage"));
const ChevyChaseMoveOutCleaningPage = lazy(() => import("./pages/locations/chevy-chase-md/MoveOutCleaningPage"));
const ChevyChaseAirbnbCleaningPage = lazy(() => import("./pages/locations/chevy-chase-md/AirbnbCleaningPage"));
const ChevyChaseOfficeCleaningPage = lazy(() => import("./pages/locations/chevy-chase-md/OfficeCleaningPage"));
const ChevyChasePostConstructionPage = lazy(() => import("./pages/locations/chevy-chase-md/PostConstructionCleaningPage"));
const OlneyHouseCleaningPage = lazy(() => import("./pages/locations/olney-md/HouseCleaningPage"));
const OlneyRecurringCleaningPage = lazy(() => import("./pages/locations/olney-md/RecurringCleaningPage"));
const OlneyDeepCleaningPage = lazy(() => import("./pages/locations/olney-md/DeepCleaningPage"));
const OlneyMoveOutCleaningPage = lazy(() => import("./pages/locations/olney-md/MoveOutCleaningPage"));
const OlneyAirbnbCleaningPage = lazy(() => import("./pages/locations/olney-md/AirbnbCleaningPage"));
const OlneyOfficeCleaningPage = lazy(() => import("./pages/locations/olney-md/OfficeCleaningPage"));
const OlneyPostConstructionPage = lazy(() => import("./pages/locations/olney-md/PostConstructionCleaningPage"));
const SilverSpringHouseCleaningPage = lazy(() => import("./pages/locations/silver-spring-md/HouseCleaningPage"));
const SilverSpringRecurringCleaningPage = lazy(() => import("./pages/locations/silver-spring-md/RecurringCleaningPage"));
const SilverSpringDeepCleaningPage = lazy(() => import("./pages/locations/silver-spring-md/DeepCleaningPage"));
const SilverSpringMoveOutCleaningPage = lazy(() => import("./pages/locations/silver-spring-md/MoveOutCleaningPage"));
const SilverSpringAirbnbCleaningPage = lazy(() => import("./pages/locations/silver-spring-md/AirbnbCleaningPage"));
const SilverSpringOfficeCleaningPage = lazy(() => import("./pages/locations/silver-spring-md/OfficeCleaningPage"));
const SilverSpringPostConstructionPage = lazy(() => import("./pages/locations/silver-spring-md/PostConstructionCleaningPage"));
const GaithersburgHouseCleaningPage = lazy(() => import("./pages/locations/gaithersburg-md/HouseCleaningPage"));
const GaithersburgRecurringCleaningPage = lazy(() => import("./pages/locations/gaithersburg-md/RecurringCleaningPage"));
const GaithersburgDeepCleaningPage = lazy(() => import("./pages/locations/gaithersburg-md/DeepCleaningPage"));
const GaithersburgMoveOutCleaningPage = lazy(() => import("./pages/locations/gaithersburg-md/MoveOutCleaningPage"));
const GaithersburgAirbnbCleaningPage = lazy(() => import("./pages/locations/gaithersburg-md/AirbnbCleaningPage"));
const GaithersburgOfficeCleaningPage = lazy(() => import("./pages/locations/gaithersburg-md/OfficeCleaningPage"));
const GaithersburgPostConstructionPage = lazy(() => import("./pages/locations/gaithersburg-md/PostConstructionCleaningPage"));
const GermantownHouseCleaningPage = lazy(() => import("./pages/locations/germantown-md/HouseCleaningPage"));
const GermantownRecurringCleaningPage = lazy(() => import("./pages/locations/germantown-md/RecurringCleaningPage"));
const GermantownDeepCleaningPage = lazy(() => import("./pages/locations/germantown-md/DeepCleaningPage"));
const GermantownMoveOutCleaningPage = lazy(() => import("./pages/locations/germantown-md/MoveOutCleaningPage"));
const GermantownAirbnbCleaningPage = lazy(() => import("./pages/locations/germantown-md/AirbnbCleaningPage"));
const GermantownOfficeCleaningPage = lazy(() => import("./pages/locations/germantown-md/OfficeCleaningPage"));
const GermantownPostConstructionPage = lazy(() => import("./pages/locations/germantown-md/PostConstructionCleaningPage"));
const WheatonHouseCleaningPage = lazy(() => import("./pages/locations/wheaton-md/HouseCleaningPage"));
const WheatonRecurringCleaningPage = lazy(() => import("./pages/locations/wheaton-md/RecurringCleaningPage"));
const WheatonDeepCleaningPage = lazy(() => import("./pages/locations/wheaton-md/DeepCleaningPage"));
const WheatonMoveOutCleaningPage = lazy(() => import("./pages/locations/wheaton-md/MoveOutCleaningPage"));
const WheatonAirbnbCleaningPage = lazy(() => import("./pages/locations/wheaton-md/AirbnbCleaningPage"));
const WheatonOfficeCleaningPage = lazy(() => import("./pages/locations/wheaton-md/OfficeCleaningPage"));
const WheatonPostConstructionPage = lazy(() => import("./pages/locations/wheaton-md/PostConstructionCleaningPage"));
const KensingtonHouseCleaningPage = lazy(() => import("./pages/locations/kensington-md/HouseCleaningPage"));
const KensingtonRecurringCleaningPage = lazy(() => import("./pages/locations/kensington-md/RecurringCleaningPage"));
const KensingtonDeepCleaningPage = lazy(() => import("./pages/locations/kensington-md/DeepCleaningPage"));
const KensingtonMoveOutCleaningPage = lazy(() => import("./pages/locations/kensington-md/MoveOutCleaningPage"));
const KensingtonAirbnbCleaningPage = lazy(() => import("./pages/locations/kensington-md/AirbnbCleaningPage"));
const KensingtonOfficeCleaningPage = lazy(() => import("./pages/locations/kensington-md/OfficeCleaningPage"));
const KensingtonPostConstructionPage = lazy(() => import("./pages/locations/kensington-md/PostConstructionCleaningPage"));
// Spanish pages — Fase 1 (17 pages)
const HomeES = lazy(() => import("./pages/es/HomeES"));
const LimpiezaDeCasasPage = lazy(() => import("./pages/es/LimpiezaDeCasasPage"));
const LimpiezaProfundaPage = lazy(() => import("./pages/es/LimpiezaProfundaPage"));
const LimpiezaDeMudanzaPage = lazy(() => import("./pages/es/LimpiezaDeMudanzaPage"));
const LimpiezaAirbnbPage = lazy(() => import("./pages/es/LimpiezaAirbnbPage"));
const LimpiezaPostConstruccionPage = lazy(() => import("./pages/es/LimpiezaPostConstruccionPage"));
const LimpiezaRecurrentePage = lazy(() => import("./pages/es/LimpiezaRecurrentePage"));
const NosotrosPage = lazy(() => import("./pages/es/NosotrosPage"));
const ContactoPage = lazy(() => import("./pages/es/ContactoPage"));
const SilverSpringES = lazy(() => import("./pages/es/areas/SilverSpringES"));
const WheatonES = lazy(() => import("./pages/es/areas/WheatonES"));
const RockvilleES = lazy(() => import("./pages/es/areas/RockvilleES"));
const GaithersburgES = lazy(() => import("./pages/es/areas/GaithersburgES"));
const GermantownES = lazy(() => import("./pages/es/areas/GermantownES"));
const AspenHillES = lazy(() => import("./pages/es/areas/AspenHillES"));
const TakomaParkES = lazy(() => import("./pages/es/areas/TakomaParkES"));
const MontgomeryVillageES = lazy(() => import("./pages/es/areas/MontgomeryVillageES"));

const AppRoutesLazy = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/premium-clean" element={<PremiumFanPage />} />
    <Route path="/about" element={<About />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/contact" element={<Contact />} />
    {/* Both / and /services render the page (canonical is /services/). The previous
        Navigate made the prerendered trailing-slash variant render an empty shell. */}
    <Route path="/services/" element={<MasterServicesPage />} />
    <Route path="/services" element={<MasterServicesPage />} />
    <Route path="/services/deep-cleaning" element={<DeepCleaningPage />} />
    <Route path="/services/recurring-cleaning" element={<RecurringCleaningPage />} />
    <Route path="/services/eco-friendly-cleaning" element={<EcoFriendlyCleaningPage />} />
    <Route path="/services/house-cleaning" element={<HouseCleaningPage />} />
    <Route path="/services/airbnb-cleaning" element={<AirbnbCleaningPage />} />
    <Route path="/services/condo-cleaning" element={<CondoCleaningPage />} />
    <Route path="/services/maid-service" element={<MaidServicePage />} />
    <Route path="/services/kitchen-cleaning" element={<KitchenCleaningPage />} />
    <Route path="/services/bathroom-cleaning" element={<BathroomCleaningPage />} />
    <Route path="/services/:slug" element={<ServicePage />} />
    <Route path="/why-eco-friendly-cleaning" element={<WhyEcoFriendlyPage />} />
    <Route path="/faq" element={<FAQPage />} />
    <Route path="/pricing" element={<PricingPage />} />
    <Route path="/resources" element={<Blog />} />
    {/* /resources/faq is the central FAQ hub (not the category listing). */}
    <Route path="/resources/faq" element={<FaqHub />} />
    {/* Resource Center category indexes — static paths, so they rank above /resources/:slug */}
    {RESOURCE_CATEGORIES.filter((c) => c.slug !== "faq").map((c) => (
      <Route key={c.slug} path={`/resources/${c.slug}`} element={<ResourceCategory slug={c.slug} />} />
    ))}
    <Route path="/resources/topic/:topicSlug" element={<BlogTopic />} />
    <Route path="/resources/how-to-clean-carpet-home-apartment" element={<HowToCleanCarpetBlog />} />
    <Route path="/resources/how-to-remove-candle-wax-eco-friendly" element={<HowToRemoveCandleWaxBlog />} />
    <Route path="/resources/how-to-clean-your-washing-machine-eco-friendly" element={<HowToCleanYourWashingMachineEcoFriendly />} />
    <Route path="/resources/how-to-get-rid-of-mildew-smell-naturally" element={<HowToGetRidOfMildewSmellNaturally />} />
    <Route path="/resources/how-to-get-cigarette-smell-out-of-your-house" element={<HowToGetCigaretteSmellOutOfYourHouse />} />
    <Route path="/resources/how-to-remove-sharpie-safely" element={<HowToRemoveSharpieSafely />} />
    <Route path="/resources/how-to-remove-hard-water-stains-naturally" element={<HowToRemoveHardWaterStainsNaturally />} />
    <Route path="/resources/how-to-clean-grout-without-bleach" element={<HowToCleanGroutWithoutBleach />} />
    <Route path="/resources/how-to-clean-oled-tv-screen-safely" element={<HowToCleanOledTvScreenSafely />} />
    <Route path="/resources/why-pet-skin-allergies-start-in-carpet" element={<WhyPetSkinAllergiesStartInCarpet />} />
    <Route path="/resources/pet-dander-air-quality" element={<PetDanderAirQuality />} />
    <Route path="/resources/pet-sneezing-household-dust" element={<PetSneezingHouseholdDust />} />
    <Route path="/resources/allergen-free-home-dog-cat-owners" element={<AllergenFreeHomeForPets />} />
    <Route path="/resources/seasonal-vs-household-pet-allergies" element={<SeasonalVsHouseholdPetAllergies />} />
    <Route path="/resources/hepa-filters-pets-asthma" element={<HepaFiltersPetsAsthma />} />
    <Route path="/resources/cleaning-product-poisoning-in-pets" element={<CleaningProductPoisoningPets />} />
    <Route path="/resources/what-pet-safe-cleaning-really-means" element={<WhatPetSafeCleaningMeans />} />
    <Route path="/resources/how-often-to-clean-pet-bowls-and-toys" element={<HowOftenCleanPetBowls />} />
    <Route path="/resources/choose-pet-safe-cleaning-company" element={<ChoosePetSafeCleaningCompany />} />
    <Route path="/resources/house-cleaning-cost-bethesda-md" element={<HouseCleaningCostCity citySlug="bethesda-md" />} />
    <Route path="/resources/house-cleaning-cost-rockville-md" element={<HouseCleaningCostCity citySlug="rockville-md" />} />
    <Route path="/resources/house-cleaning-cost-silver-spring-md" element={<HouseCleaningCostCity citySlug="silver-spring-md" />} />
    <Route path="/resources/house-cleaning-cost-arlington-va" element={<HouseCleaningCostCity citySlug="arlington-va" />} />
    <Route path="/resources/house-cleaning-cost-alexandria-va" element={<HouseCleaningCostCity citySlug="alexandria-va" />} />
    <Route path="/resources/deep-cleaning-vs-regular-cleaning" element={<DeepVsRegularCleaning />} />
    <Route path="/resources/what-is-included-in-a-deep-cleaning" element={<WhatsIncludedDeepCleaning />} />
    <Route path="/resources/signs-aging-parent-needs-help-housekeeping" element={<SignsAgingParentNeedsHelp />} />
    <Route path="/resources/clean-home-fall-prevention-seniors" element={<CleanHomeFallPrevention />} />
    <Route path="/resources/cleaning-service-vs-caregiver-elderly" element={<CleaningServiceVsCaregiver />} />
    <Route path="/resources/how-to-hire-cleaning-service-elderly-parents" element={<HowToHireCleaningServiceElderly />} />
    <Route path="/resources/house-cleaning-seniors-silver-spring-leisure-world" element={<HouseCleaningSeniorsSilverSpring />} />
    <Route path="/resources/aging-in-place-montgomery-county-cleaning" element={<AgingInPlaceMontgomeryCounty />} />
    <Route path="/resources/real-deep-cleaning-project-bethesda-home" element={<RealDeepCleaningProjectBethesda />} />
    <Route path="/resources/how-often-should-you-hire-a-cleaning-service" element={<HowOftenHireCleaningService />} />
    <Route path="/resources/one-time-vs-recurring-cleaning" element={<OneTimeVsRecurringCleaning />} />
    <Route path="/resources/how-much-does-deep-cleaning-cost" element={<HowMuchDeepCleaningCosts />} />
    <Route path="/resources/what-is-included-in-a-standard-cleaning" element={<WhatsIncludedStandardCleaning />} />
    <Route path="/resources/is-professional-house-cleaning-worth-it" element={<IsProfessionalCleaningWorthIt />} />
    <Route path="/resources/move-out-cleaning-cost-maryland" element={<MoveOutCleaningCostMaryland />} />
    <Route path="/resources/best-house-cleaning-service-rockville-md" element={<BestHouseCleaningRockville />} />
    <Route path="/resources/best-house-cleaning-service-silver-spring-md" element={<BestHouseCleaningSilverSpring />} />
    <Route path="/resources/house-cleaning-guide-germantown-md" element={<HouseCleaningGuideGermantown />} />
    <Route path="/resources/house-cleaning-guide-clarksburg-md" element={<HouseCleaningGuideClarksburg />} />
    <Route path="/resources/post-construction-cleaning-montgomery-county-md" element={<PostConstructionCleaningMontgomeryCounty />} />
    <Route path="/resources/best-house-cleaning-service-bethesda-md" element={<BestHouseCleaningBethesda />} />
    <Route path="/resources/deep-cleaning-cost-maryland" element={<DeepCleaningCostMaryland />} />
    <Route path="/resources/how-to-clean-up-after-a-party" element={<PostHolidayCleanup />} />
    <Route path="/resources/cleaning-company-vs-independent-cleaner" element={<CleaningCompanyVsIndependentCleaner />} />
    <Route path="/resources/local-cleaning-company-vs-franchise" element={<LocalCleaningCompanyVsFranchise />} />
    <Route path="/resources/questions-to-ask-before-hiring-house-cleaner" element={<QuestionsToAskBeforeHiringHouseCleaner />} />
    <Route path="/resources/why-first-house-cleaning-costs-more" element={<WhyFirstHouseCleaningCostsMore />} />
    <Route path="/resources/flat-rate-vs-hourly-house-cleaning" element={<FlatRateVsHourlyHouseCleaning />} />
    <Route path="/resources/red-flags-house-cleaning-service" element={<RedFlagsHouseCleaningService />} />
    <Route path="/resources/hidden-fees-house-cleaning" element={<HiddenFeesHouseCleaning />} />
    <Route path="/resources/house-too-messy-for-cleaning-service" element={<HouseTooMessyForCleaningService />} />
    <Route path="/resources/how-long-does-deep-cleaning-take" element={<HowLongDeepCleaningTakes />} />
    <Route path="/resources/how-often-should-you-deep-clean" element={<HowOftenDeepClean />} />
    <Route path="/resources/deep-cleaning-before-selling-house" element={<DeepCleaningBeforeSelling />} />
    <Route path="/resources/deep-cleaning-for-apartments" element={<DeepCleaningForApartments />} />
    <Route path="/resources/eco-friendly-deep-cleaning" element={<EcoFriendlyDeepCleaning />} />
    <Route path="/resources/airbnb-cleaning-checklist" element={<AirbnbCleaningChecklist />} />
    <Route path="/resources/airbnb-cleaning-fee" element={<AirbnbCleaningFee />} />
    <Route path="/resources/kitchen-cleaning-checklist" element={<KitchenCleaningChecklist />} />
    <Route path="/resources/living-room-cleaning-checklist" element={<LivingRoomCleaningChecklist />} />
    <Route path="/resources/how-much-tip-house-cleaner" element={<HowMuchTipHouseCleaner />} />
    <Route path="/resources/move-in-cleaning-checklist" element={<MoveInCleaningChecklist />} />
    <Route path="/resources/most-forgotten-areas-when-cleaning" element={<MostForgottenCleaningAreas />} />
    <Route path="/resources/why-dust-builds-up-maryland-homes" element={<WhyDustBuildsUpMaryland />} />
    <Route path="/resources/how-to-prepare-home-for-professional-cleaning" element={<PrepareHomeForCleaning />} />
    <Route path="/resources/how-to-keep-house-clean-between-cleanings" element={<KeepHouseCleanBetween />} />
    <Route path="/resources/summer-cleaning-checklist-maryland" element={<SummerCleaningChecklist />} />
    <Route path="/resources/holiday-cleaning-checklist-dmv" element={<HolidayCleaningChecklist />} />
    <Route path="/resources/cleaning-tips-for-working-professionals" element={<CleaningTipsWorkingProfessionals />} />
    <Route path="/resources/how-to-remove-red-wine-stains" element={<HowToRemoveRedWineStains />} />
    <Route path="/resources/how-to-get-rid-of-dog-smell-pet-safe" element={<HowToGetRidOfDogSmellPetSafe />} />
    <Route path="/resources/how-to-remove-sticker-residue-natural" element={<HowToRemoveStickerResidueNatural />} />
    <Route path="/resources/:slug" element={<BlogPost />} />
    <Route path="/spring-cleaning-md" element={<SpringCleaningMD />} />
    <Route path="/house-cleaning-near-me" element={<HouseCleaningNearMe />} />
    <Route path="/senior-home-cleaning-montgomery-county-md" element={<SeniorHomeCleaning />} />
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
    <Route path="/es" element={<HomeES />} />
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
    <Route path="/checklist" element={<CleaningChecklistPage />} />
    <Route path="/:stateSlug" element={<LocationHub />} />
    <Route path="/locations/:slug/:serviceSlug" element={<ServiceLocationPage />} />
    <Route path="/locations/:slug" element={<CityPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutesLazy;
