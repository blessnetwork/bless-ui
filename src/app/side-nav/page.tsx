'use client'

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
import React from 'react'

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

export default function SideNavPage() {
	return (
		<div className="flex">
			<SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
			<main className="flex-1 p-6">
				<h1 className="text-2xl font-bold">Dashboard</h1>
			</main>
		</div>
	)
}
