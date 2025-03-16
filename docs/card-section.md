# CardSection

The CardSection component is a flexible container for rendering multiple Card components in various layouts.

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
			image: '/path/to/image1.jpg' // New property
		},
		{
			title: 'Card 2',
			description: 'Description for Card 2',
			content: 'Content for Card 2',
			footer: <button>Action 2</button>,
			image: '/path/to/image2.jpg' // New property
		}
		// Add more card objects as needed
	]

	return <CardSection cards={cards} className="my-custom-class" />
}
```

## Props

The CardSection component accepts the following props:

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
	image?: string // New optional property
}
```

| Property      | Type              | Description                                                               |
| ------------- | ----------------- | ------------------------------------------------------------------------- |
| `title`       | `string`          | The title of the card.                                                    |
| `description` | `string`          | A brief description or subtitle for the card.                             |
| `content`     | `string`          | The main content of the card.                                             |
| `footer`      | `React.ReactNode` | Content to be rendered in the card's footer. Can be any valid React node. |
| `image`       | `string`          | (Optional) URL of an image to display at the top of the card.             |

Additionally, the CardSection component handles the responsive layout of the cards based on the number of cards provided:

- 1 card: Full width
- 2 cards: Two columns
- 3 or 4 cards: Three columns on large screens, two on medium screens

The component will render a maximum of 4 cards, even if more are provided in the `cards` array.

## Features

- Automatically adjusts layout based on the number of cards
- Limits display to a maximum of 4 cards per section
- Utilizes the `Card` component to render each card
- Supports optional images for each card

## Responsive Behavior

The CardSection uses Tailwind CSS classes for responsive design:

- `flex flex-col flex-wrap gap-4 sm:flex-row`: Creates a flexible, wrapping layout
- Card widths adjust based on the number of cards and screen size

## Example with Different Layouts

```jsx
import { CardSection } from 'bless-ui'

function HomePage() {
	const singleCard = [
		{
			/* single card data */
		}
	]
	const twoCards = [
		{
			/* card 1 data */
		},
		{
			/* card 2 data */
		}
	]
	const threeCards = [
		{
			/* card 1 data */
		},
		{
			/* card 2 data */
		},
		{
			/* card 3 data */
		}
	]
	const fourCards = [
		{
			/* card 1 data */
		},
		{
			/* card 2 data */
		},
		{
			/* card 3 data */
		},
		{
			/* card 4 data */
		}
	]

	return (
		<div>
			<CardSection cards={singleCard} className="mb-4" />
			<CardSection cards={twoCards} className="mb-4" />
			<CardSection cards={threeCards} className="mb-4" />
			<CardSection cards={fourCards} className="mb-4" />
		</div>
	)
}
```

This example demonstrates how to use the CardSection component to create different layouts with varying numbers of cards.

## Customization

To further customize the CardSection, you can modify the `card-section.tsx` file. The component uses the `Card` component internally, so any changes to the Card component will be reflected in the CardSection as well.
