# Fase 5 — Guia "How to Clean Hardwood Floors After Construction" — Relatório de implementação (2026-09-07)

## Resumo

Nova página informacional `/resources/how-to-clean-hardwood-floors-after-construction` implementada na worktree `.worktrees/blog-hardwood-post-construction`, branch `seo/blog-hardwood-post-construction` (base `origin/main` @ `a9ba96e`, a mais recente). **Nenhum merge, push ou deploy de produção.** Preview em rascunho na Netlify (com `X-Robots-Tag: noindex`), pronto para revisão.

| Item | Valor |
|---|---|
| Preview (rascunho) | https://6a9f3db083c75d1a98586863--vocal-paprenjak-561aa9.netlify.app/resources/how-to-clean-hardwood-floors-after-construction |
| Deploy log | https://app.netlify.com/projects/vocal-paprenjak-561aa9/deploys/6a9f3db083c75d1a98586863 |
| Worktree raiz | não tocada (`preview/home-design-batch-1`, 8 arquivos não commitados preservados) |
| Originais | `.design/blog-hardwood-post-construction/originals/` (não rastreados, hashes iguais aos de `/tmp/capital-hardwood-input.2NUp1X/`): IMG_0072.mov, IMG_0075 (hero), IMG_0080 (interna), IMG_0077 (redundante, não usada) |

## Commits (branch `seo/blog-hardwood-post-construction`)

| # | Commit | Conteúdo |
|---|---|---|
| 1 | `b4e2be3` | mídia: `public/images/blog/hardwood-post-construction/` (hero-portrait 960×1280 + 640×853, hero-og 1200×630, hero-800x450, step6-final-pass 1200×800 + 640×427, video-poster 720×1280) e `public/videos/hardwood-final-pass.{mp4,webm}` |
| 2 | `62566d5` | `src/pages/HowToCleanHardwoodFloorsAfterConstruction.tsx` + registro em `AppRoutes.tsx`, `AppRoutesLazy.tsx`, `prerender.tsx`, `pages/Blog.tsx` (listagem), `data/related-content.ts` (MANUAL_RELATED_POSTS + entradas recíprocas) |
| 3 | `7165e50` | 1 link recíproco em `HowToCleanHardwoodFloorsNaturally.tsx` (após o bloco "know what kind of floor you have") e 1 no bloco "Keep reading" de `PostConstructionCleaningMontgomeryCounty.tsx` |
| 4 | `4d5a0b9` | meta description final (137 caracteres, texto do proprietário) |
| 5 | docs | este relatório, BEFORE, inventário, drift, checks, scripts, screenshots, `public/sitemap.xml` regenerado |

Arquivos de código alterados: 9 (1 novo). Nenhuma página protegida, landing do Ads ou conteúdo não relacionado foi tocado.

## Posicionamento e matriz consulta → URL

| Consulta (Semrush US, 07/09/2026) | Intenção | Volume | KD | CPC | Competição | URL alvo | Uso na página |
|---|---|---:|---:|---:|---:|---|---|
| how to clean hardwood floors after construction | I | — (alvo semântico primário) | — | — | — | **nova página** | title, H1, resposta direta, bloco citável |
| how to clean construction dust from floors | I | 90 | 20 | $0.44 | 1.00 | nova página | H2 "safest way to remove construction dust…", FAQ, keywords meta |
| how to clean up construction dust | I | 110 | 20 | $0.65 | 0.94 | nova página (secundária) | corpo, naturalmente |
| cleaning construction dust | I | 70 | 19 | $2.94 | 0.89 | nova página (secundária) | corpo |
| how to clean hardwood floors | I | 90.500 | 33 | $0.22 | — | `/resources/how-to-clean-hardwood-floors-naturally` (dono do tema amplo) | só onde gramaticalmente necessário; link para o guia existente |
| wood floor cleaning service | C | 2.900 | 27 | $4.40 | — | `/services/post-construction-cleaning` (ponte) | 1 menção na passagem de decisão |
| hardwood floor cleaning service | C | 1.300 | 16 | $3.91 | — | idem | 1 menção na passagem de decisão |
| professional hardwood floor cleaning | C | 480 | 6 | $3.04 | — | idem | não usado literalmente; coberto por "professional post-construction cleaning" no FAQ |
| post construction cleaning | I | 22.200 | 15 | $6.71 | — | `/resources/post-construction-cleaning-montgomery-county-md` (guia regional) | link contextual |
| post-construction cleaning | C | 1.600 | 15 | $6.71 | — | `/services/post-construction-cleaning` | CTA / link |
| after construction cleaning services | C | 390 | 11 | $6.13 | — | `/services/post-construction-cleaning` | não repetido literalmente |
| residential post construction cleaning | C | 40 | 15 | $7.49 | — | idem | — |
| after construction cleaning service | C | 30 | 8 | $6.64 | — | idem | — |

