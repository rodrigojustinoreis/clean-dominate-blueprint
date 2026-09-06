#!/usr/bin/env python3
"""Static preview server for dist/ that emulates netlify.toml redirect/rewrite rules.

Usage: serve_dist.py <dist_dir> <netlify.toml> [port]
301/302 rules → real redirect responses; 200 rules → rewrite; static files; SPA 404 fallback.
"""
import sys, http.server, functools
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
from url_inventory import parse_netlify_redirects, resolve_local_status  # noqa: E402

DIST = Path(sys.argv[1]).resolve(); RULES = parse_netlify_redirects(Path(sys.argv[2])); PORT = int(sys.argv[3]) if len(sys.argv) > 3 else 4174

def static_file(path: str):
    if path == "/": return DIST / "index.html"
    for c in (DIST / (path.lstrip("/") + ".html"), DIST / path.lstrip("/") / "index.html", DIST / path.lstrip("/")):
        if c.is_file(): return c
    return None

class H(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        path = self.path.split("?", 1)[0]
        if path != "/" and path.endswith("/"): path = path[:-1]
        st, note = resolve_local_status(path, RULES, lambda p: static_file(p) is not None)
        if st in (301, 302):
            self.send_response(st); self.send_header("Location", note); self.end_headers(); return
        if st == 200 and note.startswith("rewrite → "):
            path = note.split("→ ", 1)[1].rstrip("/") or "/"
        f = static_file(path)
        if f is None or st == 404:
            f = DIST / "index.html"; st = 404
        data = f.read_bytes()
        self.send_response(200 if st == 200 else st)
        ctype = "text/html; charset=utf-8" if f.suffix == ".html" else self.guess_type(str(f))
        self.send_header("Content-Type", ctype); self.send_header("Content-Length", str(len(data))); self.end_headers(); self.wfile.write(data)
    def log_message(self, *a): pass

http.server.ThreadingHTTPServer(("127.0.0.1", PORT), functools.partial(H, directory=str(DIST))).serve_forever()
