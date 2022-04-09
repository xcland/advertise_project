const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpackConfigBase = require('./webpack.base')
const PORT = 8080

const webpackProdConfig = {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin({
      protectWebpackAssets: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[hash].css'
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React APP',
      filename: 'index.html',
      template: path.resolve(__dirname, '../src/index.html')
    }),

  ],
}

module.exports = merge(webpackConfigBase, webpackProdConfig)