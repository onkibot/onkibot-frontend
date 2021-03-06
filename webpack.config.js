const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const debug = process.env.NODE_ENV !== 'production';

const extractSass = new ExtractTextPlugin({
	filename: '[name].css',
	disable: debug
});

module.exports = {
	context: path.join(__dirname, 'app'),
	entry: './entry',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public',
		proxy: {
			'/api/*': 'http://localhost:8080'
		},
		port: 3000
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'OnkiBot',
			template: 'index.ejs',
			favicon: '../public/images/onkiBot-logo-blue.png'
		}),
		extractSass
	].concat(debug ? [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	] : [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	]),
	module: {
		rules: [{
			test: /\.css$/,
			loader: extractSass.extract({
				use: 'css-loader',
				fallback: 'style-loader'
			})
		}, {
			test: /\.scss$/,
			loader: extractSass.extract({
				fallback: 'style-loader',
				use: 'css-loader!sass-loader',
				publicPath: 'dist'
			}),
			include: path.join(__dirname, 'app')
		}, {
			test: /\.js$/,
			loader: 'babel-loader',
			include: path.join(__dirname, 'app'),
			query: {
				presets: ['react', 'es2015', 'stage-0']
			}
		}]
	}
};
