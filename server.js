'use strict'

const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack/dev.config')

const PORT = 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: { colors: true }
}).listen(PORT, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('Listening on http://localhost:3000')
})
