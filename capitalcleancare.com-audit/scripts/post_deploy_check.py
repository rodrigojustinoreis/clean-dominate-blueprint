#!/usr/bin/env python3
"""Live post-deploy validation for capitalcleancare.com (Phase 1).

Usage: post_deploy_check.py <dist_after_dir> <out.md>
Checks (all read-only GETs):
  1. 301 of the consolidated checklist URL, with and without trailing slash; target 200
  2. robots.txt live == public/robots.txt in this checkout; Googlebot/Bingbot groups carry the Disallows
  3. sitemap.xml: 296 URLs and every URL answers 200 (no redirect followed)
  4. hreflang on the five target pages (self-only alternates)
  5. footer of the home + 3 hubs: no link to the 3 noindex hubs; Clarksburg/Monrovia present
  6. 23 baseline URLs: title, meta description, canonical, robots, H1, JSON-LD types, phone, form —
     live vs the local release build (dist)
Exit code 1 if any CRITICAL check fails.
"""
import concurrent.futures as cf, re, sqlite3, os, sys, urllib.request, urllib.error, hashlib
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from url_inventory import parse_page, norm_path  # noqa: E402

ORIGIN = "https://capitalcleancare.com"; UA = {"User-Agent": "CCC-post-deploy-check/1.0 (read-only)"}
dist, out = Path(sys.argv[1]), Path(sys.argv[2])
fails, lines = [], []

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

def check(name, ok, detail, critical=True):
    lines.append(f"| {'✅' if ok else ('❌' if critical else '⚠️')} | {name} | {detail} |")
    if not ok and critical: fails.append(name)

# 1. redirect
OLD, NEW = "/resources/deep-cleaning-checklist-dmv-homeowners", "/resources/what-is-included-in-a-deep-cleaning"
def follow(path, max_hops=4):
    """Follow 3xx hops (relative Location allowed); returns (chain, final_status)."""
    chain, cur = [], path
    for _ in range(max_hops):
        st, loc, _ = get(cur)
        chain.append((cur, st))
        if st not in (301, 302, 307, 308) or not loc:
            return chain, st
        cur = loc[len(ORIGIN):] if loc.startswith(ORIGIN) else loc
    return chain, None
for p in (OLD, OLD + "/"):
    chain, final = follow(p)
    ok = chain[0][1] == 301 and final == 200 and chain[-1][0].rstrip("/") == NEW and len(chain) <= 3
    check(f"301 {p} → {NEW} (≤2 hops, final 200)", ok, " → ".join(f"{c} [{s}]" for c, s in chain))
st, _, _ = get(NEW); check(f"200 {NEW}", st == 200, str(st))

# 2. robots
st, _, body = get("/robots.txt")
local_robots = (Path(__file__).resolve().parents[2] / "public/robots.txt").read_text(encoding="utf-8")
check("robots.txt live == repo", st == 200 and body.strip() == local_robots.strip(), f"{st}; sha live {hashlib.sha256(body.encode()).hexdigest()[:12]} / repo {hashlib.sha256(local_robots.encode()).hexdigest()[:12]}")
def group_disallows(txt, agent):
    m = re.search(r"User-agent: " + agent + r"\n(.*?)(?:\n\n|\Z)", txt, re.S); return len(re.findall(r"^Disallow:", m.group(1), re.M)) if m else -1
check("robots: Googlebot group has 8 Disallows", group_disallows(body, "Googlebot") == 8, str(group_disallows(body, "Googlebot")))
check("robots: Bingbot group has 8 Disallows", group_disallows(body, "Bingbot") == 8, str(group_disallows(body, "Bingbot")))

# 3. sitemap
st, _, sm = get("/sitemap.xml")
locs = [norm_path(u) or "/" for u in re.findall(r"<loc>([^<]+)</loc>", sm)]
check("sitemap.xml has 296 URLs", st == 200 and len(locs) == 296, f"{st}; {len(locs)} URLs")
with cf.ThreadPoolExecutor(max_workers=8) as ex:
    statuses = list(ex.map(lambda p: get(p)[0], locs))
bad = [(p, s) for p, s in zip(locs, statuses) if s != 200]
check("all sitemap URLs answer 200", not bad, f"{len(locs) - len(bad)}/{len(locs)} ok" + (f"; not 200: {bad[:10]}" if bad else ""))
check("old checklist URL not in sitemap", OLD not in locs, "absent" if OLD not in locs else "PRESENT")

# 4. hreflang on the 5 target pages
EXPECT = {
    "/es/areas/aspen-hill-md": {("es", "/es/areas/aspen-hill-md"), ("x-default", "/es/areas/aspen-hill-md")},
    "/es/areas/germantown-md": {("es", "/es/areas/germantown-md"), ("x-default", "/es/areas/germantown-md")},
    "/es/areas/montgomery-village-md": {("es", "/es/areas/montgomery-village-md"), ("x-default", "/es/areas/montgomery-village-md")},
    "/locations/germantown-md": {("en", "/locations/germantown-md"), ("x-default", "/locations/germantown-md")},
    "/locations/montgomery-village-md": {("en", "/locations/montgomery-village-md"), ("x-default", "/locations/montgomery-village-md")},
}
pages = {}
for p, exp in EXPECT.items():
    st, _, html = get(p); pages[p] = (st, html)
    got = {(l, norm_path(h) or h) for l, h in parse_page(html)["hreflang"]} if html else set()
    check(f"hreflang {p}", st == 200 and got == exp, f"{st}; {sorted(got)}")

# 5. footer
NOIDX = {"/locations/germantown-md", "/locations/falls-church-va", "/locations/urbana-md"}
for p in ("/", "/services/deep-cleaning", "/locations/bethesda-md", "/es"):
    st, _, html = get(p); pages[p] = (st, html)
    foot = html[html.rfind("<footer"):] if html else ""
    links = set(re.findall(r'href="(/locations/[a-z-]+)"', foot))
    check(f"footer {p}: no noindex hubs", st == 200 and not (links & NOIDX), f"{st}; noindex links: {sorted(links & NOIDX) or 'none'}; clarksburg={'/locations/clarksburg-md' in links} monrovia={'/locations/monrovia-md' in links}")

# 6. 23 baseline URLs: live vs local release build
conn = sqlite3.connect(os.path.expanduser("~/.cache/claude-seo/drift/baselines.db"))
base_paths = [r[0].replace(ORIGIN, "") or "/" for r in conn.execute("SELECT url FROM baselines WHERE id BETWEEN 100 AND 122 ORDER BY id")]
FIELDS = ["title", "meta_description", "canonical", "robots", "h1s", "schema_types", "has_phone", "has_form"]
diffs = []
for p in base_paths:
    if p in pages:
        st, html = pages[p]
    else:
        st, _, html = get(p)
    f = dist / ("index.html" if p == "/" else p.lstrip("/") + "/index.html")
    live, loc = parse_page(html), parse_page(f.read_text(encoding="utf-8", errors="replace"))
    d = [k for k in FIELDS if live[k] != loc[k]]
    if st != 200 or d: diffs.append((p, st, d))
check("23 baseline URLs: SEO fields live == release build", not diffs, "all identical" if not diffs else f"diffs: {diffs}")

out.write_text("# Pós-deploy — validação ao vivo\n\n| | check | detalhe |\n|---|---|---|\n" + "\n".join(lines) + f"\n\n**Falhas críticas: {len(fails)}**" + (f" — {fails}" if fails else "") + "\n", encoding="utf-8")
print("\n".join(lines)); print(f"\nCRITICAL FAILS: {len(fails)} {fails}")
sys.exit(1 if fails else 0)
