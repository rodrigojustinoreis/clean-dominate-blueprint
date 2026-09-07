# Fase 3 — Lotes 1 e 2 — Relatório de implementação (2026-09-07)

## Escopo executado

Implementação completa dos Lotes 1 (destravar a demanda que caía em páginas noindex) e 2 (higiene técnica de schema, datas, 404 e imagens) do plano de ação da Fase 3 (`PHASE-3-PANEL-REVIEW-2026-09-07.md`). Um commit por item. Nada foi mesclado, enviado ou publicado em produção — só um deploy de rascunho (preview) na Netlify para validação.

## Worktree e branch

| Item | Valor |
|---|---|
| Worktree | `/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-phase3` |
| Branch | `seo/phase-3-lots-1-2`, criada de `main` @ `08c730b` (= produção, deploy 6a9e2c95) |
| Commits | 14 (lista abaixo) |
| Checkout principal | intacto (`preview/home-design-batch-1`, 8 arquivos da home não commitados) |

## Commits (atômicos, em ordem)

| # | Commit | Item |
|---|---|---|
| 1 | `68ea984` | L1.1 — promover Wheaton house, Wheaton apartment e Rockville move-out a indexáveis; retirar do RETARGET_TO_VANITY os 4 vanities que são 301; `/deep-cleaning-kensington-md` → hub; copy própria de Rockville move-out |
| 2 | `0385dfb` | L1.2 — hubs, hubs estaduais, vanity e blocos related só linkam páginas indexáveis (helpers `serviceCardHref`/`hubHref`; 24 links de páginas bespoke; 9 menções em posts; crumb sem link para hub noindex) |
| 3 | `702c8ba` | L1.3 — links contextuais: `/services` (9 links, não havia nenhum), guia de custo de deep cleaning → move-out e post-construction, `/es/limpieza-de-casas` → 8 áreas |
| 4 | `94467ae` | L2.1 — HowTo JSON-LD desligado (30 páginas → 0) |
| 5 | `06fb21e` | L2.2 — VideoObject só nas páginas-vitrine (161 → 8) |
| 6 | `82e0174` | L2.3 — BreadcrumbList nas 17 páginas em espanhol |
| 7 | `b863c98` | L2.4 — LocalBusiness completo nos 42 hubs |
| 8 | `e90e085` | L2.5 — Person `@id` único (About + autor dos artigos) |
| 9 | `73f582f` | L2.6 — datas reais por página no lugar do literal 2026-08-31 |
| 10 | `041bd6b` | L2.7 — página 404 própria, prerenderizada, servida com status 404 |
| 11 | `e3f6d95` | L2.8 — width/height nas 26 imagens da home |
| 12 | `885feee` | Follow-ups do gate: 301 para `/apartment-cleaning-wheaton-md` (era 404 ao vivo), 6 links restantes, emulador serve `404.html` |
| 13 | `977d2ff` | Guia de Clarksburg → hub indexável; corpo 404 em espanhol para `/es/*` |
| 14 | docs | este relatório, inventário, drift gate, sitemap regenerado |

## Lote 1 — o que mudou e por quê

### L1.1 Páginas promovidas

| Página | Antes | Depois | Evidência |
|---|---|---|---|
| `/locations/wheaton-md/house-cleaning` | noindex; `/house-cleaning-wheaton-md` 301 → noindex | index, canonical próprio, no sitemap; 301 chega em 1 salto | 422 impressões/90 d na URL antiga |
| `/locations/wheaton-md/apartment-cleaning` | noindex (apartment não está em STATIC_SERVICES); **`/apartment-cleaning-wheaton-md` respondia 404 ao vivo** | index via `EXTRA_INDEXABLE_PAIRS`; nova regra 301 da URL antiga | 273 impressões/90 d |
| `/locations/rockville-md/move-out-cleaning` | noindex; `/move-out-cleaning-rockville-md` 301 → noindex | index; ganhou `uniqueContent` próprio (King Farm/Fallsgrove/Twinbrook, lista de inspeção, prazo de 45 dias do depósito em Maryland) | 207 impressões/90 d |
| `/locations/kensington-md/deep-cleaning` | noindex; `/deep-cleaning-kensington-md` 301 → noindex | continua noindex; a URL antiga agora vai para o hub `/locations/kensington-md` (indexável, sem loop) | 55 impressões — não justifica |

