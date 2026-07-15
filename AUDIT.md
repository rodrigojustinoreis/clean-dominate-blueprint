# Auditoria Técnica de SEO — capitalcleancare.com

**Stack:** React 18 + Vite + TypeScript, SSG via `vite-prerender-plugin` + `flatten-prerender.mjs`
**Método:** build de produção local (`npm run build`) servido por `vite preview` (:4319), medições reais via `curl`, Lighthouse mobile (simulate) e análise do `dist/`.
**Data:** 2026-07-13 · **Nenhum arquivo de código foi alterado** (apenas este relatório foi criado).

---

## Resumo executivo

| Área | Resultado |
|---|---|
| Renderização (maior risco em SPA) | ✅ **Prerenderizada (SSG)** — crawler sem JS vê 1.500–1.760 palavras + H1 + schema |
| Rotas vs páginas físicas | ✅ 0 URLs do sitemap sem página real |
| Meta tags | ✅ 0 sem title/description/canonical; 0 descriptions duplicadas |
| Schema JSON-LD | ✅ 4 tipos no HTML estático (não depende de JS) |
| Sobreposição de conteúdo (indexáveis) | ✅ 16–28% (baixa) · ⚠️ 53% nas templatizadas (já noindex) |
| Títulos duplicados | ⚠️ 12 pares hub↔serviço com `<title>` idêntico |
| Core Web Vitals (lab) | ⚠️ Home 61 · Serviço 73 · Cidade 88 (LCP da Home é o gargalo) |

**Não há problema que bloqueie indexação.** O maior risco de uma SPA — conteúdo invisível para o crawler — **não existe aqui**: o site é pré-renderizado. Os problemas encontrados limitam *ranking/CWV*, não indexação.

---

## 1. Renderização — ✅ SSG, não CSR

Teste: `curl` contra o build de produção, medindo texto visível no HTML **inicial** (antes de qualquer JS).

| Rota | Palavras no HTML inicial | H1 presente | JSON-LD |
|---|---|---|---|
| `/services/deep-cleaning` | **1.612** | "Professional Deep Cleaning in Montgomery County, MD" | 4 blocos |
| `/locations/rockville-md/deep-cleaning` | **1.760** | "Deep Cleaning Services in Rockville, MD" | 4 blocos |
| `/locations/bethesda-md/house-cleaning` | **1.504** | "Home Cleaning in Bethesda, MD…" | 4 blocos |

O `<div id="root">` **não** está vazio — contém o conteúdo pré-renderizado. Um crawler sem execução de JS (ou com orçamento de render limitado) enxerga a página completa. ✅

> Nuance: `flatten-prerender.mjs` gera 1.191 aliases `.html` para que URLs sem barra final retornem 200 (evita 301 no sitemap).

---

## 2. Inventário de rotas vs sitemap

| Métrica | Valor |
|---|---|
| `<Route>` declaradas em `AppRoutes.tsx` | 215 (6 dinâmicas `:param` + 1 wildcard `*`) |
| Páginas físicas geradas (`dist/**/index.html`) | **1.192** |
| URLs no `sitemap.xml` (indexáveis) | **226** *(o brief citou 248 — ver nota)* |
| URLs do sitemap **sem** página física | **0** ✅ |
| Páginas geradas **fora** do sitemap | ~966 (noindex proposital + variantes não-canônicas) |

**Rotas dinâmicas** (uma rota serve N páginas via prerender): `/:stateSlug`, `/services/:slug`, `/locations/:slug`, `/locations/:slug/:serviceSlug`, `/blog/:slug`, `/blog/topic/:topicSlug`. O wildcard `*` → NotFound (404 SPA).

**Nota sobre "248":** o sitemap atual tem **226** URLs. A diferença vem da poda de doorway (13/07/2026) que colocou 99 páginas em `noindex` e as removeu do sitemap (era ~317 antes). Se o número 248 vem de uma ferramenta externa, ela está com cache de um sitemap antigo.

**Rotas sem página real:** nenhuma — todo path do sitemap tem HTML gerado.
**Páginas sem rota:** nenhuma detectável — o prerender deriva das rotas, então não há órfãos físicos.
**URLs duplicadas:** ver §5 (trailing-slash) e §7 (títulos duplicados).

---

## 3. Sobreposição de conteúdo (cidade × serviço)

Método: shingles de 6-gram sobre o texto visível (excluindo nav/footer/scripts).

