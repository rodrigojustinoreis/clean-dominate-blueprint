// Service-Location data for dynamic SEO pages
// 20 cities × 8 services = 160 unique combinations

export interface ServiceLocationCity {
  name: string;
  slug: string;
  state: string;
  county: string;
  population: string;
  neighborhoods: string[];
  localDetails: string;
  housingTypes: string;
  challenges: string;
  lifestyle: string;
  seasonalNote: string;
}

export interface ServiceLocationService {
  name: string;
  slug: string;
  shortName: string;
  checklist: string[];
  processSteps: string[];
  idealFor: string[];
}

export const slCities: ServiceLocationCity[] = [
  {
    name: "Rockville",
    slug: "rockville-md",
    state: "MD",
    county: "Montgomery County",
    population: "68,000",
    neighborhoods: ["Fallsgrove", "King Farm", "Twinbrook", "Woodley Gardens", "College Gardens", "Tower Oaks"],
    localDetails: "Situated along the I-270 corridor, Rockville blends suburban convenience with an evolving downtown. The city's diverse housing stock ranges from mid-century ranchers near Twinbrook to modern luxury condos in Town Center.",
    housingTypes: "single-family homes, townhouses, condominiums, and apartment complexes",
    challenges: "seasonal pollen from extensive tree coverage, construction dust from ongoing downtown redevelopment, and high foot traffic in multi-family residences",
    lifestyle: "Many residents commute to DC or work in the Rockville biotech corridor, leaving little time for thorough housekeeping",
    seasonalNote: "Spring pollen from Rockville's abundant oak and maple trees demands extra dusting and air quality attention"
  },
  {
    name: "Bethesda",
    slug: "bethesda-md",
    state: "MD",
    county: "Montgomery County",
    population: "65,000",
    neighborhoods: ["Burning Tree", "Bradley Hills", "Edgemoor", "Greenwich Forest", "Kenwood", "Wyngate"],
    localDetails: "Bethesda is one of the most affluent communities in the Washington metropolitan area, known for world-class dining, NIH proximity, and premium real estate. Homes here often feature high-end finishes requiring specialized care.",
    housingTypes: "stately colonials, Tudor-style residences, contemporary new builds, and downtown high-rise condominiums",
    challenges: "maintaining premium surfaces like marble and hardwood, managing large floor plans, and keeping entertaining spaces spotless for frequent social gatherings",
    lifestyle: "Bethesda homeowners often host guests and expect meticulous presentation. Many families rely on professional cleaning to maintain their high standards",
    seasonalNote: "Fall leaf debris tracked indoors from Bethesda's tree-lined streets requires consistent floor care throughout autumn"
  },
  {
    name: "Silver Spring",
    slug: "silver-spring-md",
    state: "MD",
    county: "Montgomery County",
    population: "82,000",
    neighborhoods: ["Downtown Silver Spring", "Woodside", "Forest Glen", "Four Corners", "Wheaton", "Colesville"],
    localDetails: "Silver Spring is one of the DMV's most culturally diverse communities, featuring a vibrant downtown with excellent transit connections. The housing stock ranges from charming bungalows to modern apartment towers.",
    housingTypes: "mid-century ranchers, modern apartment complexes, renovated Victorians, and bungalows",
    challenges: "urban dust and particulates from busy Georgia Avenue corridor, aging HVAC systems in older homes, and compact living spaces requiring efficient cleaning approaches",
    lifestyle: "The diverse population includes young professionals, growing families, and long-time residents who value both affordability and quality of life",
    seasonalNote: "Winter salt and grit tracked from Silver Spring sidewalks demands regular hard floor maintenance during colder months"
  },
  {
    name: "Gaithersburg",
    slug: "gaithersburg-md",
    state: "MD",
    county: "Montgomery County",
    population: "69,000",
    neighborhoods: ["Kentlands", "Lakelands", "Quince Orchard", "Washingtonian Center", "Summit Hall", "Shady Grove"],
    localDetails: "Gaithersburg combines New Urbanist planned communities like Kentlands with established suburban neighborhoods. Its location near the Shady Grove Metro and major employers makes it a hub for busy professionals.",
    housingTypes: "planned community homes, traditional single-family residences, townhouses, and garden-style apartments",
    challenges: "pollen accumulation in neighborhoods bordered by parkland, pet dander in family-oriented communities, and dust from nearby construction growth areas",
    lifestyle: "Gaithersburg families juggle work commutes, children's activities, and weekend errands, making professional cleaning a practical necessity",
    seasonalNote: "Gaithersburg's proximity to Seneca Creek State Park means spring and summer bring heavy pollen loads into homes near wooded areas"
  },
  {
    name: "Germantown",
    slug: "germantown-md",
    state: "MD",
    county: "Montgomery County",
    population: "91,000",
    neighborhoods: ["Churchill Village", "Clopper Mill", "Milestone", "Gunners Lake", "Crystal Rock", "Kingsview"],
    localDetails: "As one of Maryland's largest census-designated places, Germantown has evolved from a rural community into a thriving suburban hub. Planned communities and newer construction define much of the housing landscape.",
    housingTypes: "newer construction single-family homes, townhouse communities, condominiums, and apartment complexes",
    challenges: "construction residue in newer developments, dust buildup from rapid area growth, and allergen management in energy-efficient sealed homes",
    lifestyle: "Germantown residents appreciate value and convenience. The community's growth has brought new amenities but also busier schedules that benefit from professional cleaning help",
    seasonalNote: "Summer humidity in Germantown can lead to moisture-related cleaning needs, especially in basements and lower-level living spaces"
  },
  {
    name: "Frederick",
    slug: "frederick-md",
    state: "MD",
    county: "Frederick County",
    population: "78,000",
    neighborhoods: ["Downtown Frederick", "Spring Ridge", "Ballenger Creek", "Westview", "Tuscarora", "Lake Linganore"],
    localDetails: "Frederick combines small-city charm with growing suburban development. Its historic downtown features 18th-century architecture while newer communities spread along the Route 85 corridor toward Lake Linganore.",
    housingTypes: "historic row homes, sprawling suburban estates, new construction communities, and downtown loft apartments",
    challenges: "preserving historic surfaces in older homes, managing agricultural dust from surrounding farmland, and addressing hard water staining common in Frederick County",
    lifestyle: "Frederick residents enjoy a slower pace than closer-in suburbs but increasingly commute to Montgomery County or DC, creating demand for time-saving services",
    seasonalNote: "Frederick's agricultural surroundings mean harvest season brings elevated dust levels that settle on surfaces throughout the home"
  },
  {
    name: "Clarksburg",
    slug: "clarksburg-md",
    state: "MD",
    county: "Montgomery County",
    population: "24,000",
    neighborhoods: ["Clarksburg Village", "Clarksburg Town Center", "Arora Hills", "Cabin Branch", "Greenway Village"],
    localDetails: "Clarksburg represents one of Montgomery County's newest and fastest-growing communities. Predominantly built after 2005, homes here feature modern layouts and energy-efficient construction.",
    housingTypes: "modern single-family homes, townhouses, and newly built condominiums in planned communities",
    challenges: "construction dust from ongoing community development, new-home off-gassing requiring thorough ventilation cleaning, and managing allergens in tightly sealed modern homes",
    lifestyle: "Young families drawn to Clarksburg's excellent schools and new amenities often need cleaning support as they balance career growth with raising children",
    seasonalNote: "New construction dust settles persistently in Clarksburg homes, especially during the active building seasons of spring and fall"
  },
  {
    name: "Damascus",
    slug: "damascus-md",
    state: "MD",
    county: "Montgomery County",
    population: "17,000",
    neighborhoods: ["Damascus Town Center", "Woodfield", "Ridge Road Corridor", "Sweepstakes", "Goshen Estates"],
    localDetails: "Damascus retains a rural small-town atmosphere at the northern edge of Montgomery County. Surrounded by farmland and natural areas, homes here tend to be larger with generous lot sizes.",
    housingTypes: "large single-family homes on spacious lots, farmhouse-style properties, and custom-built residences",
    challenges: "agricultural dust and pollen from surrounding farmland, larger home sizes requiring more extensive cleaning time, and well water mineral deposits on fixtures",
    lifestyle: "Damascus residents value their quiet, rural-adjacent lifestyle. Many maintain larger properties that benefit from professional cleaning due to the sheer square footage involved",
    seasonalNote: "Damascus's rural setting means spring through fall brings significant pollen and agricultural particles that infiltrate homes near open farmland"
  },
  {
    name: "Potomac",
    slug: "potomac-md",
    state: "MD",
    county: "Montgomery County",
    population: "46,000",
    neighborhoods: ["Potomac Village", "Avenel", "Falconhurst", "River Falls", "Potomac Falls", "Bradley Farms"],
    localDetails: "Potomac is among the wealthiest communities in the nation, featuring grand estates, manicured properties, and a village atmosphere. Homes regularly exceed 5,000 square feet with premium materials throughout.",
    housingTypes: "luxury estates, grand colonials, contemporary mansions, and exclusive gated community residences",
    challenges: "maintaining expansive floor plans with multiple living areas, caring for premium materials like marble and exotic hardwoods, and managing properties with extensive entertaining spaces",
    lifestyle: "Potomac families often employ multiple household services. Professional cleaning is essential for maintaining the pristine presentation these homes demand",
    seasonalNote: "Potomac's heavily wooded lots create beautiful shade but also generate significant leaf litter and pollen that requires year-round attention"
  },
  {
    name: "Kensington",
    slug: "kensington-md",
    state: "MD",
    county: "Montgomery County",
    population: "2,300",
    neighborhoods: ["Kensington Estates", "Rock Creek Hills", "Homewood", "North Kensington", "Ken-Gar"],
    localDetails: "Kensington is a charming, walkable community nestled between Silver Spring and Wheaton. Its tree-lined streets feature a mix of well-maintained older homes and lovingly renovated properties with unique character.",
    housingTypes: "Cape Cods, colonial revivals, craftsman bungalows, and mid-century split-levels",
    challenges: "older home layouts with more surfaces and moldings to clean, original hardwood floors requiring gentle care, and mature tree pollen in this heavily wooded neighborhood",
    lifestyle: "Kensington's small-town feel attracts families who appreciate community but still need professional help maintaining their character-filled older homes",
    seasonalNote: "Kensington's mature tree canopy produces heavy pollen in spring and leaf debris in fall, requiring thorough seasonal cleaning attention"
  },
  {
    name: "Chevy Chase",
    slug: "chevy-chase-md",
    state: "MD",
    county: "Montgomery County",
    population: "10,000",
    neighborhoods: ["Chevy Chase Village", "Chevy Chase Section 3", "Chevy Chase Section 5", "Somerset", "Martin's Additions"],
    localDetails: "Chevy Chase is an exclusive enclave bordering Washington DC, renowned for its stately homes, premier schools, and proximity to Connecticut Avenue's upscale amenities. This community epitomizes sophisticated suburban living.",
    housingTypes: "grand colonials, Georgian-style estates, renovated historic homes, and select luxury condominiums",
    challenges: "preserving delicate historic finishes, maintaining large properties with formal living spaces, and managing the high standards expected by discerning homeowners",
    lifestyle: "Chevy Chase residents frequently entertain and expect their homes to reflect impeccable taste. Many divide time between DC offices and their Chevy Chase residences",
    seasonalNote: "The neighborhood's grand landscaping and mature gardens track seasonal debris through entryways, requiring consistent floor and surface maintenance"
  },
  {
    name: "North Bethesda",
    slug: "north-bethesda-md",
    state: "MD",
    county: "Montgomery County",
    population: "50,000",
    neighborhoods: ["Pike & Rose", "Montrose", "Randolph Hills", "Garrett Park", "Luxmanor", "Old Georgetown Village"],
    localDetails: "North Bethesda has emerged as a dynamic live-work-play destination anchored by the Pike & Rose development. The area blends newer mixed-use communities with established residential neighborhoods near the White Flint Metro.",
    housingTypes: "modern luxury apartments, established single-family homes, townhouses, and mixed-use residential units",
    challenges: "construction dust from rapid Pike & Rose area development, maintaining newer high-end finishes in luxury buildings, and managing compact apartment spaces efficiently",
    lifestyle: "North Bethesda attracts professionals who value walkability and urban amenities. Busy careers mean professional cleaning is a practical investment rather than a luxury",
    seasonalNote: "Ongoing development in North Bethesda creates ambient construction dust that accumulates on surfaces faster than in fully established neighborhoods"
  },
  {
    name: "College Park",
    slug: "college-park-md",
    state: "MD",
    county: "Prince George's County",
    population: "32,000",
    neighborhoods: ["Old Town", "Hollywood", "Berwyn", "Calvert Hills", "North College Park", "Lakeland"],
    localDetails: "Home to the University of Maryland, College Park is an energetic community where academic life intersects with residential neighborhoods. The city has seen significant revitalization with new restaurants, the Purple Line construction, and modern housing.",
    housingTypes: "single-family homes, student-oriented apartments, renovated bungalows, and newer mixed-use developments",
    challenges: "high turnover in rental properties requiring frequent deep cleans, construction dust from Purple Line development, and maintaining older homes with dated fixtures",
    lifestyle: "College Park serves a diverse population of university staff, young families, and long-time residents who appreciate the community's energy and improving amenities",
    seasonalNote: "Move-in and move-out seasons aligned with the university calendar create peak demand for cleaning services in August and May"
  },
  {
    name: "Laurel",
    slug: "laurel-md",
    state: "MD",
    county: "Prince George's County",
    population: "26,000",
    neighborhoods: ["Old Town Laurel", "South Laurel", "Montpelier", "Russett", "Laurel Lakes", "Victoria Falls"],
    localDetails: "Laurel sits at the crossroads of Howard, Prince George's, and Anne Arundel counties, offering convenient access to both Baltimore and Washington DC. Historic Main Street contrasts with newer planned communities along the Route 198 corridor.",
    housingTypes: "historic downtown homes, planned community residences, townhouses, and garden-style apartments",
    challenges: "maintaining diverse housing ages from historic to modern, managing higher humidity levels near the Patuxent River, and addressing hard water mineral deposits",
    lifestyle: "Laurel's central location makes it popular with commuters to both DC and Baltimore. Families here value affordable, quality services that save time on busy workdays",
    seasonalNote: "Laurel's location near the Patuxent River corridor creates elevated humidity that can lead to moisture-related cleaning needs, especially in basements"
  },
  {
    name: "Olney",
    slug: "olney-md",
    state: "MD",
    county: "Montgomery County",
    population: "35,000",
    neighborhoods: ["Olney Mill", "Norbeck Meadows", "Brookeville Knolls", "Hallowell", "Olney Oaks", "Fair Hill"],
    localDetails: "Olney maintains a village-like character at the northern edge of developed Montgomery County. Known for excellent schools and community events like Olney Days, this area features established neighborhoods with mature landscaping.",
    housingTypes: "spacious single-family homes, colonial-style residences, and select townhouse communities",
    challenges: "larger home sizes requiring comprehensive cleaning, mature tree pollen and leaf debris, and managing homes with multiple levels and finished basements",
    lifestyle: "Olney families prioritize education and community involvement. Professional cleaning helps parents focus on their children's activities while maintaining an orderly home",
    seasonalNote: "Olney's suburban-rural boundary location means homes experience heavy pollen loads from both cultivated landscapes and nearby wooded areas"
  },
  {
    name: "Bowie",
    slug: "bowie-md",
    state: "MD",
    county: "Prince George's County",
    population: "59,000",
    neighborhoods: ["Northview", "Pointer Ridge", "South Bowie", "Collington", "Fairwood", "Whitehall"],
    localDetails: "Bowie is one of the largest cities in Prince George's County, offering a blend of established neighborhoods and newer master-planned communities. The city boasts extensive parks, trails, and a strong sense of community.",
    housingTypes: "single-family homes ranging from 1960s ranchers to modern construction, townhouses, and planned community residences",
    challenges: "managing homes with aging systems alongside newer construction, pet dander from the community's dog-friendly culture, and seasonal allergens from extensive green spaces",
    lifestyle: "Bowie families enjoy outdoor recreation and community events. The city's family-oriented atmosphere means homes see heavy daily use that benefits from regular professional cleaning",
    seasonalNote: "Bowie's extensive park system and green spaces contribute to higher pollen counts in spring, requiring thorough dusting and surface cleaning"
  },
  {
    name: "Hyattsville",
    slug: "hyattsville-md",
    state: "MD",
    county: "Prince George's County",
    population: "18,000",
    neighborhoods: ["Arts District", "Historic Hyattsville", "Magruder Park", "Queenstown", "Hyattsville Hills", "West Hyattsville"],
    localDetails: "Hyattsville has undergone a remarkable renaissance, transforming into one of the DMV's most vibrant arts-oriented communities. Its proximity to DC, walkable Arts District, and mix of renovated historic homes attract creative professionals and young families.",
    housingTypes: "renovated bungalows, Victorian-era homes, modern apartments near the Metro, and Arts District loft spaces",
    challenges: "preserving character in renovated older homes, managing construction dust from ongoing neighborhood revitalization, and addressing compact living spaces in historic floor plans",
    lifestyle: "Hyattsville residents embrace an artsy, community-focused lifestyle. Many work from home or have short DC commutes, spending significant time in their living spaces",
    seasonalNote: "Hyattsville's urban tree planting initiatives create beautiful streetscapes but also contribute pollen that drifts into homes during warmer months"
  },
  {
    name: "Takoma Park",
    slug: "takoma-park-md",
    state: "MD",
    county: "Montgomery County",
    population: "18,000",
    neighborhoods: ["Old Town", "Flower Avenue", "Long Branch", "Sligo Creek", "New Hampshire Highlands", "Pinecrest"],
    localDetails: "Known as 'Azalea City,' Takoma Park is a progressive, eclectic community with deep roots in environmental activism and social justice. The city's commitment to sustainability aligns perfectly with eco-friendly cleaning services.",
    housingTypes: "Victorian-era homes, craftsman bungalows, mid-century houses, and co-op apartments",
    challenges: "maintaining historic homes with original woodwork and detailed trim, managing homes with gardens that track soil indoors, and addressing older plumbing that creates mineral deposits",
    lifestyle: "Takoma Park residents are environmentally conscious and specifically seek cleaning services using green, non-toxic products that align with their values",
    seasonalNote: "The famous Takoma Park azaleas and extensive community gardens mean homeowners track seasonal soil and pollen through their homes from spring through fall"
  },
  {
    name: "Burtonsville",
    slug: "burtonsville-md",
    state: "MD",
    county: "Montgomery County",
    population: "10,000",
    neighborhoods: ["Burtonsville Crossing", "Greencastle", "Patuxent Valley", "Fairland", "Old Columbia Pike Corridor"],
    localDetails: "Burtonsville is a quiet, residential community in eastern Montgomery County, offering larger lots and a more relaxed pace than closer-in suburbs. Its location along Route 29 provides convenient access to both Columbia and Silver Spring.",
    housingTypes: "spacious single-family homes on generous lots, townhouse communities, and select apartment complexes",
    challenges: "larger homes requiring extended cleaning sessions, wooded lots that generate significant leaf and pollen debris, and managing well water mineral buildup in some properties",
    lifestyle: "Burtonsville residents choose this community for space and affordability. Families here often have larger homes that benefit from professional cleaning due to the square footage involved",
    seasonalNote: "Burtonsville's heavily wooded residential areas create beautiful natural settings but generate substantial seasonal debris that finds its way indoors"
  },
  {
    name: "Montgomery Village",
    slug: "montgomery-village-md",
    state: "MD",
    county: "Montgomery County",
    population: "34,000",
    neighborhoods: ["Stedwick", "Whetstone", "North Village", "South Village", "The Clusters", "East Village"],
    localDetails: "Montgomery Village is one of Maryland's original planned communities, featuring interconnected neighborhoods around a central lake and extensive recreational facilities. The community's mature landscaping and established infrastructure create a settled, comfortable atmosphere.",
    housingTypes: "townhouses, single-family homes, condominiums, and garden-style apartments within planned community sections",
    challenges: "aging townhouse and condo interiors requiring refreshing, managing HOA-standard cleanliness, and addressing moisture issues in lower-level townhouse units",
    lifestyle: "Montgomery Village residents enjoy community amenities and neighborly connections. The diverse population includes retirees, young families, and professionals who value the community's convenience",
    seasonalNote: "The community's mature trees and proximity to Seneca Creek contribute to heavy seasonal pollen that settles throughout homes from early spring into summer"
  },
  {
    name: "Wheaton",
    slug: "wheaton-md",
    state: "MD",
    county: "Montgomery County",
    population: "50,000",
    neighborhoods: ["Wheaton Hills", "Kensington View", "Glenmont", "Arcola Towers", "Georgia Avenue Corridor", "Brookside"],
    localDetails: "Wheaton is a culturally diverse community in central Montgomery County anchored by Wheaton Regional Park and Brookside Gardens. The area features a mix of well-maintained mid-century homes, growing infill development, and easy Metro access.",
    housingTypes: "mid-century colonials, split-levels, ramblers, renovated bungalows, and apartment complexes near the Metro",
    challenges: "urban dust from the Georgia Avenue corridor, aging home systems in mid-century housing stock, and pollen from Wheaton Regional Park's extensive tree coverage",
    lifestyle: "Wheaton residents value diversity, affordability, and convenience. Many commute via the Red Line Metro and appreciate time-saving services that maintain their homes",
    seasonalNote: "Proximity to Wheaton Regional Park and Brookside Gardens means heavy spring pollen and fall leaf debris tracked into homes year-round"
  },
  {
    name: "Washington DC",
    slug: "washington-dc",
    state: "DC",
    county: "District of Columbia",
    population: "689,000",
    neighborhoods: ["Capitol Hill", "Georgetown", "Dupont Circle", "Adams Morgan", "U Street Corridor", "Logan Circle", "Petworth", "Columbia Heights", "Navy Yard", "Brookland"],
    localDetails: "Washington DC is a city of contrasts — historic rowhouses alongside modern condos, embassy rows, and bustling corridors. Residents value professional, discreet cleaning services that understand the demands of a fast-paced capital lifestyle.",
    housingTypes: "historic rowhouses, Capitol Hill townhomes, modern condominiums, co-ops, embassy residences, and luxury high-rises",
    challenges: "urban particulate from metro and traffic, older rowhouse interiors with plaster walls, high-traffic common areas in multi-unit buildings, and strict building access requirements",
    lifestyle: "DC residents are professionals, diplomats, government workers, and creatives who prize efficiency and discretion. Recurring cleaning services that work around demanding schedules are highly valued",
    seasonalNote: "Cherry blossom season brings fine pollen that coats every surface in spring, while summer humidity accelerates mold growth in older rowhouse basements"
  },
  {
    name: "Capitol Hill",
    slug: "capitol-hill-dc",
    state: "DC",
    county: "District of Columbia",
    population: "38,000",
    neighborhoods: ["Eastern Market", "Barracks Row", "Lincoln Park", "Stanton Park", "H Street Corridor", "Seward Square"],
    localDetails: "Capitol Hill is one of DC's most iconic and densely populated neighborhoods, filled with beautifully preserved 19th-century rowhouses, vibrant street life, and a strong sense of community centered around Eastern Market.",
    housingTypes: "Victorian and Federal-style rowhouses, English basement apartments, carriage houses converted to residences, and small apartment buildings",
    challenges: "aging rowhouse systems with plaster walls and older fixtures, narrow street access for service vehicles, and maintaining period detail while achieving a deep clean",
    lifestyle: "Capitol Hill residents include congressional staffers, lawyers, long-time DC families, and young professionals who take pride in their historic homes and appreciate meticulous care",
    seasonalNote: "The neighborhood's dense tree canopy drops significant pollen in spring and leaves in fall that find their way into every corner of these open-plan rowhouses"
  },
  {
    name: "Georgetown",
    slug: "georgetown-dc",
    state: "DC",
    county: "District of Columbia",
    population: "19,000",
    neighborhoods: ["West Georgetown", "East Georgetown", "Book Hill", "Hillandale", "Foxhall", "Burleith"],
    localDetails: "Georgetown is DC's most prestigious historic neighborhood, home to embassies, Federal-period architecture, cobblestone streets, and Georgetown University. The area combines old-world charm with high-end retail and dining.",
    housingTypes: "Federal and Georgian-period rowhouses, grand detached mansions, carriage houses, luxury condos, and historic university properties",
    challenges: "preserving historic surfaces like original hardwood floors and plaster moldings, working within secure embassy residences, and managing dust from cobblestone streets and construction",
    lifestyle: "Georgetown residents include diplomats, university affiliates, executives, and established DC families who expect white-glove service and premium products safe for fine furnishings",
    seasonalNote: "Georgetown's proximity to the Potomac means added humidity in summer months, and its signature cobblestone streets track in fine grit year-round"
  },
  {
    name: "Dupont Circle",
    slug: "dupont-circle-dc",
    state: "DC",
    county: "District of Columbia",
    population: "47,000",
    neighborhoods: ["Embassy Row", "Kalorama", "Sheridan-Kalorama", "West Dupont", "East Dupont", "Connecticut Avenue Corridor"],
    localDetails: "Dupont Circle is DC's cosmopolitan heart — a walkable, transit-rich neighborhood known for embassy mansions, grand Victorian rowhouses, and a vibrant cultural scene. Kalorama is home to some of the most expensive real estate in the city.",
    housingTypes: "Beaux-Arts apartment buildings, Victorian rowhouses, embassy mansions, luxury condominiums, and classic co-ops",
    challenges: "maintaining fine surfaces in pre-war buildings, high foot traffic in lobby-access buildings, and addressing urban dust accumulation from Connecticut Avenue's commercial corridor",
    lifestyle: "Dupont residents are diplomats, lobbyists, tech professionals, and urban creatives who value convenience and quality. Many have demanding travel schedules requiring flexible cleaning appointments",
    seasonalNote: "The circle's mature elm trees produce heavy spring pollen while fall foliage creates persistent leaf debris that infiltrates even high-floor apartments"
  },
  {
    name: "Adams Morgan",
    slug: "adams-morgan-dc",
    state: "DC",
    county: "District of Columbia",
    population: "26,000",
    neighborhoods: ["Columbia Heights", "Lanier Heights", "Kalorama Triangle", "Meridian Hill", "18th Street Corridor", "Ontario Road"],
    localDetails: "Adams Morgan is DC's most diverse and eclectic neighborhood, renowned for its restaurant row, nightlife, and multicultural community. It features a mix of classic rowhouses, apartment buildings, and converted Victorian flats.",
    housingTypes: "Victorian rowhouses, pre-war apartment flats, English basement units, garden apartments, and renovated multi-family buildings",
    challenges: "managing weekend dust and odors from the nearby entertainment corridor, older building ventilation systems, and narrow building entrances requiring compact cleaning equipment",
    lifestyle: "Adams Morgan residents include young professionals, artists, long-time DC residents, and international community members who appreciate environmentally conscious cleaning services",
    seasonalNote: "The neighborhood's humid urban heat island effect intensifies summer allergens, while fall brings leaf debris from Meridian Hill Park's iconic grounds"
  },
  {
    name: "Arlington",
    slug: "arlington-va",
    state: "VA",
    county: "Arlington County",
    population: "238,000",
    neighborhoods: ["Clarendon", "Ballston", "Rosslyn", "Crystal City", "Pentagon City", "Lyon Village", "Nauck", "Shirlington"],
    localDetails: "Arlington is Northern Virginia's most urban county — a dense, walkable community directly across the Potomac from DC. The Rosslyn-Ballston corridor is lined with high-rise condos and tech offices, while quieter neighborhoods like Lyon Village offer tree-lined streets and Colonial-era homes.",
    housingTypes: "high-rise condominiums, contemporary townhomes, Colonial-style single-family homes, garden apartments, and mixed-use residential buildings",
    challenges: "construction dust from constant development along the Orange/Silver Line corridor, managing pet dander in pet-friendly buildings, and maintaining cleanliness in compact urban units",
    lifestyle: "Arlington residents are predominantly young professionals, government contractors, and tech workers with high incomes and little time. Recurring cleaning services that can be booked online are heavily preferred",
    seasonalNote: "Proximity to the Potomac and Rock Creek Park means elevated spring pollen counts and fall allergens that accumulate quickly in high-traffic condos"
  },
  {
    name: "Fairfax",
    slug: "fairfax-va",
    state: "VA",
    county: "Fairfax County",
    population: "24,000",
    neighborhoods: ["Old Town Fairfax", "Providence", "Layton Hall", "Pickett", "University Village", "Mosby Woods"],
    localDetails: "The City of Fairfax is the historic heart of Fairfax County — a charming small city with a walkable Old Town, George Mason University, and established residential neighborhoods. It offers a quieter suburban feel within easy reach of the DC Beltway.",
    housingTypes: "Colonial and Cape Cod single-family homes, brick ramblers, townhome communities, apartment complexes near GMU, and modern infill condominiums",
    challenges: "heavy pollen from mature suburban landscaping, pet hair in family-oriented homes, and managing post-renovation dust in homes undergoing kitchen and bathroom updates",
    lifestyle: "Fairfax residents include GMU faculty and staff, federal contractors, military families, and established Northern Virginia families who value reliable, thorough cleaning services",
    seasonalNote: "The city's mature tree canopy generates significant oak and cherry pollen in spring, with ragweed allergies peaking in late summer through fall"
  },
  {
    name: "McLean",
    slug: "mclean-va",
    state: "VA",
    county: "Fairfax County",
    population: "48,000",
    neighborhoods: ["Chesterbrook", "Langley", "Evermay", "Broyhill Estates", "Rotonda", "Franklin Park"],
    localDetails: "McLean is one of the most affluent communities in the United States, home to ambassadors, executives, and senior government officials. The area features sprawling estate homes, luxury new construction, and proximity to CIA headquarters and Tysons Corner.",
    housingTypes: "grand estate homes, luxury new-construction singles, large Colonial and Tudor detached homes, upscale townhome communities, and luxury high-rise condominiums at Tysons",
    challenges: "maintaining large square footage properties with premium finishes, coordinating with household staff and property managers, and using only approved products safe for luxury surfaces",
    lifestyle: "McLean residents demand white-glove service, premium eco-certified products, and complete discretion. Many maintain multiple properties and require highly customized cleaning plans",
    seasonalNote: "McLean's expansive private yards and wooded lots mean pollen season is intense in spring, with leaf management a persistent concern from October through December"
  },
  {
    name: "Alexandria",
    slug: "alexandria-va",
    state: "VA",
    county: "Independent City",
    population: "160,000",
    neighborhoods: ["Old Town", "Del Ray", "Seminary Hill", "Arlandria", "West End", "Rosemont", "Potomac Yard"],
    localDetails: "Alexandria is one of the oldest and most charming cities in the DMV — Old Town's cobblestone streets and Federal-period architecture are iconic, while Del Ray and Potomac Yard offer vibrant neighborhood identities. The waterfront and King Street are beloved community centers.",
    housingTypes: "Federal and Colonial rowhouses in Old Town, Craftsman bungalows in Del Ray, modern condos in Potomac Yard, brick townhomes, and mixed-use residential buildings",
    challenges: "caring for historic surfaces like original hardwood, plaster walls, and brick in Old Town; managing urban dust near the waterfront; and pet hair in Del Ray's dog-friendly culture",
    lifestyle: "Alexandria residents include history enthusiasts, Navy and government professionals, young families in Del Ray, and urban professionals who value the city's walkability and community character",
    seasonalNote: "Old Town's proximity to the Potomac brings humidity and mold-prone basements in summer, while cobblestone streets track in fine grit that settles deep into home interiors"
  },
  {
    name: "Falls Church",
    slug: "falls-church-va",
    state: "VA",
    county: "Independent City",
    population: "15,000",
    neighborhoods: ["Broadmont", "Hillwood", "Jefferson Village", "Tinner Hill", "City Center", "Greenway Downs"],
    localDetails: "Falls Church is a charming, tight-knit independent city entirely surrounded by Fairfax County. Known for its excellent schools, walkable city center, and strong community identity, it punches well above its weight in quality of life. The City of Falls Church is one of the smallest independent cities in the nation.",
    housingTypes: "mid-century Colonial and Cape Cod singles, updated ramblers, Craftsman-style bungalows, newer townhomes, and small apartment communities",
    challenges: "post-renovation cleanup in homes undergoing the frequent updates common in this market, managing pet dander in family homes, and addressing seasonal allergens from mature suburban landscaping",
    lifestyle: "Falls Church residents are professionals, young families, and long-time community members who value quality and local connections. Word-of-mouth recommendations drive most service decisions here",
    seasonalNote: "The city's dense residential tree canopy makes spring pollen season particularly intense, with oak and maple allergens coating every surface from March through May"
  }
];

