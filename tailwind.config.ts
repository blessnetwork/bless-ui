import fluid, { extract, fontSize, screens } from 'fluid-tailwind'
import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx}'
	],
	extract,
	darkMode: ['class'],
	theme: {
		screens, // Fluid Tailwind's default screens, in `rem`
		fontSize, // Fluid Tailwind's default font sizes, in `rem` (including line heights)
		extend: {
			fontFamily: {
				sans: ['var(--font-inter)', ...fontFamily.sans]
			},
			colors: {
				white: 'hsl(0, 0%, 100%)',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				'background-sidenav': 'hsl(var(--background-sidenav))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				'60': '60px',
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		},
		colors: {
			main: '#FAFAFA',
			green: '#C9FCC0',
			'light-gray': '#CCCAC0',
			gray: '#F2F2F2',
			slate: '#F5F5F5',
			cement: '#AEB3B7',
			charcoal: '#292D2A',
			black: '#000000'
		}
	},
	plugins: [
		require('tailwindcss-animate'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
		fluid
	]
}

export default config
