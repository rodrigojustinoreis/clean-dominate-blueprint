# Nova Arquitetura SEO — Capital Clean Care
**Data:** 2026-05-19  
**Status:** Aprovado para implementação

---

## Resumo Executivo

| Métrica | Antes | Depois |
|---------|-------|--------|
| URLs totais indexáveis | ~980 | ~96 |
| Páginas cidade+serviço | 980 (thin) | 77 (autoridade) |
| Hubs de cidade | 49 (thin) | 11 (prioridade) + 38 (→ 301) |
| Hubs de serviço | 8 | 8 |
| Redirects 301 | 0 | 941 |
| Arquivos de netlify.toml | ~50 redirects | 305 novos + existentes |

---

## 1. Hierarquia de Páginas

```
capitalcleancare.com/
├── (home)                           ← Landing page principal
│
├── /maryland                        ← Hub regional MD
├── /virginia                        ← Hub regional VA
├── /washington-dc                   ← Hub regional DC
│
├── /services/
│   ├── house-cleaning               ← Hub nacional de serviço
│   ├── deep-cleaning
│   ├── move-out-cleaning
│   ├── airbnb-cleaning
│   ├── post-construction-cleaning
│   ├── office-cleaning
│   ├── recurring-cleaning
│   └── eco-friendly-cleaning
│
└── /locations/
    ├── rockville-md/                ← Hub de cidade prioridade
    │   ├── house-cleaning           ← Página cidade+serviço (MANTER)
    │   ├── deep-cleaning
    │   ├── move-out-cleaning
    │   ├── airbnb-cleaning
    │   ├── post-construction-cleaning
    │   ├── office-cleaning
    │   └── recurring-cleaning
    │
    ├── bethesda-md/                 (mesmo padrão — 7 serviços)
    ├── silver-spring-md/
    ├── gaithersburg-md/
    ├── germantown-md/
    ├── potomac-md/
    ├── chevy-chase-md/
    ├── north-bethesda-md/
    ├── wheaton-md/
    ├── kensington-md/
    ├── olney-md/
    │
    └── [38 cidades não-prioridade]  ← Todas → 301 /maryland ou /services/
```

---

## 2. Páginas a MANTER (96 páginas de destino)

### 2a. Núcleo do site (9 páginas)
| URL | Tipo |
|-----|------|
| `/` | Home |
| `/about` | Sobre |
| `/blog` | Blog index |
| `/blog/[slug]` | Posts individuais |
| `/contact` | Contato |
| `/reviews` | Reviews |
| `/faq` | FAQ |
| `/gift-cards` | Gift cards |
| `/pricing` | Preços |

### 2b. Hubs regionais (3 páginas)
| URL | Foco geográfico |
|-----|----------------|
| `/maryland` | Montgomery County MD |
| `/virginia` | Northern Virginia |
| `/washington-dc` | DC metro |

### 2c. Hubs de serviço (8 páginas)
| URL | Serviço | Intenção |
|-----|---------|----------|
| `/services/house-cleaning` | Limpeza residencial | Genérica / nacional |
| `/services/deep-cleaning` | Limpeza profunda | Problema específico |
| `/services/move-out-cleaning` | Mudança | Situação específica |
| `/services/airbnb-cleaning` | Airbnb/short-term rental | Nicho |
| `/services/post-construction-cleaning` | Pós-obra | Nicho |
| `/services/office-cleaning` | Comercial | B2B |
| `/services/recurring-cleaning` | Frequência semanal/quinzenal | Retenção |
| `/services/eco-friendly-cleaning` | Produtos verdes | Diferenciador |

### 2d. Páginas cidade+serviço — 77 páginas (11 cidades × 7 serviços)

| Cidade | Slug | Estado |
|--------|------|--------|
| Rockville | `rockville-md` | MD prioridade |
| Bethesda | `bethesda-md` | MD prioridade |
| Silver Spring | `silver-spring-md` | MD prioridade |
| Gaithersburg | `gaithersburg-md` | MD prioridade |
| Germantown | `germantown-md` | MD prioridade |
| Potomac | `potomac-md` | MD prioridade |
| Chevy Chase | `chevy-chase-md` | MD prioridade |
| North Bethesda | `north-bethesda-md` | MD prioridade |
| Wheaton | `wheaton-md` | MD prioridade |
| Kensington | `kensington-md` | MD prioridade |
| Olney | `olney-md` | MD prioridade (ZIP 20832) |

Cada cidade terá estas 7 páginas:
1. `house-cleaning` — "House Cleaning in [City], MD"
2. `deep-cleaning` — "Deep Cleaning Services in [City], MD"
3. `move-out-cleaning` — "Move Out Cleaning in [City], MD"
4. `airbnb-cleaning` — "Airbnb Cleaning in [City], MD"
5. `post-construction-cleaning` — "Post Construction Cleaning in [City], MD"
6. `office-cleaning` — "Office Cleaning in [City], MD"
7. `recurring-cleaning` — "Recurring House Cleaning in [City], MD"

### 2e. Hubs de cidade prioridade (11 páginas)
| URL | Página |
|-----|--------|
| `/locations/rockville-md` | Hub de cidade |
| `/locations/bethesda-md` | Hub de cidade |
| `/locations/silver-spring-md` | Hub de cidade |
| `/locations/gaithersburg-md` | Hub de cidade |
| `/locations/germantown-md` | Hub de cidade |
| `/locations/potomac-md` | Hub de cidade |
| `/locations/chevy-chase-md` | Hub de cidade |
| `/locations/north-bethesda-md` | Hub de cidade |
| `/locations/wheaton-md` | Hub de cidade |
| `/locations/kensington-md` | Hub de cidade |
| `/locations/olney-md` | Hub de cidade |

---

