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
    name: "Eco-Friendly House Cleaning Across Maryland",
    slug: "maryland",
    stateAbbr: "MD",
    intro: "Capital Clean Care provides professional, eco-friendly house cleaning services across Maryland. We serve communities in Montgomery County, Frederick County, Howard County, and Prince George's County — with service areas continuing to grow throughout the state.\n\nMaryland homeowners deserve a cleaning service that understands the unique demands of mid-Atlantic living. Seasonal humidity, pollen, and the dust that accompanies both urban and suburban life require consistent, thorough cleaning routines. Our trained professionals use plant-based, EPA Safer Choice™ certified products that address these challenges while keeping your family and pets safe.\n\nCapital Clean Care adapts our services to every home type and size. We offer standard cleaning, deep cleaning, move-in/move-out services, post-construction cleanup, and flexible recurring plans — weekly, bi-weekly, and monthly — at every location we serve.\n\nEvery team member is fully background-screened, bonded, and insured before entering any Maryland home. Our Latino-owned company holds ourselves to a single standard: leaving your home cleaner than we found it, every visit.\n\nSelect your city below to find detailed pricing, service options, and booking information for your specific Maryland community.",
    citySlugs: ["rockville-md", "silver-spring-md", "bethesda-md", "germantown-md", "gaithersburg-md", "potomac-md", "north-potomac-md", "kentlands-md", "frederick-md", "urbana-md", "clarksburg-md", "damascus-md", "monrovia-md", "boyds-md", "brookeville-md", "mount-airy-md", "takoma-park-md", "columbia-md", "ellicott-city-md", "new-market-md", "wheaton-md", "montgomery-county-md", "frederick-county-md", "howard-county-md", "prince-georges-county-md"],
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
    metaTitle: "Eco-Friendly House Cleaning Maryland | All Cities | Capital Clean Care",
    metaDescription: "Professional eco-friendly house cleaning across Maryland. Serving Montgomery, Frederick, Howard & Prince George's County. Background-checked teams, EPA Safer Choice products. Free quote."
  },
  {
    name: "Washington DC Cleaning Services",
    slug: "washington-dc",
    stateAbbr: "DC",
    intro: "Capital Clean Care brings premium residential cleaning to neighborhoods throughout Washington, DC. From the tree-lined streets of Georgetown to the vibrant communities of Adams Morgan, our professional teams deliver exceptional cleaning services tailored to the unique needs of District living.\n\nDC homes come in every shape and size — historic rowhouses, modern condominiums, spacious apartments, and classic brownstones. Our cleaning professionals are experienced with all property types and understand the specific care each requires. Whether you need delicate treatment for historic woodwork or efficient cleaning for a compact urban apartment, we adapt our approach accordingly.\n\nCity living brings unique cleaning challenges. Construction dust from ongoing development, seasonal pollen from the Capitol's famous cherry blossoms, and the everyday grime of urban life all demand consistent professional attention. Our eco-friendly products are specifically chosen to address these challenges without introducing harsh chemicals into your living space.\n\nWe serve all four quadrants of Washington, DC, including Northwest, Northeast, Southeast, and Southwest. Our most popular service areas include Georgetown, Dupont Circle, Capitol Hill, Adams Morgan, and Downtown. Wherever you call home in the District, Capital Clean Care is ready to provide the premium cleaning experience you deserve.\n\nExplore our neighborhood-specific pages below to learn more about our services in your area of DC.",
    citySlugs: ["washington-dc", "washington-dc", "capitol-hill-dc", "georgetown-dc", "dupont-circle-dc", "adams-morgan-dc", "downtown-dc"],
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
    metaTitle: "House Cleaning Services in Washington DC | Capital Clean Care",
    metaDescription: "Eco-friendly house cleaning in Washington DC — Capitol Hill, Georgetown, Dupont Circle, Adams Morgan and all four quadrants. Licensed teams, plant-based products. Call (240) 704-2551."
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
    metaTitle: "House Cleaning in Northern Virginia | Capital Clean Care",
    metaDescription: "Professional house cleaning in Northern Virginia — Arlington, Fairfax, McLean, Alexandria, Reston and more. Eco-friendly, licensed and insured. Get your free quote today."
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
    intro: "Rockville is one of Maryland's largest cities, and its housing is genuinely all over the map — which is exactly why cleaning a home here is rarely the same job twice. In planned communities like King Farm, large single-family homes, townhomes, and condos sit together on walkable, sidewalk-first streets. Fallsgrove draws move-up buyers into newer, larger homes with modern finishes. Twinbrook and the area around Rockville Town Square offer more accessible condos and townhomes — many within steps of the Rockville Metro, where rental turnover is high — while older pockets like New Mark Commons add mid-century character of their own.\n\nThat mix shapes what a good clean looks like. The newer builds in Fallsgrove and King Farm come with quartz counters, luxury vinyl plank, and modern tile that need pH-appropriate products and a careful hand to stay looking new. The condos and townhomes near Town Square and Twinbrook are about efficient, building-aware service — elevator and parking logistics, key or fob access, and clean results for busy commuters and renters. Established single-family homes carry the everyday load of family life that benefits most from a steady recurring rhythm.\n\nCapital Clean Care cleans across all of it — King Farm, Fallsgrove, Twinbrook, Town Center, Potomac Woods, and the neighborhoods along the I-270 corridor. Our background-checked teams adapt to each home type rather than running a single checklist, and we use only EPA Safer Choice certified, plant-based products that are safe for kids and pets.\n\nWhether you need a one-time deep clean before a move near the Metro or a recurring plan for a busy Fallsgrove household, our Rockville team brings the same consistent standard to your door.",
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
    intro: "Silver Spring is one of the most diverse communities in the DMV, and its housing tells the story — a genuinely urban downtown of condos and apartment buildings just minutes from DC, ringed by older residential neighborhoods full of character. In Woodside and Woodside Park, tree-lined streets are dense with brick colonials, Tudor-style homes, and craftsman bungalows built between the 1920s and 1950s. Four Corners and Woodmoor add more of the same — mature tree canopy, solid brick homes, and active civic associations.\n\nThose older homes are part of what makes Silver Spring special, and they reward a careful, material-aware clean: original hardwood, vintage tile and grout, plaster walls, and older window treatments do best with gentle, pH-balanced products rather than harsh chemicals, and decades of settled dust sometimes call for a deep clean to reset before recurring service. Downtown, the condos and apartments near the Silver Spring Metro and Georgia Avenue are a different rhythm entirely — efficient, building-aware cleaning for residents who want their place fresh without lifting a finger.\n\nSilver Spring is also home to a large federal-worker population and a vibrant Latino community, and we serve both with care: every cleaner is background-checked (which matters for clearance households), and our team works in English and Spanish. Capital Clean Care is Latino-owned — and here, that's not a slogan, it's our own neighborhood.\n\nFrom an older home in Woodmoor to a downtown condo near the Metro, our Silver Spring team delivers eco-friendly, background-checked cleaning tuned to your home — not a template.",
    nearbySlugs: ["takoma-park-md", "rockville-md", "bethesda-md", "washington-dc", "columbia-md"],
    faqs: [
      { q: "What Silver Spring neighborhoods do you serve?", a: "We serve all Silver Spring neighborhoods including Downtown Silver Spring, Woodside, Forest Glen, Four Corners, Wheaton, Colesville, White Oak, and surrounding communities." },
      { q: "How much does cleaning cost in Silver Spring?", a: "Costs vary based on home size and service type. Silver Spring homes are competitively priced. Fill out our free quote form for an accurate estimate tailored to your home." },
      { q: "Do you serve apartment buildings in Downtown Silver Spring?", a: "Yes, we serve apartments and condos throughout Downtown Silver Spring and surrounding areas. We coordinate with building management for access when needed." },
      { q: "Can I get weekly cleaning in Silver Spring?", a: "Absolutely. We offer weekly, bi-weekly, and monthly recurring plans for Silver Spring homes. Recurring clients enjoy preferred pricing and dedicated teams." },
      { q: "Are your Silver Spring teams background-checked?", a: "Yes. Every Capital Clean Care team member undergoes thorough background checks. We're fully licensed and insured for your complete peace of mind." },
      { q: "Do you use eco-friendly products in Silver Spring?", a: "Yes. We exclusively use plant-based, non-toxic cleaning products across all our Silver Spring service areas. Safe for families, pets, and the environment." }
    ],
    metaTitle: "Cleaning Services in Silver Spring, MD — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Silver Spring, MD. Serving all neighborhoods with eco-friendly products and background-checked teams. Get your free quote today."
  },
  {
    name: "Bethesda",
    slug: "bethesda-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Bethesda is one of the most affluent communities in the Washington area, but what makes cleaning a home here distinctive isn't the prestige — it's the sheer range of housing under one ZIP code. In enclaves like Edgemoor and Bradley Hills, craftsman bungalows and colonials dating to the 1910s — built when the neighborhoods grew up around the old Bradley Lane trolley line — sit right beside newly built 4,000-to-10,000-square-foot infill homes that replaced the original cottages. A few blocks away in downtown Bethesda, residents live in high-rise condos within walking distance of Bethesda Row. Each of those needs a different touch.\n\nThe older homes around Battery Park, Edgemoor, and Woodmont Triangle come with the features that make period houses beautiful — original hardwood, plaster walls, crown molding, and vintage tile — all of which call for gentle, material-appropriate cleaning rather than a one-size-fits-all checklist. The newer luxury builds in areas like Burning Tree bring the opposite challenge: expansive floor plans, premium stone and millwork, and high-touch entertaining spaces that have to look immaculate. And the downtown condos near Friendship Heights and Bethesda Row need efficient, building-aware service that works around access rules and busy professional schedules.\n\nCapital Clean Care cleans all three. Our background-checked teams know how to protect hardwood and natural-stone surfaces in a Bradley Hills colonial, how to make a large new-construction home effortless to maintain, and how to keep a downtown condo consistently fresh. We use only EPA Safer Choice certified, plant-based products — a genuine priority in a community this close to the NIH and this health-conscious.\n\nWhether you're maintaining a historic home, keeping a large family house presentable between gatherings, or want a reliable recurring clean for your condo, our Bethesda team delivers a standard that matches the neighborhood.",
    nearbySlugs: ["potomac-md", "rockville-md", "silver-spring-md", "washington-dc", "mclean-va"],
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
    intro: "Germantown is one of upper Montgomery County's largest and fastest-growing communities, and its housing is a real mix that shapes how a home gets cleaned. Townhome rows in Milestone and Kingsview sit alongside single-family homes near Black Hill and garden apartments around Germantown Town Center. The townhomes are tall and narrow, with stairs and shared walls that let dust travel between floors, while the detached homes carry more square footage and bathrooms to maintain. Much of it is newer construction, built as the town grew from a small crossroads into a major suburb along the I-270 corridor.\n\nThat newer stock comes with builder-grade finishes — quartz counters, luxury vinyl plank, and modern tile — that need the right products and a careful hand to keep looking new, not a generic checklist. And Germantown skews toward busy commuter families juggling I-270 or the MARC Brunswick line, kids, and activities — exactly the households that benefit most from a steady recurring rhythm so the home never falls behind.\n\nCapital Clean Care serves all of Germantown — Milestone, Kingsview, Churchill, Germantown Town Center, and the neighborhoods around Black Hill and Clopper Road. Our background-checked teams tailor the clean to your home type, and because so many Germantown households have kids and pets, we use only EPA Safer Choice certified, plant-based products that are safe for little ones and furry family members.\n\nWhether it's a townhome in Milestone or a single-family home near Black Hill, our Germantown team brings consistent, eco-friendly cleaning that fits a busy family's schedule.",
    nearbySlugs: ["clarksburg-md", "gaithersburg-md", "damascus-md", "rockville-md", "urbana-md"],
    faqs: [
      { q: "What Germantown neighborhoods do you serve?", a: "We serve all Germantown neighborhoods including Milestone, Churchill, Seneca Meadows, Gunners Lake, Clopper's Mill, and surrounding communities." },
      { q: "How much does cleaning cost in Germantown?", a: "Pricing varies by home size and service. Germantown's newer homes are competitively priced for cleaning. Request a free quote for accurate pricing." },
      { q: "Do you serve newer Germantown developments?", a: "Yes. We're experienced with the newer construction and modern finishes common in Germantown's developments, including smart home features and open floor plans." },
      { q: "Are your products safe for kids and pets?", a: "Absolutely. We exclusively use eco-friendly, non-toxic products that are safe for children, pets, and the environment." },
      { q: "Can I get recurring cleaning in Germantown?", a: "Yes. Weekly, bi-weekly, and monthly plans are available with preferred pricing and dedicated cleaning teams." }
    ],
    metaTitle: "Cleaning Services in Germantown, MD — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Germantown, MD. Family-friendly, eco-friendly products, flexible scheduling. Serving all Germantown neighborhoods. Free quotes."
  },
  {
    name: "Gaithersburg",
    slug: "gaithersburg-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Gaithersburg is one of Montgomery County's most architecturally interesting cities to clean — largely thanks to the New Urbanism that defines its best-known neighborhoods. Kentlands, started in 1988 as one of America's first New Urbanist towns, packs roughly 2,100 homes of deliberately varied design — large single-family houses, compact 'urban cottages,' townhomes, and condos — onto walkable, front-porch streets. Right next door, Lakelands carries the same neo-traditional look around scenic lakes and trails. Across town, the Olde Towne district along Diamond and Summit Avenues holds some of the city's oldest, most historic homes.\n\nEach of those calls for a different approach. Kentlands and Lakelands homes feature detailed millwork, wood trim, and front porches on tight, walkable lots where foot traffic tracks more outdoor debris indoors — so entryways, floors, and trim need extra attention. Newer construction around Crown Farm and Quince Orchard brings builder-grade quartz and luxury vinyl that need the right products to stay looking new. And the older homes in Olde Towne reward the gentle, material-aware care that period details deserve.\n\nWith the I-270 corridor running professionals through Gaithersburg every day, recurring service is especially popular here — busy families and commuters who'd rather have their weekends back than spend them cleaning. Capital Clean Care's background-checked teams know the Kentlands and Lakelands home typology well, respect HOA standards, and use only EPA Safer Choice certified, plant-based products that are safe for children and pets.\n\nWhether it's a Kentlands urban cottage, a Lakelands townhome, or a single-family home in Quince Orchard, our Gaithersburg team tailors the clean to your home — and gives you your time back.",
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
    intro: "Potomac is one of the wealthiest communities in the country, and cleaning a home here often means caring for a genuine estate. Along River Road and Falls Road, large custom homes sit on wooded acre-plus lots, while the master-planned community of Avenel — roughly 900 homes across 14 architecturally distinct villages on more than 1,000 acres — wraps Colonial, Georgian, and Mediterranean houses around the TPC Potomac golf course, bridle paths, and preserved stream valleys. These are big homes with premium materials, held to a high standard.\n\nThat standard shapes the work. Potomac estates are full of the surfaces that demand a careful hand — marble and natural-stone floors, custom millwork and cabinetry, hardwood, and designer finishes that the wrong product can dull or etch. The homes are also large, with expansive floor plans and frequent entertaining spaces that need to stay guest-ready, so thoroughness and consistency matter as much as care.\n\nCapital Clean Care cleans Potomac homes the way they're meant to be cleaned: background-checked teams trained to protect high-end finishes, with EPA Safer Choice certified, plant-based products that are gentle on premium materials and on the protected natural surroundings Potomac is known for. We handle everything from a recurring clean that keeps a large home effortlessly presentable to a full deep clean before a gathering.\n\nWhether you're in Avenel, along River Road, or anywhere across Potomac, our team brings the discretion, care, and consistency that estate homes require.",
    nearbySlugs: ["bethesda-md", "rockville-md", "gaithersburg-md", "mclean-va", "germantown-md"],
    faqs: [
      { q: "Do you handle large estate properties in Potomac?", a: "Yes. We regularly clean larger estate-style properties in Potomac, adjusting team size and scheduling to ensure thorough coverage of expansive homes." },
      { q: "Are your teams trained for premium surfaces?", a: "Absolutely. Our Potomac teams receive specialized training in caring for marble, granite, hardwood, and other high-end materials common in the area's homes." },
      { q: "What's the typical cleaning cost in Potomac?", a: "Potomac homes vary significantly in size. We provide personalized quotes based on your specific property. Request a free estimate for accurate pricing." },
      { q: "Can I schedule pre-event cleaning?", a: "Yes. Many Potomac clients schedule cleanings before dinner parties, holiday gatherings, and other events. We accommodate special scheduling needs." },
      { q: "Do you offer regular weekly service in Potomac?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans are available with dedicated teams and preferred pricing for Potomac residents." }
    ],
    metaTitle: "Cleaning Services in Potomac, MD — All Services | Capital Clean Care",
    metaDescription: "Premium house cleaning in Potomac, MD. Specialized care for fine homes, eco-friendly products, background-checked teams. Serving all Potomac neighborhoods. Free quotes."
  },
  {
    name: "Frederick",
    slug: "frederick-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Frederick County",
    intro: "Frederick is anchored by one of the most intact historic downtowns in the country — more than 200 preserved 18th- and 19th-century buildings, from Georgian and Federal to Victorian, lining a walkable grid around Market Street, Carroll Creek, and Baker Park. Downtown's three- and four-story brick rowhouses, with their black-shuttered windows and period detail, sit a short drive from sprawling newer suburban neighborhoods like Ballenger Creek, Westview, and Tuscarora. That span — from a 200-year-old rowhouse to a 2010s subdivision — is exactly what makes cleaning in Frederick varied work.\n\nThe historic homes reward a careful, material-aware clean: original hardwood and heart-pine floors, plaster walls, period millwork, and old windows that the wrong product can damage. The newer suburban builds bring modern finishes — quartz, luxury vinyl, and engineered hardwood — that need pH-appropriate products to stay looking new. Each gets the right approach, not a single generic checklist.\n\nCapital Clean Care serves all of Frederick, downtown to the newer west- and south-side neighborhoods. Our background-checked teams adapt to your home's era, and we use only EPA Safer Choice certified, plant-based products — a natural fit for a community this proud of its parks, Carroll Creek, and the mountains and trails nearby.\n\nWhether it's a historic Market Street rowhouse or a family home in Ballenger Creek, our Frederick team delivers reliable, eco-friendly cleaning that respects your home and your time.",
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
    intro: "Clarksburg is Montgomery County's newest and fastest-growing town, and that single fact shapes almost everything about cleaning a home here. Whole neighborhoods — Cabin Branch, Arora Hills, Clarksburg Village, and the Town Center near the Premium Outlets — have been built in just the last decade or two, so the housing is overwhelmingly new construction: open floor plans, quartz counters, luxury vinyl plank, and modern tile. Cleaning newer homes is less about fighting decades of build-up and more about protecting finishes and managing the fine construction-era dust that lingers in brand-new builds.\n\nBecause so many homes are recently built or recently bought, two cleans come up a lot in Clarksburg: a move-in clean before a family unpacks a new home, and a post-construction clean to clear the drywall dust that settles everywhere after building or a basement finish. Both are more thorough than a standard clean — and knowing the difference matters so you get the right service.\n\nCapital Clean Care serves all of Clarksburg — Cabin Branch, Arora Hills, Clarksburg Village, Town Center, and the neighborhoods along the I-270 corridor. Our background-checked teams know how to care for builder-grade quartz and luxury vinyl so it keeps its showroom look, and we use only EPA Safer Choice certified, plant-based products that are safe for the young families this town is full of.\n\nWhether it's a move-in clean for a new build or a recurring plan for a busy household, our Clarksburg team delivers consistent, eco-friendly cleaning for the county's newest community.",
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
    intro: "Takoma Park is one of the most distinctive places we clean — a leafy, fiercely independent community known as 'Azalea City' and an official Tree City, USA, where the eco-friendly, plant-based approach we've always used isn't a selling point, it's simply expected. The heart of town is the Takoma Park Historic District, with more than 600 contributing historic buildings from the 1880s to the 1930s — Queen Annes, Colonial Revivals, and craftsman bungalows lining tree-canopied streets. As DC's first commuter suburb, it has carefully preserved its character, and with no HOA dictating upkeep, no two homes are quite alike.\n\nCleaning these character homes takes knowledge and a gentle hand. Original hardwood floors, vintage tile, plaster walls, intricate woodwork, and the wraparound porches and older windows of a century-old bungalow all do best with careful, material-appropriate products rather than harsh chemicals. Many have been lovingly updated by their owners, pairing turn-of-the-century detail with modern touches.\n\nThis is also one of the DMV's most diverse and environmentally conscious communities, and our values line up: every cleaner is background-checked, and we use only EPA Safer Choice certified, plant-based products — better for your family, your old-growth surfaces, and the gardens and tree canopy Takoma Park is famous for.\n\nWhether it's a Victorian near the Historic District or a craftsman bungalow under the trees, our Takoma Park team cleans with respect for your home's history — and for the community's green values.",
    nearbySlugs: ["silver-spring-md", "washington-dc", "washington-dc", "rockville-md", "bethesda-md"],
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
    intro: "Columbia isn't a typical suburb — it's one of America's most famous planned communities, conceived in the 1960s by developer James Rouse as a 'garden for growing people.' That vision still shapes the place: ten distinct villages, each with its own character and town center, woven together by miles of wooded pathways, parks, and lakes. By design, Rouse mixed housing types right next to each other — lakefront and village-center condos and townhomes alongside single-family homes in neighborhoods like Hickory Ridge, Owen Brown, and River Hill — so a single street can hold very different homes.\n\nThat intentional variety is what makes cleaning across Columbia interesting. The townhomes and condos near the village centers are about efficient, building- and HOA-aware service, while the single-family homes — many from the 1960s-70s with their own mid-century-modern character, plus newer infill — carry the everyday load of family life. Columbia's wooded, pathway-laced setting also means more tracked-in pollen and outdoor dust than a treeless subdivision.\n\nCapital Clean Care cleans throughout Columbia's villages with background-checked teams that adapt to each home and community, using only EPA Safer Choice certified, plant-based products — a natural fit for a place built around green space and quality of life.\n\nWhether it's a townhome near a village center or a single-family home in River Hill, our Columbia team delivers reliable, eco-friendly cleaning tuned to your home.",
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
    intro: "Ellicott City is unlike anywhere else we clean — a historic mill town founded in 1772 on the Patapsco River, where rough-hewn granite buildings climb a steep, curved Main Street. The historic district holds more than 200 buildings from the town's 18th- and 19th-century milling heyday, many built from local granite quarried right along the river, with skillfully laid stonework, monolithic stone lintels, and the kind of craftsmanship you simply don't find in new construction. Beyond Old Ellicott City, the surrounding hills hold sprawling modern suburbs like Turf Valley and Waverly Woods.\n\nThose two worlds need very different care. The historic stone homes come with original hardwood, plaster, vintage tile, and old windows that demand a gentle, material-aware hand — never a harsh, one-size-fits-all clean — and Old EC's steep, hilly terrain is part of the character. The newer homes in Turf Valley and Waverly Woods bring modern finishes that need the right products to stay looking new.\n\nCapital Clean Care serves all of Ellicott City, from the historic district to the newer developments. Our background-checked teams match the approach to your home's era, and we use only EPA Safer Choice certified, plant-based products that protect both delicate historic surfaces and your family's health.\n\nWhether it's a century-old stone home near Main Street or a modern house in Turf Valley, our Ellicott City team cleans with respect for this beloved community's history.",
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
    nearbySlugs: ["silver-spring-md", "takoma-park-md", "columbia-md", "washington-dc", "washington-dc"],
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
    slug: "washington-dc",
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
    nearbySlugs: ["capitol-hill-dc", "washington-dc", "downtown-dc", "takoma-park-md", "silver-spring-md"],
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
    nearbySlugs: ["washington-dc", "washington-dc", "downtown-dc", "dupont-circle-dc", "adams-morgan-dc"],
    faqs: [
      { q: "Do you specialize in Capitol Hill rowhouses?", a: "Yes. Our teams are experienced with the multi-level rowhouse layouts and period features that characterize Capitol Hill homes." },
      { q: "Can you clean around antique fixtures?", a: "Absolutely. We train our teams in proper care for historic features, including original woodwork, vintage tile, and antique fixtures." },
      { q: "Do you serve the Hill's apartment buildings?", a: "Yes. We serve rowhouses, apartments, and condos throughout the Capitol Hill neighborhood." },
      { q: "Are your products safe for original hardwood?", a: "Yes. Our eco-friendly products include pH-neutral solutions specifically safe for hardwood floors and other historic surfaces." },
      { q: "How do I schedule on Capitol Hill?", a: "Fill out our quote form or call us. We serve all of Capitol Hill and can typically schedule within a few days." }
    ],
    metaTitle: "Cleaning Services on Capitol Hill, DC — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning on Capitol Hill, DC. Expert care for historic rowhouses, eco-friendly products, background-checked teams. Get a free quote."
  },
  {
    name: "Georgetown",
    slug: "georgetown-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Georgetown stands as one of Washington's most prestigious and historic neighborhoods, predating the District of Columbia itself. This cobblestoned enclave along the Potomac River features stunning Federal and Georgian architecture, world-class dining, exclusive boutiques, and some of the most valuable residential real estate in the nation's capital.\n\nCapital Clean Care provides Georgetown homeowners with cleaning services that match the neighborhood's exceptional standards. Our teams are specially trained in caring for fine homes — proper treatment for marble, crystal, hardwood, and the museum-quality finishes often found in Georgetown residences. We understand that these homes require elevated attention and expertise.\n\nGeorgetown's social calendar is legendary, and many residents rely on Capital Clean Care to keep their homes entertaining-ready year-round. From pre-event preparations to regular maintenance that ensures your Georgetown home always reflects your standards, we deliver the premium service this extraordinary neighborhood demands.",
    nearbySlugs: ["washington-dc", "dupont-circle-dc", "adams-morgan-dc", "bethesda-md", "mclean-va"],
    faqs: [
      { q: "Do you have experience with Georgetown's historic homes?", a: "Yes. Our teams are trained in proper care for Georgetown's Federal and Georgian architecture, including appropriate products for period materials." },
      { q: "Can you provide pre-event cleaning in Georgetown?", a: "Absolutely. Many Georgetown clients schedule cleanings before dinner parties, receptions, and social events." },
      { q: "Do you handle parking in Georgetown?", a: "Yes. Our teams are experienced with Georgetown's parking challenges and handle all logistics independently." },
      { q: "What premium finishes can you clean?", a: "We're experienced with marble, granite, hardwood, crystal, designer fabrics, and other premium materials common in Georgetown homes." },
      { q: "How often should I schedule cleaning in Georgetown?", a: "Most Georgetown clients prefer weekly or bi-weekly service. Homes that host frequently may benefit from weekly cleaning." }
    ],
    metaTitle: "Cleaning Services in Georgetown, DC — All Services | Capital Clean Care",
    metaDescription: "Premium house cleaning in Georgetown, DC. Expert care for historic homes, fine finishes, and luxury properties. Eco-friendly, insured. Get a free quote."
  },
  {
    name: "Dupont Circle",
    slug: "dupont-circle-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Dupont Circle is one of Washington's most beloved neighborhoods, known for its vibrant culture, beautiful rowhouses, Embassy Row's architectural grandeur, and a cosmopolitan atmosphere that attracts diverse residents from across the world. The neighborhood's tree-lined streets and stunning Beaux-Arts and Victorian architecture make it one of DC's most visually striking residential areas.\n\nCapital Clean Care serves Dupont Circle residents with cleaning services tailored to the neighborhood's distinctive properties. Whether you live in a classic Victorian rowhouse, a renovated condo in a historic building, or a modern apartment, our teams deliver thorough cleaning that respects your space's unique character.\n\nDupont Circle's central location and walkable lifestyle mean residents are constantly on the go. Professional cleaning from Capital Clean Care means coming home to a spotless space after a busy day, without sacrificing weekend time to household chores.",
    nearbySlugs: ["washington-dc", "georgetown-dc", "adams-morgan-dc", "downtown-dc", "capitol-hill-dc"],
    faqs: [
      { q: "Do you serve the Dupont Circle neighborhood?", a: "Yes. We serve all of Dupont Circle including surrounding blocks and adjacent neighborhoods." },
      { q: "Can you clean historic Dupont Circle rowhouses?", a: "Absolutely. Our teams are experienced with the Victorian and Beaux-Arts properties that define Dupont Circle." },
      { q: "Do you clean Embassy Row properties?", a: "We focus on residential cleaning. If you live in a residential property on or near Embassy Row, we'd be happy to serve you." },
      { q: "Are weekday daytime cleanings available?", a: "Yes. Many Dupont Circle professionals prefer weekday cleanings while they're at work." },
      { q: "Do you provide key or code access cleaning?", a: "Yes. Many clients provide key, code, or smart lock access so we can clean while they're away." }
    ],
    metaTitle: "Cleaning Services in Dupont Circle, DC — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Dupont Circle, DC. Serving rowhouses, condos & apartments. Eco-friendly products, background-checked teams. Free quotes."
  },
  {
    name: "Adams Morgan",
    slug: "adams-morgan-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Adams Morgan is Washington's most colorful and culturally diverse neighborhood, famous for its international restaurants, vibrant nightlife, street murals, and eclectic mix of residents. This energetic community north of Dupont Circle features beautiful residential blocks lined with renovated rowhouses, character apartments, and condominiums.\n\nCapital Clean Care serves Adams Morgan residents with the reliable, eco-friendly cleaning services that complement the neighborhood's lively character. The area's housing mix — from classic DC rowhouses to converted apartment buildings — requires adaptable cleaning teams, and our professionals are up to the challenge.\n\nAdams Morgan residents value authenticity and quality — characteristics that define Capital Clean Care's approach. Our plant-based cleaning products and honest, professional service resonate with this community's values.",
    nearbySlugs: ["dupont-circle-dc", "washington-dc", "georgetown-dc", "downtown-dc", "silver-spring-md"],
    faqs: [
      { q: "Do you serve Adams Morgan?", a: "Yes. We serve all of Adams Morgan including surrounding streets and adjacent neighborhoods." },
      { q: "Can you clean apartments in Adams Morgan?", a: "Yes. We clean apartments, condos, rowhouses, and all residential properties in Adams Morgan." },
      { q: "How do you handle parking in Adams Morgan?", a: "Our teams are experienced with Adams Morgan's parking situation and handle logistics independently." },
      { q: "Are your products pet-friendly?", a: "Yes. Our eco-friendly, non-toxic products are safe for pets, which are popular in Adams Morgan's pet-friendly community." },
      { q: "Do you offer move-in cleaning in Adams Morgan?", a: "Yes. Our move-in and move-out cleaning is available throughout Adams Morgan." }
    ],
    metaTitle: "Cleaning Services in Adams Morgan, DC — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Adams Morgan, DC. Eco-friendly products, background-checked teams, flexible scheduling. Get your free quote today."
  },
  {
    name: "Downtown Washington",
    slug: "downtown-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Downtown Washington, DC is the bustling center of the nation's capital, home to a growing residential population attracted by luxury condominiums, renovated lofts, and modern apartment buildings. The area around CityCenter, Penn Quarter, and Chinatown has seen tremendous residential growth, creating demand for premium cleaning services tailored to urban living.\n\nCapital Clean Care serves Downtown DC residents with cleaning services designed for the area's predominantly high-rise and mid-rise residential properties. Our teams understand the logistics of building access, concierge coordination, and the efficient cleaning of modern urban layouts.\n\nDowntown DC professionals lead intensely busy lives, and the convenience of professional cleaning is especially valuable. Capital Clean Care provides reliable, scheduled cleaning that keeps your downtown residence spotless without adding another task to your packed schedule.",
    nearbySlugs: ["capitol-hill-dc", "dupont-circle-dc", "washington-dc", "washington-dc", "georgetown-dc"],
    faqs: [
      { q: "Do you serve Downtown DC buildings?", a: "Yes. We serve residential buildings throughout Downtown DC including CityCenter, Penn Quarter, Chinatown, and surrounding areas." },
      { q: "Can you coordinate with building concierges?", a: "Absolutely. We regularly work with building management, concierges, and front desk staff for seamless access." },
      { q: "Do you clean luxury condos?", a: "Yes. Our teams are experienced with high-end condominiums and luxury finishes common in Downtown DC residences." },
      { q: "Are weekday cleaning appointments available?", a: "Yes. Weekday appointments are popular with Downtown DC professionals who prefer cleaning while they're at work." },
      { q: "How quickly can I get an appointment Downtown?", a: "We typically schedule new Downtown DC clients within 3-5 business days." }
    ],
    metaTitle: "Cleaning Services in Downtown DC — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Downtown DC. Serving luxury condos, apartments & lofts. Eco-friendly, background-checked teams. Get a free quote today."
  },
  // VIRGINIA
  {
    name: "Arlington",
    slug: "arlington-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Arlington is two communities in one, and cleaning a home here depends entirely on which one you live in. Along the Rosslyn-Ballston corridor, neighborhoods like Clarendon, Ballston, and Courthouse are stacked with modern high-rise condos — walkable, Metro-connected, full of busy professionals — while just a few blocks north, Lyon Village, Ashton Heights, and Cherrydale shift into quiet, tree-lined streets of craftsman bungalows and colonials on larger lots. A resident can walk from a Clarendon high-rise to those leafy single-family blocks in minutes.\n\nThose two worlds need different service. The condos and apartments along the corridor are about efficient, building-aware cleaning — coordinating elevator and loading-dock access, garage parking, and secure fob or front-desk entry, and getting it done right while you're at work. The single-family homes in Lyon Village and Cherrydale carry the everyday load of family life, and the older craftsman and colonial houses reward a careful hand on original hardwood, trim, and period details.\n\nCapital Clean Care cleans across all of Arlington — the Rosslyn-Ballston high-rises, the townhomes along Columbia Pike, and the historic single-family neighborhoods. Our background-checked teams adapt to your home and building, and we use only EPA Safer Choice certified, plant-based products that are safe for kids and pets.\n\nWhether it's a Ballston condo or a Cherrydale bungalow, our Arlington team delivers reliable, eco-friendly cleaning that fits a fast-moving, professional community.",
    nearbySlugs: ["mclean-va", "falls-church-va", "alexandria-va", "washington-dc", "fairfax-va"],
    faqs: [
      { q: "What Arlington neighborhoods do you serve?", a: "We serve all Arlington neighborhoods including Rosslyn, Ballston, Clarendon, Lyon Village, Ashton Heights, Columbia Pike, Cherrydale, and more." },
      { q: "Do you clean high-rise condos in Arlington?", a: "Yes. We serve condos and apartments throughout the Rosslyn-Ballston corridor and all Arlington residential buildings." },
      { q: "How much does cleaning cost in Arlington?", a: "Pricing depends on your property type, size, and service. Request a free quote for accurate Arlington pricing." },
      { q: "Can I get regular cleaning in Arlington?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans with dedicated teams and preferred pricing." },
      { q: "Are your Arlington teams background-checked?", a: "Yes. Every team member is background-checked, and we're fully licensed and insured." },
      { q: "Do you offer same-day service in Arlington?", a: "Same-day availability depends on our schedule. Arlington's proximity to our operations often allows for quicker scheduling." }
    ],
    metaTitle: "Cleaning Services in Arlington, VA — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Arlington, VA. Serving Rosslyn, Ballston, Clarendon & all neighborhoods. Eco-friendly, insured. Get a free quote today."
  },
  {
    name: "Fairfax",
    slug: "fairfax-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Fairfax is an independent city with its own identity at the heart of Fairfax County — a walkable Old Town historic center, George Mason University, and the steady rhythm of a real community rather than just a subdivision. Its housing reflects decades of growth: established 1950s-era colonials with three and four bedrooms and attached garages in neighborhoods like Barrister's Keepe and Cobbdale, where mature trees and large yards give a mid-century, settled feel, alongside townhomes lining Chain Bridge Road and newer luxury condo-and-townhome communities like Mount Vineyard and Royal Legacy just blocks from Old Town.\n\nThat mix shapes the work. The established colonials and split-levels carry the everyday load of family life and reward thorough, methodical recurring cleaning, while the newer townhomes and condos — with their modern finishes and walkable, building-aware logistics — fit busy professionals and the students drawn by George Mason. Many older homes have been updated over the years, blending mid-century bones with renovated kitchens and baths.\n\nCapital Clean Care serves all of Fairfax City — Old Town and the surrounding established neighborhoods to the newer communities along Chain Bridge Road. Our background-checked teams adapt to each home type, and we use only EPA Safer Choice certified, plant-based products that are safe for the families and pets this community is built around.\n\nWhether it's a 1950s colonial in Cobbdale or a townhome near Old Town, our Fairfax team delivers reliable, eco-friendly cleaning that keeps your home looking its best.",
    nearbySlugs: ["vienna-va", "falls-church-va", "arlington-va", "mclean-va", "tysons-va"],
    faqs: [
      { q: "Do you serve the City of Fairfax?", a: "Yes. We serve the City of Fairfax and surrounding Fairfax County communities." },
      { q: "What services are available in Fairfax?", a: "We offer standard cleaning, deep cleaning, move-in/move-out, post-construction cleanup, and recurring plans." },
      { q: "How do I get a Fairfax cleaning quote?", a: "Fill out our free quote form with your home details for a personalized Fairfax estimate." },
      { q: "Do you serve areas around George Mason?", a: "Yes. We serve all residential areas in and around the City of Fairfax." },
      { q: "Are recurring plans available in Fairfax?", a: "Yes. Weekly, bi-weekly, and monthly plans with preferred pricing and dedicated teams." }
    ],
    metaTitle: "Cleaning Services in Fairfax, VA — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Fairfax, VA. Eco-friendly products, background-checked teams, flexible plans. Serving all Fairfax neighborhoods. Free quotes."
  },
  {
    name: "McLean",
    slug: "mclean-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "McLean is one of the most affluent communities in the country — home to diplomats, executives, and government officials — and cleaning here usually means caring for a true luxury home. In neighborhoods like Langley, Salona Village, and Chesterbrook Woods, gracious older traditional houses sit beside sprawling new-construction estates on private, wooded lots, many with the pools, home theaters, gourmet kitchens, and landscaped gardens that define McLean living. (Salona Village even takes its name from the historic estate that sheltered President Madison when he fled the burning of Washington in 1812.) The median luxury home here runs north of $2.5 million.\n\nHomes at this level demand real expertise. Italian marble and natural stone, custom millwork and cabinetry, designer hardware, fine hardwood, and delicate finishes are exactly the surfaces a wrong product can dull or etch — so they call for trained, careful, discreet service. These are also large homes with expansive floor plans and frequent entertaining that have to stay consistently presentable.\n\nCapital Clean Care brings McLean homeowners the elevated, detail-driven service their homes deserve: background-checked teams trained in the care of luxury finishes, EPA Safer Choice certified plant-based products that are gentle on premium materials, and the consistency and discretion that come with a dedicated team that knows your home.\n\nWhether you're in Langley, Salona Village, or anywhere across McLean, our team delivers the standard these exceptional homes — and their owners — expect.",
    nearbySlugs: ["tysons-va", "arlington-va", "falls-church-va", "potomac-md", "bethesda-md"],
    faqs: [
      { q: "Do you specialize in luxury McLean homes?", a: "Yes. Our teams receive specialized training for the premium finishes and larger properties common in McLean." },
      { q: "Can you accommodate McLean's larger estates?", a: "Absolutely. We adjust team size and scheduling for McLean's larger properties to ensure thorough, efficient cleaning." },
      { q: "What premium surfaces can you handle?", a: "We're experienced with marble, granite, custom hardwood, designer fabrics, crystal, and other luxury materials." },
      { q: "Do you offer pre-event cleaning?", a: "Yes. Many McLean clients schedule cleanings before social events, holiday gatherings, and dinner parties." },
      { q: "How discreet is your service?", a: "Very. We understand the privacy expectations of McLean residents and conduct ourselves with complete professionalism and discretion." }
    ],
    metaTitle: "Cleaning Services in McLean, VA — All Services | Capital Clean Care",
    metaDescription: "Premium house cleaning in McLean, VA. Specialized care for luxury homes, eco-friendly products, discreet professional teams. Get your free quote today."
  },
  {
    name: "Alexandria",
    slug: "alexandria-va",
    state: "VA",
    stateSlug: "virginia",
    intro: "Alexandria is one of the most historically rich places we clean, and that history is right there in the housing. In Old Town, brick rowhouses and townhomes from the 18th and 19th centuries line brick-sidewalk streets down to the Potomac waterfront, alongside condos carved out of converted warehouses. A mile inland, Del Ray trades all that for craftsman bungalows and updated Cape Cods along the independent shops of Mount Vernon Avenue, while newer districts like Carlyle and Potomac Yard add mid-rise and new-construction condos and townhomes near their own Metro stations.\n\nEach calls for a different touch. Old Town's centuries-old rowhouses come with original heart-pine floors, narrow staircases, plaster walls, and antique fixtures that demand gentle, material-aware cleaning — never a harsh, generic approach. Del Ray's bungalows reward attention to period woodwork and tile, and the newer Carlyle and Potomac Yard condos are about efficient, building-aware service for busy professionals.\n\nCapital Clean Care is experienced across all of it — historic Old Town rowhouses, Del Ray character homes, and contemporary condos throughout the city — and our background-checked teams use only EPA Safer Choice certified, plant-based products that protect both delicate historic surfaces and your family's health.\n\nWhether it's an Old Town townhome or a Del Ray bungalow, our Alexandria team cleans with respect for your home's heritage and the standards of today.",
    nearbySlugs: ["arlington-va", "falls-church-va", "fairfax-va", "washington-dc", "capitol-hill-dc"],
    faqs: [
      { q: "Do you serve Old Town Alexandria?", a: "Yes. We serve all of Alexandria including Old Town, Del Ray, West End, Carlyle, and surrounding neighborhoods." },
      { q: "Can you clean historic Alexandria homes?", a: "Yes. Our teams are trained in proper care for historic properties, including appropriate products for original surfaces." },
      { q: "Do you serve Alexandria condos?", a: "Yes. We serve condos, apartments, rowhouses, and single-family homes throughout Alexandria." },
      { q: "How much does cleaning cost in Alexandria?", a: "Pricing varies by property type and service. Request a free quote for accurate Alexandria pricing." },
      { q: "Are weekend appointments available?", a: "Yes. Saturday availability for Alexandria clients. Early booking recommended for weekend slots." },
      { q: "Do you serve Del Ray?", a: "Yes. Del Ray is one of our popular Alexandria service areas." }
    ],
    metaTitle: "Cleaning Services in Alexandria, VA — All Services | Capital Clean Care",
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
    intro: "The Town of Vienna is one of Northern Virginia's most beloved small towns — an incorporated community with a genuine Main Street feel just minutes from the towers of Tysons. Church Street NE, the historic heart of town, is lined with local shops, the 1859 Freeman Store, and the restored Vienna train depot on the W&OD Trail, and the tree-shaded streets host everything from the Halloween parade to summer concerts on the Green. Vienna's homes reflect that settled, house-proud character: mid-century brick ramblers and split-levels, classic colonials, and mature-lot custom homes, increasingly joined by large new-builds replacing older lots.\n\nThose established homes reward thorough, consistent cleaning — hardwood floors, trim and built-ins, and the pollen and tree debris that Vienna's heavy canopy drops each season along the streets near the W&OD Trail. Many are long-owned family homes where recurring service keeps a big house effortlessly in shape; others are newly built and want careful attention to modern finishes.\n\nCapital Clean Care serves the Town of Vienna and the surrounding Fairfax County neighborhoods — from Church Street and the Vienna Metro to the Oakton-adjacent areas — with background-checked teams and only EPA Safer Choice certified, plant-based products that are safe for the families and pets in this school-focused community.\n\nWhether it's a long-held colonial or a brand-new custom home, our Vienna team delivers the reliable, eco-friendly clean that fits the town's high standards.",
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
    intro: "Tysons is Northern Virginia's downtown-in-the-making — a onetime suburban crossroads remade into a walkable, high-rise urban center by the Metro Silver Line. Around Tysons Corner Center and Tysons Galleria, glass residential towers, luxury condos, and mixed-use developments like The Boro have brought thousands of residents into apartments and penthouses that live more like the District than the suburbs. It's a vertical, amenity-rich community of professionals who value their time above almost everything.\n\nHigh-rise living has its own cleaning rhythm: floor-to-ceiling windows and glass, open-plan kitchens with quartz and stainless, hardwood and luxury-vinyl floors, and the fine city dust that settles fast in a home twenty floors up. Access runs through concierges, loading docks, and freight elevators — the building logistics our teams handle every week.\n\nCapital Clean Care serves Tysons' residential buildings and townhomes — The Boro, the towers near the Tysons Corner and Greensboro Metro stations, and the developments spreading toward McLean and Vienna — coordinating directly with building management for smooth, scheduled access. We clean with EPA Safer Choice certified, plant-based products that are safe around pets, kids, and sensitive modern finishes.\n\nFor busy Tysons residents, we deliver premium, dependable cleaning with dedicated teams who learn both your home and your building — quality without the hassle.",
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
    name: "Kensington",
    slug: "kensington-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Kensington is a small, historic town built around one of Montgomery County's best-preserved Victorian cores — and that history is the first thing a cleaner notices. The Kensington Historic District, incorporated in 1894 and listed on the National Register in 1980, is full of large late-19th and early-20th-century homes: Queen Annes, shingle-style and Colonial Revival houses, and craftsman bungalows, many with wraparound porches, stained-glass windows, and curving brick sidewalks shaded by mature trees. The cultural heart of town is Antique Row on Howard Avenue, the largest collection of antique shops in the region — fitting for a place that takes care of old things.\n\nOlder homes like these need cleaning that respects their age. Original hardwood, intricate Victorian woodwork and trim, plaster walls, leaded and stained glass, and period tile all call for gentle, material-appropriate products and a careful hand, and the wraparound porches and older windows collect their own seasonal dust and pollen. Many Kensington homes have been lovingly renovated, too, pairing turn-of-the-century character with updated kitchens and baths.\n\nCapital Clean Care's background-checked teams know how to clean character homes without harming them, using only EPA Safer Choice certified, plant-based products that are safe for families and for delicate historic surfaces. We serve the Historic District and the surrounding neighborhoods between Wheaton and Chevy Chase with the same care.\n\nWhether it's a Victorian in the Historic District or an updated bungalow nearby, our Kensington team gives your home the attentive, eco-friendly clean its character deserves.",
    nearbySlugs: ["silver-spring-md", "wheaton-md", "bethesda-md", "rockville-md", "chevy-chase-md"],
    faqs: [
      { q: "What Kensington neighborhoods do you serve?", a: "We serve all of Kensington including the historic town center, neighborhoods along Connecticut Avenue, the areas near Rock Creek Park, and surrounding communities." },
      { q: "How much does cleaning cost in Kensington?", a: "Pricing varies by home size and service type. Kensington's Victorian and craftsman homes are priced competitively. Request a free quote for an accurate estimate." },
      { q: "Can you clean historic homes in Kensington?", a: "Yes. Our teams are experienced with older homes and use gentle, non-abrasive eco-friendly products appropriate for vintage woodwork, hardwood floors, and period details." },
      { q: "Do you offer recurring plans in Kensington?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans are available with preferred pricing and dedicated teams for Kensington residents." },
      { q: "Are your products safe for pets?", a: "Absolutely. Our plant-based, non-toxic products are safe for dogs, cats, and all household pets." },
      { q: "How quickly can I book in Kensington?", a: "Kensington is centrally located in our Montgomery County service area. We typically schedule new clients within 3-5 business days." }
    ],
    metaTitle: "Cleaning Services in Kensington, MD — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Kensington, MD. Eco-friendly products, background-checked teams serving Victorian & historic homes. Free quotes."
  },
  {
    name: "Chevy Chase",
    slug: "chevy-chase-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Chevy Chase is one of the Washington area's original streetcar suburbs, and it shows in the homes — a community of historic houses built deliberately eclectically through the 1910s and 1920s. Center-hall Colonial Revivals (the most common, built roughly 1900–1930) sit beside Tudor Revivals with steep gables and half-timbering, Dutch Colonials, Queen Annes, Georgian Revivals, and the occasional bungalow. In the incorporated villages like Section 3 — about 280 homes on a walkable grid of mature, tree-lined streets near the DC line — the streetscape feels considered rather than uniform: variety without chaos.\n\nHomes with this much age and craftsmanship reward a careful, material-aware clean. Original hardwood, plaster walls, period millwork and trim, vintage tile, and leaded or stained glass all do best with gentle, pH-appropriate products and an attentive hand — not a generic checklist. Many of these homes have also been thoughtfully renovated and expanded over the years, blending century-old detail with modern kitchens and baths that have their own care needs.\n\nCapital Clean Care's background-checked teams are trained to protect the fine finishes common in Chevy Chase's older homes, and we use only EPA Safer Choice certified, plant-based products — safe for families and for delicate period surfaces. From a center-hall colonial in the Village to a renovated Tudor near the DC line, we tailor the clean to the house.\n\nWhether you want steady recurring maintenance or a deep clean before entertaining, our Chevy Chase team delivers the detail these distinguished homes deserve.",
    nearbySlugs: ["bethesda-md", "kensington-md", "silver-spring-md", "washington-dc", "potomac-md"],
    faqs: [
      { q: "What Chevy Chase neighborhoods do you serve?", a: "We serve all of Chevy Chase, MD including the sections along Connecticut Avenue, Bradley Boulevard, East-West Highway, and the communities bordering the DC line." },
      { q: "Can you clean luxury homes in Chevy Chase?", a: "Yes. We specialize in premium home cleaning and are experienced with Chevy Chase's estate properties, fine finishes, and high-end materials." },
      { q: "Do you serve Chevy Chase condos and apartments?", a: "Yes. We clean apartments and condos in addition to single-family homes throughout Chevy Chase, MD." },
      { q: "How often should I schedule cleaning in Chevy Chase?", a: "Most Chevy Chase homeowners choose bi-weekly service for optimal maintenance. We also offer weekly, monthly, and one-time service options." },
      { q: "Are your Chevy Chase teams insured?", a: "Yes. We're fully licensed, insured, and every team member is background-checked. You're completely protected." },
      { q: "Do you use products safe for hardwood floors?", a: "Yes. Our pH-neutral, plant-based floor cleaners are specifically safe for hardwood and won't dull or damage finishes." }
    ],
    metaTitle: "Cleaning Services in Chevy Chase, MD — All Services | Capital Clean Care",
    metaDescription: "Premium house cleaning in Chevy Chase, MD. Eco-friendly products, background-checked teams for luxury homes. Serving Chevy Chase sections along Connecticut Ave. Free quotes."
  },
  {
    name: "College Park",
    slug: "college-park-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Prince George's County",
    intro: "College Park is defined by two things that sit about a mile apart: the flagship University of Maryland campus, and College Park Airport — the world's oldest continuously operating airport, where Wilbur Wright trained the first military aviators in 1909. Between and around them are the city's real neighborhoods — Old Town's craftsman bungalows near campus, Calvert Hills, Berwyn, and Lakeland — a mix of long-held family homes, faculty houses, and student rentals, now with the Purple Line and a wave of Route 1 redevelopment reshaping the corridor.\n\nThat mix shapes the cleaning. The older bungalows and mid-century homes near the university have original hardwood, plaster, and porches that want a careful, thorough hand; the student rentals and townhomes often need reliable move-in / move-out and turnover cleans around the academic calendar; and busy faculty and professional households value steady recurring service. It's a community where one team has to flex across very different homes.\n\nCapital Clean Care serves all of College Park — Old Town, Calvert Hills, Berwyn, Lakeland, and the neighborhoods near the UMD campus — with background-checked teams and EPA Safer Choice certified, plant-based products that are safe for families, students, and pets alike.\n\nWhether it's a century-old bungalow or a turnover before the fall semester, our College Park team delivers a dependable, eco-friendly clean.",
    nearbySlugs: ["silver-spring-md", "takoma-park-md", "prince-georges-county-md", "washington-dc", "laurel-md"],
    faqs: [
      { q: "Do you serve houses near the University of Maryland?", a: "Yes. We serve all College Park neighborhoods including those near the UMD campus, Old Town College Park, and surrounding residential areas." },
      { q: "Do you clean apartments and townhomes in College Park?", a: "Yes. We clean all types of residences in College Park including apartments, townhomes, condos, and single-family homes." },
      { q: "How much does cleaning cost in College Park?", a: "Pricing depends on home size and service type. College Park homes are competitively priced. Fill out our free quote form for an accurate estimate." },
      { q: "Are your products safe for families in College Park?", a: "Yes. We use only EPA Safer Choice certified, plant-based products — safe for children, pets, and allergy sufferers." },
      { q: "Can I schedule cleaning on weekends in College Park?", a: "Yes. Saturday appointments are available for College Park clients. Book early as weekend slots fill quickly." },
      { q: "Do you offer recurring plans in College Park?", a: "Yes. We offer weekly, bi-weekly, and monthly plans with preferred pricing and consistent teams for College Park residents." }
    ],
    metaTitle: "House Cleaning in College Park, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in College Park, MD. Serving families & residents near UMD. Eco-friendly, background-checked teams. Free quotes."
  },
  {
    name: "Laurel",
    slug: "laurel-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Prince George's County",
    intro: "Laurel occupies a strategic location at the meeting point of Prince George's, Howard, and Montgomery Counties, making it one of the most centrally located communities in the DMV region. With excellent highway access via I-95 and Route 1, and MARC train service for commuters, Laurel attracts residents who want connectivity without the higher price points of closer-in suburbs.\n\nLaurel's housing stock spans decades of development, from established mid-century neighborhoods in Old Town Laurel to newer townhome developments, condominiums, and single-family communities throughout the city. Capital Clean Care serves the full range of Laurel residences with professional cleaning services customized to each home's specific needs.\n\nThe city's growing commercial corridor along Route 1 and the BeltWay Plaza area have brought new investment and residents. Capital Clean Care supports Laurel's residential community with eco-friendly cleaning services that protect families and pets while delivering the clean, fresh home environment that every household deserves.",
    nearbySlugs: ["college-park-md", "bowie-md", "silver-spring-md", "columbia-md", "prince-georges-county-md"],
    faqs: [
      { q: "What Laurel neighborhoods do you serve?", a: "We serve all of Laurel including Old Town Laurel, Montpelier, Pheasant Ridge, Russett, Bond Mill, South Laurel, and surrounding communities." },
      { q: "Do you serve Prince George's and Howard County parts of Laurel?", a: "Yes. We serve all of Laurel regardless of which county the property falls in — Prince George's, Howard, or Montgomery." },
      { q: "How much does cleaning cost in Laurel?", a: "Pricing depends on home size, condition, and service type. Laurel is competitively priced. Request a free, no-obligation quote for accurate pricing." },
      { q: "Can I get same-week cleaning in Laurel?", a: "Availability depends on our current schedule. Laurel is a core service area and we often have openings. Contact us to check current availability." },
      { q: "Do you clean apartments and townhomes in Laurel?", a: "Yes. We serve all residential property types including apartments, condos, townhomes, and single-family homes throughout Laurel." },
      { q: "Are your Laurel teams background-checked?", a: "Yes. Every Capital Clean Care team member serving Laurel has passed thorough background checks. We're fully licensed and insured." }
    ],
    metaTitle: "House Cleaning in Laurel, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Laurel, MD. Serving all Laurel neighborhoods in PG, Howard & Montgomery Counties. Eco-friendly, background-checked teams. Free quotes."
  },
  {
    name: "Bowie",
    slug: "bowie-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Prince George's County",
    intro: "Bowie is one of Maryland's largest cities, and its story is written in its houses. The heart of it is Belair at Bowie — one of William Levitt's mass-planned communities from the early 1960s, where thousands of Levitt-built ranchers, Cape Cods, and split-levels went up on curving streets in models like the 'Cape Cod' and 'Country Clubber.' At its center sits the colonial-era Belair Mansion and its Stable Museum, once home to the Woodward family's Belair Stud — the farm that produced Triple Crown champions Gallant Fox and Omaha. Around that historic core, Bowie has kept growing, from Old Bowie by the railroad to the newer single-family developments of Fairwood on the city's eastern edge, with Bowie State University to the north.\n\nThose Levitt-era homes are now sixty years old — solid, family-owned, and full of original hardwood, tile, and trim that reward steady, thorough cleaning — while the newer Fairwood colonials and townhomes bring larger footprints and modern finishes. It's a city of established households where dependable recurring cleaning does the most good.\n\nCapital Clean Care serves all of Bowie — Belair, Old Bowie, Fairwood, Saddlebrook, and the neighborhoods around Allen Pond — with background-checked teams and only EPA Safer Choice certified, plant-based products that are safe for kids and pets.\n\nFor Bowie homeowners who value reliability, our team delivers the same careful, eco-friendly clean on every single visit.",
    nearbySlugs: ["laurel-md", "college-park-md", "prince-georges-county-md", "washington-dc", "silver-spring-md"],
    faqs: [
      { q: "What Bowie neighborhoods do you serve?", a: "We serve all Bowie neighborhoods including Belair, Mitchellville, Pointer Ridge, Whitehall, Bowie Town Center area, Kenilworth, Westgate, and surrounding communities." },
      { q: "How much does cleaning cost in Bowie?", a: "Pricing depends on home size and service type. Bowie homes are competitively priced. Request a free, no-obligation quote for accurate pricing tailored to your home." },
      { q: "Can I get recurring cleaning in Bowie?", a: "Yes. We offer weekly, bi-weekly, and monthly recurring plans for Bowie homes. Recurring clients receive preferred pricing and consistent team assignments." },
      { q: "Are weekend appointments available in Bowie?", a: "Yes. Saturday appointments are available for Bowie clients. Weekend slots are popular, so we recommend booking at least a week in advance." },
      { q: "Do you clean townhomes and condos in Bowie?", a: "Yes. We clean all residential property types in Bowie including townhomes, single-family homes, and condominiums." },
      { q: "Are your Bowie teams background-checked?", a: "Yes. Every team member undergoes thorough background checks. We're fully licensed and insured for your complete peace of mind." }
    ],
    metaTitle: "House Cleaning in Bowie, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Bowie, MD. Eco-friendly products, background-checked teams serving all Bowie neighborhoods. Get a free quote today."
  },
  {
    name: "Reston",
    slug: "reston-va",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    intro: "Reston was one of America's first planned communities, laid out in 1964 by Robert E. Simon — whose initials give the town its name — around a simple idea: live, work, and play woven together in the trees. That vision still defines the place. Lake Anne Plaza, the original modernist village center on the National Register, along with the four lakes, five village centers, and more than 55 miles of wooded pathways, give Reston a green, natural character unusual for the tech corridor around it. Homes here nestle into that landscape: contemporary and mid-century-modern houses on wooded lots, the original Reston townhome clusters, and newer high-rise condos rising by the Silver Line at Reston Town Center and Wiehle–Reston East.\n\nAll those trees are beautiful and messy — Reston homes pull in pollen, leaf litter, and the fine grit that comes with living in the woods, and the signature contemporary houses often pair big windows and skylights with hardwood and tile that show every mark. Townhomes and high-rise condos, by contrast, want efficient, detail-focused cleaning and easy coordination with building management.\n\nCapital Clean Care serves every corner of Reston — North Point, South Lakes, Hunters Woods, Tall Oaks, Lake Newport, and the Town Center high-rises — with background-checked teams and EPA Safer Choice certified, plant-based products that fit this environmentally minded, tech-forward community.\n\nWhether you're in a wooded contemporary or a Town Center tower, our Reston team delivers the consistent, eco-friendly clean that busy residents count on.",
    nearbySlugs: ["fairfax-va", "mclean-va", "arlington-va", "vienna-va", "falls-church-va"],
    faqs: [
      { q: "What Reston neighborhoods do you serve?", a: "We serve all of Reston including Reston Town Center, North Point, South Lakes, Lake Newport, Hunters Woods, Tall Oaks, and neighborhoods along the Silver Line corridor." },
      { q: "Do you clean high-rises and condos in Reston?", a: "Yes. We're experienced with high-rise and condominium cleaning throughout Reston, including luxury units near the Town Center and Silver Line Metro stations." },
      { q: "How much does cleaning cost in Reston?", a: "Pricing depends on home size and service type. Reston condos typically range from $150-$250 for standard cleaning. Single-family homes vary by size. Request a free quote for accurate pricing." },
      { q: "Can I get bi-weekly cleaning in Reston?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans are available with preferred pricing for Reston residents." },
      { q: "Are your products safe for tech equipment?", a: "Yes. Our plant-based, low-VOC products are safe for use around electronics. We use appropriate microfiber and cleaning methods for tech-sensitive environments." },
      { q: "Do you serve apartments near Reston Town Center?", a: "Yes. We serve all Reston Town Center area apartments and condos. Our teams coordinate with building management for access when needed." }
    ],
    metaTitle: "House Cleaning in Reston, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Reston, VA. Serving Town Center, Silver Line corridor & all Reston neighborhoods. Eco-friendly, background-checked teams. Free quotes."
  },
  {
    name: "Wheaton",
    slug: "wheaton-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Wheaton is one of the most multicultural communities in Montgomery County, and its housing has the unpretentious, mid-century character to match. In established neighborhoods like Kemp Mill and Glenmont, brick ramblers, split-levels, and Cape Cods built between the 1950s and 1970s sit behind grassy front lawns under mature oak trees, while modern townhomes and condos cluster near the Wheaton Metro. Kemp Mill in particular is a tight-knit, internationally diverse community — home to a large Jewish population and more than half a dozen synagogues — where 1980s colonials and original ramblers stand side by side.\n\nThat older mid-century stock is honest, solid, and rewards practical, thorough cleaning: hardwood under the carpet, original tile, and the dust that a home along busy Georgia Avenue and University Boulevard pulls in. Many Wheaton homes have also been renovated over the years, blending mid-century bones with updated kitchens and baths that have their own care needs.\n\nCapital Clean Care serves every Wheaton neighborhood — Kemp Mill, Glenmont, the streets around Brookside Gardens and Wheaton Regional Park, and the condos near the Metro. Our background-checked teams adapt to each home, and we use only EPA Safer Choice certified, plant-based products that are safe for the kids and pets in this family-heavy, diverse community.\n\nWhether you're near the Wheaton Metro or tucked into Kemp Mill, our team delivers reliable, eco-friendly cleaning you can count on.",
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
  },
  {
    name: "Shaw",
    slug: "shaw-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Shaw is one of DC's most historically significant and rapidly transforming neighborhoods, long celebrated as the \"Black Broadway\" era cultural heart. Today, Shaw and its neighboring Logan Circle area offer a vibrant mix of renovated Victorians, new luxury condos, and acclaimed restaurants along 14th Street and 7th Street NW. Capital Clean Care proudly serves Shaw homeowners and renters with professional eco-friendly cleaning.\n\nShaw's housing stock ranges from stunning 19th-century rowhouses meticulously preserved to sleek modern condominiums and loft conversions in former industrial buildings. Many Shaw residents are young professionals and creative types who appreciate quality services that match their aesthetic standards. Our eco-conscious products are perfect for Shaw's renters and owners who prioritize sustainable living.\n\nUrban living in Shaw means dust from nearby construction, foot traffic bringing in city grime, and compact spaces requiring efficient cleaning. Capital Clean Care's teams are trained for urban DC cleaning challenges, delivering spotless results in rowhouses, condos, and apartments alike. Whether you're near Howard University or the 9:30 Club, we've got you covered.",
    nearbySlugs: ["columbia-heights-dc", "dupont-circle-dc", "adams-morgan-dc", "capitol-hill-dc", "downtown-dc"],
    faqs: [
      { q: "What Shaw neighborhoods and areas do you serve?", a: "We serve all of Shaw including Logan Circle, the 14th Street corridor, 7th Street NW, O Street Market area, Howard University neighborhood, Blagden Alley, and all surrounding blocks." },
      { q: "Do you clean rowhouses in Shaw?", a: "Yes. Our teams are experienced with Shaw's historic Victorian rowhouses, including appropriate care for original hardwood floors, plaster walls, and period architectural details." },
      { q: "How much does house cleaning cost in Shaw, DC?", a: "Pricing depends on property type and size. Shaw condos and apartments typically range $130-$200 for standard cleaning. Historic rowhouses with multiple levels range from $200-$350+. Request a free quote for accurate pricing." },
      { q: "Do you clean condos and loft apartments in Shaw?", a: "Absolutely. We're experienced with Shaw's modern condominiums, converted loft apartments, and all types of urban residential spaces along the 14th Street and 7th Street corridors." },
      { q: "Can I get recurring cleaning service in Shaw?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans are available for Shaw residents. Recurring cleaning is especially popular with young professionals who want a consistently clean home without the hassle." },
      { q: "Are your products safe for use in Shaw apartments with shared ventilation?", a: "Yes. We exclusively use plant-based, low-VOC cleaning products that are safe for shared building environments. Our products are free from harsh chemicals and strong artificial fragrances." }
    ],
    metaTitle: "House Cleaning in Shaw, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Shaw, DC. Serving rowhouses, condos & apartments near 14th St & 7th St NW. Eco-friendly, insured teams. Free quotes."
  },
  {
    name: "Columbia Heights",
    slug: "columbia-heights-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Columbia Heights is one of DC's most diverse and energetic neighborhoods, anchored by the Columbia Heights Metro station and a commercial strip along 14th Street NW that's home to Target, Giant, and a growing roster of independent restaurants and cafes. The neighborhood's residential blocks feature a beautiful mix of DC rowhouses, historic apartment buildings, and newer mixed-use developments.\n\nLong a hub for DC's Latino community, Columbia Heights continues to evolve while maintaining its multicultural character. The housing stock includes ornate Victorian rowhouses, mid-century apartment buildings, and modern condo complexes. Capital Clean Care serves all Columbia Heights property types with professional cleaning services tailored to each unit's specific needs.\n\nThe neighborhood's urban density means residents often deal with street dust, nearby construction particulates, and the grime that comes with city living. Our eco-friendly cleaning products and thorough protocols address these challenges effectively. Whether you rent an apartment on 16th Street or own a rowhouse on Kenyon Street, Capital Clean Care delivers consistent quality.",
    nearbySlugs: ["shaw-dc", "adams-morgan-dc", "dupont-circle-dc", "downtown-dc", "washington-dc"],
    faqs: [
      { q: "What areas of Columbia Heights do you serve?", a: "We serve all of Columbia Heights including the 14th Street NW corridor, 16th Street Heights, Mount Pleasant border, Park View, Petworth corridor, and Sherman Circle area." },
      { q: "Do you clean apartments in Columbia Heights near the Metro?", a: "Yes. We clean all types of Columbia Heights residences including apartments near the Metro station, Victorian rowhouses, mid-century apartment buildings, and newer condo complexes." },
      { q: "How much does cleaning cost in Columbia Heights?", a: "Apartments typically range $130-$200 for standard cleaning. Rowhouses vary by size from $180-$320+. Request a free quote for accurate, personalized pricing for your Columbia Heights home." },
      { q: "Do you offer Spanish-language scheduling for Columbia Heights residents?", a: "We welcome all Columbia Heights residents and work to accommodate communication preferences. Contact us and we'll ensure clear communication throughout the booking and service process." },
      { q: "Can I get a deep cleaning in Columbia Heights?", a: "Yes. Deep cleaning is available throughout Columbia Heights and includes comprehensive cleaning of all surfaces, inside appliances, window tracks, baseboards, and hard-to-reach areas." },
      { q: "Are your Columbia Heights cleaning teams background-checked?", a: "Absolutely. Every Capital Clean Care team member serving Columbia Heights undergoes thorough background screening. We're fully licensed and insured for your complete peace of mind." }
    ],
    metaTitle: "House Cleaning in Columbia Heights, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Columbia Heights, DC. Serving rowhouses, apartments & condos near 14th St NW Metro. Eco-friendly teams. Free quotes."
  },
  {
    name: "Navy Yard",
    slug: "navy-yard-dc",
    state: "DC",
    stateSlug: "washington-dc",
    intro: "Navy Yard has transformed from an industrial waterfront district into one of DC's most sought-after urban neighborhoods in under a decade. Anchored by Nationals Park and the booming development along the Anacostia riverfront, Navy Yard now offers some of DC's newest and most modern residential options with stunning water views and premium amenities.\n\nThe neighborhood's housing is predominantly newer construction: luxury condominiums, modern apartment towers, and townhomes built within the last 15 years. These properties feature high-end finishes, open floor plans, and premium materials that benefit from professional, detail-oriented cleaning care. Capital Clean Care specializes in maintaining these contemporary spaces.\n\nNavy Yard residents are typically young professionals and couples who appreciate quality and convenience. Our recurring cleaning plans are especially popular here — residents love coming home to a perfectly clean space after a game at Nationals Park or dinner at one of the neighborhood's acclaimed restaurants. Let us handle the cleaning so you can enjoy everything Navy Yard has to offer.",
    nearbySlugs: ["capitol-hill-dc", "downtown-dc", "washington-dc", "shaw-dc", "columbia-heights-dc"],
    faqs: [
      { q: "What Navy Yard neighborhoods and developments do you serve?", a: "We serve all of Navy Yard including The Yards, Canal Park area, Half Street corridor, Anacostia waterfront residences, and all new residential buildings near Nationals Park." },
      { q: "Do you clean luxury condos in Navy Yard?", a: "Yes. We specialize in luxury condominium cleaning throughout Navy Yard. Our teams are experienced with premium finishes, large open-plan layouts, and the specific care required for modern construction materials." },
      { q: "How much does cleaning cost in Navy Yard, DC?", a: "Navy Yard condos and apartments typically range $140-$220 for standard cleaning depending on size. Luxury units with premium finishes may be priced accordingly. Request a free quote for accurate pricing." },
      { q: "Do you coordinate with Navy Yard building management for access?", a: "Yes. We work with building concierges and management teams throughout Navy Yard to coordinate access for our cleaning appointments. Just provide building instructions when booking." },
      { q: "Can I schedule Navy Yard cleaning around Nationals game days?", a: "Absolutely. We're familiar with Navy Yard's event schedule and can schedule around busy game days. We also offer evening cleanup services after entertainment events." },
      { q: "Do you offer move-in cleaning for new Navy Yard residents?", a: "Yes. Move-in cleaning is extremely popular in Navy Yard given the neighborhood's constant new resident turnover. We ensure your new unit is spotless before you move in." }
    ],
    metaTitle: "House Cleaning in Navy Yard, DC | Capital Clean Care",
    metaDescription: "Professional house cleaning in Navy Yard, DC. Serving luxury condos & apartments near Nationals Park & Anacostia waterfront. Eco-friendly teams. Free quotes."
  },
  {
    name: "Herndon",
    slug: "herndon-va",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    intro: "Herndon is a thriving town in Fairfax County that serves as a major hub for the technology and aerospace industries clustered along the Dulles Corridor. With direct Silver Line Metro access at the Herndon station and proximity to Dulles International Airport, Herndon attracts professionals from across the globe. The town blends a charming historic downtown with modern residential developments and corporate campuses.\n\nHerndon's housing ranges from historic Victorian homes near the downtown historic district to modern single-family homes, townhouses, and condominiums in newer communities throughout the town. The diverse housing stock accommodates first-time buyers, growing families, and tech executives alike. Capital Clean Care serves all Herndon neighborhoods with professional, eco-friendly cleaning services.\n\nThe Dulles Corridor's ongoing development means Herndon residents sometimes deal with construction-related dust and the general demands of busy professional lives. Our flexible scheduling accommodates the demanding schedules of tech workers and their families. Whether you live near the Herndon Metro station or in an established neighborhood near the town center, Capital Clean Care delivers reliable, quality cleaning.",
    nearbySlugs: ["reston-va", "falls-church-va", "tysons-va", "vienna-va", "fairfax-va"],
    faqs: [
      { q: "What Herndon neighborhoods do you serve?", a: "We serve all of Herndon including Historic Downtown Herndon, Hunters Creek, Elden Street corridor, Worldgate, Sugarland Run, Stuart Road area, and all neighborhoods throughout the town." },
      { q: "How much does cleaning cost in Herndon, VA?", a: "Pricing depends on home size and service type. Standard cleaning for a 3-bedroom Herndon home typically ranges $150-$250. Deep cleaning runs $275-$450. Request a free quote for exact pricing." },
      { q: "Do you serve tech professionals in Herndon with flexible scheduling?", a: "Yes. We understand the demanding schedules of Herndon's tech community. We offer early morning, evening, and weekend appointments to accommodate busy professional households." },
      { q: "Do you clean near the Herndon Metro station?", a: "Yes. We serve all Herndon neighborhoods including newer developments near the Silver Line Metro stations. Our teams are familiar with the entire town and its growing corridors." },
      { q: "Are your Herndon cleaning teams background-checked?", a: "Yes. Every Capital Clean Care team member is thoroughly background-screened. We're fully licensed and insured, giving Herndon homeowners complete confidence in our teams." },
      { q: "Do you offer move-in/move-out cleaning in Herndon?", a: "Yes. Move-in and move-out cleaning is available throughout Herndon. We're experienced with all Herndon property types including townhomes, single-family homes, and condominiums." }
    ],
    metaTitle: "House Cleaning in Herndon, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Herndon, VA. Serving all Herndon neighborhoods near Silver Line Metro & Dulles Corridor. Eco-friendly, insured teams. Free quotes."
  },
  {
    name: "Annandale",
    slug: "annandale-va",
    state: "VA",
    stateSlug: "virginia",
    county: "Fairfax County",
    intro: "Annandale is a vibrant unincorporated community in Fairfax County known for its exceptional Korean culinary scene, diverse residential neighborhoods, and convenient access to major employment centers. Located just 12 miles from downtown DC, Annandale offers a suburban atmosphere with excellent value — making it one of Northern Virginia's most popular communities for families and professionals.\n\nAnnandale's housing stock features a mix of 1950s-1970s suburban ranchers and split-levels, updated colonials, and newer townhouse communities. Many homes in Annandale are larger than comparable DC-area properties at better price points, giving families more space to maintain. Capital Clean Care serves all Annandale neighborhoods with professional cleaning tailored to each home's unique needs.\n\nAnnandale's wooded residential streets and mature tree canopy mean seasonal cleaning challenges: spring pollen, fall leaves tracked indoors, and year-round allergens. Our eco-friendly products effectively address these DMV-specific cleaning needs while keeping your family and pets safe. Whether you're in Sleepy Hollow, Heritage Hills, or near the Little River Turnpike corridor, Capital Clean Care is your trusted local cleaning partner.",
    nearbySlugs: ["fairfax-va", "falls-church-va", "arlington-va", "mclean-va", "vienna-va"],
    faqs: [
      { q: "What Annandale neighborhoods do you serve?", a: "We serve all of Annandale including Sleepy Hollow, Heritage Hills, Ravenwood, Mason District, Braddock Road area, Little River Turnpike corridor, Wakefield Forest, and all surrounding neighborhoods." },
      { q: "How much does house cleaning cost in Annandale, VA?", a: "Annandale's larger suburban homes are priced by size and service type. Standard cleaning for a 3-4 bedroom rancher or split-level typically ranges $160-$270. Deep cleaning runs $280-$475. Get a free quote for your specific home." },
      { q: "Do you clean older homes in Annandale?", a: "Yes. We're experienced with Annandale's 1950s-1970s housing stock including ranchers, split-levels, and colonials. We use appropriate products and techniques for older homes and their surfaces." },
      { q: "Do you serve Annandale's international community?", a: "Absolutely. Annandale's multicultural community is warmly welcomed. We serve all Annandale residents and work to ensure clear communication and consistent quality for every household." },
      { q: "Can I get recurring cleaning in Annandale?", a: "Yes. Weekly, bi-weekly, and monthly recurring plans are available throughout Annandale. Many families find bi-weekly service ideal for maintaining their larger suburban homes." },
      { q: "Are your Annandale products safe for children and pets?", a: "Yes. We exclusively use plant-based, non-toxic cleaning products throughout all Annandale homes. Our eco-friendly formulas are safe for kids, pets, and the environment." }
    ],
    metaTitle: "House Cleaning in Annandale, VA | Capital Clean Care",
    metaDescription: "Professional house cleaning in Annandale, VA. Serving all Annandale neighborhoods in Fairfax County. Eco-friendly products, background-checked teams. Free quotes."
  },
  {
    name: "North Potomac",
    slug: "north-potomac-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "North Potomac is one of Montgomery County's most affluent unincorporated communities, situated between Gaithersburg and Potomac along Route 28. The area is defined by large executive homes on generous lots, top-ranked schools, and a wooded suburban character that attracts senior executives, healthcare professionals, and government officials seeking discretion, space, and quality.\n\nNorth Potomac homes are unlike anywhere else in Montgomery County — many properties exceed 4,000 to 7,000 square feet with custom finishes, premium hardwood, imported stone, and detailed millwork that requires careful, knowledgeable cleaning. Capital Clean Care's North Potomac teams are trained specifically for high-value homes, with documented expertise in caring for premium surfaces without the abrasive chemicals that damage finishes over time.\n\nNorth Potomac's wooded estate character means seasonal cleaning challenges are amplified — heavy spring pollen drifting through screens, abundant fall leaf debris tracked indoors from large lots, and the sheer scale of estate floor plans that demands more thorough attention. Our recurring cleaning plans for North Potomac include estate-appropriate scheduling and team assignments that respect the discretion these homes require.",
    nearbySlugs: ["potomac-md", "gaithersburg-md", "rockville-md", "bethesda-md", "kentlands-md"],
    faqs: [
      { q: "Do you serve large estate homes in North Potomac?", a: "Yes. Our North Potomac teams are specifically trained to handle large executive homes ranging from 4,000 to 7,000+ square feet, including those in Travilah, Dufief, and Quince Orchard Estates. We adjust team size and scheduling to deliver thorough cleaning without rushing." },
      { q: "Can you handle premium finishes and custom millwork?", a: "Absolutely. Our North Potomac crews are trained in proper care for hardwood, marble, granite, custom stone, and detailed architectural millwork. We use only EPA Safer Choice products that are gentle on premium finishes." },
      { q: "What North Potomac neighborhoods do you cover?", a: "We serve all of North Potomac including Dufief, Travilah, Quince Orchard Estates, Seneca Crossing, and adjacent Kentlands and Lakeland communities." },
      { q: "Are your North Potomac teams discreet?", a: "Yes. Many North Potomac residents include senior executives, healthcare professionals, and government officials who require discretion. Our background-checked teams are trained on professional conduct and confidentiality standards." },
      { q: "How much does cleaning cost in North Potomac?", a: "North Potomac homes are typically larger than the county average, so pricing reflects square footage and complexity. Request a free in-home consultation for accurate pricing based on your specific property." },
      { q: "Do you offer pre-event cleaning in North Potomac?", a: "Yes. Many North Potomac clients schedule cleanings before dinner parties, holiday gatherings, and family events. We accommodate flexible scheduling to ensure the home is presentation-ready." }
    ],
    metaTitle: "House Cleaning in North Potomac, MD | Capital Clean Care",
    metaDescription: "Premium house cleaning in North Potomac, MD. Specialized care for executive homes & large estates. Eco-friendly products, discreet background-checked teams. Free quotes."
  },
  {
    name: "Boyds",
    slug: "boyds-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Boyds is a small, semi-rural community in northwestern Montgomery County where farmland, wooded lots, and residential neighborhoods create a distinctly different character from the county's suburban core. Homes here tend to sit on larger parcels, and the community retains a quiet, unhurried atmosphere even as surrounding areas like Clarksburg develop rapidly.\n\nCapital Clean Care serves Boyds with cleaning services tailored to the community's unique character — larger homes on rural lots, custom-built residences, and farmhouse-style properties that often include workshops, mudrooms, and outbuildings. Our teams understand that Boyds homes face different challenges than suburban properties: rural dust from surrounding farmland, well water mineral deposits causing fixture staining, and dense wooded lot coverage generating heavy seasonal debris.\n\nBoyds residents specifically chose this community for its rural character — many have horses, large gardens, or work-from-home setups that keep them in their homes throughout the day. Our recurring cleaning plans accommodate these schedules with flexible timing and the kind of thorough attention that larger rural homes require. Eco-friendly products are particularly valuable for Boyds homeowners who appreciate the natural surroundings their community is built around.",
    nearbySlugs: ["clarksburg-md", "damascus-md", "germantown-md", "gaithersburg-md", "frederick-md"],
    faqs: [
      { q: "Do you serve rural and semi-rural Boyds properties?", a: "Yes. Boyds is part of our Montgomery County service area, and our teams are experienced with the larger homes and rural settings common in this community. We serve properties throughout Boyds Village, West Boyds, and the surrounding areas." },
      { q: "Can you handle farmhouse-style and custom homes?", a: "Absolutely. Many Boyds homes are custom-built or farmhouse-style with unique features like mudrooms, workshops, and large family areas. We adapt our approach to each property type." },
      { q: "Do you address well water mineral deposits in Boyds?", a: "Yes. Hard water staining is common in Boyds properties using well water systems. Our crews use specialized descaling techniques and products appropriate for the mineral buildup typical in this part of Montgomery County." },
      { q: "Is there a travel fee for Boyds?", a: "No. Boyds is part of our Montgomery County service area with no additional travel charges. Pricing is based on home size and service type." },
      { q: "Can you accommodate work-from-home schedules in Boyds?", a: "Yes. Many Boyds residents work from home, and we coordinate scheduling around their workday. Flexible morning, midday, or after-work appointments are all available." },
      { q: "Do you serve agricultural or equestrian properties in Boyds?", a: "Yes. Many Boyds homes are adjacent to or include equestrian facilities and gardens. Our teams handle the additional indoor cleaning challenges these lifestyles create — hay debris, garden soil, and outdoor track-in." }
    ],
    metaTitle: "House Cleaning in Boyds, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Boyds, MD. Serving rural and semi-rural Montgomery County properties. Eco-friendly products, background-checked teams. Free quotes."
  },
  {
    name: "Brookeville",
    slug: "brookeville-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Brookeville is a nationally historic small town in eastern Montgomery County — it served as the U.S. capital for a day during the War of 1812, when President Madison took refuge in a Brookeville home while British forces burned Washington. Today the town is characterized by preserved historic homes, equestrian estates, and a slower-paced lifestyle that has intentionally resisted the development pressure that transformed neighboring communities.\n\nCapital Clean Care serves Brookeville with the careful, knowledgeable cleaning services that historic and equestrian properties require. Our teams are trained in the proper treatment of original woodwork, historic plaster, vintage tile, and antique fixtures — surfaces that demand gentle, non-abrasive techniques to preserve their character. We use only EPA Safer Choice plant-based products that are safe for delicate historic materials.\n\nBrookeville residents are historic preservation enthusiasts, equestrian families, and professionals who specifically sought out this community for its peace, character, and resistance to over-development. Our cleaning approach respects that character — discreet scheduling, careful handling of valuable items, and the kind of attention to detail that owners of historic and equestrian properties expect.",
    nearbySlugs: ["olney-md", "damascus-md", "burtonsville-md", "rockville-md", "silver-spring-md"],
    faqs: [
      { q: "Do you clean historic homes in Brookeville?", a: "Yes. Our Brookeville teams are specifically trained to handle historic properties, including proper care for original woodwork, plaster walls, vintage tile, and antique fixtures. We use only EPA Safer Choice plant-based products safe for delicate historic surfaces." },
      { q: "Can you handle equestrian properties in Brookeville?", a: "Yes. Many Brookeville homes are part of equestrian estates with adjacent stables and outbuildings. Our crews handle the additional cleaning challenges these properties face — hay and barn dust tracked indoors, outdoor debris in mudrooms, and dirt from active outdoor lifestyles." },
      { q: "What Brookeville areas do you serve?", a: "We serve all of Historic Brookeville, the Gold Mine Road corridor, the Brookeville Historic District, and surrounding properties extending toward Sandy Spring and Laytonsville." },
      { q: "Are your products safe for historic surfaces?", a: "Absolutely. Our plant-based, pH-neutral cleaning solutions are specifically chosen to be safe on original hardwood, vintage tile, plaster, and antique materials. We never use harsh chemicals that could damage delicate historic surfaces." },
      { q: "Do you offer scheduled recurring cleaning in Brookeville?", a: "Yes. Bi-weekly and monthly recurring plans are popular in Brookeville. The slower pace of the community fits well with consistent recurring service." },
      { q: "Are your Brookeville teams discreet?", a: "Yes. Brookeville residents value privacy and quiet, and our teams are trained on appropriate conduct for the community. Many residents prefer specific scheduled times to maintain the peaceful character of the area." }
    ],
    metaTitle: "House Cleaning in Brookeville, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in historic Brookeville, MD. Specialized care for historic and equestrian properties. Eco-friendly products, careful background-checked teams. Free quotes."
  },
  {
    name: "Mount Airy",
    slug: "mount-airy-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Carroll County / Frederick County",
    intro: "Mount Airy straddles the Carroll and Frederick county lines at the highest elevation point along the I-70 corridor, giving it a distinct character as a commuter crossroads with small-town roots. The historic downtown anchors a community that has grown significantly with new residential development while maintaining its identity as a place where neighbors know each other.\n\nCapital Clean Care serves Mount Airy with cleaning services tailored to the community's mix of established village-style homes near downtown and newer suburban subdivisions in Twin Ridge, Linganore Estates, and Parr's Ridge. Our teams adapt their approach to each property type, whether it's an older home with character details or a newer home with modern open floor plans.\n\nMount Airy sits at 900+ feet elevation, which means winter arrives earlier and spring comes later than the rest of Maryland. The agricultural surroundings contribute heavy seasonal pollen from April through June, and the elevation means harder water deposits and longer winters affecting indoor air quality. Our cleaning protocols adjust seasonally to address these specific Mount Airy conditions, and our recurring plans are popular for the consistency they provide year-round.",
    nearbySlugs: ["damascus-md", "frederick-md", "new-market-md", "monrovia-md", "urbana-md"],
    faqs: [
      { q: "Do you serve both Carroll and Frederick County sides of Mount Airy?", a: "Yes. We serve all of Mount Airy regardless of which county side your home is on. Our teams cover Mount Airy Village, Twin Ridge, Linganore Estates, Parr's Ridge, and the surrounding rural areas." },
      { q: "How much does cleaning cost in Mount Airy?", a: "Mount Airy homes vary widely in size — from older village-style homes to newer suburban properties. Pricing depends on bedrooms, bathrooms, and condition. Request a free quote for accurate pricing." },
      { q: "Do you address hard water deposits in Mount Airy?", a: "Yes. Hard water mineral deposits are common in Carroll and Frederick County properties, particularly those using well water. Our descaling techniques and specialized products handle this effectively." },
      { q: "Can you accommodate Mount Airy's commuter schedules?", a: "Yes. Many Mount Airy residents commute to Frederick, Gaithersburg, or Baltimore with long workdays. We coordinate scheduling around demanding commutes — early morning, evening, or weekend appointments are all options." },
      { q: "Do you handle agricultural pollen seasonally?", a: "Yes. Mount Airy's agricultural surroundings mean heavy spring pollen and seasonal debris from the surrounding farmland. Our seasonal protocols include extra dusting and surface cleaning during peak pollen months." },
      { q: "Are your teams familiar with Mount Airy's elevation effects?", a: "Yes. Mount Airy's 900+ foot elevation creates earlier winter, later spring, and more pronounced humidity and cold cycles than lower-elevation Maryland communities. Our teams adjust technique accordingly." }
    ],
    metaTitle: "Cleaning Services in Mount Airy, MD — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Mount Airy, MD. Serving both Carroll and Frederick County sides of Mount Airy. Eco-friendly products, background-checked teams. Free quotes."
  },
  {
    name: "Kentlands",
    slug: "kentlands-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Kentlands is one of the most celebrated New Urbanist planned communities in America — a walkable, architecturally intentional neighborhood in Gaithersburg built since 1991 around town squares, front porches, and pedestrian streets. It has consistently ranked as one of the most desirable addresses in Montgomery County, and homes in Kentlands command premium prices because of the community's unique design and active lifestyle.\n\nCapital Clean Care serves Kentlands with cleaning services tailored to the community's distinctive home typology. Many Kentlands homes feature wood trim, detailed facades, front porches, and open floor plans that circulate dust differently than standard suburban construction. The community's walkability means homes see more foot traffic, and the front porch culture means outdoor debris tracks in more readily than in typical suburban communities.\n\nKentlands residents are a mix of young professionals, growing families, and long-time homeowners who chose this community specifically for its walkability, community events, and design-forward character. Our cleaning teams are experienced with the architectural details characteristic of New Urbanist homes and the HOA standards that residents take seriously. We serve all of Kentlands, Lakelands, Crown Farm, and the surrounding Gaithersburg community.",
    nearbySlugs: ["gaithersburg-md", "north-potomac-md", "rockville-md", "germantown-md", "potomac-md"],
    faqs: [
      { q: "Do you serve all of Kentlands and Lakelands?", a: "Yes. We serve Kentlands proper, Lakelands, Crown Farm, the Washingtonian Center area, Great Seneca Crossing, and the surrounding Gaithersburg community. Our crews are familiar with the New Urbanist home typology unique to this area." },
      { q: "Can you handle Kentlands' architectural details?", a: "Absolutely. Kentlands homes feature wood trim, detailed facades, front porches, and architectural elements that require attentive cleaning. Our teams are trained to handle these details properly without damage." },
      { q: "Are your teams aware of Kentlands HOA standards?", a: "Yes. Kentlands' HOA standards apply to certain shared facilities and exterior elements. Our cleaning focus is interior, but we're respectful of community standards and can coordinate with HOA-managed common areas if needed." },
      { q: "How does Kentlands' walkability affect cleaning needs?", a: "Walkable, pedestrian-friendly Kentlands means homes see more foot traffic and more outdoor debris is tracked in. Front porch culture in particular brings in extra outdoor material. Our cleaning addresses these specific patterns with extra entryway and floor attention." },
      { q: "How much does cleaning cost in Kentlands?", a: "Kentlands homes vary in size from townhomes to single-family. Pricing depends on bedrooms, bathrooms, and condition. Request a free quote for accurate pricing tailored to your specific Kentlands home." },
      { q: "Do you offer recurring cleaning in Kentlands?", a: "Yes. Bi-weekly recurring is the most popular frequency for Kentlands families. Weekly is common for higher-traffic households. Recurring clients receive preferred pricing and dedicated team assignments." }
    ],
    metaTitle: "Cleaning Services in Kentlands, MD — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in Kentlands, MD. Specialized care for New Urbanist homes in Kentlands, Lakelands & Crown Farm. Eco-friendly products, background-checked teams. Free quotes."
  },
  {
    name: "North Bethesda",
    slug: "north-bethesda-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "North Bethesda is the most vertical, condo-heavy community we serve in Montgomery County — and cleaning here is largely about apartments, high-rises, and building logistics. The Pike District around Rockville Pike, White Flint, and Pike & Rose is dense with low-, mid-, and high-rise condominiums, from the 15-story Forum (1973) to newer towers like 930 Rose Avenue (2018), with thousands more units being built. A few blocks off the Pike, garden- and townhouse-style condos from the 1980s and 90s offer lower-density living, and established neighborhoods like Garrett Park Estates and Luxmanor add single-family homes to the mix.\n\nCleaning a condo or high-rise unit is its own discipline. It's about efficient, building-aware service — coordinating elevator and loading-dock access, parking, and secure key, fob, or front-desk entry, and working respectfully in shared buildings. Residents here skew toward busy professionals near the White Flint Metro who want their place consistently fresh without lifting a finger, so reliability and a clean that's done right while they're at work matter most.\n\nCapital Clean Care's background-checked teams handle North Bethesda buildings smoothly — we're used to unattended access, building rules, and tight turnarounds — and we use only EPA Safer Choice certified, plant-based products, a real plus in well-sealed modern units with less ventilation. From a Pike & Rose high-rise to a townhouse condo near White Flint or a single-family home in Luxmanor, we fit the service to the home.\n\nWhether you want a recurring clean for your condo or a one-time deep clean before a move, our North Bethesda team delivers consistent results around your building and your schedule.",
    nearbySlugs: ["bethesda-md", "rockville-md", "kensington-md", "chevy-chase-md", "gaithersburg-md"],
    faqs: [
      { q: "What North Bethesda neighborhoods do you serve?", a: "We serve all North Bethesda neighborhoods including White Flint, Luxmanor, Garrett Park Estates, Nicholson Lane corridor, and surrounding areas." },
      { q: "Do you clean condos and high-rises in North Bethesda?", a: "Yes, we regularly clean condos, apartments, and high-rise units throughout North Bethesda including buildings near the White Flint Metro." },
      { q: "How much does cleaning cost in North Bethesda?", a: "Pricing depends on home size and service type. Request a free, no-obligation quote for your specific North Bethesda residence." },
      { q: "Are your cleaners background-checked?", a: "Yes. Every Capital Clean Care team member passes a thorough background check before joining our team. We are fully licensed, bonded, and insured." },
      { q: "Do you offer recurring cleaning plans in North Bethesda?", a: "Yes, we offer weekly, bi-weekly, and monthly recurring plans with preferred pricing for North Bethesda clients." }
    ],
    metaTitle: "Cleaning Services in North Bethesda, MD — All Services | Capital Clean Care",
    metaDescription: "Professional house cleaning in North Bethesda, MD. Eco-friendly products, background-checked teams, flexible scheduling. Serving all North Bethesda neighborhoods. Free quotes."
  },
  {
    name: "Olney",
    slug: "olney-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Olney is a quieter, semi-rural corner of northern Montgomery County, sitting at the crossroads of Georgia Avenue and Olney-Laytonsville Road about 13 miles north of DC — and it's overwhelmingly a detached-home community. Most neighborhoods were built between the 1960s and the early 2000s, so the inventory is mostly spacious single-family colonials and split-levels with yards, driveways, and cul-de-sacs, in communities like Brooke Manor Estates and Norbeck Estates near the Norbeck Country Club. Townhomes and a handful of condos round things out, but this is a land of big family homes.\n\nThose larger homes shape the work: multiple levels, finished basements, and big kitchens reward the kind of methodical, top-to-bottom cleaning that smaller condos don't need. And with the area's mature trees, gardens, and semi-rural surroundings, pollen and outdoor dust find their way in, so consistency matters. Olney's roots run deep — the area began as 1700s farmland, and historic Brookeville sits just two miles north — and homeowners here tend to take real pride in their properties.\n\nCapital Clean Care brings thorough, eco-friendly cleaning to Olney's family homes. Our background-checked teams are experienced with the detailed work large single-family houses require, and we use only EPA Safer Choice certified, plant-based products that are safe for children, pets, and the natural surroundings that make Olney special.\n\nWhether it's a recurring clean to keep a busy family home effortless or a deep clean of a finished basement and large kitchen, our Olney team gives you back your weekends.",
    nearbySlugs: ["damascus-md", "burtonsville-md", "clarksburg-md", "gaithersburg-md", "rockville-md"],
    faqs: [
      { q: "What Olney neighborhoods do you serve?", a: "We serve all Olney neighborhoods including Olney Mill, Olney Outside, Ashton, and surrounding communities along Route 108." },
      { q: "How far in advance do I need to book in Olney?", a: "We recommend booking 3–5 days in advance. For recurring clients, your schedule is held automatically." },
      { q: "Do you bring your own supplies to Olney homes?", a: "Yes. Our teams arrive fully equipped with eco-friendly products and professional equipment." },
      { q: "Can you handle large Olney homes with multiple floors?", a: "Absolutely. We regularly service large single-family homes and price based on bedrooms and bathrooms." },
      { q: "Are you insured to work in Olney?", a: "Yes, Capital Clean Care is fully licensed, bonded, and insured in Maryland." }
    ],
    metaTitle: "House Cleaning Services in Olney, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Olney, MD. Eco-friendly products, background-checked teams, flexible scheduling for Olney families. Montgomery County's trusted cleaning service. Free quotes."
  },
  {
    name: "Hyattsville",
    slug: "hyattsville-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Prince George's County",
    intro: "Hyattsville is a vibrant, arts-focused community in Prince George's County with a diverse population and a rich mix of housing styles — from early-20th-century bungalows and colonials in the Arts District to modern apartments near the Prince George's Plaza Metro. Capital Clean Care provides reliable, eco-friendly cleaning for Hyattsville homeowners and renters who value quality and consistency.\n\nHyattsville's proximity to Washington DC and the University of Maryland makes it a hub for young professionals and families. Our flexible scheduling and same-week availability accommodate busy lifestyles, while our plant-based products are ideal for older homes that may have sensitivities to harsh chemical cleaners.\n\nWe serve all Hyattsville neighborhoods with standard cleaning, deep cleaning, move-in/move-out services, and recurring plans.",
    nearbySlugs: ["college-park-md", "takoma-park-md", "bowie-md", "washington-dc", "silver-spring-md"],
    faqs: [
      { q: "What Hyattsville areas do you serve?", a: "We serve all Hyattsville neighborhoods including the Arts District, University Hills, Queens Chapel Manor, and areas near the Prince George's Plaza Metro." },
      { q: "Do you clean apartments and rental units in Hyattsville?", a: "Yes, we offer move-in/move-out cleaning and recurring cleaning for Hyattsville apartments and rental properties." },
      { q: "How much does cleaning cost in Hyattsville?", a: "Pricing is based on home size and service type. Contact us for a free, no-obligation quote specific to your Hyattsville home." },
      { q: "Are your cleaners background-checked?", a: "Yes. Every team member passes a thorough background check and we are fully licensed, bonded, and insured." },
      { q: "Do you offer eco-friendly cleaning in Hyattsville?", a: "Yes, all our products are plant-based and EPA Safer Choice certified — safe for children, pets, and older home finishes." }
    ],
    metaTitle: "House Cleaning Services in Hyattsville, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Hyattsville, MD. Eco-friendly, background-checked cleaning teams serving all Hyattsville neighborhoods. Prince George's County trusted service. Free quotes."
  },
  {
    name: "Burtonsville",
    slug: "burtonsville-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Burtonsville is a quiet, family-oriented community in the northeastern corner of Montgomery County, known for its suburban calm, good schools, and convenient access to both I-95 and Route 29. Homes here are predominantly single-family with spacious yards, and residents take pride in keeping their properties in excellent condition.\n\nCapital Clean Care serves Burtonsville families with the same eco-friendly, professional cleaning that homeowners across Montgomery County trust. Whether you need a one-time deep clean, regular maintenance, or a thorough move-in/move-out cleaning, our background-checked teams handle every visit with care and consistency.\n\nOur plant-based products are safe for children and pets — ideal for the family-focused households throughout Burtonsville.",
    nearbySlugs: ["olney-md", "damascus-md", "silver-spring-md", "laurel-md", "columbia-md"],
    faqs: [
      { q: "What Burtonsville areas do you cover?", a: "We serve all Burtonsville neighborhoods and surrounding communities along Route 29 and the I-95 corridor in northeastern Montgomery County." },
      { q: "Can I get same-week cleaning in Burtonsville?", a: "Yes, we often have availability within the same week. Contact us to confirm the earliest slot in Burtonsville." },
      { q: "Do you bring cleaning supplies to Burtonsville homes?", a: "Yes. All supplies and equipment are included. Our eco-friendly products are safe for children and pets." },
      { q: "Are you licensed and insured in Maryland?", a: "Yes, Capital Clean Care is fully licensed, bonded, and insured throughout Maryland including Burtonsville." },
      { q: "Do you offer recurring cleaning in Burtonsville?", a: "Yes, we offer weekly, bi-weekly, and monthly recurring plans with preferred pricing and a dedicated team." }
    ],
    metaTitle: "House Cleaning Services in Burtonsville, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Burtonsville, MD. Eco-friendly products, background-checked teams. Serving Burtonsville and surrounding Montgomery County communities. Free quotes."
  },
  {
    name: "Montgomery Village",
    slug: "montgomery-village-md",
    state: "MD",
    stateSlug: "maryland",
    county: "Montgomery County",
    intro: "Montgomery Village is a large planned community in Gaithersburg offering an array of housing types — from garden condos and townhomes to single-family homes across more than a dozen distinct villages. With lake access, parks, and a strong homeowners association culture, residents here maintain high standards for their properties.\n\nCapital Clean Care provides eco-friendly, professional house cleaning tailored to the variety of homes throughout Montgomery Village. Our experienced teams understand the layout and character of planned community homes and deliver consistent, detailed cleaning on every visit.\n\nWhether you need standard upkeep, a deep clean for a special occasion, or a recurring plan that keeps your home consistently fresh, we serve all Montgomery Village neighborhoods with the same commitment to quality and reliability.",
    nearbySlugs: ["gaithersburg-md", "germantown-md", "rockville-md", "north-bethesda-md", "clarksburg-md"],
    faqs: [
      { q: "Which Montgomery Village neighborhoods do you serve?", a: "We serve all Montgomery Village neighborhoods including Stedwick, Whetstone, Watkins Mill, Sequoyah, and all other villages within the community." },
      { q: "Do you clean townhomes and condos in Montgomery Village?", a: "Yes, we regularly clean all housing types in Montgomery Village including condos, townhomes, and single-family homes." },
      { q: "How is pricing determined for Montgomery Village homes?", a: "Pricing is based on the number of bedrooms and bathrooms and the type of service. Request a free quote for your specific home." },
      { q: "Are your products safe for HOA-sensitive communities?", a: "Yes, our plant-based, non-toxic products are safe for all home types and leave no harsh chemical residues." },
      { q: "Can I get recurring service in Montgomery Village?", a: "Yes, we offer weekly, bi-weekly, and monthly plans. Recurring clients receive preferred pricing and a consistent dedicated team." }
    ],
    metaTitle: "House Cleaning Services in Montgomery Village, MD | Capital Clean Care",
    metaDescription: "Professional house cleaning in Montgomery Village, MD. Eco-friendly products, background-checked teams. Serving all Montgomery Village neighborhoods in Gaithersburg. Free quotes."
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
