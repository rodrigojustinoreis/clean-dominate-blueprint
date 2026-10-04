// Pure helpers for scripts/indexnow-ping.mjs: sitemap parsing and the choice of URLs to submit.
// Kept free of I/O so they can be unit-tested (src/test/indexnow-sitemap.test.ts) without ever
// touching the network.
//
// Why this file exists (weekly audit, 04/10/2026): the previous parser was a single regex over the
// whole document. Its optional <lastmod> group was not confined to one <url> block, so a URL
// without <lastmod> swallowed the following blocks up to the next dated one. On the real 301-URL
// sitemap it saw 148 URLs, lost 153 and attached the wrong date to 27. Parsing is now per block.

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
