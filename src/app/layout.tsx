import MainLayout from '@/components/main-layout'
import MarginWidthWrapper from '@/components/margin-width-wrapper'
import PageWrapper from '@/components/page-wrapper'
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
		<html lang="en">
			<body className={`bg-white ${inter.className}`}>
				<div className="flex">
					<SideNav menuItems={menuItems} menuItemsFooter={menuItemsFooter} />
					<main className="flex-1">
						<MarginWidthWrapper>
							{/* <Header />
				<HeaderMobile /> */}
							<PageWrapper>{children}</PageWrapper>
						</MarginWidthWrapper>
					</main>
				</div>
			</body>
		</html>
	)
}
