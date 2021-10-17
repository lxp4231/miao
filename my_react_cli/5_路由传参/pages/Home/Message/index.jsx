import React, { Component } from "react"
import { Route, Link } from "react-router-dom"
import Detail from "./Detail"
export default class index extends Component {
  state = {
    msg: [
      { id: "001", title: "message1" },
      { id: "002", title: "message2" },
      { id: "003", title: "message3" },
    ],
  }
  render() {
    console.log(this.props)
    const { msg } = this.state
    return (
      <div>
        <ul>
          {msg.map(item => {
            return (
              <li key={item.id}>
                {/* 1.params形式传参   replace模式会替换上一个路径*/}
                <Link to={`/Home/Message/Detail/${item.id}/${item.title}`} replace>
                  {item.title}
                </Link>
                {/* 2.search形式传参(类似于query传参) */}
                {/* <Link to={`/Home/Message/Detail/?id=${item.id}&title=${item.title}`}>
                  {item.title}
                </Link> */}
                {/* 3.state传参 */}
                {/* <Link
                  to={{
                    pathname: "/Home/Message/Detail",
                    state: { id: item.id, title: item.title },
                  }}
                >
                  {item.title}
                </Link> */}
              </li>
            )
          })}
        </ul>
        {/* 1.params形式传参 */}
        <Route path="/Home/Message/Detail/:id/:title" component={Detail}></Route>
        {/* 2.search形式传参 */}
        {/* <Route path="/Home/Message/Detail/" component={Detail}></Route> */}
        {/* 3.state形式传参 */}
        {/* <Route path="/Home/Message/Detail/" component={Detail}></Route> */}
      </div>
    )
  }
}
