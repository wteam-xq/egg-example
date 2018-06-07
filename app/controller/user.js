'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 读取数据库校验 用户
  async checkUser(ctx) {
    let { userName, password, remember } = ctx.query;
    const { CONSTANT_SUCCEED, CONSTANT_ERROR } = ctx.statusObj;
    let loginMsg = { status: CONSTANT_SUCCEED, msg:'' };
    let checkObj = {
      name: userName,
      pass: password,
      keeplogin: remember
    };
    let loginSuccess = await ctx.service.user.login(checkObj);
    if (loginSuccess) {
      ctx.body = loginMsg;
      // 重定向到首页
      // console.log('login success');
    } else {
      loginMsg.status = CONSTANT_ERROR;
      loginMsg.msg = 'user name  or user password incorrect!';
      // 返回 json 信息
      ctx.body = loginMsg;
    }
  }

}

module.exports = UserController;
