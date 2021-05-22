// 本番環境用のWebpackの設定コード
const webpack = require('webpack');

module.exports = {
  // ログの出力を不可とする
  mode: 'production',

  // 本番環境用の高品質ソースマップ
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution')
    })
  ]
}