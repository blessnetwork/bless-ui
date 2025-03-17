# Getting Started with Bless UI

Bless UI is a React component library that provides a set of reusable UI components for building modern web applications.

## Installation

You can install Bless UI using either npm or yarn:

### Using npm

```bash
npm install @blessnetwork/bless-ui
```

### Using yarn

```bash
yarn add @blessnetwork/bless-ui
```

## Available Components

Bless UI offers the following components:

1. Button
2. Card
3. CardSection
4. Header
5. HeaderMobile
6. Icons
7. Input
8. Popover
9. SideNav
10. MainLayout

## Usage Examples

Here are some basic examples of how to use the components:

### Button

```tsx
import { Button } from '@blessnetwork/bless-ui'

function MyComponent() {
	return <Button>Click me</Button>
}
```

### Card

```tsx
import { Card } from '@blessnetwork/bless-ui'

function MyComponent() {
	return (
		<Card>
			<h2>Card Title</h2>
			<p>Card content goes here.</p>
		</Card>
	)
}
```

### CardSection

```tsx
import { Card, CardAchievement, CardSection } from 'bless-ui'

function Example() {
	const cards = [
		{
			title: 'Card 1',
			description: 'Description for Card 1',
			content: 'Content for Card 1',
			footer: <button>Action 1</button>,
			image: '/path/to/image1.jpg'
		},
		{
			title: 'Card 2',
			description: 'Description for Card 2',
			content: 'Content for Card 2',
			footer: <button>Action 2</button>,
			image: '/path/to/image2.jpg'
		}
	]

	return <CardSection cards={cards} className="my-custom-class" />
}
```

### Header

```tsx
import { Header } from '@blessnetwork/bless-ui'

function MyComponent() {
	return <Header title="My Application" />
}
```

### HeaderMobile

```tsx
import { HeaderMobile } from '@blessnetwork/bless-ui'

function MyComponent() {
	return <HeaderMobile />
}
```

### Input

```tsx
import { Input } from '@blessnetwork/bless-ui'

function MyComponent() {
	return <Input placeholder="Enter your name" />
}
```

### SideNav

```tsx
import { SideNav } from '@blessnetwork/bless-ui'

function MyComponent() {
	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'About', href: '/about' },
		{ label: 'Contact', href: '/contact' }
	]

	return <SideNav items={menuItems} />
}
```

### MainLayout

```tsx
import { MainLayout } from '@blessnetwork/bless-ui'

function MyPage() {
	return (
		<MainLayout>
			<h1>Welcome to My Page</h1>
			<p>This is the main content of the page.</p>
		</MainLayout>
	)
}
```

For more detailed information on each component and its props, please refer to the individual component documentation.
