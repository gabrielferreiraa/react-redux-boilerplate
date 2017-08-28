'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  const preLoaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use.loader
  })

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(preLoaders)
  newConfig.resolve = common.resolve

  return newConfig
}
