export function capitalizeText(text: string): string {
  let result = "";
  try {
    result = text.replace(/./, (c) => c.toUpperCase());
  } catch (e) {
    result = text;
  }
  return result;
}
