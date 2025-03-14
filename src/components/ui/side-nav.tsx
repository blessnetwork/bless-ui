'use client'

import { LogoIcon, MenuIcon } from '@/components/ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

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
	const pathname = usePathname()
	const [activePath, setActivePath] = useState<string>(pathname)

	// Update active path when URL changes
	useEffect(() => {
		setActivePath(pathname)
	}, [pathname])

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
					<LogoIcon className="h-8 w-8" />
				</div>

				{/* Hamburger Menu - Always Visible */}
				<button onClick={toggleSidebar} className="ml-auto rounded p-1 transition-all duration-200">
					<MenuIcon
						className={`h-6 w-6 cursor-pointer text-[#A0A2A0] transition-transform duration-100 hover:text-black ${
							isExpanded ? 'rotate-0' : 'rotate-180'
						}`}
					/>
				</button>
			</div>

			{/* Menu Items - Positioned at the Top */}
			<ul className="space-y-1 p-2">
				{menuItems.map((item) => {
					const isActive = activePath === item.path
					return (
						<li key={item.path} onClick={() => setActivePath(item.path)}>
							<Link href={item.path}>
								<div
									className={`group flex items-center gap-2 rounded-lg p-3 ${
										isActive ? 'bg-[#FFFFFF] text-black' : 'text-[#A0A2A0] hover:bg-[#E5E5E5]'
									}`}
								>
									{item.icon(isActive)}
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
					)
				})}
			</ul>

			{/* Menu Items Footer - Positioned at the Bottom */}
			<div className="absolute bottom-4 w-full px-2">
				<ul className="space-y-1">
					{menuItemsFooter.map((item) => {
						const isActive = activePath === item.path
						return (
							<li key={item.path} onClick={() => setActivePath(item.path)}>
								<Link href={item.path}>
									<div
										className={`group flex items-center gap-2 rounded-lg p-3 ${
											isActive ? 'bg-[#FFFFFF] text-black' : 'text-[#A0A2A0] hover:bg-[#E5E5E5]'
										}`}
									>
										{item.icon(isActive)}
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
						)
					})}
				</ul>
			</div>
		</nav>
	)
}

export default SideNav
