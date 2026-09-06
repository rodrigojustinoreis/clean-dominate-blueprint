# Fase 2 — Decisões de canibalização (2026-09-06)

Classificações: KEEP · CONSOLIDATE · REDIRECT · CANONICALIZE · NOINDEX · DISTINCT INTENT. "Evidência" = o que foi medido; "risco" = o que pode dar errado se a decisão estiver errada.

## Pares avaliados

| Par | Classificação | Evidência | Risco | Ação |
|---|---|---|---|---|
| `/deep-cleaning-germantown-md` (vanity, 301) → `/locations/germantown-md/deep-cleaning` (noindex) | **REDIRECT → alvo REINDEXADO** | GSC: a vanity ainda recebe 186/338 impr. e 2/1 cliques por semana; ao vivo, 301 para página com `noindex,follow`; página-alvo tem intro local (Churchill Village, Kingsview, ZIPs 20874–76), 888 palavras, template partilhado 52% com Gaithersburg deep (mesmo padrão das páginas cidade×serviço indexáveis) | baixo: reindexar uma página que já existe e recebe demanda via 301; reversível com uma linha | remover de `NOINDEX_PATHS`; entra no sitemap e nos blocos "related" automaticamente |
| `/resources/how-to-choose-cleaning-service-silver-spring` × `/resources/best-house-cleaning-service-silver-spring-md` | **CANONICALIZE** (antigo → novo) | mesmo intento declarado no H1 ("How to Choose a Cleaning Service in Silver Spring" × "How to Choose the Best House Cleaning Service in Silver Spring"); shingles: Jaccard 0,15, contenção 0,30; ambos linkados no mesmo bloco de 21–22 páginas da cidade; o novo é dedicado (2026-06, 965 palavras, foto própria), o antigo é post data-driven (2026-02, 731 palavras, capa Pexels) | médio-baixo: se o Google preferir o antigo, ignora o canonical (sem perda); a página antiga continua 200 | `canonical:` no post antigo → novo; relações manuais apontam para o novo; sai do sitemap e dos "related" (LINKABLE_POSTS já exclui canonicalizados). 301 só com dados do GSC |
| `/resources/house-cleaning-prices-maryland-2026` (title) | **KEEP + ajuste cirúrgico de snippet** | impressões 265 → 602 na semana com cliques 3 → 2; title "House Cleaning Cost MD: $150–$480+" era o único elemento com "MD"; H1, título de listagem, meta e resposta de abertura já dizem "Maryland House Cleaning Cost (2026): $150–$480+" | baixo-médio: mudança de title numa página em ascensão pode oscilar posição por dias; reversível; drift gate marcará `title_changed` (intencional) | title = H1; URL, H1, meta, conteúdo e estrutura intocados |
| `/services/office-cleaning` × `/resources/office-cleaning-small-business-dmv` | **DISTINCT INTENT** (serviço × guia) + link interno | sobreposição 7%/17%; guia tem 2 links de entrada e não aparecia no bloco "Guides & Resources" do serviço (feed por categoria, 6 mais novos); guia já linka de volta para o serviço; queda de impressões do serviço explicada pelos sinais de consulta (termos fora da área sumiram; "facility cleaning services" surgiu) | nenhum: acrescenta um link contextual | `MANUAL_GUIDES_FOR_SERVICE` lidera o bloco do serviço com o guia |
| `/pricing` × `/resources/house-cleaning-prices-maryland-2026` | **DISTINCT INTENT** | contenção 0,33 (tabelas de preço em ambas), mas intenção transacional (tabela + calculadora + formulário) × informacional (guia com FAQ); ambas com 1.200+ links de entrada | — | nenhuma |
| `/faq` × `/resources/faq` | **DISTINCT INTENT** (por ora) | Jaccard 0,01; 19 × 46 perguntas; H1 e seções diferentes; ambas FAQPage; nenhuma nos vencedores do GSC | consolidar sem dados por consulta poderia derrubar a que ranqueia | nenhuma; reavaliar com GSC por URL |
| `/resources/cleaning-service-alexandria-va` × `/locations/alexandria-va/house-cleaning` | **DISTINCT INTENT** | Jaccard 0,01; guia "como escolher" × página de serviço; plano de consenso: cluster ranqueia com 2 URLs | mexer no título do guia poderia perder o ranking atual | nenhuma |
| `/resources/cleaning-service-arlington-va` × `/locations/arlington-va/house-cleaning` | **DISTINCT INTENT** | idem (Jaccard 0,01) | — | nenhuma |
| `/resources/house-cleaning-guide-germantown-md` × `/locations/germantown-md/house-cleaning` | **DISTINCT INTENT** | Jaccard 0,00 | — | nenhuma |
| `/resources/deep-cleaning-rockville-md` × `/locations/rockville-md/deep-cleaning` | **DISTINCT INTENT** | guia informacional × serviço | — | nenhuma |
| variantes com barra final (10 amostras) | **KEEP** | todas 301 para a forma sem barra | — | nenhuma |
| `/blog/*` × `/resources/*` | **KEEP** | 301 catch-all + regras específicas verificadas | — | nenhuma |
| `www` × não-www | **KEEP** | 301 | — | nenhuma |
| `/services` (regra 301 no netlify.toml sombreada por arquivo estático) | **KEEP** | página-índice de serviços indexável e no sitemap; a regra é inerte | — | nenhuma (limpeza de config opcional) |
| `/resources/spring-cleaning-checklist-maryland-2026` × `/resources/deep-cleaning-tips-maryland-homes-spring-prep` | **observação** | contenção 0,30; intenções próximas (checklist × dicas) | — | fora do escopo desta fase |

