#!/usr/bin/env python3
"""Rockville Sprint 1 post-build checks. Usage: rockville_sprint1_checks.py <after_dist> <baseline_dist>"""
import re, sys, html, hashlib, json
from pathlib import Path
A = Path(sys.argv[1]); B = Path(sys.argv[2])
CHANGED = ["/locations/rockville-md/deep-cleaning", "/locations/rockville-md/move-out-cleaning", "/locations/rockville-md/recurring-cleaning"]
NOOP = ["/locations/rockville-md", "/locations/rockville-md/house-cleaning", "/resources/house-cleaning-cost-rockville-md"]
# protected per current history: home, About, Ads landing, deep cost guide, Bethesda pages, SS/Alexandria/Fairfax hubs, the 3 pages promoted in Phase 3, /services/airbnb + office (Phase 4 §7), /es, hardwood guide (Phase 5)
PROTECTED = ["/", "/about", "/services/house-cleaning", "/resources/how-much-does-deep-cleaning-cost", "/locations/bethesda-md", "/locations/bethesda-md/deep-cleaning", "/locations/bethesda-md/recurring-cleaning", "/locations/bethesda-md/house-cleaning", "/locations/silver-spring-md", "/locations/alexandria-va", "/locations/fairfax-va", "/locations/wheaton-md/house-cleaning", "/locations/wheaton-md/apartment-cleaning", "/services/airbnb-cleaning", "/services/office-cleaning", "/es", "/resources/how-to-clean-hardwood-floors-after-construction"]
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
def h1(s): return [html.unescape(re.sub(r"<[^>]+>", "", x)).strip() for x in re.findall(r"<h1[^>]*>(.*?)</h1>", s, re.S)]
def blocks(s): return re.findall(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', s, re.S)
def types(s): return sorted({t for blk in blocks(s) for t in re.findall(r'"@type":\s*"([A-Za-z]+)"', blk)})
def shash(s): return hashlib.sha256("".join(sorted(blocks(s))).encode()).hexdigest()[:12]
def norm(s): return re.sub(r"/assets/[A-Za-z0-9_.-]+-[A-Za-z0-9_-]{8}\.(js|css|webp|png)", "/assets/X", s)
def main_text(s):
    m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); body = m.group(1) if m else s
    body = re.sub(r"<script.*?</script>|<style.*?</style>|<nav.*?</nav>|<footer.*?</footer>", "", body, flags=re.S)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", body))).strip()
def main_links(s): m = re.search(r"<main[^>]*>(.*)</main>", s, re.S); return {(h.rstrip("/") or "/") for h in re.findall(r'href="(/[^"#?]+)"', m.group(1) if m else s)}
R = []
def chk(n, ok, d=""): R.append((n, bool(ok), str(d))); print(("PASS " if ok else "FAIL ") + n + (" — " + str(d) if d else ""))
chk("sitemap unchanged (300, same URL set)", la == lb and len(la) == 300, f"{len(la)} vs {len(lb)}; diff={sorted(la ^ lb)[:5]}")
chk("page count unchanged", len(a) == len(b), f"{len(a)} vs {len(b)}")
for p in CHANGED:
    s, o = a[p], b[p]
    chk(f"{p}: 200 prerendered, index,follow, self-canonical, in sitemap", robots(s).startswith("index, follow") and canon(s) == "https://capitalcleancare.com" + p and p in la)
    chk(f"{p}: title, H1, canonical, robots, schema TYPES unchanged", title(s) == title(o) and h1(s) == h1(o) and canon(s) == canon(o) and robots(s) == robots(o) and types(s) == types(o), f"types={types(s)}")
    for blk in blocks(s):
        try: json.loads(blk)
        except Exception as e: chk(f"{p}: JSON-LD valid", False, str(e)[:80])
    m = meta(s); chk(f"{p}: meta description 120–160", 120 <= len(m) <= 160, f"{len(m)}: {m}")
    chk(f"{p}: tel + quote form/CTA present", "tel:+12407042551" in s and ("/#quote" in s or 'name="quote"' in s or "QuoteForm" in s or "Get My Free" in s))
    new_bad = {h for h in main_links(s) if h in a and "noindex" in robots(a[h])} - {h for h in main_links(o) if h in b and "noindex" in robots(b[h])}
    chk(f"{p}: 0 new links to noindex pages", not new_bad, sorted(new_bad))
    wa, wb = len(re.findall(r"[A-Za-z'-]+", main_text(s))), len(re.findall(r"[A-Za-z'-]+", main_text(o))); print(f"   words {wb} → {wa}")
# specific content assertions
d = a["/locations/rockville-md/deep-cleaning"]
chk("deep: documented-work section with the 4 hub photographs + date + hub link", "Documented detail work in Rockville" in d and d.count("rockville-real-work/") >= 8 and 'datetime="2026-08-17"' in d and 'href="/locations/rockville-md"' in d)
chk("deep: no dollar figures added", not re.search(r"\$\d", main_text(d)) or main_text(d).count("$") == main_text(b["/locations/rockville-md/deep-cleaning"]).count("$"), f"$ in after={main_text(d).count('$')} before={main_text(b['/locations/rockville-md/deep-cleaning']).count('$')}")
mo = a["/locations/rockville-md/move-out-cleaning"]
chk("move-out: no 'same-day'/'same day'/'deposit back' left (visible text, meta, schema)", "same-day" not in mo.lower() and "same day" not in mo.lower() and "deposit back" not in mo)
rc = a["/locations/rockville-md/recurring-cleaning"]
# Review decision (Codex, 2026-09-08): the validated checklist stays, the inferred visit-scope table must NOT exist.
rcu = html.unescape(rc)  # prerendered HTML escapes apostrophes (&#x27;)
conds = {"checklist kept": "What's Included in Every Rockville Recurring Clean" in rcu, "no inferred table": "What each Rockville visit covers" not in rcu, "monthly FAQ": "Is monthly house cleaning available in Rockville?" in rcu, "cost-guide link": "/resources/house-cleaning-cost-rockville-md" in rc, "no new $": main_text(rc).count("$") == main_text(b["/locations/rockville-md/recurring-cleaning"]).count("$")}
def checklist_text(page):
    t = main_text(page); i = t.find("What's Included in Every Rockville Recurring Clean"); j = t.find("Rockville Homeowners Love", i)
    return t[i:j] if i >= 0 and j > i else ""
