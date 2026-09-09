# Remoção da contagem "45 reviews" (texto visível, site inteiro) — 2026-09-09

**Status:** implementado e validado LOCALMENTE. Sem merge, push ou deploy. **Aguarda decisão de publicação.**
**Branch:** `codex/remove-review-count` (worktree `.worktrees/reviews-count`), base `origin/main` c7b38d3 (anterior à publicação da foto 66cef5b — rebase/ff trivial: nenhum arquivo em comum). Commit do código: **aed448d**.
**Preview local:** http://127.0.0.1:4201/ (`serve_dist.py` do dist desta worktree; ex.: /locations/rockville-md/move-out-cleaning, /reviews, /services/deep-cleaning, /es).

## Decisão aplicada (Rodrigo/Codex)
Site inteiro, só texto visível: manter a nota 5.0, tirar o número. Ficam inalterados: `reviewCount` do AggregateRating (SchemaMarkup / business-info), title e meta description de /reviews, a landing do Ads `/services/house-cleaning` (continua mostrando "45 Reviews" — intocável por regra) e comentários de código.

## Mudança: 75 substituições em 52 arquivos
- Compartilhados: HeroLocation chip "5.0 ★ · 45 reviews" → "5.0 ★ on Google" (77 páginas de localização); LocationSocialProof "average · 45 reviews on Google" → "average on Google", "Read our 45 reviews →" → "Read our Google reviews →", alt/aria-label "5.0 stars on Google" (983 páginas); Footer "5.0★ · Google Reviews" / "5.0★ · Reseñas en Google" (todas as páginas); QuoteForm "5.0 on Google"; QuoteFormES "5.0 estrellas en Google"; ExitIntentPopup "· Google reviews"; ContactReviews "5.0 ★ on Google →".
- Páginas de serviço (9): "· 45 Google reviews" → "· Google reviews"; tiles de estatística "45 Five-star reviews" → "24h Re-clean guarantee" (garantia já publicada no site; sem número novo) em ServicePage, Deep, Recurring, Maid, Airbnb e na página Reviews.
- Prosa/CTAs (guias, pricing, about, hub de cidades, FAQ, senior ×3, Bethesda project): "5.0 stars across 45 Google reviews" → "5.0 stars on Google" e variantes; Reviews.tsx: "from verified Google reviews", eyebrow "Verified Google Reviews", H2 "Five-Star Reviews on Google", "See all reviews on Google", "why our clients leave us 5 stars".
- Espanhol: "⭐ 5.0 en Google" (home ES, limpieza-de-casas, 8 áreas), Nosotros tile "5.0★ Calificación en Google" e "5★ en Google Maps (reseñas verificadas)", FAQ ES "reseñas verificadas en Google con calificación 5.0".

## Gates
- Build sem IndexNow ok; vitest 8/8; tsc 35 = 35 idêntico por arquivo; ESLint sem novos avisos.
- Comparação dist novo × dist do release c7b38d3: 1227/1227 páginas; texto visível de TODAS muda exatamente pelas substituições esperadas (0 divergências), alt/aria mudam como esperado em 984 páginas; title, meta, canonical, robots, H1, OG, hreflang, links, imagens e **JSON-LD idênticos em todas as páginas** (as FAQs alteradas não alimentam schema); sitemap idêntico (300). Única página que ainda mostra a contagem: `/services/house-cleaning` (Ads, por decisão).
- CDP local em 10 páginas (home, move-out Rockville, /reviews, deep, /es, Bethesda hub, contact, FAQ, pricing, /es/nosotros; desktop + mobile onde aplicável): 0 erros, 1 H1, overflow 0, nenhuma menção "45 … reviews" — produção (baseline) também 0 erros.
- Capturas: `capitalcleancare.com-audit/review-count-screenshots/` (13 arquivos). Saídas: `review-count-comparison-2026-09-09.txt`, `review-count-cdp-local-2026-09-09.txt`, `review-count-cdp-production-baseline-2026-09-09.txt`.

## Observações para a decisão de publicação
- Mudança visível em todas as ~1.227 páginas (rodapé) — não é cirúrgica em alcance, embora seja em conteúdo. O gate de drift ao vivo deve registrar warnings de texto/alt esperados nas 23 URLs.
- Pendentes de decisão separada (SEO): `reviewCount` no schema, title/meta de /reviews, landing do Ads.
