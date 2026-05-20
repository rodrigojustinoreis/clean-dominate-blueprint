# Capital Clean Care — Team Photos

## Instruções para substituir os placeholders

Quando Rodrigo entregar as fotos reais, substitua os arquivos abaixo pelo mesmo nome.
O site atualizará automaticamente sem precisar alterar o código.

## Arquivos necessários

| Arquivo | Uso | Tamanho ideal |
|---------|-----|---------------|
| `rodrigo-portrait.svg` (placeholder) | Foto do fundador Rodrigo | 400×400px |
| `rodrigo-portrait.jpg` | Foto real do Rodrigo | 400×400px, JPG |
| `rodrigo-portrait.webp` | Versão WebP (menor tamanho) | 400×400px, WebP |
| `equipo-grupo.svg` (placeholder) | Foto do time junto | 800×600px |
| `equipo-grupo.jpg` | Foto real do time | 800×600px, JPG |
| `equipo-grupo.webp` | Versão WebP | 800×600px, WebP |

## Como converter para WebP

Se você tiver as fotos em JPG, use um desses métodos:

**Online (grátis):**
- https://squoosh.app — arrasta o arquivo, seleciona WebP, baixa

**macOS Terminal:**
```bash
# Instalar cwebp se não tiver:
brew install webp
# Converter:
cwebp rodrigo-portrait.jpg -o rodrigo-portrait.webp -q 85
cwebp equipo-grupo.jpg -o equipo-grupo.webp -q 85
```

## Especificações das fotos

### rodrigo-portrait (Fundador)
- **Formato:** 1:1 (quadrado), min 400×400px
- **Estilo:** Fundo neutro ou profissional, sorriso, uniforme Capital Clean Care ou roupa casual limpa
- **O que evitar:** Selfie escura, fundo muito bagunçado, sem uniforme

### equipo-grupo (Time)
- **Formato:** 4:3 landscape, min 800×600px
- **Estilo:** Time inteiro com uniforme, van ao fundo ou dentro de uma casa limpa
- **Dica:** Foto na frente da van com logo da empresa fica ótima

## Contato técnico
Para dúvidas: abrir issue no repositório ou chamar no WhatsApp do dev.
