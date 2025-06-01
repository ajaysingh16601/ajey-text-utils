# ajeymanize-text-utils

> A lightweight and useful collection of text utility functions for formatting, humanizing, and transforming strings in JavaScript and TypeScript projects.

---

## ✨ Features

- 🔤 Humanize machine-readable strings: `"camelCase" → "Camel Case"`
- 🔁 Convert slugs and underscores to clean titles: `"my-awesome_lib" → "My Awesome Lib"`
- 🚀 Written in TypeScript with full typings
- 📦 Tiny bundle size and no dependencies

---

## 📦 Installation

```bash
npm install ajeymanize-text-utils
```

Or with yarn:

```bash
yarn add ajeymanize-text-utils
```

---

## 🔧 Usage

```ts
import { humanize } from 'ajeymanize-text-utils';

console.log(humanize('my_awesome-packageName'));
// Output: "My Awesome Package Name"
```

### 💡 Functions Available

| Function   | Description                                      |
|------------|--------------------------------------------------|
| `humanize(str)` | Converts `snake_case`, `kebab-case`, or `camelCase` to a clean, spaced string with capitalization |
| `titleCase(str)` | Capitalizes the first letter of each word |
| `slugify(str)` | Converts text to URL-friendly slugs like `my-awesome-string` |

> More functions coming soon! ✨

---

## 🧪 Examples

```ts
humanize('helloWorld_example-test'); // "Hello World Example Test"
titleCase('this is a title');        // "This Is A Title"
slugify('Clean this text!')          // "clean-this-text"
```

---

## 🛠 Contributing

Contributions, ideas, and issues are welcome! To contribute:

1. Fork this repo
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Create a pull request

Please write clean, typed, and tested code. 🙏

---

## 📬 Connect with Me

**Ajey Solanki**  
👨‍💻 Frontend Developer | Open Source Enthusiast  
📧 Email: [ajey.dev@pm.me](mailto:ajaysingh16601@gmail.com)  
🌐 GitHub: [@ajeysolanki](https://github.com/ajaysingh16601)  

---

## 📄 License

MIT © Ajey Solanki
