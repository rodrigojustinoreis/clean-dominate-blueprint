# Fase 2 — Relatório de implementação (2026-09-06)

## Escopo executado

Recuperação orgânica seletiva conforme `PHASE-2-LIVE-ORGANIC-DATA-2026-09-06.md`: matriz consulta → página, decisões de canibalização com evidência técnica e implementação do subconjunto seguro (4 correções de URL/canonical/snippet/link + 1 correção de consistência no hook de SEO). Google Ads fora de escopo. Nada foi enviado, mesclado ou publicado.

## Worktree e branch

| Item | Valor |
|---|---|
| Worktree | `/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-phase2` |
| Branch | `seo/phase-2-organic-recovery-2026-09-06`, criada de `main` @ `ad30344` (código de produção = `0204837`) |
| Checkout principal | `/Users/rodrigoreis/TESTE BOSTA` permaneceu em `preview/home-design-batch-1` @ `c527a08` com as 8 alterações visuais não commitadas intactas |
| Produção | intocada (deploy `6a9cf6927b7bf20008bf8ea3`, commit `0204837`) |

## Commits (atômicos, em ordem)

```
fd5ae85 seo(hreflang): a page canonicalised to another URL emits no hreflang alternates
bdd1aec seo(links): office-cleaning service page leads its guides block with the small-business guide
3f73366 seo(snippet): align the Maryland house-cleaning cost guide title with its H1
a9d3e35 seo(canonical): canonicalise the older Silver Spring 'how to choose' post to the dedicated buyer's guide
a2e8a77 seo(index): re-index /locations/germantown-md/deep-cleaning, the 301 target of a vanity URL with live demand
ffcca27 docs(seo): Phase 2 inputs, query→page matrix, cannibalization decisions and before-inventory
```

Arquivos de código e configuração alterados (`ad30344..HEAD`):

```
src/data/noindexPaths.ts    |  4 +++-
 src/data/related-content.ts | 23 ++++++++++++++++-------
 src/hooks/useSEO.ts         |  8 +++++++-
 src/pages/Blog.tsx          |  5 +++++
 src/pages/BlogPost.tsx      |  4 +++-
 5 files changed, 34 insertions(+), 10 deletions(-)
```

`public/sitemap.xml` é regenerado pelo build (entra `/locations/germantown-md/deep-cleaning`, sai `/resources/how-to-choose-cleaning-service-silver-spring`; total continua 296) e foi commitado com os artefatos finais.

## Decisões URL a URL

| URL | Decisão | Por quê | Commit |
|---|---|---|---|
| `/locations/germantown-md/deep-cleaning` | **REINDEX** (sai de `NOINDEX_PATHS`) | é o alvo do 301 de `/deep-cleaning-germantown-md`, que ainda soma 186–338 impressões e 1–2 cliques por semana no GSC; um redirect precisa cair numa página indexável. Página com intro local (Churchill Village, Kingsview, ZIPs 20874–76), 888 palavras, mesmo template das páginas cidade×serviço indexáveis | `a2e8a77` |
| `/resources/how-to-choose-cleaning-service-silver-spring` | **CANONICALIZE** → `/resources/best-house-cleaning-service-silver-spring-md` | mesmo intento declarado no H1, 30% de texto compartilhado (shingles de 5 palavras), ambos linkados lado a lado nos mesmos 21–22 blocos das páginas de Silver Spring; o novo é dedicado, mais longo e com foto própria. Canonical primeiro (reversível, página segue 200); 301 só após o GSC confirmar | `a9d3e35` |
| `/resources/house-cleaning-prices-maryland-2026` | **KEEP + title** = H1 ("Maryland House Cleaning Cost (2026): $150–$480+") | impressões 265 → 602 na semana com cliques 3 → 2; o title era o único elemento com "MD" enquanto H1, listagem, meta e resposta de abertura já dizem "Maryland … (2026)". URL, H1, meta e conteúdo intocados | `3f73366` |
| `/services/office-cleaning` | **KEEP + link contextual** para `/resources/office-cleaning-small-business-dmv` | queda de impressões diagnosticada como mix de consulta/localização (termos de Chantilly/Lorton/Veterans Hospital sumiram; "facility cleaning services" surgiu); não há segunda URL indexável para a intenção genérica. O guia tinha 2 links de entrada e não aparecia no bloco de guias do serviço | `bdd1aec` |
| páginas com canonical para outra URL | **hreflang omitido** | Google ignora hreflang em páginas não canônicas e o alternate para o alvo nunca é recíproco (apareceu como inválido no inventário após a canonicalização) | `fd5ae85` |
| vencedoras (`how-much-does-deep-cleaning-cost`, custos de Arlington/Alexandria/Rockville, Bethesda deep) | **KEEP** | URL, H1, title, meta e copy intocados; links guia → página comercial já existiam | — |
| barra final, `/blog/*`, `www`, `/faq` × `/resources/faq`, Airbnb, Alexandria/Arlington guias × serviços | **KEEP / DISTINCT** | ver `PHASE-2-CANNIBALIZATION-DECISIONS-2026-09-06.md` | — |

