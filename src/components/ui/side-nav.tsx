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
import React, { useState } from 'react'

const iconClasses = (isActive: boolean) =>
	`w-[18px] h-[18px] text-[13px] ${
		isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'
	}`

const menuItems = [
	{
		label: 'Home',
		icon: (isActive: boolean) => <HomeIcon className={iconClasses(isActive)} />
	},
	{
		label: 'My Nodes',
		icon: (isActive: boolean) => <MyNodesIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Staking',
		icon: (isActive: boolean) => <StakingIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Airdrops',
		icon: (isActive: boolean) => <AirdropsIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Orchestration Node',
		icon: (isActive: boolean) => <OrchestrationNodeIcon className={iconClasses(isActive)} />
	}
]

const menuItemsFooter = [
	{
		label: 'Settings',
		icon: (isActive: boolean) => <SettingsIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Referrals',
		icon: (isActive: boolean) => <ReferralsIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Documentation',
		icon: (isActive: boolean) => <DocumentationIcon className={iconClasses(isActive)} />
	},
	{
		label: 'Logout',
		icon: (isActive: boolean) => <LogoutIcon className={iconClasses(isActive)} />
	}
]

export default function SideNav() {
	const [open, setOpen] = useState(true)
	const [active, setActive] = useState('Home') // Default active item

	return (
		<nav
			className={`shadow-md px-4 h-screen flex flex-col duration-500 bg-[#F0F0F0] text-black ${
				open ? 'w-[260px]' : 'w-[72px]'
			}`}
		>
			{/* Header */}
			<div className="px-3 py-2 h-14 flex justify-between items-center">
				{open && <LogoIcon />}
				<MenuIcon
					className={`text-[#A0A2A0] hover:text-black duration-100 cursor-pointer ${
						!open && 'rotate-180'
					}`}
					onClick={() => setOpen(!open)}
				/>
			</div>

			{/* Body */}
			<ul className="flex-1">
				<div className="h-[1px] bg-[#DEDEDE] mb-4 -mx-4"></div>
				{menuItems.map((item, index) => {
					const isActive = active === item.label
					return (
						<li
							key={index}
							onClick={() => setActive(item.label)}
							className={`group px-3 py-1.5 my-2 rounded-lg duration-100 cursor-pointer flex gap-2 items-center max-h-[40px] min-h-[40px] ${
								isActive
									? '!bg-[#FFFFFF] !text-black shadow-md'
									: 'text-[#A0A2A0] hover:text-black hover:bg-[#E5E5E5]'
							}`}
						>
							{!open ? (
								<Popover label={item.label}>
									<div className="mr-1">{item.icon(isActive)}</div>
								</Popover>
							) : (
								<>
									<div className="mr-1">{item.icon(isActive)}</div>
									<p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
										{item.label}
									</p>
								</>
							)}
						</li>
					)
				})}
			</ul>

			{/* Footer (Moved to the Bottom) */}
			<div className="mt-auto">
				<div className="h-[1px] bg-[#DEDEDE] -mx-4"></div>
				<ul className="flex-1">
					{menuItemsFooter.map((item, index) => {
						const isActive = active === item.label
						return (
							<li
								key={index}
								onClick={() => setActive(item.label)}
								className={`group px-3 py-2 my-2 rounded-lg duration-100 cursor-pointer flex gap-2 items-center  max-h-[40px] min-h-[40px] ${
									isActive
										? '!bg-[#FFFFFF] !text-black shadow-md'
										: 'text-[#A0A2A0] hover:text-black hover:bg-[#E5E5E5]'
								}`}
							>
								{!open ? (
									<Popover label={item.label}>
										<div className="mr-1">{item.icon(isActive)}</div>
									</Popover>
								) : (
									<>
										<div className="mr-1">{item.icon(isActive)}</div>
										<p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
											{item.label}
										</p>
									</>
								)}
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}
