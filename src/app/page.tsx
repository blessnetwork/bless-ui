import MainLayout from '@/components/main-layout'
import Card from '@/components/ui/card'

export default function HomePage() {
	return (
		<MainLayout>
			<div className="flex flex-col flex-wrap gap-4 p-4 sm:flex-row">
				<Card title="Card Title" description="This is a description" footer={<p>Footer content</p>}>
					<p>This is the main content of the card.</p>
				</Card>
				<Card title="Card Title" description="This is a description" footer={<p>Footer content</p>}>
					<p>This is the main content of the card.</p>
				</Card>
				<Card title="Card Title" description="This is a description" footer={<p>Footer content</p>}>
					<p>This is the main content of the card.</p>
				</Card>
			</div>
		</MainLayout>
	)
}
