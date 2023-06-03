module.exports = {
  publicPath: '/taiwanMusic2022/dist/',
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? 'dist/'
  //   : '/',
  // publicPath: '/2022/',
  devServer: {
    port: 8822, // 端口
  },
  lintOnSave: false, // 取消 eslint 验证
};