conds["checklist text == baseline"] = checklist_text(rc) != "" and checklist_text(rc) == checklist_text(b["/locations/rockville-md/recurring-cleaning"])
# Review decision (2026-09-08): the rendered FAQs come from the eco-recurring override (already mention monthly) — they and the
# FAQPage schema must be identical to baseline; the monthly gain is in meta / hero lead / Service description + the cost/scope block.
def faq_text(page):
    t = main_text(page); i = t.find("Recurring Cleaning FAQ"); j = t.find("Related", i) if t.find("Related", i) > 0 else len(t)
    return t[i:j]
def faq_schema(page): return [blk for blk in blocks(page) if '"FAQPage"' in blk]
rb = b["/locations/rockville-md/recurring-cleaning"]
conds.pop("monthly FAQ", None)
conds["FAQ text == baseline"] = faq_text(rc) != "" and faq_text(rc) == faq_text(rb)
conds["FAQPage schema == baseline"] = faq_schema(rc) == faq_schema(rb)
def service_node(page):  # the page's own Service node, selected by name/url — not the first block that mentions "Service"
    for blk in blocks(page):
        try: o = json.loads(blk)
        except Exception: continue
        for node in (o.get("@graph", [o]) if isinstance(o, dict) else []):
            if isinstance(node, dict) and node.get("@type") == "Service" and ("Recurring House Cleaning in Rockville" in str(node.get("name", "")) or str(node.get("url", "")).endswith("/locations/rockville-md/recurring-cleaning")):
                return node
    return {}
conds["monthly in meta"] = "monthly" in meta(rc).lower()
conds["monthly in hero lead"] = "weekly, bi-weekly or monthly" in html.unescape(rc)
conds["monthly in the page's Service description"] = "monthly" in str(service_node(rc).get("description", "")).lower()
conds["cost/scope block present"] = "What recurring cleaning costs in Rockville" in rcu and "written into your quote" in rcu
chk("recurring: checklist + FAQs + FAQPage schema == baseline; no inferred table; monthly in meta/lead/Service; cost-guide block; no new $", all(conds.values()), conds)
chk("recurring: no dollar figures added", main_text(rc).count("$") == main_text(b["/locations/rockville-md/recurring-cleaning"]).count("$"), f"$ after={main_text(rc).count('$')} before={main_text(b['/locations/rockville-md/recurring-cleaning']).count('$')}")
# overlap after change
def sh(t, n=5): w = re.findall(r"[a-z0-9$]+", t.lower()); return set(" ".join(w[i:i+n]) for i in range(len(w)-n+1))
me = sh(main_text(rc)); hp = sh(main_text(a["/locations/rockville-md/house-cleaning"])); me0 = sh(main_text(b["/locations/rockville-md/recurring-cleaning"]))
print(f"   recurring overlap with Rockville house page: {len(me0 & hp)/len(me0):.1%} → {len(me & hp)/len(me):.1%}")
union = set().union(*(sh(main_text(a[p])) for p in a if re.fullmatch(r"/locations/[a-z-]+/recurring-cleaning", p) and p != "/locations/rockville-md/recurring-cleaning"))
union0 = set().union(*(sh(main_text(b[p])) for p in b if re.fullmatch(r"/locations/[a-z-]+/recurring-cleaning", p) and p != "/locations/rockville-md/recurring-cleaning"))
print(f"   recurring unique vs all other recurring pages: {len(me0-union0)/len(me0):.1%} → {len(me-union)/len(me):.1%}")
# NO-OP pages and protected pages byte-identical / fields identical
for p in NOOP: chk(f"NO-OP {p}: HTML identical to baseline (asset hashes normalised)", norm(a[p]) == norm(b[p]))
diffs = [(p, n) for p in PROTECTED for n, fn in [("title", title), ("meta", meta), ("canonical", canon), ("robots", robots), ("h1", h1), ("schema", shash)] if fn(a[p]) != fn(b[p])]
chk("protected pages: title/meta/canonical/robots/H1/schema unchanged", not diffs, diffs)
chk("Ads landing byte-identical", norm(a["/services/house-cleaning"]) == norm(b["/services/house-cleaning"]))
changed = sorted(p for p in la if norm(a[p]) != norm(b[p])); print("   indexable pages whose HTML changed:", changed)
chk("only the 3 target pages changed among indexable URLs", set(changed) == set(CHANGED), changed)
n_ok = sum(1 for _, ok, _ in R if ok); print(f"\nSUMMARY {n_ok}/{len(R)} passed")
sys.exit(0 if n_ok == len(R) else 1)
