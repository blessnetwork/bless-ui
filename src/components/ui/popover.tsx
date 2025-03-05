import React from 'react'

interface PopoverProps {
	label: string
	children: React.ReactNode
}

const Popover: React.FC<PopoverProps> = ({ label, children }) => {
	return (
		<div className="relative group">
			{children}
			<div className="absolute left-12 top-1/2 transform -translate-y-1/2 bg-black text-[#FFFFFF] text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
				{label}
			</div>
		</div>
	)
}

export default Popover
