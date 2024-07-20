/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				body: ['Noto Sans'],
				mono: ['Noto Sans Mono']
			}
		}
	},
	plugins: []
};
