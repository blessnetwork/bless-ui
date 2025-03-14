'use client'

import SideNav from '@/components/ui/side-nav'
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
import React, { useEffect, useState } from 'react'

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(true)

	// Load sidebar state from localStorage
	useEffect(() => {
		const storedState = localStorage.getItem('sidebar-expanded')
		if (storedState !== null) {
			setIsExpanded(storedState === 'true')
		}
	}, [])

	// Toggle sidebar state and save to localStorage
	const toggleSidebar = () => {
		const newState = !isExpanded
		setIsExpanded(newState)
		localStorage.setItem('sidebar-expanded', String(newState))
	}

	return (
		<div id="container" className="flex min-h-screen w-full">
			{/* Sidebar Component */}
			<SideNav
				menuItems={menuItems}
				menuItemsFooter={menuItemsFooter}
				isExpanded={isExpanded}
				toggleSidebar={toggleSidebar}
			/>

			{/* Main Content Area */}
			<div
				id="parent"
				className={`bg-green-500 flex min-h-screen flex-col transition-all duration-300 ${
					isExpanded ? 'w-[calc(100vw-260px)]' : 'w-[calc(100vw-72px)]'
				}`}
			>
				{/* Header */}
				<header
					id="child_header"
					className="flex h-[74px] items-center justify-between bg-[#FF8200] p-4"
				>
					<p id="text_left" className="text-white font-bold">
						Bless
					</p>
					<p id="text_right" className="text-white font-bold">
						Online
					</p>
				</header>

				{/* Page Content Slot */}
				<div id="child_content" className="bg-[#FFC0CB] p-4">
					{children}
				</div>
			</div>
		</div>
	)
}

export default MainLayout
