#!/usr/bin/env python3
"""Live validation of the Rockville Sprint 1 release.
Usage: rockville_post_deploy_check.py <previous_deploy_permalink_origin> [origin]
Compares production (origin) with the previous production deploy permalink (live × live), so Netlify
post-processing (hidden forms) is identical on both sides; only asset hashes are normalised."""
import re, sys, json, html, hashlib, urllib.request, urllib.error
PREV = sys.argv[1].rstrip("/"); ORIGIN = sys.argv[2].rstrip("/") if len(sys.argv) > 2 else "https://capitalcleancare.com"
UA = {"User-Agent": "Mozilla/5.0 (compatible; CCC-post-deploy-check/rockville-1)", "Accept": "text/html,*/*"}
def get(base, p):
    try:
        with urllib.request.urlopen(urllib.request.Request(base + p, headers=UA), timeout=40) as r: return r.status, r.headers, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e: return e.code, e.headers, (e.read() or b"").decode("utf-8", "replace")
def head(base, p):
    try:
        with urllib.request.urlopen(urllib.request.Request(base + p, headers=UA, method="HEAD"), timeout=40) as r: return r.status, r.headers.get("Content-Type", "")
    except urllib.error.HTTPError as e: return e.code, ""
def robots(s): m = re.search(r'name="robots" content="([^"]+)"', s); return m.group(1) if m else ""
def canon(s): m = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', s); return m.group(1) if m else ""
def title(s): m = re.search(r"<title>([^<]*)</title>", s); return html.unescape(m.group(1)) if m else ""
def meta(s): m = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', s); return html.unescape(m.group(1)) if m else ""
def h1(s): return [html.unescape(re.sub(r"<[^>]+>", "", x)).strip() for x in re.findall(r"<h1[^>]*>(.*?)</h1>", s, re.S)]
def blocks(s): return re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S)
def types(s): return sorted({t for b in blocks(s) for t in re.findall(r'"@type":\s*"([A-Za-z]+)"', b)})
def shash(s): return hashlib.sha256("".join(sorted(blocks(s))).encode()).hexdigest()[:12]
def norm(s): return re.sub(r"/assets/[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8}\.(js|css|webp|png)", "/assets/X", s)
def main_text(s):
    m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); body = m.group(1) if m else s
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<nav.*?</nav>|<footer.*?</footer>", "", body, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", body))).strip()
def faq_text(s): t = main_text(s); i = t.find("Recurring Cleaning FAQ"); return t[i:i+3000] if i >= 0 else ""
R = []
def chk(n, ok, d=""): R.append((n, bool(ok), str(d))); print(("PASS " if ok else "FAIL ") + n + (" — " + str(d) if d else ""))
st, _, sm = get(ORIGIN, "/sitemap.xml"); locs = {(l or "/") for l in re.findall(r"<loc>https://capitalcleancare.com([^<]*)</loc>", sm)}
chk("sitemap.xml 200 with 300 URLs", st == 200 and len(locs) == 300, f"{st} {len(locs)}")
T = {"/locations/rockville-md/deep-cleaning": "Documented detail work in Rockville", "/locations/rockville-md/recurring-cleaning": "What recurring cleaning costs in Rockville", "/locations/rockville-md/move-out-cleaning": "Your date is confirmed at booking"}
pages = {}
for p, marker in T.items():
    st, hdr, s = get(ORIGIN, p); pages[p] = s; _, _, o = get(PREV, p)
    chk(f"{p}: 200, index,follow, self-canonical, in sitemap, no X-Robots noindex", st == 200 and robots(s).startswith("index, follow") and canon(s) == ORIGIN + p and p in locs and "noindex" not in (hdr.get("X-Robots-Tag") or ""), f"{st} robots={robots(s)[:13]} canonical={'self' if canon(s)==ORIGIN+p else canon(s)}")
    chk(f"{p}: title, H1, schema types unchanged vs previous deploy", title(s) == title(o) and h1(s) == h1(o) and types(s) == types(o), f"title={title(s)!r} h1={h1(s)}")
    chk(f"{p}: sprint change live ('{marker}')", marker in html.unescape(s))
    chk(f"{p}: tel + quote form present (not submitted)", "tel:+12407042551" in s and ('name="quote"' in s or 'id="quote"' in s))
    print(f"   meta ({len(meta(s))}): {meta(s)}")
