'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.login);
  router.get('/login', controller.home.login);
  // 校验登录信息
  router.get('/api/check-user', controller.user.checkUser)
};