export const slServices: ServiceLocationService[] = [
  {
    name: "House Cleaning",
    slug: "house-cleaning",
    shortName: "house cleaning",
    checklist: [
      // KITCHEN (15)
      "Wipe and sanitize all kitchen countertops and islands",
      "Clean stovetop, burners, drip pans, and grates",
      "Wipe microwave exterior and interior door glass",
      "Scrub and sanitize kitchen sink, drain, and faucet",
      "Wipe refrigerator exterior and handles",
      "Wipe dishwasher exterior, handle, and control panel",
      "Clean small appliance exteriors (toaster, coffee maker, etc.)",
      "Wipe cabinet fronts and hardware",
      "Clean backsplash tile and grout surfaces",
      "Wipe kitchen table and chair surfaces",
      "Empty and reline kitchen trash and recycling bins",
      "Sweep and mop kitchen floor including edges",
      "Spot-clean kitchen walls and switch plates",
      "Wipe range hood exterior surface",
      "Clean and organize countertop items",
      // BATHROOMS (15)
      "Scrub and disinfect toilet — bowl, seat, lid, base, behind",
      "Clean and polish bathroom sinks and faucets",
      "Scrub bathtub and/or shower walls and floor",
      "Clean shower doors or curtain liner",
      "Wipe and polish all bathroom mirrors",
      "Wipe bathroom countertops and vanity surface",
      "Clean and polish towel bars, hooks, and fixtures",
      "Wipe cabinet exteriors and handles",
      "Empty bathroom trash cans and reline",
      "Sweep and mop bathroom floors",
      "Wipe light switches and outlet covers",
      "Wipe door handles and bathroom door surfaces",
      "Clean soap dishes, dispensers, and holders",
      "Fold and arrange towels neatly on bars",
      "Spot-clean bathroom walls as needed",
      // LIVING AREAS & BEDROOMS (15)
      "Dust all accessible surfaces, shelves, and décor items",
      "Dust picture frames, artwork, and wall hangings",
      "Dust lampshades, lamp bases, and light fixtures",
      "Dust windowsills, ledges, and window frames",
      "Vacuum all carpets, area rugs, and upholstered furniture",
      "Vacuum under accessible furniture and beds",
      "Mop all hard floors (hardwood, tile, laminate, vinyl)",
      "Make beds and straighten linens and pillows",
      "Fluff and arrange sofa pillows and cushions",
      "Wipe nightstands, dressers, and end tables",
      "Dust ceiling fan blades within reach",
      "Wipe TV screens and electronics with dry microfiber",
      "Dust baseboards in main living areas",
      "Straighten and tidy remotes, books, and décor",
      "Vacuum stairs, risers, and landings",
      // GENERAL (10)
      "Sanitize all light switches and door handles throughout",
      "Spot-clean interior doors and door frames",
      "Remove cobwebs from corners and ceiling edges",
      "Wipe interior window glass within reach",
      "Empty all wastebaskets and reline with fresh bags",
      "Dust and wipe entry/foyer console and shoe area",
      "Clean sliding door tracks and entry thresholds",
      "Vacuum or sweep entryway and mudroom",
      "Dust hallway surfaces, tables, and fixtures",
      "Final walkthrough quality inspection before departure"
    ],
    processSteps: [
      "Initial home walkthrough to identify priority areas",
      "Systematic room-by-room cleaning from top to bottom",
      "Kitchen and bathroom deep focus cleaning",
      "Floor care including vacuum and mop",
      "Final quality inspection before departure"
    ],
    idealFor: [
      "Busy professionals needing regular home maintenance",
      "Families who want a consistently clean living environment",
      "Homeowners preparing for guests or gatherings",
      "Anyone seeking a reliable, scheduled cleaning routine"
    ]
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    shortName: "deep cleaning",
    checklist: [
      // KITCHEN (15)
      "Deep clean and degrease stovetop, burners, and drip pans",
      "Clean inside oven — racks, walls, and door glass",
      "Clean inside microwave — turntable, walls, and door seal",
      "Degrease and clean range hood and exhaust filter",
      "Wipe down refrigerator interior shelves and drawers",
      "Clean refrigerator exterior, top, and coils area",
      "Clean dishwasher interior, racks, and door gasket",
      "Degrease cabinet fronts, handles, and hinges",
      "Deep clean backsplash tile and grout",
      "Scrub and sanitize sink, drain, and garbage disposal area",
      "Clean and polish all faucets and fixtures",
      "Wipe all countertops, edges, and backsplash corners",
      "Clean under and behind appliances where accessible",
      "Wipe kitchen baseboards and crown molding",
      "Clean kitchen window, sill, and track",
      // BATHROOMS (12)
      "Deep scrub toilet including behind, base, bolts, and tank",
      "Descale shower walls, floor, and showerhead fixtures",
      "Clean tile grout with specialized scrubbing tools",
      "Remove soap scum and hard water from glass doors",
      "Deep clean bathtub including drain and overflow",
      "Polish all chrome, nickel, and brass fixtures",
      "Clean inside medicine cabinet and vanity drawers",
      "Clean exhaust fan cover and surrounding ceiling area",
      "Scrub bathroom floor on hands and knees for detail",
      "Clean bathroom window, blinds, and ledge",
      "Scrub bathroom baseboards and door frame",
      "Clean and polish all mirrors and glass surfaces",
      // LIVING AREAS (13)
      "Detailed baseboard and crown molding dusting throughout",
      "Interior window sill and track cleaning in every room",
      "Ceiling fan and light fixture detailed dusting",
      "Vent and register cover removal and cleaning",
      "Behind and under all accessible furniture cleaning",
      "Door frame, hinge, and door top dusting",
      "Wall spot cleaning and scuff mark removal",
      "Clean window blinds and shutters (individual slats)",
      "Dust inside closet shelves and clothing rods",
      "Upholstery vacuuming with crevice attachments",
      "Detail-clean stairway balusters and handrails",
      "Cobweb removal from all ceilings, corners, and crevices",
      "HEPA vacuum all carpets with slow, deep passes",
      // GENERAL (10)
      "Wipe all interior doors front and back completely",
      "Clean all interior glass and mirrors throughout home",
      "Sanitize every light switch, outlet cover, and thermostat",
      "Detail-clean entryway, foyer, and mudroom",
      "Clean laundry room surfaces, washer/dryer exteriors",
      "Wipe and sanitize all remote controls and electronics",
      "Dust and wipe all shelf contents, replace neatly",
      "Sweep, mop, and detail-clean floor edges and corners",
      "Clean sliding door tracks and thresholds",
      "Comprehensive final walkthrough quality inspection"
    ],
    processSteps: [
      "Comprehensive home assessment to plan cleaning priorities",
      "Top-down approach starting with ceiling fixtures and fans",
      "Detailed surface cleaning including hidden and neglected areas",
      "Appliance interior cleaning and degreasing",
      "Floor-level detail work including baseboards and grout",
      "Final walkthrough with quality verification"
    ],
    idealFor: [
      "Homes that have not been professionally cleaned recently",
      "Seasonal cleaning refreshes in spring or fall",
      "Preparing a home for sale or open house",
      "Allergy sufferers needing thorough allergen removal"
    ]
  },
  {
    name: "Move Out Cleaning",
    slug: "move-out-cleaning",
    shortName: "move-out cleaning",
    checklist: [
      // KITCHEN (12)
      "Deep clean inside oven — racks, walls, door glass",
      "Clean inside refrigerator — all shelves, drawers, seals",
      "Clean inside dishwasher including racks and gasket",
      "Degrease stovetop, burners, range hood, and exhaust filter",
      "Clean inside all kitchen cabinets and drawers",
      "Clean kitchen sink, drain, and faucet thoroughly",
      "Wipe all countertops, backsplash, and edges",
      "Clean microwave interior and turntable",
      "Clean kitchen window, sill, track, and blinds",
      "Wipe all cabinet exteriors, handles, and hinges",
      "Clean kitchen light fixtures and under-cabinet lights",
      "Sweep, mop, and detail floor corners and edges",
      // BATHROOMS (10)
      "Scrub and disinfect all toilets completely",
      "Deep clean bathtub, shower walls, and floor",
      "Scrub tile grout on floors and walls",
      "Clean inside vanity cabinets and drawers",
      "Polish all fixtures, faucets, and hardware",
      "Clean exhaust fan and vent cover",
      "Wash bathroom floor thoroughly including corners",
      "Clean bathroom window, sill, and blinds",
      "Remove any stickers, residue, or buildup",
      "Sanitize all surfaces, switches, and outlet covers",
      // ROOMS (13)
      "Clean inside all closets — shelves, rods, and floors",
      "Wipe inside all cabinets, drawers, and built-ins",
      "Dust and clean all ceiling fans and light fixtures",
      "Clean all window sills, tracks, and frames",
      "Wipe all baseboards and crown molding throughout",
      "Clean all interior doors front, back, and edges",
      "Spot-clean walls and remove scuff marks",
      "Clean all interior glass, mirrors, and windows",
      "Vacuum all carpets with deep passes",
      "Mop all hard floors with edge detail",
      "Clean vent covers and register grilles",
      "Vacuum stairs, risers, and landings",
      "Clean fireplace surround and mantle surface",
      // ADDITIONAL (15)
      "Clean laundry room — washer/dryer area, shelving, floor",
      "Sweep and spot-clean garage floor if applicable",
      "Clean storage closets and linen closets inside",
      "Wipe all light switch plates and outlet covers",
      "Clean front door interior, frame, and hardware",
      "Wipe thermostat, alarm panels, and intercom units",
      "Remove visible cobwebs throughout entire property",
      "Clean sliding glass door tracks and thresholds",
      "Remove shelf liners and adhesive residue",
      "Clean attic access door and immediate area",
      "Wipe door frames and hinges throughout",
      "Clean pantry shelves and walls",
      "Wipe baseboards behind where furniture was placed",
      "Clean windowsills that were hidden by furniture",
      "Final inspection walkthrough against move-out checklist"
    ],
    processSteps: [
      "Pre-cleaning walkthrough to assess property condition",
      "Large debris removal and initial dust clearing",
      "Room-by-room intensive cleaning from top to bottom",
      "Appliance and cabinet interior detailing",
      "Floor care with vacuum, mop, and spot treatment",
      "Quality inspection against standard move-out checklists"
    ],
    idealFor: [
      "Tenants preparing for final lease inspection",
      "Homeowners selling property and needing presentation-ready condition",
      "Property managers turning units between tenants",
      "Anyone relocating who wants to leave their space spotless"
    ]
  },
  {
    name: "Move In Cleaning",
    slug: "move-in-cleaning",
    shortName: "move-in cleaning",
    checklist: [
      // KITCHEN (10)
      "Sanitize all kitchen countertops, sink, and faucets",
      "Clean inside refrigerator — shelves, drawers, walls, seals",
      "Clean inside oven, microwave, and dishwasher",
      "Sanitize stovetop, burners, and drip pans",
      "Wipe inside all kitchen cabinets and drawers",
      "Clean and sanitize cabinet exteriors and handles",
      "Clean backsplash, tile, and grout surfaces",
      "Clean kitchen window, sill, track, and blinds",
      "Wipe kitchen light fixtures and switch plates",
      "Sweep, mop, and sanitize kitchen floor",
      // BATHROOMS (10)
      "Full sanitization of all toilets — bowl, seat, base, tank",
      "Disinfect bathtub, shower walls, floor, and fixtures",
      "Scrub tile grout with antibacterial solution",
      "Sanitize bathroom sinks, faucets, and countertops",
      "Clean inside vanity cabinets and medicine cabinet",
      "Polish all fixtures and hardware",
      "Clean exhaust fan and vent cover",
      "Clean bathroom window and blinds",
      "Sanitize light switches, outlet covers, and door handles",
      "Wash and disinfect bathroom floor thoroughly",
      // ROOMS (15)
      "Sanitize inside all closets — shelves, rods, and floors",
      "Disinfect inside all cabinets, drawers, and built-ins",
      "Clean all ceiling fans and light fixtures",
      "Clean all window sills, tracks, and frames",
      "Wipe all baseboards and crown molding",
      "Clean all interior doors, frames, and hinges",
      "Spot-clean walls and remove any marks",
      "Clean all interior glass and mirrors",
      "Deep vacuum all carpets and area rugs",
      "Mop and sanitize all hard floors",
      "Clean vent covers and register grilles",
      "Vacuum stairs, risers, and landings",
      "Sanitize all light switches and door handles",
      "Clean laundry room surfaces and floor",
      "Clean entry door interior and hardware",
      // ADDITIONAL (15)
      "Full surface disinfection using hospital-grade eco-products",
      "Remove any residue, stickers, or marks from prior tenant",
      "Clean inside pantry and linen closets",
      "Wipe thermostat, alarm panel, and intercom units",
      "Clean sliding door tracks and thresholds",
      "Remove cobwebs from ceilings and corners",
      "Clean garage door interior if applicable",
      "Sanitize kitchen trash area and recycling bins",
      "Clean and disinfect bathroom accessories and holders",
      "Wipe all shelving and built-in bookcases",
      "Clean window blinds and shutters",
      "Sanitize washer and dryer exteriors",
      "Clean attic hatch and surrounding area",
      "Air quality check — ensure dust-free environment",
      "Final walkthrough ensuring move-in readiness"
    ],
    processSteps: [
      "Initial assessment of property cleanliness and needs",
      "Full disinfection protocol for high-touch surfaces",
      "Kitchen and bathroom intensive sanitization",
      "Cabinet and closet interior preparation",
      "Complete floor treatment for move-in readiness",
      "Final quality check before your belongings arrive"
    ],
    idealFor: [
      "New homeowners wanting a fresh, sanitized start",
      "Tenants moving into a previously occupied unit",
      "Families concerned about allergens from prior residents",
      "Anyone wanting peace of mind in their new living space"
    ]
  },
  {
    name: "Apartment Cleaning",
    slug: "apartment-cleaning",
    shortName: "apartment cleaning",
    checklist: [
      // KITCHEN (10)
      "Clean all kitchen countertops and backsplash",
      "Clean stovetop, burners, and drip pans",
      "Wipe microwave exterior and interior door",
      "Scrub and sanitize kitchen sink and faucet",
      "Wipe refrigerator and dishwasher exteriors",
      "Clean small appliance exteriors",
      "Wipe cabinet fronts and hardware",
      "Empty and reline kitchen trash",
      "Sweep and mop kitchen floor",
      "Clean kitchen window sill and ledge",
      // BATHROOMS (10)
      "Scrub and disinfect toilet completely",
      "Clean bathtub/shower walls and floor",
      "Clean and polish bathroom sink and faucet",
      "Wipe and polish mirrors",
      "Clean bathroom countertop and vanity",
      "Wipe cabinet exteriors and handles",
      "Empty bathroom trash and reline",
      "Sweep and mop bathroom floor",
      "Clean soap dishes and dispensers",
      "Wipe light switches and door handles",
      // LIVING/BEDROOM (15)
      "Dust all accessible surfaces and shelves",
      "Dust picture frames and wall décor",
      "Dust lampshades and light fixtures",
      "Dust windowsills and window frames",
      "Vacuum all carpets and area rugs",
      "Vacuum under beds and accessible furniture",
      "Mop all hard floors throughout",
      "Make beds and straighten linens",
      "Wipe nightstands and dressers",
      "Fluff and arrange pillows and cushions",
      "Dust ceiling fan blades within reach",
      "Wipe TV screen with dry microfiber",
      "Dust baseboards in main areas",
      "Straighten books, remotes, and décor",
      "Vacuum or sweep entryway",
      // APARTMENT-SPECIFIC (15)
      "Clean entryway and hallway surfaces",
      "Wipe front door interior and hardware",
      "Clean coat closet shelves and rods",
      "Sanitize all light switches and door handles",
      "Empty all wastebaskets and reline",
      "Remove cobwebs from corners and ceilings",
      "Spot-clean interior doors and frames",
      "Clean sliding door tracks if applicable",
      "Wipe intercom or buzzer panel",
      "Clean balcony or patio door glass",
      "Sweep balcony or patio if accessible",
      "Organize entry shoe area and console",
      "Wipe in-unit washer/dryer exteriors if applicable",
      "Clean utility closet surfaces",
      "Final walkthrough for apartment-ready condition"
    ],
    processSteps: [
      "Quick walkthrough to prioritize apartment-specific needs",
      "Efficient cleaning flow optimized for compact spaces",
      "Kitchen and bathroom focus with space-saving techniques",
      "Floor care customized for apartment flooring types",
      "Compact storage area organization and wiping",
      "Departure check ensuring apartment is guest-ready"
    ],
    idealFor: [
      "Urban apartment dwellers with limited time for cleaning",
      "Young professionals maintaining a tidy living space",
      "Tenants wanting to keep their deposit-ready condition",
      "Downsizers adjusting to apartment living from larger homes"
    ]
  },
  {
    name: "Post Construction Cleaning",
    slug: "post-construction-cleaning",
    shortName: "post-construction cleaning",
    checklist: [
      // DUST REMOVAL (12)
      "Remove all visible construction dust from every surface",
      "HEPA vacuum all floors, carpets, and upholstery",
      "Wipe ceilings, crown molding, and ceiling fixtures",
      "Clean all ductwork vent covers and register grilles",
      "Vacuum and wipe inside all cabinets and drawers",
      "Clean behind and under all fixtures and appliances",
      "Detail-clean door frames, hinges, and door tops",
      "Wipe all baseboards, trim, and wainscoting",
      "Clean electrical outlet covers and switch plates",
      "Remove dust from inside light fixtures and sconces",
      "Vacuum window tracks, sills, and frames thoroughly",
      "Address dust in closets, pantries, and storage spaces",
      // SURFACE CLEANING (12)
      "Window and glass cleaning with sticker/label removal",
      "Remove paint splatter from non-painted surfaces",
      "Remove adhesive residue and tape marks",
      "Clean and polish all new hardware and fixtures",
      "Wipe and sanitize countertop surfaces",
      "Clean and polish new tile and grout",
      "Remove protective film from appliances and fixtures",
      "Clean new cabinetry inside and out",
      "Wipe and polish stainless steel appliances",
      "Clean sinks, faucets, and plumbing fixtures",
      "Remove caulk residue from around tubs and sinks",
      "Clean new grout lines and tile edges",
      // FLOOR CARE (8)
      "Sweep and remove all debris from hard floors",
      "Mop hard floors with pH-neutral solutions",
      "Detail-clean floor edges, corners, and toe kicks",
      "Remove grout haze from new tile installations",
      "Vacuum carpeted areas with HEPA filtration",
      "Clean stairways, risers, and landings",
      "Clean garage or workspace floors if applicable",
      "Polish hardwood and refinished floors gently",
      // FINAL PHASE (8)
      "Multi-phase cleaning with quality inspection at each stage",
      "Final debris removal and responsible disposal",
      "Touch-up cleaning after punch-list item completion",
      "Contractor coordination for scheduling and access",
      "Air quality check — verify dust levels are acceptable",
      "Clean HVAC return vents and intake grilles",
      "Final walkthrough with homeowner for approval",
      "Post-clean documentation for contractor records"
    ],
    processSteps: [
      "Phase 1: Rough cleaning to remove bulk debris and dust",
      "Phase 2: Detailed surface cleaning of all fixtures and finishes",
      "Phase 3: Fine dust removal with HEPA filtration equipment",
      "Phase 4: Window, glass, and hardware final polishing",
      "Phase 5: Floor treatment and final touch-up inspection",
      "Contractor coordination for remaining punch-list items"
    ],
    idealFor: [
      "Homeowners completing kitchen or bathroom renovations",
      "Properties undergoing room additions or structural work",
      "Builders and contractors preparing for client walkthroughs",
      "Anyone converting commercial or unfinished space to residential use"
    ]
  },
  {
    name: "Recurring Cleaning",
    slug: "recurring-cleaning",
    shortName: "recurring cleaning",
    checklist: [
      // EVERY VISIT (20)
      "All standard cleaning tasks performed consistently each visit",
      "Kitchen countertop, stovetop, and sink sanitization",
      "Bathroom sanitization — toilets, sinks, tubs, showers",
      "Dusting all accessible surfaces and décor items",
      "Vacuuming all carpets, rugs, and upholstered pieces",
      "Mopping all hard floors throughout the home",
      "Mirror and glass surface polishing",
      "Trash removal and bin liner replacement",
      "Light switch and door handle sanitization",
      "Bed making and linen straightening",
      "General tidying and organizing of rooms",
      "Spot-cleaning walls and doors as needed",
      "Wiping kitchen appliance exteriors",
      "Cleaning entryway and mudroom surfaces",
      "Vacuuming stairs and landings",
      "Dusting ceiling fans within reach",
      "Cleaning window sills and ledges",
      "Wiping nightstands, dressers, and tables",
      "Fluffing pillows and arranging cushions",
      "Cobweb removal from accessible corners",
      // RECURRING PLAN EXTRAS (15)
      "Rotating deep-clean focus area each session",
      "Custom priority areas based on household patterns",
      "Seasonal adjustments (spring pollen, fall leaves, winter salt)",
      "Team notes track preferences visit-to-visit",
      "Dedicated team assigned to your home",
      "Customizable cleaning checklist and priorities",
      "Preferred scheduling with consistent day/time slots",
      "Regular quality reviews and check-ins",
      "Priority booking for add-on services",
      "Holiday preparation add-ons available",
      "Gradual deep-cleaning rotation covers whole house",
      "Flexible plan changes — upgrade or downgrade anytime",
      "No long-term contracts or cancellation penalties",
      "Consistent communication via text or email",
      "Annual deep clean recommendation reminders"
    ],
    processSteps: [
      "Initial deep clean to establish baseline home condition",
      "Dedicated team assignment for your home",
      "Customized checklist developed from your preferences",
      "Consistent scheduling on your preferred day and time",
      "Regular quality reviews and preference updates",
      "Seasonal deep-clean rotations built into your plan"
    ],
    idealFor: [
      "Busy households wanting consistent cleanliness without effort",
      "Families with children and pets generating daily messes",
      "Professionals who value their free time on weekends",
      "Homeowners who want preferred pricing and priority scheduling"
    ]
  },
  {
    name: "Eco Friendly Cleaning",
    slug: "eco-friendly-cleaning",
    shortName: "eco-friendly cleaning",
    checklist: [
      // ECO-SPECIFIC (15)
      "Full home cleaning using 100% plant-based cleaning solutions",
      "HEPA-filtered vacuuming to capture fine allergens and dust",
      "Microfiber cloth cleaning to reduce chemical usage",
      "Natural disinfection using botanical antimicrobial agents",
      "Essential oil-based freshening instead of synthetic fragrances",
      "Sustainable equipment and reusable supply practices",
      "Kitchen cleaning with food-safe, biodegradable products",
      "Bathroom sanitization using non-toxic antibacterial solutions",
      "Floor care with pH-neutral, eco-certified cleaners",
      "Indoor air quality-conscious methods throughout service",
      "Zero-VOC products for sensitive environments",
      "Biodegradable trash bags and eco-friendly liners",
      "Concentrated solutions to minimize packaging waste",
      "Cruelty-free products certified by recognized organizations",
      "Safe for Chesapeake Bay watershed — all products biodegradable",
      // STANDARD TASKS (35)
      "Wipe and sanitize all kitchen countertops naturally",
      "Clean stovetop and burners with plant-based degreaser",
      "Scrub and sanitize kitchen sink with botanical cleaner",
      "Wipe refrigerator and appliance exteriors",
      "Clean cabinet fronts and hardware",
      "Wipe backsplash and tile surfaces",
      "Sweep and mop kitchen floor with eco-certified cleaner",
      "Empty and reline trash with biodegradable bags",
      "Scrub and disinfect toilets with non-toxic solution",
      "Clean bathtub/shower with plant-based descaler",
      "Polish bathroom fixtures with natural polish",
      "Wipe and polish mirrors with streak-free eco solution",
      "Clean bathroom countertop and vanity",
      "Sweep and mop bathroom floor naturally",
      "Dust all surfaces with microfiber (no chemical sprays)",
      "Vacuum with HEPA-filtered equipment",
      "Mop hard floors with pH-neutral eco solution",
      "Make beds and straighten linens",
      "Wipe nightstands and furniture surfaces",
      "Dust picture frames, lamps, and décor",
      "Dust windowsills and window frames",
      "Vacuum carpets and area rugs with HEPA",
      "Clean window glass with plant-based glass cleaner",
      "Sanitize light switches and handles naturally",
      "Spot-clean doors and frames",
      "Remove cobwebs with microfiber duster",
      "Vacuum stairs and landings",
      "Clean entryway and mudroom",
      "Dust ceiling fans within reach",
      "Wipe TV and electronics with dry microfiber",
      "Empty all wastebaskets and reline",
      "Natural air freshening with essential oil diffusion",
      "Ventilation optimization during cleaning",
      "Post-service air quality check",
      "Final walkthrough with eco-product usage summary"
    ],
    processSteps: [
      "Pre-service consultation on environmental sensitivities",
      "Product selection tailored to your home's surfaces and needs",
      "Green cleaning protocol from top to bottom",
      "Natural air freshening and ventilation optimization",
      "Eco-conscious waste handling and supply management",
      "Post-service air quality check and product usage summary"
    ],
    idealFor: [
      "Families with young children and chemical sensitivities",
      "Pet owners wanting safe cleaning products in their homes",
      "Environmentally conscious homeowners reducing chemical footprint",
      "Allergy and asthma sufferers needing gentle yet effective cleaning"
    ]
  }
];

