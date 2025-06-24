import { auraterm } from "../src/index.ts";

console.log(auraterm("green")("[TEST]"), " Red:", auraterm("red")("Red text"));
console.log(
  auraterm("green")("[TEST]"),
  " Green + Bold:",
  auraterm("green", "bold")("Green and bold")
);
console.log(
  auraterm("green")("[TEST]"),
  " Unknown Style:",
  auraterm("unknown")("Should be plain")
);

console.log(
  auraterm("green")("[TEST]"),
  " Mixed Styles:",
  auraterm(
    "blue",
    "italic",
    "nothing",
    "bold"
  )("Blue Italic Bold with invalid skipped")
);

console.log(
  auraterm("green")("[TEST]"),
  " Underline:",
  auraterm("underline")("Underlined only")
);

console.log(
  auraterm("green")("[TEST]"),
  " No Styles:",
  auraterm()("Plain text only")
);

console.log(
  auraterm("green")("[TEST]"),
  " Invalid:",
  auraterm("foo", "bar")("No styling should apply")
);

console.log(
  auraterm("green")("[TEST]"),
  " bgRed:",
  auraterm("bgRed")("🔥 Red Background")
);
console.log(
  auraterm("green")("[TEST]"),
  " bgGreen + white:",
  auraterm("bgGreen", "white")("✅ White on Green")
);
console.log(
  auraterm("green")("[TEST]"),
  " bgBlue + bold:",
  auraterm("bgBlue", "bold")("📘 Bold Blue Background")
);
console.log(
  auraterm("green")("[TEST]"),
  " bgYellow + black + underline:",
  auraterm("bgYellow", "black", "underline")("⚠️ Warning")
);
console.log(
  auraterm("green")("[TEST]"),
  " bgMagenta + italic:",
  auraterm("bgMagenta", "italic")("🎨 Styled")
);

console.log(
  auraterm("green")("[TEST]"),
  " bgCyan + red + bold + underline:",
  auraterm(
    "bgCyan",
    "red",
    "bold",
    "underline"
  )("🧪 Cyan BG, Red Text, Bold & Underlined")
);
