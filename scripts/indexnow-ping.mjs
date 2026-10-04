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
// --baseline without --dry-run is refused before any read or request, in every CONTEXT: a saved
// file must never replace the live sitemap in a real submission. The normal build passes no options.
//
// All logic lives in scripts/lib/indexnow-sitemap.mjs (runIndexNow), with disk and network injected
// here, so the tests exercise this same flow against a simulated network.

import { readFile } from "node:fs/promises";
import { MAX_BATCH, runIndexNow } from "./lib/indexnow-sitemap.mjs";

const KEY = "0fe518b852b54b8f8406eac852b6fb7d";
const HOST = "capitalcleancare.com";

try {
  await runIndexNow({
    argv: process.argv.slice(2),
    env: process.env,
    cwd: process.cwd(),
    readFile,
    fetchImpl: (url, init) => fetch(url, init),
    log: (line) => console.log(line),
    host: HOST,
    key: KEY,
    maxBatch: MAX_BATCH,
  });
} catch (e) {
  console.warn(`[indexnow] non-fatal: ${e?.message || e}`);
}
process.exit(0);
