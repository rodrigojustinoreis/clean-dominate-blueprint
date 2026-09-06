# Phase 2 — Live organic data (2026-09-06)

## Scope and sources

- Google Search Console, Web search, domain property `capitalcleancare.com`.
- Complete-week comparison: 2026-08-28 through 2026-09-03 vs. 2026-08-21 through 2026-08-27.
- Complete-month comparison: 2026-08-01 through 2026-08-31 vs. 2026-07-01 through 2026-07-31.
- Semrush Organic Traffic Insights for 2026-08-28 through 2026-09-03.
- Google Ads is explicitly out of scope.

## Executive diagnosis

The evidence does **not** show a sitewide organic collapse. August improved materially over July, and the latest complete week gained clicks and average position. The perceived drop is best explained by day-to-day volatility in a small click base, a modest weekly impression contraction, and concentration of traffic in a few URLs. The correct Phase 2 response is selective consolidation/CTR work, not broad rewrites or more programmatic location pages.

## GSC headline metrics

| Period | Clicks | Impressions | CTR | Avg. position |
|---|---:|---:|---:|---:|
| Aug 28–Sep 3 | 46 | 8,615 | 0.5% | 22.1 |
| Aug 21–27 | 34 | 9,045 | 0.4% | 25.7 |
| Change | **+35.3%** | **-4.8%** | +0.1 pp | **improved 3.6 positions** |
| August 2026 | 178 | 43,454 | 0.4% | 24.8 |
| July 2026 | 145 | 34,433 | 0.4% | 27.6 |
| Change | **+22.8%** | **+26.2%** | flat | **improved 2.8 positions** |

## Semrush Organic Traffic Insights, Aug 28–Sep 3

| Metric | Value | Change shown by Semrush |
|---|---:|---:|
| Users | 49 | +48% |
| New users | 44 | +47% |
| Sessions | 78 | +1% |
| Engaged sessions | 48 | -2% |
| Avg. engagement time | 1:59 | +38% |
| Engagement rate | 61.54% | -3% |
| Conversions | 12 | +140% |

This is a separate measurement system from GSC. It corroborates that sessions were essentially flat and conversions increased; it does not support a traffic-collapse narrative.

## Weekly page movements visible at the top of GSC

| URL | Clicks current / prior | Impressions current / prior | Interpretation |
|---|---:|---:|---|
| `/` (www historical row) | 10 / 5 | 277 / 242 | Click and visibility gain; `www` now 301s to non-www. |
| `/` (non-www) | 7 / 7 | 111 / 200 | Clicks stable despite fewer impressions. Treat the two host rows as historical GSC reporting, not two current live pages. |
| `/resources/house-cleaning-cost-arlington-va` | 4 / 1 | 429 / 257 | Strong gain; protect. |
| `/resources/house-cleaning-cost-alexandria-va` | 4 / 1 | 282 / 575 | Clicks gained despite impression contraction; do not rewrite broadly. |
| `/services/airbnb-cleaning` | 3 / 0 | 658 / 670 | Stable impressions, new clicks; CTR opportunity. |
| `/resources/house-cleaning-prices-maryland-2026` | 2 / 3 | 602 / 265 | Visibility surged but clicks did not; high-priority CTR/query-intent review. |
| `/locations/arlington-va/deep-cleaning` | 2 / 0 | 329 / 239 | Gain; protect and strengthen internal links. |
| `/deep-cleaning-germantown-md` | 2 / 1 | 186 / 338 | Ranking improved but visibility contracted; inspect overlap with Germantown location/service URLs. |
| `/locations/bethesda-md/deep-cleaning` | 1 / 0 | 378 / 133 | Visibility/ranking gain; protect. |
| `/services/office-cleaning` | 1 / 0 | 157 / 411 | Ranking improved but impressions contracted materially; query-to-page and demand review needed. |

## August page winners

- `/resources/how-much-does-deep-cleaning-cost`: 29 vs. 6 clicks; 1,406 vs. 408 impressions.
- Homepage `www` historical row: 29 vs. 18 clicks.
- Homepage non-www: 26 vs. 20 clicks.
- `/resources/house-cleaning-cost-alexandria-va`: 11 vs. 3 clicks; 2,090 vs. 628 impressions.
- `/resources/house-cleaning-cost-arlington-va`: 9 vs. 3 clicks; 617 vs. 74 impressions.
- `/es`: 7 vs. 4 clicks; 650 vs. 192 impressions.
- `/resources/house-cleaning-cost-rockville-md`: 6 vs. 0 clicks; 690 vs. 98 impressions.

## Query signals from the weekly comparison

- Branded query `capital clean care`: 7 clicks in both weeks; 26 vs. 33 impressions. Brand demand was stable.
- New converting-intent signals appeared for `deep cleaning services near me`, `post renovation cleaning services`, `hepa vacuum cleaning service`, and `professional move out cleaning services`.
- Visibility expanded for broad and local commercial terms such as `deep cleaning arlington`, `cleaning`, `house cleaning`, and `facility cleaning services`, but most remained at zero clicks.
- Some previous-week impressions disappeared for thin/out-of-footprint query sets involving Chantilly, Lorton, Veterans Hospital DC, and other locations without a clear supported landing-page strategy. Do not create pages for these terms solely to recover impressions.

## High-confidence Phase 2 actions for Claude Code

1. Build a query-to-canonical-page matrix before editing. Focus on service + city commercial intent and price-guide intent.
2. Protect current winners. No wholesale title, H1, URL, or copy rewrites on Arlington/Alexandria cost guides, Bethesda deep cleaning, or the general deep-cleaning cost guide.
3. Audit and fix true intent overlap only where multiple indexable URLs compete, especially:
   - canonical vs. trailing-slash variants;
   - `/faq` vs. `/resources/faq`;
   - old flat city-service URLs vs. `/locations/{city}/{service}`;
   - `/blog/...` vs. `/resources/...` duplicates for cost and guide content.
4. For `/resources/house-cleaning-prices-maryland-2026`, improve the search snippet and opening answer only if current query evidence supports the wording. Preserve the page's successful structure and URL.
5. For `/services/office-cleaning`, first determine whether the weekly impression loss is query-demand/location mix or cannibalization. Do not rewrite without that result.
6. Strengthen internal links from relevant hubs and successful cost guides to one canonical commercial page per intent. Avoid exact-match overuse.
7. No new programmatic location pages, mass content refresh, deletion, or redirect without a URL-level evidence table.
8. Validate build, crawlability, canonical tags, sitemap membership, redirects, structured data, and the existing 23-URL drift gate. Produce a preview and report; do not merge or deploy until reviewed.

## Success criteria

- One canonical indexable URL per mapped commercial intent.
- No regression on the current GSC winners.
- Fewer duplicate/trailing-slash URL signals.
- Improved CTR on high-impression, low-click pages without adding unsupported claims.
- All checks pass and production remains untouched until approval.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