PAA da SERP ao vivo cobertas: "How to clean construction dust from hardwood floors?" (H2 + FAQ 1), "What is the best way to clean floors after construction?" (H2 safest way + resposta direta), "How long does it take for dust to settle after construction?" (H2 dry-first: depende de ventilação/HVAC/volume, sem número universal), "How to clean hardwood floors after renovation?" (título/H1 + processo).

## Checagem de canibalização (build)

| URL | Title | H1 | Sobreposição de shingles (5 palavras) com a nova página | Intenção |
|---|---|---|---:|---|
| nova `/resources/how-to-clean-hardwood-floors-after-construction` | How to Clean Hardwood Floors After Construction \| Capital Clean Care | How to Clean Hardwood Floors After Construction | — | poeira fina/drywall em hardwood após obra; processo técnico |
| `/resources/how-to-clean-hardwood-floors-naturally` | How to Clean Hardwood Floors Naturally (Without Damaging the Finish) | How to Clean Hardwood Floors Naturally | 6,4% | manutenção rotineira/natural; dono de "how to clean hardwood floors" |
| `/resources/post-construction-cleaning-montgomery-county-md` | Post-Construction Cleaning in Montgomery County, MD: A Guide | Post-Construction Cleaning in Montgomery County, MD | 4,1% | pós-obra geral, regional |
| `/resources/post-renovation-cleaning-guide-maryland` | Post-Renovation Cleaning Guide for Maryland Homeowners | idem | 4,0% | pós-reforma geral, MD |
| `/services/post-construction-cleaning` | Post-Construction Cleaning in MD, DC & VA \| Capital Clean Care | Post-Construction Cleaning in Maryland, Washington DC & Northern Virginia | 0,0% | transacional |

Titles/H1/canonicals das quatro páginas existentes inalterados; a sobreposição textual máxima é 6,4% (a rotina de manutenção só é citada para o link).

## Estrutura e GEO

- Hero em duas colunas no padrão do site (bg-mesh, pílula glass, H1 com palavra em gradiente, foto vertical 3:4 em card `rounded-[2rem]`, largura total no mobile). Foto inteira, sem corte nem distorção, preservando rosto, profissional, máquina e piso, conforme a revisão visual; 16:9 só em `og:image` (1200×630) e na `ImageObject` do BlogPosting (800×450, que é o tamanho que o componente declara).
- Resposta direta: 58 palavras. Bloco citável autônomo: 167 palavras. Corpo do artigo ≈ 2.000 palavras (3.864 contando blocos relacionados).
- H2 em forma de pergunta: safest way; why dry first; o processo de 7 passos (H3 por passo); what never to use; paint/adhesive/grout haze (tabela residue → safe first action → stop/escalate); when to stop DIY; FAQ; Sources.
- FAQ visível (H3 + parágrafo, texto no HTML), **sem** FAQPage; **sem** HowTo, rating ou review.
- Byline "By Rodrigo Reis, Owner · MD · DC · VA · September 7, 2026" com `<time datetime="2026-09-07">`; AuthorBio existente via RelatedPosts.
- Referências locais (Maryland, Washington DC, Northern Virginia) apenas na passagem de decisão/CTA.
- Schema: BlogPosting (author `#founder`, publisher `#business`, datePublished 2026-09-07, ImageObject), BreadcrumbList (Home → Resource Center → página), VideoObject (duração PT9S, uploadDate 2026-09-07, publisher `@id #business`, poster e MP4).
- Links internos: `/services/post-construction-cleaning` (2×), `/resources/how-to-clean-hardwood-floors-naturally`, `/resources/post-construction-cleaning-montgomery-county-md`, mais os automáticos de RelatedPosts. Recíprocos: 1 em cada um dos dois guias.
- Categoria automática pela regra de slug: `cleaning-tips` (`/resources/cleaning-tips`); listagem `/resources` já mostra o post (mais recente).

