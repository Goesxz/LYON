export interface Ministry {
  /** Usado na URL: /ministerios/{id} — use apenas letras minúsculas e hífen. */
  id: string;
  name: string;
  /** Frase curta exibida no card, na Home e na lista de ministérios. */
  description: string;
  /** Texto mais completo, exibido na página própria do ministério. */
  fullDescription: string;
  image: string;
  /** Opcional — dia/horário de encontro, se houver um fixo além do culto. */
  meetingDay?: string;
  meetingTime?: string;
  meetingLocation?: string;
  /** Opcional — nome de quem lidera o ministério. */
  leader?: string;
}

/**
 * Substitua pelos ministérios reais da igreja. Os nomes abaixo são
 * exemplos comuns e podem ser renomeados, removidos ou expandidos.
 * Cada ministério aqui gera automaticamente sua própria página em
 * /ministerios/{id} — não é preciso criar uma página por ministério.
 */
export const ministries: Ministry[] = [
  {
    id: "kids",
    name: "Kids",
    description: "Um espaço seguro e divertido para as crianças conhecerem o amor de Deus.",
    fullDescription:
      "[Descrição completa do ministério Kids — para quais idades é voltado, o que as crianças vivem ali, e por que os pais podem confiar nesse espaço.]",
    image: "https://images.unsplash.com/photo-1490138163994-9d6ff3cb5da4?q=80&w=900&auto=format&fit=crop",
    meetingDay: "Domingo",
    meetingTime: "Durante o culto das 18h",
    leader: "[NOME DO LÍDER DO KIDS]",
  },
  {
    id: "jovens",
    name: "Jovens",
    description: "Comunidade e propósito para a nova geração viver sua fé com identidade.",
    fullDescription:
      "[Descrição completa do ministério de Jovens — faixa etária, formato dos encontros, e o que torna esse grupo especial.]",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=900&auto=format&fit=crop",
    meetingDay: "[DIA DO ENCONTRO]",
    meetingTime: "[HORÁRIO]",
    leader: "[NOME DO LÍDER DE JOVENS]",
  },
  {
    id: "louvor",
    name: "Louvor",
    description: "Ministério de adoração que conduz a igreja à presença de Deus.",
    fullDescription:
      "[Descrição completa do ministério de Louvor — como funciona, se há ensaios, e como alguém pode se candidatar a participar.]",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=900&auto=format&fit=crop",
    meetingDay: "[DIA DO ENSAIO]",
    meetingTime: "[HORÁRIO]",
    leader: "[NOME DO LÍDER DE LOUVOR]",
  },
  {
    id: "mulheres",
    name: "Mulheres",
    description: "Um ambiente de acolhimento, crescimento e conexão entre mulheres.",
    fullDescription:
      "[Descrição completa do ministério de Mulheres — formato dos encontros e o que as participantes podem esperar.]",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=900&auto=format&fit=crop",
    meetingDay: "[DIA DO ENCONTRO]",
    meetingTime: "[HORÁRIO]",
    leader: "[NOME DA LÍDER]",
  },
  {
    id: "homens",
    name: "Homens",
    description: "Discipulado e comunidade para homens crescerem em caráter e fé.",
    fullDescription:
      "[Descrição completa do ministério de Homens — formato dos encontros e o que os participantes podem esperar.]",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=900&auto=format&fit=crop",
    meetingDay: "[DIA DO ENCONTRO]",
    meetingTime: "[HORÁRIO]",
    leader: "[NOME DO LÍDER]",
  },
  {
    id: "acao-social",
    name: "Ação Social",
    description: "Servindo a comunidade ao redor com amor prático e presença.",
    fullDescription:
      "[Descrição completa do ministério de Ação Social — que tipo de projeto a igreja realiza e como alguém pode se envolver.]",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=900&auto=format&fit=crop",
    leader: "[NOME DO LÍDER]",
  },
];

export function getMinistryById(id: string): Ministry | undefined {
  return ministries.find((m) => m.id === id);
}
