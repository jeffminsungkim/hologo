const path = require("path");

module.exports = {
  mode: 'production',
  entry: './dist/hologo.js',
  output: {
    filename: 'hologo.min.js',
    path: path.resolve(__dirname, "dist"),
    library: 'hologo',
    libraryTarget: 'umd'
  }
};
