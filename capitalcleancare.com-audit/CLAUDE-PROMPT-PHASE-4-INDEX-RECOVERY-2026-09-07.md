# Prompt para Claude Code — Fase 4: recuperação de indexação e concentração de autoridade

Copie todo o bloco abaixo para o Claude Code no Antigravity.

---

Você é um especialista sênior em Technical SEO, SEO local, arquitetura de informação, indexação, React/Vite, Netlify, análise de canibalização e GEO para Google AI Overviews, AI Mode, ChatGPT e Gemini.

Trabalhe no repositório do site `capitalcleancare.com`. O objetivo desta fase é aumentar a proporção de páginas comerciais indexadas, concentrar autoridade nas URLs vencedoras e preparar o site para crescer em tráfego não branded. Não prometa Top 1 nem o dobro de tráfego imediatamente; use a meta de 90–180 dias e indicadores de 7/14/30/60 dias.

## 1. Leia estes documentos antes de qualquer alteração

1. `capitalcleancare.com-audit/LIVE-SEO-GEO-EVIDENCE-2026-09-07.md`
2. `capitalcleancare.com-audit/AUDIT-OF-CANNIBALIZATION-AUDIT-2026-09-07.md`
3. `capitalcleancare.com-audit/PHASE-3-POST-DEPLOY-REPORT-2026-09-07.md`
4. `capitalcleancare.com-audit/PHASE-3-LOTS-1-2-IMPLEMENTATION-REPORT-2026-09-07.md`
5. `capitalcleancare.com-audit/url-inventory-phase3-2026-09-07.csv`

Trate o relatório ao vivo como fonte de dados; não invente dados de GSC, Semrush, GA4, conversão, backlinks, avaliações, bairros, preços, licenças ou história da empresa.

## 2. Evidências que você deve preservar

- GSC 31/08–06/09 vs. 24/08–30/08: 36 vs. 45 cliques (-20%), 7.840 vs. 9.924 impressões (-21%), CTR 0,5% estável, posição média melhorou de 24,6 para 20,7.
- Semrush EUA em 06/09: 512 keywords, tráfego 83, branded 58, não branded 25, Authority Score 7.
- 343 keywords comerciais geram só 20 visitas estimadas; 16 transacionais geram 0.
- Concorrentes do mesmo porte orgânico: `ecoverdecleaning.com` (15 keywords/143 tráfego), `huffnpuffcleans.com` (82/100) e `rioscleaningservices.org` (21/35).
- Benchmarks: Solaris (223/600) e Emerald (222/996) vencem com poucas páginas/consultas locais em posições 5–7.
- Cobertura do GSC atualizada em 03/09; a Fase 3 foi publicada em 07/09. Não reaja a dados anteriores ao deploy como se fossem atuais.
- Das 50 URLs “crawled – not indexed”: 22 são redirects históricos, 8 são `noindex` intencionais e 20 são candidatas indexáveis.
- As 24 URLs “discovered – not indexed” respondem 200, têm `index`, canonical próprio e sitemap; o relatório mostra `Last crawl: N/A`.
- Testes ao vivo aprovados em 07/09: `/services/move-out-cleaning`, `/services/post-construction-cleaning` e `/locations/bethesda-md/airbnb-cleaning` têm fetch bem-sucedido, crawl e indexação permitidos e canonical próprio.
- Ações manuais: nenhuma. Problemas de segurança: nenhum.
- Só existe um sitemap enviado: `/sitemap.xml`, sucesso, última leitura em 05/09, 296 URLs descobertas. O sitemap publicado em 07/09 contém 299.
- Semrush: 185 domínios/537 backlinks, toxicidade alta, 93% dos domínios com AS 0–10 e âncoras de spam. GSC amostral: 8 sites/11 links externos.
- A entidade foi confundida com “Capitol Cleaners and Tailors” no Semrush AI. O código já contém `legalName`, `sameAs`, `#business` e texto de desambiguação; não duplique.

## 3. Restrições absolutas

