# Cronograma de Verificação — Auditoria de Indexação (capitalcleancare.com)

> **Contexto crítico:** a auditoria recebida usa dados do **GSC de 11/06/2026**, anteriores a quase todo o trabalho recente (canonicals, links internos via RelatedPosts, redesign das 77 páginas de localização, galeria de vídeos). Além disso, o **noindex nas combinações cidade×serviço é INTENCIONAL** (poda anti-thin-content via `serviceLocationAllowlist.ts`). **Regra de ouro: verificar cada dado contra o estado ATUAL antes de qualquer ação. Nunca remover noindex em massa.**

---

## FASE 1 — Verificação imediata (código + URL ao vivo) — ✅ FEITO (25/06)

| # | Achado da auditoria | Como verificar | Resultado |
|---|---|---|---|
| V1 | "noindex em 43 págs = bug do template" | `grep` allowlist + robots ao vivo | ❌ **INTENCIONAL** — não estão na allowlist nem em static-city. Poda proposital. |
| V2 | "sitemap contém URLs noindex (crítico)" | `generate-sitemap.mjs` + sitemap ao vivo | ❌ **FALSO** — gerador filtra noindex (l.24); olney/apartment não está no sitemap |
| V3 | "21 redirect errors nos hubs de cidade" | `curl -I` hyattsville/bowie/laurel/college-park | ✅ **RESOLVIDO** — todos retornam 200, sem loop |
| V4 | "3 soft 404 (clean-service-*, services-areas)" | `curl -I` | ✅ **RESOLVIDO** — agora são 301 limpos |
| V5 | "robots.txt saudável" | `curl robots.txt` | ✅ Confirmado saudável |
| V6 | "conflito canonical × trailing slash" | `curl -I` páginas indexáveis | ✅ OK — no-slash 200, self-canonical |
| V7 | "/recurring-cleaning em 404+redirect" | `curl -I` | ⚠️ **REAL** — dá 404. Único achado verdadeiro → adicionar 301 → /services/recurring-cleaning |

**Conclusão Fase 1:** ~6 dos 7 achados "técnicos" estão desatualizados ou são intencionais. Único item real: o 404 de /recurring-cleaning.

---

## FASE 2 — Verificação via GSC URL Inspection API (Dia 2–3)

Objetivo: ver o status **ATUAL** no índice do Google (o snapshot 11/06 é velho). Ferramenta: `~/.claude/skills/seo/scripts/gsc_inspect.py --batch <urls.txt>`.

| Categoria | Amostra a inspecionar | O que confirmar |
|---|---|---|
| Crawled–not-indexed (51 location) | potomac-md/move-out, silver-spring/airbnb, ellicott-city/deep, downtown-dc/house | Pós-redesign (reviews reais + vídeo + conteúdo único): migraram p/ indexed? |
| Discovered–not-indexed (147 blog) | re-rodar o batch das 85 URLs de blog | Os links internos (RelatedPosts) destravaram alguma? |
| noindex (43) | washington-dc/apartment, arlington/move-out | Confirmar que GSC reporta "Excluded by noindex" = esperado/intencional |
| Contagem geral (122/318) | Coverage report no GSC (manual) | Número ATUAL de indexadas (deve ter subido) |

---

## FASE 3 — Monitoramento recorrente — SEMANAL (toda segunda-feira)

Rodar e registrar:
1. `gsc_inspect.py --batch` das ~20 URLs prioritárias → status no índice.
2. Contagem de indexadas no GSC (Coverage) → tendência.
3. Migração de categorias: discovered/crawled → **indexed**.

Meta: acompanhar até estabilizar (≈ 4–8 semanas após as mudanças + ações de autoridade).

---

## FASE 4 — Reavaliação e decisão — QUINZENAL

Só **depois** de verificar, decidir ações APROVADAS:
- **noindex:** NÃO remover em massa. Selecionar caso a caso por **impressões reais** (gsc_query por página) → mover só as que já têm demanda para `EXTRA_INDEXABLE_PAIRS`.
- **/recurring-cleaning:** adicionar 301 → /services/recurring-cleaning (rápido).
- **discovered (blog):** continuar links internos + autoridade (backlinks/GBP) — é o gargalo real.
- **Poda:** páginas que seguem fora e sem impressão → manter noindex (estratégia correta).

---

## Itens que NÃO precisam de ação (normais)
- 31 "alternate canonical" (versões com barra) · 20 "page with redirect" (www/http) · 2 "404" → comportamento esperado.
