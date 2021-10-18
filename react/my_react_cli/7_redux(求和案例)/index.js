// 引入react核心库
import React from "react"
// 引入ReactDOM
import ReactDOM from "react-dom"
import App from "./App"
import store from "./Redux/store"
// 渲染页面
ReactDOM.render(<App />, document.querySelector("#root"))
//直接在入口文件中监测状态变化，所有组件都被检测
store.subscribe(() => {
  ReactDOM.render(<App />, document.querySelector("#root"))
})
