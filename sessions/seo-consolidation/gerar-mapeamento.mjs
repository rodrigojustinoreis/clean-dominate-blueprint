import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = __dirname;

// ─── 1. CIDADES (49 total) ────────────────────────────────────────────────────
const PRIORITY_CITIES = new Set([
  "rockville-md", "bethesda-md", "silver-spring-md", "gaithersburg-md",
  "germantown-md", "potomac-md", "chevy-chase-md", "north-bethesda-md",
  "wheaton-md", "kensington-md", "olney-md",
]);

const ALL_CITIES = [
  // MD prioridade
  "rockville-md","bethesda-md","silver-spring-md","gaithersburg-md",
  "germantown-md","potomac-md","chevy-chase-md","north-bethesda-md",
  "wheaton-md","kensington-md",
  // MD secundário
  "frederick-md","clarksburg-md","damascus-md","college-park-md",
  "laurel-md","olney-md","bowie-md","hyattsville-md","takoma-park-md",
  "burtonsville-md","montgomery-village-md","columbia-md","ellicott-city-md",
  "north-potomac-md","boyds-md","brookeville-md","mount-airy-md",
  "kentlands-md","monrovia-md",
  // DC
  "washington-dc","capitol-hill-dc","georgetown-dc","dupont-circle-dc",
  "adams-morgan-dc","washington-dc-ne","downtown-dc","shaw-dc",
  "columbia-heights-dc","navy-yard-dc",
  // VA
  "arlington-va","fairfax-va","mclean-va","alexandria-va","falls-church-va",
  "reston-va","vienna-va","tysons-va","herndon-va","annandale-va",
];

// ─── 2. SERVIÇOS: 20 variantes → 8 canônicos ─────────────────────────────────
// Canônicos usados em páginas cidade+serviço (7)
const CITY_SERVICE_CANONICALS = new Set([
  "house-cleaning","deep-cleaning","move-out-cleaning",
  "airbnb-cleaning","post-construction-cleaning","office-cleaning",
  "recurring-cleaning",
]);
// Canônicos somente no nível /services/ (não geram páginas de cidade)
const SERVICE_ONLY_CANONICALS = new Set(["eco-friendly-cleaning"]);

const ALL_CANONICALS = new Set([...CITY_SERVICE_CANONICALS, ...SERVICE_ONLY_CANONICALS]);

// Mapa de sinônimos → canônico
const SERVICE_CANON = {
  "house-cleaning":          "house-cleaning",
  "maid-service":            "house-cleaning",
  "residential-cleaning":    "house-cleaning",
  "house-cleaning-near-me":  "house-cleaning",
  "affordable-cleaning":     "house-cleaning",
  "professional-maid-service":"house-cleaning",
  "best-cleaning-company":   "house-cleaning",
  "top-rated-cleaners":      "house-cleaning",
  "licensed-cleaning":       "house-cleaning",
  "apartment-cleaning":      "house-cleaning",
  "deep-cleaning":           "deep-cleaning",
  "spring-cleaning":         "deep-cleaning",
  "move-out-cleaning":       "move-out-cleaning",
  "move-in-cleaning":        "move-out-cleaning",
  "recurring-cleaning":      "recurring-cleaning",
  "eco-friendly-cleaning":   "eco-friendly-cleaning",
  "airbnb-cleaning":         "airbnb-cleaning",
  "post-construction-cleaning":"post-construction-cleaning",
  "office-cleaning":         "office-cleaning",
  "commercial-cleaning":     "office-cleaning",
};

const ALL_SERVICES = Object.keys(SERVICE_CANON);

// ─── 3. GERAR MAPEAMENTO ──────────────────────────────────────────────────────
const rows = [];
const header = "url_atual,cidade,servico,grupo_canonico,acao,redirect_destino";

let manter = 0, redir = 0;

