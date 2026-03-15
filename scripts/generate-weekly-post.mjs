#!/usr/bin/env node
/**
 * Weekly Blog Post Generator for Capital Clean Care
 *
 * Calls the Claude API to generate a new cleaning tips article with a
 * matching professional image, then appends it to src/data/auto-blog-posts.ts
 * and updates src/prerender.tsx and public/sitemap.xml.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-weekly-post.mjs
 *
 * Optional: set PEXELS_API_KEY for auto-matched professional photos.
 *   Get a free key at pexels.com/api (free, no credit card required).
 *
 * Run automatically every Monday via .github/workflows/weekly-blog-post.yml
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error("❌  ANTHROPIC_API_KEY not set");
  process.exit(1);
}

const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY || "";

// ── Curated clean home environment images (no people) ─────────────────────────
// All photos show clean interiors: kitchens, bathrooms, living rooms, bedrooms
const CURATED_IMAGES = {
  "Seasonal Guides": [
    { url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Spotless modern kitchen ready for spring in Maryland home" },
    { url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean bright kitchen after seasonal deep cleaning in DMV" },
    { url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Freshly cleaned living room for Maryland seasonal home prep" },
    { url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean cozy bedroom after seasonal cleaning in Silver Spring" },
    { url: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Spotless living room interior after deep cleaning in Maryland" },
  ],
  "Cleaning Guides": [
    { url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Immaculate kitchen after professional deep cleaning in DMV area" },
    { url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Sparkling clean bathroom after professional cleaning in Maryland" },
    { url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean modern bathroom with white tiles in Silver Spring home" },
    { url: "https://images.pexels.com/photos/1909652/pexels-photo-1909652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Bright spotless kitchen interior after house cleaning in Maryland" },
    { url: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean modern living room after deep cleaning service in DMV" },
    { url: "https://images.pexels.com/photos/3935349/pexels-photo-3935349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Tidy clean home interior after professional house cleaning Maryland" },
  ],
  "Eco Living": [
    { url: "https://images.pexels.com/photos/4099356/pexels-photo-4099356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Eco-friendly plant-based cleaning products on clean kitchen counter" },
    { url: "https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Natural cleaning ingredients vinegar baking soda lemon for eco home care" },
    { url: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Spotlessly clean kitchen using eco-friendly non-toxic products in Maryland" },
    { url: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Bright clean kitchen interior with eco-friendly cleaning results in DMV" },
    { url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Sparkling bathroom cleaned with non-toxic plant-based products in Maryland" },
  ],
  "Tips & Advice": [
    { url: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean and organized living room interior in Maryland home" },
    { url: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Spotless kitchen interior cleaning tips for DMV homeowners" },
    { url: "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean bathroom tips for Maryland homes in Silver Spring Bethesda" },
    { url: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Tidy clean bedroom cleaning advice for Northern Virginia homes" },
    { url: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean organized living room house cleaning tips for DMV families" },
    { url: "https://images.pexels.com/photos/3935349/pexels-photo-3935349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean modern home interior cleaning schedule advice Maryland" },
  ],
  "Airbnb & Rentals": [
    { url: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Spotless Airbnb bedroom ready for guests in Washington DC Maryland" },
    { url: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean modern rental property interior in DMV area" },
    { url: "https://images.pexels.com/photos/1909652/pexels-photo-1909652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Immaculate rental kitchen after turnover cleaning in Maryland" },
    { url: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Spotless rental bathroom after Airbnb cleaning service in DMV" },
    { url: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Clean rental living space ready for guests in Northern Virginia" },
  ],
};

// Pick image deterministically by slug so the same post always gets the same photo
function pickImage(category, slug) {
  const pool = CURATED_IMAGES[category] || CURATED_IMAGES["Tips & Advice"];
  const hash = [...slug].reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  return pool[hash % pool.length];
}

// ── 1. Read existing posts to avoid duplicate topics ──────────────────────────
const autoBlogPath = path.join(ROOT, "src/data/auto-blog-posts.ts");
const autoBlogSource = fs.readFileSync(autoBlogPath, "utf8");
const existingSlugs = [...autoBlogSource.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (m) => m[1]
);

// ── 2. Call Claude API to generate a new article ──────────────────────────────
const today = new Date();
const dateStr = today.toISOString().split("T")[0];
const month = today.toLocaleString("en-US", { month: "long" });
const season =
  today.getMonth() < 3 || today.getMonth() === 11
    ? "winter"
    : today.getMonth() < 6
    ? "spring"
    : today.getMonth() < 9
    ? "summer"
    : "fall";

console.log("🤖  Calling Claude API to generate blog post...");

const systemPrompt = `You are a senior SEO content strategist and professional writer for Capital Clean Care,
a premium eco-friendly house cleaning company serving Maryland, Washington DC, and Northern Virginia.

Company details:
- Name: Capital Clean Care
- Phone: (240) 704-2551
- Location: Silver Spring, MD (serves all of MD, DC, VA)
- USP: eco-friendly, non-toxic, plant-based products; background-checked teams; 5.0 stars Google
- Services: house cleaning, deep cleaning, move-out cleaning, recurring cleaning, eco-friendly cleaning, Airbnb cleaning, office cleaning, post-construction cleaning

SEO REQUIREMENTS (mandatory):
- Primary keyword must appear in: title, first paragraph, at least 2 H2 headings, and naturally throughout
- Use LSI (Latent Semantic Indexing) keywords: "maid service", "house cleaners", "residential cleaning", "professional cleaners", "cleaning company", "home cleaning service", "janitorial service"
- Use location keywords naturally: "Maryland", "Silver Spring", "Rockville", "Bethesda", "Gaithersburg", "Washington DC", "Northern Virginia", "DMV area", "Montgomery County"
- Use long-tail keywords: "how to clean [specific area]", "best way to [cleaning task]", "professional cleaning tips for [location]"
- Target search intent: informational (tips/how-to) + local (Maryland/DMV) + commercial (Capital Clean Care services)
- Keyword density: 1-2% for primary keyword, mentioned naturally without stuffing
- Include semantic variations: "clean home", "spotless house", "fresh living space", "sanitized surfaces"

INTERNAL LINKING (required):
- 2-3 links to: /services/deep-cleaning, /services/recurring-cleaning, /services/eco-friendly-cleaning, /services/move-out-cleaning, /services/airbnb-cleaning
- 1-2 links to: /locations/silver-spring-md, /locations/rockville-md, /locations/bethesda-md, /locations/arlington-va
- Closing CTA paragraph linking to /contact

CONTENT STRUCTURE:
- H1 equivalent: the title field
- Opening paragraph: hook with primary keyword + location context
- H2 sections: 4-6 sections with keyword-rich headings
- Use bullet lists for scannable content
- Include specific tips, numbers, and actionable advice
- Closing section: natural pitch for Capital Clean Care services + CTA

Write in a helpful, authoritative, friendly tone that builds trust.

Format: Return ONLY valid JSON (no markdown, no code fences). No explanation outside the JSON.`;

const userPrompt = `Generate a new weekly SEO-optimized cleaning tips blog article for ${month} ${today.getFullYear()}.

The article should target ${season} cleaning topics relevant to the Maryland/DMV area.

Existing slugs to AVOID duplicating: ${existingSlugs.join(", ")}

CONTENT FOCUS — pick one topic per week, rotating through all of these:

ROOM-BY-ROOM CLEANING:
- How to deep clean a kitchen (grease, oven, stovetop, appliances, cabinets)
- How to clean a bathroom professionally (toilet, shower, tiles, grout, mildew)
- How to clean a bedroom and remove dust mites, allergens, and odors
- How to clean a living room (upholstery, cushions, baseboards, ceiling fans)
- How to clean hardwood floors, tile, and carpets without damaging them
- How to clean windows, mirrors, and glass surfaces streak-free

TOUGH STAIN REMOVAL:
- How to remove tough stains from mattresses using eco-friendly products
- How to remove wine, coffee, and food stains from carpets and upholstery
- How to remove grease stains from kitchen surfaces and appliances
- How to eliminate mold and mildew from bathrooms and basements
- How to remove hard water stains and soap scum from showers and faucets
- Eco-friendly laundry: remove stains from clothes, sheets, and towels

APPLIANCES & DEEP CLEANING:
- How to deep clean a refrigerator, dishwasher, and washing machine
- How to clean and deodorize trash cans, garbage disposals, and drains
- How to disinfect high-touch surfaces without harsh chemicals
- How to clean air vents, filters, and improve indoor air quality

ECO-FRIENDLY PRODUCTS & TIPS:
- Best plant-based cleaning products for every room in the house
- How to make DIY natural cleaners with vinegar, baking soda, and lemon
- Non-toxic cleaning tips for homes with kids, pets, and allergies
- Benefits of switching to eco-friendly cleaning products in Maryland

SERVICES & SEASONAL:
- Spring/summer/fall/winter deep cleaning checklist for Maryland homes
- Move-in / move-out cleaning checklist for Maryland renters
- How to prepare your home for professional cleaning service
- Recurring cleaning schedule: what to clean daily, weekly, monthly
- Airbnb and short-term rental cleaning checklist for DMV hosts
- Post-construction and renovation cleaning guide for Maryland homeowners
- How to choose a professional cleaning service in Silver Spring / DMV

Always tie practical tips back to Capital Clean Care's eco-friendly services with a natural CTA.

HIGH-VALUE SEO KEYWORDS to weave in naturally:
- "house cleaning service Maryland", "maid service DMV", "professional cleaners Silver Spring"
- "eco-friendly cleaning products Maryland", "non-toxic cleaning tips", "plant-based cleaners"
- "how to clean [room/surface/appliance]", "remove tough stains", "deep cleaning checklist"
- "recurring cleaning service Maryland", "move-out cleaning checklist", "Airbnb cleaning DMV"

Return this exact JSON structure:
{
  "slug": "seo-optimized-kebab-case-slug",
  "title": "Article Title with Primary Keyword (55-65 chars ideal for Google)",
  "excerpt": "Meta-description style excerpt with primary keyword near the start (140-155 chars, entice clicks)",
  "readTime": "X min read",
  "category": "one of: Cleaning Guides | Eco Living | Tips & Advice | Seasonal Guides | Airbnb & Rentals",
  "imageQuery": "2-4 word Pexels/Unsplash search query for a professional cleaning photo (e.g. 'house cleaning professional')",
  "imageAlt": "Descriptive alt text for the article hero image, 10-15 words, includes location and service",
  "content": "Full HTML article (900-1200 words). Use <h2>, <h3>, <ul>, <li>, <p>, <strong>, <a href='...'> tags. Image placeholder is handled separately — start content with the first H2 or intro paragraph. Include all internal links and CTA."
}

The article must be genuinely helpful, locally relevant to Maryland/DC/Virginia, and structured to rank on Google for house cleaning searches in the DMV area.`;

const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    model: "claude-opus-4-6",
    max_tokens: 5000,
    system: systemPrompt,
    messages: [{ role: "user", content: userPrompt }],
  }),
});

if (!response.ok) {
  const err = await response.text();
  console.error("❌  Claude API error:", err);
  process.exit(1);
}

const apiResult = await response.json();
const rawText = apiResult.content[0].text.trim();

// Strip markdown code fences if Claude added them
let jsonText = rawText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");

// Fix literal newlines inside JSON strings (Claude sometimes breaks strings across lines)
// Strategy: replace newlines that appear inside quoted strings with a space
jsonText = jsonText.replace(/"(?:[^"\\]|\\.)*"/gs, (match) =>
  match.replace(/\r?\n/g, " ")
);

let article;
try {
  article = JSON.parse(jsonText);
} catch (e) {
  console.error("❌  Failed to parse Claude response as JSON:", e.message);
  console.error("Raw response:", rawText.slice(0, 500));
  process.exit(1);
}

// Validate required fields
const required = ["slug", "title", "excerpt", "readTime", "category", "content"];
for (const field of required) {
  if (!article[field]) {
    console.error(`❌  Missing required field: ${field}`);
    process.exit(1);
  }
}

if (existingSlugs.includes(article.slug)) {
  console.error(`❌  Slug already exists: ${article.slug}`);
  process.exit(1);
}

console.log(`✅  Generated article: "${article.title}" (${article.slug})`);

// ── 3. Fetch a professional matching image ────────────────────────────────────
let heroImage = null;

if (PIXABAY_API_KEY && article.imageQuery) {
  try {
    console.log(`🖼️   Fetching image from Pixabay: "${article.imageQuery}"...`);
    const query = encodeURIComponent(`${article.imageQuery} cleaning`);
    const pixabayRes = await fetch(
      `https://pixabay.com/api/?key=${PIXABAY_API_KEY}&q=${query}&image_type=photo&orientation=horizontal&per_page=5&safesearch=true&min_width=1200`
    );
    if (pixabayRes.ok) {
      const pixabayData = await pixabayRes.json();
      if (pixabayData.hits && pixabayData.hits.length > 0) {
        const photo = pixabayData.hits[0];
        heroImage = {
          url: photo.largeImageURL || photo.webformatURL,
          alt: article.imageAlt || article.title,
        };
        console.log(`✅  Image from Pixabay: ${heroImage.url}`);
      }
    }
  } catch (e) {
    console.warn("⚠️   Pixabay fetch failed, using fallback image:", e.message);
  }
}

if (!heroImage) {
  const curated = pickImage(article.category, article.slug);
  heroImage = { url: curated.url, alt: article.imageAlt || curated.alt };
  console.log(`✅  Using curated image for category: ${article.category}`);
}

// ── 4. Prepend hero image to article content ──────────────────────────────────
const heroImageHtml = `<figure style="margin:0 0 2rem;border-radius:12px;overflow:hidden;">
  <img
    src="${heroImage.url}"
    alt="${heroImage.alt}"
    width="1260"
    height="750"
    style="width:100%;height:auto;display:block;object-fit:cover;"
    loading="lazy"
  />
</figure>`;

const fullContent = heroImageHtml + "\n" + article.content;

// ── 5. Append to auto-blog-posts.ts ──────────────────────────────────────────
const escapedContent = fullContent
  .replace(/\\/g, "\\\\")
  .replace(/`/g, "\\`")
  .replace(/\$/g, "\\$");

const escapedExcerpt = article.excerpt.replace(/"/g, '\\"');
const escapedTitle = article.title.replace(/"/g, '\\"');

const newEntry = `  {
    slug: "${article.slug}",
    title: "${escapedTitle}",
    excerpt: "${escapedExcerpt}",
    date: "${dateStr}",
    readTime: "${article.readTime}",
    category: "${article.category}",
    coverImage: "${heroImage.url.replace(/"/g, '\\"')}",
    content: \`${escapedContent}\`,
  },`;

const updatedAutoSource = autoBlogSource.replace(
  /(\n\s*\/\/ Posts are appended here automatically.*\n)(];)/,
  `$1${newEntry}\n$2`
);

fs.writeFileSync(autoBlogPath, updatedAutoSource, "utf8");
console.log(`✅  Appended to auto-blog-posts.ts`);

// ── 6. Update prerender.tsx ───────────────────────────────────────────────────
const prerenderPath = path.join(ROOT, "src/prerender.tsx");
let prerenderSource = fs.readFileSync(prerenderPath, "utf8");

prerenderSource = prerenderSource.replace(
  /("\/blog\/recurring-cleaning-weekly-biweekly-monthly",)/,
  `$1\n    "/blog/${article.slug}",`
);

fs.writeFileSync(prerenderPath, prerenderSource, "utf8");
console.log(`✅  Updated prerender.tsx`);

// ── 7. Update sitemap.xml ─────────────────────────────────────────────────────
const sitemapPath = path.join(ROOT, "public/sitemap.xml");
let sitemapSource = fs.readFileSync(sitemapPath, "utf8");

const newSitemapEntry = `  <url><loc>https://capitalcleancare.com/blog/${article.slug}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`;

sitemapSource = sitemapSource.replace(
  /(\s*<!-- Maryland City Pages -->)/,
  `\n${newSitemapEntry}$1`
);

fs.writeFileSync(sitemapPath, sitemapSource, "utf8");
console.log(`✅  Updated sitemap.xml`);

console.log(`\n🎉  Done! New post: /blog/${article.slug}`);
console.log(`     Title:    ${article.title}`);
console.log(`     Date:     ${dateStr}`);
console.log(`     Image:    ${heroImage.url.slice(0, 60)}...`);
console.log(`     Keywords: ${article.imageQuery || "auto"}`);
