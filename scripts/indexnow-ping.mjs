// Post-build: notify IndexNow (Bing, Yandex, etc.) of NEW or UPDATED URLs so they
// are discovered instantly instead of waiting for a crawl.
//
// How it stays safe and non-spammy:
//  - Sends ONLY on Netlify production builds (CONTEXT=production). Skips local/dev/PR builds.
//  - Diffs the freshly built dist/sitemap.xml against the sitemap currently live in
//    production, and submits only URLs that are new or whose <lastmod> changed. Both sitemaps are
//    parsed per <url> block (scripts/lib/indexnow-sitemap.mjs).
//  - The built sitemap only lists indexable pages (generate-sitemap.mjs drops noindex), so a
//    noindex page can never be submitted; URLs from another host are dropped as well.
//  - Caps the batch (a huge diff means a structural change, not real new content → skip).
//  - Wrapped so it can NEVER fail the build: any error is logged and we exit 0.
//
// Dry run (never sends, any CONTEXT):
//   node scripts/indexnow-ping.mjs --dry-run                  → baseline = live sitemap (GET only)
//   node scripts/indexnow-ping.mjs --dry-run --baseline=FILE  → baseline = a saved sitemap, offline

import { readFile } from "node:fs/promises";
import path from "node:path";
import { MAX_BATCH, selectChanged, decideSubmission, maySend } from "./lib/indexnow-sitemap.mjs";

const KEY = "0fe518b852b54b8f8406eac852b6fb7d";
const HOST = "capitalcleancare.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const LIVE_SITEMAP = `https://${HOST}/sitemap.xml`;
const DIST_SITEMAP = path.resolve(process.cwd(), "dist", "sitemap.xml");

const DRY_RUN = process.argv.includes("--dry-run");
const BASELINE_FILE = (process.argv.find((a) => a.startsWith("--baseline=")) || "").slice("--baseline=".length);

async function main() {
  const context = process.env.CONTEXT;
  if (context !== "production" && !DRY_RUN) {
    console.log(`[indexnow] skip — not a production deploy (CONTEXT=${context || "none"})`);
    return;
  }

  const newXml = await readFile(DIST_SITEMAP, "utf8").catch(() => null);
  if (!newXml) { console.log("[indexnow] skip — dist/sitemap.xml not found"); return; }

  // Baseline = sitemap currently live (the previous deploy), or a saved copy in a dry run.
  const liveXml = BASELINE_FILE
    ? await readFile(path.resolve(process.cwd(), BASELINE_FILE), "utf8").catch(() => null)
    : await fetch(LIVE_SITEMAP, { signal: AbortSignal.timeout(15000) })
        .then((r) => (r.ok ? r.text() : null))
        .catch(() => null);
  if (!liveXml) { console.log("[indexnow] skip — could not read the baseline sitemap (first deploy?)"); return; }

  const { changed, nextCount, prevCount } = selectChanged(newXml, liveXml, { host: HOST });
  if (nextCount === 0) { console.log("[indexnow] skip — built sitemap has no URLs"); return; }
  console.log(`[indexnow] parsed ${nextCount} built URL(s), ${prevCount} baseline URL(s)`);

  const decision = decideSubmission(changed, MAX_BATCH);
  if (decision === "none") { console.log("[indexnow] nothing new to submit"); return; }
  if (decision === "over-cap") {
    console.log(`[indexnow] ${changed.length} changed URLs exceeds cap (${MAX_BATCH}) — skipping to avoid spam`);
    return;
  }

  if (!maySend({ context, dryRun: DRY_RUN })) {
    console.log(`[indexnow] DRY RUN — no request sent. ${changed.length} URL(s) would be submitted:`);
    changed.forEach((c) => console.log(`           • ${c.url}  (${c.reason}: ${c.before === null ? "absent" : c.before || "no lastmod"} → ${c.after || "no lastmod"})`));
    return;
  }

  const urlList = changed.map((c) => c.url);
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    signal: AbortSignal.timeout(15000),
  });
  console.log(`[indexnow] submitted ${urlList.length} URL(s) → HTTP ${res.status}`);
  urlList.slice(0, 10).forEach((u) => console.log(`           • ${u}`));
}

try {
  await main();
} catch (e) {
  console.warn(`[indexnow] non-fatal: ${e?.message || e}`);
}
process.exit(0);
