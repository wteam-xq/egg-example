const path = require('path');

module.exports = {
  entry: { // 入口起点，可以指定多个入口起点
    'notfound':  './app_fe/notfound/notfound.js'
  },
  output: { // 输出，只可指定一个输出配置
    filename: '[name].js', // 输出文件名
    path: path.resolve(__dirname, 'app/public/webpack/js') // 输出文件所在的目录
  },
  module: { // 如何处理项目中不同类型的模块
    rules: [
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
        }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
        }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
        }]
      },
      { // 增加加载图片的规则
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: '../img/',
              publicPath: '/public/webpack/img/',
              name: '[name][hash].[ext]'
            }
          }
        ]
      },
      { // 增加 js ES6 解析规则
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      { // 增加 js ES6 解析规则
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ 'env' ],
          },
        },
      }
    ]
  }
};