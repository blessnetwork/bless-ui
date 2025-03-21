import React from 'react'

interface PopoverProps {
	label: string
	children: React.ReactNode
	show?: boolean
}

export const Popover: React.FC<PopoverProps> = ({ label, children, show = false }) => {
	return (
		<div className="group relative">
			{children}
			{show && (
				<div className="absolute left-12 top-1/2 -translate-y-1/2 transform rounded bg-black px-2 py-1 text-xs text-[#FFFFFF] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
					{label}
				</div>
			)}
		</div>
	)
}
