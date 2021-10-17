const proxy = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    proxy("/api1", {
      target: "http://localhost:5000", //请求的地址
      changeOrigin: true, //控制服务器收到的host请求头的值，默认false,为true时为非真值
      pathRewrite: { "^/api1": "" }, //重写请求路径，去掉本地请求的前缀
    })
  )
}
