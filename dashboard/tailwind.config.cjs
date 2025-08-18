/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./index.html',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				muted: 'hsl(var(--muted))',
				'muted-foreground': 'hsl(var(--muted-foreground))',
				card: 'hsl(var(--card))',
				'card-foreground': 'hsl(var(--card-foreground))',
				primary: 'hsl(var(--primary))',
				'primary-foreground': 'hsl(var(--primary-foreground))',
				accent: 'hsl(var(--accent))',
				'accent-foreground': 'hsl(var(--accent-foreground))',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
			},
			boxShadow: {
				'neo-sm': '3px 3px 6px rgba(0,0,0,0.35), -3px -3px 6px rgba(255,255,255,0.06)',
				'neo': '6px 6px 12px rgba(0,0,0,0.35), -6px -6px 12px rgba(255,255,255,0.06)',
				'glass': '0 8px 30px rgba(0, 0, 0, 0.3)'
			},
			backdropBlur: {
				'xs': '2px',
			},
			borderRadius: {
				xl: '1rem',
			},
		}
	},
	plugins: [require('tailwindcss-animate')],
};


