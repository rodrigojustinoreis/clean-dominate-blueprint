# Fase 3 — Lotes 1 e 2 — Relatório pós-deploy (2026-09-07)

## Publicação

| Item | Valor |
|---|---|
| Aprovação do cliente | 07/09/2026 ("ok aprovado"), após o relatório de implementação e o preview `6a9ec771` |
| Fluxo | worktree `.worktrees/seo-release` (`main`), `git fetch`, `origin/main == main == 08c730b` conferido, `git merge --ff-only seo/phase-3-lots-1-2`, gates, `git push origin main` (sem force) |
| `main` | `08c730b` → `a4b268a` (14 commits de código/docs; o commit de docs perdeu a tag `[skip netlify]` para o push disparar o build) |
| Deploy Netlify | `6a9ecc257a8f390008e3e95d` — production, `ready` 14:40:22 UTC, `published_deploy` confirmado via API |
| Checkout principal | intacto (`preview/home-design-batch-1`, arquivos da home não commitados) |

## Gates antes do push (build de release)

| Gate | Resultado |
|---|---|
| Build no worktree de release | ok — 1.226 páginas, sitemap 299, 138 lastmod; HTML idêntico ao build validado na branch (1.226/1.226, hashes normalizados) |
| `vitest run` | 8/8 |
| Checks de aceite (`phase3_checks.py`) | 24/24 |
| Drift local vs baseline 192–214 | 0 crítico / 13 warning (`schema_modified`, esperados) / 23 info |

## Validação ao vivo (`scripts/post_deploy_check_phase3.py`, 14:41 UTC)

**38/38.** Resumo:

| Grupo | Verificado |
|---|---|
| URLs antigas | `/house-cleaning-wheaton-md`, `/apartment-cleaning-wheaton-md` (era 404), `/move-out-cleaning-rockville-md`, `/deep-cleaning-germantown-md` → 301 em 1 salto para a página `/locations/…` (200, index); `/deep-cleaning-kensington-md` → 301 para o hub de Kensington (200, index) |
| Páginas promovidas | Wheaton house, Wheaton apartment, Rockville move-out: 200, `index`, canonical próprio, no sitemap (299 URLs, 200) |
| Kensington deep (twin) | continua `noindex` |
| Links | 8 hubs/estaduais amostrados (Rockville, Bethesda, Germantown, Wheaton, Kensington, Silver Spring, `/maryland`, `/virginia`): 0 links para páginas noindex |
| Links contextuais | `/services` → post-construction e move-out; guia de custo de deep cleaning → os dois; `/es/limpieza-de-casas` → 8 áreas |
| Schema | guia sem HowTo; post sem VideoObject e com autor `#founder`; home mantém VideoObject; template deep sem VideoObject e sem o literal 2026-08-31; área ES com BreadcrumbList; hub Fairfax com LocalBusiness completo; About com `#founder`; Bethesda deep com `dateModified` 2026-09-01 e linha "Updated" |
| 404 | URL inexistente → 404 real com corpo próprio (title "Page Not Found (404)", noindex); `/es/a/b` → 404 em espanhol; `/404` noindex e fora do sitemap |
| Proteções | landing do Ads 200/index/title inalterado; todas as `<img>` do `<main>` da home com width/height; `/blog/x/` termina em 200 em ≤ 3 saltos; Bethesda hub, deep nacional e post de seniores 200/index/canonical |

## Drift ao vivo (`phase3-drift-gate-live-2026-09-07.json`, baseline 192–214)

**0 crítico / 13 warning / 23 info.** Os 13 warnings são `schema_modified` exatamente nas URLs previstas no relatório de implementação: `/services/deep-cleaning` e `/services/move-out-cleaning` (dateModified), `/about` (Person `@id`), hubs Bethesda, Silver Spring, Fairfax, Alexandria e Rockville (LocalBusiness completo), Bethesda deep (data) e os 4 artigos da baseline (autor `#founder`, VideoObject da galeria removido). Title, description, canonical, robots, H1 e hreflang sem alteração nas 23 URLs.

## Baseline recapturada

Após a validação: **IDs 215–237** (23 URLs). Manifesto anterior preservado como `_manifest_pre-phase3-2026-09-07.json`.

## Acompanhamento

- GSC: pedir indexação de `/locations/wheaton-md/house-cleaning`, `/locations/wheaton-md/apartment-cleaning` e `/locations/rockville-md/move-out-cleaning`; conferir em 7 e 28 dias as consultas de Wheaton e "move out cleaning Rockville".
- Cobertura: esperar queda de "Crawled – not indexed" nas 3 URLs promovidas e as URLs antigas passando a "Page with redirect".
- Limitações conhecidas (sem ação): barra final em `/blog/` (2 saltos, plataforma); `/es/<um-segmento>` inexistente com corpo em inglês até a hidratação (status 404 correto).
- Rollback rápido: `netlify api restoreSiteDeploy` para `6a9e2c95…` (produção anterior, `08c730b`).
