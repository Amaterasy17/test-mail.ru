import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import pkg from './package.json';

const extensions = [
	'.js', '.jsx', '.ts', '.tsx',
];

const name = 'RollupTypeScriptBabel';

export default {
	input: './src/index.tsx',


	external: [],

	plugins: [

		resolve({ extensions }),


		commonjs(),


		babel({ extensions, include: ['src/**/*'] }),
	],

	output: [{
		file: pkg.main,
		format: 'cjs',
	}, {
		file: pkg.module,
		format: 'es',
	}, {
		file: pkg.browser,
		format: 'iife',
		name,

		globals: {},
	}],
};

