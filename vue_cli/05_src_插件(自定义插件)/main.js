// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App组件集
import App from "./App.vue"
// 引入插件
import plugins from "./plugins"
// 使用插件
Vue.use(plugins, 2, 4, 6)
Vue.config.productionTip = false
new Vue({
  el: "#app",
  // render用来解析组件
  render: (h) => h(App),
})
