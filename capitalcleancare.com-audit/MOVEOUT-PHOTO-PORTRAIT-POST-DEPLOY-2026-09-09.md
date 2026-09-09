# Rockville move-out — foto do hero em pé — PUBLICADO 2026-09-09

**Escopo publicado:** somente a correção de apresentação da foto em https://capitalcleancare.com/locations/rockville-md/move-out-cleaning (branch `codex/moveout-photo-portrait`). O lote de remoção da contagem de avaliações (`codex/remove-review-count`, worktree `.worktrees/reviews-count`) NÃO foi publicado e permanece local.

## Release
- Base remota confirmada antes do merge: `origin/main` = c7b38d3 (nenhum deploy em andamento; publicado anterior 6aa0be0f / 2d6b566).
- Fast-forward no worktree `seo-release`: c7b38d3 → **66cef5b** (d282feb código, 7 linhas em `src/pages/locations/rockville-md/MoveOutCleaningPage.tsx`; 66cef5b evidências). Diff de fonte base→branch: 1 arquivo.
- Artefato de release (build sem IndexNow) idêntico ao build validado da worktree da foto: 2454/2454 HTML iguais após normalizar hashes, sitemap e CSS byte a byte; vs base c7b38d3 só o move-out mudou. Vitest 8/8 na árvore mesclada.
- Push normal (sem force) em **2026-09-09 02:54:28 UTC**. Netlify deploy **6aa0ca66f2c4560008400706** ready, commit 66cef5b, publicado **02:58:23 UTC**.
- **Rollback:** `netlify api restoreSiteDeploy` para **6aa0be0f58dea20008ee77fd** (commit 2d6b566).

## Validação ao vivo (produção × deploy anterior 6aa0be0f)
- Move-out: 200; title, meta, canonical, robots, H1, JSON-LD, texto visível, imagens (src/alt/dimensões), preloads, formulário e campos, tel e links editoriais idênticos. Diferença de HTML (hashes normalizados): 4 linhas — CSS crítico inline e o container do hero (classe + `aspect-ratio` 4/3→3/4). Marcação da foto em pé presente ao vivo.
- 14 páginas de controle idênticas (200/200): as 7 que usam a mesma foto (Chevy Chase hub e move-out, Howard County, North Bethesda move-out, /maryland, /virginia, /washington-dc), landing do Ads `/services/house-cleaning`, home, hub Rockville, deep/recurring/house Rockville, e `sitemap.xml`.
- Navegador (CDP) em produção: desktop container 420×560 (aspect-ratio "3 / 4"), img 760×570 natural, box 419×557, `matrix(0, 1, -1, 0, …)`, object-fit contain; mobile 358×477, box 356×475; 1 H1; overflow horizontal 0; imagens quebradas 0; **0 erros/exceções** (produção anterior: 0). Foto inteira, em pé, sem recorte (capturas em `moveout-photo-portrait-screenshots/production/`).
- Gate de drift ao vivo (23 URLs, baseline IDs 215–237): **0 crítico / 0 warning / 23 info**.
- Não executado por instrução: pedido de indexação, Ads/tracking, qualquer outra alteração.

Arquivos: `moveout-photo-portrait-live-check-2026-09-09.txt`, `moveout-photo-portrait-live-cdp-2026-09-09.txt`, `moveout-photo-portrait-live-drift-2026-09-09.json`.
