#!/usr/bin/env python3
"""Phase 4 P2 — quality audit of the indexable /locations/ pages.
Usage: phase4_location_quality.py <dist> <repo_root> <inventory.csv> <out.csv> <out.md>
Types are compared only within their own type: hub vs hubs, bespoke vs bespoke of the same service,
template vs template of the same service. Similarity = 5-word shingles of the <main> text."""
import re, sys, csv, html, subprocess
from pathlib import Path
D = Path(sys.argv[1]); ROOT = Path(sys.argv[2]); INV = Path(sys.argv[3]); OUT_CSV = Path(sys.argv[4]); OUT_MD = Path(sys.argv[5])
sm = (D / "sitemap.xml").read_text(); LOCS = {(l or "/") for l in re.findall(r"<loc>https://capitalcleancare.com([^<]*)</loc>", sm)}
inv = {r["path"].rstrip("/") or "/": r for r in csv.DictReader(open(INV, encoding="utf-8"))}
def main_text(s):
    m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); body = m.group(1) if m else s
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<nav.*?</nav>|<footer.*?</footer>", "", body, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", body))).strip()
def sh(t, n=5):
    w = re.findall(r"[a-z0-9$]+", t.lower()); return set(" ".join(w[i:i + n]) for i in range(len(w) - n + 1))
def comp(svc):  # ServiceLocation component name from slug
    return "".join(x.capitalize() for x in svc.split("-")) + "Page.tsx"
def git_date(path):
    p = subprocess.run(["git", "-C", str(ROOT), "log", "-1", "--format=%cs", "--", path], capture_output=True, text=True); return p.stdout.strip()
pages = {}
for p in sorted(LOCS):
    if not p.startswith("/locations/"): continue
    f = D / p.lstrip("/") / "index.html"; s = f.read_text(encoding="utf-8", errors="replace")
    m = re.fullmatch(r"/locations/([a-z-]+)(?:/([a-z-]+))?", p); city, svc = m.group(1), m.group(2)
    if not svc: typ, src = "hub", "src/pages/CityPage.tsx + src/data/locations.ts"
    else:
        bespoke = ROOT / "src/pages/locations" / city / comp(svc)
        if bespoke.exists(): typ, src = "bespoke", f"src/pages/locations/{city}/{comp(svc)}"
        else: typ, src = "template", "src/pages/ServiceLocationPage.tsx + src/data/service-location-overrides.ts"
    txt = main_text(s); pages[p] = {"type": typ, "svc": svc or "hub", "src": src, "words": len(txt.split()), "sh": sh(txt), "canonical": (re.search(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', s) or [None, ""])[1]}
# real change date: bespoke → file; hub → newest of CityPage/locations.ts data; template → overrides file if the page has an override key else template
ov = (ROOT / "src/data/service-location-overrides.ts").read_text(encoding="utf-8")
cache = {}
def date_for(p, info):
    if info["type"] == "bespoke": f = info["src"]
    elif info["type"] == "hub": f = "src/data/locations.ts"
    else:
        key = p.replace("/locations/", ""); f = "src/data/service-location-overrides.ts" if f'"{key}"' in ov else "src/pages/ServiceLocationPage.tsx"
    if f not in cache: cache[f] = git_date(f)
    return cache[f], f
rows = []
for p, info in pages.items():
    peers = [q for q, j in pages.items() if q != p and j["type"] == info["type"] and j["svc"] == info["svc"]]
    best, best_q = 0.0, ""
    for q in peers:
        c = len(info["sh"] & pages[q]["sh"]) / max(1, len(info["sh"]))
        if c > best: best, best_q = c, q
    union = set().union(*(pages[q]["sh"] for q in peers)) if peers else set()
    unique = 1 - len(info["sh"] & union) / max(1, len(info["sh"]))
    d, f = date_for(p, info); r = inv.get(p, {})
    rows.append({"path": p, "type": info["type"], "service": info["svc"], "words": info["words"], "unique_pct": round(unique * 100), "max_similarity_pct": round(best * 100), "most_similar": best_q, "peers_compared": len(peers), "in_links_total": r.get("in_links", ""), "in_links_from_indexable": r.get("in_links_from_indexable", ""), "in_sitemap": "yes", "canonical_self": "yes" if info["canonical"] == "https://capitalcleancare.com" + p else "NO", "last_content_change": d, "content_source": f, "flag": "REVIEW (<60% unique)" if unique < 0.6 else ""})
with open(OUT_CSV, "w", newline="", encoding="utf-8") as fh:
    w = csv.DictWriter(fh, fieldnames=list(rows[0].keys())); w.writeheader(); w.writerows(rows)
by = {}
for r in rows: by.setdefault(r["type"], []).append(r)
L = ["# Phase 4 — quality audit of the %d indexable /locations/ pages (%s)\n" % (len(rows), D.name), "Comparison only within the same type and service. `unique_pct` = share of 5-word shingles not found in any peer; `max_similarity_pct` = containment in the single most similar peer. Nothing was changed: candidates for human review only.\n"]
for typ in ("hub", "bespoke", "template"):
    rs = sorted(by.get(typ, []), key=lambda r: r["unique_pct"]); flagged = [r for r in rs if r["flag"]]
    L.append(f"\n## {typ} — {len(rs)} pages, {len(flagged)} below 60% unique\n")
    L.append("| Page | Service | Words | Unique | Max sim | Most similar | In-links (idx) | Last change | Flag |\n|---|---|---:|---:|---:|---|---:|---|---|")
    for r in rs: L.append(f"| `{r['path']}` | {r['service']} | {r['words']} | {r['unique_pct']}% | {r['max_similarity_pct']}% | `{r['most_similar']}` | {r['in_links_total']} ({r['in_links_from_indexable']}) | {r['last_content_change']} | {r['flag']} |")
OUT_MD.write_text("\n".join(L) + "\n", encoding="utf-8")
print("pages:", len(rows), {t: (len(v), sum(1 for r in v if r["flag"])) for t, v in by.items()}, "→", OUT_CSV.name, OUT_MD.name)
