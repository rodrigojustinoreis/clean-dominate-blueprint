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

};

export function getServiceLocationOverride(citySlug: string, serviceSlug: string): ServiceLocationOverride | null {
  return serviceLocationOverrides[`${citySlug}/${serviceSlug}`] ?? null;
}
