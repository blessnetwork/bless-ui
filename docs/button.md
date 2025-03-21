# Button

A reusable button component with support for custom classes, variants, and full accessibility.

## Props

| Name      | Type                         | Description                 |
| --------- | ---------------------------- | --------------------------- |
| children  | `React.ReactNode`            | Content inside the button   |
| className | `string`                     | Additional Tailwind classes |
| ...props  | `React.ButtonHTMLAttributes` | All native button props     |

## Usage

```tsx
import { Button } from '@blessnetwork/bless-ui'

;<Button className="bg-blue-600 text-white">Click Me</Button>
```
