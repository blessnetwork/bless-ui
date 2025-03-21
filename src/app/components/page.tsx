'use client'

import {
	AirdropsIcon,
	Button,
	Card,
	CardSection,
	Chart,
	ChartBar,
	DocumentationIcon,
	Header,
	HeaderMobile,
	HomeIcon,
	Input,
	LogoIcon,
	LogoutIcon,
	MenuIcon,
	MyNodesIcon,
	OrchestrationNodeIcon,
	Popover,
	ReferralsIcon,
	SettingsIcon,
	StakingIcon
} from '@salsaflavio/my-ui-components'

export default function Page() {
	return (
		<main className="space-y-8 bg-gray-400 p-8">
			<Button className="bg-pink-500 text-white">Click Me</Button>
			<Card title="My Card">
				<CardSection title="Section 1">Hello World</CardSection>
			</Card>
			<Chart />
			<ChartBar />
			<Header />
			<HeaderMobile />
			<Input placeholder="Type something..." />
			<Popover trigger={<Button>Open Popover</Button>}>Popover content</Popover>

			<div className="grid grid-cols-4 gap-4 text-blue-600">
				<HomeIcon className="h-6 w-6" />
				<MyNodesIcon className="h-6 w-6" />
				<StakingIcon className="h-6 w-6" />
				<AirdropsIcon className="h-6 w-6" />
				<OrchestrationNodeIcon className="h-6 w-6" />
				<SettingsIcon className="h-6 w-6" />
				<ReferralsIcon className="h-6 w-6" />
				<DocumentationIcon className="h-6 w-6" />
				<LogoutIcon className="h-6 w-6" />
				<MenuIcon className="h-6 w-6" />
				<LogoIcon className="h-8 w-8" />
			</div>
		</main>
	)
}
