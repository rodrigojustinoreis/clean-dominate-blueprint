# Auditoria da auditoria — canibalização e indexação

**Domínio:** `https://capitalcleancare.com`  
**Data da validação:** 7 de setembro de 2026  
**Escopo:** `/resources/` × `/blog/`, barra final, `www`, páginas antigas de cidade, relatórios de indexação do GSC e riscos antes de novas alterações.  
**Regra aplicada:** nenhuma página, canonical, redirect, sitemap ou estrutura foi alterada nesta análise.

## 1. Veredito geral

A alegação de **canibalização ampla e atual** está exagerada. O estado ao vivo não mostra duplicação indexável sistêmica entre `/blog/` e `/resources/`, entre URLs com e sem barra, entre `www` e sem `www`, nem entre as antigas URLs planas de cidade e suas páginas em `/locations/`.

Houve problemas históricos reais, mas grande parte já foi consolidada nas fases 2 e 3:

- URLs `/blog/*` antigas redirecionam para `/resources/*`.
- a barra final é normalizada para a versão sem barra;
- `www` redireciona para o host sem `www`;
- 11 URLs planas antigas de cidade/serviço hoje redirecionam em um salto para destinos ativos e indexáveis;
- três destinos que recebiam demanda por redirect, mas estavam `noindex`, foram corrigidos e publicados;
- o único par com sobreposição de intenção comprovada que ainda exige observação é o dos dois guias de Silver Spring.

Não existe um P0 de canibalização comprovado no estado atual.

## 2. Fontes e limite temporal

Foram cruzados:

- headers e HTML ao vivo do domínio;
- canonicals, meta robots e status atuais;
- `sitemap.xml` atual, com 299 URLs, todas no host sem `www`;
- inventário técnico do build publicado, com 1.226 páginas prerenderizadas, 299 no sitemap e 925 `noindex`;
- regras atuais do `netlify.toml`;
- relatórios das fases 2 e 3 e respectivos gates de produção;
- Google Search Console da propriedade de domínio.

O relatório de indexação do GSC foi atualizado em **3 de setembro de 2026**, antes da publicação da fase 3 em **7 de setembro de 2026**. Portanto, os totais de cobertura ainda não refletem integralmente o estado atual.

O acesso Semrush está ativo, mas o saldo de API é zero. Métricas novas de backlinks por URL não puderam ser obtidas. Consulte `https://www.semrush.com/mcp-access` para acesso de API. Onde cliques, queries, conversões ou backlinks por URL não estavam disponíveis, a conclusão é: **DADOS INSUFICIENTES PARA CONFIRMAR.**

## 3. Classificação dos achados

