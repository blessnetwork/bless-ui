import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700'],
	variable: '--font-inter',
	display: 'swap'
})

export const metadata: Metadata = {
	title: 'Bless UI',
	description: 'A React UI component library.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={inter.className}>
			<head />
			<body className={`${inter.variable} min-h-screen w-full font-sans`}>{children}</body>
		</html>
	)
}
