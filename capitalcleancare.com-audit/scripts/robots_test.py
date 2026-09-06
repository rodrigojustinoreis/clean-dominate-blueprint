#!/usr/bin/env python3
"""Reproducible robots.txt test: group selection + wildcard matching per RFC 9309.

Why not urllib.robotparser? It implements group selection correctly but treats `*` and `$`
literally, so wildcard rules such as `Disallow: /*?*utm_` never match anything. Googlebot and
Bingbot DO support `*` and `$` (RFC 9309 §2.2.3), so this file implements the spec directly:

  * Group selection (§2.2.1): a crawler obeys ONLY the group whose user-agent token matches its
    product token (case-insensitive, prefix match on the token); if none matches, the `*` group.
    Rules are never merged across groups — `User-agent: *` is NOT inherited by `User-agent: Googlebot`.
  * Rule matching (§2.2.2): among the allow/disallow rules whose pattern matches the URL path
    (+query), the longest pattern wins; on equal length, allow wins. An empty Disallow allows all.

Usage:
    python3 robots_test.py <robots.txt> [<robots.txt> ...]
"""
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit

AGENTS = ["Googlebot", "Googlebot-Image", "Bingbot", "facebookexternalhit", "Applebot", "DuckDuckBot", "GPTBot"]
URLS = [
    "/",
    "/services/deep-cleaning",
    "/services/deep-cleaning?utm_source=newsletter",
    "/?utm_source=facebook&utm_medium=social",
    "/locations/bethesda-md?fbclid=abc123",
    "/pricing?gclid=xyz",
    "/?blog=y",
    "/resources?blogcategory=tips",
    "/api/send-quote-email",
    "/.netlify/functions/receive-lead",
]


def parse(text: str) -> list[dict]:
    """→ [{agents:[...], rules:[(allow:bool, pattern:str)]}] in file order."""
    groups: list[dict] = []
    cur: dict | None = None
    last_was_agent = False
    for raw in text.splitlines():
        line = raw.split("#", 1)[0].strip()
        if not line or ":" not in line:
            continue
        key, val = [x.strip() for x in line.split(":", 1)]
        key = key.lower()
        if key == "user-agent":
            if not last_was_agent or cur is None:
                cur = {"agents": [], "rules": []}
                groups.append(cur)
            cur["agents"].append(val.lower())
            last_was_agent = True
            continue
        last_was_agent = False
        if cur is None:
            continue
        if key in ("allow", "disallow"):
            cur["rules"].append((key == "allow", val))
        # crawl-delay / sitemap etc. are ignored for access decisions
    return groups


def select_group(groups: list[dict], agent: str) -> dict | None:
    token = agent.lower()
    best, best_len = None, -1
    for g in groups:
        for a in g["agents"]:
            if a != "*" and (token.startswith(a) or a.startswith(token)) and len(a) > best_len:
                best, best_len = g, len(a)
    if best:
        return best
    for g in groups:
        if "*" in g["agents"]:
            return g
    return None


def pattern_matches(pattern: str, path: str) -> bool:
    if pattern == "":
        return False
    anchored = pattern.endswith("$")
    core = pattern[:-1] if anchored else pattern
    rx = "^" + "".join(".*" if ch == "*" else re.escape(ch) for ch in core) + ("$" if anchored else "")
    return re.match(rx, path) is not None


def allowed(groups: list[dict], agent: str, url_path: str) -> bool:
    g = select_group(groups, agent)
    if g is None:
        return True
    parts = urlsplit(url_path)
    path = parts.path + ("?" + parts.query if parts.query else "")
    winner, winner_len = True, -1
    for allow, pat in g["rules"]:
        if pattern_matches(pat, path):
            if len(pat) > winner_len or (len(pat) == winner_len and allow):
                winner, winner_len = allow, len(pat)
    return winner


def matrix(path: Path) -> str:
    groups = parse(path.read_text(encoding="utf-8"))
    out = [f"\n=== {path}  ({len(groups)} groups)"]
    for g in groups:
        out.append(f"  group {g['agents']}: {len(g['rules'])} rule(s)")
    header = f"{'URL':52s}" + "".join(f"{a[:14]:>15s}" for a in AGENTS)
    out.append(header)
    out.append("-" * len(header))
    for u in URLS:
        out.append(f"{u:52s}" + "".join(f"{'allow' if allowed(groups, a, u) else 'BLOCK':>15s}" for a in AGENTS))
    return "\n".join(out)


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(__doc__)
        sys.exit(2)
    for p in sys.argv[1:]:
        print(matrix(Path(p)))
