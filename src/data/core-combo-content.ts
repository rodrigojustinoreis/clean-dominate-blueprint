// Mini-lote — core city × core service pages promoted out of noindex.
// silver-spring/recurring, gaithersburg/deep, gaithersburg/recurring. Dedicated pages
// already carry the city intro/neighborhoods; this adds the unique 4 city FAQs
// (FAQPage schema, one with estimated time). Grounded — zero invented data.
import type { ServiceLocationOverride } from "./service-location-overrides";

export const coreComboContent: Record<string, ServiceLocationOverride> = {
  "silver-spring-md/recurring-cleaning": {
    faqs: [
      { q: "How long does a recurring cleaning take for a typical Silver Spring home?", a: "It depends on your property profile. A one- or two-bedroom unit in a Downtown Silver Spring high-rise or apartment complex usually runs about 1.5 to 2.5 hours per visit, while a three-bedroom mid-century rancher in Woodside or Four Corners typically takes 2.5 to 4 hours. Because your dedicated team maintains the home between visits, recurring cleans go faster over time." },
      { q: "Do I get the same cleaning team each visit for my recurring service in Silver Spring?", a: "Yes. Recurring clients across Silver Spring, from Colesville ranchers to Forest Glen renovated homes, are matched with a dedicated team that returns each visit. Every cleaner is background-checked, and we are bonded and insured. A consistent team learns your home's layout and preferences, which keeps quality steady and makes weekly, bi-weekly, or monthly maintenance more efficient over time." },
      { q: "Which recurring frequency works best for Downtown Silver Spring apartments versus larger homes?", a: "It varies by household. Compact modern apartment complexes and high-rises in Downtown Silver Spring often stay fresh on a bi-weekly or monthly plan, since there's less square footage to maintain. Larger mid-century ranchers and renovated Victorians in Woodside or Four Corners, especially with pets or kids, usually benefit from weekly or bi-weekly visits. We'll help you choose during your free quote." },
      { q: "Are the products used for recurring cleaning safe for family and pets in Silver Spring homes?", a: "Yes. We clean with plant-based, EPA Safer Choice products on every recurring visit, whether it's a Colesville bungalow or a Forest Glen apartment. That means no harsh chemical residue on floors, counters, or surfaces your family and pets touch daily. Consistent, gentle maintenance between visits keeps your Silver Spring home fresh, and every recurring service is backed by our satisfaction guarantee." },
    ],
    photos: [
      { src: "/images/team/team-mopping-uniform.jpg", alt: "Capital Clean Care team on a recurring cleaning visit in Silver Spring, MD" },
      { src: "/images/team/vacuuming-living-room.jpg", alt: "Capital Clean Care vacuuming a Silver Spring, MD living room on a recurring plan" },
      { src: "/images/team/real-team-two-members.webp", alt: "Capital Clean Care background-checked team, recurring cleaning in Silver Spring, MD" },
    ],
  },
  "gaithersburg-md/deep-cleaning": {
    faqs: [
      { q: "How long does a deep cleaning take for a Gaithersburg home?", a: "Deep cleans are more intensive, so they run longer than a standard visit. A two-bedroom townhouse or garden-style apartment near Shady Grove or Summit Hall usually takes about 3 to 5 hours, while a four-bedroom traditional single-family home in Kentlands or Lakelands can run 5 to 8 hours, since we detail inside the oven and fridge, grout, baseboards, and vents." },
      { q: "What does a deep cleaning include that regular cleaning doesn't for Gaithersburg homes?", a: "A deep clean is a top-to-bottom reset. In planned-community homes around Kentlands and Quince Orchard, we detail inside the oven and refrigerator, scrub tile grout, wipe baseboards and ceiling fans, clean vents, and reach behind furniture. It's the intensive work standard visits skip, ideal as an occasional refresh or before starting a recurring plan on a traditional single-family home." },
      { q: "Do you use HEPA vacuums and safe products for deep cleaning in Gaithersburg?", a: "Yes. Our deep cleans use HEPA-filter vacuums to capture fine dust and allergens pulled from vents, baseboards, and behind furniture, which matters in older Summit Hall single-family homes. We pair that with plant-based, EPA Safer Choice products, so an intensive top-to-bottom reset in your Lakelands or Washingtonian Center home leaves surfaces genuinely clean without harsh chemical residue." },
      { q: "Is a deep cleaning worth it before moving into a Gaithersburg townhouse or single-family home?", a: "It often is. Whether you're settling into a townhouse near Washingtonian Center or a traditional single-family home in Quince Orchard, a deep clean resets everything the previous occupants left behind, inside the oven and fridge, grout, baseboards, vents, and behind fixtures. Every cleaner is background-checked, and we're bonded, insured, and back the work with our satisfaction guarantee. Free quotes are available." },
    ],
    photos: [
      { src: "/images/team/power-scrubber-tile.jpg", alt: "Capital Clean Care deep-scrubbing tile in a Gaithersburg, MD home" },
      { src: "/images/team/scrubbing-door-frame.jpg", alt: "Capital Clean Care detailing a door frame during a deep clean in Gaithersburg, MD" },
      { src: "/images/team/team-tile-scrubber.jpg", alt: "Capital Clean Care deep cleaning in Gaithersburg, MD" },
    ],
  },
  "gaithersburg-md/recurring-cleaning": {
    faqs: [
      { q: "How many hours does a recurring cleaning visit take in Gaithersburg?", a: "It depends on your property profile. A garden-style apartment or two-bedroom townhouse near Shady Grove typically takes about 1.5 to 3 hours per visit, while a four-bedroom traditional single-family residence in Kentlands or Lakelands generally runs 3 to 5 hours. Because the same dedicated team maintains your home between visits, recurring cleans usually get quicker as upkeep stays ahead of buildup." },
      { q: "Will the same team handle my recurring cleaning across Gaithersburg's planned communities?", a: "Yes. Whether your home is a planned-community property in Kentlands, a townhouse near Quince Orchard, or a single-family residence in Summit Hall, you're assigned a dedicated team that returns each visit. Every cleaner is background-checked, and we are bonded and insured. A familiar team learns your home and keeps recurring weekly, bi-weekly, or monthly maintenance consistent and efficient." },
      { q: "How does recurring maintenance keep a Gaithersburg single-family home clean between visits?", a: "Recurring service is about staying ahead of buildup rather than resetting it. In traditional single-family residences around Lakelands and Washingtonian Center, regular weekly, bi-weekly, or monthly visits keep dust, kitchens, and bathrooms in check so grime never accumulates. Your dedicated team maintains the same standard each time, which means less work per visit and a home that stays consistently fresh." },
      { q: "What recurring frequency suits a Gaithersburg townhouse versus a larger planned-community home?", a: "It depends on the household. Townhouses and garden-style apartments near Shady Grove or Summit Hall often stay tidy on a bi-weekly or monthly plan, given the smaller footprint. Larger planned-community and single-family homes in Kentlands or Quince Orchard, particularly with pets or children, tend to do best weekly or bi-weekly. We'll recommend a frequency during your free quote." },
    ],
    photos: [
      { src: "/images/team/team-mopping-bright-room.jpg", alt: "Capital Clean Care team on a recurring cleaning visit in Gaithersburg, MD" },
      { src: "/images/team/cleaning-window-blinds.webp", alt: "Capital Clean Care detailing blinds on a recurring visit in Gaithersburg, MD" },
      { src: "/images/team/mopping-hardwood-floor.jpg", alt: "Capital Clean Care mopping a Gaithersburg, MD home on a recurring plan" },
    ],
  },
};
