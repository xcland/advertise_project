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
      pages: path.resolve(__dirname, '../src/pages/'),
      '@utils': path.resolve(__dirname, '../src/utils/'),
      '@components': path.resolve(__dirname, '../src/components'),
      "@constants": path.resolve(__dirname, '../src/common/constants'),
      '@assets': path.resolve(__dirname, '../src/assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }
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