import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { cities, type CityData } from "@/data/locations";

import imgKitchen from "@/assets/gallery/clean-kitchen.webp";
import imgBathroom from "@/assets/gallery/clean-bathroom.webp";
import imgLiving from "@/assets/gallery/clean-living-room.webp";
import imgBedroom from "@/assets/gallery/clean-bedroom.webp";
import imgDining from "@/assets/gallery/clean-dining.webp";
import imgEntryway from "@/assets/gallery/clean-entryway.webp";
import imgBedroomBA from "@/assets/before-after/bedroom.webp";
import imgKidsRoom from "@/assets/before-after/kids-room.webp";
import imgKitchenBrown from "@/assets/before-after/kitchen-brown-after.webp";
import imgKitchenGranite from "@/assets/before-after/kitchen-granite-after.webp";
import imgKitchenIsland from "@/assets/before-after/kitchen-island-after.webp";
import imgStove from "@/assets/before-after/stove-after.webp";
import imgTeenRoom from "@/assets/before-after/teen-room.webp";
import imgCleanerBlinds from "@/assets/cleaner-blinds.webp";
import imgCleanerMopping from "@/assets/cleaner-mopping.webp";
import imgCleanerSupplies from "@/assets/cleaner-supplies.webp";
import imgEcoProducts from "@/assets/eco-products.webp";
import imgHappyClient from "@/assets/happy-client.webp";
import imgHeroHome from "@/assets/hero-clean-home.webp";

/** One unique image per city slug */
const cityImageMap: Record<string, string> = {
  // Maryland
  "rockville-md": imgKitchen,
  "silver-spring-md": imgBathroom,
  "bethesda-md": imgLiving,
  "germantown-md": imgBedroom,
  "gaithersburg-md": imgDining,
  "potomac-md": imgEntryway,
  "frederick-md": imgBedroomBA,
  "urbana-md": imgKidsRoom,
  "clarksburg-md": imgKitchenBrown,
  "damascus-md": imgKitchenGranite,
  "monrovia-md": imgKitchenIsland,
  "takoma-park-md": imgStove,
  "columbia-md": imgTeenRoom,
  "ellicott-city-md": imgCleanerBlinds,
  "new-market-md": imgCleanerMopping,
  "montgomery-county-md": imgCleanerSupplies,
  "frederick-county-md": imgEcoProducts,
  "howard-county-md": imgHappyClient,
  "prince-georges-county-md": imgHeroHome,
  "kensington-md": imgEntryway,
  "chevy-chase-md": imgKitchenGranite,
  "college-park-md": imgBedroomBA,
  "laurel-md": imgTeenRoom,
  "bowie-md": imgKitchenBrown,
  "wheaton-md": imgDining,
  "montgomery-village-md": imgBathroom,
  "hyattsville-md": imgLiving,
  "north-potomac-md": imgBedroom,
  "kentlands-md": imgKitchenIsland,
  "north-bethesda-md": imgKidsRoom,
  "olney-md": imgStove,
  "burtonsville-md": imgCleanerMopping,
  "boyds-md": imgCleanerBlinds,
  "brookeville-md": imgHeroHome,
  // Washington DC
  "washington-dc-nw": imgHeroHome,
  "washington-dc-ne": imgKitchenIsland,
  "capitol-hill-dc": imgKitchen,
  "georgetown-dc": imgLiving,
  "dupont-circle-dc": imgBathroom,
  "adams-morgan-dc": imgDining,
  "downtown-dc": imgBedroom,
  "shaw-dc": imgTeenRoom,
  "columbia-heights-dc": imgKidsRoom,
  "navy-yard-dc": imgKitchenGranite,
  // Northern Virginia
  "arlington-va": imgHeroHome,
  "fairfax-va": imgKitchenIsland,
  "mclean-va": imgBedroomBA,
  "alexandria-va": imgCleanerBlinds,
  "falls-church-va": imgCleanerMopping,
  "vienna-va": imgHappyClient,
  "tysons-va": imgKitchenBrown,
  "reston-va": imgEcoProducts,
  "herndon-va": imgStove,
  "annandale-va": imgCleanerSupplies,
};

/** Fallback pool for any city not in the map above */
const fallbackImages = [
  imgKitchen, imgBathroom, imgLiving, imgBedroom, imgDining, imgEntryway,
  imgBedroomBA, imgKidsRoom, imgKitchenBrown, imgKitchenGranite,
  imgKitchenIsland, imgStove, imgTeenRoom, imgCleanerBlinds,
  imgCleanerMopping, imgCleanerSupplies, imgEcoProducts, imgHappyClient, imgHeroHome,
];

