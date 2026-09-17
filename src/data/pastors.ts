export interface Pastor {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

/**
 * Substitua os dados abaixo pelas informações reais da liderança.
 * As fotos usam um placeholder de imagem — troque por fotos reais em
 * /src/assets/pastores/ (ou outro diretório de sua preferência).
 */
export const pastors: Pastor[] = [
  {
    id: "pastor-principal",
    name: "[NOME DO PASTOR]",
    role: "Pastor Presidente",
    bio: "[Pequena descrição sobre a trajetória e o chamado deste líder na igreja.]",
    photo: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "pastora-principal",
    name: "[NOME DA PASTORA]",
    role: "Pastora",
    bio: "[Pequena descrição sobre a trajetória e o chamado desta líder na igreja.]",
    photo: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "lider-ministerial",
    name: "[NOME DO LÍDER]",
    role: "Líder de Ministérios",
    bio: "[Pequena descrição sobre a trajetória e o chamado deste líder na igreja.]",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
];
