const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVars) => {
  const { env } = envVars;                            // 現在の環境
  const envConfig = require(`./webpack.${env}.js`);   // 現環境をに合わせて設定
  const config = merge(commonConfig, envConfig);      // 環境に合わせた設定と共通の設定をマージ
  return config;
}