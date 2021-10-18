// 此文件创建路由
//引入router
import VueRouter from "vue-router"
// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
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
      children: [
        //二级路由不加/
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
        },
      ],
    },
  ],
})
