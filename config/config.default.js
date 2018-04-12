'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1523171259979_9795';
  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  // config.webpack = {
  //   webpackConfigList: [require('../webpack.config.js')]
  // };
  // add your config here
  config.middleware = [];

  return config;
};