| Problema alegado | Status | Evidência | Impacto SEO atual | Ação necessária |
|---|---|---|---|---|
| `/resources/X` × `/blog/X` como duplicatas vivas | ❌ NÃO CONFIRMADO | Existe regra 301 específica e catch-all `/blog/* → /resources/:splat`. A amostra `/blog/how-much-does-deep-cleaning-cost` está fora do índice, classificada pelo GSC como “Page with redirect”; Google seleciona a canonical de `/resources/`. | Nenhuma competição atual nessa amostra; URLs `/blog/` não são duas páginas 200 indexáveis. | Manter redirects e links internos apontando ao destino final. |
| Barra final causando duas páginas 200 | ❌ NÃO CONFIRMADO | Dez amostras testadas retornam 301 da versão com barra para a versão sem barra. `/pricing/` está “URL unknown to Google”; só a versão sem barra consta no sitemap. | Sem duplicação indexável comprovada. | Manter normalização. Não criar novas regras redundantes. |
| `www` × sem `www` competindo atualmente | ❌ NÃO CONFIRMADO | `www` retorna 301 em um salto para `https://capitalcleancare.com/`; HSTS está ativo; sitemap usa apenas o host sem `www`. GSC: `www` não está indexada, motivo “Page with redirect”, e Google seleciona a canonical sem `www`. | Linhas históricas de performance não representam duas páginas ativas. | Manter como está. |
| URLs planas antigas de cidade × `/locations/` | ⚠️ PARCIALMENTE CONFIRMADO | O conteúdo histórico era 80–91% semelhante e a intenção era equivalente. Hoje todas as 11 URLs antigas testadas retornam 301 em um salto; os destinos são 200, indexáveis e self-canonical. | A competição atual foi eliminada. O problema existiu, mas está consolidado. | Manter os 301 permanentes e não recriar as URLs antigas. |
| Redirect de vanity para página `noindex` | ✅ CONFIRMADO HISTORICAMENTE, CORRIGIDO | Germantown, Wheaton house e Rockville move-out recebiam demanda em URLs antigas cujo destino estava `noindex`. Hoje os três destinos são 200/index/self-canonical e estão no sitemap correto. Wheaton apartment, antes 404 com 273 impressões/90d, também foi consolidada. | O vazamento de demanda foi corrigido em produção. | Monitorar indexação e queries em 7/14/30/60 dias. |
| Kensington deep deveria ser indexada | ❌ NÃO CONFIRMADO | A vanity tinha somente 55 impressões/90d. Hoje ela redireciona ao hub indexável de Kensington; o twin profundo continua `noindex`, fora do sitemap e sem links de páginas indexáveis. | Não há justificativa suficiente para criar mais uma página indexável semelhante. | Manter o hub como destino. |
| Dois guias de Silver Spring competem pela mesma intenção | ✅ CONFIRMADO, CONSOLIDAÇÃO AINDA EM PROPAGAÇÃO | H1/intenção equivalentes, contenção textual de 30%. Ambos ainda aparecem “URL is on Google”, mas a última leitura do Google é de 19/24 de julho, anterior à canonicalização. Ao vivo, o antigo declara canonical para o guia novo, saiu do sitemap e tem 2 links internos; o novo é self-canonical, está no sitemap e tem 21 links internos. | Existe sinal histórico de duas URLs indexadas para a mesma intenção. O Google ainda não recrawleou o estado novo no registro exibido. | Manter canonical reversível. Não aplicar 301 até nova inspeção confirmar adoção e até comparar queries/conversões. |
| “Alternate page with proper canonical tag” = canibalização | ❌ NÃO CONFIRMADO | GSC mostra 33 URLs, majoritariamente variantes com barra. Essas variantes hoje redirecionam; o relatório/validação é antigo. O estado significa que o Google reconheceu outra canonical, não que duas URLs estejam ranqueando. | Normalmente é sinal de consolidação, não um erro por si só. | Verificar apenas amostras que ainda retornem 200 e sejam indexáveis; não “corrigir” o total cegamente. |
| “Excluded by noindex” = canibalização | ❌ NÃO CONFIRMADO | GSC mostra 290, com exemplos de páginas programáticas de cidade/serviço. Uma página respeitada como `noindex` não é servida nos resultados e, portanto, não compete organicamente. | O risco real é excesso de URLs rastreáveis ou linkagem errada, não canibalização. | Manter `noindex` onde intencional; só promover mediante demanda e conteúdo local suficiente. |
| 16 “Redirect error” representam erro ativo | ⚠️ PARCIALMENTE CONFIRMADO / RELATÓRIO DESATUALIZADO | Os 16 exemplos tiveram último crawl entre 24/04 e 30/06. Todos os 16 foram testados agora: chegam a 200; os que redirecionam o fazem em um salto. | Não há erro ativo reproduzido. Alguns redirects antigos vão para hubs genéricos e merecem validação semântica. | Esperar recrawl e revisar os destinos genéricos antes de iniciar “Validate fix”. |
| `/faq` × `/resources/faq` | ❓ DADOS INSUFICIENTES | Jaccard 0,01; 19 × 46 perguntas; conjuntos e funções diferentes; ambas têm FAQPage. Faltam queries/conversões por URL. | Consolidar agora pode eliminar uma página útil sem prova de competição. | Manter ambas até obter dados por consulta/página. |
| Guias de custo × páginas comerciais | ❌ NÃO CONFIRMADO | `/pricing` é transacional; os guias de custo são informacionais. Alexandria/Arlington/Rockville têm sobreposição textual mínima ou intenção distinta e já enviam links à página comercial. | Podem ocupar etapas diferentes da jornada sem canibalização. | Manter e proteger vencedoras. |

## 4. Validação por família

### 4.1 `/blog/` × `/resources/`

O servidor não mantém duas versões 200 indexáveis para o mesmo slug. As URLs `/blog/` conhecidas são tratadas por regras específicas ou pelo catch-all 301. Exemplo comprovado:

