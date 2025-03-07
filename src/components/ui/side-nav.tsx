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
			className={`flex h-screen flex-col bg-[#F0F0F0] px-4 text-black shadow-md duration-500 ${
				open ? 'w-[260px]' : 'w-[72px]'
			}`}
		>
			{/* Header */}
			<div className="flex h-14 items-center justify-between px-3 py-2">
				{open && <LogoIcon />}
				<MenuIcon
					className={`cursor-pointer text-[#A0A2A0] duration-100 hover:text-black ${
						!open && 'rotate-180'
					}`}
					onClick={() => setOpen(!open)}
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
								isActive
									? '!bg-[#FFFFFF] !text-black shadow-md'
									: 'text-[#A0A2A0] hover:bg-[#E5E5E5] hover:text-black'
							}`}
						>
							{!open ? (
								<Popover label={item.label}>
									<div className="mr-1">{item.icon(isActive)}</div>
								</Popover>
							) : (
								<>
									<div className="mr-1">{item.icon(isActive)}</div>
									<p className={`${!open && 'w-0 translate-x-24'} overflow-hidden duration-500`}>
										{item.label}
									</p>
								</>
							)}
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
									isActive
										? '!bg-[#FFFFFF] !text-black shadow-md'
										: 'text-[#A0A2A0] hover:bg-[#E5E5E5] hover:text-black'
								}`}
							>
								{!open ? (
									<Popover label={item.label}>
										<div className="mr-1">{item.icon(isActive)}</div>
									</Popover>
								) : (
									<>
										<div className="mr-1">{item.icon(isActive)}</div>
										<p className={`${!open && 'w-0 translate-x-24'} overflow-hidden duration-500`}>
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
