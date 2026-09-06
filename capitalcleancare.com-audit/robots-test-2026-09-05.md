# Teste robots.txt — grupos específicos vs. `*` (RFC 9309)

Gerado por `scripts/robots_test.py` (seleção de grupo + curingas). Antes = `git show c527a08:public/robots.txt`; depois = `public/robots.txt` desta branch.

```

=== /private/tmp/claude-501/-Users-rodrigoreis-TESTE-BOSTA/0e87f069-21b6-4f41-ae93-7886ca560fb7/scratchpad/seo-phase1/robots-before.txt  (7 groups)
  group ['googlebot']: 1 rule(s)
  group ['bingbot']: 1 rule(s)
  group ['twitterbot']: 1 rule(s)
  group ['facebookexternalhit']: 1 rule(s)
  group ['linkedinbot']: 1 rule(s)
  group ['applebot']: 1 rule(s)
  group ['*']: 9 rule(s)
URL                                                       Googlebot Googlebot-Imag        Bingbot facebookextern       Applebot    DuckDuckBot         GPTBot
-------------------------------------------------------------------------------------------------------------------------------------------------------------
/                                                             allow          allow          allow          allow          allow          allow          allow
/services/deep-cleaning                                       allow          allow          allow          allow          allow          allow          allow
/services/deep-cleaning?utm_source=newsletter                 allow          allow          allow          allow          allow          BLOCK          BLOCK
/?utm_source=facebook&utm_medium=social                       allow          allow          allow          allow          allow          BLOCK          BLOCK
/locations/bethesda-md?fbclid=abc123                          allow          allow          allow          allow          allow          BLOCK          BLOCK
/pricing?gclid=xyz                                            allow          allow          allow          allow          allow          BLOCK          BLOCK
/?blog=y                                                      allow          allow          allow          allow          allow          BLOCK          BLOCK
/resources?blogcategory=tips                                  allow          allow          allow          allow          allow          BLOCK          BLOCK
/api/send-quote-email                                         allow          allow          allow          allow          allow          BLOCK          BLOCK
/.netlify/functions/receive-lead                              allow          allow          allow          allow          allow          BLOCK          BLOCK

=== public/robots.txt  (7 groups)
  group ['googlebot']: 9 rule(s)
  group ['bingbot']: 9 rule(s)
  group ['twitterbot']: 1 rule(s)
  group ['facebookexternalhit']: 1 rule(s)
  group ['linkedinbot']: 1 rule(s)
  group ['applebot']: 1 rule(s)
  group ['*']: 9 rule(s)
URL                                                       Googlebot Googlebot-Imag        Bingbot facebookextern       Applebot    DuckDuckBot         GPTBot
-------------------------------------------------------------------------------------------------------------------------------------------------------------
/                                                             allow          allow          allow          allow          allow          allow          allow
/services/deep-cleaning                                       allow          allow          allow          allow          allow          allow          allow
/services/deep-cleaning?utm_source=newsletter                 BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
/?utm_source=facebook&utm_medium=social                       BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
/locations/bethesda-md?fbclid=abc123                          BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
/pricing?gclid=xyz                                            BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
/?blog=y                                                      BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
/resources?blogcategory=tips                                  BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
/api/send-quote-email                                         BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
/.netlify/functions/receive-lead                              BLOCK          BLOCK          BLOCK          allow          allow          BLOCK          BLOCK
```
