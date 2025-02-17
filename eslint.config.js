import eslintPluginPrettier from 'eslint-plugin-prettier';

export default {
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:nuxt/recommended',
		'prettier',
	],
	rules: {
		'no-unused-vars': 'warn',
		'no-undef': 'error',
	},
};
