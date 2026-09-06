#!/usr/bin/env python3
"""Reproducible URL inventory for capitalcleancare.com from a local build (dist/).

For every URL in dist/sitemap.xml (plus every other prerendered page, flagged `in_sitemap=0`):
  * local_status     — what Netlify would serve, derived from netlify.toml rules + the static file
                       (200 static, 200 rewrite, 301/302 redirect → target, 404 fallback)
  * prod_status      — optional live HTTP status (no redirects followed), with --prod
  * title, meta_description, canonical, canonical_self, robots, indexable
  * h1_count, h1
  * hreflang         — alternates declared on the page; hreflang_ok / hreflang_issues after
                       validating each alternate is 200, indexable, self-canonical and reciprocal
  * schema_types     — JSON-LD @type list
  * out_links        — distinct internal link targets on the page
  * in_links         — distinct prerendered pages linking to this URL (site-wide)
  * in_links_noindex_only — inbound links that come only from noindex pages
  * has_phone / has_form — tel:+12407042551 present / <form> present

Usage:
    python3 url_inventory.py <dist_dir> <out_prefix> [--prod] [--netlify path/to/netlify.toml]

Writes <out_prefix>.csv and <out_prefix>.md (Markdown summary). Pure stdlib.
"""
from __future__ import annotations

import argparse
import concurrent.futures as cf
import csv
import json
import re
import sys
import urllib.error
import urllib.request
from collections import Counter, defaultdict
from html import unescape
from pathlib import Path

ORIGIN = "https://capitalcleancare.com"
PHONE = "tel:+12407042551"

# ─────────────────────────────── netlify.toml ────────────────────────────────

def parse_netlify_redirects(path: Path) -> list[dict]:
    """Minimal parser for [[redirects]] blocks (from/to/status/force/query)."""
    rules: list[dict] = []
    cur: dict | None = None
    for raw in path.read_text(encoding="utf-8").splitlines():
        line = raw.split("#", 1)[0].strip() if not raw.strip().startswith("#") else ""
        if not line:
            continue
        if line.startswith("[[redirects]]"):
            cur = {"status": 301, "force": False, "query": None}
            rules.append(cur)
            continue
        if line.startswith("[") and cur is not None:
            cur = None  # a different table ([[headers]] etc.)
            continue
        if cur is None or "=" not in line:
            continue
        k, v = [x.strip() for x in line.split("=", 1)]
        if k == "from":
            cur["from"] = v.strip('"')
        elif k == "to":
            cur["to"] = v.strip('"')
        elif k == "status":
            cur["status"] = int(v)
        elif k == "force":
            cur["force"] = v.lower() == "true"
        elif k == "query":
            cur["query"] = v
    return [r for r in rules if "from" in r and "to" in r]


def _rule_regex(frm: str) -> re.Pattern:
    # Netlify: `*` = splat (rest of path), `:name` = one segment.
    out = "^"
    i = 0
    while i < len(frm):
        c = frm[i]
        if c == "*":
            out += "(?P<splat>.*)"
        elif c == ":":
            j = i + 1
            while j < len(frm) and (frm[j].isalnum() or frm[j] == "_"):
                j += 1
            out += f"(?P<{frm[i+1:j]}>[^/]+)"
            i = j
            continue
        else:
            out += re.escape(c)
        i += 1
    return re.compile(out + "$")


def resolve_local_status(path: str, rules: list[dict], static_exists) -> tuple[int, str]:
    """Emulate Netlify first-match evaluation for a path (no query string)."""
    for r in rules:
        frm = r["from"]
        if frm.startswith("http"):
            continue  # host-level rules (http→https, www) don't apply to same-host paths
        if r.get("query"):
            continue  # query-conditioned rules never match a bare path
        m = _rule_regex(frm).match(path)
        if not m:
            continue
        # A non-forced rule is shadowed by an existing static file.
        if not r["force"] and static_exists(path):
            return 200, "static (rule shadowed)"
        target = r["to"]
        for k, v in m.groupdict().items():
            target = target.replace(":splat" if k == "splat" else f":{k}", v)
        if r["status"] in (301, 302, 410):
            return r["status"], target
        if r["status"] == 200:
            return 200, f"rewrite → {target}"
        if r["status"] == 404:
            return 404, target
    return (200, "static") if static_exists(path) else (404, "no file")


