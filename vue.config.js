module.exports = {
  publicPath: './',
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        additionalData: '@import "~@/style/base.scss";'
      }
    }
  }
};
