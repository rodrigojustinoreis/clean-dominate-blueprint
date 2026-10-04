// Helpers for scripts/indexnow-ping.mjs: sitemap parsing, the choice of URLs to submit and the run
// itself. Nothing here touches the disk or the network on its own: readFile, fetch and log are
// injected, so the whole flow is unit-tested (src/test/indexnow-*.test.ts) with a simulated network.
//
// Why this file exists (weekly audit, 04/10/2026): the previous parser was a single regex over the
// whole document. Its optional <lastmod> group was not confined to one <url> block, so a URL
// without <lastmod> swallowed the following blocks up to the next dated one. On the real 301-URL
// sitemap it saw 148 URLs, lost 153 and attached the wrong date to 27. Parsing is now per block.

import path from "node:path";

export const MAX_BATCH = 50; // above this we assume a structural change, not new content

const XML_ENTITIES = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" };

/** Decode the five predefined XML entities (the sitemap generator escapes &, <, > and "). */
export function xmlUnescape(value) {
  return value.replace(/&(amp|lt|gt|quot|apos);/g, (_, name) => XML_ENTITIES[name]);
}

function textOf(block, tag) {
  const m = block.match(new RegExp(`<${tag}\\b[^>]*>([\\s\\S]*?)</${tag}>`));
  if (!m) return null;
  return m[1].replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "").trim();
}

/**
 * Parse a sitemap into Map<url, lastmod>, lastmod being "" when the block has none.
 * Each <url>…</url> block is read on its own, so a date can never leak from a neighbour.
 */
export function parseSitemap(xml) {
  const map = new Map();
  if (typeof xml !== "string") return map;
  const blockRe = /<url\b[^>]*>([\s\S]*?)<\/url>/g; // "\b" keeps <urlset> out
  let block;
  while ((block = blockRe.exec(xml)) !== null) {
    const loc = textOf(block[1], "loc");
    if (!loc) continue;
    map.set(xmlUnescape(loc), textOf(block[1], "lastmod") ?? "");
  }
  return map;
}

/**
 * URLs worth announcing: present in the new sitemap and either absent from the baseline ("new") or
 * carrying a different <lastmod> ("lastmod"). URLs that only exist in the baseline are never sent.
 * Both sitemaps go through the same parser. `host`, when given, drops any URL from another origin.
 */
export function selectChanged(nextXml, prevXml, { host } = {}) {
  const next = parseSitemap(nextXml);
  const prev = parseSitemap(prevXml);
  const prefix = host ? `https://${host}/` : null;
  const changed = [];
  for (const [url, lastmod] of next) {
    if (prefix && url !== prefix.slice(0, -1) && !url.startsWith(prefix)) continue;
    if (!prev.has(url)) changed.push({ url, reason: "new", before: null, after: lastmod });
    else if (prev.get(url) !== lastmod) changed.push({ url, reason: "lastmod", before: prev.get(url), after: lastmod });
  }
  return { changed, nextCount: next.size, prevCount: prev.size };
}

/** What to do with a selection: nothing, skip because it exceeds the cap, or submit. */
export function decideSubmission(changed, maxBatch = MAX_BATCH) {
  if (changed.length === 0) return "none";
  if (changed.length > maxBatch) return "over-cap";
  return "submit";
}

/** The network POST is allowed only on a production build that is not a dry run. */
export function maySend({ context, dryRun }) {
  return context === "production" && !dryRun;
}

/**
 * Command-line options. `baselineGiven` is true for any spelling of the option ("--baseline",
 * "--baseline=", "--baseline=file"), so a mistyped or empty value is still caught by the guard.
 */
export function parseCliArgs(argv = []) {
  const dryRun = argv.includes("--dry-run");
  const baselineArg = argv.find((a) => a === "--baseline" || a.startsWith("--baseline="));
  const baselineGiven = baselineArg !== undefined;
  const baselineFile = baselineArg && baselineArg.startsWith("--baseline=") ? baselineArg.slice("--baseline=".length) : "";
  return { dryRun, baselineGiven, baselineFile };
}