# ─────────────────────────────── HTML parsing ────────────────────────────────

RE_TITLE = re.compile(r"<title[^>]*>(.*?)</title>", re.S | re.I)
RE_META = re.compile(r'<meta\s+[^>]*?name="([^"]+)"[^>]*?content="([^"]*)"', re.I)
RE_META2 = re.compile(r'<meta\s+[^>]*?content="([^"]*)"[^>]*?name="([^"]+)"', re.I)
RE_CANON = re.compile(r'<link[^>]*rel="canonical"[^>]*href="([^"]+)"', re.I)
RE_HREFLANG = re.compile(r'<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"', re.I)
RE_H1 = re.compile(r"<h1[^>]*>(.*?)</h1>", re.S | re.I)
RE_A = re.compile(r'<a\s[^>]*?href="([^"#]+)(?:#[^"]*)?"', re.I)
RE_LD = re.compile(r'<script[^>]*type="application/ld\+json"[^>]*>(.*?)</script>', re.S | re.I)
RE_TAGS = re.compile(r"<[^>]+>")


def norm_path(href: str) -> str | None:
    """Internal link → canonical path form (no trailing slash, no query/hash). None if external."""
    if href.startswith(ORIGIN):
        href = href[len(ORIGIN):] or "/"
    if not href.startswith("/") or href.startswith("//"):
        return None
    href = href.split("?", 1)[0].split("#", 1)[0]
    if href != "/" and href.endswith("/"):
        href = href[:-1]
    return href or "/"


def ld_types(obj, acc: list):
    if isinstance(obj, dict):
        t = obj.get("@type")
        if t:
            acc.append(t if isinstance(t, str) else "/".join(map(str, t)))
        for v in obj.values():
            ld_types(v, acc)
    elif isinstance(obj, list):
        for v in obj:
            ld_types(v, acc)


def parse_page(html: str) -> dict:
    metas = {k.lower(): v for k, v in RE_META.findall(html)}
    for v, k in RE_META2.findall(html):
        metas.setdefault(k.lower(), v)
    h1s = [unescape(RE_TAGS.sub("", h)).strip() for h in RE_H1.findall(html)]
    types: list[str] = []
    for blob in RE_LD.findall(html):
        try:
            ld_types(json.loads(blob), types)
        except Exception:
            types.append("INVALID-JSON")
    links = set()
    for href in RE_A.findall(html):
        p = norm_path(unescape(href))
        if p:
            links.add(p)
    return {
        "title": unescape((RE_TITLE.search(html) or [None, ""])[1]).strip() if RE_TITLE.search(html) else "",
        "meta_description": unescape(metas.get("description", "")),
        "robots": metas.get("robots", ""),
        "canonical": (RE_CANON.search(html) or [None, ""])[1] if RE_CANON.search(html) else "",
        "hreflang": [(l, h) for l, h in RE_HREFLANG.findall(html)],
        "h1s": h1s,
        "schema_types": sorted(set(types)),
        "out_links": links,
        "has_phone": PHONE in html,
        "has_form": "<form" in html.lower(),
    }


# ─────────────────────────────── live status ─────────────────────────────────

class _NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):  # noqa: N802
        return None


def prod_status(path: str) -> tuple[int | None, str]:
    opener = urllib.request.build_opener(_NoRedirect)
    req = urllib.request.Request(ORIGIN + path, headers={"User-Agent": "CCC-inventory/1.0 (+read-only audit)"}, method="GET")
    try:
        with opener.open(req, timeout=20) as r:
            return r.status, r.headers.get("Location", "")
    except urllib.error.HTTPError as e:
        return e.code, e.headers.get("Location", "") if e.headers else ""
    except Exception as e:  # network
        return None, str(e)[:60]


# ─────────────────────────────── main ────────────────────────────────────────

