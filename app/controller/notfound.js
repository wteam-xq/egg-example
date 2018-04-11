'use strict';

const Controller = require('egg').Controller;

class notfoundController extends Controller {
  async index(ctx) {
    // 必须保留状态码
    ctx.status = 404;
    const { location } = ctx;
    const pageUrl = ctx.href;
    const getMetaData = () => { // 头部元数据使用
      let metaData = {};
      let description;
      switch (location) {
        case 'id':
          description = 'Oopa! Halaman tidak ditemukan. Mungkin sudah kami hapus atau dipindahkan. Jika anda ingin memuat ulang, pergi ke halaman awal (homepage).';
          metaData = {
            title: 'Halaman tidak ditemukan',
            description: `${description}`,
            keywords: 'download film terbaru, nonton film online, download film sub Indo, download film gratis',
            og: {
              description,
            },
          };
          break;
        case 'in':
        default:
          description = 'Oops! This page couldn\'t be found. We may have deleted or moved this page. If you want to start over, go to the homepage.';
          metaData = {
            title: 'Page Not Found',
            description: `${description}`,
            keywords: 'download latest film, watch film online, download film subtitle indonesia, download film for free',
            og: {
              description,
            },
          };
          break;
      }
      metaData.og.url = pageUrl;
      [ metaData.canonical ] = pageUrl.split('?');
      return metaData;
    };
    await ctx.render('notfound.tpl', {
        pageId: 'notfound',
        metaData: getMetaData(),
        shadow: true,
        list: [
            { id: 1, title: 'this is news 1', url: '/news/1' },
            { id: 2, title: 'this is news 2', url: '/news/2' }
        ]
    });
  }
}

module.exports = notfoundController;
