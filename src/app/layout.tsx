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
			<head />
			<body className={`${inter.variable} min-h-screen w-full font-sans`}>{children}</body>
		</html>
	)
}
