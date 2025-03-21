import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogoIcon, MenuIcon } from '@/components/ui/icons'
import { useSidenavStore } from '@/state/useSidenavStore'

interface MenuItem {
	label: string
	path: string
	icon: (isActive: boolean) => JSX.Element
}

interface SideNavProps {
	menuItems: MenuItem[]
	menuItemsFooter: MenuItem[]
}

const SideNav: React.FC<SideNavProps> = ({ menuItems, menuItemsFooter }) => {
	const pathname = usePathname()
	const [activePath, setActivePath] = useState<string>(pathname)
	const { isExpanded, width, toggleSidenav } = useSidenavStore()

	useEffect(() => {
		setActivePath(pathname)
	}, [pathname])

	const renderMenuItem = useMemo(
		() =>
			(item: MenuItem, isFooter: boolean = false) => {
				const isActive = activePath === item.path
				return (
					<li key={item.path} onClick={() => setActivePath(item.path)}>
						<Link href={item.path}>
							<div
								className={`group flex h-9 items-center gap-3 rounded-lg px-5 ${
									isActive
										? 'bg-white text-black shadow-md'
										: 'text-[#A0A2A0] hover:bg-[#E5E5E5] hover:shadow-md'
								}`}
							>
								{item.icon(isActive)}
								<span
									className={`ml-3 text-sm transition-opacity ${
										isExpanded ? 'opacity-100' : 'hidden opacity-0'
									}`}
								>
									{item.label}
								</span>
							</div>
						</Link>
					</li>
				)
			},
		[activePath, isExpanded, setActivePath]
	)

	return (
		<nav
			id="sidenav"
			className="flex min-h-screen flex-col bg-background-sidenav transition-all duration-300"
			style={{ width }}
		>
			<header
				id="sidebar_header"
				className="bg-gray-300 flex h-[74px] items-center px-4 py-3 shadow-md"
			>
				<div
					className={`transition-opacity duration-300 ${
						isExpanded ? 'opacity-100' : 'hidden opacity-0'
					}`}
				>
					<LogoIcon className="h-8 w-8" />
				</div>
				<button onClick={toggleSidenav} className="ml-auto rounded p-1 transition-all duration-200">
					<MenuIcon
						className={`h-6 w-6 cursor-pointer text-[#A0A2A0] transition-transform duration-100 hover:text-black ${
							isExpanded ? 'rotate-0' : 'rotate-180'
						}`}
					/>
				</button>
			</header>

			<ul className="flex-grow space-y-1 px-2 py-4">
				{menuItems.map((item) => renderMenuItem(item))}
			</ul>

			<div className="mt-auto p-2">
				<ul className="space-y-1">{menuItemsFooter.map((item) => renderMenuItem(item, true))}</ul>
			</div>
		</nav>
	)
}

export default SideNav
