let { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://ofas.herokuapp.com',
            // target: 'http://localhost:5000',
            cookieDomainRewrite: 'localhost',
            xfwd: true,
            changeOrigin: true,
            debug: true,
            secure: false,
            pathRewrite: {
                '^/api': ''
            }
        })
    );
};