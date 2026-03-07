/**
 * Sitemap generator script.
 * Run: npx tsx scripts/generate-sitemap.ts
 * Automatically generates sitemap.xml from all service-location combinations.
 */

import fs from "fs";
import path from "path";

// Inline city/service slugs to avoid import issues with path aliases
const cities = [
  "rockville-md", "bethesda-md", "silver-spring-md", "gaithersburg-md",
  "germantown-md", "frederick-md", "clarksburg-md", "damascus-md",
  "potomac-md", "kensington-md", "chevy-chase-md", "north-bethesda-md",
  "college-park-md", "laurel-md", "olney-md", "bowie-md",
  "hyattsville-md", "takoma-park-md", "burtonsville-md", "montgomery-village-md",
  "wheaton-md"
];

const services = [
  "house-cleaning", "deep-cleaning", "move-out-cleaning", "move-in-cleaning",
  "apartment-cleaning", "post-construction-cleaning", "recurring-cleaning", "eco-friendly-cleaning"
];

const BASE_URL = "https://capitalcleancare.com";
const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { url: "/", priority: "1.0", freq: "weekly" },
  { url: "/about", priority: "0.8", freq: "monthly" },
  { url: "/reviews", priority: "0.7", freq: "monthly" },
  { url: "/contact", priority: "0.8", freq: "monthly" },
  { url: "/faq", priority: "0.6", freq: "monthly" },
  { url: "/maryland", priority: "0.8", freq: "weekly" },
  { url: "/virginia", priority: "0.8", freq: "weekly" },
  { url: "/washington-dc", priority: "0.8", freq: "weekly" },
];

const servicePages = [
  "/services/standard-cleaning", "/services/deep-cleaning",
  "/services/move-in-move-out-cleaning", "/services/post-construction-cleaning",
  "/services/recurring-cleaning",
];

let urls = "";

// Static pages
for (const p of staticPages) {
  urls += `  <url>\n    <loc>${BASE_URL}${p.url}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${p.freq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>\n`;
}

// Service pages
for (const s of servicePages) {
  urls += `  <url>\n    <loc>${BASE_URL}${s}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

// City pages
for (const city of cities) {
  urls += `  <url>\n    <loc>${BASE_URL}/locations/${city}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
}

// Service-location combinations
for (const city of cities) {
  for (const service of services) {
    urls += `  <url>\n    <loc>${BASE_URL}/locations/${city}/${service}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`;
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}</urlset>`;

fs.writeFileSync(path.resolve("public/sitemap.xml"), sitemap);
console.log(`✅ Sitemap generated with ${staticPages.length + servicePages.length + cities.length + cities.length * services.length} URLs`);
