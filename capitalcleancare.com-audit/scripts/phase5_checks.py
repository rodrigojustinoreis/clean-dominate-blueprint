#!/usr/bin/env python3
"""Phase 5 post-build checks. Usage: phase5_checks.py <after_dist> <baseline_dist>"""
import re, sys, html, hashlib, json
from pathlib import Path
A = Path(sys.argv[1]); B = Path(sys.argv[2]); NEW = "/resources/how-to-clean-hardwood-floors-after-construction"
def load(root):
    out = {}
    for f in root.rglob("index.html"):
        rel = f.relative_to(root).parent.as_posix(); out["/" if rel == "." else "/" + rel] = f.read_text(encoding="utf-8", errors="replace")
    return out
a, b = load(A), load(B)
def locs(root): return {(l or "/") for l in re.findall(r"<loc>https://capitalcleancare.com([^<]*)</loc>", (root / "sitemap.xml").read_text())}
la, lb = locs(A), locs(B)
def robots(s): m = re.search(r'name="robots" content="([^"]+)"', s); return m.group(1) if m else ""
def canon(s): m = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', s); return m.group(1) if m else ""
def title(s): m = re.search(r"<title>([^<]*)</title>", s); return html.unescape(m.group(1)) if m else ""
def meta(s): m = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', s); return html.unescape(m.group(1)) if m else ""
def h1(s): return [re.sub(r"<[^>]+>", "", x).strip() for x in re.findall(r"<h1[^>]*>(.*?)</h1>", s, re.S)]
def blocks(s): return re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S)
def schema_hash(s): return hashlib.sha256("".join(sorted(blocks(s))).encode()).hexdigest()[:12]
def norm(s): return re.sub(r"/assets/[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8}\.(js|css|webp|png)", "/assets/X", s)
def main_text(s):
    m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); body = m.group(1) if m else s
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<nav.*?</nav>|<footer.*?</footer>", "", body, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", body))).strip()
def main_links(s): m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); return {(h.rstrip("/") or "/") for h in re.findall(r'href="(/[^"#?]+)"', m.group(1) if m else s)}
R = []
def chk(n, ok, d=""): R.append((n, bool(ok), str(d))); print(("PASS " if ok else "FAIL ") + n + (" — " + str(d) if d else ""))
s = a.get(NEW, "")
chk("new page prerendered", bool(s))
chk("sitemap 299 → 300, only the new URL added", len(la) == 300 and la - lb == {NEW} and not (lb - la), f"{len(la)} added={sorted(la-lb)} removed={sorted(lb-la)}")
chk("sitemap: no duplicates", len(re.findall(r"<loc>", (A / "sitemap.xml").read_text())) == len(la))
chk("new page: index,follow + self-canonical", robots(s).startswith("index, follow") and canon(s) == "https://capitalcleancare.com" + NEW, f"{robots(s)[:13]} {canon(s)}")
chk("new page: exactly one H1", len(h1(s)) == 1 and h1(s)[0] == "How to Clean Hardwood Floors After Construction", h1(s))
t = title(s); chk("title = 'How to Clean Hardwood Floors After Construction | Capital Clean Care'", t == "How to Clean Hardwood Floors After Construction | Capital Clean Care", t)
md = meta(s); chk("meta description 120–160 chars", 120 <= len(md) <= 160, f"{len(md)}: {md}")
types = []
for blk in blocks(s):
    try: o = json.loads(blk); types += re.findall(r'"@type":\s*"([A-Za-z]+)"', blk)
    except Exception as e: types.append("JSON-ERROR")
