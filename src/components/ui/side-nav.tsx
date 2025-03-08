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
import React, { useState, useEffect } from 'react'

const iconClasses = (isActive: boolean) =>
	`w-[18px] h-[18px] text-[13px] ${
		isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'
	}`

const menuItems = [
	{ label: 'Home', icon: (isActive: boolean) => <HomeIcon className={iconClasses(isActive)} /> },
	{ label: 'My Nodes', icon: (isActive: boolean) => <MyNodesIcon className={iconClasses(isActive)} /> },
	{ label: 'Staking', icon: (isActive: boolean) => <StakingIcon className={iconClasses(isActive)} /> },
	{ label: 'Airdrops', icon: (isActive: boolean) => <AirdropsIcon className={iconClasses(isActive)} /> },
	{ label: 'Orchestration Node', icon: (isActive: boolean) => <OrchestrationNodeIcon className={iconClasses(isActive)} /> }
]

const menuItemsFooter = [
	{ label: 'Settings', icon: (isActive: boolean) => <SettingsIcon className={iconClasses(isActive)} /> },
	{ label: 'Referrals', icon: (isActive: boolean) => <ReferralsIcon className={iconClasses(isActive)} /> },
	{ label: 'Documentation', icon: (isActive: boolean) => <DocumentationIcon className={iconClasses(isActive)} /> },
	{ label: 'Logout', icon: (isActive: boolean) => <LogoutIcon className={iconClasses(isActive)} /> }
]

export default function SideNav() {
	const [open, setOpen] = useState(true)
	const [hidden, setHidden] = useState(false)
	const [active, setActive] = useState('Home')
	const [isMobile, setIsMobile] = useState(false)
	const [isTablet, setIsTablet] = useState(false)

	// Handle responsive behavior
	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth

			if (width <= 430) {
				setHidden(true) // Hide sidebar initially on iPhone
				setIsMobile(true)
				setIsTablet(false)
			} else if (width <= 1024) {
				setHidden(false)
				setOpen(false) // Collapse sidebar on iPad
				setIsMobile(false)
				setIsTablet(true) // iPad mode
			} else {
				setHidden(false)
				setOpen(true) // Expand sidebar on desktop
				setIsMobile(false)
				setIsTablet(false)
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
				<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-[#F0F0F0] px-4 py-3 shadow-md">
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
					className="fixed inset-0 bg-black/50 z-40"
					onClick={toggleMobileNav} // Close sidebar when clicking outside
				></div>
			)}

			{/* Sidebar */}
			{!hidden && (
				<nav
					className={`fixed top-0 left-0 h-screen flex flex-col bg-[#F0F0F0] px-4 text-black shadow-md duration-300 ${
						isMobile ? 'w-full z-50' : open ? 'w-[260px]' : 'w-[72px]'
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
								<li
									key={index}
									onClick={() => setActive(item.label)}
									className={`group my-2 flex max-h-[40px] min-h-[40px] cursor-pointer items-center gap-2 rounded-lg px-3 py-1.5 duration-100 ${
										isActive ? '!bg-[#FFFFFF] !text-black shadow-md' : 'text-[#A0A2A0] hover:bg-[#E5E5E5] hover:text-black'
									}`}
								>
									<div className="mr-1">{item.icon(isActive)}</div>
									{!isTablet && <p>{item.label}</p>} {/* Hide labels on iPad */}
								</li>
							)
						})}
					</ul>

					{/* Footer */}
					<div className="mt-auto">
						<div className="-mx-4 h-[1px] bg-[#DEDEDE]"></div>
						<ul className="flex-1 pb-4">
							{menuItemsFooter.map((item, index) => {
								const isActive = active === item.label
								return (
									<li
										key={index}
										onClick={() => setActive(item.label)}
										className={`group my-2 flex max-h-[40px] min-h-[40px] cursor-pointer items-center gap-2 rounded-lg px-3 py-2 duration-100 ${
											isActive ? '!bg-[#FFFFFF] !text-black shadow-md' : 'text-[#A0A2A0] hover:bg-[#E5E5E5] hover:text-black'
										}`}
									>
										<div className="mr-1">{item.icon(isActive)}</div>
										{!isTablet && <p>{item.label}</p>} {/* Hide labels on iPad */}
									</li>
								)
							})}
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}
