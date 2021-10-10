// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
// 引入Category作为全局组件
import Category from "./components/Category.vue"
// 注册全局组件
Vue.component(Category)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  // render用来解析组件
  render: h => h(App),
})
