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

const PEXELS_API_KEY = process.env.PEXELS_API_KEY || "";

// ── Curated fallback images by category (Pexels CDN — no API key needed) ─────
const FALLBACK_IMAGES = {
  "Seasonal Guides": [
    { url: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Professional seasonal home cleaning service in Maryland" },
    { url: "https://images.pexels.com/photos/4099354/pexels-photo-4099354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Seasonal deep cleaning checklist for DMV homeowners" },
  ],
  "Cleaning Guides": [
    { url: "https://images.pexels.com/photos/4253925/pexels-photo-4253925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Professional house cleaning guide for Maryland homes" },
    { url: "https://images.pexels.com/photos/6195122/pexels-photo-6195122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Step-by-step cleaning guide for DMV area homes" },
  ],
  "Eco Living": [
    { url: "https://images.pexels.com/photos/4099356/pexels-photo-4099356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Eco-friendly plant-based cleaning products for Maryland homes" },
    { url: "https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Non-toxic eco cleaning supplies for sustainable home care" },
  ],
  "Tips & Advice": [
    { url: "https://images.pexels.com/photos/4108714/pexels-photo-4108714.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Expert house cleaning tips for Maryland homeowners" },
    { url: "https://images.pexels.com/photos/3768914/pexels-photo-3768914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Professional cleaning advice for DMV area residents" },
  ],
  "Airbnb & Rentals": [
    { url: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "Professional Airbnb cleaning service for DMV hosts" },
    { url: "https://images.pexels.com/photos/3288103/pexels-photo-3288103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750", alt: "5-star rental property cleaning in Maryland DC Virginia" },
  ],
};

const DEFAULT_FALLBACK = {
  url: "https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
  alt: "Professional house cleaning service in Maryland, DC, and Virginia",
};

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

HIGH-VALUE KEYWORD TARGETS to rotate through (pick the most relevant for this season):
- "house cleaning service Maryland"
- "professional house cleaners DMV"
- "deep cleaning tips Maryland homes"
- "eco-friendly cleaning products Maryland"
- "move-out cleaning checklist Maryland"
- "recurring cleaning service Silver Spring"
- "how to clean [kitchen/bathroom/bedroom] professionally"
- "maid service Rockville MD"
- "Airbnb cleaning service DC"
- "post-construction cleaning Maryland"
- "house cleaning near me Maryland"
- "residential cleaning service Bethesda"
- "green cleaning company Montgomery County"

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
const jsonText = rawText.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/i, "");

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

if (PEXELS_API_KEY && article.imageQuery) {
  try {
    console.log(`🖼️   Fetching image from Pexels: "${article.imageQuery}"...`);
    const query = encodeURIComponent(`${article.imageQuery} professional`);
    const pexelsRes = await fetch(
      `https://api.pexels.com/v1/search?query=${query}&per_page=5&orientation=landscape`,
      { headers: { Authorization: PEXELS_API_KEY } }
    );
    if (pexelsRes.ok) {
      const pexelsData = await pexelsRes.json();
      if (pexelsData.photos && pexelsData.photos.length > 0) {
        const photo = pexelsData.photos[0];
        heroImage = {
          url: photo.src.large2x || photo.src.large,
          alt: article.imageAlt || photo.alt || article.title,
        };
        console.log(`✅  Image from Pexels: ${heroImage.url}`);
      }
    }
  } catch (e) {
    console.warn("⚠️   Pexels fetch failed, using fallback image:", e.message);
  }
}

if (!heroImage) {
  const categoryImages = FALLBACK_IMAGES[article.category] || [];
  if (categoryImages.length > 0) {
    heroImage = categoryImages[Math.floor(Math.random() * categoryImages.length)];
    heroImage = { ...heroImage, alt: article.imageAlt || heroImage.alt };
  } else {
    heroImage = { ...DEFAULT_FALLBACK, alt: article.imageAlt || DEFAULT_FALLBACK.alt };
  }
  console.log(`✅  Using curated fallback image for category: ${article.category}`);
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
