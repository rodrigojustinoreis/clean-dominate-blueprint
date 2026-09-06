# Fase 2 — Relatório pós-deploy (2026-09-06)

## Publicação

| Item | Valor |
|---|---|
| Commit em produção | `7fd7de8` (`main`), fast-forward de `ad30344` com os 7 commits da branch `seo/phase-2-organic-recovery-2026-09-06` |
| Pré-merge | os dois arquivos untracked `PHASE-2-CLAUDE-PROMPT` e `PHASE-2-LIVE-ORGANIC-DATA` do worktree de release verificados byte a byte (SHA-256 idêntico ao commitado na branch) e só então removidos; `origin/main` = `main` = `ad30344` confirmado antes do merge e de novo antes do push |
| Push | `git push origin main` às 2026-09-06 20:49:51 UTC, sem force |
| Deploy Netlify | `6a9dd1f2f75b070008fc0c49`, contexto production, branch main, criado 20:49:54 UTC, publicado 20:53:48 UTC, estado `ready` |
| URL | https://capitalcleancare.com (bundle `assets/index-DUbY6biD.js`; anterior `index-DYNxaGqJ.js`) |
| Deploy anterior (alvo de rollback) | `6a9cf6927b7bf20008bf8ea3` (commit `0204837`, Fase 1) |
| Checkout principal | `/Users/rodrigoreis/TESTE BOSTA` permaneceu em `preview/home-design-batch-1` @ `c527a08` com as 8 alterações visuais não commitadas intactas |

## Gates antes do push (worktree de release, build limpo)

- Build completo sem IndexNow: OK — 1.224 páginas e sitemap de 296 URLs, byte a byte iguais ao build final da branch da Fase 2.
- Vitest 8/8; TypeScript 35 erros = conjunto pré-existente do HEAD.
- Inventário local: 296/296 `200`, só canonical próprio, sem noindex no sitemap, hreflang válido em todas as 1.224 páginas, 0 órfãs.
- Redirects no servidor local com regras do Netlify: vanity de Germantown → 301 → página indexável; 301 da Fase 1 mantido; 404 real.
- Drift gate local (baseline pós-Fase 1, IDs 123–145): 0 crítico, 0 aviso, 23 INFO.
- Comparação campo a campo (23 URLs de baseline + 6 afetadas): 24 sem diferença; 5 com exatamente as diferenças pretendidas.

## Validação ao vivo em produção (20:54 UTC, `scripts/post_deploy_check_phase2.py`)

| | check | detalhe |
|---|---|---|
| | check | detalhe |
|---|---|---|
| ✅ | 301 /deep-cleaning-germantown-md → Germantown deep (final 200) | /deep-cleaning-germantown-md [301] → /locations/germantown-md/deep-cleaning [200] |
| ✅ | Germantown deep: 200, index, self-canonical | 200; robots=index; canonical=/locations/germantown-md/deep-cleaning |
| ✅ | sitemap.xml has 296 URLs | 200; 296 |
| ✅ | Germantown deep in sitemap | present |
| ✅ | old Silver Spring post NOT in sitemap | absent |
| ✅ | new Silver Spring guide in sitemap | present |
| ✅ | all sitemap URLs answer 200 | 296/296 ok |
| ✅ | old SS post: 200, canonical → new guide, no hreflang | 200; canonical=/resources/best-house-cleaning-service-silver-spring-md; hreflang links=0 |
| ✅ | new SS guide: 200, self-canonical, index | 200; canonical=/resources/best-house-cleaning-service-silver-spring-md |
| ✅ | Maryland prices guide: title = H1 wording, self-canonical | 200; title='Maryland House Cleaning Cost (2026): $150–$480+ | Capital Clean Care'; H1='Maryland House Cleaning Cost (2026): $150–$480+' |
| ✅ | office cleaning links to small-business guide | 200; link=True |
| ✅ | small-business guide 200, self-canonical | 200 |
| ✅ | Phase 1 redirect still in place (checklist → full guide, final 200) | /resources/deep-cleaning-checklist-dmv-homeowners [301] → /resources/what-is-included-in-a-deep-cleaning [200] |
| ✅ | unknown URL returns real 404 | 404 |
| ✅ | robots.txt live == repo | 200; sha 5f8d0c7146cc |
| ✅ | 23 baseline URLs: SEO fields live == release build | all identical |

**Falhas críticas: 0**

Estado de produção **antes** do deploy (20:39 UTC), para contraste: Germantown deep `noindex` e fora do sitemap; post antigo de Silver Spring com canonical próprio e 2 hreflang; title do guia de preços "House Cleaning Cost MD: $150–$480+"; office cleaning sem link para o guia.

## Drift gate ao vivo (produção vs baseline IDs 123–145, 20:54 UTC)

0 crítico, 0 aviso, 23 INFO — todos `content_hash_changed` (hashes de assets mudam a cada deploy; `/services/deep-cleaning` também trocou um link no bloco "related"). Nenhum crítico atribuível; **nenhum rollback necessário**.
Baseline **recapturada** após a validação: IDs **146–168** (23 URLs, todas 200); manifesto anterior preservado como `_manifest_pre-phase2-2026-09-06.json`.

## Efeitos publicados, URL a URL

| URL | Antes | Agora em produção |
|---|---|---|
| `/deep-cleaning-germantown-md` | 301 → página noindex | 301 → página indexável (1 salto, destino 200) |
| `/locations/germantown-md/deep-cleaning` | `noindex,follow`, fora do sitemap | `index,follow`, canonical próprio, no sitemap |
| `/resources/how-to-choose-cleaning-service-silver-spring` | canonical próprio, no sitemap, 2 hreflang | 200, canonical → `/resources/best-house-cleaning-service-silver-spring-md`, fora do sitemap, 0 hreflang; sem redirect |
| `/resources/best-house-cleaning-service-silver-spring-md` | no sitemap | idem, canonical próprio |
| `/resources/house-cleaning-prices-maryland-2026` | title "House Cleaning Cost MD: $150–$480+ \| Capital Clean Care" | title "Maryland House Cleaning Cost (2026): $150–$480+ \| Capital Clean Care" = H1; URL, meta, conteúdo iguais |
| `/services/office-cleaning` | sem link para o guia de pequenas empresas | link contextual presente |
| sitemap | 296 | 296 (entra Germantown deep, sai o post antigo de Silver Spring) |

## Limitações e acompanhamento

- GSC por consulta e Semrush continuam indisponíveis nesta sessão; o efeito das mudanças deve ser lido no Search Console em 7 e 28 dias: CTR/posição do guia de preços de Maryland (title), indexação de `/locations/germantown-md/deep-cleaning` e da vanity que redireciona para ela, e se o Google adota o canonical do post antigo de Silver Spring (só então avaliar um 301).
- Pendentes documentados nas decisões da Fase 2: três vanity 301 que caem em noindex (Wheaton house, Rockville move-out, Kensington deep) e `/faq` × `/resources/faq`.
- Este relatório, o script de validação e o resultado ao vivo foram commitados em `main` com `[skip netlify]`: não alteram o site publicado e não disparam build.

## Rollback (se necessário)

1. Imediato, sem build: `netlify api restoreSiteDeploy --data '{"site_id":"e839f4fb-50ad-46b2-8235-04fefc58f297","deploy_id":"6a9cf6927b7bf20008bf8ea3"}'` (ou "Publish deploy" no painel).
2. No código, por item: `git revert` de `a2e8a77` (Germantown), `a9d3e35` (canonical Silver Spring), `3f73366` (title do guia de preços), `bdd1aec` (link office), `fd5ae85` (hreflang) em `main` e `git push origin main`.
