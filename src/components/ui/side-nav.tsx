import React, { useState } from 'react'
import { CiSettings } from 'react-icons/ci'
import { FaProductHunt } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { IoLogoBuffer } from 'react-icons/io'
import { IoHomeOutline } from 'react-icons/io5'
// icons
import { MdMenuOpen } from 'react-icons/md'
import { MdOutlineDashboard } from 'react-icons/md'
import { TbReportSearch } from 'react-icons/tb'

import logo from '../logo.png'

const menuItems = [
	{
		icons: <IoHomeOutline size={16} />,
		label: 'Home'
	},
	{
		icons: <FaProductHunt size={16} />,
		label: 'My Nodes'
	},
	{
		icons: <MdOutlineDashboard size={16} />,
		label: 'Staking'
	},
	{
		icons: <CiSettings size={16} />,
		label: 'Airdrops'
	},
	{
		icons: <IoLogoBuffer size={16} />,
		label: 'Orchestration Node'
	}
]

const menuItemsFooter = [
	{
		icons: <IoHomeOutline size={16} />,
		label: 'Settings'
	},
	{
		icons: <FaProductHunt size={16} />,
		label: 'Referrals'
	},
	{
		icons: <MdOutlineDashboard size={16} />,
		label: 'Documentation'
	},
	{
		icons: <CiSettings size={16} />,
		label: 'Logout'
	}
]

export default function SideNav() {
	const [open, setOpen] = useState(true)

	return (
		<nav
			className={`shadow-md h-screen p-2 flex flex-col duration-500 bg-[#F0F0F0] text-white ${open ? 'w-60' : 'w-16'}`}
		>
			{/* Header */}
			<div className=" px-3 py-2 h-20 flex justify-between items-center">
				LOGO
				<div>
					<MdMenuOpen
						size={18}
						className={` duration-500 cursor-pointer ${!open && ' rotate-180'}`}
						onClick={() => setOpen(!open)}
					/>
				</div>
			</div>

			{/* Body */}

			<ul className="flex-1">
				{menuItems.map((item, index) => {
					return (
						<li
							key={index}
							className="px-3 py-2 my-2 font-medium text-[#A0A2A0] hover:text-black hover:bg-[#E5E5E5] rounded-lg duration-300 cursor-pointer flex gap-2 items-center relative group"
						>
							<div>{item.icons}</div>
							<p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
								{item.label}
							</p>
							<p
								className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}
							>
								{item.label}
							</p>
						</li>
					)
				})}
			</ul>
			{/* footer */}
      
      <div className="h-[1px] bg-black -mx-2"></div>

			<div className="flex gap-2 py-2">
        <ul className="flex-1">
				{menuItemsFooter.map((item, index) => {
					return (
						<li
							key={index}
							className="px-3 py-2 my-2 hover:bg-blue-800 rounded-md duration-300 cursor-pointer flex gap-2 items-center relative group"
						>
							<div>{item.icons}</div>
							<p className={`${!open && 'w-0 translate-x-24'} duration-500 overflow-hidden`}>
								{item.label}
							</p>
							<p
								className={`${open && 'hidden'} absolute left-32 shadow-md rounded-md
                 w-0 p-0 text-black bg-white duration-100 overflow-hidden group-hover:w-fit group-hover:p-2 group-hover:left-16
                `}
							>
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