## Fontes citadas (seção Sources)

- NWFA — https://woodfloors.org/maintenance/ (bare-floor setting; sem wet/steam mop; produto do acabamento)
- OSHA 29 CFR 1926.1153 — https://www.osha.gov/laws-regs/regulations/standardnumber/1926/1926.1153 (dry sweeping/brushing inadequados quando contribuem para exposição; HEPA vacuuming). O texto diz explicitamente que nem toda poeira de obra contém sílica.
- EPA Lead-Safe Renovations for DIYers — https://www.epa.gov/lead/lead-safe-renovations-diyers (pré-1978: parar e escalar; a página afirma que a Capital Clean Care não faz abatimento de chumbo).
- EPA Protect Your Family from Exposures to Asbestos — https://www.epa.gov/asbestos/protect-your-family-exposures-asbestos (não se identifica olhando; deixar quieto; inspeção/amostragem por profissional treinado; a página orienta não aspirar nem varrer).

Frases absolutas foram tornadas condicionais ("may recirculate", "can scratch or remove the finish", "can lift", "often shows", etc.). Sem teste de água para identificar acabamento: acabamento desconhecido → confirmar com instalador/fabricante e não fazer etapa úmida.

## Decisões de mídia

| Item | Decisão |
|---|---|
| Vídeo IMG_0072.mov (1080×1920, 9,27 s, H.264 + AAC) | Áudio inspecionado: nível médio −23 dB, sem silêncio; transcrição = uma frase operacional informal em português, não instrução. **Faixa de áudio removida** nos derivados; clipe apresentado como demonstração silenciosa, sem usar a fala em texto ou legenda. Derivados 720×1280: MP4 H.264 CRF 30 (1,19 MB) e WebM VP9 CRF 42 (1,10 MB), quadros conferidos visualmente; `controls`, `playsInline`, `muted`, `preload="metadata"`, poster (frame a 6 s), sem autoplay. Marca/modelo da máquina não citados. |
| Hero IMG_0075 (retrato 3024×4032 após orientação EXIF) | Foto inteira, `hero-portrait.webp` 960×1280 (desktop) e `hero-portrait-640.webp` 640×853 (mobile), `srcset` + `sizes`, `fetchPriority="high"` + preload (LCP). Primeiro recorte 16:9 horizontal descartado por cortar o rosto (revisão do proprietário). |
| OG/schema | `hero-og.jpg` 1200×630 e `hero-800x450.webp` (variantes 16:9 só para social/schema). |
| Interna IMG_0080 | `step6-final-pass.webp` 1200×800 (+640), recorte 3:2 centrado na máquina, junto ao passo 6, com legenda obrigatória (passada final com umidade controlada, só depois da remoção seca/HEPA). |
| IMG_0077 | Omitida (redundante com IMG_0080). |
| Alt | Hero: "Capital Clean Care team member making a controlled final pass on a sealed hardwood floor". Interna: "Capital Clean Care cleaner using a sealed-floor machine after dry construction dust removal". |
| Formulação sobre a captura | "Owner-provided photo/video of a Capital Clean Care team member demonstrating the controlled-moisture final pass on sealed hardwood" (sem projeto, local, duração ou contexto pós-obra inventados). |

## Antes / depois

