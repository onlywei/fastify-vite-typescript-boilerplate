import { resolve } from 'node:path'
import viteReact from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
export default {
	root: resolve(import.meta.dirname, 'src/client'),
	plugins: [
		viteReact(),
	],
 };
