'use client'

import React from 'react'
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
} from '../components/ui/icons'

const iconClasses = (isActive: boolean) => {
	return `w-[18px] h-[18px] text-[13px] ${isActive ? 'text-black' : 'text-gray-400'}`
}

const menuItems = [
	{
		label: 'Home',
		path: '/',
		icon: (isActive: boolean) => <HomeIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Bar Chart',
		path: '/bar-chart',
		icon: (isActive: boolean) => <OrchestrationNodeIcon className={iconClasses(isActive)} />
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
		path: '/orchestration-node',
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

export { menuItems, menuItemsFooter }
