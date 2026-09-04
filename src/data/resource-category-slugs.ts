// Resource Center category slugs — a tiny module so the client router can register the
// /resources/<category> routes WITHOUT pulling the full category copy (intros, SEO text) into
// the initial bundle of every page. resource-categories.ts asserts it stays in sync with this list.
export const RESOURCE_CATEGORY_SLUGS = [
  "checklists",
  "move-out-guides",
  "deep-cleaning",
  "recurring-cleaning",
  "apartment-cleaning",
  "pricing-guides",
  "eco-friendly-cleaning",
  "local-guides",
  "faq",
  "cleaning-tips",
] as const;
