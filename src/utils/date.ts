/**
 * Como o culto acontece TODO domingo, em vez de digitar a data manualmente
 * toda semana em src/data/site.ts, calculamos automaticamente a data do
 * próximo domingo a partir do dia de hoje.
 */
export function getNextSundayLabel(): string {
  const today = new Date();
  const dayOfWeek = today.getDay(); // 0 = domingo, 1 = segunda, ... 6 = sábado
  const daysUntilSunday = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;

  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);

  return nextSunday.toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
  });
}

