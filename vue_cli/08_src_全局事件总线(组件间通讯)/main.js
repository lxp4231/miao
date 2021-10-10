// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
Vue.config.productionTip = false
// 给Vue原型上添加属性或方法，VueComponent也能访问到
// Vue.extend({}) 为一个构造函数
// 法1
// const Demo = Vue.extend()
// const d = new Demo()
// // d就是VueComponent的实例对象
// Vue.prototype.x = d//
// 法2
// vm，vc实例上均可访问到：$on,$emit,...
new Vue({
  el: "#app",
  //法2 给vm的原型上添加，组件上均能访问到(实现所有组件之间传递数据)
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  },
  // render用来解析组件
  render: h => h(App),
})
// 全局事件总线可以实现父到子，兄弟之间，子到父的数据传递
