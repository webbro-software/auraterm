import { codes } from "./codes.js";
import { gradient } from "./codes.js";

const colorMap: Record<string, [number, number, number]> = {
  black: [0, 0, 0],
  red: [255, 0, 0],
  green: [0, 255, 0],
  yellow: [255, 255, 0],
  blue: [0, 0, 255],
  magenta: [255, 0, 255],
  cyan: [0, 255, 255],
  white: [255, 255, 255],
  orange: [255, 128, 0],
  purple: [128, 0, 128],
  pink: [255, 105, 180],
  gray: [128, 128, 128],
};

function parseGradientStyle(style: string): {
  type: "text" | "bg";
  from: [number, number, number];
  to: [number, number, number];
} | null {
  const parts = style.split(":");
  if (parts.length !== 3 || parts[0] !== "gradient") return null;

  const type = parts[1] as "text" | "bg";
  const [fromName, toName] = parts[2].split("-");

  const from = colorMap[fromName];
  const to = colorMap[toName];

  if (!from || !to) return null;

  return { type, from, to };
}

export function applyStyles(styles: string[], text: string): string {
  return styles.reduce((acc, style) => {
    if (style.startsWith("gradient:")) {
      const parsed = parseGradientStyle(style);
      if (parsed) {
        const { type, from, to } = parsed;
        return type === "text"
          ? gradient.text(acc, from, to)
          : gradient.bg(acc, from, to);
      }
    }

    const code = codes[style];
    return code ? `${code[0]}${acc}${code[1]}` : acc;
  }, text);
}
