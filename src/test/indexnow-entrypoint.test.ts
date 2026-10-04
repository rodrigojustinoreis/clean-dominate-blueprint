import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { runIndexNow, parseCliArgs, type FetchLikeResponse } from "../../scripts/lib/indexnow-sitemap.mjs";

// Follow-up lot 04/10/2026. --baseline is a diagnostic input: it is accepted only with --dry-run.
// Without --dry-run the run must stop before any read or request, even with CONTEXT=production.
// Part 1 drives the same runIndexNow the entrypoint calls, against a simulated network.
// Part 2 spawns the real scripts/indexnow-ping.mjs with fetch replaced by a blocker.
// No test in this file can reach the network.

const HOST = "capitalcleancare.com";
const KEY = "test-key";
const wrap = (body: string) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset>\n${body}\n</urlset>\n`;
const entry = (loc: string, lastmod?: string) => `  <url><loc>${loc}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`;

const LIVE = wrap([entry(`https://${HOST}/`), entry(`https://${HOST}/about`), entry(`https://${HOST}/es`), entry(`https://${HOST}/guide`, "2026-06-16")].join("\n"));
const BUILT = wrap([entry(`https://${HOST}/`), entry(`https://${HOST}/about`), entry(`https://${HOST}/es`, "2026-10-04"), entry(`https://${HOST}/guide`, "2026-06-16")].join("\n"));

interface Call { method: string; url: string; body?: string }

function harness(options: { argv?: string[]; context?: string; files?: Record<string, string>; live?: string | null; postStatus?: number; maxBatch?: number }) {
  const reads: string[] = [];
  const calls: Call[] = [];
  const logs: string[] = [];
  const cwd = "/virtual";
  const files: Record<string, string> = { [path.resolve(cwd, "dist", "sitemap.xml")]: BUILT, ...(options.files ?? {}) };
  const readFile = async (file: string): Promise<string> => {
    reads.push(file);
    if (file in files) return files[file];
    throw new Error("ENOENT");
  };
  const fetchImpl = async (url: string, init?: Record<string, unknown>): Promise<FetchLikeResponse> => {
    const method = (init?.method as string) || "GET";
    calls.push({ method, url, body: init?.body as string | undefined });
    if (method === "GET") {
      if (options.live === null) throw new Error("offline");
      return { ok: true, status: 200, text: async () => options.live ?? LIVE };
    }
    return { ok: true, status: options.postStatus ?? 200, text: async () => "" };
  };
  const run = () =>
    runIndexNow({
      argv: options.argv ?? [],
      env: { CONTEXT: options.context },
      cwd,
      readFile,
      fetchImpl,
      log: (line) => logs.push(line),
      host: HOST,
      key: KEY,
      maxBatch: options.maxBatch,
    });
  return { run, reads, calls, logs, cwd };
}

