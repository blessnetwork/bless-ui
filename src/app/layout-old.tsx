import Header from '@/components/ui/header'
import SideNav from '@/components/ui/side-nav'
import { menuItems, menuItemsFooter } from '@/constants/menu-items'
import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'], // Light (300), Regular (400), Medium (500), Bold (700)
	variable: '--font-inter'
})

export const metadata: Metadata = {
	title: 'Bless UI',
	description: 'A React UI component library.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<div className="min-h-screen">
					<div className="flex">
						<SideNav
							{...{
								menuItems,
								menuItemsFooter
							}}
						/>
						<div className="flex min-h-screen w-screen flex-grow flex-col md:w-full">
							<Header />
							{children}
						</div>
					</div>
				</div>
			</body>
		</html>
	)
}
