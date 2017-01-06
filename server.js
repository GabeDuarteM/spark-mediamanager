var webpack = require('webpack')
var express = require('express')
var devMiddleware = require('webpack-dev-middleware')
var hotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config.dev')
var path = require('path')

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

function clientSideRouter (req, res, next) {
  const filename = path.join(compiler.outputPath, 'index.html')
  compiler.outputFileSystem.readFile(filename, function (err, result) {
    if (err) {
      return next(err)
    }
    res.set('content-type', 'text/html')
    res.send(result)
    res.end()
  })
}

app.use('*', clientSideRouter)

app.listen(PORT, function (err) {
  if (err) {
    return console.error(err)
  }

  console.log('Listening at http://localhost:' + PORT + '/\n')
})
