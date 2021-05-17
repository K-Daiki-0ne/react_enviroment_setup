// 本番環境用のWebpackの設定コード

module.exports = {
  // ログの出力を不可とする
  mode: 'production',

  // 本番環境用の高品質ソースマップ
  devtool: 'source-map'
}