chk("schema: BlogPosting + BreadcrumbList + VideoObject present; no FAQPage/HowTo/Rating/Review; JSON valid", all(x in types for x in ["BlogPosting", "BreadcrumbList", "VideoObject"]) and not any(x in types for x in ["FAQPage", "HowTo", "AggregateRating", "Review", "JSON-ERROR"]), sorted(set(types)))
vo = next((json.loads(x) for x in blocks(s) if '"VideoObject"' in x), {})
chk("VideoObject: PT9S, uploadDate 2026-09-07, publisher @id #business, poster + mp4 URLs", vo.get("duration") == "PT9S" and str(vo.get("uploadDate", "")).startswith("2026-09-07") and vo.get("publisher", {}).get("@id") == "https://capitalcleancare.com/#business" and vo.get("thumbnailUrl", "").endswith("video-poster.webp") and vo.get("contentUrl", "").endswith("hardwood-final-pass.mp4"))
ar = next((json.loads(x) for x in blocks(s) if '"BlogPosting"' in x), {})
chk("BlogPosting: datePublished 2026-09-07, author #founder, publisher #business, image set", ar.get("datePublished") == "2026-09-07" and ar.get("author", {}).get("@id") == "https://capitalcleancare.com/#founder" and ar.get("publisher", {}).get("@id") == "https://capitalcleancare.com/#business" and bool(ar.get("image")))
txt = main_text(s); words = len(re.findall(r"[A-Za-z'-]+", txt)); chk("main content ≥ 1,500 words", words >= 1500, f"{words} words")
chk("visible date 2026-09-07 + byline Rodrigo Reis", 'datetime="2026-09-07"' in s and "By Rodrigo Reis, Owner" in txt)
L = main_links(s)
chk("internal links: post-construction service + both related guides", all(x in L for x in ["/services/post-construction-cleaning", "/resources/how-to-clean-hardwood-floors-naturally", "/resources/post-construction-cleaning-montgomery-county-md"]))
chk("sources: NWFA, OSHA silica, EPA lead, EPA asbestos", all(u in s for u in ["woodfloors.org/maintenance", "1926/1926.1153", "lead-safe-renovations-diyers", "protect-your-family-exposures-asbestos"]))
chk("media referenced exist in dist", all((A / p.lstrip("/")).exists() for p in ["/images/blog/hardwood-post-construction/hero-portrait.webp", "/images/blog/hardwood-post-construction/hero-portrait-640.webp", "/images/blog/hardwood-post-construction/hero-og.jpg", "/images/blog/hardwood-post-construction/hero-800x450.webp", "/images/blog/hardwood-post-construction/step6-final-pass.webp", "/images/blog/hardwood-post-construction/step6-final-pass-640.webp", "/images/blog/hardwood-post-construction/video-poster.webp", "/videos/hardwood-final-pass.mp4", "/videos/hardwood-final-pass.webm"]))
chk("video: controls + playsInline + preload=metadata + poster, no autoplay", 'preload="metadata"' in s and "playsinline" in s.lower() and "controls" in s and "autoplay" not in s.lower()[s.lower().find("<video"):s.lower().find("</video>")])
chk("og:image = hero-og.jpg", 'property="og:image" content="https://capitalcleancare.com/images/blog/hardwood-post-construction/hero-og.jpg"' in s)
chk("no hreflang on the new page pointing at a non-indexable URL", all(h.replace("https://capitalcleancare.com", "").rstrip("/") in la or h.endswith("capitalcleancare.com/") for h in re.findall(r'hreflang="[^"]+"[^>]*href="([^"]+)"', s)))
# reciprocal links present
chk("reciprocal: hardwood-naturally → new page", NEW in main_links(a["/resources/how-to-clean-hardwood-floors-naturally"]))
chk("reciprocal: post-construction Montgomery → new page", NEW in main_links(a["/resources/post-construction-cleaning-montgomery-county-md"]))
chk("listed on /resources", NEW in main_links(a["/resources"]))
# no new indexable→noindex links
noidx_a = {p for p, x in a.items() if "noindex" in robots(x)}; noidx_b = {p for p, x in b.items() if "noindex" in robots(x)}
bad_a = {(p, h) for p in la for h in re.findall(r'href="(/[^"#?]+)"', a[p]) if (h.rstrip("/") or "/") in noidx_a}
bad_b = {(p, h) for p in lb for h in re.findall(r'href="(/[^"#?]+)"', b[p]) if (h.rstrip("/") or "/") in noidx_b}
chk("0 NEW indexable→noindex links vs baseline", not (bad_a - bad_b), sorted(bad_a - bad_b)[:5])
chk("Ads landing identical to baseline (asset hashes normalised)", norm(a["/services/house-cleaning"]) == norm(b["/services/house-cleaning"]))
PROTECTED = ["/", "/about", "/services/house-cleaning", "/resources/how-much-does-deep-cleaning-cost", "/locations/bethesda-md/deep-cleaning", "/locations/wheaton-md/house-cleaning", "/locations/wheaton-md/apartment-cleaning", "/locations/rockville-md/move-out-cleaning", "/locations/silver-spring-md", "/locations/alexandria-va", "/locations/fairfax-va", "/locations/bethesda-md", "/services/post-construction-cleaning", "/services/airbnb-cleaning", "/services/office-cleaning", "/es"]
diffs = [(p, n) for p in PROTECTED for n, fn in [("title", title), ("meta", meta), ("canonical", canon), ("robots", robots), ("h1", h1), ("schema", schema_hash)] if fn(a[p]) != fn(b[p])]
chk("protected pages: title/meta/canonical/robots/H1/schema unchanged", not diffs, diffs)
changed = sorted(p for p in la & lb if norm(a[p]) != norm(b[p])); print("   existing pages whose HTML changed:", len(changed), changed[:20])
# cannibalisation matrix (title/H1 overlap with the three related pages)
for p in ["/resources/how-to-clean-hardwood-floors-naturally", "/resources/post-construction-cleaning-montgomery-county-md", "/services/post-construction-cleaning", "/resources/post-renovation-cleaning-guide-maryland"]:
    print(f"   related {p}: title='{title(a[p])}' h1={h1(a[p])} unchanged_title={title(a[p])==title(b[p])}")
# uniqueness of the new page vs the two guides (5-word shingles)
def sh(t, n=5): w = re.findall(r"[a-z0-9$]+", t.lower()); return set(" ".join(w[i:i+n]) for i in range(len(w)-n+1))
me = sh(txt)
for p in ["/resources/how-to-clean-hardwood-floors-naturally", "/resources/post-construction-cleaning-montgomery-county-md", "/resources/post-renovation-cleaning-guide-maryland", "/services/post-construction-cleaning"]:
    o = sh(main_text(a[p])); print(f"   shingle overlap with {p}: {len(me & o)/max(1,len(me)):.1%}")
print(f"\nSUMMARY {sum(1 for _, ok, _ in R if ok)}/{len(R)} passed")
