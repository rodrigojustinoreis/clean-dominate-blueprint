/**
 * Gera src/data/city-nav.ts a partir de src/data/locations.ts.
 *
 * Por quê: Footer, Header e a home leem apenas nome, slug, estado e contagens.
 * Importar `@/data/locations` para isso arrasta o conteúdo editorial de todas as
 * cidades (intro, FAQs, metas) para o grafo de entrada, porque os três componentes
 * não estão atrás de rota lazy. Este módulo derivado carrega só os campos lidos.
 *
 * locations.ts continua sendo a única fonte de verdade. Este arquivo é gerado e
 * conferido por src/data/city-nav.parity.test.ts, que falha se divergir.
 *
 * Uso: node scripts/generate-city-nav.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import ts from "typescript";

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const ENTRADA = resolve(raiz, "src/data/locations.ts");
const SAIDA = resolve(raiz, "src/data/city-nav.ts");

// Transpila locations.ts para CommonJS em memória e lê os valores já avaliados,
// em vez de analisar o texto com expressão regular — filtros como
// `cities.filter(c => c.state === "MD")` precisam ser executados para dar o mesmo
// resultado e a mesma ordem que a aplicação vê.
const js = ts.transpileModule(readFileSync(ENTRADA, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;

const modulo = { exports: {} };
const req = createRequire(import.meta.url);
new Function("exports", "require", "module", js)(modulo.exports, req, modulo);
const { mdCities, dcCities, vaCities, hubs } = modulo.exports;

const cidade = (c) => ({ name: c.name, slug: c.slug, state: c.state });
const hub = (h) => ({ name: h.name, slug: h.slug });

const bloco = (nome, itens, tipo) =>
  `export const ${nome}: ${tipo}[] = ${JSON.stringify(itens, null, 2)};\n`;

const saida = `// ARQUIVO GERADO — não editar à mão.
// Origem: src/data/locations.ts · Gerador: scripts/generate-city-nav.mjs
// Regenerar: node scripts/generate-city-nav.mjs
// A paridade com a origem é verificada por src/data/city-nav.parity.test.ts.
//
// Só os campos que Footer, Header e a home leem. O conteúdo editorial (intro,
// faqs, metaTitle, metaDescription) fica em locations.ts e é carregado apenas
// pelas rotas que o renderizam.

export interface CityNav {
  name: string;
  slug: string;
  state: string;
}

export interface HubNav {
  name: string;
  slug: string;
}

${bloco("mdCities", mdCities.map(cidade), "CityNav")}
${bloco("dcCities", dcCities.map(cidade), "CityNav")}
${bloco("vaCities", vaCities.map(cidade), "CityNav")}
${bloco("hubs", hubs.map(hub), "HubNav")}`;

writeFileSync(SAIDA, saida, "utf8");
console.log(
  `city-nav.ts gerado: ${mdCities.length} MD, ${dcCities.length} DC, ${vaCities.length} VA, ${hubs.length} hubs`,
);
