// Post-build: inline above-the-fold critical CSS into every prerendered HTML and
// defer the full stylesheet (preload + onload swap). Removes the render-blocking
// CSS round-trip → faster First Contentful Paint and LCP.
import Beasties from "beasties";
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "glob";
import path from "node:path";

const DIST = path.resolve(process.cwd(), "dist");

const beasties = new Beasties({
  path: DIST,             // base path to resolve <link href> against
  publicPath: "/",
  pruneSource: false,     // keep the full CSS file (loaded async as fallback)
  preload: "swap",        // <link rel="preload" ...> + onload swap to stylesheet
  inlineFonts: false,
  fonts: false,           // Google Fonts already handled non-blocking in index.html
  logLevel: "silent",
});

const files = await glob("**/*.html", { cwd: DIST, absolute: true });
let ok = 0;
for (const file of files) {
  try {
    const html = await readFile(file, "utf8");
    const out = await beasties.process(html);
    await writeFile(file, out, "utf8");
    ok++;
  } catch (e) {
    console.error(`[critical-css] skip ${path.relative(DIST, file)}: ${e.message}`);
  }
}
console.log(`[critical-css] inlined critical CSS into ${ok}/${files.length} HTML files`);
