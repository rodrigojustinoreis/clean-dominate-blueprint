# Fase 1 — Relatório de execução (controle de arquitetura)

Data: 5–6 de setembro de 2026. Escopo: os quatro quick wins técnicos autorizados em `CLAUDE-EXECUTION-BRIEF.md`.
Nada foi publicado: sem push, sem merge, sem deploy, sem alteração de Ads/GBP/BBB/redes. A branch
`preview/home-design-batch-1` e suas alterações não commitadas não foram tocadas.

## Branch e worktree

| Item | Valor |
|---|---|
| Worktree | `/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-phase1` (pasta `.worktrees/` excluída do git via `.git/info/exclude`) |
| Branch | `seo/phase-1-architecture-2026-09-05`, criada de `c527a08` (HEAD de `main` = produção em 05/09) |
| `node_modules` | symlink para o checkout principal (sem instalação nova) |

### Commits (um por correção)

```
b5a1765 seo(robots): repeat the parameter/API disallows inside the Googlebot and Bingbot groups
5c3c7d3 seo(hreflang): emit alternates only between indexable pages; drop the Aspen Hill pair
704eecc seo(links): footer never links to noindex location hubs
21590aa seo(redirect): consolidate /resources/deep-cleaning-checklist-dmv-homeowners into the full guide (301)
f5802c1 docs(seo): reproducible URL inventory of the 296 sitemap URLs (before Phase 1) + audit scripts
```

### Arquivos alterados (código e configuração)

```
netlify.toml                     | 10 ++++++++++
 public/robots.txt                | 22 ++++++++++++++++++++++
 src/components/layout/Footer.tsx | 14 ++++++++++----
 src/data/related-content.ts      | 11 +++++------
 src/data/route-map.ts            |  4 +++-
 src/hooks/useSEO.ts              |  6 +++++-
 src/pages/Blog.tsx               | 15 ++++-----------
 src/pages/BlogPost.tsx           |  6 +++---
 src/pages/WhyEcoFriendlyPage.tsx |  2 +-
 src/prerender.tsx                |  1 -
 10 files changed, 63 insertions(+), 28 deletions(-)
```

| Arquivo | Correção | Motivo |
|---|---|---|
| `netlify.toml` | 301 do checklist | regra `force = true` old → destino canônico |
| `src/prerender.tsx` | 301 do checklist | deixa de gerar o HTML estático da URL antiga (nenhum arquivo pode "sombrear" o redirect) |
| `src/pages/Blog.tsx` | 301 do checklist | entrada do post removida: hubs/categorias deixam de linkar para um redirect |
| `src/pages/BlogPost.tsx` | 301 do checklist | 3 links contextuais (Columbia, Washington DC, Busy families) apontam para o destino |
| `src/pages/WhyEcoFriendlyPage.tsx` | 301 do checklist | card "Related Blog Articles" aponta para o destino |
| `src/data/related-content.ts` | 301 do checklist | relações manuais apontam para o destino; chave antiga removida |
| `src/components/layout/Footer.tsx` | links globais → noindex | listas de cidades filtradas por `isNoIndexPath` |
| `src/hooks/useSEO.ts` | hreflang | par EN↔ES só vira hreflang quando os dois lados são indexáveis |
| `src/data/route-map.ts` | hreflang | par Aspen Hill removido (EN nunca existiu; é 301 para `/maryland`) |
| `public/robots.txt` | robots | grupos Googlebot e Bingbot repetem as regras de `/api/`, `/.netlify/` e parâmetros |

## Mapa antigo → novo

| Antes | Depois | Como |
|---|---|---|
| `/resources/deep-cleaning-checklist-dmv-homeowners` (200, index,follow, canonical → destino) | `/resources/what-is-included-in-a-deep-cleaning` | 301 permanente (`force = true`); URL antiga sai do prerender e das listagens |
| hreflang de `/es/areas/aspen-hill-md`: en/x-default → `/locations/aspen-hill-md` (301) | es/x-default → a própria página | par removido de `route-map.ts` |
| hreflang de `/es/areas/germantown-md`: en/x-default → hub EN noindex | es/x-default → a própria página | guarda de indexabilidade em `useSEO` |
| hreflang de `/es/areas/montgomery-village-md`: en/x-default → hub EN noindex | es/x-default → a própria página | idem |
| hreflang de `/locations/germantown-md` e `/locations/montgomery-village-md` (noindex): es → página ES | en/x-default → a própria página | idem (página noindex não declara alternates) |
| Rodapé, coluna Maryland: Germantown e Urbana (noindex) | Clarksburg e Monrovia (indexáveis) | filtro `isLinkableCity` |
| Rodapé, coluna Virginia: Falls Church (noindex) | removido (9 cidades restantes) | filtro `isLinkableCity` |

