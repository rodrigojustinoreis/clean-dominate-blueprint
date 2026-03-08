// Vanity landing page configurations for SEO-optimized flat URLs
// Maps keyword-rich slugs to city+service combinations

export interface VanityLandingConfig {
  slug: string;              // URL slug e.g. "house-cleaning-wheaton-md"
  citySlug: string;          // Maps to slCities slug
  serviceSlug: string;       // Maps to slServices slug
  h1: string;                // Primary heading with local keyword
  metaTitle: string;
  metaDescription: string;
  zip: string;               // For Google Maps embed
  nearbyNote: string;        // Unique local positioning e.g. "near Silver Spring"
  localKeywords: string[];   // Extra keyword phrases for content
  uniqueIntro: string;       // Custom first paragraph for uniqueness
}

export const vanityLandingPages: VanityLandingConfig[] = [
  {
    slug: "house-cleaning-wheaton-md",
    citySlug: "wheaton-md",
    serviceSlug: "house-cleaning",
    h1: "House Cleaning in Wheaton, MD",
    metaTitle: "Eco-Friendly House Cleaning in Wheaton MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Wheaton, MD near Silver Spring. Non-toxic products, insured teams. Get $25 off your first eco-clean in Wheaton! Free quotes.",
    zip: "20902",
    nearbyNote: "near Silver Spring and Kensington",
    localKeywords: ["limpeza ecológica em Wheaton MD", "Wheaton house cleaning 20902", "cleaning service near Wheaton Regional Park"],
    uniqueIntro: "Wheaton is a culturally vibrant community in central Montgomery County, anchored by Wheaton Regional Park and Brookside Gardens. With easy Metro access via the Red Line and a diverse, family-oriented population, Wheaton homeowners deserve a cleaning service that matches the neighborhood's energy and warmth. Capital Clean Care delivers professional, eco-friendly house cleaning throughout Wheaton — from the tree-lined streets of Wheaton Hills to the apartment corridors near Georgia Avenue. Our background-checked teams use plant-based, non-toxic products that keep your home spotless and safe for children, pets, and the environment."
  },
  {
    slug: "eco-cleaning-bethesda-md",
    citySlug: "bethesda-md",
    serviceSlug: "eco-friendly-cleaning",
    h1: "Eco-Friendly Cleaning in Bethesda, MD",
    metaTitle: "Eco-Friendly House Cleaning in Bethesda MD | Capital Clean Care",
    metaDescription: "Non-toxic, plant-based house cleaning in Bethesda, MD. Safe for families, pets & luxury finishes. $25 off your first eco-clean — book a free quote today!",
    zip: "20814",
    nearbyNote: "near Potomac and Chevy Chase",
    localKeywords: ["limpeza ecológica em Bethesda MD", "green cleaning Bethesda", "non-toxic cleaning near NIH"],
    uniqueIntro: "Bethesda homeowners who invest in premium finishes and healthy living deserve a cleaning service that respects both. Capital Clean Care's eco-friendly cleaning in Bethesda uses exclusively plant-based, non-toxic solutions — no harsh chemicals, no synthetic fragrances, no compromises. Our trained teams understand the delicate care required for Bethesda's marble countertops, custom hardwood floors, and designer surfaces. From Burning Tree estates to downtown Bethesda condos near the Metro, we deliver sparkling results using products that are safe for your family, pets, and the Chesapeake Bay watershed."
  },
  {
    slug: "deep-cleaning-germantown-md",
    citySlug: "germantown-md",
    serviceSlug: "deep-cleaning",
    h1: "Deep Cleaning Services in Germantown, MD",
    metaTitle: "Deep House Cleaning in Germantown MD | Capital Clean Care",
    metaDescription: "Intensive deep cleaning in Germantown, MD — inside appliances, baseboards & vents. Eco-friendly, licensed & insured. Get $25 off your first deep clean!",
    zip: "20874",
    nearbyNote: "near Clarksburg and Gaithersburg",
    localKeywords: ["limpeza profunda Germantown MD", "Germantown deep clean 20874", "deep house cleaning near Milestone"],
    uniqueIntro: "Germantown homes — especially in newer communities like Churchill Village, Milestone, and Clopper Mill — benefit from periodic deep cleaning that goes far beyond routine maintenance. Capital Clean Care's deep cleaning service in Germantown addresses hidden dust in sealed modern homes, buildup inside appliances, neglected baseboards, and the fine particles that energy-efficient construction can trap. Our eco-friendly approach uses plant-based products that are tough on grime but gentle on Germantown's contemporary finishes, giving your family a healthier living environment."
  },
  {
    slug: "house-cleaning-frederick-md",
    citySlug: "frederick-md",
    serviceSlug: "house-cleaning",
    h1: "House Cleaning Services in Frederick, MD",
    metaTitle: "House Cleaning in Frederick MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Frederick, MD. Serving Downtown, Ballenger Creek, Tuscarora & Spring Ridge. Eco-friendly, licensed & insured. Free quotes.",
    zip: "21701",
    nearbyNote: "near Urbana and New Market",
    localKeywords: ["limpeza de casa Frederick MD", "Frederick house cleaning 21701", "cleaning service near Carroll Creek"],
    uniqueIntro: "Frederick blends historic charm with growing suburban vitality, and Capital Clean Care brings professional house cleaning to match. Whether you live in a beautifully restored Victorian along Carroll Creek, a spacious home in Ballenger Creek, or a modern build in Tuscarora, our trained teams adapt their approach to your property's unique character. Frederick's agricultural surroundings mean homes face elevated dust levels, especially during harvest season — our eco-friendly products and thorough techniques address these challenges while keeping your family safe from harsh chemicals."
  },
  {
    slug: "move-out-cleaning-rockville-md",
    citySlug: "rockville-md",
    serviceSlug: "move-out-cleaning",
    h1: "Move-Out Cleaning in Rockville, MD",
    metaTitle: "Move-Out Cleaning in Rockville MD | Capital Clean Care",
    metaDescription: "Professional move-out cleaning in Rockville, MD. Meet inspection standards, maximize deposit return. Serving Fallsgrove, King Farm, Twinbrook. Free quotes.",
    zip: "20850",
    nearbyNote: "near Bethesda and Gaithersburg",
    localKeywords: ["limpeza mudança Rockville MD", "move out cleaning Rockville 20850", "apartment cleaning Rockville Town Center"],
    uniqueIntro: "Moving out of a Rockville property? Capital Clean Care ensures your home passes inspection with flying colors. From high-rise apartments near Rockville Town Center to townhomes in King Farm and Fallsgrove, our move-out cleaning covers every surface, appliance interior, cabinet, and closet. We're familiar with Montgomery County property management standards and design our service to maximize your security deposit return. Our eco-friendly products leave no chemical residue — just a spotless, ready-to-show property."
  },
  {
    slug: "house-cleaning-silver-spring-md",
    citySlug: "silver-spring-md",
    serviceSlug: "house-cleaning",
    h1: "House Cleaning in Silver Spring, MD",
    metaTitle: "Eco-Friendly House Cleaning in Silver Spring MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Silver Spring, MD. Non-toxic products, background-checked teams. Serving Downtown, Woodside & Forest Glen. $25 off first clean!",
    zip: "20910",
    nearbyNote: "near Takoma Park and Wheaton",
    localKeywords: ["limpeza Silver Spring MD", "Silver Spring house cleaning 20910", "cleaning service near Silver Spring Metro"],
    uniqueIntro: "Silver Spring is one of the DMV's most dynamic communities, where cultural diversity meets suburban convenience. Capital Clean Care provides professional house cleaning throughout Silver Spring — from the bustling apartments near Downtown and the Metro to the quiet, tree-lined streets of Woodside and Forest Glen. Our background-checked teams use eco-friendly, plant-based products to tackle the unique challenges of Silver Spring living: urban dust from busy corridors, seasonal pollen, and the variety of surfaces found in the area's diverse housing stock."
  },
  {
    slug: "eco-cleaning-potomac-md",
    citySlug: "potomac-md",
    serviceSlug: "eco-friendly-cleaning",
    h1: "Eco-Friendly Cleaning in Potomac, MD",
    metaTitle: "Eco-Friendly Cleaning in Potomac MD | Capital Clean Care",
    metaDescription: "Premium eco-friendly cleaning for Potomac, MD estates. Plant-based products safe for luxury finishes. Serving Avenel, Potomac Falls, River Falls. Free quotes.",
    zip: "20854",
    nearbyNote: "near Bethesda and McLean",
    localKeywords: ["limpeza ecológica Potomac MD", "green cleaning Potomac estates", "non-toxic cleaning Potomac 20854"],
    uniqueIntro: "Potomac's magnificent estates and luxury homes demand a cleaning service that combines premium quality with environmental responsibility. Capital Clean Care's eco-friendly cleaning in Potomac uses exclusively plant-based, non-toxic solutions that are safe for marble, exotic hardwoods, custom finishes, and the families who enjoy them. Our teams are specially trained in caring for Potomac's expansive properties — from Avenel's gated residences to River Falls' waterfront homes — delivering meticulous results without harsh chemicals."
  },
  {
    slug: "deep-cleaning-gaithersburg-md",
    citySlug: "gaithersburg-md",
    serviceSlug: "deep-cleaning",
    h1: "Deep Cleaning in Gaithersburg, MD",
    metaTitle: "Deep Cleaning in Gaithersburg MD | Capital Clean Care",
    metaDescription: "Intensive deep cleaning in Gaithersburg, MD. Inside appliances, behind furniture, baseboards & more. Serving Kentlands, Lakelands, Quince Orchard. Free quotes.",
    zip: "20878",
    nearbyNote: "near Rockville and Germantown",
    localKeywords: ["limpeza profunda Gaithersburg MD", "deep house cleaning Kentlands", "Gaithersburg cleaning 20878"],
    uniqueIntro: "Gaithersburg's charming neighborhoods — from the New Urbanist streets of Kentlands to the family-friendly Lakelands community — deserve periodic deep cleaning that reaches every hidden corner. Capital Clean Care's deep cleaning service in Gaithersburg goes inside appliances, behind furniture, under beds, and into the grout and baseboards that routine cleaning misses. With pollen from nearby Seneca Creek State Park and dust from area development, Gaithersburg homes benefit from our intensive, eco-friendly approach that improves both cleanliness and indoor air quality."
  },
  {
    slug: "recurring-cleaning-columbia-md",
    citySlug: "columbia-md",
    serviceSlug: "recurring-cleaning",
    h1: "Recurring Cleaning Plans in Columbia, MD",
    metaTitle: "Recurring Cleaning in Columbia MD | Capital Clean Care",
    metaDescription: "Weekly, bi-weekly & monthly house cleaning plans in Columbia, MD. Dedicated teams, eco-friendly products. Serving all Columbia villages. No contracts. Free quotes.",
    zip: "21044",
    nearbyNote: "near Ellicott City and Silver Spring",
    localKeywords: ["limpeza recorrente Columbia MD", "weekly cleaning Columbia Howard County", "bi-weekly cleaning Columbia 21044"],
    uniqueIntro: "Columbia's master-planned villages — from Hickory Ridge to River Hill — thrive on organization and consistency. Capital Clean Care's recurring cleaning plans match that spirit, providing Columbia families with scheduled, reliable cleaning on a weekly, bi-weekly, or monthly basis. Your dedicated team learns your home, your preferences, and your priorities, delivering increasingly personalized results with each visit. No contracts, preferred pricing, and the flexibility to adjust your plan as your family's needs evolve."
  },
  {
    slug: "house-cleaning-ellicott-city-md",
    citySlug: "ellicott-city-md",
    serviceSlug: "house-cleaning",
    h1: "House Cleaning in Ellicott City, MD",
    metaTitle: "House Cleaning in Ellicott City MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Ellicott City, MD. Experienced with historic and modern homes. Eco-friendly products. Serving Old Ellicott City & Turf Valley. Free quotes.",
    zip: "21043",
    nearbyNote: "near Columbia and New Market",
    localKeywords: ["limpeza Ellicott City MD", "cleaning service Old Ellicott City", "Ellicott City house cleaning 21043"],
    uniqueIntro: "Ellicott City beautifully blends historic charm with modern suburban living. Capital Clean Care provides professional house cleaning for the full range of Ellicott City homes — from the historic stone buildings along Main Street to contemporary residences in Turf Valley and Waverly Woods. Our teams understand the different care requirements of historic surfaces versus modern finishes and adjust their eco-friendly approach accordingly, keeping every Ellicott City home sparkling."
  },
  {
    slug: "apartment-cleaning-takoma-park-md",
    citySlug: "takoma-park-md",
    serviceSlug: "apartment-cleaning",
    h1: "Apartment Cleaning in Takoma Park, MD",
    metaTitle: "Apartment Cleaning in Takoma Park MD | Capital Clean Care",
    metaDescription: "Eco-friendly apartment cleaning in Takoma Park, MD. Plant-based products aligned with Takoma Park values. Serving Old Town, Flower Ave & Long Branch. Free quotes.",
    zip: "20912",
    nearbyNote: "near Silver Spring and DC border",
    localKeywords: ["limpeza apartamento Takoma Park MD", "green apartment cleaning Takoma Park", "eco cleaning Takoma Park 20912"],
    uniqueIntro: "Takoma Park — 'Azalea City' — is a community where environmental responsibility is a way of life. Capital Clean Care's apartment cleaning service aligns perfectly with Takoma Park values: we use exclusively plant-based, non-toxic cleaning products that are safe for families, pets, and the environment. Our teams are experienced with the charming but compact apartment layouts found throughout Old Town, Flower Avenue, and along the Long Branch corridor, delivering thorough results in spaces that require efficient, careful cleaning."
  },
  {
    slug: "post-construction-cleaning-clarksburg-md",
    citySlug: "clarksburg-md",
    serviceSlug: "post-construction-cleaning",
    h1: "Post-Construction Cleaning in Clarksburg, MD",
    metaTitle: "Post-Construction Cleaning Clarksburg MD | Capital Clean Care",
    metaDescription: "Expert post-construction cleanup in Clarksburg, MD. New build & renovation dust removal. HEPA filtration. Serving Clarksburg Village & Cabin Branch. Free quotes.",
    zip: "20871",
    nearbyNote: "near Germantown and Damascus",
    localKeywords: ["limpeza pós-obra Clarksburg MD", "new construction cleaning Clarksburg", "post renovation cleanup 20871"],
    uniqueIntro: "Clarksburg is one of Montgomery County's newest and fastest-growing communities, which means construction and renovation activity is constant. Capital Clean Care's post-construction cleaning is perfectly suited for Clarksburg's landscape — whether you've built a new home in Cabin Branch, renovated a kitchen in Clarksburg Village, or completed an addition in Arora Hills. Our HEPA-filtered equipment captures the ultra-fine construction dust that settles everywhere in newly built homes, transforming your construction site into a pristine, move-in-ready space."
  },
  {
    slug: "house-cleaning-damascus-md",
    citySlug: "damascus-md",
    serviceSlug: "house-cleaning",
    h1: "House Cleaning in Damascus, MD",
    metaTitle: "House Cleaning in Damascus MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Damascus, MD. Experienced with larger rural properties. Eco-friendly, no travel fees. Serving all Damascus neighborhoods. Free quotes.",
    zip: "20872",
    nearbyNote: "near Clarksburg and Germantown",
    localKeywords: ["limpeza Damascus MD", "house cleaning Damascus 20872", "rural home cleaning Damascus Montgomery County"],
    uniqueIntro: "Damascus offers a distinctive small-town feel at the northern edge of Montgomery County, with larger properties, rolling farmland views, and a close-knit community atmosphere. Capital Clean Care serves Damascus homes with the same premium, eco-friendly cleaning we bring to every DMV community — no travel fees, no reduced quality. Our teams accommodate the larger floor plans and unique features common in Damascus, including mudrooms, expansive living areas, and the extra attention needed for homes surrounded by agricultural land and seasonal pollen."
  },
  {
    slug: "deep-cleaning-kensington-md",
    citySlug: "kensington-md",
    serviceSlug: "deep-cleaning",
    h1: "Deep Cleaning in Kensington, MD",
    metaTitle: "Deep Cleaning in Kensington MD | Capital Clean Care",
    metaDescription: "Thorough deep cleaning in Kensington, MD. Gentle on historic surfaces, tough on dirt. Eco-friendly products. Serving Kensington Estates & Rock Creek Hills. Free quotes.",
    zip: "20895",
    nearbyNote: "near Silver Spring and Wheaton",
    localKeywords: ["limpeza profunda Kensington MD", "deep house cleaning Kensington 20895", "cleaning historic homes Kensington"],
    uniqueIntro: "Kensington's charming, tree-lined streets are home to beautifully maintained Cape Cods, craftsman bungalows, and colonial revivals that deserve deep cleaning with a gentle touch. Capital Clean Care's deep cleaning in Kensington reaches into every baseboard, behind every piece of furniture, and inside every neglected corner — using eco-friendly products that are safe for original hardwood floors, vintage tile, and the character-filled surfaces that make Kensington homes special. Our mature tree canopy means heavy seasonal pollen, making periodic deep cleaning essential for healthy indoor air."
  },
  {
    slug: "eco-cleaning-chevy-chase-md",
    citySlug: "chevy-chase-md",
    serviceSlug: "eco-friendly-cleaning",
    h1: "Eco-Friendly Cleaning in Chevy Chase, MD",
    metaTitle: "Eco-Friendly Cleaning Chevy Chase MD | Capital Clean Care",
    metaDescription: "Premium eco-friendly cleaning for Chevy Chase, MD homes. Non-toxic, plant-based products. Safe for fine finishes. Serving all Chevy Chase sections. Free quotes.",
    zip: "20815",
    nearbyNote: "near Bethesda and DC border",
    localKeywords: ["limpeza ecológica Chevy Chase MD", "green cleaning Chevy Chase", "non-toxic house cleaning 20815"],
    uniqueIntro: "Chevy Chase is an exclusive enclave where sophistication meets environmental consciousness. Capital Clean Care's eco-friendly cleaning service uses plant-based, non-toxic solutions that protect both your family's health and the premium finishes found throughout Chevy Chase's grand colonials and Georgian-style residences. Our teams understand the elevated expectations of this community and deliver meticulous cleaning that preserves delicate historic woodwork, marble surfaces, and designer materials — all without harsh chemicals."
  },
];

export const getVanityPageBySlug = (slug: string): VanityLandingConfig | undefined =>
  vanityLandingPages.find((p) => p.slug === slug);