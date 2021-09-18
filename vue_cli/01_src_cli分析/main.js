// 此文件为项目的入口文件
// 导入vue
import Vue from "vue"
// 引入App组件(为所有组件的父组件)
import App from "./App.vue"
// 阻止生产提示
Vue.config.productionTip = false

// 创建Vue实例对象，并自动引入到index.html中
new Vue({
  render: (h) => h(App),
  // 调用render进行解析模板（因为此文件是一个残缺的vue,不带模板解析器，需要用render进行解析）
  // render(h) {
  // return h(App)
  // },
}).$mount("#app")
