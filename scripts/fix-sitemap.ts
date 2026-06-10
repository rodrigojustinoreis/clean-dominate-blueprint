/**
 * One-off, deterministic sitemap repair (SEO audit 2026-06).
 * Operates on the SERVED file public/sitemap.xml (the build does not regenerate it).
 *
 *   1. Drops service-location URLs that are NOT allowlisted — those pages render
 *      <meta name="robots" content="noindex,nofollow"> (PR #5 zombie pruning), so
 *      they must not appear in the sitemap.
 *   2. Strips deprecated <changefreq> and <priority> tags (ignored by Google since 2023).
 *   3. Adds allowlisted service-location pages that are live (prerendered) but missing
 *      from the sitemap. Each addition is verified to exist in slCities × slServices
 *      so we never add a URL that could 404.
 *
 * Run: npx tsx scripts/fix-sitemap.ts
 */
import fs from "fs";
import path from "path";
import { isAllowlistedServiceLocation, getAllowlistedPaths } from "../src/data/serviceLocationAllowlist";
import { slCities, slServices } from "../src/data/service-locations";

const BASE = "https://capitalcleancare.com";
const FILE = path.resolve("public/sitemap.xml");
const today = new Date().toISOString().split("T")[0];

const xml = fs.readFileSync(FILE, "utf8");
const blocks = xml.split(/(?=<url>)/).filter((b) => b.includes("<loc>"));

const liveCity = new Set(slCities.map((c) => c.slug));
const liveService = new Set(slServices.map((s) => s.slug));

type Entry = { loc: string; lastmod: string };
const kept: Entry[] = [];
const dropped: string[] = [];

for (const b of blocks) {
  const loc = (b.match(/<loc>([^<]+)<\/loc>/) || [])[1] || "";
  const lastmod = (b.match(/<lastmod>([^<]+)<\/lastmod>/) || [])[1] || today;
  const m = loc.match(/\/locations\/([a-z0-9-]+)\/([a-z0-9-]+)\b/);
  if (m && !isAllowlistedServiceLocation(m[1], m[2])) {
    dropped.push(loc.replace(BASE, "")); // noindex service-location → drop
    continue;
  }
  kept.push({ loc, lastmod });
}

// Add allowlisted-but-missing pages, only if provably prerendered (live).
const present = new Set(kept.map((e) => e.loc.replace(/\/$/, "")));
const added: string[] = [];
for (const p of getAllowlistedPaths()) {
  if (present.has(`${BASE}${p}`)) continue;
  const m = p.match(/\/locations\/([a-z0-9-]+)\/([a-z0-9-]+)$/);
  if (!m || !liveCity.has(m[1]) || !liveService.has(m[2])) continue; // not prerendered → skip
  kept.push({ loc: `${BASE}${p}`, lastmod: today });
  added.push(p);
}

// Ensure Spanish (/es/) pages are listed. Source of truth = the CANONICAL constant
// declared in each src/pages/es/**/*.tsx, so the sitemap <loc> always matches the
// page's own canonical (these pages are prerendered and indexable).
function walk(dir: string): string[] {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((d) => {
    const full = path.join(dir, d.name);
    return d.isDirectory() ? walk(full) : full.endsWith(".tsx") ? [full] : [];
  });
}
const esCanonicals = new Set<string>();
for (const file of walk(path.resolve("src/pages/es"))) {
  const m = fs.readFileSync(file, "utf8").match(/const CANONICAL\s*=\s*"([^"]+)"/);
  if (m && m[1].startsWith(`${BASE}/es`)) esCanonicals.add(m[1]);
}
const addedEs: string[] = [];
for (const loc of [...esCanonicals].sort()) {
  if (present.has(loc.replace(/\/$/, ""))) continue;
  kept.push({ loc, lastmod: today });
  addedEs.push(loc.replace(BASE, ""));
}

const body = kept
  .map((e) => `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`)
  .join("\n");
const out = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

const DRY = process.argv.includes("--dry");
console.log(`Before: ${blocks.length} URLs`);
console.log(`Dropped (noindex service-location): ${dropped.length}`);
console.log(`Added (allowlisted, prerendered, was missing): ${added.length}`);
console.log(`Added (Spanish /es/ pages): ${addedEs.length}`);
console.log(`After: ${kept.length} URLs`);
console.log(`Deprecated tags stripped: changefreq=${(xml.match(/<changefreq>/g) || []).length}, priority=${(xml.match(/<priority>/g) || []).length}`);
if (added.length) console.log("Added (allowlisted):\n" + added.map((u) => "  + " + u).join("\n"));
if (addedEs.length) console.log("Added (es):\n" + addedEs.map((u) => "  + " + u).join("\n"));
if (!DRY) {
  fs.writeFileSync(FILE, out);
  console.log(`\n✅ Wrote ${FILE}`);
} else {
  console.log("\n(dry run — no file written)");
}
