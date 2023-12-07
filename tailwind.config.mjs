import starlightPlugin from '@astrojs/starlight-tailwind';

// Generated color palettes
const accent = { 200: '#a6d1df', 600: '#007892', 900: '#003946', 950: '#002934' };
const gray = { 100: '#f3f6fe', 200: '#e8edfd', 300: '#bbc1d4', 400: '#7f8aad', 500: '#4d5777', 700: '#2e3654', 800: '#1d2541', 900: '#131725' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: { accent, gray },
		},
	},
	plugins: [starlightPlugin()],
};	