| Par | Jaccard | % do texto de A também em B | Indexável? |
|---|---|---|---|
| rockville × deep-cleaning **vs** bethesda × deep-cleaning | 19% | 28% | ✅ ambas |
| rockville × house-cleaning **vs** silver-spring × house-cleaning | 16% | 28% | ✅ ambas |
| gaithersburg × deep-cleaning **vs** germantown × deep-cleaning | **33%** | **53%** | 🚫 ambas noindex |

**Leitura:** as páginas mantidas indexáveis (Lote 1 de unicidade) têm sobreposição **baixa** (16–28%, sendo a maior parte chrome compartilhado: checklist, FAQ, CTA). As páginas **templatizadas** (só o nome da cidade trocado) têm 53% — exatamente o padrão de doorway, e **por isso já estão em `noindex`**. A estratégia de exclusão está consistente com o que os dados mostram.

---

## 4. Schema JSON-LD

Todos os blocos estão **no HTML estático** (renderizados via `react-helmet-async` com `data-rh="true"` + um `<JsonLd>` direto). **Não dependem de JS** — visíveis para qualquer crawler.

| Página | Tipos JSON-LD |
|---|---|
| `/locations/*/house-cleaning` | `BreadcrumbList`, `HouseCleaner`/`LocalBusiness`, `Service`, `FAQPage` |
| Home, `/services/*`, `/blog/*`, `/reviews` | + `VideoObject` (×N, galeria de vídeos reais) |

- `@type` do negócio usa array `["HouseCleaner","LocalBusiness"]` (correto — subtipo específico).
- `BreadcrumbList`, `Service`, `FAQPage` presentes por página.
- ✅ Não foi encontrado schema `HowTo` (deprecado). `FAQPage` mantido (útil p/ citação em IA, embora o Google tenha aposentado o rich result de FAQ em mai/2026).

> Observação: o `Service`/`LocalBusiness` são injetados por Helmet mas **saem no HTML pré-renderizado** — confirmado no `curl`. Sem risco de "schema invisível".

---

## 5. Meta tags — ✅ saudável

Varredura das **1.192** páginas geradas:

| Verificação | Resultado |
|---|---|
| Sem `<title>` | 0 |
| Sem `meta description` | **0** |
| `description` < 70 chars | 0 |
| `descriptions` duplicadas (mesmo texto em 2+ páginas) | **0** |
| Sem `<link rel="canonical">` | **0** |
| Sem `og:title` | 1 (página utilitária) |

**Canonical / trailing-slash:** `/x` e `/x/` retornam **ambos 200**, mas **ambos canonicalizam para a versão sem barra** → o Google consolida, sem duplicação real. (Um `301` seria marginalmente mais limpo que 200+canonical, mas não é problema.)

---

## 6. Core Web Vitals (Lighthouse mobile, build de produção local)

> ⚠️ **Contexto:** medição em `vite preview` local (sem CDN/Brotli da Netlify). O LCP local é **inflado** vs. produção. Serve como sinal **relativo** entre páginas. Não há dados de campo (CrUX) — origem abaixo do threshold.

| Página | Perf | LCP | CLS | TBT | FCP |
|---|---|---|---|---|---|
| **Home** | **61** | 13.8 s ⚠️ | 0 ✅ | 140 ms | 3.5 s |
| `/services/deep-cleaning` | 73 | 4.9 s | 0.033 ✅ | 70 ms | 3.8 s |
| `/locations/bethesda-md/house-cleaning` | **88** | 3.1 s | 0.025 ✅ | 140 ms | 2.6 s |

- **CLS e TBT excelentes** em todas (layout estável, pouca thread bloqueada).
- **Gargalo = LCP/render-start**, pior na **Home**.
- **LCP element da Home:** `<img src="/images/hero/team-hero.webp" fetchpriority="high" loading="eager">` — já pré-carregado (`<link rel=preload>`) e leve (**48 KB**). Logo, o LCP alto **não** é payload de imagem; é **JS**: Lighthouse aponta *"Reduce unused JavaScript — 149 KiB"* na Home (122 KiB no serviço). O chunk `Index-*.js` é o maior (424 KB não-comprimido).
- ⚠️ **Bug do hero:** atributos `width="1920" height="1080"` (paisagem) **não batem** com o arquivo real `760×1140` (retrato). Não gerou CLS (por `object-cover`), mas a dimensão declarada está errada.

---

## Problemas por severidade

