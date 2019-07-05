const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const isProduction = mode === 'production';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  target: 'web',
  mode,
  output: {
    path: path.resolve(__dirname, 'build', 'static'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'public', 'static'),
        to: path.resolve(__dirname, 'build', 'static')
      },
      {
        from: path.resolve(__dirname, 'public', 'index.html'),
        to: path.resolve(__dirname, 'build', 'index.html')
      }
    ])
  ]
};
