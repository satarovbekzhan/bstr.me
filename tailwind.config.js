/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				body: ['Noto Sans'],
				mono: ['Noto Sans Mono']
			},
			keyframes: {
				'lds-ellipsis-1': {
					from: { transform: 'scale(0)' },
					to: { transform: 'scale(1)' }
				},
				'lds-ellipsis-2': {
					from: { transform: 'translate(0, 0)' },
					to: { transform: 'translate(12px, 0)' }
				},
				'lds-ellipsis-3': {
					from: { transform: 'scale(1)' },
					to: { transform: 'scale(0)' }
				}
			},
			animation: {
				'lds-ellipsis-1': 'lds-ellipsis-1 0.6s infinite',
				'lds-ellipsis-2': 'lds-ellipsis-2 0.6s infinite',
				'lds-ellipsis-3': 'lds-ellipsis-3 0.6s infinite'
			}
		}
	},
	plugins: []
};
