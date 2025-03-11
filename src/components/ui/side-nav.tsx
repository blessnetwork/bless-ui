import {
	AirdropsIcon,
	DocumentationIcon,
	HomeIcon,
	LogoIcon,
	LogoutIcon,
	MenuIcon,
	MyNodesIcon,
	OrchestrationNodeIcon,
	ReferralsIcon,
	SettingsIcon,
	StakingIcon
} from '@/components/ui/icons'
import Popover from '@/components/ui/popover'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const iconClasses = (isActive: boolean) =>
	`w-[18px] h-[18px] text-[13px] ${
		isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'
	}`

interface MenuItem {
	label: string
	path: string
	icon: (isActive: boolean) => JSX.Element
}

interface SideNavProps {
	menuItems: MenuItem[]
	menuItemsFooter: MenuItem[]
	open: boolean
	setOpen: (open: boolean) => void
}

export default function SideNav({ menuItems, menuItemsFooter }: SideNavProps) {
	const [open, setOpen] = useState(true)
	const [hidden, setHidden] = useState(false)
	const [active, setActive] = useState('Home')
	const [isMobile, setIsMobile] = useState(false)

	// Handle responsive behavior
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth

			if (width <= 430) {
				setHidden(true) // Hide sidebar initially on iPhone
				setIsMobile(true)
			} else if (width <= 1024) {
				setHidden(false)
				setOpen(false) // Collapse sidebar on iPad
				setIsMobile(false)
			} else {
				setHidden(false)
				setOpen(true) // Expand sidebar on desktop
				setIsMobile(false)
			}
		}

		handleResize() // Set initial state
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// Toggle sidebar on mobile (iPhone only)
	const toggleMobileNav = () => {
		setHidden(!hidden)
	}

	return (
		<>
			{/* Mobile Header (Only on iPhone) */}
			{isMobile && (
				<header className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between bg-[#F0F0F0] px-4 py-3 shadow-md">
					<LogoIcon />
					<MenuIcon
						className="cursor-pointer text-[#A0A2A0] duration-100 hover:text-black"
						onClick={toggleMobileNav}
					/>
				</header>
			)}

			{/* Background Overlay (iPhone Only) */}
			{isMobile && !hidden && (
				<div
					className="fixed inset-0 z-40 bg-black/50"
					onClick={toggleMobileNav} // Close sidebar when clicking outside
				></div>
			)}

			{/* Sidebar */}
			{!hidden && (
				<nav
					className={`fixed left-0 top-0 flex h-screen flex-col bg-[#F0F0F0] px-4 text-black shadow-md duration-300 ${
						isMobile ? 'z-50 w-full' : open ? 'w-[260px]' : 'w-[72px]'
					}`}
				>
					{/* Header */}
					<div className="flex h-14 items-center justify-between px-3 py-2">
						{open && <LogoIcon />}
						<MenuIcon
							className={`cursor-pointer text-[#A0A2A0] duration-100 hover:text-black ${!open && 'rotate-180'}`}
							onClick={() => (isMobile ? toggleMobileNav() : setOpen(!open))}
						/>
					</div>

					{/* Body */}
					<ul className="flex-1">
						<div className="-mx-4 mb-4 h-[1px] bg-[#DEDEDE]"></div>
						{menuItems.map((item, index) => {
							const isActive = active === item.label
							return (
								<Popover key={index} label={item.label} show={!isMobile && !open}>
									<li>
										<Link
											href={item.path}
											className="group flex items-center gap-2 rounded-lg p-3 hover:bg-[#E5E5E5]"
										>
											<div>{item.icon(isActive)}</div>
											{(open || isMobile) && <p>{item.label}</p>}
										</Link>
									</li>
								</Popover>
							)
						})}
					</ul>

					{/* Footer */}
					<div className="mt-auto">
						<div className="-mx-4 h-[1px] bg-[#DEDEDE]"></div>
						<ul className="pb-4">
							{menuItemsFooter.map((item, index) => {
								const isActive = active === item.label
								return (
									<Popover key={index} label={item.label} show={!isMobile && !open}>
										<li>
											<Link
												href={item.path}
												className="group flex items-center gap-2 rounded-lg p-3 hover:bg-[#E5E5E5]"
											>
												<div>{item.icon(isActive)}</div>
												{(open || isMobile) && <p>{item.label}</p>}
											</Link>
										</li>
									</Popover>
								)
							})}
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}
