
var webpack = require('webpack');
var path = require('path');

require('es6-promise').polyfill();

module.exports = {
  entry: {
    app: './src/app.js'
  },  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'build.js',
    publicPath: '/'
  },
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, ''),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader','css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]

};
