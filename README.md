# bless-ui

Reusable component library for React 18 + TailwindCSS, designed for internal and public use across Bless Network web projects.

> 📦 Published as [@blessnetwork/bless-ui](https://www.npmjs.com/package/@blessnetwork/bless-ui)

---

## 🚀 Overview

**bless-ui** is a modern, accessible, and theme-ready React UI library built with Tailwind CSS.

It includes:

- 🧱 Button, Input, Cards, Popover, and more
- 🎨 Icons designed to match the Bless design system
- ⚛️ Compatible with React 18+ and modern frameworks like Next.js
- 📦 Distributed as an ES6 module for modern bundlers

---

## Run locally

Install dependencies:

```bash
yarn install
```

Run project:

```bash
yarn dev
```

Navigate to a [http:localhost:3000](http:localhost:3000)

---

## 📦 Installation

### Yarn

```bash
yarn add @blessnetwork/bless-ui
```

### NPM

```bash
npm install @blessnetwork/bless-ui
```

---

## 🎨 Tailwind Configuration

Update your `tailwind.config.js`:

```js
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@blessnetwork/bless-ui/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
```

---

## 📚 Documentation

📖 Full documentation and usage examples:  
➡️ [https://blessnetwork.github.io/bless-ui](https://blessnetwork.github.io/bless-ui)

---

## 🛠️ Development

- Components live in `src/components/ui`
- Docs live in `docs/` and are powered by [Docsify](https://docsify.js.org)
- Run docs locally:

```bash
npx docsify-cli serve docs
```

---

## 📦 NPM Publishing

This module publishes automatically when the `main` branch is updated via GitHub Actions. To publish manually, bump the version and push:

```bash
npm version patch
git push --follow-tags
```

---

## 🔒 License

MIT © [Bless Network](https://bless.network)
