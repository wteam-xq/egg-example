'use strict';

const Controller = require('egg').Controller;

class notfoundController extends Controller {
  async index(ctx) {
    await ctx.render('notfound.tpl', {
        title: '404',
        list: [
          { id: 1, title: 'this is news 1', url: '/news/1' },
          { id: 2, title: 'this is news 2', url: '/news/2' }
        ]
    });
  }
}

module.exports = notfoundController;
