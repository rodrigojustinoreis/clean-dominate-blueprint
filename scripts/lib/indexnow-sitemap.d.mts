// Types for indexnow-sitemap.mjs so the vitest suite under src/ can import it without new tsc errors.
export declare const MAX_BATCH: number;
export declare function xmlUnescape(value: string): string;
export declare function parseSitemap(xml: unknown): Map<string, string>;
export interface ChangedUrl {
  url: string;
  reason: "new" | "lastmod";
  before: string | null;
  after: string;
}
export declare function selectChanged(
  nextXml: string,
  prevXml: string,
  options?: { host?: string },
): { changed: ChangedUrl[]; nextCount: number; prevCount: number };
export declare function decideSubmission(changed: unknown[], maxBatch?: number): "none" | "over-cap" | "submit";
export declare function maySend(input: { context: string | undefined; dryRun: boolean }): boolean;
export declare function parseCliArgs(argv?: string[]): { dryRun: boolean; baselineGiven: boolean; baselineFile: string };

export type IndexNowOutcome =
  | "refused-baseline-without-dry-run"
  | "refused-baseline-without-path"
  | "skipped-not-production"
  | "no-dist-sitemap"
  | "no-baseline"
  | "empty-built-sitemap"
  | "nothing-to-submit"
  | "over-cap"
  | "dry-run"
  | "submitted";

export interface FetchLikeResponse {
  ok: boolean;
  status: number;
  text(): Promise<string>;
}

export declare function runIndexNow(deps: {
  argv?: string[];
  env?: Record<string, string | undefined>;
  cwd: string;
  readFile: (file: string, encoding: "utf8") => Promise<string>;
  fetchImpl: (url: string, init?: Record<string, unknown>) => Promise<FetchLikeResponse>;
  log?: (line: string) => void;
  host: string;
  key: string;
  maxBatch?: number;
}): Promise<{ outcome: IndexNowOutcome; changed?: ChangedUrl[]; status?: number }>;
