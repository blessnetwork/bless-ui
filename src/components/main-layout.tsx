'use client'

import React from 'react'
import SideNav from '@/components/ui/side-nav'
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
import useSidenav from '@/hooks/useSidenav'
import { useSidenavStore } from '@/state/useSidenavStore'

const HEADER_HEIGHT = 'h-[74px]'
const HEADER_BG = 'bg-[#FF8200]'
const CONTENT_BG = 'bg-[#FFC0CB]'

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	useSidenav()
	const { width } = useSidenavStore()

	return (
		<div className="flex min-h-screen w-full">
			<SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
			<div
				className="flex flex-1 flex-col transition-all duration-300"
				style={{ width: `calc(100% - ${width}px)` }}
			>
				<header className={`flex ${HEADER_HEIGHT} items-center justify-between ${HEADER_BG} p-4`}>
					<h1 className="text-white font-bold">Bless</h1>
					<p className="text-white font-bold">Online</p>
				</header>
				<main className={`flex-1 ${CONTENT_BG} p-4`}>{children}</main>
			</div>
		</div>
	)
}

export default MainLayout