describe("runIndexNow against a simulated network", () => {
  const hadTimeout = typeof AbortSignal.timeout === "function";

  beforeEach(() => {
    // If the code ever used the global fetch instead of the injected one, the test fails here
    // instead of making a real request.
    vi.stubGlobal("fetch", () => { throw new Error("real network blocked in tests"); });
    // jsdom's AbortSignal has no static timeout(); Node (where the script really runs) does. The
    // child-process tests below exercise the real one. Here a plain, never-aborted signal is enough.
    if (!hadTimeout) {
      Object.defineProperty(AbortSignal, "timeout", { value: () => new AbortController().signal, configurable: true, writable: true });
    }
  });
  afterEach(() => {
    vi.unstubAllGlobals();
    if (!hadTimeout) Reflect.deleteProperty(AbortSignal, "timeout");
  });

  it("parses the options, treating every spelling of --baseline as given", () => {
    expect(parseCliArgs([])).toEqual({ dryRun: false, baselineGiven: false, baselineFile: "" });
    expect(parseCliArgs(["--dry-run"])).toEqual({ dryRun: true, baselineGiven: false, baselineFile: "" });
    expect(parseCliArgs(["--baseline=a.xml"])).toEqual({ dryRun: false, baselineGiven: true, baselineFile: "a.xml" });
    expect(parseCliArgs(["--baseline"])).toEqual({ dryRun: false, baselineGiven: true, baselineFile: "" });
    expect(parseCliArgs(["--baseline=", "--dry-run"])).toEqual({ dryRun: true, baselineGiven: true, baselineFile: "" });
  });

  it.each(["production", "deploy-preview", "branch-deploy", undefined])(
    "refuses --baseline without --dry-run with no read, GET or POST (CONTEXT=%s)",
    async (context) => {
      const h = harness({ argv: ["--baseline=saved.xml"], context, files: { "/virtual/saved.xml": LIVE } });
      const result = await h.run();
      expect(result.outcome).toBe("refused-baseline-without-dry-run");
      expect(h.reads).toEqual([]);
      expect(h.calls).toEqual([]);
      expect(h.logs.join("\n")).toMatch(/refused — --baseline is a diagnostic option and only works together with --dry-run/);
    },
  );

  it("an empty or bare --baseline without --dry-run is refused like any other, never falling through to the normal flow", async () => {
    for (const context of ["production", undefined]) {
      for (const argv of [["--baseline="], ["--baseline"]]) {
        const h = harness({ argv, context });
        const result = await h.run();
        expect(result.outcome).toBe("refused-baseline-without-dry-run");
        expect(h.reads).toEqual([]);
        expect(h.calls).toEqual([]);
      }
    }
  });

  it("an empty or bare --baseline in a dry run is refused too, without falling back to the live sitemap", async () => {
    for (const argv of [["--dry-run", "--baseline"], ["--dry-run", "--baseline="]]) {
      const h = harness({ argv, context: "production" });
      const result = await h.run();
      expect(result.outcome).toBe("refused-baseline-without-path");
      expect(h.reads).toEqual([]);
      expect(h.calls).toEqual([]);
    }
  });

  it("dry run with a baseline file is fully offline, even with CONTEXT=production", async () => {
    const h = harness({ argv: ["--dry-run", "--baseline=saved.xml"], context: "production", files: { "/virtual/saved.xml": LIVE } });
    const result = await h.run();
    expect(result.outcome).toBe("dry-run");
    expect(result.changed).toEqual([{ url: `https://${HOST}/es`, reason: "lastmod", before: "", after: "2026-10-04" }]);
    expect(h.calls).toEqual([]);
    expect(h.reads).toEqual([path.resolve("/virtual", "dist", "sitemap.xml"), path.resolve("/virtual", "saved.xml")]);
    expect(h.logs.join("\n")).toContain("DRY RUN — no request sent. 1 URL(s) would be submitted");
  });

  it("dry run without a baseline file reads the live sitemap with one GET and never POSTs", async () => {
    for (const context of ["production", undefined]) {
      const h = harness({ argv: ["--dry-run"], context });
      const result = await h.run();
      expect(result.outcome).toBe("dry-run");
      expect(h.calls.map((c) => `${c.method} ${c.url}`)).toEqual([`GET https://${HOST}/sitemap.xml`]);
    }
  });

  it("normal production build: one GET, one POST with the changed URLs, host and key", async () => {
    const h = harness({ context: "production" });
    const result = await h.run();
    expect(result).toMatchObject({ outcome: "submitted", status: 200 });
    expect(h.calls.map((c) => `${c.method} ${c.url}`)).toEqual([`GET https://${HOST}/sitemap.xml`, "POST https://api.indexnow.org/indexnow"]);
    expect(JSON.parse(h.calls[1].body as string)).toEqual({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: [`https://${HOST}/es`] });
    expect(h.logs).toContain("[indexnow] parsed 4 built URL(s), 4 baseline URL(s)");
    expect(h.logs).toContain("[indexnow] submitted 1 URL(s) → HTTP 200");
  });

  it("production with identical sitemaps: GET only, nothing submitted", async () => {
    const h = harness({ context: "production", live: BUILT });
    expect((await h.run()).outcome).toBe("nothing-to-submit");
    expect(h.calls.map((c) => c.method)).toEqual(["GET"]);
  });

  it("keeps the 50-URL cap in the real flow: 51 changed URLs are not sent", async () => {
    const many = wrap(Array.from({ length: 51 }, (_, i) => entry(`https://${HOST}/p${i}`, "2026-10-04")).join("\n"));
    const h = harness({ context: "production", files: { [path.resolve("/virtual", "dist", "sitemap.xml")]: many }, live: wrap("") });
    expect((await h.run()).outcome).toBe("over-cap");
    expect(h.calls.map((c) => c.method)).toEqual(["GET"]);
    expect(h.logs.join("\n")).toContain("51 changed URLs exceeds cap (50)");
  });

  it("never submits a URL from another host", async () => {
    const mixed = wrap([entry("https://evil.example/x", "2026-10-04"), entry(`https://${HOST}/ok`, "2026-10-04")].join("\n"));
    const h = harness({ context: "production", files: { [path.resolve("/virtual", "dist", "sitemap.xml")]: mixed }, live: wrap("") });
    await h.run();
    expect(JSON.parse(h.calls[1].body as string).urlList).toEqual([`https://${HOST}/ok`]);
  });

  it.each(["deploy-preview", "branch-deploy", "dev", undefined])("outside production with no options: skip, no read and no request (CONTEXT=%s)", async (context) => {
    const h = harness({ context });
    expect((await h.run()).outcome).toBe("skipped-not-production");
    expect(h.reads).toEqual([]);
    expect(h.calls).toEqual([]);
  });

  it("does not throw when the live sitemap cannot be fetched or the built one is missing", async () => {
    const offline = harness({ context: "production", live: null });
    expect((await offline.run()).outcome).toBe("no-baseline");
    expect(offline.calls.map((c) => c.method)).toEqual(["GET"]);

    const noDist = harness({ context: "production", files: { [path.resolve("/virtual", "dist", "sitemap.xml")]: "" } });
    expect((await noDist.run()).outcome).toBe("no-dist-sitemap");
    expect(noDist.calls).toEqual([]);
  });
});

