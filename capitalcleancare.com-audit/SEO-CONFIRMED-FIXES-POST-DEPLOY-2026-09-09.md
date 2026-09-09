# Correções confirmadas do diagnóstico SEO — PUBLICADO 2026-09-09

Relatório completo (implementação, gates, pendências): `capitalcleancare.com-audit/seo-diagnostic-2026-09-09/IMPLEMENTATION-RESULT.md` (pasta do diagnóstico no checkout raiz) e revisão independente do Codex na mesma pasta.

- Branch `codex/seo-confirmed-fixes` (9 commits de código + runner do gate), base 3804c06 → fast-forward de `main` para **1160733**; push 12:45:08 UTC; Netlify deploy **6aa154d8be2b6100081d8000** ready/publicado 12:49:17 UTC.
- Rollback: `netlify api restoreSiteDeploy 6aa0d193e06a5500083bb6df` (commit e583e88).
- Lotes: A (respostas do FAQ no HTML/DOM, painéis fechados `hidden`), B1 (contagens 19/46), B2 (seguro ES sem $1M/fianza individual), B3 (recurring Rockville sem absolutos), B4 (base dos percentuais), C (2 redirects maid-service com `force`), D1 (dimensões BlogPosting), D2 (route-map Germantown/Montgomery Village + alternate manual removido).
- Ao vivo × deploy anterior: 38/38 páginas PASS; Ads idêntica após normalizar hashes; sitemap idêntico (300; IndexNow sem envios); redirects 301 de um salto; hreflang idênticos/recíprocos; FAQ 19/4/4/8/7/7 no body; CDP 0 erros; foto vertical preservada.
- Drift 23/23 verificadas: 0 crítico / 5 warning (meta /faq; schema_modified em 4 artigos = dims BlogPosting) / 23 info (content_hash com hashes de assets). Baseline não regravada. Arquivos: `seo-confirmed-fixes-live-check-2026-09-09.txt`, `seo-confirmed-fixes-live-drift-2026-09-09.json`.
- Pendências (não alteradas): alegações de produtos/certificações, promessas residuais do FAQ ES, "$1M+" em páginas EN comerciais (`service-locations.ts`), "Security deposit approved", links via 301 (D3).
