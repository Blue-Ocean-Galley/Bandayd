const path = require('path');

const SRC_DIR = path.join(__dirname, 'client');
const OUT_DIR = path.join(__dirname, 'client/dist');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    path: OUT_DIR,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test:/\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  mode: 'development',
  resolve: {
    extensions: ['.js', '.jsx', '.css']
  }
};
