import React from 'react'
import { MainLayout } from '@/components/main-layout'

;('use client')

export default function SettingsPage() {
	return (
		<MainLayout>
			<h1 className="text-lg font-bold">Settings Page</h1>
			<p>This is the settings page content.</p>
		</MainLayout>
	)
}
