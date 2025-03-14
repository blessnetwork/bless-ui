'use client'

import Link from 'next/link'
import React from 'react'

interface MenuItem {
	label: string
	path: string
	icon: (isActive: boolean) => JSX.Element
}

interface SideNavProps {
	menuItems: MenuItem[]
	menuItemsFooter: MenuItem[]
	isExpanded: boolean
	toggleSidebar: () => void
}

const SideNav: React.FC<SideNavProps> = ({
	menuItems,
	menuItemsFooter,
	isExpanded,
	toggleSidebar
}) => {
	return (
		<nav
			id="sidenav"
			className={`min-h-screen bg-[#F0F0F0] transition-all duration-300 ${
				isExpanded ? 'w-[260px]' : 'w-[72px]'
			}`}
		>
			{/* Sidebar Header */}
			<div
				id="sidebar_header"
				className="bg-gray-300 flex h-[74px] items-center px-4 py-3 shadow-md"
			>
				{/* Logo - Hidden when collapsed */}
				<div
					className={`transition-opacity duration-300 ${
						isExpanded ? 'opacity-100' : 'hidden opacity-0'
					}`}
				>
					{/* Replace with actual LogoIcon */}
					<span className="text-lg font-bold">Logo</span>
				</div>

				{/* Hamburger Menu - Always Visible */}
				<button onClick={toggleSidebar} className="ml-auto rounded p-1 transition-all duration-200">
					{/* MenuIcon rotates when sidebar is collapsed */}
					<span
						className={`h-6 w-6 cursor-pointer text-[#A0A2A0] transition-transform duration-100 hover:text-black ${
							isExpanded ? 'rotate-0' : 'rotate-180'
						}`}
					>
						☰
					</span>
				</button>
			</div>

			{/* Menu Items - Positioned at the Top */}
			<ul className="space-y-1 p-2">
				{menuItems.map((item) => (
					<li key={item.path}>
						<Link href={item.path}>
							<div className="hover:bg-gray-200 group flex items-center rounded-md p-2">
								{item.icon(isExpanded)}
								<span
									className={`ml-3 text-sm transition-opacity ${
										isExpanded ? 'opacity-100' : 'hidden opacity-0'
									}`}
								>
									{item.label}
								</span>
							</div>
						</Link>
					</li>
				))}
			</ul>

			{/* Menu Items Footer - Positioned at the Bottom */}
			<div className="absolute bottom-4 w-full px-2">
				<ul className="space-y-1">
					{menuItemsFooter.map((item) => (
						<li key={item.path}>
							<Link href={item.path}>
								<div className="hover:bg-gray-200 group flex items-center rounded-md p-2">
									{item.icon(isExpanded)}
									<span
										className={`ml-3 text-sm transition-opacity ${
											isExpanded ? 'opacity-100' : 'hidden opacity-0'
										}`}
									>
										{item.label}
									</span>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

export default SideNav