`RETARGET_TO_VANITY` (CityPage) perdeu as entradas `wheaton-md/house-cleaning`, `rockville-md/move-out-cleaning`, `germantown-md/deep-cleaning` e `kensington-md/deep-cleaning`: os cards dos hubs mandavam visitantes e crawler por 301 → noindex. Ficaram só os 4 vanities vivos e indexados (Takoma Park apartment, Ellicott City house, Clarksburg post-construction, Frederick house).

**Critério de unicidade (5-word shingles do texto principal vs todas as outras páginas do mesmo serviço):** Wheaton house 43 %, Wheaton apartment 37 %, Rockville move-out 56 %. Calibração: as 67 páginas city×service já indexadas hoje vão de 28 % a 72 % (mediana 44 %); só páginas bespoke passam de 60 %. O "≥ 60 %" do plano não é atingível pelo template sem centenas de palavras novas por página; as três ficam dentro da faixa do que já está indexado e foram promovidas pela demanda comprovada. Decisão registrada aqui para o revisor externo.

### L1.2 Links de indexável → noindex

| Origem | Antes | Depois |
|---|---|---|
| Cards de serviço dos 42 hubs | 742 links para city×service noindex | `serviceCardHref()`: twin indexável → página nacional `/services/<serviço>` (nunca `/services/house-cleaning`, landing do Ads) → card em texto |
| Chips "Nearby Areas" dos hubs | 39 links para hubs noindex | chip em texto (`hubHref()` null) |
| `/maryland`, `/washington-dc`, `/virginia` (CityGallery) | 13 cards para hubs noindex | card sem link (sem overlay "Explore") |
| Vanity pages (5) | "Other services in …" e "All services in …" para noindex | filtrados; crumb da cidade sem link quando o hub é noindex; "view full checklist" deixou de linkar o twin noindex |
| Breadcrumb visível do template city×service | hub noindex linkado | crumb em texto (`Breadcrumbs` renderiza texto quando não há href; antes linkava `/`) |
| Páginas bespoke de cidade (Bethesda, Chevy Chase, Germantown, Kensington, Olney, Potomac, Rockville, Silver Spring, Wheaton) | 27 links em prosa/tabelas para noindex | âncora com cidade → hub indexável da cidade; âncora genérica de serviço → `/services/<serviço>`; 3 crumbs "Germantown, MD" sem link (o BreadcrumbList mantém a hierarquia) |
| Posts e listas (`BlogPost`, auto-posts, Spring carpet, `/services`, near-me, spring-cleaning-md, guia de Clarksburg) | Germantown/Laurel/Falls Church/Damascus/Clarksburg → noindex | Germantown → `/locations/germantown-md/house-cleaning` (indexável); Clarksburg → hub; Laurel, Falls Church e Damascus viram texto (não há equivalente indexável) |

Resultado no build: **hub → noindex = 0; indexável → noindex = 2**, ambos mantidos de propósito: `/services/house-cleaning` → `/locations/olney-md/house-cleaning` (landing do Google Ads, intocável por regra do cliente) e `/services/condo-cleaning` → `/checklist` (lead magnet noindex,follow com utilidade para o usuário).

### L1.3 Links contextuais

- `/services` (MasterServicesPage) descrevia 13 serviços **sem um único link para `/services/*`**; cada um dos 9 artigos com página própria ganhou o link ("… details, checklist and pricing →"), incluindo post-construction e move-out.
- `/resources/how-much-does-deep-cleaning-cost`: parágrafo novo com links para move-out e post-construction no contexto "quando vale a pena".
- Germantown deep: o card do hub de Germantown linka a página diretamente (antes: vanity → 301); `/services/deep-cleaning` já linkava.
- `/es`: já linkava as 8 áreas e `/es/limpieza-de-mudanza` (o "0 links" do prompt vinha de slugs sem `-md`); `/es/limpieza-de-casas` ganhou a frase "Atendemos …" com as 8 áreas como segundo caminho.
- Home: já linka post-construction e move-out nos cards de serviço; não foi alterada (arquivos da home estão no preview de redesign não commitado).

### L1.4 Barra final em `/blog/` — não corrigível no `netlify.toml`

