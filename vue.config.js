module.exports = {
  // 禁止语法检查
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'style': '@/style'
      }
    }
  }
}
