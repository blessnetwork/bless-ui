/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@salsaflavio/my-ui-components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: 'hsl(var(--primary))',
				secondary: 'hsl(var(--secondary))',
				destructive: 'hsl(var(--destructive))',
				muted: 'hsl(var(--muted))',
				accent: 'hsl(var(--accent))',
				popover: 'hsl(var(--popover))',
				card: 'hsl(var(--card))'
			}
		}
	},
	plugins: []
}
