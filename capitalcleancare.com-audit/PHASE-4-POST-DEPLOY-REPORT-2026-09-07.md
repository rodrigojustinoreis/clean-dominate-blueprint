# Fase 4 — Recuperação de indexação — Relatório pós-deploy (2026-09-07)

## Publicação

| Item | Valor |
|---|---|
| Aprovação | 07/09/2026 ("APROVADO. Publique a Fase 4 pelo fluxo seguro") |
| Fluxo | worktree `.worktrees/seo-release` (`main`), `git fetch`, `origin/main == main == base da branch == cabb0b5` conferido (0 commits novos em `main`), 3 documentos de entrada untracked verificados byte a byte e removidos, `git merge --ff-only seo/phase-4-index-recovery`, gates, `git push origin main` (sem force) às 18:42 UTC |
| `main` | `cabb0b5` → `70dbc48` (4 commits de código, 1 de docs, 1 de higiene) |
| Deploy Netlify | `6a9f059ea8464d00095b5fa1` — production, `ready` 18:45:39 UTC, `published_deploy` confirmado via API para o commit `70dbc48` |
| Checkout principal | intacto (`preview/home-design-batch-1`) |

## Gates antes do push (build de release)

| Gate | Resultado |
|---|---|
| Build | ok — 1.226 páginas, sitemap 299 (138 lastmod); HTML idêntico ao build validado na branch (1.226/1.226, hashes normalizados) |
| `vitest run` | 8/8 |
| `tsc --noEmit` | 35 = baseline; 0 novos |
| `phase4_checks.py` | 14/14 |
| Drift local vs baseline 215–237 | 0 crítico / 0 warning / 23 info |

## Validação ao vivo (`scripts/post_deploy_check_phase4.py`, 18:47 UTC)

| Grupo | Verificado |
|---|---|
| Sitemap | `/sitemap.xml` 200, 299 URLs |
| 6 fontes com link contextual | `/resources/airbnb-cleaning-tips-dmv-hosts` → Bethesda Airbnb; `/resources/office-cleaning-small-business-dmv` → Bethesda office; `/resources/recurring-cleaning-weekly-biweekly-monthly` e `/resources/deep-cleaning-rockville-md` → Rockville recurring; `/resources/post-construction-cleaning-montgomery-county-md` e `/resources/post-renovation-cleaning-guide-maryland` → Silver Spring post-construction — todas 200, `index, follow`, canonical própria, link presente em `<main>` |
| 4 alvos reforçados + 8 URLs da fila | 200, `index, follow`, canonical própria, no sitemap |
| 13 páginas protegidas (home, About, landing do Ads, guia de custo de deep cleaning, Bethesda deep/hub/recurring, hubs de Silver Spring/Alexandria/Fairfax, Airbnb e office nacionais, `/es`) | title, meta description, canonical, robots, H1 e JSON-LD idênticos ao build pré-Fase 4 |
| Landing do Ads `/services/house-cleaning` | HTML ao vivo **byte a byte idêntico ao deploy anterior de produção** (`6a9ecc25`, hashes de assets normalizados). O script marcou FAIL ao comparar com o build **local**: a única diferença são os dois `<form netlify hidden>` que a Netlify reescreve no pós-processamento (`method='post'` + `form-name`) — comportamento da plataforma presente em todos os deploys, não uma mudança da Fase 4 |
| Resultado | 20/21 no script; 21/21 com a comparação correta (ao vivo × ao vivo) |

## Drift ao vivo (`phase4-drift-gate-live-2026-09-07.json`, baseline IDs 215–237)

**0 crítico / 0 warning / 23 info.** Nenhuma URL da baseline mudou; a baseline não precisa ser recapturada.

## O que está no ar

- 6 links contextuais em 6 guias (únicas páginas com HTML alterado).
- Nenhuma mudança de URL, canonical, redirect, sitemap, robots, schema, title ou H1.
- Sem novos links de página indexável para página noindex.

## Fila de inspeção/solicitação manual no GSC — verificada ao vivo após o deploy, não executada

Todas: 200, `index, follow`, canonical própria, presentes no sitemap (299). Retirar da fila qualquer URL que a inspeção já mostre como indexada.

1. `https://capitalcleancare.com/services/move-out-cleaning`
2. `https://capitalcleancare.com/services/post-construction-cleaning`
3. `https://capitalcleancare.com/locations/bethesda-md/airbnb-cleaning`
4. `https://capitalcleancare.com/locations/bethesda-md/office-cleaning`
5. `https://capitalcleancare.com/locations/wheaton-md/house-cleaning`
6. `https://capitalcleancare.com/locations/wheaton-md/apartment-cleaning`
7. `https://capitalcleancare.com/locations/rockville-md/move-out-cleaning`
8. `https://capitalcleancare.com/locations/alexandria-va`
9. `https://capitalcleancare.com/locations/washington-dc`
10. `https://capitalcleancare.com/locations/georgetown-dc`

## Acompanhamento

- 7 dias: GSC releu o sitemap (296 → 299)? URLs da fila com "Last crawl" preenchido?
- 14 dias: consulta→página de Silver Spring e Alexandria (matriz), status das 10 URLs.
- 30 dias: cobertura, Top 10 não branded, decisão sobre os candidatos da auditoria local (`phase4-location-quality`).
- Rollback rápido: `netlify api restoreSiteDeploy` para `6a9ecc257a8f390008e3e95d` (produção anterior, `a4b268a`).
