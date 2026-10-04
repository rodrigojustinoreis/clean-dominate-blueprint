import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import {
  MAX_BATCH,
  parseSitemap,
  selectChanged,
  decideSubmission,
  maySend,
  xmlUnescape,
} from "../../scripts/lib/indexnow-sitemap.mjs";

// Weekly audit 04/10/2026. The previous parser (one regex over the whole document) let the optional
// <lastmod> group run past </url>, so an undated URL swallowed the following blocks. These tests pin
// the per-block parser and the selection of URLs announced to IndexNow. Nothing here touches the network.

const wrap = (body: string) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
const entry = (loc: string, lastmod?: string) => `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;

// The regex shipped before this fix, kept only to prove the regression fixture fails with it.
const legacyParse = (xml: string) => {
  const map = new Map<string, string>();
  const re = /<url>\s*<loc>([^<]+)<\/loc>(?:[\s\S]*?<lastmod>([^<]*)<\/lastmod>)?[\s\S]*?<\/url>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) map.set(m[1].trim(), (m[2] || "").trim());
  return map;
};

describe("parseSitemap (per <url> block)", () => {
  it("regression: an undated URL followed by a dated one keeps both, each with its own date", () => {
    const xml =
      "<urlset><url><loc>https://example.test/a</loc></url><url><loc>https://example.test/b</loc><lastmod>2026-10-04</lastmod></url></urlset>";

    // The old parser returned only A, wrongly dated with B's lastmod.
    const legacy = legacyParse(xml);
    expect([...legacy.entries()]).toEqual([["https://example.test/a", "2026-10-04"]]);

    const parsed = parseSitemap(xml);
    expect([...parsed.entries()]).toEqual([
      ["https://example.test/a", ""],
      ["https://example.test/b", "2026-10-04"],
    ]);
  });

  it("keeps order and the right date across a mix of dated and undated entries", () => {
    const xml = wrap(
      [
        entry("https://capitalcleancare.com"),
        entry("https://capitalcleancare.com/about"),
        entry("https://capitalcleancare.com/pricing", "2026-09-30"),
        entry("https://capitalcleancare.com/contact"),
        entry("https://capitalcleancare.com/resources/a", "2026-07-21"),
        entry("https://capitalcleancare.com/resources/b"),
        entry("https://capitalcleancare.com/resources/c", "2026-10-04"),
      ].join("\n"),
    );
    expect([...parseSitemap(xml).entries()]).toEqual([
      ["https://capitalcleancare.com", ""],
      ["https://capitalcleancare.com/about", ""],
      ["https://capitalcleancare.com/pricing", "2026-09-30"],
      ["https://capitalcleancare.com/contact", ""],
      ["https://capitalcleancare.com/resources/a", "2026-07-21"],
      ["https://capitalcleancare.com/resources/b", ""],
      ["https://capitalcleancare.com/resources/c", "2026-10-04"],
    ]);
  });

  it("decodes XML escapes in <loc>", () => {
    const xml = wrap(entry("https://capitalcleancare.com/search?a=1&amp;b=&quot;x&quot;&lt;y&gt;&apos;z&apos;", "2026-10-04"));
    expect([...parseSitemap(xml).keys()]).toEqual([`https://capitalcleancare.com/search?a=1&b="x"<y>'z'`]);
    expect(xmlUnescape("a &amp;amp; b")).toBe("a &amp; b"); // single pass, no double decoding
  });

  it("tolerates whitespace, line breaks, extra child tags, CDATA and attributes", () => {
    const xml = `<urlset>
      <url>
        <loc>
          https://capitalcleancare.com/a
        </loc>
        <changefreq>weekly</changefreq>
      </url>
      <url><priority>0.8</priority><lastmod> 2026-10-04 </lastmod><loc><![CDATA[https://capitalcleancare.com/b]]></loc></url>
      <url data-x="1"><loc>https://capitalcleancare.com/c</loc><lastmod>2026-09-01T10:00:00+00:00</lastmod></url>
    </urlset>`;
    expect([...parseSitemap(xml).entries()]).toEqual([
      ["https://capitalcleancare.com/a", ""],
      ["https://capitalcleancare.com/b", "2026-10-04"],
      ["https://capitalcleancare.com/c", "2026-09-01T10:00:00+00:00"],
    ]);
  });

  it("returns an empty map for empty or non-string input and skips blocks without <loc>", () => {
    expect(parseSitemap("").size).toBe(0);
    expect(parseSitemap(null).size).toBe(0);
    expect(parseSitemap("<urlset></urlset>").size).toBe(0);
    expect(parseSitemap("<urlset><url><lastmod>2026-10-04</lastmod></url></urlset>").size).toBe(0);
  });

  it("reads every URL of the repository sitemap, each with the date of its own block", () => {
    // 301 URLs when this test was written (04/10/2026). The count is taken from the file itself so
    // the test keeps passing when the weekly-post bot adds a URL; the floor guards against truncation.
    const xml = readFileSync(path.resolve(process.cwd(), "public", "sitemap.xml"), "utf8");
    const locCount = (xml.match(/<loc>/g) || []).length;
    const parsed = parseSitemap(xml);

    expect(locCount).toBeGreaterThanOrEqual(301);
    expect(parsed.size).toBe(locCount);
    expect(legacyParse(xml).size).toBeLessThan(locCount); // the old parser lost URLs on this very file

    // Independent line-by-line reading (the generator writes one <url> per line).
    const expected = new Map<string, string>();
    for (const line of xml.split("\n")) {
      const loc = line.match(/<loc>([^<]+)<\/loc>/);
      if (!loc) continue;
      const lastmod = line.match(/<lastmod>([^<]*)<\/lastmod>/);
      expected.set(loc[1], lastmod ? lastmod[1] : "");
    }
    expect([...parsed.entries()]).toEqual([...expected.entries()]);
    // The home has no <lastmod>; the old parser gave it the date of a later page.
    expect(parsed.get("https://capitalcleancare.com/")).toBe("");
    expect(legacyParse(xml).get("https://capitalcleancare.com/")).not.toBe("");
    // /about sits between undated entries; the old parser dropped it.
    expect(parsed.has("https://capitalcleancare.com/about")).toBe(true);
    expect(legacyParse(xml).has("https://capitalcleancare.com/about")).toBe(false);
  });
});

