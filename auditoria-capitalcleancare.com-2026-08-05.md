# Auditoria Executiva — capitalcleancare.com (05/08/2026)

> Método: auditoria do código-fonte de produção (o site é **pré-renderizado / SSG**, então o
> HTML publicado = o código deste repositório) + verificação de headers, sitemap, robots e
> pesquisa de concorrentes locais. A home ao vivo bloqueia bots (403 no fetch externo), então a
> evidência vem da fonte — que é autoritativa aqui. Nenhuma afirmação sem evidência (arquivo:linha).

## Nota Geral: 8,0/10

Este **não é um site amador** — é uma operação madura e bem construída: arquitetura de conversão
forte, SEO local de nível profissional (schema rico, 88+ páginas cidade×serviço indexáveis com
conteúdo local único, long-tail fino corretamente em `noindex`), marca coerente (verde/teal, fotos
e vídeos reais — sem "cara de site feito por IA") e performance já muito otimizada. O que separa o
site de um "9/10" são poucos itens concretos: **um segredo de webhook exposto no bundle** (permite
leads falsos), **atrito no formulário de orçamento** (6 campos obrigatórios, incluindo endereço
completo antes de qualquer resposta) e **dois headers de segurança ausentes** (HSTS e CSP). Corrigidos
esses, o site compete de igual para igual com as franquias nacionais que hoje dominam a busca local.

## Scorecard
| Dimensão | Nota | Resumo em 1 linha |
|---|---|---|
| Design & Identidade | 8,5/10 | Marca coesa, mídia real, profissional; home longa/densa demais |
| Conversão (CRO) | 8,0/10 | Arquitetura excelente; formulário pede endereço completo obrigatório (atrito) |
| SEO Local | 9,0/10 | Referência: schema, canonicals, noindex e conteúdo local único bem feitos |
| Segurança | 6,0/10 | Bom baseline, mas **segredo de webhook no bundle** + sem HSTS/CSP |
| Performance & Mobile | 7,0/10 | Muito otimizada (GA adiado, fontes self-hosted, LCP preload); home é o gargalo |
| Organização & Conteúdo | 8,5/10 | Navegação lógica, biblioteca enorme, bilíngue; 1 página fora do padrão SEO |

---

## 🔴 Críticos — corrigir esta semana (perdem dinheiro / expõem risco hoje)

### C1. Segredo de webhook exposto no JavaScript público
- **O quê:** o formulário envia leads para uma função Supabase autenticando com um segredo fixo no
  código do cliente.
- **Evidência:** `src/components/QuoteForm.tsx:119-124` →
  `fetch('https://jzxhejqokcjyxxklnnza.supabase.co/functions/v1/receive-lead' … 'x-webhook-secret': 'ccc-lead-webhook-2026')`.
  Esse valor é compilado no bundle e visível para qualquer pessoa (View Source / DevTools).
- **Impacto:** qualquer um pode disparar leads falsos no seu app de agendamento em massa (poluição
  do CRM, notificações falsas, possível abuso). O segredo "protege" nada.
- **Como corrigir:** mover a chamada `receive-lead` para uma **Netlify Function** server-side (o app
  já usa `/api/send-quote-email` — mesmo padrão) e guardar o segredo em variável de ambiente
  (`process.env`), nunca no cliente. Depois, **rotacionar o segredo** (`ccc-lead-webhook-2026` deve
  ser considerado comprometido). No lado Supabase, validar o segredo na Edge Function.

### C2. Atrito alto no formulário de orçamento (endereço completo obrigatório)
- **O quê:** para receber um orçamento o visitante precisa preencher **6 campos obrigatórios**:
  Tipo de serviço, Nome, Telefone, E-mail, CEP **e Endereço completo**.
- **Evidência:** `QuoteForm.tsx:392,409,413,417,421,427` (todos `required`, incluindo
  `Full Address *` na linha 424-427).
- **Impacto:** exigir o endereço residencial *antes de qualquer contato* é a maior fonte de abandono
  em formulários de serviço local — muita gente não entrega o endereço de casa só para "ver preço".
  O CEP já basta para orçar. Regra do setor: cada campo obrigatório a mais derruba a conversão.
