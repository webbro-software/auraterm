import { codes } from "./codes.js";

export function applyStyles(styles: string[], text: string): string {
  return styles.reduce((acc, style) => {
    const code = codes[style];
    return code ? `${code[0]}${acc}${code[1]}` : acc;
  }, text);
}
