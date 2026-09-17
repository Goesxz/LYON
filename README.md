# Site institucional — [NOME DA IGREJA]

Site institucional moderno, construído com **React + TypeScript + Vite + Tailwind CSS v4**, sem backend (site 100% estático, front-end only).

## Como rodar no VS Code

Pré-requisito: [Node.js](https://nodejs.org) 18+ instalado.

```bash
npm install
npm run dev
```

Abra o endereço mostrado no terminal (normalmente `http://localhost:5173`).

Para gerar a versão de produção (pasta `dist/`, pronta para hospedar em qualquer serviço estático — Vercel, Netlify, Cloudflare Pages etc.):

```bash
npm run build
npm run preview   # para conferir o build localmente
```

## Onde editar o conteúdo

Todo o conteúdo institucional fica centralizado em `src/data/`, para que você não precise mexer nos componentes para atualizar informações:

| Arquivo | O que contém |
|---|---|
| `src/data/site.ts` | Nome da igreja, endereço, horários de culto, WhatsApp, redes sociais, textos do hero e das seções |
| `src/data/pastors.ts` | Liderança/pastores (nome, cargo, bio, foto) |
| `src/data/ministries.ts` | Ministérios (nome, descrição, imagem) |
| `src/data/events.ts` | Eventos (a função `getUpcomingEvents()` pode futuramente ser trocada por uma chamada a uma API/CMS) |
| `src/data/gallery.ts` | Imagens da galeria de momentos |

Busque por `[TEXTO ENTRE COLCHETES]` em `src/data/site.ts` e `src/data/pastors.ts` — são os placeholders que precisam ser substituídos por informações reais antes de publicar.

As imagens atualmente usadas são fotos de banco de imagens (Unsplash), apenas para preencher o layout — substitua pelas fotos reais da igreja assim que possível (recomenda-se colocar os arquivos em `src/assets/` e importá-los, ou usar um CDN de imagens).

## Estrutura do projeto

```
src/
  components/
    layout/      Header, MobileMenu, Footer
    sections/    Cada seção da Home (Hero, NextService, About, Vision...)
    cards/       Cards reutilizáveis (MinistryCard, PastorCard, EventCard...)
    ui/          SectionHeading, CTA, Reveal (animação), ícones
    social/      SocialLinks
  data/          Conteúdo institucional centralizado (ver tabela acima)
  hooks/         useScrollReveal (animação de entrada ao rolar a página)
  pages/         Home + páginas provisórias das demais rotas
  index.css      Identidade visual (tokens de cor, tipografia, espaçamento)
  App.tsx        Rotas (react-router-dom)
```

## Identidade visual

Definida em `src/index.css`, no bloco `@theme`:

- **Tipografia**: Fraunces (títulos, editorial/serifada) + Inter (corpo, sans-serif)
- **Paleta**: tons profundos quase-pretos (`ink`), areia/creme (`sand`, `cream`) e um dourado discreto de acento (`gold`)
- **Cards**: `rounded-card` (12px), sombras muito sutis
- **Botões**: pílula (`rounded-full`), altura mínima de 48px (toque confortável no mobile)
- **Animações**: fade-in + leve deslocamento vertical ao entrar na viewport (`.reveal`, via `useScrollReveal`), respeitando `prefers-reduced-motion`

## Próximas páginas

As rotas `/sobre`, `/ministerios`, `/eventos`, `/cultos`, `/conecte-se`, `/visite-nos` e `/contribua` já existem e estão navegáveis, atualmente como páginas provisórias (`PlaceholderPage`). Substitua cada uma por uma página completa conforme o conteúdo for sendo definido — a estrutura de componentes e dados já está pronta para isso.

## Observações técnicas

- Sem backend: todo o conteúdo é estático, definido nos arquivos de `src/data/`.
- SEO básico configurado em `index.html` (title, meta description, Open Graph) e em `public/robots.txt` e `public/sitemap.xml` — atualize as URLs quando o domínio definitivo estiver definido.
- Mapa embutido via iframe do Google Maps (`src/data/site.ts` → `address.mapsEmbedUrl`) — gere o link real em Google Maps → Compartilhar → Incorporar um mapa.
- WhatsApp: o link é montado automaticamente a partir de `contact.whatsapp` (formato `55DDDNÚMERO`, apenas números).
- Este documento e os placeholders foram escritos originalmente para o desenvolvimento do site — não copie textos, imagens ou identidade visual de sites de terceiros ao substituir o conteúdo.
