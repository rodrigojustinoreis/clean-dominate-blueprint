// Blog topic hubs — the 8 post categories consolidated into 4 substantial, indexable
// topic hubs (hub-and-spoke). Each hub is a real prerendered page at /blog/topic/<slug>
// with its own H1, unique intro, and the posts whose `category` maps to it. One-post
// categories are absorbed so no hub is thin.

export interface BlogTopic {
  slug: string;
  label: string;
  emoji: string;
  /** post.category values that belong to this topic */
  categories: string[];
  h1: string;
  /** unique intro paragraph shown on the hub page (keeps it from being thin) */
  intro: string;
  seoTitle: string;
  seoDescription: string;
}

export const BLOG_TOPICS: BlogTopic[] = [
  {
    slug: "pet-health",
    label: "Pet Health",
    emoji: "🐾",
    categories: ["Pet Health"],
    h1: "Pet-Safe Cleaning & Pet Health",
    intro:
      "Cleaning around dogs and cats is its own discipline. These guides connect a clean home to a healthier pet — covering allergens and dander, respiratory triggers and asthma, the truth behind 'pet-safe' labels, and what to do if a cleaning product poisons your pet. Every recommendation is built around the family member closest to the floor.",
    seoTitle: "Pet-Safe Cleaning & Pet Health Guides",
    seoDescription:
      "Expert guides on cleaning safely around dogs and cats — pet allergies and dander, asthma triggers, pet-safe products, and poisoning warning signs. From Capital Clean Care in the DMV.",
  },
  {
    slug: "home-cleaning",
    label: "Home & Surfaces",
    emoji: "🏠",
    categories: ["Home Care Guides", "Cleaning Guides", "Eco Living"],
    h1: "House & Surface Cleaning Guides",
    intro:
      "Practical, eco-friendly how-tos for every surface and room in your home — from carpets, grout, and hardwood to appliances, glass, and the toughest stains. Each guide favors plant-based, low-residue methods that actually work, without the harsh chemistry.",
    seoTitle: "House & Surface Cleaning Guides",
    seoDescription:
      "Eco-friendly how-to guides for cleaning every surface and room — carpets, grout, appliances, stains, and more. Plant-based methods that work, from Capital Clean Care.",
  },
  {
    slug: "local-guides",
    label: "Local Guides",
    emoji: "📍",
    categories: ["Local Guides", "Airbnb & Rentals"],
    h1: "Local Cleaning Guides — MD, DC & VA",
    intro:
      "Cleaning advice tuned to the DMV — Maryland's hard water, the region's humid summers, historic homes, and local rentals. These guides cover what actually matters for homes and short-term rentals across Montgomery County, Washington DC, and Northern Virginia.",
    seoTitle: "Local Cleaning Guides — Maryland, DC & Virginia",
    seoDescription:
      "Cleaning guides tuned to the DMV — hard water, humid summers, historic homes, and rentals across Maryland, Washington DC, and Northern Virginia. From Capital Clean Care.",
  },
  {
    slug: "tips-seasonal",
    label: "Tips & Seasonal",
    emoji: "💡",
    categories: ["Tips & Advice", "Seasonal Guides", "Cleaning Tips"],
    h1: "Cleaning Tips & Seasonal Guides",
    intro:
      "Quick wins, smart habits, and season-by-season checklists to keep your home effortlessly clean year-round. From spring deep-cleans to holiday prep and everyday time-savers — eco-friendly, and easy to actually stick with.",
    seoTitle: "Cleaning Tips & Seasonal Guides",
    seoDescription:
      "Quick cleaning tips, smart habits, and seasonal checklists to keep your home spotless year-round — eco-friendly and easy to follow. From Capital Clean Care.",
  },
];

export const getTopicBySlug = (slug?: string): BlogTopic | undefined =>
  BLOG_TOPICS.find((t) => t.slug === slug);

export const topicForCategory = (category: string): BlogTopic | undefined =>
  BLOG_TOPICS.find((t) => t.categories.includes(category));
