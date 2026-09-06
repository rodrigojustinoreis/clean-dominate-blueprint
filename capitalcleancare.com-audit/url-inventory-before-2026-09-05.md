# Inventário de URLs — dist-before
Fonte: `/private/tmp/claude-501/-Users-rodrigoreis-TESTE-BOSTA/0e87f069-21b6-4f41-ae93-7886ca560fb7/scratchpad/seo-phase1/dist-before` (build local prerenderizado) + `netlify.toml` (347 regras de redirect). Páginas prerenderizadas: **1225**. URLs no sitemap: **296**. Prerenderizadas fora do sitemap: **929**.
## Status das URLs do sitemap (emulação Netlify)
| Status local | URLs |
|---|---|
| 200 | 296 |

| Status em produção (sem seguir redirects) | URLs |
|---|---|
| 200 | 296 |

## Gates de qualidade
- Sitemap contém apenas 200: **sim**
- Sitemap contém apenas canonical próprio: **sim**
- Sitemap sem noindex: **sim**
- Um H1 por página (sitemap): **sim**
- Títulos únicos (sitemap): **sim**
- hreflang válido em todas as páginas prerenderizadas: **NÃO (4 páginas com problema)**
- Páginas do sitemap sem nenhum link interno (órfãs): **0**

### Páginas com hreflang inválido
| path | noindex | hreflang | hreflang_issues |
|---|---|---|---|
| /es/areas/aspen-hill-md | 0 | en=/locations/aspen-hill-md | es=/es/areas/aspen-hill-md | x-default=/locations/aspen-hill-md | en→/locations/aspen-hill-md is 301 (/maryland); x-default→/locations/aspen-hill-md is 301 (/maryland) |
| /es/areas/germantown-md | 0 | en=/locations/germantown-md | es=/es/areas/germantown-md | x-default=/locations/germantown-md | en→/locations/germantown-md is noindex; x-default→/locations/germantown-md is noindex |
| /es/areas/montgomery-village-md | 0 | en=/locations/montgomery-village-md | es=/es/areas/montgomery-village-md | x-default=/locations/montgomery-village-md | en→/locations/montgomery-village-md is noindex; x-default→/locations/montgomery-village-md is noindex |
| /resources/deep-cleaning-checklist-dmv-homeowners | 0 | en=/resources/what-is-included-in-a-deep-cleaning | x-default=/resources/what-is-included-in-a-deep-cleaning | en→/resources/what-is-included-in-a-deep-cleaning not reciprocal; x-default→/resources/what-is-included-in-a-deep-cleaning not reciprocal |

## Páginas noindex mais linkadas (candidatas a link global)
`in_links` = páginas distintas que linkam; `%` = fração de todas as páginas prerenderizadas.

| path | in_links | pct | in_links_from_indexable |
|---|---|---|---|
| /locations/falls-church-va | 1224 | 100.0 | 297 |
| /locations/germantown-md | 1224 | 100.0 | 297 |
| /locations/urbana-md | 1224 | 100.0 | 297 |
| /locations/damascus-md | 37 | 3.0 | 14 |
| /locations/laurel-md | 25 | 2.0 | 4 |
| /locations/burtonsville-md | 23 | 1.9 | 4 |
| /locations/montgomery-village-md | 22 | 1.8 | 3 |
| /locations/brookeville-md | 21 | 1.7 | 1 |
| /locations/hyattsville-md | 21 | 1.7 | 1 |
| /locations/new-market-md | 9 | 0.7 | 7 |
| /locations/kensington-md/deep-cleaning | 7 | 0.6 | 3 |
| /locations/wheaton-md/deep-cleaning | 7 | 0.6 | 1 |
| /locations/chevy-chase-md/recurring-cleaning | 6 | 0.5 | 5 |
| /locations/olney-md/deep-cleaning | 6 | 0.5 | 2 |
| /locations/potomac-md/deep-cleaning | 5 | 0.4 | 2 |
| /locations/germantown-md/deep-cleaning | 4 | 0.3 | 2 |
| /locations/olney-md/house-cleaning | 4 | 0.3 | 2 |
| /locations/olney-md/recurring-cleaning | 4 | 0.3 | 1 |
| /locations/potomac-md/recurring-cleaning | 4 | 0.3 | 1 |
| /locations/prince-georges-county-md | 4 | 0.3 | 3 |
| /locations/wheaton-md/recurring-cleaning | 4 | 0.3 | 1 |
| /locations/chevy-chase-md/airbnb-cleaning | 3 | 0.2 | 2 |
| /locations/clarksburg-md/house-cleaning | 3 | 0.2 | 3 |
| /locations/germantown-md/recurring-cleaning | 3 | 0.2 | 1 |
| /locations/kensington-md/move-out-cleaning | 3 | 0.2 | 2 |

