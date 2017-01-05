var webpack = require('webpack')
var express = require('express')
var devMiddleware = require('webpack-dev-middleware')
var hotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev')

var app = express()
var compiler = webpack(config)
var PORT = process.env.PORT || 3000

app.use(devMiddleware(compiler, {
  publicPath: config.output.publicPath,
  historyApiFallback: true,
  stats: {
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: false
  }
}))

app.use(hotMiddleware(compiler))

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:' + PORT + '/\n')
})
