# Post-Deploy Test Checklist — SEO Cannibalization Fix
**Branch:** `seo-fix-cannibalization`
**Test after:** Netlify deploy is live

---

## 1. Trailing-Slash 301 Redirects

Test every trailing-slash URL returns HTTP 301 and redirects to the correct canonical.

```bash
# Use curl to verify — should show "301 Moved Permanently" + Location header
curl -sI https://capitalcleancare.com/locations/silver-spring-md/house-cleaning/ \
  | grep -E "HTTP|Location"

curl -sI https://capitalcleancare.com/locations/rockville-md/house-cleaning/ \
  | grep -E "HTTP|Location"

curl -sI https://capitalcleancare.com/locations/bethesda-md/deep-cleaning/ \
  | grep -E "HTTP|Location"

curl -sI https://capitalcleancare.com/maryland/ \
  | grep -E "HTTP|Location"

curl -sI https://capitalcleancare.com/services/deep-cleaning/ \
  | grep -E "HTTP|Location"
```

**Expected response for each:**
```
HTTP/2 301
location: https://capitalcleancare.com/locations/[city]/[service]
```

---

## 2. Canonical Tags — Non-www Verification

Confirm canonical tags on key pages use `https://capitalcleancare.com` (no www).

```bash
curl -s https://capitalcleancare.com/locations/bethesda-md/house-cleaning \
  | grep -i "canonical"

curl -s https://capitalcleancare.com/locations/silver-spring-md/house-cleaning \
  | grep -i "canonical"

curl -s https://capitalcleancare.com/locations/rockville-md/house-cleaning \
  | grep -i "canonical"
```

**Expected output:** `<link rel="canonical" href="https://capitalcleancare.com/locations/[city]/[service]"/>`
**Must NOT contain:** `www.capitalcleancare.com`

---

## 3. Hreflang Tags — Non-www Verification

```bash
curl -s https://capitalcleancare.com/locations/silver-spring-md/house-cleaning \
  | grep -i "hreflang"
```

**Expected:** All `href=` values use `https://capitalcleancare.com` (no www).

---

## 4. Maryland Hub Page

```bash
curl -s https://capitalcleancare.com/maryland | grep -E "<title>|<h1|canonical"
```

**Expected:**
- `<title>`: contains "Eco-Friendly House Cleaning Maryland"
- `<h1>`: contains "Eco-Friendly House Cleaning Across Maryland"
- `canonical`: `https://capitalcleancare.com/maryland`

**Also check in browser:** The `/maryland` page body should NOT mention "Bethesda colonial" or "Rockville apartment" in its intro paragraph.

---

## 5. LastUpdated on City/Service Pages

Open in browser (or curl + grep):
```bash
curl -s https://capitalcleancare.com/locations/bethesda-md/house-cleaning \
  | grep "Updated"

curl -s https://capitalcleancare.com/locations/rockville-md/deep-cleaning \
  | grep "Updated"
```

**Expected:** `<time datetime="2026-05-20">Updated May 2026</time>` appears below the H1.

---

## 6. No-Slash URLs Still Work (200 Rewrites Intact)

Confirm the 200 rewrites for canonical URLs weren't broken by the new 301 rules.

```bash
curl -sI https://capitalcleancare.com/locations/bethesda-md/house-cleaning \
  | grep "HTTP"
# Expected: HTTP/2 200

curl -sI https://capitalcleancare.com/locations/rockville-md/house-cleaning \
  | grep "HTTP"
# Expected: HTTP/2 200

curl -sI https://capitalcleancare.com/maryland \
  | grep "HTTP"
# Expected: HTTP/2 200
```

---

## 7. No Infinite Redirect Loops

```bash
curl -sIL https://capitalcleancare.com/maryland/ | grep -E "HTTP|Location"
# Should end at 200, not loop
```

---

## 8. Eco-Friendly Cleaning Redirect Chain (Issue 3)

```bash
curl -sIL https://capitalcleancare.com/locations/chevy-chase-md/eco-friendly-cleaning \
  | grep -E "HTTP|Location"
# Expected: 301 → /services/eco-friendly-cleaning → 200
```

---

## 9. Sitemap Spot-Check

```bash
curl -s https://capitalcleancare.com/sitemap.xml | grep "silver-spring\|trailing\|house-cleaning/"
# Expected: NO trailing-slash URLs in sitemap
# Expected: silver-spring URLs present without trailing slash
```

---

## 10. Google Search Console (Manual — 7–14 days post-deploy)

- [ ] GSC > Coverage > "Excluded" — check if trailing-slash URLs appear as "Redirect" (not crawl errors)
- [ ] GSC > Enhancements > "hreflang" — check for errors; should show zero after www fix
- [ ] GSC > Performance — filter `/maryland` and check which queries it appears for; city-specific queries should drop from impressions
- [ ] Submit sitemap.xml for re-crawl after deploy

---

## URLs to Monitor in Semrush (30-day follow-up)

| Keyword | Expected Winner | Check Date |
|---|---|---|
| home cleaning bethesda | `/locations/bethesda-md/house-cleaning` | 2026-06-20 |
| cleaning services silver spring md | `/locations/silver-spring-md/house-cleaning` | 2026-06-20 |
| capital cleaning services | `/` (homepage) | 2026-06-20 |
| cleaning services rockville md | `/locations/rockville-md/house-cleaning` | 2026-06-20 |
| green cleaning services rockville | `/locations/rockville-md/house-cleaning` | 2026-06-20 |
