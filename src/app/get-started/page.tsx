import { Card } from '@/components/ui/card'
import Input from '@/components/ui/input'
import Link from 'next/link'
import * as React from 'react'

export default function GetStartedPage() {
	return (
		<div className="flex-1 items-center justify-items-center bg-slate p-12">
			<Card className="h-[264px] w-[600px]">
				<p className="px-4 text-2xl text-charcoal">
					Contribute your unused computer power, earn rewards effortlessly.{' '}
					<Link href="https://chromewebstore.google.com/category/extensions" target="_blank">
						Get the chrome extension.
					</Link>
				</p>
			</Card>
			<Card className="h-[200px] w-[600px]">
				<div className="relative h-full">
					<p className="px-4 text-2xl text-charcoal">Full Name</p>
					<Input className="absolute bottom-0" placeholder="Email" />
					<Link className="absolute bottom-6 right-10" href="/">
						SIGNUP
					</Link>
				</div>
			</Card>
		</div>
	)
}
