import * as glob from 'glob'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import useClientPlugin from './rollup-plugin-use-client.js'

// Note the .js extension

const input = {
	index: 'src/components/ui/index.ts',
	'main-layout': 'src/components/main-layout.tsx',
	...Object.fromEntries(
		glob
			.sync('src/components/ui/**/*.{ts,tsx}')
			.map((file) => [file.replace(/^src\/components\/ui\//, '').replace(/\.(ts|tsx)$/, ''), file])
	)
}

export default {
	input,
	output: [
		{
			dir: 'dist',
			format: 'esm',
			preserveModules: true,
			preserveModulesRoot: 'src'
		}
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		useClientPlugin(),
		typescript({
			tsconfig: './tsconfig.json',
			declaration: true,
			declarationDir: 'dist',
			outputToFilesystem: true
		}),
		babel({
			babelHelpers: 'bundled',
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			presets: ['@babel/preset-react', '@babel/preset-typescript']
		})
	],
	external: ['react', 'react-dom']
}
