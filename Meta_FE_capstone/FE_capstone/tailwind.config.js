/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary_green: '#495E57',
				primary_yellow: '#F4CE14',
				secondary_red: '#EE9972',
				secondary_orange: '#FBDABB',
				highlight_light: '#EDEFEE',
				highlight_dark: '#333333',
			},
			fontFamily: {
				markazi: ['Karla', 'sans-serif'],
				karla: ['Markazi Text', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
