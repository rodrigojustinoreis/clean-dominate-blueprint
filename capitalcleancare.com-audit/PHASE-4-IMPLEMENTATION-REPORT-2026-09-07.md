# Fase 4 — Recuperação de indexação — Relatório de implementação (2026-09-07)

## Resumo

Fase executada na worktree `.worktrees/seo-phase4`, branch `seo/phase-4-index-recovery` (base `origin/main` @ `cabb0b5`; código de produção `a4b268a`). **Nada foi mesclado, enviado ou publicado em produção.** Só um deploy de rascunho (preview) na Netlify.

Resultado por bloco:

| Bloco | Resultado |
|---|---|
| P1 Reforço contextual (9 URLs) | 5 `NO-OP — já correto`; 4 URLs reforçadas com 6 links contextuais em 6 guias (4 commits) |
| P1 Higiene da descoberta | `NO-OP — já correto` (todos os checks passaram; sitemap/robots/redirects intocados) |
| P1 Matriz de intenção | entregue, 0 alterações; 2 famílias `DADOS INSUFICIENTES` |
| P2 Qualidade das páginas locais | entregue (`.csv` + `.md`), 0 alterações; candidatos para revisão humana |
| P2 Entidade / GEO | `NO-OP — já correto` (1 observação registrada, sem conflito) |
| P2 Plano de autoridade externo | entregue |

## Commits (branch `seo/phase-4-index-recovery`)

| # | Commit | Item | Arquivos |
|---|---|---|---|
| 1 | `84a1657` | P1.3 — link contextual para `/locations/bethesda-md/airbnb-cleaning` a partir do guia de hosts de Airbnb | `src/pages/BlogPost.tsx` (post `airbnb-cleaning-tips-dmv-hosts`) |
| 2 | `d480d41` | P1.4 — link contextual para `/locations/bethesda-md/office-cleaning` a partir do guia de office cleaning para pequenas empresas | `src/pages/BlogPost.tsx` (post `office-cleaning-small-business-dmv`) |
| 3 | `f66a542` | P1.8 — dois links contextuais para `/locations/rockville-md/recurring-cleaning` | `src/pages/BlogPost.tsx` (posts `recurring-cleaning-weekly-biweekly-monthly`, `deep-cleaning-rockville-md`) |
| 4 | `2bdc095` | P1.9 — dois links contextuais para `/locations/silver-spring-md/post-construction-cleaning` | `src/pages/PostConstructionCleaningMontgomeryCounty.tsx`, `src/pages/BlogPost.tsx` (post `post-renovation-cleaning-guide-maryland`) |
| 5 | docs | relatórios, matriz, auditoria local, plano de autoridade, inventários, drift, scripts, documentos de entrada | `capitalcleancare.com-audit/` |

Nenhum commit vazio para itens `NO-OP`. Nenhuma linha alterada na Fase 3 foi tocada (as edições em `BlogPost.tsx` ficam nos posts citados; o diff da Fase 3 naquele arquivo está nas linhas 50, 347, 549, 663, 715, 788, 1127, 1296 e 1298).

## P1 — Reforço contextual: before/after por URL

Contextual = link em prosa (`<p>`/`<li>`/`<td>` com ≥ 40 caracteres ao redor) dentro de `<main>`, a partir de página indexável; cards, grades, chips, breadcrumbs e listas não contam. Detalhe em `phase4-contextual-links-before-2026-09-07.md` e `-after-`.

| Alvo | Antes | Depois | Fonte(s) adicionada(s) e âncora |
|---|---:|---:|---|
| `/services/move-out-cleaning` | 26 links / 22 páginas | = | `NO-OP — já correto` |
| `/services/post-construction-cleaning` | 8 / 6 | = | `NO-OP — já correto` |
| `/locations/bethesda-md/airbnb-cleaning` | 1 / 1 | 2 / 2 | `/resources/airbnb-cleaning-tips-dmv-hosts`, parágrafo de cobertura: "Bethesda hosts have a dedicated **Airbnb cleaning in Bethesda** page with the local turnover details." |
| `/locations/bethesda-md/office-cleaning` | 0 | 1 / 1 | `/resources/office-cleaning-small-business-dmv`, "Markets We Serve": "For offices around Bethesda Row and the Woodmont Triangle, see **office cleaning in Bethesda**." (as duas áreas constam na página de destino). Segunda fonte não adicionada: as únicas candidatas com contexto (`/services/office-cleaning`, `/services`) são páginas protegidas |
| `/locations/alexandria-va` | 3 / 3 | = | `NO-OP` |
| `/locations/washington-dc` | 5 / 5 | = | `NO-OP` |
| `/locations/georgetown-dc` | 6 / 5 | = | `NO-OP` |
| `/locations/rockville-md/recurring-cleaning` | 1 / 1 | 3 / 3 | `/resources/recurring-cleaning-weekly-biweekly-monthly`: a menção "Rockville" na frase sobre frequência de limpeza passou do hub para a página de recurring (retarget de link existente, fora do bloco de Bethesda); `/resources/deep-cleaning-rockville-md`: bullet "New recurring clients … before **recurring cleaning in Rockville** takes over the maintenance visits" |
| `/locations/silver-spring-md/post-construction-cleaning` | 0 | 2 / 2 | `/resources/post-construction-cleaning-montgomery-county-md`, parágrafo de abertura: "… including the older bungalows and colonials of **Silver Spring**"; `/resources/post-renovation-cleaning-guide-maryland`: "Our teams serving **Silver Spring**, Gaithersburg, …" |

