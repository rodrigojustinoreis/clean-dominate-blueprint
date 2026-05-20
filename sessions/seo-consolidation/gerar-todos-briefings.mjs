import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = join(__dirname, "briefings-paginas");

// ─── CITY DATA ────────────────────────────────────────────────────────────────
const CITIES = [
  {
    slug: "rockville-md", name: "Rockville", state: "MD",
    zips: ["20850", "20851", "20852", "20853"], zipRange: "20850–20853",
    n: ["King Farm", "Twinbrook", "Fallsgrove", "Rockville Town Center", "Woodley Gardens"],
    l: ["Rockville Pike", "Montgomery College", "RedGate Park"],
    nearby: [
      { slug: "bethesda-md", name: "Bethesda" },
      { slug: "north-bethesda-md", name: "North Bethesda" },
      { slug: "gaithersburg-md", name: "Gaithersburg" },
    ],
    // 04 and 07 already approved — skip
    skip: new Set(["04-airbnb-cleaning", "07-recurring-cleaning"]),
  },
  {
    slug: "bethesda-md", name: "Bethesda", state: "MD",
    zips: ["20814", "20815", "20816", "20817"], zipRange: "20814–20817",
    n: ["Bethesda Row", "Kenwood", "Bradley Hills", "Battery Park", "Burning Tree"],
    l: ["NIH campus", "Bethesda Metro", "Wisconsin Avenue"],
    nearby: [
      { slug: "rockville-md", name: "Rockville" },
      { slug: "chevy-chase-md", name: "Chevy Chase" },
      { slug: "north-bethesda-md", name: "North Bethesda" },
    ],
    skip: new Set(),
  },
  {
    slug: "silver-spring-md", name: "Silver Spring", state: "MD",
    zips: ["20901", "20902", "20910"], zipRange: "20901–20910",
    n: ["Downtown Silver Spring", "Four Corners", "Woodside", "Sligo Creek", "East Silver Spring"],
    l: ["Silver Spring Town Center", "AFI Silver Theatre", "Georgia Avenue"],
    nearby: [
      { slug: "wheaton-md", name: "Wheaton" },
      { slug: "kensington-md", name: "Kensington" },
      { slug: "chevy-chase-md", name: "Chevy Chase" },
    ],
    skip: new Set(),
  },
  {
    slug: "gaithersburg-md", name: "Gaithersburg", state: "MD",
    zips: ["20877", "20878", "20879"], zipRange: "20877–20879",
    n: ["Kentlands", "Lakelands", "Crown Farm", "Quince Orchard", "Rio"],
    l: ["Kentlands Market Square", "Rio Washingtonian Center", "Shady Grove Metro"],
    nearby: [
      { slug: "rockville-md", name: "Rockville" },
      { slug: "germantown-md", name: "Germantown" },
      { slug: "north-bethesda-md", name: "North Bethesda" },
    ],
    skip: new Set(),
  },
  {
    slug: "germantown-md", name: "Germantown", state: "MD",
    zips: ["20874", "20876"], zipRange: "20874–20876",
    n: ["Milestone", "Churchill Village", "Kingsview", "Gunners Lake", "Clopper's Mill"],
    l: ["Milestone Shopping Center", "Seneca Creek State Park", "BlackRock Center for the Arts"],
    nearby: [
      { slug: "gaithersburg-md", name: "Gaithersburg" },
      { slug: "rockville-md", name: "Rockville" },
      { slug: "olney-md", name: "Olney" },
    ],
    skip: new Set(),
  },
  {
    slug: "potomac-md", name: "Potomac", state: "MD",
    zips: ["20854", "20859"], zipRange: "20854–20859",
    n: ["Glen Echo", "River Falls", "Avenel", "Inverness", "Westgate"],
    l: ["C&O Canal National Historical Park", "Potomac Village", "Great Falls Park"],
    nearby: [
      { slug: "rockville-md", name: "Rockville" },
      { slug: "north-bethesda-md", name: "North Bethesda" },
      { slug: "bethesda-md", name: "Bethesda" },
    ],
    skip: new Set(),
  },
  {
    slug: "chevy-chase-md", name: "Chevy Chase", state: "MD",
    zips: ["20815"], zipRange: "20815",
    n: ["Section 3", "Section 4", "Martin's Additions", "North Chevy Chase", "Chevy Chase View"],
    l: ["Friendship Heights", "Connecticut Avenue", "Rock Creek Park"],
    nearby: [
      { slug: "bethesda-md", name: "Bethesda" },
      { slug: "silver-spring-md", name: "Silver Spring" },
      { slug: "kensington-md", name: "Kensington" },
    ],
    skip: new Set(),
  },
  {
    slug: "north-bethesda-md", name: "North Bethesda", state: "MD",
    zips: ["20852", "20895"], zipRange: "20852–20895",
    n: ["White Flint", "Luxmanor", "Garrett Park", "Strathmore", "Executive Boulevard"],
    l: ["Pike & Rose", "Strathmore Music Center", "White Flint Metro"],
    nearby: [
      { slug: "bethesda-md", name: "Bethesda" },
      { slug: "rockville-md", name: "Rockville" },
      { slug: "gaithersburg-md", name: "Gaithersburg" },
    ],
    skip: new Set(),
  },
  {
    slug: "wheaton-md", name: "Wheaton", state: "MD",
    zips: ["20902", "20906"], zipRange: "20902–20906",
    n: ["Glenmont", "Kemp Mill", "Forest Glen", "Long Branch", "Arcola"],
    l: ["Westfield Wheaton Mall", "Brookside Gardens", "Wheaton Metro"],
    nearby: [
      { slug: "silver-spring-md", name: "Silver Spring" },
      { slug: "kensington-md", name: "Kensington" },
      { slug: "rockville-md", name: "Rockville" },
    ],
    skip: new Set(),
  },
  {
    slug: "kensington-md", name: "Kensington", state: "MD",
    zips: ["20895"], zipRange: "20895",
    n: ["Kensington Historic District", "Rock Creek Hills", "Rock Creek Knolls", "Armory", "Knowles"],
    l: ["Kensington Antique Row", "Rock Creek Park", "MARC Kensington Station"],
    nearby: [
      { slug: "chevy-chase-md", name: "Chevy Chase" },
      { slug: "silver-spring-md", name: "Silver Spring" },
      { slug: "wheaton-md", name: "Wheaton" },
    ],
    skip: new Set(),
  },
  {
    slug: "olney-md", name: "Olney", state: "MD",
    zips: ["20832"], zipRange: "20832",
    n: ["Olney Mill", "Williamsburg Village", "Norbeck", "Cashell Estates", "Olney Village"],
    l: ["Olney Theatre Center", "Olney Town Center", "Sandy Spring Museum"],
    nearby: [
      { slug: "germantown-md", name: "Germantown" },
      { slug: "rockville-md", name: "Rockville" },
      { slug: "gaithersburg-md", name: "Gaithersburg" },
    ],
    skip: new Set(),
  },
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const phone = "(240) 704-2551";
const phoneTel = "tel:+12407042551";

function trustPills(city) {
  return [
    "  - 🏡 Latino-Owned & Operated",
    "  - 🔒 Bonded & Insured",
    "  - 👥 Same Background-Checked Team Every Visit",
    "  - 🌿 Eco-Friendly Products",
    "  - ⭐ 5.0 Rated",
    `  - 📍 Serving ${city.name}, ${city.state} ${city.zipRange}`,
  ].join("\n");
}

function footer(city) {
  const areaServed = city.zips
    .map(z => `  { "@type": "PostalCode", "postalCode": "${z}" }`)
    .join(",\n");
  return `## Rodapé / Schema Local

Incluir no rodapé da página ou na seção de contato:

\`\`\`
📞 ${phone}  |  ${phoneTel}
📍 Serving ${city.name}, ${city.state} — ZIPs: ${city.zips.join(", ")}
🕐 Free quote in 60 seconds — same-day slots available
\`\`\`

Schema \`LocalBusiness\` deve incluir:
\`\`\`json
"telephone": "+12407042551",
"areaServed": [
${areaServed}
]
\`\`\``;
}

function faqLatino(city) {
  return `**Q7:** Is Capital Clean Care locally owned?
**A:** Yes — we are a Latino-owned and operated cleaning company serving ${city.name} and the greater Montgomery County area. We live and work in this community.`;
}

function internalLinks(city, currentService) {
  const services = [
    { slug: "house-cleaning", label: "House Cleaning" },
    { slug: "deep-cleaning", label: "Deep Cleaning" },
    { slug: "move-out-cleaning", label: "Move Out Cleaning" },
    { slug: "airbnb-cleaning", label: "Airbnb Cleaning" },
    { slug: "post-construction-cleaning", label: "Post-Construction Cleaning" },
    { slug: "office-cleaning", label: "Office Cleaning" },
    { slug: "recurring-cleaning", label: "Recurring Cleaning" },
  ].filter(s => s.slug !== currentService);

  const serviceLinks = services
    .map(s => `- [${s.label} in ${city.name}, ${city.state}](/locations/${city.slug}/${s.slug})`)
    .join("\n");

  const nearbyLinks = city.nearby
    .map(n => `- [${currentService.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase())} in ${n.name}, MD](/locations/${n.slug}/${currentService})`)
    .join("\n");

  return `### Links internos — outros serviços em ${city.name}
${serviceLinks}

### Cidades vizinhas — mesmo serviço
${nearbyLinks}`;
}

// ─── SERVICE GENERATORS ───────────────────────────────────────────────────────

function genHouseCleaning(city) {
  const [n0, n1, n2] = city.n;
  const [l0, l1] = city.l;
  const [z0, z1 = z0] = city.zips;
  return `# Briefing: House Cleaning in ${city.name}, ${city.state}
**URL:** \`/locations/${city.slug}/house-cleaning\`
**Prioridade:** Alta (maior volume de busca local)
**Word count alvo:** 900–1.100 palavras

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| **Title tag** | House Cleaning in ${city.name}, ${city.state} — Eco-Friendly & Background-Checked |
| **Meta description** | Professional house cleaning in ${city.name}, ${city.state}. Eco-friendly products safe for kids & pets. Background-checked, bonded & insured. Latino-owned. Free quote in 60 seconds. |
| **H1** | Professional House Cleaning in ${city.name}, ${city.state} |
| **Keyword primária** | house cleaning ${city.name} ${city.state} |
| **Keywords secundárias** | house cleaning service ${city.name}, maid service ${city.name} MD, residential cleaning ${city.name}, cleaning company ${city.name} Maryland |
| **Search intent** | Transacional — usuário quer contratar limpeza residencial em ${city.name} agora |
| **Schema** | \`LocalBusiness\` + \`Service\` + \`FAQPage\` + \`AggregateRating\` |

---

## Diferencial de Search Intent

Cliente busca uma empresa local de confiança para limpar sua casa em ${city.name}:
- Intenção imediata: agendar uma limpeza profissional
- Pain points: desconfiança com estranhos em casa, medo de produtos químicos, falta de tempo
- Decisor: responsável pela casa (dona/dono) buscando confiabilidade e qualidade

---

## Estrutura de Conteúdo

### Section 1 — Hero
- **H1:** Professional House Cleaning in ${city.name}, ${city.state}
- **Lead:** Capital Clean Care brings professional, eco-friendly house cleaning to ${city.name} homes — from ${n0} to ${n1}. Our background-checked, bonded team uses EPA Safer Choice™ certified products, safe for your kids and pets, and backs every visit with 100% satisfaction: we re-clean if you're not happy.
- **CTA:** "Get a Free Quote in ${city.name}" → \`#quote\`
- **Trust pills:**
${trustPills(city)}

### Section 2 — O que inclui
**H2:** What's Included in Every ${city.name} House Cleaning
- Kitchen: countertops, appliances exterior, sink, microwave inside, floor
- Bathrooms: toilet, tub/shower, sink, mirrors, floors
- Bedrooms: dusting, vacuuming, making beds (linens if provided)
- Living areas: dusting, vacuuming, mopping, window sills, baseboards
- All rooms: light switches, door handles, spot-clean visible marks

### Section 3 — Por que Capital Clean Care
**H2:** Why ${city.name} Homeowners Choose Capital Clean Care
1. **Latino-owned & locally operated** — We serve ${city.name}'s ${n2} neighborhood and surrounding areas because this is our community. We're not a franchise; we're your neighbors.
2. **Eco-safe for families** — Every product is EPA Safer Choice™ certified. No bleach, no ammonia, no synthetic fragrances. Safe from the first visit.
3. **100% satisfaction guaranteed** — Not happy with something? Call us and we re-clean — free, no fine print.

### Section 4 — Processo
**H2:** How It Works
1. **Book online or call** — Free quote in 60 seconds. Same-day slots often available in ${city.name} (${z0}).
2. **We arrive on time** — Bonded, insured, background-checked cleaners bring all supplies.
3. **Thorough top-to-bottom clean** — Consistent checklist, nothing missed.
4. **100% satisfaction** — If anything isn't right, we return free.

### Section 5 — FAQ
**H2:** House Cleaning FAQ — ${city.name}, ${city.state}

**Q1:** Do you bring your own cleaning supplies to ${city.name} homes?
**A:** Yes. We supply all equipment and EPA Safer Choice™ certified eco-friendly products. You don't need to provide anything.

**Q2:** Are your cleaners background-checked?
**A:** Absolutely. Every cleaner is fully background-screened, bonded, and insured before entering any home in ${city.name}.

**Q3:** How much does house cleaning cost in ${city.name}, ${city.state}?
**A:** Pricing depends on home size and frequency. Get your exact quote in 60 seconds — [free quote here](#quote). No commitment required.

**Q4:** Do you offer recurring cleaning in ${city.name}?
**A:** Yes — weekly, bi-weekly, and monthly plans available with a discounted recurring rate. [See recurring cleaning details](/locations/${city.slug}/recurring-cleaning).

**Q5:** What areas of ${city.name} do you serve?
**A:** We serve all ${city.name} ZIP codes: ${city.zips.join(", ")} — including ${n0}, ${n1}, and ${n2}.

**Q6:** What's your cancellation policy?
**A:** We ask for 24-hour notice. No fees for first-time cancellations.

${faqLatino(city)}

### Section 6 — Social proof
**H2:** What ${city.name} Families Are Saying

> "Capital Clean Care transformed our home. Thorough, eco-friendly products safe for my kids and pets."
> — **Sarah M., Bethesda MD** ⭐⭐⭐⭐⭐

> [PLACEHOLDER — inserir review real do Google Business de cliente em ${city.name} especificamente]

### Section 7 — Links internos
${internalLinks(city, "house-cleaning")}

### Section 8 — CTA final
**H2:** Ready for a Cleaner Home in ${city.name}?
Texto: Whether you're near ${l0} or in the ${z1} ZIP code, we're ready to help. Free quote in 60 seconds.
**CTA:** "Get My Free House Cleaning Quote" → \`#quote\`
Microcopy: No commitment · Same-day slots available · 100% satisfaction guaranteed

---

## Links Internos Obrigatórios
| Anchor text | Destino |
|-------------|---------|
| "recurring cleaning" | \`/locations/${city.slug}/recurring-cleaning\` |
| "deep cleaning" | \`/locations/${city.slug}/deep-cleaning\` |
| "move out cleaning" | \`/locations/${city.slug}/move-out-cleaning\` |
| "Airbnb cleaning" | \`/locations/${city.slug}/airbnb-cleaning\` |
| "house cleaning ${city.nearby[0].name}" | \`/locations/${city.nearby[0].slug}/house-cleaning\` |

---

## Alt-Text Sugerido — 3 Imagens-Chave

| Posição | Imagem | Alt-text sugerido |
|---------|--------|-------------------|
| Hero background | Equipe em uniforme em casa do cliente | \`Capital Clean Care team providing house cleaning service in ${city.name}, ${city.state} — Latino-owned, background-checked professionals\` |
| Team photo | 2 membros da equipe sorridentes | \`Capital Clean Care bonded and insured cleaning team serving ${city.name}, ${city.state} homes\` |
| Eco products | Produtos de limpeza eco-friendly | \`EPA Safer Choice certified non-toxic eco-friendly cleaning products used by Capital Clean Care in ${city.name}, ${city.state}\` |

---

${footer(city)}

---

## Notas de Tom
- Mencionar "${city.name}" 7–9 vezes naturalmente
- Mencionar ${n0}, ${n1} ou ${n2} pelo menos 2 vezes
- Mencionar ${l0} ou ${l1} pelo menos 1 vez
- Tom: confiável, humano, direto — não agressivo nem exagerado
- Não usar linguagem de spam ("best in the world", "number one")
`;
}

function genDeepCleaning(city) {
  const [n0, n1, n2] = city.n;
  const [l0, l1] = city.l;
  const [z0, z1 = z0] = city.zips;
  return `# Briefing: Deep Cleaning in ${city.name}, ${city.state}
**URL:** \`/locations/${city.slug}/deep-cleaning\`
**Prioridade:** Alta (alto CPC, intenção imediata de compra)
**Word count alvo:** 900–1.100 palavras

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| **Title tag** | Deep Cleaning Service in ${city.name}, ${city.state} — Top-to-Bottom, Eco-Friendly |
| **Meta description** | Professional deep cleaning in ${city.name}, ${city.state}. Inside appliances, grout, baseboards, ceiling fans — everywhere standard cleanings miss. EPA-certified products. Free quote. |
| **H1** | Deep Cleaning Services in ${city.name}, ${city.state} |
| **Keyword primária** | deep cleaning ${city.name} ${city.state} |
| **Keywords secundárias** | deep cleaning service ${city.name} Maryland, spring cleaning ${city.name} MD, thorough house cleaning ${city.name}, professional deep clean ${city.name} |
| **Search intent** | Transacional com urgência — problema específico (casa muito suja, pré-mudança, primavera, evento especial) |
| **Schema** | \`LocalBusiness\` + \`Service\` + \`FAQPage\` + \`AggregateRating\` |

---

## Diferencial de Search Intent vs. House Cleaning

- Cliente já sabe que precisa de algo mais profundo que a limpeza regular
- Triggers: mudança, primavera, evento especial, casa não limpa profissionalmente por muito tempo
- Disposto a pagar mais — precisa ver escopo detalhado para justificar o preço

---

## Estrutura de Conteúdo

### Section 1 — Hero
- **H1:** Deep Cleaning Services in ${city.name}, ${city.state}
- **Lead:** When a standard clean isn't enough, Capital Clean Care's deep cleaning goes top-to-bottom through every corner of your ${city.name} home — from ${n1} to ${n2}. Baseboards, grout lines, inside appliances, ceiling fans — we cover everything a routine cleaning skips. EPA Safer Choice™ products only.
- **CTA:** "Schedule a Deep Clean in ${city.name}" → \`#quote\`
- **Trust pills:**
${trustPills(city)}

### Section 2 — O que inclui
**H2:** What's Included in Our ${city.name} Deep Cleaning

**Kitchen:** Oven interior, microwave inside, degrease range hood, inside cabinets, descale faucets, scrub backsplash

**Bathrooms:** Scrub grout lines, descale showerhead, deep-clean toilet (base/hinges/under rim), clean exhaust fan, edge-to-edge mirrors

**All rooms:** Wipe baseboards top and sides, window sills and tracks, light switches/outlets, ceiling fans, door frames and handles, vacuum under furniture, wipe doors

### Section 3 — Quando pedir
**H2:** When Should You Book a Deep Clean in ${city.name}?
1. Moving into or out of a home in ${z0 === z1 ? z0 : `${z0} or ${z1}`}
2. Spring seasonal reset
3. Before a special event or holiday gathering
4. After a long period between professional cleanings
5. Post-renovation or construction
6. Preparing a home for sale or rental listing

### Section 4 — Standard vs. Deep
**H2:** Standard Cleaning vs. Deep Cleaning — What's the Difference?

| Standard | Deep Cleaning |
|----------|---------------|
| Surface wipe of appliances | Inside oven and microwave |
| General mopping | Scrubbing grout and tile edges |
| Dusting surfaces | Ceiling fans, baseboards, window tracks |
| Standard bathroom | Descaling, grout scrubbing, exhaust fans |
| ~2–3 hours | ~4–6 hours |

### Section 5 — FAQ
**H2:** Deep Cleaning FAQ — ${city.name}, ${city.state}

**Q1:** How long does a deep cleaning take in ${city.name}?
**A:** Most ${city.name} homes take 4–6 hours. Larger homes or homes with heavy buildup may take longer.

**Q2:** How much does a deep cleaning cost in ${city.name}, ${city.state}?
**A:** Pricing is based on home size and scope. Get your exact quote in 60 seconds — [free quote here](#quote). No commitment required.

**Q3:** Do I need to be home during the deep cleaning?
**A:** No. Many clients leave a key or use a lockbox. Our bonded, insured team is fully background-checked.

**Q4:** Is your deep cleaning eco-friendly?
**A:** Yes. We use only EPA Safer Choice™ certified products — powerful enough for deep cleaning, non-toxic for your family and pets.

**Q5:** Do you do spring cleaning in ${city.name}?
**A:** Our deep cleaning covers everything a spring cleaning typically includes — and more. Book any time of year.

**Q6:** How often should I get a deep cleaning in ${city.name}?
**A:** Once or twice a year is typical, combined with regular maintenance cleanings in between.

${faqLatino(city)}

### Section 6 — Social proof
**H2:** ${city.name} Homeowners Love Our Deep Clean

> "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough."
> — **Brian G., Fairfax VA** ⭐⭐⭐⭐⭐

> [PLACEHOLDER — inserir review real do Google Business de cliente em ${city.name}]

### Section 7 — Links internos
${internalLinks(city, "deep-cleaning")}

### Section 8 — CTA final
**H2:** Book Your ${city.name} Deep Clean Today
Texto: Serving ${city.name} homes near ${l0} and across ZIPs ${city.zips.join(", ")}. Start fresh — free quote in 60 seconds.
**CTA:** "Get My Free Deep Cleaning Quote" → \`#quote\`
Microcopy: Same-day slots available · 100% satisfaction guaranteed · Bonded & Insured

---

## Links Internos Obrigatórios
| Anchor text | Destino |
|-------------|---------|
| "house cleaning" | \`/locations/${city.slug}/house-cleaning\` |
| "move out cleaning" | \`/locations/${city.slug}/move-out-cleaning\` |
| "post-construction cleaning" | \`/locations/${city.slug}/post-construction-cleaning\` |
| "recurring cleaning" | \`/locations/${city.slug}/recurring-cleaning\` |
| "deep cleaning ${city.nearby[0].name}" | \`/locations/${city.nearby[0].slug}/deep-cleaning\` |

---

## Alt-Text Sugerido — 3 Imagens-Chave

| Posição | Imagem | Alt-text sugerido |
|---------|--------|-------------------|
| Hero | Equipe limpando detalhes (grout, rodapé) | \`Capital Clean Care deep cleaning service in ${city.name}, ${city.state} — top-to-bottom professional results\` |
| Team photo | Membro da equipe inspecionando superfície | \`Latino-owned Capital Clean Care bonded team performing deep cleaning in ${city.name}, MD\` |
| Products | Produtos EPA Safer Choice | \`EPA Safer Choice certified eco-friendly deep cleaning products used in ${city.name}, ${city.state} homes\` |

---

${footer(city)}

---

## Notas de Tom
- Enfatizar escopo detalhado — cliente quer saber o que está pagando a mais
- Tabela comparativa é forte para conversão — incluir acima do fold
- Mencionar "${city.name}" 6–8 vezes; bairros ${n0} e ${n1} pelo menos 2 vezes
- Mencionar ${l0} pelo menos 1 vez
`;
}

function genMoveOutCleaning(city) {
  const [n0, n1, n2] = city.n;
  const [l0] = city.l;
  const [z0, z1 = z0] = city.zips;
  return `# Briefing: Move Out Cleaning in ${city.name}, ${city.state}
**URL:** \`/locations/${city.slug}/move-out-cleaning\`
**Prioridade:** Alta (deadline real = urgência, maior ticket)
**Word count alvo:** 850–1.050 palavras

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| **Title tag** | Move Out Cleaning in ${city.name}, ${city.state} — Get Your Full Deposit Back |
| **Meta description** | Move out cleaning in ${city.name}, ${city.state}. We clean to landlord & inspection standards so you get your deposit back. Bonded, insured, eco-friendly. Book today — same-day available. |
| **H1** | Move Out Cleaning in ${city.name}, ${city.state} |
| **Keyword primária** | move out cleaning ${city.name} ${city.state} |
| **Keywords secundárias** | move out cleaning service ${city.name}, move in cleaning ${city.name} MD, end of tenancy cleaning ${city.name}, apartment cleaning move out ${city.name} |
| **Search intent** | Transacional com prazo real — locatário saindo, precisa recuperar depósito de segurança |
| **Schema** | \`LocalBusiness\` + \`Service\` + \`FAQPage\` + \`AggregateRating\` |

---

## Diferencial de Search Intent

- Deadline real: data de entrega do imóvel
- Perda financeira concreta: depósito de 1–2 meses de aluguel
- Não negocia preço — negocia confiabilidade e prazo

---

## Estrutura de Conteúdo

### Section 1 — Hero
- **H1:** Move Out Cleaning in ${city.name}, ${city.state}
- **Lead:** Moving out in ${city.name}? Capital Clean Care's move out cleaning covers every inch your landlord will inspect — from oven interior to baseboards to grout lines. We serve ${n0}, ${n1}, and all ${city.name} neighborhoods. Deposit-ready results backed by 100% satisfaction guarantee.
- **CTA:** "Book Your Move Out Clean in ${city.name}" → \`#quote\`
- **Trust pills:**
${trustPills(city)}

### Section 2 — Checklist
**H2:** Move Out Cleaning Checklist — ${city.name}

**Kitchen:** Inside oven, inside fridge, degrease hood, wipe inside all cabinets and drawers, scrub sink, clean microwave, wipe countertops/backsplash, mop floor

**Bathrooms:** Scrub toilet (base/tank/hinges), clean inside vanity, scrub grout and tile, clean tub/shower, descale fixtures, mirrors, mop floor

**All rooms:** Inside all closets, baseboards and door frames, window sills and tracks, light switches, vacuum and mop all floors, spot-clean walls, ceiling fans, remove trash

### Section 3 — Por que importa
**H2:** Why Your Security Deposit Depends on the Cleaning
Landlords in ${city.name} and across Montgomery County routinely withhold deposits for cleaning. A professional move out cleaning to landlord standards — specifically addressing the ${l0} area rental market — is the most reliable way to protect your deposit. We know what property managers inspect.

### Section 4 — Processo
**H2:** How Our ${city.name} Move Out Cleaning Works
1. **Book your date** — Same-day and next-day slots available for urgent moves in ${z0 === z1 ? z0 : `${z0} and ${z1}`}.
2. **We arrive with all supplies** — No need to leave anything behind.
3. **Full landlord-standard clean** — Every room, every surface.
4. **100% satisfaction** — If your landlord spots anything, we return free.

### Section 5 — FAQ
**H2:** Move Out Cleaning FAQ — ${city.name}, ${city.state}

**Q1:** How much does move out cleaning cost in ${city.name}?
**A:** Pricing depends on home size and condition. Get your exact quote in 60 seconds — [free quote here](#quote). Same-day availability confirmed at booking.

**Q2:** Do I need to be present during the move out cleaning in ${city.name}?
**A:** No. Our fully insured, background-checked team handles everything while you manage your move.

**Q3:** Can you do same-day or next-day move out cleaning in ${city.name}?
**A:** In most cases, yes. Contact us early to confirm availability in your ZIP code (${z0 === z1 ? z0 : `${z0}, ${z1}`}).

**Q4:** Do you clean empty apartments?
**A:** Yes. Empty-home move out cleanings are our specialty. Completely empty homes are preferred.

**Q5:** Does your move out cleaning meet Maryland landlord inspection standards?
**A:** Yes. Our checklist is built to meet typical property management standards in ${city.name} and Montgomery County.

**Q6:** Do you also do move-in cleaning for the new home?
**A:** Absolutely. Many clients book a move out clean for their current home and a [deep cleaning](/locations/${city.slug}/deep-cleaning) for their new one.

${faqLatino(city)}

### Section 6 — Social proof
**H2:** ${city.name} Renters Trust Capital Clean Care

> [PLACEHOLDER — inserir review real do Google Business de locatário em ${city.name}, de preferência mencionando depósito recuperado ou limpeza aprovada na vistoria]

### Section 7 — Links internos
${internalLinks(city, "move-out-cleaning")}

### Section 8 — CTA final
**H2:** Don't Risk Your Deposit — Book Today
Texto: Serving all ${city.name} ZIPs (${city.zips.join(", ")}), including ${n2} and the ${l0} area. Free quote in 60 seconds.
**CTA:** "Get My Free Move Out Quote" → \`#quote\`
Microcopy: Same-day slots · 100% satisfaction guaranteed · Bonded & Insured

---

## Links Internos Obrigatórios
| Anchor text | Destino |
|-------------|---------|
| "deep cleaning" | \`/locations/${city.slug}/deep-cleaning\` |
| "house cleaning" | \`/locations/${city.slug}/house-cleaning\` |
| "post-construction cleaning" | \`/locations/${city.slug}/post-construction-cleaning\` |
| "move out cleaning ${city.nearby[0].name}" | \`/locations/${city.nearby[0].slug}/move-out-cleaning\` |
| "move out cleaning ${city.nearby[1].name}" | \`/locations/${city.nearby[1].slug}/move-out-cleaning\` |

---

## Alt-Text Sugerido — 3 Imagens-Chave

| Posição | Imagem | Alt-text sugerido |
|---------|--------|-------------------|
| Hero | Equipe em apartamento vazio | \`Capital Clean Care move out cleaning service in ${city.name}, ${city.state} — deposit-ready results\` |
| Team | Membros da equipe com equipamentos | \`Latino-owned Capital Clean Care bonded and insured move out cleaning team in ${city.name}, MD\` |
| Products | Produtos de limpeza eco | \`EPA Safer Choice certified non-toxic products used for move out cleaning in ${city.name}, ${city.state}\` |

---

${footer(city)}

---

## Notas de Tom
- Benefício central: **recuperar o depósito** — mencionar early e com frequência
- Usar checklist visual (alta percepção de valor)
- Urgência real: "same-day available"
- Mencionar "${city.name}" 6–8 vezes; ${n0} e ${n1} 1–2 vezes; ${l0} 1 vez
`;
}

function genAirbnbCleaning(city) {
  const [n0, n1, n2] = city.n;
  const [l0, l1] = city.l;
  const [z0, z1 = z0] = city.zips;
  return `# Briefing: Airbnb Cleaning in ${city.name}, ${city.state}
**URL:** \`/locations/${city.slug}/airbnb-cleaning\`
**Prioridade:** Média-alta (nicho com alto ticket; menor volume)
**Word count alvo:** 800–1.000 palavras

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| **Title tag** | Airbnb Cleaning in ${city.name}, ${city.state} — Fast Turnovers, 5-Star Results |
| **Meta description** | Airbnb & short-term rental cleaning in ${city.name}, ${city.state}. Fast turnovers, hotel-standard results, flexible scheduling. Latino-owned & locally trusted. Free quote. |
| **H1** | Airbnb & Short-Term Rental Cleaning in ${city.name}, ${city.state} |
| **Keyword primária** | Airbnb cleaning ${city.name} ${city.state} |
| **Keywords secundárias** | short term rental cleaning ${city.name}, vacation rental cleaning ${city.name} MD, Airbnb turnover ${city.name}, VRBO cleaning ${city.name} |
| **Search intent** | Transacional B2B-lite — host buscando limpeza confiável e rápida entre hóspedes |
| **Schema** | \`LocalBusiness\` + \`Service\` + \`FAQPage\` + \`AggregateRating\` |

---

## Diferencial de Search Intent

- Cliente é o HOST, não o hóspede
- Prioriza: velocidade de turnover, confiabilidade, proteção da avaliação
- Trigger: hóspede reclamou, host está escalando, ocupação alta

---

## Estrutura de Conteúdo

### Section 1 — Hero
- **H1:** Airbnb & Short-Term Rental Cleaning in ${city.name}, ${city.state}
- **Lead:** Protect your ${city.name} Airbnb rating with professional turnover cleanings between every guest. Capital Clean Care — a Latino-owned, locally operated company — delivers hotel-standard results from ${n0} to ${l0}. Flexible scheduling, 100% satisfaction guaranteed.
- **CTA:** "Set Up Airbnb Turnover Cleaning in ${city.name}" → \`#quote\`
- **Trust pills:**
${trustPills(city)}

### Section 2 — Checklist
**H2:** Our ${city.name} Airbnb Turnover Checklist

**Between every guest:** Strip and remake beds with fresh linens, replace towels, sanitize all bathroom surfaces, clean kitchen (dishes, surfaces, trash), restock essentials (if provided), sweep/vacuum/mop, wipe mirrors and screens

**Deep-reset (periodic):** Inside appliances, scrub grout and baseboards, window tracks, closet interiors

**Extras available:** Laundry service, restock consumables, pre-check-in inspection

### Section 3 — Benefícios
**H2:** Why ${city.name} Airbnb Hosts Choose Capital Clean Care
1. **Rating protection** — Consistent, bonded team means guests find the property exactly as listed, every time. 100% satisfaction guaranteed: we re-clean if anything falls short.
2. **Flexible scheduling** — We work around your checkout/check-in window across ${city.name}'s ${z0 === z1 ? `${z0} ZIP code` : `${z0} and ${z1} ZIP codes`}. Same-day turnovers available.
3. **Locally owned and accountable** — We're not a franchise. We're Latino-owned and operate in ${city.name}. Your Airbnb reputation matters to us personally.

> "My Airbnb rating went from 4.6 to 5.0 stars after switching to Capital Clean Care. Detail is incredible."
> — **Amanda F., Bethesda, MD** ⭐⭐⭐⭐⭐

### Section 4 — Processo
**H2:** How Airbnb Cleaning Works With Us
1. **Share your calendar** — We coordinate around your booking schedule.
2. **We arrive at checkout time** — Fast turnover anywhere in ${city.name} from ${n1} to ${n2}.
3. **Hotel-standard clean** — Linens, sanitization, restock, inspection.
4. **Ready for next guest** — You get confirmation. Guest checks in to a 5-star clean.

### Section 5 — FAQ
**H2:** Airbnb Cleaning FAQ — ${city.name}, ${city.state}

**Q1:** How quickly can you turn over my ${city.name} Airbnb?
**A:** Most 1–2 bedroom ${city.name} properties turn over in 2–3 hours. We work within same-day check-in windows with advance notice.

**Q2:** Can you manage my cleaning schedule automatically?
**A:** Yes — share your Airbnb calendar and we schedule around each checkout automatically.

**Q3:** How much does Airbnb turnover cleaning cost in ${city.name}?
**A:** Pricing depends on property size and scope. Get your exact quote in 60 seconds — [free quote here](#quote). No contracts.

**Q4:** What if a guest leaves the property extra dirty?
**A:** We document with photos and charge only for the additional time required.

**Q5:** Do you clean VRBO and other short-term rental platforms?
**A:** Absolutely — Airbnb, VRBO, Booking.com, direct bookings.

**Q6:** Do you know Airbnb standards in ${city.name}?
**A:** Yes. We work with multiple hosts across ${city.name} (${z0 === z1 ? z0 : `${z0}–${z1}`}) and Montgomery County.

${faqLatino(city)}

### Section 6 — Social proof
**H2:** ${city.name} Hosts Trust Capital Clean Care

> [PLACEHOLDER — inserir review real do Google Business de host de ${city.name}. Ideal: menção a turnover, avaliação melhorou, equipe confiável.]

### Section 7 — Links internos
${internalLinks(city, "airbnb-cleaning")}

### Section 8 — CTA final
**H2:** Set Up Automatic Airbnb Turnovers in ${city.name}
Texto: Serving all ${city.name} short-term rentals near ${l1} and across ZIPs ${city.zips.join(", ")}. Free quote in 60 seconds.
**CTA:** "Get My Airbnb Cleaning Quote" → \`#quote\`
Microcopy: Flexible scheduling · Same-day turnovers · 100% satisfaction guaranteed

---

## Links Internos Obrigatórios
| Anchor text | Destino |
|-------------|---------|
| "recurring cleaning" | \`/locations/${city.slug}/recurring-cleaning\` |
| "deep cleaning" | \`/locations/${city.slug}/deep-cleaning\` |
| "Airbnb cleaning ${city.nearby[0].name}" | \`/locations/${city.nearby[0].slug}/airbnb-cleaning\` |
| "Airbnb cleaning ${city.nearby[1].name}" | \`/locations/${city.nearby[1].slug}/airbnb-cleaning\` |

---

## Alt-Text Sugerido — 3 Imagens-Chave

| Posição | Imagem | Alt-text sugerido |
|---------|--------|-------------------|
| Hero | Equipe fazendo cama estilo hotel | \`Capital Clean Care Airbnb turnover cleaning in ${city.name}, ${city.state} — hotel-standard results\` |
| Team | 2 membros em uniforme | \`Latino-owned Capital Clean Care bonded team serving Airbnb hosts in ${city.name}, MD ${city.zipRange}\` |
| Products | Produtos eco-friendly | \`EPA Safer Choice certified products for every Airbnb turnover by Capital Clean Care in ${city.name}, ${city.state}\` |

---

${footer(city)}

---

## Notas de Tom
- Falar para o HOST — "your property", "your rating", "your guests"
- Benefício central: proteger a avaliação e o rendimento
- Mencionar "${city.name}" 5–7 vezes; ${n0} e ${n1} 2 vezes; ${l0} 1 vez
- Usar "short-term rental" e "vacation rental" para SEO variety
`;
}

function genPostConstruction(city) {
  const [n0, n1, n2] = city.n;
  const [l0, l1] = city.l;
  const [z0, z1 = z0] = city.zips;
  return `# Briefing: Post-Construction Cleaning in ${city.name}, ${city.state}
**URL:** \`/locations/${city.slug}/post-construction-cleaning\`
**Prioridade:** Média (menor volume, alto ticket, altamente qualificado)
**Word count alvo:** 800–1.000 palavras

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| **Title tag** | Post-Construction Cleaning in ${city.name}, ${city.state} — Dust-Free, Move-In Ready |
| **Meta description** | Post-construction cleaning in ${city.name}, ${city.state}. HEPA vacuums, construction dust removal, paint splatters, residue. Move-in ready results. Licensed, insured, free quote. |
| **H1** | Post-Construction Cleaning in ${city.name}, ${city.state} |
| **Keyword primária** | post construction cleaning ${city.name} ${city.state} |
| **Keywords secundárias** | post renovation cleaning ${city.name}, construction cleanup ${city.name} MD, after renovation cleaning ${city.name}, new construction cleaning ${city.name} |
| **Search intent** | Transacional especializado — proprietário pós-obra, empreiteiro, ou developer buscando limpeza especializada |
| **Schema** | \`LocalBusiness\` + \`Service\` + \`FAQPage\` + \`AggregateRating\` |

---

## Diferencial de Search Intent

- Audiência: proprietário pós-reforma, empreiteiro entregando projeto, developer
- Pain point: poeira de drywall em tudo, resíduos de tinta, cola, caulk
- Resultado esperado: casa limpa e pronta para morar ou para vistoria de entrega

---

## Estrutura de Conteúdo

### Section 1 — Hero
- **H1:** Post-Construction Cleaning in ${city.name}, ${city.state}
- **Lead:** Renovation done — now comes the real challenge. Construction dust, drywall residue, paint splatters, and debris settle into every corner of your ${city.name} home, from ${n0} to ${n1}. Capital Clean Care's HEPA-equipped team delivers a complete, dust-free clean that leaves your property genuinely move-in ready.
- **CTA:** "Get a Post-Construction Quote in ${city.name}" → \`#quote\`
- **Trust pills:**
${trustPills(city)}

### Section 2 — O que inclui
**H2:** What Our Post-Construction Cleaning Covers in ${city.name}

**Phase 1 — Rough Clean:** Remove large debris, packaging, materials; sweep and vacuum heavy dust

**Phase 2 — Detail Clean:** HEPA vacuum all surfaces (walls, ceilings, floors, HVAC registers); wipe and wash every surface; clean inside cabinets and drawers; remove paint splatters and adhesive residue; deep-clean all bathrooms and appliances; wash windows, tracks, and frames; wipe baseboards and door frames; scrub floors and grout

**Phase 3 — Final Inspection:** Touch-up missed spots, final dust pass, confirm move-in ready

### Section 3 — Por que especialista
**H2:** Why Post-Construction Requires a Specialist in ${city.name}
Construction dust — especially drywall silica — settles into HVAC vents, inside cabinets, and on every surface in the ${z0 === z1 ? `${z0} ZIP code` : `${z0} and ${z1} ZIP codes`} we serve near ${l0}. A standard cleaning crew without HEPA equipment redistributes more than it removes. Capital Clean Care's team is trained and HEPA-equipped specifically for post-construction environments.

### Section 4 — Quem contrata
**H2:** Who Books Post-Construction Cleaning in ${city.name}
- Homeowners after kitchen, bathroom, or whole-home renovations in ${n2}
- General contractors preparing final project delivery
- Developers completing new construction
- Real estate investors flipping rental properties

### Section 5 — FAQ
**H2:** Post-Construction Cleaning FAQ — ${city.name}, ${city.state}

**Q1:** How much does post-construction cleaning cost in ${city.name}?
**A:** Priced by square footage and scope. Get your exact quote in 60 seconds — [free quote here](#quote).

**Q2:** Do you use HEPA vacuums for construction dust?
**A:** Yes. HEPA-filter equipment specifically designed to capture fine construction particulate including drywall silica.

**Q3:** How soon after construction can you come to ${city.name}?
**A:** As soon as your contractors are done. We typically schedule within 24–48 hours of your request.

**Q4:** Can you handle larger commercial post-construction projects in ${city.name}?
**A:** Yes — residential and light commercial. Contact us for custom quotes on larger projects.

**Q5:** Are you insured for post-construction work?
**A:** Fully licensed, bonded, and insured. All team members are background-checked.

**Q6:** Do you clean occupied homes during phased renovations?
**A:** Yes, with appropriate protocols to protect the occupied areas.

${faqLatino(city)}

### Section 6 — Social proof
**H2:** ${city.name} Homeowners After Their Renovations

> "After our renovation, they got every last bit of construction dust. Professional and incredibly thorough."
> — **Brian G.** ⭐⭐⭐⭐⭐

> [PLACEHOLDER — inserir review real do Google Business de cliente em ${city.name} pós-reforma]

### Section 7 — Links internos
${internalLinks(city, "post-construction-cleaning")}

### Section 8 — CTA final
**H2:** Ready for a Dust-Free Home in ${city.name}?
Texto: Serving ${city.name} renovations near ${l1}, across ZIPs ${city.zips.join(", ")}. Free quote in 60 seconds.
**CTA:** "Get My Post-Construction Quote" → \`#quote\`
Microcopy: Fast scheduling · HEPA-equipped team · Licensed, Bonded & Insured

---

## Links Internos Obrigatórios
| Anchor text | Destino |
|-------------|---------|
| "deep cleaning" | \`/locations/${city.slug}/deep-cleaning\` |
| "move out cleaning" | \`/locations/${city.slug}/move-out-cleaning\` |
| "house cleaning" | \`/locations/${city.slug}/house-cleaning\` |
| "post-construction ${city.nearby[0].name}" | \`/locations/${city.nearby[0].slug}/post-construction-cleaning\` |

---

## Alt-Text Sugerido — 3 Imagens-Chave

| Posição | Imagem | Alt-text sugerido |
|---------|--------|-------------------|
| Hero | Equipe com HEPA em obra | \`Capital Clean Care post-construction cleaning in ${city.name}, ${city.state} — HEPA-equipped, move-in ready results\` |
| Team | Membros inspecionando superfície | \`Latino-owned Capital Clean Care bonded post-construction cleaning team in ${city.name}, MD\` |
| Products | Equipamento HEPA + produtos eco | \`HEPA vacuum and EPA Safer Choice certified products for post-construction cleaning in ${city.name}, ${city.state}\` |

---

${footer(city)}

---

## Notas de Tom
- Provar expertise técnica: HEPA, drywall silica, 3-phase — isso diferencia de cleaner genérico
- "Move-in ready" — usar com frequência
- Tom ligeiramente mais técnico/profissional (audiência inclui empreiteiros)
- Mencionar "${city.name}" 5–7 vezes; ${n0} e ${n2} pelo menos 2 vezes; ${l0} 1 vez
`;
}

function genOfficeCleaning(city) {
  const [n0, n1, n2] = city.n;
  const [l0, l1] = city.l;
  const [z0, z1 = z0] = city.zips;
  return `# Briefing: Office Cleaning in ${city.name}, ${city.state}
**URL:** \`/locations/${city.slug}/office-cleaning\`
**Prioridade:** Média (B2B — menor volume, maior LTV)
**Word count alvo:** 800–1.000 palavras

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| **Title tag** | Office Cleaning in ${city.name}, ${city.state} — Reliable Commercial Cleaning Service |
| **Meta description** | Professional office cleaning in ${city.name}, ${city.state}. Daily, weekly, or custom schedules. Background-checked, bonded, insured. Latino-owned. Free commercial quote. |
| **H1** | Office & Commercial Cleaning in ${city.name}, ${city.state} |
| **Keyword primária** | office cleaning ${city.name} ${city.state} |
| **Keywords secundárias** | commercial cleaning ${city.name} MD, office cleaning service ${city.name}, janitorial service ${city.name}, business cleaning ${city.name} Maryland |
| **Search intent** | Transacional B2B — office manager ou pequeno empresário buscando limpeza recorrente confiável |
| **Schema** | \`LocalBusiness\` + \`Service\` + \`FAQPage\` + \`AggregateRating\` |

---

## Diferencial de Search Intent

- Decisor: office manager, business owner, facilities manager
- Prioriza: confiabilidade, pontualidade, discrição, flexibilidade de horário
- LTV alto: contratos recorrentes de 12–24+ meses
- Não tolera cancelamentos de última hora

---

## Estrutura de Conteúdo

### Section 1 — Hero
- **H1:** Office & Commercial Cleaning in ${city.name}, ${city.state}
- **Lead:** Capital Clean Care brings the same reliability ${city.name} families trust to commercial spaces — from small offices in ${n0} to professional suites near ${l0}. Background-checked, bonded team. Eco-friendly products. Flexible scheduling before, during, or after business hours.
- **CTA:** "Get a Commercial Cleaning Quote in ${city.name}" → \`#quote\`
- **Trust pills:**
${trustPills(city)}

### Section 2 — Tipos de espaços
**H2:** Commercial Spaces We Clean in ${city.name}
- Private offices and open-plan workspaces
- Medical and dental offices
- Co-working and shared office spaces
- Real estate and professional services offices
- Small retail and multi-tenant office suites

### Section 3 — O que inclui
**H2:** What's Included in Our ${city.name} Office Cleaning

**Common areas & reception:** Vacuum carpets, mop floors, wipe reception furniture, empty/reline trash, disinfect door handles and light switches, clean glass doors

**Workstations & conference rooms:** Dust all surfaces, sanitize shared equipment (on request), wipe conference tables and chairs, clean whiteboards (if requested)

**Kitchen / break room:** Clean countertops and sink, wipe appliances exterior, empty trash, mop floor

**Restrooms:** Disinfect toilets/sinks/fixtures, restock paper products (if provided), clean mirrors, mop floor

### Section 4 — Frequência
**H2:** Flexible Cleaning Schedules for ${city.name} Businesses
- **Daily** — High-traffic offices with 15+ employees near ${l1}
- **3× per week** — Mid-sized offices and co-working spaces in ${z0}
- **Weekly** — Smaller offices with lighter traffic in ${z1}

All schedules available before hours, after hours, or weekends.

### Section 5 — FAQ
**H2:** Office Cleaning FAQ — ${city.name}, ${city.state}

**Q1:** How much does office cleaning cost in ${city.name}?
**A:** Priced by square footage, frequency, and scope. [Contact us](#quote) for a custom quote tailored to your ${city.name} office.

**Q2:** Do you clean after business hours in ${city.name}?
**A:** Yes. Full flexibility — early morning, evenings after close, or weekends. We work around your schedule.

**Q3:** Are your cleaners background-checked?
**A:** Every team member is fully background-screened, bonded, and insured before entering any commercial property.

**Q4:** Do you provide your own supplies and equipment?
**A:** Yes. We bring everything — no need for you to stock supplies.

**Q5:** Do you offer eco-friendly commercial cleaning in ${city.name}?
**A:** Yes. EPA Safer Choice™ certified products exclusively — effective disinfection, no harsh fumes or residue.

**Q6:** Can you start with a one-time deep clean before regular service?
**A:** Absolutely. Many clients begin with a [deep cleaning](/locations/${city.slug}/deep-cleaning) baseline, then move to recurring service.

${faqLatino(city)}

### Section 6 — Social proof
**H2:** ${city.name} Businesses Trust Capital Clean Care

> [PLACEHOLDER — inserir review real do Google Business de cliente B2B em ${city.name}. Ideal: menção a pontualidade, consistência, equipe de confiança, ou ambiente de trabalho limpo.]

### Section 7 — Links internos
${internalLinks(city, "office-cleaning")}

### Section 8 — CTA final
**H2:** Keep Your ${city.name} Office Spotless
Texto: Serving ${city.name} businesses near ${l0}, ZIPs ${city.zips.join(", ")}, including ${n1} and ${n2}. Free quote in 60 seconds.
**CTA:** "Get My Commercial Cleaning Quote" → \`#quote\`
Microcopy: Custom schedule · After-hours available · Bonded & Insured

---

## Links Internos Obrigatórios
| Anchor text | Destino |
|-------------|---------|
| "deep cleaning" | \`/locations/${city.slug}/deep-cleaning\` |
| "house cleaning" | \`/locations/${city.slug}/house-cleaning\` |
| "office cleaning ${city.nearby[0].name}" | \`/locations/${city.nearby[0].slug}/office-cleaning\` |
| "office cleaning ${city.nearby[1].name}" | \`/locations/${city.nearby[1].slug}/office-cleaning\` |

---

## Alt-Text Sugerido — 3 Imagens-Chave

| Posição | Imagem | Alt-text sugerido |
|---------|--------|-------------------|
| Hero | Equipe limpando escritório moderno | \`Capital Clean Care office cleaning service in ${city.name}, ${city.state} — reliable commercial cleaning\` |
| Team | Membros em escritório em uniforme | \`Latino-owned Capital Clean Care bonded commercial cleaning team in ${city.name}, MD\` |
| Products | Produtos EPA em espaço comercial | \`EPA Safer Choice certified eco-friendly products for office cleaning in ${city.name}, ${city.state}\` |

---

${footer(city)}

---

## Notas de Tom
- Tom ligeiramente mais formal e profissional (B2B)
- Enfatizar confiabilidade, discrição, consistência
- "Background-checked" pelo menos 2 vezes (segurança de acesso)
- Mencionar "${city.name}" 5–7 vezes; ${n0} e ${n1} 2 vezes; ${l0} 1 vez
- Mencionar consultórios médicos/odontológicos se relevante para a cidade
`;
}

function genRecurringCleaning(city) {
  const [n0, n1, n2] = city.n;
  const [l0, l1] = city.l;
  const [z0, z1, z2, z3] = [...city.zips, ...city.zips]; // pad if less than 4
  return `# Briefing: Recurring Cleaning in ${city.name}, ${city.state}
**URL:** \`/locations/${city.slug}/recurring-cleaning\`
**Prioridade:** Alta estratégica (maior LTV — clientes recorrentes = receita previsível)
**Word count alvo:** 900–1.100 palavras

---

## SEO On-Page

| Campo | Valor |
|-------|-------|
| **Title tag** | Recurring House Cleaning in ${city.name}, ${city.state} — Weekly & Bi-Weekly Service |
| **Meta description** | Weekly and bi-weekly house cleaning in ${city.name}, ${city.state}. Same trusted team, eco-friendly products, 100% satisfaction guaranteed. Build the routine. Free quote in 60 seconds. |
| **H1** | Recurring House Cleaning in ${city.name}, ${city.state} |
| **Keyword primária** | recurring house cleaning ${city.name} ${city.state} |
| **Keywords secundárias** | weekly cleaning service ${city.name} Maryland, bi-weekly house cleaning ${city.name}, regular cleaning service ${city.name} MD, maid service ${city.name} recurring |
| **Search intent** | Transacional de alto LTV — cliente quer estabelecer rotina de limpeza contínua, não busca limpeza única |
| **Schema** | \`LocalBusiness\` + \`Service\` + \`FAQPage\` + \`AggregateRating\` |

---

## Diferencial de Search Intent vs. House Cleaning

- Cliente JÁ sabe que quer limpeza regular — está comparando opções
- Pain point: não quer treinar novo cleaner toda semana
- Benefício central: **mesma equipe, toda semana, que conhece sua casa**
- Diferencial: equipe latino-owned local, de confiança, accountable

---

## Estrutura de Conteúdo

### Section 1 — Hero
- **H1:** Recurring House Cleaning in ${city.name}, ${city.state}
- **Lead:** Stop cleaning on weekends. Capital Clean Care's recurring service comes to your ${city.name} home — from ${n0} to ${n1} to ${n2} — weekly or bi-weekly, with the same trusted, background-checked team every single visit. Eco-friendly products, 100% satisfaction guaranteed: we re-clean if you're not happy.
- **CTA:** "Set Up Recurring Cleaning in ${city.name}" → \`#quote\`
- **Trust pills:**
${trustPills(city)}

### Section 2 — Planos
**H2:** Choose Your Recurring Cleaning Schedule

| | Weekly | Bi-Weekly | Monthly |
|---|---|---|---|
| **Best for** | Busy families, large homes, pets | Most ${city.name} households | Lighter maintenance |
| **Discount** | Largest recurring discount | Standard recurring discount | Minimal discount |
| **Result** | Always guest-ready | Clean between uses | Seasonal freshness |

### Section 3 — O que inclui
**H2:** What's Included in Every ${city.name} Recurring Clean
- Kitchen: countertops, sink, appliance exteriors, microwave, floor
- Bathrooms: toilet, shower/tub, sink, mirrors, floor
- Bedrooms: dusting, vacuuming, make beds (linens if provided)
- Living areas: dusting, vacuuming, mopping, window sills
- All rooms: baseboards, light switches, door handles

**Add-on rotation (every nth visit):** Inside fridge, inside oven, inside cabinets, laundry

### Section 4 — Benefícios
**H2:** Why Recurring Cleaning Is Better Than One-Time
1. **Cumulative cleanliness** — Regular maintenance prevents buildup. Your home actually gets cleaner over time.
2. **Same team every time** — The same background-checked, bonded crew comes every visit. They learn your preferences, your layout, your standards. No retraining.
3. **Affordable recurring rates** — Recurring clients get better rates than one-time bookings. Get your exact quote in 60 seconds.
4. **Priority scheduling** — First access to preferred time slots and faster rescheduling.

### Section 5 — Como começar
**H2:** Getting Started With Recurring Cleaning in ${city.name}
1. **Deep baseline first** — New clients start with a deeper initial clean to establish a clean baseline.
2. **Consistent team assigned** — Same dedicated, bonded team every visit — whether you're in ZIP ${z0} near ${l0}${z0 === z1 ? `` : ` or in the ${z1} area`}.
3. **Set your schedule** — Weekly, bi-weekly, or monthly. Easy to adjust.
4. **Ongoing care** — 100% satisfaction guaranteed — we re-clean if you're not happy.

### Section 6 — FAQ
**H2:** Recurring Cleaning FAQ — ${city.name}, ${city.state}

**Q1:** What's the difference between weekly and bi-weekly cleaning in ${city.name}?
**A:** Weekly is ideal for larger homes, families with kids or pets. Bi-weekly is our most popular option — clean, well-maintained home without maximum cost.

**Q2:** Do I get the same cleaners every visit?
**A:** Yes. A consistent, bonded and insured team is assigned to your ${city.name} home. No strangers each week.

**Q3:** How much does recurring cleaning cost in ${city.name}?
**A:** Affordable recurring rates discounted vs. one-time cleanings. Get your exact quote in 60 seconds — [free quote here](#quote).

**Q4:** Can I skip or pause my recurring service?
**A:** Yes — 24-hour notice to skip, pause, or modify. No lock-in contracts.

**Q5:** Do you use eco-friendly products for recurring cleaning?
**A:** Yes, always. EPA Safer Choice™ certified — non-toxic, plant-based, safe for children and pets. We serve all ${city.name} ZIPs: ${city.zips.join(", ")}.

**Q6:** Can I start with a one-time clean before committing?
**A:** Absolutely. Many clients try a [house cleaning](/locations/${city.slug}/house-cleaning) or [deep cleaning](/locations/${city.slug}/deep-cleaning) first, then convert.

${faqLatino(city)}

### Section 7 — Social proof
**H2:** What ${city.name} Families Say About Recurring Cleaning

> "Best investment we've made. Coming home to a clean house every week is amazing."
> — **James T.** ⭐⭐⭐⭐⭐

> [PLACEHOLDER — inserir review real do Google Business de cliente em ${city.name}, idealmente mencionando serviço recorrente, mesma equipe, ou rotina de limpeza]

### Section 8 — Links internos
${internalLinks(city, "recurring-cleaning")}

### Section 9 — CTA final
**H2:** Start Your Recurring Clean in ${city.name} Today
Texto: Whether you're near ${l1} or anywhere across ${city.name}'s ${city.zipRange} ZIP codes, we're ready to build your routine. Free quote in 60 seconds.
**CTA:** "Get My Free Recurring Cleaning Quote" → \`#quote\`
Microcopy: No long-term contracts · Easy to reschedule · 100% satisfaction guaranteed

---

## Links Internos Obrigatórios
| Anchor text | Destino |
|-------------|---------|
| "house cleaning" | \`/locations/${city.slug}/house-cleaning\` |
| "deep cleaning" | \`/locations/${city.slug}/deep-cleaning\` |
| "Airbnb cleaning" | \`/locations/${city.slug}/airbnb-cleaning\` |
| "recurring cleaning ${city.nearby[0].name}" | \`/locations/${city.nearby[0].slug}/recurring-cleaning\` |
| "recurring cleaning ${city.nearby[1].name}" | \`/locations/${city.nearby[1].slug}/recurring-cleaning\` |

---

## Alt-Text Sugerido — 3 Imagens-Chave

| Posição | Imagem | Alt-text sugerido |
|---------|--------|-------------------|
| Hero | Equipe em uniforme na porta da casa | \`Capital Clean Care recurring house cleaning in ${city.name}, ${city.state} — same trusted team, every visit\` |
| Team | Membros da equipe sorridentes | \`Latino-owned Capital Clean Care bonded cleaning team for weekly and bi-weekly service in ${city.name}, MD\` |
| Products | Produtos eco-friendly | \`EPA Safer Choice certified non-toxic products for recurring home cleaning in ${city.name}, ${city.state}\` |

---

${footer(city)}

---

## Notas de Tom
- Benefício central: **"stop cleaning on weekends"** — atacar o pain point emocional
- Diferencial #1: **mesma equipe, de confiança, toda semana**
- **Latino-owned** com orgulho — comunidade e accountability
- Mencionar "${city.name}" 7–9 vezes; bairros ${n0} e ${n1} pelo menos 2 vezes; ${l0} 1 vez
- Evitar linguagem de subscrição corporativa — manter tom humano e familiar
`;
}

// ─── SERVICE MAP ──────────────────────────────────────────────────────────────
const SERVICES = [
  { key: "01-house-cleaning",           gen: genHouseCleaning },
  { key: "02-deep-cleaning",            gen: genDeepCleaning },
  { key: "03-move-out-cleaning",        gen: genMoveOutCleaning },
  { key: "04-airbnb-cleaning",          gen: genAirbnbCleaning },
  { key: "05-post-construction-cleaning", gen: genPostConstruction },
  { key: "06-office-cleaning",          gen: genOfficeCleaning },
  { key: "07-recurring-cleaning",       gen: genRecurringCleaning },
];

// ─── GENERATE ─────────────────────────────────────────────────────────────────
let total = 0;
for (const city of CITIES) {
  const dir = join(BASE, city.slug);
  mkdirSync(dir, { recursive: true });
  for (const { key, gen } of SERVICES) {
    if (city.skip.has(key)) {
      console.log(`  SKIP  ${city.slug}/${key} (already approved)`);
      continue;
    }
    const content = gen(city);
    writeFileSync(join(dir, `${key}.md`), content, "utf8");
    console.log(`  WRITE ${city.slug}/${key}`);
    total++;
  }
}
console.log(`\n✓ ${total} briefings generated in briefings-paginas/`);
