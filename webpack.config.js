const webpack = require('webpack');
const Path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './main.js',
  output: {
    path: Path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: 'add',
  },
  plugins: isProduction ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};
