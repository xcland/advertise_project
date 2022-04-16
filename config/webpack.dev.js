const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasureWebapckPlugin = require('speed-measure-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const webpackConfigBase = require('./webpack.base')
const mockMiddleWare = require('./mock.config')

const smp = new SpeedMeasureWebapckPlugin()

const PORT = 8080

const webpackDevConfig = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html')
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/`
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: PORT,
    before: function (app) {
      const projectDir = path.resolve()
      const mockDir = './mock'
      app.use(mockMiddleWare({ projectDir, mockDir }))
    }
  }
}

// module.exports = smp.wrap(merge(webpackConfigBase, webpackDevConfig))
module.exports = merge(webpackConfigBase, webpackDevConfig)