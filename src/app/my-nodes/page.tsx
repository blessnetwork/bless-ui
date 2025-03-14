'use client'

import { useState } from 'react'

export default function Page() {
	const [open, setOpen] = useState(true)

	return (
		<div>
			<h1 className="text-2xl font-bold">My Nodes</h1>
		</div>
	)
}
