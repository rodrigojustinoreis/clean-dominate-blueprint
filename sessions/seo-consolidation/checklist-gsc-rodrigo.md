# Checklist Google Search Console — Capital Clean Care
**Atualizado em:** 2026-05-20  
**Deploy:** FASE 5 — 77 páginas cidade+serviço + 941 redirects 301

---

## 1. Como submeter o sitemap novo no GSC

**Objetivo:** informar o Google que existe um novo sitemap com 152 URLs canônicas.

**Passos:**
1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Selecione a propriedade `capitalcleancare.com`
3. No menu esquerdo, clique em **Sitemaps** (dentro de "Indexação")
4. No campo "Adicionar um novo sitemap", cole exatamente: `sitemap.xml`
5. Clique em **Enviar**
6. O GSC mostrará "Sitemap enviado com sucesso" e começará a processar

**Verificação:** Após 10–15 minutos, a coluna "URLs descobertas" deve subir para ~152. Se aparecer erro, verifique `https://capitalcleancare.com/sitemap.xml` no browser (deve renderizar XML válido).

> **Nota:** O sitemap antigo (sitemapindex com 4 sub-sitemaps) ainda vai aparecer listado. Pode deixar ou remover — o GSC processa ambos. O novo `sitemap.xml` é o canônico.

---

## 2. Como pedir reindexação das 11 city hubs mais importantes

**Objetivo:** acelerar a indexação das páginas de hub de cada cidade.

**As 11 URLs para inspecionar (em ordem de prioridade):**
1. `https://capitalcleancare.com/locations/rockville-md`
2. `https://capitalcleancare.com/locations/bethesda-md`
3. `https://capitalcleancare.com/locations/silver-spring-md`
4. `https://capitalcleancare.com/locations/gaithersburg-md`
5. `https://capitalcleancare.com/locations/north-bethesda-md`
6. `https://capitalcleancare.com/locations/potomac-md`
7. `https://capitalcleancare.com/locations/chevy-chase-md`
8. `https://capitalcleancare.com/locations/germantown-md`
9. `https://capitalcleancare.com/locations/wheaton-md`
10. `https://capitalcleancare.com/locations/olney-md`
11. `https://capitalcleancare.com/locations/kensington-md`

**Passos para cada URL:**
1. No GSC, clique na barra de inspeção de URL (topo da tela)
2. Cole a URL e pressione Enter
3. Aguarde o Google inspecionar (~5 segundos)
4. Clique em **"Solicitar indexação"**
5. Aguarde a confirmação "Indexação solicitada"
6. Repita para as 11 URLs

> **Limite:** O GSC permite ~10–15 solicitações de indexação manuais por dia. Faça em 2 dias se necessário.

---

## 3. Como monitorar a queda das "Descobertas — não indexadas"

**Onde ver:** GSC → Indexação → Páginas → filtro "Motivo: Descoberta — atualmente não indexada"

**Situação atual (pré-deploy):** ~350 URLs neste status — são as páginas alias antigas (maid-service, affordable-cleaning, etc.) que o Google descobriu mas não indexou.

**O que vai acontecer:**
- Semanas 1–2: o Google começa a rastrear os 941 redirects 301 → vai reconhecer que essas URLs redirecionam para canônicas
- Semanas 3–4: as URLs alias saem de "Descobertas" e entram em "Redirecionamento" ou simplesmente somem do relatório
- Semanas 4–6: a contagem de "Descobertas — não indexadas" deve cair significativamente

**Como acompanhar:**
1. GSC → Indexação → Páginas
2. Anote o número atual de "Descobertas — não indexadas" (baseline)
3. Verifique a cada 2 semanas
4. Meta: redução de 50%+ em 6 semanas, 80%+ em 3 meses

---

## 4. Como monitorar a queda dos 69 erros de Review snippets

**Onde ver:** GSC → Experiência → Dados estruturados → "Review snippet"

**O que são:** erros em marcação de schema `Review`/`AggregateRating` nas páginas antigas. As 77 novas páginas usam `AggregateRating` dentro do `LocalBusiness` schema (5.0 / 47 reviews), que é o formato correto.

**O que vai acontecer:**
- O Google vai rerastrear as páginas novas → validar os schemas → confirmar que `AggregateRating` está correto
- Os erros antigos vão sumindo à medida que as páginas antigas são substituídas pelos redirects

