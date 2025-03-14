import { ReactNode } from 'react'

export default function MarginWidthWrapper({ children }: { children: ReactNode }) {
	return (
		<div className="sm:border-zinc-700 flex min-h-screen flex-col sm:border-r md:ml-60">
			{children}
		</div>
	)
}
