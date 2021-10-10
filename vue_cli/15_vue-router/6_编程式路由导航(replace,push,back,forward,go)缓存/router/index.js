// 此文件创建路由
//引入router
import VueRouter from "vue-router"
// 引入组件
import About from "../pages/About"
import Home from "../pages/Home"
import News from "../pages/News"
import Message from "../pages/Message"
import Detail from "../pages/Detail"
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
        //二级路由不加 /号
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              name: "detail", //给路由取名，能简化路径
              path: "detail/:id/:title", //占位符
              component: Detail,

              // 直接解构
              props({ params }) {
                //自动会传参为$route，
                return {
                  id: params.id,
                  title: params.title,
                }
              },
            },
          ],
        },
      ],
    },
  ],
})
