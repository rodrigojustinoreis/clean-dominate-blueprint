#!/usr/bin/env python3
"""Field-by-field before/after comparison of two local builds for a list of paths.

Usage: phase1_compare.py <dist_before> <dist_after> <out.md> <path> [<path> ...]
Compares: title, meta description, canonical, robots, H1, hreflang, JSON-LD types, phone, form,
outbound internal links, outbound links to noindex/redirect targets. Reuses url_inventory.parse_page.
"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from url_inventory import parse_page, norm_path  # noqa: E402

before, after, out = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])
paths = sys.argv[4:]

def load(dist: Path, p: str):
    f = dist / ("index.html" if p == "/" else p.lstrip("/") + "/index.html")
    if not f.exists():
        return None
    d = parse_page(f.read_text(encoding="utf-8", errors="replace"))
    return {
        "title": d["title"], "meta_description": d["meta_description"], "canonical": d["canonical"],
        "robots": d["robots"], "h1": " || ".join(d["h1s"]), "h1_count": len(d["h1s"]),
        "hreflang": " | ".join(f"{l}={norm_path(h) or h}" for l, h in d["hreflang"]),
        "schema_types": ",".join(d["schema_types"]), "has_phone": d["has_phone"], "has_form": d["has_form"],
        "out_links": len(d["out_links"]),
        "_links": d["out_links"],
    }

FIELDS = ["title", "meta_description", "canonical", "robots", "h1", "h1_count", "hreflang", "schema_types", "has_phone", "has_form", "out_links"]
rows, unchanged, missing = [], [], []
for p in paths:
    b, a = load(before, p), load(after, p)
    if b is None or a is None:
        missing.append((p, "absent" if b is None else "prerendered", "absent" if a is None else "prerendered"))
        continue
    diffs = [(f, b[f], a[f]) for f in FIELDS if b[f] != a[f]]
    gone = sorted(b["_links"] - a["_links"]); new = sorted(a["_links"] - b["_links"])
    if gone or new:
        diffs.append(("links removed", ", ".join(gone) or "—", ""))
        diffs.append(("links added", "", ", ".join(new) or "—"))
    if diffs:
        rows.append((p, diffs))
    else:
        unchanged.append(p)

md = ["# Fase 1 — comparação antes/depois (build local)\n",
      f"Antes: `{before}`  \nDepois: `{after}`  \nURLs comparadas: **{len(paths)}** — sem nenhuma diferença: **{len(unchanged)}**; com diferenças: **{len(rows)}**; presentes só de um lado: **{len(missing)}**.\n",
      "Campos: title, meta description, canonical, robots, H1, hreflang, tipos JSON-LD, telefone, formulário, links internos.\n"]
if missing:
    md.append("\n## Presentes só de um lado\n\n| path | antes | depois |\n|---|---|---|\n" + "".join(f"| {p} | {b} | {a} |\n" for p, b, a in missing))
md.append("\n## URLs com diferenças\n")
for p, diffs in rows:
    md.append(f"\n### {p}\n\n| campo | antes | depois |\n|---|---|---|\n")
    for f, b, a in diffs:
        md.append(f"| {f} | {str(b).replace('|', '¦')[:300]} | {str(a).replace('|', '¦')[:300]} |\n")
md.append("\n## URLs sem nenhuma diferença\n\n" + "".join(f"- {p}\n" for p in unchanged))
out.write_text("".join(md), encoding="utf-8")
print(f"compared {len(paths)}: unchanged={len(unchanged)} changed={len(rows)} missing={len(missing)} → {out}")
