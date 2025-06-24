import { applyStyles } from "./core/applyStyles.ts";

export function auraterm(...styles: string[]) {
  return (text: string) => applyStyles(styles, text);
}
