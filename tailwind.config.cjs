/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{html,ts,tsx}', './src/*.{ts,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),

		require('@catppuccin/tailwindcss')({
			defaultFlavour: 'frappe',
		}),
	],
};