/**
 * The whole run, with every side effect injected.
 *
 * Guard added on 04/10/2026 (follow-up lot): a baseline FILE is a diagnostic input. It is accepted
 * only together with --dry-run. Without --dry-run the run stops before any read or request, in every
 * CONTEXT, so a saved file can never stand in for the live sitemap of a real submission.
 *
 * Returns { outcome, ... } for tests; the caller ignores it. Never throws for expected conditions.
 */
export async function runIndexNow({ argv = [], env = {}, cwd, readFile, fetchImpl, log = () => {}, host, key, maxBatch = MAX_BATCH }) {
  const { dryRun, baselineGiven, baselineFile } = parseCliArgs(argv);
  const context = env.CONTEXT;

  if (baselineGiven && !dryRun) {
    log("[indexnow] refused — --baseline is a diagnostic option and only works together with --dry-run. Nothing was read, fetched or sent.");
    return { outcome: "refused-baseline-without-dry-run" };
  }
  if (baselineGiven && !baselineFile) {
    log("[indexnow] refused — --baseline needs a file path (--baseline=FILE). Nothing was fetched or sent.");
    return { outcome: "refused-baseline-without-path" };
  }
  if (context !== "production" && !dryRun) {
    log(`[indexnow] skip — not a production deploy (CONTEXT=${context || "none"})`);
    return { outcome: "skipped-not-production" };
  }

  const newXml = await readFile(path.resolve(cwd, "dist", "sitemap.xml"), "utf8").catch(() => null);
  if (!newXml) { log("[indexnow] skip — dist/sitemap.xml not found"); return { outcome: "no-dist-sitemap" }; }

  // Baseline = sitemap currently live (the previous deploy), or a saved copy in a dry run.
  const liveXml = baselineGiven
    ? await readFile(path.resolve(cwd, baselineFile), "utf8").catch(() => null)
    : await fetchImpl(`https://${host}/sitemap.xml`, { signal: AbortSignal.timeout(15000) })
        .then((r) => (r.ok ? r.text() : null))
        .catch(() => null);
  if (!liveXml) { log("[indexnow] skip — could not read the baseline sitemap (first deploy?)"); return { outcome: "no-baseline" }; }

  const { changed, nextCount, prevCount } = selectChanged(newXml, liveXml, { host });
  if (nextCount === 0) { log("[indexnow] skip — built sitemap has no URLs"); return { outcome: "empty-built-sitemap" }; }
  log(`[indexnow] parsed ${nextCount} built URL(s), ${prevCount} baseline URL(s)`);

  const decision = decideSubmission(changed, maxBatch);
  if (decision === "none") { log("[indexnow] nothing new to submit"); return { outcome: "nothing-to-submit", changed }; }
  if (decision === "over-cap") {
    log(`[indexnow] ${changed.length} changed URLs exceeds cap (${maxBatch}) — skipping to avoid spam`);
    return { outcome: "over-cap", changed };
  }

  if (!maySend({ context, dryRun })) {
    log(`[indexnow] DRY RUN — no request sent. ${changed.length} URL(s) would be submitted:`);
    changed.forEach((c) => log(`           • ${c.url}  (${c.reason}: ${c.before === null ? "absent" : c.before || "no lastmod"} → ${c.after || "no lastmod"})`));
    return { outcome: "dry-run", changed };
  }

  const urlList = changed.map((c) => c.url);
  const res = await fetchImpl("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList }),
    signal: AbortSignal.timeout(15000),
  });
  log(`[indexnow] submitted ${urlList.length} URL(s) → HTTP ${res.status}`);
  urlList.slice(0, 10).forEach((u) => log(`           • ${u}`));
  return { outcome: "submitted", changed, status: res.status };
}