// Generate unique intro paragraph based on city+service combination
export function getServiceLocationIntro(city: ServiceLocationCity, service: ServiceLocationService): string {
  const intros: Record<string, string[]> = {
    "house-cleaning": [
      `Capital Clean Care delivers exceptional ${service.shortName} services throughout ${city.name}, ${city.state}. Our professionally trained teams understand that homes in ${city.county} require attentive care tailored to the local environment and lifestyle. ${city.localDetails}`,
      `Maintaining a clean home in ${city.name} should never feel like a burden. With Capital Clean Care's professional ${service.shortName} service, ${city.name} residents can enjoy spotless living spaces without sacrificing their valuable free time. Our teams are familiar with ${city.housingTypes} found throughout the area and adjust their approach for optimal results.`,
      `${city.lifestyle}. That is exactly why Capital Clean Care provides dependable, thorough ${service.shortName} services to the ${city.name} community. Every visit follows our detailed cleaning protocol using only eco-friendly, non-toxic products that are safe for families, children, and pets.`,
      `${city.seasonalNote}. Our ${service.shortName} professionals are well-versed in addressing these local challenges, ensuring your ${city.name} home stays fresh and healthy throughout the year. We use plant-based cleaning solutions that effectively tackle ${city.challenges} without introducing harmful chemicals into your living environment.`
    ],
    "deep-cleaning": [
      `When routine cleaning is not enough, ${city.name} homeowners turn to Capital Clean Care's professional ${service.shortName} service for a comprehensive, top-to-bottom refresh. Homes in ${city.county} face unique challenges including ${city.challenges}, and our intensive approach addresses every one of them.`,
      `${city.localDetails} Over time, even well-maintained homes accumulate hidden grime in overlooked areas. Our ${service.shortName} service in ${city.name} goes beyond surface-level tidying to eliminate built-up dust, allergens, and residue from every corner of your home.`,
      `${city.seasonalNote}. A professional ${service.shortName} from Capital Clean Care helps ${city.name} residents reset their homes and improve indoor air quality. Our teams use eco-friendly, plant-based products combined with professional-grade equipment to deliver results that standard cleaning simply cannot match.`,
      `${city.lifestyle}. A thorough ${service.shortName} ensures your ${city.name} home is restored to like-new condition, creating a healthier and more comfortable living environment for your entire household.`
    ],
    "move-out-cleaning": [
      `Moving out of a ${city.name} property? Capital Clean Care's professional ${service.shortName} service ensures you leave your home in impeccable condition. Whether you are a tenant seeking full security deposit return or a homeowner preparing for sale, our thorough approach meets and exceeds standard inspection requirements in ${city.county}.`,
      `${city.localDetails} When it is time to move on, our ${service.shortName} teams handle every detail so you can focus on your transition. We clean ${city.housingTypes} throughout ${city.name} with the same meticulous attention that has earned us the trust of residents across the DMV region.`,
      `${city.lifestyle}. The last thing you need during a move is cleaning stress. Capital Clean Care's ${service.shortName} service in ${city.name} takes that burden completely off your shoulders. Our experienced teams follow detailed checklists designed to satisfy the strictest property managers and landlords.`,
      `Timing is critical during any move. Our flexible scheduling accommodates tight ${city.name} moving timelines, and our efficient teams work quickly without compromising quality. We coordinate with your moving schedule to ensure the property is ready exactly when you need it.`
    ],
    "move-in-cleaning": [
      `Starting fresh in ${city.name}? Capital Clean Care's professional ${service.shortName} service ensures your new home is completely sanitized and move-in ready before your first box arrives. We serve ${city.housingTypes} throughout ${city.county} with thorough disinfection and deep cleaning protocols.`,
      `${city.localDetails} Whether you are settling into an established home or a newly built property, our ${service.shortName} teams prepare every surface for your family. We eliminate traces of previous occupants and create a genuinely fresh start in your new ${city.name} residence.`,
      `${city.lifestyle}. Beginning your life in ${city.name} with a professionally cleaned home sets the right tone. Our ${service.shortName} service goes beyond basic cleaning to provide complete sanitization, giving you confidence that your new living space is healthy and welcoming.`,
      `Every ${service.shortName} in ${city.name} includes comprehensive cabinet, closet, and appliance interior disinfection. We address areas that previous occupants may have neglected, ensuring your new home truly feels like yours from day one.`
    ],
    "apartment-cleaning": [
      `Living in a ${city.name} apartment means making the most of every square foot. Capital Clean Care's ${service.shortName} service is specifically designed for the unique layouts and needs of apartment living in ${city.county}. Our teams work efficiently in compact spaces to deliver thorough results without disrupting your day.`,
      `${city.localDetails} The apartment lifestyle in ${city.name} demands cleaning solutions that are efficient, effective, and tailored to smaller living spaces. Our ${service.shortName} teams understand how to maximize cleanliness in every type of apartment layout found throughout the area.`,
      `${city.lifestyle}. Professional ${service.shortName} in ${city.name} frees you from weekend scrubbing so you can enjoy everything this vibrant community has to offer. We work with building management and coordinate access to make the process seamless.`,
      `${city.seasonalNote}. Apartment residents in ${city.name} benefit from our eco-friendly ${service.shortName} approach that keeps indoor spaces fresh without the chemical residue that can be especially noticeable in compact living environments.`
    ],
    "post-construction-cleaning": [
      `Completed a renovation in your ${city.name} home? Capital Clean Care's ${service.shortName} service is specifically designed to handle the fine dust, debris, and residue that construction projects leave behind. Our specialized teams serve ${city.housingTypes} throughout ${city.county} with professional-grade equipment.`,
      `${city.localDetails} Whether your project involved a kitchen remodel, bathroom renovation, or full home addition, our ${service.shortName} teams in ${city.name} have the expertise to transform your construction zone into a livable, pristine space. We use HEPA-filtered equipment to capture the finest construction particles.`,
      `Construction dust in ${city.name} homes is unlike regular household dust — it is finer, more persistent, and settles in unexpected places. Our multi-phase ${service.shortName} approach ensures complete removal from every surface, vent, and crevice in your renovated space.`,
      `${city.lifestyle}. After investing in home improvements, you deserve a ${service.shortName} that reveals the full beauty of your renovation. Capital Clean Care coordinates with ${city.name} contractors and builders to schedule cleaning at the optimal phase of your project.`
    ],
    "recurring-cleaning": [
      `Consistency is the foundation of a truly clean ${city.name} home. Capital Clean Care's ${service.shortName} plans provide scheduled, reliable cleaning on a weekly, bi-weekly, or monthly basis tailored to the rhythms of life in ${city.county}. Your dedicated team gets to know your home and preferences over time.`,
      `${city.localDetails} Maintaining cleanliness in ${city.name} homes requires ongoing attention, especially given ${city.challenges}. Our ${service.shortName} plans address these local factors with customized routines that evolve with your household needs.`,
      `${city.lifestyle}. A ${service.shortName} plan from Capital Clean Care means one less thing to worry about. Your assigned team arrives on schedule, fully equipped with eco-friendly products, and delivers the consistent quality that ${city.name} homeowners expect.`,
      `${city.seasonalNote}. Our ${service.shortName} plans in ${city.name} include seasonal adjustments to address changing conditions throughout the year. Recurring clients enjoy preferred pricing, priority scheduling, and the reliability of a dedicated cleaning team that knows their home.`
    ],
    "eco-friendly-cleaning": [
      `${city.name} homeowners who care about their family's health and environmental impact choose Capital Clean Care's ${service.shortName} service. We use exclusively plant-based, non-toxic cleaning solutions throughout every home we serve in ${city.county}, delivering professional results without harsh chemicals.`,
      `${city.localDetails} Our ${service.shortName} approach in ${city.name} combines botanical cleaning agents, HEPA filtration, and microfiber technology to achieve exceptional cleanliness while protecting your family, pets, and the environment. No synthetic fragrances, no harsh chemicals, no compromises.`,
      `${city.lifestyle}. Choosing ${service.shortName} in ${city.name} means your home stays spotless without the chemical exposure that conventional cleaning products introduce. Our plant-based solutions are gentle on surfaces yet tough on dirt, grime, and allergens.`,
      `${city.seasonalNote}. Our ${service.shortName} methods are especially beneficial for managing these seasonal challenges in ${city.name} without adding chemical irritants to your indoor environment. Every product we use is biodegradable, cruelty-free, and safe for the Chesapeake Bay watershed.`
    ]
  };

  const serviceIntros = intros[service.slug] || intros["house-cleaning"];
  return serviceIntros.join("\n\n");
}

