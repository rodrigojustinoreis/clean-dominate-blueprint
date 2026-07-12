# Design Review: capitalcleancare.com — Full Site Audit

Reviewed against: codebase + live site  
Philosophy: Premium eco-friendly cleaning service — modern, trustworthy, conversion-focused  
Date: 2026-05-19

> Screenshots not captured (no browser tool available). Review based on full code analysis of all components, pages, tokens, and live HTML.

---

## Summary

O site tem uma base sólida: sistema de tokens bem estruturado, tipografia consistente (Inter + Outfit), paleta de cores coerente e componentes reutilizáveis. Os problemas principais são de **conversão mobile**, **hierarquia visual na homepage**, e **inconsistências de CTA** que reduzem a clareza da proposta de valor. A homepage acumula seções demais sem ritmo visual claro entre elas.

---

## 🔴 Must Fix

### 1. CTA principal duplicado e inconsistente
- O Hero tem dois CTAs: `"Get 15% OFF — Free Quote"` e `"(240) 704-2551"`
- O botão de desconto (15% OFF) não aparece em nenhuma outra página — cria expectativa que não é cumprida
- **Fix:** Remover o "15% OFF" do botão ou garantir que o desconto apareça no formulário de orçamento. CTA primário deve ser consistente em todo o site.

### 2. Navigation mobile sem destaque para CTA
- No mobile, o header mostra menu hamburger mas o botão "Get a Quote" desaparece
- Usuário mobile precisa abrir o menu para encontrar o caminho de conversão
- **Fix:** Manter o botão de CTA visível no header mobile ao lado do hamburger (padrão comum: logo | CTA button | hamburger)

### 3. Footer com gmail pessoal exposto
- `capitalcleancare@gmail.com` aparece no footer com um comentário `// TODO: update to professional email`
- Prejudica credibilidade de marca premium
- **Fix:** Configurar email profissional `@capitalcleancare.com` ou esconder o email até ter o profissional

### 4. Seções da homepage sem hierarquia narrativa clara
- A homepage tem 10+ seções sem uma progressão clara de atenção → interesse → desejo → ação
- Seções como "PROBLEMA / AGITAÇÃO" (4 emoji cards) ficam soltas após remoção do CTA "Let Us Handle It"
- **Fix:** Revisar o fluxo narrativo. Sugestão de ordem: Hero → Prova social (números) → Serviços → Como funciona → Depoimentos → Preços → FAQ → CTA final

---

## 🟡 Should Fix

### 5. `text-gradient` em H1 com `animate-gradient-x` é pesado no mobile
- O gradiente animado no H1 (`from-primary via-accent to-primary`) roda constantemente
- Em dispositivos móveis lentos, animações CSS contínuas no elemento mais importante da página causam jank
- **Fix:** Usar `@media (prefers-reduced-motion: reduce)` para desativar o `animate-gradient-x` e deixar o gradiente estático

### 6. Avatars no Hero são fictícios (iniciais coloridas)
- SM, JT, LK, DR — avatars com iniciais e cores aleatórias (emerald, sky, violet, amber)
- Parecem gerados/falsos para usuários atentos, o que reduz a credibilidade do social proof
- **Fix:** Substituir por fotos reais da equipe (já existem em `/images/team/`) ou remover completamente

### 7. `animate-blob` no Hero com 3 blobs simultâneos
- Três elementos com `animate-blob` e `filter: blur-3xl` rodando ao mesmo tempo no background do hero
- Impacto direto no PageSpeed mobile (já estava em 45/100)
- **Fix:** Reduzir para 1 blob ou tornar estático no mobile via `md:animate-blob`

### 8. Dropdown de nav desktop fecha imediatamente sem hover delay
- `group-hover:block` no dropdown de serviços não tem delay — fecha instantaneamente quando o mouse sai
- Usuário precisa mover o mouse em linha reta para não fechar o menu
- **Fix:** Adicionar `transition-all delay-75` ou usar um `group/item` com área de hover expandida

### 9. Seção de Pain Points (4 emoji cards) ficou sem conclusão
- Após remover "That's exactly why Capital Clean Care exists." + "Let Us Handle It", os 4 cards de dor ficaram sem resolução narrativa
- O usuário lê os problemas mas não recebe a solução em seguida
- **Fix:** Ou remover a seção inteira, ou adicionar uma transição direta para a seção de serviços

### 10. Blog index sem preview de imagem em todos os posts
- Posts mais antigos não têm `coverImage` ou usam URLs Pexels que podem expirar
- Cria lista visualmente inconsistente
- **Fix:** Garantir `coverImage` válida para todos os posts, ou usar uma imagem fallback genérica

---

## 🟢 Could Improve

### 11. Hero mini-testimonial hardcoded
- `"Capital Clean Care transformed our home..."` — Sarah M., Bethesda MD
- É hardcoded em `HeroSection.tsx` e não rotaciona com os reviews reais do Google
- **Sugestão:** Rotacionar aleatoriamente entre os reviews reais carregados pelo `useGooglePlaceReviews`

### 12. `glass` e `glass-card` usados de forma intercambiável
- `.glass` = `bg-white/70 backdrop-blur-xl` (mais forte)
- `.glass-card` = `bg-card/60 backdrop-blur-md` (mais suave)
- Em alguns lugares os dois aparecem no mesmo contexto sem critério visual claro
- **Sugestão:** Definir regra: `.glass` para elementos flutuantes sobre foto/cor; `.glass-card` para cards em fundo branco

### 13. Espaçamento entre seções inconsistente
- Algumas seções usam `py-16 md:py-24`, outras `py-16 md:py-20`, outras `py-12`
- Não há um ritmo vertical consistente
- **Sugestão:** Padronizar em 3 tamanhos: `py-12` (compacto), `py-16 md:py-24` (padrão), `py-20 md:py-32` (destaque)

### 14. Footer muito denso em mobile
- Grid de 4 colunas com links de cidades e serviços colapsa em 1 coluna no mobile
- Resulta em um footer extremamente longo com dezenas de links
- **Sugestão:** No mobile, colapsar as seções de cidades/serviços em accordions ou limitar a 5 links com "Ver todos"

### 15. Falta de micro-interações nos cards de serviço
- Os service cards têm `hover:shadow-md` mas nenhuma transformação visual
- Cards premium geralmente têm `hover:-translate-y-1` ou border color change no hover
- **Sugestão:** Adicionar `hover:-translate-y-0.5 transition-transform duration-200` nos cards de serviço

---

## O que está funcionando bem

- **Sistema de tokens CSS bem estruturado** — todas as cores usam variáveis HSL, zero hardcoded hex values. Dark mode implementado corretamente.
- **Tipografia consistente** — Inter para corpo, Outfit para headings. Hierarquia clara em toda a homepage.
- **Hero section forte** — gradiente animado, foto de equipe real, trust pills, social proof e mini-testimonial em um único bloco bem composto.
- **Schema markup abrangente** — LocalBusiness, Service, FAQ, Breadcrumb, Article em todas as páginas relevantes.
- **Code splitting implementado** — `AppRoutesLazy.tsx` com React.lazy() para todas as páginas exceto Index e NotFound.
- **Formulário de orçamento (quote form)** — bem posicionado com `id="quote"` e acessível via CTA do hero.
- **Footer CTA band** — banda de `bg-accent` no topo do footer com dois botões é um padrão de conversão forte e está bem executado.
