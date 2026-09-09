#!/usr/bin/env python3
"""Live drift gate for the 23 baselined URLs (baseline IDs 215-237, captured 2026-09-07 after Phase 3).
Runs ~/.claude/skills/seo/scripts/drift_compare.py per URL and counts ONLY triggered findings.
Usage: run_drift_gate.py <out.json>
Note: drift_compare binds each baseline to its production URL, so this gate only runs against
https://capitalcleancare.com (a draft host returns "No baseline found"). Pre-deploy checks use the
build comparison scripts instead. The baseline is never rewritten by this script.
Exit status: 0 only when EXACTLY 23 URLs were compared without fetch/parse errors; any error, timeout or
missing URL exits 2 (a TOTAL of 0 findings is never reported as a pass in that case)."""
import json, os, sqlite3, subprocess, sys
PY = os.path.expanduser("~/.claude/skills/seo/.venv/bin/python3")
CMP = os.path.expanduser("~/.claude/skills/seo/scripts/drift_compare.py")
DB = os.path.expanduser("~/.cache/claude-seo/drift/baselines.db")
out_path = sys.argv[1]; origin = "https://capitalcleancare.com"
rows = sqlite3.connect(DB).execute("select id, url from baselines where id between 215 and 237 order by id").fetchall()
results = []
for bid, url in rows:
    target = url.replace("https://capitalcleancare.com", origin)
    try:
        p = subprocess.run([PY, CMP, "--skip-cwv", "--baseline-id", str(bid), target], capture_output=True, text=True, timeout=180)
    except subprocess.TimeoutExpired:
        results.append({"url": url, "baseline_id": bid, "error": "timeout after 180s", "rc": -1}); continue
    try:
        data = json.loads(p.stdout[p.stdout.index("{"):p.stdout.rindex("}") + 1])
        if "error" in data and not data.get("findings") and not data.get("triggered_findings"): raise ValueError(data["error"])
    except Exception as e:
        p_err = (p.stderr or p.stdout or str(e))
        results.append({"url": url, "baseline_id": bid, "error": (p_err or str(e))[-400:], "rc": p.returncode}); continue
    tf = data.get("triggered_findings") or [f for f in data.get("findings", []) if f.get("triggered")]
    # drift_compare reports severities in upper case ("CRITICAL"/"WARNING"/"INFO") and a summary block; normalise.
    sev = {"critical": 0, "warning": 0, "info": 0}
    for f in tf:
        k = str(f.get("severity", "info")).lower(); sev[k] = sev.get(k, 0) + 1
    summ = data.get("summary") or {}
    for k in sev:
        if isinstance(summ.get(k), int) and summ[k] != sev[k]: sev[k] = summ[k]
    results.append({"url": url, "target": target, "baseline_id": bid, **sev, "triggered": tf})
json.dump(results, open(out_path, "w"), indent=1)
print(f"{'URL':70s} crit warn info")
tot = {"critical": 0, "warning": 0, "info": 0}
for r in results:
    if "error" in r: print(f"{r['url'].replace('https://capitalcleancare.com',''):70s} ERROR {r['error'][:80]}"); continue
    print(f"{r['url'].replace('https://capitalcleancare.com','') or '/':70s} {r['critical']:4d} {r['warning']:4d} {r['info']:4d}")
    for k in tot: tot[k] += r[k]
errors = [r for r in results if "error" in r]; verified = len(results) - len(errors)
print(f"\nVERIFIED {verified}/23 URLs without error; ERRORS {len(errors)}")
print(f"TOTAL triggered — critical: {tot['critical']}  warning: {tot['warning']}  info: {tot['info']}" + ("" if verified == 23 and len(rows) == 23 else "   <-- NOT A PASS: fewer than 23 URLs verified"))
print("\nTriggered findings detail (warning+critical):")
for r in results:
    for f in r.get("triggered", []):
        if str(f.get("severity", "")).lower() in ("warning", "critical"): print(f"  [{str(f.get('severity')).lower()}] {r['url'].replace('https://capitalcleancare.com','') or '/'} — {f.get('rule') or f.get('check') or f.get('type')}: {str(f.get('message') or '')[:120]} | old={str(f.get('old_value',''))[:70]} | new={str(f.get('new_value',''))[:70]}")
print("\nInfo findings (rule per URL):")
for r in results:
    infos=[f.get("rule") or f.get("check") for f in r.get("triggered", []) if str(f.get("severity","")).lower()=="info"]
    if infos: print(f"  {r['url'].replace('https://capitalcleancare.com','') or '/'}: {', '.join(map(str,infos))}")
if verified != 23 or len(rows) != 23:
    print("GATE RESULT: FAIL (incomplete verification)"); sys.exit(2)
print("GATE RESULT: complete (23/23 verified) — judge the triggered findings above")
