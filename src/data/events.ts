export interface ChurchEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  link?: string;
}

/**
 * Lista de eventos. No futuro, esta função pode ser substituída por uma
 * chamada a uma API ou CMS (ex: fetch em um endpoint) sem alterar os
 * componentes que a consomem — eles só esperam um array de ChurchEvent.
 */
export function getUpcomingEvents(): ChurchEvent[] {
  return events;
}

const events: ChurchEvent[] = [
  {
    id: "evento-1",
    name: "[NOME DO EVENTO]",
    date: "[DATA]",
    time: "[HORÁRIO]",
    location: "[LOCAL]",
    description: "[Descrição curta sobre o evento e por que participar.]",
    image: "https://images.unsplash.com/photo-1508997449629-303059a039c0?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "evento-2",
    name: "[NOME DO EVENTO]",
    date: "[DATA]",
    time: "[HORÁRIO]",
    location: "[LOCAL]",
    description: "[Descrição curta sobre o evento e por que participar.]",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
  {
    id: "evento-3",
    name: "[NOME DO EVENTO]",
    date: "[DATA]",
    time: "[HORÁRIO]",
    location: "[LOCAL]",
    description: "[Descrição curta sobre o evento e por que participar.]",
    image: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=1200&auto=format&fit=crop",
    link: "#",
  },
];
