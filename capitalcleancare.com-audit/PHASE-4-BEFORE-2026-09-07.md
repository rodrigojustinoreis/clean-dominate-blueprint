# Fase 4 — Evidências ANTES de editar (2026-09-07)

## Estado do repositório

| Item | Valor |
|---|---|
| Worktree | `/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-phase4` (limpa, `git status` vazio) |
| Branch | `seo/phase-4-index-recovery`, criada de `origin/main` |
| `main` local (release) = `origin/main` = commit-base | `cabb0b5` (código de produção = `a4b268a`; `cabb0b5` só adiciona docs) |
| Produção publicada | deploy Netlify `6a9ecc25`, commit `a4b268a`, 07/09 14:40 UTC |
| Checkout principal | `preview/home-design-batch-1` com 8 arquivos da home não commitados — não tocado |

## Baseline (build desta worktree, antes de qualquer edição)

| Gate | Resultado |
|---|---|
| Build (`vite build` + critical CSS + flatten + sitemap) | ok — 1.226 páginas, sitemap 299 (138 `<lastmod>`) |
| `vitest run` | 8/8 |
| `tsc --noEmit -p tsconfig.app.json` | 35 erros = baseline de `main` (0 novos) |
| Inventário `url-inventory-phase4-before-2026-09-07` (emulação Netlify) | 299 URLs indexáveis × 200; hreflang inválido 0; órfãs 0; 926 `noindex` (inclui `/404` e `/es/404`) |
| Sitemap | 299 URLs, todas 200, self-canonical, `index, follow`, sem duplicatas, só host sem `www` |
| Indexável → noindex (página inteira) | 4 links pré-existentes: `/services/house-cleaning` → Olney house (landing do Ads, intocável), `/services/condo-cleaning` → `/checklist` (lead magnet), `/es/areas/germantown-md` e `/es/areas/montgomery-village-md` → botão "EN" do cabeçalho para o hub inglês equivalente (`noindex`). Os dois primeiros já estavam documentados na Fase 3; os dois ES são o seletor de idioma do header (fora do conteúdo), mantidos por serem a página equivalente real |

## Validação HTTP ao vivo (produção, 07/09 ~15:00 UTC)

Todas as URLs abaixo: **200, `index, follow`, canonical própria, presentes uma vez em `/sitemap.xml` (299)**.

`/services/move-out-cleaning` · `/services/post-construction-cleaning` · `/locations/bethesda-md/airbnb-cleaning` · `/locations/bethesda-md/office-cleaning` · `/locations/alexandria-va` · `/locations/washington-dc` · `/locations/georgetown-dc` · `/locations/rockville-md/recurring-cleaning` · `/locations/silver-spring-md/post-construction-cleaning` · `/locations/wheaton-md/house-cleaning` · `/locations/wheaton-md/apartment-cleaning` · `/locations/rockville-md/move-out-cleaning` · `/services/office-cleaning` · `/services/airbnb-cleaning` · `/locations/silver-spring-md` · `/resources/how-much-does-deep-cleaning-cost` · `/locations/bethesda-md/recurring-cleaning`

Higiene da descoberta: `robots.txt` aponta somente para `https://capitalcleancare.com/sitemap.xml`; `/sitemap-service-locations.xml`, `/sitemap_index.xml`, `/sitemap-0.xml`, `/sitemap-posts.xml` respondem **404** (preservado); nenhum HTML do build referencia sitemaps históricos.

## Links contextuais existentes (P1) — `phase4-contextual-links-before-2026-09-07.md`

Contextual = link em prosa (`<p>`/`<li>`/`<td>` com ≥ 40 caracteres de texto ao redor) dentro de `<main>`, a partir de página indexável. Cards, grades, chips, breadcrumbs e listas curtas foram contados à parte.

