# Phase 5 — Hardwood After Construction Blog — Post-Deploy (2026-09-07)

## Publicação

- Branch de origem: `seo/blog-hardwood-post-construction`
- Fast-forward de `origin/main`: `a9ba96e` → `2efcdf0`
- Push normal, sem force push
- Commit publicado: `2efcdf06198dd9bfb4eb6a49af1c8aa8e458c93b`
- Netlify production deploy: `6a9f4130a0214d00086d7bd8`
- Publicado em: `2026-09-07T23:00:37Z`
- URL: https://capitalcleancare.com/resources/how-to-clean-hardwood-floors-after-construction

## Verificação ao vivo

- HTTP 200; sem `X-Robots-Tag: noindex`.
- Robots meta: `index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1`.
- Canonical própria e exatamente um H1.
- Title: `How to Clean Hardwood Floors After Construction | Capital Clean Care`.
- Schemas válidos presentes: `BlogPosting`, `BreadcrumbList` e `VideoObject`.
- Foto principal, foto do passo 6, poster, MP4 e WebM: HTTP 200 e content-types corretos.
- Vídeo carregado, pausado e sem autoplay.
- Sitemap ao vivo: 300 URLs; nova URL presente uma vez.
- Página listada em `/resources`; links recíprocos nos dois guias planejados.

## Gates finais

- Build completo: ok (1.227 páginas prerenderizadas).
- Vitest: 8/8.
- TypeScript: 35 erros preexistentes = baseline; zero erro novo da página.
- Phase 5 checks: 24/24.
- Drift ao vivo contra baseline IDs 215–237: **0 critical / 0 warning / 23 info**.
- Páginas protegidas e landing do Google Ads: campos SEO críticos inalterados.

## Rollback

- Restaurar o deploy de produção anterior `6a9f059ea8464d00095b5fa1` na Netlify; ou reverter os commits da Fase 5 em ordem inversa.

## Próximo passo

- Inspecionar a nova URL no Google Search Console e solicitar indexação. A URL já está 200, indexável, autocanônica e presente no sitemap.