## Evidências por correção

### 1. Checklist consolidado (301)
- Antes (build local + inventário): `200`, `index, follow`, canonical → `/resources/what-is-included-in-a-deep-cleaning`, fora do sitemap, **7 páginas linkando** (`/why-eco-friendly-cleaning`, `/resources/checklists`, `/resources/deep-cleaning`, `/resources/cleaning-service-columbia-md`, `/resources/best-cleaning-schedule-busy-families-dmv`, `/resources/house-cleaning-washington-dc` e ela mesma).
- Destino: no sitemap, `200`, indexável, canonical próprio, 1.223 links internos.
- Depois: URL antiga não é mais prerenderizada; servidor local com regras do Netlify emuladas responde `301 → /resources/what-is-included-in-a-deep-cleaning` (também com barra final); destino `200`; **0 páginas** linkando para a URL antiga; sitemap continua com 296 URLs (sem diff em `public/sitemap.xml`).
- Fonte de demanda: GSC e Semrush **não foram consultados** (conector GSC exige assinatura; Semrush dispensado por instrução do proprietário). A decisão apoia-se em `ROOT-CAUSE-AUDIT-2026-09-05.md` (a página "deveria ser redirecionada") e no fato de a página já canonicalizar para o destino — o 301 entrega o que o canonical já pedia.

### 2. Links globais para páginas noindex
- Antes: `/locations/germantown-md`, `/locations/falls-church-va` e `/locations/urbana-md` recebiam link de **1.224 de 1.224** páginas prerenderizadas. Origem confirmada no código: `Footer.tsx` (Maryland = 8 primeiras cidades de `mdCities`, que incluem Germantown na 4ª e Urbana na 8ª posição; Virginia = todas as `vaCities`, que incluem Falls Church).
- Depois: Germantown **38**, Falls Church **33**, Urbana **9** links — apenas contextuais (hubs estaduais, listas de cidades vizinhas, páginas cidade×serviço, hubs ES). Nenhuma página indexável foi removida ou alterada de status.

### 3. hreflang inválido
- Antes: 4 páginas com alternates inválidos (3 ES + o checklist, que apontava para o destino sem reciprocidade). Depois: **0**.
- O seletor de idioma continua funcionando: ES Germantown/Montgomery Village ainda linkam para o hub EN (noindex,follow — link de usuário, não hreflang); ES Aspen Hill cai no fallback `/`.

### 4. robots.txt
- Demonstração em `robots-test-2026-09-05.md` (matcher RFC 9309 com curingas). Antes: Googlebot e Bingbot liberados para `/api/`, `/.netlify/` e URLs com `utm_`, `fbclid`, `gclid`, `blog=` (os grupos só tinham `Allow: /` e não herdam de `*`). Depois: bloqueados como o grupo `*`; Twitterbot/facebookexternalhit/LinkedInBot/Applebot continuam `Allow: /` (previews de links compartilhados com `utm_`).

## Resultados dos gates

| Gate | Resultado |
|---|---|
| Build (`vite build` + inline-critical-css + flatten + sitemap; sem IndexNow) | OK — 296 URLs no sitemap (=), 1.224 páginas (−1: o checklist) |
| Testes (`vitest run`) | 2 arquivos, 8 testes, todos verdes |
| TypeScript (`tsc --noEmit -p tsconfig.app.json`) | 35 erros, **conjunto idêntico ao HEAD** (pré-existentes: `gtag` no QuoteForm, `inLanguage` nas páginas ES, etc.) |
| ESLint nos arquivos tocados | 1 erro pré-existente (`BlogPost.tsx:1624` hooks) presente no HEAD; nenhum novo |
| Crawl local antes/depois (inventário) | sitemap 296 = 296, todas `200`; órfãs 0 = 0; noindex no sitemap 0 = 0; canonical ≠ self 0 = 0; hreflang inválido **4 → 0**; produção 296/296 `200` (ao vivo, 05/09) |
| Drift gate (17 regras do skill, baseline IDs 100–122, build local) | **0 crítico, 0 aviso**, 23 INFO `content_hash_changed` — o build "antes" também dá 23 INFO (hash de build ≠ produção), logo não atribuível às correções |
| Comparação campo a campo (23 URLs de baseline + 17 alteradas) | title, meta description, canonical, robots, H1, tipos de schema, telefone e formulário **inalterados em todas**; únicas diferenças: links de rodapé (39 páginas) e hreflang nas 5 páginas-alvo |
| Links internos para destinos fora do sitemap | antes: Destinos distintos: **941**; links (página×destino): **5781**. Top 20: · depois: Destinos distintos: **939**; links (página×destino): **2181**. Top 20: |

