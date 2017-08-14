const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    publicPath:"/"
  },
  devServer: {
    port: 3000,
    hot:true
  },
  devtool:"source-map",
  module: {
	  rules: [
	    { test: /\.js[x]?$/, exclude: /node_modules/, use: "babel-loader" },
      { test: /\.css$/, use: ['style-loader',"css-loader",'postcss-loader'] },
      { test: /\.(jpe?g|png)$/, use: 'file-loader' },
	  ]
	},
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserWebpackPlugin({
      url:'http://localhost:3000'
    }),
  ]
}
