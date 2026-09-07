# Fase 4 — Plano de autoridade para execução externa (2026-09-07)

Documento operacional para quem vai executar o outreach. Claude Code não conquista links nem edita perfis externos; nada aqui foi executado. Onde não há dado verificável no repositório, o campo fica como **a pesquisar**.

## 1. Baseline (07/09/2026)

| Fonte | Métrica |
|---|---:|
| Semrush Authority Score | 7 |
| Semrush domínios de referência / backlinks | 185 / 537 (toxicidade alta; 93% dos domínios com AS 0–10; 65 domínios de Singapura; âncoras com termos de compra de links e Telegram) |
| GSC (amostral) | 8 sites / 11 links externos: nextdoor.com (4), chamberofcommerce.com, findit.co.in, mapquest.com, netlify.app, uscity.net, whosmypro.com, x.com |
| Ações manuais | nenhuma — **não enviar disavow** com base só na toxicidade |

## 2. Meta

- **90 dias:** 8–12 novos domínios locais/relevantes, com pelo menos 4 links editoriais para páginas internas (guias ou páginas comerciais), sem crescimento de spam.
- **180 dias:** Authority Score de 7 para 10–12.
- Indicadores: novos domínios no GSC (relatório de links) e no Semrush; links para páginas internas vs. só home; zero novos domínios AS 0–10 de origem não local.

## 3. Categorias e alvos (a pesquisar — nenhum prospect foi verificado)

| Categoria | O que buscar | Página-alvo natural | Estado |
|---|---|---|---|
| Câmaras e associações locais | Chamber of Commerce de Montgomery County, Silver Spring, Bethesda-Chevy Chase, Rockville; associações de bairro (civic associations) | home, hub da cidade | a pesquisar (o link atual de `chamberofcommerce.com` é diretório, não câmara local) |
| Realtors / property managers | corretores e administradoras que indicam limpeza de move-out/move-in e pré-listing | `/services/move-out-cleaning`, `/resources/move-out-cleaning-checklist-maryland-tenants`, `/resources/deep-cleaning-before-selling-house` | a pesquisar |
| Mudanças e reformas | empresas de mudança, contractors e designers que entregam obra | `/services/post-construction-cleaning`, `/resources/post-renovation-cleaning-guide-maryland`, `/resources/post-construction-cleaning-montgomery-county-md` | a pesquisar |
| Mídia e blogs locais | jornais comunitários, newsletters de bairro, blogs de "moving to Silver Spring/Bethesda" | guias de custo (`/resources/house-cleaning-prices-maryland-2026`, `/resources/how-much-does-deep-cleaning-cost`) | a pesquisar |
| Fornecedores | fabricantes/distribuidores de produtos eco (páginas "where to find a pro" / parceiros) | `/why-eco-friendly-cleaning`, `/services/eco-friendly-cleaning` | a pesquisar (confirmar quais produtos a empresa realmente usa antes de citar marca) |
| Patrocínios comunitários reais | escolas, ligas esportivas, eventos de bairro que listam patrocinadores | home | a pesquisar (só se o patrocínio existir de fato) |
| Airbnb / hospedagem | grupos e blogs de hosts do DMV, co-hosts, administradoras de STR | `/services/airbnb-cleaning`, `/resources/airbnb-cleaning-checklist` | a pesquisar |
| Público sênior | organizações de apoio a idosos, comunidades (ex.: Leisure World), agências de home care | `/resources/house-cleaning-for-seniors`, `/resources/house-cleaning-seniors-silver-spring-leisure-world`, hubs sênior | a pesquisar |

## 4. Ativos linkáveis já existentes (sem inventar pesquisa ou números)

- Guias de custo com faixas reais praticadas: `/resources/how-much-does-deep-cleaning-cost` (Top 10), `/resources/house-cleaning-prices-maryland-2026`, custos por cidade (Rockville, Alexandria, Arlington, Silver Spring).
- Checklists: `/resources/move-out-cleaning-checklist-maryland-tenants`, `/resources/move-in-cleaning-checklist`, `/resources/airbnb-cleaning-checklist`, `/checklist` (50 pontos, lead magnet).
- Projeto real com fotos: `/resources/real-deep-cleaning-project-bethesda-home`.
- Conteúdo para público sênior e para donos de pets (segurança de produtos).
- Vídeos reais de antes/depois (galeria) e o vídeo do guia de intoxicação de pets.

Não criar "estudos" ou estatísticas para outreach: o site não tem pesquisa própria publicada.

## 5. Modelo de outreach (personalizado, sem troca ou pagamento por link)

Assunto: `[Nome do parceiro] — recurso local sobre [tema] para os seus [clientes/leitores]`

> Olá [nome], sou [nome], da Capital Clean Care, empresa familiar de limpeza residencial em Silver Spring que atende Montgomery County, DC e o norte da Virgínia.
> Vi que [página/post específico do parceiro] fala de [tema]. Temos um guia que responde exatamente à dúvida de [público]: [URL do guia], com [o que o guia entrega — checklist, faixas de preço reais, fotos de um projeto].
> Se fizer sentido para os seus leitores, fique à vontade para citar ou linkar. Também posso [oferta concreta e real: revisar o texto sobre limpeza, responder perguntas, participar de um evento].
> Obrigado, [nome, cargo, telefone (240) 704-2551].

Regras: um e-mail por contato, personalizado; sem oferta de pagamento, permuta de links ou "guest post" genérico; sem automação em massa; responder a quem retornar.

## 6. Planilha de controle sugerida

| Domínio | Página do parceiro | Contato (nome/e-mail) | Categoria | Relevância local (alta/média) | Página-alvo | Âncora esperada | Data do contato | Status (a contatar / enviado / respondido / publicado / recusado) | URL do link obtido | Follow/nofollow |
|---|---|---|---|---|---|---|---|---|---|---|

## 7. Regras de âncora

- Preferir marca ("Capital Clean Care"), URL nua ou frase natural ("guia de custo de deep cleaning em Maryland").
- Nunca pedir anchor text comercial exato ("house cleaning silver spring md") em escala.
- Aceitar nofollow de diretórios e perfis; buscar follow só em conteúdo editorial.

## 8. Backlog separado — citações e perfis externos (depois de confirmar o ZIP)

- Confirmar ao vivo o endereço/ZIP no Google Business Profile (decisão storefront × SAB registrada nas fases anteriores) antes de qualquer correção externa.
- Só então: corrigir BBB (perfil com ZIP errado, segundo o plano de consenso), Nextdoor, MapQuest, uscity.net, whosmypro.com e demais listagens; manter NAP idêntico a `BUSINESS_INFO` (nome, telefone (240) 704-2551, URL sem `www`).
- `sameAs` no site só recebe um perfil depois de verificado ao vivo (BBB incluído).
- Reavaliar backlinks tóxicos manualmente (origem, indexação, padrão) antes de qualquer disavow; hoje não há ação manual.
