// 此文件为vue-cli的配置文件
module.exports = {
  pages: {
    index: {
      // page 的入口(指定入口文件)
      entry: "src/main.js", //默认
    },
  },
  //关闭语法检查
  lintOnSave: false,

  // 代理方式1
  //开启代理服务器(代理服务器本身就有的直接返回内容)
  // 此方式的两个缺点：1.代理服务器本身就有的直接返回代理服务器中的内容 2.一次只能代理一个
  // devServer: {
  //   proxy: "http://localhost:5000", //此处写代理的端口号 [ˈprɑːksi]
  // },
  // 代理方式2
  // 需要加前缀
  devServer: {
    proxy: {
      "/xs": {
        target: "http://localhost:5000",
        // WebSocket协议被设计可以在http协议的80和443端口上支持http代理和中介功能
        ws: true, //用于支持websocket
        changeOrigin: true, //用于控制请求头dehost值,默认为true,告诉target服务器一个非真域名
        //移除请求url的前缀，即移除xs为空，保证url为student,然后会自动拼接在target上
        pathRewrite: {
          "^/xs": "",
        },
      },
      "/qc": {
        target: "http://localhost:5001",
        ws: true, //用于支持websocket
        changeOrigin: true,
        pathRewrite: {
          "^/qc": "",
        },
      },
    },
  },
}