describe("selectChanged (same parser on both sitemaps)", () => {
  const HOST = "capitalcleancare.com";
  const live = wrap(
    [
      entry("https://capitalcleancare.com"),
      entry("https://capitalcleancare.com/about"),
      entry("https://capitalcleancare.com/es"),
      entry("https://capitalcleancare.com/locations/rockville-md", "2026-08-23"),
      entry("https://capitalcleancare.com/resources/guide", "2026-06-16"),
      entry("https://capitalcleancare.com/retired", "2026-01-01"),
    ].join("\n"),
  );

  it("selects nothing when the two sitemaps are identical", () => {
    const { changed, nextCount, prevCount } = selectChanged(live, live, { host: HOST });
    expect(changed).toEqual([]);
    expect(nextCount).toBe(6);
    expect(prevCount).toBe(6);
  });

  it("selects only new URLs and URLs whose own lastmod changed, with before and after", () => {
    const next = wrap(
      [
        entry("https://capitalcleancare.com"),
        entry("https://capitalcleancare.com/about"),
        entry("https://capitalcleancare.com/es", "2026-10-04"), // gained a date
        entry("https://capitalcleancare.com/locations/rockville-md", "2026-10-04"), // date moved
        entry("https://capitalcleancare.com/resources/guide", "2026-06-16"), // unchanged
        entry("https://capitalcleancare.com/resources/new-guide", "2026-10-04"), // new
        // /retired left the sitemap: must never be submitted
      ].join("\n"),
    );
    const { changed } = selectChanged(next, live, { host: HOST });
    expect(changed).toEqual([
      { url: "https://capitalcleancare.com/es", reason: "lastmod", before: "", after: "2026-10-04" },
      { url: "https://capitalcleancare.com/locations/rockville-md", reason: "lastmod", before: "2026-08-23", after: "2026-10-04" },
      { url: "https://capitalcleancare.com/resources/new-guide", reason: "new", before: null, after: "2026-10-04" },
    ]);
  });

  it("an undated neighbour does not make a page look changed (the old parser's false positive)", () => {
    // Only /b changes. With the old parser /a inherited /b's date and was reported instead of /b.
    const before = wrap([entry("https://capitalcleancare.com/a"), entry("https://capitalcleancare.com/b", "2026-09-01")].join("\n"));
    const after = wrap([entry("https://capitalcleancare.com/a"), entry("https://capitalcleancare.com/b", "2026-10-04")].join("\n"));
    expect(selectChanged(after, before, { host: HOST }).changed.map((c) => c.url)).toEqual(["https://capitalcleancare.com/b"]);
  });

  it("drops URLs from another host", () => {
    const next = wrap([entry("https://evil.example/x", "2026-10-04"), entry("https://capitalcleancare.com/ok", "2026-10-04")].join("\n"));
    expect(selectChanged(next, wrap(""), { host: HOST }).changed.map((c) => c.url)).toEqual(["https://capitalcleancare.com/ok"]);
  });
});

describe("submission guards", () => {
  it("keeps the 50-URL cap", () => {
    expect(MAX_BATCH).toBe(50);
    const many = (n: number) => Array.from({ length: n }, (_, i) => ({ url: `https://capitalcleancare.com/p${i}` }));
    expect(decideSubmission([])).toBe("none");
    expect(decideSubmission(many(1))).toBe("submit");
    expect(decideSubmission(many(50))).toBe("submit");
    expect(decideSubmission(many(51))).toBe("over-cap");
  });

  it("allows the network request only on a production build that is not a dry run", () => {
    expect(maySend({ context: "production", dryRun: false })).toBe(true);
    expect(maySend({ context: "production", dryRun: true })).toBe(false);
    expect(maySend({ context: "deploy-preview", dryRun: false })).toBe(false);
    expect(maySend({ context: "branch-deploy", dryRun: false })).toBe(false);
    expect(maySend({ context: "dev", dryRun: false })).toBe(false);
    expect(maySend({ context: undefined, dryRun: false })).toBe(false);
    expect(maySend({ context: undefined, dryRun: true })).toBe(false);
  });
});
