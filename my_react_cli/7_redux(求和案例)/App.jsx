/* eslint-disable no-const-assign */
import React, { Component } from "react"
// 引入redux，获取数据
import store from "./Redux/store"
// 引入action
import { createIncrementAction, createDecrementAction } from "./Redux/count_action"
export default class app extends Component {
  // state = {
  //   count: 0,
  // }//状态交给了redux，需要从redux中获取
  // componentDidMount() {
  //   // 页面一挂载就进行监测redux状态变化，调用render进行重新渲染
  //   store.subscribe(() => {
  //     //subscribe :只要状态改变就调用
  //     this.setState({}) //相当于间接调用 render，重新渲染
  //   })
  // }
  // 加
  increment = () => {
    const { value } = this.selectName
    // const { count } = this.state
    // this.setState({
    //   count: count + Number(value),
    // })
    //2. 调用dispatch执行
    // store.dispatch({ type: "increment", data: value * 1 })
    store.dispatch(createIncrementAction(value * 1))
  }
  // 减
  decrement = () => {
    const { value } = this.selectName
    // const { count } = this.state
    // this.setState({
    //   count: count - Number(value),
    // })
    // store.dispatch({ type: "decrement", data: value * 1 })
    store.dispatch(createDecrementAction(value * 1))
  }
  //奇数加
  incrementOdd = () => {
    const { value } = this.selectName
    // const { count } = this.state
    const count = store.getState()
    if (count % 2 !== 0) {
      store.dispatch(createIncrementAction(value * 1))
    }
  }
  // 等会加
  incrementAsync = () => {
    setTimeout(() => {
      this.increment()
    }, 1000)
  }
  render() {
    console.log(store)
    return (
      <div>
        {/* 1.store.getState()获取状态 */}
        <h4>当前求和为: {store.getState()}</h4>
        <select ref={c => (this.selectName = c)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.incrementOdd}>点击时奇数加</button>
        <button onClick={this.incrementAsync}>异步加(wait)</button>
      </div>
    )
  }
}
