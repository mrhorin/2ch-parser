const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

process.noDeprecation = true

module.exports = {
  entry: {
    'index': './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  resolve: {
    modules: [ path.resolve('./src/') ],
    extensions: ['.js'],
  },
  plugins: [
    new WebpackNotifierPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
    ]
  }
}
