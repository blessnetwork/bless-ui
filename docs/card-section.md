# CardSection

Renders up to 4 `Card` or `CardAchievement` components in a responsive grid layout.

## Props

| Name      | Type         | Description             |
| --------- | ------------ | ----------------------- | ---------------------- |
| cards     | `CardData[]` | List of card props      |
| cardType  | `'Card'      | 'CardAchievement'`      | Type of card to render |
| className | `string`     | Tailwind class override |

## Usage

```tsx
import { CardSection } from '@blessnetwork/bless-ui'

<CardSection
	cardType="Card"
	cards={[
		{
			title: 'Title 1',
			description: 'Desc',
			content: 'Content',
			footer: <span>Footer</span>
		}
	]}
/>
```
