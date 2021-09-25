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
const router = new VueRouter({
  // 路由器两种工作模式
  mode: "history", //切换到history模式
  // mode: "hash", //切换到hash模式(默认)

  // 配置路由规则
  routes: [
    {
      name: "About",
      path: "/about",
      component: About,
      meta: { title: "关于", isAuth: true },
    },
    {
      name: "Home",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      children: [
        //二级路由不加 /号
        {
          name: "News",
          path: "news",
          component: News,
          meta: { isAuth: true, title: "News" }, //配置mate

          //独享路由守卫(只有前置没有后置),！！！！(可以搭配全局后置路由守卫)
          beforeEnter: (to, from, next) => {
            //beforeEnter 进入之前
            if (to.meta.isAuth) {
              if (localStorage.getItem("school") == "liuxp") {
                next()
              }
              //加权限限制
              else {
                alert("school不对，无权限查看")
              }
            } else {
              next()
            }
          },
        },
        {
          name: "Message",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "Message" }, //配置mate
          children: [
            {
              name: "detail", //给路由取名，能简化路径
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

//全局前置路由守卫，！！！初始化被调用、路由切换之前被调用(接收三个参数to, from, next)
// router.beforeEach((to, from, next) => {
//   // console.log(from) //从哪
//   // console.log(to) //到哪
//   //法1.使用name做判断条件
//   if (to.name === "News" || to.name === "Message") {
//     if (localStorage.getItem("school") == "liuxp1") next()
//     //加权限限制
//     else {
//       alert("school不对，无权限查看")
//     }
//   } else {
//     next() //有next才能切换
//   }
//法2.给需要验证权限的，配置mate,
// if (to.meta.isAuth) {
//   if (localStorage.getItem("school") == "liuxp1") {
//     // document.title = to.meta.title || "系统"在这写或者在后置守卫写
//     next()
//   }
//   //加权限限制
//   else {
//     alert("school不对，无权限查看")
//   }
// } else {
//   next()
// }
// })

//全局后置路由守卫(接收两个参数to, from)
router.afterEach((to, from) => {
  // console.log("to", to)
  // console.log("from", from)

  // 使用eg:更改网页标题：title
  if (to.meta.title) {
    document.title = to.meta.title //添加title
  }
})
//
export default router