Fontes descartadas de propósito: `/services/airbnb-cleaning` e `/services/office-cleaning` (protegidas pela auditoria de canibalização §7 e em observação no relatório ao vivo), `/services` e `ServicePage` (alteradas na Fase 3), hubs e páginas de Bethesda (bloco em espera), `/resources/how-much-does-house-cleaning-cost-rockville-md` (anomalia de exposição em observação), home/About/hubs protegidos.

## P1 — Higiene da descoberta: `NO-OP — já correto`

| Check | Resultado (build e produção ao vivo) |
|---|---|
| 299 indexáveis: 200, prerenderizadas, canonical própria, `index, follow`, uma vez no sitemap | ✅ (inventário antes e depois; sitemap ao vivo 299) |
| Sitemap sem redirect/404/canonical externo/noindex | ✅ |
| `robots.txt` só com `/sitemap.xml` | ✅ |
| Sem link interno para `/sitemap-service-locations.xml` ou sitemaps históricos | ✅ (nenhum HTML do build os referencia) |
| Sitemaps históricos em 404 | ✅ (`/sitemap-service-locations.xml`, `/sitemap_index.xml`, `/sitemap-0.xml`, `/sitemap-posts.xml`) — preservado |
| 3 promovidas na Fase 3 indexáveis e no sitemap | ✅ |
| 8 exclusões intencionais preservadas | ✅ (continuam `noindex`, fora do sitemap; nada foi promovido) |

Nada em `netlify.toml`, `robots.txt` ou sitemap foi alterado.

## P1 — Matriz de intenção

`PHASE-4-QUERY-PAGE-MATRIX-2026-09-07.md`. 0 alterações. Silver Spring e Alexandria: `DADOS INSUFICIENTES` (falta consulta→página do GSC). Observação registrada para depois do recrawl: o H1 do hub de Alexandria ("House Cleaning Services in Alexandria, VA") repete o H1 da página `/house-cleaning`; ajuste só com dados e fora do período de proteção.

## P2 — Qualidade das 112 páginas `/locations/` indexáveis

`phase4-location-quality-2026-09-07.csv` / `.md`. Comparação só dentro do mesmo tipo e serviço (hub × hubs; bespoke × bespoke do mesmo serviço; template × template do mesmo serviço), shingles de 5 palavras no texto de `<main>`.

| Tipo | Páginas | Único (mín/mediana/máx) | Similaridade máx. com 1 par (mediana/máx) | < 60% único |
|---|---:|---|---|---:|
| Hub (CityPage) | 42 | 22% / 31% / 43% | 67% / 76% | 42 |
| Bespoke city×service | 37 | 29% / 54% / 79% | 38% / 56% | 22 |
| Template city×service | 33 | 42% / 49% / 100% | 47% / 54% | 29 |

Leitura: "único" mede o que não aparece em **nenhum** dos pares (métrica estrita; os hubs compartilham FAQ, tabela de preços e blocos de confiança); "similaridade máx." mede o par mais parecido. Os hubs com maior sobreposição em pares: Frederick County ↔ Wheaton (76%), North Potomac ↔ Potomac (71%), Washington DC ↔ Washington DC NE (68–70%), North Bethesda ↔ Bethesda (68%), Monrovia, Columbia Heights, Columbia (67–71%). **Nenhuma ação aplicada** (sem noindex, redirect, merge ou exclusão); a lista é para aprovação humana, cruzada com demanda/links antes de qualquer decisão.

## P2 — Entidade e GEO: `NO-OP — já correto`

