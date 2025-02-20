import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
	// By default, Docusaurus generates a sidebar from the docs folder structure
	// tutorialSidebar: [ 'overview',{ type: 'autogenerated', dirName: '.' }],
	api: [
		'overview',
		{
			type: 'category',
			label: 'Maps Service',
			collapsed: false,
			link: {
				type: 'doc',
				id: 'api/maps-service/index',
			},
			items: ['api/maps-service/raster-tiles','api/maps-service/vector-tiles','api/maps-service/static-map']
		},
		{
			type: 'category',
			label: 'Geocoding Service',
			collapsed: false,
			link: {
				type: 'doc',
				id: 'api/geocoding-service/index',
			},
			items: ['api/geocoding-service/forward-geocoding','api/geocoding-service/autocomplete-geocoding','api/geocoding-service/reverse-geocoding']
		},
		{
			type: 'category',
			label: 'Navigation Service',
			collapsed: false,
			link: {
				type: 'doc',
				id: 'api/geocoding-service/index',
			},
			items: ['api/navigation-service/route-api']
		},
		{
			type: 'category',
			label: 'Location Service',
			collapsed: false,
			link: {
				type: 'doc',
				id: 'api/geocoding-service/index',
			},
			items: ['api/location-service/administrative-api']
		}
	],
	// But you can create a sidebar manually

	// tutorialSidebar: [
	// 	'intro',
	// 	{
	// 		type: 'category',
	// 		label: 'Getting Starteds',
	// 		collapsed: false,
	// 		link: {
	// 			type: 'generated-index'
	// 		},
	// 		items: ['tutorial-basics/congratulations']
	// 	}
	// ]
};

export default sidebars;
