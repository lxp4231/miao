/* eslint-disable no-const-assign */

import React, { Component } from "react"
// 引入react-redux的connect，用于链接redux与UI组件
import { connect } from "react-redux"
import {
  createIncrementAction,
  createDecrementAction,
  createDecrementSyncAction,
} from "../../Redux/actions/count"

// ui组件
class Count extends Component {
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
    return (
      <div>
        {/* 1.store.getState()获取状态 */}
        <h3>count组件</h3>
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
        <h4>下方组件的人数为：{this.props.person.length}</h4>
      </div>
    )
  }
}

// 容器组件
export default connect(
  state => ({
    //state为redux保存的状态
    count: state.countReducer,
    person: state.personReducer,
  }),
  {
    add: createIncrementAction,
    jian: createDecrementAction,
    syncAdd: createDecrementSyncAction,
  }
)(Count)
