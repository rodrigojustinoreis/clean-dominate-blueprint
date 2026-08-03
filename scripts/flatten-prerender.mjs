// Post-build: materialize the non-trailing-slash URLs the canonicals promise.
//
// Some pages are prerendered ONLY as dist/<path>/index.html. Netlify then 301s
// /<path> → /<path>/, while the canonical + sitemap point at /<path> — so Google
// sees a sitemap full of redirects and canonicals that resolve to redirects
// (GSC: "Page with redirect" / "Alternate page with proper canonical" failures).
//
// Fix at the origin: copy each dir-only index.html to a flat dist/<path>.html.
// Netlify serves the flat file for /<path> directly (200, no redirect); /<path>/
// keeps working via the directory copy, whose canonical already points to /<path>.
// No URL changes, no redirects added, no canonicals touched — fully reversible
// (delete this script from the build chain).
//
// Runs AFTER inline-critical-css so the copies inherit the final processed HTML,
// and is invisible to generate-sitemap (which only scans **/index.html).
import { copyFile, access } from "node:fs/promises";
import { glob } from "glob";
import path from "node:path";

const DIST = path.resolve(process.cwd(), "dist");

const files = await glob("**/index.html", { cwd: DIST });
let made = 0;
for (const rel of files) {
  const dir = path.dirname(rel);
  if (dir === ".") continue; // skip the site root
  const flat = path.join(DIST, `${dir}.html`);
  try {
    await access(flat);
    continue; // a flat file already exists (vite emitted it) — leave it alone
  } catch {
    /* missing — create the alias */
  }
  await copyFile(path.join(DIST, rel), flat);
  made++;
}
console.log(`[flatten] created ${made} flat HTML aliases (non-slash URLs now resolve 200)`);
