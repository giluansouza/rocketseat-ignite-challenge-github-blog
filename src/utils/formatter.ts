export const TextWithLimit = (text: string, limit: number): string => {
  // Verifica se o texto ultrapassa o limite
  const displayedText = text.length > limit ? text.slice(0, limit) + '...' : text;

  return displayedText
}
