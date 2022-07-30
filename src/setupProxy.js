const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/itgirlschool', {
      target: 'https://itgirlschool.justmakeit.ru',
      changeOrigin: true,
      pathRewrite: {
        '/itgirlschool': '',
      },
    })
  );
};