describe("real entrypoint scripts/indexnow-ping.mjs in a child process, network blocked", () => {
  const repo = process.cwd();
  const script = path.resolve(repo, "scripts", "indexnow-ping.mjs");
  const blocker = pathToFileURL(path.resolve(repo, "src", "test", "fixtures", "indexnow-block-network.mjs")).href;
  let dir = "";
  let networkLog = "";

  beforeEach(() => {
    dir = mkdtempSync(path.join(tmpdir(), "indexnow-entry-"));
    mkdirSync(path.join(dir, "dist"));
    writeFileSync(path.join(dir, "dist", "sitemap.xml"), BUILT);
    writeFileSync(path.join(dir, "saved.xml"), LIVE);
    networkLog = path.join(dir, "network.log");
  });
  afterEach(() => rmSync(dir, { recursive: true, force: true }));

  const runScript = (args: string[], context?: string) => {
    const env: Record<string, string> = { PATH: process.env.PATH ?? "", INDEXNOW_TEST_NETWORK_LOG: networkLog };
    if (context) env.CONTEXT = context;
    const r = spawnSync(process.execPath, ["--import", blocker, script, ...args], { cwd: dir, env, encoding: "utf8", timeout: 20000 });
    return { status: r.status, out: `${r.stdout}${r.stderr}`, network: existsSync(networkLog) ? readFileSync(networkLog, "utf8").trim().split("\n").filter(Boolean) : [] };
  };

  it("the blocker really replaces fetch: a production run attempts the GET, is blocked, does not POST and exits 0", () => {
    const r = runScript([], "production");
    expect(r.status).toBe(0);
    expect(r.network).toEqual([`GET https://${HOST}/sitemap.xml`]);
    expect(r.out).toContain("skip — could not read the baseline sitemap");
  });

  it("--baseline without --dry-run in production: clear warning, exit 0, no GET and no POST", () => {
    const r = runScript(["--baseline=saved.xml"], "production");
    expect(r.status).toBe(0);
    expect(r.out).toContain("refused — --baseline is a diagnostic option and only works together with --dry-run");
    expect(r.network).toEqual([]);
  });

  it("--baseline= with an empty value in production is refused too: no GET, no POST", () => {
    const r = runScript(["--baseline="], "production");
    expect(r.status).toBe(0);
    expect(r.out).toContain("refused — --baseline is a diagnostic option and only works together with --dry-run");
    expect(r.network).toEqual([]);
  });

  it("--dry-run --baseline in production: lists the URL, sends nothing", () => {
    const r = runScript(["--dry-run", "--baseline=saved.xml"], "production");
    expect(r.status).toBe(0);
    expect(r.out).toContain("DRY RUN — no request sent. 1 URL(s) would be submitted");
    expect(r.out).toContain(`https://${HOST}/es  (lastmod: no lastmod → 2026-10-04)`);
    expect(r.network).toEqual([]);
  });

  it("no CONTEXT and no options: the normal local build skips without any request", () => {
    const r = runScript([]);
    expect(r.status).toBe(0);
    expect(r.out).toContain("skip — not a production deploy (CONTEXT=none)");
    expect(r.network).toEqual([]);
  });
});
