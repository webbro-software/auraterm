# 🎨 `auraterm` - Style terminal output with ease

![auraterm gradient demo](https://github.com/user-attachments/assets/dd011710-d1ef-4bb4-bc03-bbc4d9423356)
![auraterm all styles demo](https://github.com/user-attachments/assets/14ff8077-78b3-4e71-a52c-0fcbce8f7fad)

A minimal, developer-first terminal styling utility.  
Built for simplicity and joy — style your terminal output with colors, backgrounds, gradients, and text decorations using a clean, intuitive API.

---

## ✨ Features

- ⚡ Tiny, fast, and dependency-free
- 💅 Intuitive API: `auraterm("red", "bold")("Hello")`
- 🌈 Full gradient support: `gradient:text:red-blue`
- 🎨 Foreground, background, and styles (bold, italic, etc.)
- 🧠 Extensible design — add custom styles if needed
- 🧪 Great for CLI tools, test output, or learning projects

---

## 📦 Installation

```bash
npm install @webbro-software/auraterm
```

---

## 🚀 Usage

```js
import { auraterm } from "@webbro-software/auraterm";

console.log(auraterm("red")("This is red"));
console.log(auraterm("green", "bold")("Bold green text"));
console.log(
  auraterm("bgBlue", "white", "underline")("White on blue background")
);
console.log(auraterm("gradient:text:red-blue")("Gradient from red to blue"));
console.log(
  auraterm("gradient:bg:orange-purple", "white")("Gradient BG with white text")
);
```

---

## 🎨 Supported Styles

### ✅ Text Colors

`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`
`brightBlack`, `brightRed`, ..., `brightWhite`

### ✅ Background Colors

`bgBlack`, `bgRed`, ..., `bgWhite`
`bgBrightRed`, ..., `bgBrightWhite`

### ✅ Text Effects

`bold`, `dim`, `italic`, `underline`, `blink`, `inverse`, `hidden`, `strikethrough`

### ⚡ Gradient Support

```js
auraterm("gradient:text:red-blue")("Rainbow text");
auraterm(
  "gradient:bg:green-yellow",
  "black"
)("Black text on gradient background");
```

You can use any of the following named colors:

`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`,
`orange`, `purple`, `pink`, `gray`

---

## 🧠 How Gradient Works

To apply gradients:

- Text gradient: `gradient:text:fromColor-toColor`
- Background gradient: `gradient:bg:fromColor-toColor`
- Add a solid foreground color with background gradients (e.g. `"white"`, `"black"`)

---

## 📁 Folder Structure

```
auraterm/
├── dist/                   # 🔧 Compiled output
├── src/                    # 💡 Source code
│   ├── core/               # 🎯 Core logic
│   │   ├── applyStyles.ts
│   │   └── codes.ts
│   ├── auraterm.ts         # 🧠 Main function
│   ├── index.ts            # 🚪 Entry export
├── tests/                  # 🧪 Test cases
├── README.md               # 📘 This doc
├── package.json            # 📦 Config
├── tsconfig.json           # ⚙️ TypeScript settings
```

---

## 🧪 Run Tests

```bash
npm install
npm run test
```

You should see styled text printed with colors, effects, and gradients.

---

## 🔧 Dev Commands

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run build` | Compile TypeScript       |
| `npm run test`  | Run test file manually   |
| `npm link`      | Link locally for dev use |

---

## 📚 Example Output

```bash
✅  green [PASS]
❌  red [ERROR]
ℹ️  underline + cyan [INFO]
```

---

## 👤 Author

Made with ❤️ by [@usmonovshohruxmirzo](https://github.com/usmonovshohruxmirzo)  
Maintained by [WebBro Software](https://github.com/webbro-software)

---

## 🤝 Contributing

We welcome contributions from the community!

### Steps to Contribute:

1. 🍴 Fork the repository
2. 🛠️ Create a new branch: `git checkout -b my-feature`
3. ✨ Add your changes or improvements
4. ✅ Build and test: `npm run build && npm run test`
5. 📥 Commit and push: `git commit -m "Add: my awesome feature"`
6. 📪 Open a pull request

> 💬 Questions or ideas? [Open an issue](https://github.com/webbro-software/auraterm/issues)

---

## 📄 License

[MIT](./LICENSE)
