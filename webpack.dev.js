const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    contentBase:  './dist',
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
        path: './.env_prod'
    })
  ]
})