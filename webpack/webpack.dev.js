const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  // ログの出力を可能にする
  mode: 'development',

  // 開発用の環境ではホットロードを有効にする
  devServer: {
    hot: true,
    open: true
  },

  // バンドル後とバンドル前のソースコードの紐付けを行う
  // ブラウザのコンソールでエラーの確認を行うことができるようにする
  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas')
    }),
    new ReactRefreshWebpackPlugin(),
  ]
}