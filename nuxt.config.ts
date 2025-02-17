// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	modules: [
		'@nuxtjs/eslint-module',
		'@nuxtjs/supabase',
		'@vueuse/nuxt',
		'@nuxtjs/tailwindcss',
		'shadcn-nuxt',
	],
	eslint: {
		// ESLint configuration options
		lintOnStart: false, // This can help avoid initial build errors
	},
});
