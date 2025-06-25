# 🎨 `auraterm` -  Style terminal output with ease.

![image](https://github.com/user-attachments/assets/dd011710-d1ef-4bb4-bc03-bbc4d9423356)
![image](https://github.com/user-attachments/assets/44428501-4b08-45f6-a6fb-edddd90515c8)




A minimal, developer-first terminal styling utility.  
Built for simplicity and joy - style your terminal output with colors, backgrounds, and text decorations using a clean, intuitive API.

---

## ✨ Features

- 🎯 Tiny, fast, and dependency-free
- 💅 Intuitive API: `auraterm("red", "bold")("Hello")`
- 🎨 Supports foreground colors, background colors, and styles
- 🧠 Easy to extend
- 🧪 Perfect for CLI tools or learning projects

---

## 📦 Installation

```bash
npm install @webbro-software/auraterm
```

---

## 🚀 Usage

```ts
import { auraterm } from "@webbro-software/auraterm";

console.log(auraterm("red")("This is red"));
console.log(auraterm("green", "bold")("Bold green text"));
console.log(
  auraterm("bgBlue", "white", "underline")("White text with blue background")
);
```

---

## 🎨 Supported Styles

### ✅ Text Colors

`black`, `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`

### ✅ Background Colors

`bgBlack`, `bgRed`, `bgGreen`, `bgYellow`, `bgBlue`, `bgMagenta`, `bgCyan`, `bgWhite`

### ✅ Text Effects

`bold`, `italic`, `underline`

---

## 📁 Folder Structure

```
auraterm/
├── src/
│   ├── index.ts          # Entry point
│   ├── auraterm.ts       # Core function
│   ├── applyStyles.ts    # Style application logic
│   └── codes.ts          # ANSI escape codes
├── tests/
│   └── auraterm.test.ts  # Manual tests for output
├── dist/                 # Transpiled output (after build)
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧪 Run Tests

```bash
npm install
npm run test
```

You should see styled text printed to your terminal.

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
✅ Green Success
❌ Red Error
ℹ️ Blue Info with underline
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
4. ✅ Make sure it builds and tests pass: `npm run build && npm run test`
5. 📥 Commit and push: `git commit -m "Add: my awesome feature"`
6. 📪 Open a pull request

> 💬 For ideas, discussions, or bugs - feel free to open an issue.

---

## 📄 License

[MIT](./LICENSE)
