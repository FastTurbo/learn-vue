/**
 * Created by 502742374 on 2017/5/18.
 */
var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  entry: {
    index: './app/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.vue$/,
        use: ['babel-loader','vue-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.(jpg|png|ico)/,
        use:['url-loader']
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/'),
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}