/**
 * city-nav.ts é gerado a partir de locations.ts. Este teste é o que impede as duas
 * fontes de divergirem: se alguém acrescentar uma cidade, renomear uma ou mudar a
 * ordem em locations.ts sem regenerar, o teste falha e aponta o comando.
 *
 * Compara valor e ORDEM, porque o Footer usa slice(0, 8) e slice(0, 4) — a ordem
 * decide quais cidades aparecem.
 */
import { describe, it, expect } from "vitest";
import { mdCities, dcCities, vaCities, hubs } from "@/data/locations";
import {
  mdCities as navMd,
  dcCities as navDc,
  vaCities as navVa,
  hubs as navHubs,
} from "@/data/city-nav";

const AJUDA = "Rode `node scripts/generate-city-nav.mjs` para regenerar src/data/city-nav.ts.";

const cidades = (origem: typeof mdCities) =>
  origem.map((c) => ({ name: c.name, slug: c.slug, state: c.state }));

describe("city-nav é derivado fiel de locations", () => {
  it.each([
    ["mdCities", mdCities, navMd],
    ["dcCities", dcCities, navDc],
    ["vaCities", vaCities, navVa],
  ])("%s: mesmos name/slug/state, mesma ordem", (_nome, origem, derivado) => {
    expect(derivado, AJUDA).toEqual(cidades(origem));
  });

  it("hubs: mesmos name/slug, mesma ordem", () => {
    expect(navHubs, AJUDA).toEqual(hubs.map((h) => ({ name: h.name, slug: h.slug })));
  });

  it("as contagens que a home publica não mudam", () => {
    expect([navMd.length, navDc.length, navVa.length], AJUDA).toEqual([
      mdCities.length,
      dcCities.length,
      vaCities.length,
    ]);
  });

  it("o derivado não carrega conteúdo editorial", () => {
    const campos = new Set(navMd.flatMap((c) => Object.keys(c)));
    expect([...campos].sort()).toEqual(["name", "slug", "state"]);
  });
});