1. Não altere produção, não faça merge em `main`, não faça push e não publique sem aprovação explícita.
2. Trabalhe em worktree limpa criada da `origin/main` mais recente, em branch `seo/phase-4-index-recovery`.
3. Preserve o checkout principal e qualquer trabalho não commitado de outras branches.
4. Não toque em `/services/house-cleaning` (landing do Google Ads), seu tracking ou comportamento.
5. Não altere agora:
   - `/resources/how-much-does-deep-cleaning-cost`;
   - `/locations/bethesda-md/deep-cleaning`;
   - `/locations/wheaton-md/house-cleaning`;
   - `/locations/wheaton-md/apartment-cleaning`;
   - `/locations/rockville-md/move-out-cleaning`;
   - home, About e os hubs de Silver Spring, Alexandria e Fairfax, salvo erro técnico comprovado;
   - bloco de roteamento de Bethesda, que continua em espera.
6. Não reverta melhorias de performance mobile, hidratação, gtag, preload, imagens ou content-visibility já publicadas.
7. Não crie novas páginas programáticas, páginas de cidade, páginas city×service ou artigos nesta fase.
8. Não transforme URLs `noindex` em indexáveis sem demanda comprovada no relatório.
9. Não crie redirects, canonicals, `noindex`, merges ou exclusões em massa.
10. Não adicione FAQPage visando rich result; não use HowTo schema; use INP, nunca FID.
11. Não adicione `sameAs` não verificado. BBB só pode entrar após o perfil/ZIP correto estar confirmado ao vivo.
12. Não envie disavow. A toxicidade do Semrush sozinha não prova link nocivo.
13. Não altere datas apenas para parecer conteúdo novo. `dateModified` só muda com alteração substantiva real.
14. Se uma tarefa já estiver corretamente implementada, registre `NO-OP — já correto`; não reescreva o código.

## 4. Fluxo obrigatório antes de editar

1. Rode `git status`, confirme worktree limpa e registre `main`, `origin/main` e commit-base.
2. Faça build de baseline, testes existentes, TypeScript e inventário completo de URLs.
3. Valide ao vivo com HTTP cada URL afetada: status inicial, cadeia de redirects, status final, canonical, robots e sitemap.
4. Compare cada arquivo candidato com os commits da Fase 3. Se o arquivo foi alterado em 07/09 por SEO, trate como protegido.
5. Crie `capitalcleancare.com-audit/PHASE-4-BEFORE-2026-09-07.md` com evidências e a lista exata de arquivos que pretende alterar.
6. Só então implemente os itens abaixo que passarem nos critérios. Um achado sem evidência deve ser marcado `DADOS INSUFICIENTES — NÃO ALTERADO`.

## 5. Escopo de implementação permitido

### P1 — Reforço contextual de indexação

Audite links internos **contextuais dentro do conteúdo principal** para estas URLs, nesta ordem:

1. `/services/move-out-cleaning`
2. `/services/post-construction-cleaning`
3. `/locations/bethesda-md/airbnb-cleaning`
4. `/locations/bethesda-md/office-cleaning`
5. `/locations/alexandria-va`
6. `/locations/washington-dc`
7. `/locations/georgetown-dc`
8. `/locations/rockville-md/recurring-cleaning`
9. `/locations/silver-spring-md/post-construction-cleaning`

Para cada destino:

- liste as fontes indexáveis que já apontam para ele;
- se já houver pelo menos dois links contextuais semanticamente relevantes, faça `NO-OP`;
- se não houver, adicione no máximo 2–3 links contextuais a partir de páginas indexáveis e realmente relacionadas;
- não conte header, footer, menu, breadcrumbs, cards globais ou links sitewide como reforço contextual;
- use âncora natural e específica, sem repetição exata em escala;
- não adicione texto genérico só para encaixar link;
- não linke para uma página `noindex`, redirect ou canonicalizada para outra URL;
- não altere o bloco de roteamento de Bethesda nesta fase. Para as duas URLs de Bethesda, use apenas fontes existentes fora desse bloco se houver contexto legítimo.