## Pendentes (não implementados por falta de evidência)

| Item | O que falta |
|---|---|
| `/house-cleaning-wheaton-md` → `/locations/wheaton-md/house-cleaning` (noindex) | impressões/cliques da vanity no GSC; se houver demanda, reindexar o alvo como em Germantown |
| `/move-out-cleaning-rockville-md` → `/locations/rockville-md/move-out-cleaning` (noindex) | idem |
| `/deep-cleaning-kensington-md` → `/locations/kensington-md/deep-cleaning` (noindex) | idem |
| `/faq` × `/resources/faq` | consultas por URL para escolher a sobrevivente |
| 301 do guia antigo de Silver Spring | confirmação no GSC de que o Google adotou o canonical |

## Tabela URL a URL — antes → depois

| URL | Antes | Depois |
|---|---|---|
| `/locations/germantown-md/deep-cleaning` | 200, `noindex,follow`, fora do sitemap, alvo de 301 com demanda | 200, `index,follow`, no sitemap, canonical próprio, linkada pelos blocos "related" |
| `/deep-cleaning-germantown-md` | 301 → noindex | 301 → página indexável (sem mudança de regra) |
| `/resources/how-to-choose-cleaning-service-silver-spring` | 200, canonical próprio, no sitemap | 200, canonical → `/resources/best-house-cleaning-service-silver-spring-md`, fora do sitemap; **sem redirect** |
| `/resources/best-house-cleaning-service-silver-spring-md` | 200, no sitemap | idem (recebe as relações manuais) |
| `/resources/house-cleaning-prices-maryland-2026` | title "House Cleaning Cost MD: $150–$480+ \| Capital Clean Care" | title "Maryland House Cleaning Cost (2026): $150–$480+ \| Capital Clean Care"; H1/meta/URL/conteúdo iguais |
| `/services/office-cleaning` | bloco de guias sem o guia de pequenas empresas | guia lidera o bloco (+1 link contextual) |
| `/resources/office-cleaning-small-business-dmv` | 2 links de entrada | 3 links de entrada |

Nenhum redirect novo, nenhuma URL removida, nenhuma página criada.
