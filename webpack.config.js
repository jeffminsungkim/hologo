const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './dist/hologo.js',
  output: {
    filename: 'hologo.min.js'
  },
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: { warnings: false },
        output: { comments: false }
      }
    })
  ]
};
