# Rockville move-out — foto do hero em pé (apresentação) — 2026-09-08

**Status:** implementado e validado LOCALMENTE. Sem merge, push ou deploy (aguarda confirmação de publicação).
**Branch:** `codex/moveout-photo-portrait` (worktree `.worktrees/moveout-photo-portrait`), base `origin/main` c7b38d3. Commit do código: **d282feb**.
**URL afetada:** https://capitalcleancare.com/locations/rockville-md/move-out-cleaning (única página alterada).
**Preview local:** http://127.0.0.1:4197/locations/rockville-md/move-out-cleaning (`serve_dist.py` do dist desta worktree, pid 53004; servidor preexistente 4187/PID 24844 não foi tocado).

## Mudança (1 arquivo, 7 linhas)
`src/pages/locations/rockville-md/MoveOutCleaningPage.tsx`: `heroAspectRatio="3/4"` e `heroImageContainerClassName` com `max-w-[420px] mx-auto` + variantes de filho direto `[&>img]:absolute [&>img]:left-1/2 [&>img]:top-1/2 [&>img]:h-3/4 [&>img]:w-[133.333333%] [&>img]:max-w-none [&>img]:-translate-x-1/2 [&>img]:-translate-y-1/2 [&>img]:rotate-90 [&>img]:object-contain` (precedente: `[&>header]` em DeepCleaningPage). Foto inteira, girada 90° horário, sem recorte. Sem `<style>`, sem alterar `HeroLocation`, sem novo asset, mesmo bitmap/EXIF/src/alt/preload, sem alteração de texto/SEO.
A versão anterior com `<style dangerouslySetInnerHTML>` gerava 5 erros de hidratação (#418/#422) no build local e foi descartada.

## Gates
- Build sem IndexNow: ok. Vitest 8/8 (warnings `act(...)` pré-existentes). tsc 35 = 35, idêntico por diagnóstico/arquivo vs c7b38d3. ESLint sem novos avisos.
- Comparação dist novo × dist do release c7b38d3 (`.worktrees/seo-release/dist`): 2454/2454 HTML; após normalizar só hashes de `/assets/`, mudou apenas o move-out (index.html + alias .html). Sitemap idêntico (300 URLs). Na página: title, meta, canonical, robots, H1, H2/H3, OG/Twitter, hreflang, JSON-LD, texto visível, img src/alt/dimensões/loading, preloads, forms/campos, tel e links editoriais (comparados exatos) idênticos. Diferenças: classe do container e `aspect-ratio` 4/3→3/4 (+ CSS crítico inline). CSS: 11 regras adicionadas, 0 removidas. 16 páginas usam o mesmo asset; 15 inalteradas.
- Hidratação/erros (CDP): local 0 vs produção 0 (desktop e mobile 0).
- Geometria computada: desktop container 420×560 (aspect-ratio "3 / 4", overflow hidden), img natural 760×570, box 419×557, `matrix(0, 1, -1, 0, …)`, object-fit contain, position absolute; mobile 358×477, box 356×475; 1 H1; overflow horizontal 0; imagens quebradas 0.

## Capturas (viewport 1440×900 e 390×844)
- `capitalcleancare.com-audit/moveout-photo-portrait-screenshots/moveout-desktop-fold.jpg`
- `capitalcleancare.com-audit/moveout-photo-portrait-screenshots/moveout-desktop-hero.jpg`
- `capitalcleancare.com-audit/moveout-photo-portrait-screenshots/moveout-mobile-fold.jpg`
- `capitalcleancare.com-audit/moveout-photo-portrait-screenshots/moveout-mobile-hero.jpg`
Saídas dos gates: `moveout-photo-portrait-comparison-2026-09-08.txt`, `moveout-photo-portrait-cdp-2026-09-08.txt`.

## Publicação (quando autorizada)
Fluxo seguro: `git fetch`, confirmar `origin/main` = c7b38d3, ff-merge deste branch no worktree `seo-release`, push normal (sem force), aguardar deploy Netlify, validar ao vivo × deploy anterior (rollback: 6aa0be0f58dea20008ee77fd).
