// webpack.config.js
const path = require('path');
const webpack = require('webpack');

const pathOutput = path.resolve(__dirname, 'dev');
const pathBuild = path.resolve(__dirname, 'build');
const env = process.env.NODE_ENV;
const isProd = env === 'production';
const libraryName = 'scheduler';
console.log('Environment isProd :', isProd);

const plugins = isProd ? 
[	
	new webpack.optimize.UglifyJsPlugin({
		sourceMap:false,
		compress: {
			drop_debugger: true,
			drop_console: true,
			screw_ie8: true
		},
		comments:false,
		mangle:false
	})
] : [
	new webpack.HotModuleReplacementPlugin()
];


const entry = isProd ? {app:'./src/scheduler.js'}
				: {app:'./dev/main.js'};
const output = isProd ? {
		path: pathBuild,
		filename: `./${libraryName}.js`,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	} : {
		filename:'bundle.js',
		path: pathOutput
	};

const devtool = 'source-map';

const config = {
	entry,
	devtool,
	devServer: {
		host:'0.0.0.0',
		contentBase: './dev',
		hot:true,
		disableHostCheck:true
	},
	plugins,
	output,
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['env']
				}
			}
		]
	}
}

module.exports = config;