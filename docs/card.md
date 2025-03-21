# Card

A flexible card layout component with slots for title, description, content, and footer.

## Exports

- `Card`
- `CardWrapper`
- `CardTitle`
- `CardDescription`
- `CardHeader`
- `CardContent`
- `CardFooter`

## Props

| Name        | Type              | Description         |
| ----------- | ----------------- | ------------------- |
| title       | `React.ReactNode` | Card heading        |
| description | `React.ReactNode` | Card subheading     |
| footer      | `React.ReactNode` | Card footer content |
| children    | `React.ReactNode` | Body content        |

## Usage

```tsx
import { Card } from '@blessnetwork/bless-ui'

<Card title="Title" description="Subtitle" footer={<span>Footer</span>}>
	Card content here.
</Card>
```
