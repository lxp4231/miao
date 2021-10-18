// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
// 引入store
import store from "./store/index"
Vue.config.productionTip = false
new Vue({
  el: "#app",
  // store:store
  // 配置store
  store,
  // render用来解析组件
  render: (h) => h(App),
})
