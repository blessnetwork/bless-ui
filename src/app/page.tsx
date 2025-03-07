import Link from 'next/link'

import './globals.css'

export default function LandingPage() {
	return (
		<div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-light sm:p-20">
			<main className="row-start-2 flex flex-col items-center gap-4">
				<div className="text-3xl">Bless UI</div>
				<div className="mt-0 text-lg">React component library</div>
				<Link href="/get-started">Get Started</Link>
				<Link href="/side-nav">Side Nav</Link>
			</main>
		</div>
	)
}