def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("dist")
    ap.add_argument("out_prefix")
    ap.add_argument("--prod", action="store_true", help="also fetch live HTTP status for sitemap URLs")
    ap.add_argument("--netlify", default=None, help="path to netlify.toml (default: <dist>/../netlify.toml)")
    a = ap.parse_args()

    dist = Path(a.dist).resolve()
    toml = Path(a.netlify) if a.netlify else dist.parent / "netlify.toml"
    rules = parse_netlify_redirects(toml)

    # Page universe = every prerendered index.html (flat *.html aliases are byte-identical copies).
    pages: dict[str, dict] = {}
    for f in dist.rglob("index.html"):
        rel = f.relative_to(dist).parent.as_posix()
        path = "/" if rel == "." else "/" + rel
        pages[path] = parse_page(f.read_text(encoding="utf-8", errors="replace"))

    def static_exists(path: str) -> bool:
        if path == "/":
            return (dist / "index.html").exists()
        return (dist / (path.lstrip("/") + ".html")).exists() or (dist / path.lstrip("/") / "index.html").exists()

    sitemap_urls: list[str] = []
    sm = dist / "sitemap.xml"
    if sm.exists():
        sitemap_urls = [norm_path(u) or "/" for u in re.findall(r"<loc>([^<]+)</loc>", sm.read_text(encoding="utf-8"))]
    in_sitemap = set(sitemap_urls)

    # Inbound links (distinct source pages), split by source indexability.
    inbound: dict[str, set] = defaultdict(set)
    for src, d in pages.items():
        for tgt in d["out_links"]:
            if tgt != src:
                inbound[tgt].add(src)

    def is_noindex(p: str) -> bool:
        return "noindex" in pages.get(p, {}).get("robots", "").lower()

    def status_of(p: str) -> tuple[int, str]:
        return resolve_local_status(p, rules, static_exists)

    def canonical_self(p: str) -> bool:
        c = pages.get(p, {}).get("canonical", "")
        return norm_path(c) == p if c.startswith(ORIGIN) else False

    def page_indexable(p: str) -> bool:
        return p in pages and status_of(p)[0] == 200 and not is_noindex(p) and canonical_self(p)

    live: dict[str, tuple[int | None, str]] = {}
    if a.prod:
        with cf.ThreadPoolExecutor(max_workers=8) as ex:
            for p, res in zip(sitemap_urls, ex.map(prod_status, sitemap_urls)):
                live[p] = res

    rows = []
    all_paths = sitemap_urls + sorted(p for p in pages if p not in in_sitemap)
    for p in all_paths:
        d = pages.get(p)
        st, st_note = status_of(p)
        if not d:
            rows.append({"url": ORIGIN + ("" if p == "/" else p), "path": p, "in_sitemap": int(p in in_sitemap),
                         "local_status": st, "local_status_note": st_note, "prerendered": 0})
            continue
        # hreflang validation
        issues = []
        alts = d["hreflang"]
        for lang, href in alts:
            ap_ = norm_path(href)
            if ap_ is None:
                issues.append(f"{lang}: external href"); continue
            if ap_ == p:
                continue
            ast, anote = status_of(ap_)
            if ast != 200:
                issues.append(f"{lang}→{ap_} is {ast} ({anote})"); continue
            if ap_ not in pages:
                issues.append(f"{lang}→{ap_} not prerendered"); continue
            if is_noindex(ap_):
                issues.append(f"{lang}→{ap_} is noindex"); continue
            if not canonical_self(ap_):
                issues.append(f"{lang}→{ap_} canonical≠self"); continue
            back = {norm_path(h) for _, h in pages[ap_]["hreflang"]}
            if p not in back:
                issues.append(f"{lang}→{ap_} not reciprocal")
        srcs = inbound.get(p, set())
        srcs_index = {s for s in srcs if not is_noindex(s)}
        rows.append({
            "url": ORIGIN + ("" if p == "/" else p), "path": p, "in_sitemap": int(p in in_sitemap), "prerendered": 1,
            "local_status": st, "local_status_note": st_note,
            "prod_status": live.get(p, (None, ""))[0] if a.prod else "",
            "prod_location": live.get(p, (None, ""))[1] if a.prod else "",
            "title": d["title"], "title_len": len(d["title"]),
            "meta_description": d["meta_description"], "meta_len": len(d["meta_description"]),
            "canonical": d["canonical"], "canonical_self": int(canonical_self(p)),
            "robots": d["robots"], "noindex": int(is_noindex(p)), "indexable": int(page_indexable(p)),
            "h1_count": len(d["h1s"]), "h1": d["h1s"][0] if d["h1s"] else "",
            "hreflang": " | ".join(f"{l}={norm_path(h) or h}" for l, h in alts),
            "hreflang_ok": int(not issues), "hreflang_issues": "; ".join(issues),
            "schema_types": ",".join(d["schema_types"]),
            "out_links": len(d["out_links"]),
            "out_links_to_noindex": sum(1 for t in d["out_links"] if is_noindex(t)),
            "out_links_to_redirect": sum(1 for t in d["out_links"] if status_of(t)[0] in (301, 302)),
            "in_links": len(srcs), "in_links_from_indexable": len(srcs_index),
            "in_links_pct_of_pages": round(100 * len(srcs) / max(1, len(pages) - 1), 1),
            "has_phone": int(d["has_phone"]), "has_form": int(d["has_form"]),
        })

    # ── CSV
    cols = ["url", "path", "in_sitemap", "prerendered", "local_status", "local_status_note", "prod_status", "prod_location",
            "title", "title_len", "meta_description", "meta_len", "canonical", "canonical_self", "robots", "noindex", "indexable",
            "h1_count", "h1", "hreflang", "hreflang_ok", "hreflang_issues", "schema_types",
            "out_links", "out_links_to_noindex", "out_links_to_redirect", "in_links", "in_links_from_indexable",
            "in_links_pct_of_pages", "has_phone", "has_form",
            # manual columns requested by the roadmap
            "gsc_clicks_90d", "gsc_impressions_90d", "gsc_position_90d", "leads_90d", "backlinks", "decision"]
    out_csv = Path(a.out_prefix + ".csv")
    with out_csv.open("w", newline="", encoding="utf-8") as fh:
        w = csv.DictWriter(fh, fieldnames=cols, extrasaction="ignore")
        w.writeheader()
        for r in rows:
            w.writerow({**{c: "" for c in cols}, **r})

    # ── Markdown summary
    sm_rows = [r for r in rows if r["in_sitemap"]]
    extra_rows = [r for r in rows if not r["in_sitemap"] and r.get("prerendered")]
    n_pages = len(pages)
    status_c = Counter(r["local_status"] for r in sm_rows)
    prod_c = Counter(r.get("prod_status") for r in sm_rows) if a.prod else {}
    non_self = [r for r in sm_rows if not r.get("canonical_self")]
    noindex_in_sm = [r for r in sm_rows if r.get("noindex")]
    h1_bad = [r for r in sm_rows if r.get("h1_count") != 1]
    hl_bad = [r for r in rows if r.get("prerendered") and not r.get("hreflang_ok")]
    dup_titles = [t for t, c in Counter(r.get("title") for r in sm_rows).items() if c > 1]
    orphans = [r for r in sm_rows if r.get("in_links", 0) == 0]
    noindex_pages = sorted((r for r in extra_rows if r.get("noindex")), key=lambda r: -r.get("in_links", 0))
    redirect_targets = Counter()
    for d in pages.values():
        for t in d["out_links"]:
            s, note = status_of(t)
            if s in (301, 302):
                redirect_targets[(t, s, note)] += 1
    off_sitemap = Counter()
    for d in pages.values():
        for t in d["out_links"]:
            if t not in in_sitemap:
                off_sitemap[t] += 1

    def tbl(rs, cols_, limit=None):
        head = "| " + " | ".join(cols_) + " |\n|" + "---|" * len(cols_) + "\n"
        body = "".join("| " + " | ".join(str(r.get(c, "")) for c in cols_) + " |\n" for r in (rs[:limit] if limit else rs))
        return head + body

    md = []
    md.append(f"# Inventário de URLs — {dist.name}\n")
    md.append(f"Fonte: `{dist}` (build local prerenderizado) + `{toml.name}` ({len(rules)} regras de redirect). "
              f"Páginas prerenderizadas: **{n_pages}**. URLs no sitemap: **{len(sm_rows)}**. "
              f"Prerenderizadas fora do sitemap: **{len(extra_rows)}**.\n")
    md.append("## Status das URLs do sitemap (emulação Netlify)\n")
    md.append("| Status local | URLs |\n|---|---|\n" + "".join(f"| {k} | {v} |\n" for k, v in sorted(status_c.items())))
    if a.prod:
        md.append("\n| Status em produção (sem seguir redirects) | URLs |\n|---|---|\n" + "".join(f"| {k} | {v} |\n" for k, v in sorted(prod_c.items(), key=lambda x: str(x[0]))))
    md.append("\n## Gates de qualidade\n")
    md.append(f"- Sitemap contém apenas 200: **{'sim' if status_c.get(200)==len(sm_rows) else 'NÃO'}**\n")
    md.append(f"- Sitemap contém apenas canonical próprio: **{'sim' if not non_self else 'NÃO ('+str(len(non_self))+')'}**\n")
    md.append(f"- Sitemap sem noindex: **{'sim' if not noindex_in_sm else 'NÃO ('+str(len(noindex_in_sm))+')'}**\n")
    md.append(f"- Um H1 por página (sitemap): **{'sim' if not h1_bad else 'NÃO ('+str(len(h1_bad))+')'}**\n")
    md.append(f"- Títulos únicos (sitemap): **{'sim' if not dup_titles else 'NÃO ('+str(len(dup_titles))+' duplicados)'}**\n")
    md.append(f"- hreflang válido em todas as páginas prerenderizadas: **{'sim' if not hl_bad else 'NÃO ('+str(len(hl_bad))+' páginas com problema)'}**\n")
    md.append(f"- Páginas do sitemap sem nenhum link interno (órfãs): **{len(orphans)}**\n")
    if hl_bad:
        md.append("\n### Páginas com hreflang inválido\n")
        md.append(tbl(hl_bad, ["path", "noindex", "hreflang", "hreflang_issues"]))
    if non_self:
        md.append("\n### URLs do sitemap com canonical ≠ self\n")
        md.append(tbl(non_self, ["path", "canonical"]))
    if h1_bad:
        md.append("\n### Páginas do sitemap com H1 ≠ 1\n")
        md.append(tbl(h1_bad, ["path", "h1_count", "h1"]))
    if dup_titles:
        md.append("\n### Títulos duplicados no sitemap\n" + "".join(f"- {t}\n" for t in dup_titles))
    md.append("\n## Páginas noindex mais linkadas (candidatas a link global)\n")
    md.append("`in_links` = páginas distintas que linkam; `%` = fração de todas as páginas prerenderizadas.\n\n")
    md.append(tbl([{**r, "pct": r["in_links_pct_of_pages"]} for r in noindex_pages], ["path", "in_links", "pct", "in_links_from_indexable"], limit=25))
    md.append("\n## Links internos para URLs que redirecionam\n")
    md.append("| destino | status | para | páginas que linkam |\n|---|---|---|---|\n" + "".join(
        f"| {t} | {s} | {note} | {c} |\n" for (t, s, note), c in redirect_targets.most_common(25)))
    md.append(f"\n## Links internos para destinos fora do sitemap\n\nDestinos distintos: **{len(off_sitemap)}**; links (página×destino): **{sum(off_sitemap.values())}**. Top 20:\n\n")
    md.append("| destino | noindex | status | páginas que linkam |\n|---|---|---|---|\n" + "".join(
        f"| {t} | {int(is_noindex(t))} | {status_of(t)[0]} | {c} |\n" for t, c in off_sitemap.most_common(20)))
    if orphans:
        md.append("\n## Órfãs no sitemap\n" + "".join(f"- {r['path']}\n" for r in orphans[:40]))
    Path(a.out_prefix + ".md").write_text("".join(md), encoding="utf-8")
    print(f"wrote {out_csv} ({len(rows)} rows) and {a.out_prefix}.md")
    print(f"sitemap={len(sm_rows)} pages={n_pages} status={dict(status_c)} hreflang_bad={len(hl_bad)} noindex_pages={len(noindex_pages)} orphans={len(orphans)}")


if __name__ == "__main__":
    main()