d = pages["/locations/rockville-md/deep-cleaning"]
photos = re.findall(r'src="(/images/locations/rockville-real-work/[^"]+-480\.webp)"', d)
chk("deep: 4 documented photographs referenced and served (200)", len(set(photos)) == 4 and all(head(ORIGIN, u)[0] == 200 for u in set(photos)), sorted(set(photos)))
chk("deep: no dollar figures in main text", "$" not in main_text(d))
mo = pages["/locations/rockville-md/move-out-cleaning"]; mt = main_text(mo).lower()
chk("move-out: no same-day / deposit-back promise in visible text, meta or schema", "same-day" not in mo.lower() and "same day" not in mt and "deposit back" not in mo)
rc = pages["/locations/rockville-md/recurring-cleaning"]; _, _, rco = get(PREV, "/locations/rockville-md/recurring-cleaning")
chk("recurring: the 4 rendered FAQs and FAQPage schema identical to previous deploy", faq_text(rc) != "" and faq_text(rc) == faq_text(rco) and [b for b in blocks(rc) if '"FAQPage"' in b] == [b for b in blocks(rco) if '"FAQPage"' in b])
chk("recurring: checklist preserved; no inferred scope table; monthly in meta", "What's Included in Every Rockville Recurring Clean" in html.unescape(rc) and "What each Rockville visit covers" not in rc and "monthly" in meta(rc).lower())
PROTECTED = ["/", "/about", "/services/house-cleaning", "/resources/how-much-does-deep-cleaning-cost", "/locations/rockville-md", "/locations/rockville-md/house-cleaning", "/resources/house-cleaning-cost-rockville-md", "/locations/bethesda-md", "/locations/bethesda-md/deep-cleaning", "/locations/bethesda-md/recurring-cleaning", "/locations/bethesda-md/house-cleaning", "/locations/silver-spring-md", "/locations/alexandria-va", "/locations/fairfax-va", "/locations/wheaton-md/house-cleaning", "/services/airbnb-cleaning", "/services/office-cleaning", "/es", "/resources/how-to-clean-hardwood-floors-after-construction", "/locations/chevy-chase-md/deep-cleaning", "/locations/germantown-md/deep-cleaning"]
diffs = []; ident = 0
for p in PROTECTED:
    _, _, s = get(ORIGIN, p); _, _, o = get(PREV, p)
    if norm(s) == norm(o): ident += 1
    for name, fn in [("title", title), ("meta", meta), ("canonical", canon), ("robots", robots), ("h1", h1), ("schema", shash)]:
        if fn(s) != fn(o): diffs.append((p, name))
chk(f"protected/NO-OP pages: title/meta/canonical/robots/H1/schema identical to previous deploy ({len(PROTECTED)} URLs)", not diffs, diffs)
chk(f"protected/NO-OP pages: full HTML identical live×live after asset-hash normalisation", ident == len(PROTECTED), f"{ident}/{len(PROTECTED)} identical")
chain = []; p = "/move-out-cleaning-rockville-md"
for _ in range(4):
    req = urllib.request.Request(ORIGIN + p, headers=UA)
    class NR(urllib.request.HTTPRedirectHandler):
        def redirect_request(self, *a, **k): return None
    try:
        with urllib.request.build_opener(NR).open(req, timeout=30) as r: chain.append((p, r.status)); break
    except urllib.error.HTTPError as e:
        chain.append((p, e.code)); loc = e.headers.get("Location", "")
        if e.code in (301, 302) and loc: p = loc.replace(ORIGIN, "")
        else: break
chk("legacy /move-out-cleaning-rockville-md → 301 → current page 200 (redirect untouched)", chain == [("/move-out-cleaning-rockville-md", 301), ("/locations/rockville-md/move-out-cleaning", 200)], chain)
n = sum(1 for _, ok, _ in R if ok); print(f"\nSUMMARY {n}/{len(R)} passed")
json.dump([{"check": a, "ok": b, "detail": c} for a, b, c in R], open("capitalcleancare.com-audit/rockville-sprint1-post-deploy-live-2026-09-09.json", "w"), indent=2, ensure_ascii=False)
sys.exit(0 if n == len(R) else 1)
