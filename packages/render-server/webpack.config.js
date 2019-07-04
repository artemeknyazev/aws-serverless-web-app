const path = require('path');
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  entry: path.resolve(__dirname, 'src', 'lambda.ts'),
  target: 'node',
  mode,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'lambda.js',
    libraryTarget: 'commonjs2'
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
