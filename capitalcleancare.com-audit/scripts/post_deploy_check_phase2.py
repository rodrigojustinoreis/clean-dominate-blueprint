#!/usr/bin/env python3
"""Live post-deploy validation for Phase 2 (organic recovery) — read-only GETs.

Usage: post_deploy_check_phase2.py <dist_after_dir> <out.md>
Exit 1 if any CRITICAL check fails.
"""
import concurrent.futures as cf, hashlib, os, re, sqlite3, sys, urllib.error, urllib.request
from html import unescape
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from url_inventory import parse_page, norm_path  # noqa: E402

ORIGIN = "https://capitalcleancare.com"; UA = {"User-Agent": "CCC-post-deploy-check-phase2/1.0 (read-only)"}
dist, out = Path(sys.argv[1]), Path(sys.argv[2]); fails, lines = [], []

class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
opener = urllib.request.build_opener(NoRedirect)
def get(path):
    try:
        with opener.open(urllib.request.Request(ORIGIN + path, headers=UA), timeout=25) as r:
            return r.status, r.headers.get("Location", ""), r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location", "") if e.headers else "", ""
    except Exception as e:
        return None, str(e)[:80], ""
def follow(path, max_hops=4):
    chain, cur = [], path
    for _ in range(max_hops):
        st, loc, _ = get(cur); chain.append((cur, st))
        if st not in (301, 302, 307, 308) or not loc: return chain, st
        cur = loc[len(ORIGIN):] if loc.startswith(ORIGIN) else loc
    return chain, None
def check(name, ok, detail, critical=True):
    lines.append(f"| {'✅' if ok else ('❌' if critical else '⚠️')} | {name} | {detail} |")
    if not ok and critical: fails.append(name)
def canon(html): m = re.search(r'rel="canonical" href="([^"]+)"', html); return (m.group(1).replace(ORIGIN, "") if m else "")
def robots(html): m = re.search(r'name="robots" content="([^"]+)"', html); return m.group(1) if m else ""
def title(html): m = re.search(r"<title>(.*?)</title>", html, re.S); return unescape(m.group(1)).strip() if m else ""
def hreflang_count(html): return len(re.findall(r'<link[^>]*rel="alternate"[^>]*hreflang=', html))

# 1. Germantown: vanity 301 → indexable canonical page
G = "/locations/germantown-md/deep-cleaning"
chain, final = follow("/deep-cleaning-germantown-md")
check("301 /deep-cleaning-germantown-md → Germantown deep (final 200)", chain[0][1] == 301 and final == 200 and chain[-1][0] == G, " → ".join(f"{c} [{s}]" for c, s in chain))
st, _, gh = get(G)
check("Germantown deep: 200, index, self-canonical", st == 200 and "noindex" not in robots(gh) and canon(gh) == G, f"{st}; robots={robots(gh).split(',')[0]}; canonical={canon(gh)}")

# 2. sitemap
st, _, sm = get("/sitemap.xml"); locs = [norm_path(u) or "/" for u in re.findall(r"<loc>([^<]+)</loc>", sm)]
check("sitemap.xml has 296 URLs", st == 200 and len(locs) == 296, f"{st}; {len(locs)}")
check("Germantown deep in sitemap", G in locs, "present" if G in locs else "ABSENT")
OLD_SS, NEW_SS = "/resources/how-to-choose-cleaning-service-silver-spring", "/resources/best-house-cleaning-service-silver-spring-md"
check("old Silver Spring post NOT in sitemap", OLD_SS not in locs, "absent" if OLD_SS not in locs else "PRESENT")
check("new Silver Spring guide in sitemap", NEW_SS in locs, "present" if NEW_SS in locs else "ABSENT")
with cf.ThreadPoolExecutor(max_workers=8) as ex: statuses = list(ex.map(lambda p: get(p)[0], locs))
bad = [(p, s) for p, s in zip(locs, statuses) if s != 200]
check("all sitemap URLs answer 200", not bad, f"{len(locs)-len(bad)}/{len(locs)} ok" + (f"; not 200: {bad[:10]}" if bad else ""))

