const path = require('path');

module.exports = {
  entry: {
    'notfound':  './app_dev/notfound/notfound.js', // 入口起点，可以指定多个入口起点
  },
  output: { // 输出，只可指定一个输出配置
    filename: '[name].js', // 输出文件名
    path: path.resolve(__dirname, 'app/public/js') // 输出文件所在的目录
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'app/public/js') // 设置静态资源的根目录
  },
  module: { // 如何处理项目中不同类型的模块
    rules: [{
			test: /\.scss$/,
			use: [{
				loader: "style-loader" // 将 JS 字符串生成为 style 节点
			}, {
				loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
			}, {
				loader: "sass-loader" // 将 Sass 编译成 CSS
			}]
    }]
  }
};