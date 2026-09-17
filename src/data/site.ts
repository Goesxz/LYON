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
  churchName: "[NOME DA IGREJA]",
  churchShortName: "[SIGLA/NOME CURTO]",
  tagline: "Uma igreja para viver a presença de Deus.",
  metaDescription:
    "[NOME DA IGREJA] — uma comunidade de fé em [CIDADE], acolhendo pessoas para viver a presença de Deus, crescer em comunidade e servir com propósito.",

  url: "https://www.suaigreja.com.br",

  address: {
    street: "[ENDEREÇO COMPLETO]",
    neighborhood: "[BAIRRO]",
    city: "[CIDADE]",
    state: "[UF]",
    zip: "[CEP]",
    mapsUrl: "https://maps.google.com/?q=[ENDEREÇO+COMPLETO]",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
    lat: -23.55052,
    lng: -46.633308,
  },

  contact: {
    whatsapp: "[WHATSAPP, ex: 5511999999999]",
    whatsappDisplay: "[WHATSAPP EXIBIÇÃO, ex: (11) 99999-9999]",
    email: "[EMAIL@SUAIGREJA.COM.BR]",
    phone: "[TELEFONE]",
  },

  social: {
    instagram: "[LINK DO INSTAGRAM]",
    instagramHandle: "@[USUARIO]",
    youtube: "[LINK DO YOUTUBE]",
    facebook: "[LINK DO FACEBOOK]",
    tiktok: "[LINK DO TIKTOK]",
    spotify: "[LINK DO SPOTIFY]",
  },

  services: [
    {
      id: "domingo-manha",
      label: "Culto de Domingo — Manhã",
      day: "Domingo",
      time: "[HORÁRIO, ex: 10h]",
      location: "Templo Sede",
    },
    {
      id: "domingo-noite",
      label: "Culto de Domingo — Noite",
      day: "Domingo",
      time: "[HORÁRIO, ex: 18h]",
      location: "Templo Sede",
    },
    {
      id: "quarta",
      label: "Culto de Oração",
      day: "Quarta-feira",
      time: "[HORÁRIO, ex: 20h]",
      location: "Templo Sede",
    },
  ],

  nextService: {
    label: "Próximo culto",
    day: "Domingo",
    date: "[DATA, ex: 21 de setembro]",
    time: "[HORÁRIO, ex: 18h]",
    location: "[NOME DO LOCAL / ENDEREÇO CURTO]",
  },

  giving: {
    pixKey: "[CHAVE PIX]",
    description:
      "Sua contribuição sustenta o propósito da igreja e alcança vidas através de cada projeto e ministério.",
  },

  online: {
    title: "Continue conectado de onde estiver.",
    description:
      "Assista aos nossos cultos ao vivo ou revisite mensagens anteriores, onde quer que você esteja.",
    liveUrl: "[LINK DA TRANSMISSÃO AO VIVO]",
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