# 3. Silver Spring canonicalisation
st, _, oh = get(OLD_SS)
check("old SS post: 200, canonical → new guide, no hreflang", st == 200 and canon(oh) == NEW_SS and hreflang_count(oh) == 0, f"{st}; canonical={canon(oh)}; hreflang links={hreflang_count(oh)}")
st, _, nh = get(NEW_SS)
check("new SS guide: 200, self-canonical, index", st == 200 and canon(nh) == NEW_SS and "noindex" not in robots(nh), f"{st}; canonical={canon(nh)}")

# 4. Maryland prices guide title (only title changed)
P = "/resources/house-cleaning-prices-maryland-2026"; st, _, ph = get(P)
EXP_T = "Maryland House Cleaning Cost (2026): $150–$480+ | Capital Clean Care"
h1 = unescape(re.sub("<[^>]+>", "", (re.findall(r"<h1[^>]*>(.*?)</h1>", ph, re.S) or [""])[0])).strip()
check("Maryland prices guide: title = H1 wording, self-canonical", st == 200 and title(ph) == EXP_T and canon(ph) == P and h1.startswith("Maryland House Cleaning Cost (2026)"), f"{st}; title={title(ph)!r}; H1={h1!r}")

# 5. office cleaning link
st, _, oh2 = get("/services/office-cleaning")
check("office cleaning links to small-business guide", st == 200 and 'href="/resources/office-cleaning-small-business-dmv"' in oh2, f"{st}; link={'href=\"/resources/office-cleaning-small-business-dmv\"' in oh2}")
st, _, gh2 = get("/resources/office-cleaning-small-business-dmv")
check("small-business guide 200, self-canonical", st == 200 and canon(gh2) == "/resources/office-cleaning-small-business-dmv", str(st))

# 6. Phase 1 invariants
chain, final = follow("/resources/deep-cleaning-checklist-dmv-homeowners")
check("Phase 1 redirect still in place (checklist → full guide, final 200)", chain[0][1] == 301 and final == 200 and chain[-1][0] == "/resources/what-is-included-in-a-deep-cleaning", " → ".join(f"{c} [{s}]" for c, s in chain))
st, _, _ = get("/this-url-does-not-exist-phase2"); check("unknown URL returns real 404", st == 404, str(st))
st, _, rb = get("/robots.txt"); local_r = (Path(__file__).resolve().parents[2] / "public/robots.txt").read_text(encoding="utf-8")
check("robots.txt live == repo", st == 200 and rb.strip() == local_r.strip(), f"{st}; sha {hashlib.sha256(rb.encode()).hexdigest()[:12]}")

# 7. 23 baseline URLs (IDs 123–145): live SEO fields == release build
conn = sqlite3.connect(os.path.expanduser("~/.cache/claude-seo/drift/baselines.db"))
base = [r[0].replace(ORIGIN, "") or "/" for r in conn.execute("SELECT url FROM baselines WHERE id BETWEEN 123 AND 145 ORDER BY id")]
FIELDS = ["title", "meta_description", "canonical", "robots", "h1s", "schema_types", "has_phone", "has_form"]
diffs = []
for p in base:
    st, _, html = get(p); f = dist / ("index.html" if p == "/" else p.lstrip("/") + "/index.html")
    live, loc = parse_page(html), parse_page(f.read_text(encoding="utf-8", errors="replace"))
    d = [k for k in FIELDS if live[k] != loc[k]]
    if st != 200 or d: diffs.append((p, st, d))
check("23 baseline URLs: SEO fields live == release build", not diffs, "all identical" if not diffs else f"diffs: {diffs}")

out.write_text("# Fase 2 — validação pós-deploy ao vivo\n\n| | check | detalhe |\n|---|---|---|\n" + "\n".join(lines) + f"\n\n**Falhas críticas: {len(fails)}**" + (f" — {fails}" if fails else "") + "\n", encoding="utf-8")
print("\n".join(lines)); print(f"\nCRITICAL FAILS: {len(fails)} {fails}"); sys.exit(1 if fails else 0)
