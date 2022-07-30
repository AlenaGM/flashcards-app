
// eslint-disable-next-line no-undef
const { createProxyMiddleware } = require('http-proxy-middleware');

// eslint-disable-next-line no-undef
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/itgirlschool', {
      target: 'https://cors-everywhere.herokuapp.com/http://itgirlschool.justmakeit.ru',
      changeOrigin: true,
      pathRewrite: {
        '/itgirlschool': '',
      },
    })
  );
};