## Links internos para URLs que redirecionam
| destino | status | para | páginas que linkam |
|---|---|---|---|
| /resources/deep-cleaning-checklist-dmv-homeowners | 301 | /resources/what-is-included-in-a-deep-cleaning | 7 |
| /deep-cleaning-germantown-md | 301 | /locations/germantown-md/deep-cleaning | 3 |
| /house-cleaning-wheaton-md | 301 | /locations/wheaton-md/house-cleaning | 3 |
| /move-out-cleaning-rockville-md | 301 | /locations/rockville-md/move-out-cleaning | 3 |
| /deep-cleaning-gaithersburg-md | 301 | /locations/gaithersburg-md/deep-cleaning | 2 |
| /eco-cleaning-bethesda-md | 301 | /locations/bethesda-md/eco-friendly-cleaning | 2 |
| /recurring-cleaning-columbia-md | 301 | /locations/columbia-md/recurring-cleaning | 2 |
| /house-cleaning-silver-spring-md | 301 | /locations/silver-spring-md/house-cleaning | 2 |
| /eco-cleaning-potomac-md | 301 | /locations/potomac-md/eco-friendly-cleaning | 2 |
| /deep-cleaning-kensington-md | 301 | /locations/kensington-md/deep-cleaning | 2 |
| /services/apartment-cleaning | 301 | /services/house-cleaning | 1 |
| /eco-cleaning-chevy-chase-md | 301 | /locations/chevy-chase-md/eco-friendly-cleaning | 1 |
| /locations/aspen-hill-md | 301 | /maryland | 1 |
| /locations/georgetown-dc/house-cleaning | 301 | /locations/georgetown-dc | 1 |

## Links internos para destinos fora do sitemap

Destinos distintos: **941**; links (página×destino): **5781**. Top 20:

| destino | noindex | status | páginas que linkam |
|---|---|---|---|
| /locations/germantown-md | 1 | 200 | 1225 |
| /locations/urbana-md | 1 | 200 | 1225 |
| /locations/falls-church-va | 1 | 200 | 1225 |
| /locations/damascus-md | 1 | 200 | 38 |
| /locations/laurel-md | 1 | 200 | 26 |
| /locations/burtonsville-md | 1 | 200 | 24 |
| /locations/montgomery-village-md | 1 | 200 | 23 |
| /locations/brookeville-md | 1 | 200 | 22 |
| /locations/hyattsville-md | 1 | 200 | 22 |
| /locations/new-market-md | 1 | 200 | 10 |
| /locations/wheaton-md/deep-cleaning | 1 | 200 | 8 |
| /locations/kensington-md/deep-cleaning | 1 | 200 | 8 |
| /resources/deep-cleaning-checklist-dmv-homeowners | 0 | 301 | 7 |
| /locations/chevy-chase-md/recurring-cleaning | 1 | 200 | 7 |
| /locations/olney-md/deep-cleaning | 1 | 200 | 7 |
| /locations/potomac-md/deep-cleaning | 1 | 200 | 6 |
| /locations/prince-georges-county-md | 1 | 200 | 5 |
| /locations/olney-md/house-cleaning | 1 | 200 | 5 |
| /locations/potomac-md/recurring-cleaning | 1 | 200 | 5 |
| /locations/wheaton-md/recurring-cleaning | 1 | 200 | 5 |
