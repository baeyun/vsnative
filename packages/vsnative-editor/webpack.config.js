const path = require('path');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

const ENV_MODE = process.env.NODE_ENV || 'development';

module.exports = {
  mode: 'production',
  entry: './index.js',
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'vsnative-editor-build.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new MonacoWebpackPlugin()
  ]
};