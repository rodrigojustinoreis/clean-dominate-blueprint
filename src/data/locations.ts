export interface CityData {
  name: string;
  slug: string;
  state: string;
  stateSlug: string;
  county?: string;
  intro: string;
  nearbySlugs: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export interface HubData {
  name: string;
  slug: string;
  stateAbbr: string;
  intro: string;
  citySlugs: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const hubs: HubData[] = [
  {
    name: "Maryland Cleaning Services",
    slug: "maryland",
    stateAbbr: "MD",
    intro: "Capital Clean Care proudly serves communities throughout Maryland with premium residential cleaning services. From the bustling suburbs of Montgomery County to the charming towns of Frederick County and the thriving communities of Howard County, our eco-friendly cleaning teams bring sparkle and freshness to homes across the state.\n\nMaryland homeowners deserve a cleaning service that understands the unique demands of mid-Atlantic living. Seasonal humidity, pollen, and the dust that accompanies both urban and suburban life require consistent, thorough cleaning routines. Our trained professionals use plant-based, non-toxic products that address these challenges while keeping your family and pets safe.\n\nWhether you live in a historic Bethesda colonial, a modern Rockville apartment, or a spacious Frederick farmhouse, Capital Clean Care adapts our services to your home's specific needs. We offer standard cleaning, deep cleaning, move-in/move-out services, post-construction cleanup, and flexible recurring plans throughout Maryland.\n\nOur Maryland coverage includes Montgomery County, Frederick County, Howard County, and Prince George's County, with service areas continuing to grow. Each community we serve receives the same commitment to quality, reliability, and eco-conscious cleaning that defines Capital Clean Care.\n\nBelow you'll find links to our service areas across Maryland. Each location page provides details specific to your community, including services available, pricing factors, and how to request a free quote.",
    citySlugs: ["rockville-md", "silver-spring-md", "bethesda-md", "germantown-md", "gaithersburg-md", "potomac-md", "frederick-md", "urbana-md", "clarksburg-md", "damascus-md", "monrovia-md", "takoma-park-md", "columbia-md", "ellicott-city-md", "new-market-md", "wheaton-md", "montgomery-county-md", "frederick-county-md", "howard-county-md", "prince-georges-county-md"],
    faqs: [
      { q: "What areas in Maryland do you serve?", a: "We serve communities across Montgomery County, Frederick County, Howard County, and Prince George's County, including Rockville, Bethesda, Silver Spring, Germantown, Frederick, Columbia, Ellicott City, and many more." },
      { q: "How do I book a cleaning in Maryland?", a: "Simply fill out our free quote form, call us directly, or select your specific city page for location-specific booking. We typically respond within a few hours." },
      { q: "Do you offer same-day service in Maryland?", a: "Same-day availability depends on our current schedule and your location. We do our best to accommodate urgent requests, especially in Montgomery County where we have the most teams." },
      { q: "Are your Maryland teams local?", a: "Yes. Our cleaning professionals live in and around the Maryland communities they serve, which means shorter travel times and a genuine understanding of local needs." },
      { q: "What products do you use in Maryland homes?", a: "We exclusively use eco-friendly, non-toxic cleaning products throughout all our Maryland service areas. Our plant-based solutions are safe for families, pets, and local waterways." },
      { q: "How much does house cleaning cost in Maryland?", a: "Pricing varies by home size, condition, and service type. Standard cleaning for a 2-3 bedroom Maryland home typically ranges from $150-$250. Deep cleaning runs $250-$450. Request a free quote for exact pricing." },
      { q: "Are your Maryland cleaning teams insured?", a: "Yes. Capital Clean Care is fully licensed and insured with comprehensive liability coverage. Every team member undergoes thorough background checks before entering any Maryland home." },
      { q: "Do you offer recurring cleaning plans in Maryland?", a: "Yes. We offer weekly, bi-weekly, and monthly recurring plans throughout Maryland with preferred pricing and dedicated teams assigned to your home." },
      { q: "What cleaning services do you offer in Maryland?", a: "We offer standard house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, recurring cleaning plans, and eco-friendly cleaning throughout Maryland." },
      { q: "Do you offer a satisfaction guarantee?", a: "Absolutely. We offer a 100% satisfaction guarantee on every cleaning in Maryland. If you're not completely happy, we'll return within 24 hours to re-clean the area at no additional charge." },
      { q: "Can I get a free estimate for my Maryland home?", a: "Yes. All quotes are free with no obligation. Fill out our online form, call (240) 704-2551, or visit our contact page. We typically respond within a few hours." },
      { q: "Do you serve Maryland apartments and condos?", a: "Yes. We clean all types of Maryland residences including single-family homes, townhouses, apartments, condos, and high-rise units. We coordinate with building management when needed." }
    ],
    metaTitle: "Maryland House Cleaning Services | Capital Clean Care",
    metaDescription: "Premium house cleaning across Maryland — Montgomery, Frederick, Howard & Prince George's Counties. Eco-friendly, licensed & insured. Get a free quote today."
  },
  {
    name: "Washington DC Cleaning Services",
    slug: "washington-dc",
    stateAbbr: "DC",
    intro: "Capital Clean Care brings premium residential cleaning to neighborhoods throughout Washington, DC. From the tree-lined streets of Georgetown to the vibrant communities of Adams Morgan, our professional teams deliver exceptional cleaning services tailored to the unique needs of District living.\n\nDC homes come in every shape and size — historic rowhouses, modern condominiums, spacious apartments, and classic brownstones. Our cleaning professionals are experienced with all property types and understand the specific care each requires. Whether you need delicate treatment for historic woodwork or efficient cleaning for a compact urban apartment, we adapt our approach accordingly.\n\nCity living brings unique cleaning challenges. Construction dust from ongoing development, seasonal pollen from the Capitol's famous cherry blossoms, and the everyday grime of urban life all demand consistent professional attention. Our eco-friendly products are specifically chosen to address these challenges without introducing harsh chemicals into your living space.\n\nWe serve all four quadrants of Washington, DC, including Northwest, Northeast, Southeast, and Southwest. Our most popular service areas include Georgetown, Dupont Circle, Capitol Hill, Adams Morgan, and Downtown. Wherever you call home in the District, Capital Clean Care is ready to provide the premium cleaning experience you deserve.\n\nExplore our neighborhood-specific pages below to learn more about our services in your area of DC.",
    citySlugs: ["washington-dc-nw", "washington-dc-ne", "capitol-hill-dc", "georgetown-dc", "dupont-circle-dc", "adams-morgan-dc", "downtown-dc"],
    faqs: [
      { q: "Do you serve all of Washington, DC?", a: "Yes, we provide cleaning services throughout all four quadrants of DC, including NW, NE, SE, and SW. Our teams are familiar with neighborhoods across the entire District." },
      { q: "Can you clean condos and apartments in DC?", a: "Absolutely. We're experienced with all DC property types including condos, apartments, rowhouses, and single-family homes. We also coordinate with building management for access when needed." },
      { q: "Is parking an issue for your DC teams?", a: "Our teams are experienced with DC logistics. We handle parking arrangements and can coordinate with building concierges or parking garages. This never affects your service quality or timing." },
      { q: "Do you serve DC government housing?", a: "We serve any residential property in DC. If you have specific access requirements or building protocols, just let us know when booking and we'll coordinate accordingly." },
      { q: "How quickly can you start service in DC?", a: "We typically schedule new clients within 3-5 business days. Rush availability may be possible depending on the neighborhood and our current schedule." },
      { q: "How much does house cleaning cost in Washington, DC?", a: "DC pricing depends on property type, size, and service. A standard cleaning for a 1-2 bedroom apartment starts around $130-$200. Rowhouses and larger homes range from $200-$350+. Request a free quote." },
      { q: "Are your DC teams background-checked?", a: "Yes. Every Capital Clean Care team member undergoes comprehensive background screening. We're fully licensed and insured for your complete peace of mind." },
      { q: "Do you offer move-in/move-out cleaning in DC?", a: "Yes. Our move-in/move-out service is popular with DC tenants and property managers. We ensure properties meet inspection standards and maximize deposit returns." },
      { q: "What eco-friendly products do you use in DC?", a: "We use plant-based, non-toxic cleaning solutions that are safe for families, pets, and the environment. Our products are free from harsh chemicals and artificial fragrances." },
      { q: "Can I schedule recurring cleaning in DC?", a: "Yes. Weekly, bi-weekly, and monthly plans are available throughout DC with dedicated teams and preferred pricing. Bi-weekly is our most popular option." },
      { q: "Do you clean historic DC rowhouses?", a: "Yes. Our teams are trained in proper care for DC's historic properties, including appropriate products for original hardwood, plaster, vintage tile, and period fixtures." },
      { q: "Do you offer a satisfaction guarantee in DC?", a: "Yes. Our 100% satisfaction guarantee covers every DC cleaning. If any area doesn't meet your expectations, we'll return within 24 hours to make it right at no charge." }
    ],
    metaTitle: "Washington DC House Cleaning Services | Capital Clean Care",
    metaDescription: "Professional house cleaning throughout Washington, DC. Serving NW, NE, Capitol Hill, Georgetown & more. Eco-friendly, licensed & insured. Free quotes available."
  },
  {
    name: "Northern Virginia Cleaning Services",
    slug: "virginia",
    stateAbbr: "VA",
    intro: "Capital Clean Care serves the thriving communities of Northern Virginia with the same premium, eco-friendly cleaning services that have made us a trusted name across the DMV region. From Arlington's urban neighborhoods to McLean's elegant estates, our professional teams deliver exceptional results tailored to your home.\n\nNorthern Virginia's diverse housing landscape — from high-rise condominiums and townhouses to sprawling single-family homes — requires a cleaning service with versatile expertise. Our teams are trained to handle every property type, adjusting their approach and techniques to deliver optimal results regardless of your home's style or size.\n\nThe NoVA lifestyle is fast-paced, and finding time for thorough house cleaning can be challenging. That's where Capital Clean Care comes in. Our flexible scheduling, dedicated teams, and reliable service mean one less thing to worry about in your busy week. We handle the cleaning so you can focus on career, family, and everything else that matters.\n\nOur Northern Virginia coverage includes Arlington, Fairfax, McLean, Alexandria, Falls Church, Vienna, and Tysons. We continue to expand our service area to meet growing demand across the region.\n\nDiscover our specific service areas below and find detailed information about cleaning services in your Northern Virginia community.",
    citySlugs: ["arlington-va", "fairfax-va", "mclean-va", "alexandria-va", "falls-church-va", "vienna-va", "tysons-va"],
    faqs: [
      { q: "What Northern Virginia areas do you cover?", a: "We serve Arlington, Fairfax, McLean, Alexandria, Falls Church, Vienna, Tysons, and surrounding communities throughout Northern Virginia." },
      { q: "Do you clean large homes in McLean and Great Falls?", a: "Yes. Our teams are experienced with larger estate-style properties common in McLean, Great Falls, and Potomac areas. We adjust team size and scheduling to accommodate larger homes." },
      { q: "Are your prices different in Northern Virginia?", a: "Our pricing is consistent across all service areas, based on home size, condition, and service type. Request a free quote for accurate pricing specific to your home." },
      { q: "Can you clean my home while I'm at work?", a: "Absolutely. Many of our Northern Virginia clients provide access arrangements so we can clean during business hours. We're fully insured and all team members are background-checked." },
      { q: "Do you serve Fairfax County government buildings?", a: "Our focus is residential cleaning. We serve homes throughout Fairfax County and the surrounding Northern Virginia communities." },
      { q: "How much does cleaning cost in Northern Virginia?", a: "Pricing varies by home size and service. Standard cleaning for a 2-3 bedroom NoVA home typically ranges $160-$260. Deep cleaning runs $275-$475. Request a free quote for exact pricing." },
      { q: "Are your Northern Virginia teams insured?", a: "Yes. Capital Clean Care is fully licensed and insured. Every team member is background-checked and trained to our professional standards." },
      { q: "Do you offer recurring plans in Northern Virginia?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans with dedicated teams and preferred pricing. Recurring clients save up to 20% compared to one-time cleanings." },
      { q: "What services are available in Northern Virginia?", a: "We offer standard cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, recurring plans, and eco-friendly cleaning throughout Northern Virginia." },
      { q: "Do you offer a satisfaction guarantee in Virginia?", a: "Yes. Our 100% satisfaction guarantee applies to all Northern Virginia cleanings. Contact us within 24 hours and we'll return to re-clean any area at no charge." },
      { q: "Can I get a free estimate for my NoVA home?", a: "Absolutely. All quotes are free with no obligation. Fill out our online form or call (240) 704-2551 for a personalized estimate." },
      { q: "Do you serve luxury condos and high-rises in NoVA?", a: "Yes. We serve condos, apartments, townhomes, and single-family homes of all sizes throughout Northern Virginia, including luxury high-rises in Tysons and Arlington." }
    ],
    metaTitle: "Northern Virginia House Cleaning Services | Capital Clean Care",
    metaDescription: "Premium house cleaning in Northern Virginia — Arlington, McLean, Fairfax, Alexandria & more. Eco-friendly products, background-checked teams. Get a free quote."
  }
];

export const cities: CityData[] = [
  // MARYLAND CITIES
  {
    name: "Rockville",
    slug: "rockville-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Rockville sits at the heart of Montgomery County, blending suburban comfort with urban convenience. As one of Maryland's largest cities, Rockville features diverse neighborhoods ranging from the historic Rockville Town Center to newer developments along the I-270 corridor. Homeowners here take pride in their properties, and Capital Clean Care helps maintain that standard with professional, eco-friendly cleaning services.\n\nFrom cozy townhomes near the Metro to spacious single-family homes in neighborhoods like Fallsgrove and King Farm, our trained teams adapt to every Rockville residence. We understand the fast-paced lifestyle of Montgomery County families and professionals, which is why we offer flexible scheduling, consistent quality, and the convenience of a dedicated cleaning team that knows your home.\n\nCapital Clean Care serves all Rockville neighborhoods with standard cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, and customizable recurring plans. Our eco-friendly products and background-checked teams ensure your home is clean, safe, and welcoming after every visit.",
    nearbySlugs: ["bethesda-md", "gaithersburg-md", "silver-spring-md", "potomac-md", "germantown-md"],
    faqs: [
      { q: "What Rockville neighborhoods do you serve?", a: "We serve all Rockville neighborhoods including Fallsgrove, King Farm, Twinbrook, Woodley Gardens, College Gardens, Rockville Town Center, and surrounding areas." },
      { q: "How much does house cleaning cost in Rockville?", a: "Pricing depends on your home's size, condition, and the service type you choose. Most Rockville homes range based on bedrooms and bathrooms. Request a free, no-obligation quote for accurate pricing." },
      { q: "Do you serve Rockville condos and apartments?", a: "Yes, we clean all types of Rockville residences including condos, apartments, townhomes, and single-family homes." },
      { q: "Can I book same-day cleaning in Rockville?", a: "Same-day availability depends on our schedule. Rockville is one of our primary service areas, so we often have availability. Contact us to check." },
      { q: "Are you available on weekends in Rockville?", a: "Yes, we offer Saturday and limited Sunday availability for Rockville clients. Weekend slots fill up quickly, so we recommend booking in advance." },
      { q: "Do you bring your own supplies to Rockville homes?", a: "Yes. Our teams arrive fully equipped with eco-friendly cleaning products and professional equipment. You don't need to provide anything." }
    ],
    metaTitle: "House Cleaning Services in Rockville, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Rockville, MD. Eco-friendly products, background-checked teams, flexible scheduling. Serving all Rockville neighborhoods. Free quotes."
  },
  {
    name: "Silver Spring",
    slug: "silver-spring-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Silver Spring is one of the DMV's most dynamic and diverse communities, known for its vibrant downtown, excellent transit connections, and eclectic mix of residential neighborhoods. From the bustling shops and restaurants along Georgia Avenue to the quiet, tree-lined streets of Woodside and Forest Glen, Silver Spring offers a unique blend of urban energy and suburban tranquility.\n\nThe diversity of Silver Spring's housing stock — mid-century ranchers, modern apartment complexes, charming bungalows, and renovated Victorians — means every home has different cleaning needs. Capital Clean Care's trained professionals understand these differences and customize their approach for each property type, ensuring thorough results regardless of your home's style or age.\n\nWhether you commute to DC from the Silver Spring Metro, work from a home office in Takoma Park's neighboring streets, or manage a busy household in Four Corners, Capital Clean Care provides the reliable, eco-friendly cleaning services that fit your lifestyle. Our Montgomery County teams know Silver Spring intimately and deliver consistent quality you can count on.",
    nearbySlugs: ["takoma-park-md", "rockville-md", "bethesda-md", "washington-dc-nw", "columbia-md"],
    faqs: [
      { q: "What Silver Spring neighborhoods do you serve?", a: "We serve all Silver Spring neighborhoods including Downtown Silver Spring, Woodside, Forest Glen, Four Corners, Wheaton, Colesville, White Oak, and surrounding communities." },
      { q: "How much does cleaning cost in Silver Spring?", a: "Costs vary based on home size and service type. Silver Spring homes are competitively priced. Fill out our free quote form for an accurate estimate tailored to your home." },
      { q: "Do you serve apartment buildings in Downtown Silver Spring?", a: "Yes, we serve apartments and condos throughout Downtown Silver Spring and surrounding areas. We coordinate with building management for access when needed." },
      { q: "Can I get weekly cleaning in Silver Spring?", a: "Absolutely. We offer weekly, bi-weekly, and monthly recurring plans for Silver Spring homes. Recurring clients enjoy preferred pricing and dedicated teams." },
      { q: "Are your Silver Spring teams background-checked?", a: "Yes. Every Capital Clean Care team member undergoes thorough background checks. We're fully licensed and insured for your complete peace of mind." },
      { q: "Do you use eco-friendly products in Silver Spring?", a: "Yes. We exclusively use plant-based, non-toxic cleaning products across all our Silver Spring service areas. Safe for families, pets, and the environment." }
    ],
    metaTitle: "House Cleaning Services in Silver Spring, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Silver Spring, MD. Serving all neighborhoods with eco-friendly products and background-checked teams. Get your free quote today."
  },
  {
    name: "Bethesda",
    slug: "bethesda-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Bethesda stands as one of the most affluent and sought-after communities in the Washington metropolitan area. Known for exceptional schools, upscale dining, premier shopping destinations, and proximity to the National Institutes of Health, Bethesda attracts discerning homeowners who expect the very best — including their cleaning services.\n\nThe homes in Bethesda reflect the community's premium character: stately colonials, elegant Tudor-style residences, contemporary new builds, and luxurious condominiums in downtown Bethesda's high-rise developments. Capital Clean Care understands the elevated expectations of Bethesda homeowners and delivers cleaning services that match the quality of the homes we serve.\n\nOur Bethesda teams pay special attention to the details that matter in premium homes — careful treatment of high-end finishes, thorough cleaning of expansive floor plans, and meticulous attention to entertaining spaces. Whether you're preparing for guests, maintaining your home between social gatherings, or simply want a consistently pristine living environment, Capital Clean Care delivers results that meet Bethesda's high standards.",
    nearbySlugs: ["potomac-md", "rockville-md", "silver-spring-md", "washington-dc-nw", "mclean-va"],
    faqs: [
      { q: "Do you specialize in large Bethesda homes?", a: "Yes. Our teams are experienced with larger properties common in Bethesda. We adjust team size and scheduling to ensure thorough cleaning of homes of all sizes." },
      { q: "What cleaning services are available in Bethesda?", a: "We offer standard cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, and recurring cleaning plans throughout all Bethesda neighborhoods." },
      { q: "How much does house cleaning cost in Bethesda?", a: "Pricing is based on home size, condition, and service type. Bethesda homes vary widely, so we recommend requesting a personalized free quote for the most accurate pricing." },
      { q: "Do you clean Bethesda condos in downtown?", a: "Absolutely. We serve condos and apartments in downtown Bethesda's high-rise buildings as well as residential properties throughout greater Bethesda." },
      { q: "Are your Bethesda teams experienced with high-end finishes?", a: "Yes. Our teams are trained in proper care for marble, granite, hardwood, and other premium surfaces commonly found in Bethesda homes." },
      { q: "Can I schedule around my Bethesda social calendar?", a: "Of course. Many Bethesda clients schedule cleanings before events or gatherings. We offer flexible scheduling to accommodate your lifestyle." }
    ],
    metaTitle: "House Cleaning Services in Bethesda, MD | Capital Clean Care",
    metaDescription: "Premium house cleaning in Bethesda, MD. Expert care for fine homes, eco-friendly products, background-checked teams. Serving all Bethesda neighborhoods. Free quotes."
  },
  {
    name: "Germantown",
    slug: "germantown-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Germantown is one of Montgomery County's fastest-growing communities, offering families an attractive combination of newer housing developments, excellent schools, and convenient access to the I-270 technology corridor. This thriving community has evolved from a small town to a vibrant suburb with diverse housing options and a growing commercial district.\n\nCapital Clean Care serves Germantown families with the same premium cleaning standards we bring to every DMV community. The newer construction common in Germantown neighborhoods like Clarksburg Village, Milestone, and Churchill requires knowledgeable cleaning teams who understand modern materials and finishes. Our professionals are trained in proper care techniques for everything from engineered hardwood to quartz countertops.\n\nGermantown's family-oriented community means many households include children and pets — two factors that make eco-friendly cleaning especially important. Our non-toxic, plant-based products deliver powerful cleaning without exposing your family to harsh chemicals, making every room safe for little ones and furry friends alike.",
    nearbySlugs: ["clarksburg-md", "gaithersburg-md", "damascus-md", "rockville-md", "urbana-md"],
    faqs: [
      { q: "What Germantown neighborhoods do you serve?", a: "We serve all Germantown neighborhoods including Milestone, Churchill, Seneca Meadows, Gunners Lake, Clopper's Mill, and surrounding communities." },
      { q: "How much does cleaning cost in Germantown?", a: "Pricing varies by home size and service. Germantown's newer homes are competitively priced for cleaning. Request a free quote for accurate pricing." },
      { q: "Do you serve newer Germantown developments?", a: "Yes. We're experienced with the newer construction and modern finishes common in Germantown's developments, including smart home features and open floor plans." },
      { q: "Are your products safe for kids and pets?", a: "Absolutely. We exclusively use eco-friendly, non-toxic products that are safe for children, pets, and the environment." },
      { q: "Can I get recurring cleaning in Germantown?", a: "Yes. Weekly, bi-weekly, and monthly plans are available with preferred pricing and dedicated cleaning teams." }
    ],
    metaTitle: "House Cleaning Services in Germantown, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Germantown, MD. Family-friendly, eco-friendly products, flexible scheduling. Serving all Germantown neighborhoods. Free quotes."
  },
  {
    name: "Gaithersburg",
    slug: "gaithersburg-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Gaithersburg blends small-town charm with modern suburban convenience, making it one of Montgomery County's most appealing communities. From the historic district of Olde Towne to the master-planned community of Kentlands, Gaithersburg offers incredible housing variety and a strong sense of community that residents love.\n\nCapital Clean Care's Gaithersburg cleaning services cater to this diversity. Whether you live in a Kentlands craftsman, a Lakelands townhome, or a single-family home in Quince Orchard, our teams deliver tailored cleaning that respects your home's unique character. We understand that every home has different needs, and we customize our approach accordingly.\n\nWith the I-270 corridor bringing professionals through Gaithersburg daily, many residents value the time savings that professional cleaning provides. Our recurring plans are especially popular here, giving busy families and professionals a consistently clean home without the weekend sacrifice.",
    nearbySlugs: ["rockville-md", "germantown-md", "potomac-md", "clarksburg-md", "damascus-md"],
    faqs: [
      { q: "What areas of Gaithersburg do you serve?", a: "We serve all Gaithersburg neighborhoods including Kentlands, Lakelands, Quince Orchard, Olde Towne, Washingtonian Center area, and surrounding communities." },
      { q: "How do I get a quote for Gaithersburg cleaning?", a: "Fill out our free quote form with your home details and preferred service. We'll respond with a personalized estimate, usually within a few hours." },
      { q: "Do you offer move-out cleaning in Gaithersburg?", a: "Yes. Our move-in/move-out service is popular with Gaithersburg residents and rental property managers. We ensure properties meet inspection standards." },
      { q: "Are weekend appointments available?", a: "Yes, we offer Saturday availability for Gaithersburg clients. Weekend slots are popular, so early booking is recommended." },
      { q: "Do you clean Kentlands townhomes?", a: "Absolutely. We're very familiar with Kentlands and Lakelands townhome layouts and provide efficient, thorough cleaning for these properties." }
    ],
    metaTitle: "House Cleaning Services in Gaithersburg, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Gaithersburg, MD. Serving Kentlands, Lakelands, Quince Orchard & more. Eco-friendly, insured. Get your free quote today."
  },
  {
    name: "Potomac",
    slug: "potomac-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Potomac is synonymous with elegance in the Washington DC metropolitan area. This prestigious Montgomery County community is home to some of the region's most distinguished properties, from sprawling estates along River Road to refined homes in neighborhoods like Avenel and Potomac Falls.\n\nCapital Clean Care provides cleaning services worthy of Potomac's exceptional homes. Our teams are trained in the careful handling of premium materials — marble floors, custom cabinetry, designer finishes, and delicate surfaces that require specialized attention. We treat every Potomac home with the respect and care it deserves.\n\nMany Potomac homeowners entertain frequently and value having their homes guest-ready at all times. Our recurring cleaning plans and on-demand deep cleaning services ensure your home always makes the right impression, while our eco-friendly products protect the health of your family and the beauty of the natural surroundings that make Potomac special.",
    nearbySlugs: ["bethesda-md", "rockville-md", "gaithersburg-md", "mclean-va", "germantown-md"],
    faqs: [
      { q: "Do you handle large estate properties in Potomac?", a: "Yes. We regularly clean larger estate-style properties in Potomac, adjusting team size and scheduling to ensure thorough coverage of expansive homes." },
      { q: "Are your teams trained for premium surfaces?", a: "Absolutely. Our Potomac teams receive specialized training in caring for marble, granite, hardwood, and other high-end materials common in the area's homes." },
      { q: "What's the typical cleaning cost in Potomac?", a: "Potomac homes vary significantly in size. We provide personalized quotes based on your specific property. Request a free estimate for accurate pricing." },
      { q: "Can I schedule pre-event cleaning?", a: "Yes. Many Potomac clients schedule cleanings before dinner parties, holiday gatherings, and other events. We accommodate special scheduling needs." },
      { q: "Do you offer regular weekly service in Potomac?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans are available with dedicated teams and preferred pricing for Potomac residents." }
    ],
    metaTitle: "House Cleaning Services in Potomac, MD | Capital Clean Care",
    metaDescription: "Premium house cleaning in Potomac, MD. Specialized care for fine homes, eco-friendly products, background-checked teams. Serving all Potomac neighborhoods. Free quotes."
  },
  {
    name: "Frederick",
    slug: "frederick-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    intro: "Frederick combines rich historical charm with a thriving modern community, making it one of Maryland's most beloved cities. The revitalized downtown, with its art galleries, restaurants, and beautifully preserved architecture along Carroll Creek, reflects the city's commitment to quality of life — a value Capital Clean Care shares.\n\nFrom Victorian homes in the historic district to contemporary developments in neighborhoods like Ballenger Creek, Westview, and Tuscarora, Frederick's housing diversity requires a cleaning service with versatile expertise. Our Frederick teams understand the specific needs of both historic and modern homes, applying the right products and techniques for every surface and era.\n\nFrederick families appreciate our commitment to eco-friendly cleaning. The city's outdoor culture — proximity to the Appalachian Trail, Catoctin Mountain Park, and numerous local parks — reflects a community that values environmental responsibility. Our plant-based, non-toxic products align with those values while delivering spotless results.",
    nearbySlugs: ["urbana-md", "new-market-md", "monrovia-md", "damascus-md", "clarksburg-md"],
    faqs: [
      { q: "Do you serve all of Frederick, MD?", a: "Yes, we serve all Frederick neighborhoods including Downtown, Ballenger Creek, Westview, Tuscarora, Spring Ridge, and surrounding Frederick County communities." },
      { q: "How long does it take to get a cleaning appointment in Frederick?", a: "We typically schedule new Frederick clients within 3-7 business days. Rush requests may be accommodated based on availability." },
      { q: "Can you clean historic Frederick homes?", a: "Yes. Our teams are trained in proper care for historic properties, including appropriate products for original woodwork, plaster, and vintage fixtures." },
      { q: "Do you serve Frederick County outside the city?", a: "Yes. We serve communities throughout Frederick County including Urbana, New Market, Monrovia, Middletown, and surrounding areas." },
      { q: "Is there a travel fee for Frederick?", a: "No hidden fees. Your quote includes everything. Frederick is within our standard service area and there are no additional travel charges." }
    ],
    metaTitle: "House Cleaning Services in Frederick, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Frederick, MD. Serving historic downtown to modern developments. Eco-friendly, licensed & insured. Get a free quote today."
  },
  {
    name: "Urbana",
    slug: "urbana-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    intro: "Urbana has experienced remarkable growth in recent years, transforming from a quiet crossroads community into one of Frederick County's most desirable residential areas. The master-planned communities of Villages of Urbana, Landsdale, and Urbana Highlands offer modern homes with family-friendly amenities, top-rated schools, and convenient access to both Frederick and the I-270 corridor.\n\nCapital Clean Care serves Urbana's growing community with cleaning services designed for the newer construction and modern finishes that characterize the area's homes. Open floor plans, engineered surfaces, and energy-efficient features are standard in Urbana homes, and our teams know exactly how to care for them.\n\nMany Urbana families are dual-income households where time is the most valuable commodity. Our recurring cleaning plans give you back hours every week while ensuring your home stays consistently clean and welcoming for your family.",
    nearbySlugs: ["frederick-md", "new-market-md", "monrovia-md", "clarksburg-md", "damascus-md"],
    faqs: [
      { q: "What Urbana communities do you serve?", a: "We serve all Urbana communities including Villages of Urbana, Landsdale, Urbana Highlands, and the surrounding area." },
      { q: "Are your products safe for new home finishes?", a: "Yes. Our eco-friendly products are chosen specifically to be safe on modern finishes including engineered hardwood, quartz, and contemporary fixtures." },
      { q: "How much does cleaning cost in Urbana?", a: "Pricing varies by home size and service type. Urbana homes are competitively priced. Request a free quote for your specific home." },
      { q: "Do you offer bi-weekly cleaning in Urbana?", a: "Yes. Bi-weekly is our most popular frequency for Urbana families, offering a great balance of cleanliness and value." },
      { q: "Can you clean before we move into our new Urbana home?", a: "Absolutely. Our move-in cleaning ensures your new Urbana home is spotless before you settle in, even if it's brand-new construction." }
    ],
    metaTitle: "House Cleaning Services in Urbana, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Urbana, MD. Serving Villages of Urbana, Landsdale & Urbana Highlands. Eco-friendly products, flexible plans. Free quotes."
  },
  {
    name: "Clarksburg",
    slug: "clarksburg-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Clarksburg represents Montgomery County's newest frontier of residential development. This rapidly growing community along the I-270 corridor offers modern homes, excellent schools, and a family-friendly atmosphere that attracts young families and professionals seeking quality suburban living with convenient commuter access.\n\nCapital Clean Care serves Clarksburg's expanding community with the premium cleaning services that new homeowners deserve. The area's newer construction features contemporary floor plans, updated materials, and modern amenities that our trained teams are well-equipped to maintain and protect.\n\nAs Clarksburg continues to grow, Capital Clean Care grows with it. We're committed to providing reliable, eco-friendly cleaning services to this vibrant community, helping residents maintain beautiful homes while enjoying everything Clarksburg has to offer.",
    nearbySlugs: ["germantown-md", "damascus-md", "gaithersburg-md", "urbana-md", "frederick-md"],
    faqs: [
      { q: "Do you serve all Clarksburg developments?", a: "Yes, we serve all Clarksburg neighborhoods including Clarksburg Village, Clarksburg Town Center, Cabin Branch, and surrounding communities." },
      { q: "Are you experienced with new construction homes?", a: "Yes. Many Clarksburg homes are newer construction, and our teams are trained in proper care for modern finishes and materials." },
      { q: "How do I schedule in Clarksburg?", a: "Fill out our free quote form or call us directly. We schedule Clarksburg appointments within our standard booking timeframe." },
      { q: "Do you offer post-construction cleaning in Clarksburg?", a: "Yes. With ongoing development in Clarksburg, our post-construction cleaning service is popular for both new builds and renovations." },
      { q: "Are recurring plans available in Clarksburg?", a: "Yes. Weekly, bi-weekly, and monthly plans are available with preferred pricing for Clarksburg residents." }
    ],
    metaTitle: "House Cleaning Services in Clarksburg, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Clarksburg, MD. Serving all new developments. Eco-friendly products, background-checked teams, flexible scheduling. Free quotes."
  },
  {
    name: "Damascus",
    slug: "damascus-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Damascus offers a distinctive small-town atmosphere within Montgomery County, featuring larger properties, agricultural heritage, and a close-knit community feel that sets it apart from the county's more urban areas. The rolling hills and open spaces surrounding Damascus create a peaceful residential setting that homeowners cherish.\n\nCapital Clean Care brings our premium cleaning services to Damascus, understanding that homes here tend to be larger with more acreage and often include features like mudrooms, workshop spaces, and expansive living areas that require thorough attention. Our teams adjust their approach to accommodate the unique characteristics of Damascus properties.\n\nThe rural and semi-rural nature of Damascus means homes may face different cleaning challenges — more dust from nearby agricultural activity, seasonal debris from wooded lots, and the wear that comes with country living. Our eco-friendly products and thorough techniques address these challenges effectively.",
    nearbySlugs: ["germantown-md", "clarksburg-md", "gaithersburg-md", "frederick-md", "urbana-md"],
    faqs: [
      { q: "Do you serve rural properties in Damascus?", a: "Yes. We serve all Damascus properties including rural homes, farms, and properties with larger acreage." },
      { q: "Can you accommodate larger Damascus homes?", a: "Absolutely. We adjust team size and scheduling for larger properties to ensure thorough, efficient cleaning." },
      { q: "Is there a travel fee for Damascus?", a: "No. Damascus is within our service area and there are no additional travel charges." },
      { q: "Do you clean mudrooms and utility spaces?", a: "Yes. We include mudrooms, laundry rooms, and utility spaces in our standard cleaning. Just let us know your priorities." },
      { q: "Are weekend appointments available in Damascus?", a: "Yes, Saturday appointments are available. Contact us for current availability." }
    ],
    metaTitle: "House Cleaning Services in Damascus, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Damascus, MD. Experienced with larger properties and rural homes. Eco-friendly, insured, background-checked teams. Free quotes."
  },
  {
    name: "Monrovia",
    slug: "monrovia-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    intro: "Monrovia is a charming Frederick County community nestled between Frederick and Montgomery County. This growing residential area combines rural character with modern amenities, offering homeowners a peaceful setting with convenient access to major employment centers along the I-270 corridor.\n\nCapital Clean Care serves Monrovia residents with professional cleaning services tailored to the area's mix of established homes and newer developments. Our teams understand the cleaning needs of both traditional homes and modern construction, delivering consistent quality regardless of your property's age or style.\n\nMonrovia's location at the boundary of Frederick and Montgomery Counties makes it a natural fit for Capital Clean Care's service area. We provide the same premium, eco-friendly cleaning services that our clients in Frederick, Urbana, and New Market enjoy.",
    nearbySlugs: ["new-market-md", "urbana-md", "frederick-md", "damascus-md", "clarksburg-md"],
    faqs: [
      { q: "Do you serve the Monrovia area?", a: "Yes, we serve Monrovia and surrounding communities in southern Frederick County." },
      { q: "How do I book cleaning in Monrovia?", a: "Fill out our free quote form or call us. We serve Monrovia as part of our Frederick County coverage." },
      { q: "Are eco-friendly products used?", a: "Yes. We exclusively use plant-based, non-toxic cleaning products in all homes we service." },
      { q: "Do you offer recurring plans for Monrovia?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans are available with preferred pricing." },
      { q: "What's the service area around Monrovia?", a: "We serve Monrovia plus nearby New Market, Urbana, Frederick, and communities throughout Frederick County." }
    ],
    metaTitle: "House Cleaning Services in Monrovia, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Monrovia, MD. Serving Frederick County with eco-friendly products, background-checked teams. Flexible plans. Get a free quote."
  },
  {
    name: "Takoma Park",
    slug: "takoma-park-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Takoma Park is known for its progressive character, arts community, and commitment to environmental sustainability — values that align perfectly with Capital Clean Care's eco-friendly approach. This unique Montgomery County community, often called 'Azalea City,' features charming bungalows, Victorians, and craftsman homes nestled among mature trees and beautiful gardens.\n\nOur Takoma Park cleaning services respect the community's environmental values. We use only plant-based, non-toxic products that align with the eco-conscious lifestyle that defines this neighborhood. Our cleaning approach is as green as the community we serve.\n\nThe older housing stock in Takoma Park requires knowledgeable care. Our teams understand the proper treatment for original hardwood floors, vintage tile, plaster walls, and the unique features found in the area's character homes. We clean with respect for your home's history.",
    nearbySlugs: ["silver-spring-md", "washington-dc-nw", "washington-dc-ne", "rockville-md", "bethesda-md"],
    faqs: [
      { q: "Are your products truly eco-friendly?", a: "Yes. We use 100% plant-based, non-toxic products — no harsh chemicals, artificial fragrances, or harmful ingredients. Perfect for Takoma Park's environmentally conscious community." },
      { q: "Can you clean older Takoma Park homes?", a: "Absolutely. Our teams are experienced with the older homes common in Takoma Park, including proper care for original woodwork, vintage tile, and plaster." },
      { q: "Do you serve the Takoma Park arts district?", a: "Yes, we serve all of Takoma Park including the arts district, Old Town, and surrounding neighborhoods." },
      { q: "Are recurring plans available?", a: "Yes. Weekly, bi-weekly, and monthly plans with dedicated teams and preferred pricing." },
      { q: "Do you coordinate with DC for homes near the border?", a: "Yes. Takoma Park's proximity to DC is well within our service area. We serve both sides of the border seamlessly." }
    ],
    metaTitle: "House Cleaning Services in Takoma Park, MD | Capital Clean Care",
    metaDescription: "Eco-friendly house cleaning in Takoma Park, MD. Plant-based products, experienced with older homes. Background-checked teams. Get your free quote today."
  },
  {
    name: "Columbia",
    slug: "columbia-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Howard County",
    intro: "Columbia is a master-planned community that consistently ranks among the best places to live in America. This Howard County gem offers an exceptional quality of life with its network of villages, excellent schools, abundant green spaces, and diverse cultural offerings. Columbia residents expect premium services, and Capital Clean Care delivers.\n\nThe planned village structure of Columbia means diverse housing throughout the community — from lakefront condos and village center townhomes to spacious single-family homes in neighborhoods like Hickory Ridge, Owen Brown, and River Hill. Our teams are experienced with all Columbia property types and customize their approach accordingly.\n\nColumbia's commitment to community and quality living extends to how residents maintain their homes. Capital Clean Care supports that commitment with reliable, eco-friendly cleaning services that keep Columbia homes in pristine condition.",
    nearbySlugs: ["ellicott-city-md", "silver-spring-md", "rockville-md", "bethesda-md", "new-market-md"],
    faqs: [
      { q: "What Columbia villages do you serve?", a: "We serve all Columbia villages including Hickory Ridge, Owen Brown, River Hill, Wilde Lake, Long Reach, Kings Contrivance, and all others." },
      { q: "Do you serve Howard County beyond Columbia?", a: "Yes. We serve Columbia and surrounding Howard County areas including Ellicott City and other communities." },
      { q: "How much does cleaning cost in Columbia?", a: "Pricing depends on home size and service type. Request a free quote for accurate pricing specific to your Columbia home." },
      { q: "Can I get weekly cleaning in Columbia?", a: "Yes. We offer weekly, bi-weekly, and monthly recurring plans with dedicated teams for Columbia residents." },
      { q: "Are you insured for Columbia homes?", a: "Yes. Capital Clean Care is fully licensed and insured, with background-checked teams for your peace of mind." }
    ],
    metaTitle: "House Cleaning Services in Columbia, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Columbia, MD. Serving all villages with eco-friendly products and dedicated teams. Licensed & insured. Get a free quote today."
  },
  {
    name: "Ellicott City",
    slug: "ellicott-city-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Howard County",
    intro: "Ellicott City blends historic charm with modern suburban living in a way few Howard County communities can match. The historic district, perched along the Patapsco River, features some of Maryland's oldest commercial buildings, while surrounding neighborhoods offer contemporary homes with every modern amenity.\n\nCapital Clean Care serves Ellicott City with cleaning services that respect the community's diverse housing stock. From maintaining historic properties in Old Ellicott City to cleaning modern homes in developments like Turf Valley and Waverly Woods, our teams adapt their approach to match your home's specific needs.\n\nEllicott City homeowners value quality and attention to detail — principles that guide every Capital Clean Care cleaning visit. Our eco-friendly products protect both your family's health and the historic character of this beloved community.",
    nearbySlugs: ["columbia-md", "new-market-md", "silver-spring-md", "rockville-md", "bethesda-md"],
    faqs: [
      { q: "Do you serve Old Ellicott City?", a: "Yes, we serve all of Ellicott City including the historic district, surrounding neighborhoods, and newer developments." },
      { q: "Can you clean historic Ellicott City properties?", a: "Yes. Our teams are trained in proper care for historic homes, including appropriate products for original surfaces and vintage features." },
      { q: "What services do you offer in Ellicott City?", a: "We offer standard cleaning, deep cleaning, move-in/move-out, post-construction cleanup, and recurring plans throughout Ellicott City." },
      { q: "How do I book in Ellicott City?", a: "Fill out our free quote form or call us directly. We schedule Ellicott City appointments as part of our Howard County coverage." },
      { q: "Do you serve Turf Valley and Waverly Woods?", a: "Yes. We serve these and all other Ellicott City neighborhoods and developments." }
    ],
    metaTitle: "House Cleaning Services in Ellicott City, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Ellicott City, MD. Historic and modern homes. Eco-friendly products, background-checked teams. Licensed & insured. Free quotes."
  },
  {
    name: "New Market",
    slug: "new-market-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    intro: "New Market, known as the 'Antiques Capital of Maryland,' is a charming Frederick County town that blends historical character with growing residential communities. The town's Main Street features preserved 18th-century buildings alongside newer residential developments that attract families seeking Frederick County's quality of life.\n\nCapital Clean Care serves New Market residents with professional cleaning services appropriate for both the town's historic properties and its modern homes. Our teams understand the specific needs of older construction while being equally skilled at maintaining contemporary residences.\n\nNew Market's strategic location between Frederick and Montgomery County makes it an ideal community for professionals who want small-town living with metropolitan access. Our cleaning services give busy New Market families one less thing to manage.",
    nearbySlugs: ["monrovia-md", "urbana-md", "frederick-md", "ellicott-city-md", "damascus-md"],
    faqs: [
      { q: "Do you serve New Market, MD?", a: "Yes. New Market is part of our Frederick County service area, and we serve all neighborhoods and surrounding communities." },
      { q: "Can you clean historic Main Street properties?", a: "Yes. We're experienced with historic properties and use appropriate products for vintage surfaces and features." },
      { q: "How far is New Market from your other service areas?", a: "New Market is centrally located in our Frederick County coverage area, near Monrovia, Urbana, and Frederick." },
      { q: "Are recurring plans available in New Market?", a: "Yes. Weekly, bi-weekly, and monthly plans with preferred pricing and dedicated teams." },
      { q: "Do you offer deep cleaning in New Market?", a: "Yes. All our services including deep cleaning, standard cleaning, and move-in/move-out cleaning are available in New Market." }
    ],
    metaTitle: "House Cleaning Services in New Market, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in New Market, MD. Serving historic and modern homes with eco-friendly products. Background-checked teams. Get a free quote."
  },
  // COUNTY HUBS
  {
    name: "Montgomery County",
    slug: "montgomery-county-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Montgomery County is Capital Clean Care's primary service area, and we're proud to serve communities across Maryland's most populous county. From Bethesda and Potomac in the south to Clarksburg and Damascus in the north, our teams cover every corner of this diverse and vibrant county.\n\nWith over one million residents, Montgomery County offers an incredible range of housing — from luxury estates to modern apartments, historic homes to new construction. Our cleaning teams are trained to handle every type of property with the appropriate care and attention.\n\nMontgomery County's diverse population values quality, reliability, and environmental responsibility — principles that define Capital Clean Care's approach to every cleaning visit. Our eco-friendly products and professional teams deliver results that meet the county's high standards.",
    nearbySlugs: ["rockville-md", "bethesda-md", "silver-spring-md", "germantown-md", "potomac-md"],
    faqs: [
      { q: "What Montgomery County cities do you serve?", a: "We serve Rockville, Bethesda, Silver Spring, Germantown, Gaithersburg, Potomac, Clarksburg, Damascus, Takoma Park, and surrounding communities." },
      { q: "Do you serve all of Montgomery County?", a: "Yes. We provide comprehensive coverage across Montgomery County from Bethesda to Clarksburg and everywhere in between." },
      { q: "How do I know if my area is covered?", a: "If you're in Montgomery County, we almost certainly serve your area. Contact us with your zip code and we'll confirm." },
      { q: "Are your Montgomery County teams local?", a: "Yes. Our cleaning professionals live in and around Montgomery County communities, ensuring familiarity with local neighborhoods." },
      { q: "Do you offer county-wide commercial cleaning?", a: "Our focus is residential cleaning throughout Montgomery County. We do not currently offer commercial cleaning services." }
    ],
    metaTitle: "Montgomery County House Cleaning Services | Capital Clean Care",
    metaDescription: "Professional house cleaning across Montgomery County, MD. Serving Rockville, Bethesda, Silver Spring, Germantown & more. Eco-friendly. Free quotes."
  },
  {
    name: "Frederick County",
    slug: "frederick-county-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    intro: "Capital Clean Care extends our premium cleaning services throughout Frederick County, Maryland's largest county by area. From the historic city of Frederick to growing communities like Urbana and New Market, we bring professional, eco-friendly cleaning to homes across this beautiful region.\n\nFrederick County's diverse landscape includes urban neighborhoods, suburban developments, and rural properties — each with unique cleaning needs. Our teams are experienced with all property types and adapt their approach to deliver optimal results.\n\nThe county's growth along the I-270 corridor has brought many new families and professionals who value the quality of life Frederick County offers. Capital Clean Care complements that lifestyle with reliable cleaning services that save time and maintain healthy, beautiful homes.",
    nearbySlugs: ["frederick-md", "urbana-md", "new-market-md", "monrovia-md", "damascus-md"],
    faqs: [
      { q: "What Frederick County communities do you serve?", a: "We serve Frederick, Urbana, New Market, Monrovia, Middletown, and other Frederick County communities." },
      { q: "Do you travel to rural Frederick County properties?", a: "Yes. We serve both urban and rural properties throughout Frederick County without additional travel charges." },
      { q: "How quickly can you start service in Frederick County?", a: "We typically schedule new Frederick County clients within 3-7 business days." },
      { q: "Are all Frederick County services eco-friendly?", a: "Yes. We use the same eco-friendly, non-toxic products throughout all our Frederick County service areas." },
      { q: "Do you serve Middletown and Myersville?", a: "We're expanding in Frederick County. Contact us with your zip code to confirm coverage in your specific area." }
    ],
    metaTitle: "Frederick County House Cleaning Services | Capital Clean Care",
    metaDescription: "Professional house cleaning across Frederick County, MD. Serving Frederick, Urbana, New Market & more. Eco-friendly, licensed & insured. Free quotes."
  },
  {
    name: "Howard County",
    slug: "howard-county-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Howard County",
    intro: "Howard County consistently ranks among America's best counties for quality of life, and Capital Clean Care is proud to serve this exceptional community. From the master-planned villages of Columbia to the historic charm of Ellicott City, our professional cleaning teams deliver results that match Howard County's high standards.\n\nHoward County homeowners expect the best, and we deliver. Our trained, background-checked teams use eco-friendly products and proven techniques to keep Howard County homes in pristine condition. Whether you need regular maintenance or intensive deep cleaning, we customize our services to your specific needs.\n\nThe county's excellent schools, low crime rates, and strong community values make it one of the most desirable places to live in Maryland. Capital Clean Care supports Howard County families by providing reliable, professional cleaning that gives you more time to enjoy everything this wonderful county offers.",
    nearbySlugs: ["columbia-md", "ellicott-city-md", "silver-spring-md", "rockville-md", "new-market-md"],
    faqs: [
      { q: "What Howard County areas do you serve?", a: "We serve Columbia, Ellicott City, and surrounding Howard County communities." },
      { q: "Do you cover all of Howard County?", a: "We serve the primary residential areas of Howard County. Contact us with your zip code to confirm coverage." },
      { q: "How do I get started with Howard County cleaning?", a: "Fill out our free quote form with your home details and we'll provide a personalized estimate within hours." },
      { q: "Are weekend appointments available?", a: "Yes. Saturday appointments are available for Howard County clients. Weekend slots are popular, so early booking is recommended." },
      { q: "Do you offer student or military discounts?", a: "Contact us to discuss available promotions and pricing options for your Howard County home." }
    ],
    metaTitle: "Howard County House Cleaning Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Howard County, MD. Serving Columbia, Ellicott City & more. Eco-friendly, background-checked teams. Get your free quote."
  },
  {
    name: "Prince George's County",
    slug: "prince-georges-county-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Prince George's County",
    intro: "Capital Clean Care is expanding our premium cleaning services into Prince George's County, serving communities across Maryland's second most populous county. From College Park to Bowie, Laurel to Upper Marlboro, PG County offers diverse neighborhoods that benefit from professional, eco-friendly cleaning services.\n\nPrince George's County's proximity to Washington, DC makes it home to many federal employees, military families, and professionals who value reliable home services. Capital Clean Care understands the busy schedules of PG County residents and offers flexible scheduling to accommodate demanding lifestyles.\n\nOur eco-friendly approach resonates with Prince George's County communities that value health, safety, and environmental responsibility. Every cleaning visit uses plant-based, non-toxic products that deliver exceptional results without compromising your family's wellbeing.",
    nearbySlugs: ["silver-spring-md", "takoma-park-md", "columbia-md", "washington-dc-ne", "washington-dc-nw"],
    faqs: [
      { q: "What PG County areas do you serve?", a: "We're expanding in Prince George's County. Contact us with your zip code to confirm availability in your specific area." },
      { q: "Do you serve College Park?", a: "Yes. College Park and surrounding areas are within our PG County service area." },
      { q: "Are military discounts available?", a: "Contact us to discuss available pricing options and promotions for PG County residents." },
      { q: "How do I book in Prince George's County?", a: "Fill out our free quote form or call us directly. We'll confirm coverage and provide a personalized estimate." },
      { q: "Do you serve Bowie and Upper Marlboro?", a: "We're expanding coverage across PG County. Contact us to check availability in Bowie, Upper Marlboro, and other communities." }
    ],
    metaTitle: "Prince George's County House Cleaning | Capital Clean Care",
    metaDescription: "Professional house cleaning in Prince George's County, MD. Eco-friendly products, flexible scheduling, background-checked teams. Get a free quote today."
  },
  // WASHINGTON DC
  {
    name: "Washington, DC (NW)",
    slug: "washington-dc-nw",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Northwest Washington is the District's largest and most diverse quadrant, home to iconic neighborhoods like Georgetown, Dupont Circle, Cleveland Park, Tenleytown, Chevy Chase DC, and countless others. NW DC features an extraordinary range of residential properties, from historic rowhouses and grand Victorians to modern condominiums and luxury apartments.\n\nCapital Clean Care serves Northwest DC residents with premium cleaning services adapted to the quadrant's diverse housing stock. Our teams understand the specific needs of DC rowhouses — multi-level layouts, narrow staircases, and period details that require careful attention. We also excel at cleaning modern condos and apartments in the quadrant's many residential buildings.\n\nLiving in NW DC means a busy lifestyle with demanding careers, active social lives, and the cultural richness of the nation's capital at your doorstep. Capital Clean Care handles the cleaning so you can make the most of everything Northwest Washington has to offer.",
    nearbySlugs: ["georgetown-dc", "dupont-circle-dc", "adams-morgan-dc", "bethesda-md", "silver-spring-md"],
    faqs: [
      { q: "What NW DC neighborhoods do you serve?", a: "We serve all NW DC neighborhoods including Georgetown, Dupont Circle, Cleveland Park, Tenleytown, Chevy Chase DC, Glover Park, Woodley Park, and more." },
      { q: "Can you clean rowhouses in NW DC?", a: "Yes. We're experienced with DC rowhouse layouts and their unique multi-level cleaning requirements." },
      { q: "Do you handle parking in NW DC?", a: "Our teams are experienced with DC parking logistics. We handle all arrangements so you don't need to worry about providing a parking space." },
      { q: "Are weekend cleanings available in NW DC?", a: "Yes. Saturday appointments are available and popular with NW DC residents." },
      { q: "Do you coordinate with building management?", a: "Yes. For condo and apartment buildings, we coordinate with concierges and building management for seamless access." }
    ],
    metaTitle: "House Cleaning in NW Washington, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Northwest DC. Serving Georgetown, Dupont Circle, Cleveland Park & more. Eco-friendly, insured. Get your free quote today."
  },
  {
    name: "Washington, DC (NE)",
    slug: "washington-dc-ne",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Northeast Washington has undergone a remarkable transformation, with vibrant neighborhoods like Brookland, NoMa, Trinidad, and Woodridge attracting new residents drawn to the area's character, culture, and growing amenities. NE DC's mix of renovated rowhomes, modern developments, and established family neighborhoods creates a dynamic residential landscape.\n\nCapital Clean Care serves Northeast DC's evolving communities with cleaning services that match the neighborhood's energy and diversity. Whether you've recently moved into a renovated Brookland bungalow or live in a longstanding Woodridge family home, our teams provide thorough, reliable cleaning tailored to your property.\n\nThe ongoing development in NE DC also means many residents are dealing with post-renovation cleanup and the settling dust that comes with neighborhood growth. Our post-construction and deep cleaning services are particularly popular in areas experiencing development.",
    nearbySlugs: ["capitol-hill-dc", "washington-dc-nw", "downtown-dc", "takoma-park-md", "silver-spring-md"],
    faqs: [
      { q: "What NE DC neighborhoods do you serve?", a: "We serve all Northeast DC neighborhoods including Brookland, NoMa, Trinidad, Woodridge, Michigan Park, Fort Lincoln, and surrounding areas." },
      { q: "Do you offer post-renovation cleaning in NE DC?", a: "Yes. With ongoing development in NE DC, our post-construction cleaning service addresses the dust and debris from renovations." },
      { q: "Can you clean newly renovated NE DC homes?", a: "Absolutely. We're experienced with both renovated historic properties and modern new construction common in NE DC." },
      { q: "How do I book cleaning in NE DC?", a: "Fill out our free quote form or call us directly. We serve all of Northeast DC." },
      { q: "Are eco-friendly products important in DC?", a: "We believe so. Our plant-based, non-toxic products protect your family and contribute to a healthier DC environment." }
    ],
    metaTitle: "House Cleaning in NE Washington, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Northeast DC. Serving Brookland, NoMa, Trinidad & more. Eco-friendly products, background-checked teams. Free quotes."
  },
  {
    name: "Capitol Hill",
    slug: "capitol-hill-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Capitol Hill is one of Washington's most iconic and sought-after residential neighborhoods. Known for its stunning rowhouses, the historic Eastern Market, and proximity to the US Capitol, this neighborhood attracts professionals, families, and anyone who appreciates the intersection of history and vibrant community life.\n\nCapital Clean Care understands the prestige and character of Capitol Hill living. The neighborhood's beautifully maintained rowhouses feature period details — crown moldings, original hardwood, marble mantels, and decorative tilework — that require knowledgeable cleaning teams who know how to preserve these features while delivering spotless results.\n\nCapitol Hill residents lead busy lives in one of the world's most important neighborhoods. Between demanding careers, community involvement, and enjoying the area's exceptional dining and cultural scene, professional cleaning is an investment in quality of life that Capitol Hill residents appreciate.",
    nearbySlugs: ["washington-dc-ne", "washington-dc-nw", "downtown-dc", "dupont-circle-dc", "adams-morgan-dc"],
    faqs: [
      { q: "Do you specialize in Capitol Hill rowhouses?", a: "Yes. Our teams are experienced with the multi-level rowhouse layouts and period features that characterize Capitol Hill homes." },
      { q: "Can you clean around antique fixtures?", a: "Absolutely. We train our teams in proper care for historic features, including original woodwork, vintage tile, and antique fixtures." },
      { q: "Do you serve the Hill's apartment buildings?", a: "Yes. We serve rowhouses, apartments, and condos throughout the Capitol Hill neighborhood." },
      { q: "Are your products safe for original hardwood?", a: "Yes. Our eco-friendly products include pH-neutral solutions specifically safe for hardwood floors and other historic surfaces." },
      { q: "How do I schedule on Capitol Hill?", a: "Fill out our quote form or call us. We serve all of Capitol Hill and can typically schedule within a few days." }
    ],
    metaTitle: "House Cleaning on Capitol Hill, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning on Capitol Hill, DC. Expert care for historic rowhouses, eco-friendly products, background-checked teams. Get a free quote."
  },
  {
    name: "Georgetown",
    slug: "georgetown-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Georgetown stands as one of Washington's most prestigious and historic neighborhoods, predating the District of Columbia itself. This cobblestoned enclave along the Potomac River features stunning Federal and Georgian architecture, world-class dining, exclusive boutiques, and some of the most valuable residential real estate in the nation's capital.\n\nCapital Clean Care provides Georgetown homeowners with cleaning services that match the neighborhood's exceptional standards. Our teams are specially trained in caring for fine homes — proper treatment for marble, crystal, hardwood, and the museum-quality finishes often found in Georgetown residences. We understand that these homes require elevated attention and expertise.\n\nGeorgetown's social calendar is legendary, and many residents rely on Capital Clean Care to keep their homes entertaining-ready year-round. From pre-event preparations to regular maintenance that ensures your Georgetown home always reflects your standards, we deliver the premium service this extraordinary neighborhood demands.",
    nearbySlugs: ["washington-dc-nw", "dupont-circle-dc", "adams-morgan-dc", "bethesda-md", "mclean-va"],
    faqs: [
      { q: "Do you have experience with Georgetown's historic homes?", a: "Yes. Our teams are trained in proper care for Georgetown's Federal and Georgian architecture, including appropriate products for period materials." },
      { q: "Can you provide pre-event cleaning in Georgetown?", a: "Absolutely. Many Georgetown clients schedule cleanings before dinner parties, receptions, and social events." },
      { q: "Do you handle parking in Georgetown?", a: "Yes. Our teams are experienced with Georgetown's parking challenges and handle all logistics independently." },
      { q: "What premium finishes can you clean?", a: "We're experienced with marble, granite, hardwood, crystal, designer fabrics, and other premium materials common in Georgetown homes." },
      { q: "How often should I schedule cleaning in Georgetown?", a: "Most Georgetown clients prefer weekly or bi-weekly service. Homes that host frequently may benefit from weekly cleaning." }
    ],
    metaTitle: "House Cleaning in Georgetown, DC | Capital Clean Care",
    metaDescription: "Premium house cleaning in Georgetown, DC. Expert care for historic homes, fine finishes, and luxury properties. Eco-friendly, insured. Get a free quote."
  },
  {
    name: "Dupont Circle",
    slug: "dupont-circle-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Dupont Circle is one of Washington's most beloved neighborhoods, known for its vibrant culture, beautiful rowhouses, Embassy Row's architectural grandeur, and a cosmopolitan atmosphere that attracts diverse residents from across the world. The neighborhood's tree-lined streets and stunning Beaux-Arts and Victorian architecture make it one of DC's most visually striking residential areas.\n\nCapital Clean Care serves Dupont Circle residents with cleaning services tailored to the neighborhood's distinctive properties. Whether you live in a classic Victorian rowhouse, a renovated condo in a historic building, or a modern apartment, our teams deliver thorough cleaning that respects your space's unique character.\n\nDupont Circle's central location and walkable lifestyle mean residents are constantly on the go. Professional cleaning from Capital Clean Care means coming home to a spotless space after a busy day, without sacrificing weekend time to household chores.",
    nearbySlugs: ["washington-dc-nw", "georgetown-dc", "adams-morgan-dc", "downtown-dc", "capitol-hill-dc"],
    faqs: [
      { q: "Do you serve the Dupont Circle neighborhood?", a: "Yes. We serve all of Dupont Circle including surrounding blocks and adjacent neighborhoods." },
      { q: "Can you clean historic Dupont Circle rowhouses?", a: "Absolutely. Our teams are experienced with the Victorian and Beaux-Arts properties that define Dupont Circle." },
      { q: "Do you clean Embassy Row properties?", a: "We focus on residential cleaning. If you live in a residential property on or near Embassy Row, we'd be happy to serve you." },
      { q: "Are weekday daytime cleanings available?", a: "Yes. Many Dupont Circle professionals prefer weekday cleanings while they're at work." },
      { q: "Do you provide key or code access cleaning?", a: "Yes. Many clients provide key, code, or smart lock access so we can clean while they're away." }
    ],
    metaTitle: "House Cleaning in Dupont Circle, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Dupont Circle, DC. Serving rowhouses, condos & apartments. Eco-friendly products, background-checked teams. Free quotes."
  },
  {
    name: "Adams Morgan",
    slug: "adams-morgan-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Adams Morgan is Washington's most colorful and culturally diverse neighborhood, famous for its international restaurants, vibrant nightlife, street murals, and eclectic mix of residents. This energetic community north of Dupont Circle features beautiful residential blocks lined with renovated rowhouses, character apartments, and condominiums.\n\nCapital Clean Care serves Adams Morgan residents with the reliable, eco-friendly cleaning services that complement the neighborhood's lively character. The area's housing mix — from classic DC rowhouses to converted apartment buildings — requires adaptable cleaning teams, and our professionals are up to the challenge.\n\nAdams Morgan residents value authenticity and quality — characteristics that define Capital Clean Care's approach. Our plant-based cleaning products and honest, professional service resonate with this community's values.",
    nearbySlugs: ["dupont-circle-dc", "washington-dc-nw", "georgetown-dc", "downtown-dc", "silver-spring-md"],
    faqs: [
      { q: "Do you serve Adams Morgan?", a: "Yes. We serve all of Adams Morgan including surrounding streets and adjacent neighborhoods." },
      { q: "Can you clean apartments in Adams Morgan?", a: "Yes. We clean apartments, condos, rowhouses, and all residential properties in Adams Morgan." },
      { q: "How do you handle parking in Adams Morgan?", a: "Our teams are experienced with Adams Morgan's parking situation and handle logistics independently." },
      { q: "Are your products pet-friendly?", a: "Yes. Our eco-friendly, non-toxic products are safe for pets, which are popular in Adams Morgan's pet-friendly community." },
      { q: "Do you offer move-in cleaning in Adams Morgan?", a: "Yes. Our move-in and move-out cleaning is available throughout Adams Morgan." }
    ],
    metaTitle: "House Cleaning in Adams Morgan, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Adams Morgan, DC. Eco-friendly products, background-checked teams, flexible scheduling. Get your free quote today."
  },
  {
    name: "Downtown Washington",
    slug: "downtown-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Downtown Washington, DC is the bustling center of the nation's capital, home to a growing residential population attracted by luxury condominiums, renovated lofts, and modern apartment buildings. The area around CityCenter, Penn Quarter, and Chinatown has seen tremendous residential growth, creating demand for premium cleaning services tailored to urban living.\n\nCapital Clean Care serves Downtown DC residents with cleaning services designed for the area's predominantly high-rise and mid-rise residential properties. Our teams understand the logistics of building access, concierge coordination, and the efficient cleaning of modern urban layouts.\n\nDowntown DC professionals lead intensely busy lives, and the convenience of professional cleaning is especially valuable. Capital Clean Care provides reliable, scheduled cleaning that keeps your downtown residence spotless without adding another task to your packed schedule.",
    nearbySlugs: ["capitol-hill-dc", "dupont-circle-dc", "washington-dc-nw", "washington-dc-ne", "georgetown-dc"],
    faqs: [
      { q: "Do you serve Downtown DC buildings?", a: "Yes. We serve residential buildings throughout Downtown DC including CityCenter, Penn Quarter, Chinatown, and surrounding areas." },
      { q: "Can you coordinate with building concierges?", a: "Absolutely. We regularly work with building management, concierges, and front desk staff for seamless access." },
      { q: "Do you clean luxury condos?", a: "Yes. Our teams are experienced with high-end condominiums and luxury finishes common in Downtown DC residences." },
      { q: "Are weekday cleaning appointments available?", a: "Yes. Weekday appointments are popular with Downtown DC professionals who prefer cleaning while they're at work." },
      { q: "How quickly can I get an appointment Downtown?", a: "We typically schedule new Downtown DC clients within 3-5 business days." }
    ],
    metaTitle: "House Cleaning in Downtown Washington, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Downtown DC. Serving luxury condos, apartments & lofts. Eco-friendly, background-checked teams. Get a free quote today."
  },
  // VIRGINIA
  {
    name: "Arlington",
    slug: "arlington-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Arlington is one of Northern Virginia's most desirable communities, offering urban convenience, excellent transit via the Metro system, and a diverse range of neighborhoods from the high-rises of Rosslyn and Ballston to the charming single-family homes of Lyon Village and Ashton Heights. Arlington's proximity to DC and its own thriving commercial corridors make it a premier residential destination.\n\nCapital Clean Care serves Arlington residents with premium cleaning services adapted to the community's varied housing stock. Whether you live in a high-rise condo along the Rosslyn-Ballston corridor, a townhome in Columbia Pike, or a craftsman bungalow in Cherrydale, our teams deliver thorough, customized cleaning every visit.\n\nArlington's active, professional population values efficiency and quality. Our flexible scheduling, dedicated cleaning teams, and eco-friendly approach align with the values of this dynamic community. Let us handle the cleaning while you enjoy everything Arlington has to offer.",
    nearbySlugs: ["mclean-va", "falls-church-va", "alexandria-va", "washington-dc-nw", "fairfax-va"],
    faqs: [
      { q: "What Arlington neighborhoods do you serve?", a: "We serve all Arlington neighborhoods including Rosslyn, Ballston, Clarendon, Lyon Village, Ashton Heights, Columbia Pike, Cherrydale, and more." },
      { q: "Do you clean high-rise condos in Arlington?", a: "Yes. We serve condos and apartments throughout the Rosslyn-Ballston corridor and all Arlington residential buildings." },
      { q: "How much does cleaning cost in Arlington?", a: "Pricing depends on your property type, size, and service. Request a free quote for accurate Arlington pricing." },
      { q: "Can I get regular cleaning in Arlington?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans with dedicated teams and preferred pricing." },
      { q: "Are your Arlington teams background-checked?", a: "Yes. Every team member is background-checked, and we're fully licensed and insured." },
      { q: "Do you offer same-day service in Arlington?", a: "Same-day availability depends on our schedule. Arlington's proximity to our operations often allows for quicker scheduling." }
    ],
    metaTitle: "House Cleaning Services in Arlington, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Arlington, VA. Serving Rosslyn, Ballston, Clarendon & all neighborhoods. Eco-friendly, insured. Get a free quote today."
  },
  {
    name: "Fairfax",
    slug: "fairfax-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Fairfax, the independent city at the heart of Fairfax County, offers residents a blend of suburban comfort and urban amenities. Home to George Mason University and a thriving Old Town district, Fairfax provides a welcoming community atmosphere with excellent schools and diverse housing options that attract families and professionals alike.\n\nCapital Clean Care serves Fairfax residents with professional cleaning services designed for the area's mix of established neighborhoods and newer developments. From colonial-style homes near Old Town to contemporary residences in planned communities, our teams adapt to every property type.\n\nFairfax County's reputation for quality education and safe neighborhoods draws families who invest in their homes and communities. Capital Clean Care supports that investment with reliable, eco-friendly cleaning that keeps Fairfax homes looking their best.",
    nearbySlugs: ["vienna-va", "falls-church-va", "arlington-va", "mclean-va", "tysons-va"],
    faqs: [
      { q: "Do you serve the City of Fairfax?", a: "Yes. We serve the City of Fairfax and surrounding Fairfax County communities." },
      { q: "What services are available in Fairfax?", a: "We offer standard cleaning, deep cleaning, move-in/move-out, post-construction cleanup, and recurring plans." },
      { q: "How do I get a Fairfax cleaning quote?", a: "Fill out our free quote form with your home details for a personalized Fairfax estimate." },
      { q: "Do you serve areas around George Mason?", a: "Yes. We serve all residential areas in and around the City of Fairfax." },
      { q: "Are recurring plans available in Fairfax?", a: "Yes. Weekly, bi-weekly, and monthly plans with preferred pricing and dedicated teams." }
    ],
    metaTitle: "House Cleaning Services in Fairfax, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Fairfax, VA. Eco-friendly products, background-checked teams, flexible plans. Serving all Fairfax neighborhoods. Free quotes."
  },
  {
    name: "McLean",
    slug: "mclean-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "McLean is Northern Virginia's most prestigious residential community, home to diplomats, executives, and discerning homeowners who expect exceptional quality in every service they use. The tree-lined streets, expansive properties, and proximity to Tysons and Washington, DC make McLean one of the most sought-after addresses in the metropolitan area.\n\nCapital Clean Care provides McLean homeowners with the premium cleaning experience their exceptional homes deserve. Our teams are trained in the proper care of luxury finishes — Italian marble, custom millwork, designer hardware, and the fine materials that distinguish McLean residences. We bring elevated expertise to match the elevated standards of this community.\n\nMcLean's social and professional demands mean many residents rely on consistent, high-quality cleaning to keep their homes ready for both daily living and entertaining. Capital Clean Care provides that consistency with dedicated teams, customizable service plans, and the attention to detail that McLean homeowners expect.",
    nearbySlugs: ["tysons-va", "arlington-va", "falls-church-va", "potomac-md", "bethesda-md"],
    faqs: [
      { q: "Do you specialize in luxury McLean homes?", a: "Yes. Our teams receive specialized training for the premium finishes and larger properties common in McLean." },
      { q: "Can you accommodate McLean's larger estates?", a: "Absolutely. We adjust team size and scheduling for McLean's larger properties to ensure thorough, efficient cleaning." },
      { q: "What premium surfaces can you handle?", a: "We're experienced with marble, granite, custom hardwood, designer fabrics, crystal, and other luxury materials." },
      { q: "Do you offer pre-event cleaning?", a: "Yes. Many McLean clients schedule cleanings before social events, holiday gatherings, and dinner parties." },
      { q: "How discreet is your service?", a: "Very. We understand the privacy expectations of McLean residents and conduct ourselves with complete professionalism and discretion." }
    ],
    metaTitle: "House Cleaning Services in McLean, VA | Capital Clean Care",
    metaDescription: "Premium house cleaning in McLean, VA. Specialized care for luxury homes, eco-friendly products, discreet professional teams. Get your free quote today."
  },
  {
    name: "Alexandria",
    slug: "alexandria-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Alexandria is one of Northern Virginia's most charming and historically rich communities. Old Town Alexandria's cobblestone streets, waterfront dining, and beautifully preserved 18th and 19th-century architecture create a residential experience unlike anything else in the metropolitan area. Beyond Old Town, Alexandria offers diverse neighborhoods from Del Ray's artsy charm to West End's modern developments.\n\nCapital Clean Care serves Alexandria residents with cleaning services that respect the city's architectural heritage while meeting modern standards of cleanliness. Our teams are experienced with Old Town's historic rowhouses, Del Ray's craftsman homes, and the contemporary condos and townhomes found throughout the city.\n\nAlexandria residents take pride in their community's character and invest in maintaining beautiful homes. Capital Clean Care supports that pride with professional, eco-friendly cleaning that enhances your home's beauty while protecting its historic value.",
    nearbySlugs: ["arlington-va", "falls-church-va", "fairfax-va", "washington-dc-nw", "capitol-hill-dc"],
    faqs: [
      { q: "Do you serve Old Town Alexandria?", a: "Yes. We serve all of Alexandria including Old Town, Del Ray, West End, Carlyle, and surrounding neighborhoods." },
      { q: "Can you clean historic Alexandria homes?", a: "Yes. Our teams are trained in proper care for historic properties, including appropriate products for original surfaces." },
      { q: "Do you serve Alexandria condos?", a: "Yes. We serve condos, apartments, rowhouses, and single-family homes throughout Alexandria." },
      { q: "How much does cleaning cost in Alexandria?", a: "Pricing varies by property type and service. Request a free quote for accurate Alexandria pricing." },
      { q: "Are weekend appointments available?", a: "Yes. Saturday availability for Alexandria clients. Early booking recommended for weekend slots." },
      { q: "Do you serve Del Ray?", a: "Yes. Del Ray is one of our popular Alexandria service areas." }
    ],
    metaTitle: "House Cleaning Services in Alexandria, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Alexandria, VA. Serving Old Town, Del Ray, West End & more. Eco-friendly, experienced with historic homes. Free quotes."
  },
  {
    name: "Falls Church",
    slug: "falls-church-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Falls Church is a small but mighty Northern Virginia community that punches well above its weight in quality of life. Known as 'The Little City,' Falls Church offers top-rated schools, a charming downtown, and tree-shaded neighborhoods that create an intimate small-town feel just minutes from the nation's capital.\n\nCapital Clean Care serves Falls Church residents with the personalized, premium cleaning services that this close-knit community appreciates. The city's mix of mid-century ranchers, renovated colonials, and modern infill construction gives our versatile teams plenty of variety, and we customize our approach for each property.\n\nFalls Church families value their community's walkability, strong schools, and neighborly atmosphere. Capital Clean Care complements that quality of life with reliable, eco-friendly cleaning that gives you more time to enjoy your community.",
    nearbySlugs: ["arlington-va", "fairfax-va", "vienna-va", "mclean-va", "tysons-va"],
    faqs: [
      { q: "Do you serve the City of Falls Church?", a: "Yes. We serve the City of Falls Church and the surrounding Falls Church area in Fairfax County." },
      { q: "What types of Falls Church homes do you clean?", a: "We clean all types including ranchers, colonials, townhomes, condos, and modern homes throughout Falls Church." },
      { q: "Can I get bi-weekly cleaning in Falls Church?", a: "Yes. Bi-weekly is popular with Falls Church families. Weekly and monthly plans are also available." },
      { q: "Are your Falls Church teams local?", a: "Yes. Our cleaning professionals are familiar with Falls Church and surrounding Northern Virginia communities." },
      { q: "How do I get started?", a: "Fill out our free quote form or call us. We'll schedule your first Falls Church cleaning within a few days." }
    ],
    metaTitle: "House Cleaning Services in Falls Church, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Falls Church, VA. Serving The Little City with eco-friendly products, dedicated teams. Licensed & insured. Free quotes."
  },
  {
    name: "Vienna",
    slug: "vienna-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Vienna is one of Northern Virginia's most family-friendly communities, known for its excellent schools, charming downtown, and quiet residential streets that offer a respite from the bustle of nearby Tysons. The town's well-maintained homes, active community events, and strong neighborhood associations reflect residents who care deeply about their community and their homes.\n\nCapital Clean Care serves Vienna families with professional cleaning that matches the community's high standards. From classic colonials and spacious ranchers to newly built contemporary homes, our teams deliver consistent, thorough results that keep Vienna homes in pristine condition.\n\nVienna's proximity to Tysons, the Metro, and major employers makes it popular with busy professionals and families. Our recurring cleaning plans are especially valued here, providing the reliable, scheduled cleaning that fits Vienna's active lifestyles.",
    nearbySlugs: ["tysons-va", "fairfax-va", "falls-church-va", "mclean-va", "arlington-va"],
    faqs: [
      { q: "What Vienna neighborhoods do you serve?", a: "We serve all of Vienna including the Town of Vienna and surrounding Fairfax County areas." },
      { q: "Do you clean larger Vienna homes?", a: "Yes. We accommodate homes of all sizes and adjust team size for larger Vienna properties." },
      { q: "Are your products safe for families?", a: "Absolutely. Our eco-friendly, non-toxic products are safe for children, pets, and the environment." },
      { q: "Can I get weekly cleaning in Vienna?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans with dedicated teams and preferred pricing." },
      { q: "Do you serve near the Vienna Metro?", a: "Yes. We serve all areas of Vienna including neighborhoods near the Vienna Metro station." }
    ],
    metaTitle: "House Cleaning Services in Vienna, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Vienna, VA. Family-friendly, eco-friendly products, flexible plans. Background-checked teams. Get your free quote today."
  },
  {
    name: "Tysons",
    slug: "tysons-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Tysons has evolved from a suburban commercial center into one of Northern Virginia's most dynamic mixed-use communities. The arrival of Metro's Silver Line has accelerated Tysons' transformation, bringing new luxury residential towers, urban townhomes, and modern condominiums that attract professionals seeking an urban lifestyle outside the District.\n\nCapital Clean Care serves Tysons' growing residential community with cleaning services designed for modern urban living. Our teams are experienced with the high-rise condos, luxury apartments, and contemporary townhomes that characterize Tysons' residential landscape. We coordinate with building management and concierge services for seamless access.\n\nTysons residents lead busy, metropolitan lives and value services that save time without sacrificing quality. Capital Clean Care delivers exactly that — reliable, premium cleaning with eco-friendly products, flexible scheduling, and the convenience of dedicated teams who know your home.",
    nearbySlugs: ["mclean-va", "vienna-va", "falls-church-va", "fairfax-va", "arlington-va"],
    faqs: [
      { q: "Do you serve Tysons residential buildings?", a: "Yes. We serve condos, apartments, and townhomes throughout Tysons including The Boro, Tysons Corner Center residences, and other developments." },
      { q: "Can you coordinate with building concierges?", a: "Absolutely. We regularly work with Tysons building management for seamless access and scheduling." },
      { q: "Do you serve Tysons luxury properties?", a: "Yes. Our teams are experienced with the luxury finishes and modern amenities in Tysons' premium residences." },
      { q: "How quickly can I get service in Tysons?", a: "We typically schedule new Tysons clients within 3-5 business days." },
      { q: "Are recurring plans available in Tysons?", a: "Yes. Weekly, bi-weekly, and monthly plans with preferred pricing for Tysons residents." }
    ],
    metaTitle: "House Cleaning Services in Tysons, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Tysons, VA. Serving luxury condos, apartments & townhomes. Eco-friendly, background-checked teams. Get a free quote today."
  },
  {
    name: "Wheaton",
    slug: "wheaton-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Wheaton is a vibrant, multicultural community in central Montgomery County known for its diverse dining scene, accessible Metro station, and welcoming neighborhood feel. Wheaton Regional Park — one of the largest parks in the county — anchors the area with trails, gardens, and recreational facilities that residents love.\n\nThe housing in Wheaton reflects its accessible character: well-maintained mid-century colonials, split-levels, ramblers, and a growing number of renovated homes attract first-time buyers, young families, and long-time residents alike. Capital Clean Care serves all Wheaton neighborhoods with cleaning services tailored to this diverse housing stock.\n\nWheaton's central location along Georgia Avenue and University Boulevard means busy traffic and urban dust can affect homes, making consistent cleaning important. Our eco-friendly, non-toxic products address these challenges while keeping your family and pets safe. Whether you live near the Wheaton Metro, along Arcola Avenue, or in the neighborhoods bordering Brookside Gardens, Capital Clean Care delivers reliable, high-quality cleaning you can count on.",
    nearbySlugs: ["silver-spring-md", "kensington-md", "rockville-md", "gaithersburg-md", "takoma-park-md"],
    faqs: [
      { q: "What Wheaton neighborhoods do you serve?", a: "We serve all Wheaton neighborhoods including the areas around Wheaton Regional Park, Georgia Avenue corridor, Arcola Avenue, Kensington View, Glenmont, and surrounding communities." },
      { q: "How much does house cleaning cost in Wheaton?", a: "Pricing depends on home size, condition, and service type. Wheaton homes are competitively priced. Fill out our free quote form for an accurate estimate." },
      { q: "Do you serve apartments near the Wheaton Metro?", a: "Yes. We clean apartments, condos, and houses throughout Wheaton including those near the Metro station and Westfield Wheaton area." },
      { q: "Are your products safe for children and pets?", a: "Absolutely. We use only plant-based, non-toxic cleaning products safe for families, kids, and pets." },
      { q: "Can I get bi-weekly cleaning in Wheaton?", a: "Yes. Weekly, bi-weekly, and monthly plans are available with preferred pricing and dedicated teams for Wheaton residents." },
      { q: "Do you clean on weekends in Wheaton?", a: "Yes, Saturday appointments are available. Weekend slots fill quickly, so book in advance." }
    ],
    metaTitle: "House Cleaning Services in Wheaton, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Wheaton, MD (ZIP 20902). Eco-friendly products, background-checked teams, serving all Wheaton neighborhoods. Free quotes."
  }
];

export const getCityBySlug = (slug: string): CityData | undefined =>
  cities.find((c) => c.slug === slug);

export const getHubBySlug = (slug: string): HubData | undefined =>
  hubs.find((h) => h.slug === slug);

export const mdCities = cities.filter((c) => c.state === "MD");
export const dcCities = cities.filter((c) => c.state === "DC");
export const vaCities = cities.filter((c) => c.state === "VA");

/**
 * Generate expanded FAQs for a city by combining existing city-specific FAQs
 * with common questions templated with the city name.
 * Returns 12-15 FAQs per city.
 */
export const getExpandedCityFaqs = (city: CityData): { q: string; a: string }[] => {
  const stateLabel = city.state === "DC" ? "Washington, DC" : city.state === "MD" ? "Maryland" : "Virginia";
  const cityLabel = city.state !== "DC" ? `${city.name}, ${city.state}` : city.name;

  const commonFaqs: { q: string; a: string }[] = [
    { q: `How much does house cleaning cost in ${city.name}?`, a: `Pricing depends on home size, condition, and service type. Standard cleaning for a 2-3 bedroom ${city.name} home typically ranges from $150-$250. Deep cleaning runs $250-$450. Request a free, no-obligation quote for exact pricing tailored to your home.` },
    { q: `Are your ${city.name} cleaning teams insured?`, a: `Yes. Capital Clean Care is fully licensed and insured with comprehensive liability coverage. Every team member serving ${city.name} undergoes thorough background checks and professional training.` },
    { q: `What cleaning services do you offer in ${city.name}?`, a: `We offer standard house cleaning, deep cleaning, move-in/move-out cleaning, post-construction cleanup, recurring cleaning plans (weekly, bi-weekly, monthly), and eco-friendly cleaning throughout ${cityLabel}.` },
    { q: `Do you use eco-friendly products in ${city.name}?`, a: `Yes. We exclusively use plant-based, non-toxic cleaning products in all ${city.name} homes. Our solutions are free from harsh chemicals and artificial fragrances — safe for families, pets, and the environment.` },
    { q: `Do you offer recurring cleaning plans in ${city.name}?`, a: `Yes. Weekly, bi-weekly, and monthly plans are available with preferred pricing and dedicated teams. Bi-weekly is our most popular option for ${city.name} families.` },
    { q: `Do you offer a satisfaction guarantee in ${city.name}?`, a: `Absolutely. We provide a 100% satisfaction guarantee on every ${city.name} cleaning. If any area doesn't meet your expectations, contact us within 24 hours and we'll return to re-clean it at no charge.` },
    { q: `Can I get a free estimate for my ${city.name} home?`, a: `Yes. All quotes are free with no obligation. Fill out our online form, call us at (240) 704-2551, or visit our contact page for a personalized estimate.` },
    { q: `Do you clean apartments and condos in ${city.name}?`, a: `Yes. We clean all types of ${city.name} residences including single-family homes, townhouses, apartments, and condominiums. We coordinate with building management when needed.` },
    { q: `What are your hours for ${city.name} service?`, a: `We operate Monday through Saturday, 7 AM to 7 PM. We offer flexible scheduling to accommodate your ${city.name} lifestyle, including early morning and Saturday appointments.` },
    { q: `Do you bring your own supplies to ${city.name} homes?`, a: `Yes. Our teams arrive fully equipped with eco-friendly cleaning products and professional-grade equipment. You don't need to provide anything.` },
  ];

  // Merge: keep existing city-specific FAQs first, then add common ones not already covered
  const existingQuestions = new Set(city.faqs.map(f => f.q.toLowerCase()));
  const additionalFaqs = commonFaqs.filter(f => {
    const lower = f.q.toLowerCase();
    // Skip if similar question already exists
    return !existingQuestions.has(lower) && !Array.from(existingQuestions).some(eq =>
      eq.includes(city.name.toLowerCase()) && lower.includes(city.name.toLowerCase()) &&
      (eq.includes("cost") && lower.includes("cost") ||
       eq.includes("insured") && lower.includes("insured") ||
       eq.includes("eco") && lower.includes("eco") ||
       eq.includes("recurring") && lower.includes("recurring") ||
       eq.includes("supplies") && lower.includes("supplies"))
    );
  });

  return [...city.faqs, ...additionalFaqs].slice(0, 15);
};
