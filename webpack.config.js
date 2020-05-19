const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = (env = {}) => ({
  mode: env.prod ? 'production' : 'development',
  devtool: env.prod ? 'source-map' : 'inline-source-map',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'vue': '@vue/runtime-dom',
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
      filename: 'index.html'
    })
  ],
  devServer: {
    publicPath: '/',
    inline: true,
    hot: true,
    stats: 'minimal',
    contentBase: __dirname,
    overlay: true,
    historyApiFallback: true
  }
})
