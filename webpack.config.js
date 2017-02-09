const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'development'
});

module.exports = {
	context: path.join(__dirname, 'app'),
	entry: './entry',
	output: {
		path: path.join(__dirname, 'dest'),
		publicPath: '',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public',
		hot: true,
		proxy: {
			'/api/*': 'http://localhost:8080'
		},
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'OnkiBot',
			template: 'index.ejs'
		}),
		extractSass
	],
	module: {
		rules: [{
			test: /\.scss$/,
			loader: extractSass.extract({
				loader: [{
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}],
				fallbackLoader: "style-loader"
			})
		}]
	}
};