| URL | HTTP atual | Indexação GSC | Canonical escolhida pelo Google | Sitemap | Links internos |
|---|---:|---|---|---|---:|
| `/blog/how-much-does-deep-cleaning-cost` | 301 → `/resources/how-much-does-deep-cleaning-cost` | Não indexada; “Page with redirect” | destino `/resources/` | Não | não deve receber novos links |
| `/resources/how-much-does-deep-cleaning-cost` | 200 | Indexável | self-canonical | Sim | 1.225 totais / 299 vindos de páginas indexáveis no inventário |

A página vencedora recebeu 29 cliques e 1.406 impressões em agosto, contra 6 cliques e 408 impressões em julho. É uma URL protegida.

Para CTR, posição, queries e backlinks de **cada** par `/blog/` × `/resources/`: **DADOS INSUFICIENTES PARA CONFIRMAR.** Isso não altera a conclusão técnica porque o lado `/blog/` não está ativo como página indexável.

### 4.2 Barra final

- `/pricing/`, `/about/`, `/faq/`, `/resources/faq/`, `/resources/how-much-does-deep-cleaning-cost/`, `/services/office-cleaning/`, `/locations/bethesda-md/deep-cleaning/`, `/es/`, `/es/areas/rockville-md/` e `/house-cleaning-near-me/` redirecionam para a forma sem barra.
- Nenhuma das amostras retorna 200 nas duas formas.
- `/pricing/` é desconhecida pelo Google; não está indexada nem vinculada a sitemap.
- Para algumas URLs `/blog/.../`, a plataforma pode produzir dois saltos por normalizar a barra antes da regra de migração. Isso é subótimo, mas não cria duas páginas 200 e permanece dentro de uma cadeia curta.

Conclusão: os dados históricos de variantes com barra não comprovam canibalização atual.

### 4.3 `www` × sem `www`

| Teste | Resultado |
|---|---|
| `https://www.capitalcleancare.com/` | 301 em um salto |
| Destino | `https://capitalcleancare.com/` — 200 |
| HSTS | `max-age=31536000` |
| Sitemap | 299/299 URLs sem `www`; 0 com `www` |
| GSC para `www` | Não indexada; “Page with redirect”; última leitura 02/09/2026 |
| Canonical do Google | `https://capitalcleancare.com/` |

Conclusão: as linhas históricas `www`/não-`www` do relatório de performance não representam duas páginas concorrentes hoje.

### 4.4 URLs antigas de cidade

Todos os pares abaixo têm equivalência de intenção suficiente para manter o 301. O destino foi verificado como 200, `index`, self-canonical e presente no sitemap.

| URL antiga | Destino atual | Evidência adicional | Vencedora |
|---|---|---|---|
| `/house-cleaning-wheaton-md` | `/locations/wheaton-md/house-cleaning` | 422 impressões/90d na antiga; destino agora tem 60 links internos, 15 de indexáveis | `/locations/.../house-cleaning` |
| `/apartment-cleaning-wheaton-md` | `/locations/wheaton-md/apartment-cleaning` | antiga era 404 com 273 impressões/90d; destino tem 61 links, 1 de indexável | `/locations/.../apartment-cleaning` |
| `/eco-cleaning-bethesda-md` | `/locations/bethesda-md/eco-friendly-cleaning` | equivalência serviço+cidade e padrão estrutural | destino `/locations/` |
| `/deep-cleaning-germantown-md` | `/locations/germantown-md/deep-cleaning` | antiga teve 186–338 impressões/semana e 1–2 cliques; destino tem 60 links, 8 de indexáveis | destino `/locations/` |
| `/move-out-cleaning-rockville-md` | `/locations/rockville-md/move-out-cleaning` | 207 impressões/90d; destino recebeu conteúdo próprio e tem 69 links, 13 de indexáveis | destino `/locations/` |
| `/house-cleaning-silver-spring-md` | `/locations/silver-spring-md/house-cleaning` | equivalência de intenção | destino `/locations/` |
| `/eco-cleaning-potomac-md` | `/locations/potomac-md/eco-friendly-cleaning` | equivalência de intenção | destino `/locations/` |
| `/deep-cleaning-gaithersburg-md` | `/locations/gaithersburg-md/deep-cleaning` | destino tem 61 links, 11 de indexáveis | destino `/locations/` |
| `/recurring-cleaning-columbia-md` | `/locations/columbia-md/recurring-cleaning` | equivalência de intenção | destino `/locations/` |
| `/deep-cleaning-kensington-md` | `/locations/kensington-md` | só 55 impressões/90d; twin profundo permanece noindex | hub de Kensington |
| `/eco-cleaning-chevy-chase-md` | `/locations/chevy-chase-md/eco-friendly-cleaning` | equivalência de intenção | destino `/locations/` |

