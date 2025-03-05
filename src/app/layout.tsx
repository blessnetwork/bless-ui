import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'], // Light (300), Regular (400), Medium (500), Bold (700)
	variable: '--font-inter'
})

export const metadata: Metadata = {
	title: 'Bless UI',
	description: 'A React UI component library.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={inter.variable}>
			<body className="font-sans">
				<div className="flex min-h-screen w-full flex-col">{children}</div>
			</body>
		</html>
	)
}
