import React from 'react'
import Card from '@/components/ui/card'

export type CardData = {
	title: string
	description: string
	content: string
	footer: React.ReactNode
}

type CardSectionProps = {
	cards: CardData[]
	className?: string
}

const CardSection: React.FC<CardSectionProps> = ({ cards, className = '' }) => {
	const gridClass =
		cards.length === 1 ? 'w-full' : cards.length === 2 ? 'sm:w-1/2' : 'sm:w-1/3 lg:w-1/4'

	return (
		<div className={`flex flex-col flex-wrap gap-4 sm:flex-row ${className}`}>
			{cards.slice(0, 4).map((card, index) => (
				<Card
					key={index}
					title={card.title}
					description={card.description}
					footer={card.footer}
					className={gridClass}
				>
					<p>{card.content}</p>
				</Card>
			))}
		</div>
	)
}

export default CardSection