| Medida | Antes (build de `a9ba96e`) | Depois |
|---|---|---|
| Sitemap | 299 URLs | 300 (só a nova URL adicionada; sem duplicatas; 139 lastmod) |
| Páginas prerenderizadas | 1.226 | 1.227 |
| HTML alterado em páginas existentes | — | 69 páginas: os dois guias com link recíproco, `/resources`, `/resources/cleaning-tips` e páginas cujo bloco automático "Related Guides"/guias por categoria agora lista o post mais recente (cards; sem mudança de title/meta/canonical/H1/schema) |
| Links indexável → noindex novos | — | 0 |
| Landing do Ads | — | byte a byte igual (hashes de assets normalizados) |
| 16 páginas protegidas | — | title, meta, canonical, robots, H1 e JSON-LD idênticos |

## Validações

| Gate | Resultado |
|---|---|
| Build (`vite build` + critical CSS + flatten + sitemap; sem `indexnow-ping`) | ok |
| `vitest run` | 8/8 |
| `tsc --noEmit -p tsconfig.app.json` | 35 = baseline de `main`; 0 novos |
| Inventário `url-inventory-phase5-after-2026-09-07` (emulação Netlify) | 300 × 200, hreflang inválido 0, órfãs 0, 926 noindex (= antes) |
| `phase5_checks.py` (24 itens) | 24/24 — página prerenderizada; sitemap 300; index,follow; canonical própria; 1 H1; title; meta 137; BlogPosting + BreadcrumbList + VideoObject válidos, sem FAQPage/HowTo/rating; VideoObject PT9S/2026-09-07/#business; datas; links; fontes; mídia existente; vídeo sem autoplay; og:image; hreflang; recíprocos; listagem; 0 links novos p/ noindex; landing igual; protegidas iguais |
| Drift local vs baseline atual (IDs 215–237) | **0 crítico / 0 warning / 23 info** (nenhuma URL da baseline recebeu link recíproco) |
| Emulador Netlify (`serve_dist.py`) | nova URL 200 (com e sem barra), guias 200, mídia 200, landing 200 |
| Hidratação/layout (headless Chrome, `phase5_cdp_checks.mjs`, local e preview) | desktop 1440×900 e mobile 390×844: 0 erros React/console, 1 H1, 0 px de overflow horizontal, 0 imagens quebradas, hero carregado (srcset escolhe 640 no desktop e 960 no mobile 2×), vídeo pronto (readyState 4), pausado, com poster; screenshots em `phase5-screenshots/` |
| Preview ao vivo | 200; `X-Robots-Tag: noindex` (rascunho); title, meta, canonical de produção, robots meta index,follow (correto para produção), H1 único, og:image, 3 schemas, `<time>` 2026-09-07, `<video>` com WebM+MP4; 7 assets de mídia 200 com content-type correto; sitemap do preview 300 com a nova URL; `/resources` lista o post |
| IndexNow | não disparado: o deploy de rascunho envia `dist/` sem executar o build da Netlify (o ping só roda com `CONTEXT=production` no build do site) |

## Riscos e rollback

- Risco baixo: página nova, isolada; alterações em páginas existentes limitadas a 2 links recíprocos + blocos automáticos de guias (cards). Nenhuma mudança de SEO crítico em páginas protegidas.
- Ao publicar, o build de produção da Netlify disparará o IndexNow para a nova URL (comportamento esperado do site).
- Rollback: não mesclar a branch, ou reverter os 4 commits de código (`git revert 4d5a0b9 7165e50 62566d5 b4e2be3`).

## Fila pós-publicação (não executar agora)

- GSC: inspecionar/solicitar a nova URL após o deploy de produção; conferir que o sitemap passou a 300.
- Acompanhar em 14/28 dias as consultas "construction dust" e o efeito nas duas páginas vizinhas (sem canibalização esperada: intenções distintas).

## Recomendação

**GO** para publicação pelo fluxo seguro (worktree `seo-release`, `--ff-only`, gates, push normal, validação ao vivo, drift ao vivo contra IDs 215–237, esperado 0/0), condicionado à sua revisão do preview e do texto.
