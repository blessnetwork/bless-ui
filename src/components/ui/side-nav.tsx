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
import React, { useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'

const menuItems = [
	{
		label: 'Home',
		icon: (isActive: boolean) => (
			<HomeIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	},
	{
		label: 'My Nodes',
		icon: (isActive: boolean) => (
			<MyNodesIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	},
	{
		label: 'Staking',
		icon: (isActive: boolean) => (
			<StakingIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	},
	{
		label: 'Airdrops',
		icon: (isActive: boolean) => (
			<AirdropsIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	},
	{
		label: 'Orchestration Node',
		icon: (isActive: boolean) => (
			<OrchestrationNodeIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	}
]

const menuItemsFooter = [
	{
		label: 'Settings',
		icon: (isActive: boolean) => (
			<SettingsIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	},
	{
		label: 'Referrals',
		icon: (isActive: boolean) => (
			<ReferralsIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	},
	{
		label: 'Documentation',
		icon: (isActive: boolean) => (
			<DocumentationIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	},
	{
		label: 'Logout',
		icon: (isActive: boolean) => (
			<LogoutIcon
				className={`w-4 h-4 ${isActive ? 'text-black' : 'text-[#A0A2A0] group-hover:text-black'}`}
			/>
		)
	}
]

export default function SideNav() {
	const [open, setOpen] = useState(true)
	const [active, setActive] = useState('Home') // Default active item

	return (
		<nav
			className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-[#F0F0F0] text-black ${open ? 'w-60' : 'w-16'}`}
		>
			{/* Header */}
			<div className="px-3 py-2 h-20 flex justify-between items-center">
				<LogoIcon onClick={() => setOpen(!open)} />
				<MenuIcon
					className={`text-[#A0A2A0] hover:text-black duration-100 cursor-pointer ${!open && 'rotate-180'}`}
					onClick={() => setOpen(!open)}
				/>
			</div>

			{/* Body */}
			<ul className="flex-1">
				{menuItems.map((item, index) => {
					const isActive = active === item.label
					return (
						<li
							key={index}
							onClick={() => setActive(item.label)}
							className={`group px-3 py-2 my-2 rounded-lg duration-100 cursor-pointer flex gap-2 items-center 
              ${isActive ? '!bg-[#FFFFFF] !text-black shadow-md' : 'text-[#A0A2A0] hover:text-black hover:bg-[#E5E5E5]'}`}
						>
							<div>{item.icon(isActive)}</div>
							<p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
								{item.label}
							</p>
						</li>
					)
				})}
			</ul>

			{/* Footer (Moved to the Bottom) */}
			<div className="mt-auto">
				<div className="h-[1px] bg-black -mx-2"></div>
				<ul className="flex-1">
					{menuItemsFooter.map((item, index) => {
						const isActive = active === item.label
						return (
							<li
								key={index}
								onClick={() => setActive(item.label)}
								className={`group px-3 py-2 my-2 rounded-lg duration-100 cursor-pointer flex gap-2 items-center 
              ${isActive ? '!bg-[#FFFFFF] !text-black shadow-md' : 'text-[#A0A2A0] hover:text-black hover:bg-[#E5E5E5]'}`}
							>
								<div>{item.icon(isActive)}</div>
								<p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
									{item.label}
								</p>
							</li>
						)
					})}
				</ul>
			</div>
		</nav>
	)
}
