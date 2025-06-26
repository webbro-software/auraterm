type RGB = [number, number, number];

export const codes: Record<string, [string, string]> = {
  red: ["\x1b[31m", "\x1b[39m"],
  green: ["\x1b[32m", "\x1b[39m"],
  blue: ["\x1b[34m", "\x1b[39m"],
  white: ["\x1b[37m", "\x1b[39m"],
  black: ["\x1b[30m", "\x1b[39m"],
  yellow: ["\x1b[33m", "\x1b[39m"],
  magenta: ["\x1b[35m", "\x1b[39m"],
  cyan: ["\x1b[36m", "\x1b[39m"],

  brightRed: ["\x1b[91m", "\x1b[39m"],
  brightGreen: ["\x1b[92m", "\x1b[39m"],
  brightYellow: ["\x1b[93m", "\x1b[39m"],
  brightBlue: ["\x1b[94m", "\x1b[39m"],
  brightMagenta: ["\x1b[95m", "\x1b[39m"],
  brightCyan: ["\x1b[96m", "\x1b[39m"],
  brightWhite: ["\x1b[97m", "\x1b[39m"],

  bgRed: ["\x1b[41m", "\x1b[49m"],
  bgGreen: ["\x1b[42m", "\x1b[49m"],
  bgBlue: ["\x1b[44m", "\x1b[49m"],
  bgYellow: ["\x1b[43m", "\x1b[49m"],
  bgMagenta: ["\x1b[45m", "\x1b[49m"],
  bgCyan: ["\x1b[46m", "\x1b[49m"],
  bgWhite: ["\x1b[47m", "\x1b[49m"],

  bgBrightRed: ["\x1b[101m", "\x1b[49m"],
  bgBrightGreen: ["\x1b[102m", "\x1b[49m"],
  bgBrightYellow: ["\x1b[103m", "\x1b[49m"],
  bgBrightBlue: ["\x1b[104m", "\x1b[49m"],
  bgBrightMagenta: ["\x1b[105m", "\x1b[49m"],
  bgBrightCyan: ["\x1b[106m", "\x1b[49m"],
  bgBrightWhite: ["\x1b[107m", "\x1b[49m"],

  bold: ["\x1b[1m", "\x1b[22m"],
  dim: ["\x1b[2m", "\x1b[22m"],
  italic: ["\x1b[3m", "\x1b[23m"],
  underline: ["\x1b[4m", "\x1b[24m"],
  blink: ["\x1b[5m", "\x1b[25m"],
  inverse: ["\x1b[7m", "\x1b[27m"],
  hidden: ["\x1b[8m", "\x1b[28m"],
  strikethrough: ["\x1b[9m", "\x1b[29m"],
};

export const gradient = {
  text: (text: string, from: RGB, to: RGB): string => {
    const len = text.length;
    return text
      .split('')
      .map((char, i) => {
        const r = Math.round(from[0] + ((to[0] - from[0]) * i) / (len - 1));
        const g = Math.round(from[1] + ((to[1] - from[1]) * i) / (len - 1));
        const b = Math.round(from[2] + ((to[2] - from[2]) * i) / (len - 1));
        return `\x1b[38;2;${r};${g};${b}m${char}`;
      })
      .join('') + '\x1b[0m';
  },
  bg: (text: string, from: RGB, to: RGB): string => {
    const len = text.length;
    return text
      .split('')
      .map((char, i) => {
        const r = Math.round(from[0] + ((to[0] - from[0]) * i) / (len - 1));
        const g = Math.round(from[1] + ((to[1] - from[1]) * i) / (len - 1));
        const b = Math.round(from[2] + ((to[2] - from[2]) * i) / (len - 1));
        return `\x1b[48;2;${r};${g};${b}m${char}`;
      })
      .join('') + '\x1b[0m';
  },
}
