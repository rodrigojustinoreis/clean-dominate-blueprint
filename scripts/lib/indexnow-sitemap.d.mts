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
