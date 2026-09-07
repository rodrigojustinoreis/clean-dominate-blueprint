#!/usr/bin/env python3
"""Live validation of the Phase 3 (Lotes 1+2) release on https://capitalcleancare.com.
Usage: post_deploy_check_phase3.py [origin]   (default origin = production)
"""
import re, sys, json, urllib.request, urllib.error
from html import unescape
ORIGIN = sys.argv[1].rstrip("/") if len(sys.argv) > 1 else "https://capitalcleancare.com"
UA = {"User-Agent": "Mozilla/5.0 (compatible; CCC-post-deploy-check/3.0)", "Accept": "text/html,*/*"}
class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *a, **k): return None
opener = urllib.request.build_opener(NoRedirect)
def get(path):
    req = urllib.request.Request(ORIGIN + path, headers=UA)
    try:
        with opener.open(req, timeout=40) as r: return r.status, r.headers.get("Location", ""), r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location", ""), (e.read() or b"").decode("utf-8", "replace")
def follow(path, hops=5):
    chain = []; p = path
    for _ in range(hops):
        st, loc, body = get(p); chain.append((p, st))
        if st in (301, 302, 307, 308) and loc:
            p = loc.replace(ORIGIN, "") if loc.startswith(ORIGIN) else loc; continue
        return chain, st, body
    return chain, None, ""
def robots(h): m = re.search(r'name="robots" content="([^"]+)"', h); return m.group(1) if m else ""
def canon(h): m = re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', h); return m.group(1) if m else ""
def title(h): m = re.search(r"<title>(.*?)</title>", h, re.S); return unescape(m.group(1)).strip() if m else ""
def main_links(h):
    m = re.search(r"<main[^>]*>(.*)</main>", h, re.S); body = m.group(1) if m else h
    return {(x.rstrip("/") or "/") for x in re.findall(r'href="(/[^"#?]+)"', body)}
R = []
def check(name, ok, detail=""):
    R.append((name, bool(ok), detail)); print(("PASS " if ok else "FAIL ") + name + (" — " + str(detail) if detail else ""))
# 1. retired vanity URLs: one 301 hop into an indexable page
for src, dst in [("/house-cleaning-wheaton-md", "/locations/wheaton-md/house-cleaning"),
                 ("/apartment-cleaning-wheaton-md", "/locations/wheaton-md/apartment-cleaning"),
                 ("/move-out-cleaning-rockville-md", "/locations/rockville-md/move-out-cleaning"),
                 ("/deep-cleaning-germantown-md", "/locations/germantown-md/deep-cleaning"),
                 ("/deep-cleaning-kensington-md", "/locations/kensington-md")]:
    chain, st, body = follow(src)
    ok = len(chain) == 2 and chain[0][1] == 301 and chain[1][0] == dst and st == 200 and "noindex" not in robots(body)
    check(f"{src} → {dst} in one 301 hop, target 200 + index", ok, f"chain={chain} robots={robots(body).split(',')[0]}")
# 2. promoted pages
sm_st, _, sm = get("/sitemap.xml"); locs = {(l or "/") for l in re.findall(r"<loc>https://capitalcleancare.com([^<]*)</loc>", sm)}
check("sitemap.xml 200 with 299 URLs", sm_st == 200 and len(locs) == 299, f"{sm_st} {len(locs)}")
for p in ["/locations/wheaton-md/house-cleaning", "/locations/wheaton-md/apartment-cleaning", "/locations/rockville-md/move-out-cleaning"]:
    st, _, h = get(p)
    check(f"{p} 200, index, self-canonical, in sitemap", st == 200 and "noindex" not in robots(h) and canon(h) == ORIGIN + p and p in locs, f"{st} robots={robots(h).split(',')[0]} canonical={canon(h)}")
st, _, h = get("/locations/kensington-md/deep-cleaning"); check("/locations/kensington-md/deep-cleaning stays noindex", st == 200 and "noindex" in robots(h), robots(h))
# 3. hub cards / nearby: no link into a noindex page (sample hubs incl. Rockville bespoke guide)
noidx_seen = set()
for hub in ["/locations/rockville-md", "/locations/bethesda-md", "/locations/germantown-md", "/locations/wheaton-md", "/locations/kensington-md", "/locations/silver-spring-md", "/maryland", "/virginia"]:
    st, _, h = get(hub); bad = []
    for l in sorted(main_links(h)):
        if l.startswith("/locations/") or l.startswith("/services/"):
            if l not in noidx_seen:
                s2, _, h2 = get(l)
                if s2 == 200 and "noindex" in robots(h2): noidx_seen.add(l)
            if l in noidx_seen: bad.append(l)
    check(f"{hub}: 0 links to noindex pages", not bad, bad)
