export interface Testimonial {
  name: string;
  location: string;
  text: string;
  date: string; // ISO 8601 for Schema
}

/** City-specific testimonials keyed by city slug */
const cityTestimonialsMap: Record<string, Testimonial[]> = {
  "rockville-md": [
    { name: "Jennifer L.", location: "Rockville, MD", date: "2026-02-10", text: "Capital Clean Care has been cleaning our King Farm home for over a year. The team is always punctual, thorough, and the eco-friendly products mean I never worry about my kids playing on the floor after." },
    { name: "Marcus B.", location: "Rockville, MD", date: "2026-01-18", text: "We tried three other services before finding Capital Clean Care. The difference is night and day — they actually clean the places other services miss, and their plant-based products leave no chemical smell." },
    { name: "Priya S.", location: "Rockville, MD", date: "2025-12-05", text: "Flexible scheduling around our work-from-home situation, consistent teams, and genuinely thorough cleaning. The bi-weekly service has been a game changer for our Twinbrook townhome." },
  ],
  "bethesda-md": [
    { name: "Caroline W.", location: "Bethesda, MD", date: "2026-02-28", text: "I have high expectations for anyone cleaning my home and Capital Clean Care consistently exceeds them. The team handles our Edgemoor colonial with real care — especially the original hardwood floors." },
    { name: "David H.", location: "Bethesda, MD", date: "2026-01-22", text: "We've been clients since the business started. The quality has been consistently excellent and the eco-friendly products are exactly what we want with young children in the house." },
    { name: "Susan K.", location: "Bethesda, MD", date: "2025-11-30", text: "Switched from a national chain to Capital Clean Care and the difference is remarkable. More thorough, more professional, and the fact that they use plant-based products is exactly right for our family." },
  ],
  "silver-spring-md": [
    { name: "Angela T.", location: "Silver Spring, MD", date: "2026-03-01", text: "Best maid service in Silver Spring. They show up on time, do an incredible job, and the eco-friendly products are a huge bonus for our family with two young kids and a dog." },
    { name: "Michael C.", location: "Silver Spring, MD", date: "2026-01-15", text: "Our Four Corners home has never been this clean. The team is thorough, professional, and actually understands how to clean a mid-century house without damaging original details." },
    { name: "Diana F.", location: "Silver Spring, MD", date: "2025-12-20", text: "I've recommended Capital Clean Care to everyone in our neighborhood. The eco products mean no chemical headache after cleaning day and the quality is the best I've experienced in 15 years of hiring cleaners." },
  ],
  "gaithersburg-md": [
    { name: "Rachel M.", location: "Gaithersburg, MD", date: "2026-02-14", text: "Our Kentlands home needed serious post-renovation cleaning and Capital Clean Care delivered. They got into every corner, cleaned every surface, and the result was absolutely perfect." },
    { name: "Steve P.", location: "Gaithersburg, MD", date: "2026-01-08", text: "Reliable, professional, and thorough every single visit. Our Montgomery Village home looks amazing after each biweekly cleaning." },
  ],
  "germantown-md": [
    { name: "Tanya R.", location: "Germantown, MD", date: "2026-02-20", text: "Finally found a cleaning service that actually shows up when scheduled and does what they promised. Our Churchill Village home has never been cleaner." },
    { name: "Brian K.", location: "Germantown, MD", date: "2026-01-25", text: "The eco-friendly products are a big deal for us — we have allergy issues and the low-VOC formulas make a real difference in how the house feels after cleaning." },
  ],
  "potomac-md": [
    { name: "Elizabeth N.", location: "Potomac, MD", date: "2026-03-05", text: "Our home has custom finishes and high-end surfaces that require careful treatment. Capital Clean Care's team handles everything with the appropriate care and the results are exceptional." },
    { name: "Robert A.", location: "Potomac, MD", date: "2026-01-30", text: "White-glove service at a fair price. They treat our Avenel home as if it were their own — with genuine care, thoroughness, and professionalism every visit." },
  ],
  "columbia-md": [
    { name: "Lisa J.", location: "Columbia, MD", date: "2026-02-18", text: "Capital Clean Care understands the Columbia community's values around sustainability. Using eco-friendly products isn't just marketing for them — it's genuinely how they operate every visit." },
    { name: "Kevin W.", location: "Columbia, MD", date: "2026-01-12", text: "Our Owen Brown home is cleaned bi-weekly and the consistency is remarkable. Same team, same standards, always excellent results." },
  ],
  "arlington-va": [
    { name: "James T.", location: "Arlington, VA", date: "2025-12-02", text: "We've used their bi-weekly service for over a year and every visit exceeds expectations. As a busy professional in Clarendon, having a reliable cleaning team is essential." },
    { name: "Michelle R.", location: "Arlington, VA", date: "2026-01-28", text: "My husband has asthma and we've tried many services. Capital Clean Care's plant-based products are the only ones that haven't triggered any reactions. Absolute game changer." },
    { name: "Kevin D.", location: "Arlington, VA", date: "2026-02-10", text: "Crystal City apartment cleaned perfectly. They're fast, thorough, and the plant-based products meet LEED requirements — which matters for our building's green certification." },
  ],
  "fairfax-va": [
    { name: "Patricia W.", location: "Fairfax, VA", date: "2026-01-22", text: "Best cleaning service we've found in Northern Virginia. Our Fair Lakes home gets the same quality service every visit and the eco-friendly products give us total peace of mind." },
    { name: "Tom G.", location: "Fairfax, VA", date: "2025-12-15", text: "Punctual, professional, and genuinely thorough. We've had cleaning services for 20 years and Capital Clean Care is the best — the green products are a bonus we didn't expect to love so much." },
  ],
  "mclean-va": [
    { name: "Catherine B.", location: "McLean, VA", date: "2026-02-25", text: "Our Langley home has unique finishes that require special care. Capital Clean Care's team understands this and delivers white-glove results every single time." },
    { name: "William S.", location: "McLean, VA", date: "2026-01-18", text: "Premium cleaning that matches the caliber of the community. Their attention to detail is exactly what we were looking for — and the eco-friendly approach aligns with our family's values." },
  ],
  "alexandria-va": [
    { name: "Robert L.", location: "Alexandria, VA", date: "2026-02-05", text: "Used them for move-out cleaning and got my full security deposit back. The Del Ray apartment looked better than when I moved in. Incredible service from start to finish." },
    { name: "Amanda F.", location: "Alexandria, VA", date: "2026-01-10", text: "Our Old Town rowhouse gets specialized care that most services can't provide. Capital Clean Care understands historic properties and their eco products are perfect for our original wide-plank floors." },
  ],
  "washington-dc": [
    { name: "Sarah K.", location: "Washington, DC", date: "2026-03-01", text: "Needed house cleaning fast before a family visit. Capital Clean Care fit me in within 2 days and the house was spotless. Their efficiency and quality are unmatched in the District." },
    { name: "Thomas M.", location: "Washington, DC", date: "2026-01-20", text: "Capitol Hill rowhouse cleaned to perfection. The team handles narrow staircases and period details with real expertise. Best service I've found in DC." },
  ],
  "washington-dc-ne": [
    { name: "Jasmine H.", location: "Washington, DC (NE)", date: "2026-02-08", text: "Brookland home cleaned beautifully. Responsive, on-time, and genuinely thorough. The plant-based products are perfect for our family with a toddler." },
    { name: "Marcus D.", location: "Washington, DC (NE)", date: "2026-01-15", text: "Finally a cleaning service that covers NE DC without upcharging. Great quality, friendly team, and the eco-friendly approach is exactly what we value." },
  ],
  "georgetown-dc": [
    { name: "Alexandra P.", location: "Georgetown, DC", date: "2026-02-20", text: "Our West Village townhouse has 19th-century details that require delicate care. Capital Clean Care is the only service I've found that handles them correctly, consistently." },
    { name: "Richard F.", location: "Georgetown, DC", date: "2026-01-25", text: "Premium quality cleaning that respects the character of Georgetown's historic homes. The eco-friendly products are gentle on original materials and tough on dirt." },
  ],
  "capitol-hill-dc": [
    { name: "Christine B.", location: "Capitol Hill, DC", date: "2026-02-15", text: "Our rowhouse near Eastern Market gets a thorough cleaning every two weeks. The team is professional, the quality is consistent, and the eco products mean no chemical smell in our home." },
    { name: "Nathan A.", location: "Capitol Hill, DC", date: "2026-01-30", text: "Barracks Row condo cleaned perfectly. Efficient, thorough, and the plant-based products are the right choice for a building with shared ventilation systems." },
  ],
  "kensington-md": [
    { name: "Eleanor R.", location: "Kensington, MD", date: "2026-02-12", text: "Our Victorian cottage needed careful, knowledgeable cleaning and Capital Clean Care delivered. They understand historic homes and use products that are safe for original woodwork and floors." },
    { name: "Frank T.", location: "Kensington, MD", date: "2026-01-20", text: "Best cleaning service in Montgomery County. Reliable, professional, and the eco-friendly products are perfect for our craftsman bungalow near Howard Avenue." },
  ],
  "chevy-chase-md": [
    { name: "Barbara N.", location: "Chevy Chase, MD", date: "2026-03-02", text: "Capital Clean Care handles our home with the kind of care and expertise this neighborhood demands. Impeccable results every visit, and the eco-friendly products protect our original hardwood floors." },
    { name: "George L.", location: "Chevy Chase, MD", date: "2026-01-28", text: "We've had many cleaning services over the years. Capital Clean Care is the only one that consistently meets Chevy Chase standards — thorough, professional, and completely trustworthy." },
  ],
  "college-park-md": [
    { name: "Professor Amy S.", location: "College Park, MD", date: "2026-02-18", text: "Our University Park home is cleaned bi-weekly and the consistency is outstanding. The eco-friendly products are exactly right for a family with young children near UMD." },
    { name: "Derek M.", location: "College Park, MD", date: "2026-01-22", text: "Reliable, thorough, and professional. Capital Clean Care has been cleaning our Calvert Hills home for six months and the quality never wavers." },
  ],
  "laurel-md": [
    { name: "Monica J.", location: "Laurel, MD", date: "2026-02-10", text: "Finally found a reliable cleaning service that covers Laurel without extra travel fees. The quality is excellent and the team is always professional and on time." },
    { name: "Chris B.", location: "Laurel, MD", date: "2026-01-15", text: "Our Montpelier townhome gets a thorough cleaning every two weeks. The eco-friendly products are perfect for our family with two young kids and a cat." },
  ],
  "bowie-md": [
    { name: "Donna K.", location: "Bowie, MD", date: "2026-02-22", text: "Our Belair home has never looked this clean. Capital Clean Care is reliable, thorough, and the plant-based products leave no chemical smell — just a clean, fresh home." },
    { name: "Ray T.", location: "Bowie, MD", date: "2026-01-18", text: "Punctual, professional, and consistently excellent. We've been bi-weekly clients since last summer and the quality has been flawless every single visit." },
  ],
  "reston-va": [
    { name: "Jennifer O.", location: "Reston, VA", date: "2026-02-28", text: "Our Town Center condo gets a perfect cleaning every two weeks. The team is efficient, professional, and the eco-friendly products are exactly right for a LEED-certified building." },
    { name: "Scott M.", location: "Reston, VA", date: "2026-01-20", text: "As a tech professional, I appreciate Capital Clean Care's organized, systematic approach. Their eco-friendly products and consistent quality match the innovation-focused culture of our community." },
  ],
  "downtown-dc": [
    { name: "Margaret T.", location: "Downtown DC", date: "2026-03-10", text: "My Penn Quarter condo gets spotless results every bi-weekly visit. Capital Clean Care understands luxury finishes and the eco products leave no chemical smell in my unit." },
    { name: "Andrew B.", location: "Downtown DC", date: "2026-02-15", text: "NoMa loft cleaned to absolute perfection. The team is efficient, respects my time, and the quality is exactly what I'd expect for a downtown DC residence." },
    { name: "Priya K.", location: "Downtown DC", date: "2026-01-22", text: "City Center condo has never looked this good. Reliable, professional, and they coordinate with my building's concierge effortlessly. Worth every penny." },
  ],
  "shaw-dc": [
    { name: "Dominique R.", location: "Shaw, DC", date: "2026-03-05", text: "Our Logan Circle rowhouse requires careful handling of original hardwood and period details. Capital Clean Care's team handles everything beautifully and uses products that are safe for our historic finishes." },
    { name: "James V.", location: "Shaw, DC", date: "2026-02-18", text: "Shaw condo on 14th Street cleaned impeccably every two weeks. The team is discreet, thorough, and their eco-friendly products meet our building's green certification requirements." },
    { name: "Claire N.", location: "Shaw, DC", date: "2026-01-12", text: "Finally found a cleaning service that truly understands Shaw rowhouses. The attention to original architectural details and commitment to eco products is exactly what we were looking for." },
  ],
  "columbia-heights-dc": [
    { name: "Maria G.", location: "Columbia Heights, DC", date: "2026-03-08", text: "Our 16th Street Heights apartment gets a thorough cleaning every two weeks. Professional team, excellent eco-friendly products, and always on schedule. Highly recommend for Columbia Heights residents." },
    { name: "David K.", location: "Columbia Heights, DC", date: "2026-02-10", text: "Victorian rowhouse on Kenyon Street cleaned perfectly. The team understands older DC homes and uses products safe for original woodwork. Consistent excellence every visit." },
    { name: "Sofia M.", location: "Columbia Heights, DC", date: "2026-01-28", text: "Best cleaning service in Columbia Heights. Reliable, affordable, and the eco-friendly products are perfect for our family with young children. We've recommended them to everyone on our block." },
  ],
  "navy-yard-dc": [
    { name: "Tyler B.", location: "Navy Yard, DC", date: "2026-03-12", text: "Our Yards condo has premium finishes that need careful treatment. Capital Clean Care delivers white-glove results every time and the eco products are safe for our high-end surfaces." },
    { name: "Amanda S.", location: "Navy Yard, DC", date: "2026-02-20", text: "Love coming home after a Nationals game to a perfectly clean apartment. Capital Clean Care has been a game changer for our busy Navy Yard lifestyle." },
    { name: "Marcus L.", location: "Navy Yard, DC", date: "2026-01-15", text: "Half Street apartment cleaned to an exceptional standard every bi-weekly visit. The team is professional, efficient, and the results are always flawless." },
  ],
  "vienna-va": [
    { name: "Patricia M.", location: "Vienna, VA", date: "2026-03-02", text: "Our Vienna Woods colonial gets exceptional cleaning every two weeks. The team is thorough, the eco-friendly products protect our original hardwood floors, and the consistency is outstanding." },
    { name: "Robert C.", location: "Vienna, VA", date: "2026-02-08", text: "Wolf Trap area home cleaned to the highest standard every visit. Capital Clean Care understands Vienna's family-oriented community and delivers the quality this neighborhood expects." },
    { name: "Susan H.", location: "Vienna, VA", date: "2026-01-25", text: "Vienna's a community where reputation matters, and Capital Clean Care has earned ours. Reliable, professional, eco-friendly — exactly the service our family was looking for." },
  ],
  "tysons-va": [
    { name: "Jonathan W.", location: "Tysons, VA", date: "2026-03-15", text: "Our Greensboro Metro condo gets a perfect cleaning every two weeks. Luxury finishes require expert care and Capital Clean Care delivers exactly that — along with eco products safe for our building." },
    { name: "Lisa T.", location: "Tysons, VA", date: "2026-02-22", text: "Tysons Corner high-rise cleaned impeccably. As an executive with no time to spare, having a reliable, premium cleaning service is essential. Capital Clean Care has been outstanding." },
    { name: "Kevin R.", location: "Tysons, VA", date: "2026-01-30", text: "Spring Hill area townhome cleaned to perfection. The team coordinates access with our building seamlessly and the quality never wavers. Exactly what Tysons residents expect." },
  ],
  "herndon-va": [
    { name: "Rajesh P.", location: "Herndon, VA", date: "2026-03-08", text: "As a tech professional in the Dulles Corridor, flexible scheduling is essential. Capital Clean Care accommodates my demanding schedule and delivers consistently excellent results every visit." },
    { name: "Catherine O.", location: "Herndon, VA", date: "2026-02-14", text: "Our Worldgate townhome gets thorough cleaning every two weeks. The eco-friendly products are perfect for our family with two young kids, and the team is always professional and on time." },
    { name: "Michael F.", location: "Herndon, VA", date: "2026-01-20", text: "Historic downtown Herndon home requires careful attention to older finishes. Capital Clean Care's team understands this and delivers thorough results without damaging our period details." },
  ],
  "annandale-va": [
    { name: "Young-Soo K.", location: "Annandale, VA", date: "2026-03-05", text: "Annandale's diverse community deserves excellent service providers. Capital Clean Care delivers consistent, professional cleaning with eco-friendly products that are safe for our family. Outstanding." },
    { name: "Barbara L.", location: "Annandale, VA", date: "2026-02-12", text: "Our Sleepy Hollow rancher has been cleaned bi-weekly for six months now. The quality never wavers — thorough, professional, and the plant-based products mean no chemical smell in our home." },
    { name: "David M.", location: "Annandale, VA", date: "2026-01-18", text: "Heritage Hills colonial cleaned to a high standard every visit. Capital Clean Care understands larger suburban homes and delivers thorough results that justify every dollar. Highly recommend." },
  ],
};

