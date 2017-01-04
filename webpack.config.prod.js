var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'assets/js/[name]-[hash].min.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),

    // Creates the index.html page based on the template and insert the assets in it.
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // Extracts the css portion out of the js files. Increases performance.
    new ExtractTextPlugin('assets/css/[name]-[hash].min.css'),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),

    // Uglify the Javascript files
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),

    // Removes the dist dir before building
    new CleanWebpackPlugin(['dist']),

    // Prevents emitting the bundle if the compilation/linting has failed
    new webpack.NoErrorsPlugin()
  ],

  module: {
    preLoaders: [
        { test: /\.jsx?$/, loader: 'standard', exclude: /(node_modules)/ }
    ],
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        // Extracts the css portion out of the js files. Increases performance.
        loader: ExtractTextPlugin.extract('style', 'css')
      }
    ]
  },
  standard: {
    parser: 'babel-eslint',
    emitErrors: true
  },
  bail: true
}
