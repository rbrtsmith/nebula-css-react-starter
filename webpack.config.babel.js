import webpack from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import autoprefixer from 'autoprefixer'

const common = {
  entry: path.resolve(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.jsx?$/, use: 'babel-loader' },
      {
        test: /\.s?css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'postcss-loader',
          options: {
            plugins: [ autoprefixer ]
          }
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, './node_modules/nebula-css')
            ]
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss', '.css']
  }
}

const dev = {
  devServer: {
    historyApiFallback: true
  },
  devtool: 'source-map'
}

const prod = {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      sourceMap: false
    })
  ]
}

const config = (env) => {
  switch (env) {
    case 'build':
      return merge(common, prod)
    case 'start':
      return merge(common, dev)
    default:
      return common
  }
}

export default config(process.env.npm_lifecycle_event)
