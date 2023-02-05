import { sveltekit } from '@sveltejs/kit/vite';

import type { UserConfig } from 'vite';

import topLevelAwait from 'vite-plugin-top-level-await';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		topLevelAwait({
			// The export name of top-level await promise for each chunk module
			promiseExportName: '__tla',
			// The function to generate import names of top-level await promise in each chunk module
			promiseImportName: (i) => `__tla_${i}`
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
