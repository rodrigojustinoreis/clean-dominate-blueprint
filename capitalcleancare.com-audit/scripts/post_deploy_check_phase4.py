#!/usr/bin/env python3
"""Live validation of the Phase 4 release. Usage: post_deploy_check_phase4.py <baseline_dist> [origin]"""
import re, sys, json, html, hashlib, urllib.request, urllib.error
from pathlib import Path
BASE = Path(sys.argv[1]); ORIGIN = sys.argv[2].rstrip("/") if len(sys.argv) > 2 else "https://capitalcleancare.com"
UA = {"User-Agent": "Mozilla/5.0 (compatible; CCC-post-deploy-check/4.0)", "Accept": "text/html,*/*"}
def get(p):
    try:
        with urllib.request.urlopen(urllib.request.Request(ORIGIN + p, headers=UA), timeout=40) as r: return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e: return e.code, (e.read() or b"").decode("utf-8", "replace")
def robots(s): m = re.search(r'name="robots" content="([^"]+)"', s); return m.group(1) if m else ""
def canon(s): m = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', s); return m.group(1) if m else ""
def title(s): m = re.search(r"<title>([^<]*)</title>", s); return html.unescape(m.group(1)) if m else ""
def meta(s): m = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', s); return m.group(1) if m else ""
def h1(s): return [re.sub(r"<[^>]+>", "", x).strip() for x in re.findall(r"<h1[^>]*>(.*?)</h1>", s, re.S)]
def schema(s): return hashlib.sha256("".join(sorted(re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S))).encode()).hexdigest()[:12]
def norm(s): return re.sub(r"/assets/[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8}\.(js|css|webp|png)", "/assets/X", s)
def main_links(s): m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); return {(h.rstrip("/") or "/") for h in re.findall(r'href="(/[^"#?]+)"', m.group(1) if m else s)}
R = []
def chk(n, ok, d=""): R.append((n, bool(ok), str(d))); print(("PASS " if ok else "FAIL ") + n + (" — " + str(d) if d else ""))
st, sm = get("/sitemap.xml"); locs = {(l or "/") for l in re.findall(r"<loc>https://capitalcleancare.com([^<]*)</loc>", sm)}
chk("sitemap.xml 200 with 299 URLs", st == 200 and len(locs) == 299, f"{st} {len(locs)}")
PAIRS = [("/resources/airbnb-cleaning-tips-dmv-hosts", "/locations/bethesda-md/airbnb-cleaning"), ("/resources/office-cleaning-small-business-dmv", "/locations/bethesda-md/office-cleaning"), ("/resources/recurring-cleaning-weekly-biweekly-monthly", "/locations/rockville-md/recurring-cleaning"), ("/resources/deep-cleaning-rockville-md", "/locations/rockville-md/recurring-cleaning"), ("/resources/post-construction-cleaning-montgomery-county-md", "/locations/silver-spring-md/post-construction-cleaning"), ("/resources/post-renovation-cleaning-guide-maryland", "/locations/silver-spring-md/post-construction-cleaning")]
for src, dst in PAIRS:
    st, s = get(src)
    chk(f"{src}: 200, index,follow, self-canonical, contextual link → {dst}", st == 200 and robots(s).startswith("index, follow") and canon(s) == ORIGIN + src and dst in main_links(s), f"{st} robots={robots(s)[:13]} canonical={'self' if canon(s)==ORIGIN+src else canon(s)} link={dst in main_links(s)}")
for p in ["/locations/bethesda-md/airbnb-cleaning", "/locations/bethesda-md/office-cleaning", "/locations/rockville-md/recurring-cleaning", "/locations/silver-spring-md/post-construction-cleaning", "/services/move-out-cleaning", "/services/post-construction-cleaning", "/locations/wheaton-md/house-cleaning", "/locations/wheaton-md/apartment-cleaning", "/locations/rockville-md/move-out-cleaning", "/locations/alexandria-va", "/locations/washington-dc", "/locations/georgetown-dc"]:
    st, s = get(p); chk(f"{p}: 200, index,follow, self-canonical, in sitemap", st == 200 and robots(s).startswith("index, follow") and canon(s) == ORIGIN + p and p in locs, f"{st} {robots(s)[:13]} {'self' if canon(s)==ORIGIN+p else canon(s)} sitemap={p in locs}")
PROTECTED = ["/", "/about", "/services/house-cleaning", "/resources/how-much-does-deep-cleaning-cost", "/locations/bethesda-md/deep-cleaning", "/locations/silver-spring-md", "/locations/alexandria-va", "/locations/fairfax-va", "/locations/bethesda-md", "/locations/bethesda-md/recurring-cleaning", "/services/airbnb-cleaning", "/services/office-cleaning", "/es"]
diffs = []
for p in PROTECTED:
    st, s = get(p); b = (BASE / p.lstrip("/") / "index.html").read_text(encoding="utf-8", errors="replace")
    for name, fn in [("title", title), ("meta", meta), ("canonical", canon), ("robots", robots), ("h1", h1), ("schema", schema)]:
        if fn(s) != fn(b): diffs.append((p, name))
    if p == "/services/house-cleaning": chk("Ads landing /services/house-cleaning identical to the pre-phase-4 baseline (asset hashes normalised)", norm(s) == norm(b))
chk("protected pages: title/meta/canonical/robots/H1/schema identical to the pre-phase-4 baseline", not diffs, diffs)
n = sum(1 for _, ok, _ in R if ok); print(f"\nSUMMARY {n}/{len(R)} passed")
json.dump([{"check": a, "ok": b, "detail": c} for a, b, c in R], open("capitalcleancare.com-audit/phase4-post-deploy-live-2026-09-07.json", "w"), indent=2, ensure_ascii=False)
sys.exit(0 if n == len(R) else 1)
