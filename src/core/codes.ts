export const codes: Record<string, [string, string]> = {
  red: ["\x1b[31m", "\x1b[0m"],
  green: ["\x1b[32m", "\x1b[0m"],
  blue: ["\x1b[34m", "\x1b[0m"],
  yellow: ["\x1b[33m", "\x1b[0m"],
  cyan: ["\x1b[36m", "\x1b[0m"],
  magenta: ["\x1b[35m", "\x1b[0m"],

  bold: ["\x1b[1m", "\x1b[22m"],
  dim: ["\x1b[2m", "\x1b[22m"],
  italic: ["\x1b[3m", "\x1b[23m"],
  underline: ["\x1b[4m", "\x1b[24m"],
  inverse: ["\x1b[7m", "\x1b[27m"],
};
