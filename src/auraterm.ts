import { applyStyles } from "./core/applyStyles.js";

export function auraterm(...styles: string[]) {
  return (text: string) => applyStyles(styles, text);
}
