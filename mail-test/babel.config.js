module.exports = api => {
	const isProd = process.env.NODE_ENV === 'production';
	const isTest = process.env.NODE_ENV === 'test';
	api.cache.forever();

	const presets = [
		'@babel/preset-env',
		[
			'@babel/preset-react',
			{
				runtime: 'automatic',
			},
		],
		'@babel/preset-typescript'
	];
	const plugins = [
		!isProd && !isTest && 'react-refresh/babel',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-proposal-class-properties',
		'babel-plugin-styled-components',
		'babel-plugin-jss-simple',
		'@babel/plugin-transform-runtime',
		"@babel/proposal-object-rest-spread"
	].filter(Boolean);

	return {
		presets,
		plugins
	}
}