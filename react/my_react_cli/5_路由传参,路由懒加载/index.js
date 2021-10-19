// 引入react核心库
import React from "react"
// 引入ReactDOM
import ReactDOM from "react-dom"
import App from "./App"
// 工作模式，vue中叫mode,hash模式，history模式
import { HashRouter } from "react-router-dom"
// 渲染页面
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector("#root")
)