for (const city of ALL_CITIES) {
  const isPriority = PRIORITY_CITIES.has(city);
  for (const service of ALL_SERVICES) {
    const canonical = SERVICE_CANON[service];
    const url = `/locations/${city}/${service}`;
    const isCanonicalService = CITY_SERVICE_CANONICALS.has(service);
    const isServiceOnly = SERVICE_ONLY_CANONICALS.has(service);

    let acao, redirectTo;

    if (isPriority && isCanonicalService) {
      // Página boa — manter
      acao = "manter";
      redirectTo = "";
      manter++;
    } else if (isPriority && isServiceOnly) {
      // Eco/recurring para cidade prioridade → /services/[canonical]
      acao = "301";
      redirectTo = `/services/${canonical}`;
      redir++;
    } else if (isPriority && !isCanonicalService) {
      // Sinônimo em cidade prioridade → /locations/[city]/[canonical]
      acao = "301";
      redirectTo = CITY_SERVICE_CANONICALS.has(canonical)
        ? `/locations/${city}/${canonical}`
        : `/services/${canonical}`;
      redir++;
    } else {
      // Cidade não-prioridade: qualquer serviço → /services/[canonical]
      acao = "301";
      redirectTo = CITY_SERVICE_CANONICALS.has(canonical)
        ? `/services/${canonical}`
        : `/services/${canonical}`;
      redir++;
    }

    rows.push(`${url},${city},${service},${canonical},${acao},${redirectTo}`);
  }
}

// Adicionar também as /locations/[city] (hubs de cidade)
const CITY_HUB_KEEP = new Set([...PRIORITY_CITIES]);
for (const city of ALL_CITIES) {
  const url = `/locations/${city}`;
  const acao = CITY_HUB_KEEP.has(city) ? "manter" : "301";
  const redirectTo = acao === "301" ? "/maryland" : "";
  rows.push(`${url},${city},HUB,HUB,${acao},${redirectTo}`);
}

const csv = header + "\n" + rows.join("\n");
writeFileSync(join(OUT, "mapeamento-urls.csv"), csv, "utf8");

// ─── 4. GERAR redirects-301.txt ───────────────────────────────────────────────
const redirectLines = [];
for (const row of rows) {
  const [url, , , , acao, dest] = row.split(",");
  if (acao === "301" && dest) {
    redirectLines.push(`${url}  →  ${dest}`);
  }
}
writeFileSync(join(OUT, "redirects-301.txt"), redirectLines.join("\n"), "utf8");

// ─── 5. RELATÓRIO RESUMO ──────────────────────────────────────────────────────
const total = rows.length;
console.log("═══════════════════════════════════════════════════");
console.log(" MAPEAMENTO SEO — Capital Clean Care");
console.log("═══════════════════════════════════════════════════");
console.log(`Total de URLs mapeadas : ${total}`);
console.log(`  → MANTER             : ${manter} (cidade+serviço canônico × prioridade)`);
console.log(`  → 301 redirect        : ${redir + (ALL_CITIES.length - PRIORITY_CITIES.size)}`);
console.log("");
console.log("CIDADES PRIORIDADE (11):");
[...PRIORITY_CITIES].forEach(c => console.log(`  ✓ /locations/${c}`));
console.log("");
console.log("SERVIÇOS CANÔNICOS — páginas cidade+serviço (7):");
[...CITY_SERVICE_CANONICALS].forEach(s => console.log(`  ✓ ${s}`));
console.log("");
console.log("SERVIÇOS APENAS NO NÍVEL /services/ (1):");
[...SERVICE_ONLY_CANONICALS].forEach(s => console.log(`  ✓ ${s}`));
console.log("");
console.log("SINÔNIMOS ELIMINADOS (12 → 301):");
Object.entries(SERVICE_CANON)
  .filter(([k,v]) => k !== v)
  .forEach(([k,v]) => console.log(`  ✗ ${k}  →  ${v}`));
console.log("");
console.log(`Arquivos gerados:`);
console.log(`  sessions/seo-consolidation/mapeamento-urls.csv`);
console.log(`  sessions/seo-consolidation/redirects-301.txt`);
console.log("═══════════════════════════════════════════════════");
