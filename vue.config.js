const path = require('path')

module.exports = {
   devServer: {
     port: 8080,
   },
  publicPath: './',
  chainWebpack: config => {
    config.module.rules.delete('eslint');
    //禁用预加载，各个js文件需要时再下载
    config.plugins.delete('prefetch');
    
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/css/common/variable.scss";
          @import "@/assets/css/common/mixin.scss";

        `
      }
    }
  }
}