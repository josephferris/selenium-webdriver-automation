'use strict'

const {resolve} = require('path')

const config = (env) => {
  return {
    devtool: env.prod ? 'source-map' : 'eval',
    context: resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
      filename: '[name].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod,
    },
    bail: env.prod,
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [{
            loader: 'babel-loader',
            options: { presets: ['es2015', 'stage-2'] }
          }],
        },
      ],
    },
    externals : {
      child_process: 'child_process',
      fs: 'fs',
      net: 'net',
      selenium: 'selenium-webdriver'
    }
  }
}

module.exports = config
