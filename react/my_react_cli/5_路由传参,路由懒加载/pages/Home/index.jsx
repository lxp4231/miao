import React, { Component } from "react"
import { Route, Redirect, Switch } from "react-router-dom"
import News from "./News"
import Message from "./Message"
import MyNavLink from "../../components/MyNavLink"
export default class index extends Component {
  render() {
    return (
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body" style={{ width: 231 }}>
            <div>
              <h2>Home组件内容</h2>
              <div>
                <ul className="nav nav-tabs">
                  <li>
                    <MyNavLink
                      to="/home/news"
                      className="list-group-item"
                      activeClassName="active"
                    >
                      News
                    </MyNavLink>
                  </li>
                  <li>
                    <MyNavLink
                      to="/home/message"
                      className="list-group-item"
                      activeClassName="active"
                    >
                      Message
                    </MyNavLink>
                  </li>
                </ul>
                <div>
                  {/* 注册路由 */}
                  <Switch>
                    <Route path="/home/news" component={News}></Route>
                    <Route path="/home/message" component={Message}></Route>
                    {/* 重定向 */}
                    <Redirect to="/home/news"></Redirect>
                  </Switch>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
