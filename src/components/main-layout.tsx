'use client'

import { Menu } from 'lucide-react'
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
			{/* Sidebar */}
			<nav
				id="sidenav"
				className={`min-h-screen bg-[#F0F0F0] transition-all duration-300 ${
					isExpanded ? 'w-[200px]' : 'w-[40px]'
				}`}
			>
				{/* Sidebar Header */}
				<div className="bg-gray-300 flex h-[40px] items-center p-2">
					{/* Logo - Hidden when collapsed */}
					<span
						className={`text-sm font-bold text-black transition-opacity duration-300 md:text-base ${
							isExpanded ? 'opacity-100' : 'hidden opacity-0'
						}`}
					>
						Logo
					</span>

					{/* Hamburger Menu - Always Visible */}
					<button
						onClick={toggleSidebar}
						className="hover:bg-gray-400 ml-auto rounded p-1 transition-all duration-200"
					>
						<Menu size={20} />
					</button>
				</div>

				{/* Sidebar Menu */}
				<ul className="p-2">
					<li>item</li>
					<li>item</li>
					<li>item</li>
					<li>item</li>
					<li>item</li>
				</ul>
			</nav>

			{/* Main Content Area */}
			<div
				id="parent"
				className={`bg-green-500 flex min-h-screen flex-col transition-all duration-300 ${
					isExpanded ? 'w-[calc(100vw-200px)]' : 'w-[calc(100vw-40px)]'
				}`}
			>
				{/* Header */}
				<header
					id="child_header"
					className="flex h-[40px] items-center justify-between bg-[#FF8200] p-4"
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
