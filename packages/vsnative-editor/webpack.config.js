const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'vsnative-editor.build.js'
  },
  plugins: [
    new MonacoWebpackPlugin()
  ]
};