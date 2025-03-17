# CardSection

The CardSection component is a flexible container for rendering multiple Card components in various layouts.

## Exports

The following components and types are exported from the `CardSection` module:

- `CardSection`: The main component for rendering a section of cards.
- `CardData`: Type definition for the data structure used by the `cards` prop.
- `CardAchievement`: A specialized card component for showcasing achievements.

## Usage

```jsx
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
	cardType?: string // Optional property to determine card type
}
```

| Property      | Type              | Description                                                               |
| ------------- | ----------------- | ------------------------------------------------------------------------- |
| `title`       | `string`          | The title of the card.                                                    |
| `description` | `string`          | A brief description or subtitle for the card.                             |
| `content`     | `string`          | The main content of the card.                                             |
| `footer`      | `React.ReactNode` | Content to be rendered in the card's footer. Can be any valid React node. |
| `image`       | `string`          | (Optional) URL of an image to display at the top of the card.             |
| `cardType`    | `string`          | (Optional) Type of the card to determine which component to render.       |

## Rendering Different Card Types Using `cardType`

The `CardSection` component can use a `cardType` property in the `CardData` objects to determine whether to render a `Card` or `CardAchievement`. Below is an example:

```jsx
import { Card, CardAchievement, CardSection } from 'bless-ui'

function App() {
	const cards = [
		{
			title: 'Basic Card',
			description: 'This is a basic card.',
			content: 'Basic card content.',
			footer: <button>Basic Action</button>,
			cardType: 'basic' // Indicates this is a standard Card
		},
		{
			title: 'Achievement Card',
			description: 'This card highlights an achievement.',
			content: 'Achievement card content.',
			footer: <button>Achievement Action</button>,
			image: '/path/to/achievement.jpg',
			cardType: 'achievement' // Indicates this is a CardAchievement
		}
	]

	return (
		<CardSection
			cards={cards}
			renderCard={(card) =>
				card.cardType === 'achievement' ? (
					<CardAchievement
						title={card.title}
						description={card.description}
						content={card.content}
						footer={card.footer}
						image={card.image}
					/>
				) : (
					<Card
						title={card.title}
						description={card.description}
						content={card.content}
						footer={card.footer}
						image={card.image}
					/>
				)
			}
		/>
	)
}
```

### Explanation

1. **`cardType` Property**: Each card object in the `cards` array includes a `cardType` property to specify whether it should be rendered as a `Card` or `CardAchievement`.
2. **`renderCard` Prop**: The `renderCard` function dynamically determines which component to render based on the `cardType` value.

This approach allows for flexible rendering of different card types within the same `CardSection`.

## Features

- Automatically adjusts layout based on the number of cards.
- Supports optional images for each card.
- Allows rendering of custom card components, including `CardAchievement`.

## Responsive Behavior

The `CardSection` uses Tailwind CSS classes for responsive design:

- `flex flex-col flex-wrap gap-4 sm:flex-row`: Creates a flexible, wrapping layout.
- Card widths adjust based on the number of cards and screen size.

## Example with Different Layouts

```jsx
import { CardAchievement, CardSection } from 'bless-ui'

function HomePage() {
	const achievementCards = [
		{
			title: 'Achievement 1',
			description: 'First achievement.',
			content: 'Details about achievement 1.',
			footer: <button>View More</button>,
			image: '/path/to/achievement1.jpg',
			type: 'achievement'
		},
		{
			title: 'Achievement 2',
			description: 'Second achievement.',
			content: 'Details about achievement 2.',
			footer: <button>View More</button>,
			image: '/path/to/achievement2.jpg',
			type: 'achievement'
		}
	]

	return (
		<CardSection
			cards={achievementCards}
			renderCard={(card) => (
				<CardAchievement
					title={card.title}
					description={card.description}
					content={card.content}
					footer={card.footer}
					image={card.image}
				/>
			)}
		/>
	)
}
```

This example demonstrates how to use the `CardSection` component to create layouts with `CardAchievement` cards.
