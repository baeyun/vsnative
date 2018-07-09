const path = require('path')
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const ENV_MODE = process.env.NODE_ENV || 'development'

module.exports = {
  mode: ENV_MODE,
  entry: './src/index.js',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'vsnative-editor.build.js'
  },
  module: {
    rules: [
      // Babel transpile ES6 to ES5
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new MonacoWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'VSNative Editor',
      template: './src/index.html',
      filename: 'vsnative-editor.build.js',
      inject: true
    }),
    // Inline embed all javascript
    new ScriptExtHtmlWebpackPlugin({
      inline: /\.js$/
    })
  ]
}