// 此文件为入口文件
// 引入Vue
import Vue from "vue"
//引入App
import App from "./App.vue"
Vue.config.productionTip = false
// element-ui按需引入
import { Button, Select, Row } from "element-ui"
Vue.use(Button)
Vue.use(Select)
Vue.use(Row)

new Vue({
  el: "#app",
  render: (h) => h(App),
})