- **Como corrigir (rápido, alto impacto):** tornar **Endereço completo opcional** (mantendo CEP
  obrigatório) — ou dividir em 2 passos ("Passo 1: serviço + CEP + contato → orçamento" / "Passo 2:
  endereço na hora de agendar"). Manter Nome, Telefone/E-mail e CEP como o núcleo obrigatório.

---

## 🟡 Importantes — próximas 2–4 semanas

### I1. Faltam HSTS e Content-Security-Policy
- **Evidência:** `public/_headers` define `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy` e `Permissions-Policy`, mas **não** `Strict-Transport-Security` nem
  `Content-Security-Policy`. O `netlify.toml` só tem `[[headers]]` de cache (linhas ~1877-1889),
  nenhum de segurança.
- **Impacto:** sem HSTS, a primeira visita em `http://` fica vulnerável a downgrade/SSL-strip antes
  do redirect 301 agir. Sem CSP, qualquer script injetado roda sem restrição.
- **Como corrigir:** adicionar em `public/_headers` no bloco `/*`:
  `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` e uma CSP inicial em
  modo report (começar permissiva por causa de GA/Supabase/tags, depois apertar).

### I2. NAP / privacidade — endereço residencial público precisa bater com o Google Business
- **O quê:** o endereço **4111 Postgate Terrace, Silver Spring, MD 20906** aparece no rodapé
  (`src/components/layout/Footer.tsx:148`) **e** no schema `LocalBusiness`
  (`src/data/business-info.ts:10-16`, usado em `SchemaMarkup.tsx`).
- **Impacto:** (a) negócios de área de atendimento normalmente **ocultam** o endereço no GBP; se o
  GBP oculta mas o site publica, o Google não casa o NAP (inconsistência) e ainda expõe um endereço
  residencial; (b) se o GBP mostra esse mesmo endereço, está consistente — mas confirme.
- **Como corrigir:** decidir uma política e aplicá-la nos dois lugares. Se for service-area,
  considerar exibir só "Silver Spring, MD" no site e manter o endereço só no schema `areaServed`.
  **Verificar que telefone (240) 704-2551, nome e endereço batem exatamente com o GBP.**

### I3. Consistência das alegações de prova social com o Google real
- **Evidência:** rating fixado em `5.0 / 45 reviews` (`business-info.ts:34-37`), refletido no
  schema `aggregateRating` (`SchemaMarkup.tsx:129-135`) e no badge do formulário
  (`QuoteForm.tsx:352`). A home também exibe "500+ Homes Cleaned" e "10+ Years"
  (`src/pages/Index.tsx:74-95`).
- **Impacto:** structured data de rating **precisa** refletir o GBP público, senão é risco de
  penalização de rich snippet. "500+ homes" e "10+ anos" são alegações de marketing — ok, mas devem
  ser verdadeiras e defensáveis.
- **Como corrigir:** manter `business-info.ts` como fonte única (já está — ótimo) e sincronizá-lo
  sempre que a contagem real de reviews mudar no Google.

### I4. Netlify Forms pode não estar capturando (fallback)
- **Evidência:** o form dá `POST` para `/` com `form-name=quote` (`QuoteForm.tsx:98-116`), mas não
  há um `<form data-netlify="true">` estático detectável no build para o Netlify registrar o
  formulário.
- **Impacto:** baixo — os leads ainda são capturados por 3 canais (Supabase, webhook, e-mail via
  função). Mas o "backup" Netlify Forms provavelmente é silenciosamente descartado.
- **Como corrigir:** ou adicionar o form estático oculto exigido pelo Netlify, ou remover a chamada
  Netlify Forms para não dar falsa sensação de backup.

---

## 🟢 Refinamentos — quando houver tempo

- **`MasterServicesPage` fora do padrão SEO:** monta `<title>`, `robots` e `canonical` à mão via
  `<Helmet>` (`src/pages/MasterServicesPage.tsx:64-69`) em vez do hook central `useSEO` — é a única
  página que pode "derivar" da fonte única de verdade. Migrar para `useSEO`.
- **H1 fora do tema em `/services/house-cleaning`:** o H1 é um slogan de benefício
  ("A Spotless Home, Without the…", `src/pages/services/HouseCleaningPage.tsx:327-330`), diferente
  de todas as outras páginas de serviço que usam H1 com keyword. Alinhar ao padrão
  ("House Cleaning in Montgomery County, MD").
- **Títulos hub↔filho quase idênticos:** "House Cleaning **Services** in {Cidade}" (hub) vs
  "House Cleaning in {Cidade}" (filho). Não são duplicados exatos, mas dá para diferenciar mais o
  intent (ex.: hub = "todos os serviços em {Cidade}", filho = foco em preço/checklist).
- **Home muito longa/densa:** ~13 seções na home (`Index.tsx`). Ótimo para SEO, mas considere
  garantir que o formulário/CTA principal seja alcançável rápido no mobile (âncora fixa) para não
  depender de scroll longo.
- **Barra de CTA fixa no rodapé mobile:** o header sticky já mantém "Free Quote" visível
  (`Header.tsx:39,157-163`), mas uma barra inferior fixa "Ligar | Orçamento" no mobile costuma
  levantar conversão em serviço local. O ícone de telefone no topbar mobile some abaixo de 390px
  (`Header.tsx:157` usa `hidden min-[390px]:flex`).

---

## Análise detalhada por dimensão

### 1. Design & Identidade — 8,5/10
Primeira impressão forte e honesta: hero com foto real da equipe (`HeroSection.tsx:41`, webp
eager + preload), barra de confiança com 6 selos reais ("Licensed & Insured", "EPA Safer Choice",
"5-Star Rated", "Satisfaction Guarantee", `Index.tsx:70-88`), galeria de transformações em vídeo e
depoimento em vídeo (`Index.tsx:117-128`). Paleta coerente com o nicho (verde `#1B3A2D` primário +
teal de acento, `index.html:41`) — nada de gradiente roxo / cara de template de IA. Fotos e vídeos
reais do negócio elevam a confiança acima de bancos de imagem. Único senão: a home é muito longa.

### 2. Conversão (CRO) — 8,0/10
Arquitetura de conversão de primeira: click-to-call em toda parte (topbar, nav, meio de página,
formulário — `Header.tsx:44,145,157,215`, `Index.tsx:221`, `QuoteForm.tsx:261,399`), CTA "Free
Quote" repetido a cada 1-2 seções, interrupt de CTA no meio (`Index.tsx:211-227`), estimador de
preço interativo + tabela (`Index.tsx:348-352`), garantia de 24h, e um estado de sucesso do
formulário caprichado (mockup de SMS, `QuoteForm.tsx:189-281`). Consentimento SMS/e-mail presente
(TCPA — `QuoteForm.tsx:499-521`). **O que segura a nota:** os 6 campos obrigatórios com endereço
completo (C2) e o segredo exposto que permite leads falsos (C1) — ambos afetam volume/qualidade de
lead diretamente.

### 3. SEO Local — 9,0/10 (o ponto mais forte)
- **Renderização:** SSG pré-renderizado — crawler sem JS vê H1 + 1.500+ palavras + schema
  (confirmado no `AUDIT.md` anterior e pela arquitetura de build em `package.json`).
- **Títulos/descrições:** únicos e específicos por serviço/cidade; hook central com corte em ≤70
  chars (`src/hooks/useSEO.ts:30-31`); 8 metaTitles distintos de serviço (`src/data/services.ts`);
  títulos por cidade em `src/data/locations.ts`. **O problema anterior de 12 pares hub↔serviço com
  título idêntico foi resolvido.**
- **Canonical + robots:** exatamente 1 canonical e 1 robots meta por página, fonte única
  (`useSEO.ts:63,78-84`); `noindex` decidido por denylist central (`src/data/noindexPaths.ts`) +
  allowlist de 88 pares estáticos + 26 extras (`src/data/serviceLocationAllowlist.ts:5-31,43-74`);
  páginas podadas usam `noindex,follow` (preserva link equity).
- **Schema:** amplo e correto — `LocalBusiness/HouseCleaner`, `Service`, `FAQPage`,
  `BreadcrumbList`, `BlogPosting`, `HowTo`, `CollectionPage`, `WebSite`, `ContactPage`,
  `AboutPage`, `Person` (`SchemaMarkup.tsx`). NAP consistente e completo, fonte única em
  `business-info.ts`. Higiene exemplar: itens `Review` só na `/reviews`; cidades usam só
  `aggregateRating` compartilhado (evita política de review-snippet falso — `SchemaMarkup.tsx:376-397`).
- **Conteúdo local único:** as páginas cidade×serviço indexáveis têm conteúdo real por cidade
  (bairros, faixas de m²/sqft, logística de estacionamento, FAQs locais — `house-cleaning-city-content.ts`,
  `CityPage.tsx:59-143`), não é troca de nome de cidade. As páginas finas templatizadas (53% de
  overlap) estão corretamente em `noindex`.
- **robots.txt/sitemap:** robots com regras por bot + `Sitemap:` (`public/robots.txt`); sitemap com
  **282 URLs** (`public/sitemap.xml`), 0 URLs sem página física (per `AUDIT.md`).

### 4. Segurança — 6,0/10
- **Bom:** HTTPS forçado com 301 (`netlify.toml:9-25`), 4 headers de segurança em `public/_headers`,
  GA/gtag adiado, Supabase carregado sob demanda.
- **Ruim:** segredo de webhook no bundle (C1) — o achado mais sério. Ausência de HSTS e CSP (I1).
- Auditoria passiva apenas — nenhum teste ativo de invasão foi feito.

### 5. Performance & Mobile — 7,0/10
Muito trabalho de performance já feito: gtag adiado 2s pós-load (`index.html:script`), fontes
self-hosted com `font-display:swap`, hero LCP com `<img>` eager + `preload`
(`HeroSection.tsx:5-6,41,45`), imagens lazy, cache imutável para assets hasheados
(`public/_headers`), HTML com `must-revalidate` (evita página desatualizada pós-deploy). **Gargalo
conhecido:** a **home** (Lighthouse mobile lab ~61 no `AUDIT.md` de 13/07; serviço 73, cidade 88) —
e a home ganhou depois carrossel de vídeos e vídeo de depoimento, que podem pesar. **Ação:** rodar
um **PageSpeed Insights real (mobile)** na home hoje e mirar LCP < 2,5s (o vídeo de transformações
não deve competir com o LCP do hero).

### 6. Organização & Conteúdo — 8,5/10
Navegação lógica (Home, Services c/ dropdown, Locations, Pricing, Resources, About, Contact —
`Header.tsx`), site **bilíngue EN/ES** com rotas `/es/*`, biblioteca de conteúdo enorme (106
páginas em `src/pages`, blog + hub de recursos + FAQs + calculadoras). Rodapé com NAP completo
(`Footer.tsx:148-150`). Senões: `MasterServicesPage` fora do padrão SEO e 1 H1 fora do tema
(ver 🟢).

---

## Comparação com concorrentes locais

Busca real (ago/2026) de "house cleaning Rockville MD" e "house cleaning Bethesda MD maid service"
— a página 1 é dominada por **franquias nacionais** e **agregadores**, e a Capital Clean Care **não
aparece ainda**:

| Concorrente | O que fazem que pode superar você | Onde você já ganha |
|---|---|---|
| The Maids (`maids.com/md/rockville`) | Autoridade de domínio nacional, processo "22-Step" documentado | Você é local/latino-owned real, não roteiro de franquia |
| Maid Bright, Maid Right | Páginas por cidade + booking online, muitos reviews | Seu schema/conteúdo local por cidade é tão bom ou melhor |
| Next Day Cleaning | Reforça "EPA-approved products" | Você tem EPA Safer Choice + 5.0 Google reais |
| Care.com / Homeaglow | Agregadores com preço-âncora baixo ($19-21/h) | Você vende confiança/segurança, não preço-commodity |

**Leitura estratégica:** o site já tem a arquitetura para vencer as franquias no orgânico local
(páginas cidade×serviço únicas + schema + prova social). O que falta é **sinal de autoridade**
(GBP forte, reviews crescendo, backlinks locais) e **conversão sem atrito** para transformar o
tráfego que essas páginas capturam. A vantagem competitiva a martelar em toda página:
*local, latino-owned, segurado, produtos EPA Safer Choice, 5.0 no Google* — exatamente o oposto do
"agregador barato" e mais humano que a "franquia nacional".

---

## Plano de 30 dias

**Semana 1 — parar o sangramento (Críticos)**
1. Mover a chamada `receive-lead` para uma Netlify Function server-side e **rotacionar** o segredo
   `ccc-lead-webhook-2026` (C1).
2. Tornar "Endereço completo" opcional no formulário (CEP continua obrigatório) OU dividir em 2
   passos (C2). Medir a taxa de submit antes/depois.

**Semana 2 — segurança e confiança (Importantes)**
3. Adicionar HSTS e uma CSP inicial em modo report no `public/_headers` (I1).
4. Confirmar NAP no Google Business Profile e alinhar política de endereço site↔GBP (I2); conferir
   que 5.0/45 bate com o Google real (I3).

**Semana 3 — performance e captura**
5. Rodar PageSpeed real na home, otimizar o que pesa acima do hero (vídeos), mirar LCP < 2,5s.
6. Resolver o backup do Netlify Forms (I4) — corrigir ou remover.

**Semana 4 — refinamentos e crescimento**
7. Migrar `MasterServicesPage` para `useSEO`; corrigir o H1 de `/services/house-cleaning` (🟢).
8. Avaliar barra de CTA fixa no rodapé mobile.
9. Iniciar rotina de reviews no Google (pedir a cada cliente) e 2-3 backlinks locais — o que falta
   para ultrapassar as franquias no mapa/orgânico.

---

*Auditoria gerada a partir do código-fonte de produção em 05/08/2026. Estimativas de impacto são
honestas por natureza ("tende a", "pode") — nenhum percentual foi inventado.*
</content>
</invoke>
