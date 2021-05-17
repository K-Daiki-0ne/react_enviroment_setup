const webpack = require('webpack');

module.exports = {
  // ログの出力を可能にする
  mode: 'development',

  // バンドル後とバンドル前のソースコードの紐付けを行う
  // ブラウザのコンソールでエラーの確認を行うことができるようにする
  devtool: 'cheap-module-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas')
    })
  ]
}