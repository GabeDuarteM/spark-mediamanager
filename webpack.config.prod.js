var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var options = {
  entry: [
    path.join(__dirname, 'src/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'assets/js/[name]-[hash].min.js'
  },
  plugins: [
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
    new webpack.NoEmitOnErrorsPlugin()
  ],

  module: {

    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      enforce: 'pre',
      use: [{
        loader: 'standard-loader',
        options: {
          error: true,
          parser: 'babel-eslint'
        }
      }]
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{ loader: 'babel-loader' }]
    },
    {
      test: /\.css$/,
      // Extracts the css portion out of the js files. Increases performance.
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    }]
  },
  target: 'electron',
  bail: true
}

module.exports = options
