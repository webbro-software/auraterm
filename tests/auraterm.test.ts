import { auraterm } from "../src/index.ts";
import { codes } from "../src/core/codes.ts";

console.log(auraterm("red")("\nTesting All auraterm Styles\n"));

Object.entries(codes).forEach(([style]) => {
  if (style === "gradient") return;

  const label: string = auraterm("green")("[TEST]");
  const result: string = auraterm(style)(`auraterm: ${style}`);
  console.log(label, result);
});

console.log(auraterm("red")("\nMultiple Combined Styles\n"));

const combinedTests: string[][] = [
  ["bold", "underline", "red"],
  ["italic", "bgYellow", "black"],
  ["bold", "italic", "bgCyan", "red"],
  ["bgMagenta", "underline", "brightWhite"],
  ["bgRed", "bold", "italic", "white"],
];

combinedTests.forEach((styles: string[], i: number) => {
  const label: string = auraterm("green")(`[COMBO ${i + 1}]`);
  const result: string = auraterm(...styles)(`Combo: ${styles.join(" + ")}`);
  console.log(label, result);
});

console.log(auraterm("red")("\nGradient Text Tests\n"));

const gradientTextTests: [string, string][] = [
  ["gradient:text:red-blue", "Red to Blue"],
  ["gradient:text:green-yellow", "Green to Yellow"],
  ["gradient:text:magenta-cyan", "Magenta to Cyan"],
  ["gradient:text:orange-purple", "Orange to Purple"],
];

gradientTextTests.forEach(([style, label], i) => {
  const testLabel = auraterm("green")(`[GRAD ${i + 1}]`);
  const result = auraterm(style)(`Gradient: ${label}`);
  console.log(testLabel, result);
});

console.log(auraterm("red")("\nGradient Background Tests\n"));

const gradientBgTests: [string, string, string][] = [
  ["gradient:bg:red-blue", "Red to Blue BG", "black"],
  ["gradient:bg:green-yellow", "Green to Yellow BG", "black"],
  ["gradient:bg:black-white", "Black to White BG", "black"],
  ["gradient:bg:orange-purple", "Orange to Purple BG", "black"],
];

gradientBgTests.forEach(([style, label, fg], i) => {
  const testLabel = auraterm("green")(`[GRADBG ${i + 1}]`);
  const result = auraterm(style, fg)(`  Gradient BG: ${label}  `);
  console.log(testLabel, result);
});
