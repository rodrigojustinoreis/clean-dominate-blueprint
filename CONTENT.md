# Content Pipeline — Cleaning Resource Center (`/resources`)

How articles are added to the site and how they get organized. The **organization layer**
(categories, index pages, hub, `CollectionPage` schema, sitemap) is fully automatic — you add
an article the normal way and it slots itself into the right category on the next build. You do
**not** edit any of the organization files to publish a new post.

---

## TL;DR — publishing a new article

1. Add the article (see [Two ways to add an article](#two-ways-to-add-an-article)).
2. Give it a **descriptive slug** and a valid **`category`** (that's what auto-classifies it).
3. `npm run build`. Done — it now appears on `/resources`, inside 1–2 category indexes, in the
   `CollectionPage` schema, and in `sitemap.xml`.

There is **no step where you touch the category system**. If a post matches no category rule it
falls back to **Cleaning Tips**, so a post is never orphaned.

---

## The data model

Every article is one entry in one of two arrays. The entry is the single source of truth for the
Resource Center (grid, categories, sitemap); the article body is separate.

| Array | File | Added by | Body lives in |
|-------|------|----------|---------------|
| `blogPosts` | `src/pages/Blog.tsx` | a human, by hand | `blogContent[slug]` map **or** a dedicated `src/pages/*.tsx` page + route |
| `autoBlogPosts` | `src/data/auto-blog-posts.ts` | the weekly generator (do not hand-edit) | inline `content` HTML string on the entry |

Both are merged, newest-first, into `allPosts` (exported from `Blog.tsx`). Everything in the
Resource Center reads `allPosts`.

### Required fields (both arrays)

| Field | Required | Notes |
|-------|----------|-------|
| `slug` | ✅ | kebab-case, unique. **Also the main classification signal** — see below. Page lives at `/resources/<slug>`. |
| `title` | ✅ | H1 / card title. |
| `excerpt` | ✅ | 1–2 sentences, used on cards + as meta description. |
| `date` | ✅ | `YYYY-MM-DD`. Drives newest-first ordering. |
| `readTime` | ✅ | e.g. `"6 min read"`. |
| `category` | ✅ | Display badge **and** a classification signal. See [valid values](#the-category-field). |
| `coverImage` | ⬜ (recommended) | `/images/blog/...` or absolute URL. Falls back to a team photo. |
| `canonical` | ⬜ | Only to point a thin/near-duplicate post at a stronger URL. |
| `content` | ✅ for `autoBlogPosts` | HTML string. Manual posts use `blogContent[slug]` or a dedicated page instead. |

---

## Two ways to add an article

### A) Automatic (weekly) — nothing to do

`scripts/generate-weekly-post.mjs` (run by `.github/workflows/weekly-blog-post.yml`) writes a new
entry into `src/data/auto-blog-posts.ts` with all required fields, including a `category`. On the
next build it is classified, indexed, schema'd, and added to the sitemap automatically.

### B) Manual — add one entry

1. Add an object to the `blogPosts` array in `src/pages/Blog.tsx` with the required fields above.
2. Provide the body **one** of two ways:
   - add `blogContent["your-slug"]` (the shared content map used by `src/pages/BlogPost.tsx`), **or**
   - build a dedicated `src/pages/YourPost.tsx` and register a `/resources/your-slug` route in
     **both** `src/AppRoutes.tsx` and `src/AppRoutesLazy.tsx` (keep the two in sync).
3. `npm run build`.

> The dynamic route `/resources/:slug` already renders any `blogPosts` / `autoBlogPosts` entry that
> uses the shared content map — so most manual posts need **no** route change. You only add a route
> for a fully custom page component.

---

## How categorization works (automatic)

Categories are assigned by a **rule**, not hand-curated per post, so future posts self-classify.
The logic lives in `src/data/resource-categories.ts` → `categoriesForPost({ slug, category })`.

- It reads the post's **slug keywords** and its **`category` field**.
- It returns **up to 2** category slugs (the 2 highest-priority matches).
- No match → **`cleaning-tips`** (fallback — nothing is ever orphaned).

### The 10 valid categories

Each has a prerendered, indexable index at `/resources/<slug>`.

| Category slug | Index URL | A post lands here when its slug/category… |
|---|---|---|
| `checklists` | `/resources/checklists` | contains `checklist` |
| `move-out-guides` | `/resources/move-out-guides` | contains `move-out`, `move-in`, `post-construction`, `post-renovation` |
| `deep-cleaning` | `/resources/deep-cleaning` | contains `deep-clean` |
| `recurring-cleaning` | `/resources/recurring-cleaning` | contains `recurring`, `how-often`, `between-cleaning`, `one-time-vs`, `cleaning-schedule` |
| `apartment-cleaning` | `/resources/apartment-cleaning` | contains `apartment`, `airbnb`, `rental` |
| `eco-friendly-cleaning` | `/resources/eco-friendly-cleaning` | contains `eco`, `pet-safe`, `pet-…`, `non-toxic`, `without-bleach`, `naturally`, `dander`, `hepa`, `mildew`, … **or** `category` is `Eco Living` / `Pet Health` |
| `local-guides` | `/resources/local-guides` | slug names a DMV city (`bethesda`, `rockville`, `arlington`, …) **or** `category` is `Local Guides` |
| `pricing-guides` | `/resources/pricing-guides` | contains `cost`, `price`, `hidden-fees`, `flat-rate`, `how-much`, `tip-house-cleaner`, `worth-it`, `costs-more` |
| `faq` | `/resources/faq` | is a decision/question post — `-vs-`, `what-is`, `how-long`, `questions-to-ask`, `red-flags`, `is-professional`, … |
| `cleaning-tips` | `/resources/cleaning-tips` | starts with `how-to`, or contains `tips`, `forgotten`, `office-cleaning`, … **— and the fallback** |

Priority order = the order above (most specific first). When a post matches 3+, the first 2 win.

### The `category` field

The `category` string on each entry is both the **badge** shown on cards and a **classification
signal**. Keep using the existing set (the weekly generator is limited to these):

`Cleaning Guides` · `Eco Living` · `Tips & Advice` · `Seasonal Guides` · `Airbnb & Rentals` ·
`Local Guides` · `Home Care Guides` · `Pet Health` · `Cleaning Tips`

### Steering a post into a specific category

You never assign categories directly — you **name the slug** for the category you want:

- Cost/pricing post → put `cost` or `price` in the slug (e.g. `move-out-cleaning-cost-frederick-md`).
- Checklist → include `checklist`.
- City guide → include the city name (also set `category: "Local Guides"`).
- Pet/eco → include `pet-safe`, `eco`, `dander`, etc. (or set `category: "Pet Health"` / `"Eco Living"`).

To verify before publishing, check `categoriesForPost()` against your slug (it's a pure function).

---

## What updates automatically on build

| Artifact | How |
|---|---|
| `/resources` hub (category grid + counts + latest) | reads `allPosts` + `RESOURCE_CATEGORIES` at render |
| The 10 category index pages | `src/pages/ResourceCategory.tsx` filters `allPosts` via `postsInCategory()` |
| Prerendering of the 10 category pages | `src/prerender.tsx` loops `RESOURCE_CATEGORIES` |
| `CollectionPage` + `BreadcrumbList` schema | emitted per page from the same data |
| `sitemap.xml` | `scripts/generate-sitemap.mjs` reads the built `dist/` (non-noindex pages) |

## Adding or renaming a **category** (rare — not per-article)

The 10 categories are stable. If the taxonomy itself must change:

1. Edit `RESOURCE_CATEGORIES` in `src/data/resource-categories.ts` (add/rename the entry: `slug`,
   `label`, `emoji`, `h1`, `intro` 100–150 words, `seoTitle`, `seoDescription`).
2. Add its match rule inside `categoriesForPost()`.
3. Routes, prerender, hub grid, nav, and sitemap all derive from `RESOURCE_CATEGORIES` — no other
   edits needed. (A brand-new slug is picked up by the `AppRoutes` / `AppRoutesLazy` / `prerender`
   loops automatically.)

> **Legacy note:** the old `/resources/topic/*` hubs (`blog-topics.ts`, `BlogTopic.tsx`) were
> consolidated into these 10 categories and 301-redirected in `netlify.toml`. Reversible: delete
> those 4 redirects and restore the topic routes in `prerender.tsx`.
