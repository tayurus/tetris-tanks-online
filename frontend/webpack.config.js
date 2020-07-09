const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT = process.cwd();
const SRC = path.resolve(ROOT, './src');
const DIST = path.resolve(ROOT, './dist');

module.exports = {
  context: SRC,
  entry: './index.js',
  output: { path: DIST, filename: 'bundle-[hash].js' },

  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      { test: /\.(woff|eot|svg|png|woff2|ttf|mp3|wav)$/, loader: 'file-loader' },
    ],
  },

  resolve: {
    alias: {
      '@': SRC,
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      chunksSortMode: 'none',
    }),
  ],
};