Nenhum redirect novo, nenhuma URL removida, nenhuma página criada.

## Verificação (build final `dist/`, worktree limpo)

| Gate | Resultado |
|---|---|
| Build (`vite build` + critical-css + flatten + sitemap; sem IndexNow) | OK — 1.224 páginas, sitemap 296 URLs |
| Vitest | 2 arquivos, 8 testes, verdes |
| ESLint nos arquivos tocados | `useSEO.ts`, `related-content.ts`: limpos; `BlogPost.tsx`/`Blog.tsx`: 1 erro + 2 avisos pré-existentes (idênticos ao HEAD) |
| TypeScript | 35 erros, mesmo conjunto do HEAD (pré-existentes) |
| Inventário (`url-inventory-after-phase2-2026-09-06`) | sitemap 296/296 em 200; só canonical próprio; sem noindex; 1 H1; títulos únicos; **hreflang válido em todas as 1.224 páginas**; órfãs 0 |
| Comparação campo a campo (23 URLs da baseline + 10 afetadas = 33) | 27 sem diferença; 6 com exatamente as diferenças pretendidas (abaixo). Title, meta, canonical, robots, H1, schema, telefone e formulário inalterados nas 23 URLs da baseline |
| Drift gate (17 regras, baseline pós-Fase 1 IDs 123–145) | **0 crítico, 0 aviso**, 23 INFO `content_hash_changed` — o build do código de produção dá os mesmos 23 INFO contra a mesma baseline (hash de build ≠ hash de produção), logo não atribuível |
| Redirects (servidor local com regras do Netlify) | `/deep-cleaning-germantown-md` → 301 → `/locations/germantown-md/deep-cleaning` (200, `index,follow`); `/resources/deep-cleaning-checklist-dmv-homeowners` → 301 (Fase 1) mantido; 404 real para URL inexistente |
| Órfãs / links de entrada | Germantown deep: 60 links de entrada; guia de pequenas empresas: 2 → 4; post antigo de Silver Spring: 22 → 3 (sai dos blocos "related" por ser canonicalizado, segue linkado de hubs) |

### Diferenças antes → depois (só as 6 URLs que mudaram)

**/services/deep-cleaning**

| campo | antes | depois |
|---|---|---|
| links removed | /locations/burtonsville-md/deep-cleaning |  |
| links added |  | /locations/germantown-md/deep-cleaning |

**/locations/germantown-md/deep-cleaning**

| campo | antes | depois |
|---|---|---|
| robots | noindex,follow | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 |

**/resources/how-to-choose-cleaning-service-silver-spring**

| campo | antes | depois |
|---|---|---|
| canonical | https://capitalcleancare.com/resources/how-to-choose-cleaning-service-silver-spring | https://capitalcleancare.com/resources/best-house-cleaning-service-silver-spring-md |
| hreflang | en=/resources/how-to-choose-cleaning-service-silver-spring ¦ x-default=/resources/how-to-choose-cleaning-service-silver-spring |  |

**/resources/house-cleaning-prices-maryland-2026**

