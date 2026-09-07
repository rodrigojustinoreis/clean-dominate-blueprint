#!/usr/bin/env python3
"""Contextual inbound-link audit (Phase 4 P1).
Usage: phase4_contextual_links.py <dist> <out.md> <target...>
A link counts as CONTEXTUAL only when it sits inside prose (<p>/<li>/<td>/<blockquote>) within <main>,
outside <nav>/<header>/<footer>/<aside>, and the containing element carries >= 40 characters of other
text. Cards, grids, chips, breadcrumbs, headings and bare list links are reported separately.
Sources are limited to indexable pages (in sitemap.xml)."""
import re, sys, html
from pathlib import Path
from bs4 import BeautifulSoup
D = Path(sys.argv[1]); OUT = Path(sys.argv[2]); TARGETS = [t.rstrip("/") for t in sys.argv[3:]]
sm = (D / "sitemap.xml").read_text(); LOCS = {(l or "/") for l in re.findall(r"<loc>https://capitalcleancare.com([^<]*)</loc>", sm)}
def norm(h): h = h.split("#")[0].split("?")[0]; return h.rstrip("/") or "/"
rows = {t: [] for t in TARGETS}
pages = {}
for f in D.rglob("index.html"):
    rel = f.relative_to(D).parent.as_posix(); p = "/" if rel == "." else "/" + rel
    if p not in LOCS: continue
    pages[p] = f
for p, f in sorted(pages.items()):
    s = f.read_text(encoding="utf-8", errors="replace")
    if not any(f'href="{t}"' in s or f'href="{t}/"' in s for t in TARGETS): continue
    soup = BeautifulSoup(s, "lxml"); main = soup.find("main") or soup
    for bad in main.find_all(["nav", "header", "footer", "aside"]): bad.decompose()
    for a in main.find_all("a", href=True):
        t = norm(a["href"])
        if t not in rows or t == p: continue
        anchor = " ".join(a.get_text(" ", strip=True).split())
        prose = a.find_parent(["p", "li", "td", "blockquote"])
        heading = a.find_parent(["h1", "h2", "h3", "h4"])
        # nearest section heading for context
        sec = a.find_parent("section"); h = sec.find(["h2", "h3"]) if sec else None
        sec_title = " ".join(h.get_text(" ", strip=True).split())[:70] if h else ""
        if prose is not None and heading is None:
            other = len(" ".join(prose.get_text(" ", strip=True).split())) - len(anchor)
            kind = "contextual" if other >= 40 else "list-link"
        elif heading is not None: kind = "heading"
        else:
            kind = "card/grid"
        rows[t].append((kind, p, anchor[:60], sec_title))
lines = ["# Phase 4 — contextual inbound links (build: %s)\n" % D, "Contextual = prose link inside <p>/<li>/<td> with ≥40 chars of surrounding text, inside <main>, from an indexable page.\n"]
for t in TARGETS:
    ctx = [r for r in rows[t] if r[0] == "contextual"]; other = [r for r in rows[t] if r[0] != "contextual"]
    srcs = sorted({r[1] for r in ctx})
    lines.append(f"\n## {t}\n\n**Contextual: {len(ctx)} links from {len(srcs)} indexable pages** · other (cards/grids/lists/headings): {len(other)} links from {len({r[1] for r in other})} pages\n")
    if ctx:
        lines.append("| Source | Anchor | Section |\n|---|---|---|")
        for k, p, a, sec in sorted(ctx): lines.append(f"| `{p}` | {a} | {sec} |")
    kinds = {}
    for k, p, a, sec in other: kinds.setdefault(k, set()).add(p)
    for k, ps in kinds.items(): lines.append(f"\n- {k}: {len(ps)} pages" + (f" (e.g. {', '.join(sorted(ps)[:4])})" if ps else ""))
    print(f"{t}: contextual={len(ctx)} from {len(srcs)} pages | other={len(other)}")
OUT.write_text("\n".join(lines) + "\n", encoding="utf-8"); print("wrote", OUT)
