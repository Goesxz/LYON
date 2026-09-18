/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * ------------------------------------------------------------------
 * Este é o ÚNICO arquivo que você precisa editar para atualizar as
 * informações institucionais da igreja em todo o site.
 *
 * Tudo que estiver entre colchetes [ASSIM] é um placeholder e deve
 * ser substituído pela informação real antes de publicar o site.
 * ------------------------------------------------------------------
 */

export const siteConfig = {
  churchName: "Lyon Church",
  churchShortName: "Lyon Church",
  tagline: "Uma igreja para viver a presença de Deus.",
  metaDescription:
    "Lyon Church — uma comunidade de fé em Embu das Artes, acolhendo pessoas para viver a presença de Deus, crescer em comunidade e servir com propósito.",

  url: "https://www.suaigreja.com.br",

  address: {
    street: "Estr. de Itapecerica, 2124 - Sala 03",
    neighborhood: "Jardim Santo Eduardo",
    city: "Embu das Artes",
    state: "SP",
    zip: "06823-301",
    mapsUrl:
      "https://maps.google.com/?q=Estr.+de+Itapecerica,+2124+-+Jardim+Santo+Eduardo,+Embu+das+Artes+-+SP,+06823-301",
    // Embed sem precisar de chave de API do Google: usa o formato "output=embed".
    // Se quiser trocar por um embed oficial gerado pelo próprio Google Maps
    // (Menu > Compartilhar > Incorporar um mapa > copiar o src do iframe),
    // é só colar a URL completa aqui no lugar desta.
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Estr.+de+Itapecerica,+2124+-+Jardim+Santo+Eduardo,+Embu+das+Artes+-+SP,+06823-301&output=embed",
    lat: -23.6489,
    lng: -46.8511,
  },

  contact: {
    whatsapp: "5511990199977",
    whatsappDisplay: "(11) 99019-9977",
    email: "goesxz@gmail.com",
    phone: "(11) 92718-6507",
  },

  social: {
    instagram: "https://www.instagram.com/lyon.church/",
    instagramHandle: "@lyon.church",
    // A igreja ainda não tem canal no YouTube — deixe vazio ("") até que seja criado.
    // Os componentes que usam este campo já escondem o botão/link automaticamente quando está vazio.
    youtube: "",
    facebook: "[LINK DO FACEBOOK]",
    tiktok: "[LINK DO TIKTOK]",
    spotify: "[LINK DO SPOTIFY]",
  },

  services: [
    {
      id: "domingo",
      label: "Culto de Domingo",
      day: "Domingo",
      time: "18h",
      location: "Estr. de Itapecerica, 2124 - Sala 03",
    },
  ],

  nextService: {
    label: "Próximo culto",
    day: "Domingo",
    // A data não fica fixa aqui — como o culto é toda semana aos domingos,
    // ela é calculada automaticamente em src/utils/date.ts (getNextSundayLabel).
    time: "18h",
    location: "Estr. de Itapecerica, 2124 - Sala 03 — Embu das Artes/SP",
  },

  giving: {
    pixKey: "[CHAVE PIX]",
    description:
      "Sua contribuição sustenta o propósito da igreja e alcança vidas através de cada projeto e ministério.",
  },

  online: {
    title: "Continue conectado de onde estiver.",
    description:
      "Acompanhe nossos cultos e conteúdos pelo Instagram, onde quer que você esteja.",
    // Sem YouTube por enquanto — o botão "Assistir ao culto" aponta para o Instagram.
    // Quando houver um link direto de live, troque aqui.
    liveUrl: "https://www.instagram.com/lyon.church/",
  },
} as const;

export const navLinks = [
  { label: "Sobre", href: "/sobre" },
  { label: "Ministérios", href: "/ministerios" },
  { label: "Eventos", href: "/eventos" },
  { label: "Cultos", href: "/cultos" },
  { label: "Conecte-se", href: "/conecte-se" },
  { label: "Visite-nos", href: "/visite-nos" },
] as const;
