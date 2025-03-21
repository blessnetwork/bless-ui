'use client'

import React from 'react'
import { Header } from '@/components/ui/header'
import SideNav from '@/components/ui/side-nav'
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
import useSidenav from '@/hooks/useSidenav'
import { useSidenavStore } from '@/state/useSidenavStore'

const HEADER_HEIGHT = 'h-[74px]'

interface MainLayoutProps {
	children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	useSidenav()
	const { width } = useSidenavStore()

	return (
		<div id="mainLayoutWrapper" className="flex min-h-screen w-full">
			<SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
			<div
				id="mainLayoutContent"
				className="flex flex-1 flex-col transition-all duration-300"
				style={{ width: `calc(100% - ${width}px)` }}
			>
				<Header height={HEADER_HEIGHT} />
				<main className={`flex-1 p-4`}>{children}</main>
			</div>
		</div>
	)
}

export { MainLayout }
export default MainLayout
