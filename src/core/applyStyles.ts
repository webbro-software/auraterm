import { codes } from "./codes.ts";

export function applyStyles(styles: string[], text: string): string {
  let openCodes = "";
  let closeCodes = "";

  for (const style of styles) {
    const code = codes[style];
    if (code) {
      openCodes += code[0];
      // prepend closing codes to keep order when nesting
      closeCodes = code[1] + closeCodes;
    }
  }

  return `${openCodes}${text}${closeCodes}`;
}
