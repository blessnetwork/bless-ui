'use client'

import MainLayout from '@/components/main-layout'

export default function Page() {
	return (
		<MainLayout>
			<h1 className="text-lg font-bold">Home Page</h1>
			<ul className="list-inside list-disc">
				<li>Home content item 1</li>
				<li>Home content item 2</li>
				<li>Home content item 3</li>
			</ul>
		</MainLayout>
	)
}
