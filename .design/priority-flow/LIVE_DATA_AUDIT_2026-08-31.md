# Priority SEO/GEO flow — live-data audit (2026-08-31)

Scope: six indexable commercial pages. Sources were accessed live in the in-app browser using the authenticated Google Search Console property and Semrush US database. Metrics below are observations, not ranking guarantees.

| Page | GSC clicks | Impressions | CTR | Avg. position | Semrush target |
|---|---:|---:|---:|---:|---|
| `/services/move-out-cleaning` | 0 | 36 | 0% | 2.9 | `move out cleaning`: 27.1K volume, KD 42, commercial |
| `/locations/potomac-md/move-out-cleaning` | 1 | 755 | 0.1% | 23.3 | Exact long-tail volume 0; local GSC demand is stronger evidence |
| `/services/eco-friendly-cleaning` | 4 | 668 | 0.6% | 29.4 | `eco friendly cleaning service`: 480, KD 56 |
| `/services/deep-cleaning` | 0 | 170 | 0% | 38.5 | `deep cleaning service`: 4.4K, KD 36 |
| `/locations/rockville-md/deep-cleaning` | 4 | 2,309 | 0.2% | 28.9 | Exact local long-tail volume 0; GSC shows 97 impressions for the target query |
| `/locations/arlington-va/deep-cleaning` | 2 | 1,108 | 0.2% | 35.3 | Exact local keyword: 20 monthly volume |
| `/locations/silver-spring-md/airbnb-cleaning` | 0 | 462 | 0% | 27.8 | `airbnb cleaning service`: 12.1K volume, KD 28, commercial |
| `/locations/ellicott-city-md/deep-cleaning` | 0 | 3 | 0% | 51.0 | `deep cleaning service`: 4.4K volume, KD 36, commercial |

## Query evidence and decisions

- Potomac Move Out: `move in cleaning potomac md` had 33 impressions at position 6.5; `move out cleaning potomac md` had 18 impressions at 5.6. The snippet and page now cover both transition directions, use a clear commercial title and avoid guaranteeing inspections or deposits.
- Eco-Friendly: `eco friendly cleaning dc metro area` had 53 impressions at 23.6 and `eco friendly cleaning washington dc` had 47 at 28.9. The page keeps regional relevance but replaces unverifiable blanket certification, toxicity and health claims with documented, label-directed product selection.
- Regional Deep: `deep cleaning washington dc` had 15 impressions at 55.5. The page now includes WebPage entity metadata and a more precise method statement while preserving the regional hub role.
- Rockville Deep: `deep cleaning rockville md` had 97 impressions at 26.4. Metadata was rewritten around the observed query, scope and quote intent; unsupported product/re-entry claims were removed.
- Arlington Deep: `deep cleaning arlington va` had 73 impressions at 26.9. The generic local page now has a unique answer-first Arlington section and a focused commercial title/description.
- Silver Spring Airbnb: the page appeared most often for `airbnb cleaning services` (39 impressions, position 20.6), `airbnb cleaning service` (29, position 18.3), `airbnb cleaners` (26, position 13.9) and `airbnb cleaning service near me` (23, position 22.1). The revised page leads with the commercial service term, adds an answer-first turnover definition and keeps Silver Spring operational details as the local differentiator.
- Ellicott City Deep: the exact page had 3 impressions over three months, including `deep cleaning services ellicot city` at position 38.0. Semrush returned no isolated metrics for the local long-tail, so the page uses the observed local query plus the validated commercial parent term. `deep cleaning service` showed 4.4K US monthly volume, KD 36, commercial intent; `deep cleaning services near me` showed 6.6K volume and KD 46. The page now leads with the local commercial service, answers what is included, and explicitly separates one-time deep cleaning from recurring maintenance and move services.

## Release audit gate

The final local Lighthouse run for Silver Spring Airbnb passed the release threshold: Performance 94, Accessibility 100, Best Practices 100 and SEO 100. LCP was 2.7 s, TBT 0 ms and CLS 0.018. The audit artifact is stored at `lighthouse-silver-spring-airbnb-gate.json`.

The confirmation Lighthouse run for Ellicott City Deep Cleaning passed the release threshold: Performance 94, Accessibility 100, Best Practices 100 and SEO 100. LCP was 2.6 s, FCP 2.3 s, TBT 0 ms and CLS 0.014. The release artifact is stored at `lighthouse-ellicott-city-deep-confirmation.json`.

## Cannibalization guardrails

- Regional service pages target the broad service category and the MD/DC/Northern Virginia market.
- City/service pages target one city and its operational details (access, housing type, neighborhoods and local quote intent).
- Cross-location promises were removed from city snippets.
- Canonicals remain self-referential; no new price-page variants were created.
- Local pages link into the regional hub and nearby service architecture without duplicating the same primary intent.

## Editorial and AI-citation standard

- Each priority page contains or receives an answer-first passage that can stand alone in search or an AI answer.
- Claims distinguish company-controlled scope from landlord, product-label and third-party decisions.
- Structured data describes the visible page and does not introduce claims absent from the page.
- Dates indicate review timing, not fabricated publication history.
