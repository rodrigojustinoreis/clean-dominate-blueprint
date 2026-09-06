# Fase 1 — Relatório pós-deploy (2026-09-06)

## Publicação

| Item | Valor |
|---|---|
| Commit em produção | `0204837` (`main`), fast-forward de `c527a08` com os 6 commits da branch `seo/phase-1-architecture-2026-09-05` |
| Push | `git push origin main` às 2026-09-06 05:13:51 UTC (sem force; `origin/main` verificado igual a `c527a08` imediatamente antes) |
| Deploy Netlify | `6a9cf6927b7bf20008bf8ea3`, contexto production, branch main, criado 05:13:54 UTC, publicado 05:17:44 UTC, estado `ready` |
| URL | https://capitalcleancare.com (bundle `assets/index-DYNxaGqJ.js`; anterior `index-DErEhJnv.js`) |
| Deploy anterior (alvo de rollback) | `6a9bfa521b06ac00086544ca` (commit `c527a08`, publicado 2026-09-05 11:20 UTC) |
| Worktree de release | `.worktrees/seo-release` (branch `main`); checkout principal `/Users/rodrigoreis/TESTE BOSTA` permaneceu em `preview/home-design-batch-1` @ `c527a08` com as 8 alterações visuais não commitadas intactas |

## Gates antes do push (worktree de release, build limpo)

- Build completo sem IndexNow: OK — 1.224 páginas e sitemap de 296 URLs, byte a byte iguais ao build da branch SEO.
- Vitest: 2 arquivos, 8 testes, todos verdes.
- Inventário local: 296/296 `200`, hreflang inválido 0, órfãs 0, noindex no sitemap 0.
- 301 do checklist com e sem barra no servidor local com regras do Netlify emuladas; destino 200; 404 real para URL inexistente.
- Drift gate local (17 regras, baseline IDs 100–122): 0 crítico, 0 aviso, 23 INFO (hash de conteúdo).
- Comparação campo a campo (31 URLs): title, meta description, canonical, robots, H1, schema, telefone e formulário inalterados; só links de rodapé e hreflang (5 páginas) mudaram.

## Validação ao vivo em produção (05:20 UTC, `scripts/post_deploy_check.py`)

| | check | detalhe |
|---|---|---|
| | check | detalhe |
|---|---|---|
| ✅ | 301 /resources/deep-cleaning-checklist-dmv-homeowners → /resources/what-is-included-in-a-deep-cleaning (≤2 hops, final 200) | /resources/deep-cleaning-checklist-dmv-homeowners [301] → /resources/what-is-included-in-a-deep-cleaning [200] |
| ✅ | 301 /resources/deep-cleaning-checklist-dmv-homeowners/ → /resources/what-is-included-in-a-deep-cleaning (≤2 hops, final 200) | /resources/deep-cleaning-checklist-dmv-homeowners/ [301] → /resources/deep-cleaning-checklist-dmv-homeowners [301] → /resources/what-is-included-in-a-deep-cleaning [200] |
| ✅ | 200 /resources/what-is-included-in-a-deep-cleaning | 200 |
| ✅ | robots.txt live == repo | 200; sha live 5f8d0c7146cc / repo 5f8d0c7146cc |
| ✅ | robots: Googlebot group has 8 Disallows | 8 |
| ✅ | robots: Bingbot group has 8 Disallows | 8 |
| ✅ | sitemap.xml has 296 URLs | 200; 296 URLs |
| ✅ | all sitemap URLs answer 200 | 296/296 ok |
| ✅ | old checklist URL not in sitemap | absent |
| ✅ | hreflang /es/areas/aspen-hill-md | 200; [('es', '/es/areas/aspen-hill-md'), ('x-default', '/es/areas/aspen-hill-md')] |
| ✅ | hreflang /es/areas/germantown-md | 200; [('es', '/es/areas/germantown-md'), ('x-default', '/es/areas/germantown-md')] |
| ✅ | hreflang /es/areas/montgomery-village-md | 200; [('es', '/es/areas/montgomery-village-md'), ('x-default', '/es/areas/montgomery-village-md')] |
| ✅ | hreflang /locations/germantown-md | 200; [('en', '/locations/germantown-md'), ('x-default', '/locations/germantown-md')] |
| ✅ | hreflang /locations/montgomery-village-md | 200; [('en', '/locations/montgomery-village-md'), ('x-default', '/locations/montgomery-village-md')] |
| ✅ | footer /: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | footer /services/deep-cleaning: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | footer /locations/bethesda-md: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | footer /es: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | 23 baseline URLs: SEO fields live == release build | all identical |