| Alvo | Contextuais (páginas) | Decisão |
|---|---:|---|
| `/services/move-out-cleaning` | 26 (22) | NO-OP — já correto |
| `/services/post-construction-cleaning` | 8 (6) | NO-OP — já correto |
| `/locations/bethesda-md/airbnb-cleaning` | 1 (1: checklist de Airbnb) | adicionar 1 a partir do guia `airbnb-cleaning-tips-dmv-hosts` (fora do bloco de Bethesda) |
| `/locations/bethesda-md/office-cleaning` | 0 | adicionar 1 a partir do guia `office-cleaning-small-business-dmv` ("Markets We Serve"); segunda fonte só em página protegida (`/services/office-cleaning`, `/services`) → não usada |
| `/locations/alexandria-va` | 3 (3) | NO-OP |
| `/locations/washington-dc` | 5 (5) | NO-OP |
| `/locations/georgetown-dc` | 6 (5) | NO-OP |
| `/locations/rockville-md/recurring-cleaning` | 1 (1: Bethesda recurring) | retarget do link "Rockville" no guia de frequência (hub → página de recurring) + 1 link no guia de deep cleaning de Rockville |
| `/locations/silver-spring-md/post-construction-cleaning` | 0 | adicionar 1 no guia de post-construction de Montgomery County + 1 no guia de pós-reforma de Maryland |

## Arquivos que serão alterados e checagem contra a Fase 3

| Arquivo | Alterado na Fase 3? | Onde a Fase 4 mexe | Justificativa |
|---|---|---|---|
| `src/pages/BlogPost.tsx` | Sim (linhas 50, 347, 549, 663, 715, 788, 1127, 1296, 1298 — retarget/unlink de menções a hubs noindex) | posts `airbnb-cleaning-tips-dmv-hosts` (L266), `office-cleaning-small-business-dmv` (L1411), `recurring-cleaning-weekly-biweekly-monthly` (L391), `deep-cleaning-rockville-md` (L704), `post-renovation-cleaning-guide-maryland` (L1463) — nenhuma linha da Fase 3 é tocada | único arquivo dos posts data-driven; edições em linhas distintas e verificadas no diff |
| `src/pages/PostConstructionCleaningMontgomeryCounty.tsx` | Não (último commit 2026-07-15) | parágrafo de abertura (L83) | guia diretamente relacionado |

Não alterados por decisão: `/services/airbnb-cleaning` e `/services/office-cleaning` (protegidas pela auditoria de canibalização §7 e sob observação no relatório ao vivo), `/services` (MasterServicesPage, alterada na Fase 3), hubs e páginas de Bethesda (bloco em espera), páginas promovidas, home, About, cost guide de deep cleaning, hubs de Silver Spring/Alexandria/Fairfax.

## Matriz de intenção (P1) — só leitura, nada muda

Ver `PHASE-4-QUERY-PAGE-MATRIX-2026-09-07.md`.

## Qualidade das páginas locais (P2) — só leitura

Ver `phase4-location-quality-2026-09-07.csv/.md` (112 indexáveis: 42 hubs, 37 bespoke, 33 template).

## Entidade / GEO (P2)

Varredura do JSON-LD das 299 páginas indexáveis (build baseline): 403 nós de negócio com `@id` único `https://capitalcleancare.com/#business`; nome/legalName únicos ("Capital Clean Care" / "Capital Clean Care LLC"); 1 telefone; 1 endereço postal; 1 `geo`; 1 conjunto `sameAs` (5 perfis: Google Maps cid, Facebook, Instagram, TikTok, Pinterest — todos em `BUSINESS_INFO`); Person `#founder` consistente em 122 nós; texto de desambiguação presente em 282 páginas (rodapé). 29 nós `Organization` sem `@id` = `publisher` dos VideoObject (galeria em 8 páginas e o vídeo do guia de intoxicação de pets), só `name` + `logo` — mesma entidade, sem conflito. **NO-OP** (adicionar `@id` ali tocaria home e `/services/deep-cleaning`, páginas protegidas; fica registrado para um lote futuro).
