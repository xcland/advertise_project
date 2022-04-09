const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'
console.log(devMode)

const webpackBaseConfig = {
  entry: path.resolve(__dirname, '../src/index.jsx'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[hash].js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      pages: path.resolve(__dirname, '../src/pages')
    }
  },
  module: {
    rules: [
      {
        test: /\.js[x]/,
        use: 'babel-loader'
      },
      {
        test: /\.(css|scss)$/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(ts|tsx)$/,
        use: "ts-loader"
      }
    ]
  }
}

module.exports = webpackBaseConfig