// 此文件创建路由
//引入router
import VueRouter from "vue-router"
// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
// 创建并暴露一个路由器
export default new VueRouter({
  // 配置路由规则
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
    },
  ],
})
