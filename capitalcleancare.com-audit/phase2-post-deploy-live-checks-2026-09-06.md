# Fase 2 — validação pós-deploy ao vivo

| | check | detalhe |
|---|---|---|
| ✅ | 301 /deep-cleaning-germantown-md → Germantown deep (final 200) | /deep-cleaning-germantown-md [301] → /locations/germantown-md/deep-cleaning [200] |
| ✅ | Germantown deep: 200, index, self-canonical | 200; robots=index; canonical=/locations/germantown-md/deep-cleaning |
| ✅ | sitemap.xml has 296 URLs | 200; 296 |
| ✅ | Germantown deep in sitemap | present |
| ✅ | old Silver Spring post NOT in sitemap | absent |
| ✅ | new Silver Spring guide in sitemap | present |
| ✅ | all sitemap URLs answer 200 | 296/296 ok |
| ✅ | old SS post: 200, canonical → new guide, no hreflang | 200; canonical=/resources/best-house-cleaning-service-silver-spring-md; hreflang links=0 |
| ✅ | new SS guide: 200, self-canonical, index | 200; canonical=/resources/best-house-cleaning-service-silver-spring-md |
| ✅ | Maryland prices guide: title = H1 wording, self-canonical | 200; title='Maryland House Cleaning Cost (2026): $150–$480+ | Capital Clean Care'; H1='Maryland House Cleaning Cost (2026): $150–$480+' |
| ✅ | office cleaning links to small-business guide | 200; link=True |
| ✅ | small-business guide 200, self-canonical | 200 |
| ✅ | Phase 1 redirect still in place (checklist → full guide, final 200) | /resources/deep-cleaning-checklist-dmv-homeowners [301] → /resources/what-is-included-in-a-deep-cleaning [200] |
| ✅ | unknown URL returns real 404 | 404 |
| ✅ | robots.txt live == repo | 200; sha 5f8d0c7146cc |
| ✅ | 23 baseline URLs: SEO fields live == release build | all identical |

**Falhas críticas: 0**
