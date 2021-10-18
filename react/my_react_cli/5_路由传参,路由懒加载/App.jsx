import React, { Component } from "react"
import { Route, Redirect, Switch, lazy, Suspense } from "react-router-dom"
import Loading from "./pages/Loading"
// 路由懒加载 lazy
// import Home from "./pages/Home"
const Home = lazy(() => import("./pages/Home"))
// import MyNavLink from "./components/MyNavLink"
const MyNavLink = lazy(() => import("./components/MyNavLink"))
// import About from "./pages/About"
const About = lazy(() => import("./pages/About"))

export default class app extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
              <h2>React Router Demo</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 封装路由组件，新建一个一般组件(类似于vue中插槽)，此标签体内容也属于props */}
              <MyNavLink to="/about">About</MyNavLink>
              {/* 路由标签由Link改为NavLink， 点击时会动态追加activeClassName样式属性*/}
              <MyNavLink to="/home">Home</MyNavLink>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                {/* <h3>我是About的内容</h3> */}
                {/* 注册路由 */}
                <Switch>
                  {/* 外面包裹Suspense，用在路由加载之前显示 Loading不使用懒加载*/}
                  <Suspense fallback={<Loading />}>
                    <Route path="/about" component={About}></Route>
                    <Route path="/home" component={Home}></Route>
                    {/* 重定向 */}
                    {/* 加了Switch，匹配后就不再往下匹配 */}
                    <Redirect to="/about" />
                  </Suspense>
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
