'use client'

import SideNav from '@/components/ui/side-nav'
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
import useSidenav from '@/hooks/useSidenav'
import { useSidenavStore } from '@/state/useSidenavStore'
import React from 'react'

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	useSidenav()
	const { width } = useSidenavStore()

	return (
		<div id="container" className="flex min-h-screen w-full">
			<SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
			<div
				id="parent"
				className="bg-green-500 flex min-h-screen flex-col transition-all duration-300"
				style={{ width: `calc(100vw - ${width}px)` }}
			>
				<header
					id="child_header"
					className="flex h-[74px] items-center justify-between bg-[#FF8200] p-4"
				>
					<p id="text_left" className="text-white font-bold">
						Bless
					</p>
					<p id="text_right" className="text-white font-bold">
						Online
					</p>
				</header>
				<div id="child_content" className="bg-[#FFC0CB] p-4">
					{children}
				</div>
			</div>
		</div>
	)
}

export default MainLayout
