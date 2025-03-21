# Bless UI

Reusable UI components for React 18 apps using Tailwind CSS.

> 📦 This is the documentation for the **@blessnetwork/bless-ui** NPM module.

---

## ✨ Installation

### With Yarn

```bash
yarn add @blessnetwork/bless-ui
```

### With NPM

```bash
npm install @blessnetwork/bless-ui
```

---

## 🎨 Tailwind Setup

Make sure your Tailwind config includes the module in `content`:

```js
// tailwind.config.js
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

## 📚 Usage Example

```tsx
import { Button } from '@blessnetwork/bless-ui'

export default function Example() {
	return <Button className="bg-blue-600 text-white">Click Me</Button>
}
```

---

## 📖 Explore Components

Use the sidebar to browse documentation for all components.
