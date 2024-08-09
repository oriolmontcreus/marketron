/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  keyframes: {
			slide: {
			  from: { transform: 'translateX(0%)' },
			  to: { transform: 'translateX(-100%)' },
			},
			'slide-reverse': {
			  from: { transform: 'translateX(-100%)' },
			  to: { transform: 'translateX(0%)' },
			},
		  },
		  animation: {
			slide: 'slide 50s linear infinite',
			'slide-reverse': 'slide-reverse 50s linear infinite',
		  }
		},
	},
	plugins: [],
}