Backlinks, leads, queries e posição por URL antiga em todos os pares: **DADOS INSUFICIENTES PARA CONFIRMAR.** Não há fundamento para inverter qualquer redirect hoje.

## 5. O que os relatórios do GSC realmente significam

### “Alternate page with proper canonical tag”

O Google encontrou uma URL alternativa e aceitou outra URL como canonical. A alternativa fica fora do índice. Isso não é necessariamente um problema e não comprova que ambas estejam dividindo rankings. Vira problema quando a canonical é incorreta, a URL preferida não é indexável, os sinais entram em conflito ou a intenção deveria permanecer separada.

Neste domínio, os 33 casos mostrados em 03/09 incluem sobretudo versões históricas com barra, hoje normalizadas por 301. O total está atrasado em relação ao estado de produção.

### “Excluded by noindex”

O Google rastreou a URL, leu `noindex` e não a serve na busca. Uma página `noindex` respeitada não compete por cliques orgânicos. Ela pode, porém, consumir rastreamento e revelar uma arquitetura excessivamente ampla.

O site possui cerca de 925 páginas `noindex` em 1.226 páginas prerenderizadas. Isso é um risco de escala/qualidade e eficiência de rastreamento, mas não deve ser resolvido indexando tudo. A fase 3 já reduziu links de páginas indexáveis para páginas `noindex` a duas exceções documentadas.

## 6. URL vencedora no único par ainda em observação

**URL A:** `/resources/how-to-choose-cleaning-service-silver-spring`  
**URL B:** `/resources/best-house-cleaning-service-silver-spring-md`  
**Principal recomendada:** URL B.

Justificativa:

- mesma intenção informacional declarada no H1;
- URL B é mais nova e mais profunda: 965 palavras contra 731;
- URL B está no sitemap e tem 21 links internos, 6 vindos de páginas indexáveis;
- URL A saiu do sitemap, tem apenas 2 links internos e declara canonical para B;
- ambas ainda constam como indexadas, mas o registro do Google é anterior à mudança;
- canonical reversível é mais prudente que 301 enquanto faltam queries, conversões e backlinks individuais.

Tratamento da secundária: manter 200 + canonical para B por enquanto. Avaliar 301 somente quando o GSC mostrar que B foi recrawleada, que Google escolheu B como canonical para A e que A não preserva demanda/conversões próprias.

## 7. Páginas protegidas

### ⚠️ NÃO ALTERAR SEM VALIDAÇÃO ADICIONAL

- `/resources/how-much-does-deep-cleaning-cost`
- `/resources/house-cleaning-cost-alexandria-va`
- `/resources/house-cleaning-cost-arlington-va`
- `/resources/house-cleaning-cost-rockville-md`
- `/resources/house-cleaning-prices-maryland-2026`
- `/locations/bethesda-md/deep-cleaning`
- `/locations/arlington-va/deep-cleaning`
- `/services/airbnb-cleaning`
- `/services/office-cleaning`
- `/services/house-cleaning` — landing do Google Ads; não usar como destino genérico nem alterar tracking/copy sem validação própria
- `/`
- `/es`

Essas URLs têm crescimento, demanda documentada, função comercial específica ou proteção operacional. Não mudar URL, H1, title, canonical, indexação ou estrutura ampla apenas para “corrigir canibalização”.

Featured snippets, backlinks importantes e leads por URL: **DADOS INSUFICIENTES PARA CONFIRMAR.**

## 8. Problemas novos ou riscos reais

1. **Cobertura desatualizada:** 513 não indexadas e 281 indexadas no GSC refletem atualização de 03/09, anterior ao deploy de 07/09.
2. **Escala de URLs:** 925 páginas `noindex` em 1.226 prerenderizadas. Antes de criar novas páginas cidade×serviço, exigir demanda real, conteúdo local próprio e capacidade de linkagem.
3. **Crawled / Discovered not indexed:** GSC mostra 50 rastreadas e 24 descobertas não indexadas. Isso aponta para seleção/qualidade/prioridade, não necessariamente canibalização. É necessário exportar e classificar as 74 URLs.
4. **Redirects genéricos:** pelo menos os antigos artigos de air vents e glass cooktop chegam ao hub `/resources`, não a uma página semanticamente equivalente. O status técnico está correto, mas a relevância do destino deve ser reavaliada com tráfego/backlinks antes de trocar.
5. **Regras duplicadas no `netlify.toml`:** algumas vanities aparecem mais de uma vez. O servidor hoje responde corretamente, mas a duplicação de configuração aumenta risco de divergência futura.
6. **Silver Spring ainda não consolidada no índice:** os dois guias continuam registrados como indexados com crawls de julho. É cedo para 301.