// Generate unique "Why Choose Us" section
export function getWhyChooseUs(city: ServiceLocationCity, service: ServiceLocationService): string[] {
  return [
    `Fully licensed, bonded, and insured ${service.shortName} professionals serving ${city.name}, ${city.state}`,
    `100% eco-friendly, plant-based products — safe for ${city.name} families, children, and pets`,
    `Background-checked teams experienced with ${city.housingTypes} throughout ${city.county}`,
    `Scheduling built around ${city.lifestyle.toLowerCase().split(".")[0]}`,
    `${service.shortName.charAt(0).toUpperCase() + service.shortName.slice(1)} checklist covering every area of your ${city.name} home`,
    `Satisfaction guaranteed — we re-clean free if you are not 100% happy`,
    `Transparent, no-surprise pricing for ${city.name} homeowners`,
    `Local knowledge of ${city.neighborhoods.slice(0, 3).join(", ")} and surrounding ${city.name} neighborhoods`
  ];
}

// Generate unique FAQs
export function getServiceLocationFAQs(city: ServiceLocationCity, service: ServiceLocationService): { q: string; a: string }[] {
  return [
    {
      q: `How much does ${service.shortName} cost in ${city.name}, ${city.state}?`,
      a: `${service.shortName.charAt(0).toUpperCase() + service.shortName.slice(1)} pricing in ${city.name} depends on your home's size, current condition, and specific requirements. Most ${city.name} homes receive competitive pricing based on bedroom and bathroom count. Contact us for a free, no-obligation quote tailored to your property.`
    },
    {
      q: `How long does ${service.shortName} take in ${city.name}?`,
      a: `The duration depends on your home's size and condition. For typical ${city.housingTypes} in ${city.name}, ${service.slug === "deep-cleaning" ? "expect 4 to 8 hours" : service.slug === "post-construction-cleaning" ? "expect 4 to 10 hours depending on renovation scope" : "expect 2 to 4 hours"}. We always complete the full checklist regardless of time.`
    },
    {
      q: `Do you bring your own cleaning supplies to ${city.name} homes?`,
      a: `Yes. Our teams arrive fully equipped with all necessary eco-friendly cleaning products and professional-grade equipment. You do not need to provide anything. All our products are plant-based, non-toxic, and safe for families and pets in ${city.name} homes.`
    },
    {
      q: `Are your ${city.name} cleaning teams background-checked?`,
      a: `Absolutely. Every Capital Clean Care team member undergoes thorough background screening. We are fully licensed and insured, giving ${city.name} homeowners complete peace of mind when welcoming our teams into their homes.`
    },
    {
      q: `Do you serve all neighborhoods in ${city.name}?`,
      a: `Yes, we provide ${service.shortName} services throughout all ${city.name} neighborhoods including ${city.neighborhoods.slice(0, 4).join(", ")}, and surrounding areas in ${city.county}.`
    },
    {
      q: `Can I schedule ${service.shortName} on weekends in ${city.name}?`,
      a: `Yes, we offer Saturday and limited Sunday availability for ${city.name} clients. Weekend appointments are popular and tend to fill quickly, so we recommend booking in advance to secure your preferred time slot.`
    },
    {
      q: `What makes your ${service.shortName} eco-friendly?`,
      a: `We exclusively use plant-based, biodegradable cleaning solutions free from harsh chemicals, artificial fragrances, and common allergens. Our products are tough on dirt and germs but gentle on surfaces and safe for ${city.name} families, children, and pets.`
    },
    {
      q: `How do I book ${service.shortName} in ${city.name}, ${city.state}?`,
      a: `Booking is easy. Fill out our online quote form, call us directly, or request a callback. We typically respond within a few hours and can schedule your ${service.shortName} appointment at a time that works best for your ${city.name} household.`
    }
  ];
}

// Get all valid city+service combinations
export function getAllServiceLocationSlugs(): { citySlug: string; serviceSlug: string }[] {
  const combos: { citySlug: string; serviceSlug: string }[] = [];
  for (const city of slCities) {
    for (const service of slServices) {
      combos.push({ citySlug: city.slug, serviceSlug: service.slug });
    }
  }
  return combos;
}

export function getCity(slug: string): ServiceLocationCity | undefined {
  return slCities.find(c => c.slug === slug);
}

export function getService(slug: string): ServiceLocationService | undefined {
  return slServices.find(s => s.slug === slug);
}