/** Premium phrases keyed by city slug */
const premiumPhrases: Record<string, string> = {
  "rockville-md": "Premium residential cleaning for Rockville homeowners.",
  "silver-spring-md": "Detail-driven house cleaning in Silver Spring.",
  "bethesda-md": "Trusted home cleaning services in Bethesda.",
  "germantown-md": "Convenient premium cleaning for Germantown families.",
  "gaithersburg-md": "Professional recurring cleaning in Gaithersburg.",
  "potomac-md": "Refined residential cleaning for Potomac homes.",
  "frederick-md": "Reliable premium home cleaning in Frederick.",
  "urbana-md": "Customized residential cleaning for Urbana homes.",
  "clarksburg-md": "Dependable home care for Clarksburg families.",
  "damascus-md": "Trusted house cleaning in the heart of Damascus.",
  "monrovia-md": "Personalized premium cleaning in Monrovia.",
  "takoma-park-md": "Eco-conscious home cleaning in Takoma Park.",
  "columbia-md": "Premium cleaning expertise for Columbia homes.",
  "ellicott-city-md": "Elevated cleaning solutions for Ellicott City.",
  "new-market-md": "Professional home cleaning in New Market.",
  "montgomery-county-md": "Trusted cleaning across Montgomery County.",
  "frederick-county-md": "Reliable service throughout Frederick County.",
  "howard-county-md": "Premium residential cleaning in Howard County.",
  "prince-georges-county-md": "Professional cleaning in Prince George's County.",
  "washington-dc-nw": "Premium house cleaning in Northwest Washington.",
  "washington-dc-ne": "Reliable home cleaning in Northeast Washington.",
  "capitol-hill-dc": "Trusted residential care on Capitol Hill.",
  "georgetown-dc": "Elevated cleaning services in Georgetown.",
  "dupont-circle-dc": "Refined home cleaning in Dupont Circle.",
  "adams-morgan-dc": "Detail-driven cleaning in Adams Morgan.",
  "downtown-dc": "Professional cleaning for Downtown Washington.",
  "arlington-va": "Reliable premium cleaning in Arlington.",
  "fairfax-va": "Trusted home cleaning services in Fairfax.",
  "mclean-va": "Elevated residential cleaning for McLean homes.",
  "alexandria-va": "Professional house cleaning in Alexandria.",
  "falls-church-va": "Convenient premium cleaning in Falls Church.",
  "vienna-va": "Refined home cleaning services in Vienna.",
  "tysons-va": "Premium residential cleaning in Tysons.",
  "kensington-md": "Personalized cleaning services in Kensington.",
  "chevy-chase-md": "Premium home cleaning in Chevy Chase.",
  "college-park-md": "Reliable house cleaning in College Park.",
  "laurel-md": "Professional cleaning services in Laurel.",
  "bowie-md": "Trusted home care for Bowie families.",
  "wheaton-md": "Dependable cleaning in Wheaton.",
  "montgomery-village-md": "Quality home cleaning in Montgomery Village.",
  "hyattsville-md": "Professional cleaning in Hyattsville.",
  "north-potomac-md": "Premium cleaning for North Potomac homes.",
  "kentlands-md": "Eco-friendly cleaning in Kentlands.",
  "north-bethesda-md": "Premium residential care in North Bethesda.",
  "olney-md": "Trusted cleaning services in Olney.",
  "burtonsville-md": "Reliable home cleaning in Burtonsville.",
  "boyds-md": "Professional cleaning for Boyds homes.",
  "brookeville-md": "Premium home cleaning in Brookeville.",
  "shaw-dc": "Detail-driven cleaning in Shaw.",
  "columbia-heights-dc": "Trusted home care in Columbia Heights.",
  "navy-yard-dc": "Professional cleaning at Navy Yard.",
  "reston-va": "Refined residential cleaning in Reston.",
  "herndon-va": "Reliable premium cleaning in Herndon.",
  "annandale-va": "Trusted home cleaning in Annandale.",
};

interface CityGalleryProps {
  stateSlug?: string;
  limit?: number;
  title?: string;
  subtitle?: string;
}

const CityGallery = ({
  stateSlug,
  limit,
  title = "Trusted House Cleaning Across Maryland, DC & Northern Virginia",
  subtitle = "Capital Clean Care provides premium, eco-friendly residential cleaning to families and homeowners across the DMV region. Explore your neighborhood below.",
}: CityGalleryProps) => {
  let filteredCities: CityData[] = stateSlug
    ? cities.filter((c) => c.stateSlug === stateSlug)
    : cities;

  if (limit) filteredCities = filteredCities.slice(0, limit);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block text-accent font-medium text-xs tracking-[0.2em] uppercase mb-4">
            Areas We Serve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.75rem] font-bold mb-5 leading-tight">
            {title}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Grid — every city gets its own image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredCities.map((city, index) => {
            const img = cityImageMap[city.slug] ?? fallbackImages[index % fallbackImages.length];
            const phrase = premiumPhrases[city.slug] || `Professional cleaning services in ${city.name}.`;
            const label = city.state !== "DC" ? `${city.name}, ${city.state}` : city.name;
            return <ImageCard key={city.slug} city={city} label={label} phrase={phrase} img={img} />;
          })}
        </div>
      </div>
    </section>
  );
};

/* ── Image Card ──────────────────────────────────────────── */

function ImageCard({
  city,
  label,
  phrase,
  img,
}: {
  city: CityData;
  label: string;
  phrase: string;
  img: string;
}) {
  return (
    <Link
      to={`/locations/${city.slug}`}
      className="group relative block aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ring-1 ring-border/60"
    >
      <img
        src={img}
        alt={`House cleaning in ${label}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        loading="lazy"
      />

      {/* Resting gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent transition-opacity duration-500 group-hover:opacity-0" />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-8 text-center">
        <MapPin className="h-5 w-5 text-accent mb-3 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-75 -translate-y-2 group-hover:translate-y-0" />
        <p className="text-primary-foreground/90 text-sm leading-relaxed mb-5 opacity-0 group-hover:opacity-100 transition-all duration-400 delay-150 translate-y-1 group-hover:translate-y-0 max-w-[220px]">
          {phrase}
        </p>
        <span className="inline-flex items-center gap-1.5 text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-all duration-400 delay-200 translate-y-1 group-hover:translate-y-0">
          Explore {city.name} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>

      {/* City badge */}
      <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-1">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center backdrop-blur-sm">
            <MapPin className="h-3 w-3 text-accent" />
          </div>
          <h3 className="font-heading font-semibold text-[0.95rem] text-primary-foreground drop-shadow-md tracking-wide">
            {label}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default CityGallery;
