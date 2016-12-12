var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('html-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new CleanPlugin(['build']),
    new HtmlPlugin({
      template: 'src/index.ejs'
    })
  ],
  resolve: {
    root: path.join(__dirname, 'src'),
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.less?$/,
        loader: "style!css!less"
      }
    ]
  }
};
