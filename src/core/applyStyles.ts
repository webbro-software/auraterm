import { codes } from "./codes.js";

export function applyStyles(styles: string[], text: string): string {
  let openCodes: string = "";
  let closeCodes: string = "";

  for (const style of styles) {
    const code = codes[style];
    if (code) {
      openCodes += code[0];
      closeCodes = code[1] + closeCodes;
    }
  }

  return `${openCodes}${text}${closeCodes}`;
}
