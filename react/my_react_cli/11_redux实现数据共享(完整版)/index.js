// 引入react核心库
import React from "react"
// 引入ReactDOM
import ReactDOM from "react-dom"
import App from "./App"
import store from "./Redux/store" //在index.js入口文件中使用
import { Provider } from "react-redux"
// 渲染页面
ReactDOM.render(
  // Provider会把store传递给App中所有需要store的组件
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
)
// //直接在入口文件中监测状态变化，所有组件都被检测//使用了react-redux就不用了，用Provider自动检测
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.querySelector("#root"))
// })