## 3. Estrutura de Redirects (Passo 3 — já implementado no netlify.toml)

### Regras implementadas (305 regras em 6 blocos)

| Bloco | Tipo | Quantidade | Descrição |
|-------|------|------------|-----------|
| Block 1 | 301 | 132 | Cidade prioridade + sinônimo → página canônica da cidade |
| Block 2 | 301 | 1 | Eco-friendly wildcard → /services/eco-friendly-cleaning |
| Block 3 | 200 | 77 | Cidade prioridade + canônico → pass-through SPA |
| Block 4 | 301 | 12 | Wildcard sinônimos → /services/ (cidades não-prioridade) |
| Block 5 | 301 | 7 | Wildcard canônicos → /services/ (cidades não-prioridade) |
| Block 6 | 301 | 76 | Hubs cidades não-prioridade → /maryland |

### Exemplos de redirects

```
# Sinônimo em cidade prioridade → página canônica local
/locations/rockville-md/maid-service   →  /locations/rockville-md/house-cleaning

# Sinônimo em cidade não-prioridade → hub de serviço
/locations/frederick-md/maid-service   →  /services/house-cleaning

# Página canônica em cidade não-prioridade → hub de serviço
/locations/frederick-md/house-cleaning →  /services/house-cleaning

# Hub de cidade não-prioridade → hub regional
/locations/frederick-md/               →  /maryland

# Eco-friendly em qualquer cidade → hub de serviço
/locations/rockville-md/eco-friendly-cleaning → /services/eco-friendly-cleaning
```

---

## 4. Mapa de Sinônimos → Canônicos (12 redirects)

| Sinônimo eliminado | → Canônico |
|--------------------|-----------|
| `maid-service` | `house-cleaning` |
| `residential-cleaning` | `house-cleaning` |
| `house-cleaning-near-me` | `house-cleaning` |
| `affordable-cleaning` | `house-cleaning` |
| `professional-maid-service` | `house-cleaning` |
| `best-cleaning-company` | `house-cleaning` |
| `top-rated-cleaners` | `house-cleaning` |
| `licensed-cleaning` | `house-cleaning` |
| `apartment-cleaning` | `house-cleaning` |
| `spring-cleaning` | `deep-cleaning` |
| `move-in-cleaning` | `move-out-cleaning` |
| `commercial-cleaning` | `office-cleaning` |

---

## 5. Estrutura de Conteúdo — Páginas Cidade+Serviço

Cada uma das 77 páginas deve conter:

### Template mínimo (800–1.200 palavras)
1. **Hero local** — H1 com cidade + serviço + qualificador ("Professional", "Eco-Friendly")
2. **Proposta de valor** — 3–4 bullets com benefícios específicos para aquela cidade
3. **O que incluímos** — lista do escopo do serviço
4. **Por que Capital Clean Care em [Cidade]** — trust signals locais
5. **Processo** — 3–4 passos (Agendar → Limpar → Inspecionar → Garantia)
6. **Preços** — tabela ou faixa (não é obrigatório)
7. **FAQ local** — 4–6 perguntas com respostas (rich snippets)
8. **Depoimentos locais** — 2–3 reviews de clientes da cidade
9. **Áreas próximas** — links internos para cidades vizinhas e hub regional
10. **CTA final** — "Get a Free Quote in [City]"

### Schema recomendado
- `LocalBusiness` com `areaServed: [City]`
- `Service` com `serviceType`
- `FAQPage` para a seção de FAQ
- `Review` / `AggregateRating`

### Links internos por página
- Hub da cidade: `/locations/[city]`
- Outros serviços na mesma cidade: `/locations/[city]/[outro-servico]`
- Hub do serviço: `/services/[servico]`
- Hub regional: `/maryland` (ou `/virginia` / `/washington-dc`)
- Home: `/`

---

## 6. Cronograma de Implementação

### Sprint 1 — Fundação (já concluído)
- [x] Passo 1: Mapeamento de URLs (mapeamento-urls.csv, redirects-301.txt)
- [x] Passo 3: Redirects no netlify.toml (305 regras)

### Sprint 2 — Conteúdo Rockville (validação de tom/qualidade)
- [ ] Passo 4a: 7 briefings de Rockville → revisão humana
- [ ] Escrever as 7 páginas de Rockville
- [ ] Deploy e teste de redirects
- [ ] Verificar Search Console após 2 semanas

### Sprint 3 — Conteúdo restante (70 páginas)
- [ ] Passo 4b: Briefings para as 10 cidades restantes (após aprovação de Rockville)
- [ ] Escrever as 70 páginas
- [ ] Deploy em lote

### Sprint 4 — Hubs e otimização
- [ ] Verificar e melhorar os 8 hubs de serviço (/services/)
- [ ] Verificar e melhorar os 11 hubs de cidade
- [ ] Melhorar os 3 hubs regionais
- [ ] Sitemap atualizado

---

## 7. Checklist de Deploy

Antes de publicar cada lote de páginas:
- [ ] Verificar que as URLs "manter" retornam 200
- [ ] Verificar que sinônimos retornam 301 para o canônico correto
- [ ] Verificar cidades não-prioridade retornam 301
- [ ] Testar com `curl -I [url]` para confirmar headers
- [ ] Submeter sitemap atualizado no Search Console
- [ ] Monitorar cobertura por 2 semanas antes do próximo lote

---

## 8. KPIs de Sucesso (90 dias)

| Métrica | Baseline | Meta |
|---------|---------|------|
| Páginas indexadas | ~30 (de 980) | 70–90 das 96 novas |
| "Discovered — not indexed" | 350 | < 50 |
| CTR médio | 0,6% | > 1,5% |
| Posição média | 28,2 | < 20 |
| Conversões orgânicas (quote form) | baseline | +30% em 90 dias |
