// Unique content overrides + real team photo galleries for priority Tier-1
// service-location pages. These pages were crawled but not indexed by Google
// due to thin/templated content. Adding unique paragraphs + original photos
// gives each page distinct, indexable value.

export interface TeamPhoto {
  src: string;
  alt: string;
}

export interface ServiceLocationOverride {
  uniqueContent: string;
  photos: TeamPhoto[];
}

// Key format: "citySlug/serviceSlug"
export const serviceLocationOverrides: Record<string, ServiceLocationOverride> = {

  "rockville-md/deep-cleaning": {
    uniqueContent: `Rockville's I-270 corridor brings a unique mix of biotech professionals and growing families to neighborhoods like Fallsgrove and King Farm — communities with newer construction that, despite looking pristine on the surface, accumulate fine drywall dust, HVAC particulates, and grout grime faster than residents expect. Our deep cleaning teams in Rockville use HEPA-filtered vacuums rated for construction-grade dust and a power-scrubbing buffer on tile and grout that standard mops can't match. We've cleaned everything from the high-traffic entry tiles of Fallsgrove townhouses to the original hardwood floors of Twinbrook ramblers built in the 1950s — and we adjust our technique to each surface.

One thing Rockville clients consistently tell us: bathrooms and kitchens in homes that had renters, or were recently renovated, hold onto grime in places no one checks during a routine clean — behind the toilet base, inside oven door glass, along window track channels, and in the grooves of cabinet pull hardware. Our deep cleaning checklist was built by going through hundreds of Rockville homes and noting every spot that gets missed. That list is what our crews work from, room by room, on every deep clean visit.`,
    photos: [
      { src: "/images/team/scrubbing-door-frame.jpg", alt: "Capital Clean Care team member scrubbing door frame during deep cleaning in Rockville, MD" },
      { src: "/images/team/power-scrubber-tile.jpg", alt: "Capital Clean Care team using power scrubber on tile floor — deep cleaning service in Rockville, MD" },
      { src: "/images/team/cleaning-under-cabinet.jpg", alt: "Capital Clean Care cleaner reaching under cabinet during thorough deep cleaning in Rockville, MD" },
    ],
  },

  "rockville-md/eco-friendly-cleaning": {
    uniqueContent: `Rockville's proximity to the NIH campus and the biotech corridor along I-270 means many households include scientists, physicians, and public health professionals who understand exactly what's in conventional cleaning products — and why it matters. We use exclusively EPA Safer Choice certified, plant-based formulas on every visit: no synthetic fragrances, no bleach, no ammonia, no petroleum-derived surfactants. The same rigor you apply professionally, we apply in your home.

Rockville families with young children and pets are the core of our eco-friendly cleaning client base. Montgomery County's hard water (averaging 180–200 mg/L hardness) actually makes eco-friendly products a practical choice, not just an ethical one: our citric-acid-based descalers outperform bleach on bathroom fixtures and leave no chemical residue on surfaces where children play. We bring all supplies and use reusable, OEKO-TEX certified microfiber cloths laundered between visits — nothing disposable, nothing wasteful, nothing that ends up in the Chesapeake Bay watershed.`,
    photos: [
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care team member with eco-friendly cleaning products — Rockville, MD eco cleaning service" },
      { src: "/images/team/wiping-door-microfiber.jpg", alt: "Capital Clean Care team member wiping surface with plant-based cleaner in Rockville, MD" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — eco-friendly house cleaning in Rockville, MD" },
    ],
  },

  "rockville-md/apartment-cleaning": {
    uniqueContent: `Apartment cleaning in Rockville requires a different approach than single-family homes. Whether you're in one of the newer high-rise units near Rockville Town Square, a garden apartment in the Twinbrook corridor, or a townhouse condo in King Farm, our team works efficiently within your building's quiet hours and elevator access windows. We coordinate with property management, bring compact equipment sized for hallways and tight kitchens, and deliver thorough results without blocking building common areas.

Rockville apartment renters consistently book us for two moments: move-out cleans to maximize their security deposit return, and post-move-in deep cleans before settling in. Both require the same thing — a team that knows what Rockville property managers actually inspect. We've walked enough Rockville apartments through final walkthroughs to know that the areas that cost tenants their deposits are almost always the same: kitchen appliance interiors, bathroom grout and caulk lines, window tracks, and the baseboard behind the bathroom door. Our apartment cleaning checklist is built around exactly those areas.`,
    photos: [
      { src: "/images/team/cleaning-appliances.jpg", alt: "Capital Clean Care team member cleaning kitchen appliances in Rockville, MD apartment" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team member vacuuming apartment living room in Rockville, MD" },
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team mopping hardwood floor — apartment cleaning in Rockville, MD" },
    ],
  },

  "bethesda-md/house-cleaning": {
    uniqueContent: `Bethesda homes demand a different standard than most markets. Between the pre-war Tudors on Bradley Boulevard, the modern steel-and-glass condos along Wisconsin Avenue, and the sprawling colonials in Kenwood, no two Bethesda properties clean the same way. Our teams are specifically trained for Bethesda's premium surface mix: carrera marble countertops, wide-plank white oak floors, coffered ceilings with crown molding, and custom millwork that requires soft-touch technique rather than the scrubbing that works on standard materials.

Bethesda clients tend to have high standards and low tolerance for inconsistency — which is exactly why we assign dedicated teams rather than rotating strangers. Your team learns your home's quirks: which fixtures stain from the area's hard water, which floor sections show footprints fastest, how you prefer your decorative items repositioned after cleaning. That continuity is the difference between a cleaning service and a cleaning relationship, and it's why our Bethesda client retention rate is among the highest of any market we serve.`,
    photos: [
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team cleaning spacious home in Bethesda, MD — professional house cleaning service" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning window blinds in Bethesda, MD home" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care professional in uniform — house cleaning service in Bethesda, MD" },
    ],
  },

  "bethesda-md/post-construction-cleaning": {
    uniqueContent: `Bethesda sees some of the most active high-end renovation activity in the DMV — kitchen overhauls, master suite additions, full-house gut rehabs on older Chevy Chase and Edgemoor properties. Construction dust is unlike any other kind: it's silica-based, sub-micron in size, and it infiltrates HVAC ducts, coats window mullions, and embeds in grout within days of a project wrapping. Standard cleaning equipment doesn't capture it — you need HEPA-filtered vacuums with sealed bags and microfiber rated for fine particles.

Our Bethesda post-construction cleaning teams work through a three-phase protocol: first pass removes bulk debris and construction materials; second pass targets all horizontal and vertical surfaces with appropriate technique by material type (marble, stone, paint, glass, metal, wood); third pass is a detail-inspection walk where a team lead checks every surface in raking light to catch anything missed. Bethesda renovation clients often ask us to coordinate timing with their contractor's punch-list walk — we stage our service so the space is presentation-ready for that final inspection.`,
    photos: [
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team cleaning a newly renovated home in Bethesda, MD — post-construction cleaning service" },
      { src: "/images/team/cleaning-under-cabinet.jpg", alt: "Capital Clean Care team member cleaning under new cabinetry after renovation in Bethesda, MD" },
      { src: "/images/team/cleaning-kitchen-detail.jpg", alt: "Capital Clean Care team member detailing new kitchen after construction in Bethesda, MD" },
    ],
  },

  "silver-spring-md/deep-cleaning": {
    uniqueContent: `Silver Spring's mid-century housing stock — the ramblers and split-levels along Colesville Road, the brick colonials in Forest Glen, the bungalows near Woodside — carries the kind of embedded grime that only a deep cleaning protocol can address. Older homes in Silver Spring typically have original tile grout that's been grouted since the 1960s, radiator covers with decades of dust accumulation, and oak floors that have seen layer after layer of wax build up over the years. Our team has the tools and the training for all of it.

One pattern we see consistently in Silver Spring deep cleaning visits: bathrooms in older homes have caulk lines and grout between tile sections that hold mineral deposits from the area's hard water, and standard cleaners don't dissolve calcium scale without heavy scrubbing. We use professional-grade citric acid descalers that penetrate and lift mineral deposits without damaging grout or tile glaze — leaving bathroom fixtures looking genuinely restored rather than just wiped down. The before-and-after difference on a Silver Spring bathroom deep clean is usually dramatic.`,
    photos: [
      { src: "/images/team/power-scrubber-tile.jpg", alt: "Capital Clean Care team using power scrubber on tile during deep cleaning in Silver Spring, MD" },
      { src: "/images/team/power-scrubber-tile-2.jpg", alt: "Capital Clean Care deep cleaning tile and grout in Silver Spring, MD bathroom" },
      { src: "/images/team/scrubbing-door-frame.jpg", alt: "Capital Clean Care team member scrubbing detail areas during deep cleaning in Silver Spring, MD" },
    ],
  },

  "chevy-chase-md/house-cleaning": {
    uniqueContent: `Chevy Chase sits at the intersection of Montgomery County affluence and DC proximity — residents here typically commute to K Street law firms, Georgetown University, or Capitol Hill, and their homes reflect both the investment they've made and the pace they keep. Our Chevy Chase house cleaning teams are selected for discretion, attention to premium surfaces, and consistency. We understand that a Georgian colonial on Bradley Lane is not the same job as a modern condo on Wisconsin Avenue, and we staff accordingly.

Chevy Chase households often include children in competitive private schools, formal entertaining spaces used regularly, and outdoor areas — porches, stone terraces, sunrooms — that connect to interior spaces and track seasonal debris inside daily. Our house cleaning service in Chevy Chase includes particular attention to these high-traffic transition zones, entryway floors, and the baseboards and floor vents that collect everything that comes in from the manicured yards outside. We schedule with the same priority as a premium service — your time is limited, and we deliver without requiring supervision.`,
    photos: [
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning windows in Chevy Chase, MD home" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning in Chevy Chase, MD" },
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care team cleaning a Chevy Chase, MD home — professional house cleaning service" },
    ],
  },

  "gaithersburg-md/house-cleaning": {
    uniqueContent: `Gaithersburg's rapid growth through Kentlands, Lakelands, Crown Farm, and Rio has brought thousands of newer homes to the area — modern open floor plans with quartz countertops, luxury vinyl plank floors, and light-colored painted cabinetry that shows every fingerprint and water mark. These homes look stunning when clean and distinctly mediocre when they're not. Our Gaithersburg house cleaning teams specialize in exactly these surfaces: streak-free technique on quartz, gentle yet effective care for LVP flooring, and smudge-free results on semi-gloss painted surfaces.

Many Gaithersburg families include young children and one or more pets — a combination that means the kitchen floor, the mudroom, and the family room carpet get heavy use every single day. We use plant-based, fragrance-free formulas on all high-contact surfaces in these areas: no synthetic fragrances that affect infants, no residue that's harmful if a pet licks the floor after cleaning. Our Gaithersburg clients consistently tell us that what keeps them on our recurring schedule is knowing the products we use are genuinely safe for their household, not just marketed as such.`,
    photos: [
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care team cleaning a Gaithersburg, MD home — two-person professional cleaning crew" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member mopping floor in Gaithersburg, MD home" },
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team member mopping hardwood floor — house cleaning in Gaithersburg, MD" },
    ],
  },

  "gaithersburg-md/move-in-cleaning": {
    uniqueContent: `Moving into a Gaithersburg home — whether a brand-new build in Crown Farm or a resale in Kentlands — deserves a move-in clean that actually sanitizes the space before your family's first night. New construction in Gaithersburg often has fine drywall dust in HVAC vents, construction residue on cabinet interiors and hardware, and paint overspray on window glass and trim that the builder's cleaning crew didn't address. Resale homes have a different issue: cleaning standards between owners vary wildly, and the previous resident's cleaning habits (or lack thereof) often only become visible after you move in.

Our Gaithersburg move-in cleaning teams follow a protocol designed specifically for pre-occupancy deep sanitization: HVAC vent covers removed and vacuumed, all cabinet and drawer interiors wiped clean with disinfecting solution, appliance interiors cleaned and deodorized, window tracks and sills cleared of construction residue and dust, and all bathroom and kitchen fixtures descaled and sanitized. We finish with a detailed walk-through before we leave, and our satisfaction guarantee means we return free if anything doesn't meet the standard you paid for.`,
    photos: [
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team doing move-in cleaning in a new Gaithersburg, MD home" },
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team member preparing home for move-in — floor cleaning in Gaithersburg, MD" },
      { src: "/images/team/cleaning-kitchen-detail.jpg", alt: "Capital Clean Care team member detailing kitchen before move-in in Gaithersburg, MD" },
    ],
  },

  "germantown-md/house-cleaning": {
    uniqueContent: `Germantown's HOA-managed communities — Churchill Village, Clopper Mill, Milestone, Crystal Rock — have a specific dynamic: property standards are high, common areas are maintained professionally, and homeowners feel pressure to keep their units at a matching level. Our Germantown house cleaning clients often tell us they started using a service when they realized their neighbors' homes always looked move-in ready. Consistency matters in a community where people notice.

Germantown townhouses and condos have a characteristic floor plan that our teams know well: galley kitchens with limited counter space that accumulate clutter, upper-level laundry that requires careful attention to the machines and surrounding surfaces, and lower-level family rooms or rec spaces with carpet that traps pet hair and dust. Our Germantown house cleaning visits address all of this with a top-down, room-by-room protocol that doesn't cut corners just because the square footage is smaller than a detached home. Every visit is consistent, every team is the same, and our scheduling always respects HOA access windows.`,
    photos: [
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning service in Germantown, MD" },
      { src: "/images/team/wiping-door-microfiber.jpg", alt: "Capital Clean Care team member detailing surfaces in Germantown, MD home" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team member vacuuming living room in Germantown, MD" },
    ],
  },

  "north-bethesda-md/house-cleaning": {
    uniqueContent: `North Bethesda has evolved rapidly with Pike & Rose bringing luxury residential towers, boutique retail, and food halls to what used to be the White Flint Mall site. The new residents — many of them young professionals working in Bethesda's healthcare and finance sectors — live in modern apartments and townhouses with high-end finishes: quartz countertops, engineered hardwood, large-format tile in bathrooms, and floor-to-ceiling windows that show every streak. Cleaning these surfaces correctly requires product knowledge and technique that goes beyond general-purpose cleaning.

Alongside the new Pike & Rose developments, the established neighborhoods of Randolph Hills, Garrett Park, and Luxmanor have 1950s–70s single-family homes with original hardwood floors, plaster walls, and older bathrooms that need a different approach entirely. Our North Bethesda teams are comfortable with both ends of the spectrum — the gleaming modern high-rise and the lovingly maintained Cape Cod — adjusting technique and products for each surface type while delivering the same thorough result.`,
    photos: [
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care team cleaning a North Bethesda, MD home — professional house cleaning service" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning windows and blinds in North Bethesda, MD" },
      { src: "/images/team/wiping-door-microfiber.jpg", alt: "Capital Clean Care team member cleaning surfaces in North Bethesda, MD home" },
    ],
  },

  "north-bethesda-md/recurring-cleaning": {
    uniqueContent: `North Bethesda professionals and families who use our recurring cleaning plan stop thinking about cleaning entirely — which is exactly the point. Whether you're in a Pike & Rose high-rise with a busy Monday-through-Friday schedule or a Randolph Hills single-family home with kids and a dog, a consistent bi-weekly cleaning plan from a team that knows your space is fundamentally different from booking a one-off clean.

Your dedicated North Bethesda recurring team builds a profile of your home: which floors need gentle care, how you prefer counters cleared, whether the kids' rooms get a light tidy or a thorough clean, and when you typically have guests and need everything especially sharp. Over time, our teams also catch things before they become problems — a developing soap scum buildup in the shower before it calcifies, a spot on the grout that needs professional descaling, a window frame that's collecting too much dust between visits. That proactive attention is why our recurring clients in North Bethesda tend to stay with us for years.`,
    photos: [
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team member on recurring cleaning visit in North Bethesda, MD" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team member vacuuming during recurring cleaning in North Bethesda, MD" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — recurring cleaning service in North Bethesda, MD" },
    ],
  },

  "wheaton-md/apartment-cleaning": {
    uniqueContent: `Wheaton's mix of Metro-accessible apartments along the Georgia Avenue corridor and the Glenmont area creates a specific apartment cleaning demand: higher-turnover units, diverse floor plan layouts, and residents who often need both move-out and move-in cleans coordinated around lease transitions. We work with Wheaton tenants and landlords alike — and our apartment cleaning checklist was developed with Montgomery County security deposit standards in mind.

Wheaton apartment cleaning has a distinct practical consideration: building elevator access and loading dock windows are often limited, which means our teams arrive exactly on time with equipment sized for efficient transport. We work within your building's rules, complete the work in a single visit, and leave the unit ready for inspection. For tenants moving out, we document the clean with photos on request — practical protection if a landlord later disputes the condition. Wheaton's rental market moves fast, and we schedule with the urgency the timeline requires.`,
    photos: [
      { src: "/images/team/cleaning-appliances.jpg", alt: "Capital Clean Care team member cleaning kitchen appliances in Wheaton, MD apartment" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team vacuuming apartment in Wheaton, MD — professional apartment cleaning" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — apartment cleaning in Wheaton, MD" },
    ],
  },

  "kensington-md/eco-friendly-cleaning": {
    uniqueContent: `Kensington's historic character — the tree-lined streets, the craftsman bungalows, the Cape Cods with original hardwood floors and plaster walls — attracts homeowners who care deeply about preservation. That same sensibility extends to what goes on and inside their homes. Our eco-friendly cleaning service in Kensington uses exclusively plant-based, EPA Safer Choice certified formulas that are safe for original hardwood, plaster, and antique tile surfaces — no ammonia on original wood, no bleach on vintage tile grout, no synthetic fragrances that linger in older homes with less ventilation.

Kensington also sits within the Rock Creek watershed, and our plant-based products are formulated to be genuinely biodegradable — everything that goes down your drain eventually reaches the watershed, and we take that seriously. Our microfiber cloths are OEKO-TEX certified and laundered between every client visit, meaning we bring no cross-contamination between homes and nothing disposable that ends up in a landfill. For Kensington homeowners who've made conscious choices about what their family eats and how they live, our cleaning service is built to match those values completely.`,
    photos: [
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care team member with eco-friendly cleaning products — Kensington, MD eco cleaning service" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning windows with eco-friendly products in Kensington, MD" },
      { src: "/images/team/wiping-door-microfiber.jpg", alt: "Capital Clean Care team member using plant-based cleaner in Kensington, MD home" },
    ],
  },

  // ── Tier-2 pages ──────────────────────────────────────────────────────────

  "washington-dc/house-cleaning": {
    uniqueContent: `Washington DC's residential landscape is unlike any other city in the country. On the same block you can find a 150-year-old rowhouse with original plaster walls and heart-pine floors sitting next to a converted carriage house and a brand-new glass-and-steel condo. Our DC house cleaning teams are trained for this exact variety — knowing when to use soft-touch technique on historic surfaces and when to deploy professional-grade degreasers on modern appliances and high-touch countertops.

DC residents have demanding schedules — legislative sessions, agency deadlines, diplomatic events — and they expect cleaning services that work around them, not the other way around. Our Capitol Hill, Georgetown, Adams Morgan, and Dupont Circle clients book recurring plans because consistency matters: the same team, the same standards, the same result every visit, whether there's a dinner party at 7pm or not. Building access requirements, parking restrictions, and elevator reservation windows are logistics we've navigated across dozens of DC buildings and rowhouses. We show up on time, work efficiently, and leave before your afternoon calls start.`,
    photos: [
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team cleaning spacious DC home — professional house cleaning in Washington DC" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning window blinds in Washington DC home" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning service in Washington, DC" },
    ],
  },

  "washington-dc/deep-cleaning": {
    uniqueContent: `Washington DC rowhouses are beautiful — and they accumulate grime in ways that newer construction doesn't. Original hardwood floors with decades of finish build-up, radiator covers that haven't been properly cleaned since the Carter administration, plaster walls that hold fine dust differently than drywall, and basement levels that see humidity from both the Potomac moisture and the city's aging infrastructure. A deep cleaning in a DC rowhouse isn't the same job as a deep clean in a modern suburban home, and our teams know the difference.

Our DC deep cleaning protocol starts with a surface-type inventory: what floors are we working with, what's the wall material, where are the hidden buildup zones unique to this property. Older DC homes typically have radiators, original tile bathrooms, and kitchen interiors that haven't been fully cleaned in years — these get the most intensive attention. We use HEPA-filtered vacuums, professional-grade citric acid descalers for mineral deposits, and microfiber technology that captures sub-micron particles from plaster and historic wood surfaces without scratching or dulling them.`,
    photos: [
      { src: "/images/team/power-scrubber-tile.jpg", alt: "Capital Clean Care team using power scrubber on tile — deep cleaning in Washington DC" },
      { src: "/images/team/scrubbing-door-frame.jpg", alt: "Capital Clean Care team member scrubbing detail areas during deep cleaning in Washington, DC" },
      { src: "/images/team/cleaning-under-cabinet.jpg", alt: "Capital Clean Care team cleaning under cabinet in Washington DC deep cleaning service" },
    ],
  },

  "arlington-va/house-cleaning": {
    uniqueContent: `Arlington's density — the highest in Virginia — means most clients live in condos, high-rises, or compact townhomes along the Rosslyn-Ballston corridor. Our Arlington house cleaning teams are built for urban logistics: arriving within your building's access window, using compact equipment sized for hallways and tight entryways, completing the work efficiently, and leaving without needing you to supervise. If your building has elevator reservations, parking permits, or HOA restrictions, we've navigated all of them across Arlington's major residential buildings.

The Clarendon, Pentagon City, and Crystal City areas attract a high volume of military families and government contractors who relocate frequently — many of them on tight timelines needing move-in or move-out cleans coordinated around PCS moves. We've become a trusted resource for this community because we show up on time, complete the job to a standard that satisfies base housing inspectors and civilian property managers alike, and never require hand-holding. Lyon Village and Nauck homeowners get a different service scope — larger single-family homes with yards — and we staff accordingly.`,
    photos: [
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care two-person team cleaning Arlington, VA home — professional house cleaning service" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning in Arlington, VA" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team member vacuuming Arlington, VA apartment or condo" },
    ],
  },

  "arlington-va/recurring-cleaning": {
    uniqueContent: `Recurring cleaning in Arlington is a different calculus than in the suburbs. Most Arlington units are smaller — 700 to 1,400 sq ft is typical for condos — but they get significantly heavier daily use per square foot than larger suburban homes. Professionals who work from home, pets in pet-friendly buildings, and the urban particulate that comes through high-traffic corridors all mean that surfaces in Arlington apartments build up grime faster than the room count suggests. A bi-weekly plan keeps this under control without requiring a periodic deep clean to reset.

Our Arlington recurring clients get the same team every visit, which matters more in a dense building than people expect. Your team knows which building entrance to use, which floor your unit is on, whether your doorbell works, and how you prefer the living room arranged. They also know your surfaces — that the kitchen backsplash is glossy and shows water spots, that the bathroom grout is light-colored and needs special attention, and that the balcony door track collects street grit quickly. This accumulated knowledge is what makes a recurring service genuinely different from booking one-off cleans.`,
    photos: [
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team member on recurring cleaning visit in Arlington, VA" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team member vacuuming during recurring cleaning in Arlington, VA" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care professional in uniform — recurring cleaning service in Arlington, VA" },
    ],
  },

  "alexandria-va/house-cleaning": {
    uniqueContent: `Alexandria's Old Town is one of the most historically significant neighborhoods in the country — and one of the most demanding to clean properly. Federal-period brick rowhouses with original heart-pine floors, plaster walls, and antique tile require a different approach than standard residential cleaning. We don't use abrasive scrubbers on historic hardwood, we don't apply bleach-based products near original grout lines, and we train our teams on the specific care requirements for the materials found in pre-1900 Alexandria homes. Del Ray's craftsman bungalows and Potomac Yard's glass-and-steel condos each have their own requirements, and our teams adjust accordingly.

Alexandria's dog-friendly culture — particularly in Del Ray and Old Town — means pet hair, paw prints, and pet-zone odors are part of almost every job. Our house cleaning service in Alexandria uses HEPA-filtered vacuums that capture pet allergens from hardwood, upholstery, and area rugs, and our plant-based deodorizing formulas neutralize pet odors at the source rather than masking them. We've cleaned for Old Town homes where the Labrador has been there for a decade, and the floors still look like they were refinished last week.`,
    photos: [
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care team member with eco-friendly products — house cleaning in Alexandria, VA" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning windows in Alexandria, VA home" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care professional in uniform — house cleaning service in Alexandria, VA" },
    ],
  },

  "columbia-md/house-cleaning": {
    uniqueContent: `Columbia is one of the most thoughtfully planned communities in America, and the homes here reflect that intentionality — from the lakefront condos in Wilde Lake and the village center townhomes in Owen Brown to the large single-family homes in River Hill and Harper's Choice. Each Columbia village has a distinct housing character, and our house cleaning teams are familiar with all of them: the split-levels from the 1970s original construction, the newer custom builds along the reservoir, and the mixed-use residential above retail that has become a feature of the evolving Columbia Town Center.

Columbia's heavy tree canopy — part of Robert Simon's original vision — creates beautiful shade and intense pollen seasons. Spring oak and maple release in Columbia is significant, and it settles on every horizontal surface indoors within days of opening windows. Our Columbia house cleaning clients on recurring plans consistently tell us that the spring and fall visits are the ones where the difference is most visible: coming home to a house where the pollen and leaf residue has been completely removed from surfaces, floors, and window sills rather than redistributed. We use HEPA filtration and microfiber throughout to capture rather than spread these seasonal particles.`,
    photos: [
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team cleaning a Columbia, MD home — professional house cleaning service" },
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care two-person team working in Columbia, MD home" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning service in Columbia, MD" },
    ],
  },

  "columbia-md/recurring-cleaning": {
    uniqueContent: `Columbia families who've switched to a recurring cleaning plan consistently describe the same turning point: they realized they were spending every Saturday morning cleaning a house that was never quite at the level they wanted it to be, no matter how much effort they put in. A professional recurring plan shifts that time back to your family while maintaining a consistent baseline that Saturday cleaning never achieved.

Our Columbia recurring clients span the spectrum — dual-income households in River Hill with young children and two dogs, empty nesters in Hickory Ridge who want their home consistently guest-ready, and Howard County professionals who travel mid-week and want to come home Friday to a clean house. Each household gets a plan built around their schedule and priorities, not a generic template. Columbia's lake-adjacent neighborhoods also face elevated humidity in summer — our recurring teams flag any developing moisture concerns like mold-prone grout or HVAC condensation issues before they become problems. That proactive attention is something a one-off service can't provide.`,
    photos: [
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team member on recurring cleaning visit in Columbia, MD" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team member vacuuming during recurring cleaning in Columbia, MD" },
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care eco-friendly recurring cleaning products — Columbia, MD" },
    ],
  },

  "mclean-va/house-cleaning": {
    uniqueContent: `McLean's homes are among the most demanding cleaning assignments in Northern Virginia — not because they're difficult, but because the standard is exceptionally high and the materials are exceptional. Carrera marble countertops, wide-plank white oak floors, imported stone tile in primary bathrooms, coffered ceilings with custom millwork: each of these surfaces requires specific product chemistry and technique that generic cleaning services don't have the training for. Using the wrong pH-level cleaner on natural stone causes etching; using an abrasive pad on white oak floors creates micro-scratches that accumulate over months. Our McLean teams know the difference.

Many McLean properties are managed by household managers or estate managers who coordinate multiple service providers. We work within those management structures — following product specifications on file, coordinating schedules with other vendors, and reporting any surface concerns to the property manager rather than improvising. For McLean homeowners who manage their own cleaning arrangements, we provide the same level of documentation and communication. Every visit is logged, every product used is on file, and our satisfaction guarantee is backed by a free return visit within 24 hours.`,
    photos: [
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team cleaning a large McLean, VA home — professional house cleaning service" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning windows in McLean, VA home" },
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care eco-certified products for McLean, VA premium house cleaning" },
    ],
  },

  "fairfax-va/house-cleaning": {
    uniqueContent: `Fairfax City's residential neighborhoods — Old Town, Providence, Mosby Woods — have a distinctive mix of mid-century colonials and ranchers built in the 1950s–70s alongside newer construction near George Mason University. The older homes typically have original hardwood floors, tile bathrooms with vintage grout lines, and kitchens that have been updated multiple times over the decades. Each renovation generation leaves a different surface and finish that needs different care. Our Fairfax house cleaning teams are used to working through these layered histories.

George Mason University's presence brings a significant rental population to Fairfax, and we work with both tenants and homeowners throughout the city. Tenants booking move-out cleans often have tight timelines — security deposit disputes are common in Fairfax's competitive rental market, and a documented professional cleaning goes a long way. We photograph the post-clean state of high-scrutiny areas on request, giving tenants documentation that's held up in Fairfax County housing disputes. Homeowners on recurring plans get a different service: a consistent team that knows their preferences and builds on the relationship over time.`,
    photos: [
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care team cleaning a Fairfax, VA home — professional house cleaning service" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning in Fairfax, VA" },
      { src: "/images/team/wiping-door-microfiber.jpg", alt: "Capital Clean Care team member cleaning surfaces in Fairfax, VA home" },
    ],
  },

  "falls-church-va/house-cleaning": {
    uniqueContent: `The City of Falls Church is one of the most tightly defined communities in Northern Virginia — 2.2 square miles with some of the best public schools in Virginia, a walkable downtown, and a housing stock that runs from 1940s Cape Cods to brand-new custom builds on infill lots. The city's small size means our teams are already familiar with most of the residential streets, and the high owner-occupancy rate means clients tend to be long-term — many of our Falls Church clients have been on recurring plans for three or more years.

Falls Church's housing mix creates interesting cleaning requirements. The 1950s split-levels and ramblers often have original hardwood, cast-iron baseboards, and basement family rooms with older carpet that holds pet dander and dust differently than modern flooring. The newer construction — particularly around the West Broad Street corridor — has modern open-plan layouts, quartz counters, and large-format tile that requires streak-free technique. Our teams adjust without needing direction from the homeowner, which is what "professional" actually means in practice.`,
    photos: [
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care team cleaning a Falls Church, VA home — professional house cleaning service" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning in Falls Church, VA" },
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team member mopping hardwood floor in Falls Church, VA home" },
    ],
  },

  "herndon-va/house-cleaning": {
    uniqueContent: `Herndon's position in the Dulles Corridor tech ecosystem means it attracts a high concentration of software engineers, cybersecurity professionals, and tech executives — many of them working from home or hybrid. Work-from-home households have specific cleaning needs: the home office needs more frequent attention, the kitchen sees more use during the day, and the general traffic patterns are heavier throughout the space. Our Herndon house cleaning clients who work remotely consistently tell us that recurring cleaning is more valuable to them than it was when they commuted daily.

Historic downtown Herndon's Victorian and Craftsman homes require gentler technique than the newer townhouse communities along the Elden Street corridor and in Worldgate. Our teams know both environments — when to use soft microfiber on period-accurate trim and when to use professional degreasers on a 2022 kitchen. Herndon's Silver Line Metro connection has also increased rental activity near the Herndon station, and we work frequently with both long-term homeowners and tenants managing move-in and move-out cleaning on tight timelines.`,
    photos: [
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care eco-friendly cleaning products — house cleaning in Herndon, VA" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning service in Herndon, VA" },
      { src: "/images/team/cleaning-appliances.jpg", alt: "Capital Clean Care team member cleaning kitchen appliances in Herndon, VA home" },
    ],
  },

  "annandale-va/house-cleaning": {
    uniqueContent: `Annandale's internationally diverse community — one of the most culturally rich in Northern Virginia — means our house cleaning teams work in homes where cooking traditions, religious customs, and household practices vary significantly from one address to the next. We've learned to ask, listen, and adapt: some Annandale clients prefer we avoid certain areas of the home during religious observances, others have specific product requirements related to health conditions, and many households have multi-generational family members with different needs than a typical household profile would suggest.

Annandale's housing stock is predominantly 1950s–1970s ranchers and split-levels — solid construction with original hardwood floors under carpet in many cases, tile bathrooms that have been updated multiple times, and kitchens that have served decades of serious home cooking. These homes often have more accumulated residue in kitchen surfaces than newer construction would — hood filters, cabinet interiors, and the areas around stoves that see intense cooking daily. Our Annandale house cleaning teams are experienced with kitchen deep-cleaning in homes where cooking is a serious daily activity, not just occasional weeknight meals.`,
    photos: [
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care team cleaning an Annandale, VA home — professional house cleaning service" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning in Annandale, VA" },
      { src: "/images/team/wiping-door-microfiber.jpg", alt: "Capital Clean Care team member cleaning surfaces in Annandale, VA home" },
    ],
  },

  "reston-va/house-cleaning": {
    uniqueContent: `Reston's tech-forward community has consistently been ahead of the curve on sustainability — the planned community's original 1964 vision of integrated living with nature has evolved into a population that actively chooses eco-certified services, sustainable products, and businesses with documented environmental practices. Our eco-friendly approach resonates particularly well in Reston: EPA Safer Choice certified formulas, OEKO-TEX certified microfiber, HEPA filtration that improves indoor air quality rather than just moving dust around, and zero disposable single-use materials brought into client homes.

Reston's housing varies dramatically — the original 1960s cluster homes around Lake Newport were designed to be architecturally distinctive, and many have unique materials and layouts that require customized cleaning approaches. The Silver Line corridor has brought modern luxury condominiums near Reston Town Center, with high-end finishes, floor-to-ceiling windows requiring streak-free technique, and building logistics including elevator reservations and parking permits. Our teams are experienced with both ends of the Reston spectrum — historic cluster homes and modern high-rises — and bring the right equipment and products for each.`,
    photos: [
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care eco-friendly cleaning products — house cleaning in Reston, VA" },
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team cleaning spacious Reston, VA home — professional cleaning service" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning windows in Reston, VA home" },
    ],
  },

  "potomac-md/house-cleaning": {
    uniqueContent: `Potomac homes average among the largest and most valuable in the entire Washington metropolitan area — 5,000 to 12,000 square foot estates are common, and properties in Avenel, River Falls, and Bradley Farms regularly command multi-million dollar valuations. Cleaning at this scale and standard requires teams that understand premium materials, can work within security-conscious household environments, and deliver results that meet the expectations of homeowners who have very high standards for everything.

Our Potomac house cleaning teams are selected for experience with luxury surfaces: marble and quartzite countertops, exotic hardwood floors, custom lacquered cabinetry, specialty tile in primary suites, and outdoor entertaining spaces that connect to interior floors. We use exclusively EPA Safer Choice certified, pH-neutral formulas on sensitive surfaces — no ammonia near natural stone, no bleach near specialty finishes, and no synthetic fragrances in homes where occupants have sensitivities. Many Potomac clients have household managers who coordinate our visits; others manage directly. Either way, our communication is clear, our timing is reliable, and our results are documented.`,
    photos: [
      { src: "/images/team/team-post-construction.jpg", alt: "Capital Clean Care team cleaning large Potomac, MD estate — professional house cleaning service" },
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member cleaning windows in Potomac, MD home" },
      { src: "/images/team/eco-friendly-products.png", alt: "Capital Clean Care eco-certified products for Potomac, MD premium house cleaning" },
    ],
  },

  "silver-spring-md/house-cleaning": {
    uniqueContent: `Silver Spring is one of the DMV's most genuinely diverse communities — a place where the houses on the same block might include a 1940s brick colonial, a converted Victorian rooming house, a mid-century rambler, and a 2020 infill townhouse. This diversity is exactly what makes Silver Spring interesting to live in and exactly what requires adaptable, experienced cleaning teams. Our Silver Spring house cleaning crews work in all of these housing types regularly, adjusting technique for each surface and floor type rather than applying a one-size-fits-all approach.

The Georgia Avenue and Colesville Road corridors bring significant urban particulate into Silver Spring homes — bus traffic, construction from ongoing development, and the general density of a major transit hub all mean that horizontal surfaces in Silver Spring homes accumulate dust faster than comparable suburban homes. For clients on recurring plans, our teams notice this pattern and adjust their cadence accordingly: more frequent dusting during high-pollen and high-traffic seasons, extra attention to entryway floors and window sills that catch what comes in from the street. This attentiveness to local conditions is what distinguishes a community-focused service from a generic cleaning company.`,
    photos: [
      { src: "/images/team/two-team-members.jpg", alt: "Capital Clean Care two-person team cleaning Silver Spring, MD home — professional house cleaning" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team member in uniform — house cleaning in Silver Spring, MD" },
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care team member mopping hardwood floor — house cleaning in Silver Spring, MD" },
    ],
  },

  "bethesda-md/recurring-cleaning": {
    uniqueContent: `Bethesda's professional households — the NIH researchers, the Chevy Chase physicians, the downtown lawyers who live in Wyngate and Burning Tree — don't want to manage a cleaning service. They want to set it up once, trust it completely, and never think about it again. Our Bethesda recurring clients have been on plans for an average of two-plus years, which tells you something about how this service works when it's built correctly: the same dedicated team, learning the home, building the relationship, and improving with every visit.

The practical detail that matters most to Bethesda recurring clients: key access and security. We're bonded and insured, and every team member is background-checked and documented before their first visit. Many Bethesda clients provide a code or key that their team uses on a predictable schedule, and the communication protocol is simple — confirmation the day before, a note when the visit is complete, and immediate contact if anything needs attention. Bethesda homes with premium finishes also benefit from recurring maintenance rather than periodic deep cleans: it's far easier to maintain marble countertops and hardwood floors than to restore them after months of surface buildup.`,
    photos: [
      { src: "/images/team/cleaning-window-blinds.png", alt: "Capital Clean Care team member on recurring cleaning visit in Bethesda, MD" },
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care professional in uniform — recurring cleaning service in Bethesda, MD" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care team member vacuuming during recurring cleaning in Bethesda, MD" },
    ],
  },

  "chevy-chase-md/deep-cleaning": {
    uniqueContent: `Chevy Chase's housing stock is a study in graceful aging — Georgian colonials, Tudor revivals, and pre-war Colonials that have been meticulously maintained by successive owners who understood what they had. Deep cleaning in these homes isn't about correcting neglect; it's about reaching the places that regular cleaning, by definition, doesn't touch: inside the cast-iron radiator covers that have circulated dust for decades, along the crown molding profiles that collect fine particles, behind the appliances in kitchens that were last renovated in the 1990s, and inside the tile grout of primary bathrooms where mineral scale has built up over years of DC area hard water.

Our Chevy Chase deep cleaning protocol includes a pre-visit walkthrough where we identify which surfaces are historic (requiring gentle technique and specialized products) and which are updated (allowing more thorough treatment). Original hardwood gets a different approach than engineered flooring. Plaster walls with original decorative molding get soft microfiber and neutral-pH cleaners, not the scrubbing pads appropriate for painted drywall. This surface-by-surface judgment is the difference between a deep clean that restores a Chevy Chase home and one that accidentally damages it.`,
    photos: [
      { src: "/images/team/power-scrubber-tile.jpg", alt: "Capital Clean Care team using power scrubber on tile — deep cleaning in Chevy Chase, MD" },
      { src: "/images/team/scrubbing-door-frame.jpg", alt: "Capital Clean Care team member scrubbing detail surfaces during deep cleaning in Chevy Chase, MD" },
      { src: "/images/team/wiping-door-microfiber.jpg", alt: "Capital Clean Care team member using microfiber technique — deep cleaning in Chevy Chase, MD" },
    ],
  },

};

export function getServiceLocationOverride(citySlug: string, serviceSlug: string): ServiceLocationOverride | null {
  return serviceLocationOverrides[`${citySlug}/${serviceSlug}`] ?? null;
}
