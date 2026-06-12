// Post-build: regenerate sitemap.xml from what was actually prerendered.
// - Includes ONLY indexable pages (robots meta without "noindex").
// - Uses each page's declared <link rel="canonical"> as the <loc> (the no-trailing-slash
//   canonical form), so the sitemap always matches the canonicals and the 200 URLs.
// - No <lastmod>/<changefreq>/<priority>: per-page real dates aren't reliably available,
//   and stale/mass dates mislead crawlers — omitting is valid and honest.
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "glob";
import path from "node:path";

const DIST = path.resolve(process.cwd(), "dist");
const PUBLIC = path.resolve(process.cwd(), "public");

const xmlEscape = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const files = await glob("**/index.html", { cwd: DIST, absolute: true });
const urls = new Set();

for (const f of files) {
  const html = await readFile(f, "utf8");
  const robots = (html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/i) || [])[1] || "";
  if (/noindex/i.test(robots)) continue;
  const canon = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i) || [])[1];
  if (canon && canon.startsWith("https://capitalcleancare.com")) urls.add(canon.trim());
}

const sorted = [...urls].sort();
const xml =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  sorted.map((u) => `  <url><loc>${xmlEscape(u)}</loc></url>`).join("\n") +
  `\n</urlset>\n`;

await writeFile(path.join(DIST, "sitemap.xml"), xml, "utf8");
await writeFile(path.join(PUBLIC, "sitemap.xml"), xml, "utf8"); // keep repo copy in sync
console.log(`[sitemap] generated ${sorted.length} indexable URLs`);
