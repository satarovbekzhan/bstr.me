/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				body: ['Roboto Slab'],
				mono: ['Roboto Mono']
			}
		}
	},
	plugins: []
};
