/* =============================================================================
   CAPITAL CLEAN & CARE — Client estimates data
   -----------------------------------------------------------------------------
   HOW TO ADD A CLIENT (no new file, ever):
     1. Copy one whole block below (from  id: { … },).
     2. Change the id (lowercase, no spaces) — that's the ?c= in the link.
     3. Fill in the fields and sections.
     4. Save, redeploy. The link  capitalcleancare.com/estimate?c=<id>  just works.

   FIELDS (all optional except name + total + sections):
     name, address, service, total ("$2,415" or a number),
     estimateNo, validUntil, coverage, description, notes,
     equipment: [ "…", "…" ],
     sections: [
       { title:"Area", subtitle:"one-line summary", emoji:"🍽️",
         items:[ "Included item", "Included item" ] },
       …
     ]
   Only ONE section opens at a time on the page.
   ============================================================================= */

window.CLIENTS = {

  jeff: {
    name: "Jeff Wiedemann",
    address: "4619 Norwood Dr, Chevy Chase, MD 20815",
    service: "Premium Deep Sanitary Cleaning",
    total: "$2,415",
    estimateNo: "EST-202507-333",
    validUntil: "30 days",
    coverage: "Whole Home + Basement",
    description: "A comprehensive, top-to-bottom cleaning of the entire home using professional equipment, steam technology, and specialized products to remove built-up dirt, grease, dust, allergens, and bacteria — while protecting delicate surfaces.",
    sections: [
      {
        title: "Whole Home",
        subtitle: "Detailed dust removal & sanitizing",
        items: [
          "Top-to-bottom detailed cleaning of the entire home",
          "Detailed dust removal from all accessible surfaces",
          "Sanitizing of all high-touch areas",
          "All baseboards cleaned throughout the home",
          "Upper corners cleaned & cobwebs removed",
          "Accessible air vents & covers removed, cleaned & reinstalled when possible",
          "Dust removed from trim, doors, frames & moldings"
        ]
      },
      {
        title: "Kitchen",
        emoji: "🍽️",
        subtitle: "Deep degreasing & appliance cleaning",
        items: [
          "Deep sanitizing of all countertops & backsplash",
          "Interior & exterior cleaning of all cabinets",
          "Deep cleaning inside the refrigerator",
          "Refrigerator pulled out to clean underneath & behind (when safely accessible)",
          "Deep cleaning inside the microwave",
          "Deep cleaning inside the oven; pulled out to clean behind (when safe)",
          "Deep degreasing of the range hood, including filters when removable",
          "Steam cleaning of grease buildup where appropriate",
          "Sink, faucet, fixtures & surrounding surfaces detailed & sanitized"
        ]
      },
      {
        title: "Bathrooms",
        subtitle: "Full sanitary steam cleaning",
        items: [
          "Full deep sanitary cleaning of every bathroom",
          "Steam cleaning of showers, tubs, tile & grout when appropriate",
          "Deep sanitizing of toilets, sinks, countertops, mirrors & fixtures",
          "Detailed removal of soap scum, hard water residue & buildup",
          "Sanitizing of cabinets, drawers & accessible storage",
          "All exhaust vents & light fixtures cleaned"
        ]
      },
      {
        title: "Bedrooms",
        emoji: "🛏️",
        subtitle: "Master & all bedrooms detailed",
        items: [
          "Detailed cleaning of the master bedroom",
          "Detailed cleaning of all children's bedrooms",
          "All baseboards cleaned",
          "All ceiling fans cleaned",
          "All light fixtures cleaned",
          "All accessible air vents cleaned",
          "Detailed dust removal from furniture & surfaces"
        ]
      },
      {
        title: "Living Areas",
        emoji: "🛋️",
        subtitle: "Fireplace, hallways & common areas",
        items: [
          "Deep cleaning of the fireplace (accessible surfaces & surrounding area; chimney service not included)",
          "Detailed cleaning of living rooms, hallways, stairways & common areas",
          "All light fixtures throughout the home cleaned",
          "Accessible light fixture covers & glass removed, cleaned & reinstalled"
        ]
      },
      {
        title: "Hardwood Floors",
        subtitle: "Steam & wood-safe products",
        items: [
          "Complete cleaning of all hardwood flooring throughout the home",
          "Professional steam cleaning where safe & appropriate",
          "Specialized wood-safe products to protect the finish",
          "Detailed cleaning along edges, corners & hard-to-reach areas"
        ]
      },
      {
        title: "Windows",
        subtitle: "Interior, frames, sills & tracks",
        items: [
          "Interior cleaning of all windows",
          "Exterior cleaning of windows that open safely from inside",
          "Window frames, sills & tracks cleaned"
        ]
      },
      {
        title: "Basement",
        subtitle: "Full sanitary clean + laundry room",
        items: [
          "Complete deep sanitary cleaning of the entire basement",
          "Cleaning of all basement rooms",
          "Deep cleaning of the basement bathroom",
          "Detailed cleaning of the laundry room",
          "Washer & dryer exteriors cleaned",
          "All accessible surfaces, baseboards, vents, fixtures & flooring cleaned"
        ]
      }
    ],
    equipment: [
      "Commercial-grade steam cleaning equipment",
      "HEPA filtration vacuum systems",
      "Professional sanitizing products",
      "Specialized degreasers for kitchen surfaces",
      "Wood-safe products for hardwood flooring",
      "Professional microfiber detailing system"
    ],
    notes: "Furniture & appliances are moved only when safe to do so. Steam cleaning is performed only on steam-compatible surfaces. Delicate materials & specialty finishes are cleaned using appropriate methods to prevent damage. This service restores the home to the highest practical level of cleanliness through a meticulous, premium deep sanitary cleaning process."
  }

  // ,next-client-id: { … }   ← add the next client after the comma above

};
