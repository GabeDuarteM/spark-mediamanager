var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: ''
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // Creates the index.html page based on the template and insert the assets in it.
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    // Prevents emitting the bundle if the compilation/linting has failed
    new webpack.NoErrorsPlugin()
  ],
  module: {
    preLoaders: [
        { test: /\.jsx?$/, loader: 'standard', exclude: /(node_modules)/ }
    ],
    loaders: [
        { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'src') },
        { test: /\.css$/, loader: 'style!css', include: path.join(__dirname, 'src') }
    ]
  },
  standard: {
    parser: 'babel-eslint',
    emitErrors: true
  }
}
