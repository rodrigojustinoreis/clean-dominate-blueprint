import { Heart, Shield, MessageSquare, CalendarClock } from "lucide-react";

/**
 * Shared service-attribute content for the senior-cleaning hubs (Montgomery County,
 * Washington DC, Northern Virginia). These describe the SERVICE (not a location), so
 * they are intentionally identical across regions — each hub's uniqueness comes from
 * its localized hero, intro, communities, FAQ, and local resources.
 */

export const SENIOR_INCLUDED: { title: string; text: string }[] = [
  { title: "Dusting at safe heights", text: "We reach the high and low spots — shelves, ceiling fans, baseboards — so there's never a need to climb, stretch, or risk a fall." },
  { title: "Fall-prevention bathroom cleaning", text: "Tubs, tiles, and floors left clean, dry, and residue-free — no slippery film underfoot where a slip is most dangerous." },
  { title: "Fresh bed linen changes", text: "Beds stripped, changed, and neatly made with fresh linens — one of the tasks that gets hardest to manage with age." },
  { title: "Kitchen & refrigerator cleaning", text: "Counters, sink, stovetop, and inside the fridge — including removing expired food when you'd like us to (only with permission)." },
  { title: "Gentle light organizing", text: "We tidy clutter and clear surfaces to keep walkways safe — always asking first, never moving belongings without consent." },
  { title: "Fragrance-free & hypoallergenic products", text: "Plant-based, EPA Safer Choice cleaners available fragrance-free — gentle on sensitive lungs, skin, and allergies." },
];

export const SENIOR_PROMISE: { Icon: typeof Shield; title: string; text: string }[] = [
  { Icon: Heart, title: "The same friendly cleaner every visit", text: "Seniors value routine and a familiar face. We keep the same trusted cleaner on your schedule so every visit feels comfortable and safe." },
  { Icon: Shield, title: "Background-checked, licensed & insured", text: "Every team member passes a thorough background check. We're fully licensed and insured, so your family is protected." },
  { Icon: MessageSquare, title: "Family communication", text: "We send arrival and departure text updates to the adult child who books — so you always know when we've come and gone." },
  { Icon: CalendarClock, title: "Flexible scheduling", text: "Weekly, biweekly, or monthly — as often or as little as your parent needs. Easy to change as needs change." },
];

export const SENIOR_GUIDE_LINKS: { to: string; label: string }[] = [
  { to: "/resources/signs-aging-parent-needs-help-housekeeping", label: "Is it time to get Mom or Dad some help at home?" },
  { to: "/resources/clean-home-fall-prevention-seniors", label: "Fall prevention starts with a clean floor" },
  { to: "/resources/cleaning-service-vs-caregiver-elderly", label: "Cleaning service or caregiver: which does your parent need?" },
  { to: "/resources/how-to-hire-cleaning-service-elderly-parents", label: "10 questions to ask before hiring for a senior's home" },
  { to: "/resources/house-cleaning-seniors-silver-spring-leisure-world", label: "Serving Leisure World and Silver Spring's 55+ communities" },
  { to: "/resources/aging-in-place-montgomery-county-cleaning", label: "A practical guide to aging in place in Montgomery County" },
  { to: "/resources/house-cleaning-for-seniors", label: "House cleaning for seniors: what to look for and how to choose" },
  { to: "/resources/free-house-cleaning-for-seniors", label: "Free & low-cost cleaning help: Medicare, Medicaid, VA & more" },
];
