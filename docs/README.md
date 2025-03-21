# Bless UI Documentation

Welcome to the **Bless UI** documentation! This is a component library designed for React/Next.js applications.

> Live Docs: [GitHub Pages](https://your-username.github.io/bless-ui/)

## 📦 Installation

### Using Yarn:

```sh
yarn add bless-ui
```

### Using npm:

```sh
npm install bless-ui
```

## 🔧 Setup

### Peer Dependencies

Ensure you have the following dependencies in your project:

```json
{
	"react": "^18.x",
	"react-dom": "^18.x",
	"next": "^13 || ^14",
	"tailwindcss": "^3.x"
}
```

If not, install them:

```sh
yarn add react react-dom next tailwindcss
```

### TailwindCSS Setup

Add the paths in your `tailwind.config.ts`:

```ts
module.exports = {
	content: ['./node_modules/bless-ui/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
	theme: { extend: {} },
	plugins: []
}
```

Import styles in `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 📚 Components

Each component in `bless-ui` can be imported individually:

```tsx
import { Button, Card, Input, MainLayout, Popover, SideNav } from 'bless-ui'
```

### **MainLayout**

```tsx
import { MainLayout } from 'bless-ui'

export default function Page() {
	return (
		<MainLayout>
			<h1 className="text-xl font-bold">Dashboard</h1>
		</MainLayout>
	)
}
```

### **SideNav**

```tsx
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
import { SideNav } from 'bless-ui'

;<SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
```

### **Button**

```tsx
import { Button } from 'bless-ui'

;<Button onClick={() => alert('Clicked!')}>Click Me</Button>
```

### **Input**

```tsx
import { Input } from 'bless-ui'

;<Input placeholder="Enter your email" />
```

### **Popover**

```tsx
import { Popover } from 'bless-ui'

;<Popover label="Tooltip content" show>
	<button>Hover me</button>
</Popover>
```

### **CardSection**

```tsx
import { CardSection } from 'bless-ui'

const cards = [
  {
    title: 'Card Title',
    description: 'Card Description',
    content: 'Main content here',
    footer: <p>Footer content</p>
  }
]

<CardSection cards={cards} cardType="Card" />
```

### **Icons**

```tsx
import { Icons } from 'bless-ui'

;<Icons.HomeIcon className="h-6 w-6 text-black" />
```

### **Chart Components**

```tsx
import {
  ChartContainer,
  ChartLegend,
  ChartTooltip
} from 'bless-ui'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts'

const chartData = [
  { day: 'Mon', 'Bonus Time': 30, 'Base Time': 70 }
]

const chartConfig = {
  'Bonus Time': { color: '#16463d' },
  'Base Time': { color: '#8dd081' }
}

<ChartContainer config={chartConfig}>
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={chartData}>
      <XAxis dataKey="day" />
      <YAxis />
      <ChartTooltip />
      <ChartLegend />
      <Bar dataKey="Bonus Time" stackId="a" fill="#16463d" />
      <Bar dataKey="Base Time" stackId="a" fill="#8dd081" />
    </BarChart>
  </ResponsiveContainer>
</ChartContainer>
```

---

## 🚀 Deployment with GitHub Pages

To host these docs using **Docsify**:

1. Ensure your repo has a `/docs` folder.
2. Enable GitHub Pages in **Settings > Pages**.
3. Your documentation will be live at:
   ```
   https://your-username.github.io/bless-ui/
   ```
