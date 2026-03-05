import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cities, type CityData } from "@/data/locations";

import imgKitchen from "@/assets/gallery/clean-kitchen.jpg";
import imgBathroom from "@/assets/gallery/clean-bathroom.jpg";
import imgLiving from "@/assets/gallery/clean-living-room.jpg";
import imgBedroom from "@/assets/gallery/clean-bedroom.jpg";
import imgDining from "@/assets/gallery/clean-dining.jpg";
import imgEntryway from "@/assets/gallery/clean-entryway.jpg";

const galleryImages = [imgKitchen, imgBathroom, imgLiving, imgBedroom, imgDining, imgEntryway];

/** Hover phrases keyed by city slug */
const hoverPhrases: Record<string, string> = {
  "rockville-md": "Personalized home cleaning services in Rockville.",
  "silver-spring-md": "Reliable house cleaning services in Silver Spring.",
  "bethesda-md": "Premium residential cleaning services in Bethesda.",
  "germantown-md": "Convenient home cleaning services in Germantown.",
  "gaithersburg-md": "Trusted house cleaning services in Gaithersburg.",
  "potomac-md": "Residential cleaning expertise for Potomac homeowners.",
  "frederick-md": "Professional house cleaning services in Frederick.",
  "urbana-md": "Customized home cleaning services in Urbana.",
  "clarksburg-md": "Reliable residential cleaning services in Clarksburg.",
  "damascus-md": "Dependable house cleaning services in Damascus.",
  "monrovia-md": "Personalized home cleaning services in Monrovia.",
  "takoma-park-md": "Eco-friendly house cleaning services in Takoma Park.",
  "columbia-md": "Premium home cleaning services in Columbia.",
  "ellicott-city-md": "Trusted house cleaning solutions in Ellicott City.",
  "new-market-md": "Professional home cleaning services in New Market.",
  "montgomery-county-md": "Trusted house cleaning services throughout Montgomery County.",
  "frederick-county-md": "Reliable home cleaning services across Frederick County.",
  "howard-county-md": "Premium residential cleaning services in Howard County.",
  "prince-georges-county-md": "Professional house cleaning solutions in Prince George's County.",
  "washington-dc-nw": "Premium house cleaning services in Northwest Washington.",
  "washington-dc-ne": "Reliable home cleaning services in Northeast Washington.",
  "capitol-hill-dc": "Trusted residential cleaning services in Capitol Hill.",
  "georgetown-dc": "Premium home cleaning services in Georgetown.",
  "dupont-circle-dc": "Convenient house cleaning services in Dupont Circle.",
  "adams-morgan-dc": "Personalized home cleaning services in Adams Morgan.",
  "downtown-dc": "Professional house cleaning services in Downtown Washington.",
  "arlington-va": "Reliable house cleaning services in Arlington.",
  "fairfax-va": "Trusted home cleaning services in Fairfax.",
  "mclean-va": "Premium residential cleaning services in McLean.",
  "alexandria-va": "Professional house cleaning services in Alexandria.",
  "falls-church-va": "Convenient home cleaning services in Falls Church.",
  "vienna-va": "Customized house cleaning services in Vienna.",
  "tysons-va": "Premium home cleaning services in Tysons.",
};

interface CityGalleryProps {
  /** Filter cities by state slug, or show all if undefined */
  stateSlug?: string;
  /** Max number of cards to show */
  limit?: number;
  /** Section title */
  title?: string;
  /** Section subtitle */
  subtitle?: string;
}

const CityGallery = ({
  stateSlug,
  limit,
  title = "Cleaning Services Across the DMV",
  subtitle = "Click on any area to explore our local cleaning services and get a free quote.",
}: CityGalleryProps) => {
  let filteredCities: CityData[] = stateSlug
    ? cities.filter((c) => c.stateSlug === stateSlug)
    : cities;

  if (limit) filteredCities = filteredCities.slice(0, limit);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCities.map((city, index) => {
            const img = galleryImages[index % galleryImages.length];
            const phrase = hoverPhrases[city.slug] || `Professional cleaning services in ${city.name}.`;
            const label = city.state !== "DC" ? `${city.name}, ${city.state}` : city.name;

            return (
              <Link
                key={city.slug}
                to={`/locations/${city.slug}`}
                className="group relative block aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Image */}
                <img
                  src={img}
                  alt={`House cleaning in ${label}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Default gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-5 text-center">
                  <p className="text-primary-foreground/90 text-sm leading-relaxed mb-3">
                    {phrase}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent font-medium text-sm">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>

                {/* City name (always visible) */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 group-hover:opacity-0">
                  <h3 className="font-heading font-semibold text-lg text-primary-foreground drop-shadow-md">
                    {label}
                  </h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CityGallery;