Fontes preferenciais, somente quando o contexto já existir: página nacional do mesmo serviço, hub da cidade, página estadual, guia diretamente relacionado e página `/services`. Não crie novos componentes sitewide.

### P1 — Higiene da descoberta

Confirme e corrija apenas falhas comprovadas:

- todas as 299 URLs indexáveis devem responder 200, ser prerenderizadas, ter canonical próprio, `index,follow` e estar uma única vez no `/sitemap.xml`;
- o sitemap não deve conter redirect, 404, canonical externo ou `noindex`;
- `robots.txt` deve apontar somente para `/sitemap.xml`;
- não deve existir link interno para `/sitemap-service-locations.xml` nem para outros sitemaps históricos;
- preserve o 404 real dos sitemaps históricos; não redirecione sitemap antigo para uma página HTML;
- confirme que as três páginas promovidas na Fase 3 permanecem indexáveis e no sitemap;
- preserve as oito exclusões intencionais descritas no relatório ao vivo.

Se todos os checks passarem, não altere sitemap/robots/redirects; registre `NO-OP`.

### P1 — Concentração de intenção

Crie uma matriz local, sem mudar páginas ainda, para estas famílias:

| Consulta/intenção | URL vencedora esperada |
|---|---|
| deep cleaning cost | `/resources/how-much-does-deep-cleaning-cost` |
| house/cleaning services Silver Spring | `/locations/silver-spring-md` |
| cleaning services Alexandria | `/locations/alexandria-va` |
| commercial/office cleaning DC | `/services/office-cleaning` |
| Airbnb turnover geral | `/services/airbnb-cleaning` |
| recurring cleaning Bethesda | `/locations/bethesda-md/recurring-cleaning` |

Para cada família, liste title, H1, canonical, links internos e URLs potencialmente concorrentes. Não redirecione nem reescreva com base apenas no Semrush. Marque `DADOS INSUFICIENTES` quando faltarem queries→páginas do GSC.

### P2 — Auditoria de qualidade das páginas locais

Existem 1.035 URLs sob `/locations/`, sendo 112 indexáveis e 923 `noindex`. Não crie mais.

1. Calcule similaridade por serviço usando shingles de 5 palavras no texto principal.
2. Gere tabela para as 112 indexáveis com: palavras, maior similaridade, página mais parecida, links internos, sitemap, canonical e data real de mudança.
3. Marque páginas com menos de 60% de conteúdo único para revisão.
4. Não aplique `noindex`, redirect, merge ou exclusão nesta fase. Entregue candidatos para aprovação humana.
5. Separe hubs, city×service bespoke e templates; não compare tipos de página diferentes como se fossem equivalentes.

Salve em `capitalcleancare.com-audit/phase4-location-quality-2026-09-07.csv` e `.md`.

### P2 — Entidade e GEO

Valide, sem duplicar:

- um único `@id` estável `https://capitalcleancare.com/#business` em todas as referências;
- `name`, `legalName`, telefone, URL, endereço, geo e `sameAs` vêm da fonte central `BUSINESS_INFO`;
- `sameAs` contém somente perfis oficiais verificados;
- Organization/LocalBusiness não conflitam em nome/endereço;
- a desambiguação “not a dry cleaner, tailor, or laundry service” continua visível;
- Person `#founder` permanece consistente;
- não existem claims não verificadas, estatísticas inventadas ou schema não visível na página.

Se tudo passar, faça `NO-OP`. Se houver conflito real, corrija somente a fonte central e prove o before/after.

### P2 — Relatório de autoridade para execução externa

Claude Code não pode conquistar backlinks nem editar perfis externos. Crie somente um documento operacional:

`capitalcleancare.com-audit/PHASE-4-AUTHORITY-OUTREACH-PLAN-2026-09-07.md`

Inclua:

- baseline: AS 7, 185 domínios no Semrush, 8 sites/11 links no GSC amostral;
- meta de 8–12 novos domínios locais/relevantes em 90 dias;
- categorias: câmaras, realtor/property manager, mudanças/reformas, mídia local, fornecedores e patrocínios comunitários reais;
- proposta de valor/linkable asset já existente, sem inventar pesquisa ou números;
- modelo de outreach personalizado, sem spam e sem troca/pagamento por link;
- planilha de controle sugerida com domínio, contato, relevância, página-alvo, status e link obtido;
- regra: âncoras de marca/URL/naturais; nunca anchor text comercial exato em escala;
- backlog separado para corrigir citações externas e BBB depois da confirmação do ZIP.

Não invente prospect, e-mail ou parceria. Se não houver dado verificável no repositório, deixe o campo como “a pesquisar”.

## 6. Não fazer agora

- Não alterar títulos/metas das páginas Top 10 nesta execução. Apenas proponha testes futuros no relatório.
- Não antecipar o bloco de Bethesda.
- Não editar o conteúdo das três páginas promovidas hoje.
- Não remover páginas só porque estão “crawled/discovered – not indexed”.
- Não criar sitemap segmentado novo.
- Não instalar plugin, mudar plano do Semrush ou consumir upgrade.
- Não realizar ações no GSC, GBP, BBB, Bing Places ou qualquer plataforma externa.

## 7. Validação obrigatória depois de qualquer mudança

1. Build completo.
2. Testes existentes.
3. `tsc --noEmit`, separando erros de baseline de erros novos.
4. Inventário das 1.226 URLs.
5. Checks explícitos:
   - indexáveis no sitemap = 299, salvo nova diferença comprovada;
   - 0 indexáveis com `noindex`;
   - 0 sitemap URLs com redirect/404/noindex;
   - 0 canonical ausente nas páginas indexáveis;
   - 0 hreflang inválido;
   - 0 novos links indexável→noindex, salvo exceções históricas já documentadas;
   - landing `/services/house-cleaning` idêntica à baseline;
   - nenhuma mudança em title/meta/canonical/schema/H1 das páginas protegidas.
6. Drift gate nas 23 URLs da baseline atual. Resultado exigido: 0 crítico; todo warning deve ser explicado e estar dentro do escopo aprovado.
7. Teste HTTP ao vivo ou em emulador fiel da Netlify para toda URL afetada.
8. Preview Netlify, nunca produção.

## 8. Commits e entregáveis

- Faça um commit atômico por item realmente alterado.
- Não crie commit vazio para item `NO-OP`.
- Entregue:
  1. `PHASE-4-BEFORE-2026-09-07.md`;
  2. matriz query→página;
  3. auditoria de qualidade local `.csv` e `.md`;
  4. plano de autoridade externo;
  5. `PHASE-4-IMPLEMENTATION-REPORT-2026-09-07.md`;
  6. relatório before/after por URL e arquivo;
  7. resultado de build/test/tsc/inventário/drift;
  8. URL do preview;
  9. lista exata de commits;
  10. risco e rollback;
  11. recomendação final `GO`, `GO COM RESSALVAS` ou `NO-GO` para publicação.

No fim, pare e peça aprovação. Não faça merge, push ou deploy em produção.

## 9. Lista manual de indexação — não execute

No relatório final, deixe estas URLs como fila sugerida para inspeção/solicitação manual no GSC, sem clicar no botão:

1. `https://capitalcleancare.com/services/move-out-cleaning`
2. `https://capitalcleancare.com/services/post-construction-cleaning`
3. `https://capitalcleancare.com/locations/bethesda-md/airbnb-cleaning`
4. `https://capitalcleancare.com/locations/bethesda-md/office-cleaning`
5. `https://capitalcleancare.com/locations/wheaton-md/house-cleaning`
6. `https://capitalcleancare.com/locations/wheaton-md/apartment-cleaning`
7. `https://capitalcleancare.com/locations/rockville-md/move-out-cleaning`
8. `https://capitalcleancare.com/locations/alexandria-va`
9. `https://capitalcleancare.com/locations/washington-dc`
10. `https://capitalcleancare.com/locations/georgetown-dc`

Antes de recomendar cada solicitação, confirme novamente 200, index, canonical próprio, sitemap e teste ao vivo. Se uma URL já estiver indexada no momento da execução, retire-a da fila.

---
