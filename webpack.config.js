const webpack = require('webpack');
const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeModulesDir  = path.resolve(__dirname, 'node_modules');

module.exports = {
  entry: {
      signup: path.join(__dirname, 'client', 'get-started.js'),
      profile: path.join(__dirname, 'client', 'profile.js'),
      style: [
        path.join(__dirname, 'client/static/vendor/font-awesome/css/font-awesome.min.css'),
        path.join(__dirname, 'client/static/vendor/google/gfonts.css'),
        path.join(__dirname, 'client/static/vendor/google/gfonts-2.css'),
        path.join(__dirname, 'client/static/css/grayscale.css')
      ]
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: ['babel'],
        exclude: [nodeModulesDir],
        query: {
          cacheDirectory: 'babel_cache',
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({use: 'css-loader'})
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: path.join(__dirname, 'public', 'style.css'),
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV||'dev')
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};