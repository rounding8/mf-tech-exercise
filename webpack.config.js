
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path                 = require('path');

module.exports = {
  entry: ['@babel/polyfill', './src/index.jsx'],
  output: {
    path       : path.resolve(__dirname, 'dist'),
    filename   : 'bundle.js',
    publicPath : '/'
  },
  module: {
    rules: [
      {
        test : /\.css$/,
        use  : [{ loader: MiniCssExtractPlugin.loader }, 'css-loader']
      },
      {
        test    : /\.(js|jsx)$/,
        exclude : /node_modules/,
        use     : ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions : ['.css', '.js', '.jsx'],
    modules    : ['node_modules', 'public', 'src']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title    : 'MF Tech Exercise by Raven N. Allan',
      template : 'public/html/index.html'
    }),
    new MiniCssExtractPlugin('styles.css')
  ]
};
