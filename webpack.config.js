const path = require('path')
const WebpackNotifierPlugin = require('webpack-notifier')

process.noDeprecation = true

module.exports = {
  mode: "production",
  entry: {
    'index': './src/js/index.js',
    'test': './src/test/test.js',
    'server-test': './src/test/server-test.js'
  },
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    modules: [ 'node_modules', path.resolve('./src/'),  ],
    extensions: ['.js'],
  },
  externals: [
    {
      formidable: 'commonjs crypto',
    },
  ],
  plugins: [
    new WebpackNotifierPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }
        },
      },
    ]
  }
}
