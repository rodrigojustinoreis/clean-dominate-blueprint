# Pós-deploy — validação ao vivo

| | check | detalhe |
|---|---|---|
| ✅ | 301 /resources/deep-cleaning-checklist-dmv-homeowners → /resources/what-is-included-in-a-deep-cleaning (≤2 hops, final 200) | /resources/deep-cleaning-checklist-dmv-homeowners [301] → /resources/what-is-included-in-a-deep-cleaning [200] |
| ✅ | 301 /resources/deep-cleaning-checklist-dmv-homeowners/ → /resources/what-is-included-in-a-deep-cleaning (≤2 hops, final 200) | /resources/deep-cleaning-checklist-dmv-homeowners/ [301] → /resources/deep-cleaning-checklist-dmv-homeowners [301] → /resources/what-is-included-in-a-deep-cleaning [200] |
| ✅ | 200 /resources/what-is-included-in-a-deep-cleaning | 200 |
| ✅ | robots.txt live == repo | 200; sha live 5f8d0c7146cc / repo 5f8d0c7146cc |
| ✅ | robots: Googlebot group has 8 Disallows | 8 |
| ✅ | robots: Bingbot group has 8 Disallows | 8 |
| ✅ | sitemap.xml has 296 URLs | 200; 296 URLs |
| ✅ | all sitemap URLs answer 200 | 296/296 ok |
| ✅ | old checklist URL not in sitemap | absent |
| ✅ | hreflang /es/areas/aspen-hill-md | 200; [('es', '/es/areas/aspen-hill-md'), ('x-default', '/es/areas/aspen-hill-md')] |
| ✅ | hreflang /es/areas/germantown-md | 200; [('es', '/es/areas/germantown-md'), ('x-default', '/es/areas/germantown-md')] |
| ✅ | hreflang /es/areas/montgomery-village-md | 200; [('es', '/es/areas/montgomery-village-md'), ('x-default', '/es/areas/montgomery-village-md')] |
| ✅ | hreflang /locations/germantown-md | 200; [('en', '/locations/germantown-md'), ('x-default', '/locations/germantown-md')] |
| ✅ | hreflang /locations/montgomery-village-md | 200; [('en', '/locations/montgomery-village-md'), ('x-default', '/locations/montgomery-village-md')] |
| ✅ | footer /: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | footer /services/deep-cleaning: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | footer /locations/bethesda-md: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | footer /es: no noindex hubs | 200; noindex links: none; clarksburg=True monrovia=True |
| ✅ | 23 baseline URLs: SEO fields live == release build | all identical |

**Falhas críticas: 0**
