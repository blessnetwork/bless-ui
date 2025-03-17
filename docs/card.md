# Card

The Card component is a flexible UI element for displaying content in a structured format.

## Exports

The following components and types are exported from the `Card` module:

- `Card`: The main component for rendering a card.
- `CardWrapper`: Wrapper component for the card.
- `CardHeader`: Component for the card's header.
- `CardTitle`: Component for the card's title.
- `CardDescription`: Component for the card's description.
- `CardContent`: Component for the card's main content.
- `CardFooter`: Component for the card's footer.
- `CardImage`: Component for rendering an optional image at the top of the card.
- `CardAchievement`: A specialized card component for showcasing achievements.

## Usage

```jsx
import { Card, CardAchievement } from 'bless-ui'

function Example() {
	return (
		<div>
			<Card
				title="Card Title"
				description="Card description"
				footer={<button>Action</button>}
				image="/path/to/image.jpg"
			>
				<p>Main content goes here.</p>
			</Card>

			<CardAchievement
				title="Achievement Title"
				description="Achievement description"
				content="Details about the achievement."
				footer={<button>View More</button>}
				image="/path/to/achievement.jpg"
			/>
		</div>
	)
}
```

## Props

| Prop          | Type              | Description                                                   |
| ------------- | ----------------- | ------------------------------------------------------------- |
| `title`       | `React.ReactNode` | Card title                                                    |
| `description` | `React.ReactNode` | Card description                                              |
| `footer`      | `React.ReactNode` | Footer content                                                |
| `className`   | `string`          | Additional CSS classes                                        |
| `children`    | `React.ReactNode` | Main card content                                             |
| `image`       | `string`          | (Optional) URL of an image to display at the top of the card. |

## Props for `CardAchievement`

| Prop          | Type              | Description                                                   |
| ------------- | ----------------- | ------------------------------------------------------------- |
| `title`       | `React.ReactNode` | Achievement card title                                        |
| `description` | `React.ReactNode` | Achievement card description                                  |
| `content`     | `React.ReactNode` | Main content for the achievement card                         |
| `footer`      | `React.ReactNode` | Footer content                                                |
| `image`       | `string`          | (Optional) URL of an image to display at the top of the card. |

## Structure

The Card is composed of:

- `CardWrapper`: Main container.
- `CardHeader`: Contains title and description.
- `CardContent`: Holds main content.
- `CardFooter`: For footer content.
- `CardImage`: (Optional) Displays an image at the top of the card if the `image` prop is provided.

The `CardAchievement` component is composed of:

- `CardWrapper`: Main container.
- `CardHeader`: Contains title and description.
- `CardContent`: Holds main content.
- `CardFooter`: For footer content.
- `CardImage`: (Optional) Displays an image at the top of the card if the `image` prop is provided.

## Customization

For advanced layouts, use individual components:

```jsx
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
	CardWrapper
} from 'bless-ui'

export default function Example() {
	return (
		<CardWrapper>
			<CardImage src="/path/to/image.jpg" alt="Card Image" />
			<CardHeader>
				<CardTitle>Card Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Card Content</p>
			</CardContent>
			<CardFooter>
				<p>Card Footer</p>
			</CardFooter>
		</CardWrapper>
	)
}
```

For advanced layouts, use the `CardAchievement` component alongside other card components:

```jsx
import {
	CardAchievement,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardImage,
	CardTitle,
	CardWrapper
} from 'bless-ui'

export default function Example() {
	return (
		<CardWrapper>
			<CardImage src="/path/to/achievement.jpg" alt="Achievement Image" />
			<CardHeader>
				<CardTitle>Achievement Title</CardTitle>
				<CardDescription>Achievement Description</CardDescription>
			</CardHeader>
			<CardContent>
				<p>Details about the achievement.</p>
			</CardContent>
			<CardFooter>
				<button>View More</button>
			</CardFooter>
		</CardWrapper>
	)
}
```
