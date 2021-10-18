/* eslint-disable no-const-assign */
import React, { Component } from "react"
export default class app extends Component {
  // 加
  increment = () => {
    const { value } = this.selectName
    this.props.add(value * 1)
  }
  // 减
  decrement = () => {
    const { value } = this.selectName
    this.props.jian(value * 1)
  }
  //奇数加
  incrementOdd = () => {
    const { value } = this.selectName
    if (this.props.count % 2 !== 0) {
      this.props.add(value * 1)
    }
  }
  // 等会加
  incrementAsync = () => {
    // 异步执行
    const { value } = this.selectName
    this.props.syncAdd(value * 1, 1000)
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {/* 1.store.getState()获取状态 */}
        <h4>当前求和为:{this.props.count}</h4>
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