# 4. contextual links
st, _, h = get("/services"); L = main_links(h)
check("/services links /services/post-construction-cleaning and /services/move-out-cleaning", "/services/post-construction-cleaning" in L and "/services/move-out-cleaning" in L)
st, _, h = get("/resources/how-much-does-deep-cleaning-cost"); L = main_links(h)
check("deep-cleaning cost guide links move-out + post-construction", "/services/move-out-cleaning" in L and "/services/post-construction-cleaning" in L)
st, _, h = get("/es/limpieza-de-casas"); L = main_links(h)
check("/es/limpieza-de-casas links the 8 /es/areas/* pages", sum(1 for l in L if l.startswith("/es/areas/")) == 8, sum(1 for l in L if l.startswith("/es/areas/")))
# 5. schema hygiene
st, _, h = get("/resources/how-to-remove-red-wine-stains"); check("guide page without HowTo JSON-LD", st == 200 and '"HowTo"' not in h)
st, _, h = get("/resources/move-in-cleaning-checklist"); check("blog post without gallery VideoObject, author has #founder @id", st == 200 and '"VideoObject"' not in h and '"@id":"https://capitalcleancare.com/#founder"' in h)
st, _, h = get("/"); check("home keeps VideoObject", '"VideoObject"' in h)
st, _, h = get("/locations/arlington-va/deep-cleaning"); check("template deep-cleaning page without VideoObject and without the 2026-08-31 literal", '"VideoObject"' not in h and '"dateModified":"2026-08-31' not in h)
st, _, h = get("/es/areas/rockville-md"); check("Spanish area page has BreadcrumbList", '"BreadcrumbList"' in h and "Inicio" in h)
st, _, h = get("/locations/fairfax-va"); check("hub has the full LocalBusiness node", all(k in h for k in ['"priceRange"', '"openingHoursSpecification"', '"@id":"https://capitalcleancare.com/#business"', '"aggregateRating"', '"geo"']))
st, _, h = get("/about"); check("/about Person has #founder @id", '"@id":"https://capitalcleancare.com/#founder"' in h)
st, _, h = get("/locations/bethesda-md/deep-cleaning"); check("Bethesda deep dateModified 2026-09-01 + visible Updated line", '"dateModified":"2026-09-01' in h and "September 1, 2026" in h)
# 6. 404
st, _, h = get("/this-page-does-not-exist-phase3"); check("unknown URL → real 404 with the branded body (title + noindex)", st == 404 and "Page Not Found (404)" in title(h) and "noindex" in robots(h) and "bg-mesh" in h, f"{st} {title(h)}")
st, _, h = get("/es/una/pagina-inexistente"); check("unknown /es/a/b → 404 with the Spanish body", st == 404 and "Página no encontrada" in title(h), f"{st} {title(h)}")
st, _, h = get("/404"); check("/404 itself is served (noindex)", "noindex" in robots(h) and "/404" not in locs)
# 7. protections
st, _, h = get("/services/house-cleaning"); check("Ads landing /services/house-cleaning 200 + index + title unchanged", st == 200 and "noindex" not in robots(h) and title(h).startswith("Standard House Cleaning in MD, DC & VA"), title(h))
st, _, h = get("/"); imgs = re.findall(r"<img[^>]*>", re.search(r"<main[^>]*>(.*)</main>", h, re.S).group(1))
check("home: every <img> in <main> has width and height", all("width=" in i and "height=" in i for i in imgs), f"{len(imgs)} imgs")
chain, st, body = follow("/blog/spring-carpet-cleaning/"); check("/blog/x/ chain ends 200 in ≤3 hops (platform slash normalisation)", st == 200 and len(chain) <= 4, chain)
for p in ["/locations/bethesda-md", "/services/deep-cleaning", "/resources/house-cleaning-for-seniors"]:
    st, _, h = get(p); check(f"{p} 200 + index + canonical self", st == 200 and "noindex" not in robots(h) and canon(h) == ORIGIN + p)
n_ok = sum(1 for _, ok, _ in R if ok); print(f"\nSUMMARY {n_ok}/{len(R)} passed")
json.dump([{"check": n, "ok": ok, "detail": str(d)} for n, ok, d in R], open("capitalcleancare.com-audit/phase3-post-deploy-live-2026-09-07.json", "w"), indent=2, ensure_ascii=False)
sys.exit(0 if n_ok == len(R) else 1)
