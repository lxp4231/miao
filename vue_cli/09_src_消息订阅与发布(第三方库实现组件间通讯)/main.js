// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
Vue.config.productionTip = false
new Vue({
  el: "#app",
  // render用来解析组件
  render: (h) => h(App),
})
// 全局事件总线可以实现父到子，兄弟之间，子到父的数据传递
