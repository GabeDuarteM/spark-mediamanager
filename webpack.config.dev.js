var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var options = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    // Creates the index.html page based on the template and insert the assets in it.
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    // Prevents emitting the bundle if the compilation/linting has failed
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      enforce: 'pre',
      exclude: /node_modules/,
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
      include: path.join(__dirname, 'src'),
      use: [{ loader: 'babel-loader' }]
    },
    {
      test: /\.css$/,
      include: path.join(__dirname, 'src'),
      use: [ 'style-loader', 'css-loader' ]
    }]
  },
  target: 'electron'
}

module.exports = options