Links internos para URLs que redirecionam (top 5 antes → depois):

| antes | depois |
|---|---|
| /resources/deep-cleaning-checklist-dmv-homeowners | 301 | /resources/what-is-included-in-a-deep-cleaning | 7 | /house-cleaning-wheaton-md | 301 | /locations/wheaton-md/house-cleaning | 3 |
| /deep-cleaning-germantown-md | 301 | /locations/germantown-md/deep-cleaning | 3 | /move-out-cleaning-rockville-md | 301 | /locations/rockville-md/move-out-cleaning | 3 |
| /house-cleaning-wheaton-md | 301 | /locations/wheaton-md/house-cleaning | 3 | /deep-cleaning-germantown-md | 301 | /locations/germantown-md/deep-cleaning | 3 |
| /move-out-cleaning-rockville-md | 301 | /locations/rockville-md/move-out-cleaning | 3 | /eco-cleaning-potomac-md | 301 | /locations/potomac-md/eco-friendly-cleaning | 2 |
| /deep-cleaning-gaithersburg-md | 301 | /locations/gaithersburg-md/deep-cleaning | 2 | /recurring-cleaning-columbia-md | 301 | /locations/columbia-md/recurring-cleaning | 2 |

Arquivos gerados: `url-inventory-{before,after}-2026-09-05.{csv,md}`, `phase1-before-after-2026-09-05.md`,
`phase1-drift-gate-after-2026-09-05.json`, `robots-test-2026-09-05.md`. Colunas manuais do roadmap
(`gsc_clicks_90d`, `gsc_impressions_90d`, `gsc_position_90d`, `leads_90d`, `backlinks`, `decision`) estão no CSV, vazias.

## Riscos

1. **301 do checklist** — baixo. A página já canonicalizava para o destino; links externos e tráfego direto seguem pelo 301. Se o Google tivesse indexado a URL antiga separadamente, o 301 consolida no mesmo destino que o canonical já indicava.
2. **Rodapé** — Germantown, Urbana e Falls Church perdem ~1.200 links internos (intencional: são noindex). Clarksburg e Monrovia ganham link global. Se uma dessas cidades voltar a ser indexável (sair de `NOINDEX_PATHS`), o filtro devolve o link automaticamente.
3. **hreflang** — sem risco de ranking: os alternates removidos eram inválidos e já ignorados pelo Google.
4. **robots** — o Googlebot passa a não rastrear `/?blog=` e `?blogcategory=`, que têm 301 para `/resources`; o Google não verá esses 301 e as URLs legadas ficam "bloqueadas por robots" em vez de redirecionadas. Mantive porque a regra já existia em `*`; decisão para o especialista de SEO: remover as três linhas `blog=`/`blogcategory=` de todos os grupos se quiser que os 301 sejam processados.

## Rollback

- Por correção: `git revert <hash>` do commit correspondente (lista acima).
- Tudo: `git worktree remove --force .worktrees/seo-phase1 && git branch -D seo/phase-1-architecture-2026-09-05`.
- Só o redirect: apagar a regra em `netlify.toml`, re-adicionar `/resources/deep-cleaning-checklist-dmv-homeowners` em `prerender.tsx` e a entrada do post em `Blog.tsx` (texto íntegro no diff de `21590aa`).

## Como abrir o preview

```
cd "/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-phase1"
python3 capitalcleancare.com-audit/scripts/serve_dist.py dist netlify.toml 4174
# → http://127.0.0.1:4174/  (aplica redirects e rewrites do netlify.toml sobre o build "depois" já gerado em dist/)
# alternativa sem regras do Netlify: npx vite preview --outDir dist --port 4173
```

Nenhum deploy preview do Netlify foi criado (instrução: não publicar).

## Pendências (não implementadas, com a evidência que falta)

- Colunas GSC 90 dias, leads e backlinks do inventário: vazias — conector GSC exige assinatura ativa; preencher a partir do Search Console/CRM.
- `BlogPost.tsx` mantém dois blocos de conteúdo do slug antigo (linhas ~478 e ~1518), agora inalcançáveis: limpeza futura, sem efeito em produção.
- Oito páginas cidade×serviço de Potomac/Kensington emitem um `<link hreflang="en-US">` próprio além do `en` do hook (duplicata inofensiva): consolidar depois.
- `scripts/generate-sitemap.ts` (legado, não usado no build) ainda lista `/blog/deep-cleaning-checklist-dmv-homeowners`.
- Canibalização Bethesda/Silver Spring e reordenação de seções da home: fora do escopo da Fase 1 (dependem da matriz consulta→URL com dados do GSC).
