const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { transpile } = require('typescript')

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
      pages: path.resolve(__dirname, '../src/pages/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@components': path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
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
        use: {
          loader: "ts-loader",
          // options: {
          //   transpileOnly: true,
          //   // speed up compilation significantly
          // }
        }
      }
    ]
  }
}

module.exports = webpackBaseConfig