## 9. Plano técnico priorizado

### P0 — Crítico

Nenhuma mudança P0 comprovada. Não há redirect loop, canonical quebrada, dupla 200 sistêmica ou destino principal `noindex` reproduzido agora.

### P1 — Alta

| Tarefa | URLs | Alteração exata | Risco | Impacto esperado | Dificuldade | Validação |
|---|---|---|---|---|---|---|
| Confirmar propagação de Silver Spring | os dois guias | nenhuma mudança agora; reinspecionar após recrawl | baixo | evita 301 prematuro | baixa | Google-selected canonical, consultas e cliques por URL |
| Confirmar indexação das três páginas promovidas | Wheaton house/apartment; Rockville move-out | nenhuma mudança de conteúdo; inspeção e acompanhamento | baixo | captura demanda já comprovada | baixa | 200/index, sitemap, crawl, impressões e queries |
| Auditar 74 URLs não indexadas | 50 crawled + 24 discovered | exportar, agrupar por template/intenção e decidir individualmente | baixo | identifica páginas de baixa qualidade, órfãs ou redundantes | média | queda dos casos válidos sem perda de cliques |
| Reavaliar redirects para hubs genéricos | antigos air vents e glass cooktop, além dos 6 casos não exibidos inicialmente | só trocar se houver destino semanticamente equivalente e sinais históricos | médio | preserva relevância e backlinks | média | um salto, destino 200/index, equivalência e GSC |

### P2 — Média

| Tarefa | URLs | Alteração exata | Risco | Impacto esperado | Dificuldade | Validação |
|---|---|---|---|---|---|---|
| Medir FAQ por consulta | `/faq`, `/resources/faq` | nenhuma consolidação antes dos dados | alto se feita sem prova | clareza sobre possível sobreposição | baixa | queries, cliques, posição e conversões por URL |
| Revisar 404/soft 404 | 5 404 + 3 soft 404 do GSC | manter 404 quando removida sem equivalente; 301 somente com equivalência | médio | limpeza do índice | média | status real, links internos, recrawl |
| Reduzir regras duplicadas | `netlify.toml` | deduplicar em branch/preview sem mudar destinos | baixo | menor risco operacional | baixa | teste automatizado do mapa e crawl pré/pós |

### P3 — Baixa

| Tarefa | URLs | Alteração exata | Risco | Impacto esperado | Dificuldade | Validação |
|---|---|---|---|---|---|---|
| Observar cadeias `/blog/.../` | variantes com barra | manter enquanto ≤2 saltos; só mexer na configuração global com teste amplo | alto se Pretty URLs for desligado | ganho técnico pequeno | alta | mapa de redirects e regressão de todas as rotas |
| Higiene contínua | site todo | nenhum link novo para redirect/noindex sem motivo | baixo | rastreamento mais eficiente | baixa | crawl trimestral |

## 10. Mapa final de redirects comprovadamente necessários

Estes redirects já existem, foram validados ao vivo e devem ser preservados. **Nenhum redirect novo é recomendado agora.**

