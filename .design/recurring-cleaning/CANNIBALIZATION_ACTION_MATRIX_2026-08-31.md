# Recurring Cleaning Cannibalization — Action Matrix

Live sources: Google Search Console (90 days, updated 2026-08-31), Semrush US desktop (2026-08-30), production-page inspection, canonicals, robots directives, and internal links.

## Query ownership

| Intent | Owner URL |
|---|---|
| Regional recurring cleaning (MD/DC/VA) | `/services/recurring-cleaning` |
| Recurring cleaning in Bethesda | `/locations/bethesda-md/recurring-cleaning` |
| Recurring cleaning in North Bethesda | `/locations/north-bethesda-md/recurring-cleaning` |
| Recurring cleaning in Arlington | `/locations/arlington-va/recurring-cleaning` |
| General Bethesda cleaning-company discovery | `/locations/bethesda-md` |
| General Bethesda house cleaning | `/locations/bethesda-md/house-cleaning` |
| Provider-selection advice | `/resources/best-house-cleaning-service-bethesda-md` |
| One-time versus recurring comparison | `/resources/one-time-vs-recurring-cleaning` |

## URL decisions

| URL | Decision | Reason |
|---|---|---|
| `/resources/best-house-cleaning-service-bethesda-md` | Keep and retarget as informational guide | 37 impressions, position 15.7 overall; only 1 impression for the recurring Bethesda query. It is not a duplicate service page. |
| `/resources/house-cleaning-bethesda-md` | Keep existing 301 to `/locations/bethesda-md/house-cleaning` | Redirect and destination canonical are already correct. Semrush data is stale for the old URL. |
| `/locations/north-bethesda-md/recurring-cleaning` | Keep | Separate city/entity and self-referencing canonical. |
| `/locations/bethesda-md/recurring-cleaning` | Primary owner for Bethesda recurring intent | 1.35K impressions overall; 89 impressions at position 29.6 for the exact target query. |
| `/resources/one-time-vs-recurring-cleaning` | Keep | Informational comparison intent; regional service link remains the conversion path. |
| `/locations/bethesda-md` | Keep as city hub | 2 clicks and 2.5K impressions; broad multi-service intent. |
| `/services/recurring-cleaning` | Keep as regional recurring hub | 2.41K impressions and 22 generative-AI impressions; must not own Bethesda-specific intent. |
| `/locations/arlington-va/recurring-cleaning` | Keep | Separate city/entity and self-referencing canonical. |
| `/maryland` | Keep as state hub | Broad state navigation intent. |
| `/faq` | Keep | FAQ intent; links to the regional service owner. |
| `/locations/bethesda-md/house-cleaning` | Keep as general house-cleaning owner | 1 click and 1.82K impressions; now links with explicit anchor to the Bethesda recurring owner. |

## Changes applied locally

- Reduced Bethesda references on the regional recurring page.
- Changed the regional urgency/social-proof language to DMV-wide positioning.
- Prioritized the dedicated local recurring URLs from the regional hub.
- Strengthened the Bethesda house-cleaning page's anchor to `recurring cleaning in Bethesda, MD`.
- Strengthened the Bethesda recurring page title, description, and WebPage structured data.
- Added the Bethesda recurring owner URL to `llms.txt` for AI crawler/entity discovery.
- Preserved the existing 301 for the obsolete Bethesda resource URL.

No mass redirects, canonicals, or `noindex` directives were added because the remaining pages have distinct search intent and useful content.
