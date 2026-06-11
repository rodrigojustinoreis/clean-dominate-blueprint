// Post-build: notify IndexNow (Bing, Yandex, etc.) of NEW or UPDATED URLs so they
// are discovered instantly instead of waiting for a crawl.
//
// How it stays safe and non-spammy:
//  - Runs ONLY on Netlify production builds (CONTEXT=production). Skips local/dev/PR builds.
//  - Diffs the freshly built dist/sitemap.xml against the sitemap currently live in
//    production, and submits only URLs that are new or whose <lastmod> changed.
//  - Caps the batch (a huge diff means a structural change, not real new content → skip).
//  - Wrapped so it can NEVER fail the build: any error is logged and we exit 0.

import { readFile } from "node:fs/promises";
import path from "node:path";

const KEY = "0fe518b852b54b8f8406eac852b6fb7d";
const HOST = "capitalcleancare.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const LIVE_SITEMAP = `https://${HOST}/sitemap.xml`;
const DIST_SITEMAP = path.resolve(process.cwd(), "dist", "sitemap.xml");
const MAX_BATCH = 50; // safety: above this we assume a structural change, not new content

function parseSitemap(xml) {
  const map = new Map(); // url -> lastmod (or "")
  const re = /<url>\s*<loc>([^<]+)<\/loc>(?:[\s\S]*?<lastmod>([^<]*)<\/lastmod>)?[\s\S]*?<\/url>/g;
  let m;
  while ((m = re.exec(xml)) !== null) map.set(m[1].trim(), (m[2] || "").trim());
  return map;
}

async function main() {
  if (process.env.CONTEXT !== "production") {
    console.log(`[indexnow] skip — not a production deploy (CONTEXT=${process.env.CONTEXT || "none"})`);
    return;
  }

  const newXml = await readFile(DIST_SITEMAP, "utf8").catch(() => null);
  if (!newXml) { console.log("[indexnow] skip — dist/sitemap.xml not found"); return; }
  const next = parseSitemap(newXml);
  if (next.size === 0) { console.log("[indexnow] skip — built sitemap has no URLs"); return; }

  // Baseline = sitemap currently live (the previous deploy).
  const liveXml = await fetch(LIVE_SITEMAP, { signal: AbortSignal.timeout(15000) })
    .then((r) => (r.ok ? r.text() : null))
    .catch(() => null);
  if (!liveXml) { console.log("[indexnow] skip — could not fetch live sitemap (first deploy?)"); return; }
  const prev = parseSitemap(liveXml);

  const changed = [];
  for (const [url, lastmod] of next) {
    if (!prev.has(url) || prev.get(url) !== lastmod) changed.push(url);
  }

  if (changed.length === 0) { console.log("[indexnow] nothing new to submit"); return; }
  if (changed.length > MAX_BATCH) {
    console.log(`[indexnow] ${changed.length} changed URLs exceeds cap (${MAX_BATCH}) — skipping to avoid spam`);
    return;
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: changed }),
    signal: AbortSignal.timeout(15000),
  });
  console.log(`[indexnow] submitted ${changed.length} URL(s) → HTTP ${res.status}`);
  changed.slice(0, 10).forEach((u) => console.log(`           • ${u}`));
}

try {
  await main();
} catch (e) {
  console.warn(`[indexnow] non-fatal: ${e?.message || e}`);
}
process.exit(0);