| URL origem | URL destino | Tipo | Motivo |
|---|---|---:|---|
| `/house-cleaning-wheaton-md` | `/locations/wheaton-md/house-cleaning` | 301 | mesma intenção; consolidar 422 impressões/90d históricas |
| `/apartment-cleaning-wheaton-md` | `/locations/wheaton-md/apartment-cleaning` | 301 | mesma intenção; antiga 404 com 273 impressões/90d |
| `/eco-cleaning-bethesda-md` | `/locations/bethesda-md/eco-friendly-cleaning` | 301 | mesma intenção serviço+cidade |
| `/deep-cleaning-germantown-md` | `/locations/germantown-md/deep-cleaning` | 301 | mesma intenção e demanda histórica comprovada |
| `/move-out-cleaning-rockville-md` | `/locations/rockville-md/move-out-cleaning` | 301 | mesma intenção; 207 impressões/90d |
| `/house-cleaning-silver-spring-md` | `/locations/silver-spring-md/house-cleaning` | 301 | mesma intenção serviço+cidade |
| `/eco-cleaning-potomac-md` | `/locations/potomac-md/eco-friendly-cleaning` | 301 | mesma intenção serviço+cidade |
| `/deep-cleaning-gaithersburg-md` | `/locations/gaithersburg-md/deep-cleaning` | 301 | mesma intenção serviço+cidade |
| `/recurring-cleaning-columbia-md` | `/locations/columbia-md/recurring-cleaning` | 301 | mesma intenção serviço+cidade |
| `/deep-cleaning-kensington-md` | `/locations/kensington-md` | 301 | hub indexável é mais seguro que twin profundo noindex de baixa demanda |
| `/eco-cleaning-chevy-chase-md` | `/locations/chevy-chase-md/eco-friendly-cleaning` | 301 | mesma intenção serviço+cidade |
| `/blog/*` | `/resources/:splat` ou regra específica equivalente | 301 | migração permanente da arquitetura editorial |
| `https://www.capitalcleancare.com/*` | `https://capitalcleancare.com/:splat` | 301 | host canônico único |
| qualquer URL válida com barra final | mesma URL sem barra | 301 | formato canônico único |

O guia antigo de Silver Spring **não entra** no mapa de 301 neste momento.

## 11. Checklist pós-implementação e monitoramento

### Sempre que uma mudança futura for aprovada

- [ ] origem retorna o status esperado;
- [ ] destino final chega em no máximo um salto, exceto limitação documentada de `/blog/.../`;
- [ ] destino é 200 e semanticamente equivalente;
- [ ] canonical do destino aponta para si mesma;
- [ ] meta robots permite indexação quando a página deve ranquear;
- [ ] origem saiu do sitemap e destino está nele;
- [ ] links internos apontam diretamente ao destino final;
- [ ] não há redirect loop, cadeia ou redirect para `noindex`;
- [ ] title, H1, schema, hreflang, telefone, formulário e tracking das páginas protegidas não regrediram;
- [ ] URL Inspection confirma crawl, canonical declarada e canonical escolhida;
- [ ] comparar impressões, cliques, CTR, posição, queries e leads antes/depois.

### 7 dias

- reinspecionar os dois guias de Silver Spring;
- inspecionar Wheaton house, Wheaton apartment e Rockville move-out;
- conferir se os redirects antigos continuam em um salto;
- registrar primeiras mudanças de cobertura, sem julgar sucesso por poucos dias.

### 14 dias

- comparar queries e páginas das três URLs promovidas;
- conferir se o guia antigo de Silver Spring mudou para “Alternate page with proper canonical tag” e se o Google selecionou o guia novo;
- revisar os 16 “Redirect error” depois de novos crawls; validar somente se o erro deixou de ser reproduzível em todas as amostras.

### 30 dias

- comparar cliques, impressões, CTR e posição contra os 30 dias anteriores;
- verificar perda em qualquer URL protegida;
- decidir sobre 301 de Silver Spring apenas com canonical adotada e ausência de demanda exclusiva no guia antigo;
- concluir a classificação das 50 crawled-not-indexed e 24 discovered-not-indexed.

### 60 dias

- avaliar consolidação de sinais e tendência de leads orgânicos;
- verificar se as URLs antigas aparecem como “Page with redirect” e se os destinos recebem as queries esperadas;
- revisar novamente a necessidade das páginas `noindex` em escala;
- manter, reverter ou ampliar apenas mudanças com evidência de ganho e sem regressão nas páginas protegidas.

## 12. Conclusão executiva

O que estava correto na hipótese: existiram duplicatas históricas de cidade, redirects para destinos `noindex` e um par de guias de Silver Spring com a mesma intenção. O que estava incorreto ou exagerado: tratar `/blog/` × `/resources/`, barra final, `www`, “Alternate canonical” e `noindex` como prova automática de canibalização atual.

O próximo movimento não é criar mais páginas nem aplicar redirects em massa. É deixar o Google recrawlear a publicação de 07/09, medir as páginas promovidas, confirmar a canonical de Silver Spring e investigar as 74 URLs não indexadas por qualidade e intenção.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel — Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
