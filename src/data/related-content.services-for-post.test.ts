/**
 * "Related Services" for post-construction / post-renovation posts (DC townhouse case-study audit,
 * 2026-10-10): their own service page leads the block, the local city×service comes first when it is
 * indexable, and every other post keeps the category-derived list it had before.
 */
import { describe, it, expect } from "vitest";
import { allPosts } from "@/pages/Blog";
import { servicesForPost } from "@/data/related-content";

const hrefs = (slug: string) => servicesForPost(slug).map((l) => l.href);
const POST_CONSTRUCTION_POSTS = allPosts.filter((p) => /post-construction|post-renovation/.test(p.slug)).map((p) => p.slug);

describe("servicesForPost: post-construction posts", () => {
  it("covers the three known post-construction / post-renovation posts", () => {
    expect(POST_CONSTRUCTION_POSTS.sort()).toEqual([
      "post-construction-cleaning-montgomery-county-md",
      "post-construction-cleaning-washington-dc-townhouse",
      "post-renovation-cleaning-guide-maryland",
    ]);
  });

  it("DC townhouse case study: the national service page first (the DC city×service page is noindex, so it is never linked)", () => {
    const h = hrefs("post-construction-cleaning-washington-dc-townhouse");
    expect(h[0]).toBe("/services/post-construction-cleaning");
    expect(h).not.toContain("/locations/washington-dc/post-construction-cleaning");
    expect(h.length).toBeLessThanOrEqual(4);
    expect(new Set(h).size).toBe(h.length);
  });

  it("every post-construction / post-renovation post leads with the post-construction service", () => {
    for (const slug of POST_CONSTRUCTION_POSTS) {
      const h = hrefs(slug);
      expect(h.some((x) => x.endsWith("/post-construction-cleaning")), slug).toBe(true);
      expect(h[0].endsWith("/post-construction-cleaning"), slug).toBe(true);
    }
  });

  it("other posts are unchanged: no post-construction service unless their category maps to it", () => {
    for (const p of allPosts) {
      if (POST_CONSTRUCTION_POSTS.includes(p.slug)) continue;
      expect(hrefs(p.slug).some((x) => x.endsWith("/post-construction-cleaning")), p.slug).toBe(false);
    }
  });
});
