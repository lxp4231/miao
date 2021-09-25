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
              name: "message", //给路由取名，能简化路径
              path: "detail/:id/:title", //占位符
              component: Detail,

              //props的第一种写法(值为对象，不推荐)，该对象的值都会以props的形式传给detail组件
              // props: { a: "666", b: "study" },

              // props的第二种写法（只针对params传参）：props值为Boolean值，为true时，会把此路由收到的所有params参数以props的形式传给detail
              // props: true,

              // props的第三种写法：函数式(最强大)
              // props($route) {
              //   //参数为$route//以props的形式传给datail
              //   return { id: $route.params.id, title: $route.params.title } //以props的形式传给datail
              // },

              // 直接解构
              props({ params }) {
                //参数为$route，
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
