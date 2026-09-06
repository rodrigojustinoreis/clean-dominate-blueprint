#!/usr/bin/env python3
"""Drift gate against a LOCAL build using the production baselines + the seo skill's 17 rules.

drift_compare.py only fetches live URLs; here the same rules run on dist/<path>/index.html parsed by
the skill's own parse_html.py, against the most recent stored baseline for each production URL.
CWV rules are skipped (no live page). Counts ONLY triggered findings.

Usage: <skill-venv-python> local_drift_gate.py <dist_dir> <out.json> [--ids 100-122]
"""
import argparse, json, os, sqlite3, subprocess, sys
from pathlib import Path

SKILL = os.path.expanduser("~/.claude/skills/seo/scripts")
sys.path.insert(0, SKILL)
import drift_compare as dc  # noqa: E402
from drift_baseline import DB_PATH, hash_content  # noqa: E402

ap = argparse.ArgumentParser(); ap.add_argument("dist"); ap.add_argument("out"); ap.add_argument("--ids", default="100-122")
a = ap.parse_args()
lo, hi = [int(x) for x in a.ids.split("-")]
conn = sqlite3.connect(DB_PATH); conn.row_factory = sqlite3.Row
rows = conn.execute("SELECT * FROM baselines WHERE id BETWEEN ? AND ? ORDER BY id", (lo, hi)).fetchall()
results = []
for r in rows:
    b = dict(r); url = b["url"]; path = url.replace("https://capitalcleancare.com", "") or "/"
    f = Path(a.dist) / ("index.html" if path == "/" else path.lstrip("/") + "/index.html")
    if not f.exists():
        results.append({"url": url, "baseline_id": b["id"], "error": "not prerendered", "sev": {"critical": 1, "warning": 0, "info": 0}}); continue
    html = f.read_text(encoding="utf-8", errors="replace")
    p = subprocess.run([sys.executable, os.path.join(SKILL, "parse_html.py"), str(f), "--url", url, "--json"], capture_output=True, text=True, timeout=60)
    parsed = json.loads(p.stdout)
    findings = [
        dc.rule_01_schema_removed(b, parsed), dc.rule_02_canonical_changed(b, parsed), dc.rule_03_canonical_removed(b, parsed),
        dc.rule_04_noindex_added(b, parsed), dc.rule_05_h1_removed(b, parsed), dc.rule_06_h1_changed_significantly(b, parsed),
        dc.rule_07_title_removed(b, parsed), dc.rule_08_status_code_error(b, 200),
        dc.rule_09_title_changed(b, parsed), dc.rule_10_meta_description_changed(b, parsed),
        dc.rule_13_og_tags_removed(b, parsed), dc.rule_14_schema_modified(b, parsed),
        dc.rule_15_schema_added(b, parsed), dc.rule_16_h2_structure_changed(b, parsed), dc.rule_17_content_hash_changed(b, hash_content(html)),
    ]
    trig = [x for x in findings if x["triggered"]]
    sev = {"critical": 0, "warning": 0, "info": 0}
    for x in trig: sev[x["severity"].lower()] += 1
    results.append({"url": url, "baseline_id": b["id"], "sev": sev, "triggered": [{k: x[k] for k in ("severity", "rule", "message")} for x in trig]})
json.dump(results, open(a.out, "w"), indent=2)
tc = tw = ti = 0
print(f"{'URL':66s} {'crit':>4} {'warn':>4} {'info':>4}")
for r in results:
    s = r["sev"]; tc += s["critical"]; tw += s["warning"]; ti += s["info"]
    print(f"{r['url'].replace('https://capitalcleancare.com','') or '/':66s} {s['critical']:>4} {s['warning']:>4} {s['info']:>4}" + (f"  ERROR {r['error']}" if "error" in r else ""))
print(f"\nTOTAL triggered — critical: {tc}  warning: {tw}  info: {ti}")
for r in results:
    for x in r.get("triggered", []):
        if x["severity"] != "INFO":
            print(f"  [{x['severity']}] {r['url']}: {x['rule']} — {x['message'][:120]}")
