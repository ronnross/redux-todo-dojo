var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js',
  ],
  devtool: 'source-map',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!less',
      },
      {
        test: /\.(?:js|jsx)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel'],
      },
    ],
  },
};
