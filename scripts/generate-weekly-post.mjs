#!/usr/bin/env node
/**
 * Weekly Blog Post Generator for Capital Clean Care
 *
 * Calls the Claude API to generate a new cleaning tips article,
 * then appends it to src/data/auto-blog-posts.ts and updates
 * src/prerender.tsx and public/sitemap.xml.
 *
 * Usage:
 *   ANTHROPIC_API_KEY=sk-... node scripts/generate-weekly-post.mjs
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

// ── 1. Read existing posts to avoid duplicate topics ──────────────────────────
const autoBlogPath = path.join(ROOT, "src/data/auto-blog-posts.ts");
const autoBlogSource = fs.readFileSync(autoBlogPath, "utf8");
const existingSlugs = [...autoBlogSource.matchAll(/slug:\s*"([^"]+)"/g)].map(
  (m) => m[1]
);

// ── 2. Call Claude API to generate a new article ──────────────────────────────
const today = new Date();
const dateStr = today.toISOString().split("T")[0]; // YYYY-MM-DD
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

const systemPrompt = `You are a professional content writer for Capital Clean Care,
a premium eco-friendly house cleaning company serving Maryland, Washington DC, and Northern Virginia.

Company details:
- Name: Capital Clean Care
- Phone: (240) 704-2551
- Location: Silver Spring, MD (serves all of MD, DC, VA)
- USP: eco-friendly, non-toxic, plant-based products; background-checked teams; 5.0 stars Google
- Services: house cleaning, deep cleaning, move-out cleaning, recurring cleaning, eco-friendly cleaning, Airbnb cleaning, office cleaning, post-construction cleaning

Write in a helpful, authoritative, friendly tone. Always include:
- 2-3 internal links to service pages like /services/deep-cleaning, /services/recurring-cleaning, /services/eco-friendly-cleaning, /services/move-out-cleaning, /services/airbnb-cleaning
- 1-2 internal links to city pages like /locations/silver-spring-md, /locations/rockville-md, /locations/bethesda-md, /locations/arlington-va
- A closing CTA linking to /contact

Format: Return ONLY valid JSON (no markdown, no code fences). No explanation outside the JSON.`;

const userPrompt = `Generate a new weekly cleaning tips blog article for ${month} ${today.getFullYear()}.

The article should be relevant to ${season} cleaning in Maryland/DMV area.

Existing slugs to AVOID duplicating: ${existingSlugs.join(", ")}

Return this exact JSON structure:
{
  "slug": "kebab-case-unique-slug",
  "title": "Article Title (50-70 chars)",
  "excerpt": "One sentence excerpt for blog listing (120-160 chars)",
  "readTime": "X min read",
  "category": "one of: Cleaning Guides | Eco Living | Tips & Advice | Seasonal Guides | Airbnb & Rentals",
  "content": "Full HTML article content (800-1200 words). Use <h2>, <h3>, <ul>, <li>, <p>, <strong>, <a href='...'> tags. Include internal links."
}

The content must be high-quality, unique, locally relevant to Maryland/DC/Virginia, and SEO-optimized.
Include keywords naturally: house cleaning, eco-friendly cleaning, professional cleaning, Maryland, DMV.`;

const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "x-api-key": ANTHROPIC_API_KEY,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json",
  },
  body: JSON.stringify({
    model: "claude-opus-4-6",
    max_tokens: 4096,
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

// Check slug uniqueness
if (existingSlugs.includes(article.slug)) {
  console.error(`❌  Slug already exists: ${article.slug}`);
  process.exit(1);
}

console.log(`✅  Generated article: "${article.title}" (${article.slug})`);

// ── 3. Append to auto-blog-posts.ts ──────────────────────────────────────────
const escapedContent = article.content
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

// Insert before the closing bracket of autoBlogPosts array
const updatedAutoSource = autoBlogSource.replace(
  /(\n\s*\/\/ Posts are appended here automatically.*\n)(];)/,
  `$1${newEntry}\n$2`
);

fs.writeFileSync(autoBlogPath, updatedAutoSource, "utf8");
console.log(`✅  Appended to auto-blog-posts.ts`);

// ── 4. Update prerender.tsx ───────────────────────────────────────────────────
const prerenderPath = path.join(ROOT, "src/prerender.tsx");
let prerenderSource = fs.readFileSync(prerenderPath, "utf8");

// Insert after the last /blog/ entry
prerenderSource = prerenderSource.replace(
  /("\/blog\/recurring-cleaning-weekly-biweekly-monthly",)/,
  `$1\n    "/blog/${article.slug}",`
);

fs.writeFileSync(prerenderPath, prerenderSource, "utf8");
console.log(`✅  Updated prerender.tsx`);

// ── 5. Update sitemap.xml ─────────────────────────────────────────────────────
const sitemapPath = path.join(ROOT, "public/sitemap.xml");
let sitemapSource = fs.readFileSync(sitemapPath, "utf8");

const newSitemapEntry = `  <url><loc>https://capitalcleancare.com/blog/${article.slug}</loc><changefreq>monthly</changefreq><priority>0.6</priority></url>`;

// Insert before the Maryland City Pages comment
sitemapSource = sitemapSource.replace(
  /(\s*<!-- Maryland City Pages -->)/,
  `\n${newSitemapEntry}$1`
);

fs.writeFileSync(sitemapPath, sitemapSource, "utf8");
console.log(`✅  Updated sitemap.xml`);

console.log(`\n🎉  Done! New post: /blog/${article.slug}`);
console.log(`     Title: ${article.title}`);
console.log(`     Date:  ${dateStr}`);
