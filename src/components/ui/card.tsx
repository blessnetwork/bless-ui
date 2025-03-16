import * as React from 'react'
import { cn } from '@/lib/utils'

const CardWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn(
				'outline-stone-950/5 rounded-xl border bg-card text-card-foreground shadow-sm outline outline-1',
				className
			)}
			{...props}
		/>
	)
)
CardWrapper.displayName = 'CardWrapper'

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
	)
)
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('text-2xl font-semibold leading-none tracking-tight', className)}
			{...props}
		/>
	)
)
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
	)
)
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
	)
)
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div ref={ref} className={cn('flex items-center p-6 pt-0', className)} {...props} />
	)
)
CardFooter.displayName = 'CardFooter'

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
	title?: React.ReactNode
	description?: React.ReactNode
	footer?: React.ReactNode
	height?: string // Add height prop
}

const Card: React.FC<CardProps> = ({
	className,
	title,
	description,
	children,
	footer,
	height,
	...props
}) => {
	return (
		<CardWrapper
			className={cn(
				'w-full flex-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]',
				height && `h-${height}`, // Fix dynamic height syntax
				className
			)}
			{...props}
		>
			<CardHeader>
				{title && <CardTitle>{title}</CardTitle>}
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
			{footer && <CardFooter>{footer}</CardFooter>}
		</CardWrapper>
	)
}

const CardAchievement: React.FC<CardProps> = ({
	className,
	title,
	description,
	children,
	footer,
	height,
	...props
}) => {
	return (
		<CardWrapper
			className={cn(
				'w-full flex-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]',
				height && `h-${height}`, // Fix dynamic height syntax
				className
			)}
			{...props}
		>
			<CardContent>{children}</CardContent>
			<CardFooter>
				{title && <CardTitle>{title}</CardTitle>}
				{description && <CardDescription>{description}</CardDescription>}
				<button>Circle Icon Plus Button</button>
			</CardFooter>
		</CardWrapper>
	)
}

interface CardData {
	title: string
	description: string
	content: React.ReactNode
	footer?: React.ReactNode
}

// Exporting CardAchievement component for use in sections where achievements are displayed.
// Exporting CardData type to define the structure of card data objects.
export {
	CardWrapper,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
	CardAchievement // New export for achievement-specific card
}
export type { CardData } // New export for card data structure
export default Card
