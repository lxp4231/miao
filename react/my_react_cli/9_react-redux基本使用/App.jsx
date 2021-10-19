/* eslint-disable no-const-assign */
import React, { Component } from "react"
// 引入容器组件
import Count from "./container/index"
// import store from "./Redux/store"  //在index.js入口文件中给容器组件传递store
export default class app extends Component {
  render() {
    return (
      <div>
        {/* 通过props形式传递store,给容器组件 */}
        {/* <Count store={store} /> 使用provider传*/}
        <Count />
      </div>
    )
  }
}
