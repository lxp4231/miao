// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App组件集
import App from "./App.vue"
Vue.config.productionTip = false
new Vue({
  el: "#app",
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // render用来解析组件
  render: (h) => h(App),
})
