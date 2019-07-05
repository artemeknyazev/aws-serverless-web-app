const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const mode = process.env.NODE_ENV || 'development';
const isProduction = mode === 'production';

const webClientConfig = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  target: 'web',
  mode,
  output: {
    path: path.resolve(__dirname, 'build', 'web-client', 'static'),
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
        to: path.resolve(__dirname, 'build', 'web-client', 'static')
      },
      {
        from: path.resolve(__dirname, 'public', 'index.html'),
        to: path.resolve(__dirname, 'build', 'web-client', 'index.html')
      }
    ])
  ]
};

const renderServerConfig = {
  entry: path.resolve(__dirname, 'src', 'server', 'index.tsx'),
  target: 'node',
  mode,
  output: {
    path: path.resolve(__dirname, 'build', 'render-server'),
    filename: 'lambda.js',
    libraryTarget: 'commonjs'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  node: '10'
                },
                loose: true
              }
            ],
            '@babel/preset-react',
            '@babel/preset-typescript'
          ]
        }
      }
    ]
  }
};

module.exports = [webClientConfig, renderServerConfig];
