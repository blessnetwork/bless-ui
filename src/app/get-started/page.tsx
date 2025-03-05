import { Card } from '@/components/ui/card'
import Input from '@/components/ui/input'
import Link from 'next/link'
import * as React from 'react'

export default function GetStartedPage() {
	return (
		<div className="flex-1 items-center justify-items-center p-12 bg-slate">
			<Card className="w-[600px] h-[264px]">
				<p className="text-2xl text-charcoal px-4">
					Contribute your unused computer power, earn rewards effortlessly.{' '}
					<Link href="https://chromewebstore.google.com/category/extensions" target="_blank">
						Get the chrome extension.
					</Link>
				</p>
			</Card>
			<Card className="w-[600px] h-[200px]">
				<div className="relative h-full">
					<p className="text-2xl text-charcoal px-4">Full Name</p>
					<Input className="absolute bottom-0" placeholder="Email" />
					<Link className="absolute right-10 bottom-6" href="/">
						SIGNUP
					</Link>
				</div>
			</Card>
		</div>
	)
}
