# Design Review: /resources/real-deep-cleaning-project-bethesda-home

Reviewed against: existing blog-post patterns (DeepVsRegularCleaning.tsx, AgingInPlaceMontgomeryCounty.tsx) + DESIGN.md (Stripe-craft reference, brand blue/teal)
Philosophy: site blog convention — clean editorial, accent-led, mobile-first
Date: 2026-07-23

## Screenshots Captured

| Screenshot | Breakpoint | Description |
| --- | --- | --- |
| `screenshots/review-post-desktop-1280.png` | Desktop (1280×800, full page) | Full article, popup disarmed |
| `screenshots/review-post-tablet-768.png` | Tablet (768×1024, full page) | Full article |
| `screenshots/review-post-mobile-375.png` | Mobile (375×812, full page) | Full article |
| `screenshots/mobile-{hero,toc,callout,table,timeline,fieldnote,cta,faq-accordion}.png` | Mobile 375 | Element crops |
| `screenshots/mobile-{timeline,table}-fixed.png` | Mobile 375 | After fixes |

> Captured from the local prerendered build (`dist/` served on :4173) with Playwright (seo skill venv). ExitIntentPopup disarmed via sessionStorage flag for clean captures.

## Summary

The page matches the site's blog conventions closely (breadcrumbs bar, badge/H1/byline hero structure, FadeInSection rhythm, BlogInlineCTA, FAQAccordion, RelatedPosts). Two real defects found and fixed; everything else passes.

## Must Fix — FIXED

1. **Step-timeline circles misaligned and edge-cramped (mobile)**: circles used negative offset (`-left-[46px]`) past the `ol` border — the vertical line ran beside, not through, the circles, and on 375px they sat ~2px from the viewport edge. _Fix applied: non-negative layout — line at `left-4`, circles `left-0 w-8`, content `pl-12`; line now passes through circle centers at every breakpoint._ See `mobile-timeline-fixed.png`.

## Should Fix — FIXED

1. **3-column table hides its payoff column on mobile with no affordance**: "What we did" required a horizontal swipe nothing signaled. _Fix applied: mobile-only hint "Swipe to see the full table →" (`sm:hidden`, aria-hidden) above the scroll container._ See `mobile-table-fixed.png`.

## Could Improve (not applied — site-wide patterns, out of scope)

1. ExitIntentPopup fires over the article on every entry session — global component, affects all posts equally.
2. ScrollReveal hides content after hydration until intersection; prerendered HTML ships fully visible (verified: zero `opacity-0` in dist HTML), so no SEO exposure — purely a capture/JS consideration.

## What Works Well

- Text-only hero holds up: badge → 3-line H1 → subtitle → byline → 44px+ CTA, correct hierarchy on 375px.
- TOC, callout, field note, inline CTA, and FAQ accordion all read as one system (accent tokens, rounded-2xl, border-border) — consistent with the rest of the blog.
- No horizontal page overflow at 375px (measured 375/375). Body text ≥16px on mobile (text-lg = 18px).
- Heading order clean: 1 H1, H2 sections, component h3s only inside the CTA card.
