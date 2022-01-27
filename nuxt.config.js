export default {
	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	target: 'static',

	ssr: false,

	generate: {
		dir: 'public'
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Parasol Finance ($PSOL) | The First Community Governed IDO Platform on Solana.',
		htmlAttrs: {
			lang: 'en'
		},
		meta: [
  			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=0'},
			{name: 'twitter:image:src', content: 'https://parasol.finance/preview.png'},
			{name: 'twitter:card', content: 'summary_large_image'},
			{name: 'og:image', content: 'https://parasol.finance/preview.png'},
			{name: 'theme-color', content: '#7939FF'},
			{name: 'msapplication-navbutton-color', content: '#954FFF'},
			{name: 'apple-mobile-web-app-status-bar-style', content: '#954FFF'},
			{name: 'apple-mobile-web-app-capable', content: 'yes'},
			{
				hid: 'description',
				name: 'description',
				content: 'Parasol Finance is the first-ever community governed IDO platform built on Solana with the needs of both projects and investors alike.'
			},
			{
				hid: 'keywords',
				name: 'keywords',
				content: 'parasol,parasol finance,PSOL,defi,investment,farming,staking,solana staking,solana,sol,crypto,cryptocurrency,bitcoin,ethereum,sol price,sol price prediction,solana price,ethereum killer,dogecoin,doge'
			}
		],
		link: [
			{rel: 'icon', type: 'image/svg', href: '/favicon.svg'},
			{rel: 'prefetch', as: 'video', href: '~/assets/videos/1.mp4'},
			{rel: 'prefetch', as: 'video', href: '~/assets/videos/2.mp4'},
			{rel: 'prefetch', as: 'video', href: '~/assets/videos/3.mp4'},
			{rel: 'prefetch', as: 'video', href: '~/assets/videos/4.mp4'},
		],
		script: [
			{src: 'https://www.googletagmanager.com/gtag/js?id=G-6VTVXVGNCD', body: true}
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/scss/app.scss'
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{src: '~/plugins/web3.js', mode: 'client'},
		{src: '~/plugins/countdown.js', mode: 'client'}
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxtjs/tailwindcss',
		'@nuxtjs/pwa',
		'@nuxtjs/google-analytics',
		['vue-scrollto/nuxt', {
			offset: -50
		}],
	],

	tailwindcss: {
		viewer: false
	},

	pwa: {
		twitterCard: 'summary_large_image',
		twitterCreator: '@parasol_finance',
		author: 'Parasol Finance',
		manifest: {
			name: 'Parasol Finance',
			lang: 'en',
 			background_color: "#7939FF",
			theme_color: "#7939FF",
			useWebmanifestExtension: false
		}
	},

	googleAnalytics: {
		id: 'G-6VTVXVGNCD'
	},

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/axios'
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {}
}