Varredura das 299 páginas indexáveis: `@id` único `https://capitalcleancare.com/#business` em 403 nós; nome/legalName únicos; 1 telefone; 1 endereço; 1 `geo`; `sameAs` único com 5 perfis oficiais (Google Maps cid, Facebook, Instagram, TikTok, Pinterest) vindos de `BUSINESS_INFO`; Person `#founder` em 122 nós; texto "not a dry cleaner, tailor, or laundry service" no rodapé de 282 páginas. Observação: os `publisher` dos VideoObject (galeria em 8 páginas e o vídeo do guia de pets) são `Organization` só com `name` + `logo`, sem `@id` — mesma entidade, sem conflito; adicionar o `@id` tocaria a home e `/services/deep-cleaning` (protegidas), fica para um lote futuro.

## P2 — Plano de autoridade

`PHASE-4-AUTHORITY-OUTREACH-PLAN-2026-09-07.md` (baseline, meta de 8–12 domínios em 90 dias, categorias a pesquisar, ativos existentes, modelo de outreach, planilha, regras de âncora, backlog de citações/BBB após o ZIP).

## Validação

| Gate | Resultado |
|---|---|
| Build (`vite build` + critical CSS + flatten + sitemap) | ok — 1.226 páginas, sitemap 299 (138 lastmod) |
| `vitest run` | 8/8 |
| `tsc --noEmit -p tsconfig.app.json` | 35 erros = baseline de `main`; 0 novos |
| Inventário `url-inventory-phase4-after-2026-09-07` | 299 × 200, hreflang inválido 0, órfãs 0, 926 noindex (= antes) |
| `phase4_checks.py` (14 itens) | 14/14: sitemap 299 e conjunto idêntico; 0 indexáveis com noindex; 0 sem canonical; 0 hreflang inválido; **0 novos links indexável→noindex** (os 4 pré-existentes: landing do Ads → Olney house, `/services/condo-cleaning` → `/checklist`, botão "EN" do cabeçalho de `/es/areas/germantown-md` e `/es/areas/montgomery-village-md` → hub inglês noindex); landing do Ads byte a byte igual; title/meta/canonical/robots/H1/schema idênticos nas 17 páginas protegidas; 6 links presentes |
| HTML alterado | exatamente 6 páginas (as 6 fontes); 0 mudanças de title/meta/canonical/robots/H1/schema/hreflang em qualquer URL (`phase4-before-after-2026-09-07.md`, 22 URLs comparadas) |
| Drift local vs baseline atual (IDs 215–237) | **0 crítico / 0 warning / 23 info** |
| Emulador Netlify (`serve_dist.py`) | 6 fontes + 4 alvos + landing: 200, `index` |
| Preview Netlify (rascunho, `X-Robots-Tag: noindex`) | https://6a9efd69206f4f269a71e906--vocal-paprenjak-561aa9.netlify.app — 6 fontes com o link novo em `<main>`, 200, canonical própria; 4 alvos 200/index; sitemap 299 |

## Risco e rollback

- Escopo real: 6 parágrafos em 6 guias (5 posts data-driven em `BlogPost.tsx` e 1 componente). Nenhuma URL, canonical, redirect, schema, title ou H1 mudou. Nenhuma página protegida foi tocada.
- Risco: baixo. O retarget no guia de frequência tira um link contextual do hub de Rockville (que tem 1.225 in-links) e o dá à página de recurring.
- Rollback: reverter os 4 commits de código (`git revert 2bdc095 f66a542 d480d41 84a1657`) ou não mesclar a branch.

## Fila sugerida para inspeção/solicitação manual no GSC — não executada

Reconfirmado ao vivo em produção (07/09, após o deploy da Fase 3): todas 200, `index`, canonical própria, no sitemap (299). Nenhuma foi solicitada. Retirar da fila qualquer URL que já apareça como indexada na inspeção.

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

## Testes futuros propostos (não executados)

- Title/CTR das páginas em Top 10 só após 14–28 dias de estabilidade (guia de custo de deep cleaning, guia de custo de Rockville).
- H1 do hub de Alexandria no padrão umbrella, depois do recrawl e com consulta→página.
- `@id` no `publisher` dos VideoObject quando a home for tocada por outro motivo.

## Recomendação

**GO** para publicação pelo fluxo seguro (worktree `seo-release`, `--ff-only`, gates, push normal, validação ao vivo das 6 fontes e 4 alvos, drift ao vivo contra IDs 215–237 — esperado 0/0 —, sem recaptura obrigatória da baseline porque nenhuma URL da baseline mudou). Aguardando aprovação explícita.