**Falhas críticas: 0**

Evidência adicional (curl):

```
/resources/deep-cleaning-checklist-dmv-homeowners   → 301 (Location relativo) → 200 em /resources/what-is-included-in-a-deep-cleaning   (1 salto)
/resources/deep-cleaning-checklist-dmv-homeowners/  → 301 (normalização de barra do Netlify) → 301 → 200 no mesmo destino          (2 saltos)
```

## Drift gate ao vivo (regras oficiais, produção vs baseline IDs 100–122, 05:19 UTC)

0 crítico, 0 aviso, 23 INFO — todos `content_hash_changed` (rodapé mudou em todas as páginas). Nenhum crítico atribuível ao deploy; **nenhum rollback necessário**.
Arquivo: drift-gate-live-2026-09-06.json (scratchpad da sessão). Baseline **recapturada** após a validação: IDs **123–145** (23 URLs, todas 200), manifesto anterior preservado como `_manifest_pre-phase1-2026-09-06.json`.

## Limitações e observações

- A variante com barra da URL antiga resolve em 2 saltos porque o Netlify normaliza a barra antes de aplicar a regra. O resultado final é o destino correto com 200; não é falha. Melhoria opcional para o próximo lote: uma regra explícita `from = "/resources/deep-cleaning-checklist-dmv-homeowners/"` (padrão já usado para `/detailed-cleaning/`).
- O `post_deploy_check.py` inicialmente reprovou o 301 por comparar o `Location` relativo com a URL absoluta; corrigido para resolver o cabeçalho e seguir a cadeia (≤ 2 saltos). O reteste deu 0 falhas críticas.
- GSC/Semrush não foram consultados (conector com assinatura inativa / dispensado). Monitorar no Search Console em 7 e 28 dias: cobertura da URL antiga (deve migrar para "Página com redirecionamento"), hreflang das páginas ES e impressões dos hubs Germantown/Falls Church/Urbana (esperado: sem mudança, já eram noindex).
- Este relatório e o script de validação foram commitados em `main` com `[skip netlify]` no título do commit: não alteram o site publicado e não disparam novo build.

## Rollback (se necessário)

1. Imediato, sem build: restaurar o deploy anterior no Netlify — `netlify api restoreSiteDeploy --data '{"site_id":"e839f4fb-50ad-46b2-8235-04fefc58f297","deploy_id":"6a9bfa521b06ac00086544ca"}'` (ou "Publish deploy" no painel).
2. No código: `git revert --no-edit 0204837 b5a1765 5c3c7d3 704eecc 21590aa f5802c1` em `main` e `git push origin main` (o auto-deploy publica o estado anterior). Nenhuma das seis mudanças tem efeito colateral fora dos arquivos do commit.

## Pendências após a Fase 1

- Preencher no inventário as colunas GSC 90 dias, leads e backlinks (manuais).
- Limpeza futura sem efeito em produção: blocos do slug antigo em `BlogPost.tsx`; `hreflang="en-US"` duplicado em 8 páginas de Potomac/Kensington; lista legada em `scripts/generate-sitemap.ts`.
- Decisão do especialista de SEO sobre manter `Disallow: /*?blog=` e `?blogcategory=` para Googlebot (essas URLs têm 301 que o Google agora não verá).
- Fase 2 (entidade, medição, reputação) **não iniciada**, conforme instrução.
