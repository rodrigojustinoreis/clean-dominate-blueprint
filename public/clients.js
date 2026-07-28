/* =============================================================================
   CAPITAL CLEAN & CARE — Client estimates data
   -----------------------------------------------------------------------------
   HOW TO ADD A CLIENT (no new file, ever):
     1. Copy the template block below and paste it inside window.CLIENTS = { … }.
     2. Change the id (lowercase, no spaces) — that's the ?c= in the link.
     3. Fill in the fields and sections. Remove the leading // to activate it.
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

  // No active clients. Add one using the template below.
  //
  // sample: {
  //   name: "Full Name",
  //   address: "Street, City, ST ZIP",
  //   service: "Premium Deep Sanitary Cleaning",
  //   total: "$2,415",
  //   estimateNo: "EST-202508-001",
  //   validUntil: "30 days",
  //   coverage: "Whole Home",
  //   description: "Short summary of the service.",
  //   sections: [
  //     { title: "Whole Home", subtitle: "Detailed dust removal & sanitizing",
  //       items: ["Included item", "Included item"] },
  //     { title: "Kitchen", emoji: "🍽️", subtitle: "Deep degreasing & appliance cleaning",
  //       items: ["Included item", "Included item"] }
  //   ],
  //   equipment: ["Commercial-grade steam cleaning equipment", "HEPA filtration vacuum systems"],
  //   notes: "Any notes for the client."
  // }

};
