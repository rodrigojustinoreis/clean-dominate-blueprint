/**
 * Related Guides — manual relations lead the block for three editorially approved origins only
 * (follow-up lot 04/10/2026, PARECER-CONTEUDO-ESCOPO.md). Every other post keeps the previous
 * category-first order. The "previous" rule is rebuilt here from exported building blocks so the
 * test compares all posts before and after without depending on a snapshot file.
 */
import { describe, it, expect } from "vitest";
import { allPosts } from "@/pages/Blog";
import { categoriesForPost } from "@/data/resource-categories";
import { isNoIndexPath } from "@/data/noindexPaths";
import {
  MANUAL_FIRST_ORIGINS,
  MANUAL_RELATED_POSTS,
  guidesBySlugs,
  guidesForCategories,
  guidesForPost,
  isIndexable,
} from "@/data/related-content";

const LIMIT = 6;
const ORIGIN = "https://capitalcleancare.com";
const slugOf = (href: string) => href.replace("/resources/", "");
const current = (slug: string, limit = LIMIT) => guidesForPost(slug, limit).map((g) => slugOf(g.href));
const isLinkable = (slug: string) => guidesBySlugs([slug]).length === 1;

/** The rule every origin had before this lot: category feed (capped), then manual, cut at the limit. */
function previousRule(slug: string, limit = LIMIT): string[] {
  const post = allPosts.find((p) => p.slug === slug);
  if (!post) return [];
  const category = guidesForCategories(categoriesForPost(post), slug, limit).map((g) => slugOf(g.href));
  const manual = (MANUAL_RELATED_POSTS[slug] ?? []).filter((s) => isLinkable(s) && s !== slug);
  return [...new Set([...category, ...manual])].slice(0, limit);
}

// The nine approved pairs, in map order. Hard-coded on purpose: a change to the map or to the
// allowlist must show up here and go back to editorial review.
const APPROVED: Record<string, [string, string, string]> = {
  "how-long-does-deep-cleaning-take": ["how-much-does-deep-cleaning-cost", "what-is-included-in-a-deep-cleaning", "deep-cleaning-vs-regular-cleaning"],
  "questions-to-ask-before-hiring-house-cleaner": ["red-flags-house-cleaning-service", "cleaning-company-vs-independent-cleaner", "hidden-fees-house-cleaning"],
  "cleaning-company-vs-independent-cleaner": ["local-cleaning-company-vs-franchise", "questions-to-ask-before-hiring-house-cleaner", "red-flags-house-cleaning-service"],
  // Dust guide candidate (04/10/2026): a new post, proposed with its page and pending the same
  // editorial review. It adds an origin and leaves the priority rule of the three above as it was.
  // This file compares two rules over the CURRENT catalogue; it does not prove that the cards of
  // existing posts are the same as on the previous commit (the new post enters their feeds).
  "can-house-dust-make-you-sick": ["why-dust-builds-up-maryland-homes", "most-forgotten-areas-when-cleaning", "what-is-included-in-a-deep-cleaning"],
};
const ORIGINS = Object.keys(APPROVED);

describe("allowlist and map", () => {
  it("contains exactly the origins listed in APPROVED", () => {
    expect([...MANUAL_FIRST_ORIGINS].sort()).toEqual([...ORIGINS].sort());
  });

  it("leaves the reviewed-and-excluded pricing origin out", () => {
    expect(MANUAL_FIRST_ORIGINS.has("how-much-does-deep-cleaning-cost")).toBe(false);
  });

  it("the map still holds the pairs listed in APPROVED, in that order", () => {
    for (const origin of ORIGINS) expect(MANUAL_RELATED_POSTS[origin]).toEqual(APPROVED[origin]);
  });
});

describe.each(ORIGINS)("approved origin %s", (origin) => {
  const post = allPosts.find((p) => p.slug === origin)!;
  const category = guidesForCategories(categoriesForPost(post), origin, LIMIT).map((g) => slugOf(g.href));

  it("shows its three manual relations first, in map order", () => {
    expect(current(origin).slice(0, 3)).toEqual(APPROVED[origin]);
  });

  it("completes to six with the category feed, in category order, skipping what is already shown", () => {
    const result = current(origin);
    expect(result).toHaveLength(LIMIT);
    const complement = category.filter((s) => !APPROVED[origin].includes(s)).slice(0, LIMIT - 3);
    expect(result.slice(3)).toEqual(complement);
  });

  it("has no self-link and no duplicate", () => {
    const result = current(origin);
    expect(result).not.toContain(origin);
    expect(new Set(result).size).toBe(result.length);
  });

  it("links only indexable posts that are not canonicalised to another URL", () => {
    for (const slug of current(origin)) {
      expect(isNoIndexPath(`/resources/${slug}`)).toBe(false);
      expect(isIndexable(`/resources/${slug}`)).toBe(true);
      expect(isLinkable(slug)).toBe(true);
      const target = allPosts.find((p) => p.slug === slug)!;
      const canonical = "canonical" in target ? target.canonical : undefined;
      expect(!canonical || canonical === `${ORIGIN}/resources/${slug}`).toBe(true);
    }
  });

  it("respects smaller and larger limits and is deterministic", () => {
    expect(current(origin, 2)).toEqual(APPROVED[origin].slice(0, 2));
    expect(current(origin, 3)).toEqual(APPROVED[origin]);
    expect(current(origin, 4).slice(0, 3)).toEqual(APPROVED[origin]);
    expect(current(origin, 4)).toHaveLength(4);
    expect(current(origin, 1)).toEqual([APPROVED[origin][0]]);
    expect(current(origin)).toEqual(current(origin));
    expect(guidesForPost(origin, LIMIT)).toEqual(guidesForPost(origin, LIMIT));
  });

  it("differs from the previous category-first output", () => {
    expect(current(origin)).not.toEqual(previousRule(origin));
  });
});

describe("inventory of every post, before and after", () => {
  it("covers all 124 posts registered when this lot was written (or more, never fewer)", () => {
    expect(allPosts.length).toBeGreaterThanOrEqual(124);
  });

  it("changes exactly the origins listed in APPROVED and nothing else", () => {
    const changed = allPosts.map((p) => p.slug).filter((slug) => JSON.stringify(current(slug)) !== JSON.stringify(previousRule(slug)));
    expect(changed.sort()).toEqual([...ORIGINS].sort());
  });

  it("keeps the excluded pricing origin and every other manual origin on the category-first order", () => {
    expect(current("how-much-does-deep-cleaning-cost")).toEqual(previousRule("how-much-does-deep-cleaning-cost"));
    for (const origin of Object.keys(MANUAL_RELATED_POSTS)) {
      if (MANUAL_FIRST_ORIGINS.has(origin)) continue;
      expect(current(origin)).toEqual(previousRule(origin));
    }
  });

  it("never yields a self-link, a duplicate, a non-linkable target or more than six items, for any post", () => {
    for (const { slug } of allPosts) {
      const result = current(slug);
      expect(result.length).toBeLessThanOrEqual(LIMIT);
      expect(result).not.toContain(slug);
      expect(new Set(result).size).toBe(result.length);
      for (const target of result) expect(isLinkable(target)).toBe(true);
    }
  });
});