### 🔴 CRÍTICOS (bloqueiam indexação)
**Nenhum.** A renderização é SSG (conteúdo no HTML), canonical/robots/meta corretos, schema no HTML. O risco clássico de SPA está resolvido.

### 🟠 ALTOS (limitam ranking)
1. **LCP da Home (lab 13.8 s; perf 61).** Não é a imagem (48 KB, pré-carregada) — é **JS não usado** (~149 KiB) e o chunk `Index` de 424 KB. Impacta o principal CWV na página mais importante. *(Confirmar com dados de campo em produção — o preview local exagera.)*
2. **12 pares hub↔serviço com `<title>` IDÊNTICO.** Cada `/locations/{cidade}` e seu `/locations/{cidade}/house-cleaning` têm o mesmo `<title>` "House Cleaning in {Cidade}…". Onde **ambos são indexáveis** (ex.: `herndon-va`, `north-potomac-md`), há canibalização de título pela mesma intenção. *(Para os hubs já em `noindex` — shaw, navy-yard, boyds, bowie, laurel, college-park, brookeville, columbia-heights, reston, annandale — é inócuo.)*

### 🟡 MÉDIOS
3. **Sobreposição de 53% nas páginas templatizadas** (gaithersburg/germantown etc.) — mitigado: já estão em `noindex`. Vira problema **se** forem reindexadas sem conteúdo único antes.
4. **Bug de dimensão do hero** (`1920×1080` declarado vs `760×1140` real) — corrigir os atributos `width/height` para o valor real; considerar `srcset` (hoje serve 1 imagem só, embora leve).
5. **Trailing-slash serve 200 duplo** (`/x` e `/x/`) — resolvido por canonical, mas um `301 → sem-barra` seria mais limpo e economizaria crawl.
6. **Discrepância de contagem do sitemap** (226 real vs 248 do brief) — se alguma ferramenta externa reporta 248, está com sitemap em cache pré-poda; reenviar `sitemap.xml` no GSC/Bing.

### Inventário rápido para ação
| Item | Onde | Ação sugerida (fora do escopo desta auditoria) |
|---|---|---|
| Título duplicado hub↔serviço | `CityPage` vs `ServiceLocationPage` (para cidades indexáveis) | Diferenciar `<title>` do hub (ex.: "Cleaning Services in {City}" vs "House Cleaning in {City}") |
| JS não usado na Home | chunk `Index-*.js` (424 KB) | Code-split adicional / lazy nos blocos abaixo da dobra |
| `width/height` do hero | `HeroSection` | Ajustar para `760×1140` (valor real) |
| Templatizadas 53% | `serviceLocationOverrides` | Manter `noindex` até ter conteúdo único |

---

## Inventário de rotas (tabela)

| Padrão de rota | Tipo | Nº de páginas geradas | No sitemap (indexável) |
|---|---|---|---|
| `/` | estática | 1 | ✅ |
| `/services/:slug` | dinâmica | 9 | 9 |
| `/locations/:slug` (hubs de cidade) | dinâmica | ~90 | ~parcial (43 em noindex) |
| `/locations/:slug/:serviceSlug` | dinâmica | ~700+ | 71 indexáveis (resto noindex) |
| `/blog/:slug` | dinâmica | 99 | 99 |
| `/blog/topic/:topicSlug` | dinâmica | ~5 | parcial |
| `/:stateSlug` (maryland/virginia/washington-dc) | dinâmica | 3 | 3 |
| Vanity landings (`/house-cleaning-{cidade}-md` etc.) | estáticas | ~30 | ~30 |
| Institucionais (`/about`, `/contact`, `/reviews`, `/faq`, `/careers`, `/gift-cards`, `/privacy-policy`, `/terms-of-service`) | estáticas | 8 | 8 |
| `/es/*` (versão espanhol) | estáticas | 17 | 17 |
| `*` (wildcard) | NotFound | — (404 SPA) | — |
| **TOTAL** | | **1.192 páginas físicas** | **226 no sitemap** |

- **Rotas declaradas:** 215 `<Route>` (215 estáticas + 6 dinâmicas cobrindo o grosso via prerender).
- **URLs do sitemap sem página:** 0.
- **Páginas sem rota:** 0 detectáveis.
- **Duplicadas:** trailing-slash (200 duplo, canonical resolve) + 12 títulos hub↔serviço.

---

## Critério de aceitação
- ✅ `AUDIT.md` criado na raiz.
- ✅ **Zero arquivos de código alterados** (`git status` fora de `dist/` limpo; `dist/` é build gerado, ignorado pelo git).
