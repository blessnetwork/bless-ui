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

```jsx
import { Button } from '@blessnetwork/bless-ui'

function MyComponent() {
	return <Button>Click me</Button>
}
```

### Card

```jsx
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

### Input

```jsx
import { Input } from '@blessnetwork/bless-ui'

function MyComponent() {
	return <Input placeholder="Enter your name" />
}
```

### Header

```jsx
import { Header } from '@blessnetwork/bless-ui'

function MyComponent() {
	return <Header title="My Application" />
}
```

### SideNav

```jsx
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

```jsx
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
