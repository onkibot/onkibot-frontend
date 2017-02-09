var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.join(__dirname, 'app'),
	entry: './entry',
	output: {
		path: path.join(__dirname, 'dest'),
		publicPath: 'http://localhost:8080',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: "./public",
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
		})
	]
};
