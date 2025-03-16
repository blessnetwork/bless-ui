# CardSection

The CardSection component is a flexible container for rendering multiple Card components in various layouts.

## Exports

The following components and types are exported from the `CardSection` module:

- `CardSection`: The main component for rendering a section of cards.
- `CardData`: Type definition for the data structure used by the `cards` prop.

## Usage

```jsx
import { Card, CardSection } from 'bless-ui'

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

## Props

The `CardSection` component accepts the following props:

| Prop        | Type         | Description                                                       |
| ----------- | ------------ | ----------------------------------------------------------------- |
| `cards`     | `CardData[]` | An array of card data objects to be rendered in the section.      |
| `className` | `string`     | Additional CSS classes to be applied to the card section wrapper. |

### CardData Type

The `cards` prop expects an array of objects conforming to the `CardData` type:

```typescript
type CardData = {
	title: string
	description: string
	content: string
	footer: React.ReactNode
	image?: string // Optional property
}
```

| Property      | Type              | Description                                                               |
| ------------- | ----------------- | ------------------------------------------------------------------------- |
| `title`       | `string`          | The title of the card.                                                    |
| `description` | `string`          | A brief description or subtitle for the card.                             |
| `content`     | `string`          | The main content of the card.                                             |
| `footer`      | `React.ReactNode` | Content to be rendered in the card's footer. Can be any valid React node. |
| `image`       | `string`          | (Optional) URL of an image to display at the top of the card.             |

## Rendering Different Card Types

The `CardSection` component can render different types of cards, including custom card components. Below is an example of rendering various card types:

```jsx
import { CardSection } from 'bless-ui'

function App() {
	const cards = [
		{
			title: 'Basic Card',
			description: 'This is a basic card.',
			content: 'Basic card content.',
			footer: <button>Basic Action</button>
		},
		{
			title: 'Image Card',
			description: 'This card has an image.',
			content: 'Image card content.',
			footer: <button>Image Action</button>,
			image: '/path/to/image.jpg'
		},
		{
			title: 'Custom Card',
			description: 'This card uses a custom footer.',
			content: 'Custom card content.',
			footer: (
				<div>
					<button>Custom Action 1</button>
					<button>Custom Action 2</button>
				</div>
			)
		}
	]

	return <CardSection cards={cards} />
}
```

## Features

- Automatically adjusts layout based on the number of cards.
- Supports optional images for each card.
- Allows rendering of custom card components.

## Responsive Behavior

The `CardSection` uses Tailwind CSS classes for responsive design:

- `flex flex-col flex-wrap gap-4 sm:flex-row`: Creates a flexible, wrapping layout.
- Card widths adjust based on the number of cards and screen size.

## Example with Different Layouts

```jsx
import { CardSection } from 'bless-ui'

function HomePage() {
	const singleCard = [
		{
			title: 'Single Card',
			description: 'A single card layout.',
			content: 'Content for a single card.',
			footer: <button>Action</button>
		}
	]
	const twoCards = [
		{
			title: 'Card 1',
			description: 'First card in a two-card layout.',
			content: 'Content for card 1.',
			footer: <button>Action 1</button>
		},
		{
			title: 'Card 2',
			description: 'Second card in a two-card layout.',
			content: 'Content for card 2.',
			footer: <button>Action 2</button>
		}
	]

	return (
		<div>
			<CardSection cards={singleCard} className="mb-4" />
			<CardSection cards={twoCards} className="mb-4" />
		</div>
	)
}
```

This example demonstrates how to use the `CardSection` component to create different layouts with varying numbers of cards.
