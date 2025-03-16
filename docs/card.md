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

## Usage

```jsx
import { Card } from 'bless-ui'

function Example() {
	return (
		<Card
			title="Card Title"
			description="Card description"
			footer={<button>Action</button>}
			image="/path/to/image.jpg"
		>
			<p>Main content goes here.</p>
		</Card>
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

## Structure

The Card is composed of:

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
