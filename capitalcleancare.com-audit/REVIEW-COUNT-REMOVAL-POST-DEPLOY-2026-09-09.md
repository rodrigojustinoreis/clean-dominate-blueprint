# Remoção da contagem "45 reviews" — PUBLICADO 2026-09-09

**Autorização:** Rodrigo ("voce esta autorizado a fazer todo o processo necessario…"), relayada pelo Codex. Escopo: texto visível do site inteiro, nota 5.0 mantida; exceções acordadas mantidas (AggregateRating `reviewCount`, title/meta de /reviews, landing do Ads e tracking).

## Release
- Base remota antes da integração: `origin/main` = 0ec7035 (produção 6aa0ca66 / 66cef5b, foto vertical do move-out). Nenhum deploy em andamento. O draft 6aa0cd5d (dist do branch antigo, base c7b38d3) NÃO foi promovido.
- Integração no worktree limpo `seo-release`: cherry-pick dos 3 commits do branch `codex/remove-review-count` sobre a main atual → 1753fc1 (código, 52 arquivos / 75 substituições), eb21bf3 e a95e78b (docs). Sem sobreposição de arquivos com a foto; `MoveOutCleaningPage.tsx` intacto.
- Ajuste necessário descoberto no gate: o selo do rodapé compartilhado ("5.0★ · 45 Google Reviews") também renderiza na landing do Ads. Para cumprir "Ads inalterada" sem editar `HouseCleaningPage.tsx`, o `Footer` mantém o texto anterior apenas na rota `/services/house-cleaning` (já ramificava por `pathname` para `/es`) → commit **e583e88**. Resultado: landing do Ads byte-idêntica à produção anterior após normalizar hashes.
- Gates na árvore final: build sem IndexNow ok; vitest 8/8; tsc 35 = 35 idêntico por arquivo; ESLint sem novos avisos; dist de release × build de produção 66cef5b: 1227 páginas, 1226 mudam exatamente pelas substituições esperadas (0 divergências), 1 inalterada (Ads), alt/aria como esperado em 984, **JSON-LD idêntico em todas**, sitemap idêntico (300), páginas com meta noindex 926 = 926 (nenhum noindex do preview); dist de release × dist validado do lote: diferem só o move-out (foto) e a landing do Ads (rodapé); foto vertical 3:4 confirmada no build local em desktop (420×560) e mobile (358×477); CDP local 10 páginas 0 erros.
- Push normal (sem force) `0ec7035 → e583e88` em **2026-09-09 03:25:03 UTC**. Netlify deploy **6aa0d193e06a5500083bb6df** ready, commit e583e88, publicado **03:29:00 UTC**.
- **Rollback:** `netlify api restoreSiteDeploy` para **6aa0ca66f2c4560008400706** (commit 66cef5b, foto vertical sem o lote de avaliações).

## Validação em capitalcleancare.com (× deploy anterior 6aa0ca66)
- 34 páginas (home, /reviews, 6 serviços, pricing, about, contact, faq, 8 hubs/serviços locais, 4 guias, /es, /es/nosotros, /es/contacto, /es/limpieza-de-casas, projeto Bethesda, senior MoCo, guia de gorjeta, move-out/deep/recurring Rockville): 200; title, meta, canonical, robots, H1, OG, hreflang, JSON-LD, links, imagens, formulários (3 forms / 18 campos, sem envio), tel idênticos; texto visível difere só pelas substituições esperadas; contagem 45 ausente; "5.0" presente; sem `X-Robots-Tag` em produção.
- Landing do Ads `/services/house-cleaning`: idêntica ao deploy anterior (hashes normalizados); continua com seus próprios "45 Reviews" e o selo do rodapé anterior.
- Foto do move-out em produção: desktop 420×560 (3/4), mobile 358×477, `matrix(0,1,-1,0,…)`, object-fit contain, foto inteira; 0 erros.
- Navegador (CDP) em 10 páginas: 0 erros/exceções, 1 H1, overflow 0, nenhuma menção "45 … reviews" fora da landing do Ads. Produção anterior também 0 erros.
- Gate de drift ao vivo (23 URLs, baseline IDs 215–237): **0 crítico / 0 warning / 23 info**. As mudanças de texto esperadas (chip, rodapé, prova social) apareceram só como info porque o gate acompanha elementos SEO (title/meta/canonical/robots/schema/links/imagens), que não mudaram. Baseline NÃO regravada.

## Pendências / não incluído
- Ainda mostram o número 45: landing do Ads (por regra), title e meta description de /reviews, `reviewCount` do schema (decisões separadas de SEO). Comentários de código mantidos.
- Branch `codex/remove-review-count` e worktree `.worktrees/reviews-count` preservados (superados pela main). Draft 6aa0cd5d permanece como deploy-preview noindex, sem uso.
- Sem indexação solicitada, sem mudanças em Ads/tracking/preços/alegações/contas.

Arquivos: `review-count-live-check-2026-09-09.txt`, `review-count-live-cdp-2026-09-09.txt`, `review-count-live-drift-2026-09-09.json`, `review-count-release-comparison-2026-09-09.txt`, `review-count-release-cdp-local-2026-09-09.txt`, capturas em `review-count-screenshots/release-local/` e `review-count-screenshots/production/`.