**Como acompanhar:**
1. GSC → Experiência → Dados estruturados → "Schema de avaliação"
2. Anote o número atual de erros (baseline: 69)
3. Verifique mensalmente
4. Para acelerar: use a ferramenta de [teste de resultados avançados do Google](https://search.google.com/test/rich-results) para validar uma página nova (ex: `capitalcleancare.com/locations/rockville-md/house-cleaning`)
5. Se a ferramenta mostrar `LocalBusiness` + `AggregateRating` válidos → o schema está correto

---

## 5. Como acompanhar Core Web Vitals em "Experience"

**Onde ver:** GSC → Experiência → Core Web Vitals → separado por Desktop/Mobile

**Métricas a observar:**
- **LCP (Largest Contentful Paint):** meta ≤ 2.5s (Bom). Atual (Lighthouse mobile, prod): ~4.1s — campo real pode ser melhor
- **CLS (Cumulative Layout Shift):** meta ≤ 0.1. Atual: 0.007 ✅
- **INP (Interaction to Next Paint):** meta ≤ 200ms

**Processo:**
1. GSC → Experiência → Core Web Vitals → Mobile
2. Veja as URLs agrupadas por status: "Bom", "Precisa melhorar", "Ruim"
3. Clique em "Ruim" para ver quais páginas estão abaixo do threshold
4. Use o relatório "Origens" para ver tendência ao longo do tempo

> **Nota:** O GSC mostra dados de campo (CrUX) — páginas novas levam 28 dias para aparecer, pois precisam de volume de visitas real. Não espere dados das novas páginas imediatamente.

---

## 6. Métricas a observar nos primeiros 30/60/90 dias

### Dias 1–30 (Rastreamento e primeiras indexações)
- [ ] Sitemap processado (GSC → Sitemaps → URLs descobertas ≈ 152)
- [ ] 11 city hubs aparecem em "Indexadas" (GSC → Indexação → Páginas)
- [ ] Pelo menos 20 das 77 novas páginas indexadas
- [ ] Redirects 301 reconhecidos (GSC → Segurança e ações manuais — deve estar limpo)
- [ ] Nenhum novo erro de cobertura para as páginas novas

### Dias 31–60 (Consolidação de indexação)
- [ ] 60+ das 77 páginas indexadas
- [ ] "Descobertas — não indexadas" caiu 30%+ em relação ao baseline
- [ ] Erros de Review snippets caíram 30%+
- [ ] Impressões no GSC (Desempenho → Resultados da Pesquisa) começa a subir para queries de cidade+serviço
- [ ] Primeiras aparições orgânicas para "house cleaning [cidade] MD" (posições 20–50)

### Dias 61–90 (Crescimento orgânico)
- [ ] Todas as 77 páginas indexadas
- [ ] Impressões totais aumentaram 20%+ vs baseline
- [ ] Cliques orgânicos de queries de localização aumentaram
- [ ] Posições médias para queries-alvo (ex: "house cleaning Bethesda MD") subindo
- [ ] Core Web Vitals: LCP mobile aparece no relatório de campo (dados reais)
- [ ] "Descobertas — não indexadas" caiu 60%+ vs baseline

**Onde ver tudo:** GSC → Desempenho → Resultados da Pesquisa → filtrar por "Página" com `/locations/` para isolar o tráfego das novas páginas.

---

## 7. Como confirmar que os 941 redirects 301 estão sendo processados pelo Google

**Método 1 — Inspeção de URL no GSC:**
1. GSC → Inspecionar URL
2. Cole uma URL antiga, ex: `https://capitalcleancare.com/locations/rockville-md/maid-service`
3. O GSC deve mostrar: "URL redireciona para" → `https://capitalcleancare.com/locations/rockville-md/house-cleaning`
4. Status: "Excluída" → motivo "Redirecionamento"
5. ✅ Isso confirma que o Google processou o 301

**Método 2 — Relatório de cobertura:**
1. GSC → Indexação → Páginas
2. Clique em "Excluída"
3. Filtre por "Redirecionamento"
4. A contagem aqui deve crescer ao longo de 4–8 semanas à medida que o Google rastreia os redirects
5. Meta: ~940 URLs aparecem como "Redirecionadas" (pode levar 2–3 meses para processar todas)

**Método 3 — Teste manual via curl (para verificação técnica rápida):**
```bash
curl -I https://capitalcleancare.com/locations/rockville-md/maid-service
# Deve retornar: HTTP/2 301 e Location: https://capitalcleancare.com/locations/rockville-md/house-cleaning
```

**O que fazer se redirects não forem processados:**
- Verifique o netlify.toml — os redirects precisam estar com `status = 301` e `force = true` ou sem force (para páginas que não existem como arquivos estáticos, `force` não é necessário)
- Use a URL Inspection do GSC para testar uma URL específica e confirmar que o redirect está ativo

---

## URLs de referência rápida

| Recurso | URL |
|---------|-----|
| GSC | https://search.google.com/search-console |
| Sitemap em produção | https://capitalcleancare.com/sitemap.xml |
| Teste de resultados avançados | https://search.google.com/test/rich-results |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Robots.txt | https://capitalcleancare.com/robots.txt |

---

*Gerado automaticamente em 2026-05-20 — FASE 5 do deploy SEO Capital Clean Care*
