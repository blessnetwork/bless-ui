'use client'

import React from 'react'

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div id="container" className="flex min-h-screen w-full">
			{/* Sidebar */}
			<nav id="sidenav" className="min-h-screen w-[40px] bg-[#F0F0F0] md:w-[200px]">
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
				className="bg-green-500 flex min-h-screen w-[calc(100vw-40px)] flex-col md:w-[calc(100vw-200px)]"
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
