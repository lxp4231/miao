// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
//引入vue-router
import VueRouter from "vue-router"
// 使用vue-router
Vue.use(VueRouter)
// 引入路由
import router from "./router/index"
Vue.config.productionTip = false
new Vue({
  el: "#app",
  // 配置路由
  router,
  // render用来解析组件
  render: (h) => h(App),
})
