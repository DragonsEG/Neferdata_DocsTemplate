import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			logo: {
			  src: './src/assets/logo.png',
			},
			title: 'Neferdata Docs',
			social: {
				github: 'https://github.com/neferdata',
			},
			sidebar: [
				{
					label: 'Privacy Policy',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Privacy Policy and security', link: '/privacy/privacy/' },
					],
				},

			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
