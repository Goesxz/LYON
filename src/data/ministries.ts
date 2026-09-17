export interface Ministry {
  id: string;
  name: string;
  description: string;
  image: string;
}

/**
 * Substitua pelos ministérios reais da igreja. Os nomes abaixo são
 * exemplos comuns e podem ser renomeados, removidos ou expandidos.
 */
export const ministries: Ministry[] = [
  {
    id: "kids",
    name: "Kids",
    description: "Um espaço seguro e divertido para as crianças conhecerem o amor de Deus.",
    image: "https://images.unsplash.com/photo-1490138163994-9d6ff3cb5da4?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "jovens",
    name: "Jovens",
    description: "Comunidade e propósito para a nova geração viver sua fé com identidade.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "louvor",
    name: "Louvor",
    description: "Ministério de adoração que conduz a igreja à presença de Deus.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "mulheres",
    name: "Mulheres",
    description: "Um ambiente de acolhimento, crescimento e conexão entre mulheres.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "homens",
    name: "Homens",
    description: "Discipulado e comunidade para homens crescerem em caráter e fé.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "acao-social",
    name: "Ação Social",
    description: "Servindo a comunidade ao redor com amor prático e presença.",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=900&auto=format&fit=crop",
  },
];
