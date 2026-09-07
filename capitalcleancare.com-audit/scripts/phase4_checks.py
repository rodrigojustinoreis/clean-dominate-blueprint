#!/usr/bin/env python3
"""Phase 4 post-build checks. Usage: phase4_checks.py <after_dist> <baseline_dist>"""
import re, sys, html, hashlib, json
from pathlib import Path
A = Path(sys.argv[1]); B = Path(sys.argv[2])
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
def meta(s): m = re.search(r'<meta[^>]*name="description"[^>]*content="([^"]*)"', s); return m.group(1) if m else ""
def h1(s): return [re.sub(r"<[^>]+>", "", x).strip() for x in re.findall(r"<h1[^>]*>(.*?)</h1>", s, re.S)]
def schema(s):
    blks = re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S)
    return hashlib.sha256("".join(sorted(blks)).encode()).hexdigest()[:12]
def norm(s): return re.sub(r"/assets/[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8}\.(js|css|webp|png)", "/assets/X", s)
def body_links(s):
    m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); body = m.group(1) if m else s
    return {(h.rstrip("/") or "/") for h in re.findall(r'href="(/[^"#?]+)"', body)}
def all_links(s): return {(h.rstrip("/") or "/") for h in re.findall(r'href="(/[^"#?]+)"', s)}
R = []
def chk(name, ok, detail=""): R.append((name, bool(ok))); print(("PASS " if ok else "FAIL ") + name + (" — " + str(detail) if detail else ""))
chk("sitemap = 299 URLs, unchanged set", len(la) == 299 and la == lb, f"{len(la)} added={sorted(la-lb)} removed={sorted(lb-la)}")
chk("0 indexable (sitemap) pages with noindex", not [p for p in la if "noindex" in robots(a[p])])
chk("0 sitemap URLs missing a self canonical", not [p for p in la if canon(a[p]) != "https://capitalcleancare.com" + p], [p for p in la if canon(a[p]) != "https://capitalcleancare.com" + p][:5])
chk("0 sitemap URLs that are not prerendered", not [p for p in la if p not in a])
hl_bad = [p for p in la for h in re.findall(r'<link[^>]*hreflang="[^"]+"[^>]*href="([^"]+)"', a[p]) if h.replace("https://capitalcleancare.com", "").rstrip("/") not in la and h.replace("https://capitalcleancare.com", "") != "/"]
chk("0 hreflang pointing at non-indexable URLs", not hl_bad, hl_bad[:5])
noidx_a = {p for p, s in a.items() if "noindex" in robots(s)}
bad_a = {(p, h) for p in la for h in all_links(a[p]) if h in noidx_a}
noidx_b = {p for p, s in b.items() if "noindex" in robots(s)}
bad_b = {(p, h) for p in lb for h in all_links(b[p]) if h in noidx_b}
chk("0 NEW indexable→noindex links vs baseline", not (bad_a - bad_b), sorted(bad_a - bad_b)[:5]); print("   pre-existing indexable→noindex (whole page):", sorted(bad_a))
chk("Ads landing /services/house-cleaning identical to baseline (asset hashes normalised)", norm(a["/services/house-cleaning"]) == norm(b["/services/house-cleaning"]))
PROTECTED = ["/", "/about", "/services/house-cleaning", "/resources/how-much-does-deep-cleaning-cost", "/locations/bethesda-md/deep-cleaning", "/locations/wheaton-md/house-cleaning", "/locations/wheaton-md/apartment-cleaning", "/locations/rockville-md/move-out-cleaning", "/locations/silver-spring-md", "/locations/alexandria-va", "/locations/fairfax-va", "/locations/bethesda-md", "/locations/bethesda-md/recurring-cleaning", "/locations/bethesda-md/house-cleaning", "/services/airbnb-cleaning", "/services/office-cleaning", "/es"]
diffs = []
for p in PROTECTED:
    for name, fn in [("title", title), ("meta", meta), ("canonical", canon), ("robots", robots), ("h1", h1), ("schema", schema)]:
        if fn(a[p]) != fn(b[p]): diffs.append((p, name))
chk("protected pages: title/meta/canonical/robots/H1/schema unchanged", not diffs, diffs)
changed = sorted(p for p in la if norm(a[p]) != norm(b[p]))
print("   pages whose HTML changed (asset hashes normalised):", len(changed), changed[:12])
# targets received the links
for src, dst in [("/resources/airbnb-cleaning-tips-dmv-hosts", "/locations/bethesda-md/airbnb-cleaning"), ("/resources/office-cleaning-small-business-dmv", "/locations/bethesda-md/office-cleaning"), ("/resources/recurring-cleaning-weekly-biweekly-monthly", "/locations/rockville-md/recurring-cleaning"), ("/resources/deep-cleaning-rockville-md", "/locations/rockville-md/recurring-cleaning"), ("/resources/post-construction-cleaning-montgomery-county-md", "/locations/silver-spring-md/post-construction-cleaning"), ("/resources/post-renovation-cleaning-guide-maryland", "/locations/silver-spring-md/post-construction-cleaning")]:
    chk(f"link {src} → {dst} present in <main>", dst in body_links(a[src]))
print(f"\nSUMMARY {sum(1 for _, ok in R if ok)}/{len(R)} passed")
