'use client'

import { ReactNode, useState, useEffect } from 'react'
import {
	AirdropsIcon,
	DocumentationIcon,
	HomeIcon,
	LogoutIcon,
	MyNodesIcon,
	OrchestrationNodeIcon,
	ReferralsIcon,
	SettingsIcon,
	StakingIcon
} from '@/components/ui/icons'
import SideNav from '@/components/ui/side-nav'
import Header from '@/components/ui/header'

import '@/styles/globals.css'

const iconClasses = (isActive: boolean) =>
	`w-[18px] h-[18px] text-[13px] ${
		isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'
	}`

const menuItems = [
	{
		label: 'Home',
		path: '/',
		icon: (isActive: boolean) => <HomeIcon className={iconClasses(isActive)} />
	},
	{
		label: 'My Nodes',
		path: '/my-nodes',
		icon: (isActive: boolean) => <MyNodesIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Staking',
		path: '/staking',
		icon: (isActive: boolean) => <StakingIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Airdrops',
		path: '/airdrops',
		icon: (isActive: boolean) => <AirdropsIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Orchestration Node',
		path: '/orchestration',
		icon: (isActive: boolean) => <OrchestrationNodeIcon className={iconClasses(isActive)} />
	}
]

const menuItemsFooter = [
	{
		label: 'Settings',
		path: '/settings',
		icon: (isActive: boolean) => <SettingsIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Referrals',
		path: '/referrals',
		icon: (isActive: boolean) => <ReferralsIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Documentation',
		path: '/documentation',
		icon: (isActive: boolean) => <DocumentationIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Logout',
		path: '/logout',
		icon: (isActive: boolean) => <LogoutIcon className={iconClasses(isActive)} />
	}
]

interface MainLayoutProps {
	children: ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
	const [open, setOpen] = useState(true)
	const [isMobile, setIsMobile] = useState(false)

	// Detect screen width for responsive behavior
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1024)
		}
		handleResize() // Run on mount
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	// Automatically collapse sidebar when in mobile mode
	const sidebarOpen = !isMobile || open

	return (
		<div className="flex h-screen w-full">
			
			<SideNav
				menuItems={menuItems}
				menuItemsFooter={menuItemsFooter}
			/>
			{/* Parent wrapper for Header and Content that stays to the right of SideNav */}
			<div id="parentWrapper"
				className={`flex flex-col h-full transition-all duration-300 ${
					sidebarOpen ? 'ml-[260px] w-[calc(100%-260px)]' : 'ml-[72px] w-[calc(100%-72px)]'
				}`}
			>
				<Header sidebarOpen={sidebarOpen} />
				<main className="flex-1 overflow-auto p-6">{children}</main>
			</div>
		</div>
	)
}
