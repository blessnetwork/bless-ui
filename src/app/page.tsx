import React from 'react'
import { MainLayout } from '@/components/main-layout'
import { CardData, CardSection } from '@/components/ui/card-section'

export interface CardSectionProps {
	cards: CardData[]
	cardType?: string
}

export default function HomePage() {
	const section1Cards: CardData[] = [
		{
			title: 'Card 1',
			description: 'Description 1',
			content: 'This is the main content of card 1.',
			footer: <p>Footer content 1</p>
		},
		{
			title: 'Card 2',
			description: 'Description 2',
			content: 'This is the main content of card 2.',
			footer: <p>Footer content 2</p>
		},
		{
			title: 'Card 3',
			description: 'Description 3',
			content: 'This is the main content of card 3.',
			footer: <p>Footer content 3</p>
		}
	]

	const section2Cards: CardData[] = [
		{
			title: 'Full Width Card',
			description: 'This card stretches across the entire width of the content area',
			content: 'This is the main content of the full-width card.',
			footer: <p>Footer content for the full-width card</p>
		}
	]

	const section3Cards: CardData[] = [
		{
			title: 'Two Column Card 1',
			description: 'This is the first card in the two-column layout',
			content: 'This is the main content of the first two-column card.',
			footer: <p>Footer for card 1</p>
		},
		{
			title: 'Two Column Card 2',
			description: 'This is the second card in the two-column layout',
			content: 'This is the main content of the second two-column card.',
			footer: <p>Footer for card 2</p>
		}
	]

	const section4Cards: CardData[] = [
		{
			title: 'Four Column Card 1',
			description: 'First card in four-column layout',
			content: 'Content for the first card in the four-column section.',
			footer: <p>Footer for card 1</p>
		},
		{
			title: 'Four Column Card 2',
			description: 'Second card in four-column layout',
			content: 'Content for the second card in the four-column section.',
			footer: <p>Footer for card 2</p>
		},
		{
			title: 'Four Column Card 3',
			description: 'Third card in four-column layout',
			content: 'Content for the third card in the four-column section.',
			footer: <p>Footer for card 3</p>
		},
		{
			title: 'Four Column Card 4',
			description: 'Fourth card in four-column layout',
			content: 'Content for the fourth card in the four-column section.',
			footer: <p>Footer for card 4</p>
		}
	]
	return (
		<MainLayout>
			<CardSection cards={section1Cards} cardType="Card" />
			<CardSection cards={section2Cards} cardType="Card" className="mt-4" />
			<CardSection cards={section3Cards} cardType="Card" className="mt-4" />
			<CardSection cards={section4Cards} cardType="Card" className="mt-4" />
		</MainLayout>
	)
}