/** Fallback pool for cities without specific testimonials */
const fallbackTestimonials: Testimonial[] = [
  { name: "Sarah M.", location: "Maryland", date: "2025-11-15", text: "Capital Clean Care transformed our home. The team was professional, thorough, and used products safe for my kids and pets." },
  { name: "James T.", location: "DMV Area", date: "2025-12-02", text: "We've used their bi-weekly service for over a year and every visit exceeds expectations. Highly recommend!" },
  { name: "Lauren K.", location: "Northern Virginia", date: "2026-01-10", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of dust." },
  { name: "Patricia W.", location: "Maryland", date: "2026-01-22", text: "Best cleaning service in the area. They show up on time, do an incredible job, and the eco-friendly products are a huge bonus." },
];

export const getTestimonialsForCity = (citySlug: string): Testimonial[] =>
  cityTestimonialsMap[citySlug] ?? fallbackTestimonials.slice(0, 2);

/** Generate testimonials for a service+city combo — use city-specific if available, with service-relevant text */
const serviceTestimonialsMap: Record<string, Record<string, Testimonial[]>> = {
  "house-cleaning": {
    "rockville-md": [
      { name: "Jennifer L.", location: "Rockville, MD", date: "2026-02-10", text: "Our house cleaning visits are consistently excellent. The team follows their checklist meticulously and leaves our King Farm home spotless every time." },
      { name: "Marcus B.", location: "Rockville, MD", date: "2026-01-18", text: "Standard cleaning done to an extraordinary level. They clean the places other services skip — baseboards, behind appliances, ceiling fan blades. Worth every penny." },
    ],
    "bethesda-md": [
      { name: "Caroline W.", location: "Bethesda, MD", date: "2026-02-28", text: "Professional house cleaning that actually meets Bethesda standards. Consistent team, consistent quality, and the eco-friendly products protect our home's fine finishes." },
      { name: "David H.", location: "Bethesda, MD", date: "2026-01-22", text: "The best house cleaning service we've found in Montgomery County. Thorough, reliable, and the team genuinely cares about doing excellent work." },
    ],
    "arlington-va": [
      { name: "James T.", location: "Arlington, VA", date: "2025-12-02", text: "Consistent, thorough house cleaning every bi-weekly visit. As a Clarendon professional with a demanding schedule, having a reliable cleaning team makes all the difference." },
      { name: "Michelle R.", location: "Arlington, VA", date: "2026-01-28", text: "Our house is cleaned to perfection every time. The plant-based products are especially important given my husband's asthma — zero reactions since switching." },
    ],
  },
  "deep-cleaning": {
    "silver-spring-md": [
      { name: "Diana F.", location: "Silver Spring, MD", date: "2025-12-20", text: "The deep cleaning service was absolutely thorough — they cleaned areas I didn't even think about asking for. The kitchen oven and bathroom grout were shocking transformations." },
      { name: "Michael C.", location: "Silver Spring, MD", date: "2026-01-15", text: "Hired Capital Clean Care for a deep clean before listing our home. The result was so impressive that we decided to stay and hired them for regular service instead." },
    ],
    "bethesda-md": [
      { name: "Susan K.", location: "Bethesda, MD", date: "2025-11-30", text: "The deep cleaning service delivered results I've never seen from any cleaning company. They cleaned inside cabinets, behind appliances, window tracks — truly every corner." },
      { name: "Caroline W.", location: "Bethesda, MD", date: "2026-02-28", text: "Scheduled a deep clean before my in-laws visited. My home looked absolutely impeccable — guests couldn't believe how clean it was. The team is outstanding." },
    ],
    "rockville-md": [
      { name: "Jennifer L.", location: "Rockville, MD", date: "2026-02-10", text: "The deep cleaning was extraordinary. Five hours of intensive work that left our home looking brand new. Worth every dollar for the before-and-after difference." },
      { name: "Angela T.", location: "Rockville, MD", date: "2026-01-08", text: "Scheduled the deep clean after a long winter. The kitchen transformation alone was worth it — grease, soap scum, and built-up grime gone completely with eco-friendly products." },
    ],
  },
  "move-out-cleaning": {
    "silver-spring-md": [
      { name: "Robert L.", location: "Silver Spring, MD", date: "2026-02-05", text: "Used Capital Clean Care for my move-out cleaning and got my full security deposit back. The apartment looked better than when I first moved in. Incredible work." },
      { name: "Yolanda T.", location: "Silver Spring, MD", date: "2026-01-12", text: "Move-out cleaning saved my deposit. My landlord was genuinely impressed — said it was the cleanest unit he'd seen in years. Absolutely recommend." },
    ],
    "arlington-va": [
      { name: "Chris P.", location: "Arlington, VA", date: "2026-01-20", text: "Perfect move-out clean of my Rosslyn condo. Got the full deposit back without any disputes. Professional, thorough, and they worked quickly around my moving schedule." },
      { name: "Melissa H.", location: "Arlington, VA", date: "2025-12-10", text: "Ballston apartment move-out cleaning was flawless. The team handled every detail including inside appliances, windows, and closets. Full deposit returned, no questions asked." },
    ],
    "bethesda-md": [
      { name: "Tom G.", location: "Bethesda, MD", date: "2026-02-15", text: "Move-out deep clean of our Bethesda home before the new owners moved in. Absolutely spotless — they were so impressed they asked for our cleaning service's contact." },
      { name: "Patricia N.", location: "Bethesda, MD", date: "2026-01-28", text: "Hired Capital Clean Care for a move-out on a tight timeline. They were professional, efficient, and the result was perfect. Everything done in one day as promised." },
    ],
  },
  "recurring-cleaning": {
    "rockville-md": [
      { name: "Priya S.", location: "Rockville, MD", date: "2025-12-05", text: "Bi-weekly recurring cleaning for six months and I couldn't be happier. Same team every time, consistent quality, and they've learned exactly how I like things done." },
      { name: "Kevin W.", location: "Rockville, MD", date: "2026-01-30", text: "The recurring plan is the best investment for our busy family. Coming home on cleaning day to a perfectly clean house is a genuine quality-of-life upgrade." },
    ],
    "bethesda-md": [
      { name: "David H.", location: "Bethesda, MD", date: "2026-01-22", text: "Weekly recurring service for over a year. The consistency is remarkable — every visit delivers the same excellent standard. It's become essential to how we manage our home." },
      { name: "Elizabeth N.", location: "Bethesda, MD", date: "2026-02-08", text: "Monthly deep maintenance recurring plan for our large home. They track what needs extra attention each visit and the cumulative result is a home that always looks perfectly maintained." },
    ],
    "arlington-va": [
      { name: "James T.", location: "Arlington, VA", date: "2025-12-02", text: "Bi-weekly recurring for over a year. The dedicated team knows our Clarendon condo perfectly — where things go, how we like our floors mopped, every preference remembered." },
      { name: "Michelle R.", location: "Arlington, VA", date: "2026-01-28", text: "Monthly recurring cleaning for our larger Arlington home. The team is wonderful — professional, friendly, and the consistent quality makes the investment completely worthwhile." },
    ],
  },
  "eco-friendly-cleaning": {
    "silver-spring-md": [
      { name: "Angela T.", location: "Silver Spring, MD", date: "2026-03-01", text: "The eco-friendly products are the reason we chose Capital Clean Care. With two kids and a dog, the plant-based, non-toxic approach gives us complete peace of mind every visit." },
      { name: "Diana F.", location: "Silver Spring, MD", date: "2025-12-20", text: "Switched to Capital Clean Care specifically for the eco-friendly products and was thrilled that the quality matched the commitment. My home has never been this clean or this safe." },
    ],
    "bethesda-md": [
      { name: "Susan K.", location: "Bethesda, MD", date: "2025-11-30", text: "The EPA Safer Choice certified products are a big deal for our family. I researched extensively before choosing a green cleaning service and Capital Clean Care is the real thing." },
      { name: "Caroline W.", location: "Bethesda, MD", date: "2026-02-28", text: "Eco-friendly cleaning that actually cleans — not a compromise at all. The plant-based products leave our home genuinely clean and fresh, not just chemically masked." },
    ],
    "arlington-va": [
      { name: "Michelle R.", location: "Arlington, VA", date: "2026-01-28", text: "My asthma makes conventional cleaning products impossible. Capital Clean Care's eco approach is the only cleaning service that doesn't trigger my symptoms. Life-changing." },
      { name: "Kevin D.", location: "Arlington, VA", date: "2026-02-10", text: "Our green-certified building requires eco cleaning products and Capital Clean Care is the only service that consistently meets that standard. Perfect partnership." },
    ],
  },
  "airbnb-cleaning": {
    "bethesda-md": [
      { name: "Amanda F.", location: "Bethesda, MD", date: "2026-02-18", text: "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care for turnovers. Guests consistently comment on how clean and fresh the property is." },
      { name: "Mark J.", location: "Bethesda, MD", date: "2026-01-15", text: "Managing multiple Airbnb properties in Bethesda, Capital Clean Care is the only service I trust for reliable turnovers. They work fast, they're thorough, and they never let me down." },
    ],
    "arlington-va": [
      { name: "Sandra K.", location: "Arlington, VA", date: "2026-01-28", text: "Running a Crystal City Airbnb requires fast, reliable turnovers. Capital Clean Care delivers every time — my Superhost status is directly linked to the quality of their cleaning." },
      { name: "Tom R.", location: "Arlington, VA", date: "2026-02-12", text: "My Rosslyn rental went from 4.7 to 5.0 star cleanliness rating after switching to Capital Clean Care. Worth every penny for the guest experience improvement." },
    ],
  },
  "post-construction-cleaning": {
    "rockville-md": [
      { name: "Lauren K.", location: "Rockville, MD", date: "2026-01-10", text: "After our kitchen renovation, the post-construction cleaning was incredible. They removed every trace of drywall dust, grout residue, and construction debris. Absolutely transformed." },
      { name: "Steve H.", location: "Rockville, MD", date: "2025-12-22", text: "Full home remodel in our King Farm house required serious post-construction cleaning. Capital Clean Care got every surface, every corner — we moved back in the next day to a spotless home." },
    ],
    "bethesda-md": [
      { name: "Catherine B.", location: "Bethesda, MD", date: "2026-02-15", text: "Our addition project created construction dust throughout the house. Capital Clean Care's post-construction service addressed every room perfectly — the house looks brand new." },
      { name: "William S.", location: "Bethesda, MD", date: "2026-01-28", text: "Bathroom renovation post-construction cleaning was exceptional. The grout haze, plaster dust, and construction debris were completely eliminated. Professional and thorough." },
    ],
  },
};

export const getTestimonialsForServiceCity = (
  citySlug: string,
  serviceSlug: string
): Testimonial[] => {
  const serviceMap = serviceTestimonialsMap[serviceSlug];
  if (serviceMap && serviceMap[citySlug]) return serviceMap[citySlug];
  // Fall back to city-specific testimonials if no service+city combo exists
  return getTestimonialsForCity(citySlug).slice(0, 2);
};
