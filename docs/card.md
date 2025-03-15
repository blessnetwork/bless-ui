# Card

The Card component is a flexible UI element for displaying content in a structured format.

## Usage

```ts
import { Card } from 'bless-ui';

function Example() {
  return (
    <Card
      title="Card Title"
      description="Card description"
      footer={<button>Action</button>}
    >
      <p>Main content goes here.</p>d
    </Card>
  );
}
```

## Props

| Prop          | Type              | Description            |
| ------------- | ----------------- | ---------------------- |
| `title`       | `React.ReactNode` | Card title             |
| `description` | `React.ReactNode` | Card description       |
| `footer`      | `React.ReactNode` | Footer content         |
| `className`   | `string`          | Additional CSS classes |
| `children`    | `React.ReactNode` | Main card content      |

The Card component also accepts all standard HTML div attributes except `title`.

## Styling

The Card uses Tailwind CSS for responsive layout:

- Full width on small screens
- Two columns on medium screens
- Three columns on large screens

Override styles with the `className` prop.

## Structure

The Card is composed of:

- `CardWrapper`: Main container
- `CardHeader`: Contains title and description
- `CardContent`: Holds main content
- `CardFooter`: For footer content

## Customization

For advanced layouts, use individual components:

```jsx
import {
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	CardWrapper
} from 'bless-ui'

// Custom card layout
```

This allows for more control over the card's structure and styling.
