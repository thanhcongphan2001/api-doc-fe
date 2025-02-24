import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// @ts-ignore
const config: Config = {
	title: 'My Sites',
	tagline: 'Dinosaurs are cool',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://maps-doc.ots.vn',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'facebook', // Usually your GitHub org/user name.
	projectName: 'docusaurus', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			{
				docs: {
					sidebarPath: './sidebars.ts',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
				},
				blog: {
					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn'
				},
				theme: {
					customCss: './src/css/custom.css'
				}
			} satisfies Preset.Options
		]
	],

	themeConfig: {
		// Replace with your project's social card
		image: 'img/docusaurus-social-card.jpg',
		algolia: {
			appId: 'X1Z85QJPUV',
			apiKey: 'bf7211c161e8205da2f933a02534105a',
			indexName: 'docusaurus-2',
		},
		navbar: {
			title: 'GTEL MAPS Docs',
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg'
			},
			items: [
				// {
				// 	type: 'docSidebar',
				// 	sidebarId: 'tutorialSidebar',
				// 	position: 'left',
				// 	label: 'Tutorial'
				// },
				{
					type: 'docSidebar',
					position: 'left',
					sidebarId: 'api',
					label: 'Maps APIs',
				},
				// { to: 'docs/api', label: 'MAPS API', position: 'left' },
				// {
				// 	href: 'https://github.com/facebook/docusaurus',
				// 	label: 'GitHub',
				// 	position: 'right'
				// }
			]
		},
		footer: {
			style: 'light',
			copyright: `© 2025 GTEL MAPS. Bản quyền thuộc về GTEL MAPS`
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula
		}
	} satisfies Preset.ThemeConfig
};

export default config;
