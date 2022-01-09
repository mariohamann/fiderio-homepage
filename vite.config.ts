import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import AutoImport from 'unplugin-auto-import/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';
import { VitePWA } from 'vite-plugin-pwa';
import VueI18n from '@intlify/vite-plugin-vue-i18n';
import Markdown from 'vite-plugin-md';
import Prism from 'markdown-it-prism';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		Vue({
			include: [/\.vue$/, /\.md$/], // <--
		}),
		Components({
			extensions: ['vue', 'md'],

			// allow auto import and register components used in markdown
			include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
			dts: true,
			resolvers: [
				IconsResolver({
					prefix: 'icon',
				}),
			],
		}),
		Icons({
			compiler: 'vue3',
		}),
		AutoImport({
			dts: true,
			// targets to transform
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue\??/, // .vue
				/\.md$/,
			],

			// global imports to register
			imports: [
				// presets
				'vue',
				'vue-router',
				'vue-i18n',
				'@vueuse/core',
				'@vueuse/head',
				// custom
			],

			// custom resolvers
			// see https://github.com/antfu/unplugin-auto-import/pull/23/
			resolvers: [],
		}),
		Pages(),
		Layouts(),

		// https://github.com/antfu/vite-plugin-md
		Markdown({
			wrapperClasses: 'prose',
			headEnabled: false, // This relies on useHead
			markdownItSetup(md) {
				// https://prismjs.com/
				md.use(Prism);
			},
		}),
		VitePWA({
			includeAssets: [
				'favicon-16x16.png',
				'favicon-32x32.png',
				'favicon.ico',
				'robots.txt',
				'apple-touch-icon.png',
			],
			manifest: {
				name: 'Vitailse',
				short_name: 'Vitailse',
				description: 'Opinionated vite template with TailwindCSS',
				theme_color: '#076AE0',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					},
				],
			},
		}),
		VueI18n({
			runtimeOnly: true,
			compositionOnly: true,
			include: [resolve(__dirname, 'locales/**')],
		}),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	server: {
		fs: {
			strict: true,
		},
	},
	optimizeDeps: {
		include: ['vue', 'vue-router', '@vueuse/core', '@vueuse/head'],
		exclude: ['vue-demi'],
	},
	// @ts-ignore
	ssgOptions: {
		script: 'async',
		formatting: 'minify',
	},
});
