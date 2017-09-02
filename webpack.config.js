const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');


const nodeModulesDir  = path.resolve(__dirname, 'node_modules');


module.exports = {
  entry: {
      signup: path.join(__dirname, 'client', 'get-started.js'),
      profile: path.join(__dirname, 'client', 'profile.js'),
      vendor: [
        path.join(__dirname, 'client/static/vendor/bootstrap/js/bootstrap.min.js'),
        path.join(__dirname, 'client/static/vendor/jquery/jquery.easing.min.js'),
      ]
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'client/static/vendor/jquery/jquery.min.js'),
    }
  },
  output: {
    path: path.join(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: ['babel-loader'],
        exclude: [nodeModulesDir]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
      },
      {
        test: /\.(jpe?g|gif|png|eot|svg|woff2?|ttf)$/,
        loader: 'file-loader'
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV||'dev')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    })
  ]
};