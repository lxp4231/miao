// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
Vue.config.productionTip = false
new Vue({
  el: "#app",
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线(在Vue这个构造函数原型上添加属性，this是实例对象)
  },
  // render用来解析组件
  render: (h) => h(App),
})
