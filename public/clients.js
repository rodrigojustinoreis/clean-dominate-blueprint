/* =============================================================================
   CAPITAL CLEAN & CARE — Client estimates data
   -----------------------------------------------------------------------------
   HOW TO ADD A CLIENT (no new file, ever):
     1. Copy one whole block below (from  id: { … },).
     2. Change the id (lowercase, no spaces) — that's the ?c= in the link.
     3. Fill in name, address, service, total, and the sections.
     4. Save, redeploy. The link  capitalcleancare.com/estimate?c=<id>  just works.

   FORMAT:
     <id>: {
       name:    "Full Name",
       address: "Street, City, ST ZIP",
       service: "Service name",
       total:   "$2,500.00",          // or a number like 2500
       sections: [
         { title: "Area name", items: [ "Included item", "Included item" ] },
         …
       ]
     }
   Tips: keep 4–6 items per section. Only ONE section opens at a time on the page.
   ============================================================================= */

window.CLIENTS = {

  jeff: {
    name: "Jeff Wiedemann",
    address: "4619 Norwood Dr, Chevy Chase, MD 20815",
    service: "Premium Deep Sanitary Cleaning (Whole Home)",
    total: "$2,500.00",
    // NOTE: the item lists below are a professional DRAFT — the sections you sent
    // were cut off before the items. Review/replace with Jeff's exact scope before
    // sending the link. Editing here is all it takes.
    sections: [
      {
        title: "Whole Home",
        items: [
          "Dusting of all reachable surfaces, ledges, and baseboards",
          "Cobweb removal from ceilings and corners",
          "Light switches, door handles, and high-touch points sanitized",
          "Interior doors and frames wiped down",
          "All floors vacuumed and mopped throughout"
        ]
      },
      {
        title: "Kitchen",
        items: [
          "Countertops and backsplash cleaned and sanitized",
          "Exterior of all appliances (fridge, oven, dishwasher, microwave)",
          "Stovetop degreased; microwave cleaned inside and out",
          "Sink scrubbed and disinfected; faucet polished",
          "Cabinet fronts wiped; floor washed"
        ]
      },
      {
        title: "Bathrooms",
        items: [
          "Toilets scrubbed and disinfected, inside and out",
          "Showers, tubs, and tile scrubbed; grout detailed",
          "Sinks, counters, and fixtures cleaned and polished",
          "Mirrors and glass left streak-free",
          "Floors washed and sanitized"
        ]
      },
      {
        title: "Bedrooms",
        items: [
          "All surfaces and furniture dusted",
          "Beds made and linens straightened",
          "Mirrors and glass cleaned",
          "Baseboards and trim wiped",
          "Floors vacuumed and mopped"
        ]
      },
      {
        title: "Living Areas",
        items: [
          "Furniture dusted; upholstery vacuumed",
          "Electronics and screens gently dusted",
          "Baseboards, window sills, and ledges wiped",
          "Glass surfaces and mirrors cleaned",
          "Floors vacuumed and mopped"
        ]
      }
    ]
  }

  // ,next-client-id: { … }   ← add the next client after the comma above

};