Teste ao vivo (07/09): `/detailed-cleaning/`, que tem regra explícita **com** barra no toml, responde 301 para `/detailed-cleaning` e só então cai na regra. O mesmo para `/services/` e `/blog/topic/tips-seasonal/`. A normalização de barra final acontece na plataforma (Pretty URLs) antes de qualquer regra, logo twins `from = "/blog/:slug/"` seriam regras mortas. A cadeia fica em 2 saltos (301 → 301 → 200), dentro do que o Google segue sem perda. Alternativas (não feitas, por risco): desligar Pretty URLs no painel + regras próprias de barra, ou uma edge function.

## Lote 2 — o que mudou

| Item | Antes | Depois |
|---|---|---|
| HowTo | 30 páginas | 0 (componente devolve null; 25 call sites intactos) |
| VideoObject | 161 páginas com os mesmos 4 vídeos | 8: home, `/es`, `/reviews`, `/services/deep-cleaning`, `/services/maid-service`, projeto Bethesda, Silver Spring house cleaning (prop `withSchema`, `false` em RelatedPosts e no template) + `/resources/cleaning-product-poisoning-in-pets`, que tem `<video>` e VideoObject próprios |
| BreadcrumbList ES | 0/17 | 17/17, nomes em espanhol, href = canonical |
| LocalBusiness nos hubs | nó parcial (nome, telefone, endereço, rating) | nó completo em 42/42: `@id`, telefone, url, logo, imagem, priceRange, horário, geo, sameAs, catálogo, aggregateRating, `areaServed` = cidade + condado. Endereço inalterado (decisão GBP pendente) |
| Person | About sem `@id`; autor dos artigos sem vínculo | `@id` `#founder` no About e nos 121 autores de artigo. Sem `sameAs`: não há URL de perfil pessoal do proprietário em arquivo |
| Datas | 42 URLs com `dateModified` 2026-08-31 | template city×service e ServicePage sem data (`WebPageSchema.dateModified` opcional); bespoke com data do último commit de conteúdo (git, sem commits `perf`): deep nacional 09-03, Bethesda e Rockville deep 09-01 (schema + linha "Updated"); eco-friendly, airbnb, recurring, Potomac move-out, Bethesda recurring e Silver Spring Airbnb foram mesmo revisadas em 08-31 e mantêm. Sitemap: 172 → 138 `<lastmod>` |
| 404 | `/* → /index.html` 404 (corpo e title da home) | `/404` e `/es/404` prerenderizados com o hero da marca, title "Page Not Found (404)", noindex; `/* → /404.html` e `/es/* → /es/404.html`, status 404 |
| Imagens da home | 26 `<img>` sem width/height | 0 (`src/lib/image-dims.ts` com medidas reais via sips; contêineres `object-cover` continuam mandando no tamanho) |

## Verificação (build final `dist/`)

| Gate | Resultado |
|---|---|
| Build (`vite build` + critical CSS + flatten + sitemap) | ok — 1.225 páginas, sitemap 299 (296 + as 3 promovidas), 138 lastmod |
| `vitest run` | 8/8 |
| `tsc --noEmit` | 35 erros = baseline de `main` (nenhum novo) |
| eslint nos arquivos alterados | só os 3 `rules-of-hooks` pré-existentes em `main` |
| Inventário `url-inventory-phase3-2026-09-07` (emulação Netlify) | status 299 × 200, hreflang inválido 0, órfãs 0, noindex 925 (+1 = `/404`) |
| Checks de aceite (`phase3_checks.py`, 24 itens) | 24/24 — 3 promovidas index + canonical próprio + sitemap; Kensington twin noindex; hub → noindex 0; indexável → noindex só as 2 exceções documentadas; 6 links contextuais presentes; HowTo 0; VideoObject 8; BreadcrumbList 17/17 ES; LocalBusiness 42/42; Person @id no About e em 121 artigos; literal de data fora dos templates; `/404` prerenderizado; 0 imagens da home sem width/height; landing do Ads idêntica; nenhuma página perdeu canonical; nenhuma indexável virou noindex |
| Drift local vs baseline IDs 192–214 (`phase3-drift-gate-after-2026-09-07.json`) | **0 crítico / 13 warning / 23 info** — os 13 são `schema_modified`, todos esperados: `dateModified` (deep, move-out, Bethesda deep), LocalBusiness completo (Bethesda, Silver Spring, Fairfax, Alexandria, Rockville), Person `@id` (About + 4 artigos). Title, description, canonical, robots, H1 e hreflang inalterados nas 23 URLs |
| Landing do Ads `/services/house-cleaning` | byte a byte igual ao build de produção (hashes de assets normalizados) |
| Emulação de redirects (`serve_dist.py`) | 4 vanities 301 em 1 salto para páginas 200/index; `/deep-cleaning-kensington-md` → hub 200; `/blog/x` → `/resources/x`; `/this-page-does-not-exist` → 404 com title "Page Not Found (404)" |

