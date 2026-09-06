# Claude Code execution prompt — Phase 2 organic recovery

Continue the Capital Clean Care SEO project with Phase 2. Execute the work; do not merely provide recommendations.

## Evidence to read first

1. `/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-release/capitalcleancare.com-audit/PHASE-2-LIVE-ORGANIC-DATA-2026-09-06.md`
2. The Phase 1 post-deploy report and all existing audit/strategy documents in the same directory.
3. Current `main` at `ad30344`. Phase 1 production code is at `0204837` and is already deployed/validated.

The live data corrects the working diagnosis: August did not collapse. August vs July gained 22.8% clicks and 26.2% impressions. Aug 28–Sep 3 vs Aug 21–27 gained 35.3% clicks, lost 4.8% impressions, and improved average position from 25.7 to 22.1. Semrush shows sessions +1% and conversions +140%. Treat volatility, concentration, CTR, and URL overlap as the actual problem. Google Ads is out of scope.

## Isolation and safety

- Do not touch the dirty primary checkout `/Users/rodrigoreis/TESTE BOSTA`, which contains uncommitted visual work on `preview/home-design-batch-1`.
- Create a new isolated worktree from current `main` and branch it as `seo/phase-2-organic-recovery-2026-09-06`.
- Suggested path: `/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-phase2`.
- Never discard, reset, overwrite, or incorporate the primary checkout's visual changes.
- Production must remain untouched. Do not push, merge, or deploy in this phase.

## Required workflow

1. Audit the current repository and produce a query-to-canonical-page matrix for the commercial clusters visible in the live-data report.
2. Identify true cannibalization using hard technical/content evidence, especially:
   - trailing-slash and no-slash variants;
   - `/faq` and `/resources/faq`;
   - legacy flat city/service paths vs `/locations/{city}/{service}`;
   - `/blog/...` and `/resources/...` duplicates for the same cost/guide intent;
   - Germantown, Bethesda, Silver Spring, Arlington, Alexandria, office-cleaning, Airbnb-cleaning, and pricing/deep-cleaning-cost clusters.
3. Classify each pair as KEEP, CONSOLIDATE, REDIRECT, CANONICALIZE, NOINDEX, or DISTINCT INTENT. Include evidence and risk. Do not infer cannibalization merely because two pages share words.
4. Implement only the 3–5 highest-confidence, lowest-risk corrections supported by the evidence. Favor deterministic URL normalization, canonical consistency, surgical internal linking, and narrowly scoped snippet/opening-answer improvements.
5. Protect current winners. Do not broadly rewrite or change URLs/titles/H1s for:
   - `/resources/how-much-does-deep-cleaning-cost`
   - `/resources/house-cleaning-cost-alexandria-va`
   - `/resources/house-cleaning-cost-arlington-va`
   - `/resources/house-cleaning-cost-rockville-md`
   - `/locations/bethesda-md/deep-cleaning`
   unless a documented conflict makes a small correction unavoidable.
6. Do not create programmatic location pages, mass-refresh content, fabricate claims, delete URLs, or add redirects without a URL-level before/after table.
7. For `/resources/house-cleaning-prices-maryland-2026`, consider a surgical title/meta/opening-answer improvement only after inspecting the existing content and demonstrating intent alignment. Its impressions increased substantially, so avoid damaging momentum.
8. For `/services/office-cleaning`, diagnose demand/location mix vs cannibalization before editing. A weekly impression decline alone is not proof of a page defect.

## Verification

- Run the full build and existing tests/checks.
- Verify canonical, robots, sitemap, hreflang, schema, title, meta description, H1, internal links, redirect chains, and orphan status for every changed or affected URL.
- Run the existing 23-URL drift gate and compare with the post-Phase-1 baseline.
- Generate before/after inventories and an explicit rollback map.
- Produce a deploy preview if the repository workflow supports it, but do not publish.
- Commit only the Phase 2 branch/worktree changes with clear atomic commits.

## Deliverables

Create under `capitalcleancare.com-audit/` in the Phase 2 worktree:

- `PHASE-2-QUERY-PAGE-MATRIX-2026-09-06.md`
- `PHASE-2-CANNIBALIZATION-DECISIONS-2026-09-06.md`
- `PHASE-2-IMPLEMENTATION-REPORT-2026-09-06.md`
- before/after URL inventories and machine-readable validation outputs where useful.

At completion, report:

- worktree and branch;
- commits;
- exact files changed;
- exact URL decisions and why;
- test/build/drift results;
- preview URL if created;
- risks and rollback procedure;
- a clear GO/NO-GO recommendation for merge/deploy.

Do not stop at analysis. Continue through implementation and verification of the safe Phase 2 subset. Stop only before push/merge/deploy.
