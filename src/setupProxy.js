//SETTING PROXY MANUALLY TO COMMUNICATE WITH OUR NODE BACKEND

const proxy = require('http-proxy-middleware'); //npm install http-proxy-middleware --save

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};