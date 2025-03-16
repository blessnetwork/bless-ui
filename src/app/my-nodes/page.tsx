'use client'

import MainLayout from '@/components/main-layout'
import { TailwindCard } from '@/components/ui/card'

export default function MyNodesPage() {
	return (
		<MainLayout>
			<h1 className="text-lg font-bold">My Nodes Page</h1>

			<TailwindCard />
		</MainLayout>
	)
}
