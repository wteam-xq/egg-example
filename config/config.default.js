'use strict';

module.exports = appInfo => {
  const config = exports = {};

  config.middleware = [ 'init', 'device' ];
  config.notfound = { pageUrl: '/404' };
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_2738452383347_3847';
  // 添加 view 配置
  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.tpl': 'nunjucks',
    },
  };
  return config;
};
