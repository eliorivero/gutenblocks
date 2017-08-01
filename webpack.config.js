var webpack = require( 'webpack' ),
	NODE_ENV = process.env.NODE_ENV || 'development',
	path = require( 'path' ),
	webpackConfig = {
	entry: {
		fold: './fold/block.js'
	},
	output: {
		path: path.join( __dirname, 'build' ),
		filename: '[name].build.js'
	},
	module: {
		loaders: [
			{
				test: /.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin( {
			'process.env.NODE_ENV': JSON.stringify( NODE_ENV )
		} )
	]
};

if ( 'production' === NODE_ENV ) {
	webpackConfig.plugins.push( new webpack.optimize.UglifyJsPlugin() );
}

module.exports = webpackConfig;