| campo | antes | depois |
|---|---|---|
| title | House Cleaning Cost MD: $150–$480+ ¦ Capital Clean Care | Maryland House Cleaning Cost (2026): $150–$480+ ¦ Capital Clean Care |

**/services/office-cleaning**

| campo | antes | depois |
|---|---|---|
| links removed | /resources/house-cleaning-after-hospital-surgery-seniors |  |
| links added |  | /resources/office-cleaning-small-business-dmv |

**/locations/silver-spring-md/house-cleaning**

| campo | antes | depois |
|---|---|---|
| links removed | /resources/how-to-choose-cleaning-service-silver-spring |  |
| links added |  | /resources/cleaning-routine-families-school-age-kids |


Efeitos colaterais dos blocos "related" (limite de 6 por bloco): `/services/deep-cleaning` troca o link de Burtonsville deep por Germantown deep (Burtonsville mantém 58 links de entrada); `/services/office-cleaning` troca um guia de idosos irrelevante pelo guia de pequenas empresas; `/locations/silver-spring-md/house-cleaning` troca o post canonicalizado por outro guia.

## Preview

Local, com redirects e rewrites do `netlify.toml` aplicados sobre o build final:

```
cd "/Users/rodrigoreis/TESTE BOSTA/.worktrees/seo-phase2"
python3 capitalcleancare.com-audit/scripts/serve_dist.py dist netlify.toml 4177   # → http://127.0.0.1:4177/
```

Nenhum deploy preview remoto foi criado: a instrução desta fase proíbe deploy, e um draft deploy do Netlify já é um envio para a infraestrutura. Se quiser um URL remoto antes do merge, um `netlify deploy --dir dist` (sem `--prod`) a partir deste worktree gera um draft sem tocar produção.

## Riscos e rollback

| Mudança | Risco | Rollback |
|---|---|---|
| Reindexar Germantown deep | baixo: página existente, com demanda comprovada chegando via 301 | `git revert a2e8a77` (volta a `NOINDEX_PATHS`) |
| Canonical do post antigo de Silver Spring | médio-baixo: se o Google preferir o antigo, ignora o canonical; nada quebra | `git revert a9d3e35` |
| Title do guia de preços | baixo-médio: oscilação de posição por alguns dias numa página em ascensão; drift gate marcará `title_changed` (intencional) | `git revert 3f73366` |
| Link do office cleaning | nenhum | `git revert bdd1aec` |
| hreflang omitido em páginas canonicalizadas | nenhum (afeta só páginas com canonical externo; hoje, uma) | `git revert fd5ae85` |
| Tudo | — | descartar a branch: `git worktree remove --force .worktrees/seo-phase2 && git branch -D seo/phase-2-organic-recovery-2026-09-06` |

Após publicar: rodar `scripts/post_deploy_check.py` adaptado às URLs desta fase, o drift gate ao vivo contra a baseline 123–145 (esperado: `title_changed` só no guia de preços, `noindex` removido em Germantown deep) e recapturar a baseline.

## Limitações

- GSC por consulta/URL (conector sem assinatura) e Semrush (`API UNITS BALANCE IS ZERO`) indisponíveis: a matriz usa as linhas de URL e os sinais de consulta do relatório ao vivo; três 301 legados que caem em noindex (Wheaton house, Rockville move-out, Kensington deep) ficaram pendentes por falta de demanda documentada.
- `/faq` × `/resources/faq`: mantidas como intenções distintas (1% de sobreposição, conjuntos de perguntas diferentes); consolidar só com dados por consulta.

## Recomendação

**GO** para merge fast-forward em `main` e deploy, com um ponto de decisão do proprietário: o commit `3f73366` (title do guia de preços) é a única alteração visível em SERP numa página em ascensão; se preferir risco zero de oscilação, reverter só esse commit antes do merge. Os demais são correções de consistência (redirect → página indexável, canonical entre duplicatas, link interno, hreflang) sem efeito negativo esperado. Procedimento sugerido: mesmo fluxo da Fase 1 (worktree de release, `--ff-only`, gates, push normal, validação ao vivo, recaptura da baseline).
