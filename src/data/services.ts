export interface ServiceData {
  name: string;
  slug: string;
  shortDescription: string;
  intro: string;
  whatsIncluded: string[];
  benefits: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
}

export const services: ServiceData[] = [
  {
    name: "Standard Cleaning",
    slug: "standard-cleaning",
    shortDescription: "Routine cleaning that keeps your home consistently fresh and tidy between deeper sessions.",
    intro: "Our standard cleaning service is designed for homeowners who want to maintain a consistently clean and comfortable living environment. Whether you need a one-time refresh or regular upkeep, our trained professionals handle every room with care and precision.\n\nWe use only eco-friendly, non-toxic cleaning products that are safe for your family, pets, and the environment. Every visit follows a detailed checklist tailored to your home's specific needs, ensuring nothing gets overlooked.\n\nCapital Clean Care's standard cleaning covers all the essential tasks that keep your home looking its best. From dusting and vacuuming to kitchen and bathroom sanitization, we deliver thorough results you can see and feel. Our background-checked teams arrive on time, fully equipped, and ready to transform your space.\n\nChoosing a professional cleaning service means reclaiming your weekends and evenings. Instead of spending hours scrubbing and organizing, you can focus on what matters most while we handle the rest. Our satisfaction guarantee means you never have to worry about the quality of our work.",
    whatsIncluded: [
      "Dusting all accessible surfaces, shelves, and décor",
      "Vacuuming carpets, rugs, and upholstered furniture",
      "Mopping hard floors throughout the home",
      "Kitchen countertop and appliance exterior wiping",
      "Sink and fixture sanitization in kitchens and bathrooms",
      "Toilet, shower, and tub cleaning and disinfecting",
      "Mirror and glass surface polishing",
      "Trash removal and bin liner replacement",
      "Light switch and door handle sanitization",
      "General tidying and straightening of rooms"
    ],
    benefits: [
      "Eco-friendly, non-toxic products safe for families and pets",
      "Background-checked, trained cleaning professionals",
      "Consistent quality with our detailed cleaning checklist",
      "Flexible scheduling to fit your lifestyle",
      "100% satisfaction guarantee on every visit"
    ],
    faqs: [
      { q: "How long does a standard cleaning take?", a: "A standard cleaning typically takes between 2 to 4 hours depending on the size of your home and its current condition. Larger homes or those requiring extra attention may take slightly longer." },
      { q: "Do I need to provide cleaning supplies?", a: "No. Our teams arrive fully equipped with all necessary eco-friendly cleaning products and professional-grade equipment. We bring everything needed to deliver exceptional results." },
      { q: "Can I customize what gets cleaned?", a: "Absolutely. While our standard cleaning follows a comprehensive checklist, we're happy to adjust priorities based on your preferences. Just let us know your specific needs when booking." },
      { q: "Is standard cleaning the same as deep cleaning?", a: "Standard cleaning covers routine maintenance tasks. Deep cleaning is more intensive and includes areas like inside appliances, baseboards, and detailed scrubbing. We recommend a deep clean first if it's been a while since your last professional cleaning." },
      { q: "How often should I schedule standard cleaning?", a: "Most clients find that weekly or bi-weekly cleanings keep their homes in excellent condition. Monthly cleanings work well for smaller households or those who maintain daily tidying habits." },
      { q: "Are your cleaning teams insured?", a: "Yes. Capital Clean Care is fully licensed and insured. Every team member is background-checked and trained to our exacting standards, giving you complete peace of mind." }
    ],
    metaTitle: "Standard House Cleaning Services | Capital Clean Care",
    metaDescription: "Professional standard house cleaning in MD, DC & VA. Eco-friendly products, background-checked teams, satisfaction guaranteed. Get a free quote today."
  },
  {
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    shortDescription: "An intensive, top-to-bottom clean that reaches every hidden corner and neglected surface.",
    intro: "When routine cleaning isn't enough, Capital Clean Care's deep cleaning service delivers the thorough, intensive treatment your home deserves. Our deep cleaning goes far beyond surface-level tidying to address built-up grime, hidden dust, and neglected areas that accumulate over time.\n\nEvery deep cleaning session begins with a walkthrough assessment of your home. Our team identifies priority areas and customizes the cleaning plan to address your specific concerns. Whether it's soap scum buildup in bathrooms, grease accumulation in the kitchen, or dust collected behind furniture, we tackle it all.\n\nOur eco-friendly approach means we never compromise your family's health for cleanliness. We use plant-based, non-toxic cleaning solutions that are tough on dirt but gentle on surfaces and safe for children and pets. Combined with professional-grade equipment, we achieve results that standard cleaning simply cannot match.\n\nDeep cleaning is ideal as a first-time service before transitioning to regular maintenance, as a seasonal refresh, or whenever your home needs extra attention. Many clients schedule deep cleanings quarterly to complement their regular cleaning routine, ensuring their home stays in pristine condition year-round.",
    whatsIncluded: [
      "Everything in our standard cleaning package",
      "Detailed baseboard and crown molding dusting",
      "Interior window sill and track cleaning",
      "Inside oven and microwave deep cleaning",
      "Refrigerator interior wipe-down",
      "Cabinet exterior and hardware degreasing",
      "Ceiling fan and light fixture dusting",
      "Vent and register cover cleaning",
      "Behind and under furniture cleaning",
      "Door frame and wall spot cleaning",
      "Tile grout scrubbing in bathrooms",
      "Detailed fixture polishing throughout"
    ],
    benefits: [
      "Eliminates months of built-up grime and allergens",
      "Reaches hidden areas missed by routine cleaning",
      "Improves indoor air quality for healthier living",
      "Restores surfaces to like-new condition",
      "Perfect preparation for regular cleaning maintenance"
    ],
    faqs: [
      { q: "How long does a deep cleaning session take?", a: "Deep cleaning typically takes 4 to 8 hours depending on home size and condition. A 3-bedroom home usually requires about 5 to 6 hours for a thorough deep clean." },
      { q: "How is deep cleaning different from standard cleaning?", a: "Deep cleaning covers everything in our standard service plus intensive work on areas like inside appliances, baseboards, ceiling fans, grout, behind furniture, and vent covers. It's significantly more detailed and time-intensive." },
      { q: "How often should I get a deep cleaning?", a: "We recommend deep cleaning at least twice a year, ideally quarterly. Many clients start with a deep clean and then maintain with regular standard cleanings." },
      { q: "Do you move furniture during deep cleaning?", a: "Yes, we carefully move accessible furniture to clean behind and underneath. Heavy or built-in items may not be moved, but we'll clean as thoroughly as possible around them." },
      { q: "Is deep cleaning safe for hardwood floors?", a: "Absolutely. We use pH-neutral, eco-friendly products specifically designed for hardwood and other delicate surfaces. Our team is trained in proper care for all floor types." },
      { q: "Can I combine deep cleaning with other services?", a: "Yes. Many clients pair deep cleaning with move-in/move-out services or add-ons like interior window washing or refrigerator cleaning for a comprehensive refresh." },
      { q: "What eco-friendly products do you use?", a: "We use plant-based, non-toxic cleaning solutions free from harsh chemicals, artificial fragrances, and allergens. Our products are safe for families, pets, and the environment while delivering professional-grade cleaning results." }
    ],
    metaTitle: "Deep Cleaning Services in MD, DC & VA | Capital Clean Care",
    metaDescription: "Intensive deep house cleaning across Maryland, DC & Virginia. Eco-friendly products, thorough top-to-bottom cleaning. Licensed & insured. Free quotes available."
  },
  {
    name: "Move In / Move Out Cleaning",
    slug: "move-in-move-out-cleaning",
    shortDescription: "Comprehensive cleaning for property transitions — leave or arrive to a spotless space.",
    intro: "Moving is stressful enough without worrying about cleaning. Capital Clean Care's move-in and move-out cleaning service ensures every property transition starts or ends with a perfectly clean space. Whether you're a homeowner, tenant, or property manager, we deliver the thorough cleaning needed to meet inspection standards and personal expectations.\n\nOur move-in/move-out service is specifically designed for empty or near-empty properties, allowing our teams unrestricted access to every surface, corner, and fixture. Without furniture in the way, we can address areas that are typically difficult to reach during regular cleanings.\n\nWe understand that timing is critical during moves. Our flexible scheduling accommodates tight timelines, and our efficient teams work quickly without sacrificing quality. We coordinate with your moving schedule to ensure the property is ready exactly when you need it.\n\nFor landlords and property managers, our service helps maximize security deposit returns for tenants and ensures properties are move-in ready for new occupants. We provide detailed cleaning that covers every requirement typically found on move-out inspection checklists.",
    whatsIncluded: [
      "Complete deep cleaning of all rooms",
      "Inside all cabinets, drawers, and closets",
      "Full appliance interior cleaning (oven, fridge, dishwasher)",
      "Bathroom deep sanitization including tile and grout",
      "Window sill and track detailed cleaning",
      "Baseboard and trim wiping throughout",
      "Light fixture and ceiling fan cleaning",
      "Garage or storage area sweeping (if applicable)",
      "Wall spot cleaning and scuff removal",
      "Final inspection walkthrough"
    ],
    benefits: [
      "Meets or exceeds move-out inspection requirements",
      "Helps maximize security deposit returns",
      "Flexible scheduling around your moving timeline",
      "Empty-home access for the most thorough results",
      "Same-day and next-day availability when possible"
    ],
    faqs: [
      { q: "Should I clean before or after moving out?", a: "We recommend scheduling your cleaning after all belongings have been removed. This allows our team full access to every surface, resulting in the most thorough clean possible." },
      { q: "Do you offer move-in cleaning for new homes?", a: "Yes. Whether it's a newly constructed home or a previously occupied property, we ensure your new space is spotless and sanitized before you settle in." },
      { q: "How far in advance should I book?", a: "We recommend booking at least one week in advance, especially during peak moving seasons. However, we do our best to accommodate last-minute requests when possible." },
      { q: "Will this cleaning help me get my security deposit back?", a: "Our move-out cleaning is designed to meet or exceed standard inspection requirements. While we can't guarantee deposit outcomes, our thorough approach gives you the best possible chance." },
      { q: "Do you clean the garage or outdoor spaces?", a: "Garage sweeping and basic outdoor area tidying can be included upon request. Please let us know when booking so we can plan accordingly." },
      { q: "Can you clean on the same day as my move?", a: "Yes, we can coordinate with your moving schedule. We recommend having us come in after the movers have finished for the most thorough results." }
    ],
    metaTitle: "Move In & Move Out Cleaning | Capital Clean Care",
    metaDescription: "Professional move-in and move-out cleaning services in MD, DC & VA. Thorough property transition cleaning with eco-friendly products. Book your free quote."
  },
  {
    name: "Post-Construction Cleaning",
    slug: "post-construction-cleaning",
    shortDescription: "Specialized cleanup after renovations, removing construction dust, debris, and residue.",
    intro: "Renovations and construction projects transform spaces, but they also leave behind layers of dust, debris, and residue that require specialized cleaning. Capital Clean Care's post-construction cleaning service is designed to handle the unique challenges that come after building or remodeling work is completed.\n\nConstruction dust is unlike regular household dust — it's finer, more pervasive, and can settle in places you'd never expect. Our trained teams use specialized equipment and techniques to capture and remove this stubborn dust from every surface, vent, and crevice in your home.\n\nOur post-construction cleaning typically involves multiple phases. The initial rough clean removes large debris and bulk dust. The detailed clean addresses surfaces, fixtures, and finishes. The final touch-up ensures everything meets our exacting standards and your expectations.\n\nWhether you've completed a kitchen remodel, bathroom renovation, room addition, or whole-home construction, our team has the expertise and equipment to transform your construction site into a livable, pristine space. We work with homeowners, contractors, and property developers throughout the DMV area.",
    whatsIncluded: [
      "Removal of all construction dust from surfaces",
      "HEPA vacuum cleaning of all floors and carpets",
      "Window and glass cleaning (interior, removing stickers/labels)",
      "Paint splatter and adhesive residue removal",
      "Vent and ductwork cover cleaning",
      "Cabinet interior and exterior detail cleaning",
      "Fixture polishing and hardware cleaning",
      "Baseboard and trim detail wiping",
      "Final debris removal and disposal",
      "Multi-phase cleaning with quality inspection"
    ],
    benefits: [
      "Specialized equipment for construction-grade dust",
      "Multi-phase approach for thorough results",
      "Experience with all types of renovation projects",
      "Safe removal of adhesives, paint, and residue",
      "Coordination with contractors and project timelines"
    ],
    faqs: [
      { q: "When should I schedule post-construction cleaning?", a: "Ideally, schedule cleaning after all construction work is complete, including painting and fixture installation. This ensures we can address everything in a single comprehensive session." },
      { q: "How many cleaning phases are involved?", a: "Most projects require 2-3 phases: rough cleaning to remove major debris, detailed cleaning of all surfaces and fixtures, and a final touch-up to ensure perfection." },
      { q: "Can you remove paint overspray from surfaces?", a: "Yes, our team is trained in safe removal of paint splatter, adhesive residue, and construction markings from various surfaces without causing damage." },
      { q: "Do you work with contractors?", a: "Absolutely. We regularly coordinate with contractors and builders to schedule cleaning at the right phase of the project. We can work around remaining punch-list items." },
      { q: "Is post-construction dust harmful?", a: "Construction dust can contain irritants and fine particles that affect indoor air quality. Our HEPA-filtered equipment captures these particles effectively, creating a healthier environment." },
      { q: "How long does post-construction cleaning take?", a: "Timing depends on the scope of the construction project. A single-room renovation might take 4-6 hours, while a whole-home build could require multiple days of cleaning." }
    ],
    metaTitle: "Post-Construction Cleaning Services | Capital Clean Care",
    metaDescription: "Expert post-construction and renovation cleanup in MD, DC & VA. Specialized dust removal, multi-phase cleaning. Licensed, insured, eco-friendly. Free estimates."
  },
  {
    name: "Recurring Cleaning",
    slug: "recurring-cleaning",
    shortDescription: "Scheduled weekly, bi-weekly, or monthly cleaning plans with preferred pricing.",
    intro: "Consistency is the key to a truly clean home. Capital Clean Care's recurring cleaning plans provide scheduled, reliable cleaning on a weekly, bi-weekly, or monthly basis — whichever frequency fits your lifestyle and household needs.\n\nWhen you choose a recurring plan, you're assigned a dedicated cleaning team that gets to know your home and your preferences. Over time, your team becomes familiar with your specific needs, priority areas, and any special instructions, resulting in increasingly personalized and efficient service.\n\nRecurring clients enjoy preferred pricing that makes professional cleaning more affordable than you might expect. The more frequently we visit, the less intensive each session needs to be, which means shorter visit times and lower costs per cleaning. It's an investment in your time, health, and peace of mind.\n\nOur eco-friendly cleaning products ensure that frequent cleanings never expose your family to harsh chemical buildup. The plant-based solutions we use are gentle enough for regular application while remaining effective against dirt, germs, and allergens. With Capital Clean Care handling the cleaning, you can spend your free time on the things you actually enjoy.",
    whatsIncluded: [
      "All standard cleaning tasks on every visit",
      "Dedicated team assigned to your home",
      "Customizable cleaning checklist and priorities",
      "Preferred scheduling with consistent day/time slots",
      "Rotating deep-clean focus areas each visit",
      "Simple rescheduling with advance notice",
      "Regular quality reviews and check-ins",
      "Priority booking for add-on services"
    ],
    benefits: [
      "Discounted rates compared to one-time cleanings",
      "Same trusted team every visit for consistency",
      "Homes stay consistently clean with less effort",
      "Flexible plans that adjust to your schedule",
      "No long-term contracts — pause or cancel anytime"
    ],
    faqs: [
      { q: "What frequency options do you offer?", a: "We offer weekly, bi-weekly (every two weeks), and monthly recurring plans. Bi-weekly is our most popular option, offering a great balance of cleanliness and value." },
      { q: "Do I get a discount for recurring service?", a: "Yes. Recurring clients receive preferred pricing based on frequency. Weekly plans receive the largest discount, followed by bi-weekly and monthly. Contact us for specific pricing." },
      { q: "Will I have the same cleaning team every time?", a: "Yes, we assign a dedicated team to your home. Consistency means your team knows your preferences and can deliver increasingly tailored results with each visit." },
      { q: "Can I change my cleaning frequency?", a: "Absolutely. You can adjust your frequency at any time. Want to increase from monthly to bi-weekly? Simply let us know and we'll update your schedule." },
      { q: "What if I need to skip or reschedule a cleaning?", a: "Life happens. We ask for at least 24-48 hours notice for rescheduling. There are no penalties for occasional schedule changes." },
      { q: "Is there a contract or commitment?", a: "No long-term contracts. Our recurring plans are flexible — you can pause, adjust, or cancel at any time with reasonable notice." },
      { q: "Can I add deep cleaning to my recurring plan?", a: "Yes. Many recurring clients schedule a deep cleaning quarterly as a complement to their regular service. We can build this into your plan automatically." }
    ],
    metaTitle: "Recurring House Cleaning Plans | Capital Clean Care",
    metaDescription: "Weekly, bi-weekly & monthly house cleaning plans in MD, DC & VA. Dedicated teams, eco-friendly products, preferred pricing. No contracts. Get your free quote."
  }
];

export const getServiceBySlug = (slug: string): ServiceData | undefined =>
  services.find((s) => s.slug === slug);
