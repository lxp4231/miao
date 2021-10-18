import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import MyNavLink from "./components/MyNavLink"
import Header from "./components/Header"
export default class app extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <div className="list-group">
              {/* 封装路由组件，新建一个一般组件(类似于vue中插槽)，此标签体内容也属于props */}
              <MyNavLink to="/about" replace>
                About
              </MyNavLink>
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
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                  {/* 重定向 */}
                  {/* 加了Switch，匹配后就不再往下匹配 */}
                  <Redirect to="/about" />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
