module.exports =  {
	entry: './js/app.js',
	output: {
		filename : './js/test.js'
	},
	module: {
		rules: [
			{test: /\.css$/, loaders: 'style-loader!css-loader'}
		]
	}
}