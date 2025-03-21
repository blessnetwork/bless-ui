import React from 'react'
import { ChartContainer } from '@/components/ui/chart'
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

// Static JSON Data
const chartData = [
	{ day: '2025-03-01', 'Referral Time': 120, 'Bonus Time': 80, 'Base Time': 60 },
	{ day: '2025-03-02', 'Referral Time': 130, 'Bonus Time': 90, 'Base Time': 70 },
	{ day: '2025-03-03', 'Referral Time': 150, 'Bonus Time': 100, 'Base Time': 75 },
	{ day: '2025-03-04', 'Referral Time': 160, 'Bonus Time': 110, 'Base Time': 80 },
	{ day: '2025-03-05', 'Referral Time': 140, 'Bonus Time': 95, 'Base Time': 70 },
	{ day: '2025-03-06', 'Referral Time': 155, 'Bonus Time': 105, 'Base Time': 78 },
	{ day: '2025-03-07', 'Referral Time': 170, 'Bonus Time': 120, 'Base Time': 85 },
	{ day: '2025-03-08', 'Referral Time': 180, 'Bonus Time': 130, 'Base Time': 90 },
	{ day: '2025-03-09', 'Referral Time': 190, 'Bonus Time': 140, 'Base Time': 95 },
	{ day: '2025-03-10', 'Referral Time': 200, 'Bonus Time': 150, 'Base Time': 100 },
	{ day: '2025-03-11', 'Referral Time': 210, 'Bonus Time': 160, 'Base Time': 110 },
	{ day: '2025-03-12', 'Referral Time': 220, 'Bonus Time': 170, 'Base Time': 115 },
	{ day: '2025-03-13', 'Referral Time': 230, 'Bonus Time': 180, 'Base Time': 120 },
	{ day: '2025-03-14', 'Referral Time': 240, 'Bonus Time': 190, 'Base Time': 125 },
	{ day: '2025-03-15', 'Referral Time': 250, 'Bonus Time': 200, 'Base Time': 130 },
	{ day: '2025-03-16', 'Referral Time': 260, 'Bonus Time': 210, 'Base Time': 140 }
]

// Chart Configuration
const chartConfig = {
	'Referral Time': { color: '#FFFFFF' }, // White
	'Bonus Time': { color: '#16463d' }, // Greenish
	'Base Time': { color: '#8dd081' } // Light Green
}

const ChartBar: React.FC = () => {
	return (
		<div className="mt-6 w-full max-w-4xl">
			<ChartContainer config={chartConfig}>
				<ResponsiveContainer width="100%" height={400}>
					<BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
						<XAxis dataKey="day" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="Base Time" stackId="a" fill="#8dd081" />
						<Bar dataKey="Bonus Time" stackId="a" fill="#16463d" />
						<Bar dataKey="Referral Time" stackId="a" fill="#FFFFFF" />
					</BarChart>
				</ResponsiveContainer>
			</ChartContainer>
		</div>
	)
}

export default ChartBar