## Preview

Deploy de rascunho (não é produção; a Netlify envia `X-Robots-Tag: noindex` em rascunhos):

- URL: https://6a9ec7719b707b56cbfd4ad0--vocal-paprenjak-561aa9.netlify.app
- Log: https://app.netlify.com/projects/vocal-paprenjak-561aa9/deploys/6a9ec7719b707b56cbfd4ad0
- Build: branch `seo/phase-3-lots-1-2` @ `977d2ff`, `dist/` do gate acima

Validação no rascunho (regras reais da Netlify):

| URL | Resultado |
|---|---|
| `/house-cleaning-wheaton-md`, `/apartment-cleaning-wheaton-md`, `/move-out-cleaning-rockville-md`, `/deep-cleaning-germantown-md` | 301 em 1 salto para a página `/locations/…` correspondente (200, `index`) |
| `/deep-cleaning-kensington-md` | 301 → `/locations/kensington-md` (200, `index`); o twin `/locations/kensington-md/deep-cleaning` segue `noindex` |
| `/locations/wheaton-md/house-cleaning`, `/locations/wheaton-md/apartment-cleaning`, `/locations/rockville-md/move-out-cleaning` | 200, `index`, no sitemap (299 URLs) |
| `/this-page-does-not-exist` | 404 com o corpo próprio ("Page Not Found (404)", noindex) |
| `/es/foo/bar` | 404 com o corpo em espanhol ("Página no encontrada (404)") |
| `/es/<slug-inexistente>` (um segmento) | 404 correto, mas corpo em inglês até a hidratação: a regra antiga `from = "/es/:page" → "/es/:page/" force` intercepta antes; não alterada por prudência (é a regra que serve as páginas ES) — limitação conhecida, status certo |
| `/blog/spring-carpet-cleaning/` | 301 → sem barra → 301 → `/resources/…` (2 saltos, plataforma; ver L1.4) |
| `/services/house-cleaning` | 200, `index`, HTML idêntico à produção |

Produção conferida no mesmo instante: `/apartment-cleaning-wheaton-md` ainda 404 e `/locations/wheaton-md/house-cleaning` ainda `noindex` — nada foi publicado.

## Riscos e rollback

- **Home:** `Index.tsx`, `ServicesSection`, `WhyChooseUs`, `GreenShield5Step` e `TransformationsGallery` recebem diffs pequenos (width/height, prop `withSchema`); são arquivos também alterados no preview de redesign da home (`preview/home-design-batch-1`, não commitado). Se o redesign for aprovado, o merge vai pedir reconciliação manual nesses pontos — trivial de refazer.
- **Datas:** 34 URLs deixam de ter `<lastmod>` no sitemap — intencional (não havia data real).
- **Schema:** 13 URLs da baseline mudam JSON-LD; a recaptura da baseline após o deploy deve mostrar exatamente essas 13 como `schema_modified`.
- **Rollback:** `netlify api restoreSiteDeploy` para `6a9e2c95…` (produção atual) ou reverter o merge na branch.

## Limitações

- Barra final em `/blog/` não é corrigível no toml (seção L1.4).
- Critério de unicidade ≥ 60 % não é atingível pelo template (seção L1.1); promoção baseada em demanda.
- Sem GSC/Semrush nesta estação: as impressões citadas vêm do relatório de auditoria (`PHASE-3-PANEL-REVIEW`).

## Recomendação

GO para o fluxo seguro de publicação (worktree `seo-release`, `--ff-only`, gates, push normal, validação ao vivo, recaptura da baseline), condicionado à aprovação do cliente. Após o deploy: pedir indexação das 3 páginas promovidas no GSC e acompanhar em 7/28 dias as consultas de Wheaton e Rockville move-out.
