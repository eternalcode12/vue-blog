module.exports = {
  // 禁止语法检查
  lintOnSave: false,
  publicPath: '/',
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'style': '@/style',
        'api': '@/api'
      }
    }
  },
  devServer: {
    port: 8001,
    proxy: {
      '^/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
