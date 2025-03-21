# Popover

Simple tooltip-like hover popup.

## Props

| Name     | Type              | Description             |
| -------- | ----------------- | ----------------------- |
| label    | `string`          | Popover text            |
| show     | `boolean`         | Always show or on hover |
| children | `React.ReactNode` | Trigger element         |

## Usage

```tsx
import { Popover } from '@salsaflavio/bless-ui'

;<Popover label="Click me">
	<button>Hover or focus me</button>
</Popover>
```
