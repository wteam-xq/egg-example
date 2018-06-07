'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    await ctx.render('home.tpl', {
      title: 'home',
    });
  }

  async login(ctx) {
    await ctx.render('login.tpl', {
      title: 'egg example login',
    });
  }
}

module.exports = HomeController;
