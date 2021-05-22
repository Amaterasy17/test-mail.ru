const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
const ReactJssHmrPlugin = require('react-jss-hmr/webpack');
const webpack = require('webpack');

const publicPath = path.resolve(__dirname, 'public');
const srcPath = path.resolve(__dirname, 'src');
const isProd = process.env.NODE_ENV === 'production';

const plugins = [
	new HtmlWebpackPlugin({
		template: path.join(publicPath, 'index.html')
	}),
	// new ExtractJssPlugin("styles.css")
	!isProd && new ReactRefreshWebpackPlugin(),
	new ForkTsCheckerPlugin(),
	new webpack.ProvidePlugin({
		"React": "react",
		"ReactDOM": 'react-dom',
	}),
].filter(Boolean);


module.exports = {
	entry: path.join(srcPath, 'index.tsx'),
	devtool: 'eval-source-map',
	output: {
		path:  path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	target: isProd ? 'browserslist' : 'web',
	module: {
		rules: [
			{
				test: /\.([tj])sx?$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(png|svg|jpg)$/,
				type: 'asset',
				parser: {
					dataUrlCondition: {
						maxSize: 3 * 1024 // 10kb
					}
				}
			}
		]
	},
	resolve: {
		extensions: ['.jsx', '.js', '.tsx', '.ts'],
		alias: {
			'@components': path.resolve(srcPath, 'components')
		},
		plugins: [
			new ReactJssHmrPlugin()
		],
		modules: [
			'node_modules'
		]
	},
	plugins,
	devServer: {
		host: 'localhost',
		port: 3000,
		hot: true,
		inline: true
	}
}