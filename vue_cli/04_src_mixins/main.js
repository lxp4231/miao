// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
// // 引入mixin
// import { mix } from "./mixin"
// // 注册全局的mixins混入
// Vue.mixin(mix)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  // render用来解析组件
  render: (h) => h(App),
})
