'use client'

import { Input } from '@/components/ui'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import Highlight from 'react-highlight'

import './dark.css'

export default function ExamplesPage() {
	return (
		<div className="p-12">
			<section>
				<p className="text-4xl font-medium">Card</p>
				<Highlight className="typescript">
					{`
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
  } from '@/components/ui/card'

  export function CardDemo() {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description.</CardDescription>
        </CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    )
  }
  `}
				</Highlight>

				<br />

				<Card>
					<CardHeader>
						<CardTitle>Card Title</CardTitle>
						<CardDescription>Card description.</CardDescription>
					</CardHeader>
					<CardContent>Card content</CardContent>
					<CardFooter>Card Footer</CardFooter>
				</Card>
			</section>

			<section>
				<p className="text-4xl font-medium">Input</p>
				<Highlight className="typescript">
					{`
  import { Input } from '@/components/ui'
    
  export function InputDemo() {
    return (
      <div>
        <Input type="email" placeholder='Email' />
        <Input type="text" placeholder='Text' />
        <Input type="number" placeholder='Number' />
        <Input type="search" placeholder='Search' />
      </div>
    )
  }    
  `}
				</Highlight>

				<br />

				<Input type="email" placeholder="Email" />
				<Input type="text" placeholder="Text" />
				<Input type="number" placeholder="Number" />
				<Input type="search" placeholder="Search" />
			</section>
		</div>
	)
}
