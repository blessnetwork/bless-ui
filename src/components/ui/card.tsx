import * as React from 'react'
import { cn } from '@/lib/utils'

const CardWrapper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
	({ className, ...props }, ref) => (
		<div
			ref={ref}
			className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}
			{...props}
		/>
	)
)
CardWrapper.displayName = 'Card'

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

export { CardWrapper, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }

interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
	title?: React.ReactNode
	description?: React.ReactNode
	footer?: React.ReactNode
}

const Card: React.FC<CardProps> = ({
	className,
	title,
	description,
	children,
	footer,
	...props
}) => {
	return (
		<CardWrapper
			className={cn(
				'w-full flex-1 sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)]',
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

export default Card
