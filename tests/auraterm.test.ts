import { auraterm } from "../src/index.ts";
import { codes } from "../src/core/codes.ts";

console.log(auraterm("red")("\nTesting All auraterm Styles\n"));

Object.entries(codes).forEach(([style]) => {
  const label: string = auraterm("green")("[TEST]");
  const result: string = auraterm(style)(`auraterm: ${style}`);
  console.log(label, result);
});

console.log(auraterm("red")("\nMultiple Combined Styles\n"));

const combinedTests: string[][] = [
  ["bold", "underline", "red"],
  ["italic", "bgYellow", "black"],
  ["bold", "italic", "bgCyan", "white"],
  ["bgMagenta", "underline", "brightWhite"],
  ["bgBlue", "bold", "italic", "white"],
];

combinedTests.forEach((styles: string[], i: number) => {
  const label: string = auraterm("green")(`[COMBO ${i + 1}]`);
  const result: string = auraterm(...styles)(`Combo: ${styles.join(" + ")}`);
  console.log(label, result);
});
