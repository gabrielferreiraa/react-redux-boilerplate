'use strict'

const { join } = require('path')
const webpack = require('webpack')
const common = require('./common')

const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: [
    'babel-polyfill',
    common.entry.main
  ],

  output: common.output,

  plugins: [
    new CleanPlugin(['docs'], {
      root: join(__dirname, '..')
    }),
    new ExtractTextPlugin('[name]-[hash].css'),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),

    new webpack.optimize.UglifyJsPlugin(common.uglifyJsPluginConfig),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlPlugin(common.htmlPluginConfig)
  ].concat(
    process.env.ANALYZER ? new BundleAnalyzerPlugin() : []
  ),

  module: {
    rules: [
      common.standardPreLoader,
      common.jsLoader,
      common.cssLoader,
      common.fileLoader
    ]
  },

  resolve: common.resolve
}
