import React from 'react'
import Card, { CardAchievement } from '@/components/ui/card'

export type CardData = {
	title: string
	description: string
	content: string
	footer: React.ReactNode
}

interface CardSectionProps {
	cards: CardData[]
	cardType: 'Card' | 'CardAchievement' // Ensure cardType is defined
	className?: string
}

export const CardSection: React.FC<CardSectionProps> = ({ cards, cardType, className = '' }) => {
	const gridClass =
		cards.length === 1 ? 'w-full' : cards.length === 2 ? 'sm:w-1/2' : 'sm:w-1/3 lg:w-1/4'

	const CardComponent = cardType === 'Card' ? Card : CardAchievement // Select card component dynamically

	return (
		<div className={`flex flex-col flex-wrap gap-4 sm:flex-row ${className}`}>
			{cards.slice(0, 4).map((card, index) => (
				<CardComponent
					key={index}
					title={card.title}
					description={card.description}
					footer={card.footer}
					className={gridClass}
				>
					<p>{card.content}</p>
				</CardComponent>
			))}
		</div>
	)
}
